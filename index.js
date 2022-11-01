// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(r){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty,n=Object.prototype,i=n.toString,a=n.__defineGetter__,o=n.__defineSetter__,u=n.__lookupGetter__,f=n.__lookupSetter__,c=function(){try{return t({},"x",{}),!0}catch(r){return!1}}()?e:function(r,t,e){var c,s,p,l;if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===i.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((s="value"in e)&&(u.call(r,t)||f.call(r,t)?(c=r.__proto__,r.__proto__=n,delete r[t],r[t]=e.value,r.__proto__=c):r[t]=e.value),p="get"in e,l="set"in e,s&&(p||l))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&a&&a.call(r,t,e.get),l&&o&&o.call(r,t,e.set),r};function s(r,t,e){c(r,t,{configurable:!1,enumerable:!0,writable:!1,value:e})}function p(r,t,e){c(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function l(r){return r!=r}var h=Math.floor;function y(r){return h(r)===r}function d(r){return y(r/2)}function g(r){return d(r>0?r-1:r+1)}var v=Number.POSITIVE_INFINITY,b=Number,w=b.NEGATIVE_INFINITY;function m(r){return r===v||r===w}var N=Math.sqrt;function A(r){return Math.abs(r)}var _="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function E(){return _&&"symbol"==typeof Symbol.toStringTag}var k,S=Object.prototype.toString,U=Object.prototype.hasOwnProperty,j="function"==typeof Symbol?Symbol.toStringTag:"",x=E()?function(r){var t,e,n,i,a;if(null==r)return S.call(r);e=r[j],a=j,t=null!=(i=r)&&U.call(i,a);try{r[j]=void 0}catch(t){return S.call(r)}return n=S.call(r),t?r[j]=e:delete r[j],n}:function(r){return S.call(r)},I="function"==typeof Uint32Array,T="function"==typeof Uint32Array?Uint32Array:null,F="function"==typeof Uint32Array?Uint32Array:void 0;k=function(){var r,t,e;if("function"!=typeof T)return!1;try{t=new T(t=[1,3.14,-3.14,4294967296,4294967297]),e=t,r=(I&&e instanceof Uint32Array||"[object Uint32Array]"===x(e))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?F:function(){throw new Error("not implemented")};var O,V=k,P="function"==typeof Float64Array,$="function"==typeof Float64Array?Float64Array:null,G="function"==typeof Float64Array?Float64Array:void 0;O=function(){var r,t,e;if("function"!=typeof $)return!1;try{t=new $([1,3.14,-3.14,NaN]),e=t,r=(P&&e instanceof Float64Array||"[object Float64Array]"===x(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?G:function(){throw new Error("not implemented")};var H,M=O,W="function"==typeof Uint8Array,C="function"==typeof Uint8Array?Uint8Array:null,L="function"==typeof Uint8Array?Uint8Array:void 0;H=function(){var r,t,e;if("function"!=typeof C)return!1;try{t=new C(t=[1,3.14,-3.14,256,257]),e=t,r=(W&&e instanceof Uint8Array||"[object Uint8Array]"===x(e))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?L:function(){throw new Error("not implemented")};var R,Z=H,q="function"==typeof Uint16Array,X="function"==typeof Uint16Array?Uint16Array:null,Y="function"==typeof Uint16Array?Uint16Array:void 0;R=function(){var r,t,e;if("function"!=typeof X)return!1;try{t=new X(t=[1,3.14,-3.14,65536,65537]),e=t,r=(q&&e instanceof Uint16Array||"[object Uint16Array]"===x(e))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Y:function(){throw new Error("not implemented")};var z,B={uint16:R,uint8:Z};(z=new B.uint16(1))[0]=4660;var D,J,K=52===new B.uint8(z.buffer)[0];!0===K?(D=1,J=0):(D=0,J=1);var Q={HIGH:D,LOW:J},rr=new M(1),tr=new V(rr.buffer),er=Q.HIGH,nr=Q.LOW;function ir(r,t){return rr[0]=t,r[0]=tr[er],r[1]=tr[nr],r}function ar(r,t){return 1===arguments.length?ir([0,0],r):ir(r,t)}var or=!0===K?0:1,ur=new M(1),fr=new V(ur.buffer);function cr(r,t){return ur[0]=r,fr[or]=t>>>0,ur[0]}function sr(r){return 0|r}var pr,lr,hr=!0===K?1:0,yr=new M(1),dr=new V(yr.buffer);function gr(r){return yr[0]=r,dr[hr]}!0===K?(pr=1,lr=0):(pr=0,lr=1);var vr={HIGH:pr,LOW:lr},br=new M(1),wr=new V(br.buffer),mr=vr.HIGH,Nr=vr.LOW;function Ar(r,t){return wr[mr]=r,wr[Nr]=t,br[0]}var _r=[0,0];function Er(r,t){var e,n;return ar(_r,r),e=_r[0],e&=2147483647,n=gr(t),Ar(e|=n&=2147483648,_r[1])}var kr=!0===K?1:0,Sr=new M(1),Ur=new V(Sr.buffer);function jr(r,t){return Sr[0]=r,Ur[kr]=t>>>0,Sr[0]}var xr=1023,Ir=1048576,Tr=[1,1.5],Fr=[0,.5849624872207642],Or=[0,1.350039202129749e-8];function Vr(r,t,e,n){return l(r)||m(r)?(t[n]=r,t[n+e]=0,t):0!==r&&A(r)<22250738585072014e-324?(t[n]=4503599627370496*r,t[n+e]=-52,t):(t[n]=r,t[n+e]=0,t)}p((function(r){return Vr(r,[0,0],1,0)}),"assign",Vr);var Pr=[0,0],$r=[0,0];function Gr(r,t){var e,n;return 0===t||0===r||l(r)||m(r)?r:(Vr(r,Pr,1,0),t+=Pr[1],t+=function(r){var t=gr(r);return(t=(2146435072&t)>>>20)-xr|0}(r=Pr[0]),t<-1074?Er(0,r):t>1023?r<0?w:v:(t<=-1023?(t+=52,n=2220446049250313e-31):n=1,ar($r,r),e=$r[0],e&=2148532223,n*Ar(e|=t+xr<<20,$r[1])))}var Hr=2147483647,Mr=1048575,Wr=1048576,Cr=2147483647,Lr=1083179008,Rr=1e300,Zr=1e-300,qr=[0,0],Xr=[0,0];function Yr(r,t){var e,n,i,a,o,u,f,c,s,p,h,d,b,_;if(l(r)||l(t))return NaN;if(ar(qr,t),o=qr[0],0===qr[1]){if(0===t)return 1;if(1===t)return r;if(-1===t)return 1/r;if(.5===t)return N(r);if(-.5===t)return 1/N(r);if(2===t)return r*r;if(3===t)return r*r*r;if(4===t)return(r*=r)*r;if(m(t))return function(r,t){return-1===r?(r-r)/(r-r):1===r?1:A(r)<1==(t===v)?0:v}(r,t)}if(ar(qr,r),a=qr[0],0===qr[1]){if(0===a)return function(r,t){return t===w?v:t===v?0:t>0?g(t)?r:0:g(t)?Er(v,r):v}(r,t);if(1===r)return 1;if(-1===r&&g(t))return-1;if(m(r))return r===w?Yr(-0,-t):t<0?0:v}if(r<0&&!1===y(t))return(r-r)/(r-r);if(i=A(r),e=a&Cr|0,n=o&Cr|0,f=o>>>31|0,u=(u=a>>>31|0)&&g(t)?-1:1,n>1105199104){if(n>1139802112)return function(r,t){return(2147483647&gr(r))<=1072693247?t<0?1/0:0:t>0?1/0:0}(r,t);if(e<1072693247)return 1===f?u*Rr*Rr:u*Zr*Zr;if(e>1072693248)return 0===f?u*Rr*Rr:u*Zr*Zr;h=function(r,t){var e,n,i,a,o,u;return e=(o=1.9259629911266175e-8*(i=t-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((n=cr(n=(a=1.4426950216293335*i)+o,0))-a),r[0]=n,r[1]=e,r}(Xr,i)}else h=function(r,t,e){var n,i,a,o,u,f,c,s,p,l,h,y,d,g,v,b,w,m,N,A,_;return m=0,e<Ir&&(m-=53,e=gr(t*=9007199254740992)),m+=(e>>20)-xr|0,e=1072693248|(N=1048575&e|0),N<=235662?A=0:N<767610?A=1:(A=0,m+=1,e-=Ir),o=cr(i=(b=(t=jr(t,e))-(c=Tr[A]))*(w=1/(t+c)),0),n=524288+(e>>1|536870912),f=jr(0,n+=A<<18),v=(a=i*i)*a*(0===(_=a)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),f=cr(f=3+(a=o*o)+(v+=(u=w*(b-o*f-o*(t-(f-c))))*(o+i)),0),d=(h=-7.028461650952758e-9*(p=cr(p=(b=o*f)+(w=u*f+(v-(f-3-a))*i),0))+.9617966939259756*(w-(p-b))+Or[A])-((y=cr(y=(l=.9617967009544373*p)+h+(s=Fr[A])+(g=m),0))-g-s-l),r[0]=y,r[1]=d,r}(Xr,i,e);if(p=(t-(c=cr(t,0)))*h[0]+t*h[1],s=c*h[0],ar(qr,d=p+s),b=sr(qr[0]),_=sr(qr[1]),b>=Lr){if(0!=(b-Lr|_))return u*Rr*Rr;if(p+8008566259537294e-32>d-s)return u*Rr*Rr}else if((b&Cr)>=1083231232){if(0!=(b-3230714880|_))return u*Zr*Zr;if(p<=d-s)return u*Zr*Zr}return d=function(r,t,e){var n,i,a,o,u,f,c,s,p,l;return p=((s=r&Hr|0)>>20)-xr|0,c=0,s>1071644672&&(i=jr(0,((c=r+(Wr>>p+1)>>>0)&~(Mr>>(p=((c&Hr)>>20)-xr|0)))>>>0),c=(c&Mr|Wr)>>20-p>>>0,r<0&&(c=-c),t-=i),r=sr(r=gr(f=1-((f=(a=.6931471824645996*(i=cr(i=e+t,0)))+(o=.6931471805599453*(e-(i-t))+-1.904654299957768e-9*i))*(n=f-(i=f*f)*(0===(l=i)?.16666666666666602:.16666666666666602+l*(l*(6613756321437934e-20+l*(4.1381367970572385e-8*l-16533902205465252e-22))-.0027777777777015593)))/(n-2)-((u=o-(f-a))+f*u)-f))),(r+=c<<20>>>0)>>20<=0?Gr(f,c):jr(f,r)}(b,s,p),u*d}function zr(r,t,e){return l(r)||l(t)||l(e)||t<=0||e<=0?NaN:r<e?0:1-Yr(e/r,t)}function Br(r){return function(){return r}}function Dr(r,t,e){c(r,t,{configurable:!1,enumerable:!1,get:e})}function Jr(r){return"number"==typeof r}p(zr,"factory",(function(r,t){return l(r)||l(t)||r<=0||t<=0?Br(NaN):function(e){return l(e)?NaN:e<t?0:1-Yr(t/e,r)}}));var Kr=b.prototype.toString,Qr=E();function rt(r){return"object"==typeof r&&(r instanceof b||(Qr?function(r){try{return Kr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===x(r)))}function tt(r){return Jr(r)||rt(r)}function et(r){return Jr(r)&&r>0}function nt(r){return rt(r)&&r.valueOf()>0}function it(r){return et(r)||nt(r)}p(tt,"isPrimitive",Jr),p(tt,"isObject",rt),p(it,"isPrimitive",et),p(it,"isObject",nt);var at=Math.ceil;function ot(r){return r<0?at(r):h(r)}var ut=1.4426950408889634,ft=1/(1<<28);function ct(r){var t;return l(r)||r===v?r:r===w?0:r>709.782712893384?v:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<ft?1+r:function(r,t,e){var n,i,a,o;return Gr(1-(t-(n=r-t)*(a=n-(i=n*n)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),e)}(r-.6931471803691238*(t=ot(r<0?ut*r-.5:ut*r+.5)),1.9082149292705877e-10*t,t)}var st=.6931471803691238,pt=1.9082149292705877e-10,lt=1048575;function ht(r){var t,e,n,i,a,o,u,f,c,s,p,h;return 0===r?w:l(r)||r<0?NaN:(a=0,(e=gr(r))<1048576&&(a-=54,e=gr(r*=0x40000000000000)),e>=2146435072?r+r:(a+=(e>>20)-xr|0,a+=(f=614244+(e&=lt)&1048576|0)>>20|0,u=(r=jr(r,e|1072693248^f))-1,(lt&2+e)<3?0===u?0===a?0:a*st+a*pt:(o=u*u*(.5-.3333333333333333*u),0===a?u-o:a*st-(o-a*pt-u)):(f=e-398458|0,c=440401-e|0,i=(p=(h=(s=u/(2+u))*s)*h)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),n=h*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),o=n+i,(f|=c)>0?(t=.5*u*u,0===a?u-(t-s*(t+o)):a*st-(t-(s*(t+o)+a*pt)-u)):0===a?u-s*(u-o):a*st-(s*(u-o)-a*pt-u))))}function yt(r,t){return l(r)||r<=0||l(t)||t<=0?NaN:ht(t/r*ct(1+1/r))}function dt(r,t){var e;return l(r)||r<=4||l(t)||t<=0?NaN:(e=6*(Yr(r,3)+Yr(r,2)-6*r-2),e/=r*(r-3)*(r-4))}function gt(r,t){return r<=0||t<=0?NaN:r<=1?v:r*t/(r-1)}function vt(r,t){return r<=0||t<=0?NaN:t*Yr(2,1/r)}function bt(r,t){return l(r)||r<=0||l(t)||t<=0?NaN:t}function wt(r,t){return l(r)||r<=3||l(t)||t<=0?NaN:2*(1+r)/(r-3)*N((r-2)/r)}function mt(r,t){return l(r)||r<=0||l(t)||t<=0?NaN:r<2?v:t*t*r/(Yr(r-1,2)*(r-2))}var Nt=.6931471803691238,At=1.9082149292705877e-10;function _t(r){var t,e,n,i,a,o,u,f,c,s;if(r<-1||l(r))return NaN;if(-1===r)return w;if(r===v)return r;if(0===r)return r;if(s=1,(n=r<0?-r:r)<.41421356237309503){if(n<1.862645149230957e-9)return n<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(s=0,i=r,e=1)}return 0!==s&&(n<9007199254740992?(a=(s=((e=gr(c=1+r))>>20)-xr)>0?1-(c-r):r-(c-1),a/=c):(s=((e=gr(c=r))>>20)-xr,a=0),(e&=1048575)<434334?c=jr(c,1072693248|e):(s+=1,c=jr(c,1071644672|e),e=1048576-e>>2),i=c-1),t=.5*i*i,0===e?0===i?s*Nt+(a+=s*At):s*Nt-((f=t*(1-.6666666666666666*i))-(s*At+a)-i):(f=(u=(o=i/(2+i))*o)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(u),0===s?i-(t-o*(t+f)):s*Nt-(t-(o*(t+f)+(s*At+a))-i))}function Et(r,t,e){return l(r)||l(t)||l(e)||t<=0||e<=0?NaN:r<e?w:_t(-Yr(e/r,t))}function kt(r,t,e){return l(r)||l(t)||l(e)||t<=0||e<=0?NaN:r>=e?ht(t)+t*ht(e)-(t+1)*ht(r):w}function St(r,t,e){return l(r)||l(t)||l(e)||t<=0||e<=0?NaN:r>=e?t*Yr(e,t)/Yr(r,t+1):0}function Ut(r,t,e){return l(t)||l(e)||l(r)||t<=0||e<=0||r<0||r>1?NaN:e/Yr(1-r,1/t)}function jt(r){return"number"==typeof r}function xt(r){var t,e="";for(t=0;t<r;t++)e+="0";return e}function It(r,t,e){var n=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=e?r+xt(i):xt(i)+r,n&&(r="-"+r)),r}p(Et,"factory",(function(r,t){return l(r)||l(t)||r<=0||t<=0?Br(NaN):function(e){return l(e)?NaN:e<t?w:_t(-Yr(t/e,r))}})),p(kt,"factory",(function(r,t){var e;return l(r)||l(t)||r<=0||t<=0?Br(NaN):(e=ht(r)+r*ht(t),function(n){return l(n)?NaN:n>=t?e-(r+1)*ht(n):w})})),p(St,"factory",(function(r,t){var e;return l(r)||l(t)||r<=0||t<=0?Br(NaN):(e=r*Yr(t,r),function(n){var i;return l(n)?NaN:n>=t?(i=Yr(n,r+1),e/i):0})})),p(Ut,"factory",(function(r,t){var e;return l(r)||l(t)||r<=0||t<=0?Br(NaN):(e=1/r,function(r){return l(r)||r<0||r>1?NaN:t/Yr(1-r,e)})}));var Tt=String.prototype.toLowerCase,Ft=String.prototype.toUpperCase;function Ot(r){var t,e,n;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(e=r.arg,n=parseInt(e,10),!isFinite(n)){if(!jt(e))throw new Error("invalid integer. Value: "+e);n=0}return n<0&&("u"===r.specifier||10!==t)&&(n=4294967295+n+1),n<0?(e=(-n).toString(t),r.precision&&(e=It(e,r.precision,r.padRight)),e="-"+e):(e=n.toString(t),n||r.precision?r.precision&&(e=It(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===t&&(r.alternate&&(e="0x"+e),e=r.specifier===Ft.call(r.specifier)?Ft.call(e):Tt.call(e)),8===t&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function Vt(r){return"string"==typeof r}var Pt=Math.abs,$t=String.prototype.toLowerCase,Gt=String.prototype.toUpperCase,Ht=String.prototype.replace,Mt=/e\+(\d)$/,Wt=/e-(\d)$/,Ct=/^(\d+)$/,Lt=/^(\d+)e/,Rt=/\.0$/,Zt=/\.0*e/,qt=/(\..*[^0])0*e/;function Xt(r){var t,e,n=parseFloat(r.arg);if(!isFinite(n)){if(!jt(r.arg))throw new Error("invalid floating-point number. Value: "+e);n=r.arg}switch(r.specifier){case"e":case"E":e=n.toExponential(r.precision);break;case"f":case"F":e=n.toFixed(r.precision);break;case"g":case"G":Pt(n)<1e-4?((t=r.precision)>0&&(t-=1),e=n.toExponential(t)):e=n.toPrecision(r.precision),r.alternate||(e=Ht.call(e,qt,"$1e"),e=Ht.call(e,Zt,"e"),e=Ht.call(e,Rt,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=Ht.call(e,Mt,"e+0$1"),e=Ht.call(e,Wt,"e-0$1"),r.alternate&&(e=Ht.call(e,Ct,"$1."),e=Ht.call(e,Lt,"$1.e")),n>=0&&r.sign&&(e=r.sign+e),e=r.specifier===Gt.call(r.specifier)?Gt.call(e):$t.call(e)}function Yt(r){var t,e="";for(t=0;t<r;t++)e+=" ";return e}function zt(r,t,e){var n=t-r.length;return n<0?r:r=e?r+Yt(n):Yt(n)+r}var Bt=String.fromCharCode,Dt=isNaN,Jt=Array.isArray;function Kt(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function Qt(r){var t,e,n,i,a,o,u,f,c;if(!Jt(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",u=1,f=0;f<r.length;f++)if(Vt(n=r[f]))o+=n;else{if(t=void 0!==n.precision,!(n=Kt(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),e=n.flags,c=0;c<e.length;c++)switch(i=e.charAt(c)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,Dt(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,Dt(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=Ot(n);break;case"s":n.maxWidth=t?n.precision:-1;break;case"c":if(!Dt(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Dt(a)?String(n.arg):Bt(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=Xt(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=It(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=zt(n.arg,n.width,n.padRight)),o+=n.arg||"",u+=1}return o}var re=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function te(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function ee(r){var t,e,n,i;for(e=[],i=0,n=re.exec(r);n;)(t=r.slice(i,re.lastIndex-n[0].length)).length&&e.push(t),e.push(te(n)),i=re.lastIndex,n=re.exec(r);return(t=r.slice(i)).length&&e.push(t),e}function ne(r){return"string"==typeof r}function ie(r){var t,e,n;if(!ne(r))throw new TypeError(ie("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=ee(r),(e=new Array(arguments.length))[0]=t,n=1;n<e.length;n++)e[n]=arguments[n];return Qt.apply(null,e)}function ae(){var r,t;if(!(this instanceof ae))return 0===arguments.length?new ae:new ae(arguments[0],arguments[1]);if(arguments.length){if(t=arguments[1],!et(r=arguments[0]))throw new TypeError(ie("invalid argument. First shape parameter must be a positive number. Value: `%s`.",r));if(!et(t))throw new TypeError(ie("invalid argument. Second shape parameter must be a positive number. Value: `%s`.",t))}else r=1,t=1;return c(this,"alpha",{configurable:!1,enumerable:!0,get:function(){return r},set:function(t){if(!et(t))throw new TypeError(ie("invalid assignment. Must be a positive number. Value: `%s`.",t));r=t}}),c(this,"beta",{configurable:!1,enumerable:!0,get:function(){return t},set:function(r){if(!et(r))throw new TypeError(ie("invalid assignment. Must be a positive number. Value: `%s`.",r));t=r}}),this}function oe(r,t){var e;return l(r)||r<=0||l(t)||t<=0?NaN:r<2?v:(e=t*t*r/(Yr(r-1,2)*(r-2)),N(e))}Dr(ae.prototype,"entropy",(function(){return yt(this.alpha,this.beta)})),Dr(ae.prototype,"kurtosis",(function(){return dt(this.alpha,this.beta)})),Dr(ae.prototype,"mean",(function(){return gt(this.alpha,this.beta)})),Dr(ae.prototype,"median",(function(){return vt(this.alpha,this.beta)})),Dr(ae.prototype,"mode",(function(){return bt(this.alpha,this.beta)})),Dr(ae.prototype,"skewness",(function(){return wt(this.alpha,this.beta)})),Dr(ae.prototype,"variance",(function(){return mt(this.alpha,this.beta)})),p(ae.prototype,"cdf",(function(r){return zr(r,this.alpha,this.beta)})),p(ae.prototype,"logcdf",(function(r){return Et(r,this.alpha,this.beta)})),p(ae.prototype,"logpdf",(function(r){return kt(r,this.alpha,this.beta)})),p(ae.prototype,"pdf",(function(r){return St(r,this.alpha,this.beta)})),p(ae.prototype,"quantile",(function(r){return Ut(r,this.alpha,this.beta)}));var ue={};s(ue,"cdf",zr),s(ue,"Pareto1",ae),s(ue,"entropy",yt),s(ue,"kurtosis",dt),s(ue,"logcdf",Et),s(ue,"logpdf",kt),s(ue,"mean",gt),s(ue,"median",vt),s(ue,"mode",bt),s(ue,"pdf",St),s(ue,"quantile",Ut),s(ue,"skewness",wt),s(ue,"stdev",oe),s(ue,"variance",mt),r.Pareto1=ae,r.cdf=zr,r.default=ue,r.entropy=yt,r.kurtosis=dt,r.logcdf=Et,r.logpdf=kt,r.mean=gt,r.median=vt,r.mode=bt,r.pdf=St,r.quantile=Ut,r.skewness=wt,r.stdev=oe,r.variance=mt,Object.defineProperty(r,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((r="undefined"!=typeof globalThis?globalThis:r||self).pareto1={});
//# sourceMappingURL=index.js.map
