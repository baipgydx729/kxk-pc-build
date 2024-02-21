(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4318fb37"],{"0bbf":function(o,t,s){"use strict";s.r(t);var n=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"app-container"},[t("div",{staticClass:"aux-card"},[t("div",{staticClass:"header"},[e._m(0),t("div",{staticClass:"right"},[t("el-button",{attrs:{type:"default",icon:"el-icon-tickets"},on:{click:e.handleCancel}},[e._v("取消")]),t("el-button",{attrs:{loading:e.submitLoading,type:"primary",icon:"el-icon-document-checked"},on:{click:e.handleSave}},[e._v("保存 (Ctrl+S)")])],1)]),t("div",{staticClass:"margin-top-sm"},[t("el-form",{ref:"baseForm",attrs:{"label-width":"90px","label-align":"left",inline:!0}},[t("div",{staticClass:"dflex-s"},[t("el-form-item",{attrs:{label:"供应商"}},[t("AuxSupplierSelect",{staticStyle:{width:"300px"},on:{change:e.changeSupplierSelect},model:{value:e.baseForm.supplier_id,callback:function(o){e.$set(e.baseForm,"supplier_id",o)},expression:"baseForm.supplier_id"}})],1),t("el-form-item",{attrs:{label:"开单日期"}},[t("el-date-picker",{staticStyle:{width:"300px"},attrs:{type:"datetime","value-format":"timestamp"},model:{value:e.baseForm.orders_date,callback:function(o){e.$set(e.baseForm,"orders_date",o)},expression:"baseForm.orders_date"}})],1)],1)])],1),t("orders-goods-table",{ref:"goodsTable",on:{change:e.changeOrdersGoodsCompleted}})],1),t("el-card",{staticClass:"aux-card margin-top",attrs:{shadow:"none","body-style":{padding:"12px"}}},[t("el-form",{ref:"baseForm",attrs:{"label-width":"80px","label-align":"left",inline:!0}},[t("el-form-item",{attrs:{label:"整单优惠"}},[t("el-input",{attrs:{oninput:"value=value.match(/^\\d+(?:\\.\\d{0,2})?/)",placeholder:"整单优惠"},on:{blur:e.changeOrdersDiscountMoney},model:{value:e.baseForm.orders_discount_money,callback:function(o){e.$set(e.baseForm,"orders_discount_money",o)},expression:"baseForm.orders_discount_money"}},[t("template",{slot:"append"},[e._v("元")])],2)],1),t("el-form-item",{attrs:{label:"其他费用"}},[t("el-input",{attrs:{oninput:"value=value.match(/^\\d+(?:\\.\\d{0,2})?/)",placeholder:"其他费用"},on:{change:e.changeOrdersCompleted},model:{value:e.baseForm.orders_extend_fee,callback:function(o){e.$set(e.baseForm,"orders_extend_fee",o)},expression:"baseForm.orders_extend_fee"}},[t("template",{slot:"append"},[e._v("元")])],2)],1),t("el-form-item",{attrs:{label:"订单金额"}},[t("el-input",{attrs:{disabled:"",placeholder:"金额"},model:{value:e.baseForm.orders_total_money,callback:function(o){e.$set(e.baseForm,"orders_total_money",o)},expression:"baseForm.orders_total_money"}},[t("template",{slot:"append"},[e._v("元")])],2)],1)],1),t("div",{staticClass:"dflex-e padding-tb border-top"},[t("span",{staticClass:"padding-left"},[e._v("整单优惠："+e._s(e.baseForm.orders_discount_money))]),t("span",{staticClass:"padding-left"},[e._v("其他费用："+e._s(e.baseForm.orders_extend_fee))]),t("span",{staticClass:"padding-left"},[e._v("订单金额："+e._s(e.baseForm.orders_total_money))])])],1),t("el-card",{staticClass:"aux-card margin-top",attrs:{shadow:"none","body-style":{padding:"12px"}}},[t("div",{attrs:{slot:"header"},slot:"header"},[t("span",[e._v("订单备注")])]),t("el-input",{attrs:{type:"textarea",placeholder:"请输入内容",maxlength:"600","show-word-limit":""},model:{value:e.baseForm.remark,callback:function(o){e.$set(e.baseForm,"remark",o)},expression:"baseForm.remark"}})],1)],1)},r=[function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"left"},[t("span",{staticClass:"title"},[e._v("进货单")])])}],a=s("c7eb"),i=s("1da1"),d=(s("b680"),s("d81d"),s("b0c0"),s("a9e3"),function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"orders-goods-table"},[t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.dataLoading,expression:"dataLoading"}],ref:"goodsTable",staticClass:"aux-table",attrs:{data:e.goodsList,border:"",fit:"","show-summary":"","summary-method":e.summaryMethod}},[t("el-table-column",{attrs:{type:"index",width:"50",align:"center",label:"序号"}}),t("el-table-column",{attrs:{width:"120",align:"center",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(o){return[t("el-button",{staticStyle:{padding:"6px 12px"},attrs:{type:"default",size:"mini",icon:"el-icon-plus",round:""},on:{click:function(t){return e.handleItemPlus(o.row,o.$index)}}}),t("el-button",{staticStyle:{padding:"6px 12px"},attrs:{type:"default",size:"mini",icon:"el-icon-minus",round:""},on:{click:function(t){return e.handleItemMinus(o.row,o.$index)}}})]}}])}),t("el-table-column",{attrs:{width:"280",align:"left",label:"商品名称"},scopedSlots:e._u([{key:"default",fn:function(o){return[o.row.goods_name?t("div",{staticClass:"dflex"},[t("div",{staticClass:"goods-img"},[t("img",{attrs:{src:o.row.goods_img||"/static/img/img-empty.png",alt:""}})]),t("div",{staticClass:"flex1"},[t("div",[e._v(e._s(o.row.goods_name))]),o.row.goods_no?t("div",{staticClass:"fs-xs ft-grey"},[e._v("No："+e._s(o.row.goods_no))]):e._e()])]):t("div",[t("AuxGoodsSelectPopoer",{attrs:{"main-price":"bid_price"},on:{change:function(t){return e.changeItemGoods(t,o.row)}},model:{value:o.row.goods_id,callback:function(t){e.$set(o.row,"goods_id",t)},expression:"scope.row.goods_id"}})],1)]}}])}),t("el-table-column",{attrs:{width:"200",align:"left",label:"规格/属性"},scopedSlots:e._u([{key:"default",fn:function(o){return[t("span",[e._v(e._s(o.row.goods_spec))])]}}])}),t("el-table-column",{attrs:{width:"130",align:"center",label:"单位"},scopedSlots:e._u([{key:"default",fn:function(o){return[t("el-select",{attrs:{disabled:!o.row.goods_name,placeholder:"单位"},on:{focus:function(t){return e.remoteItemGoodsUnitMethod(o.row)},change:function(t){return e.changeItemGoodsUnit(o.row)}},model:{value:o.row.goods_unit,callback:function(t){e.$set(o.row,"goods_unit",t)},expression:"scope.row.goods_unit"}},e._l(e.getItemGoodsUnitOptions(o.row.goods_id),(function(o){return t("el-option-group",{key:o.label,attrs:{label:o.label}},e._l(o.children,(function(o){return t("el-option",{key:o.unit,attrs:{label:o.unit+(o.unit_desc||""),value:o.unit}},[t("span",[e._v(e._s(o.unit)+e._s(o.unit_desc))])])})),1)})),1)]}}])}),t("el-table-column",{attrs:{width:"120",align:"center",label:"数量",prop:"goods_cnt"},scopedSlots:e._u([{key:"default",fn:function(o){return[t("el-input",{staticClass:"tac",attrs:{disabled:!o.row.goods_name,oninput:"value=value.match(/^\\d+(?:\\.\\d{0,2})?/)",onfocus:"this.select();",placeholder:"数量"},on:{blur:e.changeOrdersCompleted},model:{value:o.row.goods_cnt,callback:function(t){e.$set(o.row,"goods_cnt",t)},expression:"scope.row.goods_cnt"}})]}}])}),t("el-table-column",{attrs:{width:"120",align:"right",label:"单价(元)"},scopedSlots:e._u([{key:"default",fn:function(o){return[t("el-input",{staticClass:"tar",attrs:{disabled:!o.row.goods_name,oninput:"value=value.match(/^\\d+(?:\\.\\d{0,2})?/)",onfocus:"this.select();",placeholder:"单价"},on:{blur:function(t){return e.changeItemGoodsPrice(o.row)}},model:{value:o.row.goods_price,callback:function(t){e.$set(o.row,"goods_price",t)},expression:"scope.row.goods_price"}})]}}])}),t("el-table-column",{attrs:{width:"120",align:"right",label:"金额小计(元)",prop:"total_money"},scopedSlots:e._u([{key:"default",fn:function(o){return[e._v(e._s(o.row.total_money))]}}])}),t("el-table-column",{attrs:{align:"left",label:"备注","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(o){return[t("el-popover",{attrs:{placement:"top-start",title:"编辑备注信息",width:"300",trigger:"click"}},[t("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请输入备注"},model:{value:o.row.remark,callback:function(t){e.$set(o.row,"remark",t)},expression:"scope.row.remark"}}),t("span",{staticClass:"link-hover ft-primary",attrs:{slot:"reference"},slot:"reference"},[e._v(" "+e._s(o.row.remark||"编辑")+" ")])],1)]}}])})],1),t("div",{staticClass:"dflex-b padding"},[t("div",{staticClass:"dflex-s"},[t("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-plus"},on:{click:e.handleSelectAdd}},[e._v("选择商品")]),e.scanForm.visible?t("el-input",{ref:"scanInput",staticClass:"margin-lr-sm",staticStyle:{width:"260px"},attrs:{clearable:"",size:"small",placeholder:"请扫描商品编码或条形码"},nativeOn:{keyup:function(o){return!o.type.indexOf("key")&&e._k(o.keyCode,"enter",13,o.key,"Enter")?null:e.handleScanAdd(o)}},model:{value:e.scanForm.keyword,callback:function(o){e.$set(e.scanForm,"keyword",o)},expression:"scanForm.keyword"}}):e._e(),t("el-button",{attrs:{type:"default",size:"small",icon:"el-icon-full-screen"},on:{click:e.handleScanOpen}},[e._v(" "+e._s(e.scanForm.visible?"取消扫码":"扫码录入")+" ")])],1),t("div",{staticClass:"dflex-e"},[t("span",{staticClass:"padding-left-lg"},[e._v("商品数量："+e._s(e.goodsTotalCount))]),t("span",{staticClass:"padding-left-lg"},[e._v("商品总额："+e._s(e.goodsTotalMoney.toFixed(2)))])])]),t("AuxGoodsSelectDialog",{ref:"auxGoodsSelectDialog",attrs:{"main-price":"bid_price"},on:{onSuccess:e.selectedGoodsSuccess}})],1)}),l=[],c=s("2909"),u=(s("498a"),s("d3b7"),s("159b"),s("a434"),s("4de4"),s("13d5"),s("caad"),s("2197")),m=s("c031"),_=s("b122"),g=s("15f6"),p=s("5bc5"),f={components:{AuxGoodsSelectPopoer:g["a"],AuxGoodsSelectDialog:_["a"]},data:function(){return{dataLoading:!1,goodsList:[this.formatItemGoods()],goodsSelectIds:[],goodsSaleGrade:0,goodsTotalCount:0,goodsOriginalMoney:0,goodsDiscountMoney:0,goodsTotalMoney:0,goodsUnitMap:{},scanForm:{visible:!1,keyword:""}}},methods:{initData:function(e){var o=this;this.goodsList=e.map((function(e){return o.formatItemGoods(e)})),this.changeOrdersCompleted()},handleScanOpen:function(){var e=this;this.scanForm.visible=!this.scanForm.visible,this.scanForm.visible&&this.$nextTick((function(){e.$refs.scanInput.focus()}))},handleScanAdd:function(){var e=this,o=this.scanForm.keyword.trim();o&&(this.scanForm.keyword="",Object(u["a"])("goods/getGoodsByCode",{code:o},{functionName:"xunda"}).then((function(o){var t=e.formatItemGoods(o.data,{remark:"",goods_cnt:1});e.initGoodsUnit(t),e.goodsList.push(t)})))},handleSelectAdd:function(){this.$refs.auxGoodsSelectDialog.open()},selectedGoodsSuccess:function(e){var o=this;e.forEach((function(e){o.initGoodsUnit(e),o.goodsList.push(o.formatItemGoods(e,{remark:"",goods_cnt:e.goods_cnt}))})),this.changeOrdersCompleted()},handleItemPlus:function(e,o){this.goodsList.splice(o+1,0,this.formatItemGoods())},handleItemMinus:function(e,o){this.goodsList.splice(o,1),0===this.goodsList.length&&this.goodsList.push(this.formatItemGoods()),this.changeOrdersCompleted()},initGoodsUnit:function(e){this.goodsUnitMap[e._id]=e.unit_list||[]},formatItemGoods:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=e.goods_price||(e.bid_price||0)/100,s={goods_id:e.goods_id||e._id||"",goods_sku_id:e.goods_sku_id||e.sku_id||"",goods_no:e.goods_no||e.code||"",goods_img:e.goods_img||e.img||"",goods_name:e.goods_name||e.name||"",goods_spec:e.goods_spec||e.spec||"",goods_cnt:e.goods_cnt||o.goods_cnt||0,goods_unit:e.goods_unit||e.unit||"",goods_price:t,total_money:e.total_money||0,remark:e.remark||o.remark||""};return s},changeItemGoods:function(e,o){var t=this;o.goodsId||(e.goods?(Object.assign(o,this.formatItemGoods(e.goods,{remark:o.remark,goods_cnt:1})),this.initGoodsUnit(e.goods),this.changeOrdersCompleted()):Object(u["a"])("goods/getInfo",{goods_id:o.goods_id},{functionName:"xunda"}).then((function(e){var s=Object.assign(o,t.formatItemGoods(e.data,{remark:o.remark,goods_cnt:1}));t.initGoodsUnit(s),t.changeOrdersCompleted()})))},getItemGoodsUnitOptions:function(e){if(!e)return[];var o=this.goodsUnitMap[e]||[];if(0===o.length)return[];var t=[{label:"默认单位",children:o.filter((function(e){return 1===e.scale}))}],s=o.filter((function(e){return 1!==e.scale}));return s.length>0&&t.push({label:"辅助单位",children:s}),t},remoteItemGoodsUnitMethod:function(e){var o=this;if(e.goods_id){var t=this.goodsUnitMap[e.goods_id]||[];t.length>1||Object(u["a"])("goods/getInfo",{goods_id:e.goods_id},{functionName:"xunda"}).then((function(e){var t=e.data;o.goodsUnitMap[t._id]=t.unit_list,Object(m["f"])(t),o.goodsList=Object(c["a"])(o.goodsList)}))}},changeItemGoodsUnit:function(e){if(e.goods_id){var o=this.goodsUnitMap[e.goods_id]||[],t=o.filter((function(o){return o.unit===e.goods_unit}));if(0!==t.length){var s=t[0],n=Object(m["b"])(e.goods_id);if(n){var r=p["a"].mul(n.bid_price,s.scale),a=n.sku_datas.filter((function(o){return o.name===e.goods_spec}));if(a.length>0){var i=a.filter((function(o){return o.unit===e.goods_unit}));i.length>0&&(r=i[0].bid_price||0)}var d=Number(r/100);e.goods_price=d,this.changeOrdersCompleted()}}}},changeItemGoodsPrice:function(e){this.changeOrdersCompleted()},changeOrdersCompleted:function(){this.goodsList.forEach((function(e){e.goods_cnt=Number(e.goods_cnt||0),e.goods_price=Number(e.goods_price||0).toFixed(2),e.total_money=(e.goods_cnt*e.goods_price).toFixed(2)})),this.goodsTotalCount=this.goodsList.reduce((function(e,o){return e+o.goods_cnt}),0),this.goodsTotalMoney=this.goodsList.reduce((function(e,o){return e+Number(o.total_money)}),0),this.goodsDiscountMoney=this.goodsOriginalMoney-this.goodsTotalMoney,this.$emit("change")},getSummaryData:function(){return{goodsTotalCount:this.goodsTotalCount,goodsDiscountMoney:this.goodsDiscountMoney,goodsTotalMoney:this.goodsTotalMoney}},getListData:function(){return this.goodsList.filter((function(e){return!!e.goods_name}))},summaryMethod:function(e){var o=e.columns,t=e.data,s=[];return o.forEach((function(e,o){if(0!==o)if(["goods_cnt","total_money"].includes(e.property)){var n=t.map((function(o){return Number(o[e.property])}));n.every((function(e){return isNaN(e)}))?s[o]="":(s[o]=n.reduce((function(e,o){return e+o}),0),["total_money"].includes(e.property)&&(s[o]=s[o].toFixed(2)))}else s[o]=" ";else s[o]="合计"})),s}}},h=f,b=(s("daa5"),s("2877")),y=Object(b["a"])(h,d,l,!1,null,null,null),v=y.exports,x=s("d262"),F={components:{"orders-goods-table":v,AuxSupplierSelect:x["a"]},data:function(){return{permission:"purchase-orders-create",ordersId:"",baseForm:{orders_date:(new Date).getTime(),orders_no:"",supplier_id:"",supplier:{_id:"",name:"",contact:"",telephone:""},orders_goods:[],remark:"",create_uname:"",goods_total_count:0,goods_total_money:0,orders_discount_money:0,orders_extend_fee:0,orders_total_money:0},submitLoading:!1}},mounted:function(){var e=this.$route.query||{},o=e.type,t=e.supplierId,s=e.id;t&&(this.baseForm.supplier_id=t),"edit"===o&&s&&(this.ordersId=s,this.fetchDetail(s))},methods:{fetchDetail:function(e){var o=this;Object(u["a"])("purchase/getOrders",{ordersId:e||this.ordersId},{functionName:"xunda"}).then((function(e){o.initOrdersData(e.data)}))},initOrdersData:function(e){var o={};o.supplier_id=e.supplier_id,o.supplier=e.supplier,o.orders_date=e.orders_date,o.orders_no=e.orders_no,o.orders_remark=e.orders_remark,o.create_remark=e.create_remark,o.create_uname=e.create_uname,o.orders_total_money=(e.orders_total_money>0?e.orders_total_money/100:0).toFixed(2),o.orders_extend_fee=(e.orders_extend_fee>0?e.orders_extend_fee/100:0).toFixed(2),o.orders_discount_money=(e.orders_discount_money>0?e.orders_discount_money/100:0).toFixed(2),o.goods_total_count=e.goods_total_count||e.orders_goods_count,o.goods_discount_money=e.goods_discount_money>0?(e.goods_discount_money/100).toFixed(2):0,o.goods_total_money=e.goods_total_money>0?(e.goods_total_money/100).toFixed(2):o.goodsOriginalMoney,o.orders_goods=e.orders_goods.map((function(e){var o=Object.assign({},e);return o.total_money=(e.total_money/100).toFixed(2),o.goods_price=(e.goods_price/100).toFixed(2),o})),this.$refs.goodsTable.initData(o.orders_goods),this.baseForm=o},changeSupplierSelect:function(e){this.baseForm.supplier_id=e._id,this.baseForm.supplier={_id:e._id,name:e.name,contact:e.contact,telephone:e.telephone}},changeOrdersGoodsCompleted:function(){var e=this.$refs.goodsTable.getSummaryData(),o=e.goodsTotalCount,t=void 0===o?0:o,s=e.goodsTotalMoney,n=void 0===s?0:s;this.baseForm.goods_total_count=t,this.baseForm.goods_total_money=n,this.changeOrdersCompleted()},changeOrdersDiscountMoney:function(){this.baseForm.orders_discount_money=Math.min(this.baseForm.orders_discount_money,this.baseForm.goods_total_money),this.changeOrdersGoodsCompleted()},changeOrdersCompleted:function(){var e=Number(this.baseForm.orders_discount_money)||0,o=Number(this.baseForm.orders_extend_fee)||0,t=Number(this.baseForm.goods_total_money)+o-e;this.baseForm.orders_discount_money=e.toFixed(2),this.baseForm.orders_extend_fee=o.toFixed(2),this.baseForm.orders_total_money=t.toFixed(2)},validateForm:function(){if(this.baseForm.supplier_id){var e=this.$refs.goodsTable.getListData();if(0!==e.length)return!0;this.$message.error("商品清单为空")}else this.$message.error("请选择供应商")},handleSave:function(){this.validateForm()&&this.submitForm(!1)},handleCancel:function(){this.$common.closePage()},submitForm:function(){var o=this;return Object(i["a"])(Object(a["a"])().mark((function t(){var s;return Object(a["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:o.submitLoading=!0,s={ordersId:o.ordersId,data:o.getOrdersData()},Object(u["a"])("purchase/saveOrders",s,{functionName:"xunda"}).then((function(e){o.submitLoading=!1,o.$message.success("保存成功"),setTimeout((function(){o.$router.push({path:"./orders-detail/"+e.data})}),500)}),(function(t){o.submitLoading=!1,o.$message.error(t.message||e)}));case 3:case"end":return t.stop()}}),t)})))()},getOrdersData:function(){var e=Object.assign({},this.baseForm,{orders_type:1,orders_date:this.baseForm.orders_date,supplier_id:this.baseForm.supplier_id,supplier:this.baseForm.supplier,remark:this.baseForm.remark,orders_remark:this.baseForm.remark,orders_goods:this.getOrdersGoods(),goods_total_count:this.baseForm.goods_total_count,goods_total_money:100*this.baseForm.goods_total_money,orders_discount_money:100*this.baseForm.orders_discount_money,orders_extend_fee:100*this.baseForm.orders_extend_fee,orders_total_money:100*this.baseForm.orders_total_money});return this.ordersId||(e.orders_no="CGD"+this.$common.format(new Date,"yyyyMMddhhmmssS")),e},getOrdersGoods:function(){var e=this.$refs.goodsTable.getListData();return e.map((function(e){var o=Object.assign({},e,{goods_price:100*e.goods_price,total_money:100*e.total_money});return o}))}}},k=F,w=Object(b["a"])(k,n,r,!1,null,null,null);t["default"]=w.exports},"4c53":function(e,o,t){"use strict";var s=t("23e7"),n=t("857a"),r=t("af03");s({target:"String",proto:!0,forced:r("sub")},{sub:function(){return n(this,"sub","","")}})},"857a":function(e,o,t){var s=t("1d80"),n=/"/g;e.exports=function(e,o,t,r){var a=String(s(e)),i="<"+o;return""!==t&&(i+=" "+t+'="'+String(r).replace(n,"&quot;")+'"'),i+">"+a+"</"+o+">"}},af03:function(e,o,t){var s=t("d039");e.exports=function(e){return s((function(){var o=""[e]('"');return o!==o.toLowerCase()||o.split('"').length>3}))}},d9de:function(e,o,t){},daa5:function(e,o,t){"use strict";t("d9de")},fb2c:function(e,o,t){var s=t("74e8");s("Uint32",(function(e){return function(o,t,s){return e(this,o,t,s)}}))}}]);