(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2fd5488d"],{"093c":function(e,t,i){},1148:function(e,t,i){"use strict";var r=i("da84"),n=i("5926"),a=i("577e"),c=i("1d80"),s=r.RangeError;e.exports=function(e){var t=a(c(this)),i="",r=n(e);if(r<0||r==1/0)throw s("Wrong number of repetitions");for(;r>0;(r>>>=1)&&(t+=t))1&r&&(i+=t);return i}},"408a":function(e,t,i){var r=i("e330");e.exports=r(1..valueOf)},4862:function(e,t,i){},6837:function(e,t,i){"use strict";i("093c")},"6be1":function(e,t,i){"use strict";i("e856")},"9c45":function(e,t,i){"use strict";i("4862")},b680:function(e,t,i){"use strict";var r=i("23e7"),n=i("da84"),a=i("e330"),c=i("5926"),s=i("408a"),o=i("1148"),u=i("d039"),d=n.RangeError,f=n.String,m=Math.floor,h=a(o),l=a("".slice),b=a(1..toFixed),v=function(e,t,i){return 0===t?i:t%2===1?v(e,t-1,i*e):v(e*e,t/2,i)},p=function(e){var t=0,i=e;while(i>=4096)t+=12,i/=4096;while(i>=2)t+=1,i/=2;return t},j=function(e,t,i){var r=-1,n=i;while(++r<6)n+=t*e[r],e[r]=n%1e7,n=m(n/1e7)},O=function(e,t){var i=6,r=0;while(--i>=0)r+=e[i],e[i]=m(r/t),r=r%t*1e7},g=function(e){var t=6,i="";while(--t>=0)if(""!==i||0===t||0!==e[t]){var r=f(e[t]);i=""===i?r:i+h("0",7-r.length)+r}return i},w=u((function(){return"0.000"!==b(8e-5,3)||"1"!==b(.9,0)||"1.25"!==b(1.255,2)||"1000000000000000128"!==b(0xde0b6b3a7640080,0)}))||!u((function(){b({})}));r({target:"Number",proto:!0,forced:w},{toFixed:function(e){var t,i,r,n,a=s(this),o=c(e),u=[0,0,0,0,0,0],m="",b="0";if(o<0||o>20)throw d("Incorrect fraction digits");if(a!=a)return"NaN";if(a<=-1e21||a>=1e21)return f(a);if(a<0&&(m="-",a=-a),a>1e-21)if(t=p(a*v(2,69,1))-69,i=t<0?a*v(2,-t,1):a/v(2,t,1),i*=4503599627370496,t=52-t,t>0){j(u,0,i),r=o;while(r>=7)j(u,1e7,0),r-=7;j(u,v(10,r,1),0),r=t-1;while(r>=23)O(u,1<<23),r-=23;O(u,1<<r),j(u,1,1),O(u,2),b=g(u)}else j(u,0,i),j(u,1<<-t,0),b=g(u)+h("0",o);return o>0?(n=b.length,b=m+(n<=o?"0."+h("0",o-n)+b:l(b,0,n-o)+"."+l(b,n-o))):b=m+b,b}})},bb51:function(e,t,i){"use strict";i.r(t);var r=i("7a23"),n=function(e){return Object(r["N"])("data-v-60b49544"),e=e(),Object(r["L"])(),e},a={class:"home"},c=n((function(){return Object(r["i"])("h3",null,[Object(r["i"])("div",{id:"loading4"})],-1)}));function s(e,t,i,n,s,o){var u=Object(r["T"])("HelloWorld");return Object(r["K"])(),Object(r["h"])("div",a,[Object(r["m"])(u),c])}i("b0c0");var o=i("dd88"),u=i.n(o),d=function(e){return Object(r["N"])("data-v-12adb2af"),e=e(),Object(r["L"])(),e},f={class:"home-wrapper"},m=d((function(){return Object(r["i"])("div",{class:"hello"},[Object(r["i"])("img",{src:u.a})],-1)}));function h(e,t,i,n,a,c){var s=Object(r["T"])("Counter");return Object(r["K"])(),Object(r["h"])("div",f,[Object(r["i"])("h1",null,Object(r["X"])(n.currentRace.name),1),Object(r["m"])(s,{end:n.currentRace.raceStart},null,8,["end"]),m])}i("4de4"),i("d3b7");var l=i("5502"),b={class:"counter-wrapper"},v={class:"card-title"},p={class:"card-footer"};function j(e,t,i,n,a,c){return Object(r["K"])(),Object(r["h"])("div",b,[(Object(r["K"])(!0),Object(r["h"])(r["a"],null,Object(r["R"])(a.times,(function(e,t){return Object(r["K"])(),Object(r["h"])("div",{key:t,class:"card"},[Object(r["i"])("h4",v,Object(r["X"])(e.time),1),Object(r["i"])("div",p,Object(r["X"])(e.text),1)])})),128))])}i("b680");var O={name:"Counter",props:{end:{type:String,required:!0}},data:function(){return{startTime:new Date,endTime:this.end,times:[{id:0,text:"Days",time:1},{id:1,text:"Hours",time:1},{id:2,text:"Minutes",time:1},{id:3,text:"Seconds",time:1}],progress:100,timeinterval:void 0}},methods:{updateTimer:function(){this.times[3].time>0||this.times[2].time>0||this.times[1].time>0||this.times[0].time>0?(this.getTimeRemaining(),this.updateProgressBar()):(clearTimeout(this.timeinterval),this.progress=0)},getTimeRemaining:function(){var e=Date.parse(new Date(this.endTime))-Date.parse(new Date);e>=0?(this.times[3].time=Math.floor(e/1e3%60),this.times[2].time=Math.floor(e/1e3/60%60),this.times[1].time=Math.floor(e/36e5%24),this.times[0].time=Math.floor(e/864e5)):(this.times[3].time=this.times[2].time=this.times[1].time=this.times[0].time=0,this.progress=0)},updateProgressBar:function(){var e=Date.parse(new Date(this.startTime)),t=Date.parse(new Date),i=Date.parse(new Date(this.endTime)),r=parseFloat((t-e)/(i-e)*100).toFixed(2);this.progress=100-r}},created:function(){this.updateTimer(),this.timeinterval=setInterval(this.updateTimer,1e3)}},g=(i("6837"),i("6b0d")),w=i.n(g);const D=w()(O,[["render",j],["__scopeId","data-v-52def317"]]);var x=D,T={name:"HelloWorld",components:{Counter:x},setup:function(){var e=Object(r["p"])(),t=e.appContext.config.globalProperties.$dayjs,i=Object(l["b"])();i.dispatch("fetchF1datas","events");var n=Object(r["d"])((function(){return i.getters.getF1datas("events")})),a=Object(r["Q"])([]),c=function(){var e=n.value.filter((function(e){return t(new Date(e.raceStart)).format("YYYY-MM-DD")>t(new Date).format("YYYY-MM-DD")}));a.value=e.reduce((function(e,t){return new Date(t.start)>new Date(e.start)?t:e}))};return c(),{events:n,currentRace:a}}};i("9c45");const M=w()(T,[["render",h],["__scopeId","data-v-12adb2af"]]);var R=M,Y={name:"Home",components:{HelloWorld:R}};i("6be1");const F=w()(Y,[["render",s],["__scopeId","data-v-60b49544"]]);t["default"]=F},dd88:function(e,t,i){e.exports=i.p+"img/logo2.7f22341b.png"},e856:function(e,t,i){}}]);
//# sourceMappingURL=chunk-2fd5488d.fb4d0556.js.map