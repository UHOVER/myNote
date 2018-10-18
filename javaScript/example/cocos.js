// 给sprite动态改变图片
// 首先将存放图片最外层文件夹命名为resources
changeBj: function(){
         var url = 'globalUI/video/gVideoPlayClick';
         var _this = this;
         cc.loader.loadRes(url,cc.SpriteFrame,function(err,spriteFrame){
            _this.isPlay.spriteFrame = spriteFrame;
        });
        
    }

// ****跳转****
cc.director.loadScene('HomePage');

// ****打印****
cc.log(变量);//输出日志（若输出固定文本，需要加上“”）
cc.director.loadScene('场景名称');//场景跳转

// *****节点的一些常用功能*****
var a = cc.find("Canvas/1").getComponent(cc.Sprite);//获取组件(该组件的getComponent里的类型必须存在)
var a = this.node.getPositionX();//获取节点的X轴位置
this.node.setPosition(x,y);//设置节点位置
this.node.setOpacity(20);//设置节点透明度（0~255）
this.node.color = new cc.color(100,100,100,255);//设置节点颜色（R,G,B,透明度）

// ****动画效果****
this.node.runAction(cc.moveTo(1,cc.p(0,0)));//移动当前节点（移动指定距离用moveBy）
this.node.runAction(cc.scaleTo(1,0.7,0.8));//缩放当前节点
this.node.runAction(cc.rotateTo(1,160,160));//旋转当前节点（旋转指定角度用rotateBy）
this.node.stopAllActions();//停止所有动作

if (cc.isValid(this.label.node) )//判定节点是否存在
this.node.destroy();//销毁节点

// *****计时器的一些运用*****
//计算1次的计时器,2秒后执行
        this.scheduleOnce(function(){
            this.doSomething();  
        },2);
//每隔5秒执行1次
        this.schedule(function(){
            this.doSomething();  
        },5);
//计算多次的计时器（1秒后，以0.1秒的执行间隔，执行10次）
        this.schedule(function(){
            this.doSomething();
        },0.1,10,1);
this.unscheduleAllCallbacks(this);//停止某组件的所有计时器

// *****音频的一些控制*****
cc.audioEngine.playMusic(this.BGAudio,true);//播放音乐（true代表循环）
cc.audioEngine.stopMusic()//停止播放背景音乐
cc.audioEngine.playEffect(this.ClickAudio,false);//播放音效（false代表只播放一次）
cc.audioEngine.stopEffect(音效变量名);//停止指定音效（需要先把音效赋值给变量）
cc.audioEngine.AllEffects();//停止所有音效
cc.audioEngine.setMusicVolume(参数);  //设置背景音乐的音量（该参数范围是0到1）
cc.audioEngine.setEffectsVolume(参数);  //设置音效的音量（该参数范围是0到1）

// ******数据存储******
cc.sys.localStorage.setItem('存储标识名',变量名);//存储存档数据
var a = cc.sys.localStorage.getItem('存储标识名');//读取存档数据
cc.sys.localStorage.removeItem('存储标识名');//擦除存档数据

this.node.getLocalZOrder();//层级获取
this.node.setLocalZOrder(1);//层级改变

// ****触摸监听(START：开始，MOVE：移动，END：结束，CANCEL：取消)****
this.node.on(cc.Node.EventType.TOUCH_MOVE,function(event){
    this.doSomething();
},this);  

var a = getID();//获取触点的ID
var a = event.getLocationX();//获取触摸点的坐标X

cc.find('canvas/map' + num)//读取带变量的路径

// ****定义数组****
var a= ['java','c++','c#'];
var a={}
var a=new Array(40);

// ****获得设备分辨率****
var b = cc.director.getWinSizeInPixels()
var bx = b.width
var by = b.height

node.active = false;//激活节点   

// ****包含其他脚本***
const Polyglot = require('polyglot');   
Polyglot.a = 1;   

// ****任意脚本里可定义全局变量****
window.G = {
    a: null,
    b: null,
};

//任意脚本里可访问全局变量（切记定义全局变量的那个脚本已执行过）
G.a = 0;
G.b = 0;

// ****函数****
Math.round(num)//四舍五入
Math.floor(num)//小于等级num的整数
Math.ceil(num)//大于等级num的整数