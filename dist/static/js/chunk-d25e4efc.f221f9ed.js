(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d25e4efc"],{2870:function(t,s,e){},4318:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",{staticClass:"pdf-root",class:t.pagerFormat},[["x58mm","x80mm"].includes(t.pagerFormat)?e("section",{staticClass:"container"},[e("section",{staticClass:"pheader"},[e("div",{staticClass:"title"},[t._v(t._s(t.company.name))]),e("div",[t._v(t._s(t.header.title))]),e("div",{staticClass:"time"},[t._v("No."+t._s(t.detail.orders_no))])]),e("section",{staticClass:"pcontent"},[e("section",{staticClass:"bizbox"},[e("div",{staticClass:"flex1"},[e("div",[t._v("日期："+t._s(t.detail.orders_date))])]),e("div",{staticClass:"flex1"},[e("div",[t._v("客户："+t._s(t.bizInfo.name))]),t.bizInfo.address?e("div",[t._v("地址："+t._s(t.bizInfo.address))]):t._e()]),e("div",{staticClass:"flex1"},[t.bizInfo.contact?e("span",[t._v("联系人："+t._s(t.bizInfo.contact)+"、")]):t._e(),t.bizInfo.telephone?e("span",[t._v("联系电话："+t._s(t.bizInfo.telephone))]):t._e()])]),e("div",{staticClass:"line"}),e("table",{staticClass:"table"},[t._m(0),e("tbody",t._l(t.detail.orders_goods,(function(s,a){return e("tr",{key:a},[e("td",{staticClass:"tal"},[t._v(t._s(s.goods_name))]),e("td",[t._v(t._s(s.goods_cnt))]),e("td",[t._v(t._s(s.goods_price))]),e("td",[t._v(t._s(s.total_money))])])})),0)]),e("section",{staticClass:"margin-top-sm"},[e("div",[t._v("合计："+t._s(t.detail.orders_total_money))]),e("div",[t._v("备注："+t._s(t.detail.remark))])]),e("div",{staticClass:"line"}),t._m(1)]),t._m(2)]):["a4"].includes(t.pagerFormat)?e("section",{staticClass:"container"},[e("section",{staticClass:"pheader"},[e("div",{staticClass:"title"},[t._v(t._s(t.company.name)+t._s(t.header.title))])]),e("section",{staticClass:"pcontent"},[t._m(3),e("section",{staticClass:"bizbox"},[e("div",{staticClass:"dflex-b"},[e("div",{staticClass:"flex3"},[e("div",[t._v("客户："+t._s(t.bizInfo.name))]),e("div",[t._v("地址："+t._s(t.bizInfo.address))])]),e("div",{staticClass:"flex2"},[e("div",[t._v("联系人："+t._s(t.bizInfo.contact))]),e("div",[t._v("电话："+t._s(t.bizInfo.telephone))])]),e("div",{staticClass:"flex2 tar"},[e("div",[t._v("No."+t._s(t.detail.orders_no))]),e("div",[t._v("日期："+t._s(t.detail.orders_date))])])])]),e("section",{staticClass:"tablebox"},[e("table",{staticClass:"table"},[e("colgroup"),t._m(4),e("tbody",[t._l(t.detail.orders_goods,(function(s,a){return e("tr",{key:a},[e("td",[t._v(t._s(a+1))]),e("td",[t._v(t._s(s.goods_name))]),e("td",[t._v(t._s(s.goods_spec))]),e("td",[t._v(t._s(s.goods_unit))]),e("td",[t._v(t._s(s.goods_cnt))]),e("td",[t._v(t._s(s.goods_price))]),e("td",[t._v(t._s(s.total_money))]),e("td",[t._v(t._s(s.remark))])])})),e("tr",[e("td",[t._v("合计")]),e("td",{staticClass:"tal",attrs:{colspan:"5"}},[t._v("（大写）"+t._s(t.$common.toBigMoney(t.detail.orders_total_money)))]),e("td",{staticClass:"tal",attrs:{colspan:"3"}},[t._v("（小写）¥"+t._s(t.detail.orders_total_money))])]),e("tr",[e("td",[t._v("备注")]),e("td",{staticClass:"tal",attrs:{colspan:"8"}},[t._v(t._s(t.detail.remark))])]),t._m(5)],2)])]),e("section",{staticClass:"dflex-b",staticStyle:{"margin-top":"6px"}},[e("div",[t._v("公司："+t._s(t.company.name))]),e("div",[t._v("制单人："+t._s(t.detail.create_uname))]),e("div",[t._v("发货人(盖章/签字）：")]),e("div",[t._v("收货人(盖章/签字）：")]),e("div")]),e("section",[t.company.address?e("div",{staticClass:"margin-top-xs"},[t._v("地址："+t._s(t.company.address||"无"))]):t._e(),t.company.telephone?e("div",{staticClass:"margin-top-xs"},[t._v("电话："+t._s(t.company.telephone||"无"))]):t._e()])]),e("section",{staticClass:"pfooter"})]):["a4-l"].includes(t.pagerFormat)?e("section",{staticClass:"container"},[e("section",{staticClass:"pheader"},[e("div",{staticClass:"title"},[t._v(t._s(t.company.name)+t._s(t.header.title))])]),e("section",{staticClass:"pcontent"},[t._m(6),e("section",{staticClass:"bizbox dflex-b"},[e("div",{staticClass:"dflex"},[e("div",{staticClass:"padding-right-lg"},[t._v(" 客户："+t._s(t.bizInfo.name)+" "),t.bizInfo.contact?e("span",[t._v(t._s(t.bizInfo.contact))]):t._e()]),e("div",{staticClass:"padding-right-lg"},[t._v("电话："+t._s(t.bizInfo.telephone))]),e("div",{staticClass:"padding-right-lg"},[t._v("地址："+t._s(t.bizInfo.address))])]),e("div",{staticClass:"dflex"},[e("span",{staticClass:"padding-right-lg"},[t._v("单号："+t._s(t.detail.orders_no))]),e("span",{staticClass:"margin-left"},[t._v("日期："+t._s(t.detail.orders_date))])])]),e("section",{staticClass:"tablebox"},[e("table",{staticClass:"table"},[e("colgroup"),t._m(7),e("tbody",[t._l(t.detail.orders_goods,(function(s,a){return e("tr",{key:a},[e("td",[t._v(t._s(a+1))]),e("td",[t._v(t._s(s.goods_name))]),e("td",[t._v(t._s(s.goods_no))]),e("td",[t._v(t._s(s.goods_spec))]),e("td",[t._v(t._s(s.goods_unit))]),e("td",[t._v(t._s(s.goods_cnt))]),e("td",[t._v(t._s(s.goods_ori_price))]),e("td",[t._v(t._s(s.goods_rote))]),e("td",[t._v(t._s(s.goods_price))]),e("td",[t._v(t._s(s.total_money))]),e("td",[t._v(t._s(s.remark))])])})),e("tr",[e("td",[t._v("合计")]),e("td",{staticClass:"tal",attrs:{colspan:"8"}},[t._v("（大写）"+t._s(t.$common.toBigMoney(t.detail.orders_total_money)))]),e("td",{staticClass:"tal",attrs:{colspan:"2"}},[t._v("（小写）¥"+t._s(t.detail.orders_total_money))])]),e("tr",[e("td",[t._v("备注")]),e("td",{staticClass:"tal",attrs:{colspan:"10"}},[t._v(t._s(t.detail.remark))])]),t._m(8)],2)])]),e("section",{staticClass:"dflex-s margin-top-sm"},[e("div",{staticClass:"padding-right-lg"},[t._v("原价金额："+t._s(t.detail.goods_original_money))]),e("div",{staticClass:"padding-right-lg"},[t._v("整单优惠："+t._s(t.detail.orders_discount_money))]),e("div",{staticClass:"padding-right-lg"},[t._v("其他费用："+t._s(t.detail.orders_extend_fee))]),e("div",{staticClass:"padding-right-lg"},[t._v("合计金额："+t._s(t.detail.orders_total_money))])]),t.detail.remark?e("section",{staticClass:"dflex-b margin-top-sm"},[e("div",[t._v("备注信息："+t._s(t.detail.remark))])]):t._e(),e("section",{staticClass:"dflex-b margin-top-sm"},[e("div",[e("div",[t._v("公司："+t._s(t.company.name))]),e("div",{staticClass:"margin-top-sm"},[t._v("地址: "+t._s(t.company.address||"无"))]),e("div",{staticClass:"margin-top-sm"},[t._v("电话: "+t._s(t.company.telephone||"无"))])]),e("div",[t._v("制单人："+t._s(t.detail.create_uname))]),e("div",[t._v("发货人(盖章/签字）：")]),e("div",[t._v("收货人(盖章/签字）：")]),e("div")])]),e("section",{staticClass:"pfooter"})]):e("section",{staticClass:"container"},[e("section",{staticClass:"pheader"},[e("div",{staticClass:"title"},[t._v(t._s(t.company.name)+t._s(t.header.title))])]),e("section",{staticClass:"pcontent"},["d241-93mm"!=t.pagerFormat?e("section",[e("div",{staticClass:"cominfo"}),e("div",{staticClass:"qrcode"})]):t._e(),e("section",{staticClass:"bizbox"},[e("div",{staticClass:"dflex-b"},[e("div",{staticClass:"flex1"},[e("div",[t._v("客户名称："+t._s(t.bizInfo.name))]),e("div",[t._v("客户地址："+t._s(t.bizInfo.address))])]),e("div",{staticClass:"flex1"},[e("div",[t._v("联 系 人："+t._s(t.bizInfo.contact))]),e("div",[t._v("联系电话："+t._s(t.bizInfo.telephone))])]),e("div",{staticClass:"flex1 tar"},[e("div",[t._v("单号："+t._s(t.detail.orders_no))]),e("div",[t._v("订单日期："+t._s(t.detail.orders_date))])])])]),e("section",{staticClass:"tablebox"},[e("table",{staticClass:"table"},[e("colgroup"),t._m(9),e("tbody",[t._l(t.detail.orders_goods,(function(s,a){return e("tr",{key:a},[e("td",[t._v(t._s(a+1))]),e("td",[t._v(t._s(s.goods_name))]),e("td",[t._v(t._s(s.goods_spec))]),e("td",[t._v(t._s(s.goods_unit))]),e("td",[t._v(t._s(s.goods_cnt))]),e("td",[t._v(t._s(s.goods_price))]),e("td",[t._v(t._s(s.total_money))]),e("td",[t._v(t._s(s.remark))])])})),e("tr",[e("td",[t._v("合计")]),e("td",{staticClass:"tal",attrs:{colspan:"5"}},[t._v("（大写）"+t._s(t.$common.toBigMoney(t.detail.orders_total_money)))]),e("td",{staticClass:"tal",attrs:{colspan:"3"}},[t._v("（小写）¥"+t._s(t.detail.orders_total_money))])]),e("tr",[e("td",[t._v("备注")]),e("td",{staticClass:"tal",attrs:{colspan:"7"}},[e("p",[t._v(t._s(t.detail.remark))])])]),t._m(10)],2)])]),e("section",{staticClass:"dflex-b",staticStyle:{"margin-top":"6px"}},[e("div",[t._v("公司："+t._s(t.company.name))]),e("div",[t._v("制单人："+t._s(t.detail.create_uname))]),e("div",[t._v("发货人(盖章/签字）：")]),e("div",[t._v("收货人(盖章/签字）：")]),e("div")]),e("section",[t.company.address?e("div",{staticClass:"margin-top-xs"},[t._v("地址："+t._s(t.company.address||"无"))]):t._e(),t.company.telephone?e("div",{staticClass:"margin-top-xs"},[t._v("电话："+t._s(t.company.telephone||"无"))]):t._e()])]),e("section",{staticClass:"pfooter"})])])},o=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("thead",[e("tr",[e("td",{staticClass:"tal"},[t._v("品名")]),e("td",[t._v("数量")]),e("td",[t._v("单价")]),e("td",[t._v("合计")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",{staticClass:"margin-top-sm"},[e("div",[t._v("收货人(盖章/签字）：")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",{staticClass:"pfooter"},[e("div",{staticClass:"qrcode"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",[e("div",{staticClass:"qrcode"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("thead",[e("tr",[e("td",{staticClass:"td-no"},[t._v("序号")]),e("td",[t._v("商品名称")]),e("td",[t._v("规格属性")]),e("td",{attrs:{"min-width":"60"}},[t._v("单位")]),e("td",{attrs:{"min-width":"60"}},[t._v("数量")]),e("td",{attrs:{"min-width":"80"}},[t._v("单价")]),e("td",{attrs:{"min-width":"100"}},[t._v("合计")]),e("td",{attrs:{"min-width":"60"}},[t._v("备注")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("tr",[e("td",{staticClass:"tal",attrs:{colspan:"9"}},[t._v("注意：送货单中所列货物之数量、质量及单价请及时核验，确认无误后签收，感谢您的支持与配合。")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",[e("div",{staticClass:"cominfo"}),e("div",{staticClass:"qrcode"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("thead",[e("tr",[e("td",{staticClass:"td-no"},[t._v("序号")]),e("td",[t._v("商品名称")]),e("td",[t._v("商品编号")]),e("td",[t._v("规格属性")]),e("td",{attrs:{"min-width":"70"}},[t._v("单位")]),e("td",{attrs:{"min-width":"70"}},[t._v("数量")]),e("td",{attrs:{"min-width":"80"}},[t._v("原价")]),e("td",{attrs:{"min-width":"80"}},[t._v("折扣(%)")]),e("td",{attrs:{"min-width":"90"}},[t._v("单价")]),e("td",{attrs:{"min-width":"100"}},[t._v("合计")]),e("td",{attrs:{"min-width":"90"}},[t._v("备注")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("tr",[e("td",{staticClass:"tal padding-left",attrs:{colspan:"11"}},[t._v("注意：送货单中所列货物之数量、质量及单价请及时核验，确认无误后签收，感谢您的支持与配合。")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("thead",[e("tr",[e("td",{staticClass:"td-no"},[t._v("序号")]),e("td",[t._v("商品名称")]),e("td",[t._v("规格属性")]),e("td",{attrs:{"min-width":"60"}},[t._v("单位")]),e("td",{attrs:{"min-width":"60"}},[t._v("数量")]),e("td",{attrs:{"min-width":"80"}},[t._v("单价")]),e("td",{attrs:{"min-width":"100"}},[t._v("合计")]),e("td",{attrs:{"min-width":"60"}},[t._v("备注")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("tr",[e("td",{staticClass:"tal",attrs:{colspan:"8"}},[t._v("注意：送货单中所列货物之数量、质量及单价请及时核验，确认无误后签收，感谢您的支持与配合。")])])}],i=(e("b680"),e("a9e3"),e("d81d"),e("e177")),d=e.n(i),_=e("2197"),n={props:{pagerFormat:{type:String,default:"a4"},ordersId:{type:String,default:""}},data:function(){return{header:{title:"销售单"},company:{logoUrl:"",name:"",address:"",telephone:""},bizInfo:{name:"",contact:"",address:"",telephone:""},detail:{orders_no:"",orders_date:"",orders_goods:[{}],remark:""}}},mounted:function(){this.fetchDetail()},methods:{fetchDetail:function(){var t=this;Object(_["a"])("orders/getOrdersView",{ordersId:this.ordersId},{functionName:"xunda"}).then((function(s){t.initOrdersData(s.data)}))},initOrdersData:function(t){var s=this.detail=Object.assign({},t);this.company=t.company,this.bizInfo=t.orders.receiver;var e=t.orders;s.orders_date=d()(e.orders_date).format("YYYY-MM-DD HH:mm:ss"),s.orders_no=e.orders_no,s.remark=e.orders_remark,s.create_uname=e.create_uname,s.goods_total_count=e.goods_total_count||e.orders_goods_count,s.goods_total_money=Number((e.goods_total_money||e.orders_total_money||0)/100).toFixed(2),s.goods_discount_money=Number((e.goods_discount_money||0)/100).toFixed(2),s.goods_original_money=Number((e.goods_original_money||e.goods_total_money||e.orders_total_money)/100).toFixed(2),s.orders_total_money=Number((e.orders_total_money||e.orders_total_money||0)/100).toFixed(2),s.orders_extend_fee=Number((e.orders_extend_fee||0)/100).toFixed(2),s.orders_discount_money=Number((e.orders_discount_money||0)/100).toFixed(2),s.settle_money=Number((e.settle_money||0)/100).toFixed(2),s.unsettle_money=(Number(s.orders_total_money)-Number(s.settle_money)).toFixed(2),s.orders_goods=e.orders_goods.map((function(t){var s=Object.assign({},t);return s.goods_ori_price=((t.goods_ori_price||s.goods_price)/100).toFixed(2),s.total_ori_money=((t.total_ori_money||s.total_money)/100).toFixed(2),s.goods_rote=(t.goods_rote||100).toFixed(2),s.total_money=(t.total_money/100).toFixed(2),s.goods_price=(t.goods_price/100).toFixed(2),s})),this.$emit("completed")}}},r=n,l=(e("4e7f"),e("2877")),c=Object(l["a"])(r,a,o,!1,null,"72e458fd",null);s["default"]=c.exports},"4e7f":function(t,s,e){"use strict";e("2870")}}]);