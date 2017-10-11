/**
  * 切换按钮
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
var ETabBar = (function (_super) {
    __extends(ETabBar, _super);
    /**
    * imgNormalName       图片
    * imgSelectName       图片
    * backFun       点击方法 如果需要在backFun中使用this的，小心使用这个
    * descStrArr    按钮描述数组
    * fontSize      字体大小
    * cartoonType   动画类型 1:【可爱】按下变小，放开弹大 2:按下变小，放开轻微弹大 3：按下变小，放开变大
    * 注意：如果有动画的话，只有动画结束才会触发click事件
    */
    function ETabBar(context, imgNormalName, imgSelectName, backFun, descStrArr, fontSize, cartoonType, assetsName) {
        if (backFun === void 0) { backFun = null; }
        if (descStrArr === void 0) { descStrArr = []; }
        if (fontSize === void 0) { fontSize = 30; }
        if (cartoonType === void 0) { cartoonType = 1; }
        if (assetsName === void 0) { assetsName = "assets"; }
        var _this = _super.call(this) || this;
        // private textField:egret.TextField;
        _this.assets = RES.getRes("assets"); //名称不一样的话需要修改
        _this.btnArr = [];
        _this.descStrArr = [];
        _this.isPlayCartoon = false;
        _this.cartoonType = 1;
        _this.isSelectIndex = 0;
        _this.imgNormalName = "";
        _this.imgSelectName = "";
        _this.param = { context: null, data: null }; //回调参数
        _this.param.context = context;
        _this.imgNormalName = imgNormalName;
        _this.imgSelectName = imgSelectName;
        _this.descStrArr = descStrArr;
        _this.init(context, backFun, descStrArr, fontSize, cartoonType, assetsName);
        return _this;
    }
    ETabBar.prototype.init = function (context, backFun, descStrArr, fontSize, cartoonType, assetsName) {
        if (backFun === void 0) { backFun = null; }
        if (descStrArr === void 0) { descStrArr = []; }
        if (fontSize === void 0) { fontSize = 30; }
        if (cartoonType === void 0) { cartoonType = 1; }
        if (assetsName === void 0) { assetsName = "assets"; }
        this.cartoonType = cartoonType;
        this.backFun = backFun;
        if (assetsName != "assets") {
            this.assets = RES.getRes(assetsName);
        }
        for (var i = 0; i < descStrArr.length; i++) {
            var btn = new EToggleButton(this, this.imgNormalName, this.imgSelectName, this.onSelectBack, descStrArr[i], fontSize, cartoonType, assetsName);
            btn.setBindData(i);
            btn.x = btn.width * i;
            this.addChild(btn);
            this.btnArr.push(btn);
            if (i == 0) {
                btn.setSelected(true);
                btn.setEnable(false);
            }
        }
    };
    ETabBar.prototype.onSelectBack = function (data) {
        this.retset();
        this.param.data = data;
        this.setSelectedIndex(data);
        this.backFun.apply(this.param.context, [this.param.data]);
    };
    //获得选中的index
    ETabBar.prototype.getSelectedIndex = function () {
        return this.isSelectIndex;
    };
    //设置选中的index
    ETabBar.prototype.setSelectedIndex = function (index) {
        if (index === void 0) { index = 0; }
        this.retset();
        this.btnArr[index].setSelected(true);
        this.isSelectIndex = index;
        this.btnArr[index].setEnable(false);
    };
    //设置绑定数据
    ETabBar.prototype.setBindData = function (data) {
        this.param.data = data;
    };
    //获取绑定数据
    ETabBar.prototype.getBindData = function () {
        return this.param.data;
    };
    ETabBar.prototype.retset = function () {
        for (var i = 0; i < this.descStrArr.length; i++) {
            var btn = this.btnArr[i];
            btn.setSelected(false);
            btn.setEnable(true);
        }
    };
    return ETabBar;
}(egret.DisplayObjectContainer));
__reflect(ETabBar.prototype, "ETabBar");
//# sourceMappingURL=ETabBar.js.map