(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{48:function(e,t,n){e.exports=n(95)},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(41),l=n(8),i=n(22),o=n(23),s=n(26),u=n(24),m=n(27),E=n(32),d=n(18),p=n(98),f=n(99),h=(n(66),function(e){return r.a.createElement("div",{className:"banner"},r.a.createElement("div",{className:"banner__content"},r.a.createElement("h1",{className:"banner__header"},r.a.createElement("span",{className:"banner__header--red"},e.highlighted_title),e.title),r.a.createElement(b,null),r.a.createElement("article",{className:"banner__intro"},r.a.createElement("h2",{className:"banner__intro_title f2-ns"},e.intro_title),r.a.createElement("p",{className:"banner_intro_paragraph"},e.intro_paragraph))))}),_=(n(67),function(e){return r.a.createElement("figure",{className:"card"},r.a.createElement("figcaption",{className:"card__content"},r.a.createElement("h3",{className:"card__title"},e.title),r.a.createElement("div",{className:"card__line"}),r.a.createElement("p",{className:"card__paragraph"},e.paragraph)))}),b=(n(68),function(){return r.a.createElement("hr",{className:"separator"})});n(69);var v=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement(g,null,r.a.createElement("div",{className:"cf footer__content"},r.a.createElement("div",{className:"fl w-two-thirds-ns"},r.a.createElement("br",null)),r.a.createElement("div",{className:"fl w-third-ns"},r.a.createElement("span",null,"Get In Touch: "),r.a.createElement("a",{className:"footer__link",href:"mailto:hi@xibitdigital.com"},"hi@xibitdigital.com"),r.a.createElement("br",null),r.a.createElement("span",null,"\xa92019 All rights reserved")))))},g=(n(70),function(e){var t=e.center?" gutter gutter--center":"gutter";return r.a.createElement("div",{className:t},e.children)}),O=(n(71),function(e){return r.a.createElement("div",{className:"section"},e.children)}),w=(n(72),function(e){return r.a.createElement("div",{className:"section__header f2-ns"},e.title)}),T=(n(73),function(e){return r.a.createElement("ul",{className:"list pl0 mt2 cf client-list"},e.items.map(function(e,t){return r.a.createElement("li",{key:t,className:"fl w-third-ns client-list__item"},e)}))}),j=(n(74),function(e){return r.a.createElement("ul",{className:"list pl0 mt2 cf service-list"},e.items.map(function(e,t){return r.a.createElement("li",{key:t,className:"service-list__item"},r.a.createElement(_,e))}))}),S=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return a.createElement(a.Fragment,null,a.createElement(O,null,a.createElement(g,{center:!0},a.createElement(h,{highlighted_title:"Xibit",title:"Digital",intro_title:"Who we are",intro_paragraph:"Creative, results driven technology leaders with years of proven R&D experience. Change agent and problem solver with a passion for technology; skilled in grasping the big picture new ideas and concepts, conceptualizing, developing, and implementing solutions and partnering closely with business leaders."}))),a.createElement(O,null,a.createElement(g,null,a.createElement(j,{items:[{title:"Consultancy"},{title:"Development"},{title:"DevOps"}]}))),a.createElement(O,null,a.createElement(g,null,a.createElement(w,{title:"Clients"}),a.createElement(T,{items:["Home Office","Dna-E","EY","Lloyds Bank","Trade Doubler","MTV","O2","Upcast","Da Travel"]}))),a.createElement(v,null))}}]),t}(a.Component),C=function(){return a.createElement(p.a,null,a.createElement(f.a,{path:"/",component:S}))},N=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.store,n=e.history;return a.createElement(a.Fragment,null,a.createElement(E.Provider,{store:t},a.createElement(d.ConnectedRouter,{history:n},a.createElement(C,null))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var y=n(12),R=n(47),k=n(45),x=n(13),F=n.n(x),I=n(11),H=n(28),L=function(e){return Object(H.action)(W.FETCH_LIST_SUCCESS,e)},U=function(e){return Object(H.action)(W.FETCH_LIST_ERROR,e)},D=n(29),Q={data:{},errors:void 0,loading:!1,updating:!1},W={FETCH_LIST_REQUEST:"@@home/FETCH_LIST_REQUEST",FETCH_LIST_SUCCESS:"@@home/FETCH_LIST_SUCCESS",FETCH_LIST_ERROR:"@@home/FETCH_LIST_ERROR"},B=n(46),M=n.n(B),A="";function J(e){return M.a.get("".concat(A))}var z=F.a.mark(V),G=F.a.mark(X),P=F.a.mark(Y);function V(e){var t,n;return F.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(I.b)(J,e);case 3:return t=a.sent,n=t?t.data:{},a.next=7,Object(I.d)(L(n));case 7:a.next=18;break;case 9:if(a.prev=9,a.t0=a.catch(0),!(a.t0 instanceof Error)){a.next=16;break}return a.next=14,Object(I.d)(U(a.t0.stack));case 14:a.next=18;break;case 16:return a.next=18,Object(I.d)(U("An unknown error occurred."));case 18:case"end":return a.stop()}},z,null,[[0,9]])}function X(){return F.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(I.e)(W.FETCH_LIST_REQUEST,V);case 2:case"end":return e.stop()}},G)}function Y(){return F.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(I.a)([Object(I.c)(X)]);case 2:case"end":return e.stop()}},P)}var $=Y,q=F.a.mark(Z),K=Object(y.combineReducers)({home:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case W.FETCH_LIST_REQUEST:return Object(D.a)({},e,{loading:!0});case W.FETCH_LIST_SUCCESS:return Object(D.a)({},e,{loading:!1,data:t.payload});case W.FETCH_LIST_ERROR:return Object(D.a)({},e,{loading:!1,errors:t.payload});default:return e}}});function Z(){return F.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(I.a)([Object(I.c)($)]);case 2:case"end":return e.stop()}},q)}var ee=Object(l.a)(),te=function(e,t){var n=Object(k.composeWithDevTools)({}),a=Object(R.a)(),r=Object(y.createStore)(Object(d.connectRouter)(e)(K),t,n(Object(y.applyMiddleware)(Object(d.routerMiddleware)(e),a)));return a.run(Z),r}(ee,window.initialReduxState);c.render(a.createElement(N,{store:te,history:ee}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[48,1,2]]]);
//# sourceMappingURL=main.760d57d2.chunk.js.map