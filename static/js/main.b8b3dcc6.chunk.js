(this["webpackJsonpelectron-react-todoweek"]=this["webpackJsonpelectron-react-todoweek"]||[]).push([[0],{20:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var r=n(4),a=n.n(r),o=n(8),c=n.n(o),i=n(5),s=(n(20),n(7)),l=n(11),u=n(13),d=n(10),j=n(3);var b=function(e){var t=Object(r.useState)(""),n=Object(i.a)(t,2),a=n[0],o=n[1];return Object(j.jsxs)("form",{className:"todo-form",onSubmit:function(t){t.preventDefault(),e.onSubmit({id:e.id,text:a}),o("")},children:[Object(j.jsx)("input",{type:"text",placeholder:"Add a todo",value:a,name:"text",className:"todo-input",onChange:function(e){o(e.target.value)}}),Object(j.jsx)("button",{className:"todo-button",children:"+"})]})};var f=function(e){var t=e.todos,n=e.completeTodo,r=e.removeTodo;return t.map((function(e,t){return Object(j.jsxs)("div",{className:e.isComplete?"todo-row complete":"todo-row",children:[Object(j.jsx)("div",{className:"todo-text",onClick:function(){return n(e.id)},children:e.text}),Object(j.jsx)("div",{className:"icons",children:Object(j.jsx)(s.c,{className:"delete-icon",onClick:function(){return r(e.id)}})})]},t)}))};var v=function(e){var t=e.dateProp,n=function(e){var t=JSON.parse(localStorage.getItem(e.toLocaleDateString("es-ES")));return t||[]},a=Object(r.useState)(t),o=Object(i.a)(a,2),c=o[0],s=o[1],l=Object(r.useState)(n(c)),v=Object(i.a)(l,2),O=v[0],g=v[1],m=Object(r.useState)(function(e){var t=JSON.parse(localStorage.getItem(e.toLocaleDateString("es-ES")));if(!t)return 0;var n,r=-1,a=Object(d.a)(t);try{for(a.s();!(n=a.n()).done;){var o=n.value;o.id>r&&(r=o.id)}}catch(c){a.e(c)}finally{a.f()}return r+1}(t)),x=Object(i.a)(m,2),p=x[0],S=x[1];return c!==t&&(g(n(t)),s(t)),Object(j.jsxs)("div",{id:"day-container",className:function(e){var t=e.split("/").map((function(e){return parseInt(e)})),n=(new Date).toLocaleDateString("es-ES").split("/").map((function(e){return parseInt(e)}));if(t[0]===n[0])return!1;for(var r=2;r>=0;r--)if(n[r]<t[r])return!1;return!0}(c.toLocaleDateString("es-ES"))?"past":"",children:[Object(j.jsx)("h1",{children:c.toLocaleDateString("en-US",{weekday:"long"})}),Object(j.jsx)("h2",{children:c.toLocaleDateString()}),Object(j.jsx)(b,{onSubmit:function(e){if(e.text&&!/^\s*$/.test(e.text)){var t=[].concat(Object(u.a)(O),[e]);localStorage.setItem(c.toLocaleDateString("es-ES"),JSON.stringify(t)),g(t),S(p+1)}},id:p}),Object(j.jsx)("div",{id:"todo-container",children:Object(j.jsx)(f,{todos:O,completeTodo:function(e){var t=O.map((function(t){return t.id===e&&(t.isComplete=!t.isComplete),t}));localStorage.setItem(c.toLocaleDateString(),JSON.stringify(t)),g(t)},removeTodo:function(e){var t=Object(u.a)(O).filter((function(t){return t.id!==e}));localStorage.setItem(c.toLocaleDateString("es-ES"),JSON.stringify(t)),t.length||localStorage.removeItem(c.toLocaleDateString("es-ES")),g(t)}})})]})};var O=function(e){var t=e.setToggle,n=Object(r.useState)(new Date),a=Object(i.a)(n,2),o=a[0],c=a[1],u=d();function d(){var e=[],t=new Date(o.getTime());t.setDate(t.getDate()-1);for(var n=0;n<4;n++)e.push(new Date(t.getTime())),t.setDate(t.getDate()+1);return e}return Object(r.useEffect)((function(){d()})),Object(j.jsxs)("main",{id:"main-container",children:[Object(j.jsxs)("nav",{className:"nav",children:[Object(j.jsx)("button",{className:"btn prev",onClick:function(){return function(){var e=new Date(o.getTime());e.setDate(e.getDate()-1),c(e)}()},children:Object(j.jsx)(s.a,{})}),Object(j.jsx)("button",{className:"btn calendar",onClick:function(){return t(!1)},children:Object(j.jsx)(l.a,{})}),Object(j.jsx)("button",{className:"btn next",onClick:function(){return function(){var e=new Date(o.getTime());e.setDate(e.getDate()+1),c(e)}()},children:Object(j.jsx)(s.b,{})})]}),Object(j.jsxs)("div",{id:"todo-app",children:[Object(j.jsx)(v,{dateProp:u[0]}),Object(j.jsx)(v,{dateProp:u[1]}),Object(j.jsx)(v,{dateProp:u[2]}),Object(j.jsx)(v,{dateProp:u[3]})]})]})},g=n(15),m=n(14);var x=function(e){var t=e.setToggle;Object(r.useEffect)((function(){setTimeout((function(){window.dispatchEvent(new Event("resize"))}),1)}));var n=function(e){var t=[];for(var n in e){var r,a=JSON.parse(e[n]),o=n.split("/").reverse().map((function(e){return e.length<2?"0"+e:e})).join("-"),c=Object(d.a)(a);try{for(c.s();!(r=c.n()).done;){var i=r.value;t.push({date:o,title:i.text,breakWord:"break-word"})}}catch(s){c.e(s)}finally{c.f()}}return t}(function(){for(var e={},t=Object.keys(localStorage),n=t.length;n--;)e[t[n]]=localStorage.getItem(t[n]);return e}());return Object(j.jsx)("div",{id:"calendar",children:Object(j.jsx)(g.a,{plugins:[m.a],initialView:"dayGridMonth",events:n,eventBorderColor:"gray",eventBackgroundColor:"#202020",eventColor:"white",fixedWeekCount:!1,height:"98vh",dayMaxEvents:!0,customButtons:{return:{text:Object(j.jsx)(l.b,{}),click:function(){return t(!0)}}},headerToolbar:{left:"prev",center:"title,return",right:"next"}})})};var p=function(){var e=Object(r.useState)(!0),t=Object(i.a)(e,2),n=t[0],a=t[1];return n?Object(j.jsx)(O,{setToggle:a}):Object(j.jsx)(x,{setToggle:a})};c.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.b8b3dcc6.chunk.js.map