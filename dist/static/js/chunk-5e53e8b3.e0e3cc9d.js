(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5e53e8b3"],{"0ccc":function(t,e,s){},"378e":function(t,e,s){"use strict";s("0ccc")},5066:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"goodsTable",staticClass:"aux-table no-border",attrs:{data:t.goodsList,border:"",fit:"","show-summary":"","summary-method":t.summaryMethod}},[s("el-table-column",{attrs:{type:"index",width:"60",align:"center",label:"序号"}}),s("el-table-column",{attrs:{width:"300",align:"left",label:"商品名称"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("div",{staticClass:"dflex"},[e.row.goods_img?s("div",{staticClass:"goods-img"},[s("img",{attrs:{src:e.row.goods_img,mode:"widthFix"}})]):t._e(),s("div",[s("div",[t._v(t._s(e.row.goods_name))]),e.row.goods_no?s("div",{staticClass:"fs-xs ft-grey"},[t._v("No："+t._s(e.row.goods_no))]):t._e()])])]}}])}),s("el-table-column",{attrs:{width:"160",align:"center",label:"规格/属性"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.goods_spec))]}}])}),s("el-table-column",{attrs:{width:"120",align:"center",label:"单位"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.goods_unit))]}}])}),s("el-table-column",{attrs:{width:"120",align:"center",label:"数量",prop:"goods_cnt"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.goods_cnt))]}}])}),s("el-table-column",{attrs:{width:"140",align:"right",label:"原价(元)"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.goods_ori_price))]}}])}),s("el-table-column",{attrs:{width:"140",align:"right",label:"折扣(%)"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.goods_rate))]}}])}),s("el-table-column",{attrs:{width:"140",align:"right",label:"单价(元)"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.goods_price))]}}])}),s("el-table-column",{attrs:{width:"140",align:"right",label:"金额小计(元)",prop:"total_money"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.total_money))]}}])}),s("el-table-column",{attrs:{align:"left",label:"备注","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.remark))]}}])})],1)},o=[],n=(s("d81d"),s("d3b7"),s("159b"),s("caad"),s("a9e3"),s("13d5"),s("b680"),{props:{data:{type:Array,default:function(){return[]}},loading:{type:Boolean,default:!1}},data:function(){return{goodsList:[],goodsTotalCount:0,goodsOriginalMoney:0,goodsDiscountMoney:0,goodsTotalMoney:0}},watch:{data:{handler:function(t,e){this.initData(t)},immediate:!0}},methods:{initData:function(t){var e=this;this.goodsList=t.map((function(t){return e.formatItemGoods(t)}))},formatItemGoods:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t},summaryMethod:function(t){var e=t.columns,s=t.data,a=[];return e.forEach((function(t,e){if(0!==e)if(["goods_cnt","total_money"].includes(t.property)){var o=s.map((function(e){return Number(e[t.property])}));o.every((function(t){return isNaN(t)}))?a[e]="":(a[e]=o.reduce((function(t,e){return t+e}),0),["total_money"].includes(t.property)&&(a[e]=a[e].toFixed(2)))}else a[e]=" ";else a[e]="合计"})),a}}}),r=n,i=(s("378e"),s("2877")),l=Object(i["a"])(r,a,o,!1,null,null,null);e["a"]=l.exports},bcc3:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.dataLoading,expression:"dataLoading"}],ref:"goodsTable",staticClass:"aux-table no-border",attrs:{data:t.goodsList,border:"",fit:"","show-summary":"","summary-method":t.summaryMethod}},[s("el-table-column",{attrs:{type:"index",width:"60",align:"center",label:"序号"}}),s("el-table-column",{attrs:{width:"300",align:"left",label:"商品名称"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("div",[t._v(t._s(e.row.goods_name))]),e.row.goods_no?s("div",{staticClass:"ft-grey fs-xs"},[t._v("No："+t._s(e.row.goods_no))]):t._e()]}}])}),s("el-table-column",{attrs:{width:"160",align:"center",label:"规格属性"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.goods_spec))]}}])}),s("el-table-column",{attrs:{width:"120",align:"center",label:"单位"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.goods_unit))]}}])}),s("el-table-column",{attrs:{width:"120",align:"center",label:"出/入库量",prop:"goods_cnt"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.goods_cnt))]}}])}),s("el-table-column",{attrs:{width:"140",align:"right",label:"单价(元)"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.goods_price))]}}])}),s("el-table-column",{attrs:{width:"140",align:"right",label:"金额小计(元)",prop:"total_money"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.total_money))]}}])}),s("el-table-column",{attrs:{align:"left",label:"备注","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.remark))]}}])})],1)},o=[],n=(s("d81d"),s("d3b7"),s("159b"),s("caad"),s("a9e3"),s("13d5"),s("b680"),{props:{data:{type:Array,default:function(){return[]}}},data:function(){return{dataLoading:!1,goodsList:[]}},watch:{data:{handler:function(t,e){this.goodsList=t},immediate:!0}},methods:{initData:function(t){var e=this;this.goodsList=t.map((function(t){return e.initItemGoods(t)}))},initItemGoods:function(t){return t},summaryMethod:function(t){var e=t.columns,s=t.data,a=[];return e.forEach((function(t,e){if(0!==e)if(["goods_cnt","total_money"].includes(t.property)){var o=s.map((function(e){return Number(e[t.property])}));o.every((function(t){return isNaN(t)}))?a[e]="":(a[e]=o.reduce((function(t,e){return t+e}),0),["total_money"].includes(t.property)&&(a[e]=a[e].toFixed(2)))}else a[e]=" ";else a[e]="合计"})),a}}}),r=n,i=s("2877"),l=Object(i["a"])(r,a,o,!1,null,null,null);e["a"]=l.exports},f169:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"app-container"},[s("div",{staticClass:"aux-card"},[s("div",{staticClass:"header",staticStyle:{"padding-bottom":"0","padding-top":"6px"}},[s("div",{staticClass:"left"},[s("el-menu",{staticClass:"el-menu-big no-border",attrs:{"default-active":t.navActive,mode:"horizontal"},on:{select:t.changeTabSelect}},t._l(t.compNavMenus,(function(e){return s("el-menu-item",{key:e.value,attrs:{index:e.value,disabled:!t.detail.state&&["stock","sign"].includes(e.value)}},[t._v(t._s(e.name))])})),1)],1),s("div",{staticClass:"right"},[0==t.detail.state&&t.$hasPermission("approve-orders-all")?s("el-button",{attrs:{type:"primary",icon:"el-icon-document-checked"},on:{click:t.approvedOrders}},[t._v("审核通过")]):t._e(),9!=t.detail.state&&(t.$hasModule("stock")&&2==t.detail.state||!t.$hasModule("stock")&&t.detail.state>=1)?s("el-button",{attrs:{type:"primary",icon:"el-icon-document-checked"},on:{click:t.completedOrders}},[t._v("标记完成")]):t._e(),t.detail.state>1&&t.$hasPermission("sales-refund-cancel")?s("el-button",{attrs:{type:"defaut",icon:"el-icon-edit"},on:{click:t.cancelOrders}},[t._v("撤销")]):t._e(),t.$hasPermission("sales-refund-delete")?s("el-button",{attrs:{type:"danger",plain:"",icon:"el-icon-delete"},on:{click:t.deleteOrders}},[t._v("作废")]):t._e()],1)]),s("div",{staticClass:"margin-top-sm"},[s("div",{staticClass:"dflex-b padding-lr-lg"},[s("div",{staticClass:"padding-tb"},[s("div",{staticClass:"padding-bottom-sm"},[s("span",[t._v("退货单号："+t._s(t.detail.orders_no))]),t.detail.sales_name?s("span",{staticClass:"margin-left-lg"},[t._v("销售员："+t._s(t.detail.sales_name))]):t._e(),s("span",{staticClass:"margin-left-lg"},[t._v(" 退单状态： "),s("el-tag",{attrs:{size:"small",type:9==t.detail.state?"success":"danger"}},[s("i",{class:9==t.detail.state?"el-icon-check":"el-icon-time"}),t._v(" 退单"+t._s(t._f("formatKeyValue")(t.detail.state,t.$constant.ORDERS_REFUND_STATES,"value","next"))+" ")])],1)]),s("div",{staticClass:"padding-bottom-sm"},[s("span",[t._v("退单客户："+t._s(t.detail.store.name))]),t.detail.store.contact?s("span",{staticClass:"margin-left"},[t._v("联系人："+t._s(t.detail.store.contact))]):t._e(),t.detail.store.telephone?s("span",{staticClass:"margin-left"},[t._v("联系电话："+t._s(t.detail.store.telephone))]):t._e(),t.detail.rel_orders_id?s("span",{staticClass:"margin-left"},[t._v(" 原销售单： "),s("a",{staticClass:"link-hour ft-primary",attrs:{href:"#/sales/orders/orders-detail/"+t.detail.rel_orders_id}},[t._v(t._s(t.detail.rel_orders.orders_no))])]):t._e()]),s("div",{staticClass:"padding-bottom-sm"},[s("span",[t._v("退货原因："+t._s(t._f("formatTypeName")(t.detail.reason_type,t.$constant.REFUND_REASON_TYPES)))])]),t.detail.reason_content?s("div",{staticClass:"padding-bottom-sm"},[s("span",[t._v("退货说明："+t._s(t.detail.reason_content))])]):t._e()]),s("div",{staticClass:"tar ft-grey"},[s("div",{staticClass:"padding-bottom-sm"},[s("span",[t._v("开单日期："+t._s(t._f("formatDate")(t.detail.orders_date)))]),s("span",{staticClass:"margin-left-lg"},[t._v("经办人："+t._s(t.detail.create_uname))])])])])]),s("div",{directives:[{name:"show",rawName:"v-show",value:"basic"==t.navActive,expression:"navActive == 'basic'"}]},[s("OrdersGoodsTableView",{ref:"goodsTable",attrs:{data:t.detail.orders_goods}}),s("div",{staticClass:"dflex-b padding padding-tb-lg"},[s("div",{staticClass:"dflex-s"}),s("div",{staticClass:"dflex-e"},[s("span",{staticClass:"padding-left-lg"},[t._v("其他费用："+t._s(t.detail.orders_extend_fee))]),s("span",{staticClass:"padding-left-lg"},[t._v(" 退单金额： "),s("span",{staticClass:"ft-danger"},[t._v(t._s(t.detail.orders_total_money))])])])])],1),s("div",{directives:[{name:"show",rawName:"v-show",value:"settle"==t.navActive,expression:"navActive == 'settle'"}],staticClass:"dflex-b padding padding-tb-lg border-top"},[s("div",{staticClass:"dflex-s fs"},[s("span",{staticClass:"padding-right"},[t._v("退单金额："+t._s(t.detail.orders_total_money))]),s("span",{staticClass:"padding-right"},[t._v("已退金额："+t._s(t.detail.settle_money))]),s("span",{staticClass:"padding-right"},[t._v(" 待退金额： "),s("span",{staticClass:"ft-danger"},[t._v(t._s(t.detail.unsettle_money))])])]),s("div",{staticClass:"dflex-e"},[s("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["payment-orders-create"],expression:"['payment-orders-create']"}],attrs:{type:"success",icon:"el-icon-plus",disabled:t.detail.unsettle_money<=0},on:{click:t.handleAddSettle}},[t._v("添加退款")])],1)]),s("div",{directives:[{name:"show",rawName:"v-show",value:"stock"==t.navActive,expression:"navActive == 'stock'"}]},[s("OrdersGoodsTableView",{ref:"goodsTable",attrs:{data:t.detail.orders_goods}}),1==t.detail.state?s("div",{staticClass:"margin-top"},[s("div",{staticClass:"header"},[t._m(0),s("div",{staticClass:"right dflex-e"},[s("AuxWarehouseSelect",{staticClass:"margin-right-sm",attrs:{label:"入库仓库"},model:{value:t.targetWarehouseId,callback:function(e){t.targetWarehouseId=e},expression:"targetWarehouseId"}}),s("el-button",{attrs:{type:"primary",icon:"el-icon-out"},on:{click:t.intoStockOrders}},[t._v("立即入库")])],1)])]):t._e()],1)]),s("div",{directives:[{name:"show",rawName:"v-show",value:"basic"==t.navActive,expression:"navActive == 'basic'"}]},[s("el-card",{staticClass:"aux-card margin-top",attrs:{shadow:"none","body-style":{padding:"12px"}}},[s("div",{attrs:{slot:"header"},slot:"header"},[s("span",[t._v("退单备注")])]),s("div",{staticClass:"padding-sm padding-tb-xs"},[t._v(t._s(t.detail.remark))])])],1),s("div",{directives:[{name:"show",rawName:"v-show",value:"stock"==t.navActive&&t.stockOrdersList.length>0,expression:"navActive == 'stock' && stockOrdersList.length > 0"}]},[s("div",{staticClass:"aux-card margin-top"},[t._m(1),t._l(t.stockOrdersList,(function(e){return s("div",{key:e._id,staticClass:"border-bottom"},[s("div",{staticClass:"padding"},[s("span",{staticClass:"padding-right-lg"},[t._v("入库单号："+t._s(e.opt_no))]),s("span",{staticClass:"padding-right-lg"},[t._v("入库时间："+t._s(t._f("formatDate")(e.opt_time)))]),s("span",{staticClass:"padding-right-lg"},[t._v("入库仓库："+t._s(e.warehouse_name))]),s("span",{staticClass:"padding-right-lg"},[t._v("操作人员："+t._s(e.create_uname))])]),s("orders-stock-goods-table",{ref:"stockGoodsTable",refInFor:!0,attrs:{data:e.orders_goods}})],1)}))],2)]),s("div",{directives:[{name:"show",rawName:"v-show",value:"settle"==t.navActive&&t.settleOrdersList.length>0,expression:"navActive == 'settle' && settleOrdersList.length > 0"}]},[s("div",{staticClass:"aux-card margin-top"},[t._m(2),s("el-table",{staticClass:"aux-table",attrs:{data:t.settleOrdersList,border:""}},[s("el-table-column",{attrs:{width:"60",align:"center",label:"#"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.$index+1))]}}])}),s("el-table-column",{attrs:{label:"退款单号",prop:"receipt_no",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("router-link",{attrs:{to:"/accounting/payment/orders-detail/"+e.row._id}},[s("span",{staticClass:"link-hover"},[t._v(t._s(e.row.payment_no))])])]}}])}),s("el-table-column",{attrs:{label:"退款时间",prop:"receipt_date",width:"200",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t._f("formatDate")(e.row.payment_date)))]}}])}),s("el-table-column",{attrs:{label:"退款金额",prop:"receipt_money",width:"200",align:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t._f("cent2yuan")(e.row.payment_money)))]}}])}),s("el-table-column",{attrs:{label:"支付方式",prop:"payment_type",width:"200",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t._f("formatTypeName")(e.row.payment_type,t.$constant.PAYMENT_TYPES)))]}}])}),s("el-table-column",{attrs:{label:"经办人员",prop:"create_uname",width:"200",align:"center"}}),s("el-table-column",{attrs:{label:"备注",prop:"remark"}})],1)],1)])])},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"left"},[s("span",{staticClass:"title"},[t._v("待入库")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"header"},[s("div",{staticClass:"left"},[s("span",{staticClass:"title"},[t._v("入库记录")])]),s("div",{staticClass:"right dflex-e"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"header"},[s("div",{staticClass:"left"},[s("span",{staticClass:"title"},[t._v("退款记录")])]),s("div",{staticClass:"right dflex-e"})])}],n=s("5530"),r=(s("4de4"),s("d3b7"),s("b680"),s("a9e3"),s("d81d"),s("5066")),i=s("bcc3"),l=s("c3dd"),d=s("2197"),c=s("2f62"),u={name:"SalesRefundDetail",components:{OrdersGoodsTableView:r["a"],OrdersStockGoodsTable:i["a"],AuxWarehouseSelect:l["a"]},data:function(){return{permission:"sales-refund-query",navMenus:[{name:"退单详情",value:"basic"},{name:"退货入库",value:"stock",module:"stock"},{name:"结算退款",value:"settle"}],navActive:"basic",ordersId:"",detail:{store_id:"",store:{_id:"",name:"客户"},orders_date:(new Date).getTime(),orders_no:"",remark:"",create_uname:"",state:"",orders_goods:[],goods_total_count:0,goods_total_money:0,orders_total_money:0,settle_state:"",settle_money:0,unsettle_money:0},targetWarehouseId:"",stockOrdersList:[],settleOrdersList:[]}},computed:Object(n["a"])(Object(n["a"])({},Object(c["b"])(["companyId"])),{},{compNavMenus:function(){var t=this;return this.navMenus.filter((function(e){return t.$hasModule(e.module||"")}))}}),mounted:function(){var t=this.$route.params||{},e=t.ordersId;e&&(this.ordersId=e,this.fetchDetail())},methods:{changeTabSelect:function(t){this.navActive=t,"stock"===this.navActive&&this.fetchStockDetail(),"settle"===this.navActive&&this.fetchSettleDetail()},fetchDetail:function(){var t=this;Object(d["a"])("orders/getRefundOrders",{ordersId:this.ordersId},{functionName:"xunda"}).then((function(e){t.initOrdersData(e.data)}))},initOrdersData:function(t){var e=this,s=this.detail=Object.assign({},t);s.store_id=t.store_id,s.store=t.store,s.orders_date=t.orders_date,s.orders_no=t.orders_no,s.remark=t.remark,s.create_uname=t.create_uname,s.goods_total_count=t.goods_total_count||t.orders_goods_count,s.goods_total_money=this.$common.cent2yuan(t.goods_total_money||t.orders_total_money),s.orders_total_money=this.$common.cent2yuan(t.orders_total_money),s.orders_extend_fee=this.$common.cent2yuan(t.orders_extend_fee),s.settle_money=this.$common.cent2yuan(t.settle_money||0),s.unsettle_money=(Number(s.orders_total_money)-Number(s.settle_money)).toFixed(2),s.orders_goods=t.orders_goods.map((function(t){var s=Object.assign({},t);return s.goods_ori_price=e.$common.cent2yuan(t.goods_ori_price||s.goods_price),s.total_ori_money=e.$common.cent2yuan(t.total_ori_money||s.total_money),s.goods_rate=Number(t.goods_rate||100).toFixed(2),s.total_money=e.$common.cent2yuan(t.total_money),s.goods_price=e.$common.cent2yuan(t.goods_price),s}))},fetchStockDetail:function(){var t=this;if(!(this.stockOrdersList.length>0)){var e=this.detail.stock_ids||[this.detail.rel_stock_id];Object(d["a"])("stock/listStockStream",{stockIds:e},{functionName:"xunda"}).then((function(e){t.stockOrdersList=(e.data||[]).map((function(e){var s=e.orders_goods.map((function(e){var s=Object.assign({},e);return s.total_money=t.$common.cent2yuan(e.total_money),s.goods_price=t.$common.cent2yuan(e.goods_price),s}));return e.orders_goods=s,e}))}))}},fetchSettleDetail:function(){var t=this;if(!(this.settleOrdersList.length>0)&&this.detail.settle_orders_ids&&0!==this.detail.settle_orders_ids.length){var e=Object.assign({pageSize:20,pageNo:1},{paymentId:this.detail.settle_orders_ids});Object(d["a"])("settle/listPaymentOrders",e,{functionName:"xunda"}).then((function(e){t.settleOrdersList=e.data||[]}))}},approvedOrders:function(){var t=this;this.$confirm("确定要通过该退单？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"success"}).then((function(){Object(d["a"])("orders/approvedOrders",{ordersId:t.ordersId},{functionName:"xunda"}).then((function(e){t.fetchDetail(),t.$message({type:"success",message:"操作成功!"})}))}))},deleteOrders:function(){var t=this;this.$confirm("确定要删除该退单？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(d["a"])("orders/deleteRefundOrders",{ordersId:t.ordersId},{functionName:"xunda"}).then((function(e){t.$message({type:"success",message:"删除成功!"}),setTimeout((function(){return t.$common.closePage()}),500)}))}))},intoStockOrders:function(){var t=this;this.$confirm("确定要入库嘛？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"success"}).then((function(){Object(d["a"])("orders/intoStockFromRefundOrders",{ordersId:t.ordersId,warehouseId:t.targetWarehouseId},{functionName:"xunda"}).then((function(e){t.fetchDetail(),t.$message({type:"success",message:"操作成功!"}),setTimeout((function(){return t.fetchStockDetail()}),1e3)}))}))},cancelOrders:function(){var t=this;this.$confirm("确定要撤销退单入库操作嘛？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"success"}).then((function(){Object(d["a"])("orders/cancelRefundOrders",{ordersId:t.ordersId},{functionName:"xunda"}).then((function(e){t.fetchDetail(),t.$message({type:"success",message:"操作成功!"})}))}))},completedOrders:function(){var t=this;Object(d["a"])("orders/completeRefundOrders",{ordersId:this.ordersId},{functionName:"xunda"}).then((function(e){t.fetchDetail(),t.$message({type:"success",message:"操作成功!"})}))},handleAddSettle:function(){var t={ordersType:"sales-refund",ordersId:this.ordersId};this.$router.push({path:"/accounting/payment/orders-create",query:t})}}},_=u,m=s("2877"),f=Object(m["a"])(_,a,o,!1,null,null,null);e["default"]=f.exports}}]);