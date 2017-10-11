/**
  * 滑动按钮类
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  * 可以有图片，文字，动画
  */
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
var EToggleSwitch = (function (_super) {
    __extends(EToggleSwitch, _super);
    /**
    * switchOffName       图片
    * switchOnName        图片
    * switchBarName        图片
    * backFun       点击方法 如果需要在backFun中使用this的，小心使用这个
    * 注意：如果有动画的话，只有动画结束才会触发click事件
    */
    function EToggleSwitch(context, switchOffName, switchOnName, switchBarName, backFun, assetsName) {
        if (switchOffName === void 0) { switchOffName = ""; }
        if (switchOnName === void 0) { switchOnName = ""; }
        if (switchBarName === void 0) { switchBarName = ""; }
        if (backFun === void 0) { backFun = null; }
        if (assetsName === void 0) { assetsName = "assets"; }
        var _this = _super.call(this) || this;
        _this.assets = RES.getRes("assets"); //名称不一样的话需要修改
        _this.isPlayCartoon = false;
        _this.isSelected = false;
        _this.switchOffName = "";
        _this.switchOnName = "";
        _this.switchBarName = "";
        _this.param = { context: null, data: null }; //回调参数
        _this.param.context = context;
        _this.switchOffName = switchOffName;
        _this.switchOnName = switchOnName;
        _this.switchBarName = switchBarName;
        _this.init(backFun, assetsName);
        return _this;
    }
    EToggleSwitch.prototype.init = function (backFun, assetsName) {
        if (backFun === void 0) { backFun = null; }
        if (assetsName === void 0) { assetsName = "assets"; }
        this.backFun = backFun;
        this.switchOffImg = new egret.Bitmap();
        this.switchOnImg = new egret.Bitmap();
        this.switchBarImg = new egret.Bitmap();
        if (assetsName != "assets") {
            this.assets = RES.getRes(assetsName);
        }
        this.switchOffImg.texture = this.assets.getTexture(this.switchOffName);
        this.addChild(this.switchOffImg);
        this.switchOnImg.texture = this.assets.getTexture(this.switchOnName);
        this.addChild(this.switchOnImg);
        this.switchOnImg.alpha = 0;
        this.switchBarImg.texture = this.assets.getTexture(this.switchBarName);
        this.switchBarImg.x = 5;
        this.switchBarImg.y = this.switchOffImg.height / 2 - this.switchBarImg.height / 2 + 4;
        this.addChild(this.switchBarImg);
        this.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onbuttonTouchTap, this);
    };
    EToggleSwitch.prototype.onbuttonTouchTap = function (e) {
        if (this.isPlayCartoon) {
            return;
        }
        this.isPlayCartoon = true;
        var onComplete = function () {
            this.isPlayCartoon = false;
            this.isSelected = !this.isSelected;
            if (this.backFun != null) {
                this.backFun.apply(this.param.context, [this.param.data]);
            }
        };
        if (this.isSelected) {
            egret.Tween.get(this.switchBarImg).to({ x: 5 }, 400).call(onComplete, this);
            egret.Tween.get(this.switchOffImg).to({ alpha: 1 }, 400);
            egret.Tween.get(this.switchOnImg).to({ alpha: 0 }, 400);
        }
        else {
            egret.Tween.get(this.switchBarImg).to({ x: this.switchOffImg.width - this.switchBarImg.width - 6 }, 400).call(onComplete, this);
            egret.Tween.get(this.switchOffImg).to({ alpha: 0 }, 400);
            egret.Tween.get(this.switchOnImg).to({ alpha: 1 }, 400);
        }
    };
    //设置绑定数据
    EToggleSwitch.prototype.setBindData = function (data) {
        this.param.data = data;
    };
    //获取绑定数据
    EToggleSwitch.prototype.getBindData = function () {
        return this.param.data;
    };
    //是否打开
    EToggleSwitch.prototype.getSelected = function () {
        return this.isSelected;
    };
    return EToggleSwitch;
}(egret.DisplayObjectContainer));
__reflect(EToggleSwitch.prototype, "EToggleSwitch");
//# sourceMappingURL=EToggleSwitch.js.map