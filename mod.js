// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function n(r){return"number"==typeof r}function e(r){var t,n="";for(t=0;t<r;t++)n+="0";return n}function i(r,t,n){var i=!1,a=t-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+e(a):e(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var t,e,u;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(e=r.arg,u=parseInt(e,10),!isFinite(u)){if(!n(e))throw new Error("invalid integer. Value: "+e);u=0}return u<0&&("u"===r.specifier||10!==t)&&(u=4294967295+u+1),u<0?(e=(-u).toString(t),r.precision&&(e=i(e,r.precision,r.padRight)),e="-"+e):(e=u.toString(t),u||r.precision?r.precision&&(e=i(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===t&&(r.alternate&&(e="0x"+e),e=r.specifier===o.call(r.specifier)?o.call(e):a.call(e)),8===t&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}var f=Math.abs,c=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,l=/e\+(\d)$/,h=/e-(\d)$/,v=/^(\d+)$/,y=/^(\d+)e/,g=/\.0$/,d=/\.0*e/,b=/(\..*[^0])0*e/;function w(r){var t,e,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+e);i=r.arg}switch(r.specifier){case"e":case"E":e=i.toExponential(r.precision);break;case"f":case"F":e=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((t=r.precision)>0&&(t-=1),e=i.toExponential(t)):e=i.toPrecision(r.precision),r.alternate||(e=p.call(e,b,"$1e"),e=p.call(e,d,"e"),e=p.call(e,g,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=p.call(e,l,"e+0$1"),e=p.call(e,h,"e-0$1"),r.alternate&&(e=p.call(e,v,"$1."),e=p.call(e,y,"$1.e")),i>=0&&r.sign&&(e=r.sign+e),e=r.specifier===s.call(r.specifier)?s.call(e):c.call(e)}function m(r){var t,n="";for(t=0;t<r;t++)n+=" ";return n}var N=String.fromCharCode,A=isNaN,_=Array.isArray;function E(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function S(r){var t,n,e,a,o,f,c,s,p,l,h,v,y;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",c=1,s=0;s<r.length;s++)if(e=r[s],"string"==typeof e)f+=e;else{if(t=void 0!==e.precision,!(e=E(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+e+"`.");for(e.mapping&&(c=e.mapping),n=e.flags,p=0;p<n.length;p++)switch(a=n.charAt(p)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=n.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===e.width){if(e.width=parseInt(arguments[c],10),c+=1,A(e.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(t&&"*"===e.precision){if(e.precision=parseInt(arguments[c],10),c+=1,A(e.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,t=!1)}switch(e.arg=arguments[c],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(e.padZeros=!1),e.arg=u(e);break;case"s":e.maxWidth=t?e.precision:-1;break;case"c":if(!A(e.arg)){if((o=parseInt(e.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=A(o)?String(e.arg):N(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(e.precision=6),e.arg=w(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=i(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=(l=e.arg,h=e.width,v=e.padRight,y=void 0,(y=h-l.length)<0?l:l=v?l+m(y):m(y)+l)),f+=e.arg||"",c+=1}return f}var U=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function I(r){var t,n,e,i;for(n=[],i=0,e=U.exec(r);e;)(t=r.slice(i,U.lastIndex-e[0].length)).length&&n.push(t),n.push(k(e)),i=U.lastIndex,e=U.exec(r);return(t=r.slice(i)).length&&n.push(t),n}function j(r){var t,n;if("string"!=typeof r)throw new TypeError(j("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=[I(r)],n=1;n<arguments.length;n++)t.push(arguments[n]);return S.apply(null,t)}var x=Object.prototype,F=x.toString,T=x.__defineGetter__,V=x.__defineSetter__,O=x.__lookupGetter__,P=x.__lookupSetter__;var $=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,n){var e,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===F.call(r))throw new TypeError(j("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===F.call(n))throw new TypeError(j("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(O.call(r,t)||P.call(r,t)?(e=r.__proto__,r.__proto__=x,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&T&&T.call(r,t,n.get),o&&V&&V.call(r,t,n.set),r};function G(r,t,n){$(r,t,{configurable:!1,enumerable:!0,writable:!1,value:n})}function H(r,t,n){$(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function W(r){return r!=r}var C=Math.floor;function L(r){return C(r)===r}function M(r){return L(r/2)}function R(r){return M(r>0?r-1:r+1)}var Z=Number.POSITIVE_INFINITY,q=Number,X=q.NEGATIVE_INFINITY;function Y(r){return r===Z||r===X}var z=Math.sqrt;function B(r){return Math.abs(r)}var D="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function J(){return D&&"symbol"==typeof Symbol.toStringTag}var K=Object.prototype.toString;var Q=Object.prototype.hasOwnProperty;var rr="function"==typeof Symbol?Symbol:void 0,tr="function"==typeof rr?rr.toStringTag:"";var nr=J()?function(r){var t,n,e,i,a;if(null==r)return K.call(r);n=r[tr],a=tr,t=null!=(i=r)&&Q.call(i,a);try{r[tr]=void 0}catch(t){return K.call(r)}return e=K.call(r),t?r[tr]=n:delete r[tr],e}:function(r){return K.call(r)},er="function"==typeof Uint32Array;var ir="function"==typeof Uint32Array?Uint32Array:null;var ar,or="function"==typeof Uint32Array?Uint32Array:void 0;ar=function(){var r,t,n;if("function"!=typeof ir)return!1;try{t=new ir(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(er&&n instanceof Uint32Array||"[object Uint32Array]"===nr(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?or:function(){throw new Error("not implemented")};var ur=ar,fr="function"==typeof Float64Array;var cr="function"==typeof Float64Array?Float64Array:null;var sr,pr="function"==typeof Float64Array?Float64Array:void 0;sr=function(){var r,t,n;if("function"!=typeof cr)return!1;try{t=new cr([1,3.14,-3.14,NaN]),n=t,r=(fr&&n instanceof Float64Array||"[object Float64Array]"===nr(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?pr:function(){throw new Error("not implemented")};var lr=sr,hr="function"==typeof Uint8Array;var vr="function"==typeof Uint8Array?Uint8Array:null;var yr,gr="function"==typeof Uint8Array?Uint8Array:void 0;yr=function(){var r,t,n;if("function"!=typeof vr)return!1;try{t=new vr(t=[1,3.14,-3.14,256,257]),n=t,r=(hr&&n instanceof Uint8Array||"[object Uint8Array]"===nr(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?gr:function(){throw new Error("not implemented")};var dr=yr,br="function"==typeof Uint16Array;var wr="function"==typeof Uint16Array?Uint16Array:null;var mr,Nr="function"==typeof Uint16Array?Uint16Array:void 0;mr=function(){var r,t,n;if("function"!=typeof wr)return!1;try{t=new wr(t=[1,3.14,-3.14,65536,65537]),n=t,r=(br&&n instanceof Uint16Array||"[object Uint16Array]"===nr(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Nr:function(){throw new Error("not implemented")};var Ar,_r={uint16:mr,uint8:dr};(Ar=new _r.uint16(1))[0]=4660;var Er,Sr,Ur=52===new _r.uint8(Ar.buffer)[0];!0===Ur?(Er=1,Sr=0):(Er=0,Sr=1);var kr={HIGH:Er,LOW:Sr},Ir=new lr(1),jr=new ur(Ir.buffer),xr=kr.HIGH,Fr=kr.LOW;function Tr(r,t,n,e){return Ir[0]=r,t[e]=jr[xr],t[e+n]=jr[Fr],t}function Vr(r){return Tr(r,[0,0],1,0)}H(Vr,"assign",Tr);var Or=!0===Ur?0:1,Pr=new lr(1),$r=new ur(Pr.buffer);function Gr(r,t){return Pr[0]=r,$r[Or]=t>>>0,Pr[0]}function Hr(r){return 0|r}var Wr,Cr,Lr=2147483647,Mr=2147483648,Rr=!0===Ur?1:0,Zr=new lr(1),qr=new ur(Zr.buffer);function Xr(r){return Zr[0]=r,qr[Rr]}!0===Ur?(Wr=1,Cr=0):(Wr=0,Cr=1);var Yr={HIGH:Wr,LOW:Cr},zr=new lr(1),Br=new ur(zr.buffer),Dr=Yr.HIGH,Jr=Yr.LOW;function Kr(r,t){return Br[Dr]=r,Br[Jr]=t,zr[0]}var Qr=[0,0];function rt(r,t){var n,e;return Vr.assign(r,Qr,1,0),n=Qr[0],n&=Lr,e=Xr(t),Kr(n|=e&=Mr,Qr[1])}var tt=1072693247,nt=1e300,et=1e-300;var it=!0===Ur?1:0,at=new lr(1),ot=new ur(at.buffer);function ut(r,t){return at[0]=r,ot[it]=t>>>0,at[0]}var ft=1023;var ct=1048575,st=1048576,pt=1072693248,lt=536870912,ht=524288,vt=20,yt=9007199254740992,gt=.9617966939259756,dt=.9617967009544373,bt=-7.028461650952758e-9,wt=[1,1.5],mt=[0,.5849624872207642],Nt=[0,1.350039202129749e-8];var At=1.4426950408889634,_t=1.4426950216293335,Et=1.9259629911266175e-8;var St=1023,Ut=-1023,kt=-1074,It=22250738585072014e-324,jt=4503599627370496;function xt(r,t,n,e){return W(r)||Y(r)?(t[e]=r,t[e+n]=0,t):0!==r&&B(r)<It?(t[e]=r*jt,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}H((function(r){return xt(r,[0,0],1,0)}),"assign",xt);var Ft=2146435072;var Tt=2220446049250313e-31,Vt=2148532223,Ot=[0,0],Pt=[0,0];function $t(r,t){var n,e;return 0===t||0===r||W(r)||Y(r)?r:(xt(r,Ot,1,0),r=Ot[0],t+=Ot[1],t+=function(r){var t=Xr(r);return(t=(t&Ft)>>>20)-ft|0}(r),t<kt?rt(0,r):t>St?r<0?X:Z:(t<=Ut?(t+=52,e=Tt):e=1,Vr.assign(r,Pt,1,0),n=Pt[0],n&=Vt,e*Kr(n|=t+ft<<20,Pt[1])))}var Gt=.6931471805599453,Ht=1048575;var Wt=1048576,Ct=1071644672,Lt=20,Mt=.6931471824645996,Rt=-1.904654299957768e-9;var Zt=1072693247,qt=1105199104,Xt=1139802112,Yt=1083179008,zt=1072693248,Bt=1083231232,Dt=3230714880,Jt=31,Kt=1e300,Qt=1e-300,rn=8008566259537294e-32,tn=[0,0],nn=[0,0];function en(r,t){var n,e,i,a,o,u,f,c,s,p,l,h,v,y;if(W(r)||W(t))return NaN;if(Vr.assign(t,tn,1,0),o=tn[0],0===tn[1]){if(0===t)return 1;if(1===t)return r;if(-1===t)return 1/r;if(.5===t)return z(r);if(-.5===t)return 1/z(r);if(2===t)return r*r;if(3===t)return r*r*r;if(4===t)return(r*=r)*r;if(Y(t))return function(r,t){return-1===r?(r-r)/(r-r):1===r?1:B(r)<1==(t===Z)?0:Z}(r,t)}if(Vr.assign(r,tn,1,0),a=tn[0],0===tn[1]){if(0===a)return function(r,t){return t===X?Z:t===Z?0:t>0?R(t)?r:0:R(t)?rt(Z,r):Z}(r,t);if(1===r)return 1;if(-1===r&&R(t))return-1;if(Y(r))return r===X?en(-0,-t):t<0?0:Z}if(r<0&&!1===L(t))return(r-r)/(r-r);if(i=B(r),n=a&Lr|0,e=o&Lr|0,f=o>>>Jt|0,u=(u=a>>>Jt|0)&&R(t)?-1:1,e>qt){if(e>Xt)return function(r,t){return(Xr(r)&Lr)<=tt?t<0?nt*nt:et*et:t>0?nt*nt:et*et}(r,t);if(n<Zt)return 1===f?u*Kt*Kt:u*Qt*Qt;if(n>zt)return 0===f?u*Kt*Kt:u*Qt*Qt;l=function(r,t){var n,e,i,a,o,u,f;return a=(i=t-1)*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333)),n=(u=i*Et-a*At)-((e=Gr(e=(o=_t*i)+u,0))-o),r[0]=e,r[1]=n,r}(nn,i)}else l=function(r,t,n){var e,i,a,o,u,f,c,s,p,l,h,v,y,g,d,b,w,m,N,A,_;return m=0,n<st&&(m-=53,n=Xr(t*=yt)),m+=(n>>vt)-ft|0,n=(N=n&ct|0)|pt|0,N<=235662?A=0:N<767610?A=1:(A=0,m+=1,n-=st),o=Gr(i=(b=(t=ut(t,n))-(c=wt[A]))*(w=1/(t+c)),0),e=(n>>1|lt)+ht,f=ut(0,e+=A<<18),d=(a=i*i)*a*(0===(_=a)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),f=Gr(f=3+(a=o*o)+(d+=(u=w*(b-o*f-o*(t-(f-c))))*(o+i)),0),p=Gr(p=(b=o*f)+(w=u*f+(d-(f-3-a))*i),0),l=dt*p,y=(h=bt*p+(w-(p-b))*gt+Nt[A])-((v=Gr(v=l+h+(s=mt[A])+(g=m),0))-g-s-l),r[0]=v,r[1]=y,r}(nn,i,n);if(h=(p=(t-(c=Gr(t,0)))*l[0]+t*l[1])+(s=c*l[0]),Vr.assign(h,tn,1,0),v=Hr(tn[0]),y=Hr(tn[1]),v>=Yt){if(0!=(v-Yt|y))return u*Kt*Kt;if(p+rn>h-s)return u*Kt*Kt}else if((v&Lr)>=Bt){if(0!=(v-Dt|y))return u*Qt*Qt;if(p<=h-s)return u*Qt*Qt}return h=function(r,t,n){var e,i,a,o,u,f,c,s,p,l;return p=((s=r&Lr|0)>>Lt)-ft|0,c=0,s>Ct&&(i=ut(0,((c=r+(Wt>>p+1)>>>0)&~(Ht>>(p=((c&Lr)>>Lt)-ft|0)))>>>0),c=(c&Ht|Wt)>>Lt-p>>>0,r<0&&(c=-c),t-=i),r=Hr(r=Xr(f=1-((f=(a=(i=Gr(i=n+t,0))*Mt)+(o=(n-(i-t))*Gt+i*Rt))*(e=f-(i=f*f)*(0===(l=i)?.16666666666666602:.16666666666666602+l*(l*(6613756321437934e-20+l*(4.1381367970572385e-8*l-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((u=o-(f-a))+f*u)-f))),(r+=c<<Lt>>>0)>>Lt<=0?$t(f,c):ut(f,r)}(v,s,p),u*h}function an(r,t,n){return W(r)||W(t)||W(n)||t<=0||n<=0?NaN:r<n?0:1-en(n/r,t)}function on(r){return function(){return r}}function un(r,t,n){$(r,t,{configurable:!1,enumerable:!1,get:n})}function fn(r){return"number"==typeof r}H(an,"factory",(function(r,t){return W(r)||W(t)||r<=0||t<=0?on(NaN):function(n){if(W(n))return NaN;if(n<t)return 0;return 1-en(t/n,r)}}));var cn=q.prototype.toString;var sn=J();function pn(r){return"object"==typeof r&&(r instanceof q||(sn?function(r){try{return cn.call(r),!0}catch(r){return!1}}(r):"[object Number]"===nr(r)))}function ln(r){return fn(r)||pn(r)}function hn(r){return fn(r)&&r>0}function vn(r){return pn(r)&&r.valueOf()>0}function yn(r){return hn(r)||vn(r)}H(ln,"isPrimitive",fn),H(ln,"isObject",pn),H(yn,"isPrimitive",hn),H(yn,"isObject",vn);var gn=Math.ceil;function dn(r){return r<0?gn(r):C(r)}var bn=.6931471803691238,wn=1.9082149292705877e-10,mn=1.4426950408889634,Nn=709.782712893384,An=-745.1332191019411,_n=1/(1<<28),En=-_n;function Sn(r){var t;return W(r)||r===Z?r:r===X?0:r>Nn?Z:r<An?0:r>En&&r<_n?1+r:function(r,t,n){var e,i,a,o;return $t(1-(t-(e=r-t)*(a=e-(i=e*e)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),n)}(r-(t=dn(r<0?mn*r-.5:mn*r+.5))*bn,t*wn,t)}var Un=.6931471803691238,kn=1.9082149292705877e-10,In=0x40000000000000,jn=.3333333333333333,xn=1048575,Fn=2146435072,Tn=1048576,Vn=1072693248;function On(r){var t,n,e,i,a,o,u,f,c,s,p,l;return 0===r?X:W(r)||r<0?NaN:(a=0,(n=Xr(r))<Tn&&(a-=54,n=Xr(r*=In)),n>=Fn?r+r:(a+=(n>>20)-ft|0,a+=(f=(n&=xn)+614244&1048576|0)>>20|0,u=(r=ut(r,n|f^Vn))-1,(xn&2+n)<3?0===u?0===a?0:a*Un+a*kn:(o=u*u*(.5-jn*u),0===a?u-o:a*Un-(o-a*kn-u)):(f=n-398458|0,c=440401-n|0,i=(p=(l=(s=u/(2+u))*s)*l)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),e=l*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),o=e+i,(f|=c)>0?(t=.5*u*u,0===a?u-(t-s*(t+o)):a*Un-(t-(s*(t+o)+a*kn)-u)):0===a?u-s*(u-o):a*Un-(s*(u-o)-a*kn-u))))}function Pn(r,t){return W(r)||r<=0||W(t)||t<=0?NaN:On(t/r*Sn(1+1/r))}function $n(r,t){var n;return W(r)||r<=4||W(t)||t<=0?NaN:(n=6*(en(r,3)+en(r,2)-6*r-2),n/=r*(r-3)*(r-4))}function Gn(r,t){return r<=0||t<=0?NaN:r<=1?Z:r*t/(r-1)}function Hn(r,t){return r<=0||t<=0?NaN:t*en(2,1/r)}function Wn(r,t){return W(r)||r<=0||W(t)||t<=0?NaN:t}function Cn(r,t){return W(r)||r<=3||W(t)||t<=0?NaN:2*(1+r)/(r-3)*z((r-2)/r)}function Ln(r,t){return W(r)||r<=0||W(t)||t<=0?NaN:r<2?Z:t*t*r/(en(r-1,2)*(r-2))}var Mn=.6931471803691238,Rn=1.9082149292705877e-10,Zn=.41421356237309503,qn=-.2928932188134525,Xn=1.862645149230957e-9,Yn=5551115123125783e-32,zn=9007199254740992,Bn=.6666666666666666;function Dn(r){var t,n,e,i,a,o,u,f,c,s;if(r<-1||W(r))return NaN;if(-1===r)return X;if(r===Z)return r;if(0===r)return r;if(s=1,(e=r<0?-r:r)<Zn){if(e<Xn)return e<Yn?r:r-r*r*.5;r>qn&&(s=0,i=r,n=1)}return 0!==s&&(e<zn?(a=(s=((n=Xr(c=1+r))>>20)-ft)>0?1-(c-r):r-(c-1),a/=c):(s=((n=Xr(c=r))>>20)-ft,a=0),(n&=1048575)<434334?c=ut(c,1072693248|n):(s+=1,c=ut(c,1071644672|n),n=1048576-n>>2),i=c-1),t=.5*i*i,0===n?0===i?s*Mn+(a+=s*Rn):s*Mn-((f=t*(1-Bn*i))-(s*Rn+a)-i):(f=(u=(o=i/(2+i))*o)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(u),0===s?i-(t-o*(t+f)):s*Mn-(t-(o*(t+f)+(s*Rn+a))-i))}function Jn(r,t,n){return W(r)||W(t)||W(n)||t<=0||n<=0?NaN:r<n?X:Dn(-en(n/r,t))}function Kn(r,t,n){return W(r)||W(t)||W(n)||t<=0||n<=0?NaN:r>=n?On(t)+t*On(n)-(t+1)*On(r):X}function Qn(r,t,n){return W(r)||W(t)||W(n)||t<=0||n<=0?NaN:r>=n?t*en(n,t)/en(r,t+1):0}function re(r,t,n){return W(t)||W(n)||W(r)||t<=0||n<=0||r<0||r>1?NaN:n/en(1-r,1/t)}function te(){var r,t;if(!(this instanceof te))return 0===arguments.length?new te:new te(arguments[0],arguments[1]);if(arguments.length){if(t=arguments[1],!hn(r=arguments[0]))throw new TypeError(j("invalid argument. First shape parameter must be a positive number. Value: `%s`.",r));if(!hn(t))throw new TypeError(j("invalid argument. Second shape parameter must be a positive number. Value: `%s`.",t))}else r=1,t=1;return $(this,"alpha",{configurable:!1,enumerable:!0,get:function(){return r},set:function(t){if(!hn(t))throw new TypeError(j("invalid assignment. Must be a positive number. Value: `%s`.",t));r=t}}),$(this,"beta",{configurable:!1,enumerable:!0,get:function(){return t},set:function(r){if(!hn(r))throw new TypeError(j("invalid assignment. Must be a positive number. Value: `%s`.",r));t=r}}),this}function ne(r,t){var n;return W(r)||r<=0||W(t)||t<=0?NaN:r<2?Z:(n=t*t*r/(en(r-1,2)*(r-2)),z(n))}H(Jn,"factory",(function(r,t){return W(r)||W(t)||r<=0||t<=0?on(NaN):function(n){if(W(n))return NaN;if(n<t)return X;return Dn(-en(t/n,r))}})),H(Kn,"factory",(function(r,t){var n;return W(r)||W(t)||r<=0||t<=0?on(NaN):(n=On(r)+r*On(t),function(e){if(W(e))return NaN;if(e>=t)return n-(r+1)*On(e);return X})})),H(Qn,"factory",(function(r,t){var n;return W(r)||W(t)||r<=0||t<=0?on(NaN):(n=r*en(t,r),function(e){var i;if(W(e))return NaN;if(e>=t)return i=en(e,r+1),n/i;return 0})})),H(re,"factory",(function(r,t){var n;return W(r)||W(t)||r<=0||t<=0?on(NaN):(n=1/r,function(r){if(W(r)||r<0||r>1)return NaN;return t/en(1-r,n)})})),un(te.prototype,"entropy",(function(){return Pn(this.alpha,this.beta)})),un(te.prototype,"kurtosis",(function(){return $n(this.alpha,this.beta)})),un(te.prototype,"mean",(function(){return Gn(this.alpha,this.beta)})),un(te.prototype,"median",(function(){return Hn(this.alpha,this.beta)})),un(te.prototype,"mode",(function(){return Wn(this.alpha,this.beta)})),un(te.prototype,"skewness",(function(){return Cn(this.alpha,this.beta)})),un(te.prototype,"variance",(function(){return Ln(this.alpha,this.beta)})),H(te.prototype,"cdf",(function(r){return an(r,this.alpha,this.beta)})),H(te.prototype,"logcdf",(function(r){return Jn(r,this.alpha,this.beta)})),H(te.prototype,"logpdf",(function(r){return Kn(r,this.alpha,this.beta)})),H(te.prototype,"pdf",(function(r){return Qn(r,this.alpha,this.beta)})),H(te.prototype,"quantile",(function(r){return re(r,this.alpha,this.beta)}));var ee={};G(ee,"cdf",an),G(ee,"Pareto1",te),G(ee,"entropy",Pn),G(ee,"kurtosis",$n),G(ee,"logcdf",Jn),G(ee,"logpdf",Kn),G(ee,"mean",Gn),G(ee,"median",Hn),G(ee,"mode",Wn),G(ee,"pdf",Qn),G(ee,"quantile",re),G(ee,"skewness",Cn),G(ee,"stdev",ne),G(ee,"variance",Ln);export{te as Pareto1,an as cdf,ee as default,Pn as entropy,$n as kurtosis,Jn as logcdf,Kn as logpdf,Gn as mean,Hn as median,Wn as mode,Qn as pdf,re as quantile,Cn as skewness,ne as stdev,Ln as variance};
//# sourceMappingURL=mod.js.map
