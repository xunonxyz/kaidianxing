(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[67],{3107:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("kdx-modal-frame",{attrs:{value:t.value,title:"链接选择器",width:"1000",loading:t.loading,"ok-text":"保存"},on:{"on-ok":t.handleSave,"on-cancel":t.handleCancel}},[a("div",{staticClass:"selector-shopping-mall"},[a("Tabs",{model:{value:t.name,callback:function(e){t.name=e},expression:"name"}},[a("TabPane",{attrs:{label:"商城链接",name:"shop"}},[a("div",{staticClass:"shopping-mall-link"},[a("div",{staticClass:"search"},[a("Input",{staticClass:"width-300",attrs:{search:"","enter-button":"搜索",placeholder:"请输入"},on:{"on-search":t.handleSearch},model:{value:t.search.content,callback:function(e){t.$set(t.search,"content",e)},expression:"search.content"}})],1),t.list&&t.list.length>0?a("div",{staticClass:"content"},t._l(t.list,(function(e,n){return a("div",{key:n,staticClass:"content-item"},[a("p",{staticClass:"title"},[t._v(" "+t._s(e.name)+" ")]),e.links&&e.links.length>0?a("ul",t._l(e.links,(function(e,i){return a("li",{key:i,class:{checked:e.checked},on:{click:function(e){return t.setChecked(n,i)}}},[a("Icon",{attrs:{type:e.icon}}),a("span",{staticClass:"name"},[t._v(t._s(e.name))])],1)})),0):t._e()])})),0):a("div",{staticStyle:{"text-align":"center"}},[t._v("暂无数据")])])]),a("TabPane",{attrs:{label:"自定义链接",name:"custom"}},[a("div",{staticClass:"image-selector-network"},[a("Form",{staticClass:"custom-link",attrs:{"label-width":120},nativeOn:{submit:function(t){t.preventDefault()}}},[a("FormItem",{attrs:{label:"链接地址："}},[a("Input",{attrs:{"enter-button":"提取链接",search:"",placeholder:"请输入"},on:{"on-search":t.handleSave},model:{value:t.link,callback:function(e){t.link=e},expression:"link"}})],1)],1)],1)])],1)],1)])},i=[]},"3aaf":function(t,e,a){"use strict";a("b44a")},5511:function(t,e,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("d3b7"),a("159b"),a("b0c0"),a("ac1f"),a("841c"),a("d81d"),a("4de4"),a("9911");var n={name:"LinkSelector",props:{current:{type:[Object,String],required:!0},value:{type:Boolean,default:!1}},data:function(){return{name:"shop",search:{content:""},data:[],list:[],selectRow:null,loading:!1,link:"",keyword:["shop","goods","member"]}},methods:{handleSearch:function(){var t=this,e=[];this.data.forEach((function(a){var n;if(a.name.indexOf(t.search.content)>-1)e.push(a);else if(null!==(n=a.links)&&void 0!==n&&n.length){var i=[];a.links.forEach((function(e){e.name.indexOf(t.search.content)>-1&&i.push(e)})),i.length>0&&e.push({item:a,links:i})}})),this.list=e},defaultChecked:function(){var t=this;this.list.forEach((function(e,a){e.links&&e.links.length>0&&e.links.forEach((function(e,n){var i;e.url===(null===(i=t.selectRow)||void 0===i?void 0:i.url)?t.$set(t.list[a].links[n],"checked",!0):t.$set(t.list[a].links[n],"checked",!1)}))}))},setChecked:function(t,e){var a=this,n=this.list[t].links[e];n.checked?(this.selectRow={},this.$set(this.list[t].links[e],"checked",!1)):(this.list.forEach((function(t,e){t.links.forEach((function(t,n){a.$set(a.list[e].links[n],"checked",!1)}))})),this.$set(this.list[t].links[e],"checked",!0),this.selectRow=this.list[t].links[e])},getData:function(){var t=this;this.loading=!0,this.$api.shopApi.getLinkList().then((function(e){t.loading=!1,0===e.error&&(t.data=e.list.map((function(t){return t.links=t.links.filter((function(t){return"wx_service"!=t.url})),t})),t.list=t.data,t.defaultChecked())}))},handleSave:function(){"custom"===this.name?this.$emit("on-change",{url:this.link}):this.$emit("on-change",this.selectRow),this.handleCancel()},handleCancel:function(){this.$emit("on-cancel")}},watch:{value:{handler:function(t){t&&(this.getData(),this.current?"string"===typeof this.current?this.selectRow={url:this.current}:this.selectRow=this.current:this.selectRow={},this.name="shop",this.link="",this.search.content="")},immediate:!0}}};e.default=n},"5ef5":function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return i}));var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("kdx-content-bar",{scopedSlots:t._u([{key:"btn",fn:function(){return[n("Button",{staticClass:"primary-long",attrs:{disabled:t.noManagePerm},on:{click:t.handleSave}},[t._v("保存")])]},proxy:!0}])},[n("div",{staticClass:"content"},[n("kdx-form-title",[n("span",[t._v("商城分享设置")]),n("kdx-hint-tooltip",{staticStyle:{"margin-left":"0px","line-height":"1"},attrs:{type:"image",image:a("a1a7")}})],1),n("Form",{ref:"form",attrs:{model:t.formValidate,"label-width":140,rules:t.rules}},[n("FormItem",{attrs:{label:"分享标题：",prop:"title_type"}},[n("div",{staticClass:"flex-column"},[n("RadioGroup",{model:{value:t.formValidate.title_type,callback:function(e){t.$set(t.formValidate,"title_type",e)},expression:"formValidate.title_type"}},[n("Radio",{attrs:{disabled:t.noManagePerm,label:"1"}},[n("span",[t._v("商城名称")])]),n("Radio",{attrs:{disabled:t.noManagePerm,label:"2"}},[n("span",[t._v("自定义名称")])])],1),2==t.formValidate.title_type?n("Input",{staticClass:"mall-name",attrs:{disabled:t.noManagePerm,placeholder:"请输入自定义名称"},model:{value:t.formValidate.title,callback:function(e){t.$set(t.formValidate,"title",e)},expression:"formValidate.title"}}):t._e()],1)]),n("FormItem",{attrs:{label:"分享图标：",prop:"logo_type"}},[n("RadioGroup",{model:{value:t.formValidate.logo_type,callback:function(e){t.$set(t.formValidate,"logo_type",e)},expression:"formValidate.logo_type"}},[n("Radio",{attrs:{disabled:t.noManagePerm,label:"1"}},[n("span",[t._v("商城LOGO")])]),n("Radio",{attrs:{disabled:t.noManagePerm,label:"2"}},[n("span",[t._v("自定义图标")])])],1),2==t.formValidate.logo_type?n("div",{staticClass:"img-box"},[n("kdx-image-video",{attrs:{type:"image",current:t.formValidate.logo},on:{"on-change":t.changeThumb}}),n("kdx-hint-text",[t._v("建议尺寸800*800像素")])],1):t._e()],1),n("FormItem",{attrs:{label:"分享描述：",prop:"share_description_type"}},[n("RadioGroup",{model:{value:t.formValidate.share_description_type,callback:function(e){t.$set(t.formValidate,"share_description_type",e)},expression:"formValidate.share_description_type"}},[n("Radio",{attrs:{disabled:t.noManagePerm,label:"1"}},[n("span",[t._v("商城默认描述")])]),n("Radio",{attrs:{disabled:t.noManagePerm,label:"2"}},[n("span",[t._v("自定义描述")])])],1),n("div",{staticClass:"flex custom-input"},[2==t.formValidate.share_description_type?n("Input",{staticClass:"desc-input",attrs:{disabled:t.noManagePerm,placeholder:"请输入商城描述",type:"textarea",autosize:{minRows:2}},model:{value:t.formValidate.share_description,callback:function(e){t.$set(t.formValidate,"share_description",e)},expression:"formValidate.share_description"}}):t._e()],1)],1),n("FormItem",{attrs:{label:"分享链接：",prop:"link_type"}},[n("div",{staticClass:"flex-column"},[n("RadioGroup",{model:{value:t.formValidate.link_type,callback:function(e){t.$set(t.formValidate,"link_type",e)},expression:"formValidate.link_type"}},[n("Radio",{attrs:{disabled:t.noManagePerm,label:"1"}},[n("span",[t._v("默认商城首页")])]),n("Radio",{attrs:{disabled:t.noManagePerm,label:"2"}},[n("span",[t._v("自定义跳转链接")])])],1),n("div",{staticClass:"flex custom-input"},[2==t.formValidate.link_type?n("Input",{staticClass:"share-input",attrs:{disabled:t.noManagePerm,placeholder:"请选择链接","enter-button":"选择链接",readonly:"",search:""},on:{"on-search":t.search},model:{value:t.formValidate.link,callback:function(e){t.$set(t.formValidate,"link",e)},expression:"formValidate.link"}}):t._e()],1)],1)])],1)],1),n("link-selector",{attrs:{current:{url:t.formValidate.link}},on:{"on-cancel":t.handleCancel,"on-change":t.changeLink},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}})],1)},i=[]},"650b":function(t,e,a){},7446:function(t,e,a){},"76e3":function(t,e,a){var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("5530"));a("ac1f"),a("5319"),a("498a"),a("d3b7"),a("9911");var l=n(a("a58b")),s={name:"index",components:{LinkSelector:l.default},computed:{noManagePerm:function(){return!this.$getPermMap("sysset.mall.share.manage")}},data:function(){var t=this,e={title:"请输入自定义名称",logo:"请上传自定义图标",share_description:"请输入分享描述",link:"请选择链接"},a=function(a,n,i){var l=a.field;if(!t.isSubmit)return i();var s=l.replace("_type","");"2"===t.formValidate[l]&&""===t.formValidate[s].trim()?i(new Error(e[s])):i()};return{formValidate:{title_type:"1",title:"",logo_type:"1",logo:"",link_type:"1",link:"",share_description_type:"1",share_description:""},rules:{title_type:[{required:!0,validator:a}],logo_type:[{required:!0,validator:a}],share_description_type:[{required:!0,validator:a}],link_type:[{required:!0,validator:a}]},show:!1,isSubmit:!1}},mounted:function(){this.getData()},methods:{changeThumb:function(t){this.formValidate.logo=t},getData:function(){var t=this;this.$api.settingApi.getShareSetting().then((function(e){0===e.error&&(delete e.error,t.formValidate=(0,i.default)((0,i.default)({},t.formValidate),e))}))},handleSave:function(){var t=this;this.isSubmit=!0,this.$refs.form.validate((function(e){if(e){var a=(0,i.default)({},t.formValidate);t.$api.settingApi.editShareSetting((0,i.default)({},a)).then((function(e){0==e.error&&(t.getData(),t.$Message.success("保存成功"))}))}})).finally((function(){t.isSubmit=!1}))},search:function(){this.show=!0},handleCancel:function(){this.show=!1},changeLink:function(t){var e=t.url;this.formValidate.link=e}}};e.default=s},"7a6a":function(t,e,a){"use strict";a.r(e);var n=a("5ef5"),i=a("9791");for(var l in i)["default"].indexOf(l)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(l);a("e8fa");var s=a("2877"),o=Object(s["a"])(i["default"],n["a"],n["b"],!1,null,"31ce4bd5",null);e["default"]=o.exports},9791:function(t,e,a){"use strict";a.r(e);var n=a("76e3"),i=a.n(n);for(var l in n)["default"].indexOf(l)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(l);e["default"]=i.a},9911:function(t,e,a){"use strict";var n=a("23e7"),i=a("857a"),l=a("af03");n({target:"String",proto:!0,forced:l("link")},{link:function(t){return i(this,"a","href",t)}})},a1a7:function(t,e,a){t.exports=a.p+"static/dist/shop/img/share_img.png"},a58b:function(t,e,a){"use strict";a.r(e);var n=a("3107"),i=a("c6ed");for(var l in i)["default"].indexOf(l)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(l);a("d0668"),a("3aaf");var s=a("2877"),o=Object(s["a"])(i["default"],n["a"],n["b"],!1,null,"90370ac6",null);e["default"]=o.exports},b44a:function(t,e,a){},c6ed:function(t,e,a){"use strict";a.r(e);var n=a("5511"),i=a.n(n);for(var l in n)["default"].indexOf(l)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(l);e["default"]=i.a},d0668:function(t,e,a){"use strict";a("650b")},e8fa:function(t,e,a){"use strict";a("7446")}}]);