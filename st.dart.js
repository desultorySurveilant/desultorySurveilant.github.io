{}(function dartProgram(){function copyProperties(a,b){var u=Object.keys(a)
for(var t=0;t<u.length;t++){var s=u[t]
b[s]=a[s]}}var z=function(){var u=function(){}
u.prototype={p:{}}
var t=new u()
if(!(t.__proto__&&t.__proto__.p===u.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var s=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(s))return true}}catch(r){}return false}()
function setFunctionNamesIfNecessary(a){function t(){};if(typeof t.name=="string")return
for(var u=0;u<a.length;u++){var t=a[u]
var s=Object.keys(t)
for(var r=0;r<s.length;r++){var q=s[r]
var p=t[q]
if(typeof p=='function')p.name=q}}}function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var u=Object.create(b.prototype)
copyProperties(a.prototype,u)
a.prototype=u}}function inheritMany(a,b){for(var u=0;u<b.length;u++)inherit(b[u],a)}function mixin(a,b){copyProperties(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var u=a
a[b]=u
a[c]=function(){a[c]=function(){H.di(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.bM"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.bM"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.bM(this,a,b,c,true,false,e).prototype
return u}:tearOffGetter(a,b,c,e,f)}var x=0
function installTearOff(a,b,c,d,e,f,g,h,i,j){var u=[]
for(var t=0;t<h.length;t++){var s=h[t]
if(typeof s=='string')s=a[s]
s.$callName=g[t]
u.push(s)}var s=u[0]
s.$R=e
s.$D=f
var r=i
if(typeof r=="number")r+=x
var q=h[0]
s.$stubName=q
var p=tearOff(u,j||0,r,c,q,d)
a[b]=p
if(c)s.$tearOff=p}function installStaticTearOff(a,b,c,d,e,f,g,h){return installTearOff(a,b,true,false,c,d,e,f,g,h)}function installInstanceTearOff(a,b,c,d,e,f,g,h,i){return installTearOff(a,b,false,c,d,e,f,g,h,i)}function setOrUpdateInterceptorsByTag(a){var u=v.interceptorsByTag
if(!u){v.interceptorsByTag=a
return}copyProperties(a,u)}function setOrUpdateLeafTags(a){var u=v.leafTags
if(!u){v.leafTags=a
return}copyProperties(a,u)}function updateTypes(a){var u=v.types
var t=u.length
u.push.apply(u,a)
return t}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var u=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e)}},t=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixin,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:u(0,0,null,["$0"],0),_instance_1u:u(0,1,null,["$1"],0),_instance_2u:u(0,2,null,["$2"],0),_instance_0i:u(1,0,null,["$0"],0),_instance_1i:u(1,1,null,["$1"],0),_instance_2i:u(1,2,null,["$2"],0),_static_0:t(0,null,["$0"],0),_static_1:t(1,null,["$1"],0),_static_2:t(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,updateHolder:updateHolder,convertToFastObject:convertToFastObject,setFunctionNamesIfNecessary:setFunctionNamesIfNecessary,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}function getGlobalFromName(a){for(var u=0;u<w.length;u++){if(w[u]==C)continue
if(w[u][a])return w[u][a]}}var C={},H={bD:function bD(){},
a8:function(a){var u,t=H.m(v.mangledGlobalNames[a])
if(typeof t==="string")return t
u="minified:"+a
return u},
d6:function(a){return v.types[H.A(a)]},
e:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.an(a)
if(typeof u!=="string")throw H.f(H.bn(a))
return u},
cJ:function(a,b){var u,t
if(typeof a!=="string")H.am(H.bn(a))
u=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(u==null)return
if(3>=u.length)return H.bv(u,3)
t=H.m(u[3])
if(t!=null)return parseInt(a,10)
if(u[2]!=null)return parseInt(a,16)
return},
a_:function(a){return H.cI(a)+H.bJ(H.a5(a),0,null)},
cI:function(a){var u,t,s,r,q,p,o,n,m=null,l=J.y(a),k=l.constructor
if(typeof k=="function"){u=k.name
t=typeof u==="string"?u:m}else t=m
s=t==null
if(s||l===C.o||!!l.$iag){r=C.d(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?m:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
n=t.length
if(n>1&&C.f.K(t,0)===36){if(1>n)H.am(P.bF(1,m))
if(n>n)H.am(P.bF(n,m))
t=t.substring(1,n)}return H.a8(t)},
bP:function(a){throw H.f(H.bn(a))},
bv:function(a,b){if(a==null)J.cA(a)
throw H.f(H.ce(a,b))},
ce:function(a,b){var u,t,s,r="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.H(!0,b,r,null)
u=J.cg(a)
t=H.A(u.gi(a))
if(!(b<0)){if(typeof t!=="number")return H.bP(t)
s=b>=t}else s=!0
if(s){u=H.A(t==null?u.gi(a):t)
return new P.az(u,!0,b,r,"Index out of range")}return P.bF(b,r)},
bn:function(a){return new P.H(!0,a,null,null)},
a4:function(a){if(typeof a!=="number")throw H.f(H.bn(a))
return a},
f:function(a){var u
if(a==null)a=new P.ad()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.cn})
u.name=""}else u.toString=H.cn
return u},
cn:function(){return J.an(this.dartException)},
am:function(a){throw H.f(a)},
dh:function(a){throw H.f(new P.at(a))},
C:function(a){var u,t,s,r,q,p
a=H.df(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.bU([],[P.q])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.aQ(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
aR:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
c2:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
c1:function(a,b){return new H.aF(a,b==null?null:b.method)},
bE:function(a,b){var u=b==null,t=u?null:b.method
return new H.aE(a,t,u?null:b.receiver)},
T:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.bz(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.p.M(t,16)&8191)===10)switch(s){case 438:return f.$1(H.bE(H.e(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.c1(H.e(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.cp()
q=$.cq()
p=$.cr()
o=$.cs()
n=$.cv()
m=$.cw()
l=$.cu()
$.ct()
k=$.cy()
j=$.cx()
i=r.j(u)
if(i!=null)return f.$1(H.bE(H.m(u),i))
else{i=q.j(u)
if(i!=null){i.method="call"
return f.$1(H.bE(H.m(u),i))}else{i=p.j(u)
if(i==null){i=o.j(u)
if(i==null){i=n.j(u)
if(i==null){i=m.j(u)
if(i==null){i=l.j(u)
if(i==null){i=o.j(u)
if(i==null){i=k.j(u)
if(i==null){i=j.j(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.c1(H.m(u),i))}}return f.$1(new H.aU(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.ae()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.H(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.ae()
return a},
a6:function(a){var u
if(a==null)return new H.ai(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.ai(a)},
da:function(a,b,c,d,e,f){H.h(a,"$ibB")
switch(H.A(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.f(new P.b3("Unsupported number of arguments for wrapped closure"))},
aj:function(a,b){var u
H.A(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.da)
a.$identity=u
return u},
cE:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.aK().constructor.prototype):Object.create(new H.a9(l,l,l,l).constructor.prototype)
i.$initialize=i.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.B
if(typeof t!=="number")return t.k()
$.B=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}i.constructor=u
u.prototype=i
if(!e){s=H.c_(a,k,f)
s.$reflectionInfo=d}else{i.$static_name=g
s=k}if(typeof d=="number")r=function(h,a0){return function(){return h(a0)}}(H.d6,d)
else if(typeof d=="function")if(e)r=d
else{q=f?H.bZ:H.bA
r=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(d,q)}else throw H.f("Error in reflectionInfo.")
i.$S=r
i[j]=s
for(p=s,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.c_(a,n,f)
i[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}i.$C=p
i.$R=k.$R
i.$D=k.$D
return u},
cB:function(a,b,c,d){var u=H.bA
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
c_:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.cD(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.cB(t,!r,u,b)
if(t===0){r=$.B
if(typeof r!=="number")return r.k()
$.B=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.U
return new Function(r+H.e(q==null?$.U=H.as("self"):q)+";return "+p+"."+H.e(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.B
if(typeof r!=="number")return r.k()
$.B=r+1
o+=r
r="return function("+o+"){return this."
q=$.U
return new Function(r+H.e(q==null?$.U=H.as("self"):q)+"."+H.e(u)+"("+o+");}")()},
cC:function(a,b,c,d){var u=H.bA,t=H.bZ
switch(b?-1:a){case 0:throw H.f(new H.aI("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
cD:function(a,b){var u,t,s,r,q,p,o,n=$.U
if(n==null)n=$.U=H.as("self")
u=$.bY
if(u==null)u=$.bY=H.as("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.cC(s,!q,t,b)
if(s===1){n="return function(){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+");"
u=$.B
if(typeof u!=="number")return u.k()
$.B=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+", "+o+");"
u=$.B
if(typeof u!=="number")return u.k()
$.B=u+1
return new Function(n+u+"}")()},
bM:function(a,b,c,d,e,f,g){return H.cE(a,b,H.A(c),d,!!e,!!f,g)},
bA:function(a){return a.a},
bZ:function(a){return a.c},
as:function(a){var u,t,s,r=new H.a9("self","target","receiver","name"),q=J.c0(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
d3:function(a){if(a==null)H.d_("boolean expression must not be null")
return a},
m:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.f(H.D(a,"String"))},
dD:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.D(a,"num"))},
dz:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.f(H.D(a,"bool"))},
A:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.f(H.D(a,"int"))},
de:function(a,b){throw H.f(H.D(a,H.a8(H.m(b).substring(2))))},
h:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.y(a)[b])return a
H.de(a,b)},
bR:function(a){if(a==null)return a
if(!!J.y(a).$it)return a
throw H.f(H.D(a,"List<dynamic>"))},
cf:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.A(u)]
else return a.$S()}return},
ak:function(a,b){var u
if(typeof a=="function")return!0
u=H.cf(J.y(a))
if(u==null)return!1
return H.c7(u,null,b,null)},
d:function(a,b){var u,t
if(a==null)return a
if($.bH)return a
$.bH=!0
try{if(H.ak(a,b))return a
u=H.by(b)
t=H.D(a,u)
throw H.f(t)}finally{$.bH=!1}},
bN:function(a,b){if(a!=null&&!H.bL(a,b))H.am(H.D(a,H.by(b)))
return a},
D:function(a,b){return new H.aS("TypeError: "+P.aw(a)+": type '"+H.cY(a)+"' is not a subtype of type '"+b+"'")},
cY:function(a){var u,t=J.y(a)
if(!!t.$iV){u=H.cf(t)
if(u!=null)return H.by(u)
return"Closure"}return H.a_(a)},
d_:function(a){throw H.f(new H.aW(a))},
di:function(a){throw H.f(new P.au(H.m(a)))},
ch:function(a){return v.getIsolateTag(a)},
bU:function(a,b){a.$ti=b
return a},
a5:function(a){if(a==null)return
return a.$ti},
dC:function(a,b,c){return H.al(a["$a"+H.e(c)],H.a5(b))},
z:function(a,b){var u
H.A(b)
u=H.a5(a)
return u==null?null:u[b]},
by:function(a){return H.J(a,null)},
J:function(a,b){var u,t
H.K(b,"$it",[P.q],"$at")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.a8(a[0].name)+H.bJ(a,1,b)
if(typeof a=="function")return H.a8(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.A(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.bv(b,t)
return H.e(b[t])}if('func' in a)return H.cR(a,b)
if('futureOr' in a)return"FutureOr<"+H.J("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
cR:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=", ",b=[P.q]
H.K(a0,"$it",b,"$at")
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.bU([],b)
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.e.C(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=c){p+=o
b=a0.length
n=b-q-1
if(n<0)return H.bv(a0,n)
p=C.f.k(p,a0[n])
m=u[q]
if(m!=null&&m!==P.i)p+=" extends "+H.J(m,a0)}p+=">"}else{p=""
t=null}l=!!a.v?"void":H.J(a.ret,a0)
if("args" in a){k=a.args
for(b=k.length,j="",i="",h=0;h<b;++h,i=c){g=k[h]
j=j+i+H.J(g,a0)}}else{j=""
i=""}if("opt" in a){f=a.opt
j+=i+"["
for(b=f.length,i="",h=0;h<b;++h,i=c){g=f[h]
j=j+i+H.J(g,a0)}j+="]"}if("named" in a){e=a.named
j+=i+"{"
for(b=H.d4(e),n=b.length,i="",h=0;h<n;++h,i=c){d=H.m(b[h])
j=j+i+H.J(e[d],a0)+(" "+H.e(d))}j+="}"}if(t!=null)a0.length=t
return p+"("+j+") => "+l},
bJ:function(a,b,c){var u,t,s,r,q,p
H.K(c,"$it",[P.q],"$at")
if(a==null)return""
u=new P.af("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.J(p,c)}return"<"+u.h(0)+">"},
al:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bK:function(a,b,c,d){var u,t
H.m(b)
H.bR(c)
H.m(d)
if(a==null)return!1
u=H.a5(a)
t=J.y(a)
if(t[b]==null)return!1
return H.cc(H.al(t[d],u),null,c,null)},
K:function(a,b,c,d){H.m(b)
H.bR(c)
H.m(d)
if(a==null)return a
if(H.bK(a,b,c,d))return a
throw H.f(H.D(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.a8(b.substring(2))+H.bJ(c,0,null),v.mangledGlobalNames)))},
cc:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.x(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.x(a[t],b,c[t],d))return!1
return!0},
dA:function(a,b,c){return a.apply(b,H.al(J.y(b)["$a"+H.e(c)],H.a5(b)))},
cj:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="i"||a.name==="k"||a===-1||a===-2||H.cj(u)}return!1},
bL:function(a,b){var u,t
if(a==null)return b==null||b.name==="i"||b.name==="k"||b===-1||b===-2||H.cj(b)
if(b==null||b===-1||b.name==="i"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.bL(a,"type" in b?b.type:null))return!0
if('func' in b)return H.ak(a,b)}u=J.y(a).constructor
t=H.a5(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.x(u,null,b,null)},
p:function(a,b){if(a!=null&&!H.bL(a,b))throw H.f(H.D(a,H.by(b)))
return a},
x:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="i"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="i"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.x(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="k")return!0
if('func' in c)return H.c7(a,b,c,d)
if('func' in a)return c.name==="bB"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.x("type" in a?a.type:l,b,s,d)
else if(H.x(a,b,s,d))return!0
else{if(!('$i'+"X" in t.prototype))return!1
r=t.prototype["$a"+"X"]
q=H.al(r,u?a.slice(1):l)
return H.x(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.cc(H.al(m,u),b,p,d)},
c7:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.x(a.ret,b,c.ret,d))return!1
s=a.args
r=c.args
q=a.opt
p=c.opt
o=s!=null?s.length:0
n=r!=null?r.length:0
m=q!=null?q.length:0
l=p!=null?p.length:0
if(o>n)return!1
if(o+m<n+l)return!1
for(k=0;k<o;++k)if(!H.x(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.x(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.x(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.dd(h,b,g,d)},
dd:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.x(c[s],d,a[s],b))return!1}return!0},
dB:function(a,b,c){Object.defineProperty(a,H.m(b),{value:c,enumerable:false,writable:true,configurable:true})},
db:function(a){var u,t,s,r,q=H.m($.ci.$1(a)),p=$.bo[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.bu[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.m($.cb.$2(a,q))
if(q!=null){p=$.bo[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.bu[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.bx(u)
$.bo[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.bu[q]=u
return u}if(s==="-"){r=H.bx(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.cl(a,u)
if(s==="*")throw H.f(P.c3(q))
if(v.leafTags[q]===true){r=H.bx(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.cl(a,u)},
cl:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.bS(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
bx:function(a){return J.bS(a,!1,null,!!a.$idl)},
dc:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.bx(u)
else return J.bS(u,c,null,null)},
d8:function(){if(!0===$.bQ)return
$.bQ=!0
H.d9()},
d9:function(){var u,t,s,r,q,p,o,n
$.bo=Object.create(null)
$.bu=Object.create(null)
H.d7()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.cm.$1(q)
if(p!=null){o=H.dc(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
d7:function(){var u,t,s,r,q,p,o=C.i()
o=H.Q(C.j,H.Q(C.k,H.Q(C.c,H.Q(C.c,H.Q(C.l,H.Q(C.m,H.Q(C.n(C.d),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.ci=new H.br(r)
$.cb=new H.bs(q)
$.cm=new H.bt(p)},
Q:function(a,b){return a(b)||b},
df:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
aQ:function aQ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
aF:function aF(a,b){this.a=a
this.b=b},
aE:function aE(a,b,c){this.a=a
this.b=b
this.c=c},
aU:function aU(a){this.a=a},
bz:function bz(a){this.a=a},
ai:function ai(a){this.a=a
this.b=null},
V:function V(){},
aP:function aP(){},
aK:function aK(){},
a9:function a9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aS:function aS(a){this.a=a},
aI:function aI(a){this.a=a},
aW:function aW(a){this.a=a},
br:function br(a){this.a=a},
bs:function bs(a){this.a=a},
bt:function bt(a){this.a=a},
d4:function(a){return J.c0(H.bU(a?Object.keys(a):[],[null]))}},J={
bS:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
bO:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.bQ==null){H.d8()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.f(P.c3("Return interceptor for "+H.e(u(a,q))))}s=a.constructor
r=s==null?null:s[$.bV()]
if(r!=null)return r
r=H.db(a)
if(r!=null)return r
if(typeof a=="function")return C.q
u=Object.getPrototypeOf(a)
if(u==null)return C.h
if(u===Object.prototype)return C.h
if(typeof s=="function"){Object.defineProperty(s,$.bV(),{value:C.b,enumerable:false,writable:true,configurable:true})
return C.b}return C.b},
c0:function(a){H.bR(a)
a.fixed$length=Array
return a},
y:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ab.prototype
return J.aB.prototype}if(typeof a=="string")return J.Z.prototype
if(a==null)return J.aC.prototype
if(typeof a=="boolean")return J.aA.prototype
if(a.constructor==Array)return J.N.prototype
if(typeof a!="object"){if(typeof a=="function")return J.O.prototype
return a}if(a instanceof P.i)return a
return J.bO(a)},
cg:function(a){if(typeof a=="string")return J.Z.prototype
if(a==null)return a
if(a.constructor==Array)return J.N.prototype
if(typeof a!="object"){if(typeof a=="function")return J.O.prototype
return a}if(a instanceof P.i)return a
return J.bO(a)},
d5:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.O.prototype
return a}if(a instanceof P.i)return a
return J.bO(a)},
cz:function(a,b,c,d){return J.d5(a).J(a,b,c,d)},
cA:function(a){return J.cg(a).gi(a)},
an:function(a){return J.y(a).h(a)},
r:function r(){},
aA:function aA(){},
aC:function aC(){},
ac:function ac(){},
aG:function aG(){},
ag:function ag(){},
O:function O(){},
N:function N(a){this.$ti=a},
bC:function bC(a){this.$ti=a},
aq:function aq(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
aD:function aD(){},
ab:function ab(){},
aB:function aB(){},
Z:function Z(){}},P={
cL:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.d0()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.aj(new P.aY(s),1)).observe(u,{childList:true})
return new P.aX(s,u,t)}else if(self.setImmediate!=null)return P.d1()
return P.d2()},
cM:function(a){self.scheduleImmediate(H.aj(new P.aZ(H.d(a,{func:1,ret:-1})),0))},
cN:function(a){self.setImmediate(H.aj(new P.b_(H.d(a,{func:1,ret:-1})),0))},
cO:function(a){H.d(a,{func:1,ret:-1})
P.cQ(0,a)},
cQ:function(a,b){var u=new P.bh()
u.I(a,b)
return u},
cP:function(a,b){var u,t,s
b.a=1
try{a.F(new P.b5(b),new P.b6(b),null)}catch(s){u=H.T(s)
t=H.a6(s)
P.dg(new P.b7(b,u,t))}},
c6:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.h(a.c,"$iw")
if(u>=4){t=b.p()
b.a=a.a
b.c=a.c
P.a0(b,t)}else{t=H.h(b.c,"$iF")
b.a=2
b.c=a
a.B(t)}},
a0:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.h(g.c,"$in")
g=g.b
r=s.a
q=s.b
g.toString
P.bk(i,i,g,r,q)}return}for(;p=b.a,p!=null;b=p){b.a=null
P.a0(h.a,b)}g=h.a
o=g.c
u.a=t
u.b=o
r=!t
if(r){q=b.c
q=(q&1)!==0||q===8}else q=!0
if(q){q=b.b
n=q.b
if(t){m=g.b
m.toString
m=m==n
if(!m)n.toString
else m=!0
m=!m}else m=!1
if(m){H.h(o,"$in")
g=g.b
r=o.a
q=o.b
g.toString
P.bk(i,i,g,r,q)
return}l=$.j
if(l!=n)$.j=n
else l=i
g=b.c
if(g===8)new P.bb(h,u,b,t).$0()
else if(r){if((g&1)!==0)new P.ba(u,b,o).$0()}else if((g&2)!==0)new P.b9(h,u,b).$0()
if(l!=null)$.j=l
g=u.b
if(!!J.y(g).$iX){if(g.a>=4){k=H.h(q.c,"$iF")
q.c=null
b=q.l(k)
q.a=g.a
q.c=g.c
h.a=g
continue}else P.c6(g,q)
return}}j=b.b
k=H.h(j.c,"$iF")
j.c=null
b=j.l(k)
g=u.a
r=u.b
if(!g){H.p(r,H.z(j,0))
j.a=4
j.c=r}else{H.h(r,"$in")
j.a=8
j.c=r}h.a=j
g=j}},
cU:function(a,b){if(H.ak(a,{func:1,args:[P.i,P.o]}))return H.d(a,{func:1,ret:null,args:[P.i,P.o]})
if(H.ak(a,{func:1,args:[P.i]}))return H.d(a,{func:1,ret:null,args:[P.i]})
throw H.f(P.bX(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
cT:function(){var u,t
for(;u=$.P,u!=null;){$.a2=null
t=u.b
$.P=t
if(t==null)$.a1=null
u.a.$0()}},
cX:function(){$.bI=!0
try{P.cT()}finally{$.a2=null
$.bI=!1
if($.P!=null)$.bW().$1(P.cd())}},
ca:function(a){var u=new P.ah(H.d(a,{func:1,ret:-1}))
if($.P==null){$.P=$.a1=u
if(!$.bI)$.bW().$1(P.cd())}else $.a1=$.a1.b=u},
cW:function(a){var u,t,s
H.d(a,{func:1,ret:-1})
u=$.P
if(u==null){P.ca(a)
$.a2=$.a1
return}t=new P.ah(a)
s=$.a2
if(s==null){t.b=u
$.P=$.a2=t}else{t.b=s.b
$.a2=s.b=t
if(t.b==null)$.a1=t}},
dg:function(a){var u,t=null,s={func:1,ret:-1}
H.d(a,s)
u=$.j
if(C.a===u){P.bm(t,t,C.a,a)
return}u.toString
P.bm(t,t,u,H.d(u.D(a),s))},
bk:function(a,b,c,d,e){var u={}
u.a=d
P.cW(new P.bl(u,e))},
c8:function(a,b,c,d,e){var u,t
H.d(d,{func:1,ret:e})
t=$.j
if(t===c)return d.$0()
$.j=c
u=t
try{t=d.$0()
return t}finally{$.j=u}},
c9:function(a,b,c,d,e,f,g){var u,t
H.d(d,{func:1,ret:f,args:[g]})
H.p(e,g)
t=$.j
if(t===c)return d.$1(e)
$.j=c
u=t
try{t=d.$1(e)
return t}finally{$.j=u}},
cV:function(a,b,c,d,e,f,g,h,i){var u,t
H.d(d,{func:1,ret:g,args:[h,i]})
H.p(e,h)
H.p(f,i)
t=$.j
if(t===c)return d.$2(e,f)
$.j=c
u=t
try{t=d.$2(e,f)
return t}finally{$.j=u}},
bm:function(a,b,c,d){var u
H.d(d,{func:1,ret:-1})
u=C.a!==c
if(u)d=!(!u||!1)?c.D(d):c.N(d,-1)
P.ca(d)},
aY:function aY(a){this.a=a},
aX:function aX(a,b,c){this.a=a
this.b=b
this.c=c},
aZ:function aZ(a){this.a=a},
b_:function b_(a){this.a=a},
bh:function bh(){},
bi:function bi(a,b){this.a=a
this.b=b},
F:function F(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
w:function w(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
b4:function b4(a,b){this.a=a
this.b=b},
b8:function b8(a,b){this.a=a
this.b=b},
b5:function b5(a){this.a=a},
b6:function b6(a){this.a=a},
b7:function b7(a,b,c){this.a=a
this.b=b
this.c=c},
bb:function bb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bc:function bc(a){this.a=a},
ba:function ba(a,b,c){this.a=a
this.b=b
this.c=c},
b9:function b9(a,b,c){this.a=a
this.b=b
this.c=c},
ah:function ah(a){this.a=a
this.b=null},
aL:function aL(){},
aN:function aN(a,b){this.a=a
this.b=b},
aO:function aO(a,b){this.a=a
this.b=b},
aM:function aM(){},
n:function n(a,b){this.a=a
this.b=b},
bj:function bj(){},
bl:function bl(a,b){this.a=a
this.b=b},
bd:function bd(){},
bf:function bf(a,b,c){this.a=a
this.b=b
this.c=c},
be:function be(a,b){this.a=a
this.b=b},
bg:function bg(a,b,c){this.a=a
this.b=b
this.c=c},
S:function(a){var u=H.cJ(a,null)
if(u!=null)return u
throw H.f(new P.ay(a))},
cF:function(a){if(a instanceof H.V)return a.h(0)
return"Instance of '"+H.a_(a)+"'"},
cK:function(a,b,c){var u=new J.aq(b,b.length,[H.z(b,0)])
if(!u.q())return a
if(c.length===0){do a+=H.e(u.d)
while(u.q())}else{a+=H.e(u.d)
for(;u.q();)a=a+c+H.e(u.d)}return a},
aw:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.an(a)
if(typeof a==="string")return JSON.stringify(a)
return P.cF(a)},
bX:function(a,b,c){return new P.H(!0,a,b,c)},
bF:function(a,b){return new P.aH(null,null,!0,a,b,"Value not in range")},
c4:function(a){return new P.aV(a)},
c3:function(a){return new P.aT(a)},
R:function R(){},
bp:function bp(){},
L:function L(){},
ar:function ar(){},
ad:function ad(){},
H:function H(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aH:function aH(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
az:function az(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
aV:function aV(a){this.a=a},
aT:function aT(a){this.a=a},
at:function at(a){this.a=a},
ae:function ae(){},
au:function au(a){this.a=a},
b3:function b3(a){this.a=a},
ay:function ay(a){this.a=a},
a7:function a7(){},
t:function t(){},
k:function k(){},
G:function G(){},
i:function i(){},
o:function o(){},
q:function q(){},
af:function af(a){this.a=a},
l:function l(a,b,c){this.a=a
this.b=b
this.$ti=c},
cH:function(a,b,c){var u,t
if(P.cS(a))return b+"..."+c
u=new P.af(b)
C.e.C($.a3,a)
try{t=u
t.a=P.cK(t.a,a,", ")}finally{if(0>=$.a3.length)return H.bv($.a3,-1)
$.a3.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
cS:function(a){var u,t
for(u=$.a3.length,t=0;t<u;++t)if(a===$.a3[t])return!0
return!1}},W={
M:function(a){var u,t=document.createElement("input"),s=H.h(t,"$iY")
try{s.type=a}catch(u){H.T(u)}return s},
c5:function(a,b,c,d,e){var u=W.cZ(new W.b2(c),W.a),t=u!=null
if(t&&!0){H.d(u,{func:1,args:[W.a]})
if(t)J.cz(a,b,u,!1)}return new W.b1(a,b,u,!1,[e])},
cZ:function(a,b){var u
H.d(a,{func:1,ret:-1,args:[b]})
u=$.j
if(u===C.a)return a
return u.O(a,b)},
c:function c(){},
ao:function ao(){},
ap:function ap(){},
aa:function aa(){},
I:function I(){},
av:function av(){},
b:function b(){},
a:function a(){},
W:function W(){},
ax:function ax(){},
Y:function Y(){},
u:function u(){},
v:function v(){},
aJ:function aJ(){},
E:function E(){},
b0:function b0(){},
bG:function bG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
b1:function b1(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
b2:function b2(a){this.a=a}},F={
ck:function(){var u,t,s,r,q,p,o,n,m,l="number",k=document,j=k.querySelector("#output"),i=k.createElement("div")
j.appendChild(i)
u=W.M(l)
i.appendChild(u)
i.appendChild(k.createElement("br"))
t=W.M(l)
i.appendChild(t)
s=W.M(l)
i.appendChild(s)
i.appendChild(k.createElement("br"))
r=W.M(l)
i.appendChild(r)
q=W.M(l)
i.appendChild(q)
i.appendChild(k.createElement("br"))
p=W.M(l)
i.appendChild(p)
o=W.M(l)
i.appendChild(o)
n=k.createElement("button")
n.textContent="Generate Fractal"
j.appendChild(n)
j.appendChild(k.createElement("br"))
j.appendChild(k.createElement("br"))
m=k.createElement("canvas")
j.appendChild(m)
k=W.u
W.c5(n,"click",H.d(new F.bw(t,s,r,q,p,o,m,u),{func:1,ret:-1,args:[k]}),!1,k)},
bq:function(a,b,c,d,e){var u,t,s,r=[P.G]
H.K(c,"$il",r,"$al")
H.K(d,"$il",r,"$al")
H.K(e,"$il",r,"$al")
if(typeof b!=="number")return b.X()
if(b>12)b=12
if(b===0){a.beginPath()
a.moveTo(c.a,c.b)
a.lineTo(d.a,d.b)
a.lineTo(e.a,e.b)
a.closePath()
a.fill("nonzero")
return}u=F.bT(c,d)
t=F.bT(d,e)
s=F.bT(e,c)
r=b-1
F.bq(a,r,c,s,u)
F.bq(a,r,d,t,u)
F.bq(a,r,e,t,s)},
bT:function(a,b){var u,t,s,r,q=[P.G]
H.K(a,"$il",q,"$al")
H.K(b,"$il",q,"$al")
u=a.a
t=b.a
if(typeof u!=="number")return u.k()
if(typeof t!=="number")return H.bP(t)
s=a.b
r=b.b
if(typeof s!=="number")return s.k()
if(typeof r!=="number")return H.bP(r)
return new P.l((u+t)/2,(s+r)/2,q)},
bw:function bw(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h}}
var w=[C,H,J,P,W,F]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.bD.prototype={}
J.r.prototype={
h:function(a){return"Instance of '"+H.a_(a)+"'"}}
J.aA.prototype={
h:function(a){return String(a)},
$iR:1}
J.aC.prototype={
h:function(a){return"null"}}
J.ac.prototype={
h:function(a){return String(a)}}
J.aG.prototype={}
J.ag.prototype={}
J.O.prototype={
h:function(a){var u=a[$.co()]
if(u==null)return this.H(a)
return"JavaScript function for "+H.e(J.an(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibB:1}
J.N.prototype={
C:function(a,b){H.p(b,H.z(a,0))
if(!!a.fixed$length)H.am(P.c4("add"))
a.push(b)},
h:function(a){return P.cH(a,"[","]")},
gi:function(a){return a.length},
$icG:1,
$it:1}
J.bC.prototype={}
J.aq.prototype={
q:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.f(H.dh(s))
u=t.c
if(u>=r){t.sA(null)
return!1}t.sA(s[u]);++t.c
return!0},
sA:function(a){this.d=H.p(a,H.z(this,0))}}
J.aD.prototype={
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
M:function(a,b){var u
if(a>0)u=this.L(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
L:function(a,b){return b>31?0:a>>>b},
$iG:1}
J.ab.prototype={$ia7:1}
J.aB.prototype={}
J.Z.prototype={
K:function(a,b){if(b>=a.length)throw H.f(H.ce(a,b))
return a.charCodeAt(b)},
k:function(a,b){if(typeof b!=="string")throw H.f(P.bX(b,null,null))
return a+b},
h:function(a){return a},
gi:function(a){return a.length},
$iq:1}
H.aQ.prototype={
j:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
if(r==null)return
u=Object.create(null)
t=s.b
if(t!==-1)u.arguments=r[t+1]
t=s.c
if(t!==-1)u.argumentsExpr=r[t+1]
t=s.d
if(t!==-1)u.expr=r[t+1]
t=s.e
if(t!==-1)u.method=r[t+1]
t=s.f
if(t!==-1)u.receiver=r[t+1]
return u}}
H.aF.prototype={
h:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.aE.prototype={
h:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.e(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.e(t.a)+")"
return s+r+"' on '"+u+"' ("+H.e(t.a)+")"}}
H.aU.prototype={
h:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.bz.prototype={
$1:function(a){if(!!J.y(a).$iL)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:3}
H.ai.prototype={
h:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$io:1}
H.V.prototype={
h:function(a){return"Closure '"+H.a_(this).trim()+"'"},
$ibB:1,
gW:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.aP.prototype={}
H.aK.prototype={
h:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.a8(u)+"'"}}
H.a9.prototype={
h:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.a_(u)+"'")}}
H.aS.prototype={
h:function(a){return this.a}}
H.aI.prototype={
h:function(a){return"RuntimeError: "+this.a}}
H.aW.prototype={
h:function(a){return"Assertion failed: "+P.aw(this.a)}}
H.br.prototype={
$1:function(a){return this.a(a)},
$S:3}
H.bs.prototype={
$2:function(a,b){return this.a(a,b)},
$S:5}
H.bt.prototype={
$1:function(a){return this.a(H.m(a))},
$S:6}
P.aY.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:4}
P.aX.prototype={
$1:function(a){var u,t
this.a.a=H.d(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:7}
P.aZ.prototype={
$0:function(){this.a.$0()},
$S:0}
P.b_.prototype={
$0:function(){this.a.$0()},
$S:0}
P.bh.prototype={
I:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.aj(new P.bi(this,b),0),a)
else throw H.f(P.c4("`setTimeout()` not found."))}}
P.bi.prototype={
$0:function(){this.b.$0()},
$S:1}
P.F.prototype={
R:function(a){if(this.c!==6)return!0
return this.b.b.t(H.d(this.d,{func:1,ret:P.R,args:[P.i]}),a.a,P.R,P.i)},
P:function(a){var u=this.e,t=P.i,s={futureOr:1,type:H.z(this,1)},r=this.b.b
if(H.ak(u,{func:1,args:[P.i,P.o]}))return H.bN(r.S(u,a.a,a.b,null,t,P.o),s)
else return H.bN(r.t(H.d(u,{func:1,args:[P.i]}),a.a,null,t),s)}}
P.w.prototype={
F:function(a,b,c){var u,t,s,r=H.z(this,0)
H.d(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.j
if(u!==C.a){u.toString
H.d(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.cU(b,u)}H.d(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
t=new P.w($.j,[c])
s=b==null?1:3
this.u(new P.F(t,s,a,b,[r,c]))
return t},
V:function(a,b){return this.F(a,null,b)},
u:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.h(t.c,"$iF")
t.c=a}else{if(s===2){u=H.h(t.c,"$iw")
s=u.a
if(s<4){u.u(a)
return}t.a=s
t.c=u.c}s=t.b
s.toString
P.bm(null,null,s,H.d(new P.b4(t,a),{func:1,ret:-1}))}},
B:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.h(p.c,"$iF")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.h(p.c,"$iw")
u=q.a
if(u<4){q.B(a)
return}p.a=u
p.c=q.c}o.a=p.l(a)
u=p.b
u.toString
P.bm(null,null,u,H.d(new P.b8(o,p),{func:1,ret:-1}))}},
p:function(){var u=H.h(this.c,"$iF")
this.c=null
return this.l(u)},
l:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
v:function(a){var u,t,s=this,r=H.z(s,0)
H.bN(a,{futureOr:1,type:r})
u=s.$ti
if(H.bK(a,"$iX",u,"$aX"))if(H.bK(a,"$iw",u,null))P.c6(a,s)
else P.cP(a,s)
else{t=s.p()
H.p(a,r)
s.a=4
s.c=a
P.a0(s,t)}},
w:function(a,b){var u,t=this
H.h(b,"$io")
u=t.p()
t.a=8
t.c=new P.n(a,b)
P.a0(t,u)},
$iX:1}
P.b4.prototype={
$0:function(){P.a0(this.a,this.b)},
$S:0}
P.b8.prototype={
$0:function(){P.a0(this.b,this.a.a)},
$S:0}
P.b5.prototype={
$1:function(a){var u=this.a
u.a=0
u.v(a)},
$S:4}
P.b6.prototype={
$2:function(a,b){H.h(b,"$io")
this.a.w(a,b)},
$1:function(a){return this.$2(a,null)},
$S:8}
P.b7.prototype={
$0:function(){this.a.w(this.b,this.c)},
$S:0}
P.bb.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.E(H.d(s.d,{func:1}),null)}catch(r){u=H.T(r)
t=H.a6(r)
if(o.d){s=H.h(o.a.a.c,"$in").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.h(o.a.a.c,"$in")
else q.b=new P.n(u,t)
q.a=!0
return}if(!!J.y(n).$iX){if(n instanceof P.w&&n.a>=4){if(n.a===8){s=o.b
s.b=H.h(n.c,"$in")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.V(new P.bc(p),null)
s.a=!1}},
$S:1}
P.bc.prototype={
$1:function(a){return this.a},
$S:9}
P.ba.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.z(s,0)
q=H.p(n.c,r)
p=H.z(s,1)
n.a.b=s.b.b.t(H.d(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.T(o)
t=H.a6(o)
s=n.a
s.b=new P.n(u,t)
s.a=!0}},
$S:1}
P.b9.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.h(m.a.a.c,"$in")
r=m.c
if(H.d3(r.R(u))&&r.e!=null){q=m.b
q.b=r.P(u)
q.a=!1}}catch(p){t=H.T(p)
s=H.a6(p)
r=H.h(m.a.a.c,"$in")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.n(t,s)
n.a=!0}},
$S:1}
P.ah.prototype={}
P.aL.prototype={
gi:function(a){var u,t,s=this,r={},q=new P.w($.j,[P.a7])
r.a=0
u=H.z(s,0)
t=H.d(new P.aN(r,s),{func:1,ret:-1,args:[u]})
H.d(new P.aO(r,q),{func:1,ret:-1})
W.c5(s.a,s.b,t,!1,u)
return q}}
P.aN.prototype={
$1:function(a){H.p(a,H.z(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.k,args:[H.z(this.b,0)]}}}
P.aO.prototype={
$0:function(){this.b.v(this.a.a)},
$S:0}
P.aM.prototype={}
P.n.prototype={
h:function(a){return H.e(this.a)},
$iL:1}
P.bj.prototype={$idx:1}
P.bl.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.ad():s
s=this.b
if(s==null)throw H.f(t)
u=H.f(t)
u.stack=s.h(0)
throw u},
$S:0}
P.bd.prototype={
T:function(a){var u,t,s,r=null
H.d(a,{func:1,ret:-1})
try{if(C.a===$.j){a.$0()
return}P.c8(r,r,this,a,-1)}catch(s){u=H.T(s)
t=H.a6(s)
P.bk(r,r,this,u,H.h(t,"$io"))}},
U:function(a,b,c){var u,t,s,r=null
H.d(a,{func:1,ret:-1,args:[c]})
H.p(b,c)
try{if(C.a===$.j){a.$1(b)
return}P.c9(r,r,this,a,b,-1,c)}catch(s){u=H.T(s)
t=H.a6(s)
P.bk(r,r,this,u,H.h(t,"$io"))}},
N:function(a,b){return new P.bf(this,H.d(a,{func:1,ret:b}),b)},
D:function(a){return new P.be(this,H.d(a,{func:1,ret:-1}))},
O:function(a,b){return new P.bg(this,H.d(a,{func:1,ret:-1,args:[b]}),b)},
E:function(a,b){H.d(a,{func:1,ret:b})
if($.j===C.a)return a.$0()
return P.c8(null,null,this,a,b)},
t:function(a,b,c,d){H.d(a,{func:1,ret:c,args:[d]})
H.p(b,d)
if($.j===C.a)return a.$1(b)
return P.c9(null,null,this,a,b,c,d)},
S:function(a,b,c,d,e,f){H.d(a,{func:1,ret:d,args:[e,f]})
H.p(b,e)
H.p(c,f)
if($.j===C.a)return a.$2(b,c)
return P.cV(null,null,this,a,b,c,d,e,f)}}
P.bf.prototype={
$0:function(){return this.a.E(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.be.prototype={
$0:function(){return this.a.T(this.b)},
$S:1}
P.bg.prototype={
$1:function(a){var u=this.c
return this.a.U(this.b,H.p(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.R.prototype={}
P.bp.prototype={}
P.L.prototype={}
P.ar.prototype={
h:function(a){return"Assertion failed"}}
P.ad.prototype={
h:function(a){return"Throw of null."}}
P.H.prototype={
gn:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gm:function(){return""},
h:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gn()+o+u
if(!q.a)return t
s=q.gm()
r=P.aw(q.b)
return t+s+": "+r}}
P.aH.prototype={
gn:function(){return"RangeError"},
gm:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.e(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.e(s)
else if(t>s)u=": Not in range "+H.e(s)+".."+H.e(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.e(s)}return u}}
P.az.prototype={
gn:function(){return"RangeError"},
gm:function(){var u,t=H.A(this.b)
if(typeof t!=="number")return t.Y()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.e(u)},
gi:function(a){return this.f}}
P.aV.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.aT.prototype={
h:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.at.prototype={
h:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.aw(u)+"."}}
P.ae.prototype={
h:function(a){return"Stack Overflow"},
$iL:1}
P.au.prototype={
h:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.b3.prototype={
h:function(a){return"Exception: "+this.a}}
P.ay.prototype={
h:function(a){var u=this.a,t=u!=null&&""!==u?"FormatException: "+H.e(u):"FormatException"
return t}}
P.a7.prototype={}
P.t.prototype={$icG:1}
P.k.prototype={
h:function(a){return"null"}}
P.G.prototype={}
P.i.prototype={constructor:P.i,$ii:1,
h:function(a){return"Instance of '"+H.a_(this)+"'"},
toString:function(){return this.h(this)}}
P.o.prototype={}
P.q.prototype={}
P.af.prototype={
gi:function(a){return this.a.length},
h:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.c.prototype={}
W.ao.prototype={
h:function(a){return String(a)}}
W.ap.prototype={
h:function(a){return String(a)}}
W.aa.prototype={$iaa:1}
W.I.prototype={
gi:function(a){return a.length}}
W.av.prototype={
h:function(a){return String(a)}}
W.b.prototype={
h:function(a){return a.localName},
$ib:1}
W.a.prototype={$ia:1}
W.W.prototype={
J:function(a,b,c,d){return a.addEventListener(b,H.aj(H.d(c,{func:1,args:[W.a]}),1),!1)},
$iW:1}
W.ax.prototype={
gi:function(a){return a.length}}
W.Y.prototype={$iY:1}
W.u.prototype={$iu:1}
W.v.prototype={
h:function(a){var u=a.nodeValue
return u==null?this.G(a):u}}
W.aJ.prototype={
gi:function(a){return a.length}}
W.E.prototype={}
W.b0.prototype={}
W.bG.prototype={}
W.b1.prototype={}
W.b2.prototype={
$1:function(a){return this.a.$1(H.h(a,"$ia"))},
$S:10}
P.l.prototype={
h:function(a){return"Point("+H.e(this.a)+", "+H.e(this.b)+")"}}
F.bw.prototype={
$1:function(a){var u,t,s,r,q,p,o,n,m,l,k=this
H.h(a,"$iu")
u=P.S(k.a.value)
t=P.S(k.b.value)
s=[P.G]
r=P.S(k.c.value)
q=P.S(k.d.value)
p=P.S(k.e.value)
o=P.S(k.f.value)
n=k.r
m=P.S(k.x.value)
l=Math.max(H.a4(r),H.a4(p))
n.width=H.A(Math.max(H.a4(u),l))
l=Math.max(H.a4(q),H.a4(o))
n.height=H.A(Math.max(H.a4(t),l))
F.bq(n.getContext("2d"),m,new P.l(u,t,s),new P.l(r,q,s),new P.l(p,o,s))},
$S:11};(function aliases(){var u=J.r.prototype
u.G=u.h
u=J.ac.prototype
u.H=u.h})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0
u(P,"d0","cM",2)
u(P,"d1","cN",2)
u(P,"d2","cO",2)
t(P,"cd","cX",1)})();(function inheritance(){var u=hunkHelpers.inherit,t=hunkHelpers.inheritMany
u(P.i,null)
t(P.i,[H.bD,J.r,J.aq,H.aQ,P.L,H.V,H.ai,P.bh,P.F,P.w,P.ah,P.aL,P.aM,P.n,P.bj,P.R,P.G,P.ae,P.b3,P.ay,P.t,P.k,P.o,P.q,P.af,P.l])
t(J.r,[J.aA,J.aC,J.ac,J.N,J.aD,J.Z,W.W,W.aa,W.av,W.a])
t(J.ac,[J.aG,J.ag,J.O])
u(J.bC,J.N)
t(J.aD,[J.ab,J.aB])
t(P.L,[H.aF,H.aE,H.aU,H.aS,H.aI,P.ar,P.ad,P.H,P.aV,P.aT,P.at,P.au])
t(H.V,[H.bz,H.aP,H.br,H.bs,H.bt,P.aY,P.aX,P.aZ,P.b_,P.bi,P.b4,P.b8,P.b5,P.b6,P.b7,P.bb,P.bc,P.ba,P.b9,P.aN,P.aO,P.bl,P.bf,P.be,P.bg,W.b2,F.bw])
t(H.aP,[H.aK,H.a9])
u(H.aW,P.ar)
u(P.bd,P.bj)
t(P.G,[P.bp,P.a7])
t(P.H,[P.aH,P.az])
u(W.v,W.W)
t(W.v,[W.b,W.I])
u(W.c,W.b)
t(W.c,[W.ao,W.ap,W.ax,W.Y,W.aJ])
u(W.E,W.a)
u(W.u,W.E)
u(W.b0,P.aL)
u(W.bG,W.b0)
u(W.b1,P.aM)})();(function constants(){C.o=J.r.prototype
C.e=J.N.prototype
C.p=J.ab.prototype
C.f=J.Z.prototype
C.q=J.O.prototype
C.h=J.aG.prototype
C.b=J.ag.prototype
C.d=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.i=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof navigator == "object";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
C.n=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var ua = navigator.userAgent;
    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;
    if (ua.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
C.j=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.k=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
C.m=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
C.l=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
C.c=function(hooks) { return hooks; }

C.a=new P.bd()})()
var v={mangledGlobalNames:{a7:"int",bp:"double",G:"num",q:"String",R:"bool",k:"Null",t:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.k},{func:1,ret:-1},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.k,args:[,]},{func:1,args:[,P.q]},{func:1,args:[P.q]},{func:1,ret:P.k,args:[{func:1,ret:-1}]},{func:1,ret:P.k,args:[,],opt:[P.o]},{func:1,ret:[P.w,,],args:[,]},{func:1,args:[W.a]},{func:1,ret:P.k,args:[W.u]}],interceptorsByTag:null,leafTags:null};(function staticFields(){$.B=0
$.U=null
$.bY=null
$.bH=!1
$.ci=null
$.cb=null
$.cm=null
$.bo=null
$.bu=null
$.bQ=null
$.P=null
$.a1=null
$.a2=null
$.bI=!1
$.j=C.a
$.a3=[]})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"dj","co",function(){return H.ch("_$dart_dartClosure")})
u($,"dk","bV",function(){return H.ch("_$dart_js")})
u($,"dm","cp",function(){return H.C(H.aR({
toString:function(){return"$receiver$"}}))})
u($,"dn","cq",function(){return H.C(H.aR({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"dp","cr",function(){return H.C(H.aR(null))})
u($,"dq","cs",function(){return H.C(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"dt","cv",function(){return H.C(H.aR(void 0))})
u($,"du","cw",function(){return H.C(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"ds","cu",function(){return H.C(H.c2(null))})
u($,"dr","ct",function(){return H.C(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"dw","cy",function(){return H.C(H.c2(void 0))})
u($,"dv","cx",function(){return H.C(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"dy","bW",function(){return P.cL()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
o[a]=1
return Object.keys(hunkHelpers.convertToFastObject(o))[0]}
v.getIsolateTag=function(a){return u("___dart_"+a+v.isolateTag)}
var t="___dart_isolate_tags_"
var s=Object[t]||(Object[t]=Object.create(null))
var r="_ZxYxX"
for(var q=0;;q++){var p=u(r+"_"+q+"_")
if(!(p in s)){s[p]=1
v.isolateTag=p
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({DOMError:J.r,MediaError:J.r,NavigatorUserMediaError:J.r,OverconstrainedError:J.r,PositionError:J.r,SQLError:J.r,HTMLAudioElement:W.c,HTMLBRElement:W.c,HTMLBaseElement:W.c,HTMLBodyElement:W.c,HTMLButtonElement:W.c,HTMLCanvasElement:W.c,HTMLContentElement:W.c,HTMLDListElement:W.c,HTMLDataElement:W.c,HTMLDataListElement:W.c,HTMLDetailsElement:W.c,HTMLDialogElement:W.c,HTMLDivElement:W.c,HTMLEmbedElement:W.c,HTMLFieldSetElement:W.c,HTMLHRElement:W.c,HTMLHeadElement:W.c,HTMLHeadingElement:W.c,HTMLHtmlElement:W.c,HTMLIFrameElement:W.c,HTMLImageElement:W.c,HTMLLIElement:W.c,HTMLLabelElement:W.c,HTMLLegendElement:W.c,HTMLLinkElement:W.c,HTMLMapElement:W.c,HTMLMediaElement:W.c,HTMLMenuElement:W.c,HTMLMetaElement:W.c,HTMLMeterElement:W.c,HTMLModElement:W.c,HTMLOListElement:W.c,HTMLObjectElement:W.c,HTMLOptGroupElement:W.c,HTMLOptionElement:W.c,HTMLOutputElement:W.c,HTMLParagraphElement:W.c,HTMLParamElement:W.c,HTMLPictureElement:W.c,HTMLPreElement:W.c,HTMLProgressElement:W.c,HTMLQuoteElement:W.c,HTMLScriptElement:W.c,HTMLShadowElement:W.c,HTMLSlotElement:W.c,HTMLSourceElement:W.c,HTMLSpanElement:W.c,HTMLStyleElement:W.c,HTMLTableCaptionElement:W.c,HTMLTableCellElement:W.c,HTMLTableDataCellElement:W.c,HTMLTableHeaderCellElement:W.c,HTMLTableColElement:W.c,HTMLTableElement:W.c,HTMLTableRowElement:W.c,HTMLTableSectionElement:W.c,HTMLTemplateElement:W.c,HTMLTextAreaElement:W.c,HTMLTimeElement:W.c,HTMLTitleElement:W.c,HTMLTrackElement:W.c,HTMLUListElement:W.c,HTMLUnknownElement:W.c,HTMLVideoElement:W.c,HTMLDirectoryElement:W.c,HTMLFontElement:W.c,HTMLFrameElement:W.c,HTMLFrameSetElement:W.c,HTMLMarqueeElement:W.c,HTMLElement:W.c,HTMLAnchorElement:W.ao,HTMLAreaElement:W.ap,CanvasRenderingContext2D:W.aa,CDATASection:W.I,CharacterData:W.I,Comment:W.I,ProcessingInstruction:W.I,Text:W.I,DOMException:W.av,SVGAElement:W.b,SVGAnimateElement:W.b,SVGAnimateMotionElement:W.b,SVGAnimateTransformElement:W.b,SVGAnimationElement:W.b,SVGCircleElement:W.b,SVGClipPathElement:W.b,SVGDefsElement:W.b,SVGDescElement:W.b,SVGDiscardElement:W.b,SVGEllipseElement:W.b,SVGFEBlendElement:W.b,SVGFEColorMatrixElement:W.b,SVGFEComponentTransferElement:W.b,SVGFECompositeElement:W.b,SVGFEConvolveMatrixElement:W.b,SVGFEDiffuseLightingElement:W.b,SVGFEDisplacementMapElement:W.b,SVGFEDistantLightElement:W.b,SVGFEFloodElement:W.b,SVGFEFuncAElement:W.b,SVGFEFuncBElement:W.b,SVGFEFuncGElement:W.b,SVGFEFuncRElement:W.b,SVGFEGaussianBlurElement:W.b,SVGFEImageElement:W.b,SVGFEMergeElement:W.b,SVGFEMergeNodeElement:W.b,SVGFEMorphologyElement:W.b,SVGFEOffsetElement:W.b,SVGFEPointLightElement:W.b,SVGFESpecularLightingElement:W.b,SVGFESpotLightElement:W.b,SVGFETileElement:W.b,SVGFETurbulenceElement:W.b,SVGFilterElement:W.b,SVGForeignObjectElement:W.b,SVGGElement:W.b,SVGGeometryElement:W.b,SVGGraphicsElement:W.b,SVGImageElement:W.b,SVGLineElement:W.b,SVGLinearGradientElement:W.b,SVGMarkerElement:W.b,SVGMaskElement:W.b,SVGMetadataElement:W.b,SVGPathElement:W.b,SVGPatternElement:W.b,SVGPolygonElement:W.b,SVGPolylineElement:W.b,SVGRadialGradientElement:W.b,SVGRectElement:W.b,SVGScriptElement:W.b,SVGSetElement:W.b,SVGStopElement:W.b,SVGStyleElement:W.b,SVGElement:W.b,SVGSVGElement:W.b,SVGSwitchElement:W.b,SVGSymbolElement:W.b,SVGTSpanElement:W.b,SVGTextContentElement:W.b,SVGTextElement:W.b,SVGTextPathElement:W.b,SVGTextPositioningElement:W.b,SVGTitleElement:W.b,SVGUseElement:W.b,SVGViewElement:W.b,SVGGradientElement:W.b,SVGComponentTransferFunctionElement:W.b,SVGFEDropShadowElement:W.b,SVGMPathElement:W.b,Element:W.b,AbortPaymentEvent:W.a,AnimationEvent:W.a,AnimationPlaybackEvent:W.a,ApplicationCacheErrorEvent:W.a,BackgroundFetchClickEvent:W.a,BackgroundFetchEvent:W.a,BackgroundFetchFailEvent:W.a,BackgroundFetchedEvent:W.a,BeforeInstallPromptEvent:W.a,BeforeUnloadEvent:W.a,BlobEvent:W.a,CanMakePaymentEvent:W.a,ClipboardEvent:W.a,CloseEvent:W.a,CustomEvent:W.a,DeviceMotionEvent:W.a,DeviceOrientationEvent:W.a,ErrorEvent:W.a,ExtendableEvent:W.a,ExtendableMessageEvent:W.a,FetchEvent:W.a,FontFaceSetLoadEvent:W.a,ForeignFetchEvent:W.a,GamepadEvent:W.a,HashChangeEvent:W.a,InstallEvent:W.a,MediaEncryptedEvent:W.a,MediaKeyMessageEvent:W.a,MediaQueryListEvent:W.a,MediaStreamEvent:W.a,MediaStreamTrackEvent:W.a,MessageEvent:W.a,MIDIConnectionEvent:W.a,MIDIMessageEvent:W.a,MutationEvent:W.a,NotificationEvent:W.a,PageTransitionEvent:W.a,PaymentRequestEvent:W.a,PaymentRequestUpdateEvent:W.a,PopStateEvent:W.a,PresentationConnectionAvailableEvent:W.a,PresentationConnectionCloseEvent:W.a,ProgressEvent:W.a,PromiseRejectionEvent:W.a,PushEvent:W.a,RTCDataChannelEvent:W.a,RTCDTMFToneChangeEvent:W.a,RTCPeerConnectionIceEvent:W.a,RTCTrackEvent:W.a,SecurityPolicyViolationEvent:W.a,SensorErrorEvent:W.a,SpeechRecognitionError:W.a,SpeechRecognitionEvent:W.a,SpeechSynthesisEvent:W.a,StorageEvent:W.a,SyncEvent:W.a,TrackEvent:W.a,TransitionEvent:W.a,WebKitTransitionEvent:W.a,VRDeviceEvent:W.a,VRDisplayEvent:W.a,VRSessionEvent:W.a,MojoInterfaceRequestEvent:W.a,ResourceProgressEvent:W.a,USBConnectionEvent:W.a,IDBVersionChangeEvent:W.a,AudioProcessingEvent:W.a,OfflineAudioCompletionEvent:W.a,WebGLContextEvent:W.a,Event:W.a,InputEvent:W.a,EventTarget:W.W,HTMLFormElement:W.ax,HTMLInputElement:W.Y,MouseEvent:W.u,DragEvent:W.u,PointerEvent:W.u,WheelEvent:W.u,Document:W.v,DocumentFragment:W.v,HTMLDocument:W.v,ShadowRoot:W.v,XMLDocument:W.v,Attr:W.v,DocumentType:W.v,Node:W.v,HTMLSelectElement:W.aJ,CompositionEvent:W.E,FocusEvent:W.E,KeyboardEvent:W.E,TextEvent:W.E,TouchEvent:W.E,UIEvent:W.E})
hunkHelpers.setOrUpdateLeafTags({DOMError:true,MediaError:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,SQLError:true,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLCanvasElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,DOMException:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,EventTarget:false,HTMLFormElement:true,HTMLInputElement:true,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,HTMLSelectElement:true,CompositionEvent:true,FocusEvent:true,KeyboardEvent:true,TextEvent:true,TouchEvent:true,UIEvent:false})})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(F.ck,[])
else F.ck([])})})()
//# sourceMappingURL=main.dart.js.map
