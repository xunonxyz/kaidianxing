(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[21,39],{"18aa":function(e,t,i){},"3a10":function(e,t,i){"use strict";var r=i("4020");const s={getComment:(e,t)=>r["a"].get("/order/comment/list",e,t),confirm:(e,t)=>r["a"].post("/order/create/confirm",e,t),create:(e,t)=>r["a"].post("/order/create/index",e,t),allOrderList:(e,t)=>r["a"].get("/order/list/all",e,t),payOrderList:(e,t)=>r["a"].get("/order/list/pay",e,t),sendOrderList:(e,t)=>r["a"].get("/order/list/send",e,t),pickOrderList:(e,t)=>r["a"].get("/order/list/pick",e,t),finishOrderList:(e,t)=>r["a"].get("/order/list/finish",e,t),refundOrderList:(e,t)=>r["a"].get("/order/refund/list",e,t),orderDetail:(e,t)=>r["a"].get("/order/detail/index",e,t),orderPayList:(e,t)=>r["a"].get("/pay/index",e,t),orderPay:(e,t)=>r["a"].post("/pay/index/pay",e,t),orderPayCheck:(e,t)=>r["a"].post("/pay/index/check",e,t),orderGetTotal:e=>r["a"].post("/order/list/get-total",{},e),orderCancel:(e,t)=>r["a"].post("/order/op/cancel",e,t),orderDelete:(e,t)=>r["a"].post("/order/op/delete",e,t),orderFinish:(e,t)=>r["a"].post("/order/op/finish",e,t),getExpress:(e,t)=>r["a"].get("/order/detail/get-express",e,t),orderRefund:(e,t)=>r["a"].get("/order/refund",e,t),refundSubmit:(e,t)=>r["a"].post("/order/refund/submit",e,t),refundDetail:(e,t)=>r["a"].get("/order/refund/detail",e,t),refundCancel:(e,t)=>r["a"].get("/order/refund/cancel",e,t),getCommentList:(e,t)=>r["a"].get("/order/comment/wait-list",e,t),getCommentGoods:(e,t)=>r["a"].get("/order/comment/write-comment",e,t),submitComment:(e,t)=>r["a"].post("/order/comment/write-comment",e,t)};t["a"]=s},5423:function(e,t,i){e.exports=i.p+"static/dist/shop_pc/image/default.png"},"5bfe":function(e,t,i){e.exports=i.p+"static/dist/shop_pc/image/ali.png"},6603:function(e,t,i){"use strict";i("18aa")},7120:function(e,t,i){e.exports=i.p+"static/dist/shop_pc/image/wechat.png"},7436:function(e,t,i){"use strict";i.r(t);var r=i("3a10"),s=i("c4a7"),a=i.n(s);t["default"]={data(){return{checkPatTime:null,mixinsCodeUrl:"",mixinsPrice:""}},methods:{getPaymentInfo(){r["a"].orderPay({order_id:this.$route.query.order_id||"",pay_type:this.$route.query.type||""},{hideSuccessTip:!0,success:e=>{0==e.error&&("alipay"==this.$route.query.type?this.mixinsCodeUrl=e.data:this.mixinsCodeUrl=e.data.code_url,this.createdCode())}})},createdCode(){const e=this.$refs.qrcode;let t=new a.a({element:e,value:this.mixinsCodeUrl,background:"#fff",backgroundAlpha:1,foregroundAlpha:1,level:"H",size:"180"});this.h5ImgUrl=t.toDataURL(),this.checkPay(2500)},checkPay(e=1e3){clearInterval(this.checkPatTime),this.checkPatTime=setInterval(()=>{r["a"].orderPayCheck({order_id:this.$route.query.order_id||"",pay_type:this.$route.query.type||this.payType||""},{hideSuccessTip:!0,hideErrorTip:!0,success:e=>{0==e.error&&(this.$Message.success("支付成功"),clearInterval(this.checkPatTime),this.btLoading=!1,setTimeout(()=>{this.$router.push({path:"/order/orderDetail",query:{order_id:this.$route.query.order_id||""}})},1e3))}})},e)}},beforeDestroy(){clearInterval(this.checkPatTime)}}},ec3c:function(e,t,i){"use strict";i.r(t);var r=function(){var e=this,t=e._self._c;return t("Container",[t("Breadcrumbs",{attrs:{list:e.list}}),t("div",{staticClass:"order-tip"},[t("div",[e._v("订单提交成功！去付款咯~")]),e.countDownArr.length>0&&"0"==e.orderDetail.status?t("div",{staticClass:"timeout flex"},[t("div",[e._v("剩余时间：")]),t("div",{staticClass:"flex"},[e._l(e.countDownArr,(function(i,r){return[i?t("div",{key:r,staticClass:"flex"},[t("span",[e._v(e._s(i))])]):e._e()]}))],2)]):e._e()]),t("div",{staticClass:"order-detail"},[t("div",{staticClass:"item"},[e._v("订单编号："+e._s(e.orderDetail.order_no||""))]),t("div",{staticClass:"item"},[e._v(" 订单价格："),t("span",[e._v(e._s(e.orderDetail.pay_price||"")+"元")])]),e.orderDetail.buyer_name?t("div",{staticClass:"item line1"},[e._v(" 收货信息："+e._s(e.orderDetail.buyer_name)+" "+e._s(e.orderDetail.buyer_mobile)+" "+e._s(e.orderDetail.address_province)+" "+e._s(e.orderDetail.address_city)+" "+e._s(e.orderDetail.address_area)+" "+e._s(e.orderDetail.address_detail)+" ")]):e._e(),t("div",{staticClass:"item line1 flex"},[e._v(" 商品名称："),t("div",e._l(e.orderDetail.goods_info,(function(i,r){return t("p",{key:r,staticStyle:{"margin-bottom":"10px"}},[e._v(e._s(i.title))])})),0)])]),t("div",{staticClass:"pay-box"},[t("div",{staticClass:"title"},[e._v("选择以下支付方式")]),t("div",{staticClass:"list flex"},e._l(e.payList,(function(r,s){return t("div",{key:s,on:{click:function(t){return e.selectPayType(r)}}},["balance"==r.type?t("div",{staticClass:"item flex",class:[e.payType==r.type?"active":""]},[e.payType==r.type?t("i",{staticClass:"iconfont icon-a-chenggongde21"}):e._e(),t("img",{staticClass:"icon",attrs:{src:i("5423"),alt:""}}),t("div",[t("div",{staticClass:"name"},[e._v("余额支付")]),t("div",{staticClass:"balance"},[e._v("余额："+e._s(e.uerInfo.balance||"0"))])])]):e._e(),"wechat"==r.type?t("div",{staticClass:"item flex",class:[e.payType==r.type?"active":""]},[e.payType==r.type?t("i",{staticClass:"iconfont icon-a-chenggongde21"}):e._e(),t("img",{staticClass:"icon",attrs:{src:i("7120"),alt:""}}),t("div",[t("div",{staticClass:"name"},[e._v("微信支付")])])]):e._e(),"alipay"==r.type?t("div",{staticClass:"item flex",class:[e.payType==r.type?"active":""]},[e.payType==r.type?t("i",{staticClass:"iconfont icon-a-chenggongde21"}):e._e(),t("img",{staticClass:"icon",attrs:{src:i("5bfe"),alt:""}}),t("div",[t("div",{staticClass:"name"},[e._v("支付宝支付")])])]):e._e()])})),0),t("div",{staticClass:"to-pay flex"},[t("Button",{staticClass:"bnt bg-color",attrs:{type:"error",loading:e.btLoading},on:{click:e.pay}},[e._v("去支付")])],1)])],1)},s=[],a=i("01fe"),o=i("3a10"),d=i("fab2"),n=i("7436"),c={name:"payment",mixins:[n["default"]],data(){return{list:[{name:"首页",path:"/"},{name:"提交订单",path:""},{name:"确认订单"}],temp:null,checkPatTime:null,orderDetail:{},goods_info:{},countDownArr:[],uerInfo:{},payList:[],payType:"",btLoading:!1}},created(){this.getOrderDetail(),this.getUerInfo()},mounted(){this.getTimeOut(),window.history&&window.history.pushState&&window.addEventListener("popstate",this.goBack,!1)},computed:{},methods:{selectPayType(e){this.payType=e.type},getUerInfo(){d["a"].getUerInfo({hideSuccessTip:!0,success:e=>{0==e.error&&(this.uerInfo=e.data)}})},getOrderDetail(){o["a"].orderDetail({order_id:this.$route.query.order_id||""},{hideSuccessTip:!0,success:e=>{0==e.error&&(this.orderDetail=e,this.goods_info=e.goods_info[0],this.getPayList(),"0"==e.status&&this.getTimeOut())}})},getPayList(){o["a"].orderPayList({order_id:this.$route.query.order_id||"",activity_type:this.orderDetail.activity_type||"0"},{hideSuccessTip:!0,success:e=>{if(0==e.error){this.payList=[];for(let t in e.payList)1==e.payList[t].enable&&"delivery"!=t&&this.payList.push({type:t})}}})},goBack(){history.pushState(null,null,"/goods/detail?id="+this.$route.query.goods_id),this.$router.push("/goods/detail?id="+this.$route.query.goods_id)},pay(){if(""!=this.payType)switch(this.payType){case"balance":this.btLoading=!0,o["a"].orderPay({order_id:this.$route.query.order_id||"",pay_type:this.payType},{hideSuccessTip:!0,success:e=>{0==e.error&&this.checkPay()},fail:()=>{this.btLoading=!1}});break;case"wechat":this.$router.push({path:"/order/wxPay",query:{order_id:this.$route.query.order_id||"",type:this.payType,price:this.orderDetail.pay_price}});break;case"alipay":this.$router.push({path:"/order/aliPay",query:{order_id:this.$route.query.order_id||"",type:this.payType,price:this.orderDetail.pay_price}})}else this.$Message.error("请选择支付方式")},getTimeOut(){clearInterval(this.temp);let e=!1,t=new Date(this.orderDetail.auto_close_time).getTime(),i=(new Date).getTime();this.endTime=t-i,this.endTime<=0?this.countDownArr=[]:(this.countDownArr=Object(a["countDownFun"])(this.endTime,e),this.temp=setInterval(()=>{if(this.endTime-=1e3,this.endTime<=0)return this.countDownArr=[],void clearInterval(this.temp);this.countDownArr=Object(a["countDownFun"])(this.endTime,e)},1e3))}},beforeDestroy(){clearInterval(this.temp),window.removeEventListener("popstate",this.goBack,!1)}},l=c,p=(i("6603"),i("2877")),u=Object(p["a"])(l,r,s,!1,null,"20c5cfc2",null);t["default"]=u.exports}}]);