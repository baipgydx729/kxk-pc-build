(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a38f4"],{"0361":function(e,a,t){"use strict";t.r(a);var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"app-container"},[t("upload-excel-component",{attrs:{"on-success":e.handleSuccess,"before-upload":e.beforeUpload}}),t("el-table",{staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:e.tableData,border:"","highlight-current-row":""}},e._l(e.tableHeader,(function(e){return t("el-table-column",{key:e,attrs:{prop:e,label:e}})})),1)],1)},l=[],r=t("3796"),o={name:"UploadExcel",components:{UploadExcelComponent:r["a"]},data:function(){return{tableData:[],tableHeader:[]}},methods:{beforeUpload:function(e){var a=e.size/1024/1024<1;return!!a||(this.$message({message:"Please do not upload files larger than 1m in size.",type:"warning"}),!1)},handleSuccess:function(e){var a=e.results,t=e.header;this.tableData=a,this.tableHeader=t}}},s=o,c=t("2877"),i=Object(c["a"])(s,n,l,!1,null,null,null);a["default"]=i.exports}}]);