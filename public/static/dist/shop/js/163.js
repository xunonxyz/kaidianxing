(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[163],{"1ce0":function(e,t,n){var a=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("4e82"),n("b64b"),n("d3b7"),n("159b"),n("498a"),n("ac1f"),n("841c"),n("b0c0");var o=a(n("c7eb")),s=a(n("1da1")),r=a(n("ade3")),i=a(n("5530")),c=n("2f62"),u=n("950b"),l=n("c79a"),p=a(n("f54f")),f={computed:(0,i.default)((0,i.default)((0,i.default)({},(0,c.mapGetters)("decorate",["getModal","getAllModalName","getPageItems"])),(0,c.mapState)("decorate",{pageList:function(e){return e.pageList},topItem:function(e){return e.topItem},currentModal:function(e){return e.currentModal},onlyOne:function(e){return e.onlyOneComponent}})),{},{pageItems:function(){var e=this.getPageItems(this.$route.params.page),t=Object.keys(e).sort((function(e,t){return(0,u.groupInfo)(e).yIndex-(0,u.groupInfo)(t).yIndex})),n={};return t.forEach((function(t){n[(0,u.groupInfo)(t).yIndex]=e[t]})),n}}),watch:{search:{immediate:!0,handler:function(){var e=this;this.search.trim()?function(){var t=e.pageItems,n={},a=function(a){t[a].forEach((function(t,o){(t.type.indexOf(e.search)>-1||t.name.indexOf(e.search)>-1)&&(n[a]?n[a][o]=t:n[a]=(0,r.default)({},o,t))}))};for(var o in t)a(o);e.showComponents=n}():this.showComponents=this.pageItems,this.noResult=Object.keys(this.showComponents).length}},pageItems:{immediate:!0,handler:function(){var e=this.pageItems;this.showComponents=this.pageItems,1==this.onlyOne&&this.clickBtn(e[5][0],"global")}}},data:function(){return{noResult:!1,search:"",showComponents:{},openIndex:["1","2","3","4","5","6"],permsChecker:{}}},created:function(){this.permsChecker=(0,p.default)()},methods:(0,i.default)((0,i.default)({hasItem:function(e,t,n){var a=-1;return e.forEach((function(e,o){e[n]==t[n]&&(a=o)})),a},clickBtn:function(e,t){var n=this;return(0,s.default)((0,o.default)().mark((function a(){var s,r,i,c,p;return(0,o.default)().wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(s=(0,u.getModal)(e.type),!s.istop||!n.topItem.length){a.next=9;break}if(r=n.hasItem(n.topItem,s,"id"),i="",r>-1?i="此元素最多允许添加1个":"followbar"!=s.id&&(1==n.topItem.length&&"followbar"!=n.topItem[0].id||n.topItem.length>1)&&(r=0,i="已有顶部固定元素，请删除后添加"),!i){a.next=9;break}return n.$Message["error"]({background:!0,content:i}),n.changeFocus({item:n.topItem[r],pageId:n.$route.params.page}),a.abrupt("return");case 9:if(e.groupType=t,!s.max){a.next=17;break}if(c=0,n.pageList.forEach((function(e){e.id==s.id&&(c+=1,p=e)})),!(c>=s.max)){a.next=17;break}return n.$Message["error"]({background:!0,content:"此元素最多允许添加".concat(s.max,"个")}),n.changeFocus({item:p,pageId:n.$route.params.page}),a.abrupt("return");case 17:n.addModal({list:e,pageId:n.$route.params.page}).then((function(e){var t=e[0];if(t){var n=!0;"diymenu"==t.id&&(n=!1),(0,l.scrollTo)(t,n)}}));case 18:case"end":return a.stop()}}),a)})))()}},(0,c.mapActions)("decorate",["addModal"])),(0,c.mapMutations)("decorate",["changeFocus"]))};t.default=f},"238d":function(e,t,n){"use strict";n.r(t);var a=n("1ce0"),o=n.n(a);for(var s in a)["default"].indexOf(s)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(s);t["default"]=o.a},"673f":function(e,t,n){"use strict";n("db63")},aaf1:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return o}));var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.onlyOne?e._e():a("div",{staticClass:"oper-panel",staticStyle:{overflow:"auto"}},[a("Input",{staticClass:"oper-panel-search",attrs:{prefix:"md-search",placeholder:"搜索组件名称 模糊搜索"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),a("Collapse",{attrs:{simple:""},model:{value:e.openIndex,callback:function(t){e.openIndex=t},expression:"openIndex"}},e._l(e.pageItems,(function(t,o){return a("Panel",{directives:[{name:"show",rawName:"v-show",value:e.showComponents[o],expression:"showComponents[key]"}],key:o,attrs:{name:o,"hide-arrow":""}},[a("i",{staticClass:"ivu-icon icon-full-right iconfont"}),e._v(" "+e._s(t[0].groupName)+" "),a("div",{staticClass:"buttonGroup",attrs:{slot:"content"},slot:"content"},e._l(t,(function(t,s){return a("Button",{directives:[{name:"show",rawName:"v-show",value:e.showComponents[o]&&e.showComponents[o][s]&&!1!==t.show&&!0===e.permsChecker.cachePerms[t.type].showOperBtn,expression:"showComponents[key]&&showComponents[key][index]&&item.show!==false&&permsChecker.cachePerms[item.type].showOperBtn===true"}],key:s,staticClass:"oper-btn",attrs:{type:"primary"},on:{click:function(n){return e.clickBtn(t,o)}}},[t.svg?a("img",{staticClass:"btn-svg",attrs:{src:n("590d")("./"+t.svg+".svg"),alt:""}}):a("i",{staticClass:"btn-icon",class:t.icon,style:{color:t.color}}),e._v(" "+e._s(t.name)+" ")])})),1)])})),1),a("p",{directives:[{name:"show",rawName:"v-show",value:!e.noResult,expression:"!noResult"}],staticClass:"no-result"},[a("i",{staticClass:"icon-fenxiao-leijiyongjin- iconfont"}),a("span",[e._v("暂无结果")])])],1)},o=[]},db63:function(e,t,n){},f85f:function(e,t,n){"use strict";n.r(t);var a=n("aaf1"),o=n("238d");for(var s in o)["default"].indexOf(s)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(s);n("673f");var r=n("2877"),i=Object(r["a"])(o["default"],a["a"],a["b"],!1,null,"73e41020",null);t["default"]=i.exports}}]);