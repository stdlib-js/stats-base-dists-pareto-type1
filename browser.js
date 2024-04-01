// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty;function e(r){return"number"==typeof r}function n(r){var t,e="";for(t=0;t<r;t++)e+="0";return e}function i(r,t,e){var i=!1,a=t-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=e?r+n(a):n(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var t,n,u;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!e(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==t)&&(u=4294967295+u+1),u<0?(n=(-u).toString(t),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(t),u||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===t&&(r.alternate&&(n="0x"+n),n=r.specifier===o.call(r.specifier)?o.call(n):a.call(n)),8===t&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var f=Math.abs,c=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,l=/e\+(\d)$/,h=/e-(\d)$/,y=/^(\d+)$/,g=/^(\d+)e/,d=/\.0$/,v=/\.0*e/,b=/(\..*[^0])0*e/;function w(r){var t,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!e(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((t=r.precision)>0&&(t-=1),n=i.toExponential(t)):n=i.toPrecision(r.precision),r.alternate||(n=p.call(n,b,"$1e"),n=p.call(n,v,"e"),n=p.call(n,d,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,l,"e+0$1"),n=p.call(n,h,"e-0$1"),r.alternate&&(n=p.call(n,y,"$1."),n=p.call(n,g,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):c.call(n)}function m(r){var t,e="";for(t=0;t<r;t++)e+=" ";return e}var N=String.fromCharCode,A=isNaN,_=Array.isArray;function E(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function S(r){var t,e,n,a,o,f,c,s,p,l,h,y,g;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",c=1,s=0;s<r.length;s++)if("string"==typeof(n=r[s]))f+=n;else{if(t=void 0!==n.precision,!(n=E(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),e=n.flags,p=0;p<e.length;p++)switch(a=e.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,A(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,A(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=t?n.precision:-1;break;case"c":if(!A(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=A(o)?String(n.arg):N(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(l=n.arg,h=n.width,y=n.padRight,g=void 0,(g=h-l.length)<0?l:l=y?l+m(g):m(g)+l)),f+=n.arg||"",c+=1}return f}var U=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function j(r){var t,e,n,i;for(e=[],i=0,n=U.exec(r);n;)(t=r.slice(i,U.lastIndex-n[0].length)).length&&e.push(t),e.push(k(n)),i=U.lastIndex,n=U.exec(r);return(t=r.slice(i)).length&&e.push(t),e}function I(r){var t,e;if("string"!=typeof r)throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=[j(r)],e=1;e<arguments.length;e++)t.push(arguments[e]);return S.apply(null,t)}var x=Object.prototype,T=x.toString,F=x.__defineGetter__,V=x.__defineSetter__,O=x.__lookupGetter__,P=x.__lookupSetter__,$=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,e){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===T.call(r))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===T.call(e))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((i="value"in e)&&(O.call(r,t)||P.call(r,t)?(n=r.__proto__,r.__proto__=x,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),a="get"in e,o="set"in e,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&F&&F.call(r,t,e.get),o&&V&&V.call(r,t,e.set),r};function G(r,t,e){$(r,t,{configurable:!1,enumerable:!0,writable:!1,value:e})}function H(r,t,e){$(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function W(r){return r!=r}var C=Math.floor;function L(r){return C(r)===r}function M(r){return L(r/2)}function R(r){return M(r>0?r-1:r+1)}var Z=Number.POSITIVE_INFINITY,q=Number,X=q.NEGATIVE_INFINITY;function Y(r){return r===Z||r===X}var z=Math.sqrt;function B(r){return Math.abs(r)}var D="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function J(){return D&&"symbol"==typeof Symbol.toStringTag}var K,Q=Object.prototype.toString,rr=Object.prototype.hasOwnProperty,tr="function"==typeof Symbol?Symbol:void 0,er="function"==typeof tr?tr.toStringTag:"",nr=J()?function(r){var t,e,n,i,a;if(null==r)return Q.call(r);e=r[er],a=er,t=null!=(i=r)&&rr.call(i,a);try{r[er]=void 0}catch(t){return Q.call(r)}return n=Q.call(r),t?r[er]=e:delete r[er],n}:function(r){return Q.call(r)},ir="function"==typeof Uint32Array,ar="function"==typeof Uint32Array?Uint32Array:null,or="function"==typeof Uint32Array?Uint32Array:void 0;K=function(){var r,t,e;if("function"!=typeof ar)return!1;try{t=new ar(t=[1,3.14,-3.14,4294967296,4294967297]),e=t,r=(ir&&e instanceof Uint32Array||"[object Uint32Array]"===nr(e))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?or:function(){throw new Error("not implemented")};var ur,fr=K,cr="function"==typeof Float64Array,sr="function"==typeof Float64Array?Float64Array:null,pr="function"==typeof Float64Array?Float64Array:void 0;ur=function(){var r,t,e;if("function"!=typeof sr)return!1;try{t=new sr([1,3.14,-3.14,NaN]),e=t,r=(cr&&e instanceof Float64Array||"[object Float64Array]"===nr(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?pr:function(){throw new Error("not implemented")};var lr,hr=ur,yr="function"==typeof Uint8Array,gr="function"==typeof Uint8Array?Uint8Array:null,dr="function"==typeof Uint8Array?Uint8Array:void 0;lr=function(){var r,t,e;if("function"!=typeof gr)return!1;try{t=new gr(t=[1,3.14,-3.14,256,257]),e=t,r=(yr&&e instanceof Uint8Array||"[object Uint8Array]"===nr(e))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?dr:function(){throw new Error("not implemented")};var vr,br=lr,wr="function"==typeof Uint16Array,mr="function"==typeof Uint16Array?Uint16Array:null,Nr="function"==typeof Uint16Array?Uint16Array:void 0;vr=function(){var r,t,e;if("function"!=typeof mr)return!1;try{t=new mr(t=[1,3.14,-3.14,65536,65537]),e=t,r=(wr&&e instanceof Uint16Array||"[object Uint16Array]"===nr(e))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Nr:function(){throw new Error("not implemented")};var Ar,_r={uint16:vr,uint8:br};(Ar=new _r.uint16(1))[0]=4660;var Er,Sr,Ur=52===new _r.uint8(Ar.buffer)[0];!0===Ur?(Er=1,Sr=0):(Er=0,Sr=1);var kr={HIGH:Er,LOW:Sr},jr=new hr(1),Ir=new fr(jr.buffer),xr=kr.HIGH,Tr=kr.LOW;function Fr(r,t,e,n){return jr[0]=r,t[n]=Ir[xr],t[n+e]=Ir[Tr],t}function Vr(r){return Fr(r,[0,0],1,0)}H(Vr,"assign",Fr);var Or=!0===Ur?0:1,Pr=new hr(1),$r=new fr(Pr.buffer);function Gr(r,t){return Pr[0]=r,$r[Or]=t>>>0,Pr[0]}function Hr(r){return 0|r}var Wr,Cr,Lr=2147483647,Mr=2147483648,Rr=!0===Ur?1:0,Zr=new hr(1),qr=new fr(Zr.buffer);function Xr(r){return Zr[0]=r,qr[Rr]}!0===Ur?(Wr=1,Cr=0):(Wr=0,Cr=1);var Yr={HIGH:Wr,LOW:Cr},zr=new hr(1),Br=new fr(zr.buffer),Dr=Yr.HIGH,Jr=Yr.LOW;function Kr(r,t){return Br[Dr]=r,Br[Jr]=t,zr[0]}var Qr=[0,0];function rt(r,t){var e,n;return Vr.assign(r,Qr,1,0),e=Qr[0],e&=Lr,n=Xr(t),Kr(e|=n&=Mr,Qr[1])}var tt=1072693247,et=1e300,nt=1e-300,it=!0===Ur?1:0,at=new hr(1),ot=new fr(at.buffer);function ut(r,t){return at[0]=r,ot[it]=t>>>0,at[0]}var ft=1023,ct=1048575,st=1048576,pt=1072693248,lt=536870912,ht=524288,yt=20,gt=9007199254740992,dt=.9617966939259756,vt=.9617967009544373,bt=-7.028461650952758e-9,wt=[1,1.5],mt=[0,.5849624872207642],Nt=[0,1.350039202129749e-8],At=1.4426950408889634,_t=1.4426950216293335,Et=1.9259629911266175e-8,St=1023,Ut=-1023,kt=-1074,jt=22250738585072014e-324,It=4503599627370496;function xt(r,t,e,n){return W(r)||Y(r)?(t[n]=r,t[n+e]=0,t):0!==r&&B(r)<jt?(t[n]=r*It,t[n+e]=-52,t):(t[n]=r,t[n+e]=0,t)}H((function(r){return xt(r,[0,0],1,0)}),"assign",xt);var Tt=2146435072,Ft=2220446049250313e-31,Vt=2148532223,Ot=[0,0],Pt=[0,0];function $t(r,t){var e,n;return 0===t||0===r||W(r)||Y(r)?r:(xt(r,Ot,1,0),r=Ot[0],t+=Ot[1],t+=function(r){var t=Xr(r);return(t=(t&Tt)>>>20)-ft|0}(r),t<kt?rt(0,r):t>St?r<0?X:Z:(t<=Ut?(t+=52,n=Ft):n=1,Vr.assign(r,Pt,1,0),e=Pt[0],e&=Vt,n*Kr(e|=t+ft<<20,Pt[1])))}var Gt=.6931471805599453,Ht=1048575,Wt=1048576,Ct=1071644672,Lt=20,Mt=.6931471824645996,Rt=-1.904654299957768e-9,Zt=1072693247,qt=1105199104,Xt=1139802112,Yt=1083179008,zt=1072693248,Bt=1083231232,Dt=3230714880,Jt=31,Kt=1e300,Qt=1e-300,re=8008566259537294e-32,te=[0,0],ee=[0,0];function ne(r,t){var e,n,i,a,o,u,f,c,s,p,l,h,y,g;if(W(r)||W(t))return NaN;if(Vr.assign(t,te,1,0),o=te[0],0===te[1]){if(0===t)return 1;if(1===t)return r;if(-1===t)return 1/r;if(.5===t)return z(r);if(-.5===t)return 1/z(r);if(2===t)return r*r;if(3===t)return r*r*r;if(4===t)return(r*=r)*r;if(Y(t))return function(r,t){return-1===r?(r-r)/(r-r):1===r?1:B(r)<1==(t===Z)?0:Z}(r,t)}if(Vr.assign(r,te,1,0),a=te[0],0===te[1]){if(0===a)return function(r,t){return t===X?Z:t===Z?0:t>0?R(t)?r:0:R(t)?rt(Z,r):Z}(r,t);if(1===r)return 1;if(-1===r&&R(t))return-1;if(Y(r))return r===X?ne(-0,-t):t<0?0:Z}if(r<0&&!1===L(t))return(r-r)/(r-r);if(i=B(r),e=a&Lr|0,n=o&Lr|0,f=o>>>Jt|0,u=(u=a>>>Jt|0)&&R(t)?-1:1,n>qt){if(n>Xt)return function(r,t){return(Xr(r)&Lr)<=tt?t<0?et*et:nt*nt:t>0?et*et:nt*nt}(r,t);if(e<Zt)return 1===f?u*Kt*Kt:u*Qt*Qt;if(e>zt)return 0===f?u*Kt*Kt:u*Qt*Qt;l=function(r,t){var e,n,i,a,o,u,f;return a=(i=t-1)*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333)),e=(u=i*Et-a*At)-((n=Gr(n=(o=_t*i)+u,0))-o),r[0]=n,r[1]=e,r}(ee,i)}else l=function(r,t,e){var n,i,a,o,u,f,c,s,p,l,h,y,g,d,v,b,w,m,N,A,_;return m=0,e<st&&(m-=53,e=Xr(t*=gt)),m+=(e>>yt)-ft|0,e=(N=e&ct|0)|pt|0,N<=235662?A=0:N<767610?A=1:(A=0,m+=1,e-=st),o=Gr(i=(b=(t=ut(t,e))-(c=wt[A]))*(w=1/(t+c)),0),n=(e>>1|lt)+ht,f=ut(0,n+=A<<18),v=(a=i*i)*a*(0===(_=a)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),f=Gr(f=3+(a=o*o)+(v+=(u=w*(b-o*f-o*(t-(f-c))))*(o+i)),0),p=Gr(p=(b=o*f)+(w=u*f+(v-(f-3-a))*i),0),l=vt*p,g=(h=bt*p+(w-(p-b))*dt+Nt[A])-((y=Gr(y=l+h+(s=mt[A])+(d=m),0))-d-s-l),r[0]=y,r[1]=g,r}(ee,i,e);if(h=(p=(t-(c=Gr(t,0)))*l[0]+t*l[1])+(s=c*l[0]),Vr.assign(h,te,1,0),y=Hr(te[0]),g=Hr(te[1]),y>=Yt){if(0!=(y-Yt|g))return u*Kt*Kt;if(p+re>h-s)return u*Kt*Kt}else if((y&Lr)>=Bt){if(0!=(y-Dt|g))return u*Qt*Qt;if(p<=h-s)return u*Qt*Qt}return h=function(r,t,e){var n,i,a,o,u,f,c,s,p,l;return p=((s=r&Lr|0)>>Lt)-ft|0,c=0,s>Ct&&(i=ut(0,((c=r+(Wt>>p+1)>>>0)&~(Ht>>(p=((c&Lr)>>Lt)-ft|0)))>>>0),c=(c&Ht|Wt)>>Lt-p>>>0,r<0&&(c=-c),t-=i),r=Hr(r=Xr(f=1-((f=(a=(i=Gr(i=e+t,0))*Mt)+(o=(e-(i-t))*Gt+i*Rt))*(n=f-(i=f*f)*(0===(l=i)?.16666666666666602:.16666666666666602+l*(l*(6613756321437934e-20+l*(4.1381367970572385e-8*l-16533902205465252e-22))-.0027777777777015593)))/(n-2)-((u=o-(f-a))+f*u)-f))),(r+=c<<Lt>>>0)>>Lt<=0?$t(f,c):ut(f,r)}(y,s,p),u*h}function ie(r,t,e){return W(r)||W(t)||W(e)||t<=0||e<=0?NaN:r<e?0:1-ne(e/r,t)}function ae(r){return function(){return r}}function oe(r,t,e){$(r,t,{configurable:!1,enumerable:!1,get:e})}function ue(r){return"number"==typeof r}H(ie,"factory",(function(r,t){return W(r)||W(t)||r<=0||t<=0?ae(NaN):function(e){return W(e)?NaN:e<t?0:1-ne(t/e,r)}}));var fe=q.prototype.toString,ce=J();function se(r){return"object"==typeof r&&(r instanceof q||(ce?function(r){try{return fe.call(r),!0}catch(r){return!1}}(r):"[object Number]"===nr(r)))}function pe(r){return ue(r)||se(r)}function le(r){return ue(r)&&r>0}function he(r){return se(r)&&r.valueOf()>0}function ye(r){return le(r)||he(r)}H(pe,"isPrimitive",ue),H(pe,"isObject",se),H(ye,"isPrimitive",le),H(ye,"isObject",he);var ge=Math.ceil;function de(r){return r<0?ge(r):C(r)}var ve=.6931471803691238,be=1.9082149292705877e-10,we=1.4426950408889634,me=709.782712893384,Ne=-745.1332191019411,Ae=1/(1<<28),_e=-Ae;function Ee(r){var t;return W(r)||r===Z?r:r===X?0:r>me?Z:r<Ne?0:r>_e&&r<Ae?1+r:function(r,t,e){var n,i,a,o;return $t(1-(t-(n=r-t)*(a=n-(i=n*n)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),e)}(r-(t=de(r<0?we*r-.5:we*r+.5))*ve,t*be,t)}var Se=.6931471803691238,Ue=1.9082149292705877e-10,ke=0x40000000000000,je=.3333333333333333,Ie=1048575,xe=2146435072,Te=1048576,Fe=1072693248;function Ve(r){var t,e,n,i,a,o,u,f,c,s,p,l;return 0===r?X:W(r)||r<0?NaN:(a=0,(e=Xr(r))<Te&&(a-=54,e=Xr(r*=ke)),e>=xe?r+r:(a+=(e>>20)-ft|0,a+=(f=614244+(e&=Ie)&1048576|0)>>20|0,u=(r=ut(r,e|f^Fe))-1,(Ie&2+e)<3?0===u?0===a?0:a*Se+a*Ue:(o=u*u*(.5-je*u),0===a?u-o:a*Se-(o-a*Ue-u)):(f=e-398458|0,c=440401-e|0,i=(p=(l=(s=u/(2+u))*s)*l)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),n=l*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),o=n+i,(f|=c)>0?(t=.5*u*u,0===a?u-(t-s*(t+o)):a*Se-(t-(s*(t+o)+a*Ue)-u)):0===a?u-s*(u-o):a*Se-(s*(u-o)-a*Ue-u))))}function Oe(r,t){return W(r)||r<=0||W(t)||t<=0?NaN:Ve(t/r*Ee(1+1/r))}function Pe(r,t){var e;return W(r)||r<=4||W(t)||t<=0?NaN:(e=6*(ne(r,3)+ne(r,2)-6*r-2),e/=r*(r-3)*(r-4))}function $e(r,t){return r<=0||t<=0?NaN:r<=1?Z:r*t/(r-1)}function Ge(r,t){return r<=0||t<=0?NaN:t*ne(2,1/r)}function He(r,t){return W(r)||r<=0||W(t)||t<=0?NaN:t}function We(r,t){return W(r)||r<=3||W(t)||t<=0?NaN:2*(1+r)/(r-3)*z((r-2)/r)}function Ce(r,t){return W(r)||r<=0||W(t)||t<=0?NaN:r<2?Z:t*t*r/(ne(r-1,2)*(r-2))}var Le=.6931471803691238,Me=1.9082149292705877e-10,Re=.41421356237309503,Ze=-.2928932188134525,qe=1.862645149230957e-9,Xe=5551115123125783e-32,Ye=9007199254740992,ze=.6666666666666666;function Be(r){var t,e,n,i,a,o,u,f,c,s;if(r<-1||W(r))return NaN;if(-1===r)return X;if(r===Z)return r;if(0===r)return r;if(s=1,(n=r<0?-r:r)<Re){if(n<qe)return n<Xe?r:r-r*r*.5;r>Ze&&(s=0,i=r,e=1)}return 0!==s&&(n<Ye?(a=(s=((e=Xr(c=1+r))>>20)-ft)>0?1-(c-r):r-(c-1),a/=c):(s=((e=Xr(c=r))>>20)-ft,a=0),(e&=1048575)<434334?c=ut(c,1072693248|e):(s+=1,c=ut(c,1071644672|e),e=1048576-e>>2),i=c-1),t=.5*i*i,0===e?0===i?s*Le+(a+=s*Me):s*Le-((f=t*(1-ze*i))-(s*Me+a)-i):(f=(u=(o=i/(2+i))*o)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(u),0===s?i-(t-o*(t+f)):s*Le-(t-(o*(t+f)+(s*Me+a))-i))}function De(r,t,e){return W(r)||W(t)||W(e)||t<=0||e<=0?NaN:r<e?X:Be(-ne(e/r,t))}function Je(r,t,e){return W(r)||W(t)||W(e)||t<=0||e<=0?NaN:r>=e?Ve(t)+t*Ve(e)-(t+1)*Ve(r):X}function Ke(r,t,e){return W(r)||W(t)||W(e)||t<=0||e<=0?NaN:r>=e?t*ne(e,t)/ne(r,t+1):0}function Qe(r,t,e){return W(t)||W(e)||W(r)||t<=0||e<=0||r<0||r>1?NaN:e/ne(1-r,1/t)}function rn(){var r,t;if(!(this instanceof rn))return 0===arguments.length?new rn:new rn(arguments[0],arguments[1]);if(arguments.length){if(t=arguments[1],!le(r=arguments[0]))throw new TypeError(I("invalid argument. First shape parameter must be a positive number. Value: `%s`.",r));if(!le(t))throw new TypeError(I("invalid argument. Second shape parameter must be a positive number. Value: `%s`.",t))}else r=1,t=1;return $(this,"alpha",{configurable:!1,enumerable:!0,get:function(){return r},set:function(t){if(!le(t))throw new TypeError(I("invalid assignment. Must be a positive number. Value: `%s`.",t));r=t}}),$(this,"beta",{configurable:!1,enumerable:!0,get:function(){return t},set:function(r){if(!le(r))throw new TypeError(I("invalid assignment. Must be a positive number. Value: `%s`.",r));t=r}}),this}H(De,"factory",(function(r,t){return W(r)||W(t)||r<=0||t<=0?ae(NaN):function(e){return W(e)?NaN:e<t?X:Be(-ne(t/e,r))}})),H(Je,"factory",(function(r,t){var e;return W(r)||W(t)||r<=0||t<=0?ae(NaN):(e=Ve(r)+r*Ve(t),function(n){return W(n)?NaN:n>=t?e-(r+1)*Ve(n):X})})),H(Ke,"factory",(function(r,t){var e;return W(r)||W(t)||r<=0||t<=0?ae(NaN):(e=r*ne(t,r),function(n){var i;return W(n)?NaN:n>=t?(i=ne(n,r+1),e/i):0})})),H(Qe,"factory",(function(r,t){var e;return W(r)||W(t)||r<=0||t<=0?ae(NaN):(e=1/r,function(r){return W(r)||r<0||r>1?NaN:t/ne(1-r,e)})})),oe(rn.prototype,"entropy",(function(){return Oe(this.alpha,this.beta)})),oe(rn.prototype,"kurtosis",(function(){return Pe(this.alpha,this.beta)})),oe(rn.prototype,"mean",(function(){return $e(this.alpha,this.beta)})),oe(rn.prototype,"median",(function(){return Ge(this.alpha,this.beta)})),oe(rn.prototype,"mode",(function(){return He(this.alpha,this.beta)})),oe(rn.prototype,"skewness",(function(){return We(this.alpha,this.beta)})),oe(rn.prototype,"variance",(function(){return Ce(this.alpha,this.beta)})),H(rn.prototype,"cdf",(function(r){return ie(r,this.alpha,this.beta)})),H(rn.prototype,"logcdf",(function(r){return De(r,this.alpha,this.beta)})),H(rn.prototype,"logpdf",(function(r){return Je(r,this.alpha,this.beta)})),H(rn.prototype,"pdf",(function(r){return Ke(r,this.alpha,this.beta)})),H(rn.prototype,"quantile",(function(r){return Qe(r,this.alpha,this.beta)}));var tn={};return G(tn,"cdf",ie),G(tn,"Pareto1",rn),G(tn,"entropy",Oe),G(tn,"kurtosis",Pe),G(tn,"logcdf",De),G(tn,"logpdf",Je),G(tn,"mean",$e),G(tn,"median",Ge),G(tn,"mode",He),G(tn,"pdf",Ke),G(tn,"quantile",Qe),G(tn,"skewness",We),G(tn,"stdev",(function(r,t){var e;return W(r)||r<=0||W(t)||t<=0?NaN:r<2?Z:(e=t*t*r/(ne(r-1,2)*(r-2)),z(e))})),G(tn,"variance",Ce),tn},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).pareto1=t();
//# sourceMappingURL=browser.js.map
