(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-144e6196"],{"02fb":function(t,e,n){},"18d4":function(t,e,n){},"2dcd":function(t,e,n){t.exports=n.p+"static/img/login-scan2.805ee967.png"},"3ad7":function(t,e,n){"use strict";n("02fb")},"7be2":function(t,e,n){},"9b3b":function(t,e,n){t.exports=n.p+"static/img/login-box-bg.959c4e38.svg"},"9ed6":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"login-container"},[a("div",{staticClass:"left-box"},[a("div",{staticClass:"logo-box animated fadeInDown"},[a("img",{staticClass:"img",attrs:{src:n("cf05")}}),a("span",{staticClass:"title"},[t._v(t._s(t.settings.title))])]),a("div",{staticClass:"desc-warp animated fadeInLeft"},[a("img",{attrs:{src:n("9b3b")}}),a("div",{staticClass:"tit padding-top-lg"},[t._v(t._s(t.settings.title)+" - 管理系统")]),a("div",{staticClass:"des padding-top-lg"},[t._v("输入您的账号密码登录后开始使用！")])])]),a("div",{staticClass:"right-box"},[a("el-form",{ref:"loginForm",staticClass:"login-form animated fadeInRight",attrs:{model:t.loginForm,rules:t.loginRules,autocomplete:"on","label-position":"left"}},[a("div",{staticClass:"title-box dflex-b"},[a("div",{class:{active:"wxqrcode"==t.loginType},on:{click:function(e){return t.changeLogin("wxqrcode")}}},[a("h4",{staticClass:"title"},[t._v("微信登录")])]),a("div",{class:{active:"userpwd"==t.loginType},on:{click:function(e){return t.changeLogin("userpwd")}}},[a("h4",{staticClass:"title"},[t._v("密码登录")])])]),"userpwd"==t.loginType?a("div",{staticClass:"login-area"},[a("el-form-item",{attrs:{prop:"username"}},[a("span",{staticClass:"svg-box"},[a("svg-icon",{attrs:{"icon-class":"user"}})],1),a("el-input",{ref:"username",attrs:{placeholder:"登录用户名",name:"username",type:"text",tabindex:"1",autocomplete:"on"},model:{value:t.loginForm.username,callback:function(e){t.$set(t.loginForm,"username",e)},expression:"loginForm.username"}})],1),a("el-form-item",{attrs:{prop:"password"}},[a("span",{staticClass:"svg-box"},[a("svg-icon",{attrs:{"icon-class":"password"}})],1),a("el-input",{key:t.passwordType,ref:"password",attrs:{type:t.passwordType,placeholder:"登录密码",name:"password",tabindex:"2",autocomplete:"on"},on:{blur:function(e){t.capsTooltip=!1}},nativeOn:{keyup:[function(e){return t.checkCapslock(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleLogin(e)}]},model:{value:t.loginForm.password,callback:function(e){t.$set(t.loginForm,"password",e)},expression:"loginForm.password"}}),a("span",{staticClass:"show-pwd",on:{click:t.showPwd}},[a("svg-icon",{attrs:{"icon-class":"password"===t.passwordType?"eye":"eye-open"}})],1)],1),t.needCaptcha?a("el-form-item",{attrs:{prop:"captcha"}},[a("div",{staticClass:"captcha-box"},[a("uni-captcha",{ref:"captcha",attrs:{focus:"",scene:"login-by-pwd"}})],1),a("div",{staticClass:"captcha-input"},[a("el-input",{ref:"captcha",attrs:{type:"text",placeholder:"验证码",name:"captcha",tabindex:"3"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleLogin(e)}},model:{value:t.loginForm.captcha,callback:function(e){t.$set(t.loginForm,"captcha",e)},expression:"loginForm.captcha"}})],1)]):t._e(),a("el-button",{staticClass:"login-btn",attrs:{loading:t.loading,type:"primary"},nativeOn:{click:function(e){return e.preventDefault(),t.handleLogin(e)}}},[t._v("登录")])],1):t._e(),"wxqrcode"==t.loginType?a("div",{staticClass:"login-area"},[a("div",{staticClass:"login-box-code"},[a("div",{staticClass:"login-code-wechat"},[a("div",{staticClass:"qrcode-box"},[t.qrcodeLogin.qrScanState>=0&&t.qrcodeLogin.qrcodeUrl?a("img",{staticClass:"qrcode",attrs:{src:t.qrcodeLogin.qrcodeUrl}}):t._e(),-1===t.qrcodeLogin.qrScanState?a("div",{staticClass:"qrcode-error",on:{click:t.buildWxAppLoginQrCode}},[a("div",{staticClass:"icon el-icon-refresh"}),a("div",[t._v("二维码失效 点击重试")])]):t._e()]),a("div",{staticClass:"scan-box"},[a("img",{attrs:{src:n("2dcd")}})]),a("div",{staticClass:"wechat-title"},[t.qrcodeLogin.qrScanState?t._e():a("span",[t._v("打开微信扫一扫，快速登录/注册")]),1==t.qrcodeLogin.qrScanState?a("span",{staticClass:"ft-primary"},[t._v("已扫描二维码，请点击授权登录")]):t._e(),9==t.qrcodeLogin.qrScanState?a("span",{staticClass:"ft-success"},[t._v("扫码登录成功, 请稍候～")]):t._e(),t.qrcodeLogin.qrScanMessage?a("span",{staticClass:"ft-danger"},[t._v(t._s(t.qrcodeLogin.qrScanMessage))]):t._e()])])])]):t._e()])],1),a("el-dialog",{attrs:{title:"Or connect with",visible:t.showDialog},on:{"update:visible":function(e){t.showDialog=e}}},[a("social-sign")],1)],1)},i=[],s=(n("caad"),n("d3b7"),n("13d5"),n("b64b"),n("61f7")),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"social-signup-container"},[n("div",{staticClass:"sign-btn",on:{click:function(e){return t.wechatHandleClick("wechat")}}},[n("span",{staticClass:"wx-svg-container"},[n("svg-icon",{staticClass:"icon",attrs:{"icon-class":"wechat"}})],1),t._v(" WeChat ")]),n("div",{staticClass:"sign-btn",on:{click:function(e){return t.tencentHandleClick("tencent")}}},[n("span",{staticClass:"qq-svg-container"},[n("svg-icon",{staticClass:"icon",attrs:{"icon-class":"qq"}})],1),t._v(" QQ ")])])},o=[],r={name:"SocialSignin",methods:{wechatHandleClick:function(t){alert("ok")},tencentHandleClick:function(t){alert("ok")}}},l=r,d=(n("f103"),n("2877")),u=Object(d["a"])(l,c,o,!1,null,"674d2e4a",null),p=u.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"captcha-img-box"},[t.loging?n("div",{staticClass:"tac padding-tb-lg"},[n("span",{directives:[{name:"loading",rawName:"v-loading",value:t.loging,expression:"loging"}],attrs:{"element-loading-spinner":"el-icon-loading"}})]):n("img",{staticClass:"captcha-img",class:{opacity:t.loging},attrs:{src:t.captchaBase64,mode:"widthFix"},on:{click:t.getImageCaptcha}})])},h=[],f=n("5c96"),m={name:"UniCaptcha",props:{modelValue:{type:String,default:function(){return""}},value:{type:String,default:function(){return""}},scene:{type:String,default:function(){return""}},focus:{type:Boolean,default:function(){return!1}}},data:function(){return{focusCaptchaInput:!1,captchaBase64:"",loging:!1}},computed:{val:{get:function(){return this.value||this.modelValue},set:function(t){this.$emit("input",t)}}},watch:{scene:{handler:function(t){t?this.getImageCaptcha(this.focus):f["Message"].error("scene不能为空")},immediate:!0}},methods:{getImageCaptcha:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.loging=!0,e&&(this.val="",this.focusCaptchaInput=!0);var n=uniCloud.importObject("uni-captcha-co",{customUI:!0});n.getImageCaptcha({scene:this.scene}).then((function(e){t.captchaBase64=e.captchaBase64})).catch((function(t){f["Message"].error(t.message)})).finally((function(e){t.loging=!1}))}}},v=m,C=(n("e0f3"),Object(d["a"])(v,g,h,!1,null,"11cf089a",null)),w=C.exports,q=n("83d6"),b=n.n(q),y=n("2197"),x={name:"Login",components:{SocialSign:p,UniCaptcha:w},data:function(){var t=function(t,e,n){Object(s["d"])(e)?n():n(new Error("请输入正确的用户名！"))},e=function(t,e,n){e.length<6?n(new Error("请输入正确的用户密码！")):n()};return{settings:b.a,loginType:"wxqrcode",loginForm:{username:"",password:"",captcha:""},needCaptcha:!1,loginRules:{username:[{required:!0,trigger:"blur",validator:t}],password:[{required:!0,trigger:"blur",validator:e}]},passwordType:"password",capsTooltip:!1,loading:!1,showDialog:!1,redirect:void 0,otherQuery:{},qrcodeLogin:{qrcodeUrl:"",qrSceneId:"",qrScanState:"",qrScanMessage:""}}},watch:{$route:{handler:function(t){var e=t.query;e&&(this.redirect=e.redirect,this.otherQuery=this.getOtherQuery(e))},immediate:!0}},created:function(){},mounted:function(){this.buildWxAppLoginQrCode()},destroyed:function(){},methods:{changeLogin:function(t){this.loginType=t,this.initLogin(),t&&this.buildWxAppLoginQrCode()},initLogin:function(){clearTimeout(this.qrcodeScanTimer)},buildWxAppLoginQrCode:function(){var t=this;this.qrcodeLogin={qrcodeUrl:"",qrSceneId:"",qrScanState:"",qrScanMessage:""},Object(y["a"])("login/createWxAppLoginQrCode",{},{functionName:"xundapc"}).then((function(e){var n=e.data,a=n.qrcode,i=n.sceneId;t.qrcodeLogin.qrcodeUrl=a,t.qrcodeLogin.qrSceneId=i,t.checkQrCodeScan()}))},checkQrCodeScan:function(){var t=this;"wxqrcode"===this.loginType&&Object(y["a"])("login/checkScanWxAppQrCode",{scene:"pclogin",sceneId:this.qrcodeLogin.qrSceneId},{functionName:"xundapc"}).then((function(e){var n=e.data,a=n.state,i=n.message,s=n.token;t.qrcodeLogin.qrScanState=a,t.qrcodeLogin.qrScanMessage=i||"",clearTimeout(t.qrcodeScanTimer),[-1,9].includes(a)||(t.qrcodeScanTimer=setTimeout((function(){return t.checkQrCodeScan()}),1e3)),s&&t.$store.dispatch("user/loginByToken",s).then((function(){t.$router.push({path:t.redirect||"/",query:t.otherQuery}),t.loading=!1}))}))},checkCapslock:function(t){var e=t.key;this.capsTooltip=e&&1===e.length&&e>="A"&&e<="Z"},showPwd:function(){var t=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((function(){t.$refs.password.focus()}))},handleLogin:function(){var t=this;this.$refs.loginForm.validate((function(e){if(!e)return console.log("error submit!!"),!1;t.loading=!0,t.$store.dispatch("user/login",t.loginForm).then((function(){t.$router.push({path:t.redirect||"/",query:t.otherQuery}),t.loading=!1})).catch((function(e){"uni-id-captcha-required"===e.code&&(t.needCaptcha=!0),t.loading=!1})).finally((function(){t.loginForm.captcha=""}))}))},getOtherQuery:function(t){return Object.keys(t).reduce((function(e,n){return"redirect"!==n&&(e[n]=t[n]),e}),{})}}},k=x,S=(n("3ad7"),Object(d["a"])(k,a,i,!1,null,null,null));e["default"]=S.exports},e0f3:function(t,e,n){"use strict";n("18d4")},f103:function(t,e,n){"use strict";n("7be2")}}]);