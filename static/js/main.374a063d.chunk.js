(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),s=n(6),a=n.n(s),o=(n(13),n(8)),d=n(2),r=n(0);var l=function(e){return Object(r.jsx)("div",{className:e.className?"".concat(e.className," card"):"card",children:e.children})};function j(e){return e.done?Object(r.jsx)("img",{src:"./assets/selected.png",alt:"done"}):Object(r.jsx)("img",{src:"./assets/unselected.png",alt:"undone"})}var u=function(e){return Object(r.jsx)("li",{children:Object(r.jsxs)(l,{children:[Object(r.jsxs)("div",{onClick:function(t){"selectedId"===t.target.id&&e.onShowDesc(e.item)},className:e.item.done?"done item":"item",id:"selectedId",children:[e.item.text,Object(r.jsxs)("div",{children:[Object(r.jsx)("button",{className:"imgStyle",onClick:function(){e.onDone(e.item)},children:Object(r.jsx)(j,{done:e.item.done})}),Object(r.jsx)("button",{className:"imgStyle",onClick:function(t){"delete"===t.target.id&&e.onItemDeleted(e.item)},children:Object(r.jsx)("img",{src:"./assets/delete_white.png",alt:"delete",id:"delete"})})]})]}),Object(r.jsx)("div",{className:e.item.description?"descriptionCard":"descriptionCard fadeOut",children:Object(r.jsx)("p",{children:e.item.desc})})]})})};var m=function(e){return Object(r.jsx)("ul",{children:e.items.map((function(t){return Object(r.jsx)(u,{item:t,onDone:e.onDone,onItemDeleted:e.onItemDeleted,onShowDesc:e.onShowDesc},t.id)}))})},h=n(7);var b=function e(t,n){Object(h.a)(this,e),this.id=parseInt(1e4*Math.random()),this.text=t,this.desc=n,this.done=!1,this.description=!1};var O=function(e){var t=Object(c.useState)(""),n=Object(d.a)(t,2),i=n[0],s=n[1],a=Object(c.useState)(""),o=Object(d.a)(a,2),l=o[0],j=o[1];return Object(r.jsxs)("form",{children:[Object(r.jsx)("input",{type:"text",onChange:function(e){var t=e.target.value;s(t)},value:i,className:"input-text",placeholder:"T\xedtulo"}),Object(r.jsx)("textarea",{onChange:function(e){var t=e.target.value;j(t)},value:l,className:"input-area",placeholder:"Descri\xe7\xe3o"}),Object(r.jsx)("button",{onClick:function(t){t.preventDefault(),i&&(e.onAddItem(i,l),s(""),j(""))},className:"btn-add",children:"Add"})]})};var f=function(e){return Object(r.jsx)("div",{id:"modal",onClick:function(t){"modal"===t.target.id&&e.onHideModal()},className:e.show?"modal":"modal modalHide",children:Object(r.jsx)(l,{className:"cardModal",children:e.children})})},x=(n(15),"savedItems");var v=function(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),n=t[0],i=t[1],s=Object(c.useState)([]),a=Object(d.a)(s,2),l=a[0],j=a[1];function u(){i(!1)}return Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem(x));e&&j(e)}),[]),Object(c.useEffect)((function(){localStorage.setItem(x,JSON.stringify(l))}),[l]),Object(r.jsxs)("div",{className:"container",children:[Object(r.jsxs)("header",{className:"header",children:[Object(r.jsx)("h1",{className:"title",children:"Minha lista"}),Object(r.jsx)("button",{className:"addButton",onClick:function(){i(!0)},children:"+"})]}),Object(r.jsx)(m,{onItemDeleted:function(e){var t=l.filter((function(t){return t.id!==e.id}));j(t)},onDone:function(e){var t=l.map((function(t){return t.id===e.id&&(t.done=!t.done),t}));j(t)},items:l,onShowDesc:function(e){var t=l.map((function(t){return t.id===e.id&&(t.description=!t.description),t}));j(t)},onShowModal:function(){i(!0)},show:n}),Object(r.jsx)(f,{show:n,onHideModal:u,children:Object(r.jsx)(O,{onAddItem:function(e,t){var n=new b(e,t);j([].concat(Object(o.a)(l),[n])),u()}})}),Object(r.jsx)("div",{className:n?"creditsWhite":"credits",children:"Designed & Built by Igor Targino. \xa92021"})]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),s(e),a(e)}))};a.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(v,{})}),document.getElementById("root")),g()}},[[16,1,2]]]);
//# sourceMappingURL=main.374a063d.chunk.js.map