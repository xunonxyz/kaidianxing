(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[56],{2087:function(i,t,e){"use strict";e.r(t);var s=e("7202"),n=e("82ac");for(var o in n)["default"].indexOf(o)<0&&function(i){e.d(t,i,(function(){return n[i]}))}(o);e("9fca");var l,a=e("f0c5"),c=Object(a["a"])(n["default"],s["b"],s["c"],!1,null,"0df4b812",null,!1,s["a"],l);t["default"]=c.exports},2588:function(i,t,e){var s=e("288e");e("8e6e"),e("ac6a"),e("456d"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,e("c5f6");var n=s(e("bd86")),o=s(e("f59e")),l=e("2f62"),a=s(e("3f3c"));function c(i,t){var e=Object.keys(i);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(i);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),e.push.apply(e,s)}return e}function r(i){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?c(Object(e),!0).forEach((function(t){(0,n.default)(i,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(e)):c(Object(e)).forEach((function(t){Object.defineProperty(i,t,Object.getOwnPropertyDescriptor(e,t))}))}return i}var v=uni.upx2px(184),u=(uni.upx2px(10),{mixins:[a.default],name:"level",components:{goodsInfo:o.default},props:{},data:function(){return{levelName:"",scrollTo:0,scrolling:!1,bar:"",bar2:"",upgrade_type:1,currentLevel:{},levels:[],proportion:[],goods_info:[],condition:null,goods_ids_finish:!1,goodsList:[]}},computed:r({},(0,l.mapState)("commissionSet",{commissionSetting:function(i){return i.commissionSetting}})),watch:{scrolling:function(){if(!this.scrolling){var i=Math.abs(Math.round(this.scrollTo/v));this.currentLevel=this.levels[i],this.scrollTo-i*v>v&&(i+=1),this.scrollTo!=i*v&&this.clickItem(i,this.currentLevel.id)}}},created:function(){},beforeMount:function(){uni.setNavigationBarTitle({title:this.commissionSetting.level_description})},mounted:function(){this.getLevel()},methods:{getLevel:function(){var i=this;this.$api.commissionApi.getLevel().then((function(t){0==t.error&&(i.levels=t.list.map((function(i,t){return r(r({},i),{},{index:t})})),i.levels.filter((function(e,s){e.id==t.member_level_id?(i.currentLevel=e,i.levelName=e.name,i.$nextTick((function(){i.scrollTo=s*v}))):i.currentLevel=i.levels[0]})),i.getLevelData(t.member_level_id||t.list[0].id))})).finally((function(i){uni.hideLoading()}))},getLevelData:function(i){var t=this;this.$api.commissionApi.getLevelData({level_id:i},{errorToast:!1}).then((function(i){var e;0==i.error&&(t.proportion=[{text:"".concat(t.commissionSetting.level_name_1).concat(t.commissionSetting.agent_name,"比例"),num:i.detail.commission_1||0},{text:"".concat(t.commissionSetting.level_name_2).concat(t.commissionSetting.agent_name,"比例"),num:i.detail.commission_2||0},{text:"".concat(t.commissionSetting.level_name_3).concat(t.commissionSetting.agent_name,"比例"),num:i.detail.commission_3||0}].splice(0,Number(i.commission_level)),Array.isArray(i.condition)?t.condition=null:t.condition=i.condition,t.upgrade_type=i.detail.upgrade_type,i.condition.goods_ids&&(t.goods_ids_finish=(null===i||void 0===i||null===(e=i.goods_info)||void 0===e?void 0:e.member_goods_ids.length)>0,t.getGoodsList(i.goods_info.goods_ids)))}))},scroll:function(i){var t=this;this.scrolling=!0,clearTimeout(this.bar2),this.bar2=setTimeout((function(){t.scrollTo=i.detail.scrollLeft,t.scrolling=!1}),34)},clickItem:function(i,t){this.goodsList=[],clearTimeout(this.bar2),this.currentLevel=this.levels[i],this.scrollTo=i*v,this.getLevelData(t)},getGoodsList:function(i){var t=this;this.$api.goodsApi.goodsList({id:i}).then((function(i){t.goodsList=i.list}))}},beforeDestroy:function(){clearInterval(this.bar)}});t.default=u},7202:function(i,t,e){"use strict";var s;e.d(t,"b",(function(){return n})),e.d(t,"c",(function(){return o})),e.d(t,"a",(function(){return s}));var n=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("kdx-page-box",[e("v-uni-view",{staticClass:"commission-level"},[e("v-uni-view",{staticClass:"level-rank"},[e("i",{staticClass:"iconfont-m- icon-m-arrow-up"}),e("i",{staticClass:"iconfont-m- icon-m-huangguan1"}),e("v-uni-view",{staticClass:"level-title"},[i._v("您的当前"+i._s(i.commissionSetting.agent_name)+"等级"),e("v-uni-text",[i._v(i._s(i.levelName))])],1),e("v-uni-view",{staticClass:"levels-scroll-box"},[e("v-uni-scroll-view",{staticClass:"levels-scroll",attrs:{"scroll-x":!0,"scroll-with-animation":!0,"scroll-left":i.scrollTo},on:{scroll:function(t){arguments[0]=t=i.$handleEvent(t),i.scroll.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"_ul"},[e("v-uni-view",{staticClass:"level first"}),i._l(i.levels,(function(t,s){return e("v-uni-view",{key:s,staticClass:"level",on:{click:function(e){arguments[0]=e=i.$handleEvent(e),i.clickItem(s,t.id)}}},[e("v-uni-view",{staticClass:"level-icon"},[e("v-uni-image",{staticClass:"level-image",attrs:{src:i.currentLevel.id==t.id?i.$utils.staticImg("commission/level-active-icon.png"):i.$utils.staticImg("commission/level-icon.png")}}),e("v-uni-image",{staticClass:"level-num",attrs:{src:i.$utils.staticImg("commission/level/commission_level"+(s+1)+".png")}})],1),e("v-uni-view",{staticClass:"level-name two-line-hide",class:{active:i.currentLevel.id==t.id}},[i._v(i._s(t.name))])],1)})),e("v-uni-view",{staticClass:"level last"})],2)],1)],1)],1),e("v-uni-view",{staticClass:"container"},[i.proportion.length>0?e("v-uni-view",{staticClass:"proportion"},[e("v-uni-view",{staticClass:"title"},[i._v(i._s(i.commissionSetting.commission)+"比例")]),i._l(i.proportion,(function(t,s){return e("v-uni-view",{key:s,staticClass:"proportion-content flex",class:"proportion"+s},[e("v-uni-view",{staticStyle:{"font-size":"24rpx"}},[i._v(i._s(t.text))]),e("v-uni-view",{staticStyle:{"font-size":"32rpx"}},[i._v(i._s(t.num)+"%")])],1)}))],2):i._e(),i.condition?e("v-uni-view",{staticClass:"up-grade"},[e("v-uni-view",{staticClass:"title"},[i._v("升级条件"),e("v-uni-text",{staticClass:"uni-text-color-grey",staticStyle:{"font-size":"24rpx"}},[i._v(i._s(1==i.upgrade_type?"（满足以下全部条件）":"（满足以下任意1个条件）"))])],1),e("v-uni-view",{staticClass:"up-grade-content"},[i.condition.order_money?e("v-uni-view",{staticClass:"rr-cell"},[e("v-uni-view",{staticClass:"flex"},[e("v-uni-view",{staticClass:"flex1"},[e("v-uni-text",[i._v(i._s(i.commissionSetting.commission_order)+"总额达到"),e("v-uni-text",{staticClass:"uni-color-primary price"},[i._v(i._s(i.condition.order_money)+"元")])],1)],1),[i.condition.order_money_finish?e("v-uni-view",{staticClass:"right status success"},[i._v("已完成")]):e("v-uni-view",{staticClass:"right status"},[i._v("未完成")])]],2)],1):i._e(),i.condition.order_money_1?e("v-uni-view",{staticClass:"rr-cell"},[e("v-uni-view",{staticClass:"flex"},[e("v-uni-view",{staticClass:"flex1"},[e("v-uni-text",[i._v(i._s(i.commissionSetting.level_name_1)+i._s(i.commissionSetting.commission_order)+"总额达到"),e("v-uni-text",{staticClass:"uni-color-primary price"},[i._v(i._s(i.condition.order_money_1)+"元")])],1)],1),[i.condition.order_money_1_finish?e("v-uni-view",{staticClass:"right status success"},[i._v("已完成")]):e("v-uni-view",{staticClass:"right status"},[i._v("未完成")])]],2)],1):i._e(),i.condition.order_count?e("v-uni-view",{staticClass:"rr-cell"},[e("v-uni-view",{staticClass:"flex"},[e("v-uni-view",{staticClass:"flex1"},[e("v-uni-text",[i._v(i._s(i.commissionSetting.commission_order)+"总数达到"),e("v-uni-text",{staticClass:"uni-color-primary price"},[i._v(i._s(i.condition.order_count)+"单")])],1)],1),[i.condition.order_count_finish?e("v-uni-view",{staticClass:"right status success"},[i._v("已完成")]):e("v-uni-view",{staticClass:"right status"},[i._v("未完成")])]],2)],1):i._e(),i.condition.order_count_1?e("v-uni-view",{staticClass:"rr-cell"},[e("v-uni-view",{staticClass:"flex"},[e("v-uni-view",{staticClass:"flex1"},[e("v-uni-text",[i._v(i._s(i.commissionSetting.level_name_1)+i._s(i.commissionSetting.commission_order)+"总数达到"),e("v-uni-text",{staticClass:"uni-color-primary price"},[i._v(i._s(i.condition.order_count_1)+"单")])],1)],1),[i.condition.order_count_1_finish?e("v-uni-view",{staticClass:"right status success"},[i._v("已完成")]):e("v-uni-view",{staticClass:"right status"},[i._v("未完成")])]],2)],1):i._e(),i.condition.self_order_money?e("v-uni-view",{staticClass:"rr-cell"},[e("v-uni-view",{staticClass:"flex"},[e("v-uni-view",{staticClass:"flex1"},[e("v-uni-text",[i._v("自购订单总额达到"),e("v-uni-text",{staticClass:"uni-color-primary price"},[i._v(i._s(i.condition.self_order_money)+"元")])],1)],1),[i.condition.self_order_money_finish?e("v-uni-view",{staticClass:"right status success"},[i._v("已完成")]):e("v-uni-view",{staticClass:"right status"},[i._v("未完成")])]],2)],1):i._e(),i.condition.self_order_count?e("v-uni-view",{staticClass:"rr-cell"},[e("v-uni-view",{staticClass:"flex"},[e("v-uni-view",{staticClass:"flex1"},[e("v-uni-text",[i._v("自购订单数达到"),e("v-uni-text",{staticClass:"uni-color-primary price"},[i._v(i._s(i.condition.self_order_count)+"单")])],1)],1),[i.condition.self_order_count_finish?e("v-uni-view",{staticClass:"right status success"},[i._v("已完成")]):e("v-uni-view",{staticClass:"right status"},[i._v("未完成")])]],2)],1):i._e(),i.condition.child_count?e("v-uni-view",{staticClass:"rr-cell"},[e("v-uni-view",{staticClass:"flex"},[e("v-uni-view",{staticClass:"flex1"},[e("v-uni-text",[i._v("下线总人数达到"),e("v-uni-text",{staticClass:"uni-color-primary price"},[i._v(i._s(i.condition.child_count)+"人")])],1)],1),[i.condition.child_count_finish?e("v-uni-view",{staticClass:"right status success"},[i._v("已完成")]):e("v-uni-view",{staticClass:"right status"},[i._v("未完成")])]],2)],1):i._e(),i.condition.child_count_1?e("v-uni-view",{staticClass:"rr-cell"},[e("v-uni-view",{staticClass:"flex"},[e("v-uni-view",{staticClass:"flex1"},[e("v-uni-text",[i._v(i._s(i.commissionSetting.level_name_1)+"下线总人数达到"),e("v-uni-text",{staticClass:"uni-color-primary price"},[i._v(i._s(i.condition.child_count_1)+"人")])],1)],1),[i.condition.child_count_1_finish?e("v-uni-view",{staticClass:"right status success"},[i._v("已完成")]):e("v-uni-view",{staticClass:"right status"},[i._v("未完成")])]],2)],1):i._e(),i.condition.child_agent_count?e("v-uni-view",{staticClass:"rr-cell"},[e("v-uni-view",{staticClass:"flex"},[e("v-uni-view",{staticClass:"flex1"},[e("v-uni-text",[i._v("下线"+i._s(i.commissionSetting.agent_name)+"人数达到"),e("v-uni-text",{staticClass:"uni-color-primary price"},[i._v(i._s(i.condition.child_agent_count)+"人")])],1)],1),[i.condition.child_agent_count_finish?e("v-uni-view",{staticClass:"right status success"},[i._v("已完成")]):e("v-uni-view",{staticClass:"right status"},[i._v("未完成")])]],2)],1):i._e(),i.condition.child_agent_count_1?e("v-uni-view",{staticClass:"rr-cell"},[e("v-uni-view",{staticClass:"flex"},[e("v-uni-view",{staticClass:"flex1"},[e("v-uni-text",[i._v(i._s(i.commissionSetting.level_name_1)+"下线"+i._s(i.commissionSetting.agent_name)+"达到"),e("v-uni-text",{staticClass:"uni-color-primary price"},[i._v(i._s(i.condition.child_agent_count_1)+"人")])],1)],1),[i.condition.child_agent_count_1_finish?e("v-uni-view",{staticClass:"right status success"},[i._v("已完成")]):e("v-uni-view",{staticClass:"right status"},[i._v("未完成")])]],2)],1):i._e(),i.condition.withdraw_money?e("v-uni-view",{staticClass:"rr-cell"},[e("v-uni-view",{staticClass:"flex"},[e("v-uni-view",{staticClass:"flex1"},[e("v-uni-text",[i._v("已提现"+i._s(i.commissionSetting.commission)+"金额达到"),e("v-uni-text",{staticClass:"uni-color-primary price"},[i._v(i._s(i.condition.withdraw_money)+"元")])],1)],1),[i.condition.withdraw_money_finish?e("v-uni-view",{staticClass:"right status success"},[i._v("已完成")]):e("v-uni-view",{staticClass:"right status"},[i._v("未完成")])]],2)],1):i._e(),i.condition.goods_ids?e("v-uni-view",{staticClass:"rr-cell"},[e("v-uni-view",{staticClass:"flex"},[e("v-uni-view",{staticClass:"flex1"},[e("v-uni-text",[i._v("购买以下商品")])],1),[i.goods_ids_finish?e("v-uni-view",{staticClass:"right status success"},[i._v("已完成")]):e("v-uni-view",{staticClass:"right status"},[i._v("未完成")])]],2)],1):i._e(),e("v-uni-view",{staticClass:"goods-content"},i._l(i.goodsList,(function(i){return e("v-uni-view",{key:i.id,staticClass:"item"},[e("goods-info",{attrs:{goodsData:i,isAddIcon:!0}})],1)})),1)],1)],1):i._e()],1)],1)],1)},o=[]},"82ac":function(i,t,e){"use strict";e.r(t);var s=e("2588"),n=e.n(s);for(var o in s)["default"].indexOf(o)<0&&function(i){e.d(t,i,(function(){return s[i]}))}(o);t["default"]=n.a},"9fca":function(i,t,e){"use strict";var s=e("e3b7"),n=e.n(s);n.a},a966:function(i,t,e){var s=e("24fb");t=s(!1),t.push([i.i,'@charset "UTF-8";\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.commission-level[data-v-0df4b812]{overflow:hidden}.commission-level .level-rank[data-v-0df4b812]{position:relative;background:-webkit-linear-gradient(330.77deg,rgba(0,0,0,.8) 1.99%,rgba(0,0,0,.744) 97.71%);background:linear-gradient(119.23deg,rgba(0,0,0,.8) 1.99%,rgba(0,0,0,.744) 97.71%)}.commission-level .level-rank .icon-m-huangguan1[data-v-0df4b812]{position:absolute;right:%?-52?%;bottom:%?-146?%;font-size:%?404?%;color:#fff;opacity:.05;z-index:0}.commission-level .level-rank .icon-m-arrow-up[data-v-0df4b812]{position:absolute;left:50%;bottom:%?-16?%;font-size:%?40?%;color:#f5f5f5;z-index:0;-webkit-transform:translate(-50%);transform:translate(-50%)}.commission-level .level-rank .level-title[data-v-0df4b812]{padding:%?32?% 0 %?48?%;font-size:%?24?%;text-align:center;color:#fff}.commission-level .level-rank .level-title uni-text[data-v-0df4b812]{color:#cfaa71}.commission-level .level-rank .levels-scroll-box[data-v-0df4b812]{height:%?216?%;overflow:hidden}.commission-level .level-rank .levels-scroll[data-v-0df4b812]{height:%?260?%}.commission-level .level-rank .levels-scroll ._ul[data-v-0df4b812]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;flex-wrap:nowrap}.commission-level .level-rank .levels-scroll .level[data-v-0df4b812]{margin-right:%?64?%;width:%?120?%;-webkit-flex-shrink:0;flex-shrink:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.commission-level .level-rank .levels-scroll .level.first[data-v-0df4b812]{width:%?260?%}.commission-level .level-rank .levels-scroll .level.last[data-v-0df4b812]{width:%?260?%}.commission-level .level-rank .levels-scroll .level-icon[data-v-0df4b812]{position:relative;margin-bottom:%?24?%}.commission-level .level-rank .levels-scroll .level-icon .level-image[data-v-0df4b812]{width:%?64?%;height:%?64?%;border-radius:50%}.commission-level .level-rank .levels-scroll .level-icon .level-num[data-v-0df4b812]{position:absolute;right:%?4?%;bottom:%?4?%;width:%?20?%;height:%?20?%}.commission-level .level-rank .levels-scroll .level-name[data-v-0df4b812]{width:%?120?%;font-size:%?24?%;color:#f5f5f5;opacity:.6;text-align:center}.commission-level .level-rank .levels-scroll .level-name.active[data-v-0df4b812]{color:#fff;opacity:1}.commission-level .container[data-v-0df4b812]{padding:0 %?24?% %?32?%}.commission-level .container .title[data-v-0df4b812]{margin:%?48?% 0 %?32?% 0;font-size:%?32?%;line-height:%?44?%;color:#212121}.commission-level .container .proportion-content[data-v-0df4b812]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;margin-bottom:%?16?%;padding:0 %?24?%;height:%?96?%;line-height:%?96?%;color:#fff;border-radius:%?12?%}.commission-level .container .proportion-content[data-v-0df4b812]:last-child{margin-bottom:0}.commission-level .container .proportion0[data-v-0df4b812]{background-color:#996b39}.commission-level .container .proportion1[data-v-0df4b812]{background-color:#c18a51}.commission-level .container .proportion2[data-v-0df4b812]{background-color:#cfaa71}.commission-level .container .up-grade-content[data-v-0df4b812]{background-color:#fff;border-radius:%?12?%;overflow:hidden}.commission-level .container .up-grade-content .rr-cell[data-v-0df4b812]{height:%?96?%;line-height:%?96?%;color:#212121}.commission-level .container .up-grade-content .rr-cell .flex[data-v-0df4b812]{height:100%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-top:1px solid #e6e7eb}.commission-level .container .up-grade-content .rr-cell .flex .flex1 .price[data-v-0df4b812]{margin-left:%?10?%}.commission-level .container .up-grade-content .rr-cell .right[data-v-0df4b812]{margin-right:%?24?%;width:%?102?%;height:%?38?%;line-height:%?38?%;color:#ff3c29;font-size:%?24?%;background-color:#fff3f5;text-align:center;border-radius:%?38?%}.commission-level .container .up-grade-content .rr-cell .right.success[data-v-0df4b812]{background-color:#d5f9e6;color:#09c15f}.commission-level .container .up-grade-content .rr-cell:first-child .flex[data-v-0df4b812]{border:0}.commission-level .container .up-grade-content .goods-content[data-v-0df4b812] .goods-card-item{padding:%?16?% %?24?%}.commission-level .container .up-grade-content .goods-content[data-v-0df4b812] .item:last-child .goods-card-item::after{border:0}',""]),i.exports=t},e3b7:function(i,t,e){var s=e("a966");"string"===typeof s&&(s=[[i.i,s,""]]),s.locals&&(i.exports=s.locals);var n=e("4f06").default;n("09277f29",s,!0,{sourceMap:!1,shadowMode:!1})}}]);