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
  * 警告提示类
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  * 提示相关信息，或则选择判断
  * todo:九宫格、多动画、图字等
  */
var AlertPanel = (function (_super) {
    __extends(AlertPanel, _super);
    /**
    * titleStr       标题
    * descStr        描述
    * cancelFun      取消方法
    * acceptFun      确认方法
    * type           1：提示  2：选择是否
    */
    function AlertPanel(titleStr, descStr, cancelFun, acceptFun, type) {
        if (titleStr === void 0) { titleStr = ""; }
        if (descStr === void 0) { descStr = ""; }
        if (cancelFun === void 0) { cancelFun = null; }
        if (acceptFun === void 0) { acceptFun = null; }
        if (type === void 0) { type = 1; }
        var _this = _super.call(this) || this;
        _this.titleStr = "";
        _this.descStr = "";
        _this.type = 1;
        _this.titleStr = titleStr;
        _this.descStr = descStr;
        _this.cancelFun = cancelFun;
        _this.acceptFun = acceptFun;
        _this.type = type;
        _this.initUI();
        return _this;
    }
    // 初始化面板
    AlertPanel.prototype.initUI = function () {
        this.bg = new egret.Bitmap();
        this.bg.texture = this.assets.getTexture("alertBg");
        this.addChild(this.bg);
        this.bg.touchEnabled = true;
        if (this.titleStr != "") {
            this.titleTF = new egret.TextField();
            this.addChild(this.titleTF);
            this.titleTF.textColor = 0x000000;
            this.titleTF.size = 24;
            this.titleTF.width = this.bg.width;
            this.titleTF.height = 24;
            this.titleTF.y = 5 + 18;
            this.titleTF.textAlign = "center";
            this.titleTF.text = this.titleStr;
        }
        if (this.descStr != "") {
            this.descTF = new egret.TextField();
            this.addChild(this.descTF);
            this.descTF.textColor = 0x000000;
            this.descTF.size = 20;
            this.descTF.width = this.bg.width;
            this.descTF.height = 24;
            this.descTF.y = this.bg.height / 2 - this.descTF.height / 2 + 10;
            this.descTF.textAlign = "center";
            this.descTF.text = this.descStr;
        }
        var self = this;
        var onCancelBtnTouchTap = function (e) {
            if (self.cancelFun != null) {
                self.cancelFun();
            }
            Global.dispatchEvent(MainNotify.closeAlertNotify);
        };
        var onAcceptBtnTouchTap = function (e) {
            if (self.acceptFun != null) {
                self.acceptFun();
            }
            Global.dispatchEvent(MainNotify.closeAlertNotify);
        };
        this.acceptBtn = new EButton(this, "acceptBtn", onAcceptBtnTouchTap);
        this.addChild(this.acceptBtn);
        if (this.type == 1) {
            this.acceptBtn.x = this.bg.width / 2 - this.acceptBtn.width / 2;
            this.acceptBtn.y = this.bg.height - this.acceptBtn.height / 2 - 10;
        }
        else {
            this.cancelBtn = new EButton(this, "cancelBtn", onCancelBtnTouchTap);
            this.cancelBtn.x = 60 + 50;
            this.cancelBtn.y = this.bg.height - this.cancelBtn.height / 2 - 10;
            this.addChild(this.cancelBtn);
            this.acceptBtn.x = this.bg.width - this.acceptBtn.width - 60 - 50;
            this.acceptBtn.y = this.bg.height - this.acceptBtn.height / 2 - 10;
        }
    };
    AlertPanel.prototype.getWidth = function () {
        return this.bg.width;
    };
    AlertPanel.prototype.getHeight = function () {
        return this.bg.height;
    };
    return AlertPanel;
}(BasePanel));
__reflect(AlertPanel.prototype, "AlertPanel");
//# sourceMappingURL=AlertPanel.js.map