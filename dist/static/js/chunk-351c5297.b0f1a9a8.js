(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-351c5297"],{"472c":function(t,e,n){"use strict";n("b5fa")},"4aed":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:t.fullscreenLoading,expression:"fullscreenLoading",modifiers:{fullscreen:!0,lock:!0}}],staticClass:"main-article",attrs:{id:"element-to-print","element-loading-text":"Efforts to generate PDF"}},[n("button",{on:{click:t.html2pdf}},[t._v("打印")]),n("div",{staticClass:"article__heading"},[n("div",{staticClass:"article__heading__title"},[t._v(" "+t._s(t.article.title)+" ")])]),t._m(0),n("div",{ref:"content",staticClass:"node-article-content",domProps:{innerHTML:t._s(t.article.content)}})])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{color:"#ccc"}},[t._v(" This article is from Evan You on "),n("a",{attrs:{target:"_blank",href:"https://medium.com/the-vue-point/plans-for-the-next-iteration-of-vue-js-777ffea6fabf"}},[t._v("medium")])])}],c=(n("d3b7"),n("3ca3"),n("ddb0"),n("25f0"),{data:function(){return{article:"",fullscreenLoading:!0}},mounted:function(){this.fetchData()},methods:{fetchData:function(){var t=this;n.e("chunk-2d0da5bf").then(n.bind(null,"6aec")).then((function(e){var n=e.default.title;document.title=n,t.article=e.default,t.fullscreenLoading=!1}))},print:function(){var t=this;setTimeout((function(){t.$nextTick((function(){window.print()}))}),3e3)},addScript:function(){function t(t){var e=document.createElement("script");e.type="application/javascript",e.src=t,document.head.appendChild(e)}t("https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js")},html2pdf:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){this.addScript();var t=document.getElementById("element-to-print");html2pdf(t)}))}}),l=c,r=(n("472c"),n("2877")),o=Object(r["a"])(l,i,a,!1,null,null,null);e["default"]=o.exports},b5fa:function(t,e,n){}}]);