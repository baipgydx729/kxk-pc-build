(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-325dd638"],{"168a":function(e,t,o){"use strict";var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("el-select",e._b({staticClass:"w-full",attrs:{filterable:"",placeholder:e.$attrs.placeholder||"输入订单号查询",clearable:e.$attrs.clearable||!0,remote:"","remote-method":e.remoteMethod,loading:e.loading},on:{change:e.change,focus:e.initLoad,clear:e.clear},model:{value:e.modelValue,callback:function(t){e.modelValue=t},expression:"modelValue"}},"el-select",e.$attrs,!1),e._l(e.dataList,(function(t){return o("el-option",{key:t.value,attrs:{label:t.name,value:t.value}},[o("div",{staticClass:"dflex-b"},[o("div",[e._v(" "+e._s(t.orders_no)+" ")])])])})),1)],1)},s=[],r=(o("d81d"),o("b0c0"),o("4de4"),o("d3b7"),o("2197")),n={name:"AuxSelectOrders",props:{value:{type:[String,Array],default:function(){return""}},ordersTarget:{type:String,default:"",required:!0},ordersType:{type:String,default:"sales",required:!0,validator:function(e){return-1!==["sales","purchase"].indexOf(e)}},reqParams:{type:Object,default:function(){return{}}}},data:function(){return{loading:!1,dataList:[],modelValue:""}},watch:{value:{handler:function(e,t){this.modelValue=e},immediate:!0},ordersTarget:{handler:function(e,t){this.dataList=[]},immediate:!0}},methods:{initLoad:function(){this.dataList.length>0||this.fetchData()},fetchData:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.loading=!0;var o=Object.assign({ordersNo:t},this.reqParams,{pageSize:10});"sales"===this.ordersType?o.storeId=this.ordersTarget:"sales"===this.ordersType&&(o.supplierId=this.ordersTarget);var a={sales:"orders/listOrders",purchase:"purchase/listOrders"},s=a[this.ordersType];Object(r["a"])(s,o,{functionName:"xunda"}).then((function(t){e.loading=!1,e.dataList=(t.data||[]).map((function(e){return e.name=e.orders_no||"",e.value=e._id,e}))}))},remoteMethod:function(e){var t=this;e&&""!==e?(clearTimeout(this.timer),this.timer=setTimeout((function(){t.fetchData(e)}),200)):this.dataList=[]},change:function(){var e=this;this.$nextTick((function(){e.$emit("input",e.modelValue);var t=e.dataList.filter((function(t){return t.value===e.modelValue}));t.length>0&&e.$emit("change",t[0])}))},clear:function(){this.$emit("clear")}}},i=n,d=o("2877"),l=Object(d["a"])(i,a,s,!1,null,null,null);t["a"]=l.exports},"2a80":function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"app-container"},[o("el-form",{ref:"formData",attrs:{model:e.formData,rules:e.rules,"label-width":"90px","label-align":"left",inline:!0}},[o("div",{staticClass:"aux-card"},[o("div",{staticClass:"header"},[o("div",{staticClass:"left title"},[e._v("销售退单")]),o("div",{staticClass:"right"},[o("el-button",{attrs:{type:"default",icon:"el-icon-tickets"},on:{click:function(t){return e.$common.closePage()}}},[e._v("取消")]),o("el-button",{attrs:{type:"primary",icon:"el-icon-document-checked"},on:{click:e.handleSave}},[e._v("保存 (Ctrl+S)")])],1)]),o("div",{staticClass:"margin-top-sm"},[o("div",{staticClass:"dflex-s"},[o("el-form-item",{attrs:{label:"选择客户",prop:"store_id"}},[o("AuxStoreSelect",{staticStyle:{width:"260px"},on:{change:e.changeStoreSelect},model:{value:e.formData.store_id,callback:function(t){e.$set(e.formData,"store_id",t)},expression:"formData.store_id"}})],1),o("el-form-item",{attrs:{label:"原销售单",prop:"rel_orders_id"}},[o("AuxOrdersSelect",{staticStyle:{width:"260px"},attrs:{"orders-type":"sales","orders-target":e.formData.store_id,"req-params":{settleState:"unsettle",dateSort:"desc"},disabled:!e.formData.store_id},on:{change:e.changeOrdersSelect,clear:e.clearOrdersSelect},model:{value:e.formData.rel_orders_id,callback:function(t){e.$set(e.formData,"rel_orders_id",t)},expression:"formData.rel_orders_id"}})],1),o("el-form-item",{attrs:{label:"开单日期",prop:"orders_date"}},[o("el-date-picker",{staticStyle:{width:"260px"},attrs:{type:"datetime","value-format":"timestamp"},model:{value:e.formData.orders_date,callback:function(t){e.$set(e.formData,"orders_date",t)},expression:"formData.orders_date"}})],1),o("el-form-item",{attrs:{label:"业务员"}},[o("AuxMemberSelect",{model:{value:e.formData.sale_manid,callback:function(t){e.$set(e.formData,"sale_manid",t)},expression:"formData.sale_manid"}})],1)],1)]),o("RefundGoodsTable",{ref:"goodsTable",attrs:{"disabled-custom-add":!!e.formData.rel_orders_id},on:{change:e.changeGoodsCompleted}})],1),o("div",{staticClass:"aux-card margin-top-sm"},[o("div",{staticClass:"padding-top"},[o("el-form-item",{attrs:{label:"其他费用"}},[o("el-input",{attrs:{oninput:"value=value.match(/^\\d+(?:\\.\\d{0,2})?/)",placeholder:"其他费用"},on:{change:e.changeOrdersCompleted},model:{value:e.formData.orders_extend_fee,callback:function(t){e.$set(e.formData,"orders_extend_fee",t)},expression:"formData.orders_extend_fee"}},[o("template",{slot:"append"},[e._v("元")])],2)],1),o("el-form-item",{attrs:{label:"退单金额"}},[o("el-input",{attrs:{disabled:"",placeholder:"金额"},model:{value:e.formData.orders_total_money,callback:function(t){e.$set(e.formData,"orders_total_money",t)},expression:"formData.orders_total_money"}},[o("template",{slot:"append"},[e._v("元")])],2)],1)],1),o("div",{staticClass:"dflex-e padding border-top"},[o("span",{staticClass:"padding-left"},[e._v("其他费用："+e._s(e.formData.orders_extend_fee))]),o("span",{staticClass:"padding-left"},[e._v("退单金额："+e._s(e.formData.orders_total_money))])])]),o("div",{staticClass:"aux-card margin-top"},[o("div",{staticClass:"header"},[o("span",{staticClass:"left title"},[e._v("其他信息")])]),o("div",{staticClass:"padding-top"},[o("el-form-item",{attrs:{label:"退单原因"}},[o("el-select",{attrs:{placeholder:"请选择退单原因",clearable:""},model:{value:e.formData.reason_type,callback:function(t){e.$set(e.formData,"reason_type",t)},expression:"formData.reason_type"}},e._l(e.$constant.REFUND_REASON_TYPES,(function(e){return o("el-option",{key:e.value,attrs:{label:e.name,value:e.value}})})),1)],1),99==e.formData.reason_type?o("div",[o("el-form-item",{attrs:{label:"原因说明"}},[o("el-input",{staticStyle:{width:"40vw"},attrs:{type:"textarea",placeholder:"请填写退单说明",maxlength:"300","show-word-limit":""},model:{value:e.formData.reason_content,callback:function(t){e.$set(e.formData,"reason_content",t)},expression:"formData.reason_content"}})],1)],1):e._e(),o("el-form-item",{attrs:{label:"备注信息",inline:!1}},[o("el-input",{staticStyle:{width:"80vw"},attrs:{type:"textarea",placeholder:"请填写备注信息",maxlength:"600","show-word-limit":""},model:{value:e.formData.remark,callback:function(t){e.$set(e.formData,"remark",t)},expression:"formData.remark"}})],1)],1)])])],1)},s=[],r=o("c7eb"),n=o("1da1"),i=(o("d81d"),o("b0c0"),o("b680"),o("a9e3"),function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"orders-goods-table"},[o("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"goodsTable",staticClass:"aux-table",attrs:{data:e.goodsList,border:"",fit:"","show-summary":"","summary-method":e.summaryMethod}},[o("el-table-column",{attrs:{type:"index",width:"50",align:"center",label:"序号"}}),o("el-table-column",{attrs:{width:"120",align:"center",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-button",{staticStyle:{padding:"6px 12px"},attrs:{type:"default",size:"mini",icon:"el-icon-plus",round:""},on:{click:function(o){return e.handleItemPlus(t.row,t.$index)}}}),o("el-button",{staticStyle:{padding:"6px 12px"},attrs:{type:"default",size:"mini",icon:"el-icon-minus",round:""},on:{click:function(o){return e.handleItemMinus(t.row,t.$index)}}})]}}])}),o("el-table-column",{attrs:{width:"280",align:"left",label:"商品名称"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.goods_name?o("div",{staticClass:"dflex"},[o("div",{staticClass:"goods-img"},[o("img",{attrs:{src:t.row.goods_img||"/static/img/img-empty.png",alt:""}})]),o("div",{staticClass:"flex1"},[o("div",[e._v(e._s(t.row.goods_name))]),t.row.goods_no?o("div",{staticClass:"fs-xs ft-grey"},[e._v("No："+e._s(t.row.goods_no))]):e._e()])]):o("div",[o("AuxGoodsSelectPopoer",{on:{change:function(o){return e.changeItemGoods(o,t.row)}},model:{value:t.row.goods_id,callback:function(o){e.$set(t.row,"goods_id",o)},expression:"scope.row.goods_id"}})],1)]}}])}),o("el-table-column",{attrs:{width:"200",align:"left",label:"规格/属性"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("span",[e._v(e._s(t.row.goods_spec))])]}}])}),o("el-table-column",{attrs:{width:"130",align:"center",label:"单位"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-select",{attrs:{disabled:!t.row.goods_name,placeholder:"单位"},on:{focus:function(o){return e.remoteItemGoodsUnitMethod(t.row)},change:function(o){return e.changeItemGoodsUnit(t.row)}},model:{value:t.row.goods_unit,callback:function(o){e.$set(t.row,"goods_unit",o)},expression:"scope.row.goods_unit"}},e._l(e.getItemGoodsUnitOptions(t.row.goods_id),(function(t){return o("el-option-group",{key:t.label,attrs:{label:t.label}},e._l(t.children,(function(t){return o("el-option",{key:t.unit,attrs:{label:t.unit+(t.unit_desc||""),value:t.unit}},[o("span",[e._v(e._s(t.unit)+e._s(t.unit_desc))])])})),1)})),1)]}}])}),o("el-table-column",{attrs:{width:"120",align:"center",label:"数量",prop:"goods_cnt"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-input",{staticClass:"tac",attrs:{disabled:!t.row.goods_name,oninput:"value=value.match(/^\\d+(?:\\.\\d{0,2})?/)",onfocus:"this.select();",placeholder:"数量"},on:{blur:e.changeGoodsCompleted},model:{value:t.row.goods_cnt,callback:function(o){e.$set(t.row,"goods_cnt",o)},expression:"scope.row.goods_cnt"}})]}}])}),o("el-table-column",{attrs:{width:"120",align:"right",label:"原价(元)"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-input",{staticClass:"tar",attrs:{disabled:!t.row.goods_name,oninput:"value=value.match(/^\\d+(?:\\.\\d{0,2})?/)",onfocus:"this.select();",placeholder:"原价"},on:{blur:function(o){return e.changeItemGoodsOriPrice(t.row)}},model:{value:t.row.goods_ori_price,callback:function(o){e.$set(t.row,"goods_ori_price",o)},expression:"scope.row.goods_ori_price"}})]}}])}),o("el-table-column",{attrs:{width:"120",align:"right",label:"折扣(%)"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-input",{staticClass:"tar",attrs:{disabled:!t.row.goods_name,min:"0",max:"100",oninput:"value=value.match(/^\\d+(?:\\.\\d{0,2})?/)",onfocus:"this.select();",placeholder:"折扣"},on:{blur:function(o){return e.changeItemGoodsRate(t.row)}},model:{value:t.row.goods_rate,callback:function(o){e.$set(t.row,"goods_rate",o)},expression:"scope.row.goods_rate"}})]}}])}),o("el-table-column",{attrs:{width:"120",align:"right",label:"单价(元)"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-input",{staticClass:"tar",attrs:{disabled:!t.row.goods_name,oninput:"value=value.match(/^\\d+(?:\\.\\d{0,2})?/)",onfocus:"this.select();",placeholder:"单价"},on:{blur:function(o){return e.changeItemGoodsPrice(t.row)}},model:{value:t.row.goods_price,callback:function(o){e.$set(t.row,"goods_price",o)},expression:"scope.row.goods_price"}})]}}])}),o("el-table-column",{attrs:{width:"120",align:"right",label:"金额小计(元)",prop:"total_money"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.total_money))]}}])}),o("el-table-column",{attrs:{align:"left",label:"备注","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-popover",{attrs:{placement:"top-start",title:"编辑备注信息",width:"300",trigger:"click"}},[o("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请输入备注"},model:{value:t.row.remark,callback:function(o){e.$set(t.row,"remark",o)},expression:"scope.row.remark"}}),o("span",{staticClass:"link-hover ft-primary",attrs:{slot:"reference"},slot:"reference"},[e._v(" "+e._s(t.row.remark||"编辑")+" ")])],1)]}}])})],1),o("div",{staticClass:"dflex-b padding"},[o("div",{staticClass:"dflex-s"},[e.disabledCustomAdd?e._e():[o("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-plus"},on:{click:e.handleSelectAdd}},[e._v("选择商品")]),e.scanForm.visible?o("el-input",{ref:"scanInput",staticClass:"margin-lr-sm",staticStyle:{width:"260px"},attrs:{clearable:"",size:"small",placeholder:"请扫描商品编码或条形码"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleScanAdd(t)}},model:{value:e.scanForm.keyword,callback:function(t){e.$set(e.scanForm,"keyword",t)},expression:"scanForm.keyword"}}):e._e(),o("el-button",{attrs:{type:"default",size:"small",icon:"el-icon-full-screen"},on:{click:e.handleScanOpen}},[e._v(" "+e._s(e.scanForm.visible?"取消扫码":"扫码录入")+" ")])]],2),o("div",{staticClass:"dflex-e"},[o("span",{staticClass:"padding-left-lg"},[e._v("商品数量："+e._s(e.goodsTotalCount))]),o("span",{staticClass:"padding-left-lg"},[e._v("商品总额："+e._s(e.goodsTotalMoney.toFixed(2)))])])]),o("ImportGoodsDialog",{ref:"importGoodsDialog",on:{onSuccess:e.importGoodsSuccess}}),o("AuxGoodsSelectDialog",{ref:"auxGoodsSelectDialog",on:{onSuccess:e.selectedGoodsSuccess}})],1)}),d=[],l=o("2909"),c=(o("498a"),o("d3b7"),o("159b"),o("a434"),o("4de4"),o("13d5"),o("caad"),o("2197")),u=o("c031"),m=o("b122"),g=o("15f6"),_=o("cb68"),f=o("e5bb"),p={components:{AuxGoodsSelectPopoer:g["a"],ImportGoodsDialog:_["a"],AuxGoodsSelectDialog:m["a"]},props:{loading:{type:Boolean,default:!1},disabledCustomAdd:{type:Boolean,default:!1}},data:function(){return{goodsList:[this.formatItemGoods()],goodsSelectIds:[],goodsSaleGrade:0,goodsTotalCount:0,goodsOriginalMoney:0,goodsDiscountMoney:0,goodsTotalMoney:0,goodsUnitMap:{},scanForm:{visible:!1,keyword:""}}},methods:{initData:function(e){var t=this;this.goodsList=e.map((function(e){return t.formatItemGoods(e)})),this.changeGoodsCompleted()},handleScanOpen:function(){var e=this;this.scanForm.visible=!this.scanForm.visible,this.scanForm.visible&&this.$nextTick((function(){e.$refs.scanInput.focus()}))},handleScanAdd:function(){var e=this,t=this.scanForm.keyword.trim();t&&(this.scanForm.keyword="",Object(c["a"])("goods/getGoodsByCode",{code:t},{functionName:"xunda"}).then((function(t){var o=e.formatItemGoods(t.data,{remark:"",goods_cnt:1});e.initGoodsUnit(o),e.goodsList.push(o)})))},handleSelectAdd:function(){this.$refs.auxGoodsSelectDialog.open()},selectedGoodsSuccess:function(e){var t=this;e.forEach((function(e){t.initGoodsUnit(e),t.goodsList.push(t.formatItemGoods(e,{remark:"",goods_cnt:e.goods_cnt}))})),this.changeGoodsCompleted()},handleImportAdd:function(){this.$refs.importGoodsDialog.open()},importGoodsSuccess:function(e){var t=this;e.forEach((function(e){var o=t.formatItemGoods(e);t.initGoodsUnit(o),t.goodsList.push(o)}))},handleItemPlus:function(e,t){this.goodsList.splice(t+1,0,this.formatItemGoods())},handleItemMinus:function(e,t){this.goodsList.splice(t,1),0===this.goodsList.length&&this.goodsList.push(this.formatItemGoods()),this.changeGoodsCompleted()},initGoodsUnit:function(e){this.goodsUnitMap[e._id]=e.unit_list||[]},addEmpty:function(){this.goodsList.push(this.formatItemGoods())},formatItemGoods:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=e.goods_price||(e.sale_price||e.price||0)/100,a={goods_id:e.goods_id||e._id||"",goods_sku_id:e.goods_sku_id||e.sku_id||"",goods_no:e.goods_no||e.code||"",goods_img:e.goods_img||e.img||"",goods_name:e.goods_name||e.name||"",goods_spec:e.goods_spec||e.spec||"",goods_cnt:e.goods_cnt||t.goods_cnt||0,goods_unit:e.goods_unit||e.unit||"",goods_ori_price:e.goods_ori_price||o||0,goods_rate:e.goods_rate||100,goods_price:o,total_money:e.total_money||0,remark:e.remark||t.remark||""};return a},changeItemGoods:function(e,t){var o=this;t.goodsId||(e.goods?(Object.assign(t,this.formatItemGoods(e.goods,{remark:t.remark,goods_cnt:1})),this.initGoodsUnit(e.goods),this.changeGoodsCompleted()):Object(c["a"])("goods/getInfo",{goods_id:t.goods_id},{functionName:"xunda"}).then((function(e){var a=Object.assign(t,o.formatItemGoods(e.data,{remark:t.remark,goods_cnt:1}));o.initGoodsUnit(a),o.changeGoodsCompleted()})))},getItemGoodsUnitOptions:function(e){if(!e)return[];var t=this.goodsUnitMap[e]||[];if(0===t.length)return[];var o=[{label:"默认单位",children:t.filter((function(e){return 1===e.scale}))}],a=t.filter((function(e){return 1!==e.scale}));return a.length>0&&o.push({label:"辅助单位",children:a}),o},remoteItemGoodsUnitMethod:function(e){var t=this;if(e.goods_id){var o=this.goodsUnitMap[e.goods_id]||[];o.length>1||Object(c["a"])("goods/getInfo",{goods_id:e.goods_id},{functionName:"xunda"}).then((function(e){var o=e.data;t.goodsUnitMap[o._id]=o.unit_list,Object(u["f"])(o),t.goodsList=Object(l["a"])(t.goodsList)}))}},changeItemGoodsUnit:function(e){if(e.goods_id){var t=this.goodsUnitMap[e.goods_id]||[],o=t.filter((function(t){return t.unit===e.goods_unit}));if(0!==o.length){var a=o[0],s=Object(u["b"])(e.goods_id);if(s){var r=f["a"].mul(s.price,a.scale),n=s.sku_datas.filter((function(t){return t.name===e.goods_spec}));if(n.length>0){var i=n.filter((function(t){return t.unit===e.goods_unit}));i.length>0&&(r=i[0].price||0)}var d=Number(r/100);e.goods_ori_price=d.toFixed(2);var l=f["a"].div(e.goods_rate||0,100).toFixed(2);e.goods_price=e.goods_ori_price*l,e.goods_rate=Number(e.goods_rate).toFixed(2),this.changeGoodsCompleted()}}}},changeItemGoodsOriPrice:function(e){var t=Number(e.goods_ori_price||0),o=Number(e.goods_rate||0);e.goods_price=t*(o/100),this.changeGoodsCompleted()},changeItemGoodsRate:function(e){var t=Number(e.goods_ori_price||0),o=Math.max(Math.min(100,Number(e.goods_rate||0)),0);e.goods_rate=o.toFixed(2),e.goods_price=t*(e.goods_rate/100),this.changeGoodsCompleted()},changeItemGoodsPrice:function(e){var t=Number(e.goods_ori_price||0),o=Math.min(Number(e.goods_ori_price||0),Number(e.goods_price||0));e.goods_price=o.toFixed(2),e.goods_rate=(o/t*100).toFixed(2),this.changeGoodsCompleted()},changeGoodsCompleted:function(){this.goodsList.forEach((function(e){e.goods_ori_price=Number(e.goods_ori_price||0).toFixed(2),e.goods_cnt=Number(e.goods_cnt||0),e.goods_price=Number(e.goods_price||0).toFixed(2),e.total_ori_money=(e.goods_cnt*e.goods_ori_price).toFixed(2),e.total_money=(e.goods_cnt*e.goods_price).toFixed(2)})),this.goodsTotalCount=this.goodsList.reduce((function(e,t){return e+t.goods_cnt}),0),this.goodsOriginalMoney=this.goodsList.reduce((function(e,t){return e+Number(t.total_ori_money)}),0),this.goodsTotalMoney=this.goodsList.reduce((function(e,t){return e+Number(t.total_money)}),0),this.goodsDiscountMoney=this.goodsOriginalMoney-this.goodsTotalMoney,this.$emit("change")},getSummaryData:function(){return{goodsTotalCount:this.goodsTotalCount,goodsOriginalMoney:this.goodsOriginalMoney,goodsDiscountMoney:this.goodsDiscountMoney,goodsTotalMoney:this.goodsTotalMoney}},getListData:function(){return this.goodsList.filter((function(e){return!!e.goods_name}))},summaryMethod:function(e){var t=e.columns,o=e.data,a=[];return t.forEach((function(e,t){if(0!==t)if(["goods_cnt","total_money"].includes(e.property)){var s=o.map((function(t){return Number(t[e.property])}));s.every((function(e){return isNaN(e)}))?a[t]="":(a[t]=s.reduce((function(e,t){return e+t}),0),["total_money"].includes(e.property)&&(a[t]=a[t].toFixed(2)))}else a[t]=" ";else a[t]="合计"})),a}}},h=p,b=(o("2b16"),o("2877")),v=Object(b["a"])(h,i,d,!1,null,null,null),y=v.exports,x=o("2051"),w=o("168a"),D=o("b866"),k={name:"SalesRefundCreate",components:{RefundGoodsTable:y,AuxStoreSelect:x["a"],AuxOrdersSelect:w["a"],AuxMemberSelect:D["a"]},data:function(){return{permission:"sales-refund-create",ordersId:"",formData:{orders_date:(new Date).getTime(),orders_no:"",store_id:"",store:{_id:"",name:""},orders_goods:[],sale_manid:"",remark:"",create_uname:"",goods_total_count:0,goods_total_money:0,orders_extend_fee:0,orders_total_money:0,rel_orders_id:"",rel_orders:{},reason_type:10,reason_content:""},rules:{store_id:[{required:!0,message:"请选择客户信息",trigger:"change, blur"}],orders_date:[{required:!0,message:"请填写开单日期",trigger:"change, blur"}]}}},computed:{},mounted:function(){var e=this.$route.query||{},t=e.storeId,o=e.id;t&&(this.formData.store_id=t),o&&(this.ordersId=o,this.fetchDetail())},methods:{fetchDetail:function(){var e=this;Object(c["a"])("orders/getOrders",{ordersId:this.ordersId},{functionName:"xunda"}).then((function(t){e.initOrdersData(t.data)}))},initOrdersData:function(e){var t=this,o={};o.store_id=e.store_id,o.store=e.store,o.orders_date=e.orders_date,o.orders_no=e.orders_no,o.remark=e.remark,o.create_uname=e.create_uname,o.goods_total_count=e.goods_total_count||e.orders_goods_count||0,o.goods_total_money=this.$common.cent2yuan(e.goods_total_money||o.orders_total_money),o.orders_total_money=this.$common.cent2yuan(e.orders_total_money||0),o.orders_extend_fee=this.$common.cent2yuan(e.orders_extend_fee||0),o.orders_goods=e.orders_goods.map((function(e){var o=Object.assign({},e);return o.goods_ori_price=t.$common.cent2yuan(e.goods_ori_price||o.goods_price),o.total_ori_money=t.$common.cent2yuan(e.total_ori_money||o.total_money),o.total_money=t.$common.cent2yuan(e.total_money),o.goods_price=t.$common.cent2yuan(e.goods_price),o})),this.$refs.goodsTable.initData(o.orders_goods),this.formData=o},changeStoreSelect:function(e){this.formData.store_id=e._id,this.formData.store={_id:e._id,name:e.name,contact:e.contact,telephone:e.telephone,address:e.address},this.formData.rel_orders_id="",this.$refs.goodsTable.initData([]),this.$refs.goodsTable.addEmpty(),this.changeOrdersCompleted()},changeOrdersSelect:function(e){var t=this;this.formData.rel_orders_id=e._id,this.formData.rel_orders={orders_no:e.orders_no,orders_id:e._id};var o=e.orders_goods.map((function(e){var o=Object.assign({},e);return o.goods_ori_price=t.$common.cent2yuan(e.goods_ori_price||o.goods_price),o.total_ori_money=t.$common.cent2yuan(e.total_ori_money||o.total_money),o.total_money=t.$common.cent2yuan(e.total_money),o.goods_price=t.$common.cent2yuan(e.goods_price),o}));this.$refs.goodsTable.initData(o),this.changeOrdersCompleted()},clearOrdersSelect:function(){this.$refs.goodsTable.initData([]),this.changeOrdersCompleted()},changeGoodsCompleted:function(){var e=this.$refs.goodsTable.getSummaryData(),t=e.goodsTotalCount,o=void 0===t?0:t,a=e.goodsTotalMoney,s=void 0===a?0:a;this.formData.goods_total_count=o,this.formData.goods_total_money=s,this.changeOrdersCompleted()},changeOrdersCompleted:function(){this.formData.orders_discount_money=(Number(this.formData.orders_discount_money)||0).toFixed(2),this.formData.orders_extend_fee=(Number(this.formData.orders_extend_fee)||0).toFixed(2),this.formData.orders_total_money=(Number(this.formData.goods_total_money)+Number(this.formData.orders_extend_fee)).toFixed(2)},validateForm:function(){var e=this.$refs.goodsTable.getListData();if(0!==e.length)return!0;this.$message.error("商品清单为空")},handleSave:function(){var e=this;this.$refs["formData"].validate((function(t){t&&e.validateForm()&&e.submitForm()}))},submitForm:function(){var e=this;return Object(n["a"])(Object(r["a"])().mark((function t(){var o;return Object(r["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:o={ordersId:e.ordersId,data:e.getOrdersData()},Object(c["a"])("orders/createRefundOrders",o,{functionName:"xunda"}).then((function(t){e.$message("保存成功"),setTimeout((function(){return e.$router.push({name:"SalesRefundDetail",params:{ordersId:t.data}})}),300),e.$common.closePage()}),(function(t){e.$message.error(t.message)}));case 2:case"end":return t.stop()}}),t)})))()},getOrdersData:function(){var e=Object.assign({},this.formData,{orders_goods:this.getOrdersGoods(),goods_total_count:this.formData.goods_total_count,goods_total_money:this.$common.yuan2cent(this.formData.goods_total_money),orders_extend_fee:this.$common.yuan2cent(this.formData.orders_extend_fee||0),orders_total_money:this.$common.yuan2cent(this.formData.orders_total_money)});return this.ordersId||(e.orders_no="XTD"+this.$common.format(new Date,"yyyyMMddhhmmssS")),e},getOrdersGoods:function(){var e=this,t=this.$refs.goodsTable.getListData();return t.map((function(t){var o=Object.assign({},t,{goods_price:e.$common.yuan2cent(t.goods_price),total_money:e.$common.yuan2cent(t.total_money)});return delete o.goods_ori_price,delete o.total_ori_money,delete o.goods_rate,o}))}}},O=k,C=Object(b["a"])(O,a,s,!1,null,null,null);t["default"]=C.exports},"2b16":function(e,t,o){"use strict";o("8998")},8998:function(e,t,o){},cb68:function(e,t,o){"use strict";var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("el-dialog",{attrs:{title:"销售商品导入",visible:e.dialogVisible,width:"50%","before-close":e.close,"append-to-body":"","custom-class":"import-dialog"},on:{"update:visible":function(t){e.dialogVisible=t}}},[o("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loadOpts.loading,expression:"loadOpts.loading"}],staticClass:"dialog-warpper",attrs:{"element-loading-text":e.loadOpts.loadtext}},[o("div",{staticClass:"grid-box-2"},[o("div",{staticClass:"flex1",on:{click:e.downloadTemp}},[o("span",[e._v("1.下载Excel模板")]),o("div",{staticClass:"box-item margin-top"},[o("div",{staticClass:"icon el-icon-document"}),o("div",{staticClass:"txt fs"},[e._v("点击下载Excel模板")])])]),o("div",{staticClass:"flex1"},[o("span",[e._v("2.上传Excel文件")]),o("div",{staticClass:"box-item margin-top"},[o("upload-excel-component",{attrs:{"skin-row":e.skinRow,"before-upload":e.beforeUpload,"on-success":e.uploadSuccess,"on-error":e.uploadError}})],1)])])]),e.errorMsg?o("div",{staticClass:"dialog-error"},[o("p",[e._v("异常错误")]),o("div",[e._v(e._s(e.errorMsg))])]):e._e(),o("div",{staticClass:"dialog-footer"},[o("p",[e._v("操作指引")]),o("p",[e._v("1、下载Excel模板，填写Excel表格;")]),o("p",[e._v("2、将文件拖动到虚线框 -> 系统自动检验数据;")]),o("p",[e._v("3、数据导入成功;")])])])},s=[],r=(o("d81d"),o("a15b"),o("3796")),n=o("c7eb"),i=o("1da1"),d=(o("ac1f"),o("00b4"),o("d3b7"),o("159b"),o("b64b"),o("b0c0"),o("3ca3"),o("ddb0"),o("2a95")),l={"商品ID":{name:"goods_id",type:"string"},"商品图片":{name:"goods_img",type:"url",message:"商品图片必需是完整的Url地址"},"商品名称":{name:"goods_name",type:"any",required:!0,message:"商品名称不能为空"},"商品编号*":{name:"goods_no",type:"any",required:!0,message:"商品编号不能为空"},"规格":{name:"goods_spec",type:"string",message:"商品规格必需是字符"},"单位":{name:"goods_unit",type:"string",message:"商品单位不能为空"},"数量*":{name:"goods_cnt",type:"number",required:!0,validator:function(e,t,o,a,s){var r=/((^[1-9]\d*)|^0)(\.\d{0,2}){0,1}$/;r.test(t)||o("数量*必需为数字"),o()}},"折扣":{name:"goods_rate",type:"number",validator:function(e,t,o,a,s){var r=/((^[1-9]\d*)|^0)(\.\d{0,2}){0,1}$/;!t||r.test(t)?o():o("折扣必需为1~100内数字")}},"单价":{name:"goods_price",type:"number",message:"单价必需是数字"},"备注":{name:"remark",type:"string"}};function c(e,t){return Object.keys(e).forEach((function(o){var a=e[o],s=t[o];s&&(e[s.name]=s.handle?s.handle(a):a)})),e}function u(e){return m.apply(this,arguments)}function m(){return m=Object(i["a"])(Object(n["a"])().mark((function e(t){var o,a,s;return Object(n["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.header,o=t.dataList,a=new d["a"](l),s=o.map((function(e,t){return new Promise((function(o,s){a.validate(e,(function(a,r){a&&s({errors:a,rowIndex:t}),o(c(e,l))}))}))})),e.next=5,Promise.all(s);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)}))),m.apply(this,arguments)}var g={components:{UploadExcelComponent:r["a"]},props:{fileType:{type:String,default:function(){return""}}},data:function(){return{dialogVisible:!1,skinRow:1,loadOpts:{loading:!1,loadtext:"正在加载中"},downOpts:{fileName:"销售导入商品模板_"+(new Date).getTime()+".xlsx",tempUrl:location.protocol+"//"+location.host+"/static/excel/template/salesPrepareTemplate.xlsx"},tableHeader:[],tableData:[],errorMsg:""}},methods:{open:function(){this.dialogVisible=!0},close:function(){this.errorMsg="",this.dialogVisible=!1},downloadTemp:function(){var e=document.createElement("a");e.style.display="none",e.download=this.downOpts.fileName,e.href=this.downOpts.tempUrl,document.body.appendChild(e),e.click(),document.body.removeChild(e)},beforeUpload:function(e){this.errorMsg="",this.loadOpts.loading=!0;var t=e.size/1024/1024<1;return!!t||(this.$message({message:"请不要上传大于1M的文件",type:"warning"}),this.loadOpts.loading=!1,!1)},uploadSuccess:function(e){var t=this,o=e.header,a=e.results;this.tableHeader=o,this.tableData=a,this.loadOpts.loading=!0,this.loadOpts.loadtext="正在校验数据",u({header:o,dataList:a}).then((function(e){setTimeout((function(){t.loadOpts.loading=!1,t.$emit("onSuccess",e),t.close()}),1e3)})).catch((function(e){t.loadOpts.loading=!1;var o=e.errors;if(o){var a=o.map((function(e,t){return t+1+"."+e.field+": "+e.message}));t.errorMsg=a.join("; ")}}))},uploadError:function(e){console.log(e),this.loadOpts.loading=!1}}},_=g,f=(o("e64f"),o("2877")),p=Object(f["a"])(_,a,s,!1,null,null,null);t["a"]=p.exports},e64f:function(e,t,o){"use strict";o("f989")},f989:function(e,t,o){}}]);