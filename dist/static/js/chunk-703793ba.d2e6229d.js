(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-703793ba"],{"3c3c":function(t,n,a){"use strict";a("e209")},"6d00":function(t,n,a){"use strict";a("c2a9")},c2a9:function(t,n,a){},c3b5:function(t,n,a){"use strict";a.r(n);var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"components-container board"},[a("Kanban",{key:1,staticClass:"kanban todo",attrs:{list:t.list1,group:t.group,"header-text":"Todo"}}),a("Kanban",{key:2,staticClass:"kanban working",attrs:{list:t.list2,group:t.group,"header-text":"Working"}}),a("Kanban",{key:3,staticClass:"kanban done",attrs:{list:t.list3,group:t.group,"header-text":"Done"}})],1)},s=[],i=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"board-column"},[a("div",{staticClass:"board-column-header"},[t._v(" "+t._s(t.headerText)+" ")]),a("draggable",t._b({staticClass:"board-column-content",attrs:{list:t.list,"set-data":t.setData}},"draggable",t.$attrs,!1),t._l(t.list,(function(n){return a("div",{key:n.id,staticClass:"board-item"},[t._v(t._s(n.name)+" "+t._s(n.id))])})),0)],1)},o=[],r=a("1980"),c=a.n(r),d={name:"DragKanbanDemo",components:{draggable:c.a},props:{headerText:{type:String,default:"Header"},options:{type:Object,default:function(){return{}}},list:{type:Array,default:function(){return[]}}},methods:{setData:function(t){t.setData("Text","")}}},l=d,u=(a("6d00"),a("2877")),b=Object(u["a"])(l,i,o,!1,null,"4db047ee",null),m=b.exports,p={name:"DragKanbanDemo",components:{Kanban:m},data:function(){return{group:"mission",list1:[{name:"Mission",id:1},{name:"Mission",id:2},{name:"Mission",id:3},{name:"Mission",id:4}],list2:[{name:"Mission",id:5},{name:"Mission",id:6},{name:"Mission",id:7}],list3:[{name:"Mission",id:8},{name:"Mission",id:9},{name:"Mission",id:10}]}}},f=p,g=(a("3c3c"),Object(u["a"])(f,e,s,!1,null,null,null));n["default"]=g.exports},e209:function(t,n,a){}}]);