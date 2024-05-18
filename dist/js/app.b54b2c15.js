(function(){"use strict";var t={5543:function(t,e,i){var s=i(5130),n=i(6023),l=(i(5331),i(5074),i(9023),i(4880)),u=(i(2962),i(47)),r=(i(9648),i(4418)),a=(i(9149),i(7962)),o=(i(9486),i(83),i(4853),i(6810)),c=(i(4396),i(4885),i(8165)),h=(i(9973),i(7128),i(4968),i(6768)),d=i(4232);const p={class:"memory"},b=(0,h.Lk)("div",null,"2253722张扬",-1),f=(0,h.Lk)("p",{class:"emphasize"},"作业指令总条数",-1),g=(0,h.Lk)("p",null,"320",-1),m=(0,h.Lk)("p",{class:"emphasize"},"每页存放指令数",-1),k=(0,h.Lk)("p",null,"10",-1),x=(0,h.Lk)("p",{class:"emphasize"},"作业占用内存页数",-1),L=(0,h.Lk)("p",null,"4",-1),F=(0,h.Lk)("p",{class:"emphasize"},"页面置换算法",-1),y=(0,h.Lk)("p",{class:"emphasize"},"下一条指令地址",-1),I=(0,h.Lk)("p",{class:"emphasize"},"缺页数",-1),v=(0,h.Lk)("p",{class:"emphasize"},"缺页率",-1),_=(0,h.Lk)("p",{class:"emphasize"},"内存块页面显示",-1),C={class:"grid-content bg-purple"},R={class:"common-layout"},w={class:"el-card__body",style:{height:"340px",padding:"10px"}},O=(0,h.Lk)("p",{class:"emphasize"},"指令执行记录",-1);function S(t,e,i,s,S,E){const D=l.ZO,U=l.bZ,z=c.fR,M=o.ll,P=o.MQ,N=l.Mb,W=l.lX,j=a.uD,A=r.S2,Q=u.S2,X=l.LK,T=n.o8,K=n.Up;return(0,h.uX)(),(0,h.CE)("div",p,[(0,h.bF)(W,null,{default:(0,h.k6)((()=>[(0,h.bF)(U,{style:{height:"35px",display:"flex","align-items":"center"}},{default:(0,h.k6)((()=>[(0,h.bF)(D,{style:{flex:"1"},class:"emphasize"},{default:(0,h.k6)((()=>[(0,h.eW)("请求调页存储管理方式模拟")])),_:1}),b])),_:1}),(0,h.bF)(z,{style:{"margin-bottom":"0"}}),(0,h.bF)(W,null,{default:(0,h.k6)((()=>[(0,h.bF)(N,{width:"300px",style:{height:"630px",padding:"20px"}},{default:(0,h.k6)((()=>[f,g,m,k,x,L,F,(0,h.bF)(P,{modelValue:S.algorithm,"onUpdate:modelValue":e[0]||(e[0]=t=>S.algorithm=t)},{default:(0,h.k6)((()=>[(0,h.bF)(M,{label:"FIFO",disabled:S.isExec},null,8,["disabled"]),(0,h.bF)(M,{label:"LRU",disabled:S.isExec},null,8,["disabled"])])),_:1},8,["modelValue"]),y,(0,h.Lk)("p",null,(0,d.v_)(null==S.nextInstruction?"无":S.nextInstruction),1),I,(0,h.Lk)("p",null,(0,d.v_)(S.missingNum),1),v,(0,h.Lk)("p",null,(0,d.v_)(S.missingRate)+"%",1)])),_:1}),(0,h.bF)(D,{style:{padding:"20px"}},{default:(0,h.k6)((()=>[_,(0,h.bF)(W,null,{default:(0,h.k6)((()=>[(0,h.bF)(A,{gutter:20},{default:(0,h.k6)((()=>[((0,h.uX)(!0),(0,h.CE)(h.FK,null,(0,h.pI)(S.block,((t,e)=>((0,h.uX)(),(0,h.Wv)(j,{span:6,key:e,style:{width:"200px"}},{default:(0,h.k6)((()=>[(0,h.Lk)("div",C,[(0,h.Lk)("div",R,[(0,h.bF)(W,{class:"el-card is-always-shadow box-card",style:(0,d.Tr)(S.blockStyle[e])},{default:(0,h.k6)((()=>[(0,h.bF)(U,{class:"el-card__header"},{default:(0,h.k6)((()=>[(0,h.Lk)("p",null,"页号："+(0,d.v_)(null==t.num?"无":t.num),1)])),_:2},1024),(0,h.bF)(z,{style:{margin:"0"}}),(0,h.Lk)("div",w,[((0,h.uX)(!0),(0,h.CE)(h.FK,null,(0,h.pI)(t.pageList,(t=>((0,h.uX)(),(0,h.CE)("div",{class:"transition-box",key:t,style:(0,d.Tr)(S.instructionStyle[t])},(0,d.v_)(t),5)))),128))])])),_:2},1032,["style"])])])])),_:2},1024)))),128))])),_:1})])),_:1}),(0,h.bF)(W,{style:{"padding-top":"40px"}},{default:(0,h.k6)((()=>[(0,h.bF)(X,null,{default:(0,h.k6)((()=>[(0,h.bF)(Q,{onClick:E.singleExec,disabled:S.isDisabled1,type:"primary",plain:""},{default:(0,h.k6)((()=>[(0,h.eW)("单步执行")])),_:1},8,["onClick","disabled"]),(0,h.bF)(Q,{onClick:E.continueExec,type:"primary",plain:""},{default:(0,h.k6)((()=>[(0,h.eW)((0,d.v_)(S.execState),1)])),_:1},8,["onClick"]),(0,h.bF)(Q,{onClick:E.allExec,disabled:S.isDisabled1,type:"primary",plain:""},{default:(0,h.k6)((()=>[(0,h.eW)("全部执行")])),_:1},8,["onClick","disabled"]),(0,h.bF)(Q,{onClick:E.reset,disabled:S.isDisabled2,type:"danger",plain:""},{default:(0,h.k6)((()=>[(0,h.eW)("重置")])),_:1},8,["onClick","disabled"]),(0,h.bF)(Q,{onClick:E.generateInstructions,disabled:S.isDisabled2,type:"success",plain:""},{default:(0,h.k6)((()=>[(0,h.eW)("重新生成指令序列")])),_:1},8,["onClick","disabled"])])),_:1})])),_:1})])),_:1}),(0,h.bF)(N,{width:"500px",style:{padding:"20px"}},{default:(0,h.k6)((()=>[O,(0,h.bF)(K,{data:S.instructionRecord,"highlight-current-row":"",ref:"table",height:"500px",width:"500px"},{default:(0,h.k6)((()=>[(0,h.bF)(T,{prop:"order",label:"序号",width:"90px"}),(0,h.bF)(T,{prop:"address",label:"地址",width:"90px"}),(0,h.bF)(T,{prop:"isLoss",label:"是否缺页",width:"90px"}),(0,h.bF)(T,{prop:"outPage",label:"换出页",width:"90px"}),(0,h.bF)(T,{prop:"inPage",label:"换入页",width:"90px"})])),_:1},8,["data"])])),_:1})])),_:1})])),_:1})])}i(4114);var E={name:"App",data(){return{block:[{num:null,pageList:[]},{num:null,pageList:[]},{num:null,pageList:[]},{num:null,pageList:[]}],blockStyle:[{},{},{},{}],instructionStyle:Array(320).fill(""),algorithm:"FIFO",currentInstruction:null,nextInstruction:null,missingNum:0,missingRate:0,execState:"连续执行",isDisabled1:!1,isDisabled2:!1,instructionRecord:[],isExec:!1,execInterval:"",instructionList:[],execCount:0,pageInstructions:[],FIFOQueue:[],LRUList:[-1,-1,-1,-1]}},methods:{reset(){this.block=[{num:null,pageList:[]},{num:null,pageList:[]},{num:null,pageList:[]},{num:null,pageList:[]}],this.blockStyle=[{},{},{},{}],this.instructionStyle=Array(320).fill(""),this.algorithm="FIFO",this.currentInstruction=null,this.nextInstruction=this.instructionList[0],this.missingNum=0,this.missingRate=0,this.execState="连续执行",this.instructionRecord=[],this.isDisabled1=!1,this.isDisabled2=!1,this.isExec=!1,this.execInterval="",this.execCount=0,this.FIFOQueue=[],this.LRUList=[-1,-1,-1,-1]},singleExec(){this.execute()},continueExec(){"执行结束"!==this.execState&&("连续执行"===this.execState?this.execState="暂停":this.execState="连续执行",this.isDisabled1=!this.isDisabled1,this.isDisabled2=!this.isDisabled2,this.isDisabled1?this.execInterval=setInterval(this.execute,100):clearInterval(this.execInterval))},allExec(){while(this.execCount<320)this.execute();this.execute()},execute(){if(this.isExec||(this.isExec=!0),320==this.execCount)return this.execState="执行结束",this.isDisabled1=!0,void clearInterval(this.execInterval);this.instructionStyle=Array(320).fill(""),this.blockStyle=[{},{},{},{}],this.currentInstruction=this.instructionList[this.execCount],this.nextInstruction=this.instructionList[this.execCount+1],this.instructionStyle[this.currentInstruction]={background:"#e1dfdf"};let t=Math.floor(this.currentInstruction/10),e=!0;for(let i=0;i<this.block.length;i++)if(this.block[i].num==t){e=!1,this.block[i].pageList=this.pageInstructions[t],this.LRUList[i]=this.execCount;break}if(e){let e=null;this.missingNum++,this.missingRate=Math.floor(100*this.missingNum/(this.execCount+1));let i="FIFO"===this.algorithm?this.FIFO():this.LRU();this.blockStyle[i]={background:"lightyellow"},e=this.block[i].num,this.block[i].num=t,this.block[i].pageList=this.pageInstructions[t],this.instructionRecord.unshift({order:this.execCount+1,address:this.currentInstruction,isLoss:"Yes",outPage:e,inPage:t})}else this.missingRate=Math.floor(100*this.missingNum/(this.execCount+1)),this.instructionRecord.unshift({order:this.execCount+1,address:this.currentInstruction,isLoss:"No",outPage:"",inPage:""});this.execCount++},FIFO(){let t=null;for(let e=0;e<this.block.length;e++)if(null==this.block[e].num)return t=e,this.FIFOQueue.push(t),t;return t=this.FIFOQueue.shift(),this.FIFOQueue.push(t),t},LRU(){let t=0,e=this.LRUList[0];for(let i=1;i<this.block.length;i++)this.LRUList[i]<e&&(e=this.LRUList[i],t=i);return this.LRUList[t]=this.execCount,t},getRandomInt(t,e){return t=Math.ceil(t),e=Math.floor(e),Math.floor(Math.random()*(e-t+1))+t},generateInstructions(){this.instructionList=[];let t=this.getRandomInt(0,319);this.instructionList.push(t),this.instructionList.push((t+1)%320);while(this.instructionList.length<320){let e=this.getRandomInt(0,t-1);if(this.instructionList.push(e),this.instructionList.length<320&&this.instructionList.push((e+1)%320),this.instructionList.length>=320)break;let i=this.getRandomInt(e+2,319);this.instructionList.push(i),this.instructionList.length<320&&this.instructionList.push((i+1)%320),t=i}this.nextInstruction=this.instructionList[0]}},mounted(){this.generateInstructions();for(let t=0;t<32;t++){let e=[];for(let i=0;i<10;i++)e.push(10*t+i);this.pageInstructions.push(e)}}},D=i(1241);const U=(0,D.A)(E,[["render",S]]);var z=U,M=i(7402);i(4188);(0,s.Ef)(z).use(M.A).mount("#app")}},e={};function i(s){var n=e[s];if(void 0!==n)return n.exports;var l=e[s]={exports:{}};return t[s].call(l.exports,l,l.exports,i),l.exports}i.m=t,function(){var t=[];i.O=function(e,s,n,l){if(!s){var u=1/0;for(c=0;c<t.length;c++){s=t[c][0],n=t[c][1],l=t[c][2];for(var r=!0,a=0;a<s.length;a++)(!1&l||u>=l)&&Object.keys(i.O).every((function(t){return i.O[t](s[a])}))?s.splice(a--,1):(r=!1,l<u&&(u=l));if(r){t.splice(c--,1);var o=n();void 0!==o&&(e=o)}}return e}l=l||0;for(var c=t.length;c>0&&t[c-1][2]>l;c--)t[c]=t[c-1];t[c]=[s,n,l]}}(),function(){i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,{a:e}),e}}(),function(){i.d=function(t,e){for(var s in e)i.o(e,s)&&!i.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={524:0};i.O.j=function(e){return 0===t[e]};var e=function(e,s){var n,l,u=s[0],r=s[1],a=s[2],o=0;if(u.some((function(e){return 0!==t[e]}))){for(n in r)i.o(r,n)&&(i.m[n]=r[n]);if(a)var c=a(i)}for(e&&e(s);o<u.length;o++)l=u[o],i.o(t,l)&&t[l]&&t[l][0](),t[l]=0;return i.O(c)},s=self["webpackChunkmemory_management"]=self["webpackChunkmemory_management"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=i.O(void 0,[504],(function(){return i(5543)}));s=i.O(s)})();
//# sourceMappingURL=app.b54b2c15.js.map