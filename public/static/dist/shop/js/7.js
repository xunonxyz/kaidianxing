(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"003c":function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return o}));var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"market-send-coupons-list"},[a("Table",{attrs:{columns:e.columns,data:e.data},scopedSlots:e._u([{key:"stock",fn:function(t){var a=t.row;return[e._v(" "+e._s("0"===a.stock_type?"不限制":parseInt(a.stock)-parseInt(a.get_total))+" ")]}}])})],1)},o=[]},"036a":function(e,t,a){"use strict";a.r(t);var n=a("ccad5"),o=a("824e");for(var s in o)["default"].indexOf(s)<0&&function(e){a.d(t,e,(function(){return o[e]}))}(s);a("90f3");var i=a("2877"),r=Object(i["a"])(o["default"],n["a"],n["b"],!1,null,"67577bd6",null);t["default"]=r.exports},"05af":function(e,t,a){},"0ae6":function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return o}));var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("kdx-modal-frame",{attrs:{value:e.value,title:"精选评价设置"},on:{"on-cancel":e.handleCancel,"on-ok":e.handleOk}},[a("div",{staticClass:"content"},[a("kdx-hint-alert",{staticClass:"alert"},[e._v("您将为本条评价设置为精选评价，设置权重后用户端优先展示精选评价内容")]),a("Form",{ref:"form",attrs:{model:e.model,"label-width":140},nativeOn:{submit:function(e){e.preventDefault()}}},[a("FormItem",{attrs:{label:"评价设置："}},[a("RadioGroup",{model:{value:e.model.is_choice,callback:function(t){e.$set(e.model,"is_choice",t)},expression:"model.is_choice"}},[a("Radio",{attrs:{label:1,disabled:e.noManagePerm}},[e._v("精选评价")]),a("Radio",{attrs:{label:0,disabled:e.noManagePerm}},[e._v("普通评价")])],1)],1),1==e.model.is_choice?a("FormItem",{attrs:{label:"权重值："}},[a("kdx-rr-input",{staticClass:"width-250",attrs:{placeholder:"请输入",number:"",fixed:0,minValue:1,maxValue:9999,disabled:e.noManagePerm},model:{value:e.model.sort_by,callback:function(t){e.$set(e.model,"sort_by",t)},expression:"model.sort_by"}}),a("kdx-hint-text",[e._v("最高9999, 数字越大, 排名越靠前")])],1):e._e()],1)],1)])},o=[]},"0d35":function(e,t,a){"use strict";a.r(t);var n=a("bb14"),o=a("6820");for(var s in o)["default"].indexOf(s)<0&&function(e){a.d(t,e,(function(){return o[e]}))}(s);a("ea96");var i=a("2877"),r=Object(i["a"])(o["default"],n["a"],n["b"],!1,null,"50bf1baf",null);t["default"]=r.exports},"468f":function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return o}));var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("kdx-modal-frame",{attrs:{value:e.value,title:"评价审核"},on:{"on-cancel":e.handleCancel,"on-ok":e.handleOk}},[a("div",{staticClass:"content"},[a("Form",{ref:"form",attrs:{model:e.model,"label-width":140},nativeOn:{submit:function(e){e.preventDefault()}}},[a("FormItem",{attrs:{label:"评价设置："}},[a("RadioGroup",{model:{value:e.model.status,callback:function(t){e.$set(e.model,"status",t)},expression:"model.status"}},[a("Radio",{attrs:{label:1,disabled:e.noManagePerm}},[e._v("审核通过")]),a("Radio",{attrs:{label:-1,disabled:e.noManagePerm}},[e._v("审核拒绝")]),a("Radio",{attrs:{label:0,disabled:""}},[e._v("审核中")])],1)],1)],1)],1)])},o=[]},"4acf":function(e,t,a){"use strict";a.r(t);var n=a("6caf"),o=a.n(n);for(var s in n)["default"].indexOf(s)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(s);t["default"]=o.a},"5ec9":function(e,t,a){var n=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a("5530")),s={name:"AuditComment",components:{},props:{value:{type:Boolean,default:!1},auditData:{type:Object,default:function(){}}},data:function(){return{model:{status:0}}},watch:{auditData:{handler:function(e){this.model=(0,o.default)({},e)}}},computed:{noManagePerm:function(){return!this.$getPermMap("order.comment.manage")}},created:function(){},mounted:function(){},methods:{handleCancel:function(){this.$emit("input",!1)},handleOk:function(){this.$emit("handleOk",this.model),this.handleCancel()}}};t.default=s},"626b":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAAeCAYAAAAGos/EAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAA4SURBVHgB3YsxDgAQEMDKIEZ+4MdGMYkf2iUOOa/QsU2RRuBgmWQpJCMVUfOwLDqOyO1qPOPDawNr1jQJbIusxQAAAABJRU5ErkJggg=="},6820:function(e,t,a){"use strict";a.r(t);var n=a("a7d8"),o=a.n(n);for(var s in n)["default"].indexOf(s)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(s);t["default"]=o.a},"69a7":function(e,t,a){},"6caf":function(e,t,a){var n=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a("5530")),s={name:"SiftComment",components:{},props:{value:{type:Boolean,default:!1},siftData:{type:Object,default:function(){}}},data:function(){return{model:{sort_by:"",is_choice:0,id:""},setData:{choice_status:1,comment_reward_status:1}}},watch:{siftData:{handler:function(e){this.model=(0,o.default)({},e)}}},computed:{noManagePerm:function(){return!this.$getPermMap("commentHelper.index.manage")||0==this.setData.choice_status}},created:function(){this.getSet()},mounted:function(){},methods:{getSet:function(){var e=this;this.$api.commentHelperApi.getSetting({}).then((function(t){var a;0===t.error&&(e.setData={choice_status:+t.data.choice_status,comment_reward_status:+(null===(a=t.data)||void 0===a?void 0:a.comment_reward_status)})}))},handleCancel:function(){this.$emit("input",!1)},handleOk:function(){var e=(0,o.default)({},this.model);0===e.is_choice&&delete e.sort_by,this.$emit("handleOk",e),this.handleCancel()}}};t.default=s},7016:function(e,t,a){var n=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a("2909")),s=n(a("5530"));a("d3b7"),a("ac1f"),a("1276"),a("a15b"),a("d81d"),a("a434");var i=n(a("88c8")),r=n(a("0d35")),l={name:"SiftComment",components:{CouponsList:i.default,CouponSelector:r.default},props:{value:{type:Boolean,default:!1},rewardData:{type:Object,default:function(){}}},data:function(){var e=this;return{selector:{value:!1,data:[]},setData:{choice_status:1,comment_reward_status:1},model:{rewards:["1"],coupon_id:"",credit:"",balance:"",is_reward:0,red_package:{money:"",expiry:"",blessing:""}},rule:{rewards:[{required:!0,message:"优惠奖励必选"}],coupon_id:[{validator:function(t,a,n){0==e.selector.data.length?n(new Error("优惠券必选")):e.selector.data.some((function(e){return 0==e.surplus&&0!=e.stock_type}))?n(new Error("优惠券库存不足请重新选择")):n()}}],credit:[{required:!0,message:"积分必填"}],balance:[{required:!0,message:"余额必填"}],"red_package.money":[{required:!0,message:"红包金额必填"}],"red_package.expiry":[{required:!0,message:"红包有效时间必填"}]}}},computed:{noManagePerm:function(){return!this.$getPermMap("commentHelper.index.manage")||0==this.setData.comment_reward_status||"1"==this.model.is_reward}},watch:{rewardData:{handler:function(e){var t,a,n;null!==e&&void 0!==e&&e.reward_content?(this.model=(0,s.default)((0,s.default)((0,s.default)({},e),e.reward_content),{},{rewards:e.reward_content.rewards.split(","),coupon_id:(null===(t=e.reward_content)||void 0===t||null===(a=t.coupon_id)||void 0===a?void 0:a.join(","))||""}),this.selector.data=(null===(n=e.reward_content)||void 0===n?void 0:n.coupon_info)||[]):(this.model.id=e.id,this.model.member_id=e.member_id,this.model.is_reward=e.is_reward)}}},created:function(){this.getSet()},mounted:function(){},methods:{getSet:function(){var e=this;this.$api.commentHelperApi.getSetting({}).then((function(t){var a;0===t.error&&(e.setData={choice_status:+t.data.choice_status,comment_reward_status:+(null===(a=t.data)||void 0===a?void 0:a.comment_reward_status)})}))},handleCancel:function(){this.$emit("input",!1),this.model={rewards:["1"],coupon_id:"",credit:"",balance:"",redpacket:"",red_package:{money:"",expiry:"",blessing:""}},this.selector={value:!1,data:[]}},handleOk:function(){var e=this;this.$refs.form.validate((function(t){if(t){var a=(0,s.default)({},e.model);a.rewards=a.rewards.join(","),a.coupon_id=a.coupon_id.split(","),delete a.coupon_info,e.$emit("handleOk",a),e.handleCancel()}}))},showSelector:function(){this.selector.value=!0},cancelSelector:function(){this.selector.value=!1},changeCouponList:function(e){this.selector.data=(0,o.default)(e);var t=this.selector.data.map((function(e){return e.id}));this.model.coupon_id=t.join(","),this.cancelSelector()},deleteCoupons:function(e){this.selector.data.splice(e,1);var t=this.selector.data.map((function(e){return e.id}));this.model.coupon_id=t.join(",")}}};t.default=l},"71b0":function(e,t,a){e.exports=a.p+"static/dist/shop/img/blessing.png"},"824e":function(e,t,a){"use strict";a.r(t);var n=a("7016"),o=a.n(n);for(var s in n)["default"].indexOf(s)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(s);t["default"]=o.a},"83bf":function(e,t,a){"use strict";a("05af")},"88c8":function(e,t,a){"use strict";a.r(t);var n=a("003c"),o=a("ac9f");for(var s in o)["default"].indexOf(s)<0&&function(e){a.d(t,e,(function(){return o[e]}))}(s);a("cc09");var i=a("2877"),r=Object(i["a"])(o["default"],n["a"],n["b"],!1,null,"ca8b90fc",null);t["default"]=r.exports},"90f3":function(e,t,a){"use strict";a("c150")},"98a6":function(e,t,a){},"9c12":function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={name:"CouponsList",props:{data:{type:Array,required:!0},disabled:{type:Boolean,default:!1},showStock:{type:Boolean,default:!1}},data:function(){return{columns:[]}},methods:{deleteCoupons:function(e){var t=this;this.$Modal.confirm({title:"提示",content:"确认删除该优惠券吗?",onOk:function(){t.$emit("on-delete",e)},onCancel:function(){}})}},watch:{showStock:{handler:function(e){var t=this;this.$createElement;this.columns=e?[{title:"优惠券名称",key:"coupon_name",minWidth:180,render:function(e,t){var n,o;return"2"===t.row.coupon_sale_type?o=[e("span","折扣券"),e("img",{attrs:{src:a("e7cd")}})]:"1"===t.row.coupon_sale_type&&(o=[e("span","满减券"),e("img",{attrs:{src:a("626b")}})]),e("div",{class:{"coupons-name":!0}},[e("div",{class:{"coupons-type":!0,deduction:"2"===t.row.coupon_sale_type,"full-reduction":"1"===t.row.coupon_sale_type}},o),e("div",{class:{"coupons-name-content":!0}},[e("p",{class:{name:!0}},t.row[t.column.key]),e("p",{class:{content:!0}},null===(n=t.row)||void 0===n?void 0:n.content)])])}},{title:"库存",slot:"stock",width:80},{title:"操作",key:"action",width:60,render:function(e,a){return e("Button",{attrs:{type:"text",disabled:t.disabled},on:{click:function(){t.deleteCoupons(a.index)}}},["删除"])}}]:[{title:"优惠券名称",key:"coupon_name",minWidth:180,render:function(e,t){var n,o;return"2"===t.row.coupon_sale_type?o=[e("span","折扣券"),e("img",{attrs:{src:a("e7cd")}})]:"1"===t.row.coupon_sale_type&&(o=[e("span","满减券"),e("img",{attrs:{src:a("626b")}})]),e("div",{class:{"coupons-name":!0}},[e("div",{class:{"coupons-type":!0,deduction:"2"===t.row.coupon_sale_type,"full-reduction":"1"===t.row.coupon_sale_type}},o),e("div",{class:{"coupons-name-content":!0}},[e("p",{class:{name:!0}},t.row[t.column.key]),e("p",{class:{content:!0}},null===(n=t.row)||void 0===n?void 0:n.content)])])}},{title:"操作",key:"action",width:60,render:function(e,a){return e("Button",{attrs:{type:"text",disabled:t.disabled},on:{click:function(){t.deleteCoupons(a.index)}}},["删除"])}}]},immediate:!0}}};t.default=n},"9d4d":function(e,t,a){"use strict";a.r(t);var n=a("468f"),o=a("aecb");for(var s in o)["default"].indexOf(s)<0&&function(e){a.d(t,e,(function(){return o[e]}))}(s);a("83bf");var i=a("2877"),r=Object(i["a"])(o["default"],n["a"],n["b"],!1,null,"738d64d8",null);t["default"]=r.exports},a7d8:function(e,t,a){var n=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a("2909")),s=n(a("5530")),i=n(a("b85c"));a("a9e3"),a("4de4"),a("d3b7"),a("159b"),a("ac1f"),a("841c");var r={name:"CouponSelector",props:{value:{type:Boolean,default:!1},multiple:{type:Boolean,default:!1},current:{type:[String,Object]},currentList:{type:Array},limit:{type:Number},pick_way:{type:[String,Number],default:""},params:{type:Object,default:function(){}}},data:function(){var e=this;this.$createElement;return{search:{keyword:"",coupon_sale_type:""},columns:[{title:"类型",key:"coupon_sale_type",width:80,render:function(e,t){return"2"===t.row.coupon_sale_type?e("div",{class:"coupons-type coupons-type-blue"},[e("span",["折"]),e("img",{class:"coupons-img",attrs:{src:a("e7cd")}})]):e("div",{class:"coupons-type coupons-type-yellow"},[e("span",["减"]),e("img",{class:"coupons-img",attrs:{src:a("626b")}})])}},{title:"名称",key:"coupon_name"},{title:"优惠内容",key:"content"},{title:"剩余数量",key:"surplus",render:function(e,t){return"0"==t.row.stock_type?e("div",["不限制"]):e("div",[t.row[t.column.key]])}},{title:"创建时间",key:"created_at",render:function(e,t){return e("div",{style:"word-break: normal"},[t.row[t.column.key]])}},{title:" ",key:"action",width:100,render:function(t,a){return t("div",{class:"action"},[t("Button",{class:"default-primary",attrs:{disabled:1===a.row.is_select},style:{display:a.row.checked?"none":"block"},on:{click:function(){e.setChecked(a.index,!0)}}},["选择"]),t("Button",{attrs:{type:"primary"},style:{display:a.row.checked?"block":"none"},on:{click:function(){e.setChecked(a.index,!1)}}},["已选"])])}}],data:[],total:0,page:{pageSize:10,pageNumber:1},loading:!1,selectRows:[],selectRow:{}}},methods:{handleSearch:function(){this.resetPage(),this.getCouponList()},handlePageChange:function(e){this.page=e,this.getCouponList();try{this.$refs.scrollBox.scrollTop=0}catch(t){console.log(t)}},resetPage:function(){var e;this.page={pageSize:10,pageNumber:1},null===(e=this.$refs["page"])||void 0===e||e.reset()},setChecked:function(e,t){var a=this;if(this.multiple){if(this.limit&&this.selectRows.length===this.limit&&t)return void this.$Message.error("已超出最大可选数量");this.$set(this.data[e],"checked",t),0===this.selectRows.length||t?this.selectRows.push(this.data[e]):this.selectRows=this.selectRows.filter((function(t){return t.id!==a.data[e].id}))}else t?(this.data.forEach((function(e,t){a.$set(a.data[t],"checked",!1)})),this.$set(this.data[e],"checked",!0),this.selectRow=this.data[e]):(this.$set(this.data[e],"checked",!1),this.selectRow={})},defaultChecked:function(){var e=this;this.multiple?this.data.forEach((function(t,a){var n,o=(0,i.default)(e.selectRows);try{for(o.s();!(n=o.n()).done;){var s=n.value;if(s.id===t.id){e.$set(e.data[a],"checked",!0);break}}}catch(r){o.e(r)}finally{o.f()}})):this.data.forEach((function(t,a){e.selectRow&&t.id===e.selectRow.id?e.$set(e.data[a],"checked",!0):e.$set(e.data[a],"checked",!1)}))},getCouponList:function(){var e=this;this.loading=!0;var t=Object.assign({},this.search,{pick_way:this.pick_way});t.coupon_sale_type="all"===t.coupon_sale_type?"":t.coupon_sale_type;var a=Object.assign((0,s.default)({pagesize:this.page.pageSize,page:this.page.pageNumber},this.params),t);this.$api.marketApi.getCouponAllList(a).then((function(t){e.loading=!1,0===t.error&&(e.data=t.list,e.total=t.total,e.defaultChecked())}))},handleSave:function(){this.multiple?this.$emit("on-change",this.selectRows):this.$emit("on-change",this.selectRow),this.handleCancel()},handleCancel:function(){this.$emit("on-cancel")},resetSearch:function(){this.search={keyword:"",coupon_sale_type:"all"}}},watch:{value:{handler:function(e){e&&(this.multiple?this.selectRows=(0,o.default)(this.currentList)||[]:this.selectRow=this.current||{},this.resetSearch(),this.resetPage(),this.getCouponList())},immediate:!0}},mounted:function(){this.resetSearch()}};t.default=r},a9cc:function(e,t,a){},ac9f:function(e,t,a){"use strict";a.r(t);var n=a("9c12"),o=a.n(n);for(var s in n)["default"].indexOf(s)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(s);t["default"]=o.a},aecb:function(e,t,a){"use strict";a.r(t);var n=a("5ec9"),o=a.n(n);for(var s in n)["default"].indexOf(s)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(s);t["default"]=o.a},bb14:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return o}));var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("kdx-modal-frame",{attrs:{value:e.value,title:"优惠券选择器",width:"1000","ok-text":"保存"},on:{"on-ok":e.handleSave,"on-cancel":e.handleCancel}},[a("div",{staticClass:"selector-link-discount-coupon"},[a("div",{ref:"scrollBox",staticClass:"coupon-content"},[a("div",{staticClass:"search"},[a("Input",{staticClass:"width-250",attrs:{search:"","enter-button":"搜索",placeholder:"请输入"},on:{"on-search":e.getCouponList,"on-enter":e.getCouponList},model:{value:e.search.keyword,callback:function(t){e.$set(e.search,"keyword",t)},expression:"search.keyword"}}),a("span",{staticClass:"label"},[e._v("优惠券类型：")]),a("Select",{staticClass:"width-160",on:{"on-change":e.handleSearch},model:{value:e.search.coupon_sale_type,callback:function(t){e.$set(e.search,"coupon_sale_type",t)},expression:"search.coupon_sale_type"}},[a("Option",{attrs:{value:"all"}},[e._v("全部")]),a("Option",{attrs:{value:"1"}},[e._v("满减券")]),a("Option",{attrs:{value:"2"}},[e._v("折扣券")])],1)],1),a("Table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"table",attrs:{columns:e.columns,data:e.data}})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:e.total>10,expression:"total>10"}],staticClass:"footer-page"},[a("kdx-page-component",{ref:"page",attrs:{total:e.total},on:{"on-change":e.handlePageChange}})],1)])])},o=[]},c150:function(e,t,a){},cc09:function(e,t,a){"use strict";a("a9cc")},ccad5:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return o}));var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("kdx-modal-frame",{attrs:{value:e.value,width:800,title:"评价奖励发放"},on:{"on-cancel":e.handleCancel,"on-ok":e.handleOk}},[n("div",{staticClass:"reward-content"},[n("kdx-hint-alert",{staticClass:"alert",attrs:{type:"error"}},["1"==e.model.is_reward?n("p",[e._v("当前评价已发放奖励")]):n("div",[n("p",[e._v("每条评价仅支持发放一次评价奖励")]),n("p",[e._v("发放后奖励立即到账，且无法撤回，请谨慎处理")])])]),e.value?n("Form",{ref:"form",attrs:{model:e.model,rules:e.rule,"label-width":140},nativeOn:{submit:function(e){e.preventDefault()}}},[n("FormItem",{attrs:{label:"奖励内容：",prop:"rewards"}},[n("CheckboxGroup",{model:{value:e.model.rewards,callback:function(t){e.$set(e.model,"rewards",t)},expression:"model.rewards"}},[n("Checkbox",{attrs:{label:"1",disabled:e.noManagePerm}},[e._v("优惠券")]),n("Checkbox",{attrs:{label:"2",disabled:e.noManagePerm}},[e._v("积分")]),n("Checkbox",{attrs:{label:"3",disabled:e.noManagePerm}},[e._v("余额")]),n("Checkbox",{attrs:{label:"4",disabled:e.noManagePerm}},[e._v("红包（企业打款到零钱）")])],1)],1),e.model.rewards.length?n("div",{staticClass:"next-box"},[new Set(e.model.rewards).has("1")?n("FormItem",{attrs:{label:"优惠券选择：",prop:"coupon_id"}},[n("Button",{staticClass:"default-primary",attrs:{disabled:e.noManagePerm},on:{click:e.showSelector}},[e._v(" "+e._s(3===e.selector.data.length?"重新选择优惠券":"+添加优惠券("+e.selector.data.length+"/3)")+" ")]),n("kdx-hint-alert",{staticStyle:{"margin-top":"10px","max-width":"610px"}},[e._v(" 最多可选择3张优惠券且优惠券须是在有效期内 ")]),e.selector.data.length>0?n("div",{staticClass:"form-item-bg-box"},[n("div",{staticClass:"coupons-list"},[n("coupons-list",{attrs:{data:e.selector.data,showStock:!0,disabled:e.noManagePerm},on:{"on-delete":e.deleteCoupons}})],1)]):e._e()],1):e._e(),new Set(e.model.rewards).has("2")?n("FormItem",{attrs:{label:"积分：",prop:"credit"}},[n("kdx-rr-input",{staticClass:"width-160",attrs:{placeholder:"积分",number:"",fixed:0,maxValue:9999999,disabled:e.noManagePerm},model:{value:e.model.credit,callback:function(t){e.$set(e.model,"credit",t)},expression:"model.credit"}},[n("span",{attrs:{slot:"append"},slot:"append"},[e._v("积分")])])],1):e._e(),new Set(e.model.rewards).has("3")?n("FormItem",{attrs:{label:"余额：",prop:"balance"}},[n("kdx-rr-input",{staticClass:"width-160",attrs:{placeholder:"余额",number:"",fixed:2,maxValue:9999999.99,disabled:e.noManagePerm},model:{value:e.model.balance,callback:function(t){e.$set(e.model,"balance",t)},expression:"model.balance"}},[n("span",{attrs:{slot:"append"},slot:"append"},[e._v("元")])])],1):e._e(),new Set(e.model.rewards).has("4")?n("FormItem",{attrs:{label:"单个红包金额：",prop:"red_package.money"}},[n("kdx-rr-input",{staticClass:"width-160",attrs:{placeholder:"请输入",number:"",fixed:2,minValue:.3,maxValue:200,disabled:e.noManagePerm},model:{value:e.model.red_package.money,callback:function(t){e.$set(e.model.red_package,"money",t)},expression:"model.red_package.money"}},[n("span",{attrs:{slot:"append"},slot:"append"},[e._v("元")])]),n("kdx-hint-text",{staticStyle:{"margin-top":"10px","max-width":"610px"}},[e._v(" 红包金额支持0.3-200元 ")]),n("kdx-hint-alert",{staticStyle:{"margin-top":"10px","max-width":"610px"},attrs:{"show-icon":!1}},[e._v(" 使用发放红包功能需要商家在微信支付商户开通企业打款到零钱功能 "),n("br"),e._v("成功领取的红包将自动打款到会员的微信零钱 ")])],1):e._e(),new Set(e.model.rewards).has("4")?n("FormItem",{staticClass:"expiry",attrs:{label:"红包有效时间：",prop:"red_package.expiry"}},[n("div",{staticClass:"flex"},[n("span",[e._v("发放后")]),n("div",[n("kdx-rr-input",{staticClass:"width-160",staticStyle:{margin:"0 10px"},attrs:{number:"",fixed:0,disabled:e.noManagePerm,"min-value":1,"max-value":30,placeholder:"请输入"},model:{value:e.model.red_package.expiry,callback:function(t){e.$set(e.model.red_package,"expiry",t)},expression:"model.red_package.expiry"}},[n("span",{attrs:{slot:"append"},slot:"append"},[e._v("天")])]),n("kdx-hint-text",{staticClass:"marginL-10"},[e._v("设置时间必须在1-30天")])],1),n("span",[e._v("内买家首次登陆商城时弹窗提示领取，过期不提示")])])]):e._e(),new Set(e.model.rewards).has("4")?n("FormItem",{staticClass:"noRequired",attrs:{label:"红包祝福语：",prop:"red_package.blessing"}},[n("Input",{staticClass:"width-340",class:{"input-disabled":e.noManagePerm},attrs:{placeholder:"请输入祝福语",disabled:e.noManagePerm,maxlength:"15","show-word-limit":""},model:{value:e.model.red_package.blessing,callback:function(t){e.$set(e.model.red_package,"blessing",t)},expression:"model.red_package.blessing"}}),n("kdx-hint-tooltip",{attrs:{type:"image",image:a("71b0")}}),n("kdx-hint-text",[e._v("根据微信支付说明，请注意敏感词处理，否则设置敏感词会被转义成字符*")])],1):e._e()],1):e._e()],1):e._e()],1),n("coupon-selector",{attrs:{multiple:!0,limit:3,pick_way:"4",currentList:e.selector.data},on:{"on-change":e.changeCouponList,"on-cancel":e.cancelSelector},model:{value:e.selector.value,callback:function(t){e.$set(e.selector,"value",t)},expression:"selector.value"}})],1)},o=[]},d370:function(e,t,a){"use strict";a("98a6")},e7cd:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAAeBAMAAAD0jNL3AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAPUExURTCI7yyH7y2M7y2N8S2M8GsgvRMAAAAEdFJOUwogoJ8q1PIiAAAAFUlEQVQI12NgYDBkcAFCBQYBBhLZAIgxBI7KasErAAAAAElFTkSuQmCC"},ea96:function(e,t,a){"use strict";a("69a7")},effd:function(e,t,a){"use strict";a.r(t);var n=a("0ae6"),o=a("4acf");for(var s in o)["default"].indexOf(s)<0&&function(e){a.d(t,e,(function(){return o[e]}))}(s);a("d370");var i=a("2877"),r=Object(i["a"])(o["default"],n["a"],n["b"],!1,null,"2e3f948e",null);t["default"]=r.exports}}]);