(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{N0Wb:function(e,n,t){e.exports={count:"index-module--count--1nAkk",inputCont:"index-module--inputCont--1f1mF",searchIcon:"index-module--searchIcon--2X1y5",linkCont:"index-module--linkCont--3mgeT",linkIcon:"index-module--linkIcon--2URpu",linkSettings:"index-module--linkSettings--eXORQ",linkIconImg:"index-module--linkIconImg--kZV8w",addCont:"index-module--addCont--32rIX",addIcon:"index-module--addIcon--o059b",addInput:"index-module--addInput--3ZRD_"}},RXBc:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return k}));var a=t("KQm4"),c=t("q1tI"),i=t.n(c),r=t("/MKj"),l=t("o0o1"),o=t.n(l);t("ls82");function u(e,n,t,a,c,i,r){try{var l=e[i](r),o=l.value}catch(u){return void t(u)}l.done?n(o):Promise.resolve(o).then(a,c)}function s(e){return function(){var n=this,t=arguments;return new Promise((function(a,c){var i=e.apply(n,t);function r(e){u(i,a,c,r,l,"next",e)}function l(e){u(i,a,c,r,l,"throw",e)}r(void 0)}))}}var d=t("N0Wb"),m=t.n(d);var p=function(e){var n=Object(c.useState)(e),t=n[0],a=n[1];return{input:{value:t,onChange:function(e){a(e.target.value)}},setValue:a}};function g(e){var n=e.addStatus,t=e.setAddStatus,a={display:n?"block":"none"},c=Object(r.useDispatch)(),l=p(""),u=p("");function d(){return(d=s(o.a.mark((function e(n,a){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.trim()&&a.trim()){e.next=2;break}return e.abrupt("return",alert("请输入名称与网址"));case 2:return e.next=4,c({type:"addLink",name:n,link:a});case 4:l.setValue(""),u.setValue(""),t(!1);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return i.a.createElement("div",{className:m.a.addCont,style:a},i.a.createElement("div",{className:m.a.addIcon},i.a.createElement("div",{className:m.a.title},"添加快捷方式"),i.a.createElement("div",{className:m.a.addInput},"名称",i.a.createElement("input",l.input)),i.a.createElement("div",{className:m.a.addInput},"网址",i.a.createElement("input",u.input)),i.a.createElement("div",{className:m.a.addInput},i.a.createElement("button",{onClick:function(){return t(!1)}},"删除"),i.a.createElement("button",{style:{float:"right"},onClick:function(){return function(e,n){return d.apply(this,arguments)}(l.input.value,u.input.value)}},"完成"),i.a.createElement("button",{onClick:function(){return t(!1)},style:{float:"right",marginRight:10}},"取消"))))}function k(){var e=Object(c.useState)(!1),n=e[0],t=e[1],l=Object(r.useDispatch)(),o=Object(r.useSelector)((function(e){return e.linkReducer}));return Object(c.useEffect)((function(){l({type:"loadLinkInit",payload:JSON.parse(localStorage.getItem("linkList"))||[]})}),[]),i.a.createElement("div",null,i.a.createElement("div",{className:m.a.count},i.a.createElement("img",{src:"https://www.google.cn/landing/cnexp/google-search.png"}),i.a.createElement("div",{className:m.a.inputCont},i.a.createElement("img",{src:"./images/search.png",className:m.a.searchIcon}),i.a.createElement("input",null),i.a.createElement("img",{src:"./images/audio.png",className:m.a.searchIcon})),i.a.createElement("div",{className:m.a.linkCont},o.slice(0,9).map((function(e,n){return i.a.createElement("div",{className:m.a.linkIcon,key:n,onClick:function(){return n=e.link,void(window.location.href=n);var n}},i.a.createElement("img",{src:"./images/removeLogo.png",className:m.a.linkSettings,style:{right:5},onClick:function(e){return function(e,n){e.stopPropagation();var t=Object(a.a)(o);t.splice(n,1),l({type:"loadLinkInit",payload:t})}(e,n)}}),i.a.createElement("div",{className:m.a.linkIconImg},i.a.createElement("img",{src:e.logoLink})),i.a.createElement("p",null,e.name))})),i.a.createElement("div",{className:m.a.linkIcon,onClick:function(){return t(!0)}},i.a.createElement("div",{className:m.a.linkIconImg},i.a.createElement("img",{src:"./images/addLogo.png"})),i.a.createElement("p",null,"添加快捷方式")))),i.a.createElement(g,{addStatus:n,setAddStatus:t}))}}}]);
//# sourceMappingURL=component---src-pages-index-js-bb2167d29d2335203481.js.map