(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[111],{"1ddc":function(t,e,o){var n=o("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 开店星新零售管理系统\n * @description 基于Yii2+Vue2.0+uniapp研发，H5+小程序+公众号全渠道覆盖，功能完善开箱即用，框架成熟易扩展二开\n * @author 青岛开店星信息技术有限公司\n * @link https://www.kaidianxing.com\n * @copyright Copyright (c) 2020-2022 Qingdao ShopStar Information Technology Co., Ltd.\n * @copyright 版权归青岛开店星信息技术有限公司所有\n * @warning Unauthorized deletion of copyright information is prohibited.\n * @warning 未经许可禁止私自删除版权信息\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-64e11330]{padding:%?32?% %?24?%;background-color:#fff;color:#212121;font-size:%?32?%;line-height:%?56?%}.container .title[data-v-64e11330]{font-weight:700;font-size:%?40?%;line-height:%?56?%;color:#212121}.container .time[data-v-64e11330]{padding-top:%?16?%;padding-bottom:%?32?%;font-size:%?24?%;line-height:%?34?%;color:#969696}',""]),t.exports=e},"422e":function(t,e,o){var n=o("1ddc");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=o("4f06").default;i("3ea46ef4",n,!0,{sourceMap:!1,shadowMode:!1})},"5b5e":function(t,e,o){var n=o("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(o("a64f")),a={mixins:[i.default],data:function(){return{id:"",title:"",time:"",detail:""}},mounted:function(){this.id=this.$Route.query.id,this.getNoticeDetail()},methods:{getNoticeDetail:function(){var t=this;this.$api.othersApi.getNoticeDetail({id:this.id}).then((function(e){0===e.error&&(t.title=e.data.title,t.time=e.data.created_at,t.detail=e.data.detail)}))},formatHtml:function(t){return t}}};e.default=a},"5bab":function(t,e,o){"use strict";o.r(e);var n=o("5b5e"),i=o.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){o.d(e,t,(function(){return n[t]}))}(a);e["default"]=i.a},"6e3b":function(t,e,o){"use strict";o.r(e);var n=o("953b"),i=o("5bab");for(var a in i)["default"].indexOf(a)<0&&function(t){o.d(e,t,(function(){return i[t]}))}(a);o("c515");var r,s=o("f0c5"),d=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"64e11330",null,!1,n["a"],r);e["default"]=d.exports},"953b":function(t,e,o){"use strict";var n;o.d(e,"b",(function(){return i})),o.d(e,"c",(function(){return a})),o.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("div",{staticClass:"title"},[t._v(t._s(t.title))]),o("div",{staticClass:"time"},[t._v(t._s(t.time))]),o("div",{staticClass:"content",domProps:{innerHTML:t._s(t.formatHtml(t.detail))}})])},a=[]},a64f:function(t,e,o){(function(t){var n=o("288e");o("8e6e"),o("ac6a"),o("456d"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,o("28a5");var i=n(o("bd86")),a=o("2f62"),r=n(o("fead")),s=(n(o("b531")),o("3014"));function d(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function l(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?d(Object(o),!0).forEach((function(e){(0,i.default)(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):d(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var c={created:function(){this.startTime=+new Date},data:function(){return{loadingFlg:0}},watch:{isSkeleton:function(t){t||++this.loadingFlg}},mounted:function(){t.error("组建的渲染时间："+this.__route__+"："+(+new Date-this.startTime))},computed:l(l({},(0,a.mapGetters)("loading",["isSkeleton"])),(0,a.mapState)("setting",{shareTitle:function(t){var e,o;return(null===(e=t.systemSetting)||void 0===e||null===(o=e.share)||void 0===o?void 0:o.title)||""},shareDesc:function(t){var e,o;return(null===(e=t.systemSetting)||void 0===e||null===(o=e.share)||void 0===o?void 0:o.description)||""},shareLogo:function(t){var e,o;return null===(e=t.systemSetting)||void 0===e||null===(o=e.share)||void 0===o?void 0:o.logo}})),methods:{handlerOptions:function(t){if(null!==t&&void 0!==t&&t.scene){for(var e=decodeURIComponent(decodeURIComponent(null===t||void 0===t?void 0:t.scene)).split("&"),o={},n=0;n<e.length;n++){var i=e[n].split("=");o[i[0]]=i[1]}null!==o&&void 0!==o&&o.inviter_id&&s.sessionStorage.setItem("inviter-id",o.inviter_id)}}},onPullDownRefresh:function(){var t=this;"function"==typeof this.pullDownRefresh&&this.pullDownRefresh(),setTimeout((function(){t.$closePageLoading()}),2e3)},onLoad:function(t){this.showTabbar=!0},onShow:function(){var t,e,o;uni.hideLoading(),r.default.setNavigationBarColor(this.$Route),this.$decorator.getPage(this.$Route.path).onLoad();var n,i,a,d,l=this.$Route.query;(null!==l&&void 0!==l&&l.inviter_id&&s.sessionStorage.setItem("inviter-id",l.inviter_id),this.$decorator.getDecorateModel({pagePath:this.$Route.path,otherdata:l}),null!==(t=this.pageInfo)&&void 0!==t&&t.gotop&&null!==(e=this.pageInfo.gotop.params)&&void 0!==e&&e.scrollTop)?this.$decorator.getPage(this.$Route).setPageInfo({gotop:{show:(null===(n=this.pageInfo.gotop)||void 0===n||null===(i=n.params)||void 0===i?void 0:i.scrollTop)>=(null===(a=this.pageInfo.gotop)||void 0===a||null===(d=a.params)||void 0===d?void 0:d.gotopheight)}},"pagemixin/onshow1"):null!==(o=this.pageInfo)&&void 0!==o&&o.gotop&&this.$decorator.getPage(this.$Route).setPageInfo({gotop:{show:!1,params:{scrolltop:0}}},"pagemixin/onshow2")},onHide:function(){this.$decorator.getPage(this.$Route).setPageInfo({gotop:{show:!1}},"pagemixin/onhide"),this.$closePageLoading()},onPageScroll:function(t){this.$decorator.getModule("gotop").onPageScroll(t,this.$Route)}};e.default=c}).call(this,o("5a52")["default"])},c515:function(t,e,o){"use strict";var n=o("422e"),i=o.n(n);i.a}}]);