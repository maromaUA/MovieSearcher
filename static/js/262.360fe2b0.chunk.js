"use strict";(self.webpackChunkmovie_search=self.webpackChunkmovie_search||[]).push([[262],{262:function(e,r,t){t.r(r),t.d(r,{default:function(){return O}});var n=t(683),a=t(861),c=t(439),i=t(757),o=t.n(i),s=t(243),u="Cast_actorsList__egZYi",l=t(791),p=t(689),f="Actor_container__-K9Gb",d="Actor_image__iwmaG",b="Actor_description__d-LVa",h="Actor_bold__l2pDg",m=t(184),g=function(e){var r=e.image,t=e.name,n=e.character;return(0,m.jsxs)("div",{className:f,children:[(0,m.jsx)("img",{className:d,src:r,alt:t}),(0,m.jsxs)("div",{className:b,children:[(0,m.jsxs)("p",{children:[(0,m.jsx)("span",{className:h,children:"Name: "}),t]}),(0,m.jsxs)("p",{children:[(0,m.jsx)("span",{className:h,children:"Character: "}),n]})]})]})},j=t(3),v=t(691),O=function(){var e=(0,l.useState)(),r=(0,c.Z)(e,2),t=r[0],i=r[1],f=(0,l.useState)("loading"),d=(0,c.Z)(f,2),b=d[0],h=d[1],O=(0,p.UO)().movieId;if((0,l.useEffect)((function(){function e(){return(e=(0,a.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("https://api.themoviedb.org/3/movie/".concat(Number(O),"/credits?api_key=").concat(j.$,"&language=en-US")).then((function(e){i((0,n.Z)({},e.data)),h("resolved")})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),"loading"===b)return(0,m.jsx)("main",{children:(0,m.jsx)(v.ko,{height:"80",width:"80",ariaLabel:"progress-bar-loading",wrapperStyle:{},wrapperClass:"progress-bar-wrapper",borderColor:"#000000",barColor:"#000000"})});if("resolved"===b){var _=t.cast.filter((function(e,r){return r<10})).map((function(e){var r=e.id,t=e.profile_path,n=e.name,a=e.character,c="http://image.tmdb.org/t/p/w200/".concat(t);return(0,m.jsx)(g,{image:c,name:n,character:a},r)}));return(0,m.jsx)("ul",{className:u,children:_})}}},3:function(e,r,t){t.d(r,{$:function(){return n}});var n="2b6f5b76cc1ed189784d28b4ff513eb4"},683:function(e,r,t){function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}t.d(r,{Z:function(){return c}})}}]);
//# sourceMappingURL=262.360fe2b0.chunk.js.map