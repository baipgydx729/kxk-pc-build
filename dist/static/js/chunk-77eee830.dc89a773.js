(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-77eee830"],{"999a":function(t,e,a){},a7f7:function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"min-container"},[a("el-form",{ref:"elForm",attrs:{model:t.formData,rules:t.rules,"label-width":"110px"}},[a("div",{staticClass:"aux-card"},[a("div",{staticClass:"header"},[a("span",{staticClass:"title"},[t._v("基础信息")]),a("div",{staticClass:"right"},[a("el-button",{on:{click:t.resetForm}},[t._v("重置")]),a("el-button",{attrs:{type:"primary",icon:"el-icon-save"},on:{click:t.submitForm}},[t._v("保存信息")])],1)]),a("div",{staticClass:"padding",staticStyle:{width:"96%"}},[a("el-row",{attrs:{type:"flex",justify:"start",align:"top"}},[a("el-form-item",{staticClass:"flex1",attrs:{label:"供应商名称",prop:"name"}},[a("el-input",{style:{width:"100%"},attrs:{placeholder:"请填写供应商名称",maxlength:"64",clearable:""},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}})],1),a("el-form-item",{staticClass:"flex1",attrs:{label:"供应商编码",prop:"code"}},[a("el-input",{style:{width:"100%"},attrs:{placeholder:"请填写供应商编码",clearable:""},model:{value:t.formData.code,callback:function(e){t.$set(t.formData,"code",e)},expression:"formData.code"}})],1)],1),a("el-row",{attrs:{type:"flex",justify:"start",align:"top"}},[a("el-form-item",{staticClass:"flex1",attrs:{label:"备注信息",prop:"remark"}},[a("el-input",{style:{width:"100%"},attrs:{placeholder:"请填写备注信息",maxlength:"100",clearable:""},model:{value:t.formData.remark,callback:function(e){t.$set(t.formData,"remark",e)},expression:"formData.remark"}})],1),a("el-form-item",{staticClass:"flex1",attrs:{label:"启用状态",prop:"state"}},[a("el-select",{style:{width:"100%"},attrs:{placeholder:"请选择启用状态",clearable:""},model:{value:t.formData.state,callback:function(e){t.$set(t.formData,"state",e)},expression:"formData.state"}},[a("el-option",{attrs:{label:"启用",value:1}}),a("el-option",{attrs:{label:"停用",value:2}})],1)],1)],1)],1)]),a("div",{staticClass:"aux-card margin-top"},[a("div",{staticClass:"header"},[a("span",{staticClass:"title"},[t._v("联系信息")])]),a("div",{staticClass:"padding",staticStyle:{width:"96%"}},[a("el-row",{attrs:{type:"flex",justify:"start",align:"top"}},[a("el-form-item",{staticClass:"flex1",attrs:{label:"联系人",prop:"contact"}},[a("el-input",{style:{width:"100%"},attrs:{placeholder:"请填写联系人",maxlength:"16",clearable:""},model:{value:t.formData.contact,callback:function(e){t.$set(t.formData,"contact",e)},expression:"formData.contact"}})],1),a("el-form-item",{staticClass:"flex1",attrs:{label:"联系电话",prop:"telephone"}},[a("el-input",{style:{width:"100%"},attrs:{placeholder:"请填写联系电话",maxlength:"16",clearable:""},model:{value:t.formData.telephone,callback:function(e){t.$set(t.formData,"telephone",e)},expression:"formData.telephone"}})],1)],1),a("el-row",{attrs:{type:"flex",justify:"start",align:"top"}},[a("el-form-item",{staticClass:"flex1",attrs:{label:"详细地址",prop:"address"}},[a("el-input",{style:{width:"100%"},attrs:{placeholder:"请填写详细地址",maxlength:"128",clearable:""},model:{value:t.formData.address,callback:function(e){t.$set(t.formData,"address",e)},expression:"formData.address"}})],1),a("el-form-item",{staticClass:"flex1",attrs:{label:"地址定位",prop:"location"}},[a("el-input",{style:{width:"100%"},attrs:{placeholder:"请填写地址定位",clearable:""},model:{value:t.formData.location,callback:function(e){t.$set(t.formData,"location",e)},expression:"formData.location"}})],1)],1),a("el-divider",{attrs:{"content-position":"center"}},[a("span",{on:{click:function(e){t.moreSet=!0}}},[t._v("更多设置")])]),t.moreSet?a("div",[a("el-row",{attrs:{type:"flex",justify:"start",align:"top"}},[a("el-form-item",{staticClass:"flex1",attrs:{label:"QQ号",prop:"qq"}},[a("el-input",{style:{width:"100%"},attrs:{placeholder:"请填写QQ号",maxlength:"12",clearable:""},model:{value:t.formData.qq,callback:function(e){t.$set(t.formData,"qq",e)},expression:"formData.qq"}})],1),a("el-form-item",{staticClass:"flex1",attrs:{label:"微信号",prop:"weixin"}},[a("el-input",{style:{width:"100%"},attrs:{placeholder:"请填写微信号",maxlength:"32",clearable:""},model:{value:t.formData.weixin,callback:function(e){t.$set(t.formData,"weixin",e)},expression:"formData.weixin"}})],1)],1),a("el-row",{attrs:{type:"flex",justify:"start",align:"top"}},[a("el-form-item",{staticClass:"flex1",attrs:{label:"邮箱",prop:"email"}},[a("el-input",{style:{width:"100%"},attrs:{placeholder:"请填写邮箱",maxlength:"32",clearable:""},model:{value:t.formData.email,callback:function(e){t.$set(t.formData,"email",e)},expression:"formData.email"}})],1),a("el-form-item",{staticClass:"flex1",attrs:{label:"邮编",prop:" postal"}},[a("el-input",{style:{width:"100%"},attrs:{placeholder:"请填写邮编",maxlength:"8",clearable:""},model:{value:t.formData.postal,callback:function(e){t.$set(t.formData,"postal",e)},expression:"formData.postal"}})],1)],1)],1):t._e()],1)])])],1)},s=[],r=a("2197"),o={name:"SupplierCreate",components:{},data(){return{moreSet:!1,supplierId:"",saleGradeList:this.$constant.SALE_GRADE_LIST,formData:{name:"",code:"",state:1,remark:"",contact:"",telephone:"",address:"",location:"",qq:"",weixin:"",email:"",postal:""},rules:{name:[{required:!0,message:"请填写供应商名称",trigger:"blur"},{min:2,max:32,message:"长度在 2 到 32 个字符",trigger:"blur"}],code:[],state:[],remark:[],contact:[{min:2,max:16,message:"长度在 2 到 16 个字符",trigger:"blur"}]}}},computed:{},watch:{},created(){const{id:t}=this.$route.query;t&&(this.supplierId=t,this.fetchSupplierInfo())},mounted(){},methods:{fetchSupplierInfo(){Object(r["a"])("supplier/getSupplier",{supplierId:this.supplierId},{functionName:"xunda"}).then(t=>{this.formData=Object.assign(this.formData,t.data)})},submitForm(){this.$refs["elForm"].validate(t=>{t&&Object(r["a"])("supplier/saveSupplier",this.getPostData(),{functionName:"xunda"}).then(t=>{this.$message("保存成功"),setTimeout(()=>{this.$common.closePage()},500)})})},getPostData(){const t=this.formData;return Object.assign({},t,{max_debt_amount:100*t.max_debt_amount})},resetForm(){this.$refs["elForm"].resetFields()}}},i=o,n=(a("d07e"),a("2877")),c=Object(n["a"])(i,l,s,!1,null,"08969559",null);e["default"]=c.exports},d07e:function(t,e,a){"use strict";a("999a")}}]);