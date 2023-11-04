// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty;function n(r){return"number"==typeof r}function e(r){var t,n="";for(t=0;t<r;t++)n+="0";return n}function i(r,t,n){var i=!1,a=t-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+e(a):e(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var t,e,u;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(e=r.arg,u=parseInt(e,10),!isFinite(u)){if(!n(e))throw new Error("invalid integer. Value: "+e);u=0}return u<0&&("u"===r.specifier||10!==t)&&(u=4294967295+u+1),u<0?(e=(-u).toString(t),r.precision&&(e=i(e,r.precision,r.padRight)),e="-"+e):(e=u.toString(t),u||r.precision?r.precision&&(e=i(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===t&&(r.alternate&&(e="0x"+e),e=r.specifier===o.call(r.specifier)?o.call(e):a.call(e)),8===t&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function f(r){return"string"==typeof r}var c=Math.abs,s=String.prototype.toLowerCase,p=String.prototype.toUpperCase,l=String.prototype.replace,h=/e\+(\d)$/,y=/e-(\d)$/,g=/^(\d+)$/,d=/^(\d+)e/,v=/\.0$/,b=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var t,e,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+e);i=r.arg}switch(r.specifier){case"e":case"E":e=i.toExponential(r.precision);break;case"f":case"F":e=i.toFixed(r.precision);break;case"g":case"G":c(i)<1e-4?((t=r.precision)>0&&(t-=1),e=i.toExponential(t)):e=i.toPrecision(r.precision),r.alternate||(e=l.call(e,w,"$1e"),e=l.call(e,b,"e"),e=l.call(e,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=l.call(e,h,"e+0$1"),e=l.call(e,y,"e-0$1"),r.alternate&&(e=l.call(e,g,"$1."),e=l.call(e,d,"$1.e")),i>=0&&r.sign&&(e=r.sign+e),e=r.specifier===p.call(r.specifier)?p.call(e):s.call(e)}function N(r){var t,n="";for(t=0;t<r;t++)n+=" ";return n}function A(r,t,n){var e=t-r.length;return e<0?r:r=n?r+N(e):N(e)+r}var _=String.fromCharCode,E=isNaN,S=Array.isArray;function U(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function k(r){var t,n,e,a,o,c,s,p,l;if(!S(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",s=1,p=0;p<r.length;p++)if(f(e=r[p]))c+=e;else{if(t=void 0!==e.precision,!(e=U(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+e+"`.");for(e.mapping&&(s=e.mapping),n=e.flags,l=0;l<n.length;l++)switch(a=n.charAt(l)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=n.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===e.width){if(e.width=parseInt(arguments[s],10),s+=1,E(e.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(t&&"*"===e.precision){if(e.precision=parseInt(arguments[s],10),s+=1,E(e.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,t=!1)}switch(e.arg=arguments[s],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(e.padZeros=!1),e.arg=u(e);break;case"s":e.maxWidth=t?e.precision:-1;break;case"c":if(!E(e.arg)){if((o=parseInt(e.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=E(o)?String(e.arg):_(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(e.precision=6),e.arg=m(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=i(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=A(e.arg,e.width,e.padRight)),c+=e.arg||"",s+=1}return c}var j=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function x(r){var t,n,e,i;for(n=[],i=0,e=j.exec(r);e;)(t=r.slice(i,j.lastIndex-e[0].length)).length&&n.push(t),n.push(I(e)),i=j.lastIndex,e=j.exec(r);return(t=r.slice(i)).length&&n.push(t),n}function T(r){return"string"==typeof r}function F(r){var t,n,e;if(!T(r))throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=x(r),(n=new Array(arguments.length))[0]=t,e=1;e<n.length;e++)n[e]=arguments[e];return k.apply(null,n)}var V=Object.prototype,O=V.toString,P=V.__defineGetter__,$=V.__defineSetter__,G=V.__lookupGetter__,H=V.__lookupSetter__,W=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,n){var e,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===O.call(r))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===O.call(n))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(G.call(r,t)||H.call(r,t)?(e=r.__proto__,r.__proto__=V,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&P&&P.call(r,t,n.get),o&&$&&$.call(r,t,n.set),r};function C(r,t,n){W(r,t,{configurable:!1,enumerable:!0,writable:!1,value:n})}function L(r,t,n){W(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function M(r){return r!=r}var R=Math.floor;function Z(r){return R(r)===r}function q(r){return Z(r/2)}function X(r){return q(r>0?r-1:r+1)}var Y=Number.POSITIVE_INFINITY,z=Number,B=z.NEGATIVE_INFINITY;function D(r){return r===Y||r===B}var J=Math.sqrt;function K(r){return Math.abs(r)}var Q="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function rr(){return Q&&"symbol"==typeof Symbol.toStringTag}var tr,nr=Object.prototype.toString,er=Object.prototype.hasOwnProperty,ir="function"==typeof Symbol?Symbol:void 0,ar="function"==typeof ir?ir.toStringTag:"",or=rr()?function(r){var t,n,e,i,a;if(null==r)return nr.call(r);n=r[ar],a=ar,t=null!=(i=r)&&er.call(i,a);try{r[ar]=void 0}catch(t){return nr.call(r)}return e=nr.call(r),t?r[ar]=n:delete r[ar],e}:function(r){return nr.call(r)},ur="function"==typeof Uint32Array,fr="function"==typeof Uint32Array?Uint32Array:null,cr="function"==typeof Uint32Array?Uint32Array:void 0;tr=function(){var r,t,n;if("function"!=typeof fr)return!1;try{t=new fr(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(ur&&n instanceof Uint32Array||"[object Uint32Array]"===or(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?cr:function(){throw new Error("not implemented")};var sr,pr=tr,lr="function"==typeof Float64Array,hr="function"==typeof Float64Array?Float64Array:null,yr="function"==typeof Float64Array?Float64Array:void 0;sr=function(){var r,t,n;if("function"!=typeof hr)return!1;try{t=new hr([1,3.14,-3.14,NaN]),n=t,r=(lr&&n instanceof Float64Array||"[object Float64Array]"===or(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?yr:function(){throw new Error("not implemented")};var gr,dr=sr,vr="function"==typeof Uint8Array,br="function"==typeof Uint8Array?Uint8Array:null,wr="function"==typeof Uint8Array?Uint8Array:void 0;gr=function(){var r,t,n;if("function"!=typeof br)return!1;try{t=new br(t=[1,3.14,-3.14,256,257]),n=t,r=(vr&&n instanceof Uint8Array||"[object Uint8Array]"===or(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?wr:function(){throw new Error("not implemented")};var mr,Nr=gr,Ar="function"==typeof Uint16Array,_r="function"==typeof Uint16Array?Uint16Array:null,Er="function"==typeof Uint16Array?Uint16Array:void 0;mr=function(){var r,t,n;if("function"!=typeof _r)return!1;try{t=new _r(t=[1,3.14,-3.14,65536,65537]),n=t,r=(Ar&&n instanceof Uint16Array||"[object Uint16Array]"===or(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Er:function(){throw new Error("not implemented")};var Sr,Ur={uint16:mr,uint8:Nr};(Sr=new Ur.uint16(1))[0]=4660;var kr,jr,Ir=52===new Ur.uint8(Sr.buffer)[0];!0===Ir?(kr=1,jr=0):(kr=0,jr=1);var xr={HIGH:kr,LOW:jr},Tr=new dr(1),Fr=new pr(Tr.buffer),Vr=xr.HIGH,Or=xr.LOW;function Pr(r,t,n,e){return Tr[0]=r,t[e]=Fr[Vr],t[e+n]=Fr[Or],t}function $r(r){return Pr(r,[0,0],1,0)}L($r,"assign",Pr);var Gr=!0===Ir?0:1,Hr=new dr(1),Wr=new pr(Hr.buffer);function Cr(r,t){return Hr[0]=r,Wr[Gr]=t>>>0,Hr[0]}function Lr(r){return 0|r}var Mr,Rr,Zr=2147483647,qr=!0===Ir?1:0,Xr=new dr(1),Yr=new pr(Xr.buffer);function zr(r){return Xr[0]=r,Yr[qr]}!0===Ir?(Mr=1,Rr=0):(Mr=0,Rr=1);var Br={HIGH:Mr,LOW:Rr},Dr=new dr(1),Jr=new pr(Dr.buffer),Kr=Br.HIGH,Qr=Br.LOW;function rt(r,t){return Jr[Kr]=r,Jr[Qr]=t,Dr[0]}var tt=[0,0];function nt(r,t){var n,e;return $r.assign(r,tt,1,0),n=tt[0],n&=Zr,e=zr(t),rt(n|=e&=2147483648,tt[1])}var et=!0===Ir?1:0,it=new dr(1),at=new pr(it.buffer);function ot(r,t){return it[0]=r,at[et]=t>>>0,it[0]}var ut=1023,ft=1048576,ct=[1,1.5],st=[0,.5849624872207642],pt=[0,1.350039202129749e-8];function lt(r,t,n,e){return M(r)||D(r)?(t[e]=r,t[e+n]=0,t):0!==r&&K(r)<22250738585072014e-324?(t[e]=4503599627370496*r,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}L((function(r){return lt(r,[0,0],1,0)}),"assign",lt);var ht=[0,0],yt=[0,0];function gt(r,t){var n,e;return 0===t||0===r||M(r)||D(r)?r:(lt(r,ht,1,0),t+=ht[1],t+=function(r){var t=zr(r);return(t=(2146435072&t)>>>20)-ut|0}(r=ht[0]),t<-1074?nt(0,r):t>1023?r<0?B:Y:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,$r.assign(r,yt,1,0),n=yt[0],n&=2148532223,e*rt(n|=t+ut<<20,yt[1])))}var dt=1048575,vt=1048576,bt=1083179008,wt=1e300,mt=1e-300,Nt=[0,0],At=[0,0];function _t(r,t){var n,e,i,a,o,u,f,c,s,p,l,h,y,g;if(M(r)||M(t))return NaN;if($r.assign(t,Nt,1,0),o=Nt[0],0===Nt[1]){if(0===t)return 1;if(1===t)return r;if(-1===t)return 1/r;if(.5===t)return J(r);if(-.5===t)return 1/J(r);if(2===t)return r*r;if(3===t)return r*r*r;if(4===t)return(r*=r)*r;if(D(t))return function(r,t){return-1===r?(r-r)/(r-r):1===r?1:K(r)<1==(t===Y)?0:Y}(r,t)}if($r.assign(r,Nt,1,0),a=Nt[0],0===Nt[1]){if(0===a)return function(r,t){return t===B?Y:t===Y?0:t>0?X(t)?r:0:X(t)?nt(Y,r):Y}(r,t);if(1===r)return 1;if(-1===r&&X(t))return-1;if(D(r))return r===B?_t(-0,-t):t<0?0:Y}if(r<0&&!1===Z(t))return(r-r)/(r-r);if(i=K(r),n=a&Zr|0,e=o&Zr|0,f=o>>>31|0,u=(u=a>>>31|0)&&X(t)?-1:1,e>1105199104){if(e>1139802112)return function(r,t){return(zr(r)&Zr)<=1072693247?t<0?1/0:0:t>0?1/0:0}(r,t);if(n<1072693247)return 1===f?u*wt*wt:u*mt*mt;if(n>1072693248)return 0===f?u*wt*wt:u*mt*mt;l=function(r,t){var n,e,i,a,o,u;return n=(o=1.9259629911266175e-8*(i=t-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((e=Cr(e=(a=1.4426950216293335*i)+o,0))-a),r[0]=e,r[1]=n,r}(At,i)}else l=function(r,t,n){var e,i,a,o,u,f,c,s,p,l,h,y,g,d,v,b,w,m,N,A,_;return m=0,n<ft&&(m-=53,n=zr(t*=9007199254740992)),m+=(n>>20)-ut|0,n=1072693248|(N=1048575&n|0),N<=235662?A=0:N<767610?A=1:(A=0,m+=1,n-=ft),o=Cr(i=(b=(t=ot(t,n))-(c=ct[A]))*(w=1/(t+c)),0),e=524288+(n>>1|536870912),f=ot(0,e+=A<<18),v=(a=i*i)*a*(0===(_=a)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),f=Cr(f=3+(a=o*o)+(v+=(u=w*(b-o*f-o*(t-(f-c))))*(o+i)),0),g=(h=-7.028461650952758e-9*(p=Cr(p=(b=o*f)+(w=u*f+(v-(f-3-a))*i),0))+.9617966939259756*(w-(p-b))+pt[A])-((y=Cr(y=(l=.9617967009544373*p)+h+(s=st[A])+(d=m),0))-d-s-l),r[0]=y,r[1]=g,r}(At,i,n);if(h=(p=(t-(c=Cr(t,0)))*l[0]+t*l[1])+(s=c*l[0]),$r.assign(h,Nt,1,0),y=Lr(Nt[0]),g=Lr(Nt[1]),y>=bt){if(0!=(y-bt|g))return u*wt*wt;if(p+8008566259537294e-32>h-s)return u*wt*wt}else if((y&Zr)>=1083231232){if(0!=(y-3230714880|g))return u*mt*mt;if(p<=h-s)return u*mt*mt}return h=function(r,t,n){var e,i,a,o,u,f,c,s,p,l;return p=((s=r&Zr|0)>>20)-ut|0,c=0,s>1071644672&&(i=ot(0,((c=r+(vt>>p+1)>>>0)&~(dt>>(p=((c&Zr)>>20)-ut|0)))>>>0),c=(c&dt|vt)>>20-p>>>0,r<0&&(c=-c),t-=i),r=Lr(r=zr(f=1-((f=(a=.6931471824645996*(i=Cr(i=n+t,0)))+(o=.6931471805599453*(n-(i-t))+-1.904654299957768e-9*i))*(e=f-(i=f*f)*(0===(l=i)?.16666666666666602:.16666666666666602+l*(l*(6613756321437934e-20+l*(4.1381367970572385e-8*l-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((u=o-(f-a))+f*u)-f))),(r+=c<<20>>>0)>>20<=0?gt(f,c):ot(f,r)}(y,s,p),u*h}function Et(r,t,n){return M(r)||M(t)||M(n)||t<=0||n<=0?NaN:r<n?0:1-_t(n/r,t)}function St(r){return function(){return r}}function Ut(r,t,n){W(r,t,{configurable:!1,enumerable:!1,get:n})}function kt(r){return"number"==typeof r}L(Et,"factory",(function(r,t){return M(r)||M(t)||r<=0||t<=0?St(NaN):function(n){return M(n)?NaN:n<t?0:1-_t(t/n,r)}}));var jt=z.prototype.toString,It=rr();function xt(r){return"object"==typeof r&&(r instanceof z||(It?function(r){try{return jt.call(r),!0}catch(r){return!1}}(r):"[object Number]"===or(r)))}function Tt(r){return kt(r)||xt(r)}function Ft(r){return kt(r)&&r>0}function Vt(r){return xt(r)&&r.valueOf()>0}function Ot(r){return Ft(r)||Vt(r)}L(Tt,"isPrimitive",kt),L(Tt,"isObject",xt),L(Ot,"isPrimitive",Ft),L(Ot,"isObject",Vt);var Pt=Math.ceil;function $t(r){return r<0?Pt(r):R(r)}var Gt=1.4426950408889634,Ht=1/(1<<28);function Wt(r){var t;return M(r)||r===Y?r:r===B?0:r>709.782712893384?Y:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<Ht?1+r:function(r,t,n){var e,i,a,o;return gt(1-(t-(e=r-t)*(a=e-(i=e*e)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),n)}(r-.6931471803691238*(t=$t(r<0?Gt*r-.5:Gt*r+.5)),1.9082149292705877e-10*t,t)}var Ct=.6931471803691238,Lt=1.9082149292705877e-10,Mt=1048575;function Rt(r){var t,n,e,i,a,o,u,f,c,s,p,l;return 0===r?B:M(r)||r<0?NaN:(a=0,(n=zr(r))<1048576&&(a-=54,n=zr(r*=0x40000000000000)),n>=2146435072?r+r:(a+=(n>>20)-ut|0,a+=(f=614244+(n&=Mt)&1048576|0)>>20|0,u=(r=ot(r,n|1072693248^f))-1,(Mt&2+n)<3?0===u?0===a?0:a*Ct+a*Lt:(o=u*u*(.5-.3333333333333333*u),0===a?u-o:a*Ct-(o-a*Lt-u)):(f=n-398458|0,c=440401-n|0,i=(p=(l=(s=u/(2+u))*s)*l)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),e=l*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),o=e+i,(f|=c)>0?(t=.5*u*u,0===a?u-(t-s*(t+o)):a*Ct-(t-(s*(t+o)+a*Lt)-u)):0===a?u-s*(u-o):a*Ct-(s*(u-o)-a*Lt-u))))}function Zt(r,t){return M(r)||r<=0||M(t)||t<=0?NaN:Rt(t/r*Wt(1+1/r))}function qt(r,t){var n;return M(r)||r<=4||M(t)||t<=0?NaN:(n=6*(_t(r,3)+_t(r,2)-6*r-2),n/=r*(r-3)*(r-4))}function Xt(r,t){return r<=0||t<=0?NaN:r<=1?Y:r*t/(r-1)}function Yt(r,t){return r<=0||t<=0?NaN:t*_t(2,1/r)}function zt(r,t){return M(r)||r<=0||M(t)||t<=0?NaN:t}function Bt(r,t){return M(r)||r<=3||M(t)||t<=0?NaN:2*(1+r)/(r-3)*J((r-2)/r)}function Dt(r,t){return M(r)||r<=0||M(t)||t<=0?NaN:r<2?Y:t*t*r/(_t(r-1,2)*(r-2))}var Jt=.6931471803691238,Kt=1.9082149292705877e-10;function Qt(r){var t,n,e,i,a,o,u,f,c,s;if(r<-1||M(r))return NaN;if(-1===r)return B;if(r===Y)return r;if(0===r)return r;if(s=1,(e=r<0?-r:r)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(s=0,i=r,n=1)}return 0!==s&&(e<9007199254740992?(a=(s=((n=zr(c=1+r))>>20)-ut)>0?1-(c-r):r-(c-1),a/=c):(s=((n=zr(c=r))>>20)-ut,a=0),(n&=1048575)<434334?c=ot(c,1072693248|n):(s+=1,c=ot(c,1071644672|n),n=1048576-n>>2),i=c-1),t=.5*i*i,0===n?0===i?s*Jt+(a+=s*Kt):s*Jt-((f=t*(1-.6666666666666666*i))-(s*Kt+a)-i):(f=(u=(o=i/(2+i))*o)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(u),0===s?i-(t-o*(t+f)):s*Jt-(t-(o*(t+f)+(s*Kt+a))-i))}function rn(r,t,n){return M(r)||M(t)||M(n)||t<=0||n<=0?NaN:r<n?B:Qt(-_t(n/r,t))}function tn(r,t,n){return M(r)||M(t)||M(n)||t<=0||n<=0?NaN:r>=n?Rt(t)+t*Rt(n)-(t+1)*Rt(r):B}function nn(r,t,n){return M(r)||M(t)||M(n)||t<=0||n<=0?NaN:r>=n?t*_t(n,t)/_t(r,t+1):0}function en(r,t,n){return M(t)||M(n)||M(r)||t<=0||n<=0||r<0||r>1?NaN:n/_t(1-r,1/t)}function an(){var r,t;if(!(this instanceof an))return 0===arguments.length?new an:new an(arguments[0],arguments[1]);if(arguments.length){if(t=arguments[1],!Ft(r=arguments[0]))throw new TypeError(F("invalid argument. First shape parameter must be a positive number. Value: `%s`.",r));if(!Ft(t))throw new TypeError(F("invalid argument. Second shape parameter must be a positive number. Value: `%s`.",t))}else r=1,t=1;return W(this,"alpha",{configurable:!1,enumerable:!0,get:function(){return r},set:function(t){if(!Ft(t))throw new TypeError(F("invalid assignment. Must be a positive number. Value: `%s`.",t));r=t}}),W(this,"beta",{configurable:!1,enumerable:!0,get:function(){return t},set:function(r){if(!Ft(r))throw new TypeError(F("invalid assignment. Must be a positive number. Value: `%s`.",r));t=r}}),this}L(rn,"factory",(function(r,t){return M(r)||M(t)||r<=0||t<=0?St(NaN):function(n){return M(n)?NaN:n<t?B:Qt(-_t(t/n,r))}})),L(tn,"factory",(function(r,t){var n;return M(r)||M(t)||r<=0||t<=0?St(NaN):(n=Rt(r)+r*Rt(t),function(e){return M(e)?NaN:e>=t?n-(r+1)*Rt(e):B})})),L(nn,"factory",(function(r,t){var n;return M(r)||M(t)||r<=0||t<=0?St(NaN):(n=r*_t(t,r),function(e){var i;return M(e)?NaN:e>=t?(i=_t(e,r+1),n/i):0})})),L(en,"factory",(function(r,t){var n;return M(r)||M(t)||r<=0||t<=0?St(NaN):(n=1/r,function(r){return M(r)||r<0||r>1?NaN:t/_t(1-r,n)})})),Ut(an.prototype,"entropy",(function(){return Zt(this.alpha,this.beta)})),Ut(an.prototype,"kurtosis",(function(){return qt(this.alpha,this.beta)})),Ut(an.prototype,"mean",(function(){return Xt(this.alpha,this.beta)})),Ut(an.prototype,"median",(function(){return Yt(this.alpha,this.beta)})),Ut(an.prototype,"mode",(function(){return zt(this.alpha,this.beta)})),Ut(an.prototype,"skewness",(function(){return Bt(this.alpha,this.beta)})),Ut(an.prototype,"variance",(function(){return Dt(this.alpha,this.beta)})),L(an.prototype,"cdf",(function(r){return Et(r,this.alpha,this.beta)})),L(an.prototype,"logcdf",(function(r){return rn(r,this.alpha,this.beta)})),L(an.prototype,"logpdf",(function(r){return tn(r,this.alpha,this.beta)})),L(an.prototype,"pdf",(function(r){return nn(r,this.alpha,this.beta)})),L(an.prototype,"quantile",(function(r){return en(r,this.alpha,this.beta)}));var on={};return C(on,"cdf",Et),C(on,"Pareto1",an),C(on,"entropy",Zt),C(on,"kurtosis",qt),C(on,"logcdf",rn),C(on,"logpdf",tn),C(on,"mean",Xt),C(on,"median",Yt),C(on,"mode",zt),C(on,"pdf",nn),C(on,"quantile",en),C(on,"skewness",Bt),C(on,"stdev",(function(r,t){var n;return M(r)||r<=0||M(t)||t<=0?NaN:r<2?Y:(n=t*t*r/(_t(r-1,2)*(r-2)),J(n))})),C(on,"variance",Dt),on},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).pareto1=t();
//# sourceMappingURL=index.js.map
