(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"0jNN":function(e,t,n){"use strict";n("V+eJ"),n("rE2o"),n("ioFf"),n("pIFo"),n("rGqo"),n("yt8O"),n("RW0V"),n("DNiP"),n("8+KV"),n("hHhE"),n("a1Th"),n("h7Nl"),n("Btvt"),n("LK8F");var r=Object.prototype.hasOwnProperty,o=Array.isArray,a=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),i=function(e,t){for(var n=t&&t.plainObjects?Object.create(null):{},r=0;r<e.length;++r)void 0!==e[r]&&(n[r]=e[r]);return n};e.exports={arrayToObject:i,assign:function(e,t){return Object.keys(t).reduce((function(e,n){return e[n]=t[n],e}),e)},combine:function(e,t){return[].concat(e,t)},compact:function(e){for(var t=[{obj:{o:e},prop:"o"}],n=[],r=0;r<t.length;++r)for(var a=t[r],i=a.obj[a.prop],c=Object.keys(i),l=0;l<c.length;++l){var u=c[l],s=i[u];"object"==typeof s&&null!==s&&-1===n.indexOf(s)&&(t.push({obj:i,prop:u}),n.push(s))}return function(e){for(;e.length>1;){var t=e.pop(),n=t.obj[t.prop];if(o(n)){for(var r=[],a=0;a<n.length;++a)void 0!==n[a]&&r.push(n[a]);t.obj[t.prop]=r}}}(t),e},decode:function(e,t,n){var r=e.replace(/\+/g," ");if("iso-8859-1"===n)return r.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(r)}catch(o){return r}},encode:function(e,t,n){if(0===e.length)return e;var r=e;if("symbol"==typeof e?r=Symbol.prototype.toString.call(e):"string"!=typeof e&&(r=String(e)),"iso-8859-1"===n)return escape(r).replace(/%u[0-9a-f]{4}/gi,(function(e){return"%26%23"+parseInt(e.slice(2),16)+"%3B"}));for(var o="",i=0;i<r.length;++i){var c=r.charCodeAt(i);45===c||46===c||95===c||126===c||c>=48&&c<=57||c>=65&&c<=90||c>=97&&c<=122?o+=r.charAt(i):c<128?o+=a[c]:c<2048?o+=a[192|c>>6]+a[128|63&c]:c<55296||c>=57344?o+=a[224|c>>12]+a[128|c>>6&63]+a[128|63&c]:(i+=1,c=65536+((1023&c)<<10|1023&r.charCodeAt(i)),o+=a[240|c>>18]+a[128|c>>12&63]+a[128|c>>6&63]+a[128|63&c])}return o},isBuffer:function(e){return!(!e||"object"!=typeof e)&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},isRegExp:function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},merge:function e(t,n,a){if(!n)return t;if("object"!=typeof n){if(o(t))t.push(n);else{if(!t||"object"!=typeof t)return[t,n];(a&&(a.plainObjects||a.allowPrototypes)||!r.call(Object.prototype,n))&&(t[n]=!0)}return t}if(!t||"object"!=typeof t)return[t].concat(n);var c=t;return o(t)&&!o(n)&&(c=i(t,a)),o(t)&&o(n)?(n.forEach((function(n,o){if(r.call(t,o)){var i=t[o];i&&"object"==typeof i&&n&&"object"==typeof n?t[o]=e(i,n,a):t.push(n)}else t[o]=n})),t):Object.keys(n).reduce((function(t,o){var i=n[o];return r.call(t,o)?t[o]=e(t[o],i,a):t[o]=i,t}),c)}}},"60ph":function(e,t,n){"use strict";n("Z2Ku"),n("L9s1");var r=n("q1tI"),o=n.n(r),a=n("vOnD"),i=n("6t0R"),c=n("cRSu"),l=n("6p55"),u=n("hQ1k"),s=n("1EL1");function f(){var e=p(["\n    > *:nth-last-child(1) {\n      display: none;\n    }\n  "]);return f=function(){return e},e}function m(){var e=p(["\n  font-size: ",";\n\n  ","\n"]);return m=function(){return e},e}function d(){var e=p(["\n  margin: 1.5em 0;\n"]);return d=function(){return e},e}function p(e,t){return t||(t=e.slice(0)),e.raw=t,e}var y=a.c.div(d()),h=Object(a.c)(i.a)(m(),l.d.SIZE.S,u.a.l(f()));t.a=function(e){var t=e.books,n=e.featuredSlugs,r=e.ownedSlug;return o.a.createElement(y,null,o.a.createElement(h,{full:!0},t.map((function(e){var t=r?r===e.slug:n?n.includes(e.slug):e.rating7>=6;return o.a.createElement(c.a,{key:e.id,span:1,spanFromM:3,spanFromL:2},o.a.createElement(s.a,{book:e,featured:t,hideDetails:r===e.slug}))}))))}},Fqn4:function(e,t,n){"use strict";n("rGqo"),n("yt8O"),n("Btvt"),n("/8Fb");var r,o=n("q1tI"),a=n.n(o),i=n("vOnD"),c=(n("hhXQ"),n("a1Th"),n("xfY5"),n("SRfc"),{GOODREADS:"gr",AMAZON:"amzn",BOOK_DEPOSITORY:"bd"}),l=n("6p55"),u=n("hQ1k"),s=n("zjVz");function f(){var e=p(["\n  margin: 0 0.75em 0 0;\n"]);return f=function(){return e},e}function m(){var e=p(["\n    margin-left: -1.5em;\n  "]);return m=function(){return e},e}function d(){var e=p(["\n  font-size: ",";\n\n  ","\n"]);return d=function(){return e},e}function p(e,t){return t||(t=e.slice(0)),e.raw=t,e}var y=((r={})[c.GOODREADS]="See on Goodreads",r[c.AMAZON]="Buy on Amazon",r[c.BOOK_DEPOSITORY]="Buy on Book Depository",r),h=i.c.li(d(),l.d.SIZE.S,u.c.l(m())),v=Object(i.c)(s.a)(f());t.a=function(e){var t=e.links;return a.a.createElement("ol",null,Object.entries(y).map((function(e){var n=e[0],r=e[1];return a.a.createElement(h,{key:n},a.a.createElement("a",{href:t.long[n]},a.a.createElement(v,null),r))})))}},QSc6:function(e,t,n){"use strict";n("0l/t"),n("Vd3H"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("jqX0"),n("LK8F");var r=n("0jNN"),o=n("sxOR"),a=Object.prototype.hasOwnProperty,i={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},c=Array.isArray,l=Array.prototype.push,u=function(e,t){l.apply(e,c(t)?t:[t])},s=Date.prototype.toISOString,f=o.default,m={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:r.encode,encodeValuesOnly:!1,format:f,formatter:o.formatters[f],indices:!1,serializeDate:function(e){return s.call(e)},skipNulls:!1,strictNullHandling:!1},d=function e(t,n,o,a,i,l,s,f,d,p,y,h,v){var b,g=t;if("function"==typeof s?g=s(n,g):g instanceof Date?g=p(g):"comma"===o&&c(g)&&(g=g.join(",")),null===g){if(a)return l&&!h?l(n,m.encoder,v,"key"):n;g=""}if("string"==typeof(b=g)||"number"==typeof b||"boolean"==typeof b||"symbol"==typeof b||"bigint"==typeof b||r.isBuffer(g))return l?[y(h?n:l(n,m.encoder,v,"key"))+"="+y(l(g,m.encoder,v,"value"))]:[y(n)+"="+y(String(g))];var O,E=[];if(void 0===g)return E;if(c(s))O=s;else{var j=Object.keys(g);O=f?j.sort(f):j}for(var w=0;w<O.length;++w){var S=O[w];i&&null===g[S]||(c(g)?u(E,e(g[S],"function"==typeof o?o(n,S):n,o,a,i,l,s,f,d,p,y,h,v)):u(E,e(g[S],n+(d?"."+S:"["+S+"]"),o,a,i,l,s,f,d,p,y,h,v)))}return E};e.exports=function(e,t){var n,r=e,l=function(e){if(!e)return m;if(null!==e.encoder&&void 0!==e.encoder&&"function"!=typeof e.encoder)throw new TypeError("Encoder has to be a function.");var t=e.charset||m.charset;if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var n=o.default;if(void 0!==e.format){if(!a.call(o.formatters,e.format))throw new TypeError("Unknown format option provided.");n=e.format}var r=o.formatters[n],i=m.filter;return("function"==typeof e.filter||c(e.filter))&&(i=e.filter),{addQueryPrefix:"boolean"==typeof e.addQueryPrefix?e.addQueryPrefix:m.addQueryPrefix,allowDots:void 0===e.allowDots?m.allowDots:!!e.allowDots,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:m.charsetSentinel,delimiter:void 0===e.delimiter?m.delimiter:e.delimiter,encode:"boolean"==typeof e.encode?e.encode:m.encode,encoder:"function"==typeof e.encoder?e.encoder:m.encoder,encodeValuesOnly:"boolean"==typeof e.encodeValuesOnly?e.encodeValuesOnly:m.encodeValuesOnly,filter:i,formatter:r,serializeDate:"function"==typeof e.serializeDate?e.serializeDate:m.serializeDate,skipNulls:"boolean"==typeof e.skipNulls?e.skipNulls:m.skipNulls,sort:"function"==typeof e.sort?e.sort:null,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:m.strictNullHandling}}(t);"function"==typeof l.filter?r=(0,l.filter)("",r):c(l.filter)&&(n=l.filter);var s,f=[];if("object"!=typeof r||null===r)return"";s=t&&t.arrayFormat in i?t.arrayFormat:t&&"indices"in t?t.indices?"indices":"repeat":"indices";var p=i[s];n||(n=Object.keys(r)),l.sort&&n.sort(l.sort);for(var y=0;y<n.length;++y){var h=n[y];l.skipNulls&&null===r[h]||u(f,d(r[h],h,p,l.strictNullHandling,l.skipNulls,l.encode?l.encoder:null,l.filter,l.sort,l.allowDots,l.serializeDate,l.formatter,l.encodeValuesOnly,l.charset))}var v=f.join(l.delimiter),b=!0===l.addQueryPrefix?"?":"";return l.charsetSentinel&&("iso-8859-1"===l.charset?b+="utf8=%26%2310003%3B&":b+="utf8=%E2%9C%93&"),v.length>0?b+v:""}},Qyje:function(e,t,n){"use strict";var r=n("QSc6"),o=n("nmq7"),a=n("sxOR");e.exports={formats:a,parse:o,stringify:r}},hhXQ:function(e,t,n){var r=n("XKFU"),o=n("UExd")(!1);r(r.S,"Object",{values:function(e){return o(e)}})},nmq7:function(e,t,n){"use strict";n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("hHhE"),n("V+eJ"),n("KKXr"),n("pIFo"),n("LK8F");var r=n("0jNN"),o=Object.prototype.hasOwnProperty,a=Array.isArray,i={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:r.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},c=function(e){return e.replace(/&#(\d+);/g,(function(e,t){return String.fromCharCode(parseInt(t,10))}))},l=function(e,t,n){if(e){var r=n.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,a=/(\[[^[\]]*])/g,i=n.depth>0&&/(\[[^[\]]*])/.exec(r),c=i?r.slice(0,i.index):r,l=[];if(c){if(!n.plainObjects&&o.call(Object.prototype,c)&&!n.allowPrototypes)return;l.push(c)}for(var u=0;n.depth>0&&null!==(i=a.exec(r))&&u<n.depth;){if(u+=1,!n.plainObjects&&o.call(Object.prototype,i[1].slice(1,-1))&&!n.allowPrototypes)return;l.push(i[1])}return i&&l.push("["+r.slice(i.index)+"]"),function(e,t,n){for(var r=t,o=e.length-1;o>=0;--o){var a,i=e[o];if("[]"===i&&n.parseArrays)a=[].concat(r);else{a=n.plainObjects?Object.create(null):{};var c="["===i.charAt(0)&&"]"===i.charAt(i.length-1)?i.slice(1,-1):i,l=parseInt(c,10);n.parseArrays||""!==c?!isNaN(l)&&i!==c&&String(l)===c&&l>=0&&n.parseArrays&&l<=n.arrayLimit?(a=[])[l]=r:a[c]=r:a={0:r}}r=a}return r}(l,t,n)}};e.exports=function(e,t){var n=function(e){if(!e)return i;if(null!==e.decoder&&void 0!==e.decoder&&"function"!=typeof e.decoder)throw new TypeError("Decoder has to be a function.");if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new Error("The charset option must be either utf-8, iso-8859-1, or undefined");var t=void 0===e.charset?i.charset:e.charset;return{allowDots:void 0===e.allowDots?i.allowDots:!!e.allowDots,allowPrototypes:"boolean"==typeof e.allowPrototypes?e.allowPrototypes:i.allowPrototypes,arrayLimit:"number"==typeof e.arrayLimit?e.arrayLimit:i.arrayLimit,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:i.charsetSentinel,comma:"boolean"==typeof e.comma?e.comma:i.comma,decoder:"function"==typeof e.decoder?e.decoder:i.decoder,delimiter:"string"==typeof e.delimiter||r.isRegExp(e.delimiter)?e.delimiter:i.delimiter,depth:"number"==typeof e.depth||!1===e.depth?+e.depth:i.depth,ignoreQueryPrefix:!0===e.ignoreQueryPrefix,interpretNumericEntities:"boolean"==typeof e.interpretNumericEntities?e.interpretNumericEntities:i.interpretNumericEntities,parameterLimit:"number"==typeof e.parameterLimit?e.parameterLimit:i.parameterLimit,parseArrays:!1!==e.parseArrays,plainObjects:"boolean"==typeof e.plainObjects?e.plainObjects:i.plainObjects,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:i.strictNullHandling}}(t);if(""===e||null==e)return n.plainObjects?Object.create(null):{};for(var u="string"==typeof e?function(e,t){var n,l={},u=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,s=t.parameterLimit===1/0?void 0:t.parameterLimit,f=u.split(t.delimiter,s),m=-1,d=t.charset;if(t.charsetSentinel)for(n=0;n<f.length;++n)0===f[n].indexOf("utf8=")&&("utf8=%E2%9C%93"===f[n]?d="utf-8":"utf8=%26%2310003%3B"===f[n]&&(d="iso-8859-1"),m=n,n=f.length);for(n=0;n<f.length;++n)if(n!==m){var p,y,h=f[n],v=h.indexOf("]="),b=-1===v?h.indexOf("="):v+1;-1===b?(p=t.decoder(h,i.decoder,d,"key"),y=t.strictNullHandling?null:""):(p=t.decoder(h.slice(0,b),i.decoder,d,"key"),y=t.decoder(h.slice(b+1),i.decoder,d,"value")),y&&t.interpretNumericEntities&&"iso-8859-1"===d&&(y=c(y)),y&&"string"==typeof y&&t.comma&&y.indexOf(",")>-1&&(y=y.split(",")),h.indexOf("[]=")>-1&&(y=a(y)?[y]:y),o.call(l,p)?l[p]=r.combine(l[p],y):l[p]=y}return l}(e,n):e,s=n.plainObjects?Object.create(null):{},f=Object.keys(u),m=0;m<f.length;++m){var d=f[m],p=l(d,u[d],n);s=r.merge(s,p,n)}return r.compact(s)}},sxOR:function(e,t,n){"use strict";n("pIFo");var r=String.prototype.replace,o=/%20/g,a=n("0jNN"),i={RFC1738:"RFC1738",RFC3986:"RFC3986"};e.exports=a.assign({default:i.RFC3986,formatters:{RFC1738:function(e){return r.call(e,o,"+")},RFC3986:function(e){return String(e)}}},i)},vrtD:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),a=n("vOnD"),i=n("rcno"),c=n("NsgW"),l=n("0M2Q"),u=n("6t0R"),s=n("cRSu"),f=n("60ph"),m=n("hQ1k"),d=n("6p55"),p=n("VdcY"),y=n("/6c9"),h=n.n(y),v=n("lmt0"),b=(n("OG14"),n("Qyje")),g=n.n(b),O=function(){return window.location.search?g.a.parse(window.location.search,{ignoreQueryPrefix:!0}):{}},E=n("YBnV"),j={youtube:{playerVars:{rel:0,controls:1}}},w=function(e){var t=e.youtubeId,n=e.isPlaying,a=e.setIsPlaying,i=e.setPlayedSeconds,c=e.videoComponent,l=e.backgroundColor,u=Object(r.useState)(0),s=u[0],f=u[1];return Object(r.useEffect)((function(){var e=O();if(e.at){var t=Object(v.e)(e.at);f(t),i(t)}}),[]),o.a.createElement(E.a,{style:{backgroundColor:l}},o.a.createElement(h.a,{url:"https://www.youtube.com/watch?v="+t+(s>0&&"&t="+s),ref:c,onPlay:function(){return a(!0)},onPause:function(){return a(!1)},onProgress:function(e){var t=e.playedSeconds;return i(t)},progressInterval:500,playing:n,config:j,controls:!0,width:"100%",height:"100%"}))},S=n("Wbzz"),k=n("7tht"),x=n("zjVz"),D=n("Fqn4");function N(){var e=A(["\n  font-size: ",";\n\n  + * {\n    margin: 0 0 0.5em;\n  }\n"]);return N=function(){return e},e}function P(){var e=A(["\n  overflow: hidden;\n  transition: max-height 0.3s ease-out;\n  max-height: 1em;\n\n  ","\n"]);return P=function(){return e},e}function F(){var e=A(["\n  font-weight: ",";\n"]);return F=function(){return e},e}function L(){var e=A(["\n  flex: 1;\n\n  > * {\n    margin: 0;\n  }\n"]);return L=function(){return e},e}function I(){var e=A(["\n  min-width: 3ch;\n  margin-right: 1ch;\n"]);return I=function(){return e},e}function R(){var e=A(["\n  padding: 0.25em 0.75em;\n  display: flex;\n  cursor: pointer;\n  font-size: ",";\n\n  ","\n"]);return R=function(){return e},e}function A(e,t){return t||(t=e.slice(0)),e.raw=t,e}var C=a.c.li(R(),d.d.SIZE.S,(function(e){return e.active&&"background: "+d.c.BACKGROUND_DARK+";"})),B=a.c.time(I()),z=a.c.div(L()),Q=a.c.p(F(),d.d.WEIGHT.BOLD),T=a.c.div(P(),(function(e){return e.active&&"max-height: 6em;"})),V=Object(a.c)(S.a)(N(),d.d.SIZE.S),H=function(e){var t=e.t,n=e.text,r=e.book,a=e.active,i=e.jumpToTimestamp;return o.a.createElement(C,{key:t,onClick:function(e){"a"!==e.target.tagName&&i(t,!0)},active:a},o.a.createElement(B,null,Object(v.b)(t)),o.a.createElement(z,null,o.a.createElement(Q,null,n),r&&o.a.createElement(T,{active:a},o.a.createElement(k.a,{of7:r.rating7}),o.a.createElement(V,{to:r.slug},"Book page",o.a.createElement(x.a,{thin:!0})),o.a.createElement(D.a,{links:r.links}))))};function q(){var e=X(["\n    max-height: calc(1em + ",");\n  "]);return q=function(){return e},e}function K(){var e=X(["\n    max-height: calc(1em + ",");\n  "]);return K=function(){return e},e}function G(){var e=X(["\n  margin: 0 0 0 -0.5em;\n  width: calc(0.5em + 100%);\n  overflow: auto;\n  max-height: 300px;\n\n  ","\n\n  ","\n\n    ::-webkit-scrollbar {\n    width: 0.5em;\n    border-left: 1px solid ",";\n    border-radius: 0 "," "," 0;\n  }\n\n  ::-webkit-scrollbar-thumb {\n    background: rgba(0, 0, 0, 0.2);\n  }\n"]);return G=function(){return e},e}function X(e,t){return t||(t=e.slice(0)),e.raw=t,e}var Z=a.c.ol(G(),m.a.l(K(),Object(p.h)(9*p.f.l(7)/16)),m.a.xl(q(),Object(p.h)(9*p.f.xl(8)/16)),d.c.BACKGROUND_DARK,d.a.S,d.a.S),M=function(e){var t,n=e.timestampData,r=e.playedSeconds,a=e.setPlayedSeconds,c=e.setIsPlaying,l=e.videoComponent,u=(n||[]).map((function(e){var t=e.t,n=e.text,r=e.book;return{t:t,text:n,book:r&&Object(i.b)(r)}})),s=function(e,t){l.current&&(l.current.seekTo(e),a(e),t&&c(!0))};return u.forEach((function(e,n){var o=e.t;r>=o&&(t=n)})),o.a.createElement(Z,null,u.map((function(e,n){var r=e.t,a=e.text,i=e.book;return o.a.createElement(H,{key:r,t:r,text:a,book:i,jumpToTimestamp:s,active:t===n})})))},W=n("BCon");function U(){var e=J(["\n  font-size: ",";\n  margin: 0 0 1em;\n"]);return U=function(){return e},e}function Y(){var e=J(["\n  font-size: ",";\n  font-weight: ",";\n"]);return Y=function(){return e},e}function J(e,t){return t||(t=e.slice(0)),e.raw=t,e}var _=a.c.dt(Y(),d.d.SIZE.S,d.d.WEIGHT.BOLD),$=a.c.dd(U(),d.d.SIZE.S),ee=function(e){var t=e.datePublished,n=e.viewCount;return o.a.createElement("dl",null,o.a.createElement(_,null,"Date posted"),o.a.createElement($,null,o.a.createElement("time",null,Object(v.a)(t))),o.a.createElement(_,null,"Views"),o.a.createElement($,null,Object(W.a)(n)))};function te(){var e=oe(["\n  font-size: ",";\n"]);return te=function(){return e},e}function ne(){var e=oe(["\n  font-size: ",";\n  font-weight: ",";\n"]);return ne=function(){return e},e}function re(){var e=oe(["\n  margin: 1em 0 0;\n"]);return re=function(){return e},e}function oe(e,t){return t||(t=e.slice(0)),e.raw=t,e}var ae=a.c.aside(re()),ie=Object(a.c)(S.a)(ne(),d.d.SIZE.S,d.d.WEIGHT.BOLD),ce=Object(a.c)(k.a)(te(),d.d.SIZE.S),le=function(e){var t=e.rating7,n=e.slug,r=e.links;return o.a.createElement(ae,null,o.a.createElement(ce,{of7:t}),o.a.createElement(ie,{to:n},"Book page",o.a.createElement(x.a,null)),o.a.createElement(D.a,{links:r}))};function ue(){var e=he(["\n  position: relative;\n  margin: 1.5em 0 1.5em 1.5em;\n\n  &:before {\n    content: '“';\n    position: absolute;\n    left: -0.5em;\n    top: 0.25em;\n    line-height: 0;\n    font-size: 4em;\n    font-family: ",";\n  }\n"]);return ue=function(){return e},e}function se(){var e=he(["\n  margin: 0.5em 0 -0.2em;\n"]);return se=function(){return e},e}function fe(){var e=he(["\n    align-self: end;\n  "]);return fe=function(){return e},e}function me(){var e=he(["\n  ","\n"]);return me=function(){return e},e}function de(){var e=he(["\n    grid-gap: ",";\n  "]);return de=function(){return e},e}function pe(){var e=he(["\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-gap: ",";\n  "]);return pe=function(){return e},e}function ye(){var e=he(["\n  ","\n\n  ","\n"]);return ye=function(){return e},e}function he(e,t){return t||(t=e.slice(0)),e.raw=t,e}n.d(t,"query",(function(){return Ee}));var ve=a.c.aside(ye(),m.c.l(pe(),Object(p.h)(p.c.L)),m.a.xl(de(),Object(p.h)(p.c.XL))),be=a.c.div(me(),m.c.l(fe())),ge=Object(a.c)(l.a)(se()),Oe=a.c.blockquote(ue(),d.d.FAMILY.DECORATIVE),Ee="3540146121";t.default=function(e){var t=e.data.videoData,n=e.location,a=Object(i.b)(t),l=Object(r.useState)(!1),m=l[0],d=l[1],p=Object(r.useState)(0),y=p[0],h=p[1],v=Object(r.useRef)(),b=a.ownedBy&&Object(i.b)(a.ownedBy),g=a.relatedBooks.map(i.b),O=(a.timestamps||[]).filter((function(e){return e.book})).map((function(e){return e.book.fields.slug})),E=b||!t.timestamps;return o.a.createElement(c.a,{location:n},o.a.createElement(u.a,{full:!0},o.a.createElement(s.a,{columnsFromL:"1/8",columnsFromXL:"1/9"},o.a.createElement(w,{videoComponent:v,youtubeId:a.youtubeId,isPlaying:m,setIsPlaying:d,setPlayedSeconds:h,backgroundColor:a.image.colors.muted})),o.a.createElement(s.a,{as:be,columnsFromM:"5 / 13",columnsFromL:"8 / 14",columnsFromXL:"9 / 15",rows:E?"2/3":"3/4",rowsFromL:E?"1/2":"2/3"},a.quote&&o.a.createElement(Oe,null,a.quote),o.a.createElement(ge,{as:"h1",size:"L"},a.title)),o.a.createElement(s.a,{columnsFromM:"5 / 13",columnsFromL:"8/14",columnsFromXL:"9/15"},a.description),o.a.createElement(s.a,{as:ve,spanRows:3,spanRowsFromL:2,spanFromM:4,columnsFromL:"2/8",columnsFromXL:"3/9"},o.a.createElement(ee,{datePublished:a.datePublished,viewCount:a.viewCount}),b&&o.a.createElement(le,{rating7:b.rating7,slug:b.slug,links:b.links})),t.timestamps&&o.a.createElement(s.a,{columnsFromM:"5 / 13",columnsFromL:"8/15",columnsFromXL:"9/17",rows:E?"3/4":"2/3",rowsFromL:E?"2/3":"1/2",style:{marginTop:E?"0.625em":"-0.5em",marginBottom:"-0.5em",alignSelf:E?"start":"end"}},o.a.createElement(M,{timestampData:t.timestamps,playedSeconds:y,setPlayedSeconds:h,setIsPlaying:d,videoComponent:v}))),o.a.createElement(f.a,{books:g,featuredSlugs:O,ownedSlug:b&&b.slug}))}}}]);
//# sourceMappingURL=component---src-views-video-page-index-tsx-81b73ac885f89f3c27d8.js.map