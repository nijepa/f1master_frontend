(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0f42032c"],{"142e":function(e,t,n){"use strict";n.r(t);var a=n("7a23"),r={class:"wrap"};function l(e,t,n,l,c,i){var u=Object(a["T"])("BetPanel");return Object(a["K"])(),Object(a["f"])(a["c"],{name:"bounce",mode:"out-in",appear:""},{default:Object(a["kb"])((function(){return[Object(a["i"])("div",r,[Object(a["m"])(u)])]})),_:1})}var c=function(e){return Object(a["N"])("data-v-03ca254a"),e=e(),Object(a["L"])(),e},i={class:"container"},u={class:"poletime"},s=c((function(){return Object(a["i"])("h1",null,"Poletime",-1)})),o={class:"btn-wrapper"};function d(e,t,n,r,l,c){var d=Object(a["T"])("Poletime"),f=Object(a["T"])("SelectWrapper");return Object(a["K"])(),Object(a["h"])(a["a"],null,[Object(a["i"])("div",i,[Object(a["i"])("div",u,[s,Object(a["m"])(d,{"reset-all":r.resetAll},null,8,["reset-all"])]),Object(a["m"])(f,{title:"F1Masters",count:10,list:r.masters,group:"Position","reset-all":r.resetAll,class:"f1master",onConfirmed:r.handleConfirmation},null,8,["list","reset-all","onConfirmed"]),Object(a["m"])(f,{title:"Evo",count:5,list:r.masters,group:"Evo","reset-all":r.resetAll,class:"evo"},null,8,["list","reset-all"]),Object(a["m"])(f,{title:"Head",count:r.duels.length,list:r.duels,group:"Head","is-head":!0,"reset-all":r.resetAll,class:"head"},null,8,["count","list","reset-all"]),Object(a["m"])(f,{title:"Misc",count:1,list:r.misc,group:"Misc","reset-all":r.resetAll,class:"misc"},null,8,["list","reset-all"])]),Object(a["i"])("div",o,[Object(a["i"])("button",{class:"btn reset",onClick:t[0]||(t[0]=function(){return r.reset&&r.reset.apply(r,arguments)})},"Reset All"),Object(a["i"])("button",{class:"btn confirm",onClick:t[1]||(t[1]=function(){return r.handleConfirmation&&r.handleConfirmation.apply(r,arguments)})},"Confirm")]),Object(a["i"])("p",null,Object(a["X"])(r.liveBet),1)],64)}n("4de4"),n("d3b7"),n("b0c0"),n("e9c4"),n("d81d"),n("caad"),n("2532");var f=n("06bf"),v=n("9509"),b=n("38c3"),m=n("93e7"),p=n("e455"),O=n("5502"),j={components:{Poletime:f["a"],SelectWrapper:v["a"]},setup:function(){var e=Object(a["p"])(),t=e.appContext.config.globalProperties.$dayjs,n=Object(O["b"])(),r=Object(a["d"])((function(){return n.getters.getliveBet})),l=Object(a["Q"])([]),c=function(){var e=p["a"].filter((function(e){return t(e.start).format("YYYY-MM-DD")>t(new Date).format("YYYY-MM-DD")}));l.value=e.reduce((function(e,t){return new Date(e.start)>new Date(t.start)?t:e}))};c();var i=function(){if(void 0!==r.value&&r.value.Pole&&r.value.F1Masters.length&&r.value.Evo.length&&r.value.Head.length&&r.value.Misc.length){n.dispatch("liveBetUpdate",{type:"Event",value:{id:l.value.id,name:l.value.name}}),n.dispatch("liveBetUpdate",{type:"User",value:{id:0,email:"rayannezinha@f1master.com"}}),n.dispatch("liveBetUpdate",{type:"createdAt",value:new Date}),n.dispatch("fetchBets"),n.dispatch("fetchBet",r.value);var e=Object(a["d"])((function(){return n.getters.getBet}));r.value._id=e.value._id,n.dispatch("betUpdate",r.value);var t=Object(a["d"])((function(){return n.getters.getBets}));return console.log("muuu",t.value),void alert("OK - "+JSON.stringify(r.value))}alert("NOT")},u=Object(a["Q"])(!1),s=function(){u.value=!0,n.dispatch("liveBetClear"),setTimeout((function(){return u.value=!1}),0)},o=Object(a["Q"])(b["a"].map((function(e){return{id:e.id,name:e.name,number:e.number}}))),d=Object(a["Q"])([]);d.value=m["a"].map((function(e){return b["a"].filter((function(t){return e.teamName.toLocaleLowerCase().includes(t.team.toLocaleLowerCase())})).map((function(t){return{id:t.id,name:t.name,number:t.number,team:e.teamName}}))})).filter((function(e){return e.length}));var f=Object(a["Q"])([{id:0,name:"YES"},{id:1,name:"NO"}]);return{masters:o,duels:d,misc:f,reset:s,resetAll:u,liveBet:r,handleConfirmation:i}}},h=(n("9601"),n("6b0d")),g=n.n(h);const B=g()(j,[["render",d],["__scopeId","data-v-03ca254a"]]);var C=B,w={components:{BetPanel:C},setup:function(){return{BetPanel:C}}};n("9199");const D=g()(w,[["render",l],["__scopeId","data-v-aebef12a"]]);t["default"]=D},"42ce":function(e,t,n){},"8f29":function(e,t,n){},9199:function(e,t,n){"use strict";n("8f29")},9601:function(e,t,n){"use strict";n("42ce")},e9c4:function(e,t,n){var a=n("23e7"),r=n("da84"),l=n("d066"),c=n("2ba4"),i=n("e330"),u=n("d039"),s=r.Array,o=l("JSON","stringify"),d=i(/./.exec),f=i("".charAt),v=i("".charCodeAt),b=i("".replace),m=i(1..toString),p=/[\uD800-\uDFFF]/g,O=/^[\uD800-\uDBFF]$/,j=/^[\uDC00-\uDFFF]$/,h=function(e,t,n){var a=f(n,t-1),r=f(n,t+1);return d(O,e)&&!d(j,r)||d(j,e)&&!d(O,a)?"\\u"+m(v(e,0),16):e},g=u((function(){return'"\\udf06\\ud834"'!==o("\udf06\ud834")||'"\\udead"'!==o("\udead")}));o&&a({target:"JSON",stat:!0,forced:g},{stringify:function(e,t,n){for(var a=0,r=arguments.length,l=s(r);a<r;a++)l[a]=arguments[a];var i=c(o,null,l);return"string"==typeof i?b(i,p,h):i}})}}]);
//# sourceMappingURL=chunk-0f42032c.0fdadb4f.js.map