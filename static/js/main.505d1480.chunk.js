(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],[,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(7),i=c.n(a),l=(c(13),c(14),c(6)),o=(c(15),c(0)),r=function(e){var t=e.item;return console.log(t),Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"listrow-container",children:[Object(o.jsx)("div",{className:"task",children:t.task}),Object(o.jsxs)("div",{className:"options",children:[Object(o.jsxs)("div",{className:"edit",children:[" ",Object(o.jsx)(l.b,{})," "]}),Object(o.jsx)("div",{className:"delete",children:Object(o.jsx)(l.a,{})})]})]})})},d=(c(17),c(8)),j=c(4),b=Object(n.createContext)(),u=function(e){var t=Object(n.useState)([{task:"plant trees",id:1},{task:"buy vegetables",id:2},{task:"visit office",id:3}]),c=Object(j.a)(t,2),s=c[0],a=c[1];return Object(o.jsx)(b.Provider,{value:{list:s,addTask:function(e){a([].concat(Object(d.a)(s),[{task:e,id:Math.floor(100*Math.random())}])),console.log("task added successfully")},clearAll:function(){a([])}},children:e.children})},O=(c(18),function(){var e=Object(n.useContext)(b),t=e.addTask,c=e.clearAll,s=Object(n.useState)(""),a=Object(j.a)(s,2),i=a[0],l=a[1];return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"searchbar-container",children:Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log("submited successfully : ".concat(i)),t(i),l("")},children:[Object(o.jsx)("input",{type:"text",placeholder:"add new task..",value:i,onChange:function(e){l(e.target.value)},required:!0}),Object(o.jsxs)("div",{className:"buttons",children:[Object(o.jsx)("button",{type:"submit",className:"btn-add",children:"Add"}),Object(o.jsx)("button",{type:"reset",className:"btn-clear",onClick:function(){c()},children:"Clear"})]})]})})})}),h=function(){var e=Object(n.useContext)(b).list;return console.log(e),Object(o.jsx)("div",{className:"todolist-container",children:Object(o.jsxs)("div",{className:"todolist-content",children:[Object(o.jsx)("h1",{style:{color:"black"},children:"Todo"}),Object(o.jsx)(O,{}),e.length?Object(o.jsx)(o.Fragment,{children:e.map((function(e){return Object(o.jsx)(r,{item:e},e.id)}))}):Object(o.jsx)("div",{className:"empty-list",children:"Wohoo ! No list available"})]})})};var x=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(h,{})})};i.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(u,{children:Object(o.jsx)(x,{})})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.505d1480.chunk.js.map