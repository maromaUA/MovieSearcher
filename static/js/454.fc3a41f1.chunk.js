"use strict";(self.webpackChunkmovie_search=self.webpackChunkmovie_search||[]).push([[454],{454:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var r=n(433),a=n(861),s=n(439),i=n(757),o=n.n(i),c=n(791),u="Reviews_listReviews__E4b6B",l="Reviews_errorMessage__tmsUf",d=n(689),h=n(243),f="ReviewItem_container__ADBE4",p="ReviewItem_date__-NoBo",m="ReviewItem_header__Unnuz",v="ReviewItem_content__LpgN7",_=n(184),g=function(e){var t=e.name,n=e.rating,r=e.content,a=e.date;return(0,_.jsxs)("div",{className:f,children:[(0,_.jsxs)("h5",{className:m,children:[(0,_.jsx)("span",{children:t})," ",(0,_.jsxs)("span",{children:[" Rating: ",n]})," "]}),(0,_.jsx)("p",{className:v,children:r}),(0,_.jsxs)("p",{className:p,children:[a.day,"-",a.month,"-",a.year]})]})},w=n(3),b=n(691),x=function(){var e=(0,c.useState)(),t=(0,s.Z)(e,2),n=t[0],i=t[1],f=(0,c.useState)("loading"),p=(0,s.Z)(f,2),m=p[0],v=p[1],x=(0,d.UO)().movieId;if((0,c.useEffect)((function(){function e(){return(e=(0,a.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.Z.get("https://api.themoviedb.org/3/movie/".concat(Number(x),"/reviews?api_key=").concat(w.$,"&language=en-US")).then((function(e){0!==e.data.results.length?(i((0,r.Z)(e.data.results)),v("resolved")):v("error")})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),"loading"===m)return(0,_.jsx)(b.ko,{height:"80",width:"80",ariaLabel:"progress-bar-loading",wrapperStyle:{},wrapperClass:"progress-bar-wrapper",borderColor:"#000000",barColor:"#000000"});if("error"===m)return(0,_.jsx)("p",{className:l,children:"There is no reviews for this film"});if("resolved"===m){var j=n.filter((function(e,t){return t<10})).map((function(e){var t=e.id,n=e.author_details,r=e.content,a=e.updated_at,s=n.username,i=n.rating,o={year:new Date(a).getFullYear(),month:new Date(a).getMonth()+1,day:new Date(a).getDate()};return(0,_.jsx)(g,{name:s,rating:i,content:r,date:o},t)}));return(0,_.jsx)("ul",{className:u,children:j})}}},3:function(e,t,n){n.d(t,{$:function(){return r}});var r="2b6f5b76cc1ed189784d28b4ff513eb4"}}]);
//# sourceMappingURL=454.fc3a41f1.chunk.js.map