(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-550d95c2"],{"31d1":function(e,s,t){"use strict";t("3f27")},"3f27":function(e,s,t){},"82eb":function(e,s,t){"use strict";t.r(s);var r=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"app-container"},[t("el-form",{ref:"formData",attrs:{"label-width":"90px","label-align":"left",inline:!0}},[t("div",{staticClass:"aux-card"},[t("div",{staticClass:"header"},[t("div",{staticClass:"left title"},[e._v(" 角色权限配置 "),t("span",{staticClass:"ft-primary"},[e._v("("+e._s(e.formData.role_name)+")")])]),t("div",{staticClass:"right"},[t("el-dropdown",{staticClass:"margin-right-sm",on:{command:e.batchSetPermission}},[t("el-button",{attrs:{type:"defaunt"}},[e._v(" 一键自动设置 "),t("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),t("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},e._l(e.autoRoles,(function(s,r){return t("el-dropdown-item",{key:r,attrs:{command:s}},[e._v(e._s(s.text))])})),1)],1),t("el-button",{attrs:{type:"default",icon:"el-icon-tickets"},on:{click:function(s){return e.$common.closePage()}}},[e._v("取消")]),t("el-button",{attrs:{type:"primary",icon:"el-icon-document-checked"},on:{click:e.handleSave}},[e._v("保存")])],1)]),t("el-table",{staticClass:"cu-tables",attrs:{data:e.tabList,"span-method":e.objectSpanMethod,border:""}},[t("el-table-column",{attrs:{align:"left",width:"150",label:"一级"},scopedSlots:e._u([{key:"default",fn:function(s){return[t("el-checkbox",{attrs:{indeterminate:e.getIndeterminateOne(s.row),label:s.row.name},on:{change:function(t){return e.handleCheckAllOne(s.row)}},model:{value:s.row.checkAll,callback:function(t){e.$set(s.row,"checkAll",t)},expression:"scope.row.checkAll"}},[e._v(e._s(s.row.name))])]}}])}),t("el-table-column",{attrs:{align:"left",width:"200",label:"二级"},scopedSlots:e._u([{key:"default",fn:function(s){return[t("el-table",{staticClass:"aux-table",attrs:{data:e.getMenuList(s.row),"show-header":!1,stripe:""}},[t("el-table-column",{attrs:{align:"left",width:"200",label:"二级"},scopedSlots:e._u([{key:"default",fn:function(s){return[t("el-checkbox",{attrs:{indeterminate:e.getIndeterminateTwo(s.row),label:s.row.menu_id},on:{change:function(t){return e.handleCheckAllTwo(s.row)}},model:{value:s.row.checkAll,callback:function(t){e.$set(s.row,"checkAll",t)},expression:"scopev.row.checkAll"}},[e._v(e._s(s.row.name))])]}}],null,!0)}),t("el-table-column",{attrs:{align:"left",label:"权限配置"},scopedSlots:e._u([{key:"default",fn:function(s){return[t("div",{staticClass:"padding-lr-sm"},[t("el-checkbox-group",{model:{value:e.formData.permission,callback:function(s){e.$set(e.formData,"permission",s)},expression:"formData.permission"}},e._l(e.getPermissions(s.row),(function(s){return t("el-checkbox",{key:s.code,attrs:{label:s.code}},[e._v(e._s(s.name))])})),1)],1)]}}],null,!0)})],1)]}}])}),t("el-table-column",{attrs:{align:"left",label:"权限配置明细"}})],1)],1)])],1)},a=[],o=t("2197"),n=t("3ece");const l=n["modules"],i=n["menus"],c=n["functions"],u={saler:["store-manage","store-query","sales-manage","sales-orders-create","sales-orders-delete","sales-orders-query","sales-orders-refund-create","sales-orders-refund-query","sales-orders-refund-delete","sales-report","sales-store-report","stock-query","goods-query","xcode-query"],purchaser:["purchase-manage","purchase-orders-create","purchase-orders-delete","purchase-orders-query","purchase-orders-query-all","payment-orders-query","settle-supplier-stats","goods-query","supplier-create","supplier-delete","supplier-query"],stocker:["sales-orders-query","sales-orders-query-all","sales-orders-outstock","sales-orders-refund-query","sales-orders-refund-query-all","sales-orders-refund-intostock","sales-orders-refund-intostock-cancel","purchase-manage","purchase-orders-query","purchase-orders-intostock","purchase-orders-intostock-cancel","stock-manage","stock-query","stock-into","stock-stream","stock-warehouse","stock-inventory","stock-transfer-orders","stock-transfer-orders-cancel","stock-transfer-orders-delete","xcode-query"],finance:["store-manage","store-query","store-query-all","sales-manage","sales-orders-query","sales-orders-query-all","sales-stats","sales-stats-all","sales-store-stats","sales-report","sales-report-all","sales-store-report","sales-goods-report","sales-category-report","sales-brand-report","sales-member-report","purchase-manage","purchase-orders-query","stock-query","account-manage","account-stats","receipt-orders-create","receipt-orders-delete","receipt-orders-query","receipt-orders-stats","payment-orders-create","payment-orders-delete","payment-orders-query","payment-orders-stats","payment-expenses-create","payment-expenses-delete","payment-expenses-query","payment-expenses-stats","settle-manage","settle-stats","settle-store-stats","settle-supplier-stats","goods-query","xcode-query"]};var d={data(){return{permission:"admin",tabList:[],roleId:"",formData:{role_name:"",permission:[],remark:""},autoRoles:[{text:"销售权限",permissions:u.saler},{text:"采购权限",permissions:u.purchaser},{text:"仓管权限",permissions:u.stocker},{text:"财务权限",permissions:u.finance}]}},mounted(){const{roleId:e}=this.$route.params;this.roleId=e,this.fetchRoleInfo(),this.tabList=l.map(e=>(e.checkAll=!1,e))},methods:{fetchRoleInfo(){Object(o["a"])("member/getRole",{roleId:this.roleId},{functionName:"xunda"}).then(e=>{this.formData=Object.assign({permission:[]},e.data)})},batchSetPermission(e){this.formData.permission=[...e.permissions],this.$message.success("自动设置完成")},getMenuList(e){const s=e.children||[];return i.filter(e=>s.includes(e.menu_id)).map(e=>(e.checkAll=!0,e))},getPermissions(e){const s=e.permission||[];return c.filter(e=>s.includes(e.code))},handleSave(){const e={roleId:this.roleId,permission:this.formData.permission};Object(o["a"])("member/saveRolePermission",e,{functionName:"xunda"}).then(e=>{this.$message.success("保存成功"),setTimeout(()=>this.$common.closePage(),300)})},handleCheckAllOne(e){const s=[];this.getMenuList(e).forEach(e=>s.push(...e.permission)),this.formData.permission=this.formData.permission||[],this.$nextTick(()=>{e.checkAll?this.formData.permission=this.formData.permission.filter(e=>!s.includes(e)):s.forEach(e=>{this.formData.permission.includes(e)||this.formData.permission.push(e)})})},getIndeterminateOne(e){const s=[];this.getMenuList(e).forEach(e=>s.push(...e.permission));const t=this.existPermission(s);return e.checkAll=t.checkAll,t.checked},handleCheckAllTwo(e){this.$nextTick(()=>{e.checkAll?this.formData.permission=this.formData.permission.filter(s=>!e.permission.includes(s)):e.permission.forEach(e=>{this.formData.permission.includes(e)||this.formData.permission.push(e)})})},getIndeterminateTwo(e){const s=this.existPermission(e.permission);return e.checkAll=s.checkAll,s.checked},existPermission(e=[]){let s=0;const t=this.formData.permission||[];return e.forEach(e=>{t.includes(e)&&s++}),{checked:s>0&&s<e.length,checkAll:s===e.length}},objectSpanMethod({row:e,column:s,rowIndex:t,columnIndex:r}){return 1===r?[1,2]:1===r?[0,0]:void 0}}},m=d,p=(t("31d1"),t("2877")),h=Object(p["a"])(m,r,a,!1,null,null,null);s["default"]=h.exports}}]);