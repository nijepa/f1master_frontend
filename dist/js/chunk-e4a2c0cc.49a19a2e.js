(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e4a2c0cc"],{1984:function(e,t,n){},2071:function(e,t,n){},2532:function(e,t,n){"use strict";var r=n("23e7"),c=n("e330"),i=n("5a34"),u=n("1d80"),a=n("577e"),o=n("ab13"),s=c("".indexOf);r({target:"String",proto:!0,forced:!o("includes")},{includes:function(e){return!!~s(a(u(this)),a(i(e)),arguments.length>1?arguments[1]:void 0)}})},"25f0":function(e,t,n){"use strict";var r=n("e330"),c=n("5e77").PROPER,i=n("6eeb"),u=n("825a"),a=n("3a9b"),o=n("577e"),s=n("d039"),d=n("ad6d"),l="toString",f=RegExp.prototype,b=f[l],p=r(d),v=s((function(){return"/a/b"!=b.call({source:"a",flags:"b"})})),O=c&&b.name!=l;(v||O)&&i(RegExp.prototype,l,(function(){var e=u(this),t=o(e.source),n=e.flags,r=o(void 0===n&&a(f,e)&&!("flags"in f)?p(e):n);return"/"+t+"/"+r}),{unsafe:!0})},"408a":function(e,t,n){var r=n("e330");e.exports=r(1..valueOf)},"44e7":function(e,t,n){var r=n("861d"),c=n("c6b6"),i=n("b622"),u=i("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[u])?!!t:"RegExp"==c(e))}},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,n){var r=n("e330"),c=n("1d80"),i=n("577e"),u=n("5899"),a=r("".replace),o="["+u+"]",s=RegExp("^"+o+o+"*"),d=RegExp(o+o+"*$"),l=function(e){return function(t){var n=i(c(t));return 1&e&&(n=a(n,s,"")),2&e&&(n=a(n,d,"")),n}};e.exports={start:l(1),end:l(2),trim:l(3)}},"5a34":function(e,t,n){var r=n("da84"),c=n("44e7"),i=r.TypeError;e.exports=function(e){if(c(e))throw i("The method doesn't accept regular expressions");return e}},"77f5":function(e,t,n){"use strict";var r=n("7a23"),c={class:"card"};function i(e,t,n,i,u,a){var o=Object(r["S"])("maska");return Object(r["I"])(),Object(r["h"])("div",c,[Object(r["kb"])(Object(r["i"])("input",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return i.selected=e}),disable:!1,placeholder:"0'00'000",onChange:t[1]||(t[1]=function(e){return i.setSelected(e)})},null,544),[[r["eb"],i.selected],[o,i.mask]])])}var u={props:{reseted:{type:Boolean,default:!1}},setup:function(e,t){var n=t.emit,c="#'##'###",i=Object(r["O"])(null),u=function(e){n("select",e.target.value)};return Object(r["hb"])((function(){return e.reseted}),(function(){i.value="",n("cleared")})),{selected:i,setSelected:u,mask:c}}},a=(n("935d"),n("6b0d")),o=n.n(a);const s=o()(u,[["render",i],["__scopeId","data-v-8dc91c0c"]]);t["a"]=s},"81d5":function(e,t,n){"use strict";var r=n("7b0b"),c=n("23cb"),i=n("07fa");e.exports=function(e){var t=r(this),n=i(t),u=arguments.length,a=c(u>1?arguments[1]:void 0,n),o=u>2?arguments[2]:void 0,s=void 0===o?n:c(o,n);while(s>a)t[a++]=e;return t}},"935d":function(e,t,n){"use strict";n("2071")},"94ab":function(e,t,n){"use strict";n("95d5")},9509:function(e,t,n){"use strict";var r=n("7a23"),c={class:"cont"},i={key:0},u={key:3,class:"btn reset-btn"};function a(e,t,n,a,o,s){var d=Object(r["R"])("sel-comp");return Object(r["I"])(),Object(r["h"])("div",c,[n.title?(Object(r["I"])(),Object(r["h"])("h1",i,Object(r["V"])(n.title),1)):Object(r["g"])("",!0),n.isHead?(Object(r["I"])(!0),Object(r["h"])(r["a"],{key:1},Object(r["P"])(a.items.length,(function(e){return Object(r["I"])(),Object(r["h"])("div",{key:e,class:"select-wrapper"},[Object(r["m"])(d,{items:a.items[e-1],idx:e-1,reseted:a.reseted,group:n.group,onSelect:a.getSelected,onCleared:t[0]||(t[0]=function(e){return a.reseted=!1})},null,8,["items","idx","reseted","group","onSelect"])])})),128)):(Object(r["I"])(!0),Object(r["h"])(r["a"],{key:2},Object(r["P"])(a.maxArray.length,(function(e,c){return Object(r["I"])(),Object(r["h"])("div",{key:c,class:"select-wrapper"},[Object(r["m"])(d,{items:a.getItems,idx:c,reseted:a.reseted,group:n.group,onSelect:a.getSelected,onCleared:t[1]||(t[1]=function(e){return a.reseted=!1})},null,8,["items","idx","reseted","group","onSelect"])])})),128)),n.resetBtn?(Object(r["I"])(),Object(r["h"])("div",u,[Object(r["i"])("button",{class:"reset",onClick:t[2]||(t[2]=function(){return a.reset&&a.reset.apply(a,arguments)})},"Reset")])):Object(r["g"])("",!0)])}var o=n("2909"),s=(n("a9e3"),n("cb29"),n("4de4"),n("d3b7"),n("c740"),n("b0c0"),{class:"card"}),d={class:"driver-position"},l={key:0,disabled:"",value:"0"},f={key:1,disabled:"",value:"0"},b=["value"],p={key:2},v={style:{color:"yellow"}},O={class:"driver-nr"};function j(e,t,n,c,i,u){return Object(r["I"])(),Object(r["h"])("div",s,[Object(r["i"])("span",d,Object(r["V"])(c.position),1),Object(r["kb"])(Object(r["i"])("select",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return c.selected=e}),class:"round",onChange:t[1]||(t[1]=function(e){return c.setSelected(e,n.idx)})},["Head"===n.group?(Object(r["I"])(),Object(r["h"])("option",l,Object(r["V"])(n.items[0].team),1)):(Object(r["I"])(),Object(r["h"])("option",f,Object(r["V"])(n.group)+" "+Object(r["V"])(n.idx+1),1)),(Object(r["I"])(!0),Object(r["h"])(r["a"],null,Object(r["P"])(n.items,(function(e){return Object(r["I"])(),Object(r["h"])("option",{key:e.id,value:e.name},Object(r["V"])(c.showItem(e.id)),9,b)})),128)),c.selected?(Object(r["I"])(),Object(r["h"])("option",p,[Object(r["i"])("h3",v,Object(r["V"])(c.selected),1)])):Object(r["g"])("",!0)],544),[[r["db"],c.selected]]),Object(r["i"])("span",O,Object(r["V"])(c.nr),1)])}n("caad"),n("2532"),n("25f0"),n("7db0"),n("99af");var g={props:{items:{type:Array,required:!0},idx:{type:Number,required:!0},reseted:{type:Boolean,default:!1},group:{type:String,required:!0}},setup:function(e,t){var n=t.emit,c=Object(r["d"])((function(){var t=e.idx+1;if(e.group.includes("Position"))return t<10?0+t.toString():t})),i=Object(r["O"])(0),u=function(t,r){var c=e.items.find((function(e){return e.name.includes(t.target.value)}));void 0!==c.number?a.value="#"+c.number:a.value=null,n("select",{idx:r,id:c.id,val:t.target.value})},a=Object(r["O"])(null),o=function(t){return void 0!==e.items[0].number?"".concat(e.items[t].name,"#").concat(e.items[t].number):e.items[t].name},s=function(t){var n=e.items.findIndex((function(e){return e.id===t}));return o(n)},d=function(){var t=e.items.findIndex((function(e){return e.val===i.value}));return o(t)};return Object(r["hb"])((function(){return e.reseted}),(function(){i.value=0,a.value=null,n("cleared")})),{position:c,selected:i,nr:a,setSelected:u,showItem:s,showSelected:d,getNr:o}}},m=(n("fbee"),n("6b0d")),h=n.n(m);const y=h()(g,[["render",j],["__scopeId","data-v-2548da03"]]);var I=y,x=n("5502"),S={components:{selComp:I},props:{count:{type:Number,required:!0},list:{type:Array,required:!0},title:{type:String,default:""},group:{type:String,required:!0},isHead:{type:Boolean,default:!1},resetAll:{type:Boolean,default:!1},resetBtn:{type:Boolean,default:!0}},setup:function(e){var t=Object(x["b"])(),n=Object(r["O"])(Array(e.count).fill("")),c=Object(r["O"])(e.list),i=Object(r["d"])((function(){return c.value.filter((function(e){return!u.value.some((function(t){return t.id===e.id}))}))})),u=Object(r["O"])([]),a=function(e){var t,n,r=u.value.filter((function(t){return t.idx===e.idx}));if(r.length||(null===(t=r[0])||void 0===t?void 0:t.id)===e.id||(null===(n=r[0])||void 0===n?void 0:n.val)===e.val){if(r[0].idx===e.idx&&r[0].val!==e.val){var c=u.value.findIndex((function(t){return t.idx===e.idx}));u.value[c].val=e.val,u.value[c].id=e.id}}else u.value.push(e)},s=Object(r["O"])(!1),d=function(){u.value=[],s.value=!0};return Object(r["hb"])((function(){return e.resetAll}),(function(e){e&&d()})),Object(r["hb"])((function(){return Object(o["a"])(u.value)}),(function(n){t.dispatch("liveBetUpdate",{type:e.title,value:n})})),{items:c,getItems:i,maxArray:n,selected:u,getSelected:a,reseted:s,reset:d,confirm:confirm}}};n("94ab");const N=h()(S,[["render",a],["__scopeId","data-v-1dc0b89d"]]);t["a"]=N},"95d5":function(e,t,n){},a9e3:function(e,t,n){"use strict";var r=n("83ab"),c=n("da84"),i=n("e330"),u=n("94ca"),a=n("6eeb"),o=n("1a2d"),s=n("7156"),d=n("3a9b"),l=n("d9b5"),f=n("c04e"),b=n("d039"),p=n("241c").f,v=n("06cf").f,O=n("9bf2").f,j=n("408a"),g=n("58a8").trim,m="Number",h=c[m],y=h.prototype,I=c.TypeError,x=i("".slice),S=i("".charCodeAt),N=function(e){var t=f(e,"number");return"bigint"==typeof t?t:k(t)},k=function(e){var t,n,r,c,i,u,a,o,s=f(e,"number");if(l(s))throw I("Cannot convert a Symbol value to a number");if("string"==typeof s&&s.length>2)if(s=g(s),t=S(s,0),43===t||45===t){if(n=S(s,2),88===n||120===n)return NaN}else if(48===t){switch(S(s,1)){case 66:case 98:r=2,c=49;break;case 79:case 111:r=8,c=55;break;default:return+s}for(i=x(s,2),u=i.length,a=0;a<u;a++)if(o=S(i,a),o<48||o>c)return NaN;return parseInt(i,r)}return+s};if(u(m,!h(" 0o1")||!h("0b1")||h("+0x1"))){for(var E,A=function(e){var t=arguments.length<1?0:h(N(e)),n=this;return d(y,n)&&b((function(){j(n)}))?s(Object(t),n,A):t},w=r?p(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),V=0;w.length>V;V++)o(h,E=w[V])&&!o(A,E)&&O(A,E,v(h,E));A.prototype=y,y.constructor=A,a(c,m,A)}},ab13:function(e,t,n){var r=n("b622"),c=r("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[c]=!1,"/./"[e](t)}catch(r){}}return!1}},c740:function(e,t,n){"use strict";var r=n("23e7"),c=n("b727").findIndex,i=n("44d2"),u="findIndex",a=!0;u in[]&&Array(1)[u]((function(){a=!1})),r({target:"Array",proto:!0,forced:a},{findIndex:function(e){return c(this,e,arguments.length>1?arguments[1]:void 0)}}),i(u)},caad:function(e,t,n){"use strict";var r=n("23e7"),c=n("4d64").includes,i=n("44d2");r({target:"Array",proto:!0},{includes:function(e){return c(this,e,arguments.length>1?arguments[1]:void 0)}}),i("includes")},cb29:function(e,t,n){var r=n("23e7"),c=n("81d5"),i=n("44d2");r({target:"Array",proto:!0},{fill:c}),i("fill")},fbee:function(e,t,n){"use strict";n("1984")}}]);
//# sourceMappingURL=chunk-e4a2c0cc.49a19a2e.js.map