(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f6934128"],{a1b8:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));a("3c5d");function n(t,e,a){var o=window,i="application/octet-stream",r=a||i,s=t,l="";l=("string"===typeof s&&s.startsWith("http")||!e&&!a)&&s;var c,d,u=document.createElement("a"),p=function(t){return String(t)},f=o.Blob||o.MozBlob||o.WebKitBlob||p,g=e||"download";if(f=f.call?f.bind(o):Blob,"true"===String(this)&&(s=[s,r],r=s[0],s=s[1]),l&&l.length<2048&&(g=e||l.split("/").pop().split("?")[0],u.href=l,-1!==u.href.indexOf(l))){var h=new XMLHttpRequest;return h.open("GET",l,!0),h.responseType="blob",h.onload=function(t){n(t.target.response,g,i)},setTimeout((function(){h.send()}),0),h}if(/^data:([\w+-]+\/[\w+.-]+)?[,;]/.test(s)){if(!(s.length>2096103.424&&f!==p))return navigator.msSaveBlob?navigator.msSaveBlob(w(s),g):y(s);s=w(s),r=s.type||i}else if(/([\x80-\xff])/.test(s)){var m=0,b=new Uint8Array(s.length),v=b.length;for(m;m<v;++m)b[m]=s.charCodeAt(m);s=new f([b],{type:r})}function w(t){var e=t.split(/[:;,]/),a=e[1],n="base64"==e[2]?atob:decodeURIComponent,o=n(e.pop()),i=o.length,r=0,s=new Uint8Array(i);for(r;r<i;++r)s[r]=o.charCodeAt(r);return new f([s],{type:a})}function y(t,e){if("download"in u)return u.href=t,u.setAttribute("download",g),u.className="download-js-link",u.innerHTML="downloading...",u.style.display="none",document.body.appendChild(u),setTimeout((function(){u.click(),document.body.removeChild(u),!0===e&&setTimeout((function(){o.URL.revokeObjectURL(u.href)}),250)}),66),!0;if(/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(navigator.userAgent))return/^data:/.test(t)&&(t="data:"+t.replace(/^data:([\w\/\-\+]+)/,i)),window.open(t)||confirm("Displaying New Document\n\nUse Save As... to download, then click back to return to this page.")&&(location.href=t),!0;var a=document.createElement("iframe");document.body.appendChild(a),!e&&/^data:/.test(t)&&(t="data:"+t.replace(/^data:([\w\/\-\+]+)/,i)),a.src=t,setTimeout((function(){document.body.removeChild(a)}),333)}if(c=s instanceof f?s:new f([s],{type:r}),navigator.msSaveBlob)return navigator.msSaveBlob(c,g);if(o.URL)y(o.URL.createObjectURL(c),!0);else{if("string"===typeof c||c.constructor===p)try{return y("data:"+r+";base64,"+o.btoa(c))}catch(x){return y("data:"+r+","+encodeURIComponent(c))}d=new FileReader,d.onload=function(t){y(this.result)},d.readAsDataURL(c)}return!0}},a1c6:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"aux-card"},[a("div",{staticClass:"header"},[a("div",{staticClass:"left"},[a("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["store-edit"],expression:"['store-edit']"}],attrs:{type:"primary",icon:"el-icon-plus"},on:{click:function(e){return t.$common.toPage("./store-create")}}},[t._v("添加客户")]),a("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["store-export"],expression:"['store-export']"}],attrs:{loading:t.exportLoading,icon:"el-icon-download"},on:{click:t.handleExportData}},[t._v("导出数据")])],1),a("div",{staticClass:"right"},[a("el-select",{staticClass:"margin-right-sm",staticStyle:{width:"100px"},attrs:{clearable:""},on:{change:t.changeState},model:{value:t.reqData.state,callback:function(e){t.$set(t.reqData,"state",e)},expression:"reqData.state"}},t._l(t.states,(function(t){return a("el-option",{key:t.value,attrs:{value:t.value,label:t.name}})})),1),a("el-input",{staticStyle:{width:"320px"},attrs:{"prefix-icon":"el-icon-search",clearable:"",placeholder:"请输入客户名称/联系人/电话搜索"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.changeKeyword(e)}},model:{value:t.reqData.keyword,callback:function(e){t.$set(t.reqData,"keyword",e)},expression:"reqData.keyword"}})],1)]),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.dataLoading,expression:"dataLoading"}],staticClass:"aux-table",attrs:{data:t.dataList,border:"",fit:"",stripe:""}},[a("el-table-column",{attrs:{type:"selection",width:"55",align:"center",fixed:""}}),a("el-table-column",{attrs:{align:"left",width:"220",label:"客户名称",fixed:""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.name))]}}])}),a("el-table-column",{attrs:{width:"160",align:"left",label:"联系人"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.contact))]}}])}),a("el-table-column",{attrs:{width:"160",align:"left",label:"联系电话"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.telephone))]}}])}),a("el-table-column",{attrs:{width:"200",align:"left",label:"所属区域","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.area_name))]}}])}),a("el-table-column",{attrs:{width:"90",align:"center",label:"价格等级"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(["标准","一级","二级"][e.row.sale_grade]))])]}}])}),a("el-table-column",{attrs:{width:"200",align:"center",label:"添加日期"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t._f("formatDate")(e.row.create_time)))]}}])}),a("el-table-column",{attrs:{align:"left",label:"备注","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.remark))]}}])}),a("el-table-column",{attrs:{width:"90",align:"center",label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t._f("formatStateText")(e.row.state)))]}}])}),a("el-table-column",{attrs:{width:"150",align:"center",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["store-edit"],expression:"['store-edit']"}],attrs:{type:"text"},on:{click:function(a){t.$common.toPage("./store-create?type=edit&id="+e.row._id+"&t="+Date.now())}}},[t._v("编辑")]),a("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["store-delete"],expression:"['store-delete']"}],attrs:{type:"text"},on:{click:function(a){return t.deleteStore(e.row,e.$index)}}},[t._v("删除")])]}}])})],1),a("div",{staticClass:"padding dflex-c"},[a("el-pagination",{attrs:{background:"","page-size":t.pagination.pageSize,total:t.pagination.totalCount,"current-page":t.pagination.pageNo,"page-sizes":[10,15,20,30,50],layout:"total, prev, pager, next, sizes","hide-on-single-page":""},on:{"size-change":t.changePageSize,"current-change":t.changePageNo}})],1)],1),a("el-dialog",{attrs:{title:"确认导出",visible:t.exportDialog.visible,width:"30%"},on:{"update:visible":function(e){return t.$set(t.exportDialog,"visible",e)}}},[a("div",{staticClass:"padding-lr-sm"},[t._v("即将导出客户数据，请确认。")]),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary",loading:t.exportLoading},on:{click:t.confirmExportData}},[t._v("导出数据")])],1)])],1)},o=[],i=a("2197"),r=a("a1b8"),s={name:"StoreList",filters:{formatStateText(t){return 1===t||0===t?"正常":"停用"}},data(){return{permission:"store-query",states:[{name:"全部",value:""},{name:"启用",value:1},{name:"禁用",value:2}],dataLoading:!1,dataList:[],pagination:{totalCount:1,pageSize:10,pageNo:1},reqData:{state:"",keyword:""},exportLoading:!1,exportDialog:{visible:!1}}},mounted(){this.fetchDataList()},methods:{fetchDataList(){this.dataLoading=!0,Object(i["a"])("store/listStore",this.getReqData(),{functionName:"xunda"}).then(t=>{this.dataList=t.data||[],1===this.pagination.pageNo&&(this.pagination.totalCount=t.totalCount),this.dataLoading=!1})},changeKeyword(){this.fetchDataList()},getReqData(){return Object.assign({},this.reqData,this.pagination)},changeState(){this.$common.debounce(()=>this.fetchDataList(),300,this)()},changePageNo(t){this.pagination.pageNo=t,this.fetchDataList()},changePageSize(t){this.pagination.pageNo=1,this.pagination.pageSize=t,this.fetchDataList()},deleteStore(t,e){this.$confirm("确定要删除该客户？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{Object(i["a"])("store/deleteStore",{storeId:t._id},{functionName:"xunda"}).then(t=>{this.fetchDataList(),this.$message({type:"success",message:"删除成功!"})})})},handleExportData(){this.exportDialog.visible=!0},confirmExportData(){this.exportLoading=!0;const t=Object.assign({},this.getReqData(),{hasDetail:this.exportDialog.hasDetail});Object(i["a"])("store/exportStore",t,{functionName:"xunda"}).then(t=>{Object(r["a"])(t.fileUrl,t.fileName),this.exportLoading=!1,this.exportDialog.visible=!1}).catch(t=>{this.$message({type:"error",message:"导出数据失败!"}),this.exportLoading=!1,this.exportDialog.visible=!1})}}},l=s,c=a("2877"),d=Object(c["a"])(l,n,o,!1,null,null,null);e["default"]=d.exports}}]);