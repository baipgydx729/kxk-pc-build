(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ef88ec5e"],{1276:function(t,e,a){"use strict";var n=a("d784"),i=a("44e7"),o=a("825a"),r=a("1d80"),s=a("4840"),l=a("8aa5"),c=a("50c4"),u=a("14c3"),d=a("9263"),p=a("d039"),f=[].push,g=Math.min,h=4294967295,m=!p((function(){return!RegExp(h,"y")}));n("split",2,(function(t,e,a){var n;return n="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,a){var n=String(r(this)),o=void 0===a?h:a>>>0;if(0===o)return[];if(void 0===t)return[n];if(!i(t))return e.call(n,t,o);var s,l,c,u=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),g=0,m=new RegExp(t.source,p+"g");while(s=d.call(m,n)){if(l=m.lastIndex,l>g&&(u.push(n.slice(g,s.index)),s.length>1&&s.index<n.length&&f.apply(u,s.slice(1)),c=s[0].length,g=l,u.length>=o))break;m.lastIndex===s.index&&m.lastIndex++}return g===n.length?!c&&m.test("")||u.push(""):u.push(n.slice(g)),u.length>o?u.slice(0,o):u}:"0".split(void 0,0).length?function(t,a){return void 0===t&&0===a?[]:e.call(this,t,a)}:e,[function(e,a){var i=r(this),o=void 0==e?void 0:e[t];return void 0!==o?o.call(e,i,a):n.call(String(i),e,a)},function(t,i){var r=a(n,t,this,i,n!==e);if(r.done)return r.value;var d=o(t),p=String(this),f=s(d,RegExp),v=d.unicode,b=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(m?"y":"g"),w=new f(m?d:"^(?:"+d.source+")",b),y=void 0===i?h:i>>>0;if(0===y)return[];if(0===p.length)return null===u(w,p)?[p]:[];var x=0,_=0,k=[];while(_<p.length){w.lastIndex=m?_:0;var D,S=u(w,m?p:p.slice(_));if(null===S||(D=g(c(w.lastIndex+(m?0:_)),p.length))===x)_=l(p,_,v);else{if(k.push(p.slice(x,_)),k.length===y)return k;for(var L=1;L<=S.length-1;L++)if(k.push(S[L]),k.length===y)return k;_=x=D}}return k.push(p.slice(x)),k}]}),!m)},3499:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"aux-card"},[a("div",{staticClass:"header"},[a("div",{staticClass:"left"},[a("el-select",{staticStyle:{width:"100px"},attrs:{clearable:""},on:{change:t.changeState},model:{value:t.reqData.state,callback:function(e){t.$set(t.reqData,"state",e)},expression:"reqData.state"}},t._l(t.states,(function(t,e){return a("el-option",{key:t.value,attrs:{value:t.value,label:t.name}})})),1),a("el-date-picker",{staticClass:"margin-left-sm",staticStyle:{width:"300px"},attrs:{type:"daterange","range-separator":" - ","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:t.reqData.dateRange,callback:function(e){t.$set(t.reqData,"dateRange",e)},expression:"reqData.dateRange"}}),a("el-input",{staticClass:"margin-left-sm",staticStyle:{width:"320px"},attrs:{"prefix-icon":"el-icon-search",clearable:"",placeholder:"请输入收款单号/付款方/制单人搜索"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.changeKeyword(e)}},model:{value:t.reqData.keyword,callback:function(e){t.$set(t.reqData,"keyword",e)},expression:"reqData.keyword"}}),a("el-button",{staticClass:"margin-left-sm",attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.fetchDataList}},[t._v("查询")])],1),a("div",{staticClass:"right"},[a("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["receipt-orders-create"],expression:"['receipt-orders-create']"}],attrs:{type:"success",icon:"el-icon-plus"},on:{click:function(e){return t.$common.toPage("./orders-create")}}},[t._v("新增收款")]),a("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["receipt-orders-export"],expression:"['receipt-orders-export']"}],attrs:{loading:t.exportLoading,icon:"el-icon-download"},on:{click:t.handleExportData}},[t._v("导出数据")])],1)]),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.dataLoading,expression:"dataLoading"}],staticClass:"aux-table",attrs:{data:t.dataList,border:"",fit:"",stripe:""}},[a("el-table-column",{attrs:{type:"selection",width:"55",align:"center",fixed:""}}),a("el-table-column",{attrs:{align:"left",width:"200",label:"收款单号"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("router-link",{attrs:{to:"orders-detail/"+e.row._id}},[a("span",{staticClass:"link-hover"},[t._v(t._s(e.row.receipt_no))])])]}}])}),a("el-table-column",{attrs:{align:"center",width:"140",label:"收款类型"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t._f("formatTypeName")(e.row.settle_type,t.$constant.SETTLE_ORDERS_TYPES)))]}}])}),a("el-table-column",{attrs:{align:"center",width:"180",label:"收款时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t._f("formatDate")(e.row.receipt_date)))]}}])}),a("el-table-column",{attrs:{width:"140",align:"center",label:"收款金额"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t._f("cent2yuan")(e.row.receipt_money)))]}}])}),a("el-table-column",{attrs:{width:"140",align:"center",label:"收款账号"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t.getAccountText(e.row)))])]}}])}),a("el-table-column",{attrs:{width:"200",align:"center",label:"付款方"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{attrs:{id:e.row.payer_id}},[t._v(t._s(e.row.payer_name))])]}}])}),a("el-table-column",{attrs:{align:"left",label:"备注","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.remark))]}}])}),a("el-table-column",{attrs:{width:"120",align:"center",label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t._f("formatTypeName")(e.row.state,t.states)))]}}])}),a("el-table-column",{attrs:{width:"120",align:"center",label:"经办人"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.create_uname))]}}])}),a("el-table-column",{attrs:{width:"120","header-align":"center",align:"center",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text"},on:{click:function(a){return t.$common.toPage("./orders-detail/"+e.row._id)}}},[t._v("详情")])]}}])})],1),a("div",{staticClass:"padding dflex-c"},[a("el-pagination",{attrs:{background:"","page-size":t.pagination.pageSize,total:t.pagination.totalCount,"current-page":t.pagination.pageNo,"page-sizes":[15,20,50],layout:"total, prev, pager, next","hide-on-single-page":""},on:{"size-change":t.changePageSize,"current-change":t.changePageNo}})],1)],1),a("el-dialog",{attrs:{title:"确认导出",visible:t.exportDialog.visible,width:"30%"},on:{"update:visible":function(e){return t.$set(t.exportDialog,"visible",e)}}},[a("div",{staticClass:"padding-lr-sm"},[t._v("即将导出客户数据，请确认。")]),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary",loading:t.exportLoading},on:{click:t.confirmExportData}},[t._v("导出数据")])],1)])],1)},i=[],o=a("2f46"),r=a.n(o),s=a("2197"),l=a("989b"),c={filters:{formatStateText:function(t){return 1==t||0==t?"正常":"停用"}},data:function(){return{permission:"receipt-list-query",states:[{name:"全部",value:""},{name:"已审核",value:1},{name:"已作废",value:2}],dataLoading:!1,dataList:[],pagination:{totalCount:1,pageSize:15,pageNo:1},reqData:{state:"",keyword:""},exportLoading:!1,exportDialog:{visible:!1}}},mounted:function(){this.fetchDataList()},methods:{fetchDataList:function(){var t=this;this.dataLoading=!0,Object(s["a"])("settle/listReceiptOrders",this.getReqData(),{functionName:"xunda"}).then((function(e){t.dataList=e.data||[],1==t.pagination.pageNo&&(t.pagination.totalCount=e.totalCount),t.dataLoading=!1}))},changeKeyword:function(){this.fetchDataList()},getReqData:function(){var t=Object.assign({},this.reqData,this.pagination),e=this.reqData.dateRange||[];return e.length>0&&(t.startDay=r()(e[0]).valueOf(),t.endDay=r()(e[1]).valueOf()),t},changeState:function(){var t=this;this.$common.debounce((function(){return t.fetchDataList()}),300,this)()},changePageNo:function(t){this.pagination.pageNo=t,this.fetchDataList()},changePageSize:function(t){this.pagination.pageNo=1,this.pagination.pageSize=t,this.fetchDataList()},deleteStore:function(t,e){var a=this;this.$confirm("确定要删除该客户？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(s["a"])("store/deleteStore",{storeId:t._id},{functionName:"xunda"}).then((function(t){a.fetchDataList(),a.$message({type:"success",message:"删除成功!"})}))}))},getAccountText:function(t){return t.account_name?t.account_name:this.$common.getTypeName(this.$constant.PAYMENT_TYPES,t.receipt_type)},handleExportData:function(){this.exportDialog.visible=!0},confirmExportData:function(){var t=this;this.exportLoading=!0;var e=Object.assign({},this.getReqData(),{hasDetail:this.exportDialog.hasDetail});Object(s["a"])("settle/exportReceiptOrders",e,{functionName:"xunda"}).then((function(e){Object(l["a"])(e.fileUrl,e.fileName),t.exportLoading=!1,t.exportDialog.visible=!1})).catch((function(e){t.$message({type:"error",message:"导出数据失败!"}),t.exportLoading=!1,t.exportDialog.visible=!1}))}}},u=c,d=a("2877"),p=Object(d["a"])(u,n,i,!1,null,null,null);e["default"]=p.exports},"5cc6":function(t,e,a){var n=a("74e8");n("Uint8",(function(t){return function(e,a,n){return t(this,e,a,n)}}))},"989b":function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));a("2ca0"),a("ac1f"),a("00b4"),a("ace4"),a("d3b7"),a("5cc6"),a("9a8c"),a("a975"),a("735e"),a("c1ac"),a("d139"),a("3a7b"),a("d5d6"),a("82f8"),a("e91f"),a("60bd"),a("5f96"),a("3280"),a("3fcc"),a("ca91"),a("25a1"),a("cd26"),a("3c5d"),a("2954"),a("649e"),a("219c"),a("170b"),a("b39a"),a("72f7"),a("1276"),a("3ca3"),a("ddb0"),a("2b3d"),a("9861"),a("5319");function n(t,e,a){var i=window,o="application/octet-stream",r=a||o,s=t,l="";l=("string"===typeof s&&s.startsWith("http")||!e&&!a)&&s;var c,u,d=document.createElement("a"),p=function(t){return String(t)},f=i.Blob||i.MozBlob||i.WebKitBlob||p,g=e||"download";if(f=f.call?f.bind(i):Blob,"true"===String(this)&&(s=[s,r],r=s[0],s=s[1]),l&&l.length<2048&&(g=e||l.split("/").pop().split("?")[0],d.href=l,-1!==d.href.indexOf(l))){var h=new XMLHttpRequest;return h.open("GET",l,!0),h.responseType="blob",h.onload=function(t){n(t.target.response,g,o)},setTimeout((function(){h.send()}),0),h}if(/^data:([\w+-]+\/[\w+.-]+)?[,;]/.test(s)){if(!(s.length>2096103.424&&f!==p))return navigator.msSaveBlob?navigator.msSaveBlob(w(s),g):y(s);s=w(s),r=s.type||o}else if(/([\x80-\xff])/.test(s)){var m=0,v=new Uint8Array(s.length),b=v.length;for(m;m<b;++m)v[m]=s.charCodeAt(m);s=new f([v],{type:r})}function w(t){var e=t.split(/[:;,]/),a=e[1],n="base64"==e[2]?atob:decodeURIComponent,i=n(e.pop()),o=i.length,r=0,s=new Uint8Array(o);for(r;r<o;++r)s[r]=i.charCodeAt(r);return new f([s],{type:a})}function y(t,e){if("download"in d)return d.href=t,d.setAttribute("download",g),d.className="download-js-link",d.innerHTML="downloading...",d.style.display="none",document.body.appendChild(d),setTimeout((function(){d.click(),document.body.removeChild(d),!0===e&&setTimeout((function(){i.URL.revokeObjectURL(d.href)}),250)}),66),!0;if(/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(navigator.userAgent))return/^data:/.test(t)&&(t="data:"+t.replace(/^data:([\w\/\-\+]+)/,o)),window.open(t)||confirm("Displaying New Document\n\nUse Save As... to download, then click back to return to this page.")&&(location.href=t),!0;var a=document.createElement("iframe");document.body.appendChild(a),!e&&/^data:/.test(t)&&(t="data:"+t.replace(/^data:([\w\/\-\+]+)/,o)),a.src=t,setTimeout((function(){document.body.removeChild(a)}),333)}if(c=s instanceof f?s:new f([s],{type:r}),navigator.msSaveBlob)return navigator.msSaveBlob(c,g);if(i.URL)y(i.URL.createObjectURL(c),!0);else{if("string"===typeof c||c.constructor===p)try{return y("data:"+r+";base64,"+i.btoa(c))}catch(x){return y("data:"+r+","+encodeURIComponent(c))}u=new FileReader,u.onload=function(t){y(this.result)},u.readAsDataURL(c)}return!0}}}]);