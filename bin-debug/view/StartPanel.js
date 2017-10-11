var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var StartPanel = (function (_super) {
    __extends(StartPanel, _super);
    function StartPanel() {
        return _super.call(this) || this;
    }
    // private inputTF:egret.TextField;
    // 初始化面板
    StartPanel.prototype.initPanel = function () {
        this.bg = new egret.Bitmap();
        this.bg.texture = this.assets.getTexture("bg");
        this.addChild(this.bg);
        this.bg.touchEnabled = true;
        this.logoImg = new egret.Bitmap();
        this.logoImg.texture = this.assets.getTexture("logoImg");
        this.logoImg.anchorOffsetX = this.logoImg.width / 2;
        this.logoImg.anchorOffsetY = this.logoImg.height / 2;
        this.logoImg.x = this.w / 2;
        this.logoImg.y = 60 + this.logoImg.height;
        this.addChild(this.logoImg);
        this.logoImg.visible = false;
        this.startBtn = new EButton(this, "startBtn");
        this.startBtn.x = this.w / 2 - this.startBtn.width / 2;
        this.startBtn.y = this.h / 2 - this.startBtn.height / 2;
        this.addChild(this.startBtn);
        this.startBtn.visible = false;
        this.startBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStartBtnTouchTap, this);
        this.helpBtn = new EButton(this, "helpBtn", null, "相机", 30, 1);
        this.helpBtn.x = 20;
        this.helpBtn.y = this.h - this.helpBtn.height - 20;
        this.addChild(this.helpBtn);
        this.helpBtn.visible = false;
        this.helpBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onHelpTouchTap, this);
        this.shopBtn = new EButton(this, "shopBtn", null, "分享", 30, 2);
        this.shopBtn.x = 150;
        this.shopBtn.y = this.h - this.shopBtn.height - 20;
        this.addChild(this.shopBtn);
        this.shopBtn.visible = false;
        this.shopBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onShopTouchTap, this);
        this.fbBtn = new EButton(this, "fbBtn", this.onFbTouchTap, "", 30, 3);
        this.fbBtn.x = 270;
        this.fbBtn.y = this.h - this.fbBtn.height - 20;
        this.addChild(this.fbBtn);
        this.fbBtn.visible = false;
        // okButton.label = RES.getRes("ui_text.ok");
        this.setBtn = new EButton(this, "setBtn", null, "确定", 30, 1);
        this.setBtn.x = this.w - this.setBtn.width - 20;
        this.setBtn.y = this.h - this.setBtn.height - 20;
        this.addChild(this.setBtn);
        this.setBtn.visible = false;
        this.setBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSetTouchTap, this);
        this.textTF = new ETextField();
        this.textTF.width = 350;
        this.textTF.setText("我是高级\n<font size='60' color='0x2bff00' i='true' b='false'>ETextField</font>组件<i>请使用</i>");
        this.textTF.x = this.w / 2 - this.textTF.width / 2;
        this.textTF.y = this.h - 280;
        this.addChild(this.textTF);
        var toggleSwitch = new EToggleSwitch(this, "switchOff", "switchOn", "switchBar");
        this.addChild(toggleSwitch);
        var tabBarCallBack = function (e) {
        };
        var tabBar = new ETabBar(this, "cancelBtn", "acceptBtn", tabBarCallBack, ["I", "am", "tab", "bar", "!"], 20);
        tabBar.x = this.w / 2;
        this.addChild(tabBar);
        this.initEffect();
        //如下代码是测试socket通讯的，需要的打开测试
        // SocketManager.connectServer("echo.websocket.org",80);
        // var socketFun:Function = function(e){
        //    Global.alert("提示","数据收到了："+JSON.stringify(e.param));
        // }
        // Global.addEventListener("uzwan_login",socketFun,this)
    };
    StartPanel.prototype.initEffect = function () {
        this.logoImg.y = -350;
        this.startBtn.alpha = 0;
        this.helpBtn.y = this.h + 150;
        this.shopBtn.y = this.h + 150;
        this.fbBtn.y = this.h + 150;
        this.setBtn.y = this.h + 150;
        var onComplete = function () {
            egret.Tween.get(this.startBtn).to({ alpha: 1 }, 300);
            egret.Tween.get(this.setBtn).to({ y: this.h - this.setBtn.height - 20 }, 300, egret.Ease.backOut);
            egret.Tween.get(this.fbBtn).to({ y: this.h - this.fbBtn.height - 20 }, 300, egret.Ease.backOut);
            egret.Tween.get(this.shopBtn).to({ y: this.h - this.shopBtn.height - 20 }, 300, egret.Ease.backOut);
            egret.Tween.get(this.helpBtn).to({ y: this.h - this.helpBtn.height - 20 }, 300, egret.Ease.backOut);
        };
        this.logoImg.visible = true;
        this.startBtn.visible = true;
        this.helpBtn.visible = true;
        this.shopBtn.visible = true;
        this.fbBtn.visible = true;
        this.setBtn.visible = true;
        egret.Tween.get(this.logoImg).to({ y: 60 + this.logoImg.height }, 600, egret.Ease.backOut).call(onComplete, this);
    };
    StartPanel.prototype.onStartBtnTouchTap = function (e) {
        Global.dispatchEvent(MainNotify.openGamePanelNotify, null, false);
        Global.dispatchEvent(MainNotify.closeStartPanelNotify, null, false);
    };
    StartPanel.prototype.onHelpTouchTap = function (e) {
        // EffectUtils.rotationEffect(this.helpBtn,1000);
    };
    StartPanel.prototype.onShopTouchTap = function (e) {
        // EffectUtils.removeRotationEffect(this.helpBtn);
        Global.share();
    };
    StartPanel.prototype.onFbTouchTap = function (e) {
        EffectUtils.shakeObj(this.fbBtn);
    };
    //如下代码是测试socket通讯的，需要的打开测试
    StartPanel.prototype.onSetTouchTap = function (e) {
        // SocketManager.sendMessage('{"cmd":"uzwan_login","gameId":"0","from":"guzwan","userId":"3565526"}')
    };
    return StartPanel;
}(BasePanel));
__reflect(StartPanel.prototype, "StartPanel");
//# sourceMappingURL=StartPanel.js.map