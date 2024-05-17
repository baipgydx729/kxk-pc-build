(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d9e90802"],{"4c41":function(e,t,a){"use strict";a("a070")},"9b52":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"aux-card"},[a("div",{staticClass:"header"},[a("div",{staticClass:"left"},[e.$hasPermission("stock-warehouse-create")?a("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:function(t){return e.$refs.warehouseDialog.open()}}},[e._v("新增仓库")]):a("span",{staticClass:"title"},[e._v("仓库管理")])],1),a("div",{staticClass:"right"},[a("el-select",{staticClass:"margin-right-sm",staticStyle:{width:"100px"},attrs:{clearable:""},on:{change:e.changeState},model:{value:e.reqData.state,callback:function(t){e.$set(e.reqData,"state",t)},expression:"reqData.state"}},e._l(e.states,(function(e){return a("el-option",{key:e.value,attrs:{value:e.value,label:e.name}})})),1),a("el-input",{staticStyle:{width:"320px"},attrs:{"prefix-icon":"el-icon-search",clearable:"",placeholder:"请输入仓库名称/电话搜索"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.changeKeyword(t)}},model:{value:e.reqData.keyword,callback:function(t){e.$set(e.reqData,"keyword",t)},expression:"reqData.keyword"}})],1)]),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.dataLoading,expression:"dataLoading"}],staticClass:"aux-table",attrs:{data:e.dataList,border:"",fit:"",stripe:""}},[a("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),a("el-table-column",{attrs:{align:"left",width:"160",label:"仓库名称"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.name))]}}])}),a("el-table-column",{attrs:{align:"left",label:"仓库描述"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.remark))]}}])}),a("el-table-column",{attrs:{width:"90",align:"center",label:"状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("formatStateText")(t.row.state||1)))])]}}])}),a("el-table-column",{attrs:{width:"260",align:"center",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["stock-warehouse-create"],expression:"['stock-warehouse-create']"}],attrs:{type:"text"},on:{click:function(a){return e.editWarehouse(t.row,t.$index)}}},[e._v("编辑")]),a("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["stock-warehouse-delete"],expression:"['stock-warehouse-delete']"}],attrs:{type:"text"},on:{click:function(a){return e.deleteWarehouse(t.row,t.$index)}}},[e._v("删除")])]}}])})],1),a("div",{staticClass:"padding dflex-c"},[a("el-pagination",{attrs:{background:"","page-size":e.pagination.pageSize,total:e.pagination.totalCount,"current-page":e.pagination.pageNo,"page-sizes":[15,20,50],layout:"total, prev, pager, next","hide-on-single-page":""},on:{"size-change":e.changePageSize,"current-change":e.changePageNo}})],1)],1),a("warehouseDialog",{ref:"warehouseDialog",on:{change:e.fetchDataList}})],1)},i=[],s=a("2197"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:"新增仓库",visible:e.dialogVisible,width:"460px"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-form",{ref:"elForm",staticClass:"demo-formData",attrs:{model:e.formData,"status-icon":"",rules:e.rules,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"仓库名称",prop:"name"}},[a("el-input",{staticStyle:{width:"90%"},attrs:{placeholder:"请填写仓库名称",clearable:""},model:{value:e.formData.name,callback:function(t){e.$set(e.formData,"name",t)},expression:"formData.name"}})],1),a("el-form-item",{attrs:{label:"仓库描述",prop:"remark"}},[a("el-input",{staticStyle:{width:"90%"},attrs:{placeholder:"请填写仓库名称",clearable:""},model:{value:e.formData.remark,callback:function(t){e.$set(e.formData,"remark",t)},expression:"formData.remark"}})],1)],1),a("div",{staticClass:"dflex-e padding-top-sm"},[a("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("保存")]),a("el-button",{attrs:{type:"default"},on:{click:e.close}},[e._v("取消")])],1)],1)},r=[],l=(a("b0c0"),{name:"WarehouseDialog",props:{},data:function(){return{dialogVisible:!1,dataLoading:!1,id:"",formData:{id:"",name:"",remark:""},rules:{role_name:[{required:!0,message:"请填写仓库名称",trigger:"blur"},{min:2,max:16,message:"长度在 2 到 16 个字符",trigger:"blur"}]}}},methods:{submit:function(){var e=this;this.$refs["elForm"].validate((function(t){t&&Object(s["a"])("stock/saveWarehouse",e.formData,{functionName:"xunda"}).then((function(t){e.$message.success("保存成功"),setTimeout((function(){e.$emit("change"),e.close()}),300)}))}))},open:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e._id&&(this.formData={id:e._id,name:e.name,remark:e.remark||""}),this.dialogVisible=!0},close:function(){this.dialogVisible=!1}}}),c=l,u=(a("4c41"),a("2877")),d=Object(u["a"])(c,o,r,!1,null,null,null),f=d.exports,m={components:{warehouseDialog:f},filters:{formatStateText:function(e){return"正常"}},data:function(){return{permission:"store-query",states:[{name:"全部",value:""},{name:"启用",value:1},{name:"禁用",value:2}],dataLoading:!1,dataList:[],pagination:{totalCount:1,pageSize:12,pageNo:1},reqData:{state:"",keyword:""}}},mounted:function(){this.fetchDataList()},methods:{fetchDataList:function(){var e=this;this.dataLoading=!0;var t=Object.assign({},this.reqData,this.pagination);Object(s["a"])("stock/listWarehouse",t,{functionName:"xunda"}).then((function(t){e.dataList=t.data||[],1===e.pagination.pageNo&&(e.pagination.totalCount=t.totalCount),e.dataLoading=!1}))},changeState:function(){var e=this;this.$common.debounce((function(){return e.fetchDataList()}),300,this)()},changeKeyword:function(){this.fetchDataList()},changePageNo:function(e){this.pagination.pageNo=e,this.fetchDataList()},changePageSize:function(e){this.pagination.pageNo=1,this.pagination.pageSize=e,this.fetchDataList()},editWarehouse:function(e,t){this.$refs.warehouseDialog.open(e)},deleteWarehouse:function(e,t){var a=this;this.$confirm("确定要删除该仓库？","警告提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(s["a"])("stock/deleteWarehouse",{warehouseId:e._id},{functionName:"xunda"}).then((function(e){a.fetchDataList(),a.$message({type:"success",message:"删除成功!"})}))}))}}},h=m,p=Object(u["a"])(h,n,i,!1,null,null,null);t["default"]=p.exports},a070:function(e,t,a){}}]);