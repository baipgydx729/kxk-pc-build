(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-03e4cfb0"],{"0810":function(e,t,a){},"0817":function(e,t,a){"use strict";a("0810")},1276:function(e,t,a){"use strict";var n=a("d784"),r=a("44e7"),o=a("825a"),l=a("1d80"),s=a("4840"),i=a("8aa5"),u=a("50c4"),c=a("14c3"),d=a("9263"),m=a("d039"),f=[].push,p=Math.min,h=4294967295,g=!m((function(){return!RegExp(h,"y")}));n("split",2,(function(e,t,a){var n;return n="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,a){var n=String(l(this)),o=void 0===a?h:a>>>0;if(0===o)return[];if(void 0===e)return[n];if(!r(e))return t.call(n,e,o);var s,i,u,c=[],m=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),p=0,g=new RegExp(e.source,m+"g");while(s=d.call(g,n)){if(i=g.lastIndex,i>p&&(c.push(n.slice(p,s.index)),s.length>1&&s.index<n.length&&f.apply(c,s.slice(1)),u=s[0].length,p=i,c.length>=o))break;g.lastIndex===s.index&&g.lastIndex++}return p===n.length?!u&&g.test("")||c.push(""):c.push(n.slice(p)),c.length>o?c.slice(0,o):c}:"0".split(void 0,0).length?function(e,a){return void 0===e&&0===a?[]:t.call(this,e,a)}:t,[function(t,a){var r=l(this),o=void 0==t?void 0:t[e];return void 0!==o?o.call(t,r,a):n.call(String(r),t,a)},function(e,r){var l=a(n,e,this,r,n!==t);if(l.done)return l.value;var d=o(e),m=String(this),f=s(d,RegExp),_=d.unicode,v=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(g?"y":"g"),b=new f(g?d:"^(?:"+d.source+")",v),x=void 0===r?h:r>>>0;if(0===x)return[];if(0===m.length)return null===c(b,m)?[m]:[];var y=0,w=0,S=[];while(w<m.length){b.lastIndex=g?w:0;var D,k=c(b,g?m:m.slice(w));if(null===k||(D=p(u(b.lastIndex+(g?0:w)),m.length))===y)w=i(m,w,_);else{if(S.push(m.slice(y,w)),S.length===x)return S;for(var C=1;C<=k.length-1;C++)if(S.push(k[C]),S.length===x)return S;w=y=D}}return S.push(m.slice(y)),S}]}),!g)},"5cc6":function(e,t,a){var n=a("74e8");n("Uint8",(function(e){return function(t,a,n){return e(this,t,a,n)}}))},"64d0":function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return u})),a.d(t,"c",(function(){return c})),a.d(t,"d",(function(){return d}));a("d3b7"),a("159b"),a("b0c0"),a("d81d"),a("b680");var n=a("2f46"),r=a.n(n),o=a("60fe"),l=a.n(o),s=a("cf45");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t={};return e.forEach((function(e){t[e.column]=e.name})),t}function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return e.map((function(e){var a={};return t.forEach((function(t){t.handler?a[t.name]=t.handler(e):a[t.name]=e[t.name]})),a}))}var c=[{column:"销售单号",name:"orders_no"},{column:"下单时间",name:"orders_date",handler:function(e){return r()(e.orders_date).format("YYYY-MM-DD HH:mm:ss")}},{column:"供应商名称",name:"supplier_name",handler:function(e){return e.supplier.name}},{column:"商品件数",name:"orders_goods_count",handler:function(e){return e.orders_goods_count||e.total_goods_count}},{column:"订单金额",name:"orders_total_money",handler:function(e){return(e.orders_total_money/100).toFixed(2)}},{column:"结算状态",name:"settle_state",handler:function(e){var t=[{name:"未付款",value:0},{name:"部分付款",value:1},{name:"已付款",value:9}];return s["a"].getTypeName(t,e.settle_state||0)}},{column:"已付金额",name:"settle_money",handler:function(e){return(e.settle_money/100).toFixed(2)}},{column:"待付金额",name:"unsettle_money",handler:function(e){return(((e.should_settle_money||e.orders_total_money)-e.settle_money)/100).toFixed(2)}},{column:"订单状态",name:"state",handler:function(e){return s["a"].getTypeName(l.a.PURCHASE_ORDERS_STATES,e.state||0)}},{column:"经办人",name:"create_uname"},{column:"备注",name:"remark"}],d=[{column:"退单号",name:"orders_no"},{column:"开单时间",name:"orders_date",handler:function(e){return r()(e.orders_date).format("YYYY-MM-DD HH:mm:ss")}},{column:"供应商名称",name:"supplier_name",handler:function(e){return e.supplier.name}},{column:"退单商品数",name:"orders_goods_count"},{column:"退单金额",name:"orders_total_money",handler:function(e){return(e.orders_total_money/100).toFixed(2)}},{column:"退单状态",name:"orders_state",handler:function(e){return s["a"].getTypeName(l.a.PURCHASE_REFUND_STATES,e.state||0)}},{column:"出库状态",name:"stock_state",handler:function(e){return e.rel_stock_id?"已出库":"未出库"}},{column:"收款状态",name:"settle_state",handler:function(e){var t=[{name:"未收款",value:0},{name:"部分收款",value:1},{name:"已收款",value:9}];return s["a"].getTypeName(t,e.settle_state||0)}},{column:"已收金额",name:"settle_money",handler:function(e){return(e.settle_money/100).toFixed(2)}},{column:"待收金额",name:"unsettle_money",handler:function(e){return(((e.should_settle_money||e.orders_total_money)-e.settle_money)/100).toFixed(2)}},{column:"经办人",name:"create_uname"},{column:"备注",name:"remark"}]},"8a59":function(e,t,a){var n=a("74e8");n("Uint8",(function(e){return function(t,a,n){return e(this,t,a,n)}}),!0)},"92fa8":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"aux-card"},[a("div",{staticClass:"header"},[e._m(0),a("div",{staticClass:"right"},[a("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["purchase-orders-create"],expression:"['purchase-orders-create']"}],attrs:{type:"primary",icon:"el-icon-plus"},on:{click:function(t){return e.$common.toPage("./orders-create")}}},[e._v("进货开单")]),a("download-excel",{directives:[{name:"permission",rawName:"v-permission",value:["purchase-orders-export"],expression:"['purchase-orders-export']"}],attrs:{fields:e.exportExcel.fields,data:e.exportExcel.excelData,type:e.exportExcel.type,name:e.exportExcel.filename,progress:e.exportExcel.progress,fetch:e.fetchExcelData}})],1)]),a("div",{staticClass:"filter-container margin-top-sm"},[a("el-form",{ref:"baseForm",attrs:{"label-width":"100px","label-align":"right"}},[a("div",{staticClass:"dflex-b padding-lr"},[a("div",{staticClass:"dflex-s flex1"},[a("el-select",{staticStyle:{width:"120px"},attrs:{clear:!1},model:{value:e.reqData.state,callback:function(t){e.$set(e.reqData,"state",t)},expression:"reqData.state"}},e._l(e.filterStates,(function(e){return a("el-option",{key:e.value,attrs:{label:e.name,value:e.value}})})),1),a("el-date-picker",{staticClass:"margin-left-sm",staticStyle:{width:"300px"},attrs:{type:"daterange","range-separator":" - ","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.reqData.dateRange,callback:function(t){e.$set(e.reqData,"dateRange",t)},expression:"reqData.dateRange"}}),a("el-input",{staticClass:"margin-left-sm",staticStyle:{width:"300px"},attrs:{placeholder:"请输入单号搜索"},on:{confirm:e.fetchDataList},model:{value:e.reqData.ordersNo,callback:function(t){e.$set(e.reqData,"ordersNo",t)},expression:"reqData.ordersNo"}}),a("el-button",{staticClass:"margin-left-sm",attrs:{type:"primary"},on:{click:e.handleSearch}},[e._v("查 询")])],1),a("div",{staticStyle:{"text-align":"right"}})])])],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.dataLoading,expression:"dataLoading"}],staticClass:"aux-table",attrs:{data:e.dataList,border:"",fit:"",stripe:""}},[a("el-table-column",{attrs:{type:"selection",width:"55",align:"center",fixed:""}}),a("el-table-column",{attrs:{width:"200",align:"left",label:"进货单号"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("router-link",{attrs:{to:"orders-detail/"+t.row._id}},[a("span",{staticClass:"link-hover"},[e._v(e._s(t.row.orders_no))])])]}}])}),a("el-table-column",{attrs:{width:"180",align:"left",label:"下单时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("formatDate")(t.row.orders_date)))])]}}])}),a("el-table-column",{attrs:{width:"180",align:"left",label:"供应商名称","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("router-link",{attrs:{to:"store/detail/"+t.row.supplier_id}},[a("span",{staticClass:"link-hover"},[e._v(e._s(t.row.supplier.name))])])]}}])}),a("el-table-column",{attrs:{width:"100",align:"center",label:"商品件数"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.goods_total_count||t.row.total_goods_count))])]}}])}),a("el-table-column",{attrs:{width:"120",align:"right",label:"订单金额"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("cent2yuan")(t.row.orders_total_money)))])]}}])}),a("el-table-column",{attrs:{width:"120",align:"center",label:"结算状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e._f("formatTypeName")(t.row.settle_state||0,e.settleState))+" ")]}}])}),a("el-table-column",{attrs:{width:"120",align:"right",label:"付款金额"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("cent2yuan")(t.row.settle_money)))])]}}])}),a("el-table-column",{attrs:{width:"120",align:"center",label:"订单状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e._f("formatTypeName")(t.row.state,e.$constant.PURCHASE_ORDERS_STATES))+" ")]}}])}),a("el-table-column",{attrs:{width:"120",align:"center",label:"经办人"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.create_uname)+" ")]}}])}),a("el-table-column",{attrs:{align:"left",label:"备注","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.remark))]}}])}),a("el-table-column",{attrs:{width:"90",align:"center",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.$common.toPage("./orders-detail/"+t.row._id)}}},[e._v("详情")])]}}])})],1),a("div",{staticClass:"padding-sm dflex-c"},[a("el-pagination",{attrs:{background:"","page-size":e.pagination.pageSize,total:e.pagination.totalCount,"current-page":e.pagination.pageNo,"page-sizes":[15,20,50],layout:"total, sizes, prev, pager, next, jumper","hide-on-single-page":""},on:{"size-change":e.changePageSize,"current-change":e.changePageNo}})],1)],1)])},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"left"},[a("span",{staticClass:"title"},[e._v("进货订单")])])}],o=a("c7eb"),l=a("1da1"),s=a("64d0"),i=a("2f46"),u=a.n(i),c=a("2197"),d=a("64f8"),m={components:{"download-excel":d["a"]},data:function(){return{permission:"purchase-orders-query",filterStates:[{name:"全 部",value:""},{name:"待审核订单",value:0},{name:"待出库订单",value:1},{name:"待发货订单",value:2},{name:"待签收订单",value:3}],settleState:[{name:"未付款",value:0},{name:"部分付款",value:1},{name:"已付款",value:9}],dataLoading:!1,dataList:[],pagination:{totalCount:1,pageSize:12,pageNo:1},reqData:{dateRange:[],ordersNo:"",storeId:"",goodsId:"",userIds:[],warehouseIds:[],areaIds:[],state:[],settleState:[]},exportExcel:{filename:"进货订单-"+(new Date).getTime()+".xls",type:"xls",fields:Object(s["b"])(s["c"]),excelData:[],progress:0}}},mounted:function(){this.fetchDataList()},methods:{fetchDataList:function(){var e=this;this.dataLoading=!0;var t=Object.assign({},this.getReqData(),this.pagination);Object(c["a"])("purchase/listOrders",t,{functionName:"xunda"}).then((function(t){e.dataList=t.data||[],1==e.pagination.pageNo&&(e.pagination.totalCount=t.totalCount),e.dataLoading=!1}))},getReqData:function(){var e=Object.assign({},this.reqData),t=this.reqData.dateRange||[];return t.length>0&&(e.startDay=u()(t[0]).valueOf(),e.endDay=u()(t[1]).valueOf()),e},fetchExcelData:function(){var e=this;return Object(l["a"])(Object(o["a"])().mark((function t(){var a;return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$common.progressRequest((function(t,a){var n=Object.assign({},e.getReqData(),{pageNo:t,pageSize:a});return Object(c["a"])("purchase/listOrders",n,{functionName:"xunda"})}),(function(t){e.exportExcel.progress=t}));case 2:return a=t.sent,t.abrupt("return",Object(s["a"])(a,s["c"]));case 4:case"end":return t.stop()}}),t)})))()},handleSearch:function(e){this.fetchDataList()},handleTabSelect:function(e){this.reqData.state=e,this.pagination.pageNo=1,this.fetchDataList()},changePageNo:function(e){this.pagination.pageNo=e,this.fetchDataList()},changePageSize:function(e){this.pagination.pageNo=1,this.pagination.pageSize=e,this.fetchDataList()}}},f=m,p=(a("0817"),a("2877")),h=Object(p["a"])(f,n,r,!1,null,null,null);t["default"]=h.exports}}]);