(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-72042a62"],{"0cc9":function(t,e,o){},"2a41":function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"jiangli_top"},[e("img",{attrs:{src:o("07f2")},on:{click:t.onClickLeft}}),e("p",{},[t._v(t._s(t.$t("m.kf_span0")))])]),e("iframe",{staticStyle:{border:"none","margin-top":"45px"},attrs:{src:t.reportUrl,id:"iframe"}})])},r=[],a=(o("4360"),o("b775"),o("c24f")),i={name:"",data:function(){return{reportUrl:"",eid:"",token:""}},mounted:function(){Object(a["d"])().then((function(t){}));var t=this;t.contract()},created:function(){this.token=localStorage.getItem("login_status"),this.token||this.$router.push({path:"/login"})},watch:{$route:function(){}},methods:{contract:function(){var t=this,e=localStorage.getItem("kf");if(console.info(localStorage.getItem("view"),"localStorage.getItem"),"lmeiqia"==localStorage.getItem("view"))return this.eid=e,void(this.reportUrl="#/meiqia");"guanfang"!=localStorage.getItem("view")?(this.reportUrl=e+"?token="+this.token,console.log("客服地址："+e),console.log(this.reportUrl,"this.reportUrl"),setTimeout((function(){var o=document.querySelector("#iframe");t.populateIframe(o,[["token",t.token]],e)}),0)):this.reportUrl=e},populateIframe:function(t,e,o){console.log(t,"iframe"),console.log(e,"headers"),console.log(o,"url");var n=new XMLHttpRequest;n.open("GET",o),n.responseType="blob",e.forEach((function(t){n.setRequestHeader(t[0],t[1])})),n.onreadystatechange=function(){n.DONE===n.readyState&&200===n.status&&(t.src=URL.createObjectURL(n.response))},n.send()},onClickLeft:function(){this.$router.go(-1)}},components:{}},c=i,s=(o("ddb9"),o("2877")),l=Object(s["a"])(c,n,r,!1,null,"07954e8e",null);e["default"]=l.exports},ddb9:function(t,e,o){"use strict";o("0cc9")}}]);