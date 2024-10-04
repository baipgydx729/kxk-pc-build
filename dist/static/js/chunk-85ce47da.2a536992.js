(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-85ce47da"],{"0bbf":function(e,o,t){"use strict";t.r(o);var s=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"app-container"},[t("div",{staticClass:"aux-card"},[t("div",{staticClass:"header"},[e._m(0),t("div",{staticClass:"right"},[t("el-button",{attrs:{type:"default",icon:"el-icon-tickets"},on:{click:e.handleCancel}},[e._v("取消")]),t("el-button",{attrs:{loading:e.submitLoading,type:"primary",icon:"el-icon-document-checked"},on:{click:e.handleSave}},[e._v("保存 (Ctrl+S)")])],1)]),t("div",{staticClass:"margin-top-sm"},[t("el-form",{ref:"baseForm",attrs:{"label-width":"90px","label-align":"left",inline:!0}},[t("div",{staticClass:"dflex-s"},[t("el-form-item",{attrs:{label:"供应商"}},[t("AuxSupplierSelect",{staticStyle:{width:"300px"},on:{change:e.changeSupplierSelect},model:{value:e.baseForm.supplier_id,callback:function(o){e.$set(e.baseForm,"supplier_id",o)},expression:"baseForm.supplier_id"}})],1),t("el-form-item",{attrs:{label:"开单日期"}},[t("el-date-picker",{staticStyle:{width:"300px"},attrs:{type:"datetime","value-format":"timestamp"},model:{value:e.baseForm.orders_date,callback:function(o){e.$set(e.baseForm,"orders_date",o)},expression:"baseForm.orders_date"}})],1)],1)])],1),t("orders-goods-table",{ref:"goodsTable",on:{change:e.changeOrdersGoodsCompleted}})],1),t("el-card",{staticClass:"aux-card margin-top",attrs:{shadow:"none","body-style":{padding:"12px"}}},[t("el-form",{ref:"baseForm",attrs:{"label-width":"80px","label-align":"left",inline:!0}},[t("el-form-item",{attrs:{label:"整单优惠"}},[t("el-input",{attrs:{oninput:"value=value.match(/^\\d+(?:\\.\\d{0,2})?/)",placeholder:"整单优惠"},on:{blur:e.changeOrdersDiscountMoney},model:{value:e.baseForm.orders_discount_money,callback:function(o){e.$set(e.baseForm,"orders_discount_money",o)},expression:"baseForm.orders_discount_money"}},[t("template",{slot:"append"},[e._v("元")])],2)],1),t("el-form-item",{attrs:{label:"其他费用"}},[t("el-input",{attrs:{oninput:"value=value.match(/^\\d+(?:\\.\\d{0,2})?/)",placeholder:"其他费用"},on:{change:e.changeOrdersCompleted},model:{value:e.baseForm.orders_extend_fee,callback:function(o){e.$set(e.baseForm,"orders_extend_fee",o)},expression:"baseForm.orders_extend_fee"}},[t("template",{slot:"append"},[e._v("元")])],2)],1),t("el-form-item",{attrs:{label:"订单金额"}},[t("el-input",{attrs:{disabled:"",placeholder:"金额"},model:{value:e.baseForm.orders_total_money,callback:function(o){e.$set(e.baseForm,"orders_total_money",o)},expression:"baseForm.orders_total_money"}},[t("template",{slot:"append"},[e._v("元")])],2)],1)],1),t("div",{staticClass:"dflex-e padding-tb border-top"},[t("span",{staticClass:"padding-left"},[e._v("整单优惠："+e._s(e.baseForm.orders_discount_money))]),t("span",{staticClass:"padding-left"},[e._v("其他费用："+e._s(e.baseForm.orders_extend_fee))]),t("span",{staticClass:"padding-left"},[e._v("订单金额："+e._s(e.baseForm.orders_total_money))])])],1),t("el-card",{staticClass:"aux-card margin-top",attrs:{shadow:"none","body-style":{padding:"12px"}}},[t("div",{attrs:{slot:"header"},slot:"header"},[t("span",[e._v("订单备注")])]),t("el-input",{attrs:{type:"textarea",placeholder:"请输入内容",maxlength:"600","show-word-limit":""},model:{value:e.baseForm.remark,callback:function(o){e.$set(e.baseForm,"remark",o)},expression:"baseForm.remark"}})],1)],1)},r=[function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"left"},[t("span",{staticClass:"title"},[e._v("进货单")])])}],a=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"orders-goods-table"},[t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.dataLoading,expression:"dataLoading"}],ref:"goodsTable",staticClass:"aux-table",attrs:{data:e.goodsList,border:"",fit:"","show-summary":"","summary-method":e.summaryMethod}},[t("el-table-column",{attrs:{type:"index",width:"50",align:"center",label:"序号"}}),t("el-table-column",{attrs:{width:"120",align:"center",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(o){return[t("el-button",{staticStyle:{padding:"6px 12px"},attrs:{type:"default",size:"mini",icon:"el-icon-plus",round:""},on:{click:function(t){return e.handleItemPlus(o.row,o.$index)}}}),t("el-button",{staticStyle:{padding:"6px 12px"},attrs:{type:"default",size:"mini",icon:"el-icon-minus",round:""},on:{click:function(t){return e.handleItemMinus(o.row,o.$index)}}})]}}])}),t("el-table-column",{attrs:{width:"280",align:"left",label:"商品名称"},scopedSlots:e._u([{key:"default",fn:function(o){return[o.row.goods_name?t("div",{staticClass:"dflex"},[t("div",{staticClass:"goods-img"},[t("img",{attrs:{src:o.row.goods_img||"/static/img/img-empty.png",alt:""}})]),t("div",{staticClass:"flex1"},[t("div",[e._v(e._s(o.row.goods_name))]),o.row.goods_no?t("div",{staticClass:"fs-xs ft-grey"},[e._v("No："+e._s(o.row.goods_no))]):e._e()])]):t("div",[t("AuxGoodsSelectPopoer",{attrs:{"main-price":"bid_price"},on:{change:function(t){return e.changeItemGoods(t,o.row)}},model:{value:o.row.goods_id,callback:function(t){e.$set(o.row,"goods_id",t)},expression:"scope.row.goods_id"}})],1)]}}])}),t("el-table-column",{attrs:{width:"200",align:"left",label:"规格/属性"},scopedSlots:e._u([{key:"default",fn:function(o){return[t("span",[e._v(e._s(o.row.goods_spec))])]}}])}),t("el-table-column",{attrs:{width:"130",align:"center",label:"单位"},scopedSlots:e._u([{key:"default",fn:function(o){return[t("el-select",{attrs:{disabled:!o.row.goods_name,placeholder:"单位"},on:{focus:function(t){return e.remoteItemGoodsUnitMethod(o.row)},change:function(t){return e.changeItemGoodsUnit(o.row)}},model:{value:o.row.goods_unit,callback:function(t){e.$set(o.row,"goods_unit",t)},expression:"scope.row.goods_unit"}},e._l(e.getItemGoodsUnitOptions(o.row.goods_id),(function(o){return t("el-option-group",{key:o.label,attrs:{label:o.label}},e._l(o.children,(function(o){return t("el-option",{key:o.unit,attrs:{label:o.unit+(o.unit_desc||""),value:o.unit}},[t("span",[e._v(e._s(o.unit)+e._s(o.unit_desc))])])})),1)})),1)]}}])}),t("el-table-column",{attrs:{width:"120",align:"center",label:"数量",prop:"goods_cnt"},scopedSlots:e._u([{key:"default",fn:function(o){return[t("el-input",{staticClass:"tac",attrs:{disabled:!o.row.goods_name,oninput:"value=value.match(/^\\d+(?:\\.\\d{0,2})?/)",onfocus:"this.select();",placeholder:"数量"},on:{blur:e.changeOrdersCompleted},model:{value:o.row.goods_cnt,callback:function(t){e.$set(o.row,"goods_cnt",t)},expression:"scope.row.goods_cnt"}})]}}])}),t("el-table-column",{attrs:{width:"120",align:"right",label:"单价(元)"},scopedSlots:e._u([{key:"default",fn:function(o){return[t("el-input",{staticClass:"tar",attrs:{disabled:!o.row.goods_name,oninput:"value=value.match(/^\\d+(?:\\.\\d{0,2})?/)",onfocus:"this.select();",placeholder:"单价"},on:{blur:function(t){return e.changeItemGoodsPrice(o.row)}},model:{value:o.row.goods_price,callback:function(t){e.$set(o.row,"goods_price",t)},expression:"scope.row.goods_price"}})]}}])}),t("el-table-column",{attrs:{width:"120",align:"right",label:"金额小计(元)",prop:"total_money"},scopedSlots:e._u([{key:"default",fn:function(o){return[e._v(e._s(o.row.total_money))]}}])}),t("el-table-column",{attrs:{align:"left",label:"备注","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(o){return[t("el-popover",{attrs:{placement:"top-start",title:"编辑备注信息",width:"300",trigger:"click"}},[t("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请输入备注"},model:{value:o.row.remark,callback:function(t){e.$set(o.row,"remark",t)},expression:"scope.row.remark"}}),t("span",{staticClass:"link-hover ft-primary",attrs:{slot:"reference"},slot:"reference"},[e._v(" "+e._s(o.row.remark||"编辑")+" ")])],1)]}}])})],1),t("div",{staticClass:"dflex-b padding"},[t("div",{staticClass:"dflex-s"},[t("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-plus"},on:{click:e.handleSelectAdd}},[e._v("选择商品")]),e.scanForm.visible?t("el-input",{ref:"scanInput",staticClass:"margin-lr-sm",staticStyle:{width:"260px"},attrs:{clearable:"",size:"small",placeholder:"请扫描商品编码或条形码"},nativeOn:{keyup:function(o){return!o.type.indexOf("key")&&e._k(o.keyCode,"enter",13,o.key,"Enter")?null:e.handleScanAdd(o)}},model:{value:e.scanForm.keyword,callback:function(o){e.$set(e.scanForm,"keyword",o)},expression:"scanForm.keyword"}}):e._e(),t("el-button",{attrs:{type:"default",size:"small",icon:"el-icon-full-screen"},on:{click:e.handleScanOpen}},[e._v(" "+e._s(e.scanForm.visible?"取消扫码":"扫码录入")+" ")])],1),t("div",{staticClass:"dflex-e"},[t("span",{staticClass:"padding-left-lg"},[e._v("商品数量："+e._s(e.goodsTotalCount))]),t("span",{staticClass:"padding-left-lg"},[e._v("商品总额："+e._s(e.goodsTotalMoney.toFixed(2)))])])]),t("AuxGoodsSelectDialog",{ref:"auxGoodsSelectDialog",attrs:{"main-price":"bid_price"},on:{onSuccess:e.selectedGoodsSuccess}})],1)},d=[],n=(t("13d5"),t("2197")),i=t("c031"),l=t("b122"),c=t("15f6"),m=t("e5bb"),u={components:{AuxGoodsSelectPopoer:c["a"],AuxGoodsSelectDialog:l["a"]},data(){return{dataLoading:!1,goodsList:[this.formatItemGoods()],goodsSelectIds:[],goodsSaleGrade:0,goodsTotalCount:0,goodsOriginalMoney:0,goodsDiscountMoney:0,goodsTotalMoney:0,goodsUnitMap:{},scanForm:{visible:!1,keyword:""}}},methods:{initData(e){this.goodsList=e.map(e=>this.formatItemGoods(e)),this.changeOrdersCompleted()},handleScanOpen(){this.scanForm.visible=!this.scanForm.visible,this.scanForm.visible&&this.$nextTick(()=>{this.$refs.scanInput.focus()})},handleScanAdd(){const e=this.scanForm.keyword.trim();e&&(this.scanForm.keyword="",Object(n["a"])("goods/getGoodsByCode",{code:e},{functionName:"xunda"}).then(e=>{const o=this.formatItemGoods(e.data,{remark:"",goods_cnt:1});this.initGoodsUnit(o),this.goodsList.push(o)}))},handleSelectAdd(){this.$refs.auxGoodsSelectDialog.open()},selectedGoodsSuccess(e){e.forEach(e=>{this.initGoodsUnit(e),this.goodsList.push(this.formatItemGoods(e,{remark:"",goods_cnt:e.goods_cnt}))}),this.changeOrdersCompleted()},handleItemPlus(e,o){this.goodsList.splice(o+1,0,this.formatItemGoods())},handleItemMinus(e,o){this.goodsList.splice(o,1),0===this.goodsList.length&&this.goodsList.push(this.formatItemGoods()),this.changeOrdersCompleted()},initGoodsUnit(e){this.goodsUnitMap[e._id]=e.unit_list||[]},formatItemGoods(e={},o={}){const t=e.goods_price||(e.bid_price||0)/100,s={goods_id:e.goods_id||e._id||"",goods_sku_id:e.goods_sku_id||e.sku_id||"",goods_no:e.goods_no||e.code||"",goods_img:e.goods_img||e.img||"",goods_name:e.goods_name||e.name||"",goods_spec:e.goods_spec||e.spec||"",goods_cnt:e.goods_cnt||o.goods_cnt||0,goods_unit:e.goods_unit||e.unit||"",goods_price:t,total_money:e.total_money||0,remark:e.remark||o.remark||""};return s},changeItemGoods(e,o){o.goodsId||(e.goods?(Object.assign(o,this.formatItemGoods(e.goods,{remark:o.remark,goods_cnt:1})),this.initGoodsUnit(e.goods),this.changeOrdersCompleted()):Object(n["a"])("goods/getInfo",{goods_id:o.goods_id},{functionName:"xunda"}).then(e=>{const t=Object.assign(o,this.formatItemGoods(e.data,{remark:o.remark,goods_cnt:1}));this.initGoodsUnit(t),this.changeOrdersCompleted()}),e.others&&e.others.length>0&&(e.others.forEach(e=>{const o=this.formatItemGoods(Object.assign(e,{remark:e.remark,goods_cnt:1}));this.goodsList.push(o)}),this.changeOrdersCompleted()))},getItemGoodsUnitOptions(e){if(!e)return[];const o=this.goodsUnitMap[e]||[];if(0===o.length)return[];const t=[{label:"默认单位",children:o.filter(e=>1===e.scale)}],s=o.filter(e=>1!==e.scale);return s.length>0&&t.push({label:"辅助单位",children:s}),t},remoteItemGoodsUnitMethod(e){if(!e.goods_id)return;const o=this.goodsUnitMap[e.goods_id]||[];o.length>1||Object(n["a"])("goods/getInfo",{goods_id:e.goods_id},{functionName:"xunda"}).then(e=>{const o=e.data;this.goodsUnitMap[o._id]=o.unit_list,Object(i["f"])(o),this.goodsList=[...this.goodsList]})},changeItemGoodsUnit(e){if(!e.goods_id)return;const o=this.goodsUnitMap[e.goods_id]||[],t=o.filter(o=>o.unit===e.goods_unit);if(0===t.length)return;const s=t[0],r=Object(i["b"])(e.goods_id);if(!r)return;let a=m["a"].mul(r.bid_price,s.scale);const d=r.sku_datas.filter(o=>o.name===e.goods_spec);if(d.length>0){const o=d.filter(o=>o.unit===e.goods_unit);o.length>0&&(a=o[0].bid_price||0)}const n=Number(a/100);e.goods_price=n,this.changeOrdersCompleted()},changeItemGoodsPrice(e){this.changeOrdersCompleted()},changeOrdersCompleted(){this.goodsList.forEach(e=>{e.goods_cnt=Number(e.goods_cnt||0),e.goods_price=Number(e.goods_price||0).toFixed(2),e.total_money=(e.goods_cnt*e.goods_price).toFixed(2)}),this.goodsTotalCount=this.goodsList.reduce((e,o)=>e+o.goods_cnt,0),this.goodsTotalMoney=this.goodsList.reduce((e,o)=>e+Number(o.total_money),0),this.goodsDiscountMoney=this.goodsOriginalMoney-this.goodsTotalMoney,this.$emit("change")},getSummaryData(){return{goodsTotalCount:this.goodsTotalCount,goodsDiscountMoney:this.goodsDiscountMoney,goodsTotalMoney:this.goodsTotalMoney}},getListData(){return this.goodsList.filter(e=>!!e.goods_name)},summaryMethod({columns:e,data:o}){const t=[];return e.forEach((e,s)=>{if(0===s)return void(t[s]="合计");if(!["goods_cnt","total_money"].includes(e.property))return void(t[s]=" ");const r=o.map(o=>Number(o[e.property]));r.every(e=>isNaN(e))?t[s]="":(t[s]=r.reduce((e,o)=>e+o,0),["total_money"].includes(e.property)&&(t[s]=t[s].toFixed(2)))}),t}}},_=u,g=(t("4555"),t("2877")),p=Object(g["a"])(_,a,d,!1,null,null,null),h=p.exports,b=t("d262"),f={name:"PurchaseOrdersCreate",components:{"orders-goods-table":h,AuxSupplierSelect:b["a"]},data(){return{permission:"purchase-orders-create",ordersId:"",baseForm:{orders_date:(new Date).getTime(),orders_no:"",supplier_id:"",supplier:{_id:"",name:"",contact:"",telephone:""},orders_goods:[],remark:"",create_uname:"",goods_total_count:0,goods_total_money:0,orders_discount_money:0,orders_extend_fee:0,orders_total_money:0},submitLoading:!1}},mounted(){const{type:e,supplierId:o,id:t}=this.$route.query||{};o&&(this.baseForm.supplier_id=o),"edit"===e&&t&&(this.ordersId=t,this.fetchDetail(t))},methods:{fetchDetail(e){Object(n["a"])("purchase/getOrders",{ordersId:e||this.ordersId},{functionName:"xunda"}).then(e=>{this.initOrdersData(e.data)})},initOrdersData(e){const o={};o.supplier_id=e.supplier_id,o.supplier=e.supplier,o.orders_date=e.orders_date,o.orders_no=e.orders_no,o.orders_remark=e.orders_remark,o.create_remark=e.create_remark,o.create_uname=e.create_uname,o.orders_total_money=(e.orders_total_money>0?e.orders_total_money/100:0).toFixed(2),o.orders_extend_fee=(e.orders_extend_fee>0?e.orders_extend_fee/100:0).toFixed(2),o.orders_discount_money=(e.orders_discount_money>0?e.orders_discount_money/100:0).toFixed(2),o.goods_total_count=e.goods_total_count||e.orders_goods_count,o.goods_discount_money=e.goods_discount_money>0?(e.goods_discount_money/100).toFixed(2):0,o.goods_total_money=e.goods_total_money>0?(e.goods_total_money/100).toFixed(2):o.goodsOriginalMoney,o.orders_goods=e.orders_goods.map(e=>{const o=Object.assign({},e);return o.total_money=(e.total_money/100).toFixed(2),o.goods_price=(e.goods_price/100).toFixed(2),o}),this.$refs.goodsTable.initData(o.orders_goods),this.baseForm=o},changeSupplierSelect(e){this.baseForm.supplier_id=e._id,this.baseForm.supplier={_id:e._id,name:e.name,contact:e.contact,telephone:e.telephone,address:e.address}},changeOrdersGoodsCompleted(){const{goodsTotalCount:e=0,goodsTotalMoney:o=0}=this.$refs.goodsTable.getSummaryData();this.baseForm.goods_total_count=e,this.baseForm.goods_total_money=o,this.changeOrdersCompleted()},changeOrdersDiscountMoney(){this.baseForm.orders_discount_money=Math.min(this.baseForm.orders_discount_money,this.baseForm.goods_total_money),this.changeOrdersGoodsCompleted()},changeOrdersCompleted(){const e=Number(this.baseForm.orders_discount_money)||0,o=Number(this.baseForm.orders_extend_fee)||0,t=Number(this.baseForm.goods_total_money)+o-e;this.baseForm.orders_discount_money=e.toFixed(2),this.baseForm.orders_extend_fee=o.toFixed(2),this.baseForm.orders_total_money=t.toFixed(2)},validateForm(){if(!this.baseForm.supplier_id)return void this.$message.error("请选择供应商");const e=this.$refs.goodsTable.getListData();if(0!==e.length)return!0;this.$message.error("商品清单为空")},handleSave(){this.validateForm()&&this.submitForm(!1)},handleCancel(){this.$common.closePage()},async submitForm(){this.submitLoading=!0;const e={ordersId:this.ordersId,data:this.getOrdersData()};Object(n["a"])("purchase/saveOrders",e,{functionName:"xunda"}).then(e=>{this.submitLoading=!1,this.$message.success("保存成功"),setTimeout(()=>{this.$router.push({path:"./orders-detail/"+e.data})},500)},e=>{this.submitLoading=!1,this.$message.error(e.message||e)})},getOrdersData(){const e=Object.assign({},this.baseForm,{orders_type:1,orders_date:this.baseForm.orders_date,supplier_id:this.baseForm.supplier_id,supplier:this.baseForm.supplier,remark:this.baseForm.remark,orders_remark:this.baseForm.remark,orders_goods:this.getOrdersGoods(),goods_total_count:this.baseForm.goods_total_count,goods_total_money:100*this.baseForm.goods_total_money,orders_discount_money:100*this.baseForm.orders_discount_money,orders_extend_fee:100*this.baseForm.orders_extend_fee,orders_total_money:100*this.baseForm.orders_total_money});return this.ordersId||(e.orders_no="CGD"+this.$common.format(new Date,"yyyyMMddhhmmssS")),e},getOrdersGoods(){const e=this.$refs.goodsTable.getListData();return e.map(e=>{const o=Object.assign({},e,{goods_price:100*e.goods_price,total_money:100*e.total_money});return o})}}},y=f,v=Object(g["a"])(y,s,r,!1,null,null,null);o["default"]=v.exports},4555:function(e,o,t){"use strict";t("e53d")},e53d:function(e,o,t){}}]);