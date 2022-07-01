// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=function(){try{return r({},"x",{}),!0}catch(r){return!1}},n=Object.defineProperty,e=Object.prototype,a=e.toString,u=e.__defineGetter__,i=e.__defineSetter__,o=e.__lookupGetter__,f=e.__lookupSetter__;var c=n,v=function(r,t,n){var c,v,l,p;if("object"!=typeof r||null===r||"[object Array]"===a.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===a.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((v="value"in n)&&(o.call(r,t)||f.call(r,t)?(c=r.__proto__,r.__proto__=e,delete r[t],r[t]=n.value,r.__proto__=c):r[t]=n.value),l="get"in n,p="set"in n,v&&(l||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&u&&u.call(r,t,n.get),p&&i&&i.call(r,t,n.set),r},l=t()?c:v,p=l;var y=function(r,t,n){p(r,t,{configurable:!1,enumerable:!0,writable:!1,value:n})},s=l;var b=function(r,t,n){s(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})};var h=function(r){return r!=r},N=Math.floor,m=N;var d=function(r){return m(r)===r},w=d;var g=function(r){return w(r/2)};var A=function(r){return g(r>0?r-1:r+1)},_=Number.POSITIVE_INFINITY,j=Number,U=j.NEGATIVE_INFINITY,O=_,E=U;var S=function(r){return r===O||r===E},I=Math.sqrt;var P=function(r){return Math.abs(r)};var T=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var F=function(){return T&&"symbol"==typeof Symbol.toStringTag},k=Object.prototype.toString,H=k;var V=function(r){return H.call(r)},G=Object.prototype.hasOwnProperty;var M=function(r,t){return null!=r&&G.call(r,t)},q="function"==typeof Symbol?Symbol.toStringTag:"",L=M,W=q,x=k;var Y=V,C=function(r){var t,n,e;if(null==r)return x.call(r);n=r[W],t=L(r,W);try{r[W]=void 0}catch(t){return x.call(r)}return e=x.call(r),t?r[W]=n:delete r[W],e},z=F()?C:Y,B=z,D="function"==typeof Uint32Array;var J="function"==typeof Uint32Array?Uint32Array:null,K=function(r){return D&&r instanceof Uint32Array||"[object Uint32Array]"===B(r)},Q=J;var R=function(){var r,t;if("function"!=typeof Q)return!1;try{t=new Q(t=[1,3.14,-3.14,4294967296,4294967297]),r=K(t)&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var X="function"==typeof Uint32Array?Uint32Array:void 0,Z=function(){throw new Error("not implemented")},$=R()?X:Z,rr=z,tr="function"==typeof Float64Array;var nr="function"==typeof Float64Array?Float64Array:null,er=function(r){return tr&&r instanceof Float64Array||"[object Float64Array]"===rr(r)},ar=nr;var ur=function(){var r,t;if("function"!=typeof ar)return!1;try{t=new ar([1,3.14,-3.14,NaN]),r=er(t)&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r};var ir="function"==typeof Float64Array?Float64Array:void 0,or=function(){throw new Error("not implemented")},fr=ur()?ir:or,cr=z,vr="function"==typeof Uint8Array;var lr="function"==typeof Uint8Array?Uint8Array:null,pr=function(r){return vr&&r instanceof Uint8Array||"[object Uint8Array]"===cr(r)},yr=lr;var sr=function(){var r,t;if("function"!=typeof yr)return!1;try{t=new yr(t=[1,3.14,-3.14,256,257]),r=pr(t)&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var br="function"==typeof Uint8Array?Uint8Array:void 0,hr=function(){throw new Error("not implemented")},Nr=sr()?br:hr,mr=z,dr="function"==typeof Uint16Array;var wr="function"==typeof Uint16Array?Uint16Array:null,gr=function(r){return dr&&r instanceof Uint16Array||"[object Uint16Array]"===mr(r)},Ar=wr;var _r=function(){var r,t;if("function"!=typeof Ar)return!1;try{t=new Ar(t=[1,3.14,-3.14,65536,65537]),r=gr(t)&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var jr,Ur="function"==typeof Uint16Array?Uint16Array:void 0,Or=function(){throw new Error("not implemented")},Er={uint16:_r()?Ur:Or,uint8:Nr};(jr=new Er.uint16(1))[0]=4660;var Sr,Ir,Pr=52===new Er.uint8(jr.buffer)[0];!0===Pr?(Sr=1,Ir=0):(Sr=0,Ir=1);var Tr=$,Fr={HIGH:Sr,LOW:Ir},kr=new fr(1),Hr=new Tr(kr.buffer),Vr=Fr.HIGH,Gr=Fr.LOW;var Mr=function(r,t){return kr[0]=t,r[0]=Hr[Vr],r[1]=Hr[Gr],r};var qr=function(r,t){return 1===arguments.length?Mr([0,0],r):Mr(r,t)},Lr=$,Wr=!0===Pr?0:1,xr=new fr(1),Yr=new Lr(xr.buffer);var Cr=function(r,t){return xr[0]=r,Yr[Wr]=t>>>0,xr[0]},zr=Cr;var Br=function(r){return 0|r},Dr=$,Jr=!0===Pr?1:0,Kr=new fr(1),Qr=new Dr(Kr.buffer);var Rr,Xr,Zr=function(r){return Kr[0]=r,Qr[Jr]};!0===Pr?(Rr=1,Xr=0):(Rr=0,Xr=1);var $r=$,rt={HIGH:Rr,LOW:Xr},tt=new fr(1),nt=new $r(tt.buffer),et=rt.HIGH,at=rt.LOW;var ut=function(r,t){return nt[et]=r,nt[at]=t,tt[0]},it=ut,ot=qr,ft=Zr,ct=it,vt=[0,0];var lt=function(r,t){var n,e;return ot(vt,r),n=vt[0],n&=2147483647,e=ft(t),ct(n|=e&=2147483648,vt[1])},pt=A,yt=lt,st=U,bt=_;var ht=function(r,t){return t===st?bt:t===bt?0:t>0?pt(t)?r:0:pt(t)?yt(bt,r):bt},Nt=Zr;var mt=function(r,t){return(2147483647&Nt(r))<=1072693247?t<0?1/0:0:t>0?1/0:0},dt=P,wt=_;var gt=function(r,t){return-1===r?(r-r)/(r-r):1===r?1:dt(r)<1==(t===wt)?0:wt},At=$,_t=!0===Pr?1:0,jt=new fr(1),Ut=new At(jt.buffer);var Ot=function(r,t){return jt[0]=r,Ut[_t]=t>>>0,jt[0]},Et=Ot;var St=Zr,It=zr,Pt=Et,Tt=function(r){return 0===r?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+.20697501780033842*r))))},Ft=[1,1.5],kt=[0,.5849624872207642],Ht=[0,1.350039202129749e-8];var Vt=zr,Gt=function(r){return 0===r?.5:.5+r*(.25*r-.3333333333333333)};var Mt=S,qt=h,Lt=P;var Wt=function(r,t){return qt(t)||Mt(t)?(r[0]=t,r[1]=0,r):0!==t&&Lt(t)<22250738585072014e-324?(r[0]=4503599627370496*t,r[1]=-52,r):(r[0]=t,r[1]=0,r)};var xt=Zr;var Yt=function(r){var t=xt(r);return(t=(2146435072&t)>>>20)-1023|0},Ct=_,zt=U,Bt=h,Dt=S,Jt=lt,Kt=function(r,t){return 1===arguments.length?Wt([0,0],r):Wt(r,t)},Qt=Yt,Rt=qr,Xt=it,Zt=[0,0],$t=[0,0];var rn=function(r,t){var n,e;return 0===t||0===r||Bt(r)||Dt(r)?r:(Kt(Zt,r),t+=Zt[1],(t+=Qt(r=Zt[0]))<-1074?Jt(0,r):t>1023?r<0?zt:Ct:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,Rt($t,r),n=$t[0],n&=2148532223,e*Xt(n|=t+1023<<20,$t[1])))},tn=rn;var nn=Zr,en=Et,an=zr,un=Br,on=tn,fn=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)};var cn=h,vn=A,ln=S,pn=d,yn=I,sn=P,bn=qr,hn=zr,Nn=Br,mn=U,dn=_,wn=ht,gn=mt,An=gt,_n=function(r,t,n){var e,a,u,i,o,f,c,v,l,p,y,s,b,h,N,m,d,w,g,A;return w=0,n<1048576&&(w-=53,n=St(t*=9007199254740992)),w+=(n>>20)-1023|0,n=1072693248|(g=1048575&n|0),g<=235662?A=0:g<767610?A=1:(A=0,w+=1,n-=1048576),e=524288+(n>>1|536870912),o=(d=1/((t=Pt(t,n))+(c=Ft[A])))*((m=t-c)-(i=It(a=m*d,0))*(f=Pt(0,e+=A<<18))-i*(t-(f-c))),N=(u=a*a)*u*Tt(u),f=It(f=3+(u=i*i)+(N+=o*(i+a)),0),b=(y=-7.028461650952758e-9*(l=It(l=(m=i*f)+(d=o*f+(N-(f-3-u))*a),0))+.9617966939259756*(d-(l-m))+Ht[A])-((s=It(s=(p=.9617967009544373*l)+y+(v=kt[A])+(h=w),0))-h-v-p),r[0]=s,r[1]=b,r},jn=function(r,t){var n,e,a,u,i;return n=(i=1.9259629911266175e-8*(a=t-1)-1.4426950408889634*(a*a*Gt(a)))-((e=Vt(e=(u=1.4426950216293335*a)+i,0))-u),r[0]=e,r[1]=n,r},Un=function(r,t,n){var e,a,u,i,o,f,c,v,l,p;return p=((l=2147483647&r|0)>>20)-1023|0,v=0,l>1071644672&&(e=((v=r+(1048576>>p+1)>>>0)&~(1048575>>(p=((2147483647&v)>>20)-1023|0)))>>>0,v=(1048575&v|1048576)>>20-p>>>0,r<0&&(v=-v),t-=u=en(0,e)),f=(o=.6931471805599453*(n-((u=an(u=n+t,0))-t))+-1.904654299957768e-9*u)-((c=(i=.6931471824645996*u)+o)-i),a=c-(u=c*c)*fn(u),r=nn(c=1-(c*a/(a-2)-(f+c*f)-c)),r=un(r),c=(r+=v<<20>>>0)>>20<=0?on(c,v):en(c,r)},On=1e300,En=[0,0],Sn=[0,0];var In=function r(t,n){var e,a,u,i,o,f,c,v,l,p,y,s,b,h;if(cn(t)||cn(n))return NaN;if(bn(En,n),o=En[0],0===En[1]){if(0===n)return 1;if(1===n)return t;if(-1===n)return 1/t;if(.5===n)return yn(t);if(-.5===n)return 1/yn(t);if(2===n)return t*t;if(3===n)return t*t*t;if(4===n)return(t*=t)*t;if(ln(n))return An(t,n)}if(bn(En,t),i=En[0],0===En[1]){if(0===i)return wn(t,n);if(1===t)return 1;if(-1===t&&vn(n))return-1;if(ln(t))return t===mn?r(-0,-n):n<0?0:dn}if(t<0&&!1===pn(n))return(t-t)/(t-t);if(u=sn(t),e=2147483647&i|0,a=2147483647&o|0,c=o>>>31|0,f=(f=i>>>31|0)&&vn(n)?-1:1,a>1105199104){if(a>1139802112)return gn(t,n);if(e<1072693247)return 1===c?f*On*On:1e-300*f*1e-300;if(e>1072693248)return 0===c?f*On*On:1e-300*f*1e-300;y=jn(Sn,u)}else y=_n(Sn,u,e);if(p=(n-(v=hn(n,0)))*y[0]+n*y[1],l=v*y[0],bn(En,s=p+l),b=Nn(En[0]),h=Nn(En[1]),b>=1083179008){if(0!=(b-1083179008|h))return f*On*On;if(p+8008566259537294e-32>s-l)return f*On*On}else if((2147483647&b)>=1083231232){if(0!=(b-3230714880|h))return 1e-300*f*1e-300;if(p<=s-l)return 1e-300*f*1e-300}return f*(s=Un(b,l,p))},Pn=In,Tn=h,Fn=Pn;var kn=function(r){return function(){return r}},Hn=kn,Vn=h,Gn=Pn;var Mn=function(r,t,n){return Tn(r)||Tn(t)||Tn(n)||t<=0||n<=0?NaN:r<n?0:1-Fn(n/r,t)};b(Mn,"factory",(function(r,t){return Vn(r)||Vn(t)||r<=0||t<=0?Hn(NaN):function(n){if(Vn(n))return NaN;if(n<t)return 0;return 1-Gn(t/n,r)}}));var qn=Mn,Ln=l;var Wn=function(r,t,n){Ln(r,t,{configurable:!1,enumerable:!1,get:n})};var xn=function(r){return"number"==typeof r},Yn=j.prototype.toString;var Cn=z,zn=j,Bn=function(r){try{return Yn.call(r),!0}catch(r){return!1}},Dn=F();var Jn=function(r){return"object"==typeof r&&(r instanceof zn||(Dn?Bn(r):"[object Number]"===Cn(r)))},Kn=xn,Qn=Jn;var Rn=b,Xn=function(r){return Kn(r)||Qn(r)},Zn=Jn;Rn(Xn,"isPrimitive",xn),Rn(Xn,"isObject",Zn);var $n=Xn.isPrimitive;var re=function(r){return $n(r)&&r>0},te=Xn.isObject;var ne=function(r){return te(r)&&r.valueOf()>0},ee=re,ae=ne;var ue=b,ie=function(r){return ee(r)||ae(r)},oe=ne;ue(ie,"isPrimitive",re),ue(ie,"isObject",oe);var fe=ie,ce=Math.ceil,ve=N,le=ce;var pe=tn,ye=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)};var se=h,be=function(r){return r<0?le(r):ve(r)},he=U,Ne=_,me=function(r,t,n){var e,a,u;return u=(e=r-t)-(a=e*e)*ye(a),pe(1-(t-e*u/(2-u)-r),n)};var de=Zr,we=Et,ge=h,Ae=U,_e=function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)},je=function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))},Ue=.6931471803691238,Oe=1.9082149292705877e-10;var Ee=function(r){var t,n,e,a,u,i,o,f,c,v,l;return 0===r?Ae:ge(r)||r<0?NaN:(a=0,(n=de(r))<1048576&&(a-=54,n=de(r*=0x40000000000000)),n>=2146435072?r+r:(a+=(n>>20)-1023|0,a+=(o=(n&=1048575)+614244&1048576|0)>>20|0,i=(r=we(r,n|1072693248^o))-1,(1048575&2+n)<3?0===i?0===a?0:a*Ue+a*Oe:(u=i*i*(.5-.3333333333333333*i),0===a?i-u:a*Ue-(u-a*Oe-i)):(o=n-398458|0,f=440401-n|0,e=(v=(l=(c=i/(2+i))*c)*l)*_e(v),u=l*je(v)+e,(o|=f)>0?(t=.5*i*i,0===a?i-(t-c*(t+u)):a*Ue-(t-(c*(t+u)+a*Oe)-i)):0===a?i-c*(i-u):a*Ue-(c*(i-u)-a*Oe-i))))},Se=h,Ie=function(r){var t;return se(r)||r===Ne?r:r===he?0:r>709.782712893384?Ne:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:(t=be(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5),me(r-.6931471803691238*t,1.9082149292705877e-10*t,t))},Pe=Ee;var Te=function(r,t){return Se(r)||r<=0||Se(t)||t<=0?NaN:Pe(t/r*Ie(1+1/r))},Fe=h,ke=Pn;var He=function(r,t){var n;return Fe(r)||r<=4||Fe(t)||t<=0?NaN:(n=6*(ke(r,3)+ke(r,2)-6*r-2),n/=r*(r-3)*(r-4))},Ve=_;var Ge=function(r,t){return r<=0||t<=0?NaN:r<=1?Ve:r*t/(r-1)},Me=Pn;var qe=function(r,t){return r<=0||t<=0?NaN:t*Me(2,1/r)},Le=h;var We=function(r,t){return Le(r)||r<=0||Le(t)||t<=0?NaN:t},xe=h,Ye=I;var Ce=function(r,t){return xe(r)||r<=3||xe(t)||t<=0?NaN:2*(1+r)/(r-3)*Ye((r-2)/r)},ze=h,Be=Pn,De=_;var Je=function(r,t){return ze(r)||r<=0||ze(t)||t<=0?NaN:r<2?De:t*t*r/(Be(r-1,2)*(r-2))};var Ke=h,Qe=Zr,Re=Et,Xe=_,Ze=U,$e=function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))},ra=.6931471803691238,ta=1.9082149292705877e-10;var na=function(r){var t,n,e,a,u,i,o,f,c,v;if(r<-1||Ke(r))return NaN;if(-1===r)return Ze;if(r===Xe)return r;if(0===r)return r;if(v=1,(e=r<0?-r:r)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(v=0,a=r,n=1)}return 0!==v&&(e<9007199254740992?(u=(v=((n=Qe(c=1+r))>>20)-1023)>0?1-(c-r):r-(c-1),u/=c):(v=((n=Qe(c=r))>>20)-1023,u=0),(n&=1048575)<434334?c=Re(c,1072693248|n):(v+=1,c=Re(c,1071644672|n),n=1048576-n>>2),a=c-1),t=.5*a*a,0===n?0===a?v*ra+(u+=v*ta):v*ra-((f=t*(1-.6666666666666666*a))-(v*ta+u)-a):(f=(o=(i=a/(2+a))*i)*$e(o),0===v?a-(t-i*(t+f)):v*ra-(t-(i*(t+f)+(v*ta+u))-a))},ea=h,aa=na,ua=Pn,ia=U;var oa=kn,fa=h,ca=na,va=Pn,la=U;var pa=function(r,t,n){return ea(r)||ea(t)||ea(n)||t<=0||n<=0?NaN:r<n?ia:aa(-ua(n/r,t))};b(pa,"factory",(function(r,t){return fa(r)||fa(t)||r<=0||t<=0?oa(NaN):function(n){if(fa(n))return NaN;if(n<t)return la;return ca(-va(t/n,r))}}));var ya=pa,sa=h,ba=Ee,ha=U;var Na=kn,ma=h,da=Ee,wa=U;var ga=function(r,t,n){return sa(r)||sa(t)||sa(n)||t<=0||n<=0?NaN:r>=n?ba(t)+t*ba(n)-(t+1)*ba(r):ha};b(ga,"factory",(function(r,t){var n;return ma(r)||ma(t)||r<=0||t<=0?Na(NaN):(n=da(r)+r*da(t),function(e){if(ma(e))return NaN;if(e>=t)return n-(r+1)*da(e);return wa})}));var Aa=ga,_a=h,ja=Pn;var Ua=kn,Oa=h,Ea=Pn;var Sa=function(r,t,n){return _a(r)||_a(t)||_a(n)||t<=0||n<=0?NaN:r>=n?t*ja(n,t)/ja(r,t+1):0};b(Sa,"factory",(function(r,t){var n;return Oa(r)||Oa(t)||r<=0||t<=0?Ua(NaN):(n=r*Ea(t,r),function(e){var a;if(Oa(e))return NaN;if(e>=t)return a=Ea(e,r+1),n/a;return 0})}));var Ia=Sa,Pa=h,Ta=Pn;var Fa=kn,ka=h,Ha=Pn;var Va=function(r,t,n){return Pa(t)||Pa(n)||Pa(r)||t<=0||n<=0||r<0||r>1?NaN:n/Ta(1-r,1/t)};b(Va,"factory",(function(r,t){var n;return ka(r)||ka(t)||r<=0||t<=0?Fa(NaN):(n=1/r,function(r){if(ka(r)||r<0||r>1)return NaN;return t/Ha(1-r,n)})}));var Ga=Va,Ma=l,qa=b,La=Wn,Wa=fe.isPrimitive,xa=Te,Ya=He,Ca=Ge,za=qe,Ba=We,Da=Ce,Ja=Je,Ka=qn,Qa=ya,Ra=Aa,Xa=Ia,Za=Ga;function $a(){var r,t;if(!(this instanceof $a))return 0===arguments.length?new $a:new $a(arguments[0],arguments[1]);if(arguments.length){if(t=arguments[1],!Wa(r=arguments[0]))throw new TypeError("invalid argument. First shape parameter `alpha` must be a positive number. Value: `"+r+"`");if(!Wa(t))throw new TypeError("invalid argument. Second shape parameter `beta` must be a positive number. Value: `"+t+"`")}else r=1,t=1;return Ma(this,"alpha",{configurable:!1,enumerable:!0,get:function(){return r},set:function(t){if(!Wa(t))throw new TypeError("invalid value. Must be a positive number. Value: `"+t+"`");r=t}}),Ma(this,"beta",{configurable:!1,enumerable:!0,get:function(){return t},set:function(r){if(!Wa(r))throw new TypeError("invalid value. Must be a positive number. Value: `"+r+"`");t=r}}),this}La($a.prototype,"entropy",(function(){return xa(this.alpha,this.beta)})),La($a.prototype,"kurtosis",(function(){return Ya(this.alpha,this.beta)})),La($a.prototype,"mean",(function(){return Ca(this.alpha,this.beta)})),La($a.prototype,"median",(function(){return za(this.alpha,this.beta)})),La($a.prototype,"mode",(function(){return Ba(this.alpha,this.beta)})),La($a.prototype,"skewness",(function(){return Da(this.alpha,this.beta)})),La($a.prototype,"variance",(function(){return Ja(this.alpha,this.beta)})),qa($a.prototype,"cdf",(function(r){return Ka(r,this.alpha,this.beta)})),qa($a.prototype,"logcdf",(function(r){return Qa(r,this.alpha,this.beta)})),qa($a.prototype,"logpdf",(function(r){return Ra(r,this.alpha,this.beta)})),qa($a.prototype,"pdf",(function(r){return Xa(r,this.alpha,this.beta)})),qa($a.prototype,"quantile",(function(r){return Za(r,this.alpha,this.beta)}));var ru=$a,tu=h,nu=I,eu=Pn,au=_;var uu=function(r,t){var n;return tu(r)||r<=0||tu(t)||t<=0?NaN:r<2?au:(n=t*t*r/(eu(r-1,2)*(r-2)),nu(n))},iu={};y(iu,"cdf",qn),y(iu,"Pareto1",ru),y(iu,"entropy",Te),y(iu,"kurtosis",He),y(iu,"logcdf",ya),y(iu,"logpdf",Aa),y(iu,"mean",Ge),y(iu,"median",qe),y(iu,"mode",We),y(iu,"pdf",Ia),y(iu,"quantile",Ga),y(iu,"skewness",Ce),y(iu,"stdev",uu),y(iu,"variance",Je);export{ru as Pareto1,qn as cdf,iu as default,Te as entropy,He as kurtosis,ya as logcdf,Aa as logpdf,Ge as mean,qe as median,We as mode,Ia as pdf,Ga as quantile,Ce as skewness,uu as stdev,Je as variance};
//# sourceMappingURL=mod.js.map