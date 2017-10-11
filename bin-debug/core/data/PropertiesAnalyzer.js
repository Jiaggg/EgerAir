/**
 * Copyright (c) Egret-Labs.org. Permission is hereby granted, free of charge,
 * to any person obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish, distribute,
 * sublicense, and/or sell copies of the Software, and to permit persons to whom
 * the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included
 * in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
 * PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE
 * FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
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
var RES;
(function (RES) {
    // 读取本地数据，重度或重度游戏使用
    // 使用方式如下
    // resource.json填写
    // {"name":"ui_text","type":"prop","url":"assets/text/ui.properties"}
    // ui.properties填写
    // ok=确认
    // cancel=取消
    // main.ts填写
    // egret.Injector.mapClass(RES.AnalyzerBase,RES.PropertiesAnalyzer,RES.PropertiesAnalyzer.TYPE);
    // okButton.label = RES.getRes("ui_text.ok");
    var PropertiesAnalyzer = (function (_super) {
        __extends(PropertiesAnalyzer, _super);
        function PropertiesAnalyzer() {
            var _this = _super.call(this) || this;
            _this._dataFormat = egret.URLLoaderDataFormat.TEXT;
            return _this;
        }
        /**
         * @inheritDoc
         */
        PropertiesAnalyzer.prototype.getRes = function (name) {
            var tail = RES.AnalyzerBase.getStringTail(name);
            return this.fileDic[tail];
        };
        /**
         * 解析并缓存加载成功的数据
         */
        PropertiesAnalyzer.prototype.analyzeData = function (resItem, data) {
            if (!data) {
                return;
            }
            var str = data;
            var arr = str.split(new RegExp("\r\n", "gi"));
            var len = arr.length;
            for (var i = 0; i < len; i++) {
                var flag = arr[i].indexOf("=");
                if (flag > 1) {
                    this.fileDic[arr[i].substring(0, flag)] = arr[i].substring(flag + 1);
                }
            }
        };
        PropertiesAnalyzer.TYPE = "prop";
        return PropertiesAnalyzer;
    }(RES.BinAnalyzer));
    RES.PropertiesAnalyzer = PropertiesAnalyzer;
    __reflect(PropertiesAnalyzer.prototype, "RES.PropertiesAnalyzer");
})(RES || (RES = {}));
//# sourceMappingURL=PropertiesAnalyzer.js.map