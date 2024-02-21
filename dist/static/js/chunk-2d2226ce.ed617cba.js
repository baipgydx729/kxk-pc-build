(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2226ce"],{cf0e:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"aux-card"},[a("div",{staticClass:"header"},[a("div",{staticClass:"left"},[a("el-select",{staticStyle:{width:"100px"},attrs:{clearable:""},on:{change:t.changeState},model:{value:t.reqData.state,callback:function(e){t.$set(t.reqData,"state",e)},expression:"reqData.state"}},t._l(t.states,(function(t,e){return a("el-option",{key:t.value,attrs:{value:t.value,label:t.name}})})),1),a("el-date-picker",{staticClass:"margin-left-sm",staticStyle:{width:"300px"},attrs:{type:"daterange","range-separator":" - ","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:t.reqData.dateRange,callback:function(e){t.$set(t.reqData,"dateRange",e)},expression:"reqData.dateRange"}}),a("el-input",{staticClass:"margin-left-sm",staticStyle:{width:"320px"},attrs:{"prefix-icon":"el-icon-search",clearable:"",placeholder:"请输入付款单号/付款方/制单人搜索"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.changeKeyword(e)}},model:{value:t.reqData.keyword,callback:function(e){t.$set(t.reqData,"keyword",e)},expression:"reqData.keyword"}}),a("el-button",{staticClass:"margin-left-sm",attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.fetchDataList}},[t._v("查询")])],1),a("div",{staticClass:"right"},[a("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["payment-orders-create"],expression:"['payment-orders-create']"}],attrs:{type:"success",icon:"el-icon-plus"},on:{click:function(e){return t.$common.toPage("./orders-create")}}},[t._v("新增付款")])],1)]),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.dataLoading,expression:"dataLoading"}],staticClass:"aux-table",attrs:{data:t.dataList,border:"",fit:"",stripe:""}},[a("el-table-column",{attrs:{type:"selection",width:"55",align:"center",fixed:""}}),a("el-table-column",{attrs:{align:"left",width:"200",label:"付款单号"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("router-link",{attrs:{to:"orders-detail/"+e.row._id}},[a("span",{staticClass:"link-hover"},[t._v(t._s(e.row.payment_no))])])]}}])}),a("el-table-column",{attrs:{align:"left",width:"140",label:"付款类型"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t._f("formatTypeName")(e.row.settle_type,t.$constant.SETTLE_ORDERS_TYPES)))]}}])}),a("el-table-column",{attrs:{align:"left",width:"180",label:"付款时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t._f("formatDate")(e.row.payment_date)))]}}])}),a("el-table-column",{attrs:{width:"200",align:"center",label:"收款方名称"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{attrs:{id:e.row.payee_id}},[t._v(t._s(e.row.payee_name))])]}}])}),a("el-table-column",{attrs:{width:"140",align:"center",label:"支付方式"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t._f("formatTypeName")(e.row.payment_type,t.$constant.PAYMENT_TYPES)))])]}}])}),a("el-table-column",{attrs:{width:"140",align:"center",label:"付款金额"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t._f("cent2yuan")(e.row.payment_money)))]}}])}),a("el-table-column",{attrs:{align:"left",label:"备注","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.remark))]}}])}),a("el-table-column",{attrs:{width:"120",align:"center",label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t._f("formatTypeName")(e.row.state,t.states)))]}}])}),a("el-table-column",{attrs:{width:"120",align:"center",label:"制单人"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.create_uname))]}}])}),a("el-table-column",{attrs:{width:"120","header-align":"center",align:"center",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text"},on:{click:function(a){return t.$common.toPage("./orders-detail/"+e.row._id)}}},[t._v("详情")])]}}])})],1),a("div",{staticClass:"padding dflex-c"},[a("el-pagination",{attrs:{background:"","page-size":t.pagination.pageSize,total:t.pagination.totalCount,"current-page":t.pagination.pageNo,"page-sizes":[15,20,50],layout:"total, prev, pager, next","hide-on-single-page":""},on:{"size-change":t.changePageSize,"current-change":t.changePageNo}})],1)],1)])},i=[],o=a("2197"),s={filters:{formatStateText:function(t){return 1==t||0==t?"正常":"停用"}},data:function(){return{permission:"store-query",states:[{name:"全部",value:""},{name:"已审核",value:1},{name:"已作废",value:2}],dataLoading:!1,dataList:[],pagination:{totalCount:1,pageSize:15,pageNo:1},reqData:{state:"",keyword:""}}},mounted:function(){this.fetchDataList()},methods:{fetchDataList:function(){var t=this;this.dataLoading=!0,Object(o["a"])("settle/listPaymentOrders",this.getReqData(),{functionName:"xunda"}).then((function(e){t.dataList=e.data||[],1==t.pagination.pageNo&&(t.pagination.totalCount=e.totalCount),t.dataLoading=!1}))},changeKeyword:function(){this.fetchDataList()},getReqData:function(){return Object.assign({},this.reqData,this.pagination)},changeState:function(){var t=this;this.$common.debounce((function(){return t.fetchDataList()}),300,this)()},changePageNo:function(t){this.pagination.pageNo=t,this.fetchDataList()},changePageSize:function(t){this.pagination.pageNo=1,this.pagination.pageSize=t,this.fetchDataList()},deleteStore:function(t,e){var a=this;this.$confirm("确定要删除该客户？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(o["a"])("store/deleteStore",{storeId:t._id},{functionName:"xunda"}).then((function(t){a.fetchDataList(),a.$message({type:"success",message:"删除成功!"})}))}))}}},l=s,r=a("2877"),c=Object(r["a"])(l,n,i,!1,null,null,null);e["default"]=c.exports}}]);