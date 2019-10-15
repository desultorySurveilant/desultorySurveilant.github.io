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
a[c]=function(){a[c]=function(){H.fu(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.dr"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.dr"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.dr(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={df:function df(){},
aN:function(){return new P.ax("No element")},
eI:function(){return new P.ax("Too many elements")},
bp:function bp(){},
aa:function aa(){},
aR:function aR(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ar:function ar(a,b,c){this.a=a
this.b=b
this.$ti=c},
aZ:function aZ(a,b,c){this.a=a
this.b=b
this.$ti=c},
cb:function cb(a,b,c){this.a=a
this.b=b
this.$ti=c},
aj:function(a){var u,t=H.n(v.mangledGlobalNames[a])
if(typeof t==="string")return t
u="minified:"+a
return u},
fd:function(a){return v.types[H.G(a)]},
fl:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.v(a).$iaP},
d:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.ak(a)
if(typeof u!=="string")throw H.f(H.e2(a))
return u},
au:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
av:function(a){return H.eM(a)+H.dn(H.a7(a),0,null)},
eM:function(a){var u,t,s,r,q,p,o,n,m=null,l=J.v(a),k=l.constructor
if(typeof k=="function"){u=k.name
t=typeof u==="string"?u:m}else t=m
s=t==null
if(s||l===C.v||!!l.$iaA){r=C.i(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?m:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
n=t.length
if(n>1&&C.c.ay(t,0)===36){if(1>n)H.ai(P.dh(1,m))
if(n>n)H.ai(P.dh(n,m))
t=t.substring(1,n)}return H.aj(t)},
dv:function(a){throw H.f(H.e2(a))},
y:function(a,b){if(a==null)J.aJ(a)
throw H.f(H.e4(a,b))},
e4:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.U(!0,b,s,null)
u=H.G(J.aJ(a))
if(!(b<0)){if(typeof u!=="number")return H.dv(u)
t=b>=u}else t=!0
if(t)return P.dc(b,a,s,null,u)
return P.dh(b,s)},
e2:function(a){return new P.U(!0,a,null,null)},
f:function(a){var u
if(a==null)a=new P.at()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.ee})
u.name=""}else u.toString=H.ee
return u},
ee:function(){return J.ak(this.dartException)},
ai:function(a){throw H.f(a)},
be:function(a){throw H.f(P.a_(a))},
Q:function(a){var u,t,s,r,q,p
a=H.fs(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.x([],[P.h])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.c3(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
c4:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
dP:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
dM:function(a,b){return new H.bJ(a,b==null?null:b.method)},
dg:function(a,b){var u=b==null,t=u?null:b.method
return new H.bz(a,t,u?null:b.receiver)},
K:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.d7(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.w.aI(t,16)&8191)===10)switch(s){case 438:return f.$1(H.dg(H.d(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.dM(H.d(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.eg()
q=$.eh()
p=$.ei()
o=$.ej()
n=$.em()
m=$.en()
l=$.el()
$.ek()
k=$.ep()
j=$.eo()
i=r.v(u)
if(i!=null)return f.$1(H.dg(H.n(u),i))
else{i=q.v(u)
if(i!=null){i.method="call"
return f.$1(H.dg(H.n(u),i))}else{i=p.v(u)
if(i==null){i=o.v(u)
if(i==null){i=n.v(u)
if(i==null){i=m.v(u)
if(i==null){i=l.v(u)
if(i==null){i=o.v(u)
if(i==null){i=k.v(u)
if(i==null){i=j.v(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.dM(H.n(u),i))}}return f.$1(new H.c7(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.aV()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.U(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.aV()
return a},
ag:function(a){var u
if(a==null)return new H.b7(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.b7(a)},
fk:function(a,b,c,d,e,f){H.i(a,"$ia2")
switch(H.G(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.f(new P.cp("Unsupported number of arguments for wrapped closure"))},
aG:function(a,b){var u
H.G(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.fk)
a.$identity=u
return u},
eD:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.bU().constructor.prototype):Object.create(new H.am(l,l,l,l).constructor.prototype)
i.$initialize=i.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.O
if(typeof t!=="number")return t.A()
$.O=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}i.constructor=u
u.prototype=i
if(!e){s=H.dE(a,k,f)
s.$reflectionInfo=d}else{i.$static_name=g
s=k}if(typeof d=="number")r=function(h,a0){return function(){return h(a0)}}(H.fd,d)
else if(typeof d=="function")if(e)r=d
else{q=f?H.dD:H.da
r=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(d,q)}else throw H.f("Error in reflectionInfo.")
i.$S=r
i[j]=s
for(p=s,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.dE(a,n,f)
i[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}i.$C=p
i.$R=k.$R
i.$D=k.$D
return u},
eA:function(a,b,c,d){var u=H.da
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
dE:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.eC(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.eA(t,!r,u,b)
if(t===0){r=$.O
if(typeof r!=="number")return r.A()
$.O=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.an
return new Function(r+H.d(q==null?$.an=H.bk("self"):q)+";return "+p+"."+H.d(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.O
if(typeof r!=="number")return r.A()
$.O=r+1
o+=r
r="return function("+o+"){return this."
q=$.an
return new Function(r+H.d(q==null?$.an=H.bk("self"):q)+"."+H.d(u)+"("+o+");}")()},
eB:function(a,b,c,d){var u=H.da,t=H.dD
switch(b?-1:a){case 0:throw H.f(H.eO("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
eC:function(a,b){var u,t,s,r,q,p,o,n=$.an
if(n==null)n=$.an=H.bk("self")
u=$.dC
if(u==null)u=$.dC=H.bk("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.eB(s,!q,t,b)
if(s===1){n="return function(){return this."+H.d(n)+"."+H.d(t)+"(this."+H.d(u)+");"
u=$.O
if(typeof u!=="number")return u.A()
$.O=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.d(n)+"."+H.d(t)+"(this."+H.d(u)+", "+o+");"
u=$.O
if(typeof u!=="number")return u.A()
$.O=u+1
return new Function(n+u+"}")()},
dr:function(a,b,c,d,e,f,g){return H.eD(a,b,H.G(c),d,!!e,!!f,g)},
da:function(a){return a.a},
dD:function(a){return a.c},
bk:function(a){var u,t,s,r=new H.am("self","target","receiver","name"),q=J.dH(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
M:function(a){if(a==null)H.f7("boolean expression must not be null")
return a},
n:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.f(H.R(a,"String"))},
fR:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.R(a,"num"))},
dp:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.f(H.R(a,"bool"))},
G:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.f(H.R(a,"int"))},
ec:function(a,b){throw H.f(H.R(a,H.aj(H.n(b).substring(2))))},
fr:function(a,b){throw H.f(H.ez(a,H.aj(H.n(b).substring(2))))},
i:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.v(a)[b])return a
H.ec(a,b)},
fj:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.v(a)[b]
else u=!0
if(u)return a
H.fr(a,b)},
d4:function(a){if(a==null)return a
if(!!J.v(a).$ir)return a
throw H.f(H.R(a,"List<dynamic>"))},
fm:function(a,b){var u
if(a==null)return a
u=J.v(a)
if(!!u.$ir)return a
if(u[b])return a
H.ec(a,b)},
e5:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.G(u)]
else return a.$S()}return},
bc:function(a,b){var u
if(typeof a=="function")return!0
u=H.e5(J.v(a))
if(u==null)return!1
return H.dW(u,null,b,null)},
e:function(a,b){var u,t
if(a==null)return a
if($.dk)return a
$.dk=!0
try{if(H.bc(a,b))return a
u=H.d6(b)
t=H.R(a,u)
throw H.f(t)}finally{$.dk=!1}},
cZ:function(a,b){if(a!=null&&!H.dq(a,b))H.ai(H.R(a,H.d6(b)))
return a},
R:function(a,b){return new H.c5("TypeError: "+P.aL(a)+": type '"+H.e_(a)+"' is not a subtype of type '"+b+"'")},
ez:function(a,b){return new H.bl("CastError: "+P.aL(a)+": type '"+H.e_(a)+"' is not a subtype of type '"+b+"'")},
e_:function(a){var u,t=J.v(a)
if(!!t.$iao){u=H.e5(t)
if(u!=null)return H.d6(u)
return"Closure"}return H.av(a)},
f7:function(a){throw H.f(new H.cc(a))},
fu:function(a){throw H.f(new P.bn(H.n(a)))},
eO:function(a){return new H.bM(a)},
e6:function(a){return v.getIsolateTag(a)},
x:function(a,b){a.$ti=b
return a},
a7:function(a){if(a==null)return
return a.$ti},
fQ:function(a,b,c){return H.ah(a["$a"+H.d(c)],H.a7(b))},
du:function(a,b,c,d){var u
H.n(c)
H.G(d)
u=H.ah(a["$a"+H.d(c)],H.a7(b))
return u==null?null:u[d]},
bd:function(a,b,c){var u
H.n(b)
H.G(c)
u=H.ah(a["$a"+H.d(b)],H.a7(a))
return u==null?null:u[c]},
j:function(a,b){var u
H.G(b)
u=H.a7(a)
return u==null?null:u[b]},
d6:function(a){return H.a6(a,null)},
a6:function(a,b){var u,t
H.N(b,"$ir",[P.h],"$ar")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.aj(a[0].name)+H.dn(a,1,b)
if(typeof a=="function")return H.aj(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.G(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.y(b,t)
return H.d(b[t])}if('func' in a)return H.f_(a,b)
if('futureOr' in a)return"FutureOr<"+H.a6("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
f_:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=", ",b=[P.h]
H.N(a0,"$ir",b,"$ar")
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.x([],b)
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.i(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=c){p+=o
b=a0.length
n=b-q-1
if(n<0)return H.y(a0,n)
p=C.c.A(p,a0[n])
m=u[q]
if(m!=null&&m!==P.o)p+=" extends "+H.a6(m,a0)}p+=">"}else{p=""
t=null}l=!!a.v?"void":H.a6(a.ret,a0)
if("args" in a){k=a.args
for(b=k.length,j="",i="",h=0;h<b;++h,i=c){g=k[h]
j=j+i+H.a6(g,a0)}}else{j=""
i=""}if("opt" in a){f=a.opt
j+=i+"["
for(b=f.length,i="",h=0;h<b;++h,i=c){g=f[h]
j=j+i+H.a6(g,a0)}j+="]"}if("named" in a){e=a.named
j+=i+"{"
for(b=H.fb(e),n=b.length,i="",h=0;h<n;++h,i=c){d=H.n(b[h])
j=j+i+H.a6(e[d],a0)+(" "+H.d(d))}j+="}"}if(t!=null)a0.length=t
return p+"("+j+") => "+l},
dn:function(a,b,c){var u,t,s,r,q,p
H.N(c,"$ir",[P.h],"$ar")
if(a==null)return""
u=new P.ay("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.a6(p,c)}return"<"+u.h(0)+">"},
ah:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bb:function(a,b,c,d){var u,t
H.n(b)
H.d4(c)
H.n(d)
if(a==null)return!1
u=H.a7(a)
t=J.v(a)
if(t[b]==null)return!1
return H.e1(H.ah(t[d],u),null,c,null)},
N:function(a,b,c,d){H.n(b)
H.d4(c)
H.n(d)
if(a==null)return a
if(H.bb(a,b,c,d))return a
throw H.f(H.R(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aj(b.substring(2))+H.dn(c,0,null),v.mangledGlobalNames)))},
e1:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.L(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.L(a[t],b,c[t],d))return!1
return!0},
fO:function(a,b,c){return a.apply(b,H.ah(J.v(b)["$a"+H.d(c)],H.a7(b)))},
e8:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="o"||a.name==="q"||a===-1||a===-2||H.e8(u)}return!1},
dq:function(a,b){var u,t
if(a==null)return b==null||b.name==="o"||b.name==="q"||b===-1||b===-2||H.e8(b)
if(b==null||b===-1||b.name==="o"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.dq(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bc(a,b)}u=J.v(a).constructor
t=H.a7(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.L(u,null,b,null)},
l:function(a,b){if(a!=null&&!H.dq(a,b))throw H.f(H.R(a,H.d6(b)))
return a},
L:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="o"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="o"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.L(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="q")return!0
if('func' in c)return H.dW(a,b,c,d)
if('func' in a)return c.name==="a2"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.L("type" in a?a.type:l,b,s,d)
else if(H.L(a,b,s,d))return!0
else{if(!('$i'+"u" in t.prototype))return!1
r=t.prototype["$a"+"u"]
q=H.ah(r,u?a.slice(1):l)
return H.L(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.e1(H.ah(m,u),b,p,d)},
dW:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.L(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.L(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.L(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.L(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.fp(h,b,g,d)},
fp:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.L(c[s],d,a[s],b))return!1}return!0},
fP:function(a,b,c){Object.defineProperty(a,H.n(b),{value:c,enumerable:false,writable:true,configurable:true})},
fn:function(a){var u,t,s,r,q=H.n($.e7.$1(a)),p=$.cX[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.d3[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.n($.e0.$2(a,q))
if(q!=null){p=$.cX[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.d3[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.d5(u)
$.cX[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.d3[q]=u
return u}if(s==="-"){r=H.d5(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.ea(a,u)
if(s==="*")throw H.f(P.dQ(q))
if(v.leafTags[q]===true){r=H.d5(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.ea(a,u)},
ea:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.dx(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
d5:function(a){return J.dx(a,!1,null,!!a.$iaP)},
fo:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.d5(u)
else return J.dx(u,c,null,null)},
fh:function(){if(!0===$.dw)return
$.dw=!0
H.fi()},
fi:function(){var u,t,s,r,q,p,o,n
$.cX=Object.create(null)
$.d3=Object.create(null)
H.fg()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.ed.$1(q)
if(p!=null){o=H.fo(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
fg:function(){var u,t,s,r,q,p,o=C.n()
o=H.af(C.o,H.af(C.p,H.af(C.j,H.af(C.j,H.af(C.q,H.af(C.r,H.af(C.t(C.i),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.e7=new H.d0(r)
$.e0=new H.d1(q)
$.ed=new H.d2(p)},
af:function(a,b){return a(b)||b},
fs:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
c3:function c3(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
bJ:function bJ(a,b){this.a=a
this.b=b},
bz:function bz(a,b,c){this.a=a
this.b=b
this.c=c},
c7:function c7(a){this.a=a},
d7:function d7(a){this.a=a},
b7:function b7(a){this.a=a
this.b=null},
ao:function ao(){},
c2:function c2(){},
bU:function bU(){},
am:function am(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c5:function c5(a){this.a=a},
bl:function bl(a){this.a=a},
bM:function bM(a){this.a=a},
cc:function cc(a){this.a=a},
aq:function aq(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bA:function bA(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bB:function bB(a,b){this.a=a
this.$ti=b},
bC:function bC(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
d0:function d0(a){this.a=a},
d1:function d1(a){this.a=a},
d2:function d2(a){this.a=a},
fb:function(a){return J.eJ(a?Object.keys(a):[],null)},
fq:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
dx:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
d_:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.dw==null){H.fh()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.f(P.dQ("Return interceptor for "+H.d(u(a,q))))}s=a.constructor
r=s==null?null:s[$.dy()]
if(r!=null)return r
r=H.fn(a)
if(r!=null)return r
if(typeof a=="function")return C.x
u=Object.getPrototypeOf(a)
if(u==null)return C.l
if(u===Object.prototype)return C.l
if(typeof s=="function"){Object.defineProperty(s,$.dy(),{value:C.f,enumerable:false,writable:true,configurable:true})
return C.f}return C.f},
eJ:function(a,b){return J.dH(H.x(a,[b]))},
dH:function(a){H.d4(a)
a.fixed$length=Array
return a},
v:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.aO.prototype
return J.bw.prototype}if(typeof a=="string")return J.a9.prototype
if(a==null)return J.bx.prototype
if(typeof a=="boolean")return J.bv.prototype
if(a.constructor==Array)return J.a3.prototype
if(typeof a!="object"){if(typeof a=="function")return J.a4.prototype
return a}if(a instanceof P.o)return a
return J.d_(a)},
ds:function(a){if(typeof a=="string")return J.a9.prototype
if(a==null)return a
if(a.constructor==Array)return J.a3.prototype
if(typeof a!="object"){if(typeof a=="function")return J.a4.prototype
return a}if(a instanceof P.o)return a
return J.d_(a)},
dt:function(a){if(a==null)return a
if(a.constructor==Array)return J.a3.prototype
if(typeof a!="object"){if(typeof a=="function")return J.a4.prototype
return a}if(a instanceof P.o)return a
return J.d_(a)},
fc:function(a){if(typeof a=="string")return J.a9.prototype
if(a==null)return a
if(!(a instanceof P.o))return J.aA.prototype
return a},
aH:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.a4.prototype
return a}if(a instanceof P.o)return a
return J.d_(a)},
d9:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.v(a).H(a,b)},
er:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.fl(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ds(a).q(a,b)},
es:function(a,b,c,d){return J.aH(a).aw(a,b,c,d)},
et:function(a,b,c,d){return J.aH(a).aE(a,b,c,d)},
eu:function(a,b){return J.aH(a).aK(a,b)},
ev:function(a,b){return J.dt(a).D(a,b)},
ew:function(a){return J.aH(a).gaL(a)},
bf:function(a){return J.v(a).gp(a)},
bg:function(a){return J.dt(a).gn(a)},
ex:function(a){return J.dt(a).gG(a)},
aJ:function(a){return J.ds(a).gj(a)},
dA:function(a){return J.aH(a).b0(a)},
ey:function(a){return J.fc(a).b4(a)},
ak:function(a){return J.v(a).h(a)},
F:function F(){},
bv:function bv(){},
bx:function bx(){},
aQ:function aQ(){},
bK:function bK(){},
aA:function aA(){},
a4:function a4(){},
a3:function a3(a){this.$ti=a},
de:function de(a){this.$ti=a},
bi:function bi(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
by:function by(){},
aO:function aO(){},
bw:function bw(){},
a9:function a9(){}},P={
eQ:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.f8()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.aG(new P.ce(s),1)).observe(u,{childList:true})
return new P.cd(s,u,t)}else if(self.setImmediate!=null)return P.f9()
return P.fa()},
eR:function(a){self.scheduleImmediate(H.aG(new P.cf(H.e(a,{func:1,ret:-1})),0))},
eS:function(a){self.setImmediate(H.aG(new P.cg(H.e(a,{func:1,ret:-1})),0))},
eT:function(a){H.e(a,{func:1,ret:-1})
P.eX(0,a)},
eX:function(a,b){var u=new P.cR()
u.au(a,b)
return u},
eG:function(a,b){var u,t,s,r,q
H.N(a,"$ip",[[P.u,b]],"$ap")
u=new P.cO(new P.w($.m,[b]),[b])
t=new P.bs(u,b)
s=new P.bt(u)
for(r=a.length,q=0;q<a.length;a.length===r||(0,H.be)(a),++q)a[q].a0(t,s,null)
return u.a},
dT:function(a,b){var u,t,s
b.a=1
try{a.a0(new P.ct(b),new P.cu(b),null)}catch(s){u=H.K(s)
t=H.ag(s)
P.ft(new P.cv(b,u,t))}},
cs:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.i(a.c,"$iw")
if(u>=4){t=b.M()
b.a=a.a
b.c=a.c
P.ad(b,t)}else{t=H.i(b.c,"$iT")
b.a=2
b.c=a
a.ag(t)}},
ad:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.i(g.c,"$iC")
g=g.b
r=s.a
q=s.b
g.toString
P.cV(i,i,g,r,q)}return}for(;p=b.a,p!=null;b=p){b.a=null
P.ad(h.a,b)}g=h.a
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
if(m){H.i(o,"$iC")
g=g.b
r=o.a
q=o.b
g.toString
P.cV(i,i,g,r,q)
return}l=$.m
if(l!=n)$.m=n
else l=i
g=b.c
if(g===8)new P.cA(h,u,b,t).$0()
else if(r){if((g&1)!==0)new P.cz(u,b,o).$0()}else if((g&2)!==0)new P.cy(h,u,b).$0()
if(l!=null)$.m=l
g=u.b
if(!!J.v(g).$iu){if(g.a>=4){k=H.i(q.c,"$iT")
q.c=null
b=q.N(k)
q.a=g.a
q.c=g.c
h.a=g
continue}else P.cs(g,q)
return}}j=b.b
k=H.i(j.c,"$iT")
j.c=null
b=j.N(k)
g=u.a
r=u.b
if(!g){H.l(r,H.j(j,0))
j.a=4
j.c=r}else{H.i(r,"$iC")
j.a=8
j.c=r}h.a=j
g=j}},
f2:function(a,b){if(H.bc(a,{func:1,args:[P.o,P.z]}))return H.e(a,{func:1,ret:null,args:[P.o,P.z]})
if(H.bc(a,{func:1,args:[P.o]}))return H.e(a,{func:1,ret:null,args:[P.o]})
throw H.f(P.dB(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
f1:function(){var u,t
for(;u=$.ae,u!=null;){$.aE=null
t=u.b
$.ae=t
if(t==null)$.aD=null
u.a.$0()}},
f5:function(){$.dl=!0
try{P.f1()}finally{$.aE=null
$.dl=!1
if($.ae!=null)$.dz().$1(P.e3())}},
dZ:function(a){var u=new P.b0(H.e(a,{func:1,ret:-1}))
if($.ae==null){$.ae=$.aD=u
if(!$.dl)$.dz().$1(P.e3())}else $.aD=$.aD.b=u},
f4:function(a){var u,t,s
H.e(a,{func:1,ret:-1})
u=$.ae
if(u==null){P.dZ(a)
$.aE=$.aD
return}t=new P.b0(a)
s=$.aE
if(s==null){t.b=u
$.ae=$.aE=t}else{t.b=s.b
$.aE=s.b=t
if(t.b==null)$.aD=t}},
ft:function(a){var u,t=null,s={func:1,ret:-1}
H.e(a,s)
u=$.m
if(C.b===u){P.aF(t,t,C.b,a)
return}u.toString
P.aF(t,t,u,H.e(u.ai(a),s))},
eY:function(a,b,c){a.aO()
b.K(c)},
cV:function(a,b,c,d,e){var u={}
u.a=d
P.f4(new P.cW(u,e))},
dX:function(a,b,c,d,e){var u,t
H.e(d,{func:1,ret:e})
t=$.m
if(t===c)return d.$0()
$.m=c
u=t
try{t=d.$0()
return t}finally{$.m=u}},
dY:function(a,b,c,d,e,f,g){var u,t
H.e(d,{func:1,ret:f,args:[g]})
H.l(e,g)
t=$.m
if(t===c)return d.$1(e)
$.m=c
u=t
try{t=d.$1(e)
return t}finally{$.m=u}},
f3:function(a,b,c,d,e,f,g,h,i){var u,t
H.e(d,{func:1,ret:g,args:[h,i]})
H.l(e,h)
H.l(f,i)
t=$.m
if(t===c)return d.$2(e,f)
$.m=c
u=t
try{t=d.$2(e,f)
return t}finally{$.m=u}},
aF:function(a,b,c,d){var u
H.e(d,{func:1,ret:-1})
u=C.b!==c
if(u)d=!(!u||!1)?c.ai(d):c.aM(d,-1)
P.dZ(d)},
ce:function ce(a){this.a=a},
cd:function cd(a,b,c){this.a=a
this.b=b
this.c=c},
cf:function cf(a){this.a=a},
cg:function cg(a){this.a=a},
cR:function cR(){},
cS:function cS(a,b){this.a=a
this.b=b},
u:function u(){},
bs:function bs(a,b){this.a=a
this.b=b},
bt:function bt(a){this.a=a},
ci:function ci(){},
cO:function cO(a,b){this.a=a
this.$ti=b},
T:function T(a,b,c,d,e){var _=this
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
cq:function cq(a,b){this.a=a
this.b=b},
cx:function cx(a,b){this.a=a
this.b=b},
ct:function ct(a){this.a=a},
cu:function cu(a){this.a=a},
cv:function cv(a,b,c){this.a=a
this.b=b
this.c=c},
cr:function cr(a,b){this.a=a
this.b=b},
cw:function cw(a,b){this.a=a
this.b=b},
cA:function cA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cB:function cB(a){this.a=a},
cz:function cz(a,b,c){this.a=a
this.b=b
this.c=c},
cy:function cy(a,b,c){this.a=a
this.b=b
this.c=c},
b0:function b0(a){this.a=a
this.b=null},
bV:function bV(){},
bZ:function bZ(a,b){this.a=a
this.b=b},
c_:function c_(a,b){this.a=a
this.b=b},
bX:function bX(a,b,c){this.a=a
this.b=b
this.c=c},
bY:function bY(a){this.a=a},
bW:function bW(){},
C:function C(a,b){this.a=a
this.b=b},
cU:function cU(){},
cW:function cW(a,b){this.a=a
this.b=b},
cF:function cF(){},
cH:function cH(a,b,c){this.a=a
this.b=b
this.c=c},
cG:function cG(a,b){this.a=a
this.b=b},
cI:function cI(a,b,c){this.a=a
this.b=b
this.c=c},
eK:function(a,b){return new H.aq([a,b])},
bD:function(a){return new P.cD([a])},
dj:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
eH:function(a,b,c){var u,t
if(P.dm(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.x([],[P.h])
C.a.i($.I,a)
try{P.f0(a,u)}finally{if(0>=$.I.length)return H.y($.I,-1)
$.I.pop()}t=P.dO(b,H.fm(u,"$ip"),", ")+c
return t.charCodeAt(0)==0?t:t},
dd:function(a,b,c){var u,t
if(P.dm(a))return b+"..."+c
u=new P.ay(b)
C.a.i($.I,a)
try{t=u
t.a=P.dO(t.a,a,", ")}finally{if(0>=$.I.length)return H.y($.I,-1)
$.I.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
dm:function(a){var u,t
for(u=$.I.length,t=0;t<u;++t)if(a===$.I[t])return!0
return!1},
f0:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.N(b,"$ir",[P.h],"$ar")
u=a.gn(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.k())return
r=H.d(u.gl())
C.a.i(b,r)
t+=r.length+2;++s}if(!u.k()){if(s<=5)return
if(0>=b.length)return H.y(b,-1)
q=b.pop()
if(0>=b.length)return H.y(b,-1)
p=b.pop()}else{o=u.gl();++s
if(!u.k()){if(s<=4){C.a.i(b,H.d(o))
return}q=H.d(o)
if(0>=b.length)return H.y(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gl();++s
for(;u.k();o=n,n=m){m=u.gl();++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.y(b,-1)
t-=b.pop().length+2;--s}C.a.i(b,"...")
return}}p=H.d(o)
q=H.d(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.y(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.i(b,l)
C.a.i(b,p)
C.a.i(b,q)},
dI:function(a,b){var u,t,s=P.bD(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.be)(a),++t)s.i(0,H.l(a[t],b))
return s},
dL:function(a){var u,t={}
if(P.dm(a))return"{...}"
u=new P.ay("")
try{C.a.i($.I,a)
u.a+="{"
t.a=!0
a.F(0,new P.bG(t,u))
u.a+="}"}finally{if(0>=$.I.length)return H.y($.I,-1)
$.I.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
cD:function cD(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
aC:function aC(a){this.a=a
this.b=null},
cE:function cE(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
bE:function bE(){},
P:function P(){},
bF:function bF(){},
bG:function bG(a,b){this.a=a
this.b=b},
ab:function ab(){},
cK:function cK(){},
b2:function b2(){},
eF:function(a){if(a instanceof H.ao)return a.h(0)
return"Instance of '"+H.av(a)+"'"},
dJ:function(a,b,c){var u,t=H.x([],[c])
for(u=a.gn(a);u.k();)C.a.i(t,H.l(u.gl(),c))
return t},
dO:function(a,b,c){var u=J.bg(b)
if(!u.k())return a
if(c.length===0){do a+=H.d(u.gl())
while(u.k())}else{a+=H.d(u.gl())
for(;u.k();)a=a+c+H.d(u.gl())}return a},
aL:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ak(a)
if(typeof a==="string")return JSON.stringify(a)
return P.eF(a)},
dB:function(a,b,c){return new P.U(!0,a,b,c)},
eN:function(a){var u=null
return new P.aU(u,u,!1,u,u,a)},
dh:function(a,b){return new P.aU(null,null,!0,a,b,"Value not in range")},
dc:function(a,b,c,d,e){var u=H.G(e==null?J.aJ(b):e)
return new P.bu(u,!0,a,c,"Index out of range")},
di:function(a){return new P.c8(a)},
dQ:function(a){return new P.c6(a)},
aW:function(a){return new P.ax(a)},
a_:function(a){return new P.bm(a)},
eb:function(a){H.fq(H.d(a))},
t:function t(){},
cY:function cY(){},
a8:function a8(){},
bj:function bj(){},
at:function at(){},
U:function U(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aU:function aU(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
bu:function bu(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
c8:function c8(a){this.a=a},
c6:function c6(a){this.a=a},
ax:function ax(a){this.a=a},
bm:function bm(a){this.a=a},
aV:function aV(){},
bn:function bn(a){this.a=a},
cp:function cp(a){this.a=a},
a2:function a2(){},
B:function B(){},
p:function p(){},
X:function X(){},
r:function r(){},
q:function q(){},
aI:function aI(){},
o:function o(){},
z:function z(){},
h:function h(){},
ay:function ay(a){this.a=a},
cC:function cC(){},
aw:function aw(){},
b:function b(){}},W={
eE:function(a,b,c){var u,t,s=document.body,r=(s&&C.h).u(s,a,b,c)
r.toString
s=W.k
s=new H.aZ(new W.H(r),H.e(new W.bq(),{func:1,ret:P.t,args:[s]}),[s])
u=s.gn(s)
if(!u.k())H.ai(H.aN())
t=u.gl()
if(u.k())H.ai(H.eI())
return H.i(t,"$iE")},
ap:function(a){var u,t,s,r="element tag unavailable"
try{u=J.aH(a)
t=u.gam(a)
if(typeof t==="string")r=u.gam(a)}catch(s){H.K(s)}return r},
eP:function(a){if(a!=null)return new URLSearchParams(a)
return new URLSearchParams()},
dS:function(a,b,c,d,e){var u=W.f6(new W.co(c),W.a),t=u!=null
if(t&&!0){H.e(u,{func:1,args:[W.a]})
if(t)J.es(a,b,u,!1)}return new W.cn(a,b,u,!1,[e])},
dU:function(a){var u=document.createElement("a"),t=new W.cJ(u,window.location)
t=new W.a5(t)
t.as(a)
return t},
eV:function(a,b,c,d){H.i(a,"$iE")
H.n(b)
H.n(c)
H.i(d,"$ia5")
return!0},
eW:function(a,b,c,d){var u,t,s
H.i(a,"$iE")
H.n(b)
H.n(c)
u=H.i(d,"$ia5").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
dV:function(){var u=P.h,t=P.dI(C.d,u),s=H.j(C.d,0),r=H.e(new W.cQ(),{func:1,ret:u,args:[s]}),q=H.x(["TEMPLATE"],[u])
t=new W.cP(t,P.bD(u),P.bD(u),P.bD(u),null)
t.at(null,new H.ar(C.d,r,[s,u]),q,null)
return t},
eZ:function(a){var u
if("postMessage" in a){u=W.eU(a)
return u}else return H.i(a,"$ia1")},
eU:function(a){if(a===window)return H.i(a,"$idR")
else return new W.cj()},
f6:function(a,b){var u
H.e(a,{func:1,ret:-1,args:[b]})
u=$.m
if(u===C.b)return a
return u.aN(a,b)},
c:function c(){},
aK:function aK(){},
bh:function bh(){},
al:function al(){},
Y:function Y(){},
D:function D(){},
Z:function Z(){},
a0:function a0(){},
bo:function bo(){},
E:function E(){},
bq:function bq(){},
a:function a(){},
a1:function a1(){},
br:function br(){},
aS:function aS(){},
A:function A(){},
H:function H(a){this.a=a},
k:function k(){},
as:function as(){},
bT:function bT(){},
aX:function aX(){},
c0:function c0(){},
c1:function c1(){},
az:function az(){},
S:function S(){},
b_:function b_(){},
aB:function aB(){},
b3:function b3(){},
ch:function ch(){},
ck:function ck(a){this.a=a},
cm:function cm(){},
cl:function cl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
cn:function cn(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
co:function co(a){this.a=a},
a5:function a5(a){this.a=a},
W:function W(){},
aT:function aT(a){this.a=a},
bI:function bI(a){this.a=a},
bH:function bH(a,b,c){this.a=a
this.b=b
this.c=c},
b6:function b6(){},
cL:function cL(){},
cM:function cM(){},
cP:function cP(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
cQ:function cQ(){},
cN:function cN(){},
aM:function aM(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
cj:function cj(){},
J:function J(){},
cJ:function cJ(a,b){this.a=a
this.b=b},
b8:function b8(a){this.a=a},
cT:function cT(a){this.a=a},
b4:function b4(){},
b5:function b5(){},
b9:function b9(){},
ba:function ba(){}},E={bL:function bL(){},ac:function ac(a,b,c){this.a=a
this.b=b
this.$ti=c},c9:function c9(){},ca:function ca(a){this.a=a}},Y={
dN:function(a){if(a==="test_scene")return new D.aY()
if(a==="return_scene")return new E.bL()
throw H.f("Tried to make nonexistant Scene "+H.d(a))},
bN:function bN(){},
bP:function bP(a){this.a=a},
bQ:function bQ(a){this.a=a},
bR:function bR(){},
bS:function bS(){},
bO:function bO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},U={
e9:function(){var u=W.eP(window.location.search),t=u.has("debug"),s=u.has("manual"),r=document.querySelector("#output")
new D.aY().$4$container$debug$manual([new U.d8(C.u)],H.i(r,"$ia0"),t,s)},
d8:function d8(a){this.a=a}},D={aY:function aY(){}}
var w=[C,H,J,P,W,E,Y,U,D]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.df.prototype={}
J.F.prototype={
H:function(a,b){return a===b},
gp:function(a){return H.au(a)},
h:function(a){return"Instance of '"+H.av(a)+"'"}}
J.bv.prototype={
h:function(a){return String(a)},
gp:function(a){return a?519018:218159},
$it:1}
J.bx.prototype={
H:function(a,b){return null==b},
h:function(a){return"null"},
gp:function(a){return 0}}
J.aQ.prototype={
gp:function(a){return 0},
h:function(a){return String(a)}}
J.bK.prototype={}
J.aA.prototype={}
J.a4.prototype={
h:function(a){var u=a[$.ef()]
if(u==null)return this.aq(a)
return"JavaScript function for "+H.d(J.ak(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ia2:1}
J.a3.prototype={
i:function(a,b){H.l(b,H.j(a,0))
if(!!a.fixed$length)H.ai(P.di("add"))
a.push(b)},
t:function(a,b){var u,t
H.N(b,"$ip",[H.j(a,0)],"$ap")
if(!!a.fixed$length)H.ai(P.di("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.be)(b),++t)a.push(b[t])},
F:function(a,b){var u,t
H.e(b,{func:1,ret:-1,args:[H.j(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.f(P.a_(a))}},
b_:function(a,b){var u,t,s,r=H.j(a,0)
H.e(b,{func:1,ret:r,args:[r,r]})
u=a.length
if(u===0)throw H.f(H.aN())
if(0>=u)return H.y(a,0)
t=a[0]
for(s=1;s<u;++s){t=b.$2(t,a[s])
if(u!==a.length)throw H.f(P.a_(a))}return t},
D:function(a,b){if(b>=a.length)return H.y(a,b)
return a[b]},
gG:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.f(H.aN())},
ah:function(a,b){var u,t
H.e(b,{func:1,ret:P.t,args:[H.j(a,0)]})
u=a.length
for(t=0;t<u;++t){if(H.M(b.$1(a[t])))return!0
if(a.length!==u)throw H.f(P.a_(a))}return!1},
m:function(a,b){var u
for(u=0;u<a.length;++u)if(J.d9(a[u],b))return!0
return!1},
h:function(a){return P.dd(a,"[","]")},
gn:function(a){return new J.bi(a,a.length,[H.j(a,0)])},
gp:function(a){return H.au(a)},
gj:function(a){return a.length},
aT:function(a,b){var u
H.e(b,{func:1,ret:P.t,args:[H.j(a,0)]})
if(0>=a.length)return-1
for(u=0;u<a.length;++u)if(H.M(b.$1(a[u])))return u
return-1},
$ip:1,
$ir:1}
J.de.prototype={}
J.bi.prototype={
gl:function(){return this.d},
k:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.f(H.be(s))
u=t.c
if(u>=r){t.sac(null)
return!1}t.sac(s[u]);++t.c
return!0},
sac:function(a){this.d=H.l(a,H.j(this,0))},
$iX:1}
J.by.prototype={
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gp:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
aI:function(a,b){var u
if(a>0)u=this.aH(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
aH:function(a,b){return b>31?0:a>>>b},
$iaI:1}
J.aO.prototype={$iB:1}
J.bw.prototype={}
J.a9.prototype={
ay:function(a,b){if(b>=a.length)throw H.f(H.e4(a,b))
return a.charCodeAt(b)},
A:function(a,b){if(typeof b!=="string")throw H.f(P.dB(b,null,null))
return a+b},
an:function(a,b){var u=b.length
if(u>a.length)return!1
return b===a.substring(0,u)},
b4:function(a){return a.toLowerCase()},
h:function(a){return a},
gp:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gj:function(a){return a.length},
$ieL:1,
$ih:1}
H.bp.prototype={}
H.aa.prototype={
gn:function(a){var u=this
return new H.aR(u,u.gj(u),[H.bd(u,"aa",0)])},
O:function(a,b){return this.ap(0,H.e(b,{func:1,ret:P.t,args:[H.bd(this,"aa",0)]}))}}
H.aR.prototype={
gl:function(){return this.d},
k:function(){var u,t=this,s=t.a,r=J.ds(s),q=r.gj(s)
if(t.b!==q)throw H.f(P.a_(s))
u=t.c
if(u>=q){t.sa5(null)
return!1}t.sa5(r.D(s,u));++t.c
return!0},
sa5:function(a){this.d=H.l(a,H.j(this,0))},
$iX:1}
H.ar.prototype={
gj:function(a){return J.aJ(this.a)},
D:function(a,b){return this.b.$1(J.ev(this.a,b))},
$aaa:function(a,b){return[b]},
$ap:function(a,b){return[b]}}
H.aZ.prototype={
gn:function(a){return new H.cb(J.bg(this.a),this.b,this.$ti)}}
H.cb.prototype={
k:function(){var u,t
for(u=this.a,t=this.b;u.k();)if(H.M(t.$1(u.gl())))return!0
return!1},
gl:function(){return this.a.gl()}}
H.c3.prototype={
v:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.bJ.prototype={
h:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.d(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.bz.prototype={
h:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.d(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.d(t.a)+")"
return s+r+"' on '"+u+"' ("+H.d(t.a)+")"}}
H.c7.prototype={
h:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.d7.prototype={
$1:function(a){if(!!J.v(a).$ia8)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:3}
H.b7.prototype={
h:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iz:1}
H.ao.prototype={
h:function(a){return"Closure '"+H.av(this).trim()+"'"},
$ia2:1,
gb5:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.c2.prototype={}
H.bU.prototype={
h:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.aj(u)+"'"}}
H.am.prototype={
H:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.am))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gp:function(a){var u,t=this.c
if(t==null)u=H.au(this.a)
else u=typeof t!=="object"?J.bf(t):H.au(t)
return(u^H.au(this.b))>>>0},
h:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.d(this.d)+"' of "+("Instance of '"+H.av(u)+"'")}}
H.c5.prototype={
h:function(a){return this.a}}
H.bl.prototype={
h:function(a){return this.a}}
H.bM.prototype={
h:function(a){return"RuntimeError: "+H.d(this.a)}}
H.cc.prototype={
h:function(a){return"Assertion failed: "+P.aL(this.a)}}
H.aq.prototype={
gj:function(a){return this.a},
gB:function(){return new H.bB(this,[H.j(this,0)])},
q:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.U(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.U(r,b)
s=t==null?null:t.b
return s}else return q.aU(b)},
aU:function(a){var u,t,s=this.d
if(s==null)return
u=this.ae(s,J.bf(a)&0x3ffffff)
t=this.ak(u,a)
if(t<0)return
return u[t].b},
a2:function(a,b,c){var u,t,s,r,q,p,o=this
H.l(b,H.j(o,0))
H.l(c,H.j(o,1))
if(typeof b==="string"){u=o.b
o.a6(u==null?o.b=o.V():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.a6(t==null?o.c=o.V():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.V()
r=J.bf(b)&0x3ffffff
q=o.ae(s,r)
if(q==null)o.X(s,r,[o.R(b,c)])
else{p=o.ak(q,b)
if(p>=0)q[p].b=c
else q.push(o.R(b,c))}}},
F:function(a,b){var u,t,s=this
H.e(b,{func:1,ret:-1,args:[H.j(s,0),H.j(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.f(P.a_(s))
u=u.c}},
a6:function(a,b,c){var u,t=this
H.l(b,H.j(t,0))
H.l(c,H.j(t,1))
u=t.U(a,b)
if(u==null)t.X(a,b,t.R(b,c))
else u.b=c},
aC:function(){this.r=this.r+1&67108863},
R:function(a,b){var u,t=this,s=new H.bA(H.l(a,H.j(t,0)),H.l(b,H.j(t,1)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.aC()
return s},
ak:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.d9(a[t].a,b))return t
return-1},
h:function(a){return P.dL(this)},
U:function(a,b){return a[b]},
ae:function(a,b){return a[b]},
X:function(a,b,c){a[b]=c},
aA:function(a,b){delete a[b]},
V:function(){var u="<non-identifier-key>",t=Object.create(null)
this.X(t,u,t)
this.aA(t,u)
return t}}
H.bA.prototype={}
H.bB.prototype={
gj:function(a){return this.a.a},
gn:function(a){var u=this.a,t=new H.bC(u,u.r,this.$ti)
t.c=u.e
return t}}
H.bC.prototype={
gl:function(){return this.d},
k:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.f(P.a_(t))
else{t=u.c
if(t==null){u.sa7(null)
return!1}else{u.sa7(t.a)
u.c=u.c.c
return!0}}},
sa7:function(a){this.d=H.l(a,H.j(this,0))},
$iX:1}
H.d0.prototype={
$1:function(a){return this.a(a)},
$S:3}
H.d1.prototype={
$2:function(a,b){return this.a(a,b)},
$S:8}
H.d2.prototype={
$1:function(a){return this.a(H.n(a))},
$S:9}
P.ce.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:4}
P.cd.prototype={
$1:function(a){var u,t
this.a.a=H.e(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:10}
P.cf.prototype={
$0:function(){this.a.$0()},
$S:0}
P.cg.prototype={
$0:function(){this.a.$0()},
$S:0}
P.cR.prototype={
au:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.aG(new P.cS(this,b),0),a)
else throw H.f(P.di("`setTimeout()` not found."))}}
P.cS.prototype={
$0:function(){this.b.$0()},
$S:1}
P.u.prototype={}
P.bs.prototype={
$1:function(a){var u,t
H.l(a,this.b)
u=this.a
t=u.a
if(t.a===0){H.cZ(a,{futureOr:1,type:H.j(u,0)})
t.K(a)}},
$S:function(){return{func:1,ret:P.q,args:[this.b]}}}
P.bt.prototype={
$2:function(a,b){var u
H.i(b,"$iz")
u=this.a.a
if(u.a===0){if(a==null)a=new P.at()
$.m.toString
u.L(a,b)}},
$S:11}
P.ci.prototype={}
P.cO.prototype={}
P.T.prototype={
aV:function(a){if(this.c!==6)return!0
return this.b.b.Z(H.e(this.d,{func:1,ret:P.t,args:[P.o]}),a.a,P.t,P.o)},
aS:function(a){var u=this.e,t=P.o,s={futureOr:1,type:H.j(this,1)},r=this.b.b
if(H.bc(u,{func:1,args:[P.o,P.z]}))return H.cZ(r.b1(u,a.a,a.b,null,t,P.z),s)
else return H.cZ(r.Z(H.e(u,{func:1,args:[P.o]}),a.a,null,t),s)}}
P.w.prototype={
gaB:function(){return this.a===8},
a0:function(a,b,c){var u,t,s,r=H.j(this,0)
H.e(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.m
if(u!==C.b){u.toString
H.e(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.f2(b,u)}H.e(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
t=new P.w($.m,[c])
s=b==null?1:3
this.a9(new P.T(t,s,a,b,[r,c]))
return t},
a_:function(a,b){return this.a0(a,null,b)},
a9:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.i(t.c,"$iT")
t.c=a}else{if(s===2){u=H.i(t.c,"$iw")
s=u.a
if(s<4){u.a9(a)
return}t.a=s
t.c=u.c}s=t.b
s.toString
P.aF(null,null,s,H.e(new P.cq(t,a),{func:1,ret:-1}))}},
ag:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.i(p.c,"$iT")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.i(p.c,"$iw")
u=q.a
if(u<4){q.ag(a)
return}p.a=u
p.c=q.c}o.a=p.N(a)
u=p.b
u.toString
P.aF(null,null,u,H.e(new P.cx(o,p),{func:1,ret:-1}))}},
M:function(){var u=H.i(this.c,"$iT")
this.c=null
return this.N(u)},
N:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
K:function(a){var u,t,s=this,r=H.j(s,0)
H.cZ(a,{futureOr:1,type:r})
u=s.$ti
if(H.bb(a,"$iu",u,"$au"))if(H.bb(a,"$iw",u,null))P.cs(a,s)
else P.dT(a,s)
else{t=s.M()
H.l(a,r)
s.a=4
s.c=a
P.ad(s,t)}},
L:function(a,b){var u,t=this
H.i(b,"$iz")
u=t.M()
t.a=8
t.c=new P.C(a,b)
P.ad(t,u)},
J:function(a){var u,t=this
if(H.bb(a,"$iu",t.$ti,"$au")){t.ax(a)
return}t.a=1
u=t.b
u.toString
P.aF(null,null,u,H.e(new P.cr(t,a),{func:1,ret:-1}))},
ax:function(a){var u=this,t=u.$ti
H.N(a,"$iu",t,"$au")
if(H.bb(a,"$iw",t,null)){if(a.gaB()){u.a=1
t=u.b
t.toString
P.aF(null,null,t,H.e(new P.cw(u,a),{func:1,ret:-1}))}else P.cs(a,u)
return}P.dT(a,u)},
$iu:1}
P.cq.prototype={
$0:function(){P.ad(this.a,this.b)},
$S:0}
P.cx.prototype={
$0:function(){P.ad(this.b,this.a.a)},
$S:0}
P.ct.prototype={
$1:function(a){var u=this.a
u.a=0
u.K(a)},
$S:4}
P.cu.prototype={
$2:function(a,b){H.i(b,"$iz")
this.a.L(a,b)},
$1:function(a){return this.$2(a,null)},
$S:12}
P.cv.prototype={
$0:function(){this.a.L(this.b,this.c)},
$S:0}
P.cr.prototype={
$0:function(){var u=this.a,t=H.l(this.b,H.j(u,0)),s=u.M()
u.a=4
u.c=t
P.ad(u,s)},
$S:0}
P.cw.prototype={
$0:function(){P.cs(this.b,this.a)},
$S:0}
P.cA.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.al(H.e(s.d,{func:1}),null)}catch(r){u=H.K(r)
t=H.ag(r)
if(o.d){s=H.i(o.a.a.c,"$iC").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.i(o.a.a.c,"$iC")
else q.b=new P.C(u,t)
q.a=!0
return}if(!!J.v(n).$iu){if(n instanceof P.w&&n.a>=4){if(n.a===8){s=o.b
s.b=H.i(n.c,"$iC")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.a_(new P.cB(p),null)
s.a=!1}},
$S:1}
P.cB.prototype={
$1:function(a){return this.a},
$S:13}
P.cz.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.j(s,0)
q=H.l(n.c,r)
p=H.j(s,1)
n.a.b=s.b.b.Z(H.e(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.K(o)
t=H.ag(o)
s=n.a
s.b=new P.C(u,t)
s.a=!0}},
$S:1}
P.cy.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.i(m.a.a.c,"$iC")
r=m.c
if(H.M(r.aV(u))&&r.e!=null){q=m.b
q.b=r.aS(u)
q.a=!1}}catch(p){t=H.K(p)
s=H.ag(p)
r=H.i(m.a.a.c,"$iC")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.C(t,s)
n.a=!0}},
$S:1}
P.b0.prototype={}
P.bV.prototype={
gj:function(a){var u,t,s=this,r={},q=new P.w($.m,[P.B])
r.a=0
u=H.j(s,0)
t=H.e(new P.bZ(r,s),{func:1,ret:-1,args:[u]})
H.e(new P.c_(r,q),{func:1,ret:-1})
W.dS(s.a,s.b,t,!1,u)
return q},
gaQ:function(a){var u,t,s=this,r={},q=new P.w($.m,s.$ti)
r.a=null
u=H.j(s,0)
t=H.e(new P.bX(r,s,q),{func:1,ret:-1,args:[u]})
H.e(new P.bY(q),{func:1,ret:-1})
r.a=W.dS(s.a,s.b,t,!1,u)
return q}}
P.bZ.prototype={
$1:function(a){H.l(a,H.j(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.q,args:[H.j(this.b,0)]}}}
P.c_.prototype={
$0:function(){this.b.K(this.a.a)},
$S:0}
P.bX.prototype={
$1:function(a){H.l(a,H.j(this.b,0))
P.eY(this.a.a,this.c,a)},
$S:function(){return{func:1,ret:P.q,args:[H.j(this.b,0)]}}}
P.bY.prototype={
$0:function(){var u,t,s,r
try{s=H.aN()
throw H.f(s)}catch(r){u=H.K(r)
t=H.ag(r)
$.m.toString
this.a.L(u,t)}},
$S:0}
P.bW.prototype={}
P.C.prototype={
h:function(a){return H.d(this.a)},
$ia8:1}
P.cU.prototype={$ifL:1}
P.cW.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.at():s
s=this.b
if(s==null)throw H.f(t)
u=H.f(t)
u.stack=s.h(0)
throw u},
$S:0}
P.cF.prototype={
b2:function(a){var u,t,s,r=null
H.e(a,{func:1,ret:-1})
try{if(C.b===$.m){a.$0()
return}P.dX(r,r,this,a,-1)}catch(s){u=H.K(s)
t=H.ag(s)
P.cV(r,r,this,u,H.i(t,"$iz"))}},
b3:function(a,b,c){var u,t,s,r=null
H.e(a,{func:1,ret:-1,args:[c]})
H.l(b,c)
try{if(C.b===$.m){a.$1(b)
return}P.dY(r,r,this,a,b,-1,c)}catch(s){u=H.K(s)
t=H.ag(s)
P.cV(r,r,this,u,H.i(t,"$iz"))}},
aM:function(a,b){return new P.cH(this,H.e(a,{func:1,ret:b}),b)},
ai:function(a){return new P.cG(this,H.e(a,{func:1,ret:-1}))},
aN:function(a,b){return new P.cI(this,H.e(a,{func:1,ret:-1,args:[b]}),b)},
al:function(a,b){H.e(a,{func:1,ret:b})
if($.m===C.b)return a.$0()
return P.dX(null,null,this,a,b)},
Z:function(a,b,c,d){H.e(a,{func:1,ret:c,args:[d]})
H.l(b,d)
if($.m===C.b)return a.$1(b)
return P.dY(null,null,this,a,b,c,d)},
b1:function(a,b,c,d,e,f){H.e(a,{func:1,ret:d,args:[e,f]})
H.l(b,e)
H.l(c,f)
if($.m===C.b)return a.$2(b,c)
return P.f3(null,null,this,a,b,c,d,e,f)}}
P.cH.prototype={
$0:function(){return this.a.al(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.cG.prototype={
$0:function(){return this.a.b2(this.b)},
$S:1}
P.cI.prototype={
$1:function(a){var u=this.c
return this.a.b3(this.b,H.l(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.cD.prototype={
gn:function(a){var u=this,t=new P.cE(u,u.r,u.$ti)
t.c=u.e
return t},
gj:function(a){return this.a},
m:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.i(u[b],"$iaC")!=null}else{t=this.az(b)
return t}},
az:function(a){var u=this.d
if(u==null)return!1
return this.ad(u[this.ab(a)],a)>=0},
i:function(a,b){var u,t,s=this
H.l(b,H.j(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.a8(u==null?s.b=P.dj():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.a8(t==null?s.c=P.dj():t,b)}else return s.av(b)},
av:function(a){var u,t,s,r=this
H.l(a,H.j(r,0))
u=r.d
if(u==null)u=r.d=P.dj()
t=r.ab(a)
s=u[t]
if(s==null)u[t]=[r.W(a)]
else{if(r.ad(s,a)>=0)return!1
s.push(r.W(a))}return!0},
a8:function(a,b){H.l(b,H.j(this,0))
if(H.i(a[b],"$iaC")!=null)return!1
a[b]=this.W(b)
return!0},
W:function(a){var u=this,t=new P.aC(H.l(a,H.j(u,0)))
if(u.e==null)u.e=u.f=t
else u.f=u.f.b=t;++u.a
u.r=1073741823&u.r+1
return t},
ab:function(a){return J.bf(a)&1073741823},
ad:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.d9(a[t].a,b))return t
return-1}}
P.aC.prototype={}
P.cE.prototype={
gl:function(){return this.d},
k:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.f(P.a_(t))
else{t=u.c
if(t==null){u.saa(null)
return!1}else{u.saa(H.l(t.a,H.j(u,0)))
u.c=u.c.b
return!0}}},
saa:function(a){this.d=H.l(a,H.j(this,0))},
$iX:1}
P.bE.prototype={$ip:1,$ir:1}
P.P.prototype={
gn:function(a){return new H.aR(a,this.gj(a),[H.du(this,a,"P",0)])},
D:function(a,b){return this.q(a,b)},
gG:function(a){if(this.gj(a)===0)throw H.f(H.aN())
return this.q(a,this.gj(a)-1)},
h:function(a){return P.dd(a,"[","]")}}
P.bF.prototype={}
P.bG.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.d(a)
t.a=u+": "
t.a+=H.d(b)},
$S:14}
P.ab.prototype={
F:function(a,b){var u,t,s=this
H.e(b,{func:1,ret:-1,args:[H.bd(s,"ab",0),H.bd(s,"ab",1)]})
for(u=J.bg(s.gB());u.k();){t=u.gl()
b.$2(t,s.q(0,t))}},
gj:function(a){return J.aJ(this.gB())},
h:function(a){return P.dL(this)},
$idK:1}
P.cK.prototype={
t:function(a,b){var u
for(u=J.bg(H.N(b,"$ip",this.$ti,"$ap"));u.k();)this.i(0,u.gl())},
h:function(a){return P.dd(this,"{","}")},
$ip:1,
$ifz:1}
P.b2.prototype={}
P.t.prototype={}
P.cY.prototype={}
P.a8.prototype={}
P.bj.prototype={
h:function(a){return"Assertion failed"}}
P.at.prototype={
h:function(a){return"Throw of null."}}
P.U.prototype={
gT:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gS:function(){return""},
h:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gT()+o+u
if(!q.a)return t
s=q.gS()
r=P.aL(q.b)
return t+s+": "+r}}
P.aU.prototype={
gT:function(){return"RangeError"},
gS:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.d(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.d(s)
else if(t>s)u=": Not in range "+H.d(s)+".."+H.d(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.d(s)}return u}}
P.bu.prototype={
gT:function(){return"RangeError"},
gS:function(){var u,t=H.G(this.b)
if(typeof t!=="number")return t.b7()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.d(u)},
gj:function(a){return this.f}}
P.c8.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.c6.prototype={
h:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.ax.prototype={
h:function(a){return"Bad state: "+this.a}}
P.bm.prototype={
h:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.aL(u)+"."}}
P.aV.prototype={
h:function(a){return"Stack Overflow"},
$ia8:1}
P.bn.prototype={
h:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.cp.prototype={
h:function(a){return"Exception: "+this.a}}
P.a2.prototype={}
P.B.prototype={}
P.p.prototype={
O:function(a,b){var u=H.bd(this,"p",0)
return new H.aZ(this,H.e(b,{func:1,ret:P.t,args:[u]}),[u])},
gj:function(a){var u,t=this.gn(this)
for(u=0;t.k();)++u
return u},
h:function(a){return P.eH(this,"(",")")}}
P.X.prototype={}
P.r.prototype={$ip:1}
P.q.prototype={
gp:function(a){return P.o.prototype.gp.call(this,this)},
h:function(a){return"null"}}
P.aI.prototype={}
P.o.prototype={constructor:P.o,$io:1,
H:function(a,b){return this===b},
gp:function(a){return H.au(this)},
h:function(a){return"Instance of '"+H.av(this)+"'"},
toString:function(){return this.h(this)}}
P.z.prototype={}
P.h.prototype={$ieL:1}
P.ay.prototype={
gj:function(a){return this.a.length},
h:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.c.prototype={}
W.aK.prototype={
h:function(a){return String(a)},
$iaK:1}
W.bh.prototype={
h:function(a){return String(a)}}
W.al.prototype={$ial:1}
W.Y.prototype={$iY:1}
W.D.prototype={$iD:1}
W.Z.prototype={
gj:function(a){return a.length}}
W.a0.prototype={$ia0:1}
W.bo.prototype={
h:function(a){return String(a)}}
W.E.prototype={
gaL:function(a){return new W.ck(a)},
h:function(a){return a.localName},
u:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.dG
if(u==null){u=H.x([],[W.J])
t=new W.aT(u)
C.a.i(u,W.dU(null))
C.a.i(u,W.dV())
$.dG=t
d=t}else d=u
u=$.dF
if(u==null){u=new W.b8(d)
$.dF=u
c=u}else{u.a=d
c=u}}if($.V==null){u=document
t=u.implementation.createHTMLDocument("")
$.V=t
$.db=t.createRange()
t=$.V.createElement("base")
H.i(t,"$ial")
t.href=u.baseURI
$.V.head.appendChild(t)}u=$.V
if(u.body==null){t=u.createElement("body")
u.body=H.i(t,"$iY")}u=$.V
if(!!this.$iY)s=u.body
else{s=u.createElement(a.tagName)
$.V.body.appendChild(s)}if("createContextualFragment" in window.Range.prototype&&!C.a.m(C.z,a.tagName)){$.db.selectNodeContents(s)
r=$.db.createContextualFragment(b)}else{s.innerHTML=b
r=$.V.createDocumentFragment()
for(;u=s.firstChild,u!=null;)r.appendChild(u)}u=$.V.body
if(s==null?u!=null:s!==u)J.dA(s)
c.a3(r)
document.adoptNode(r)
return r},
aP:function(a,b,c){return this.u(a,b,c,null)},
a4:function(a,b){a.textContent=null
a.appendChild(this.u(a,b,null,null))},
$iE:1,
gam:function(a){return a.tagName}}
W.bq.prototype={
$1:function(a){return!!J.v(H.i(a,"$ik")).$iE},
$S:15}
W.a.prototype={$ia:1}
W.a1.prototype={
aw:function(a,b,c,d){return a.addEventListener(b,H.aG(H.e(c,{func:1,args:[W.a]}),1),!1)},
aE:function(a,b,c,d){return a.removeEventListener(b,H.aG(H.e(c,{func:1,args:[W.a]}),1),!1)},
$ia1:1}
W.br.prototype={
gj:function(a){return a.length}}
W.aS.prototype={
h:function(a){return String(a)},
$iaS:1}
W.A.prototype={$iA:1}
W.H.prototype={
gG:function(a){var u=this.a.lastChild
if(u==null)throw H.f(P.aW("No elements"))
return u},
gI:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.f(P.aW("No elements"))
if(t>1)throw H.f(P.aW("More than one element"))
return u.firstChild},
t:function(a,b){var u,t,s,r
H.N(b,"$ip",[W.k],"$ap")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=0;r<s;++r)t.appendChild(u.firstChild)
return},
gn:function(a){var u=this.a.childNodes
return new W.aM(u,u.length,[H.du(C.B,u,"W",0)])},
gj:function(a){return this.a.childNodes.length},
q:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.y(u,b)
return u[b]},
$aP:function(){return[W.k]},
$ap:function(){return[W.k]},
$ar:function(){return[W.k]}}
W.k.prototype={
b0:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
h:function(a){var u=a.nodeValue
return u==null?this.ao(a):u},
aK:function(a,b){return a.appendChild(b)},
$ik:1}
W.as.prototype={
gj:function(a){return a.length},
q:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.dc(b,a,null,null,null))
return a[b]},
gG:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.f(P.aW("No elements"))},
D:function(a,b){if(b>=a.length)return H.y(a,b)
return a[b]},
$iaP:1,
$aaP:function(){return[W.k]},
$aP:function(){return[W.k]},
$ip:1,
$ap:function(){return[W.k]},
$ir:1,
$ar:function(){return[W.k]},
$aW:function(){return[W.k]}}
W.bT.prototype={
gj:function(a){return a.length}}
W.aX.prototype={
u:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.P(a,b,c,d)
u=W.eE("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.H(t).t(0,new W.H(u))
return t}}
W.c0.prototype={
u:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.P(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.m.u(u.createElement("table"),b,c,d)
u.toString
u=new W.H(u)
s=u.gI(u)
s.toString
u=new W.H(s)
r=u.gI(u)
t.toString
r.toString
new W.H(t).t(0,new W.H(r))
return t}}
W.c1.prototype={
u:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.P(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.m.u(u.createElement("table"),b,c,d)
u.toString
u=new W.H(u)
s=u.gI(u)
t.toString
s.toString
new W.H(t).t(0,new W.H(s))
return t}}
W.az.prototype={$iaz:1}
W.S.prototype={}
W.b_.prototype={$idR:1}
W.aB.prototype={$iaB:1}
W.b3.prototype={
gj:function(a){return a.length},
q:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.dc(b,a,null,null,null))
return a[b]},
gG:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.f(P.aW("No elements"))},
D:function(a,b){if(b>=a.length)return H.y(a,b)
return a[b]},
$iaP:1,
$aaP:function(){return[W.k]},
$aP:function(){return[W.k]},
$ip:1,
$ap:function(){return[W.k]},
$ir:1,
$ar:function(){return[W.k]},
$aW:function(){return[W.k]}}
W.ch.prototype={
F:function(a,b){var u,t,s,r,q
H.e(b,{func:1,ret:-1,args:[P.h,P.h]})
for(u=this.gB(),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.be)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
gB:function(){var u,t,s,r=this.a.attributes,q=H.x([],[P.h])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.y(r,t)
s=H.i(r[t],"$iaB")
if(s.namespaceURI==null)C.a.i(q,s.name)}return q},
$aab:function(){return[P.h,P.h]},
$adK:function(){return[P.h,P.h]}}
W.ck.prototype={
q:function(a,b){return this.a.getAttribute(H.n(b))},
gj:function(a){return this.gB().length}}
W.cm.prototype={}
W.cl.prototype={}
W.cn.prototype={
aO:function(){var u,t,s=this,r=s.b
if(r==null)return
u=s.d
t=u!=null
if(t){H.e(u,{func:1,args:[W.a]})
if(t)J.et(r,s.c,u,!1)}s.b=null
s.saD(null)
return},
saD:function(a){this.d=H.e(a,{func:1,args:[W.a]})}}
W.co.prototype={
$1:function(a){return this.a.$1(H.i(a,"$ia"))},
$S:16}
W.a5.prototype={
as:function(a){var u
if($.b1.a===0){for(u=0;u<262;++u)$.b1.a2(0,C.y[u],W.fe())
for(u=0;u<12;++u)$.b1.a2(0,C.e[u],W.ff())}},
C:function(a){return $.eq().m(0,W.ap(a))},
w:function(a,b,c){var u=$.b1.q(0,H.d(W.ap(a))+"::"+b)
if(u==null)u=$.b1.q(0,"*::"+b)
if(u==null)return!1
return H.dp(u.$4(a,b,c,this))},
$iJ:1}
W.W.prototype={
gn:function(a){return new W.aM(a,this.gj(a),[H.du(this,a,"W",0)])}}
W.aT.prototype={
C:function(a){return C.a.ah(this.a,new W.bI(a))},
w:function(a,b,c){return C.a.ah(this.a,new W.bH(a,b,c))},
$iJ:1}
W.bI.prototype={
$1:function(a){return H.i(a,"$iJ").C(this.a)},
$S:5}
W.bH.prototype={
$1:function(a){return H.i(a,"$iJ").w(this.a,this.b,this.c)},
$S:5}
W.b6.prototype={
at:function(a,b,c,d){var u,t,s
this.a.t(0,c)
u=b.O(0,new W.cL())
t=b.O(0,new W.cM())
this.b.t(0,u)
s=this.c
s.t(0,C.A)
s.t(0,t)},
C:function(a){return this.a.m(0,W.ap(a))},
w:function(a,b,c){var u=this,t=W.ap(a),s=u.c
if(s.m(0,H.d(t)+"::"+b))return u.d.aJ(c)
else if(s.m(0,"*::"+b))return u.d.aJ(c)
else{s=u.b
if(s.m(0,H.d(t)+"::"+b))return!0
else if(s.m(0,"*::"+b))return!0
else if(s.m(0,H.d(t)+"::*"))return!0
else if(s.m(0,"*::*"))return!0}return!1},
$iJ:1}
W.cL.prototype={
$1:function(a){return!C.a.m(C.e,H.n(a))},
$S:6}
W.cM.prototype={
$1:function(a){return C.a.m(C.e,H.n(a))},
$S:6}
W.cP.prototype={
w:function(a,b,c){if(this.ar(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.m(0,b)
return!1}}
W.cQ.prototype={
$1:function(a){return"TEMPLATE::"+H.d(H.n(a))},
$S:17}
W.cN.prototype={
C:function(a){var u=J.v(a)
if(!!u.$iaw)return!1
u=!!u.$ib
if(u&&W.ap(a)==="foreignObject")return!1
if(u)return!0
return!1},
w:function(a,b,c){if(b==="is"||C.c.an(b,"on"))return!1
return this.C(a)},
$iJ:1}
W.aM.prototype={
k:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.saf(J.er(u.a,t))
u.c=t
return!0}u.saf(null)
u.c=s
return!1},
gl:function(){return this.d},
saf:function(a){this.d=H.l(a,H.j(this,0))},
$iX:1}
W.cj.prototype={$ia1:1,$idR:1}
W.J.prototype={}
W.cJ.prototype={$ifK:1}
W.b8.prototype={
a3:function(a){new W.cT(this).$2(a,null)},
E:function(a,b){if(b==null)J.dA(a)
else b.removeChild(a)},
aG:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.ew(a)
n=o.a.getAttribute("is")
H.i(a,"$iE")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=H.M(u)?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.K(r)}t="element unprintable"
try{t=J.ak(a)}catch(r){H.K(r)}try{s=W.ap(a)
this.aF(H.i(a,"$iE"),b,p,t,s,H.i(o,"$idK"),H.n(n))}catch(r){if(H.K(r) instanceof P.U)throw r
else{this.E(a,b)
window
q="Removing corrupted element "+H.d(t)
if(typeof console!="undefined")window.console.warn(q)}}},
aF:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o=this
if(c){o.E(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!o.a.C(a)){o.E(a,b)
window
u="Removing disallowed element <"+H.d(e)+"> from "+H.d(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!o.a.w(a,"is",g)){o.E(a,b)
window
u="Removing disallowed type extension <"+H.d(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.gB()
t=H.x(u.slice(0),[H.j(u,0)])
for(s=f.gB().length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.y(t,s)
r=t[s]
q=o.a
p=J.ey(r)
H.n(r)
if(!q.w(a,p,u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.d(e)+" "+r+'="'+H.d(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.v(a).$iaz)o.a3(a.content)},
$ifx:1}
W.cT.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.aG(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.E(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.K(s)
r=H.i(u,"$ik")
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.i(t,"$ik")}},
$S:18}
W.b4.prototype={}
W.b5.prototype={}
W.b9.prototype={}
W.ba.prototype={}
P.cC.prototype={
aX:function(a){if(typeof a!=="number")return a.b6()
if(a<=0||a>4294967296)throw H.f(P.eN("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0},
$ify:1}
P.aw.prototype={$iaw:1}
P.b.prototype={
u:function(a,b,c,d){var u,t,s,r,q,p=H.x([],[W.J])
C.a.i(p,W.dU(null))
C.a.i(p,W.dV())
C.a.i(p,new W.cN())
c=new W.b8(new W.aT(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.h).aP(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.H(s)
q=p.gI(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$ib:1}
E.bL.prototype={
Y:function(a,b,c){var u
C.k.a4(a,"ending now")
u=new P.w($.m,[-1])
u.J(null)
return u},
aj:function(a,b,c,d,e){var u=new P.w($.m,[null])
u.J(null)
return u}}
Y.bN.prototype={
$4$container$debug$manual:function(a,b,c,d){var u,t,s,r,q,p,o
H.d4(a)
H.i(b,"$ia0")
H.dp(c)
H.dp(d)
try{u=J.ex(a)
t=b!=null
if((H.M(c)||H.M(d))&&!H.M(t))throw H.f("Manual and Debug mode must have containers!")
if(H.M(t)){s=new H.aq([null,null])
r=new H.aq([null,null])
q=document.createElement("div")
J.eu(b,q)
this.Y(q,r,s)}p=this.aj(u,a,b,c,d)
return p}catch(o){H.K(o)
P.eb(a)
P.eb("default_scene")
throw o}},
$1:function(a){return this.$4$container$debug$manual(a,null,!1,!1)},
aW:function(a){if(a==="test_scene")return"Test Scene"
if(a==="return_scene")return"Return Scene"
throw H.f("Tried to get the name of nonexistent Scene "+H.d(a))},
aR:function(a,b){var u,t,s=P.h
H.N(a,"$ir",[s],"$ar")
u=H.j(a,0)
t=P.dJ(new H.ar(a,H.e(new Y.bP(this),{func:1,ret:null,args:[u]}),[u,null]),!0,W.D)
C.a.F(t,new Y.bQ(b))
u=H.j(t,0)
return P.eG(P.dJ(new H.ar(t,H.e(new Y.bR(),{func:1,ret:null,args:[u]}),[u,null]),!0,[P.u,W.A]),W.A).a_(new Y.bS(),s)},
aj:function(a,b,c,d,e){var u,t=P.h,s=H.N(this.a1(a),"$iac",[t],"$aac"),r=s.aY(a.gaZ())
H.M(d)
if(d||H.M(e)){u=H.x([],[t])
if(d){t=J.ak(b)
c.toString
c.appendChild(document.createTextNode(t))
C.a.i(u,r)}if(H.M(e))C.a.t(u,s.a)
return this.aR(u,c).a_(new Y.bO(b,c,d,e),null)}return Y.dN(r).$4$container$debug$manual(b,c,d,e)},
a1:function(a){return new E.ac([],H.x([],[P.B]),[null])},
Y:function(a,b,c){var u=new P.w($.m,[-1])
u.J(null)
return u}}
Y.bP.prototype={
$1:function(a){var u
H.n(a)
u=document.createElement("button")
u.textContent=this.a.aW(a)
u.setAttribute("data-scene",a)
return u},
$S:19}
Y.bQ.prototype={
$1:function(a){this.a.appendChild(H.i(a,"$iD"))},
$S:20}
Y.bR.prototype={
$1:function(a){var u
H.i(a,"$iD")
a.toString
u=new W.cl(a,"click",!1,[W.A])
return u.gaQ(u)},
$S:21}
Y.bS.prototype={
$1:function(a){return H.fj(W.eZ(H.i(a,"$iA").target),"$iD").getAttribute("data-scene")},
$S:22}
Y.bO.prototype={
$1:function(a){var u=this
return Y.dN(H.n(a)).$4$container$debug$manual(u.a,u.b,u.c,u.d)},
$S:23}
U.d8.prototype={
h:function(a){return"A world"},
gaZ:function(){return this.a}}
D.aY.prototype={
Y:function(a,b,c){var u
C.k.a4(a,"hello")
u=new P.w($.m,[-1])
u.J(null)
return u},
a1:function(a){var u=P.h,t=H.x([],[u]),s=H.x([],[P.B])
C.a.i(t,"test_scene")
C.a.i(s,5)
C.a.i(t,"return_scene")
C.a.i(s,1)
return new E.ac(t,s,[u])}}
E.ac.prototype={
aY:function(a){var u,t={},s=this.b
t.a=a.aX(C.a.b_(s,new E.c9()))
u=this.a
t=C.a.aT(s,new E.ca(t))
if(t<0||t>=u.length)return H.y(u,t)
return u[t]}}
E.c9.prototype={
$2:function(a,b){H.G(a)
H.G(b)
if(typeof a!=="number")return a.A()
if(typeof b!=="number")return H.dv(b)
return a+b},
$S:24}
E.ca.prototype={
$1:function(a){var u,t,s
H.G(a)
u=this.a
t=u.a
if(typeof a!=="number")return H.dv(a)
s=t-a
u.a=s
return s<0},
$S:25};(function aliases(){var u=J.F.prototype
u.ao=u.h
u=J.aQ.prototype
u.aq=u.h
u=P.p.prototype
u.ap=u.O
u=W.E.prototype
u.P=u.u
u=W.b6.prototype
u.ar=u.w})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff
u(P,"f8","eR",2)
u(P,"f9","eS",2)
u(P,"fa","eT",2)
t(P,"e3","f5",1)
s(W,"fe",4,null,["$4"],["eV"],7,0)
s(W,"ff",4,null,["$4"],["eW"],7,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.o,null)
s(P.o,[H.df,J.F,J.bi,P.p,H.aR,P.X,H.c3,P.a8,H.ao,H.b7,P.ab,H.bA,H.bC,P.cR,P.u,P.ci,P.T,P.w,P.b0,P.bV,P.bW,P.C,P.cU,P.cK,P.aC,P.cE,P.b2,P.P,P.t,P.aI,P.aV,P.cp,P.a2,P.r,P.q,P.z,P.h,P.ay,W.a5,W.W,W.aT,W.b6,W.cN,W.aM,W.cj,W.J,W.cJ,W.b8,P.cC,Y.bN,U.d8,E.ac])
s(J.F,[J.bv,J.bx,J.aQ,J.a3,J.by,J.a9,W.a1,W.bo,W.a,W.aS,W.b4,W.b9])
s(J.aQ,[J.bK,J.aA,J.a4])
t(J.de,J.a3)
s(J.by,[J.aO,J.bw])
s(P.p,[H.bp,H.aZ])
s(H.bp,[H.aa,H.bB])
t(H.ar,H.aa)
t(H.cb,P.X)
s(P.a8,[H.bJ,H.bz,H.c7,H.c5,H.bl,H.bM,P.bj,P.at,P.U,P.c8,P.c6,P.ax,P.bm,P.bn])
s(H.ao,[H.d7,H.c2,H.d0,H.d1,H.d2,P.ce,P.cd,P.cf,P.cg,P.cS,P.bs,P.bt,P.cq,P.cx,P.ct,P.cu,P.cv,P.cr,P.cw,P.cA,P.cB,P.cz,P.cy,P.bZ,P.c_,P.bX,P.bY,P.cW,P.cH,P.cG,P.cI,P.bG,W.bq,W.co,W.bI,W.bH,W.cL,W.cM,W.cQ,W.cT,Y.bP,Y.bQ,Y.bR,Y.bS,Y.bO,E.c9,E.ca])
s(H.c2,[H.bU,H.am])
t(H.cc,P.bj)
t(P.bF,P.ab)
s(P.bF,[H.aq,W.ch])
t(P.cO,P.ci)
t(P.cF,P.cU)
t(P.cD,P.cK)
t(P.bE,P.b2)
s(P.aI,[P.cY,P.B])
s(P.U,[P.aU,P.bu])
s(W.a1,[W.k,W.b_])
s(W.k,[W.E,W.Z,W.aB])
s(W.E,[W.c,P.b])
s(W.c,[W.aK,W.bh,W.al,W.Y,W.D,W.a0,W.br,W.bT,W.aX,W.c0,W.c1,W.az])
t(W.S,W.a)
t(W.A,W.S)
t(W.H,P.bE)
t(W.b5,W.b4)
t(W.as,W.b5)
t(W.ba,W.b9)
t(W.b3,W.ba)
t(W.ck,W.ch)
t(W.cm,P.bV)
t(W.cl,W.cm)
t(W.cn,P.bW)
t(W.cP,W.b6)
t(P.aw,P.b)
s(Y.bN,[E.bL,D.aY])
u(P.b2,P.P)
u(W.b4,P.P)
u(W.b5,W.W)
u(W.b9,P.P)
u(W.ba,W.W)})();(function constants(){var u=hunkHelpers.makeConstList
C.h=W.Y.prototype
C.k=W.a0.prototype
C.v=J.F.prototype
C.a=J.a3.prototype
C.w=J.aO.prototype
C.c=J.a9.prototype
C.x=J.a4.prototype
C.B=W.as.prototype
C.l=J.bK.prototype
C.m=W.aX.prototype
C.f=J.aA.prototype
C.i=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.n=function() {
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
C.t=function(getTagFallback) {
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
C.o=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.p=function(hooks) {
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
C.r=function(hooks) {
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
C.q=function(hooks) {
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
C.j=function(hooks) { return hooks; }

C.u=new P.cC()
C.b=new P.cF()
C.y=H.x(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.h])
C.z=H.x(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.h])
C.A=H.x(u([]),[P.h])
C.d=H.x(u(["bind","if","ref","repeat","syntax"]),[P.h])
C.e=H.x(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.h])})()
var v={mangledGlobalNames:{B:"int",cY:"double",aI:"num",h:"String",t:"bool",q:"Null",r:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.q},{func:1,ret:-1},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.q,args:[,]},{func:1,ret:P.t,args:[W.J]},{func:1,ret:P.t,args:[P.h]},{func:1,ret:P.t,args:[W.E,P.h,P.h,W.a5]},{func:1,args:[,P.h]},{func:1,args:[P.h]},{func:1,ret:P.q,args:[{func:1,ret:-1}]},{func:1,ret:P.q,args:[,P.z]},{func:1,ret:P.q,args:[,],opt:[P.z]},{func:1,ret:[P.w,,],args:[,]},{func:1,ret:P.q,args:[,,]},{func:1,ret:P.t,args:[W.k]},{func:1,args:[W.a]},{func:1,ret:P.h,args:[P.h]},{func:1,ret:-1,args:[W.k,W.k]},{func:1,ret:W.D,args:[P.h]},{func:1,ret:P.q,args:[W.D]},{func:1,ret:[P.u,W.A],args:[W.D]},{func:1,ret:P.h,args:[W.A]},{func:1,ret:[P.u,,],args:[P.h]},{func:1,ret:P.B,args:[P.B,P.B]},{func:1,ret:P.t,args:[P.B]}],interceptorsByTag:null,leafTags:null};(function staticFields(){$.O=0
$.an=null
$.dC=null
$.dk=!1
$.e7=null
$.e0=null
$.ed=null
$.cX=null
$.d3=null
$.dw=null
$.ae=null
$.aD=null
$.aE=null
$.dl=!1
$.m=C.b
$.I=[]
$.V=null
$.db=null
$.dG=null
$.dF=null
$.b1=P.eK(P.h,P.a2)})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"fv","ef",function(){return H.e6("_$dart_dartClosure")})
u($,"fw","dy",function(){return H.e6("_$dart_js")})
u($,"fA","eg",function(){return H.Q(H.c4({
toString:function(){return"$receiver$"}}))})
u($,"fB","eh",function(){return H.Q(H.c4({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"fC","ei",function(){return H.Q(H.c4(null))})
u($,"fD","ej",function(){return H.Q(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"fG","em",function(){return H.Q(H.c4(void 0))})
u($,"fH","en",function(){return H.Q(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"fF","el",function(){return H.Q(H.dP(null))})
u($,"fE","ek",function(){return H.Q(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"fJ","ep",function(){return H.Q(H.dP(void 0))})
u($,"fI","eo",function(){return H.Q(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"fM","dz",function(){return P.eQ()})
u($,"fN","eq",function(){return P.dI(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.h)})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({DOMError:J.F,DOMImplementation:J.F,MediaError:J.F,NavigatorUserMediaError:J.F,OverconstrainedError:J.F,PositionError:J.F,Range:J.F,URLSearchParams:J.F,SQLError:J.F,HTMLAudioElement:W.c,HTMLBRElement:W.c,HTMLCanvasElement:W.c,HTMLContentElement:W.c,HTMLDListElement:W.c,HTMLDataElement:W.c,HTMLDataListElement:W.c,HTMLDetailsElement:W.c,HTMLDialogElement:W.c,HTMLEmbedElement:W.c,HTMLFieldSetElement:W.c,HTMLHRElement:W.c,HTMLHeadElement:W.c,HTMLHeadingElement:W.c,HTMLHtmlElement:W.c,HTMLIFrameElement:W.c,HTMLImageElement:W.c,HTMLInputElement:W.c,HTMLLIElement:W.c,HTMLLabelElement:W.c,HTMLLegendElement:W.c,HTMLLinkElement:W.c,HTMLMapElement:W.c,HTMLMediaElement:W.c,HTMLMenuElement:W.c,HTMLMetaElement:W.c,HTMLMeterElement:W.c,HTMLModElement:W.c,HTMLOListElement:W.c,HTMLObjectElement:W.c,HTMLOptGroupElement:W.c,HTMLOptionElement:W.c,HTMLOutputElement:W.c,HTMLParagraphElement:W.c,HTMLParamElement:W.c,HTMLPictureElement:W.c,HTMLPreElement:W.c,HTMLProgressElement:W.c,HTMLQuoteElement:W.c,HTMLScriptElement:W.c,HTMLShadowElement:W.c,HTMLSlotElement:W.c,HTMLSourceElement:W.c,HTMLSpanElement:W.c,HTMLStyleElement:W.c,HTMLTableCaptionElement:W.c,HTMLTableCellElement:W.c,HTMLTableDataCellElement:W.c,HTMLTableHeaderCellElement:W.c,HTMLTableColElement:W.c,HTMLTextAreaElement:W.c,HTMLTimeElement:W.c,HTMLTitleElement:W.c,HTMLTrackElement:W.c,HTMLUListElement:W.c,HTMLUnknownElement:W.c,HTMLVideoElement:W.c,HTMLDirectoryElement:W.c,HTMLFontElement:W.c,HTMLFrameElement:W.c,HTMLFrameSetElement:W.c,HTMLMarqueeElement:W.c,HTMLElement:W.c,HTMLAnchorElement:W.aK,HTMLAreaElement:W.bh,HTMLBaseElement:W.al,HTMLBodyElement:W.Y,HTMLButtonElement:W.D,CDATASection:W.Z,CharacterData:W.Z,Comment:W.Z,ProcessingInstruction:W.Z,Text:W.Z,HTMLDivElement:W.a0,DOMException:W.bo,Element:W.E,AbortPaymentEvent:W.a,AnimationEvent:W.a,AnimationPlaybackEvent:W.a,ApplicationCacheErrorEvent:W.a,BackgroundFetchClickEvent:W.a,BackgroundFetchEvent:W.a,BackgroundFetchFailEvent:W.a,BackgroundFetchedEvent:W.a,BeforeInstallPromptEvent:W.a,BeforeUnloadEvent:W.a,BlobEvent:W.a,CanMakePaymentEvent:W.a,ClipboardEvent:W.a,CloseEvent:W.a,CustomEvent:W.a,DeviceMotionEvent:W.a,DeviceOrientationEvent:W.a,ErrorEvent:W.a,ExtendableEvent:W.a,ExtendableMessageEvent:W.a,FetchEvent:W.a,FontFaceSetLoadEvent:W.a,ForeignFetchEvent:W.a,GamepadEvent:W.a,HashChangeEvent:W.a,InstallEvent:W.a,MediaEncryptedEvent:W.a,MediaKeyMessageEvent:W.a,MediaQueryListEvent:W.a,MediaStreamEvent:W.a,MediaStreamTrackEvent:W.a,MessageEvent:W.a,MIDIConnectionEvent:W.a,MIDIMessageEvent:W.a,MutationEvent:W.a,NotificationEvent:W.a,PageTransitionEvent:W.a,PaymentRequestEvent:W.a,PaymentRequestUpdateEvent:W.a,PopStateEvent:W.a,PresentationConnectionAvailableEvent:W.a,PresentationConnectionCloseEvent:W.a,ProgressEvent:W.a,PromiseRejectionEvent:W.a,PushEvent:W.a,RTCDataChannelEvent:W.a,RTCDTMFToneChangeEvent:W.a,RTCPeerConnectionIceEvent:W.a,RTCTrackEvent:W.a,SecurityPolicyViolationEvent:W.a,SensorErrorEvent:W.a,SpeechRecognitionError:W.a,SpeechRecognitionEvent:W.a,SpeechSynthesisEvent:W.a,StorageEvent:W.a,SyncEvent:W.a,TrackEvent:W.a,TransitionEvent:W.a,WebKitTransitionEvent:W.a,VRDeviceEvent:W.a,VRDisplayEvent:W.a,VRSessionEvent:W.a,MojoInterfaceRequestEvent:W.a,ResourceProgressEvent:W.a,USBConnectionEvent:W.a,IDBVersionChangeEvent:W.a,AudioProcessingEvent:W.a,OfflineAudioCompletionEvent:W.a,WebGLContextEvent:W.a,Event:W.a,InputEvent:W.a,EventTarget:W.a1,HTMLFormElement:W.br,Location:W.aS,MouseEvent:W.A,DragEvent:W.A,PointerEvent:W.A,WheelEvent:W.A,Document:W.k,DocumentFragment:W.k,HTMLDocument:W.k,ShadowRoot:W.k,XMLDocument:W.k,DocumentType:W.k,Node:W.k,NodeList:W.as,RadioNodeList:W.as,HTMLSelectElement:W.bT,HTMLTableElement:W.aX,HTMLTableRowElement:W.c0,HTMLTableSectionElement:W.c1,HTMLTemplateElement:W.az,CompositionEvent:W.S,FocusEvent:W.S,KeyboardEvent:W.S,TextEvent:W.S,TouchEvent:W.S,UIEvent:W.S,Window:W.b_,DOMWindow:W.b_,Attr:W.aB,NamedNodeMap:W.b3,MozNamedAttrMap:W.b3,SVGScriptElement:P.aw,SVGAElement:P.b,SVGAnimateElement:P.b,SVGAnimateMotionElement:P.b,SVGAnimateTransformElement:P.b,SVGAnimationElement:P.b,SVGCircleElement:P.b,SVGClipPathElement:P.b,SVGDefsElement:P.b,SVGDescElement:P.b,SVGDiscardElement:P.b,SVGEllipseElement:P.b,SVGFEBlendElement:P.b,SVGFEColorMatrixElement:P.b,SVGFEComponentTransferElement:P.b,SVGFECompositeElement:P.b,SVGFEConvolveMatrixElement:P.b,SVGFEDiffuseLightingElement:P.b,SVGFEDisplacementMapElement:P.b,SVGFEDistantLightElement:P.b,SVGFEFloodElement:P.b,SVGFEFuncAElement:P.b,SVGFEFuncBElement:P.b,SVGFEFuncGElement:P.b,SVGFEFuncRElement:P.b,SVGFEGaussianBlurElement:P.b,SVGFEImageElement:P.b,SVGFEMergeElement:P.b,SVGFEMergeNodeElement:P.b,SVGFEMorphologyElement:P.b,SVGFEOffsetElement:P.b,SVGFEPointLightElement:P.b,SVGFESpecularLightingElement:P.b,SVGFESpotLightElement:P.b,SVGFETileElement:P.b,SVGFETurbulenceElement:P.b,SVGFilterElement:P.b,SVGForeignObjectElement:P.b,SVGGElement:P.b,SVGGeometryElement:P.b,SVGGraphicsElement:P.b,SVGImageElement:P.b,SVGLineElement:P.b,SVGLinearGradientElement:P.b,SVGMarkerElement:P.b,SVGMaskElement:P.b,SVGMetadataElement:P.b,SVGPathElement:P.b,SVGPatternElement:P.b,SVGPolygonElement:P.b,SVGPolylineElement:P.b,SVGRadialGradientElement:P.b,SVGRectElement:P.b,SVGSetElement:P.b,SVGStopElement:P.b,SVGStyleElement:P.b,SVGSVGElement:P.b,SVGSwitchElement:P.b,SVGSymbolElement:P.b,SVGTSpanElement:P.b,SVGTextContentElement:P.b,SVGTextElement:P.b,SVGTextPathElement:P.b,SVGTextPositioningElement:P.b,SVGTitleElement:P.b,SVGUseElement:P.b,SVGViewElement:P.b,SVGGradientElement:P.b,SVGComponentTransferFunctionElement:P.b,SVGFEDropShadowElement:P.b,SVGMPathElement:P.b,SVGElement:P.b})
hunkHelpers.setOrUpdateLeafTags({DOMError:true,DOMImplementation:true,MediaError:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,Range:true,URLSearchParams:true,SQLError:true,HTMLAudioElement:true,HTMLBRElement:true,HTMLCanvasElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,HTMLDivElement:true,DOMException:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,EventTarget:false,HTMLFormElement:true,Location:true,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,HTMLSelectElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,CompositionEvent:true,FocusEvent:true,KeyboardEvent:true,TextEvent:true,TouchEvent:true,UIEvent:false,Window:true,DOMWindow:true,Attr:true,NamedNodeMap:true,MozNamedAttrMap:true,SVGScriptElement:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false})})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(U.e9,[])
else U.e9([])})})()
//# sourceMappingURL=SceneEngine.dart.js.map
