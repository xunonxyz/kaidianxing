(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[90],{"2aaa":function(t,e,a){},"33db":function(t,e,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("a9e3"),a("d3b7");var n={name:"RefundModal",props:{visible:{type:Number,default:0},data:{type:Object,default:function(){}}},data:function(){return{value:!1,isCan:!1,model:{type:"0",reason:""}}},watch:{visible:function(){this.value=!0}},methods:{handleCancel:function(){this.value=!1},handleOk:function(){if(!this.isCan){var t=this.model.type,e=this.data,a=e.id,n=e.refund_type,i=e.refund_info.order_goods_id,o={order_id:a};"2"==n&&(o.order_goods_id=i),this.isCan=!0,"2"===t?(this.model.reason&&(o.reject_reason=this.model.reason),this.submit("refundRejectOrder",o)):"1"===t?this.submit("manualRefund",o):this.submit("autoRefund",o)}},submit:function(t,e){var a=this;this.$api.orderApi[t](e).then((function(t){0===t.error&&(a.$Message.success("操作成功"),a.$parent.$parent.getData())})).finally((function(){a.value=!1,a.isCan=!1}))}}};e.default=n},"44c6":function(t,e,a){"use strict";a.r(e);var n=a("b581"),i=a("5d3e");for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("e906");var s=a("2877"),r=Object(s["a"])(i["default"],n["a"],n["b"],!1,null,"3239e905",null);e["default"]=r.exports},"54b3":function(t,e,a){var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("39c2")),o=n(a("7545")),s=n(a("f8a2")),r=n(a("ca29")),d=n(a("1c03")),l=n(a("fa75")),c=n(a("5791")),u={name:"index",mixins:[c.default],components:{RefundDetail:i.default,RefundModal:o.default,DistributorInformation:s.default,OrderDetailList:r.default,CommissionEdit:d.default,FormInfo:l.default},computed:{getCurrent:function(){var t=0;return-1===this.status&&(t=1),10!==this.status&&11!==this.status||(t=3),t+1}},watch:{status:function(t){this.step.lastTitle=0===t?"退款完成":10===t||11===t?"退款成功":"退款失败"}},data:function(){return{clickIndex:0}},methods:{clickTab:function(t){this.clickIndex=t}}};e.default=u},"5d3e":function(t,e,a){"use strict";a.r(e);var n=a("54b3"),i=a.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},7545:function(t,e,a){"use strict";a.r(e);var n=a("be09"),i=a("c98a");for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("ff543");var s=a("2877"),r=Object(s["a"])(i["default"],n["a"],n["b"],!1,null,"c018930a",null);e["default"]=r.exports},b581:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"order-detail-refund"},[a("Card",[a("Steps",{attrs:{current:t.getCurrent,status:t.getStatus}},[a("Step",{attrs:{title:"客户申请维权",content:t.refund_info.created_at}}),a("Step",{attrs:{title:"处理维权",content:t._f("getTime")(t.refund_info.seller_accept_time)}}),a("Step",{attrs:{title:t.step.lastTitle,content:t._f("getTime")(t.refund_info.finish_time)}})],1)],1),a("div",{staticClass:"order-detail-content"},[t.info.refund_info?a("refund-detail",{attrs:{data:t.info}},[a("refund-modal",{attrs:{visible:t.modal.refundModal,data:t.info}})],1):t._e()],1),a("div",{staticClass:"order-detail-con"},[a("ul",{staticClass:"detail_tab"},[a("li",{staticClass:"tab",class:{active:0==t.clickIndex},on:{click:function(e){return t.clickTab(0)}}},[t._v("商品信息")]),t.commission_info?a("li",{staticClass:"tab",class:{active:1==t.clickIndex},on:{click:function(e){return t.clickTab(1)}}},[t._v("分销商信息")]):t._e(),t.form.content?a("li",{staticClass:"tab",class:{active:2==t.clickIndex},on:{click:function(e){return t.clickTab(2)}}},[t._v("表单信息")]):t._e()]),t.form.content&&2==t.clickIndex?a("form-info",{attrs:{data:t.form.content,isShow:!1}}):t._e(),t.commission_info&&1==t.clickIndex?a("distributor-information",{attrs:{info:t.commission_info},on:{edit:t.editCommision}}):t._e(),0==t.clickIndex?a("order-detail-list",{attrs:{"is-refund":"",data:t.info},on:{"on-change-goods-info":t.changeGoodsInfo}}):t._e(),a("commission-edit",{attrs:{orderId:t.id,orderNo:t.orderNo,memberId:t.member_id,visible:t.visible},on:{"update:visible":function(e){t.visible=e},"on-success":t.getData}})],1)],1)},i=[]},be09:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("kdx-modal-frame",{attrs:{title:"维权处理",width:700},on:{"on-cancel":t.handleCancel,"on-ok":t.handleOk},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},[a("Form",{ref:"form",staticClass:"order-refund-detail-refund-modal",attrs:{"label-width":120}},[a("FormItem",{staticClass:"r-form-item-text",attrs:{label:"维权类型："}},[a("kdx-tag-label",{attrs:{type:"danger",size:"small"}},[t._v("仅退款")])],1),a("FormItem",{staticClass:"r-form-item-checkbox",attrs:{label:"处理方式："}},[a("RadioGroup",{model:{value:t.model.type,callback:function(e){t.$set(t.model,"type",e)},expression:"model.type"}},[a("Radio",{attrs:{label:"0"}},[t._v("自动退款")]),a("Radio",{attrs:{label:"1"}},[t._v("手动退款")]),a("Radio",{attrs:{label:"2"}},[t._v("驳回申请")])],1),a("kdx-hint-alert",{directives:[{name:"show",rawName:"v-show",value:"0"===t.model.type,expression:"model.type === '0'"}],attrs:{"show-icon":!1}},[a("p",[t._v("微信支付方式：会返回到相应的支付渠道(如零钱或银行卡)")]),a("p",[t._v("其他支付方式：会返回到微信钱包(需商户平台余额充足)")]),a("p",[t._v("如有余额抵扣：会返回金额到商城用户余额")]),a("p",[t._v("如有积分抵扣：申请维权的订单抵扣积分会返回到用户积分中")])]),a("kdx-hint-alert",{directives:[{name:"show",rawName:"v-show",value:"1"===t.model.type,expression:"model.type === '1'"}],attrs:{"show-icon":!1}},[a("p",[t._v("手动退款：订单会完成退款处理，您用其他方式进行退款")])])],1),a("FormItem",{directives:[{name:"show",rawName:"v-show",value:"2"===t.model.type,expression:"model.type === '2'"}],attrs:{label:"驳回原因："}},[a("Input",{staticClass:"width-430",attrs:{type:"textarea",maxlength:200,placeholder:"请输入"},model:{value:t.model.reason,callback:function(e){t.$set(t.model,"reason",e)},expression:"model.reason"}})],1)],1)],1)},i=[]},c98a:function(t,e,a){"use strict";a.r(e);var n=a("33db"),i=a.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},ca5d:function(t,e,a){},e906:function(t,e,a){"use strict";a("ca5d")},ff543:function(t,e,a){"use strict";a("2aaa")}}]);