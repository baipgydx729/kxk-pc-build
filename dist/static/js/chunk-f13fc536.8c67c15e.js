(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f13fc536"],{"034e":function(t,e,a){},"085f":function(t,e,a){"use strict";a("034e")},c2d4:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"aux-card"},[a("div",{staticClass:"header"},[a("div",{staticClass:"title"},[t._v("库存商品明细")]),a("div",{staticClass:"dflex"},[a("AuxWarehouseSelect",{staticClass:"margin-left-sm",staticStyle:{width:"160px"},attrs:{multi:!1},on:{change:t.fetchDataList},model:{value:t.reqData.warehouseId,callback:function(e){t.$set(t.reqData,"warehouseId",e)},expression:"reqData.warehouseId"}}),a("el-input",{staticClass:"margin-left-sm",staticStyle:{width:"300px"},attrs:{"prefix-icon":"el-icon-search",clearable:"",placeholder:"请输入商品名称/编号/规格属性搜索"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.fetchDataList(e)}},model:{value:t.reqData.keyword,callback:function(e){t.$set(t.reqData,"keyword",e)},expression:"reqData.keyword"}})],1)]),a("div",{staticClass:"container-main"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.dataLoading,expression:"dataLoading"}],staticClass:"aux-table",attrs:{data:t.dataList,border:"",fit:"",stripe:""}},[a("el-table-column",{attrs:{type:"selection",width:"55",align:"center",fixed:""}}),a("el-table-column",{attrs:{align:"left",label:"商品名称","min-width":"280",fixed:""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"dflex"},[a("el-avatar",{staticStyle:{"min-width":"40px"},attrs:{shape:"square",size:40,fit:"cover",src:e.row.img||"/static/img/img-empty.png"}}),a("div",{staticClass:"padding-left"},[a("div",[t._v(t._s(e.row.name))]),e.row.code?a("div",{staticClass:"ft-grey fs-xs"},[t._v("No："+t._s(e.row.code))]):t._e()])],1)]}}])}),a("el-table-column",{attrs:{align:"center","min-width":"160",label:"规格/属性",prop:"spec"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[t._v(" "+t._s(t.formatSpecText(e.row))+" "),e.row.skuInfo&&(e.row.spec_list||[]).length>0?a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:e.row.spec_list.map((function(t){return t.name})).join(" / "),placement:"top"}},[a("span",{staticClass:"el-icon-warning-outline"})]):t._e()],1)]}}])}),a("el-table-column",{attrs:{align:"center","min-width":"160",label:"所属仓库",prop:"spec"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.warehouseInfo?a("span",[t._v(t._s(e.row.warehouseInfo.name))]):t._e()]}}])}),a("el-table-column",{attrs:{width:"100",align:"center",label:"单位"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.unit))])]}}])}),a("el-table-column",{attrs:{width:"120",align:"right",label:"实物库存"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.remain_count))])]}}])}),a("el-table-column",{attrs:{width:"120",align:"right",label:"锁定库存"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.holding_count))])]}}])}),a("el-table-column",{attrs:{width:"120",align:"right",label:"可用库存"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.stock_num))])]}}])}),a("el-table-column",{attrs:{width:"120",align:"right",label:"成本价(元)"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t._f("cent2yuan")(e.row.cost_price)))])]}}])}),a("el-table-column",{attrs:{width:"120",align:"right",label:"库存总额(元)"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t._f("cent2yuan")(e.row.cost_amount)))])]}}])}),a("el-table-column",{attrs:{width:"120",align:"right",label:"预计销售(元)"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t._f("cent2yuan")(e.row.sales_amount)))])]}}])}),a("el-table-column",{attrs:{width:"120",align:"right",label:"预计利润(元)"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t._f("cent2yuan")(e.row.profit_amount)))])]}}])}),a("el-table-column",{attrs:{width:"120",align:"right",label:"利润率"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.profit_rate+"%"))])]}}])})],1)],1),a("div",{staticClass:"padding-sm dflex-c"},[a("el-pagination",{attrs:{background:"","page-size":t.pagination.pageSize,total:t.pagination.totalCount,"current-page":t.pagination.pageNo,"page-sizes":[10,15,20,30,50],layout:"total, prev, pager, next, sizes","hide-on-single-page":""},on:{"size-change":t.changePageSize,"current-change":t.changePageNo}})],1)])])},i=[],s=a("2197"),o=a("c3dd"),l={components:{AuxWarehouseSelect:o["a"]},filters:{formatStateText(t){return 2===t?"停用":"正常"}},data(){return{permission:"stock-query",showMoreFilter:!1,cateParentId:"",categoryList:[],dataLoading:!1,dataList:[],pagination:{totalCount:1,pageSize:10,pageNo:1},reqData:{cid:"",keyword:"",warehouseId:""}}},mounted(){this.fetchDataList()},methods:{fetchDataList(){this.dataLoading=!0;const t=Object.assign({},this.getReqData(),this.pagination);Object(s["a"])("stock/listGoodsSkuData",t,{functionName:"xunda"}).then(t=>{this.dataList=t.data||[],1==this.pagination.pageNo&&(this.pagination.totalCount=t.totalCount),this.dataLoading=!1})},formatSpecText(t){return t.skuInfo?t.skuInfo.name:t.spec||""},getReqData(){const t=Object.assign({},this.reqData);return t},handleSearch(t){this.fetchDataList()},changePageNo(t){this.pagination.pageNo=t,this.fetchDataList()},changePageSize(t){this.pagination.pageNo=1,this.pagination.pageSize=t,this.fetchDataList()},changeCategory(t){this.reqData.cid=t?t._id:"",this.pagination.pageNo=1,this.fetchDataList()}}},r=l,c=(a("085f"),a("2877")),u=Object(c["a"])(r,n,i,!1,null,null,null);e["default"]=u.exports}}]);