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
/**
  * 分享类
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  * 一键分享到weixin、qqzone、sinaweibo、qq、renren、qqweibo、douban
  */
var ShareIconPanel = (function (_super) {
    __extends(ShareIconPanel, _super);
    function ShareIconPanel() {
        var _this = _super.call(this, "socialIcon") || this;
        _this.bg = new egret.Sprite();
        _this.shareIconRender = new ShareIconRender();
        _this.initUI();
        return _this;
    }
    // 初始化面板
    ShareIconPanel.prototype.initUI = function () {
        this.bg.graphics.beginFill(0x000000, 0.5);
        this.bg.graphics.drawRect(0, 0, this.w, this.h);
        this.bg.graphics.endFill();
        this.bg.width = this.w;
        this.bg.height = this.h;
        this.addChild(this.bg);
        this.bg.alpha = 0;
        this.bg.touchEnabled = true;
        this.bg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBgBtnTouchTap, this);
        egret.Tween.get(this.bg).to({ alpha: 1 }, 300);
        this.shareIconRender = new ShareIconRender();
        this.shareIconRender.y = this.h;
        this.addChild(this.shareIconRender);
        egret.Tween.get(this.shareIconRender).to({ y: this.h - this.shareIconRender.height + 60 }, 300, egret.Ease.backOut);
        this.descTF = new egret.TextField();
        this.descTF.size = 24;
        this.descTF.height = 140;
        this.descTF.width = 230;
        this.descTF.lineSpacing = 10;
        this.descTF.text = "请点击右上角\n将它发送给指定朋友\n或分享到朋友圈";
        this.descTF.x = this.w - this.descTF.width - 40;
        this.descTF.y = 120;
        this.descTF.textAlign = egret.HorizontalAlign.CENTER;
        this.addChild(this.descTF);
        this.descTF.alpha = 0;
        this.arrowImg = new egret.Bitmap();
        this.arrowImg.texture = this.assets.getTexture("arrow");
        this.arrowImg.x = this.w - this.arrowImg.width - 30;
        this.arrowImg.y = 20;
        this.addChild(this.arrowImg);
        this.arrowImg.alpha = 0;
        Global.addEventListener(MainNotify.updateShareNotify, this.onUpdateShare, this);
    };
    ShareIconPanel.prototype.onBgBtnTouchTap = function () {
        var onComplete = function () {
            Global.dispatchEvent(MainNotify.closeShareNotify);
        };
        this.descTF.alpha = 0;
        this.arrowImg.alpha = 0;
        egret.Tween.get(this.bg).to({ alpha: 0 }, 150).call(onComplete, this);
        egret.Tween.get(this.shareIconRender).to({ y: this.h }, 300);
    };
    ShareIconPanel.prototype.onUpdateShare = function (e) {
        var str = GameConfig.platformType();
        var btnName = e.param;
        switch (str) {
            case "micromessenger": {
                if (btnName == "micromessenger") {
                    this.descTF.text = "请点击右上角\n将它发送给指定朋友\n或分享到朋友圈";
                    this.descTF.x = this.w - this.descTF.width - 40;
                    this.descTF.y = 120;
                    egret.Tween.get(this.descTF).to({ alpha: 1 }, 150);
                    egret.Tween.get(this.arrowImg).to({ alpha: 1 }, 150);
                }
                else {
                    Global.shareUtils(btnName);
                    egret.Tween.get(this.bg).to({ alpha: 0 }, 150);
                }
                break;
            }
            case "qzone": {
                if (btnName == "micromessenger") {
                    EffectUtils.showTips("抱歉，暂不支持从空间直接分享到微信！");
                    egret.Tween.get(this.bg).to({ alpha: 0 }, 150);
                }
                else if (btnName == "qzone") {
                    this.descTF.text = "退出应用后\n从全部动态中转发吧";
                    this.descTF.x = this.w / 2 - this.descTF.width / 2;
                    this.descTF.y = this.h / 2 - this.descTF.height / 2;
                    egret.Tween.get(this.descTF).to({ alpha: 1 }, 150);
                }
                else {
                    Global.shareUtils(btnName);
                    egret.Tween.get(this.bg).to({ alpha: 0 }, 150);
                }
                break;
            }
            case "weibo": {
                if (btnName == "micromessenger") {
                    this.descTF.text = "请点击右上角\n将它发送给指定朋友\n或分享到朋友圈";
                    this.descTF.x = this.w - this.descTF.width - 40;
                    this.descTF.y = 120;
                    egret.Tween.get(this.descTF).to({ alpha: 1 }, 150);
                    egret.Tween.get(this.arrowImg).to({ alpha: 1 }, 150);
                }
                else if (btnName == "weibo") {
                    this.descTF.text = "退出应用后\n转发正文\n与朋友一块玩吧";
                    this.descTF.x = this.w / 2 - this.descTF.width / 2;
                    this.descTF.y = this.h / 2 - this.descTF.height / 2;
                    egret.Tween.get(this.descTF).to({ alpha: 1 }, 150);
                }
                else {
                    Global.shareUtils(btnName);
                    egret.Tween.get(this.bg).to({ alpha: 0 }, 150);
                }
                break;
            }
            case "qq": {
                if ((btnName == "micromessenger") || (btnName == "qzone") || (btnName == "qq")) {
                    this.descTF.text = "请点击右上角\n将它发送给朋友\n与朋友一块玩吧";
                    this.descTF.x = this.w - this.descTF.width - 40;
                    this.descTF.y = 120;
                    egret.Tween.get(this.descTF).to({ alpha: 1 }, 150);
                    egret.Tween.get(this.arrowImg).to({ alpha: 1 }, 150);
                }
                else {
                    Global.shareUtils(btnName);
                    egret.Tween.get(this.bg).to({ alpha: 0 }, 150);
                }
                break;
            }
            case "renren": {
                if (btnName == "micromessenger") {
                    EffectUtils.showTips("抱歉，暂不支持从空间直接分享到微信！");
                    egret.Tween.get(this.bg).to({ alpha: 0 }, 150);
                }
                else if (btnName == "renren") {
                    this.descTF.text = "请点击右上角\n将它发送给朋友\n与朋友一块玩吧";
                    this.descTF.x = this.w - this.descTF.width - 40;
                    this.descTF.y = 120;
                    egret.Tween.get(this.descTF).to({ alpha: 1 }, 150);
                    egret.Tween.get(this.arrowImg).to({ alpha: 1 }, 150);
                }
                else {
                    Global.shareUtils(btnName);
                    egret.Tween.get(this.bg).to({ alpha: 0 }, 150);
                }
                break;
            }
            case "txmicroblog": {
                if ((btnName == "micromessenger") || (btnName == "qzone") || (btnName == "qq")) {
                    this.descTF.text = "请点击右上角\n将它发送给朋友\n与朋友一块玩吧";
                    this.descTF.x = this.w - this.descTF.width - 40;
                    this.descTF.y = 120;
                    egret.Tween.get(this.descTF).to({ alpha: 1 }, 150);
                    egret.Tween.get(this.arrowImg).to({ alpha: 1 }, 150);
                }
                else {
                    Global.shareUtils(btnName);
                    egret.Tween.get(this.bg).to({ alpha: 0 }, 150);
                }
                break;
            }
            case "douban": {
                if (btnName == "micromessenger") {
                    EffectUtils.showTips("抱歉，暂不支持从空间直接分享到微信！");
                    egret.Tween.get(this.bg).to({ alpha: 0 }, 150);
                }
                else {
                    this.descTF.text = "请点击右上角\n将它发送给朋友\n与朋友一块玩吧";
                    this.descTF.x = this.w - this.descTF.width - 40;
                    this.descTF.y = 120;
                    egret.Tween.get(this.descTF).to({ alpha: 1 }, 150);
                    egret.Tween.get(this.arrowImg).to({ alpha: 1 }, 150);
                }
                break;
            }
            case "other": {
                Global.shareUtils(btnName);
                egret.Tween.get(this.bg).to({ alpha: 0 }, 150);
                break;
            }
            default: {
            }
        }
        egret.Tween.get(this.shareIconRender).to({ y: this.h }, 300);
    };
    return ShareIconPanel;
}(BasePanel));
__reflect(ShareIconPanel.prototype, "ShareIconPanel");
//# sourceMappingURL=ShareIconPanel.js.map