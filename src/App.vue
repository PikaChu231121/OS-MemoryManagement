<template>
  <div class="memory">
    <el-container>
      <el-header style="height: 35px; display: flex; align-items: center;">
        <el-main style="flex: 1;" class="emphasize">请求调页存储管理方式模拟</el-main>
        <div>2253722张扬</div>
      </el-header>
      <el-divider style="margin-bottom: 0"></el-divider>
      <el-container>
        <el-aside width="300px" style="height: 630px; padding: 20px;">
          <p class="emphasize">作业指令总条数</p>
          <p>320</p>
          <p class="emphasize">每页存放指令数</p>
          <p>10</p>
          <p class="emphasize">作业占用内存页数</p>
          <p>4</p>
          <p class="emphasize">页面置换算法</p>
          <el-radio-group v-model="algorithm">
            <el-radio label="FIFO" :disabled="isExec"></el-radio>
            <el-radio label="LRU" :disabled="isExec"></el-radio>
          </el-radio-group>
          <p class="emphasize">下一条指令地址</p>
          <p>{{ nextInstruction == null ? '无' : nextInstruction }}</p>
          <p class="emphasize">缺页数</p>
          <p>{{ missingNum }}</p>
          <p class="emphasize">缺页率</p>
          <p>{{ missingRate }}%</p>
        </el-aside>
        <el-main style="padding: 20px;">
          <p class="emphasize">内存块页面显示</p>
          <el-container>
            <el-row :gutter="20">
              <el-col :span="6" v-for="(blockItem, index) in block" :key="index" style="width: 200px;">
                <div class="grid-content bg-purple">
                  <div class="common-layout">
                    <el-container class="el-card is-always-shadow box-card" :style="blockStyle[index]">
                      <el-header class="el-card__header">
                        <p>页号：{{ blockItem.num == null ? '无' : blockItem.num }}</p>
                      </el-header>
                      <el-divider style="margin: 0"></el-divider>
                      <div class="el-card__body" style="height: 340px; padding: 10px;">
                        <div class="transition-box" v-for="item in blockItem.pageList" :key="item"
                          :style="instructionStyle[item]">{{ item }}</div>
                      </div>
                    </el-container>
                  </div>
                </div>
              </el-col>
            </el-row>
          </el-container>
          <el-container style="padding-top: 40px;">
            <el-footer>
              <el-button @click="singleExec" :disabled="isDisabled1" type="primary" plain>单步执行</el-button>
              <el-button @click="continueExec" type="primary" plain>{{ execState }}</el-button>
              <el-button @click="allExec" :disabled="isDisabled1" type="primary" plain>全部执行</el-button>
              <el-button @click="reset" :disabled="isDisabled2" type="danger" plain>重置</el-button>
              <el-button @click="generateInstructions" :disabled="isDisabled2" type="success" plain>重新生成指令序列</el-button>
            </el-footer>
          </el-container>
        </el-main>
        <el-aside width="500px" style="padding: 20px;">
          <p class="emphasize">指令执行记录</p>
          <el-table :data="instructionRecord" highlight-current-row ref="table" height="500px" width="500px">
            <el-table-column prop="order" label="序号" width="90px"></el-table-column>
            <el-table-column prop="address" label="地址" width="90px"></el-table-column>
            <el-table-column prop="isLoss" label="是否缺页" width="90px"></el-table-column>
            <el-table-column prop="outPage" label="换出页" width="90px"></el-table-column>
            <el-table-column prop="inPage" label="换入页" width="90px"></el-table-column>
          </el-table>
        </el-aside>
      </el-container>
    </el-container>
  </div>
</template>


