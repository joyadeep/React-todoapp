(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),s=n(7),a=n.n(s),r=(n(13),n(14),n(6)),o=n(8),d=n(3),l=n(0),j=Object(c.createContext)(),u=function(e){var t=Object(c.useState)([]),n=Object(d.a)(t,2),i=n[0],s=n[1],a=Object(c.useState)(null),r=Object(d.a)(a,2),u=r[0],b=r[1];return Object(l.jsx)(j.Provider,{value:{list:i,addTask:function(e){s([].concat(Object(o.a)(i),[{task:e,id:Math.floor(1e3*Math.random())}]))},clearAll:function(){s([])},removeTask:function(e){s(i.filter((function(t){return t.id!==e})))},edit:u,findTask:function(e){var t=i.find((function(t){return t.id===e}));b(t)},editTask:function(e,t){var n=i.map((function(n){return n.id===t?{task:e,id:t}:n}));s(n),b(null)}},children:e.children})},b=(n(16),function(e){var t=e.item,n=Object(c.useContext)(j),i=n.removeTask,s=n.findTask;return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"listrow-container",children:[Object(l.jsx)("div",{className:"task",children:t.task}),Object(l.jsxs)("div",{className:"options",children:[Object(l.jsxs)("div",{className:"edit",onClick:function(){s(t.id)},children:[" ",Object(l.jsx)(r.b,{})," "]}),Object(l.jsx)("div",{className:"delete",onClick:function(){i(t.id)},children:Object(l.jsx)(r.a,{})})]})]})})}),O=(n(17),n(18),function(){var e=Object(c.useContext)(j),t=e.addTask,n=e.clearAll,i=e.edit,s=e.editTask,a=Object(c.useState)(""),r=Object(d.a)(a,2),o=r[0],u=r[1];return Object(c.useEffect)((function(){u(i?i.task:"")}),[i]),Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"searchbar-container",children:Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),i?s(o,i.id):(t(o),u(""))},children:[Object(l.jsx)("input",{type:"text",placeholder:"add new task..",value:o,onChange:function(e){u(e.target.value)},required:!0}),Object(l.jsxs)("div",{className:"buttons",children:[Object(l.jsxs)("button",{type:"submit",className:"btn-add",children:[" ",i?"Edit":"Add"," "]}),Object(l.jsx)("button",{type:"reset",className:"btn-clear",onClick:function(){n()},children:"Clear"})]})]})})})}),f=function(){var e=Object(c.useContext)(j),t=e.list;e.removeTask;return Object(l.jsx)("div",{className:"todolist-container",children:Object(l.jsxs)("div",{className:"todolist-content",children:[Object(l.jsx)("h1",{style:{color:"black"},children:"Todo"}),Object(l.jsx)(O,{}),t.length?Object(l.jsx)(l.Fragment,{children:t.map((function(e){return Object(l.jsx)(b,{item:e},e.id)}))}):Object(l.jsx)("div",{className:"empty-list",children:"Wohoo ! No task available"})]})})};var h=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(f,{})})};a.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(u,{children:Object(l.jsx)(h,{})})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.103cbc4a.chunk.js.map