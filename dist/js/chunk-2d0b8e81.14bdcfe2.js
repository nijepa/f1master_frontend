(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b8e81"],{"314a":function(e,t,s){"use strict";s.r(t);s("b0c0");var r=s("7a23"),a={class:"wrap"},c={class:"auth-card"},n={class:"header"},i={class:"title"},l={class:"links"},b=Object(r["i"])("a",null,"Back",-1),o={class:"inputs"},u={class:"input-field"},d=Object(r["i"])("span",null,"First Name",-1),p={key:0,class:"error-msg"},O={class:"input-field"},j=Object(r["i"])("span",null,"Last Name",-1),m={key:0,class:"error-msg"},g={class:"input-field"},v=Object(r["i"])("span",null,"E-mail",-1),w={key:0,class:"error-msg"},f={class:"input-field"},$=Object(r["i"])("span",null,"Password",-1),h={key:0,class:"error-msg"},k={class:"input-field"},y=Object(r["i"])("span",null,"Repeat password",-1),R={key:0,class:"error-msg"},L={class:"keepCon"},x=Object(r["i"])("label",{for:"keep"},"By clicking 'Confirm' you accept the terms and conditions",-1);function K(e,t,s,K,U,V){var X=Object(r["T"])("router-link");return Object(r["K"])(),Object(r["h"])("div",a,[Object(r["i"])("div",c,[Object(r["i"])("div",n,[Object(r["i"])("div",i,[Object(r["i"])("h4",null,Object(r["X"])(K.state.formName),1)]),Object(r["i"])("div",l,[Object(r["m"])(X,{to:"/superlicense"},{default:Object(r["kb"])((function(){return[b]})),_:1})])]),Object(r["i"])("div",o,[Object(r["i"])("div",u,[Object(r["i"])("label",null,[Object(r["lb"])(Object(r["i"])("input",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return K.state.name=e}),type:"text",placeholder:"",class:""},null,512),[[r["gb"],K.state.name]]),d]),K.v$.name.$error?(Object(r["K"])(),Object(r["h"])("span",p,Object(r["X"])(K.v$.name.$errors[0].$message),1)):Object(r["g"])("",!0)]),Object(r["i"])("div",O,[Object(r["i"])("label",null,[Object(r["lb"])(Object(r["i"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return K.state.surname=e}),type:"text",placeholder:"",class:""},null,512),[[r["gb"],K.state.surname]]),j]),K.v$.surname.$error?(Object(r["K"])(),Object(r["h"])("span",m,Object(r["X"])(K.v$.surname.$errors[0].$message),1)):Object(r["g"])("",!0)]),Object(r["i"])("div",g,[Object(r["i"])("label",null,[Object(r["lb"])(Object(r["i"])("input",{"onUpdate:modelValue":t[2]||(t[2]=function(e){return K.state.emailRegister=e}),type:"email",placeholder:"",class:"emailRegister"},null,512),[[r["gb"],K.state.emailRegister]]),v]),K.v$.emailRegister.$error?(Object(r["K"])(),Object(r["h"])("span",w,Object(r["X"])(K.v$.emailRegister.$errors[0].$message),1)):Object(r["g"])("",!0)]),Object(r["i"])("div",f,[Object(r["i"])("label",null,[Object(r["lb"])(Object(r["i"])("input",{"onUpdate:modelValue":t[3]||(t[3]=function(e){return K.state.password.password=e}),type:"password",placeholder:"",class:"password"},null,512),[[r["gb"],K.state.password.password]]),$]),K.v$.password.password.$error?(Object(r["K"])(),Object(r["h"])("span",h,Object(r["X"])(K.v$.password.password.$errors[0].$message),1)):Object(r["g"])("",!0)]),Object(r["i"])("div",k,[Object(r["i"])("label",null,[Object(r["lb"])(Object(r["i"])("input",{"onUpdate:modelValue":t[4]||(t[4]=function(e){return K.state.password.confirm=e}),type:"password",placeholder:"",class:"password"},null,512),[[r["gb"],K.state.password.confirm]]),y]),K.v$.password.confirm.$error?(Object(r["K"])(),Object(r["h"])("span",R,Object(r["X"])(K.v$.password.confirm.$errors[0].$message),1)):Object(r["g"])("",!0)])]),Object(r["i"])("div",L,[Object(r["lb"])(Object(r["i"])("input",{id:"keep",type:"checkbox",class:"checkbox","onUpdate:modelValue":t[5]||(t[5]=function(e){return K.state.aceptTerms=e})},null,512),[[r["db"],K.state.aceptTerms]]),x]),Object(r["i"])("button",{onClick:t[6]||(t[6]=Object(r["nb"])((function(){return K.submitForm&&K.submitForm.apply(K,arguments)}),["prevent"]))},"CONFIRM")])])}var U=s("25a0"),V=s("e3e1"),X={setup:function(){var e=Object(r["O"])({emailRegister:"",name:"",surname:"",password:{password:"",confirm:""},aceptTerms:!1,formName:"Register"}),t=Object(r["d"])((function(){return{name:{required:V["d"],minLength:Object(V["c"])(2),maxLength:Object(V["b"])(15)},surname:{required:V["d"],minLength:Object(V["c"])(2),maxLength:Object(V["b"])(15)},emailRegister:{required:V["d"],email:V["a"],minLength:Object(V["c"])(3)},password:{password:{required:V["d"],minLength:Object(V["c"])(6)},confirm:{required:V["d"],sameAs:Object(V["e"])(e.password.password)}}}})),s=Object(U["a"])(t,e);function a(){this.v$.$validate(),this.v$.$error?alert("check errors!!!"):alert("its ok")}return{state:e,v$:s,submitForm:a}}},q=s("6b0d"),F=s.n(q);const N=F()(X,[["render",K]]);t["default"]=N}}]);
//# sourceMappingURL=chunk-2d0b8e81.14bdcfe2.js.map