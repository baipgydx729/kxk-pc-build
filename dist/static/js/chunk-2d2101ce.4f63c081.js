(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2101ce"],{b703:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"aux-card"},[a("div",{staticClass:"header"},[t._m(0),a("div",{staticClass:"right"},[a("el-select",{staticClass:"margin-right-sm",staticStyle:{width:"100px"},attrs:{clearable:""},on:{change:t.changeState},model:{value:t.reqData.state,callback:function(e){t.$set(t.reqData,"state",e)},expression:"reqData.state"}},t._l(t.states,(function(t){return a("el-option",{key:t.value,attrs:{value:t.value,label:t.name}})})),1),a("el-input",{staticStyle:{width:"320px"},attrs:{"prefix-icon":"el-icon-search",clearable:"",placeholder:"请输入供应商名称/联系人/电话搜索"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.changeKeyword(e)}},model:{value:t.reqData.keyword,callback:function(e){t.$set(t.reqData,"keyword",e)},expression:"reqData.keyword"}}),a("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["supplier-create"],expression:"['supplier-create']"}],staticClass:"margin-left-sm",attrs:{type:"primary",icon:"el-icon-plus"},on:{click:function(e){return t.$common.toPage("./supplier-create")}}},[t._v("添加供应商")])],1)]),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.dataLoading,expression:"dataLoading"}],staticClass:"aux-table",attrs:{data:t.dataList,border:"",fit:"",stripe:""}},[a("el-table-column",{attrs:{type:"selection",width:"55",align:"center",fixed:""}}),a("el-table-column",{attrs:{align:"left",width:"220",label:"供应商名称",fixed:""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.name))])]}}])}),a("el-table-column",{attrs:{width:"160",align:"left",label:"联系人"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.contact))])]}}])}),a("el-table-column",{attrs:{width:"160",align:"left",label:"联系电话"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.telephone))])]}}])}),a("el-table-column",{attrs:{align:"left",label:"联系地址"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.address))])]}}])}),a("el-table-column",{attrs:{align:"left",label:"备注","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.remark))])]}}])}),a("el-table-column",{attrs:{width:"120",align:"center",label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t._f("formatStateText")(e.row.state)))])]}}])}),a("el-table-column",{attrs:{width:"150",align:"center",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text"},on:{click:function(a){return t.$common.toPage("./supplier-create?type=edit&id="+e.row._id)}}},[t._v("编辑")]),a("el-button",{attrs:{type:"text"},on:{click:function(a){return t.deleteSupplier(e.row,e.$index)}}},[t._v("删除")])]}}])})],1),a("div",{staticClass:"padding dflex-c"},[a("el-pagination",{attrs:{background:"","page-size":t.pagination.pageSize,total:t.pagination.totalCount,"current-page":t.pagination.pageNo,"page-sizes":[15,20,50],layout:"total, prev, pager, next","hide-on-single-page":""},on:{"size-change":t.changePageSize,"current-change":t.changePageNo}})],1)],1)])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"left"},[a("span",{staticClass:"title"},[t._v("供应商列表")])])}],s=a("2197"),l={filters:{formatStateText:function(t){return 1===t||0===t?"正常":"停用"}},data:function(){return{permission:"supplier-query",states:[{name:"全部",value:""},{name:"启用",value:1},{name:"禁用",value:2}],dataLoading:!1,dataList:[],pagination:{totalCount:1,pageSize:15,pageNo:1},reqData:{state:"",keyword:""}}},mounted:function(){this.fetchDataList()},methods:{fetchDataList:function(){var t=this;this.dataLoading=!0,Object(s["a"])("supplier/listSupplier",this.getReqData(),{functionName:"xunda"}).then((function(e){t.dataList=e.data||[],1===t.pagination.pageNo&&(t.pagination.totalCount=e.totalCount),t.dataLoading=!1}))},changeKeyword:function(){this.fetchDataList()},getReqData:function(){return Object.assign({},this.reqData,this.pagination)},changeState:function(){var t=this;this.$common.debounce((function(){return t.fetchDataList()}),300,this)()},changePageNo:function(t){this.pagination.pageNo=t,this.fetchDataList()},changePageSize:function(t){this.pagination.pageNo=1,this.pagination.pageSize=t,this.fetchDataList()},deleteSupplier:function(t,e){var a=this;this.$confirm("确定要删除该供应商？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(s["a"])("supplier/deleteSupplier",{supplierId:t._id},{functionName:"xunda"}).then((function(t){a.fetchDataList(),a.$message({type:"success",message:"删除成功!"})}))}))}}},o=l,r=a("2877"),c=Object(r["a"])(o,n,i,!1,null,null,null);e["default"]=c.exports}}]);