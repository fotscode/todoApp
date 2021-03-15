(this["webpackJsonpelectron-react-todoweek"]=this["webpackJsonpelectron-react-todoweek"]||[]).push([[0],{20:function(t,e,n){},24:function(t,e,n){"use strict";n.r(e);var r=n(4),a=n.n(r),o=n(8),c=n.n(o),i=n(5),s=(n(20),n(7)),l=n(11),u=n(13),d=n(10),j=n(3);var b=function(t){var e=Object(r.useState)(""),n=Object(i.a)(e,2),a=n[0],o=n[1];return Object(j.jsxs)("form",{className:"todo-form",onSubmit:function(e){e.preventDefault(),t.onSubmit({id:t.id,text:a}),o("")},children:[Object(j.jsx)("input",{type:"text",placeholder:"Add a todo",value:a,name:"text",className:"todo-input",onChange:function(t){o(t.target.value)}}),Object(j.jsx)("button",{className:"todo-button",children:"+"})]})};var f=function(t){var e=t.todos,n=t.completeTodo,r=t.removeTodo;return e.map((function(t,e){return Object(j.jsxs)("div",{className:t.isComplete?"todo-row complete":"todo-row",children:[Object(j.jsx)("div",{className:"todo-text",onClick:function(){return n(t.id)},children:t.text}),Object(j.jsx)("div",{className:"icons",children:Object(j.jsx)(s.c,{className:"delete-icon",onClick:function(){return r(t.id)}})})]},e)}))};var v=function(t){var e=t.dateProp,n=function(t){var e=JSON.parse(localStorage.getItem(t.toLocaleDateString()));return e||[]},a=Object(r.useState)(e),o=Object(i.a)(a,2),c=o[0],s=o[1],l=Object(r.useState)(n(c)),v=Object(i.a)(l,2),O=v[0],g=v[1],m=Object(r.useState)(function(t){var e=JSON.parse(localStorage.getItem(t.toLocaleDateString()));if(!e)return 0;var n,r=-1,a=Object(d.a)(e);try{for(a.s();!(n=a.n()).done;){var o=n.value;o.id>r&&(r=o.id)}}catch(c){a.e(c)}finally{a.f()}return r+1}(e)),x=Object(i.a)(m,2),p=x[0],h=x[1];return c!==e&&(g(n(e)),s(e)),Object(j.jsxs)("div",{id:"day-container",className:function(t){var e=t.split("/").map((function(t){return parseInt(t)})),n=(new Date).toLocaleDateString().split("/").map((function(t){return parseInt(t)}));if(e[0]===n[0])return!1;for(var r=2;r>=0;r--)if(n[r]<e[r])return!1;return!0}(c.toLocaleDateString())?"past":"",children:[Object(j.jsx)("h1",{children:c.toLocaleDateString("en-US",{weekday:"long"})}),Object(j.jsx)("h2",{children:c.toLocaleDateString()}),Object(j.jsx)(b,{onSubmit:function(t){if(t.text&&!/^\s*$/.test(t.text)){var e=[].concat(Object(u.a)(O),[t]);localStorage.setItem(c.toLocaleDateString(),JSON.stringify(e)),g(e),h(p+1)}},id:p}),Object(j.jsx)("div",{id:"todo-container",children:Object(j.jsx)(f,{todos:O,completeTodo:function(t){var e=O.map((function(e){return e.id===t&&(e.isComplete=!e.isComplete),e}));localStorage.setItem(c.toLocaleDateString(),JSON.stringify(e)),g(e)},removeTodo:function(t){var e=Object(u.a)(O).filter((function(e){return e.id!==t}));localStorage.setItem(c.toLocaleDateString(),JSON.stringify(e)),e.length||localStorage.removeItem(c.toLocaleDateString()),g(e)}})})]})};var O=function(t){var e=t.setToggle,n=Object(r.useState)(new Date),a=Object(i.a)(n,2),o=a[0],c=a[1],u=d();function d(){var t=[],e=new Date(o.getTime());e.setDate(e.getDate()-1);for(var n=0;n<4;n++)t.push(new Date(e.getTime())),e.setDate(e.getDate()+1);return t}return Object(r.useEffect)((function(){d()})),Object(j.jsxs)("main",{id:"main-container",children:[Object(j.jsxs)("nav",{class:"nav",children:[Object(j.jsx)("button",{className:"btn prev",onClick:function(){return function(){var t=new Date(o.getTime());t.setDate(t.getDate()-1),c(t)}()},children:Object(j.jsx)(s.a,{})}),Object(j.jsx)("button",{className:"btn calendar",onClick:function(){return e(!1)},children:Object(j.jsx)(l.a,{})}),Object(j.jsx)("button",{className:"btn next",onClick:function(){return function(){var t=new Date(o.getTime());t.setDate(t.getDate()+1),c(t)}()},children:Object(j.jsx)(s.b,{})})]}),Object(j.jsxs)("div",{id:"todo-app",children:[Object(j.jsx)(v,{dateProp:u[0]}),Object(j.jsx)(v,{dateProp:u[1]}),Object(j.jsx)(v,{dateProp:u[2]}),Object(j.jsx)(v,{dateProp:u[3]})]})]})},g=n(15),m=n(14);var x=function(t){var e=t.setToggle;Object(r.useEffect)((function(){setTimeout((function(){window.dispatchEvent(new Event("resize"))}),1)}));var n=function(t){var e=[];for(var n in t){var r,a=JSON.parse(t[n]),o=n.split("/").reverse().map((function(t){return t.length<2?"0"+t:t})).join("-"),c=Object(d.a)(a);try{for(c.s();!(r=c.n()).done;){var i=r.value;e.push({date:o,title:i.text,breakWord:"break-word"})}}catch(s){c.e(s)}finally{c.f()}}return e}(function(){for(var t={},e=Object.keys(localStorage),n=e.length;n--;)t[e[n]]=localStorage.getItem(e[n]);return t}());return Object(j.jsx)("div",{id:"calendar",children:Object(j.jsx)(g.a,{plugins:[m.a],initialView:"dayGridMonth",events:n,eventBorderColor:"gray",eventBackgroundColor:"#202020",eventColor:"white",fixedWeekCount:!1,height:"98vh",dayMaxEvents:!0,customButtons:{return:{text:Object(j.jsx)(l.b,{}),click:function(){return e(!0)}}},headerToolbar:{left:"prev",center:"title,return",right:"next"}})})};var p=function(){var t=Object(r.useState)(!0),e=Object(i.a)(t,2),n=e[0],a=e[1];return n?Object(j.jsx)(O,{setToggle:a}):Object(j.jsx)(x,{setToggle:a})};c.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.b7303c64.chunk.js.map