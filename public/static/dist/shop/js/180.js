(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[180],{"0ecca":function(e,t,a){"use strict";a("32c7b")},"1f31":function(e,t,a){"use strict";a.r(t);var o=a("eecf"),s=a("3152");for(var n in s)["default"].indexOf(n)<0&&function(e){a.d(t,e,(function(){return s[e]}))}(n);a("0ecca");var r=a("2877"),i=Object(r["a"])(s["default"],o["a"],o["b"],!1,null,"24f6c502",null);t["default"]=i.exports},3152:function(e,t,a){"use strict";a.r(t);var o=a("a553"),s=a.n(o);for(var n in o)["default"].indexOf(n)<0&&function(e){a.d(t,e,(function(){return o[e]}))}(n);t["default"]=s.a},"32c7b":function(e,t,a){},a553:function(e,t,a){var o=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=o(a("5530"));a("a434"),a("d81d"),a("e9c4");var n=o(a("0a52")),r=o(a("0659")),i=o(a("416b")),l={name:"index",components:{SelectorRegion:n.default,GoodsSelector:r.default,ShopNamePageList:i.default},data:function(){var e=this,t=function(t,a,o){"1"===e.model.state?a&&"0"!==a?a<0?o(new Error("满额包邮的费用最小值为0")):a>=Math.pow(10,8)?o(new Error("满额包邮的费用需小于1千万")):o():o(new Error("请正确填写满额包邮的费用")):o()};return{model:{state:"0",order_enough:null,enough_areas_code:null,is_participate:"0"},shop:{data:[],defaultNumber:10},region:{modal:!1,data:{}},selector:{modal:!1,data:[]},showMore:!1,rules:{order_enough:[{required:!0,validator:t}]},submitStatus:!1}},computed:{noManagePerm:function(){return!this.$getPermMap("sale.basic.free.manage")},getAreaText:function(){var e=this.model.enough_areas_code;return!!e&&e.text},getLimitStatus:function(){return!!this.showMore||this.selector.data.length>this.shop.defaultNumber}},mounted:function(){this.getData()},methods:{addShop:function(){this.selector.modal=!0},handleDelete:function(e){var t=this;this.selector.data.splice(e,1),this.$nextTick((function(){var e;null===(e=t.$refs["shop_name_list"])||void 0===e||e.reset()}))},handleSave:function(){var e=this;this.$refs["form"].validate((function(t){if(t){var a={order_enough:e.model.order_enough},o=e.model.state;if("0"===o)return a={state:o},void e.postData(a);"1"!==o||e.submitStatus||(e.submitStatus=!0,e.$refs.form.validate((function(t){e.submitStatus=!1,t&&(a.state=o,a.is_participate=e.model.is_participate,e.selector.data.length&&"2"!=a.is_participate&&(a.goods_ids=e.selector.data.map((function(e){return e.id}))),e.model.enough_areas_code&&(a.enough_areas_code=JSON.stringify(e.model.enough_areas_code)),e.postData(a))})))}}))},postData:function(e){var t=this;this.$api.marketApi.editMailFree(e).then((function(e){0===e.error&&(t.getData(),t.$Message.success("保存成功"))}))},showRegionModal:function(){this.region.data=this.model.enough_areas_code||{},this.region.modal=!0},regionSelectOk:function(e){e.provinces.length?this.model.enough_areas_code=e:this.model.enough_areas_code=null,this.regionSelectCancel()},regionSelectCancel:function(){this.region.modal=!1},selectorChange:function(e){var t=this;this.selector.data=e,this.$nextTick((function(){var e;null===(e=t.$refs["shop_name_list"])||void 0===e||e.reset()}))},selectorCancel:function(){this.selector.modal=!1},moreShop:function(){this.showMore=!0,this.shop.data=this.selector.data},stringToNum:function(e){return"string"===typeof e?parseFloat(e):null},getData:function(){var e=this;this.$api.marketApi.getMailFree().then((function(t){var a=t.error,o=t.enough_areas_code,n=t.goods,r=t.order_enough,i=t.state,l=t.is_participate;0===a&&(n||(n=[]),o=o?JSON.parse(o):null,e.model=(0,s.default)((0,s.default)({},e.model),{},{enough_areas_code:o,state:i,order_enough:e.stringToNum(r),is_participate:l||"0"}),e.selectorChange(n,!0))}))},radioChange:function(){this.selector.data=[]}}};t.default=l},eecf:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return s}));var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("kdx-content-bar",{scopedSlots:e._u([{key:"btn",fn:function(){return[a("Button",{staticClass:"primary-long",attrs:{disabled:e.noManagePerm},on:{click:e.handleSave}},[e._v("保存")])]},proxy:!0}])},[a("div",{staticClass:"market-full-mail"},[a("kdx-form-title",[e._v("满额包邮")]),a("Form",{ref:"form",attrs:{model:e.model,rules:e.rules,"label-width":140},nativeOn:{submit:function(e){e.preventDefault()}}},[a("FormItem",{staticClass:"r-form-item-checkbox",attrs:{label:"满额包邮："}},[a("RadioGroup",{model:{value:e.model.state,callback:function(t){e.$set(e.model,"state",t)},expression:"model.state"}},[a("Radio",{attrs:{disabled:e.noManagePerm,label:"1"}},[e._v("开启")]),a("Radio",{attrs:{disabled:e.noManagePerm,label:"0"}},[e._v("关闭")])],1),a("div",{directives:[{name:"show",rawName:"v-show",value:"1"===e.model.state,expression:"model.state === '1'"}],staticClass:"form-item-bg-box"},[a("FormItem",{staticClass:"form-item-full",attrs:{label:"满额包邮：",prop:"order_enough"}},[a("div",{staticClass:"flex"},[a("span",{staticClass:"ivu-input-group-prepend item-append"},[e._v("单笔订单满")]),a("kdx-rr-input",{staticClass:"width-250",attrs:{disabled:e.noManagePerm,number:"",fixed:2,"min-value":0,"max-value":9999999.99},model:{value:e.model.order_enough,callback:function(t){e.$set(e.model,"order_enough",t)},expression:"model.order_enough"}}),a("span",{staticClass:"ivu-input-group-append item-append"},[e._v("元")]),a("span",{staticClass:"marginL-10"},[e._v("包邮")])],1)]),a("FormItem",{attrs:{label:"不参与包邮地区："}},[a("Button",{staticClass:"default-primary",staticStyle:{display:"block"},attrs:{disabled:e.noManagePerm},on:{click:e.showRegionModal}},[e._v("选择地区")]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.getAreaText,expression:"getAreaText"}],staticClass:"region-text",staticStyle:{"margin-top":"10px"}},[e._v(e._s(e.getAreaText))])],1),a("FormItem",{attrs:{label:"指定商品："}},[a("RadioGroup",{on:{"on-change":e.radioChange},model:{value:e.model.is_participate,callback:function(t){e.$set(e.model,"is_participate",t)},expression:"model.is_participate"}},[a("Radio",{attrs:{disabled:e.noManagePerm,label:"2"}},[e._v("不限制")]),a("Radio",{attrs:{disabled:e.noManagePerm,label:"0"}},[e._v("以下商品不参与")]),a("Radio",{attrs:{disabled:e.noManagePerm,label:"1"}},[e._v("以下商品参与")])],1),"2"!==e.model.is_participate?a("div",[a("Button",{staticClass:"default-primary",staticStyle:{display:"block","margin-bottom":"10px"},attrs:{disabled:e.noManagePerm},on:{click:e.addShop}},[e._v("选择商品")]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.selector.data.length,expression:"selector.data.length"}],staticClass:"shop-list-box"},[a("shop-name-page-list",{ref:"shop_name_list",attrs:{list:e.selector.data},on:{"on-delete":e.handleDelete}})],1)],1):e._e()],1)],1)],1)],1)],1),a("selector-region",{attrs:{visible:e.region.modal,list:e.region.data},on:{"on-ok":e.regionSelectOk,"on-cancel":e.regionSelectCancel}}),a("goods-selector",{attrs:{multiple:!0,type:"0","current-list":e.selector.data},on:{"on-change":e.selectorChange,"on-cancel":e.selectorCancel},model:{value:e.selector.modal,callback:function(t){e.$set(e.selector,"modal",t)},expression:"selector.modal"}})],1)},s=[]}}]);