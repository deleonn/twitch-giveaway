(this["webpackJsonp@deleonn/twitch-giveaway"]=this["webpackJsonp@deleonn/twitch-giveaway"]||[]).push([[0],{112:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n(0),a=n.n(c),s=n(75),i=n.n(s),o=n(8),l=n.n(o),u=n(16),j=n(4),h=n(130),d=n(122),b=Object(d.a)({colors:{brand:{900:"#1a365d",800:"#153e75",700:"#2a69ac"}}}),x={isLoading:!1,isLogged:!1,currentUser:void 0,handleLogin:function(){},handleLogout:function(){}},f=a.a.createContext(x),p=n(124),g=n(12),O=n(80),v=n(123),m=n(126),w=n(125),S=n(127),y=n(131);function k(){var e=Object(c.useContext)(f),t=e.handleLogout,n=e.currentUser;return Object(r.jsxs)(v.a,{w:"100%",alignItems:"flex-start",mb:4,children:[Object(r.jsx)(p.a,{children:Object(r.jsxs)(w.a,{size:"md",children:["Welcome,",Object(r.jsx)("br",{}),Object(r.jsx)(m.a,{color:"purple.300",as:"i",children:null===n||void 0===n?void 0:n.username}),Object(r.jsx)("br",{}),"to your followers giveaway! \ud83d\udd25"]})}),Object(r.jsx)(S.a,{}),Object(r.jsx)(p.a,{children:Object(r.jsx)(y.a,{colorScheme:"red",size:"xs",onClick:t,children:"Log out"})})]})}var C=n(132);function _(){return Object(r.jsx)(v.a,{w:"inherit",h:"100vh",justifyContent:"center",alignItems:"center",children:Object(r.jsx)(C.a,{color:"purple.500",size:"xl",thickness:"4px",speed:"0.65s",emptyColor:"gray.200"})})}function L(e){var t=e.followers,n=e.total,c=e.isFetching;return Object(r.jsx)(p.a,{h:"100vh",bg:"gray.900",w:"300px",children:Object(r.jsxs)(v.a,{p:4,h:"100%",direction:"column",children:[c&&Object(r.jsx)(_,{}),!c&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(m.a,{color:"white",fontSize:"xl",mb:4,children:["You have"," ",Object(r.jsxs)(m.a,{as:"b",color:"purple.300",children:[n," followers"]})," ",n>0?"\u2764\ufe0f":"\ud83d\ude23"]}),Object(r.jsx)(p.a,{overflowY:"scroll",flex:"1",children:t.length&&t.map((function(e){return Object(r.jsx)(a.a.Fragment,{children:Object(r.jsx)(m.a,{color:"white",children:e.from_name})},e.followed_at)}))})]})]})})}var I=n(129),z=["Connecting to the private server...","Choosing the best follower...","Removing blacklisted users...","Computing results..."];function F(e){var t=e.followers,n=a.a.useState(!1),c=Object(j.a)(n,2),s=c[0],i=c[1],o=a.a.useState(!1),l=Object(j.a)(o,2),u=l[0],h=l[1],d=a.a.useState(z[0]),b=Object(j.a)(d,2),x=b[0],f=b[1],g=a.a.useState(""),O=Object(j.a)(g,2),w=O[0],S=O[1],C=function(){var e;S("");var t=0;e||(h(!0),i(!0),f(z[0]),e=setInterval((function(){t<=z.length-1?(f(z[t]),h(!1),t++):(h(!1),i(!1),f(""),clearInterval(e),e=null,_()),h(!0)}),1e3))},_=function(){var e=Math.floor(Math.random()*t.length),n=t[e];S(n.from_name)};return Object(r.jsxs)(v.a,{p:4,direction:"column",flex:1,children:[Object(r.jsx)(k,{}),Object(r.jsxs)(v.a,{flex:1,direction:"column",justifyContent:"center",alignItems:"center",children:[!w&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(y.a,{size:"lg",colorScheme:"purple",isLoading:s,onClick:C,mb:4,disabled:!t.length||s,children:"Choose a winner!"}),Object(r.jsx)(I.a,{in:u,children:Object(r.jsx)(m.a,{color:"purple.300",children:x})}),Object(r.jsx)(m.a,{children:u})]}),w&&Object(r.jsxs)(p.a,{textAlign:"center",children:[Object(r.jsxs)(I.a,{in:!!w,children:[Object(r.jsxs)(m.a,{fontSize:"4xl",children:["And the winner is..."," ",Object(r.jsxs)(m.a,{as:"span",color:"purple.600",fontWeight:"bold",children:[w,"!"]})]}),Object(r.jsx)(m.a,{fontSize:"lg",color:"purple.400",as:"i",children:"Ay!"})]}),Object(r.jsx)(y.a,{size:"sm",colorScheme:"purple",isLoading:s,onClick:C,mt:4,children:"Re-roll?"})]})]})]})}var A=n(77),U=n.n(A).a.create({timeout:1e4}),B="hcrl44m41p6p1u3lwg84suqm5d6cwi",E="https://id.twitch.tv/oauth2/authorize?client_id=".concat(B,"&redirect_uri=").concat("https://deleonn.github.io/twitch-giveaway","&response_type=").concat("token","&scope=").concat("channel:read:subscriptions user:read:email"),M=function(){var e=Object(u.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.get("https://id.twitch.tv/oauth2/validate",{headers:{Authorization:"OAuth ".concat(t)}});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(u.a)(l.a.mark((function e(t,n,r){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.get("https://api.twitch.tv/helix/users/follows",{params:{to_id:t,first:100,after:r},headers:{Authorization:"Bearer ".concat(n),"Client-Id":B}});case 2:return c=e.sent,e.abrupt("return",c.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}();var R=function(){var e=a.a.useState([]),t=Object(j.a)(e,2),n=t[0],s=t[1],i=a.a.useState(!0),o=Object(j.a)(i,2),h=o[0],d=o[1],b=a.a.useState(void 0),x=Object(j.a)(b,2),p=x[0],g=x[1],O=Object(c.useContext)(f).currentUser;a.a.useEffect((function(){w()}),[]);var m=[],w=function(){var e=Object(u.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P(null===O||void 0===O?void 0:O.user_id,null===O||void 0===O?void 0:O.access_token,t);case 2:if(n=e.sent,m.push(n.data),!n.pagination.cursor){e.next=8;break}return e.abrupt("return",w(n.pagination.cursor));case 8:g(n.total),d(!1),s(m);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)(v.a,{children:[Object(r.jsx)(L,{followers:n,total:p,isFetching:h}),Object(r.jsx)(F,{followers:n})]})},T=n(78),J=n(53),W=n(133),Y=n(81);function q(){var e=Object(T.a)(),t=e.handleSubmit,n=e.errors,c=e.formState;return Object(r.jsxs)("form",{onSubmit:t((function(){window.open(E,"_self")})),children:[Object(r.jsx)(J.a,{isInvalid:n.name,children:Object(r.jsx)(W.a,{children:n.name&&n.name.message})}),Object(r.jsx)(y.a,{mt:4,colorScheme:"purple",isLoading:c.isSubmitting,type:"submit",w:"100%",leftIcon:Object(r.jsx)(Y.a,{}),children:"Sign in with Twitch"})]})}var D=function(){return Object(r.jsx)(v.a,{bg:"gray.900",height:"100vh",justifyContent:"center",alignItems:"center",children:Object(r.jsxs)(p.a,{bg:"white",w:"400px",p:4,borderRadius:5,children:[Object(r.jsx)(m.a,{fontSize:"3xl",children:"Sign in"}),Object(r.jsxs)(m.a,{fontSize:"sm",children:["Give your followers something special \u2764\ufe0f ",Object(r.jsx)("br",{}),"Use your twitch account to get started."]}),Object(r.jsx)(q,{})]})})},G=Object(r.jsx)(g.c,{children:Object(r.jsx)(g.a,{path:"/",component:R})}),Z=Object(r.jsx)(g.c,{children:Object(r.jsx)(g.a,{path:"/",component:D})});var H=function(){var e=Object(c.useContext)(f),t=e.isLogged,n=e.isLoading;return Object(r.jsx)(O.a,{children:Object(r.jsx)(p.a,{children:n?Object(r.jsx)(_,{}):t?G:Z})})};var K=function(){var e=a.a.useState(!1),t=Object(j.a)(e,2),n=t[0],c=t[1],s=a.a.useState(!1),i=Object(j.a)(s,2),o=i[0],d=i[1],x=a.a.useState(void 0),p=Object(j.a)(x,2),g=p[0],O=p[1];a.a.useEffect((function(){d(!0);var e=document.location.hash.match(/#access_token=([a-zA-Z0-9]*)/g);if(null===e||void 0===e?void 0:e.length){var t=e[0].substring(14);(function(){var e=Object(u.a)(l.a.mark((function e(){var n,r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M(t);case 2:if(n=e.sent,r=n.login,c=n.user_id,!n){e.next=8;break}return O({user_id:c,username:r,access_token:t}),localStorage.setItem("access_token",t),e.abrupt("return",v());case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}else d(!1)}),[]);var v=function(){c(!0),d(!1),localStorage.setItem("is_logged","true")};return Object(r.jsx)(f.Provider,{value:{currentUser:g,isLogged:n,isLoading:o,handleLogin:v,handleLogout:function(){c(!1),localStorage.removeItem("is_logged"),localStorage.removeItem("access_token"),document.location.hash=""}},children:Object(r.jsx)(h.a,{theme:b,children:Object(r.jsx)(H,{})})})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,134)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};i.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(K,{})}),document.getElementById("root")),N()}},[[112,1,2]]]);
//# sourceMappingURL=main.b3829d46.chunk.js.map