<script>
export default {
  name: 'App',
  data() {
    return {
      block: [{ num: null, pageList: [] }, { num: null, pageList: [] }, { num: null, pageList: [] }, { num: null, pageList: [] }], // 内存块
      blockStyle: [{}, {}, {}, {}], // 内存块样式
      instructionStyle: Array(320).fill(''), // 指令样式
      algorithm: 'FIFO', // 页面置换算法
      currentInstruction: null, // 当前指令
      nextInstruction: null, // 下一条指令
      missingNum: 0, // 缺页数
      missingRate: 0, // 缺页率
      execState: '连续执行', // 执行状态
      isDisabled1: false, // 执行按钮禁用状态
      isDisabled2: false, // 重置与指令生成按钮禁用状态
      instructionRecord: [], // 指令执行记录
      isExec: false, // 是否正在执行
      execInterval: '', // 执行间隔
      instructionList: [], // 指令序列
      execCount: 0, // 执行次数
      pageInstructions: [], // 每页指令序列
      FIFOQueue: [], // FIFO队列
      LRUList: [-1, -1, -1, -1] // LRU队列
    }
  },
  methods: {
    reset() { // 重置
      this.block = [{ num: null, pageList: [] }, { num: null, pageList: [] }, { num: null, pageList: [] }, { num: null, pageList: [] }];
      this.blockStyle = [{}, {}, {}, {}];
      this.instructionStyle = Array(320).fill('');
      this.algorithm = 'FIFO';
      this.currentInstruction = null;
      this.nextInstruction = this.instructionList[0];
      this.missingNum = 0;
      this.missingRate = 0;
      this.execState = '连续执行';
      this.instructionRecord = [];
      this.isDisabled1 = false;
      this.isDisabled2 = false;
      this.isExec = false;
      this.execInterval = '';
      this.execCount = 0;
      this.FIFOQueue = [];
      this.LRUList = [-1, -1, -1, -1];
    },
    singleExec() { // 单步执行
      this.execute();
    },
    continueExec() { // 连续执行
      if (this.execState === '执行结束') {
        return;
      }
      this.execState === '连续执行' ? this.execState = '暂停' : this.execState = '连续执行';
      this.isDisabled1 = !this.isDisabled1;
      this.isDisabled2 = !this.isDisabled2;
      if (this.isDisabled1) {
        this.execInterval = setInterval(this.execute, 100);
      } else {
        clearInterval(this.execInterval);
      }
    },
    allExec() { // 全部执行
      while (this.execCount < 320) {
        this.execute();
      }
      this.execute();
    },
    execute() { // 执行指令
      if (!this.isExec) // 开始执行，禁止切换置换算法
        this.isExec = true;
      if (this.execCount == 320) {
        this.execState = '执行结束';
        this.isDisabled1 = true;
        clearInterval(this.execInterval);
        return;
      }
      this.instructionStyle = Array(320).fill(''); // 清空先前的指令样式，防止样式错乱
      this.blockStyle = [{}, {}, {}, {}];
      this.currentInstruction = this.instructionList[this.execCount];
      this.nextInstruction = this.instructionList[this.execCount + 1];
      this.instructionStyle[this.currentInstruction] = { background: '#e1dfdf' };
      let pageNum = Math.floor(this.currentInstruction / 10);
      let isLoss = true;
      for (let i = 0; i < this.block.length; i++) { // 查询是否缺页
        if (this.block[i].num == pageNum) {
          isLoss = false;
          this.block[i].pageList = this.pageInstructions[pageNum];
          this.LRUList[i] = this.execCount;
          break;
        }
      }
      if (isLoss) { // 缺页则执行换页算法
        let outPage = null;
        this.missingNum++;
        this.missingRate = Math.floor(this.missingNum * 100 / (this.execCount + 1));
        let targetBlock = this.algorithm === 'FIFO' ? this.FIFO() : this.LRU();
        this.blockStyle[targetBlock] = { background: 'lightyellow' };
        outPage = this.block[targetBlock].num; // 换出页
        this.block[targetBlock].num = pageNum; // 换入页
        this.block[targetBlock].pageList = this.pageInstructions[pageNum];
        this.instructionRecord.unshift({
          order: this.execCount + 1,
          address: this.currentInstruction,
          isLoss: 'Yes',
          outPage: outPage,
          inPage: pageNum,
        });
      } else {
        this.missingRate = Math.floor(this.missingNum * 100 / (this.execCount + 1));
        this.instructionRecord.unshift({
          order: this.execCount + 1,
          address: this.currentInstruction,
          isLoss: 'No',
          outPage: '',
          inPage: '',
        });
      }
      this.execCount++;
    },
    FIFO() { // FIFO算法
      let blockID = null;
      for (let i = 0; i < this.block.length; i++) {
        if (this.block[i].num == null) {
          blockID = i;
          this.FIFOQueue.push(blockID);
          return blockID;
        }
      }
      blockID = this.FIFOQueue.shift();
      this.FIFOQueue.push(blockID);
      return blockID;
    },
    LRU() { // LRU算法
      let blockID = 0;
      let minLastUsed = this.LRUList[0];
      for (let i = 1; i < this.block.length; i++) {
        if (this.LRUList[i] < minLastUsed) {
          minLastUsed = this.LRUList[i];
          blockID = i;
        }
      }
      this.LRUList[blockID] = this.execCount;
      return blockID;
    },
    getRandomInt(min, max) { // 随机数生成器
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    generateInstructions() { // 指令生成器
      this.instructionList = [];
      let m = this.getRandomInt(0, 319);

      // 初始顺序执行
      this.instructionList.push(m);
      this.instructionList.push((m + 1) % 320);

      while (this.instructionList.length < 320) {
        // 跳转到前地址部分0-m-1中的某个指令处
        let m1 = this.getRandomInt(0, m - 1);
        this.instructionList.push(m1);
        if (this.instructionList.length < 320) {
          this.instructionList.push((m1 + 1) % 320);
        }

        if (this.instructionList.length >= 320) break;

        // 跳转到后地址部分m1+2~319中的某条指令处
        let m2 = this.getRandomInt(m1 + 2, 319);
        this.instructionList.push(m2);
        if (this.instructionList.length < 320) {
          this.instructionList.push((m2 + 1) % 320);
        }

        // 更新m
        m = m2;
      }

      this.nextInstruction = this.instructionList[0];
    },
  },
  mounted() { // 页面加载完成后初始化
    this.generateInstructions();
    for (let i = 0; i < 32; i++) {
      let tempArr = [];
      for (let j = 0; j < 10; j++) {
        tempArr.push(i * 10 + j);
      }
      this.pageInstructions.push(tempArr);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.emphasize {
  font-weight: bold;
  font-size: large;
}

.el-header,
.el-aside {
  position: relative;
  margin: 10px;
  border: 2px solid #c5c3d3;

  border-radius: 10px;
  -webkit-box-shadow: 0px 9px 5px 0px rgba(50, 50, 50, 0.28);
  -moz-box-shadow: 0px 9px 5px 0px rgba(50, 50, 50, 0.28);
  box-shadow: 0px 9px 5px 0px rgba(50, 50, 50, 0.28);
}


.grid-content {
  min-height: 200px;
  text-align: center;
  border-radius: 4px;
}

.common-layout {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.el-card {
  width: 100%;
}

.el-card__header {
  text-align: center;
}

.el-card__body {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}

.transition-box {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #c5c3d3;
  box-sizing: border-box;
  margin: 5px;
  border-radius: 3px;
}
</style>
