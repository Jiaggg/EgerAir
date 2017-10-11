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
  * 加载类
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  * 加载主游戏资源
  */
var LoadingPanel = (function (_super) {
    __extends(LoadingPanel, _super);
    function LoadingPanel() {
        var _this = _super.call(this) || this;
        _this.bg = new egret.Sprite();
        _this.w = 0;
        _this.h = 0;
        _this.mySheet = RES.getRes("load");
        _this.createView();
        return _this;
    }
    LoadingPanel.prototype.createView = function () {
        this.w = egret.MainContext.instance.stage.stageWidth;
        this.h = egret.MainContext.instance.stage.stageHeight;
        this.bg.graphics.beginFill(0x313131, 1);
        this.bg.graphics.drawRect(0, 0, this.w, this.h);
        this.bg.graphics.endFill();
        this.bg.width = this.w;
        this.bg.height = this.h;
        this.addChild(this.bg);
        this.touchEnabled = true;
        this.pgBg = new egret.Bitmap;
        this.pgBg.texture = this.mySheet.getTexture("pgBg");
        this.pgBg.anchorOffsetX = this.pgBg.width / 2;
        this.pgBg.anchorOffsetY = this.pgBg.height / 2;
        this.pgBg.x = this.w / 2;
        this.pgBg.y = this.h / 2;
        this.addChild(this.pgBg);
        this.pgBar = new egret.Bitmap;
        this.pgBar.texture = this.mySheet.getTexture("pgBar");
        // this.pgBar.anchorOffsetX = this.pgBg.width/2;
        this.pgBar.anchorOffsetY = this.pgBg.height / 2;
        this.pgBar.x = this.pgBg.x - this.pgBg.width / 2 + 5;
        this.pgBar.y = this.h / 2 + 3;
        this.addChild(this.pgBar);
        this.textField = new egret.TextField();
        this.textField.size = 24;
        this.textField.textColor = 0xFFFFFF;
        this.textField.bold = true;
        this.textField.stroke = 1;
        this.textField.strokeColor = 0x000000;
        this.addChild(this.textField);
        this.textField.width = 100;
        this.textField.x = this.w / 2 - this.textField.width / 2;
        this.textField.y = this.h / 2 - this.textField.height / 2 - 10;
        this.textField.textAlign = "center";
        this.textField.text = "0%";
    };
    LoadingPanel.prototype.setProgress = function (current, total) {
        var rate = Math.round((current / total) * 100);
        this.textField.text = rate + "%";
        this.pgBar.width = 282 * (current / total);
    };
    return LoadingPanel;
}(egret.Sprite));
__reflect(LoadingPanel.prototype, "LoadingPanel");
//# sourceMappingURL=LoadingPanel.js.map