(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e04680d0"],{"0e62":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app-container"},[i("div",{staticClass:"aux-card"},[i("div",{staticClass:"header"},[t._m(0),i("div",{staticClass:"dflex"},[i("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["goods-units-edit"],expression:"['goods-units-edit']"}],attrs:{type:"primary",icon:"el-icon-plus"},on:{click:t.append}},[t._v("新增单位")])],1)]),i("div",{staticClass:"padding"},[i("el-tree",{staticClass:"Unit-tree",attrs:{data:t.dataList,"icon-class":"e","node-key":"_id","default-expand-all":!1,"expand-on-click-node":!0,"highlight-current":!1,draggable:t.hasPermission(["goods-units-edit"]),"allow-drag":t.allowDrag,"allow-drop":t.allowDrop},on:{"node-drop":t.nodeDropComplate},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.node,a=e.data;return i("div",{staticClass:"tree-node"},[i("div",{staticClass:"left-icon"},[i("i",{staticClass:"el-icon-dish"})]),t.editMode&&t.editRowId==a._id?i("div",{staticClass:"right-content dflex-s",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.voidStop(e)}}},[i("el-input",{ref:"editInput",staticStyle:{width:"300px"},attrs:{placeholder:"填写单位名称",clearable:""},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submitEdit(n,a)}},model:{value:t.editValue,callback:function(e){t.editValue=e},expression:"editValue"}}),i("el-button",{staticClass:"padding-lr margin-left",attrs:{type:"success",icon:"el-icon-check",round:"",size:"small"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.submitEdit(n,a)}}},[t._v("确认")]),i("el-button",{staticClass:"padding-lr",attrs:{type:"default",icon:"el-icon-yes",round:"",size:"small"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.cancelEdit(n,a)}}},[t._v("取消")])],1):i("div",{staticClass:"right-content dflex-b"},[i("div",[t._v(t._s(a.name))]),i("div",{staticClass:"opt-btn"},[i("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["goods-units-edit"],expression:"['goods-units-edit']"}],attrs:{type:"success",round:"",size:"small",plain:"",icon:"el-icon-edit-outline"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.editItem(n,a)}}},[t._v("修改")]),i("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["goods-units-delete"],expression:"['goods-units-delete']"}],attrs:{type:"danger",round:"",size:"small",plain:"",icon:"el-icon-delete"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.deleteItem(n,a)}}},[t._v("删除")])],1)])])}}])})],1)])])},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"left"},[i("span",{staticClass:"title"},[t._v("商品单位")]),i("span",{staticClass:"ft-xs ft-grey"},[t._v("(支持拖拽排序)")])])}],s=(i("b0c0"),i("c740"),i("a434"),i("2197")),o={data:function(){return{dataList:[],expandedKeys:[],editMode:!1,editRowId:"",editValue:""}},mounted:function(){this.fetchUnit()},methods:{fetchUnit:function(){var t=this;Object(s["a"])("goods/listGoodsUnit",{},{functionName:"xunda"}).then((function(e){t.dataList=e.data,t.$store.dispatch("distionary/setGoodsUnits",e.data||[])}))},append:function(){var t={_id:"",name:""};this.dataList.push(t),this.editItem("",t)},editItem:function(t,e){var i=this;this.editMode=!0,this.editValue=e.name,this.editRowId=e._id,this.$nextTick((function(){setTimeout((function(){i.$refs.editInput&&i.$refs.editInput.focus()}),300)}))},clearEdit:function(){this.editMode=!1,this.editValue="",this.editRowId=""},submitEdit:function(t,e){var i=this,n=this.editValue;if(n!==e.name){var a={id:e._id,name:n,sort:100};Object(s["a"])("goods/saveGoodsUnit",a,{functionName:"xunda"}).then((function(t){i.fetchUnit(),i.clearEdit()}))}},cancelEdit:function(t,e){e._id||this.remove(t,e),this.clearEdit()},deleteItem:function(t,e){var i=this,n=function(){Object(s["a"])("goods/deleteGoodsUnit",{id:e._id},{functionName:"xunda"}).then((function(n){i.remove(t,e)}))};this.$confirm("确定要删除该商品单位？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){return n()}))},remove:function(t,e){var i=t.parent,n=i.data.children||i.data,a=n.findIndex((function(t){return t._id===e._id}));n.splice(a,1)},voidStop:function(){},allowDrag:function(t){return!!t.data._id&&!this.editMode},allowDrop:function(t,e,i){return"inner"!==i},nodeDropComplate:function(t,e,i,n){var a=this;Object(s["a"])("goods/dragSortUnit",{dragId:t.data._id,dropId:e.data._id,type:i},{functionName:"xunda"}).then((function(t){a.fetchUnit(),a.$message.success("商品单位顺序调整完成")}))}}},d=o,c=(i("1c61"),i("2877")),r=Object(c["a"])(d,n,a,!1,null,null,null);e["default"]=r.exports},"1c61":function(t,e,i){"use strict";i("8e33")},"8e33":function(t,e,i){}}]);