(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1556f758"],{"5b46":function(t,o,s){"use strict";s.r(o);var e=function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("section",{staticClass:"pdf-root",class:t.template},[s("section",{staticClass:"container"},[s("section",{staticClass:"pheader"},[s("div",{staticClass:"title"},[t._v(t._s(t.company.name))])]),s("section",{staticClass:"pcontent"},[s("section",{staticClass:"bizbox"},[s("div",{staticClass:"dflex-b"},[s("div",{staticClass:"flex1 dflex-s"},[s("div",[t._v("客户："+t._s(t.bizInfo.name))]),t.bizInfo.contact?s("div",{staticClass:"margin-left"},[t._v(" 联系人："+t._s(t.bizInfo.contact)+" "),t.bizInfo.telephone?s("span",[t._v("- "+t._s(t.bizInfo.telephone))]):t._e()]):t._e()]),s("div",{staticClass:"flex1 tar"},[s("span",[t._v("No."+t._s(t.detail.orders_no))]),s("span",{staticClass:"margin-left-sm"},[t._v("日期："+t._s(t._f("formatDate")(t.detail.orders_date,"YYYY-MM-DD")))])])])]),s("section",{staticClass:"tablebox"},[s("table",{staticClass:"table"},[s("colgroup"),s("thead",[s("tr",[s("td",[t._v("产品名称")]),s("td",[t._v("规格")]),t._l(t.tableSet.sizes,(function(o,e){return s("td",{key:o,attrs:{width:"30"}},[t._v(t._s(o))])})),s("td",{attrs:{width:"40"}},[t._v("数量")]),s("td",{attrs:{width:"60"}},[t._v("单价")]),s("td",{attrs:{width:"70"}},[t._v("金额")])],2)]),s("tbody",[t._l(t.detail.orders_goods,(function(o,e){return s("tr",{key:e},[s("td",[t._v(t._s(o.goods_name))]),s("td",[t._v(t._s(o.goods_spec))]),t._l(t.tableSet.sizes,(function(e,a){return s("td",{key:e},[t._v(t._s(t.getSubText(o,e)))])})),s("td",[t._v(t._s(o.goods_cnt))]),s("td",[t._v(t._s(o.goods_price))]),s("td",[t._v(t._s(o.total_money))])],2)})),s("tr",[s("td",[t._v("合计")]),s("td",{staticClass:"tac",attrs:{colspan:"16"}}),s("td",{staticClass:"tac",attrs:{colspan:"1"}},[t._v(t._s(t.detail.goods_total_count))]),s("td",{staticClass:"tac",attrs:{colspan:"1"}}),s("td",{staticClass:"tac",attrs:{colspan:"1"}},[t._v(t._s(t.detail.orders_total_money))])]),s("tr",[s("td",{staticClass:"tac",attrs:{colspan:"1"}},[t._v("金额合计")]),s("td",{staticClass:"tal",attrs:{colspan:"16"}},[t._v("（大写）"+t._s(t.$common.toBigMoney(t.detail.orders_total_money)))]),s("td",{staticClass:"tal",attrs:{colspan:"4"}},[t._v("（小写）"+t._s(t.detail.orders_total_money))])]),s("tr",[s("td",{staticClass:"tal",attrs:{colspan:"20"}},[t._v("备注："+t._s(t.detail.remark))])])],2)])]),s("section",{staticClass:"dflex-b margin-top-xs"},[s("div",[t._v("制单人："+t._s(t.detail.create_uname))]),s("div",[t._v("发货人(盖章/签字）：")]),s("div",[t._v("收货人(盖章/签字）：")]),s("div")])]),s("section",{staticClass:"pfooter"})])])},a=[],n=(s("13d5"),s("e177")),r=s.n(n),d=s("2197"),_=s("2ef0"),i=s.n(_),c={props:{template:{type:String,default:"a4"},ordersId:{type:String,default:""}},data(){return{tableSet:{sizes:[28,29,30,31,32,33,34,35,36,37,38,39,40,41,42]},header:{title:"销售单"},company:{logoUrl:"",name:"",address:"",telephone:""},bizInfo:{name:"",contact:"",address:"",telephone:""},detail:{orders_no:"",orders_date:(new Date).getTime(),orders_goods:[{}],remark:""}}},methods:{async init(){await this.fetchDetail()},async fetchDetail(){const t=await Object(d["a"])("orders/getOrdersView",{ordersId:this.ordersId},{functionName:"xunda"});this.initOrdersData(t.data)},initOrdersData(t){const o=this.detail=Object.assign({},t);this.company=t.company,this.bizInfo=t.orders.receiver;const s=t.orders;o.orders_date=r()(s.orders_date).format("YYYY-MM-DD HH:mm:ss"),o.orders_no=s.orders_no,o.remark=s.orders_remark,o.create_uname=s.create_uname,o.goods_total_count=s.goods_total_count||s.orders_goods_count,o.goods_total_money=this.$common.cent2yuan(s.goods_total_money||s.orders_total_money||0),o.goods_discount_money=this.$common.cent2yuan(s.goods_discount_money||0),o.goods_original_money=this.$common.cent2yuan(s.goods_original_money||s.goods_total_money||s.orders_total_money),o.orders_total_money=this.$common.cent2yuan(s.orders_total_money),o.orders_extend_fee=this.$common.cent2yuan(s.orders_extend_fee||0),o.orders_discount_money=this.$common.cent2yuan(s.orders_discount_money||0),o.settle_money=this.$common.cent2yuan(s.settle_money||0),o.unsettle_money=(Number(o.orders_total_money)-Number(o.settle_money)).toFixed(2),o.orders_goods=s.orders_goods.map(t=>{const o=Object.assign({},t);return o.goods_ori_price=this.$common.cent2yuan(t.goods_ori_price||o.goods_price),o.total_ori_money=this.$common.cent2yuan(t.total_ori_money||o.total_money),o.goods_rote=Number(t.goods_rote||100).toFixed(2),o.total_money=this.$common.cent2yuan(t.total_money),o.goods_price=this.$common.cent2yuan(t.goods_price),o});const e=i.a.groupBy(o.orders_goods,t=>t.goods_id&&t.goods_spec?-1!=t.goods_spec.indexOf("/")?t.goods_id+"_"+t.goods_spec.split("/")[0]:void 0:(new Date).getTime());o.orders_goods=Object.values(e).map(t=>{const o=i.a.reduce(t,(t,o,s)=>{const[e,a]=o.goods_spec.split("/");return t?(t.goods_cnt+=Number(o.goods_cnt),t.total_money+=Number(o.total_money),t.sizes[a]=o.goods_cnt,t):(o.sizes={},o.goods_spec=e,o.sizes[a]=o.goods_cnt,o.goods_cnt=Number(o.goods_cnt),o.total_money=Number(o.total_money),o)},null);return o.total_money=Number(o.total_money).toFixed(2),o}),this.$emit("completed")},getSubText(t,o){if(t.sizes)return t.sizes[o]}}},l=c,m=(s("bfff"),s("2877")),u=Object(m["a"])(l,e,a,!1,null,"569a3a38",null);o["default"]=u.exports},7511:function(t,o,s){},bfff:function(t,o,s){"use strict";s("7511")}}]);