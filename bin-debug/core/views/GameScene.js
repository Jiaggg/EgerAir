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
  * 游戏场景类
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  * 目前包含三层：面板层、弹窗层、特效层
  */
var GameScene = (function (_super) {
    __extends(GameScene, _super);
    //构造方法
    function GameScene() {
        var _this = _super.call(this) || this;
        // 面板层 如 游戏开始结束界面之类的
        _this.uiLayer = new egret.DisplayObjectContainer();
        // 弹窗层 如 设置之类的
        _this.topLayer = new egret.DisplayObjectContainer();
        // 特效层 如 飘字之类的
        _this.effectLayer = new egret.DisplayObjectContainer();
        // 主UI层 如 底部功能栏
        _this.mainUILayer = new egret.DisplayObjectContainer();
        // 通讯遮罩层 
        _this.maskLayer = new egret.DisplayObjectContainer();
        // 旋转屏幕提示层 
        _this.rotationTipsLayer = new egret.DisplayObjectContainer();
        _this.init();
        return _this;
    }
    //初始化场景类
    GameScene.prototype.init = function () {
        this.addChild(this.uiLayer);
        this.addChild(this.topLayer);
        this.addChild(this.effectLayer);
        this.addChild(this.mainUILayer);
        this.addChild(this.maskLayer);
        this.addChild(this.rotationTipsLayer);
    };
    return GameScene;
}(egret.DisplayObjectContainer));
__reflect(GameScene.prototype, "GameScene");
//# sourceMappingURL=GameScene.js.map