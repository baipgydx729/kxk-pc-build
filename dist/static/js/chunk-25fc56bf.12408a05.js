(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-25fc56bf"],{"168a":function(e,t,o){"use strict";var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("el-select",e._b({staticClass:"w-full",attrs:{filterable:"",placeholder:e.$attrs.placeholder||"输入订单号查询",clearable:e.$attrs.clearable||!0,remote:"","remote-method":e.remoteMethod,loading:e.loading},on:{change:e.change,focus:e.initLoad,clear:e.clear},model:{value:e.modelValue,callback:function(t){e.modelValue=t},expression:"modelValue"}},"el-select",e.$attrs,!1),e._l(e.dataList,(function(t){return o("el-option",{key:t.value,attrs:{label:t.name,value:t.value}},[o("div",{staticClass:"dflex-b"},[o("div",[e._v(" "+e._s(t.orders_no)+" ")])])])})),1)],1)},s=[],r=o("2197"),l={name:"AuxSelectOrders",props:{value:{type:[String,Array],default:()=>""},ordersTarget:{type:String,default:"",required:!0},ordersType:{type:String,default:"sales",required:!0,validator:e=>-1!==["sales","purchase"].indexOf(e)},reqParams:{type:Object,default:()=>({})}},data(){return{loading:!1,dataList:[],modelValue:""}},watch:{value:{handler(e,t){this.modelValue=e},immediate:!0},ordersTarget:{handler(e,t){this.dataList=[]},immediate:!0}},methods:{initLoad(){this.dataList.length>0||this.fetchData()},fetchData(e=""){this.loading=!0;const t=Object.assign({ordersNo:e},this.reqParams,{pageSize:10});"sales"===this.ordersType?t.storeId=this.ordersTarget:"sales"===this.ordersType&&(t.supplierId=this.ordersTarget);const o={sales:"orders/listOrders",purchase:"purchase/listOrders"},a=o[this.ordersType];Object(r["a"])(a,t,{functionName:"xunda"}).then(e=>{this.loading=!1,this.dataList=(e.data||[]).map(e=>(e.name=e.orders_no||"",e.value=e._id,e))})},remoteMethod(e){e&&""!==e?(clearTimeout(this.timer),this.timer=setTimeout(()=>{this.fetchData(e)},200)):this.dataList=[]},change(){this.$nextTick(()=>{this.$emit("input",this.modelValue);const e=this.dataList.filter(e=>e.value===this.modelValue);e.length>0&&this.$emit("change",e[0])})},clear(){this.$emit("clear")}}},d=l,n=o("2877"),i=Object(n["a"])(d,a,s,!1,null,null,null);t["a"]=i.exports},b2d8:function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"app-container"},[o("el-form",{ref:"formData",attrs:{model:e.formData,rules:e.rules,"label-width":"90px","label-align":"left",inline:!0}},[o("div",{staticClass:"aux-card"},[o("div",{staticClass:"header"},[o("div",{staticClass:"left title"},[e._v("进货退单")]),o("div",{staticClass:"right"},[o("el-button",{attrs:{type:"default",icon:"el-icon-tickets"},on:{click:function(t){return e.$common.closePage()}}},[e._v("取消")]),o("el-button",{attrs:{type:"primary",icon:"el-icon-document-checked"},on:{click:e.handleSave}},[e._v("保存 (Ctrl+S)")])],1)]),o("div",{staticClass:"margin-top-sm"},[o("div",{staticClass:"dflex-s"},[o("el-form-item",{attrs:{label:"供货商",prop:"supplier_id"}},[o("AuxSupplierSelect",{staticStyle:{width:"260px"},on:{change:e.changeSupplierSelect},model:{value:e.formData.supplier_id,callback:function(t){e.$set(e.formData,"supplier_id",t)},expression:"formData.supplier_id"}})],1),o("el-form-item",{attrs:{label:"原进货单",prop:"rel_orders_id"}},[o("AuxOrdersSelect",{staticStyle:{width:"260px"},attrs:{"orders-type":"purchase","orders-target":e.formData.supplier_id,"req-params":{state:[2,3,4,9],dateSort:"desc"},disabled:!e.formData.supplier_id},on:{change:e.changeOrdersSelect},model:{value:e.formData.rel_orders_id,callback:function(t){e.$set(e.formData,"rel_orders_id",t)},expression:"formData.rel_orders_id"}})],1),o("el-form-item",{attrs:{label:"退单日期",prop:"orders_date"}},[o("el-date-picker",{staticStyle:{width:"260px"},attrs:{type:"datetime","value-format":"timestamp"},model:{value:e.formData.orders_date,callback:function(t){e.$set(e.formData,"orders_date",t)},expression:"formData.orders_date"}})],1)],1)]),o("refund-orders-goods-table",{ref:"goodsTable",on:{change:e.changeOrdersGoodsCompleted}})],1),o("div",{staticClass:"aux-card margin-top-sm"},[o("div",{staticClass:"padding-top"},[o("el-form-item",{attrs:{label:"其他费用"}},[o("el-input",{attrs:{oninput:"value=value.match(/^\\d+(?:\\.\\d{0,2})?/)",placeholder:"其他费用"},on:{change:e.changeOrdersCompleted},model:{value:e.formData.orders_extend_fee,callback:function(t){e.$set(e.formData,"orders_extend_fee",t)},expression:"formData.orders_extend_fee"}},[o("template",{slot:"append"},[e._v("元")])],2)],1),o("el-form-item",{attrs:{label:"退单金额"}},[o("el-input",{attrs:{disabled:"",placeholder:"金额"},model:{value:e.formData.orders_total_money,callback:function(t){e.$set(e.formData,"orders_total_money",t)},expression:"formData.orders_total_money"}},[o("template",{slot:"append"},[e._v("元")])],2)],1)],1),o("div",{staticClass:"dflex-e padding border-top"},[o("span",{staticClass:"padding-left"},[e._v("其他费用："+e._s(e.formData.orders_extend_fee))]),o("span",{staticClass:"padding-left"},[e._v("退单金额："+e._s(e.formData.orders_total_money))])])]),o("div",{staticClass:"aux-card margin-top"},[o("div",{staticClass:"header"},[o("span",{staticClass:"left title"},[e._v("其他信息")])]),o("div",{staticClass:"padding-top"},[o("el-form-item",{attrs:{label:"退单原因"}},[o("el-select",{attrs:{placeholder:"请选择退单原因",clearable:""},model:{value:e.formData.reason_type,callback:function(t){e.$set(e.formData,"reason_type",t)},expression:"formData.reason_type"}},e._l(e.$constant.REFUND_REASON_TYPES,(function(e){return o("el-option",{key:e.value,attrs:{label:e.name,value:e.value}})})),1)],1),99==e.formData.reason_type?o("div",[o("el-form-item",{attrs:{label:"原因说明"}},[o("el-input",{staticStyle:{width:"40vw"},attrs:{type:"textarea",placeholder:"请填写退单说明",maxlength:"300","show-word-limit":""},model:{value:e.formData.reason_content,callback:function(t){e.$set(e.formData,"reason_content",t)},expression:"formData.reason_content"}})],1)],1):e._e(),o("el-form-item",{attrs:{label:"备注信息",inline:!1}},[o("el-input",{staticStyle:{width:"80vw"},attrs:{type:"textarea",placeholder:"请填写备注信息",maxlength:"600","show-word-limit":""},model:{value:e.formData.remark,callback:function(t){e.$set(e.formData,"remark",t)},expression:"formData.remark"}})],1)],1)])])],1)},s=[],r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.dataLoading,expression:"dataLoading"}],ref:"goodsTable",staticClass:"aux-table",attrs:{data:e.goodsList,border:"",fit:"","show-summary":"","summary-method":e.summaryMethod}},[o("el-table-column",{attrs:{type:"index",width:"50",align:"center",label:"序号"}}),o("el-table-column",{attrs:{width:"80",align:"center",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-button",{staticStyle:{padding:"6px 12px"},attrs:{type:"default",size:"mini",icon:"el-icon-minus",disabled:1==e.goodsList.length&&0==t.$index,round:""},on:{click:function(o){return e.handleItemMinus(t.row,t.$index)}}})]}}])}),o("el-table-column",{attrs:{width:"280",align:"left",label:"商品名称/规格"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("div",[e._v(e._s(t.row.goods_name))]),t.row.goods_spec?o("div",{staticClass:"ft-xs ft-grey"},[e._v("规格："+e._s(t.row.goods_spec))]):e._e()]}}])}),o("el-table-column",{attrs:{width:"200",align:"left",label:"商品编号"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("span",[e._v(e._s(t.row.goods_no))])]}}])}),o("el-table-column",{attrs:{width:"120",align:"center",label:"单位"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.goods_unit))]}}])}),o("el-table-column",{attrs:{width:"120",align:"right",label:"数量",prop:"goods_cnt"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-input",{staticClass:"tar",attrs:{disabled:!t.row.goods_name,oninput:"value=value.match(/^\\d+(?:\\.\\d{0,2})?/)",onfocus:"this.select();",placeholder:"数量"},on:{blur:e.changeCompleted},model:{value:t.row.goods_cnt,callback:function(o){e.$set(t.row,"goods_cnt",o)},expression:"scope.row.goods_cnt"}})]}}])}),o("el-table-column",{attrs:{width:"120",align:"right",label:"单价(元)"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-input",{staticClass:"tar",attrs:{disabled:!t.row.goods_name,oninput:"value=value.match(/^\\d+(?:\\.\\d{0,2})?/)",onfocus:"this.select();",placeholder:"单价"},on:{blur:function(o){return e.changeItemGoodsPrice(t.row)}},model:{value:t.row.goods_price,callback:function(o){e.$set(t.row,"goods_price",o)},expression:"scope.row.goods_price"}})]}}])}),o("el-table-column",{attrs:{width:"120",align:"right",label:"金额小计(元)",prop:"total_money"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("span",[e._v(e._s(t.row.total_money))])]}}])}),o("el-table-column",{attrs:{width:"160",align:"center",label:"退货原因"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-select",{attrs:{placeholder:"非必填",clearable:""},model:{value:t.row.reon,callback:function(o){e.$set(t.row,"reon",o)},expression:"scope.row.reon"}},e._l(e.$constant.REFUND_REASON_TYPES,(function(e){return o("el-option",{key:e.value,attrs:{label:e.name,value:e.value}})})),1)]}}])}),o("el-table-column",{attrs:{align:"left",label:"备注","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-popover",{attrs:{placement:"top-start",title:"编辑备注信息",width:"300",trigger:"click"}},[o("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请输入备注"},model:{value:t.row.remark,callback:function(o){e.$set(t.row,"remark",o)},expression:"scope.row.remark"}}),o("span",{staticClass:"link-hover ft-primary",attrs:{slot:"reference"},slot:"reference"},[e._v(" "+e._s(t.row.remark||"添加备注")+" ")])],1)]}}])})],1),o("div",{staticClass:"dflex-b padding"},[o("div",{staticClass:"dflex-s"}),o("div",{staticClass:"dflex-e"},[o("span",{staticClass:"padding-left-lg"},[e._v("商品数量："+e._s(e.goodsTotalCount))]),o("span",{staticClass:"padding-left-lg"},[e._v("商品总额："+e._s(e.goodsTotalMoney.toFixed(2)))])])])],1)},l=[],d=(o("13d5"),{components:{},data(){return{dataLoading:!1,goodsList:[],goodsTotalCount:0,goodsOriginalMoney:0,goodsTotalMoney:0}},methods:{handleItemMinus(e,t){1!==this.goodsList.length&&(this.goodsList.splice(t,1),this.changeCompleted())},initData(e){this.goodsList=e.map(e=>this.initItemGoods(e)),this.changeCompleted()},initItemGoods(e={},t={}){const o={goods_id:e.goods_id||e._id||"",goods_sku_id:e.goods_sku_id||e.sku_id||"",goods_no:e.goods_no||e.code||"",goods_name:e.goods_name||e.name||"",goods_spec:e.goods_spec||e.spec||"",goods_cnt:e.goods_cnt||t.goods_cnt||0,goods_unit:e.goods_unit||e.unit||"",goods_price:e.goods_price||0,total_money:e.total_money||0,remark:e.remark||t.remark||""};return o},changeItemGoodsPrice(e){this.changeCompleted()},changeCompleted(){this.goodsList.forEach(e=>{e.goods_cnt=Number(e.goods_cnt||0),e.goods_price=Number(e.goods_price||0).toFixed(2),e.total_money=(e.goods_cnt*e.goods_price).toFixed(2)}),this.goodsTotalCount=this.goodsList.reduce((e,t)=>e+t.goods_cnt,0),this.goodsTotalMoney=this.goodsList.reduce((e,t)=>e+Number(t.total_money),0),this.$emit("change")},getSummaryData(){return{goodsTotalCount:this.goodsTotalCount,goodsTotalMoney:this.goodsTotalMoney}},getListData(){return this.goodsList.filter(e=>!!e.goods_name&&!!e.goods_cnt)},summaryMethod({columns:e,data:t}){const o=[];return e.forEach((e,a)=>{if(0===a)return void(o[a]="合计");if(!["goods_cnt","total_money"].includes(e.property))return void(o[a]=" ");const s=t.map(t=>Number(t[e.property]));s.every(e=>isNaN(e))?o[a]="":(o[a]=s.reduce((e,t)=>e+t,0),["total_money"].includes(e.property)&&(o[a]=o[a].toFixed(2)))}),o}}}),n=d,i=o("2877"),c=Object(i["a"])(n,r,l,!1,null,null,null),m=c.exports,u=o("d262"),_=o("168a"),p=o("2197"),h={name:"PurchaseRefundCreate",components:{"refund-orders-goods-table":m,AuxSupplierSelect:u["a"],AuxOrdersSelect:_["a"]},data(){return{permission:"purchase-refund-create",ordersId:"",formData:{orders_date:(new Date).getTime(),orders_no:"",supplier_id:"",supplier:{_id:"",name:""},orders_goods:[],sale_manid:"",remark:"",create_uname:"",goods_total_count:0,goods_total_money:0,orders_extend_fee:0,orders_total_money:0,rel_orders_id:"",rel_orders:{},reason_type:10,reason_content:""},rules:{supplier_id:[{required:!0,message:"请选择供货商信息",trigger:"change, blur"}],rel_orders_id:[{required:!0,message:"请选择进货订单",trigger:"change, blur"}],orders_date:[{required:!0,message:"请填写开单日期",trigger:"change, blur"}]}}},computed:{},mounted(){const{supplierId:e,id:t}=this.$route.query||{};e&&(this.formData.supplier_id=e),t&&(this.ordersId=t,this.fetchDetail())},methods:{fetchDetail(){Object(p["a"])("orders/getOrders",{ordersId:this.ordersId},{functionName:"xunda"}).then(e=>{this.initOrdersData(e.data)})},initOrdersData(e){const t={};t.supplier_id=e.supplier_id,t.supplier=e.supplier,t.orders_date=e.orders_date,t.orders_no=e.orders_no,t.remark=e.remark,t.create_uname=e.create_uname,t.orders_total_money=Number((e.orders_total_money||0)/100).toFixed(2),t.orders_extend_fee=Number((e.orders_extend_fee||0)/100).toFixed(2),t.goods_total_count=e.goods_total_count||e.orders_goods_count,t.goods_total_money=Number((e.goods_total_money||t.orders_total_money)/100).toFixed(2),t.orders_goods=e.orders_goods.map(e=>{const t=Object.assign({},e);return t.total_money=this.$common.cent2yuan(e.total_money),t.goods_price=this.$common.cent2yuan(e.goods_price),t}),this.$refs.goodsTable.initData(t.orders_goods),this.formData=t},changeSupplierSelect(e){this.formData.supplier_id=e._id,this.formData.supplier={_id:e._id,name:e.name,contact:e.contact,telephone:e.telephone,address:e.address},this.formData.rel_orders_id="",this.$refs.goodsTable.initData([]),this.changeOrdersCompleted()},changeOrdersSelect(e){this.formData.rel_orders_id=e._id,this.formData.rel_orders={orders_no:e.orders_no,orders_id:e._id};const t=e.orders_goods.map(e=>{const t=Object.assign({},e);return t.total_money=this.$common.cent2yuan(e.total_money||0),t.goods_price=this.$common.cent2yuan(e.goods_price||0),t});console.log(t),this.$refs.goodsTable.initData(t),this.changeOrdersCompleted()},changeOrdersGoodsCompleted(){const{goodsTotalCount:e=0,goodsTotalMoney:t=0}=this.$refs.goodsTable.getSummaryData();this.formData.goods_total_count=e,this.formData.goods_total_money=t,this.changeOrdersCompleted()},changeOrdersCompleted(){this.formData.orders_discount_money=(Number(this.formData.orders_discount_money)||0).toFixed(2),this.formData.orders_extend_fee=(Number(this.formData.orders_extend_fee)||0).toFixed(2),this.formData.orders_total_money=(Number(this.formData.goods_total_money)+Number(this.formData.orders_extend_fee)).toFixed(2)},validateForm(){const e=this.$refs.goodsTable.getListData();if(0!==e.length)return!0;this.$message.error("商品清单为空")},handleSave(){this.$refs["formData"].validate(e=>{e&&this.validateForm()&&this.submitForm()})},async submitForm(){const e={ordersId:this.ordersId,data:this.getOrdersData()};Object(p["a"])("purchase/createRefundOrders",e,{functionName:"xunda"}).then(e=>{this.$message("保存成功"),setTimeout(()=>{this.$router.push({path:"./refund-detail/"+e.data})},200)},e=>{this.$message.error(e.message)})},getOrdersData(){const e=Object.assign({},this.formData,{orders_goods:this.getOrdersGoods(),goods_total_count:this.formData.goods_total_count,goods_total_money:this.$common.yuan2cent(this.formData.goods_total_money),orders_extend_fee:this.$common.yuan2cent(this.formData.orders_extend_fee),orders_total_money:this.$common.yuan2cent(this.formData.orders_total_money)});return this.ordersId||(e.orders_no="CTD"+this.$common.format(new Date,"yyyyMMddhhmmssS")),e},getOrdersGoods(){const e=this.$refs.goodsTable.getListData();return e.map(e=>Object.assign({},e,{goods_ori_price:this.$common.yuan2cent(e.goods_ori_price),goods_price:this.$common.yuan2cent(e.goods_price),total_money:this.$common.yuan2cent(e.total_money),total_ori_money:this.$common.yuan2cent(e.total_ori_money)}))}}},g=h,f=Object(i["a"])(g,a,s,!1,null,null,null);t["default"]=f.exports}}]);