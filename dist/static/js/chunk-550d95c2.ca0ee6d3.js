(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-550d95c2"],{"31d1":function(e,t,s){"use strict";s("3f27")},"3f27":function(e,t,s){},"82eb":function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"app-container"},[s("el-form",{ref:"formData",attrs:{"label-width":"90px","label-align":"left",inline:!0}},[s("div",{staticClass:"aux-card"},[s("div",{staticClass:"header"},[s("div",{staticClass:"left title"},[e._v(" 角色权限配置 "),s("span",{staticClass:"ft-primary"},[e._v("("+e._s(e.formData.role_name)+")")])]),s("div",{staticClass:"right"},[s("el-dropdown",{staticClass:"margin-right-sm",on:{command:e.batchSetPermission}},[s("el-button",{attrs:{type:"defaunt"}},[e._v(" 一键自动设置 "),s("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),s("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},e._l(e.autoRoles,(function(t,r){return s("el-dropdown-item",{key:r,attrs:{command:t}},[e._v(e._s(t.text))])})),1)],1),s("el-button",{attrs:{type:"default",icon:"el-icon-tickets"},on:{click:function(t){return e.$common.closePage()}}},[e._v("取消")]),s("el-button",{attrs:{type:"primary",icon:"el-icon-document-checked"},on:{click:e.handleSave}},[e._v("保存")])],1)]),s("el-table",{staticClass:"cu-tables",attrs:{data:e.tabList,"span-method":e.objectSpanMethod,border:""}},[s("el-table-column",{attrs:{align:"left",width:"150",label:"一级"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("el-checkbox",{attrs:{indeterminate:e.getIndeterminateOne(t.row),label:t.row.name},on:{change:function(s){return e.handleCheckAllOne(t.row)}},model:{value:t.row.checkAll,callback:function(s){e.$set(t.row,"checkAll",s)},expression:"scope.row.checkAll"}},[e._v(e._s(t.row.name))])]}}])}),s("el-table-column",{attrs:{align:"left",width:"200",label:"二级"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("el-table",{staticClass:"aux-table",attrs:{data:e.getMenuList(t.row),"show-header":!1,stripe:""}},[s("el-table-column",{attrs:{align:"left",width:"200",label:"二级"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("el-checkbox",{attrs:{indeterminate:e.getIndeterminateTwo(t.row),label:t.row.menu_id},on:{change:function(s){return e.handleCheckAllTwo(t.row)}},model:{value:t.row.checkAll,callback:function(s){e.$set(t.row,"checkAll",s)},expression:"scopev.row.checkAll"}},[e._v(e._s(t.row.name))])]}}],null,!0)}),s("el-table-column",{attrs:{align:"left",label:"权限配置"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("div",{staticClass:"padding-lr-sm"},[s("el-checkbox-group",{model:{value:e.formData.permission,callback:function(t){e.$set(e.formData,"permission",t)},expression:"formData.permission"}},e._l(e.getPermissions(t.row),(function(t){return s("el-checkbox",{key:t.code,attrs:{label:t.code}},[e._v(e._s(t.name))])})),1)],1)]}}],null,!0)})],1)]}}])}),s("el-table-column",{attrs:{align:"left",label:"权限配置明细"}})],1)],1)])],1)},n=[],o=s("2909"),a=(s("d81d"),s("4de4"),s("d3b7"),s("caad"),s("2532"),s("159b"),s("2197")),l=s("3ece"),i=l["modules"],c=l["menus"],u=l["functions"],d={saler:["store-manage","store-query","sales-manage","sales-orders-create","sales-orders-delete","sales-orders-query","sales-orders-refund-create","sales-orders-refund-query","sales-orders-refund-delete","sales-report","sales-store-report","stock-query","goods-query","xcode-query"],purchaser:["purchase-manage","purchase-orders-create","purchase-orders-delete","purchase-orders-query","purchase-orders-query-all","payment-orders-query","settle-supplier-stats","goods-query","supplier-create","supplier-delete","supplier-query"],stocker:["sales-orders-query","sales-orders-query-all","sales-orders-outstock","sales-orders-refund-query","sales-orders-refund-query-all","sales-orders-refund-intostock","sales-orders-refund-intostock-cancel","purchase-manage","purchase-orders-query","purchase-orders-intostock","purchase-orders-intostock-cancel","stock-manage","stock-query","stock-into","stock-stream","stock-warehouse","stock-inventory","stock-transfer-orders","stock-transfer-orders-cancel","stock-transfer-orders-delete","xcode-query"],finance:["store-manage","store-query","store-query-all","sales-manage","sales-orders-query","sales-orders-query-all","sales-stats","sales-stats-all","sales-store-stats","sales-report","sales-report-all","sales-store-report","sales-goods-report","sales-category-report","sales-brand-report","sales-member-report","purchase-manage","purchase-orders-query","stock-query","account-manage","account-stats","receipt-orders-create","receipt-orders-delete","receipt-orders-query","receipt-orders-stats","payment-orders-create","payment-orders-delete","payment-orders-query","payment-orders-stats","payment-expenses-create","payment-expenses-delete","payment-expenses-query","payment-expenses-stats","settle-manage","settle-stats","settle-store-stats","settle-supplier-stats","goods-query","xcode-query"]},m={data:function(){return{permission:"admin",tabList:[],roleId:"",formData:{role_name:"",permission:[],remark:""},autoRoles:[{text:"销售权限",permissions:d.saler},{text:"采购权限",permissions:d.purchaser},{text:"仓管权限",permissions:d.stocker},{text:"财务权限",permissions:d.finance}]}},mounted:function(){var e=this.$route.params.roleId;this.roleId=e,this.fetchRoleInfo(),this.tabList=i.map((function(e){return e.checkAll=!1,e}))},methods:{fetchRoleInfo:function(){var e=this;Object(a["a"])("member/getRole",{roleId:this.roleId},{functionName:"xunda"}).then((function(t){e.formData=Object.assign({permission:[]},t.data)}))},batchSetPermission:function(e){this.formData.permission=Object(o["a"])(e.permissions),this.$message.success("自动设置完成")},getMenuList:function(e){var t=e.children||[];return c.filter((function(e){return t.includes(e.menu_id)})).map((function(e){return e.checkAll=!0,e}))},getPermissions:function(e){var t=e.permission||[];return u.filter((function(e){return t.includes(e.code)}))},handleSave:function(){var e=this,t={roleId:this.roleId,permission:this.formData.permission};Object(a["a"])("member/saveRolePermission",t,{functionName:"xunda"}).then((function(t){e.$message.success("保存成功"),setTimeout((function(){return e.$common.closePage()}),300)}))},handleCheckAllOne:function(e){var t=this,s=[];this.getMenuList(e).forEach((function(e){return s.push.apply(s,Object(o["a"])(e.permission))})),this.formData.permission=this.formData.permission||[],this.$nextTick((function(){e.checkAll?t.formData.permission=t.formData.permission.filter((function(e){return!s.includes(e)})):s.forEach((function(e){t.formData.permission.includes(e)||t.formData.permission.push(e)}))}))},getIndeterminateOne:function(e){var t=[];this.getMenuList(e).forEach((function(e){return t.push.apply(t,Object(o["a"])(e.permission))}));var s=this.existPermission(t);return e.checkAll=s.checkAll,s.checked},handleCheckAllTwo:function(e){var t=this;this.$nextTick((function(){e.checkAll?t.formData.permission=t.formData.permission.filter((function(t){return!e.permission.includes(t)})):e.permission.forEach((function(e){t.formData.permission.includes(e)||t.formData.permission.push(e)}))}))},getIndeterminateTwo:function(e){var t=this.existPermission(e.permission);return e.checkAll=t.checkAll,t.checked},existPermission:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=0,s=this.formData.permission||[];return e.forEach((function(e){s.includes(e)&&t++})),{checked:t>0&&t<e.length,checkAll:t===e.length}},objectSpanMethod:function(e){e.row,e.column,e.rowIndex;var t=e.columnIndex;return 1===t?[1,2]:1===t?[0,0]:void 0}}},p=m,f=(s("31d1"),s("2877")),h=Object(f["a"])(p,r,n,!1,null,null,null);t["default"]=h.exports}}]);