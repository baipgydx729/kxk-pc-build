(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a7ff18ce"],{"1e94":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"min-container"},[a("el-form",{ref:"goodsForm",attrs:{model:t.formData,rules:t.rules,"label-width":"90px"}},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:17}},[a("div",{staticClass:"aux-card"},[a("div",{staticClass:"header"},[a("div",{staticClass:"left"},[a("span",{staticClass:"title"},[t._v("基本信息")])]),a("div",{staticClass:"right"},[a("el-button",{on:{click:t.resetForm}},[t._v("重置")]),a("el-button",{attrs:{loading:t.submitLoading,type:"primary",icon:"el-icon-save"},on:{click:t.submitForm}},[t._v("保存信息")])],1)]),a("div",{staticClass:"padding padding-lr-lg"},[a("el-row",{attrs:{type:"flex",align:"top"}},[a("el-form-item",{staticClass:"flex1",attrs:{label:"商品名称",prop:"name"}},[a("el-input",{style:{width:"100%"},attrs:{placeholder:"请填写商品名称",clearable:""},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}})],1),a("div",{staticClass:"padding"}),a("el-form-item",{staticClass:"flex1",attrs:{label:"商品编号",prop:"code"}},[a("el-input",{style:{width:"100%"},attrs:{placeholder:"请填写商品编号或条码",clearable:""},model:{value:t.formData.code,callback:function(e){t.$set(t.formData,"code",e)},expression:"formData.code"}},[a("el-button",{attrs:{slot:"append"},on:{click:t.buildGoodCode},slot:"append"},[t._v("自动生成")])],1)],1)],1),a("el-row",{attrs:{type:"flex",align:"top"}},[a("el-form-item",{staticClass:"flex1",attrs:{label:"商品单位",prop:"unit"}},[t.unitMulti||t.formData.unit_list.length>1?a("div",{on:{click:function(e){return t.openMoreUnitSet(!0)}}},[a("el-input",{style:{width:"100%"},attrs:{value:t.compUintsDesc,readonly:"",placeholder:"商品单位",clearable:""}})],1):a("div",[a("el-select",{style:{width:"100%"},attrs:{placeholder:"请选择商品单位",filterable:"",clearable:""},on:{change:t.changeGoodsBaseUnit},model:{value:t.formData.unit,callback:function(e){t.$set(t.formData,"unit",e)},expression:"formData.unit"}},t._l(t.dictionary.goodsUnits,(function(t,e){return a("el-option",{key:e,attrs:{label:t.name,value:t.name}})})),1)],1),a("el-checkbox",{attrs:{label:"启用多单位",indeterminate:!1,disabled:t.formData.unit_list.length>1},on:{change:t.openMoreUnitSet},model:{value:t.unitMulti,callback:function(e){t.unitMulti=e},expression:"unitMulti"}})],1),a("div",{staticClass:"padding"}),a("el-form-item",{staticClass:"flex1",attrs:{label:"规格/属性",prop:"spec"}},[t.specMulti||t.formData.spec_list.length>0?a("div",{on:{click:function(e){return t.openMoreSpecSet(!0)}}},[a("el-input",{style:{width:"100%"},attrs:{value:t.compSpecDesc,readonly:"",placeholder:"商品单位/属性",clearable:""}})],1):a("el-input",{style:{width:"100%"},attrs:{placeholder:"请填写商品规格/属性",clearable:""},model:{value:t.formData.spec,callback:function(e){t.$set(t.formData,"spec",e)},expression:"formData.spec"}}),a("el-checkbox",{attrs:{label:"启用多规格/属性",indeterminate:!1,disabled:t.formData.spec_list.length>0},on:{change:t.openMoreSpecSet},model:{value:t.specMulti,callback:function(e){t.specMulti=e},expression:"specMulti"}})],1)],1),a("el-row",{attrs:{type:"flex",align:"top"}},[a("el-form-item",{staticClass:"flex1",attrs:{label:"商品分类",prop:"cids"}},[a("AuxCategoryPicker",{model:{value:t.formData.cids,callback:function(e){t.$set(t.formData,"cids",e)},expression:"formData.cids"}})],1),a("div",{staticClass:"padding"}),a("el-form-item",{staticClass:"flex1",attrs:{label:"启用商品",prop:"state"}},[a("el-select",{style:{width:"100%"},attrs:{placeholder:"请选择启用状态",clearable:""},model:{value:t.formData.state,callback:function(e){t.$set(t.formData,"state",e)},expression:"formData.state"}},t._l(t.$constant.BASE_STATES,(function(t,e){return a("el-option",{key:e,attrs:{label:t.name,value:t.value}})})),1)],1)],1),a("el-row",{attrs:{type:"flex",align:"top"}},[a("el-form-item",{staticClass:"flex1",attrs:{label:"备注信息",prop:"remark"}},[a("el-input",{attrs:{type:"textarea",placeholder:"请填写商品备注",rows:"2",maxlength:"300","show-word-limit":""},model:{value:t.formData.remark,callback:function(e){t.$set(t.formData,"remark",e)},expression:"formData.remark"}})],1)],1)],1)]),a("div",{staticClass:"aux-card margin-top"},[a("div",{staticClass:"header"},[a("div",{staticClass:"left"},[a("span",{staticClass:"title"},[t._v("价格设置")])])]),t._l(t.compUnitList,(function(e,i){return a("div",{key:e.unit,staticClass:"padding-bottom"},[t.compUnitList.length>1?a("div",{staticClass:"dflex padding-sm"},[a("div",{},[t._v("单位："+t._s(e.unit+(e.unit_desc||"")))]),i>0?a("div",{staticClass:"dflex margin-left-sm"},[a("el-switch",{attrs:{"active-color":"#1890FF","inactive-color":"#ccc"},on:{change:function(a){return t.changeEnablePriceSet(e)}},model:{value:e.enablePriceSet,callback:function(a){t.$set(e,"enablePriceSet",a)},expression:"item.enablePriceSet"}}),a("el-tooltip",{attrs:{effect:"dark",content:"1.开启后将按用户自定义的价格进行计价核算。2.关闭后单品价格将按基本单位价格乘以换算比例进行计价核算。",placement:"top"}},[a("span",{staticClass:"dflex margin-left-sm"},[t._v(" 开启自定义价格 "),a("i",{staticClass:"el-icon-warning-outline fs margin-left-xs"})])])],1):t._e()]):t._e(),0===i||e.enablePriceSet?a("div",[a("el-table",{ref:"unitPriceTable",refInFor:!0,staticClass:"aux-table",attrs:{data:t.getUnitPriceList(e),border:"",stripe:""}},[t.formData.spec_list.length>0?[a("el-table-column",{attrs:{width:"44",align:"center",label:"#"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.$index+1))]}}],null,!0)}),a("el-table-column",{attrs:{width:"180",align:"center",label:"单品名"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.name))]}}],null,!0)})]:t._e(),a("el-table-column",{attrs:{align:"left",label:"批发价(元)"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{staticClass:"tar",attrs:{oninput:"value=value.match(/^\\d+(?:\\.\\d{0,2})?/)",onfocus:"this.select();",placeholder:"填写批发价"},on:{blur:function(a){return t.changeUnitItemPrice(e.row,"price")}},model:{value:e.row.price,callback:function(a){t.$set(e.row,"price",a)},expression:"scope.row.price"}})]}}],null,!0)},[a("div",{staticClass:"dflex-b",attrs:{slot:"header"},slot:"header"},[a("div",{staticClass:"dflex"},[t._v("批发价(元)")]),a("el-button",{staticClass:"padding-tb-xs fwb",attrs:{type:"text"},on:{click:function(a){return t.batchPriceSet(e,"price")}}},[t._v("批量")])],1)]),a("el-table-column",{attrs:{align:"left",label:"零售价(元)"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{staticClass:"tar",attrs:{oninput:"value=value.match(/^\\d+(?:\\.\\d{0,2})?/)",onfocus:"this.select();",placeholder:"填写市场价"},on:{blur:function(a){return t.changeUnitItemPrice(e.row,"market_price")}},model:{value:e.row.market_price,callback:function(a){t.$set(e.row,"market_price",a)},expression:"scope.row.market_price"}})]}}],null,!0)},[a("div",{staticClass:"dflex-b",attrs:{slot:"header"},slot:"header"},[a("div",{staticClass:"dflex"},[t._v("零售价(元)")]),a("el-button",{staticClass:"padding-tb-xs fwb",attrs:{type:"text"},on:{click:function(a){return t.batchPriceSet(e,"market_price")}}},[t._v("批量")])],1)]),a("el-table-column",{attrs:{align:"left",label:"进货价(元)"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{staticClass:"tar",attrs:{oninput:"value=value.match(/^\\d+(?:\\.\\d{0,2})?/)",onfocus:"this.select();",placeholder:"填写进货价"},on:{blur:function(a){return t.changeUnitItemPrice(e.row,"bid_price")}},model:{value:e.row.bid_price,callback:function(a){t.$set(e.row,"bid_price",a)},expression:"scope.row.bid_price"}})]}}],null,!0)},[a("div",{staticClass:"dflex-b",attrs:{slot:"header"},slot:"header"},[a("div",{staticClass:"dflex"},[a("span",[t._v("进货价(元)")]),a("el-tooltip",{attrs:{effect:"dark",content:"用于进货时价格参考、还有商品成本核算, 仅内部可见",placement:"top"}},[a("i",{staticClass:"el-icon-warning-outline fs margin-left-xs"})])],1),a("el-button",{staticClass:"padding-tb-xs fwb",attrs:{type:"text"},on:{click:function(a){return t.batchPriceSet(e,"bid_price")}}},[t._v("批量")])],1)]),a("el-table-column",{attrs:{align:"left",label:"最低售价(元)"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{staticClass:"tar",attrs:{oninput:"value=value.match(/^\\d+(?:\\.\\d{0,2})?/)",onfocus:"this.select();",placeholder:"最低售价"},on:{blur:function(a){return t.changeUnitItemPrice(e.row,"min_price")}},model:{value:e.row.min_price,callback:function(a){t.$set(e.row,"min_price",a)},expression:"scope.row.min_price"}})]}}],null,!0)},[a("div",{staticClass:"dflex-b",attrs:{slot:"header"},slot:"header"},[a("div",{staticClass:"dflex"},[a("span",[t._v("最低售价(元)")]),a("el-tooltip",{attrs:{effect:"dark",content:"设置商品的最低销售价，当销售订单实际销售价低于最低售价时，订单将不允许保存。设置为0元时表示不限制。",placement:"top"}},[a("i",{staticClass:"el-icon-warning-outline fs margin-left-xs"})])],1),a("el-button",{staticClass:"padding-tb-xs fwb",attrs:{type:"text"},on:{click:function(a){return t.batchPriceSet(e,"min_price")}}},[t._v("批量")])],1)])],2)],1):t._e()])}))],2),a("div",{staticClass:"aux-card margin-top"},[a("div",{staticClass:"header"},[a("div",{staticClass:"left"},[a("span",{staticClass:"title"},[t._v("商品描述")])])]),a("div",{staticClass:"padding"},[a("el-input",{attrs:{type:"textarea",placeholder:"请填写商品描述",rows:"3",maxlength:"1200","show-word-limit":""},model:{value:t.formData.desc,callback:function(e){t.$set(t.formData,"desc",e)},expression:"formData.desc"}})],1)]),a("div",{staticClass:"aux-card margin-top"},[a("div",{staticClass:"header"},[a("div",{staticClass:"left dflex"},[a("span",{staticClass:"title"},[t._v("期初库存")]),a("span",{staticClass:"padding-left-sm"},[a("el-switch",{attrs:{"active-color":"#1890FF","inactive-color":"#ccc"},on:{change:t.changeEnableStockSet},model:{value:t.enableStockSet,callback:function(e){t.enableStockSet=e},expression:"enableStockSet"}}),a("span",{staticClass:"padding-left-sm"},[t._v("开启期初库存设置")])],1),a("el-tooltip",{attrs:{effect:"dark",content:"初次添加商品时，如果您的仓库中已有商品库存，录入期初库存后，可以使后续成本价、毛利等值的计算更准确",placement:"top"}},[a("i",{staticClass:"el-icon-warning-outline fs margin-left-xs"})])],1)]),t.enableStockSet?[a("div",[a("el-alert",{attrs:{title:"注：该功能仅在初次设置库存时生效，如果库存商品已存在，则本次设置的库存数据不会生效。请谨慎填写！",type:"warning","show-icon":""}})],1),a("div",{staticClass:"padding-sm dflex-b"},[a("el-button-group",t._l(t.warehouseList,(function(e){return a("el-button",{key:e._id,attrs:{size:"small",type:t.activeWarehouse==e._id?"primary":"default",plain:""},on:{click:function(a){return t.changeWarehouse(e._id)}}},[t._v(t._s(e.name))])})),1)],1),a("div",{staticClass:"padding-bottom"},[a("el-table",{ref:"stockTable",staticClass:"aux-table",attrs:{data:t.compStockList,border:"",stripe:""}},[t.formData.spec_list.length>0?[a("el-table-column",{attrs:{width:"44",align:"center",label:"#"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.$index+1))]}}],null,!1,811300409)}),a("el-table-column",{attrs:{width:"180",align:"center",label:"单品名"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.name))]}}],null,!1,1895023226)})]:t._e(),a("el-table-column",{attrs:{align:"right",label:"期初库存量"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{staticClass:"tar",attrs:{oninput:"value=value.match(/^\\d+(?:\\.\\d{0,2})?/)",onfocus:"this.select();",placeholder:"填写期初库存量"},on:{blur:function(a){return t.changeStockInput(e.row,"stock_num")}},model:{value:e.row.stock_num,callback:function(a){t.$set(e.row,"stock_num",a)},expression:"scope.row.stock_num"}})]}}],null,!1,1288143404)},[a("div",{staticClass:"dflex-b",attrs:{slot:"header"},slot:"header"},[a("div",{staticClass:"dflex"},[t._v("期初库存量")]),a("el-button",{staticClass:"padding-tb-xs fwb",attrs:{type:"text"},on:{click:function(e){return t.batchStockSet("stock_num")}}},[t._v("批量")])],1)]),a("el-table-column",{attrs:{align:"right",label:"期初成本价"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{staticClass:"tar",attrs:{oninput:"value=value.match(/^\\d+(?:\\.\\d{0,2})?/)",onfocus:"this.select();",placeholder:"填写期初成本价"},on:{blur:function(a){return t.changeStockInput(e.row,"cost_price")}},model:{value:e.row.cost_price,callback:function(a){t.$set(e.row,"cost_price",a)},expression:"scope.row.cost_price"}})]}}],null,!1,3164813539)},[a("div",{staticClass:"dflex-b",attrs:{slot:"header"},slot:"header"},[a("div",{staticClass:"dflex"},[t._v("期初成本价")]),a("el-button",{staticClass:"padding-tb-xs fwb",attrs:{type:"text"},on:{click:function(e){return t.batchStockSet("cost_price")}}},[t._v("批量")])],1)]),a("el-table-column",{attrs:{align:"right",label:"期初总金额"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{staticClass:"tar",attrs:{oninput:"value=value.match(/^\\d+(?:\\.\\d{0,2})?/)",onfocus:"this.select();",placeholder:"填写期初总金额"},on:{blur:function(a){return t.changeStockInput(e.row,"cost_amount")}},model:{value:e.row.cost_amount,callback:function(a){t.$set(e.row,"cost_amount",a)},expression:"scope.row.cost_amount"}})]}}],null,!1,4017156191)},[a("div",{staticClass:"dflex-b",attrs:{slot:"header"},slot:"header"},[a("div",{staticClass:"dflex"},[t._v("期初总金额")]),a("el-button",{staticClass:"padding-tb-xs fwb",attrs:{type:"text"},on:{click:function(e){return t.batchStockSet("cost_amount")}}},[t._v("批量")])],1)])],2)],1)]:t._e()],2)]),a("el-col",{attrs:{span:7}},[a("div",{staticClass:"aux-card"},[a("div",{staticClass:"header"},[a("div",{staticClass:"left"},[a("span",{staticClass:"title"},[t._v("辅助属性")])])]),a("div",{staticClass:"padding padding-lr-lg"},[a("el-form-item",{attrs:{label:"商品品牌",prop:"brand_id"}},[a("AuxBrandSelect",{on:{change:t.changeGoodsBrand},model:{value:t.formData.brand_id,callback:function(e){t.$set(t.formData,"brand_id",e)},expression:"formData.brand_id"}})],1),a("el-form-item",{attrs:{label:"商品重量",prop:"weight"}},[a("el-input",{style:{width:"100%"},attrs:{placeholder:"请填写商品重量",oninput:"value=value.match(/^\\d+(?:\\.\\d{0,2})?/)",clearable:""},model:{value:t.formData.weight,callback:function(e){t.$set(t.formData,"weight",t._n(e))},expression:"formData.weight"}},[a("template",{slot:"append"},[t._v("kg")])],2)],1),a("el-form-item",{attrs:{label:"保 质 期",prop:"warranty"}},[a("el-input",{style:{width:"100%"},attrs:{placeholder:"请填写商品保质期",oninput:"value=value.match(/^\\d+(?:\\.\\d{0,2})?/)",clearable:""},model:{value:t.formData.warranty,callback:function(e){t.$set(t.formData,"warranty",t._n(e))},expression:"formData.warranty"}},[a("template",{slot:"append"},[t._v("天")])],2)],1),a("el-form-item",{attrs:{label:"供 应 商",prop:"supplier_id"}},[a("AuxSupplierSelect",{on:{change:t.changeSupplier},model:{value:t.formData.supplier_id,callback:function(e){t.$set(t.formData,"supplier_id",e)},expression:"formData.supplier_id"}})],1),a("el-form-item",{attrs:{label:"生 产 商",prop:"producer"}},[a("el-input",{style:{width:"100%"},attrs:{placeholder:"请填写商品生产商",clearable:""},model:{value:t.formData.producer,callback:function(e){t.$set(t.formData,"producer",e)},expression:"formData.producer"}})],1)],1)])])],1)],1),a("GoodsMultiUnitDialog",{ref:"goodsMultiUnitDialog",on:{submit:t.submitMoreUnit}}),a("GoodsMultiSpecDialog",{ref:"goodsMultiSpecDialog",on:{submit:t.submitMoreSpec,cancel:t.cancelMoreSpec}})],1)},n=[],s=a("2909"),o=a("5530"),r=(a("d81d"),a("99af"),a("a15b"),a("b0c0"),a("d3b7"),a("ddb0"),a("4de4"),a("159b"),a("b680"),a("caad"),a("2532"),a("a9e3"),a("498a"),a("2ef0"),a("2f62")),l=a("2197"),c=a("5bc5"),u=a("2f46"),d=a.n(u),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{staticClass:"unit-box-dialog",attrs:{title:"多单位设置",visible:t.visible,width:"30%"},on:{"update:visible":function(e){t.visible=e}}},[a("div",[a("el-alert",{attrs:{title:"注：辅助单位被业务单据引用后，辅助单位名称及换算关系将不允许修改",type:"success","show-icon":""}})],1),a("el-form",{ref:"unitForm",attrs:{model:t.formData,"label-width":"100px",size:"small"}},[a("div",{staticClass:"padding"},[a("el-form-item",{attrs:{label:"基本单位",prop:"baseUnit",rules:{required:!0,message:"请选择默认单位",trigger:["blur","change"]}}},[a("el-select",{attrs:{placeholder:"选择基本单位",clearable:""},model:{value:t.formData.baseUnit,callback:function(e){t.$set(t.formData,"baseUnit",e)},expression:"formData.baseUnit"}},t._l(t.unitOptions,(function(t){return a("el-option",{key:t.name,attrs:{label:t.name,value:t.name}})})),1)],1),t._l(t.formData.moreUnits,(function(e,i){return a("el-form-item",{key:e.unit,attrs:{label:"辅助单位",prop:"moreUnits."+i,rules:{required:!0,validator:t.validator,trigger:"blur"}}},[a("div",{staticClass:"dflex"},[a("el-select",{staticStyle:{width:"120px"},attrs:{placeholder:"选择单位",clearable:""},model:{value:e.unit,callback:function(a){t.$set(e,"unit",a)},expression:"item.unit"}},t._l(t.compUnits,(function(t){return a("el-option",{key:t.name,attrs:{label:t.name,value:t.name,disabled:t.disabled}})})),1),a("span",{staticClass:"padding-lr-sm"},[t._v("=")]),a("el-input",{staticStyle:{width:"120px"},attrs:{placeholder:"填写数量",oninput:"value=value.match(/^\\d+(?:\\.\\d{0,2})?/)"},model:{value:e.scale,callback:function(a){t.$set(e,"scale",t._n(a))},expression:"item.scale"}},[a("template",{slot:"append"},[t._v(t._s(t.formData.baseUnit))])],2),a("el-button",{staticClass:"margin-left-sm",attrs:{size:"mini",type:"default",icon:"el-icon-delete",circle:""},on:{click:function(a){return a.preventDefault(),t.removeItem(e,i)}}})],1)])})),a("el-form-item",[a("el-button",{attrs:{icon:"el-icon-plus",disabled:t.formData.moreUnits.length>=t.limit},on:{click:t.addItem}},[t._v("新增辅助单位")])],1)],2)]),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.visible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.submitForm("unitForm")}}},[t._v("确 定")])],1)],1)},m=[],p=(a("a434"),{name:"GoodsMultiUnitDialog",data:function(){return{visible:!1,limit:3,unitOptions:this.$store.getters.dictionary.goodsUnits,formData:{baseUnit:"",moreUnits:[]}}},computed:{selectUnits:function(){var t=this.formData.moreUnits.map((function(t){return t.unit}));return[this.formData.baseUnit].concat(t)},compUnits:function(){var t=this;return this.unitOptions.filter((function(e){return!t.selectUnits.includes(e.unit)}))}},methods:{open:function(t){var e=t.baseUnit,a=t.unitList,i=void 0===a?[]:a;this.formData.baseUnit=e,this.formData.moreUnits=Object(s["a"])(i.filter((function(t){return 1!==Number(t.scale)}))),this.visible=!0},addItem:function(){this.formData.moreUnits.length>=this.limit||this.formData.moreUnits.push({unit:"",scale:""})},removeItem:function(t,e){this.formData.moreUnits.splice(e,1)},validator:function(t,e,a){e.unit?e.scale?1!==Number(e.scale)?a():a(new Error("换算数量不能为1")):a(new Error("填写换算数量")):a(new Error("请选择辅助单位"))},submitForm:function(t){var e=this,a=this.formData.baseUnit,i=[{unit:this.formData.baseUnit,scale:1}];this.formData.moreUnits.forEach((function(t){t.unit_desc="(=".concat(t.scale).concat(a,")"),i.push(t)}));var n=i.map((function(t){return t.unit+(t.unit_desc||"")})).join(" / ");this.$refs[t].validate((function(t){if(!t)return!1;e.visible=!1,e.$emit("submit",{baseUnit:a,unitList:i,unitDesc:n})}))},resetForm:function(t){this.$refs[t].resetFields()}}}),h=p,b=(a("ddff"),a("2877")),v=Object(b["a"])(h,f,m,!1,null,null,null),_=v.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-drawer",{attrs:{visible:t.visible,"show-close":!1,"with-header":!1,"wrapper-closable":!1,direction:"rtl",size:"540px"},on:{"update:visible":function(e){t.visible=e}}},[a("div",{staticClass:"padding dflex-b border-bottom"},[a("div",{staticClass:"fs fwb"},[t._v("规格/属性设置")]),a("div",{},[a("el-button",{attrs:{type:"default"},on:{click:t.handleCancel}},[t._v("取消")]),a("el-button",{staticClass:"margin-left-sm",attrs:{type:"primary"},on:{click:t.handleSubmit}},[t._v("确认提交")])],1)]),a("div",{staticClass:"padding"},[a("div",{staticClass:"padding-bottom-sm"},[a("div",{staticClass:"dflex-b"},[a("span",{staticClass:"fs-sm ft-grey"},[t._v("选择常用规格/属性")]),a("div",{},[a("el-button",{attrs:{type:"text",size:"sm"},on:{click:function(e){return t.$common.toPage("/goods/goods-props")}}},[t._v("管理属性")])],1)]),a("div",{staticClass:"padding-tb-sm dflex"},t._l(t.dictionary.goodsProps,(function(e,i){return a("div",{key:i,staticClass:"margin-right-sm",on:{click:function(a){return t.addConstSpec(e)}}},[a("el-button",{staticClass:"ft-grey"},[t._v(t._s(e.name))])],1)})),0)]),a("div",{},[a("div",{staticClass:"dflex-b padding-tb-sm"},[a("span",{staticClass:"fs-sm ft-grey"},[t._v("自定义规格/属性")])]),t._l(t.specList,(function(e,i){return a("div",{key:i},[a("AuxGoodsPropsBox",{on:{remove:function(a){return t.removeSpecItem(e,i)}},model:{value:t.specList[i],callback:function(e){t.$set(t.specList,i,e)},expression:"specList[index]"}})],1)})),t.specList.length<3?a("el-button",{staticClass:"au-icon-add",attrs:{type:"primary",plain:""},on:{click:t.addNewSpec}},[t._v("添加新规格/属性")]):t._e()],2)])])},k=[],D=(a("c740"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"aux-goods-spec-box margin-bottom"},[a("div",{staticClass:"dflex-b border-bottom"},[a("div",{staticClass:"dflex padding-lr"},[a("span",{staticClass:"padding-tb-sm fwb fs"},[t._v(t._s(t.formData.name||"属性名称"))]),a("span",{staticClass:"padding-sm el-icon-edit fs-lg ft-primary",on:{click:t.editName}})]),a("div",{staticClass:"padding",on:{click:function(e){return t.$emit("remove")}}},[a("span",{staticClass:"el-icon-delete fs-lg"})])]),t.formData.values.length>0?a("div",{staticClass:"padding flex-box",staticStyle:{"padding-bottom":"0"}},t._l(t.formData.values,(function(e,i){return a("div",{key:i,staticClass:"flex-item dflex-b"},[a("div",{staticClass:"flex1 tac padding-xs ft-primary",on:{click:function(a){return t.editItem(e,i)}}},[t._v(t._s(e))]),a("div",{staticClass:"el-icon-close fs ft-base padding-xs padding-lr-sm",on:{click:function(a){return t.removeItem(e,i)}}})])})),0):t._e(),a("div",{staticClass:"padding dflex-b"},[t.inputVisible?a("div",{staticClass:"dflex"},[a("el-input",{attrs:{size:"small",placeholder:"请输入属性值"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.inputConfirm(e)}},model:{value:t.inputValue,callback:function(e){t.inputValue=e},expression:"inputValue"}}),a("el-button",{staticClass:"margin-left-sm",attrs:{type:"primary",size:"small",round:""},on:{click:t.inputConfirm}},[t._v("确认")]),a("el-button",{staticClass:"margin-left-xs",attrs:{size:"small",plain:"",round:""},on:{click:function(e){t.inputVisible=!1}}},[t._v("取消")])],1):a("el-button",{staticClass:"el-icon-plus",attrs:{size:"small",plain:""},on:{click:function(e){t.inputVisible=!0}}},[t._v("添加属性值")])],1)])}),x=[],C={name:"AuxGoodsPropsBox",props:{value:{type:Object,default:function(){return{code:"",name:"",values:[]}}}},data:function(){return{formData:{code:"",name:"",values:[]},inputVisible:!1,inputValue:""}},watch:{value:{handler:function(t){this.formData={code:t.code,name:t.name,values:Object(s["a"])(t.values)}},immediate:!0}},methods:{editName:function(){var t=this;this.$prompt("","修改属性名称",{inputValue:this.formData.name,inputPlaceholder:"请填写属性名称"}).then((function(e){var a=e.value;t.formData.name=a,t.$emit("input",t.formData)}))},editItem:function(t,e){var a=this;this.$prompt("","修改属性值",{inputValue:t||"",inputPlaceholder:"请填写属性值"}).then((function(t){var i=t.value;a.$set(a.formData.values,e,i),a.$emit("input",a.formData)}))},inputConfirm:function(){this.formData.values.push(this.inputValue),this.inputValue="",this.inputVisible=!1,this.$emit("input",this.formData)},removeItem:function(t,e){var a=this;this.$confirm("确认删除该属性值吗？","提示",{type:"warning"}).then((function(){a.formData.values.splice(e,1),a.$emit("input",a.formData)}))}}},w=C,S=(a("ebc5"),Object(b["a"])(w,D,x,!1,null,null,null)),y=S.exports,$={components:{AuxGoodsPropsBox:y},data:function(){return{visible:!1,specList:[]}},computed:Object(o["a"])({},Object(r["b"])(["dictionary"])),methods:{open:function(t){var e=t.specList,a=void 0===e?[]:e;this.specList=Object(s["a"])(a),this.visible=!0,this.$store.dispatch("dictionary/loadGoodsProps")},close:function(){this.visible=!1},addConstSpec:function(t){if(!(this.specList.length>=3)){var e=this.specList.findIndex((function(e){return e.code===t.code}));-1===e&&this.specList.push({name:t.name,code:t.code,values:Object(s["a"])(t.values)})}},addNewSpec:function(){var t=this;this.$prompt("","新增规格/属性",{inputPlaceholder:"请填写属性名称"}).then((function(e){var a=e.value;t.specList.push({name:a,values:[]})}))},removeSpecItem:function(t,e){var a=this;this.$confirm("确认删除该规格/属性吗？","提示",{type:"warning"}).then((function(){a.specList.splice(e,1)}))},validatForm:function(t){t.specList.forEach((function(t){if(!t.name)throw new Error("规格名称不能为空");if(0===t.values.length)throw new Error("每个规格下至少填写一个具体规格")}))},getPostData:function(){return{specList:this.specList}},handleCancel:function(){this.$emit("cancel"),this.close()},handleSubmit:function(){try{var t=this.getPostData();this.validatForm(t),this.$emit("submit",t),this.close()}catch(e){this.$message.error(e.message)}}}},U=$,L=Object(b["a"])(U,g,k,!1,null,null,null),P=L.exports,M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-cascader",{staticClass:"w-full",attrs:{options:t.treeList,props:{expandTrigger:"hover"},clearable:"",placeholder:"选择商品分类"},on:{change:t.change,focus:t.initLoad},model:{value:t.modelValue,callback:function(e){t.modelValue=e},expression:"modelValue"}})},E=[],j={name:"AuxPickerCategory",props:{value:{type:Array,default:function(){return[]}}},data:function(){return{dataList:[],treeList:[],modelValue:[]}},watch:{value:{handler:function(t,e){this.modelValue=t,this.initLoad()},immediate:!0}},methods:{initLoad:function(){0===this.dataList.length&&this.fetchData()},fetchData:function(){var t=this;Object(l["a"])("goods/listCategoryAll",{},{functionName:"xunda"}).then((function(e){var a=(e.data||[]).map((function(t){return t.label=t.name,t.value=t._id,t}));t.dataList=a,a.forEach((function(t){t.pid=t.pid||""})),t.treeList=t.buildTree(a,"")}))},buildTree:function(t,e){var a=this,i=t.filter((function(t){return e==t.pid})).map((function(t){return Object.assign({},t)}));return i.forEach((function(e){var i=a.buildTree(t,e._id);i&&i.length>0&&(e.children=i)})),i},change:function(t){var e=this;this.$nextTick((function(){e.$emit("input",t);var a=e.dataList.filter((function(e){return t.includes(e.value)}));e.$emit("change",a)}))}}},O=j,F=Object(b["a"])(O,M,E,!1,null,null,null),N=F.exports,I=a("d262"),V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-select",{staticClass:"w-full",attrs:{filterable:"",placeholder:"请选择商品品牌",clearable:!0},on:{change:t.change,focus:t.initLoad},model:{value:t.modelValue,callback:function(e){t.modelValue=e},expression:"modelValue"}},t._l(t.dataList,(function(t){return a("el-option",{key:t._id,attrs:{label:t.brand_name,value:t._id}})})),1)},G=[],A={name:"AuxSelectSupplier",props:{value:{type:[String,Array],default:function(){return""}},multi:Boolean},data:function(){return{loading:!1,dataList:[],modelValue:""}},watch:{value:{handler:function(t,e){this.modelValue=t,0==this.dataList.length&&t&&this.fetchData()},immediate:!0}},methods:{initLoad:function(){this.dataList.length>0||this.fetchData()},fetchData:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";Object(l["a"])("goods/listGoodsBrand",{pageSize:50,simple:!0,keyword:e},{functionName:"xunda"}).then((function(e){t.loading=!1,t.dataList=e.data||[]}))},remoteMethod:function(t){var e=this;t&&""!==t?(this.loading=!0,this.$common.debounce((function(){return e.fetchData(t)}),200)()):this.dataList=[]},change:function(){var t=this;this.$nextTick((function(){if(t.$emit("input",t.modelValue),!t.multi){var e=t.dataList.filter((function(e){return e._id==t.modelValue}));e.length>0&&t.$emit("change",e[0])}}))}}},W=A,B=Object(b["a"])(W,V,G,!1,null,null,null),z=B.exports;window.Decimal=c["a"];var T={components:{GoodsMultiUnitDialog:_,GoodsMultiSpecDialog:P,AuxCategoryPicker:N,AuxSupplierSelect:I["a"],AuxBrandSelect:z},props:[],data:function(){return{unitMulti:!1,unitOptions:{baseUnit:"",moreUnits:[]},specMulti:!1,goodsId:"",formData:{name:"",code:"",img:"",imgs:[],cid:"",cids:[],unit:"",unit_list:[],unit_desc:"",spec:"",spec_list:[],price:"",min_price:"",bid_price:"",market_price:"",sku_datas:[{scale:1,unit:"件",price:0,min_price:0,prices:0,bid_price:0,market_price:0}],brand_id:"",brand_name:"",weight:"",warranty:"",supplier_id:"",supplier_name:"",producer:"",state:1,remark:"",desc:"",stock_datas:[]},rules:{name:[{required:!0,message:"请填写商品名称",trigger:"blur"}],code:[{required:!0,message:"请填写商品编号",trigger:"blur"}],unit:[{required:!0,message:"请选择商品单位",trigger:"blur"}],cids:[{required:!0,message:"请选择商品分类",trigger:"change"}],state:[{required:!0,message:"请选择启用状态",trigger:"change"}]},submitLoading:!1,enableStockSet:!1,activeWarehouse:"",warehouseList:[]}},computed:Object(o["a"])(Object(o["a"])({},Object(r["b"])(["dictionary"])),{},{compUintsDesc:function(){if(this.formData.unit_desc)return this.formData.unit_desc;var t=this.formData.unit,e=this.formData.unit_list.map((function(e){return e.unit+(1!==e.scale?"(=".concat(e.scale).concat(t,")"):"")}));return e.join(" / ")},compSpecDesc:function(){var t=(this.formData.spec_list||[]).map((function(t){return"".concat(t.name,"(").concat(t.values.length,")")}));return t.join(" | ")},compUnitList:function(){var t=this.formData.unit_list||[];return 0===t.length&&t.push({unit:this.formData.unit,scale:1}),t},compStockList:function(){var t=this,e=this.formData.stock_datas||[];return e.filter((function(e){return e.warehouse_id===t.activeWarehouse}))}}),created:function(){var t=this.$route.query||{},e=t.id;e&&(this.goodsId=e,this.fetchGoodsData()),this.$store.dispatch("dictionary/loadGoodsUnits")},mounted:function(){},methods:{fetchGoodsData:function(){var t=this;Object(l["a"])("goods/getInfo",{goods_id:this.goodsId},{functionName:"xunda"}).then((function(e){var a=e.data,i=(a.imgs,a.unit),n=a.price,s=a.bid_price,o=a.market_price,r=a.min_price,l=void 0===r?0:r,u=a.unit_list,d=void 0===u?[]:u,f=a.spec_list,m=void 0===f?[]:f,p=a.sku_datas,h=void 0===p?[]:p,b=a.stock_datas,v=void 0===b?[]:b,_=a.unit_prices,g=void 0===_?[]:_,k=Object.assign(e.data),D=["price","market_price","bid_price","min_price"],x={unit:i,price:n,bid_price:s,market_price:o,min_price:l,scale:1},C=h.length>0?h:g.length>0?g:[x];[x].concat(C).forEach((function(t){return D.forEach((function(e){var a=t[e];t[e]=c["a"].div(a||0,100).toFixed(2)})),t})),d.forEach((function(t){t.enablePriceSet=C.filter((function(e){return e.unit===t.unit})).length>0})),k.unit_list=d,k.spec_list=m,k.sku_datas=C,v&&v.length>0&&(v.forEach((function(t){t.cost_price=c["a"].div(t.cost_price,100).toFixed(2)})),k.stock_datas=v),delete k["_id"],t.formData=k}))},buildGoodCode:function(){this.formData.code=d()().format("YYMMDDHHmmss")},getUnitPriceList:function(t){var e=this.formData.sku_datas||[];return e.filter((function(e){return e.unit===t.unit}))},changeGoodsBaseUnit:function(t){var e=this.formData.unit_list||[];e.length>0&&this.$set(e,0,Object.assign(e[0],{unit:t}));var a=this.formData.sku_datas||[];if(a.length>0){var i=a[0].unit;a.filter((function(t){return t.unit===i})).forEach((function(e){return e.unit=t}))}},changeGoodsBrand:function(t){this.formData.brand_name=t.brand_name},changeSupplier:function(t){this.formData.supplier_name=t.supplier_name},openMoreUnitSet:function(t){t&&this.$refs.goodsMultiUnitDialog.open({baseUnit:this.formData.unit,unitList:this.formData.unit_list})},submitMoreUnit:function(t){var e=t.baseUnit,a=t.unitList,i=t.unitDesc;e!==this.formData.unit&&(this.formData.unit=e,this.changeGoodsBaseUnit(e)),this.formData.unit_desc=i,this.formData.unit_list=a,this.unitMulti=a.length>1;var n=a.map((function(t){return t.unit}));this.formData.sku_datas=(this.formData.sku_datas||[]).filter((function(t){return n.includes(t.unit)})),this.formData.stock_datas.forEach((function(t){return t.unit=e}))},openMoreSpecSet:function(t){t&&this.$refs.goodsMultiSpecDialog.open({specList:this.formData.spec_list})},submitMoreSpec:function(t){var e=t.specList;0===e.length?(this.formData.spec="",this.formData.spec_list=[],this.specMulti=!1):1===e.length&&1===e[0].values.length?(this.formData.spec=e[0].values[0],this.formData.spec_list=[],this.specMulti=!1):(this.formData.spec="",this.formData.spec_list=Object(s["a"])(e),this.specMulti=!0),this.initSpecPrices(),this.initStockDatas(this.activeWarehouse)},initSpecPrices:function(){var t=this.formData.spec_list,e=this.formData.sku_datas,a=t.filter((function(t){return t.values.length>0})).map((function(t){return t.values}));if(0!==a.length){var i=this.formData.unit,n=e.filter((function(t){return t.unit===i})),s=this.$common.toCartesian(a),o={},r=s.map((function(t){return t.join("/")}));n.filter((function(t){return r.includes(t.name)})).forEach((function(t){o[t.name]=t}));var l=s.map((function(t){var e=t.join("/");return o[e]?o[e]:{name:e,skus:t,unit:i,img:"",code:"",price:"",bid_price:"",market_price:"",min_price:""}}));this.formData.sku_datas=l}else this.formData.sku_datas=[e[0]]},cancelMoreSpec:function(){0===this.formData.spec_list.length&&(this.specMulti=!1)},changeUnitItemPrice:function(t,e){t[e]=Number(t[e]).toFixed(2)},batchPriceSet:function(t,e){var a=this;this.$prompt("请输入价格（单位：元）","批量设置",{inputPlaceholder:"请填写",inputPattern:/^\d+(?:\.\d{0,2})?/,inputErrorMessage:"价格不正确"}).then((function(i){var n=i.value,s=a.formData.sku_datas||[],o=s.filter((function(e){return e.unit===t.unit}));o.forEach((function(t){t[e]=Number(n).toFixed(2)}))}))},changeEnablePriceSet:function(t){t.enablePriceSet?this.initUnitPrices(t):this.deleteUnitPrices(t)},initUnitPrices:function(t){var e=this,a=["price","market_price","bid_price","min_price"],i=this.formData.unit,n=this.formData.sku_datas||[],o=n.filter((function(t){return t.unit===i})),r=o.map((function(i){var n=Object.assign({},i,{unit:t.unit,scale:Number(t.scale)});return delete n.sku_id,a.forEach((function(a){var i=n[a];i&&e.$set(n,a,Number(i*t.scale).toFixed(2))})),n}));n.push.apply(n,Object(s["a"])(r))},deleteUnitPrices:function(t){this.formData.sku_datas=this.formData.sku_datas.filter((function(e){return e.unit!==t.unit}))},changeEnableStockSet:function(){var t=this,e=this.enableStockSet;e?this.loadWarehouseData((function(){t.changeWarehouse(t.activeWarehouse)})):this.formData.stock_datas=[]},loadWarehouseData:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){};Object(l["a"])("stock/listWarehouse",{pageSize:20,simple:!0},{functionName:"xunda"}).then((function(a){t.warehouseList=a.data||[],t.warehouseList.length>0&&(t.activeWarehouse=t.warehouseList[0]._id),e()}))},initStockDatas:function(t){var e,a=this.formData.unit,i=this.formData.spec_list;if(0!==i.length){var n=i.filter((function(t){return t.values.length>0})).map((function(t){return t.values})),o=this.$common.toCartesian(n),r=o.map((function(e){var i=e.join("/");return{warehouse_id:t,name:i,skus:e,unit:a,cost_price:"",cost_amount:"",stock_num:""}}));(e=this.formData.stock_datas).push.apply(e,Object(s["a"])(r))}else{var l={warehouse_id:t,unit:a,cost_price:"",cost_amount:"",stock_num:""};this.formData.stock_datas.push(l)}},changeWarehouse:function(t){var e=this;this.activeWarehouse=t,this.$nextTick((function(){var a=e.formData.stock_datas.filter((function(e){return e.warehouse_id===t}));a.length>0||e.initStockDatas(t)}))},batchStockSet:function(t){var e=this,a=this.activeWarehouse;"stock_num"===t?this.$prompt("请输入期初库存量","批量设置",{inputPlaceholder:"请填写",inputPattern:/^\d+(?:\.\d{0,2})?/,inputErrorMessage:"价格不正确"}).then((function(i){var n=i.value,s=e.formData.stock_datas||[],o=s.filter((function(t){return t.warehouse_id===a}));o.forEach((function(e){e[t]=Number(n)})),e.changeStockCompleted(t)})):this.$prompt("请输入期初金额","批量设置",{inputPlaceholder:"请填写",inputPattern:/^\d+(?:\.\d{0,2})?/,inputErrorMessage:"金额不正确"}).then((function(i){var n=i.value,s=e.formData.stock_datas||[],o=s.filter((function(t){return t.warehouse_id===a}));o.forEach((function(e){e[t]=Number(n).toFixed(2)})),e.changeStockCompleted(t)}))},changeStockInput:function(t,e){t.stock_num=Number(t.stock_num||1),"stock_num"!==e&&"cost_price"!==e||(t.cost_price=Number(t.cost_price||0).toFixed(2),t.cost_amount=(t.stock_num*t.cost_price).toFixed(2)),"cost_amount"===e&&(t.cost_amount=Number(t.cost_amount||0).toFixed(2),t.cost_price=Number(t.cost_amount/t.stock_num).toFixed(2))},changeStockCompleted:function(t){var e=this.formData.stock_datas||[];0!==e.length&&e.forEach((function(e){"stock_num"!==t&&"cost_price"!==t||(e.cost_price=Number(e.cost_price||0).toFixed(2),e.cost_amount=(e.stock_num*e.cost_price).toFixed(2)),"cost_amount"===t&&(e.cost_amount=Number(e.cost_amount||0).toFixed(2),e.cost_price=Number(e.cost_amount/e.stock_num).toFixed(2))}))},validatData:function(t){t.sku_datas.forEach((function(t,e){if(!t.price||Number(t.price)<=0)throw new Error("单位[".concat(t.unit,"]-单品名[").concat(t.name||"无","]，金额必需大于零"))}))},submitForm:function(){var t=this;this.submitLoading=!0;try{this.$refs["goodsForm"].validate((function(e){if(e){var a=t.getPostData();t.validatData(a),Object(l["a"])("goods/saveGoods",a,{functionName:"xunda"}).then((function(e){t.submitLoading=!1,t.$message.success("保存成功"),t.$router.push({path:"./goods-list"})}),(function(e){t.submitLoading=!1}))}else t.submitLoading=!1}))}catch(e){this.submitLoading=!1,this.$message.error(e.message||e)}},getPostData:function(){var t=["price","market_price","bid_price","min_price"],e=(this.formData.unit||"").trim(),a=Object.assign({},this.formData,{goods_id:this.goodsId});a.unit_list&&0!==a.unit_list.length||(a.unit_list=[{unit:e,scale:1}]);var i=a.sku_datas||[],n=i.filter((function(t){return t.unit===e}));if(n.length>1){var o=n.map((function(t){return Number(t.price)})),r=Math.max.apply(Math,Object(s["a"])(o)),l=Math.min.apply(Math,Object(s["a"])(o)),u=l===r?l:l+"~"+r;a.price_range_text=u}i=i.map((function(e){var a=Object.assign({},e);return t.forEach((function(t){var i=e[t];a[t]=c["a"].mul(Number(i||0),100).toFixed(1)})),a}));var d={unit:e},f=i[0];t.forEach((function(t){var e=f[t];d[t]=e})),Object.assign(a,d),a.unit_prices=[],a.sku_datas=i;var m=a.stock_datas||[];return this.enableStockSet&&m.length>0&&(m.forEach((function(t){t.cost_price=Number(c["a"].mul(Number(t.cost_price||0),100))})),a.stock_datas=m),a},resetForm:function(){this.$refs["goodsForm"].resetFields()}}},q=T,H=(a("ad8d"),Object(b["a"])(q,i,n,!1,null,null,null));e["default"]=H.exports},"450e":function(t,e,a){},a4b7:function(t,e,a){},ad8d:function(t,e,a){"use strict";a("a4b7")},d90f:function(t,e,a){},ddff:function(t,e,a){"use strict";a("450e")},ebc5:function(t,e,a){"use strict";a("d90f")}}]);