(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9ad33e68"],{1276:function(e,t,a){"use strict";var n=a("d784"),l=a("44e7"),r=a("825a"),s=a("1d80"),o=a("4840"),i=a("8aa5"),c=a("50c4"),u=a("14c3"),d=a("9263"),m=a("d039"),f=[].push,h=Math.min,p=4294967295,g=!m((function(){return!RegExp(p,"y")}));n("split",2,(function(e,t,a){var n;return n="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,a){var n=String(s(this)),r=void 0===a?p:a>>>0;if(0===r)return[];if(void 0===e)return[n];if(!l(e))return t.call(n,e,r);var o,i,c,u=[],m=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),h=0,g=new RegExp(e.source,m+"g");while(o=d.call(g,n)){if(i=g.lastIndex,i>h&&(u.push(n.slice(h,o.index)),o.length>1&&o.index<n.length&&f.apply(u,o.slice(1)),c=o[0].length,h=i,u.length>=r))break;g.lastIndex===o.index&&g.lastIndex++}return h===n.length?!c&&g.test("")||u.push(""):u.push(n.slice(h)),u.length>r?u.slice(0,r):u}:"0".split(void 0,0).length?function(e,a){return void 0===e&&0===a?[]:t.call(this,e,a)}:t,[function(t,a){var l=s(this),r=void 0==t?void 0:t[e];return void 0!==r?r.call(t,l,a):n.call(String(l),t,a)},function(e,l){var s=a(n,e,this,l,n!==t);if(s.done)return s.value;var d=r(e),m=String(this),f=o(d,RegExp),v=d.unicode,_=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(g?"y":"g"),b=new f(g?d:"^(?:"+d.source+")",_),x=void 0===l?p:l>>>0;if(0===x)return[];if(0===m.length)return null===u(b,m)?[m]:[];var y=0,k=0,w=[];while(k<m.length){b.lastIndex=g?k:0;var D,S=u(b,g?m:m.slice(k));if(null===S||(D=h(c(b.lastIndex+(g?0:k)),m.length))===y)k=i(m,k,v);else{if(w.push(m.slice(y,k)),w.length===x)return w;for(var C=1;C<=S.length-1;C++)if(w.push(S[C]),w.length===x)return w;k=y=D}}return w.push(m.slice(y)),w}]}),!g)},"34e4":function(e,t,a){"use strict";a("ba015")},"5cc6":function(e,t,a){var n=a("74e8");n("Uint8",(function(e){return function(t,a,n){return e(this,t,a,n)}}))},"5f65":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"aux-card"},[a("div",{staticClass:"header"},[e._m(0),a("div",{staticClass:"right"},[a("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["sales-orders-create"],expression:"['sales-orders-create']"}],attrs:{type:"primary",icon:"el-icon-plus"},on:{click:function(t){return e.$common.toPage("./orders-create")}}},[e._v("销售开单")]),a("download-excel",{directives:[{name:"permission",rawName:"v-permission",value:["sales-orders-export"],expression:"['sales-orders-export']"}],attrs:{fields:e.exportExcel.fields,data:e.exportExcel.excelData,type:e.exportExcel.type,name:e.exportExcel.filename,progress:e.exportExcel.progress,fetch:e.fetchExcelData}})],1)]),a("div",{staticClass:"filter-container margin-top-sm"},[a("el-form",{ref:"baseForm",attrs:{"label-width":"100px","label-align":"right"}},[e.showMoreFilter?e._e():a("div",{staticClass:"dflex-b padding-lr"},[a("div",{staticClass:"dflex-s flex1"},[a("el-select",{staticStyle:{width:"120px"},attrs:{clear:!1},model:{value:e.reqData.state,callback:function(t){e.$set(e.reqData,"state",t)},expression:"reqData.state"}},e._l(e.filterStates,(function(e){return a("el-option",{key:e.value,attrs:{label:e.name,value:e.value}})})),1),a("el-date-picker",{staticClass:"margin-left-sm",staticStyle:{width:"300px"},attrs:{type:"daterange","range-separator":" - ","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.reqData.dateRange,callback:function(t){e.$set(e.reqData,"dateRange",t)},expression:"reqData.dateRange"}}),a("el-input",{staticClass:"margin-left-sm",staticStyle:{width:"300px"},attrs:{placeholder:"请输入单号搜索"},on:{confirm:e.fetchDataList},model:{value:e.reqData.ordersNo,callback:function(t){e.$set(e.reqData,"ordersNo",t)},expression:"reqData.ordersNo"}}),a("el-button",{staticClass:"margin-left-sm",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleSearch}},[e._v("查 询")])],1),a("div",{staticStyle:{"text-align":"right"}},[a("el-button",{attrs:{type:"text"},on:{click:function(t){e.showMoreFilter=!e.showMoreFilter}}},[e._v(" 更多筛选 "),a("i",{staticClass:"el-icon-arrow-down"})])],1)]),e.showMoreFilter?a("div",{staticClass:"padding-lr"},[a("div",{staticClass:"row dflex-b"},[a("el-form-item",{attrs:{label:"下单时间"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"daterange","range-separator":" - ","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.reqData.dateRange,callback:function(t){e.$set(e.reqData,"dateRange",t)},expression:"reqData.dateRange"}})],1),a("el-form-item",{attrs:{label:"选择客户"}},[a("AuxStoreSelect",{model:{value:e.reqData.storeId,callback:function(t){e.$set(e.reqData,"storeId",t)},expression:"reqData.storeId"}})],1),a("el-form-item",{attrs:{label:"订单号"}},[a("el-input",{attrs:{placeholder:"请输入单号搜索"},model:{value:e.reqData.ordersNo,callback:function(t){e.$set(e.reqData,"ordersNo",t)},expression:"reqData.ordersNo"}})],1)],1),a("div",{staticClass:"row dflex-b"},[a("el-form-item",{attrs:{label:"商品信息"}},[a("AuxGoodsSelect",{model:{value:e.reqData.goodsId,callback:function(t){e.$set(e.reqData,"goodsId",t)},expression:"reqData.goodsId"}})],1),a("el-form-item",{attrs:{label:"出货仓库"}},[a("AuxWarehouseSelect",{attrs:{multi:""},model:{value:e.reqData.warehouseIds,callback:function(t){e.$set(e.reqData,"warehouseIds",t)},expression:"reqData.warehouseIds"}})],1),a("el-form-item",{attrs:{label:"业务员"}},[a("AuxMemberSelect",{attrs:{multi:""},model:{value:e.reqData.userIds,callback:function(t){e.$set(e.reqData,"userIds",t)},expression:"reqData.userIds"}})],1)],1),a("div",{staticClass:"row dflex-b"},[a("el-form-item",{attrs:{label:"下单区域"}},[a("AuxAreaPicker",{model:{value:e.reqData.areaIds,callback:function(t){e.$set(e.reqData,"areaIds",t)},expression:"reqData.areaIds"}})],1),a("div"),a("div")],1),a("div",{staticClass:"row"},[a("el-form-item",{attrs:{label:"单据状态"}},[a("AuxMultiCheckbox",{attrs:{"local-data":e.$constant.ORDERS_STATES},model:{value:e.reqData.state,callback:function(t){e.$set(e.reqData,"state",t)},expression:"reqData.state"}})],1),a("el-form-item",{attrs:{label:"结算状态"}},[a("AuxMultiCheckbox",{attrs:{"local-data":e.settleState},model:{value:e.reqData.settleState,callback:function(t){e.$set(e.reqData,"settleState",t)},expression:"reqData.settleState"}})],1)],1),a("div",{},[a("el-button",{attrs:{type:"default"},on:{click:function(t){e.showMoreFilter=!e.showMoreFilter}}},[e._v("取消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.handleSearch}},[e._v("执行查询")])],1)]):e._e()])],1),a("el-menu",{staticClass:"el-menu-big",attrs:{"default-active":e.activeIndex,mode:"horizontal"},on:{select:e.handleTabSelect}},e._l(e.filterStates,(function(t){return a("el-menu-item",{key:t.code,attrs:{index:t.code}},[e._v(e._s(t.name))])})),1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.dataLoading,expression:"dataLoading"}],staticClass:"aux-table",attrs:{data:e.dataList,border:"",fit:"",stripe:""}},[a("el-table-column",{attrs:{type:"selection",width:"55",align:"center",fixed:""}}),a("el-table-column",{attrs:{width:"200",align:"left",label:"销售单号",fixed:""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("router-link",{attrs:{to:"orders-detail/"+t.row._id}},[a("span",{staticClass:"link-hover"},[e._v(e._s(t.row.orders_no))])])]}}])}),a("el-table-column",{attrs:{width:"180",align:"left",label:"下单时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("formatDate")(t.row.orders_date)))])]}}])}),a("el-table-column",{attrs:{width:"180",align:"left",label:"客户名称","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("router-link",{attrs:{to:"store/detail/"+t.row.receiver_id}},[a("span",{staticClass:"link-hover"},[e._v(e._s(t.row.receiver.name))])])]}}])}),a("el-table-column",{attrs:{width:"100",align:"center",label:"商品件数"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v("x"+e._s(t.row.goods_total_count||t.row.total_goods_count||t.row.orders_goods_count))])]}}])}),a("el-table-column",{attrs:{width:"120",align:"right",label:"订单金额"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("cent2yuan")(t.row.orders_total_money)))])]}}])}),a("el-table-column",{attrs:{width:"120",align:"center",label:"收款状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e._f("formatTypeName")(t.row.settle_state||0,e.settleState))+" ")]}}])}),a("el-table-column",{attrs:{width:"120",align:"right",label:"收款金额"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("cent2yuan")(t.row.settle_money)))])]}}])}),a("el-table-column",{attrs:{width:"120",align:"center",label:"订单状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e._f("formatKeyValue")(t.row.state,e.$constant.ORDERS_STATES,"value","next"))+" ")]}}])}),a("el-table-column",{attrs:{width:"120",align:"center",label:"经办人"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.create_uname)+" ")]}}])}),a("el-table-column",{attrs:{align:"left",label:"备注","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.orders_remark))]}}])}),a("el-table-column",{attrs:{width:"120",align:"center",label:"操作",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.$common.toPage("./orders-detail/"+t.row._id)}}},[e._v("详情")]),!t.row.state||t.row.state<1?a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.$common.toPage("./orders-create?type=edit&id="+t.row._id)}}},[e._v("编辑")]):e._e()]}}])})],1),a("div",{staticClass:"padding-sm dflex-c"},[a("el-pagination",{attrs:{background:"","page-size":e.pagination.pageSize,total:e.pagination.totalCount,"current-page":e.pagination.pageNo,"page-sizes":[15,20,50],layout:"total, sizes, prev, pager, next, jumper","hide-on-single-page":""},on:{"size-change":e.changePageSize,"current-change":e.changePageNo}})],1)],1)])},l=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"left"},[a("span",{staticClass:"title"},[e._v("销售订单")])])}],r=a("c7eb"),s=a("1da1"),o=a("8d88"),i=a("2f46"),c=a.n(i),u=a("2197"),d=a("64f8"),m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"dflex-s"},[a("el-checkbox",{staticClass:"padding-right-lg",attrs:{indeterminate:e.isIndeterminate},on:{change:e.handleCheckAllChange},model:{value:e.checkAll,callback:function(t){e.checkAll=t},expression:"checkAll"}},[e._v("全选")]),a("el-checkbox-group",{on:{change:e.change},model:{value:e.values,callback:function(t){e.values=t},expression:"values"}},e._l(e.dataList,(function(t){return a("el-checkbox",{key:t.value,attrs:{label:t.name}},[e._v(e._s(t.name))])})),1)],1)},f=[],h=(a("d81d"),a("b0c0"),a("d3b7"),a("ddb0"),{name:"AuxMutilCheckbox",props:{value:Array,localData:{type:Array,default:[]}},data:function(){return{checkAll:!1,dataList:[],values:[],isIndeterminate:!0}},watch:{localData:{immediate:!0,handler:function(e,t){Array.isArray(e)&&t!==e&&(this.dataList=this.localData.map((function(e){return e.text=e.name,e})))}}},methods:{handleCheckAllChange:function(e){this.values=e?this.dataList:[],this.isIndeterminate=!1},handleCheckedCitiesChange:function(e){var t=e.length;this.checkAll=t===this.dataList.length,this.isIndeterminate=t>0&&t<this.cities.length},inputAll:function(e){"all"==e[0]?(this.values=this.dataList.map((function(e){return e.value})),this.$emit("input",[])):(this.values=[],this.$emit("input",this.values))},change:function(e){this.values.length==this.dataList.length?(this.all.push("all"),this.$emit("input",[])):(this.all=[],this.$emit("input",this.values))}}}),p=h,g=a("2877"),v=Object(g["a"])(p,m,f,!1,null,null,null),_=v.exports,b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-select",{staticClass:"w-full",attrs:{placeholder:"输入商品名称/编码查询",filterable:"",clearable:"",remote:"","remote-method":e.remoteMethod,loading:e.loading},on:{change:e.change,focus:e.initLoad},model:{value:e.modelValue,callback:function(t){e.modelValue=t},expression:"modelValue"}},e._l(e.dataList,(function(t){return a("el-option",{key:t.value,attrs:{label:t.name,value:t.value}},[a("div",{staticClass:"dflex-b"},[a("div",[a("span",[e._v(e._s(t.name))]),a("span",{staticClass:"fs-xs ft-grey"},[e._v("- "+e._s(t.code))])]),a("div",{staticClass:"padding-left-lg fs-xs ft-grey"},[(t.spec_list||[]).length>0?a("div",[e._v(" 多规格: "),e._l(t.spec_list,(function(t,n){return a("span",{key:n},[e._v(e._s(t.name+"("+t.values.length+")")+";")])}))],2):t.spec?a("div",[e._v("规格: "+e._s(t.spec))]):e._e()])])])})),1)],1)},x=[],y=(a("a434"),a("c031")),k={name:"AuxSelectGoods",props:{value:{type:[String,Array],default:function(){return""}}},data:function(){return{loading:!1,dataList:[],modelValue:""}},methods:{initLoad:function(){if(!(this.dataList.length>0)){var e=Object(y["d"])();e.length>0?this.dataList=e.splice(0,15).map((function(e){return e.name=e.name||"",e.value=e.goods_id,e})):this.fetchData()}},fetchData:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.loading=!0,Object(u["a"])("goods/list",{pageSize:10,simple:!0,keyword:t},{functionName:"xunda"}).then((function(t){e.loading=!1;var a=(t.data||[]).map((function(e){return e.name=e.name||"",e.value=e.goods_id,e}));Object(y["f"])(a),e.dataList=a}))},remoteMethod:function(e){var t=this;e&&""!==e?(this.loading=!0,clearTimeout(this.timer),this.timer=setTimeout((function(){return t.fetchData(e)}),200)):this.dataList=[]},change:function(){var e=this;this.$nextTick((function(){e.$emit("input",e.modelValue),e.$emit("change",{goodsId:e.modelValue,goods:Object(y["b"])(e.modelValue)})}))}}},w=k,D=Object(g["a"])(w,b,x,!1,null,null,null),S=D.exports,C=a("2051"),q=a("b866"),A=a("c3dd"),I=a("f63d"),L={components:{"download-excel":d["a"],AuxMultiCheckbox:_,AuxGoodsSelect:S,AuxStoreSelect:C["a"],AuxMemberSelect:q["a"],AuxWarehouseSelect:A["a"],AuxAreaPicker:I["a"]},data:function(){return{permission:"sales-orders-query",filterStates:[{name:"全部订单",code:"all",value:""},{name:"待审核订单",code:"unApproval",value:0},{name:"待出库订单",code:"unStock",value:1},{name:"待发货订单",code:"unSend",value:2},{name:"待签收订单",code:"unSign",value:3}],settleState:[{name:"未收款",value:0},{name:"部分收款",value:1},{name:"已收款",value:9}],activeIndex:"all",showMoreFilter:!1,dataLoading:!1,dataList:[],pagination:{totalCount:1,pageSize:12,pageNo:1},reqData:{dateRange:[],ordersNo:"",storeId:"",goodsId:"",userIds:[],warehouseIds:[],areaIds:[],state:[],settleState:[]},exportExcel:{filename:"销售订单-"+(new Date).getTime()+".xls",type:"xls",fields:Object(o["b"])(o["c"]),excelData:[],progress:0}}},mounted:function(){this.fetchDataList()},methods:{fetchDataList:function(){var e=this;this.dataLoading=!0;var t=Object.assign({},this.getReqData(),this.pagination);Object(u["a"])("orders/listOrders",t,{functionName:"xunda"}).then((function(t){e.dataList=t.data||[],1===e.pagination.pageNo&&(e.pagination.totalCount=t.totalCount),e.dataLoading=!1}))},getReqData:function(){var e=Object.assign({},this.reqData),t=this.reqData.dateRange||[];return t.length>0&&(e.startDay=c()(t[0]).valueOf(),e.endDay=c()(t[1]).valueOf()),e},fetchExcelData:function(){var e=this;return Object(s["a"])(Object(r["a"])().mark((function t(){var a;return Object(r["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$common.progressRequest((function(t,a){var n=Object.assign({},e.getReqData(),{pageNo:t,pageSize:a});return Object(u["a"])("orders/listOrders",n,{functionName:"xunda"})}),(function(t){e.exportExcel.progress=t}));case 2:return a=t.sent,t.abrupt("return",Object(o["a"])(a,o["c"]));case 4:case"end":return t.stop()}}),t)})))()},handleSearch:function(){this.fetchDataList()},handleTabSelect:function(e){var t=this.$common.getKeyValue(this.filterStates,e,"code","value");this.reqData.state=t,this.pagination.pageNo=1,this.fetchDataList()},changePageNo:function(e){this.pagination.pageNo=e,this.fetchDataList()},changePageSize:function(e){this.pagination.pageNo=1,this.pagination.pageSize=e,this.fetchDataList()}}},$=L,N=(a("34e4"),Object(g["a"])($,n,l,!1,null,null,null));t["default"]=N.exports},"8a59":function(e,t,a){var n=a("74e8");n("Uint8",(function(e){return function(t,a,n){return e(this,t,a,n)}}),!0)},"8d88":function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return c})),a.d(t,"c",(function(){return u})),a.d(t,"d",(function(){return d}));a("d3b7"),a("159b"),a("b0c0"),a("d81d"),a("b680");var n=a("2f46"),l=a.n(n),r=a("60fe"),s=a.n(r),o=a("cf45");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t={};return e.forEach((function(e){t[e.column]=e.name})),t}function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return e.map((function(e){var a={};return t.forEach((function(t){t.handler?a[t.name]=t.handler(e):a[t.name]=e[t.name]})),a}))}var u=[{column:"销售单号",name:"orders_no"},{column:"下单时间",name:"orders_date",handler:function(e){return l()(e.orders_date).format("YYYY-MM-DD HH:mm:ss")}},{column:"客户名称",name:"store_name",handler:function(e){return e.receiver.name}},{column:"商品件数",name:"orders_goods_count"},{column:"优惠金额",name:"orders_discount_money",handler:function(e){return((e.orders_discount_money||0)/100).toFixed(2)}},{column:"订单金额",name:"orders_total_money",handler:function(e){return(e.orders_total_money/100).toFixed(2)}},{column:"收款状态",name:"settle_state",handler:function(e){var t=[{name:"未收款",value:0},{name:"部分收款",value:1},{name:"已收款",value:9}];return o["a"].getTypeName(t,e.settle_state||0)}},{column:"已收金额",name:"settle_money",handler:function(e){return(e.settle_money/100).toFixed(2)}},{column:"待收金额",name:"unsettle_money",handler:function(e){return(((e.should_settle_money||e.orders_total_money)-e.settle_money)/100).toFixed(2)}},{column:"已退金额",name:"refund_money",handler:function(e){return((e.refund_money||0)/100).toFixed(2)}},{column:"订单状态",name:"state",handler:function(e){return o["a"].getTypeName(s.a.ORDERS_STATES,e.state||0)}},{column:"经办人",name:"create_uname"},{column:"备注",name:"remark",handler:function(e){return e.orders_remark}}],d=[{column:"退单号",name:"orders_no"},{column:"开单时间",name:"orders_date",handler:function(e){return l()(e.orders_date).format("YYYY-MM-DD HH:mm:ss")}},{column:"客户名称",name:"store_name",handler:function(e){return e.store.name}},{column:"退单商品数",name:"orders_goods_count"},{column:"退单金额",name:"orders_total_money",handler:function(e){return(e.orders_total_money/100).toFixed(2)}},{column:"退单状态",name:"orders_state",handler:function(e){return o["a"].getTypeName(s.a.ORDERS_REFUND_STATES,e.state||0)}},{column:"入库状态",name:"stock_state",handler:function(e){return e.rel_stock_id?"已入库":"未入库"}},{column:"退款状态",name:"settle_state",handler:function(e){var t=[{name:"未退款",value:0},{name:"部分退款",value:1},{name:"已退款",value:9}];return o["a"].getTypeName(t,e.settle_state||0)}},{column:"已退金额",name:"settle_money",handler:function(e){return(e.settle_money/100).toFixed(2)}},{column:"待退金额",name:"unsettle_money",handler:function(e){return(((e.should_settle_money||e.orders_total_money)-e.settle_money)/100).toFixed(2)}},{column:"经办人",name:"create_uname"},{column:"备注",name:"remark"}]},ba015:function(e,t,a){}}]);