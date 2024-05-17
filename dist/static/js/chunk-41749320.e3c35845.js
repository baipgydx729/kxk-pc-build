(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-41749320"],{"0993":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"member-container"},[a("el-form",{ref:"elForm",attrs:{model:e.formData,rules:e.rules,"label-position":"right","label-width":"110px"}},[a("div",{staticClass:"aux-card"},[a("div",{staticClass:"header"},[a("div",{staticClass:"left"},[a("span",{staticClass:"title"},[e._v("基本信息")])]),a("div",{staticClass:"right"},[a("el-button",{on:{click:e.resetForm}},[e._v("重置")]),a("el-button",{attrs:{type:"primary",icon:"el-icon-save"},on:{click:e.submitForm}},[e._v("保存信息")])],1)]),a("div",{staticClass:"padding"},[a("el-row",{attrs:{type:"flex",justify:"start",align:"top"}},[a("el-form-item",{staticClass:"flex1",attrs:{label:"员工名称",prop:"member_name"}},[a("el-input",{style:{width:"100%"},attrs:{placeholder:"请填写员工名称",maxlength:"64",clearable:""},model:{value:e.formData.member_name,callback:function(t){e.$set(e.formData,"member_name",t)},expression:"formData.member_name"}})],1),a("el-form-item",{staticClass:"flex1",attrs:{label:"手机号码",prop:"member_mobile"}},[a("template",{slot:"label"},[e._v(" 手机号码 "),a("el-tooltip",{attrs:{content:"绑定后，手机号可作为账号登录",placement:"top-start",effect:"dark"}},[a("i",{staticClass:"el-icon-warning-outline"})])],1),a("el-input",{style:{width:"100%"},attrs:{placeholder:"请填写员工手机号",maxlength:"16",clearable:""},model:{value:e.formData.member_mobile,callback:function(t){e.$set(e.formData,"member_mobile",t)},expression:"formData.member_mobile"}})],2),a("el-form-item",{staticClass:"flex1",attrs:{label:"员工工号",prop:"member_code"}},[a("el-input",{style:{width:"100%"},attrs:{placeholder:"请填写员工工号",clearable:""},model:{value:e.formData.member_code,callback:function(t){e.$set(e.formData,"member_code",t)},expression:"formData.member_code"}})],1)],1),a("el-row",{attrs:{type:"flex",justify:"start",align:"top"}},[a("el-form-item",{staticClass:"flex1",attrs:{label:"所属部门",prop:"area"}},[a("AuxDepartmentPicker",{on:{change:e.changePickerDepartment},model:{value:e.formData.department_ids,callback:function(t){e.$set(e.formData,"department_ids",t)},expression:"formData.department_ids"}})],1),a("el-form-item",{staticClass:"flex1",attrs:{label:"员工职位",prop:"telephone"}},[a("el-input",{style:{width:"100%"},attrs:{placeholder:"请填写员工职位",maxlength:"16",clearable:""},model:{value:e.formData.telephone,callback:function(t){e.$set(e.formData,"telephone",t)},expression:"formData.telephone"}})],1),a("el-form-item",{staticClass:"flex1",attrs:{label:"员工邮箱",prop:"email"}},[a("el-input",{style:{width:"100%"},attrs:{placeholder:"请填邮箱信息",maxlength:"64",clearable:""},model:{value:e.formData.email,callback:function(t){e.$set(e.formData,"email",t)},expression:"formData.email"}})],1)],1),a("el-row",{attrs:{type:"flex",justify:"start",align:"top"}},[a("el-form-item",{staticClass:"flex1",attrs:{label:"启用状态",prop:"state"}},[a("el-select",{style:{width:"100%"},attrs:{placeholder:"请选择启用状态",clearable:""},model:{value:e.formData.state,callback:function(t){e.$set(e.formData,"state",t)},expression:"formData.state"}},[a("el-option",{attrs:{label:"启用",value:1}}),a("el-option",{attrs:{label:"停用",value:2}})],1)],1),a("el-form-item",{staticClass:"flex1",attrs:{label:"备注信息",prop:"remark"}},[a("el-input",{style:{width:"100%"},attrs:{placeholder:"请填写备注信息",maxlength:"100",clearable:""},model:{value:e.formData.remark,callback:function(t){e.$set(e.formData,"remark",t)},expression:"formData.remark"}})],1),a("div",{staticClass:"flex1"})],1)],1)]),a("div",{staticClass:"aux-card margin-top"},[a("div",{staticClass:"header"},[a("div",{staticClass:"left"},[a("span",{staticClass:"title"},[e._v("员工账号")])])])]),a("div",{staticClass:"aux-card margin-top"},[a("div",{staticClass:"header"},[a("div",{staticClass:"left"},[a("span",{staticClass:"title"},[e._v("员工权限")])])]),a("div",{staticClass:"padding"},[a("el-form-item",{attrs:{label:"管理权限"}},[a("template",{slot:"label"},[e._v(" 管理权限 "),a("el-tooltip",{attrs:{content:"管理员拥有最大权限，相当于创建者权限",placement:"top-start",effect:"dark"}},[a("i",{staticClass:"el-icon-warning-outline"})])],1),a("el-checkbox-group",{model:{value:e.formData.role_ids,callback:function(t){e.$set(e.formData,"role_ids",t)},expression:"formData.role_ids"}},[a("el-checkbox",{attrs:{label:"manage-admin"}},[e._v("管理员")])],1)],2),a("el-form-item",{attrs:{label:"角色权限"}},[a("template",{slot:"label"},[e._v(" 角色权限 "),a("el-tooltip",{attrs:{content:"角色可在设置菜单下的角色权限配置",placement:"top-start",effect:"dark"}},[a("i",{staticClass:"el-icon-warning-outline"})])],1),a("div",{staticClass:"dflex"},[a("el-checkbox-group",{model:{value:e.formData.role_ids,callback:function(t){e.$set(e.formData,"role_ids",t)},expression:"formData.role_ids"}},e._l(e.roleList,(function(t,l){return a("el-checkbox",{key:l,attrs:{label:t._id}},[e._v(e._s(t.role_name))])})),1),a("div",{staticClass:"margin-left"},[a("el-button",{attrs:{type:"primary",plain:"",size:"mini",round:"",icon:"el-icon-plus"},on:{click:e.toAddRolePage}},[e._v("添加角色")])],1)],1)],2),a("div",{staticClass:"border-line"}),a("el-form-item",{attrs:{label:"价格权限"}},[a("template",{slot:"label"},[e._v(" 价格权限 "),a("el-tooltip",{attrs:{content:"员工仅可查看有权限的价格",placement:"top-start",effect:"dark"}},[a("i",{staticClass:"el-icon-warning-outline"})])],1),a("div",{staticClass:"dflex-s"},[a("el-checkbox-group",{model:{value:e.formData.permissions,callback:function(t){e.$set(e.formData,"permissions",t)},expression:"formData.permissions"}},e._l(e.pricePermission,(function(t,l){return a("el-checkbox",{key:l,attrs:{label:t.value}},[e._v(e._s(t.name))])})),1)],1)],2),a("div",{staticClass:"border-line"}),a("el-form-item",{attrs:{label:"仓库权限"}},[a("template",{slot:"label"},[e._v(" 仓库权限 "),a("el-tooltip",{attrs:{content:"员工仅可以对有权限的仓库，进行销售、调拨等操作，但无法进行进货、盘点、出入库",placement:"top-start",effect:"dark"}},[a("i",{staticClass:"el-icon-warning-outline"})])],1),a("div",{staticClass:"dflex-s"},[a("el-checkbox-group",{model:{value:e.formData.warehouse_ids,callback:function(t){e.$set(e.formData,"warehouse_ids",t)},expression:"formData.warehouse_ids"}},e._l(e.warehouseList,(function(t,l){return a("el-checkbox",{key:l,attrs:{label:t._id}},[e._v(e._s(t.name))])})),1)],1)],2),a("div",{staticClass:"border-line"}),a("el-form-item",{attrs:{label:"其他权限 "}},[a("template",{slot:"label"},[e._v(" 其他权限 "),a("el-tooltip",{attrs:{content:"可以对其他人订单、客户等进行查看关联",placement:"top-start",effect:"dark"}},[a("i",{staticClass:"el-icon-warning-outline"})])],1),a("el-checkbox-group",{model:{value:e.formData.permissions,callback:function(t){e.$set(e.formData,"permissions",t)},expression:"formData.permissions"}},e._l(e.otherPermission,(function(t,l){return a("el-checkbox",{key:l,staticStyle:{display:"block"},attrs:{label:t.value}},[a("div",[e._v(" "+e._s(t.name)+" "),a("span",{staticClass:"ft-grey"},[e._v("- "+e._s(t.desc))])])])})),1)],2),a("div",{staticClass:"border-line"}),a("el-form-item",{attrs:{label:"区域权限"}},[a("template",{slot:"label"},[e._v(" 区域权限 "),a("el-tooltip",{attrs:{content:"员工仅可查看有权限的区域下数据",placement:"top-start",effect:"dark"}},[a("i",{staticClass:"el-icon-warning-outline"})])],1),a("div",{staticClass:"dflex-s padding-top-xs"},[e._l(e.formData.area_names,(function(t,l){return a("el-tag",{key:t,staticClass:"margin-right-sm",attrs:{closable:"","disable-transitions":!1},on:{close:function(a){return e.handleRemoveArea(t,l)}}},[e._v(" "+e._s(t)+" ")])})),e.areaSelectVisible?a("AuxAreaPicker",{ref:"saveTagInput",staticClass:"margin-right-sm",staticStyle:{width:"260px"},on:{change:e.submitPickerArea},model:{value:e.areaSelectIds,callback:function(t){e.areaSelectIds=t},expression:"areaSelectIds"}}):a("el-button",{staticClass:"button-new-tag",attrs:{icon:"el-icon-plus",size:"small"},on:{click:function(t){e.areaSelectVisible=!0}}},[e._v("添加区域")])],2)],2)],1)])])],1)},s=[],r=(a("a15b"),a("b680"),a("d81d"),a("4de4"),a("d3b7"),a("caad"),a("2532"),a("a434"),a("b0c0"),a("2197")),i=a("f63d"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-cascader",{staticClass:"w-full",attrs:{options:e.treeList,props:{expandTrigger:"hover"},clearable:"",placeholder:"选择所属的部门"},on:{change:e.change,focus:e.initLoad},model:{value:e.modelValue,callback:function(t){e.modelValue=t},expression:"modelValue"}})},n=[],c=(a("159b"),{name:"AuxPickerArea",props:{value:{type:Array,default:function(){return[]}}},data:function(){return{dataList:[],treeList:[],modelValue:[]}},watch:{value:{handler:function(e,t){this.modelValue=e,this.fetchData()},immediate:!0}},methods:{initLoad:function(){0===this.dataList.length&&this.fetchData()},fetchData:function(){},buildTree:function(e,t){var a=this,l=e.filter((function(e){return t==e.parent_id})).map((function(e){return Object.assign({},e)}));return l.forEach((function(t){var l=a.buildTree(e,t._id);l&&l.length>0&&(t.children=l)})),l},change:function(e){var t=this;this.$nextTick((function(){t.$emit("input",e);var a=t.dataList.filter((function(t){return e.includes(t.value)}));t.$emit("change",a)}))}}}),m=c,u=a("2877"),d=Object(u["a"])(m,o,n,!1,null,null,null),f=d.exports,p={components:{AuxAreaPicker:i["a"],AuxDepartmentPicker:f},data:function(){return{memberId:"",roleList:[],pricePermission:[{name:"批发价",value:"price"},{name:"进货价",value:"bid-price"},{name:"最低售价",value:"min-price"},{name:"成本价",value:"cost-price"},{name:"零售价",value:"market-price"}],otherPermission:[{name:"查看他人单据",value:"query-orders-all",desc:"勾选后，可以查看他人经手的单据"},{name:"审核他人单据",value:"approve-orders-all",desc:"勾选后，可以审核他人经手的单据"},{name:"作废他人单据",value:"delete-orders-all",desc:"勾选后，可以作废他人经手的单据"},{name:"查看他人客户",value:"query-store-all",desc:"勾选后，可以查看他人的客户，开单时可以选择关联他人的客户以及关联客户的应收欠款"}],warehouseList:[],formData:{member_code:"",member_name:"",member_mobile:"",email:"",role_ids:[],role_name:"",warehouse_ids:[],area_ids:[],area_names:[],permissions:[],state:1,remark:""},rules:{member_name:[{required:!0,message:"请填写员工名称",trigger:"blur"},{min:2,max:32,message:"长度在 2 到 32 个字符",trigger:"blur"}],member_mobile:[{required:!0,message:"请填写员工名称",trigger:"blur"},{min:2,max:32,message:"长度在 2 到 32 个字符",trigger:"blur"}],code:[],area:[],sale_mid:[],state:[],remark:[],contact:[{min:2,max:16,message:"长度在 2 到 16 个字符",trigger:"blur"}]},areaSelectVisible:!1,areaSelectIds:""}},computed:{},mounted:function(){var e=this.$route.query.id;e&&(this.memberId=e,this.fetchMemberInfo()),this.fetchRoleList(),this.fetchWareHouseList()},methods:{fetchMemberInfo:function(){var e=this;Object(r["a"])("member/getMember",{memberId:this.memberId},{functionName:"xunda"}).then((function(t){var a=t.data,l=a.max_debt_amount,s=a.area_name,r=a.area_names,i=void 0===r?[]:r;e.formData=Object.assign(e.formData,t.data),e.formData.area_name=s||i.join(" / "),l&&(e.formData.max_debt_amount=(l/100).toFixed(2))}))},fetchRoleList:function(){var e=this;Object(r["a"])("member/listRole",{pageSize:30},{functionName:"xunda"}).then((function(t){e.roleList=t.data||[]}))},fetchWareHouseList:function(){var e=this;Object(r["a"])("stock/listWarehouse",{pageSize:30},{functionName:"xunda"}).then((function(t){e.warehouseList=t.data||[]}))},resetForm:function(){this.$refs["elForm"].resetFields()},submitForm:function(){var e=this;this.$refs["elForm"].validate((function(t){t&&Object(r["a"])("member/saveMember",e.getPostData(),{functionName:"xunda"}).then((function(t){e.$message.success("保存成功"),setTimeout((function(){e.$common.closePage()}),300)}))}))},getPostData:function(){var e=this.formData;if(e.role_ids.length>0){var t=this.roleList.filter((function(t){return e.role_ids.includes(t._id)})).map((function(e){return e.role_name}));e.role_name=t.join(",")}return Object.assign({},e,{})},handleRemoveArea:function(e,t){this.formData.area_names.splice(t,1),this.formData.area_ids.splice(t,1)},submitPickerArea:function(e){var t=e.map((function(e){return e.name})),a=e.map((function(e){return e._id})),l=a[a.length-1];console.log(this.formData.area_ids),this.formData.area_ids.includes(l)?this.$message.error("区域已存在"):(this.formData.area_ids.push(a[a.length-1]),this.formData.area_names.push(t.join(" / "))),this.areaSelectIds="",this.areaSelectVisible=!1},toAddRolePage:function(){this.$common.toPage("/basic/member/role-list?type=create")}}},b=p,h=(a("bf4a"),Object(u["a"])(b,l,s,!1,null,null,null));t["default"]=h.exports},"51b1":function(e,t,a){},bf4a:function(e,t,a){"use strict";a("51b1")}}]);