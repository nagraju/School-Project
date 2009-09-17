
/*
 * jQuery JavaScript Library v1.3.2
 * http://jquery.com/
 *
 * Copyright (c) 2009 John Resig
 * Dual licensed under the MIT and GPL licenses.
 * http://docs.jquery.com/License
 *
 * Date: 2009-02-19 17:34:21 -0500 (Thu, 19 Feb 2009)
 * Revision: 6246
 */
(function(){var l=this,g,y=l.jQuery,p=l.$,o=l.jQuery=l.$=function(E,F){return new o.fn.init(E,F)},D=/^[^<]*(<(.|\s)+>)[^>]*$|^#([\w-]+)$/,f=/^.[^:#\[\.,]*$/;o.fn=o.prototype={init:function(E,H){E=E||document;if(E.nodeType){this[0]=E;this.length=1;this.context=E;return this}if(typeof E==="string"){var G=D.exec(E);if(G&&(G[1]||!H)){if(G[1]){E=o.clean([G[1]],H)}else{var I=document.getElementById(G[3]);if(I&&I.id!=G[3]){return o().find(E)}var F=o(I||[]);F.context=document;F.selector=E;return F}}else{return o(H).find(E)}}else{if(o.isFunction(E)){return o(document).ready(E)}}if(E.selector&&E.context){this.selector=E.selector;this.context=E.context}return this.setArray(o.isArray(E)?E:o.makeArray(E))},selector:"",jquery:"1.3.2",size:function(){return this.length},get:function(E){return E===g?Array.prototype.slice.call(this):this[E]},pushStack:function(F,H,E){var G=o(F);G.prevObject=this;G.context=this.context;if(H==="find"){G.selector=this.selector+(this.selector?" ":"")+E}else{if(H){G.selector=this.selector+"."+H+"("+E+")"}}return G},setArray:function(E){this.length=0;Array.prototype.push.apply(this,E);return this},each:function(F,E){return o.each(this,F,E)},index:function(E){return o.inArray(E&&E.jquery?E[0]:E,this)},attr:function(F,H,G){var E=F;if(typeof F==="string"){if(H===g){return this[0]&&o[G||"attr"](this[0],F)}else{E={};E[F]=H}}return this.each(function(I){for(F in E){o.attr(G?this.style:this,F,o.prop(this,E[F],G,I,F))}})},css:function(E,F){if((E=="width"||E=="height")&&parseFloat(F)<0){F=g}return this.attr(E,F,"curCSS")},text:function(F){if(typeof F!=="object"&&F!=null){return this.empty().append((this[0]&&this[0].ownerDocument||document).createTextNode(F))}var E="";o.each(F||this,function(){o.each(this.childNodes,function(){if(this.nodeType!=8){E+=this.nodeType!=1?this.nodeValue:o.fn.text([this])}})});return E},wrapAll:function(E){if(this[0]){var F=o(E,this[0].ownerDocument).clone();if(this[0].parentNode){F.insertBefore(this[0])}F.map(function(){var G=this;while(G.firstChild){G=G.firstChild}return G}).append(this)}return this},wrapInner:function(E){return this.each(function(){o(this).contents().wrapAll(E)})},wrap:function(E){return this.each(function(){o(this).wrapAll(E)})},append:function(){return this.domManip(arguments,true,function(E){if(this.nodeType==1){this.appendChild(E)}})},prepend:function(){return this.domManip(arguments,true,function(E){if(this.nodeType==1){this.insertBefore(E,this.firstChild)}})},before:function(){return this.domManip(arguments,false,function(E){this.parentNode.insertBefore(E,this)})},after:function(){return this.domManip(arguments,false,function(E){this.parentNode.insertBefore(E,this.nextSibling)})},end:function(){return this.prevObject||o([])},push:[].push,sort:[].sort,splice:[].splice,find:function(E){if(this.length===1){var F=this.pushStack([],"find",E);F.length=0;o.find(E,this[0],F);return F}else{return this.pushStack(o.unique(o.map(this,function(G){return o.find(E,G)})),"find",E)}},clone:function(G){var E=this.map(function(){if(!o.support.noCloneEvent&&!o.isXMLDoc(this)){var I=this.outerHTML;if(!I){var J=this.ownerDocument.createElement("div");J.appendChild(this.cloneNode(true));I=J.innerHTML}return o.clean([I.replace(/ jQuery\d+="(?:\d+|null)"/g,"").replace(/^\s*/,"")])[0]}else{return this.cloneNode(true)}});if(G===true){var H=this.find("*").andSelf(),F=0;E.find("*").andSelf().each(function(){if(this.nodeName!==H[F].nodeName){return}var I=o.data(H[F],"events");for(var K in I){for(var J in I[K]){o.event.add(this,K,I[K][J],I[K][J].data)}}F++})}return E},filter:function(E){return this.pushStack(o.isFunction(E)&&o.grep(this,function(G,F){return E.call(G,F)})||o.multiFilter(E,o.grep(this,function(F){return F.nodeType===1})),"filter",E)},closest:function(E){var G=o.expr.match.POS.test(E)?o(E):null,F=0;return this.map(function(){var H=this;while(H&&H.ownerDocument){if(G?G.index(H)>-1:o(H).is(E)){o.data(H,"closest",F);return H}H=H.parentNode;F++}})},not:function(E){if(typeof E==="string"){if(f.test(E)){return this.pushStack(o.multiFilter(E,this,true),"not",E)}else{E=o.multiFilter(E,this)}}var F=E.length&&E[E.length-1]!==g&&!E.nodeType;return this.filter(function(){return F?o.inArray(this,E)<0:this!=E})},add:function(E){return this.pushStack(o.unique(o.merge(this.get(),typeof E==="string"?o(E):o.makeArray(E))))},is:function(E){return !!E&&o.multiFilter(E,this).length>0},hasClass:function(E){return !!E&&this.is("."+E)},val:function(K){if(K===g){var E=this[0];if(E){if(o.nodeName(E,"option")){return(E.attributes.value||{}).specified?E.value:E.text}if(o.nodeName(E,"select")){var I=E.selectedIndex,L=[],M=E.options,H=E.type=="select-one";if(I<0){return null}for(var F=H?I:0,J=H?I+1:M.length;F<J;F++){var G=M[F];if(G.selected){K=o(G).val();if(H){return K}L.push(K)}}return L}return(E.value||"").replace(/\r/g,"")}return g}if(typeof K==="number"){K+=""}return this.each(function(){if(this.nodeType!=1){return}if(o.isArray(K)&&/radio|checkbox/.test(this.type)){this.checked=(o.inArray(this.value,K)>=0||o.inArray(this.name,K)>=0)}else{if(o.nodeName(this,"select")){var N=o.makeArray(K);o("option",this).each(function(){this.selected=(o.inArray(this.value,N)>=0||o.inArray(this.text,N)>=0)});if(!N.length){this.selectedIndex=-1}}else{this.value=K}}})},html:function(E){return E===g?(this[0]?this[0].innerHTML.replace(/ jQuery\d+="(?:\d+|null)"/g,""):null):this.empty().append(E)},replaceWith:function(E){return this.after(E).remove()},eq:function(E){return this.slice(E,+E+1)},slice:function(){return this.pushStack(Array.prototype.slice.apply(this,arguments),"slice",Array.prototype.slice.call(arguments).join(","))},map:function(E){return this.pushStack(o.map(this,function(G,F){return E.call(G,F,G)}))},andSelf:function(){return this.add(this.prevObject)},domManip:function(J,M,L){if(this[0]){var I=(this[0].ownerDocument||this[0]).createDocumentFragment(),F=o.clean(J,(this[0].ownerDocument||this[0]),I),H=I.firstChild;if(H){for(var G=0,E=this.length;G<E;G++){L.call(K(this[G],H),this.length>1||G>0?I.cloneNode(true):I)}}if(F){o.each(F,z)}}return this;function K(N,O){return M&&o.nodeName(N,"table")&&o.nodeName(O,"tr")?(N.getElementsByTagName("tbody")[0]||N.appendChild(N.ownerDocument.createElement("tbody"))):N}}};o.fn.init.prototype=o.fn;function z(E,F){if(F.src){o.ajax({url:F.src,async:false,dataType:"script"})}else{o.globalEval(F.text||F.textContent||F.innerHTML||"")}if(F.parentNode){F.parentNode.removeChild(F)}}function e(){return +new Date}o.extend=o.fn.extend=function(){var J=arguments[0]||{},H=1,I=arguments.length,E=false,G;if(typeof J==="boolean"){E=J;J=arguments[1]||{};H=2}if(typeof J!=="object"&&!o.isFunction(J)){J={}}if(I==H){J=this;--H}for(;H<I;H++){if((G=arguments[H])!=null){for(var F in G){var K=J[F],L=G[F];if(J===L){continue}if(E&&L&&typeof L==="object"&&!L.nodeType){J[F]=o.extend(E,K||(L.length!=null?[]:{}),L)}else{if(L!==g){J[F]=L}}}}}return J};var b=/z-?index|font-?weight|opacity|zoom|line-?height/i,q=document.defaultView||{},s=Object.prototype.toString;o.extend({noConflict:function(E){l.$=p;if(E){l.jQuery=y}return o},isFunction:function(E){return s.call(E)==="[object Function]"},isArray:function(E){return s.call(E)==="[object Array]"},isXMLDoc:function(E){return E.nodeType===9&&E.documentElement.nodeName!=="HTML"||!!E.ownerDocument&&o.isXMLDoc(E.ownerDocument)},globalEval:function(G){if(G&&/\S/.test(G)){var F=document.getElementsByTagName("head")[0]||document.documentElement,E=document.createElement("script");E.type="text/javascript";if(o.support.scriptEval){E.appendChild(document.createTextNode(G))}else{E.text=G}F.insertBefore(E,F.firstChild);F.removeChild(E)}},nodeName:function(F,E){return F.nodeName&&F.nodeName.toUpperCase()==E.toUpperCase()},each:function(G,K,F){var E,H=0,I=G.length;if(F){if(I===g){for(E in G){if(K.apply(G[E],F)===false){break}}}else{for(;H<I;){if(K.apply(G[H++],F)===false){break}}}}else{if(I===g){for(E in G){if(K.call(G[E],E,G[E])===false){break}}}else{for(var J=G[0];H<I&&K.call(J,H,J)!==false;J=G[++H]){}}}return G},prop:function(H,I,G,F,E){if(o.isFunction(I)){I=I.call(H,F)}return typeof I==="number"&&G=="curCSS"&&!b.test(E)?I+"px":I},className:{add:function(E,F){o.each((F||"").split(/\s+/),function(G,H){if(E.nodeType==1&&!o.className.has(E.className,H)){E.className+=(E.className?" ":"")+H}})},remove:function(E,F){if(E.nodeType==1){E.className=F!==g?o.grep(E.className.split(/\s+/),function(G){return !o.className.has(F,G)}).join(" "):""}},has:function(F,E){return F&&o.inArray(E,(F.className||F).toString().split(/\s+/))>-1}},swap:function(H,G,I){var E={};for(var F in G){E[F]=H.style[F];H.style[F]=G[F]}I.call(H);for(var F in G){H.style[F]=E[F]}},css:function(H,F,J,E){if(F=="width"||F=="height"){var L,G={position:"absolute",visibility:"hidden",display:"block"},K=F=="width"?["Left","Right"]:["Top","Bottom"];function I(){L=F=="width"?H.offsetWidth:H.offsetHeight;if(E==="border"){return}o.each(K,function(){if(!E){L-=parseFloat(o.curCSS(H,"padding"+this,true))||0}if(E==="margin"){L+=parseFloat(o.curCSS(H,"margin"+this,true))||0}else{L-=parseFloat(o.curCSS(H,"border"+this+"Width",true))||0}})}if(H.offsetWidth!==0){I()}else{o.swap(H,G,I)}return Math.max(0,Math.round(L))}return o.curCSS(H,F,J)},curCSS:function(I,F,G){var L,E=I.style;if(F=="opacity"&&!o.support.opacity){L=o.attr(E,"opacity");return L==""?"1":L}if(F.match(/float/i)){F=w}if(!G&&E&&E[F]){L=E[F]}else{if(q.getComputedStyle){if(F.match(/float/i)){F="float"}F=F.replace(/([A-Z])/g,"-$1").toLowerCase();var M=q.getComputedStyle(I,null);if(M){L=M.getPropertyValue(F)}if(F=="opacity"&&L==""){L="1"}}else{if(I.currentStyle){var J=F.replace(/\-(\w)/g,function(N,O){return O.toUpperCase()});L=I.currentStyle[F]||I.currentStyle[J];if(!/^\d+(px)?$/i.test(L)&&/^\d/.test(L)){var H=E.left,K=I.runtimeStyle.left;I.runtimeStyle.left=I.currentStyle.left;E.left=L||0;L=E.pixelLeft+"px";E.left=H;I.runtimeStyle.left=K}}}}return L},clean:function(F,K,I){K=K||document;if(typeof K.createElement==="undefined"){K=K.ownerDocument||K[0]&&K[0].ownerDocument||document}if(!I&&F.length===1&&typeof F[0]==="string"){var H=/^<(\w+)\s*\/?>$/.exec(F[0]);if(H){return[K.createElement(H[1])]}}var G=[],E=[],L=K.createElement("div");o.each(F,function(P,S){if(typeof S==="number"){S+=""}if(!S){return}if(typeof S==="string"){S=S.replace(/(<(\w+)[^>]*?)\/>/g,function(U,V,T){return T.match(/^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i)?U:V+"></"+T+">"});var O=S.replace(/^\s+/,"").substring(0,10).toLowerCase();var Q=!O.indexOf("<opt")&&[1,"<select multiple='multiple'>","</select>"]||!O.indexOf("<leg")&&[1,"<fieldset>","</fieldset>"]||O.match(/^<(thead|tbody|tfoot|colg|cap)/)&&[1,"<table>","</table>"]||!O.indexOf("<tr")&&[2,"<table><tbody>","</tbody></table>"]||(!O.indexOf("<td")||!O.indexOf("<th"))&&[3,"<table><tbody><tr>","</tr></tbody></table>"]||!O.indexOf("<col")&&[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"]||!o.support.htmlSerialize&&[1,"div<div>","</div>"]||[0,"",""];L.innerHTML=Q[1]+S+Q[2];while(Q[0]--){L=L.lastChild}if(!o.support.tbody){var R=/<tbody/i.test(S),N=!O.indexOf("<table")&&!R?L.firstChild&&L.firstChild.childNodes:Q[1]=="<table>"&&!R?L.childNodes:[];for(var M=N.length-1;M>=0;--M){if(o.nodeName(N[M],"tbody")&&!N[M].childNodes.length){N[M].parentNode.removeChild(N[M])}}}if(!o.support.leadingWhitespace&&/^\s/.test(S)){L.insertBefore(K.createTextNode(S.match(/^\s*/)[0]),L.firstChild)}S=o.makeArray(L.childNodes)}if(S.nodeType){G.push(S)}else{G=o.merge(G,S)}});if(I){for(var J=0;G[J];J++){if(o.nodeName(G[J],"script")&&(!G[J].type||G[J].type.toLowerCase()==="text/javascript")){E.push(G[J].parentNode?G[J].parentNode.removeChild(G[J]):G[J])}else{if(G[J].nodeType===1){G.splice.apply(G,[J+1,0].concat(o.makeArray(G[J].getElementsByTagName("script"))))}I.appendChild(G[J])}}return E}return G},attr:function(J,G,K){if(!J||J.nodeType==3||J.nodeType==8){return g}var H=!o.isXMLDoc(J),L=K!==g;G=H&&o.props[G]||G;if(J.tagName){var F=/href|src|style/.test(G);if(G=="selected"&&J.parentNode){J.parentNode.selectedIndex}if(G in J&&H&&!F){if(L){if(G=="type"&&o.nodeName(J,"input")&&J.parentNode){throw"type property can't be changed"}J[G]=K}if(o.nodeName(J,"form")&&J.getAttributeNode(G)){return J.getAttributeNode(G).nodeValue}if(G=="tabIndex"){var I=J.getAttributeNode("tabIndex");return I&&I.specified?I.value:J.nodeName.match(/(button|input|object|select|textarea)/i)?0:J.nodeName.match(/^(a|area)$/i)&&J.href?0:g}return J[G]}if(!o.support.style&&H&&G=="style"){return o.attr(J.style,"cssText",K)}if(L){J.setAttribute(G,""+K)}var E=!o.support.hrefNormalized&&H&&F?J.getAttribute(G,2):J.getAttribute(G);return E===null?g:E}if(!o.support.opacity&&G=="opacity"){if(L){J.zoom=1;J.filter=(J.filter||"").replace(/alpha\([^)]*\)/,"")+(parseInt(K)+""=="NaN"?"":"alpha(opacity="+K*100+")")}return J.filter&&J.filter.indexOf("opacity=")>=0?(parseFloat(J.filter.match(/opacity=([^)]*)/)[1])/100)+"":""}G=G.replace(/-([a-z])/ig,function(M,N){return N.toUpperCase()});if(L){J[G]=K}return J[G]},trim:function(E){return(E||"").replace(/^\s+|\s+$/g,"")},makeArray:function(G){var E=[];if(G!=null){var F=G.length;if(F==null||typeof G==="string"||o.isFunction(G)||G.setInterval){E[0]=G}else{while(F){E[--F]=G[F]}}}return E},inArray:function(G,H){for(var E=0,F=H.length;E<F;E++){if(H[E]===G){return E}}return -1},merge:function(H,E){var F=0,G,I=H.length;if(!o.support.getAll){while((G=E[F++])!=null){if(G.nodeType!=8){H[I++]=G}}}else{while((G=E[F++])!=null){H[I++]=G}}return H},unique:function(K){var F=[],E={};try{for(var G=0,H=K.length;G<H;G++){var J=o.data(K[G]);if(!E[J]){E[J]=true;F.push(K[G])}}}catch(I){F=K}return F},grep:function(F,J,E){var G=[];for(var H=0,I=F.length;H<I;H++){if(!E!=!J(F[H],H)){G.push(F[H])}}return G},map:function(E,J){var F=[];for(var G=0,H=E.length;G<H;G++){var I=J(E[G],G);if(I!=null){F[F.length]=I}}return F.concat.apply([],F)}});var C=navigator.userAgent.toLowerCase();o.browser={version:(C.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)||[0,"0"])[1],safari:/webkit/.test(C),opera:/opera/.test(C),msie:/msie/.test(C)&&!/opera/.test(C),mozilla:/mozilla/.test(C)&&!/(compatible|webkit)/.test(C)};o.each({parent:function(E){return E.parentNode},parents:function(E){return o.dir(E,"parentNode")},next:function(E){return o.nth(E,2,"nextSibling")},prev:function(E){return o.nth(E,2,"previousSibling")},nextAll:function(E){return o.dir(E,"nextSibling")},prevAll:function(E){return o.dir(E,"previousSibling")},siblings:function(E){return o.sibling(E.parentNode.firstChild,E)},children:function(E){return o.sibling(E.firstChild)},contents:function(E){return o.nodeName(E,"iframe")?E.contentDocument||E.contentWindow.document:o.makeArray(E.childNodes)}},function(E,F){o.fn[E]=function(G){var H=o.map(this,F);if(G&&typeof G=="string"){H=o.multiFilter(G,H)}return this.pushStack(o.unique(H),E,G)}});o.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(E,F){o.fn[E]=function(G){var J=[],L=o(G);for(var K=0,H=L.length;K<H;K++){var I=(K>0?this.clone(true):this).get();o.fn[F].apply(o(L[K]),I);J=J.concat(I)}return this.pushStack(J,E,G)}});o.each({removeAttr:function(E){o.attr(this,E,"");if(this.nodeType==1){this.removeAttribute(E)}},addClass:function(E){o.className.add(this,E)},removeClass:function(E){o.className.remove(this,E)},toggleClass:function(F,E){if(typeof E!=="boolean"){E=!o.className.has(this,F)}o.className[E?"add":"remove"](this,F)},remove:function(E){if(!E||o.filter(E,[this]).length){o("*",this).add([this]).each(function(){o.event.remove(this);o.removeData(this)});if(this.parentNode){this.parentNode.removeChild(this)}}},empty:function(){o(this).children().remove();while(this.firstChild){this.removeChild(this.firstChild)}}},function(E,F){o.fn[E]=function(){return this.each(F,arguments)}});function j(E,F){return E[0]&&parseInt(o.curCSS(E[0],F,true),10)||0}var h="jQuery"+e(),v=0,A={};o.extend({cache:{},data:function(F,E,G){F=F==l?A:F;var H=F[h];if(!H){H=F[h]=++v}if(E&&!o.cache[H]){o.cache[H]={}}if(G!==g){o.cache[H][E]=G}return E?o.cache[H][E]:H},removeData:function(F,E){F=F==l?A:F;var H=F[h];if(E){if(o.cache[H]){delete o.cache[H][E];E="";for(E in o.cache[H]){break}if(!E){o.removeData(F)}}}else{try{delete F[h]}catch(G){if(F.removeAttribute){F.removeAttribute(h)}}delete o.cache[H]}},queue:function(F,E,H){if(F){E=(E||"fx")+"queue";var G=o.data(F,E);if(!G||o.isArray(H)){G=o.data(F,E,o.makeArray(H))}else{if(H){G.push(H)}}}return G},dequeue:function(H,G){var E=o.queue(H,G),F=E.shift();if(!G||G==="fx"){F=E[0]}if(F!==g){F.call(H)}}});o.fn.extend({data:function(E,G){var H=E.split(".");H[1]=H[1]?"."+H[1]:"";if(G===g){var F=this.triggerHandler("getData"+H[1]+"!",[H[0]]);if(F===g&&this.length){F=o.data(this[0],E)}return F===g&&H[1]?this.data(H[0]):F}else{return this.trigger("setData"+H[1]+"!",[H[0],G]).each(function(){o.data(this,E,G)})}},removeData:function(E){return this.each(function(){o.removeData(this,E)})},queue:function(E,F){if(typeof E!=="string"){F=E;E="fx"}if(F===g){return o.queue(this[0],E)}return this.each(function(){var G=o.queue(this,E,F);if(E=="fx"&&G.length==1){G[0].call(this)}})},dequeue:function(E){return this.each(function(){o.dequeue(this,E)})}});
/*
 * Sizzle CSS Selector Engine - v0.9.3
 *  Copyright 2009, The Dojo Foundation
 *  Released under the MIT, BSD, and GPL Licenses.
 *  More information: http://sizzlejs.com/
 */
(function(){var R=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?/g,L=0,H=Object.prototype.toString;var F=function(Y,U,ab,ac){ab=ab||[];U=U||document;if(U.nodeType!==1&&U.nodeType!==9){return[]}if(!Y||typeof Y!=="string"){return ab}var Z=[],W,af,ai,T,ad,V,X=true;R.lastIndex=0;while((W=R.exec(Y))!==null){Z.push(W[1]);if(W[2]){V=RegExp.rightContext;break}}if(Z.length>1&&M.exec(Y)){if(Z.length===2&&I.relative[Z[0]]){af=J(Z[0]+Z[1],U)}else{af=I.relative[Z[0]]?[U]:F(Z.shift(),U);while(Z.length){Y=Z.shift();if(I.relative[Y]){Y+=Z.shift()}af=J(Y,af)}}}else{var ae=ac?{expr:Z.pop(),set:E(ac)}:F.find(Z.pop(),Z.length===1&&U.parentNode?U.parentNode:U,Q(U));af=F.filter(ae.expr,ae.set);if(Z.length>0){ai=E(af)}else{X=false}while(Z.length){var ah=Z.pop(),ag=ah;if(!I.relative[ah]){ah=""}else{ag=Z.pop()}if(ag==null){ag=U}I.relative[ah](ai,ag,Q(U))}}if(!ai){ai=af}if(!ai){throw"Syntax error, unrecognized expression: "+(ah||Y)}if(H.call(ai)==="[object Array]"){if(!X){ab.push.apply(ab,ai)}else{if(U.nodeType===1){for(var aa=0;ai[aa]!=null;aa++){if(ai[aa]&&(ai[aa]===true||ai[aa].nodeType===1&&K(U,ai[aa]))){ab.push(af[aa])}}}else{for(var aa=0;ai[aa]!=null;aa++){if(ai[aa]&&ai[aa].nodeType===1){ab.push(af[aa])}}}}}else{E(ai,ab)}if(V){F(V,U,ab,ac);if(G){hasDuplicate=false;ab.sort(G);if(hasDuplicate){for(var aa=1;aa<ab.length;aa++){if(ab[aa]===ab[aa-1]){ab.splice(aa--,1)}}}}}return ab};F.matches=function(T,U){return F(T,null,null,U)};F.find=function(aa,T,ab){var Z,X;if(!aa){return[]}for(var W=0,V=I.order.length;W<V;W++){var Y=I.order[W],X;if((X=I.match[Y].exec(aa))){var U=RegExp.leftContext;if(U.substr(U.length-1)!=="\\"){X[1]=(X[1]||"").replace(/\\/g,"");Z=I.find[Y](X,T,ab);if(Z!=null){aa=aa.replace(I.match[Y],"");break}}}}if(!Z){Z=T.getElementsByTagName("*")}return{set:Z,expr:aa}};F.filter=function(ad,ac,ag,W){var V=ad,ai=[],aa=ac,Y,T,Z=ac&&ac[0]&&Q(ac[0]);while(ad&&ac.length){for(var ab in I.filter){if((Y=I.match[ab].exec(ad))!=null){var U=I.filter[ab],ah,af;T=false;if(aa==ai){ai=[]}if(I.preFilter[ab]){Y=I.preFilter[ab](Y,aa,ag,ai,W,Z);if(!Y){T=ah=true}else{if(Y===true){continue}}}if(Y){for(var X=0;(af=aa[X])!=null;X++){if(af){ah=U(af,Y,X,aa);var ae=W^!!ah;if(ag&&ah!=null){if(ae){T=true}else{aa[X]=false}}else{if(ae){ai.push(af);T=true}}}}}if(ah!==g){if(!ag){aa=ai}ad=ad.replace(I.match[ab],"");if(!T){return[]}break}}}if(ad==V){if(T==null){throw"Syntax error, unrecognized expression: "+ad}else{break}}V=ad}return aa};var I=F.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF_-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF_-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*_-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF_-]|\\.)+)(?:\((['"]*)((?:\([^\)]+\)|[^\2\(\)]*)+)\2\))?/},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(T){return T.getAttribute("href")}},relative:{"+":function(aa,T,Z){var X=typeof T==="string",ab=X&&!/\W/.test(T),Y=X&&!ab;if(ab&&!Z){T=T.toUpperCase()}for(var W=0,V=aa.length,U;W<V;W++){if((U=aa[W])){while((U=U.previousSibling)&&U.nodeType!==1){}aa[W]=Y||U&&U.nodeName===T?U||false:U===T}}if(Y){F.filter(T,aa,true)}},">":function(Z,U,aa){var X=typeof U==="string";if(X&&!/\W/.test(U)){U=aa?U:U.toUpperCase();for(var V=0,T=Z.length;V<T;V++){var Y=Z[V];if(Y){var W=Y.parentNode;Z[V]=W.nodeName===U?W:false}}}else{for(var V=0,T=Z.length;V<T;V++){var Y=Z[V];if(Y){Z[V]=X?Y.parentNode:Y.parentNode===U}}if(X){F.filter(U,Z,true)}}},"":function(W,U,Y){var V=L++,T=S;if(!U.match(/\W/)){var X=U=Y?U:U.toUpperCase();T=P}T("parentNode",U,V,W,X,Y)},"~":function(W,U,Y){var V=L++,T=S;if(typeof U==="string"&&!U.match(/\W/)){var X=U=Y?U:U.toUpperCase();T=P}T("previousSibling",U,V,W,X,Y)}},find:{ID:function(U,V,W){if(typeof V.getElementById!=="undefined"&&!W){var T=V.getElementById(U[1]);return T?[T]:[]}},NAME:function(V,Y,Z){if(typeof Y.getElementsByName!=="undefined"){var U=[],X=Y.getElementsByName(V[1]);for(var W=0,T=X.length;W<T;W++){if(X[W].getAttribute("name")===V[1]){U.push(X[W])}}return U.length===0?null:U}},TAG:function(T,U){return U.getElementsByTagName(T[1])}},preFilter:{CLASS:function(W,U,V,T,Z,aa){W=" "+W[1].replace(/\\/g,"")+" ";if(aa){return W}for(var X=0,Y;(Y=U[X])!=null;X++){if(Y){if(Z^(Y.className&&(" "+Y.className+" ").indexOf(W)>=0)){if(!V){T.push(Y)}}else{if(V){U[X]=false}}}}return false},ID:function(T){return T[1].replace(/\\/g,"")},TAG:function(U,T){for(var V=0;T[V]===false;V++){}return T[V]&&Q(T[V])?U[1]:U[1].toUpperCase()},CHILD:function(T){if(T[1]=="nth"){var U=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(T[2]=="even"&&"2n"||T[2]=="odd"&&"2n+1"||!/\D/.test(T[2])&&"0n+"+T[2]||T[2]);T[2]=(U[1]+(U[2]||1))-0;T[3]=U[3]-0}T[0]=L++;return T},ATTR:function(X,U,V,T,Y,Z){var W=X[1].replace(/\\/g,"");if(!Z&&I.attrMap[W]){X[1]=I.attrMap[W]}if(X[2]==="~="){X[4]=" "+X[4]+" "}return X},PSEUDO:function(X,U,V,T,Y){if(X[1]==="not"){if(X[3].match(R).length>1||/^\w/.test(X[3])){X[3]=F(X[3],null,null,U)}else{var W=F.filter(X[3],U,V,true^Y);if(!V){T.push.apply(T,W)}return false}}else{if(I.match.POS.test(X[0])||I.match.CHILD.test(X[0])){return true}}return X},POS:function(T){T.unshift(true);return T}},filters:{enabled:function(T){return T.disabled===false&&T.type!=="hidden"},disabled:function(T){return T.disabled===true},checked:function(T){return T.checked===true},selected:function(T){T.parentNode.selectedIndex;return T.selected===true},parent:function(T){return !!T.firstChild},empty:function(T){return !T.firstChild},has:function(V,U,T){return !!F(T[3],V).length},header:function(T){return/h\d/i.test(T.nodeName)},text:function(T){return"text"===T.type},radio:function(T){return"radio"===T.type},checkbox:function(T){return"checkbox"===T.type},file:function(T){return"file"===T.type},password:function(T){return"password"===T.type},submit:function(T){return"submit"===T.type},image:function(T){return"image"===T.type},reset:function(T){return"reset"===T.type},button:function(T){return"button"===T.type||T.nodeName.toUpperCase()==="BUTTON"},input:function(T){return/input|select|textarea|button/i.test(T.nodeName)}},setFilters:{first:function(U,T){return T===0},last:function(V,U,T,W){return U===W.length-1},even:function(U,T){return T%2===0},odd:function(U,T){return T%2===1},lt:function(V,U,T){return U<T[3]-0},gt:function(V,U,T){return U>T[3]-0},nth:function(V,U,T){return T[3]-0==U},eq:function(V,U,T){return T[3]-0==U}},filter:{PSEUDO:function(Z,V,W,aa){var U=V[1],X=I.filters[U];if(X){return X(Z,W,V,aa)}else{if(U==="contains"){return(Z.textContent||Z.innerText||"").indexOf(V[3])>=0}else{if(U==="not"){var Y=V[3];for(var W=0,T=Y.length;W<T;W++){if(Y[W]===Z){return false}}return true}}}},CHILD:function(T,W){var Z=W[1],U=T;switch(Z){case"only":case"first":while(U=U.previousSibling){if(U.nodeType===1){return false}}if(Z=="first"){return true}U=T;case"last":while(U=U.nextSibling){if(U.nodeType===1){return false}}return true;case"nth":var V=W[2],ac=W[3];if(V==1&&ac==0){return true}var Y=W[0],ab=T.parentNode;if(ab&&(ab.sizcache!==Y||!T.nodeIndex)){var X=0;for(U=ab.firstChild;U;U=U.nextSibling){if(U.nodeType===1){U.nodeIndex=++X}}ab.sizcache=Y}var aa=T.nodeIndex-ac;if(V==0){return aa==0}else{return(aa%V==0&&aa/V>=0)}}},ID:function(U,T){return U.nodeType===1&&U.getAttribute("id")===T},TAG:function(U,T){return(T==="*"&&U.nodeType===1)||U.nodeName===T},CLASS:function(U,T){return(" "+(U.className||U.getAttribute("class"))+" ").indexOf(T)>-1},ATTR:function(Y,W){var V=W[1],T=I.attrHandle[V]?I.attrHandle[V](Y):Y[V]!=null?Y[V]:Y.getAttribute(V),Z=T+"",X=W[2],U=W[4];return T==null?X==="!=":X==="="?Z===U:X==="*="?Z.indexOf(U)>=0:X==="~="?(" "+Z+" ").indexOf(U)>=0:!U?Z&&T!==false:X==="!="?Z!=U:X==="^="?Z.indexOf(U)===0:X==="$="?Z.substr(Z.length-U.length)===U:X==="|="?Z===U||Z.substr(0,U.length+1)===U+"-":false},POS:function(X,U,V,Y){var T=U[2],W=I.setFilters[T];if(W){return W(X,V,U,Y)}}}};var M=I.match.POS;for(var O in I.match){I.match[O]=RegExp(I.match[O].source+/(?![^\[]*\])(?![^\(]*\))/.source)}var E=function(U,T){U=Array.prototype.slice.call(U);if(T){T.push.apply(T,U);return T}return U};try{Array.prototype.slice.call(document.documentElement.childNodes)}catch(N){E=function(X,W){var U=W||[];if(H.call(X)==="[object Array]"){Array.prototype.push.apply(U,X)}else{if(typeof X.length==="number"){for(var V=0,T=X.length;V<T;V++){U.push(X[V])}}else{for(var V=0;X[V];V++){U.push(X[V])}}}return U}}var G;if(document.documentElement.compareDocumentPosition){G=function(U,T){var V=U.compareDocumentPosition(T)&4?-1:U===T?0:1;if(V===0){hasDuplicate=true}return V}}else{if("sourceIndex" in document.documentElement){G=function(U,T){var V=U.sourceIndex-T.sourceIndex;if(V===0){hasDuplicate=true}return V}}else{if(document.createRange){G=function(W,U){var V=W.ownerDocument.createRange(),T=U.ownerDocument.createRange();V.selectNode(W);V.collapse(true);T.selectNode(U);T.collapse(true);var X=V.compareBoundaryPoints(Range.START_TO_END,T);if(X===0){hasDuplicate=true}return X}}}}(function(){var U=document.createElement("form"),V="script"+(new Date).getTime();U.innerHTML="<input name='"+V+"'/>";var T=document.documentElement;T.insertBefore(U,T.firstChild);if(!!document.getElementById(V)){I.find.ID=function(X,Y,Z){if(typeof Y.getElementById!=="undefined"&&!Z){var W=Y.getElementById(X[1]);return W?W.id===X[1]||typeof W.getAttributeNode!=="undefined"&&W.getAttributeNode("id").nodeValue===X[1]?[W]:g:[]}};I.filter.ID=function(Y,W){var X=typeof Y.getAttributeNode!=="undefined"&&Y.getAttributeNode("id");return Y.nodeType===1&&X&&X.nodeValue===W}}T.removeChild(U)})();(function(){var T=document.createElement("div");T.appendChild(document.createComment(""));if(T.getElementsByTagName("*").length>0){I.find.TAG=function(U,Y){var X=Y.getElementsByTagName(U[1]);if(U[1]==="*"){var W=[];for(var V=0;X[V];V++){if(X[V].nodeType===1){W.push(X[V])}}X=W}return X}}T.innerHTML="<a href='#'></a>";if(T.firstChild&&typeof T.firstChild.getAttribute!=="undefined"&&T.firstChild.getAttribute("href")!=="#"){I.attrHandle.href=function(U){return U.getAttribute("href",2)}}})();if(document.querySelectorAll){(function(){var T=F,U=document.createElement("div");U.innerHTML="<p class='TEST'></p>";if(U.querySelectorAll&&U.querySelectorAll(".TEST").length===0){return}F=function(Y,X,V,W){X=X||document;if(!W&&X.nodeType===9&&!Q(X)){try{return E(X.querySelectorAll(Y),V)}catch(Z){}}return T(Y,X,V,W)};F.find=T.find;F.filter=T.filter;F.selectors=T.selectors;F.matches=T.matches})()}if(document.getElementsByClassName&&document.documentElement.getElementsByClassName){(function(){var T=document.createElement("div");T.innerHTML="<div class='test e'></div><div class='test'></div>";if(T.getElementsByClassName("e").length===0){return}T.lastChild.className="e";if(T.getElementsByClassName("e").length===1){return}I.order.splice(1,0,"CLASS");I.find.CLASS=function(U,V,W){if(typeof V.getElementsByClassName!=="undefined"&&!W){return V.getElementsByClassName(U[1])}}})()}function P(U,Z,Y,ad,aa,ac){var ab=U=="previousSibling"&&!ac;for(var W=0,V=ad.length;W<V;W++){var T=ad[W];if(T){if(ab&&T.nodeType===1){T.sizcache=Y;T.sizset=W}T=T[U];var X=false;while(T){if(T.sizcache===Y){X=ad[T.sizset];break}if(T.nodeType===1&&!ac){T.sizcache=Y;T.sizset=W}if(T.nodeName===Z){X=T;break}T=T[U]}ad[W]=X}}}function S(U,Z,Y,ad,aa,ac){var ab=U=="previousSibling"&&!ac;for(var W=0,V=ad.length;W<V;W++){var T=ad[W];if(T){if(ab&&T.nodeType===1){T.sizcache=Y;T.sizset=W}T=T[U];var X=false;while(T){if(T.sizcache===Y){X=ad[T.sizset];break}if(T.nodeType===1){if(!ac){T.sizcache=Y;T.sizset=W}if(typeof Z!=="string"){if(T===Z){X=true;break}}else{if(F.filter(Z,[T]).length>0){X=T;break}}}T=T[U]}ad[W]=X}}}var K=document.compareDocumentPosition?function(U,T){return U.compareDocumentPosition(T)&16}:function(U,T){return U!==T&&(U.contains?U.contains(T):true)};var Q=function(T){return T.nodeType===9&&T.documentElement.nodeName!=="HTML"||!!T.ownerDocument&&Q(T.ownerDocument)};var J=function(T,aa){var W=[],X="",Y,V=aa.nodeType?[aa]:aa;while((Y=I.match.PSEUDO.exec(T))){X+=Y[0];T=T.replace(I.match.PSEUDO,"")}T=I.relative[T]?T+"*":T;for(var Z=0,U=V.length;Z<U;Z++){F(T,V[Z],W)}return F.filter(X,W)};o.find=F;o.filter=F.filter;o.expr=F.selectors;o.expr[":"]=o.expr.filters;F.selectors.filters.hidden=function(T){return T.offsetWidth===0||T.offsetHeight===0};F.selectors.filters.visible=function(T){return T.offsetWidth>0||T.offsetHeight>0};F.selectors.filters.animated=function(T){return o.grep(o.timers,function(U){return T===U.elem}).length};o.multiFilter=function(V,T,U){if(U){V=":not("+V+")"}return F.matches(V,T)};o.dir=function(V,U){var T=[],W=V[U];while(W&&W!=document){if(W.nodeType==1){T.push(W)}W=W[U]}return T};o.nth=function(X,T,V,W){T=T||1;var U=0;for(;X;X=X[V]){if(X.nodeType==1&&++U==T){break}}return X};o.sibling=function(V,U){var T=[];for(;V;V=V.nextSibling){if(V.nodeType==1&&V!=U){T.push(V)}}return T};return;l.Sizzle=F})();o.event={add:function(I,F,H,K){if(I.nodeType==3||I.nodeType==8){return}if(I.setInterval&&I!=l){I=l}if(!H.guid){H.guid=this.guid++}if(K!==g){var G=H;H=this.proxy(G);H.data=K}var E=o.data(I,"events")||o.data(I,"events",{}),J=o.data(I,"handle")||o.data(I,"handle",function(){return typeof o!=="undefined"&&!o.event.triggered?o.event.handle.apply(arguments.callee.elem,arguments):g});J.elem=I;o.each(F.split(/\s+/),function(M,N){var O=N.split(".");N=O.shift();H.type=O.slice().sort().join(".");var L=E[N];if(o.event.specialAll[N]){o.event.specialAll[N].setup.call(I,K,O)}if(!L){L=E[N]={};if(!o.event.special[N]||o.event.special[N].setup.call(I,K,O)===false){if(I.addEventListener){I.addEventListener(N,J,false)}else{if(I.attachEvent){I.attachEvent("on"+N,J)}}}}L[H.guid]=H;o.event.global[N]=true});I=null},guid:1,global:{},remove:function(K,H,J){if(K.nodeType==3||K.nodeType==8){return}var G=o.data(K,"events"),F,E;if(G){if(H===g||(typeof H==="string"&&H.charAt(0)==".")){for(var I in G){this.remove(K,I+(H||""))}}else{if(H.type){J=H.handler;H=H.type}o.each(H.split(/\s+/),function(M,O){var Q=O.split(".");O=Q.shift();var N=RegExp("(^|\\.)"+Q.slice().sort().join(".*\\.")+"(\\.|$)");if(G[O]){if(J){delete G[O][J.guid]}else{for(var P in G[O]){if(N.test(G[O][P].type)){delete G[O][P]}}}if(o.event.specialAll[O]){o.event.specialAll[O].teardown.call(K,Q)}for(F in G[O]){break}if(!F){if(!o.event.special[O]||o.event.special[O].teardown.call(K,Q)===false){if(K.removeEventListener){K.removeEventListener(O,o.data(K,"handle"),false)}else{if(K.detachEvent){K.detachEvent("on"+O,o.data(K,"handle"))}}}F=null;delete G[O]}}})}for(F in G){break}if(!F){var L=o.data(K,"handle");if(L){L.elem=null}o.removeData(K,"events");o.removeData(K,"handle")}}},trigger:function(I,K,H,E){var G=I.type||I;if(!E){I=typeof I==="object"?I[h]?I:o.extend(o.Event(G),I):o.Event(G);if(G.indexOf("!")>=0){I.type=G=G.slice(0,-1);I.exclusive=true}if(!H){I.stopPropagation();if(this.global[G]){o.each(o.cache,function(){if(this.events&&this.events[G]){o.event.trigger(I,K,this.handle.elem)}})}}if(!H||H.nodeType==3||H.nodeType==8){return g}I.result=g;I.target=H;K=o.makeArray(K);K.unshift(I)}I.currentTarget=H;var J=o.data(H,"handle");if(J){J.apply(H,K)}if((!H[G]||(o.nodeName(H,"a")&&G=="click"))&&H["on"+G]&&H["on"+G].apply(H,K)===false){I.result=false}if(!E&&H[G]&&!I.isDefaultPrevented()&&!(o.nodeName(H,"a")&&G=="click")){this.triggered=true;try{H[G]()}catch(L){}}this.triggered=false;if(!I.isPropagationStopped()){var F=H.parentNode||H.ownerDocument;if(F){o.event.trigger(I,K,F,true)}}},handle:function(K){var J,E;K=arguments[0]=o.event.fix(K||l.event);K.currentTarget=this;var L=K.type.split(".");K.type=L.shift();J=!L.length&&!K.exclusive;var I=RegExp("(^|\\.)"+L.slice().sort().join(".*\\.")+"(\\.|$)");E=(o.data(this,"events")||{})[K.type];for(var G in E){var H=E[G];if(J||I.test(H.type)){K.handler=H;K.data=H.data;var F=H.apply(this,arguments);if(F!==g){K.result=F;if(F===false){K.preventDefault();K.stopPropagation()}}if(K.isImmediatePropagationStopped()){break}}}},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode metaKey newValue originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(H){if(H[h]){return H}var F=H;H=o.Event(F);for(var G=this.props.length,J;G;){J=this.props[--G];H[J]=F[J]}if(!H.target){H.target=H.srcElement||document}if(H.target.nodeType==3){H.target=H.target.parentNode}if(!H.relatedTarget&&H.fromElement){H.relatedTarget=H.fromElement==H.target?H.toElement:H.fromElement}if(H.pageX==null&&H.clientX!=null){var I=document.documentElement,E=document.body;H.pageX=H.clientX+(I&&I.scrollLeft||E&&E.scrollLeft||0)-(I.clientLeft||0);H.pageY=H.clientY+(I&&I.scrollTop||E&&E.scrollTop||0)-(I.clientTop||0)}if(!H.which&&((H.charCode||H.charCode===0)?H.charCode:H.keyCode)){H.which=H.charCode||H.keyCode}if(!H.metaKey&&H.ctrlKey){H.metaKey=H.ctrlKey}if(!H.which&&H.button){H.which=(H.button&1?1:(H.button&2?3:(H.button&4?2:0)))}return H},proxy:function(F,E){E=E||function(){return F.apply(this,arguments)};E.guid=F.guid=F.guid||E.guid||this.guid++;return E},special:{ready:{setup:B,teardown:function(){}}},specialAll:{live:{setup:function(E,F){o.event.add(this,F[0],c)},teardown:function(G){if(G.length){var E=0,F=RegExp("(^|\\.)"+G[0]+"(\\.|$)");o.each((o.data(this,"events").live||{}),function(){if(F.test(this.type)){E++}});if(E<1){o.event.remove(this,G[0],c)}}}}}};o.Event=function(E){if(!this.preventDefault){return new o.Event(E)}if(E&&E.type){this.originalEvent=E;this.type=E.type}else{this.type=E}this.timeStamp=e();this[h]=true};function k(){return false}function u(){return true}o.Event.prototype={preventDefault:function(){this.isDefaultPrevented=u;var E=this.originalEvent;if(!E){return}if(E.preventDefault){E.preventDefault()}E.returnValue=false},stopPropagation:function(){this.isPropagationStopped=u;var E=this.originalEvent;if(!E){return}if(E.stopPropagation){E.stopPropagation()}E.cancelBubble=true},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=u;this.stopPropagation()},isDefaultPrevented:k,isPropagationStopped:k,isImmediatePropagationStopped:k};var a=function(F){var E=F.relatedTarget;while(E&&E!=this){try{E=E.parentNode}catch(G){E=this}}if(E!=this){F.type=F.data;o.event.handle.apply(this,arguments)}};o.each({mouseover:"mouseenter",mouseout:"mouseleave"},function(F,E){o.event.special[E]={setup:function(){o.event.add(this,F,a,E)},teardown:function(){o.event.remove(this,F,a)}}});o.fn.extend({bind:function(F,G,E){return F=="unload"?this.one(F,G,E):this.each(function(){o.event.add(this,F,E||G,E&&G)})},one:function(G,H,F){var E=o.event.proxy(F||H,function(I){o(this).unbind(I,E);return(F||H).apply(this,arguments)});return this.each(function(){o.event.add(this,G,E,F&&H)})},unbind:function(F,E){return this.each(function(){o.event.remove(this,F,E)})},trigger:function(E,F){return this.each(function(){o.event.trigger(E,F,this)})},triggerHandler:function(E,G){if(this[0]){var F=o.Event(E);F.preventDefault();F.stopPropagation();o.event.trigger(F,G,this[0]);return F.result}},toggle:function(G){var E=arguments,F=1;while(F<E.length){o.event.proxy(G,E[F++])}return this.click(o.event.proxy(G,function(H){this.lastToggle=(this.lastToggle||0)%F;H.preventDefault();return E[this.lastToggle++].apply(this,arguments)||false}))},hover:function(E,F){return this.mouseenter(E).mouseleave(F)},ready:function(E){B();if(o.isReady){E.call(document,o)}else{o.readyList.push(E)}return this},live:function(G,F){var E=o.event.proxy(F);E.guid+=this.selector+G;o(document).bind(i(G,this.selector),this.selector,E);return this},die:function(F,E){o(document).unbind(i(F,this.selector),E?{guid:E.guid+this.selector+F}:null);return this}});function c(H){var E=RegExp("(^|\\.)"+H.type+"(\\.|$)"),G=true,F=[];o.each(o.data(this,"events").live||[],function(I,J){if(E.test(J.type)){var K=o(H.target).closest(J.data)[0];if(K){F.push({elem:K,fn:J})}}});F.sort(function(J,I){return o.data(J.elem,"closest")-o.data(I.elem,"closest")});o.each(F,function(){if(this.fn.call(this.elem,H,this.fn.data)===false){return(G=false)}});return G}function i(F,E){return["live",F,E.replace(/\./g,"`").replace(/ /g,"|")].join(".")}o.extend({isReady:false,readyList:[],ready:function(){if(!o.isReady){o.isReady=true;if(o.readyList){o.each(o.readyList,function(){this.call(document,o)});o.readyList=null}o(document).triggerHandler("ready")}}});var x=false;function B(){if(x){return}x=true;if(document.addEventListener){document.addEventListener("DOMContentLoaded",function(){document.removeEventListener("DOMContentLoaded",arguments.callee,false);o.ready()},false)}else{if(document.attachEvent){document.attachEvent("onreadystatechange",function(){if(document.readyState==="complete"){document.detachEvent("onreadystatechange",arguments.callee);o.ready()}});if(document.documentElement.doScroll&&l==l.top){(function(){if(o.isReady){return}try{document.documentElement.doScroll("left")}catch(E){setTimeout(arguments.callee,0);return}o.ready()})()}}}o.event.add(l,"load",o.ready)}o.each(("blur,focus,load,resize,scroll,unload,click,dblclick,mousedown,mouseup,mousemove,mouseover,mouseout,mouseenter,mouseleave,change,select,submit,keydown,keypress,keyup,error").split(","),function(F,E){o.fn[E]=function(G){return G?this.bind(E,G):this.trigger(E)}});o(l).bind("unload",function(){for(var E in o.cache){if(E!=1&&o.cache[E].handle){o.event.remove(o.cache[E].handle.elem)}}});(function(){o.support={};var F=document.documentElement,G=document.createElement("script"),K=document.createElement("div"),J="script"+(new Date).getTime();K.style.display="none";K.innerHTML='   <link/><table></table><a href="/a" style="color:red;float:left;opacity:.5;">a</a><select><option>text</option></select><object><param/></object>';var H=K.getElementsByTagName("*"),E=K.getElementsByTagName("a")[0];if(!H||!H.length||!E){return}o.support={leadingWhitespace:K.firstChild.nodeType==3,tbody:!K.getElementsByTagName("tbody").length,objectAll:!!K.getElementsByTagName("object")[0].getElementsByTagName("*").length,htmlSerialize:!!K.getElementsByTagName("link").length,style:/red/.test(E.getAttribute("style")),hrefNormalized:E.getAttribute("href")==="/a",opacity:E.style.opacity==="0.5",cssFloat:!!E.style.cssFloat,scriptEval:false,noCloneEvent:true,boxModel:null};G.type="text/javascript";try{G.appendChild(document.createTextNode("window."+J+"=1;"))}catch(I){}F.insertBefore(G,F.firstChild);if(l[J]){o.support.scriptEval=true;delete l[J]}F.removeChild(G);if(K.attachEvent&&K.fireEvent){K.attachEvent("onclick",function(){o.support.noCloneEvent=false;K.detachEvent("onclick",arguments.callee)});K.cloneNode(true).fireEvent("onclick")}o(function(){var L=document.createElement("div");L.style.width=L.style.paddingLeft="1px";document.body.appendChild(L);o.boxModel=o.support.boxModel=L.offsetWidth===2;document.body.removeChild(L).style.display="none"})})();var w=o.support.cssFloat?"cssFloat":"styleFloat";o.props={"for":"htmlFor","class":"className","float":w,cssFloat:w,styleFloat:w,readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",tabindex:"tabIndex"};o.fn.extend({_load:o.fn.load,load:function(G,J,K){if(typeof G!=="string"){return this._load(G)}var I=G.indexOf(" ");if(I>=0){var E=G.slice(I,G.length);G=G.slice(0,I)}var H="GET";if(J){if(o.isFunction(J)){K=J;J=null}else{if(typeof J==="object"){J=o.param(J);H="POST"}}}var F=this;o.ajax({url:G,type:H,dataType:"html",data:J,complete:function(M,L){if(L=="success"||L=="notmodified"){F.html(E?o("<div/>").append(M.responseText.replace(/<script(.|\s)*?\/script>/g,"")).find(E):M.responseText)}if(K){F.each(K,[M.responseText,L,M])}}});return this},serialize:function(){return o.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?o.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||/select|textarea/i.test(this.nodeName)||/text|hidden|password|search/i.test(this.type))}).map(function(E,F){var G=o(this).val();return G==null?null:o.isArray(G)?o.map(G,function(I,H){return{name:F.name,value:I}}):{name:F.name,value:G}}).get()}});o.each("ajaxStart,ajaxStop,ajaxComplete,ajaxError,ajaxSuccess,ajaxSend".split(","),function(E,F){o.fn[F]=function(G){return this.bind(F,G)}});var r=e();o.extend({get:function(E,G,H,F){if(o.isFunction(G)){H=G;G=null}return o.ajax({type:"GET",url:E,data:G,success:H,dataType:F})},getScript:function(E,F){return o.get(E,null,F,"script")},getJSON:function(E,F,G){return o.get(E,F,G,"json")},post:function(E,G,H,F){if(o.isFunction(G)){H=G;G={}}return o.ajax({type:"POST",url:E,data:G,success:H,dataType:F})},ajaxSetup:function(E){o.extend(o.ajaxSettings,E)},ajaxSettings:{url:location.href,global:true,type:"GET",contentType:"application/x-www-form-urlencoded",processData:true,async:true,xhr:function(){return l.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):new XMLHttpRequest()},accepts:{xml:"application/xml, text/xml",html:"text/html",script:"text/javascript, application/javascript",json:"application/json, text/javascript",text:"text/plain",_default:"*/*"}},lastModified:{},ajax:function(M){M=o.extend(true,M,o.extend(true,{},o.ajaxSettings,M));var W,F=/=\?(&|$)/g,R,V,G=M.type.toUpperCase();if(M.data&&M.processData&&typeof M.data!=="string"){M.data=o.param(M.data)}if(M.dataType=="jsonp"){if(G=="GET"){if(!M.url.match(F)){M.url+=(M.url.match(/\?/)?"&":"?")+(M.jsonp||"callback")+"=?"}}else{if(!M.data||!M.data.match(F)){M.data=(M.data?M.data+"&":"")+(M.jsonp||"callback")+"=?"}}M.dataType="json"}if(M.dataType=="json"&&(M.data&&M.data.match(F)||M.url.match(F))){W="jsonp"+r++;if(M.data){M.data=(M.data+"").replace(F,"="+W+"$1")}M.url=M.url.replace(F,"="+W+"$1");M.dataType="script";l[W]=function(X){V=X;I();L();l[W]=g;try{delete l[W]}catch(Y){}if(H){H.removeChild(T)}}}if(M.dataType=="script"&&M.cache==null){M.cache=false}if(M.cache===false&&G=="GET"){var E=e();var U=M.url.replace(/(\?|&)_=.*?(&|$)/,"$1_="+E+"$2");M.url=U+((U==M.url)?(M.url.match(/\?/)?"&":"?")+"_="+E:"")}if(M.data&&G=="GET"){M.url+=(M.url.match(/\?/)?"&":"?")+M.data;M.data=null}if(M.global&&!o.active++){o.event.trigger("ajaxStart")}var Q=/^(\w+:)?\/\/([^\/?#]+)/.exec(M.url);if(M.dataType=="script"&&G=="GET"&&Q&&(Q[1]&&Q[1]!=location.protocol||Q[2]!=location.host)){var H=document.getElementsByTagName("head")[0];var T=document.createElement("script");T.src=M.url;if(M.scriptCharset){T.charset=M.scriptCharset}if(!W){var O=false;T.onload=T.onreadystatechange=function(){if(!O&&(!this.readyState||this.readyState=="loaded"||this.readyState=="complete")){O=true;I();L();T.onload=T.onreadystatechange=null;H.removeChild(T)}}}H.appendChild(T);return g}var K=false;var J=M.xhr();if(M.username){J.open(G,M.url,M.async,M.username,M.password)}else{J.open(G,M.url,M.async)}try{if(M.data){J.setRequestHeader("Content-Type",M.contentType)}if(M.ifModified){J.setRequestHeader("If-Modified-Since",o.lastModified[M.url]||"Thu, 01 Jan 1970 00:00:00 GMT")}J.setRequestHeader("X-Requested-With","XMLHttpRequest");J.setRequestHeader("Accept",M.dataType&&M.accepts[M.dataType]?M.accepts[M.dataType]+", */*":M.accepts._default)}catch(S){}if(M.beforeSend&&M.beforeSend(J,M)===false){if(M.global&&!--o.active){o.event.trigger("ajaxStop")}J.abort();return false}if(M.global){o.event.trigger("ajaxSend",[J,M])}var N=function(X){if(J.readyState==0){if(P){clearInterval(P);P=null;if(M.global&&!--o.active){o.event.trigger("ajaxStop")}}}else{if(!K&&J&&(J.readyState==4||X=="timeout")){K=true;if(P){clearInterval(P);P=null}R=X=="timeout"?"timeout":!o.httpSuccess(J)?"error":M.ifModified&&o.httpNotModified(J,M.url)?"notmodified":"success";if(R=="success"){try{V=o.httpData(J,M.dataType,M)}catch(Z){R="parsererror"}}if(R=="success"){var Y;try{Y=J.getResponseHeader("Last-Modified")}catch(Z){}if(M.ifModified&&Y){o.lastModified[M.url]=Y}if(!W){I()}}else{o.handleError(M,J,R)}L();if(X){J.abort()}if(M.async){J=null}}}};if(M.async){var P=setInterval(N,13);if(M.timeout>0){setTimeout(function(){if(J&&!K){N("timeout")}},M.timeout)}}try{J.send(M.data)}catch(S){o.handleError(M,J,null,S)}if(!M.async){N()}function I(){if(M.success){M.success(V,R)}if(M.global){o.event.trigger("ajaxSuccess",[J,M])}}function L(){if(M.complete){M.complete(J,R)}if(M.global){o.event.trigger("ajaxComplete",[J,M])}if(M.global&&!--o.active){o.event.trigger("ajaxStop")}}return J},handleError:function(F,H,E,G){if(F.error){F.error(H,E,G)}if(F.global){o.event.trigger("ajaxError",[H,F,G])}},active:0,httpSuccess:function(F){try{return !F.status&&location.protocol=="file:"||(F.status>=200&&F.status<300)||F.status==304||F.status==1223}catch(E){}return false},httpNotModified:function(G,E){try{var H=G.getResponseHeader("Last-Modified");return G.status==304||H==o.lastModified[E]}catch(F){}return false},httpData:function(J,H,G){var F=J.getResponseHeader("content-type"),E=H=="xml"||!H&&F&&F.indexOf("xml")>=0,I=E?J.responseXML:J.responseText;if(E&&I.documentElement.tagName=="parsererror"){throw"parsererror"}if(G&&G.dataFilter){I=G.dataFilter(I,H)}if(typeof I==="string"){if(H=="script"){o.globalEval(I)}if(H=="json"){I=l["eval"]("("+I+")")}}return I},param:function(E){var G=[];function H(I,J){G[G.length]=encodeURIComponent(I)+"="+encodeURIComponent(J)}if(o.isArray(E)||E.jquery){o.each(E,function(){H(this.name,this.value)})}else{for(var F in E){if(o.isArray(E[F])){o.each(E[F],function(){H(F,this)})}else{H(F,o.isFunction(E[F])?E[F]():E[F])}}}return G.join("&").replace(/%20/g,"+")}});var m={},n,d=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];function t(F,E){var G={};o.each(d.concat.apply([],d.slice(0,E)),function(){G[this]=F});return G}o.fn.extend({show:function(J,L){if(J){return this.animate(t("show",3),J,L)}else{for(var H=0,F=this.length;H<F;H++){var E=o.data(this[H],"olddisplay");this[H].style.display=E||"";if(o.css(this[H],"display")==="none"){var G=this[H].tagName,K;if(m[G]){K=m[G]}else{var I=o("<"+G+" />").appendTo("body");K=I.css("display");if(K==="none"){K="block"}I.remove();m[G]=K}o.data(this[H],"olddisplay",K)}}for(var H=0,F=this.length;H<F;H++){this[H].style.display=o.data(this[H],"olddisplay")||""}return this}},hide:function(H,I){if(H){return this.animate(t("hide",3),H,I)}else{for(var G=0,F=this.length;G<F;G++){var E=o.data(this[G],"olddisplay");if(!E&&E!=="none"){o.data(this[G],"olddisplay",o.css(this[G],"display"))}}for(var G=0,F=this.length;G<F;G++){this[G].style.display="none"}return this}},_toggle:o.fn.toggle,toggle:function(G,F){var E=typeof G==="boolean";return o.isFunction(G)&&o.isFunction(F)?this._toggle.apply(this,arguments):G==null||E?this.each(function(){var H=E?G:o(this).is(":hidden");o(this)[H?"show":"hide"]()}):this.animate(t("toggle",3),G,F)},fadeTo:function(E,G,F){return this.animate({opacity:G},E,F)},animate:function(I,F,H,G){var E=o.speed(F,H,G);return this[E.queue===false?"each":"queue"](function(){var K=o.extend({},E),M,L=this.nodeType==1&&o(this).is(":hidden"),J=this;for(M in I){if(I[M]=="hide"&&L||I[M]=="show"&&!L){return K.complete.call(this)}if((M=="height"||M=="width")&&this.style){K.display=o.css(this,"display");K.overflow=this.style.overflow}}if(K.overflow!=null){this.style.overflow="hidden"}K.curAnim=o.extend({},I);o.each(I,function(O,S){var R=new o.fx(J,K,O);if(/toggle|show|hide/.test(S)){R[S=="toggle"?L?"show":"hide":S](I)}else{var Q=S.toString().match(/^([+-]=)?([\d+-.]+)(.*)$/),T=R.cur(true)||0;if(Q){var N=parseFloat(Q[2]),P=Q[3]||"px";if(P!="px"){J.style[O]=(N||1)+P;T=((N||1)/R.cur(true))*T;J.style[O]=T+P}if(Q[1]){N=((Q[1]=="-="?-1:1)*N)+T}R.custom(T,N,P)}else{R.custom(T,S,"")}}});return true})},stop:function(F,E){var G=o.timers;if(F){this.queue([])}this.each(function(){for(var H=G.length-1;H>=0;H--){if(G[H].elem==this){if(E){G[H](true)}G.splice(H,1)}}});if(!E){this.dequeue()}return this}});o.each({slideDown:t("show",1),slideUp:t("hide",1),slideToggle:t("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"}},function(E,F){o.fn[E]=function(G,H){return this.animate(F,G,H)}});o.extend({speed:function(G,H,F){var E=typeof G==="object"?G:{complete:F||!F&&H||o.isFunction(G)&&G,duration:G,easing:F&&H||H&&!o.isFunction(H)&&H};E.duration=o.fx.off?0:typeof E.duration==="number"?E.duration:o.fx.speeds[E.duration]||o.fx.speeds._default;E.old=E.complete;E.complete=function(){if(E.queue!==false){o(this).dequeue()}if(o.isFunction(E.old)){E.old.call(this)}};return E},easing:{linear:function(G,H,E,F){return E+F*G},swing:function(G,H,E,F){return((-Math.cos(G*Math.PI)/2)+0.5)*F+E}},timers:[],fx:function(F,E,G){this.options=E;this.elem=F;this.prop=G;if(!E.orig){E.orig={}}}});o.fx.prototype={update:function(){if(this.options.step){this.options.step.call(this.elem,this.now,this)}(o.fx.step[this.prop]||o.fx.step._default)(this);if((this.prop=="height"||this.prop=="width")&&this.elem.style){this.elem.style.display="block"}},cur:function(F){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null)){return this.elem[this.prop]}var E=parseFloat(o.css(this.elem,this.prop,F));return E&&E>-10000?E:parseFloat(o.curCSS(this.elem,this.prop))||0},custom:function(I,H,G){this.startTime=e();this.start=I;this.end=H;this.unit=G||this.unit||"px";this.now=this.start;this.pos=this.state=0;var E=this;function F(J){return E.step(J)}F.elem=this.elem;if(F()&&o.timers.push(F)&&!n){n=setInterval(function(){var K=o.timers;for(var J=0;J<K.length;J++){if(!K[J]()){K.splice(J--,1)}}if(!K.length){clearInterval(n);n=g}},13)}},show:function(){this.options.orig[this.prop]=o.attr(this.elem.style,this.prop);this.options.show=true;this.custom(this.prop=="width"||this.prop=="height"?1:0,this.cur());o(this.elem).show()},hide:function(){this.options.orig[this.prop]=o.attr(this.elem.style,this.prop);this.options.hide=true;this.custom(this.cur(),0)},step:function(H){var G=e();if(H||G>=this.options.duration+this.startTime){this.now=this.end;this.pos=this.state=1;this.update();this.options.curAnim[this.prop]=true;var E=true;for(var F in this.options.curAnim){if(this.options.curAnim[F]!==true){E=false}}if(E){if(this.options.display!=null){this.elem.style.overflow=this.options.overflow;this.elem.style.display=this.options.display;if(o.css(this.elem,"display")=="none"){this.elem.style.display="block"}}if(this.options.hide){o(this.elem).hide()}if(this.options.hide||this.options.show){for(var I in this.options.curAnim){o.attr(this.elem.style,I,this.options.orig[I])}}this.options.complete.call(this.elem)}return false}else{var J=G-this.startTime;this.state=J/this.options.duration;this.pos=o.easing[this.options.easing||(o.easing.swing?"swing":"linear")](this.state,J,0,1,this.options.duration);this.now=this.start+((this.end-this.start)*this.pos);this.update()}return true}};o.extend(o.fx,{speeds:{slow:600,fast:200,_default:400},step:{opacity:function(E){o.attr(E.elem.style,"opacity",E.now)},_default:function(E){if(E.elem.style&&E.elem.style[E.prop]!=null){E.elem.style[E.prop]=E.now+E.unit}else{E.elem[E.prop]=E.now}}}});if(document.documentElement.getBoundingClientRect){o.fn.offset=function(){if(!this[0]){return{top:0,left:0}}if(this[0]===this[0].ownerDocument.body){return o.offset.bodyOffset(this[0])}var G=this[0].getBoundingClientRect(),J=this[0].ownerDocument,F=J.body,E=J.documentElement,L=E.clientTop||F.clientTop||0,K=E.clientLeft||F.clientLeft||0,I=G.top+(self.pageYOffset||o.boxModel&&E.scrollTop||F.scrollTop)-L,H=G.left+(self.pageXOffset||o.boxModel&&E.scrollLeft||F.scrollLeft)-K;return{top:I,left:H}}}else{o.fn.offset=function(){if(!this[0]){return{top:0,left:0}}if(this[0]===this[0].ownerDocument.body){return o.offset.bodyOffset(this[0])}o.offset.initialized||o.offset.initialize();var J=this[0],G=J.offsetParent,F=J,O=J.ownerDocument,M,H=O.documentElement,K=O.body,L=O.defaultView,E=L.getComputedStyle(J,null),N=J.offsetTop,I=J.offsetLeft;while((J=J.parentNode)&&J!==K&&J!==H){M=L.getComputedStyle(J,null);N-=J.scrollTop,I-=J.scrollLeft;if(J===G){N+=J.offsetTop,I+=J.offsetLeft;if(o.offset.doesNotAddBorder&&!(o.offset.doesAddBorderForTableAndCells&&/^t(able|d|h)$/i.test(J.tagName))){N+=parseInt(M.borderTopWidth,10)||0,I+=parseInt(M.borderLeftWidth,10)||0}F=G,G=J.offsetParent}if(o.offset.subtractsBorderForOverflowNotVisible&&M.overflow!=="visible"){N+=parseInt(M.borderTopWidth,10)||0,I+=parseInt(M.borderLeftWidth,10)||0}E=M}if(E.position==="relative"||E.position==="static"){N+=K.offsetTop,I+=K.offsetLeft}if(E.position==="fixed"){N+=Math.max(H.scrollTop,K.scrollTop),I+=Math.max(H.scrollLeft,K.scrollLeft)}return{top:N,left:I}}}o.offset={initialize:function(){if(this.initialized){return}var L=document.body,F=document.createElement("div"),H,G,N,I,M,E,J=L.style.marginTop,K='<div style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;"><div></div></div><table style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;" cellpadding="0" cellspacing="0"><tr><td></td></tr></table>';M={position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"};for(E in M){F.style[E]=M[E]}F.innerHTML=K;L.insertBefore(F,L.firstChild);H=F.firstChild,G=H.firstChild,I=H.nextSibling.firstChild.firstChild;this.doesNotAddBorder=(G.offsetTop!==5);this.doesAddBorderForTableAndCells=(I.offsetTop===5);H.style.overflow="hidden",H.style.position="relative";this.subtractsBorderForOverflowNotVisible=(G.offsetTop===-5);L.style.marginTop="1px";this.doesNotIncludeMarginInBodyOffset=(L.offsetTop===0);L.style.marginTop=J;L.removeChild(F);this.initialized=true},bodyOffset:function(E){o.offset.initialized||o.offset.initialize();var G=E.offsetTop,F=E.offsetLeft;if(o.offset.doesNotIncludeMarginInBodyOffset){G+=parseInt(o.curCSS(E,"marginTop",true),10)||0,F+=parseInt(o.curCSS(E,"marginLeft",true),10)||0}return{top:G,left:F}}};o.fn.extend({position:function(){var I=0,H=0,F;if(this[0]){var G=this.offsetParent(),J=this.offset(),E=/^body|html$/i.test(G[0].tagName)?{top:0,left:0}:G.offset();J.top-=j(this,"marginTop");J.left-=j(this,"marginLeft");E.top+=j(G,"borderTopWidth");E.left+=j(G,"borderLeftWidth");F={top:J.top-E.top,left:J.left-E.left}}return F},offsetParent:function(){var E=this[0].offsetParent||document.body;while(E&&(!/^body|html$/i.test(E.tagName)&&o.css(E,"position")=="static")){E=E.offsetParent}return o(E)}});o.each(["Left","Top"],function(F,E){var G="scroll"+E;o.fn[G]=function(H){if(!this[0]){return null}return H!==g?this.each(function(){this==l||this==document?l.scrollTo(!F?H:o(l).scrollLeft(),F?H:o(l).scrollTop()):this[G]=H}):this[0]==l||this[0]==document?self[F?"pageYOffset":"pageXOffset"]||o.boxModel&&document.documentElement[G]||document.body[G]:this[0][G]}});o.each(["Height","Width"],function(I,G){var E=I?"Left":"Top",H=I?"Right":"Bottom",F=G.toLowerCase();o.fn["inner"+G]=function(){return this[0]?o.css(this[0],F,false,"padding"):null};o.fn["outer"+G]=function(K){return this[0]?o.css(this[0],F,false,K?"margin":"border"):null};var J=G.toLowerCase();o.fn[J]=function(K){return this[0]==l?document.compatMode=="CSS1Compat"&&document.documentElement["client"+G]||document.body["client"+G]:this[0]==document?Math.max(document.documentElement["client"+G],document.body["scroll"+G],document.documentElement["scroll"+G],document.body["offset"+G],document.documentElement["offset"+G]):K===g?(this.length?o.css(this[0],J):null):this.css(J,typeof K==="string"?K:K+"px")}})})();
/*
 * jQuery UI 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI
 */
jQuery.ui||(function(c){var i=c.fn.remove,d=c.browser.mozilla&&(parseFloat(c.browser.version)<1.9);c.ui={version:"1.7.2",plugin:{add:function(k,l,n){var m=c.ui[k].prototype;for(var j in n){m.plugins[j]=m.plugins[j]||[];m.plugins[j].push([l,n[j]])}},call:function(j,l,k){var n=j.plugins[l];if(!n||!j.element[0].parentNode){return}for(var m=0;m<n.length;m++){if(j.options[n[m][0]]){n[m][1].apply(j.element,k)}}}},contains:function(k,j){return document.compareDocumentPosition?k.compareDocumentPosition(j)&16:k!==j&&k.contains(j)},hasScroll:function(m,k){if(c(m).css("overflow")=="hidden"){return false}var j=(k&&k=="left")?"scrollLeft":"scrollTop",l=false;if(m[j]>0){return true}m[j]=1;l=(m[j]>0);m[j]=0;return l},isOverAxis:function(k,j,l){return(k>j)&&(k<(j+l))},isOver:function(o,k,n,m,j,l){return c.ui.isOverAxis(o,n,j)&&c.ui.isOverAxis(k,m,l)},keyCode:{BACKSPACE:8,CAPS_LOCK:20,COMMA:188,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38}};if(d){var f=c.attr,e=c.fn.removeAttr,h="http://www.w3.org/2005/07/aaa",a=/^aria-/,b=/^wairole:/;c.attr=function(k,j,l){var m=l!==undefined;return(j=="role"?(m?f.call(this,k,j,"wairole:"+l):(f.apply(this,arguments)||"").replace(b,"")):(a.test(j)?(m?k.setAttributeNS(h,j.replace(a,"aaa:"),l):f.call(this,k,j.replace(a,"aaa:"))):f.apply(this,arguments)))};c.fn.removeAttr=function(j){return(a.test(j)?this.each(function(){this.removeAttributeNS(h,j.replace(a,""))}):e.call(this,j))}}c.fn.extend({remove:function(){c("*",this).add(this).each(function(){c(this).triggerHandler("remove")});return i.apply(this,arguments)},enableSelection:function(){return this.attr("unselectable","off").css("MozUserSelect","").unbind("selectstart.ui")},disableSelection:function(){return this.attr("unselectable","on").css("MozUserSelect","none").bind("selectstart.ui",function(){return false})},scrollParent:function(){var j;if((c.browser.msie&&(/(static|relative)/).test(this.css("position")))||(/absolute/).test(this.css("position"))){j=this.parents().filter(function(){return(/(relative|absolute|fixed)/).test(c.curCSS(this,"position",1))&&(/(auto|scroll)/).test(c.curCSS(this,"overflow",1)+c.curCSS(this,"overflow-y",1)+c.curCSS(this,"overflow-x",1))}).eq(0)}else{j=this.parents().filter(function(){return(/(auto|scroll)/).test(c.curCSS(this,"overflow",1)+c.curCSS(this,"overflow-y",1)+c.curCSS(this,"overflow-x",1))}).eq(0)}return(/fixed/).test(this.css("position"))||!j.length?c(document):j}});c.extend(c.expr[":"],{data:function(l,k,j){return !!c.data(l,j[3])},focusable:function(k){var l=k.nodeName.toLowerCase(),j=c.attr(k,"tabindex");return(/input|select|textarea|button|object/.test(l)?!k.disabled:"a"==l||"area"==l?k.href||!isNaN(j):!isNaN(j))&&!c(k)["area"==l?"parents":"closest"](":hidden").length},tabbable:function(k){var j=c.attr(k,"tabindex");return(isNaN(j)||j>=0)&&c(k).is(":focusable")}});function g(m,n,o,l){function k(q){var p=c[m][n][q]||[];return(typeof p=="string"?p.split(/,?\s+/):p)}var j=k("getter");if(l.length==1&&typeof l[0]=="string"){j=j.concat(k("getterSetter"))}return(c.inArray(o,j)!=-1)}c.widget=function(k,j){var l=k.split(".")[0];k=k.split(".")[1];c.fn[k]=function(p){var n=(typeof p=="string"),o=Array.prototype.slice.call(arguments,1);if(n&&p.substring(0,1)=="_"){return this}if(n&&g(l,k,p,o)){var m=c.data(this[0],k);return(m?m[p].apply(m,o):undefined)}return this.each(function(){var q=c.data(this,k);(!q&&!n&&c.data(this,k,new c[l][k](this,p))._init());(q&&n&&c.isFunction(q[p])&&q[p].apply(q,o))})};c[l]=c[l]||{};c[l][k]=function(o,n){var m=this;this.namespace=l;this.widgetName=k;this.widgetEventPrefix=c[l][k].eventPrefix||k;this.widgetBaseClass=l+"-"+k;this.options=c.extend({},c.widget.defaults,c[l][k].defaults,c.metadata&&c.metadata.get(o)[k],n);this.element=c(o).bind("setData."+k,function(q,p,r){if(q.target==o){return m._setData(p,r)}}).bind("getData."+k,function(q,p){if(q.target==o){return m._getData(p)}}).bind("remove",function(){return m.destroy()})};c[l][k].prototype=c.extend({},c.widget.prototype,j);c[l][k].getterSetter="option"};c.widget.prototype={_init:function(){},destroy:function(){this.element.removeData(this.widgetName).removeClass(this.widgetBaseClass+"-disabled "+this.namespace+"-state-disabled").removeAttr("aria-disabled")},option:function(l,m){var k=l,j=this;if(typeof l=="string"){if(m===undefined){return this._getData(l)}k={};k[l]=m}c.each(k,function(n,o){j._setData(n,o)})},_getData:function(j){return this.options[j]},_setData:function(j,k){this.options[j]=k;if(j=="disabled"){this.element[k?"addClass":"removeClass"](this.widgetBaseClass+"-disabled "+this.namespace+"-state-disabled").attr("aria-disabled",k)}},enable:function(){this._setData("disabled",false)},disable:function(){this._setData("disabled",true)},_trigger:function(l,m,n){var p=this.options[l],j=(l==this.widgetEventPrefix?l:this.widgetEventPrefix+l);m=c.Event(m);m.type=j;if(m.originalEvent){for(var k=c.event.props.length,o;k;){o=c.event.props[--k];m[o]=m.originalEvent[o]}}this.element.trigger(m,n);return !(c.isFunction(p)&&p.call(this.element[0],m,n)===false||m.isDefaultPrevented())}};c.widget.defaults={disabled:false};c.ui.mouse={_mouseInit:function(){var j=this;this.element.bind("mousedown."+this.widgetName,function(k){return j._mouseDown(k)}).bind("click."+this.widgetName,function(k){if(j._preventClickEvent){j._preventClickEvent=false;k.stopImmediatePropagation();return false}});if(c.browser.msie){this._mouseUnselectable=this.element.attr("unselectable");this.element.attr("unselectable","on")}this.started=false},_mouseDestroy:function(){this.element.unbind("."+this.widgetName);(c.browser.msie&&this.element.attr("unselectable",this._mouseUnselectable))},_mouseDown:function(l){l.originalEvent=l.originalEvent||{};if(l.originalEvent.mouseHandled){return}(this._mouseStarted&&this._mouseUp(l));this._mouseDownEvent=l;var k=this,m=(l.which==1),j=(typeof this.options.cancel=="string"?c(l.target).parents().add(l.target).filter(this.options.cancel).length:false);if(!m||j||!this._mouseCapture(l)){return true}this.mouseDelayMet=!this.options.delay;if(!this.mouseDelayMet){this._mouseDelayTimer=setTimeout(function(){k.mouseDelayMet=true},this.options.delay)}if(this._mouseDistanceMet(l)&&this._mouseDelayMet(l)){this._mouseStarted=(this._mouseStart(l)!==false);if(!this._mouseStarted){l.preventDefault();return true}}this._mouseMoveDelegate=function(n){return k._mouseMove(n)};this._mouseUpDelegate=function(n){return k._mouseUp(n)};c(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);(c.browser.safari||l.preventDefault());l.originalEvent.mouseHandled=true;return true},_mouseMove:function(j){if(c.browser.msie&&!j.button){return this._mouseUp(j)}if(this._mouseStarted){this._mouseDrag(j);return j.preventDefault()}if(this._mouseDistanceMet(j)&&this._mouseDelayMet(j)){this._mouseStarted=(this._mouseStart(this._mouseDownEvent,j)!==false);(this._mouseStarted?this._mouseDrag(j):this._mouseUp(j))}return !this._mouseStarted},_mouseUp:function(j){c(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);if(this._mouseStarted){this._mouseStarted=false;this._preventClickEvent=(j.target==this._mouseDownEvent.target);this._mouseStop(j)}return false},_mouseDistanceMet:function(j){return(Math.max(Math.abs(this._mouseDownEvent.pageX-j.pageX),Math.abs(this._mouseDownEvent.pageY-j.pageY))>=this.options.distance)},_mouseDelayMet:function(j){return this.mouseDelayMet},_mouseStart:function(j){},_mouseDrag:function(j){},_mouseStop:function(j){},_mouseCapture:function(j){return true}};c.ui.mouse.defaults={cancel:null,distance:1,delay:0}})(jQuery);;/*
 * jQuery UI Draggable 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Draggables
 *
 * Depends:
 *	ui.core.js
 */
(function(a){a.widget("ui.draggable",a.extend({},a.ui.mouse,{_init:function(){if(this.options.helper=="original"&&!(/^(?:r|a|f)/).test(this.element.css("position"))){this.element[0].style.position="relative"}(this.options.addClasses&&this.element.addClass("ui-draggable"));(this.options.disabled&&this.element.addClass("ui-draggable-disabled"));this._mouseInit()},destroy:function(){if(!this.element.data("draggable")){return}this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");this._mouseDestroy()},_mouseCapture:function(b){var c=this.options;if(this.helper||c.disabled||a(b.target).is(".ui-resizable-handle")){return false}this.handle=this._getHandle(b);if(!this.handle){return false}return true},_mouseStart:function(b){var c=this.options;this.helper=this._createHelper(b);this._cacheHelperProportions();if(a.ui.ddmanager){a.ui.ddmanager.current=this}this._cacheMargins();this.cssPosition=this.helper.css("position");this.scrollParent=this.helper.scrollParent();this.offset=this.element.offset();this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};a.extend(this.offset,{click:{left:b.pageX-this.offset.left,top:b.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});this.originalPosition=this._generatePosition(b);this.originalPageX=b.pageX;this.originalPageY=b.pageY;if(c.cursorAt){this._adjustOffsetFromHelper(c.cursorAt)}if(c.containment){this._setContainment()}this._trigger("start",b);this._cacheHelperProportions();if(a.ui.ddmanager&&!c.dropBehaviour){a.ui.ddmanager.prepareOffsets(this,b)}this.helper.addClass("ui-draggable-dragging");this._mouseDrag(b,true);return true},_mouseDrag:function(b,d){this.position=this._generatePosition(b);this.positionAbs=this._convertPositionTo("absolute");if(!d){var c=this._uiHash();this._trigger("drag",b,c);this.position=c.position}if(!this.options.axis||this.options.axis!="y"){this.helper[0].style.left=this.position.left+"px"}if(!this.options.axis||this.options.axis!="x"){this.helper[0].style.top=this.position.top+"px"}if(a.ui.ddmanager){a.ui.ddmanager.drag(this,b)}return false},_mouseStop:function(c){var d=false;if(a.ui.ddmanager&&!this.options.dropBehaviour){d=a.ui.ddmanager.drop(this,c)}if(this.dropped){d=this.dropped;this.dropped=false}if((this.options.revert=="invalid"&&!d)||(this.options.revert=="valid"&&d)||this.options.revert===true||(a.isFunction(this.options.revert)&&this.options.revert.call(this.element,d))){var b=this;a(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){b._trigger("stop",c);b._clear()})}else{this._trigger("stop",c);this._clear()}return false},_getHandle:function(b){var c=!this.options.handle||!a(this.options.handle,this.element).length?true:false;a(this.options.handle,this.element).find("*").andSelf().each(function(){if(this==b.target){c=true}});return c},_createHelper:function(c){var d=this.options;var b=a.isFunction(d.helper)?a(d.helper.apply(this.element[0],[c])):(d.helper=="clone"?this.element.clone():this.element);if(!b.parents("body").length){b.appendTo((d.appendTo=="parent"?this.element[0].parentNode:d.appendTo))}if(b[0]!=this.element[0]&&!(/(fixed|absolute)/).test(b.css("position"))){b.css("position","absolute")}return b},_adjustOffsetFromHelper:function(b){if(b.left!=undefined){this.offset.click.left=b.left+this.margins.left}if(b.right!=undefined){this.offset.click.left=this.helperProportions.width-b.right+this.margins.left}if(b.top!=undefined){this.offset.click.top=b.top+this.margins.top}if(b.bottom!=undefined){this.offset.click.top=this.helperProportions.height-b.bottom+this.margins.top}},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var b=this.offsetParent.offset();if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0])){b.left+=this.scrollParent.scrollLeft();b.top+=this.scrollParent.scrollTop()}if((this.offsetParent[0]==document.body)||(this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&a.browser.msie)){b={top:0,left:0}}return{top:b.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:b.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var b=this.element.position();return{top:b.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:b.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}else{return{top:0,left:0}}},_cacheMargins:function(){this.margins={left:(parseInt(this.element.css("marginLeft"),10)||0),top:(parseInt(this.element.css("marginTop"),10)||0)}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e=this.options;if(e.containment=="parent"){e.containment=this.helper[0].parentNode}if(e.containment=="document"||e.containment=="window"){this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,a(e.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(a(e.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]}if(!(/^(document|window|parent)$/).test(e.containment)&&e.containment.constructor!=Array){var c=a(e.containment)[0];if(!c){return}var d=a(e.containment).offset();var b=(a(c).css("overflow")!="hidden");this.containment=[d.left+(parseInt(a(c).css("borderLeftWidth"),10)||0)+(parseInt(a(c).css("paddingLeft"),10)||0)-this.margins.left,d.top+(parseInt(a(c).css("borderTopWidth"),10)||0)+(parseInt(a(c).css("paddingTop"),10)||0)-this.margins.top,d.left+(b?Math.max(c.scrollWidth,c.offsetWidth):c.offsetWidth)-(parseInt(a(c).css("borderLeftWidth"),10)||0)-(parseInt(a(c).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,d.top+(b?Math.max(c.scrollHeight,c.offsetHeight):c.offsetHeight)-(parseInt(a(c).css("borderTopWidth"),10)||0)-(parseInt(a(c).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]}else{if(e.containment.constructor==Array){this.containment=e.containment}}},_convertPositionTo:function(f,h){if(!h){h=this.position}var c=f=="absolute"?1:-1;var e=this.options,b=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,g=(/(html|body)/i).test(b[0].tagName);return{top:(h.top+this.offset.relative.top*c+this.offset.parent.top*c-(a.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():(g?0:b.scrollTop()))*c)),left:(h.left+this.offset.relative.left*c+this.offset.parent.left*c-(a.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():g?0:b.scrollLeft())*c))}},_generatePosition:function(e){var h=this.options,b=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,i=(/(html|body)/i).test(b[0].tagName);if(this.cssPosition=="relative"&&!(this.scrollParent[0]!=document&&this.scrollParent[0]!=this.offsetParent[0])){this.offset.relative=this._getRelativeOffset()}var d=e.pageX;var c=e.pageY;if(this.originalPosition){if(this.containment){if(e.pageX-this.offset.click.left<this.containment[0]){d=this.containment[0]+this.offset.click.left}if(e.pageY-this.offset.click.top<this.containment[1]){c=this.containment[1]+this.offset.click.top}if(e.pageX-this.offset.click.left>this.containment[2]){d=this.containment[2]+this.offset.click.left}if(e.pageY-this.offset.click.top>this.containment[3]){c=this.containment[3]+this.offset.click.top}}if(h.grid){var g=this.originalPageY+Math.round((c-this.originalPageY)/h.grid[1])*h.grid[1];c=this.containment?(!(g-this.offset.click.top<this.containment[1]||g-this.offset.click.top>this.containment[3])?g:(!(g-this.offset.click.top<this.containment[1])?g-h.grid[1]:g+h.grid[1])):g;var f=this.originalPageX+Math.round((d-this.originalPageX)/h.grid[0])*h.grid[0];d=this.containment?(!(f-this.offset.click.left<this.containment[0]||f-this.offset.click.left>this.containment[2])?f:(!(f-this.offset.click.left<this.containment[0])?f-h.grid[0]:f+h.grid[0])):f}}return{top:(c-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(a.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():(i?0:b.scrollTop())))),left:(d-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(a.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():i?0:b.scrollLeft())))}},_clear:function(){this.helper.removeClass("ui-draggable-dragging");if(this.helper[0]!=this.element[0]&&!this.cancelHelperRemoval){this.helper.remove()}this.helper=null;this.cancelHelperRemoval=false},_trigger:function(b,c,d){d=d||this._uiHash();a.ui.plugin.call(this,b,[c,d]);if(b=="drag"){this.positionAbs=this._convertPositionTo("absolute")}return a.widget.prototype._trigger.call(this,b,c,d)},plugins:{},_uiHash:function(b){return{helper:this.helper,position:this.position,absolutePosition:this.positionAbs,offset:this.positionAbs}}}));a.extend(a.ui.draggable,{version:"1.7.2",eventPrefix:"drag",defaults:{addClasses:true,appendTo:"parent",axis:false,cancel:":input,option",connectToSortable:false,containment:false,cursor:"auto",cursorAt:false,delay:0,distance:1,grid:false,handle:false,helper:"original",iframeFix:false,opacity:false,refreshPositions:false,revert:false,revertDuration:500,scope:"default",scroll:true,scrollSensitivity:20,scrollSpeed:20,snap:false,snapMode:"both",snapTolerance:20,stack:false,zIndex:false}});a.ui.plugin.add("draggable","connectToSortable",{start:function(c,e){var d=a(this).data("draggable"),f=d.options,b=a.extend({},e,{item:d.element});d.sortables=[];a(f.connectToSortable).each(function(){var g=a.data(this,"sortable");if(g&&!g.options.disabled){d.sortables.push({instance:g,shouldRevert:g.options.revert});g._refreshItems();g._trigger("activate",c,b)}})},stop:function(c,e){var d=a(this).data("draggable"),b=a.extend({},e,{item:d.element});a.each(d.sortables,function(){if(this.instance.isOver){this.instance.isOver=0;d.cancelHelperRemoval=true;this.instance.cancelHelperRemoval=false;if(this.shouldRevert){this.instance.options.revert=true}this.instance._mouseStop(c);this.instance.options.helper=this.instance.options._helper;if(d.options.helper=="original"){this.instance.currentItem.css({top:"auto",left:"auto"})}}else{this.instance.cancelHelperRemoval=false;this.instance._trigger("deactivate",c,b)}})},drag:function(c,f){var e=a(this).data("draggable"),b=this;var d=function(i){var n=this.offset.click.top,m=this.offset.click.left;var g=this.positionAbs.top,k=this.positionAbs.left;var j=i.height,l=i.width;var p=i.top,h=i.left;return a.ui.isOver(g+n,k+m,p,h,j,l)};a.each(e.sortables,function(g){this.instance.positionAbs=e.positionAbs;this.instance.helperProportions=e.helperProportions;this.instance.offset.click=e.offset.click;if(this.instance._intersectsWith(this.instance.containerCache)){if(!this.instance.isOver){this.instance.isOver=1;this.instance.currentItem=a(b).clone().appendTo(this.instance.element).data("sortable-item",true);this.instance.options._helper=this.instance.options.helper;this.instance.options.helper=function(){return f.helper[0]};c.target=this.instance.currentItem[0];this.instance._mouseCapture(c,true);this.instance._mouseStart(c,true,true);this.instance.offset.click.top=e.offset.click.top;this.instance.offset.click.left=e.offset.click.left;this.instance.offset.parent.left-=e.offset.parent.left-this.instance.offset.parent.left;this.instance.offset.parent.top-=e.offset.parent.top-this.instance.offset.parent.top;e._trigger("toSortable",c);e.dropped=this.instance.element;e.currentItem=e.element;this.instance.fromOutside=e}if(this.instance.currentItem){this.instance._mouseDrag(c)}}else{if(this.instance.isOver){this.instance.isOver=0;this.instance.cancelHelperRemoval=true;this.instance.options.revert=false;this.instance._trigger("out",c,this.instance._uiHash(this.instance));this.instance._mouseStop(c,true);this.instance.options.helper=this.instance.options._helper;this.instance.currentItem.remove();if(this.instance.placeholder){this.instance.placeholder.remove()}e._trigger("fromSortable",c);e.dropped=false}}})}});a.ui.plugin.add("draggable","cursor",{start:function(c,d){var b=a("body"),e=a(this).data("draggable").options;if(b.css("cursor")){e._cursor=b.css("cursor")}b.css("cursor",e.cursor)},stop:function(b,c){var d=a(this).data("draggable").options;if(d._cursor){a("body").css("cursor",d._cursor)}}});a.ui.plugin.add("draggable","iframeFix",{start:function(b,c){var d=a(this).data("draggable").options;a(d.iframeFix===true?"iframe":d.iframeFix).each(function(){a('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1000}).css(a(this).offset()).appendTo("body")})},stop:function(b,c){a("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)})}});a.ui.plugin.add("draggable","opacity",{start:function(c,d){var b=a(d.helper),e=a(this).data("draggable").options;if(b.css("opacity")){e._opacity=b.css("opacity")}b.css("opacity",e.opacity)},stop:function(b,c){var d=a(this).data("draggable").options;if(d._opacity){a(c.helper).css("opacity",d._opacity)}}});a.ui.plugin.add("draggable","scroll",{start:function(c,d){var b=a(this).data("draggable");if(b.scrollParent[0]!=document&&b.scrollParent[0].tagName!="HTML"){b.overflowOffset=b.scrollParent.offset()}},drag:function(d,e){var c=a(this).data("draggable"),f=c.options,b=false;if(c.scrollParent[0]!=document&&c.scrollParent[0].tagName!="HTML"){if(!f.axis||f.axis!="x"){if((c.overflowOffset.top+c.scrollParent[0].offsetHeight)-d.pageY<f.scrollSensitivity){c.scrollParent[0].scrollTop=b=c.scrollParent[0].scrollTop+f.scrollSpeed}else{if(d.pageY-c.overflowOffset.top<f.scrollSensitivity){c.scrollParent[0].scrollTop=b=c.scrollParent[0].scrollTop-f.scrollSpeed}}}if(!f.axis||f.axis!="y"){if((c.overflowOffset.left+c.scrollParent[0].offsetWidth)-d.pageX<f.scrollSensitivity){c.scrollParent[0].scrollLeft=b=c.scrollParent[0].scrollLeft+f.scrollSpeed}else{if(d.pageX-c.overflowOffset.left<f.scrollSensitivity){c.scrollParent[0].scrollLeft=b=c.scrollParent[0].scrollLeft-f.scrollSpeed}}}}else{if(!f.axis||f.axis!="x"){if(d.pageY-a(document).scrollTop()<f.scrollSensitivity){b=a(document).scrollTop(a(document).scrollTop()-f.scrollSpeed)}else{if(a(window).height()-(d.pageY-a(document).scrollTop())<f.scrollSensitivity){b=a(document).scrollTop(a(document).scrollTop()+f.scrollSpeed)}}}if(!f.axis||f.axis!="y"){if(d.pageX-a(document).scrollLeft()<f.scrollSensitivity){b=a(document).scrollLeft(a(document).scrollLeft()-f.scrollSpeed)}else{if(a(window).width()-(d.pageX-a(document).scrollLeft())<f.scrollSensitivity){b=a(document).scrollLeft(a(document).scrollLeft()+f.scrollSpeed)}}}}if(b!==false&&a.ui.ddmanager&&!f.dropBehaviour){a.ui.ddmanager.prepareOffsets(c,d)}}});a.ui.plugin.add("draggable","snap",{start:function(c,d){var b=a(this).data("draggable"),e=b.options;b.snapElements=[];a(e.snap.constructor!=String?(e.snap.items||":data(draggable)"):e.snap).each(function(){var g=a(this);var f=g.offset();if(this!=b.element[0]){b.snapElements.push({item:this,width:g.outerWidth(),height:g.outerHeight(),top:f.top,left:f.left})}})},drag:function(u,p){var g=a(this).data("draggable"),q=g.options;var y=q.snapTolerance;var x=p.offset.left,w=x+g.helperProportions.width,f=p.offset.top,e=f+g.helperProportions.height;for(var v=g.snapElements.length-1;v>=0;v--){var s=g.snapElements[v].left,n=s+g.snapElements[v].width,m=g.snapElements[v].top,A=m+g.snapElements[v].height;if(!((s-y<x&&x<n+y&&m-y<f&&f<A+y)||(s-y<x&&x<n+y&&m-y<e&&e<A+y)||(s-y<w&&w<n+y&&m-y<f&&f<A+y)||(s-y<w&&w<n+y&&m-y<e&&e<A+y))){if(g.snapElements[v].snapping){(g.options.snap.release&&g.options.snap.release.call(g.element,u,a.extend(g._uiHash(),{snapItem:g.snapElements[v].item})))}g.snapElements[v].snapping=false;continue}if(q.snapMode!="inner"){var c=Math.abs(m-e)<=y;var z=Math.abs(A-f)<=y;var j=Math.abs(s-w)<=y;var k=Math.abs(n-x)<=y;if(c){p.position.top=g._convertPositionTo("relative",{top:m-g.helperProportions.height,left:0}).top-g.margins.top}if(z){p.position.top=g._convertPositionTo("relative",{top:A,left:0}).top-g.margins.top}if(j){p.position.left=g._convertPositionTo("relative",{top:0,left:s-g.helperProportions.width}).left-g.margins.left}if(k){p.position.left=g._convertPositionTo("relative",{top:0,left:n}).left-g.margins.left}}var h=(c||z||j||k);if(q.snapMode!="outer"){var c=Math.abs(m-f)<=y;var z=Math.abs(A-e)<=y;var j=Math.abs(s-x)<=y;var k=Math.abs(n-w)<=y;if(c){p.position.top=g._convertPositionTo("relative",{top:m,left:0}).top-g.margins.top}if(z){p.position.top=g._convertPositionTo("relative",{top:A-g.helperProportions.height,left:0}).top-g.margins.top}if(j){p.position.left=g._convertPositionTo("relative",{top:0,left:s}).left-g.margins.left}if(k){p.position.left=g._convertPositionTo("relative",{top:0,left:n-g.helperProportions.width}).left-g.margins.left}}if(!g.snapElements[v].snapping&&(c||z||j||k||h)){(g.options.snap.snap&&g.options.snap.snap.call(g.element,u,a.extend(g._uiHash(),{snapItem:g.snapElements[v].item})))}g.snapElements[v].snapping=(c||z||j||k||h)}}});a.ui.plugin.add("draggable","stack",{start:function(b,c){var e=a(this).data("draggable").options;var d=a.makeArray(a(e.stack.group)).sort(function(g,f){return(parseInt(a(g).css("zIndex"),10)||e.stack.min)-(parseInt(a(f).css("zIndex"),10)||e.stack.min)});a(d).each(function(f){this.style.zIndex=e.stack.min+f});this[0].style.zIndex=e.stack.min+d.length}});a.ui.plugin.add("draggable","zIndex",{start:function(c,d){var b=a(d.helper),e=a(this).data("draggable").options;if(b.css("zIndex")){e._zIndex=b.css("zIndex")}b.css("zIndex",e.zIndex)},stop:function(b,c){var d=a(this).data("draggable").options;if(d._zIndex){a(c.helper).css("zIndex",d._zIndex)}}})})(jQuery);;/*
 * jQuery UI Droppable 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Droppables
 *
 * Depends:
 *	ui.core.js
 *	ui.draggable.js
 */
(function(a){a.widget("ui.droppable",{_init:function(){var c=this.options,b=c.accept;this.isover=0;this.isout=1;this.options.accept=this.options.accept&&a.isFunction(this.options.accept)?this.options.accept:function(e){return e.is(b)};this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight};a.ui.ddmanager.droppables[this.options.scope]=a.ui.ddmanager.droppables[this.options.scope]||[];a.ui.ddmanager.droppables[this.options.scope].push(this);(this.options.addClasses&&this.element.addClass("ui-droppable"))},destroy:function(){var b=a.ui.ddmanager.droppables[this.options.scope];for(var c=0;c<b.length;c++){if(b[c]==this){b.splice(c,1)}}this.element.removeClass("ui-droppable ui-droppable-disabled").removeData("droppable").unbind(".droppable")},_setData:function(b,c){if(b=="accept"){this.options.accept=c&&a.isFunction(c)?c:function(e){return e.is(c)}}else{a.widget.prototype._setData.apply(this,arguments)}},_activate:function(c){var b=a.ui.ddmanager.current;if(this.options.activeClass){this.element.addClass(this.options.activeClass)}(b&&this._trigger("activate",c,this.ui(b)))},_deactivate:function(c){var b=a.ui.ddmanager.current;if(this.options.activeClass){this.element.removeClass(this.options.activeClass)}(b&&this._trigger("deactivate",c,this.ui(b)))},_over:function(c){var b=a.ui.ddmanager.current;if(!b||(b.currentItem||b.element)[0]==this.element[0]){return}if(this.options.accept.call(this.element[0],(b.currentItem||b.element))){if(this.options.hoverClass){this.element.addClass(this.options.hoverClass)}this._trigger("over",c,this.ui(b))}},_out:function(c){var b=a.ui.ddmanager.current;if(!b||(b.currentItem||b.element)[0]==this.element[0]){return}if(this.options.accept.call(this.element[0],(b.currentItem||b.element))){if(this.options.hoverClass){this.element.removeClass(this.options.hoverClass)}this._trigger("out",c,this.ui(b))}},_drop:function(c,d){var b=d||a.ui.ddmanager.current;if(!b||(b.currentItem||b.element)[0]==this.element[0]){return false}var e=false;this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function(){var f=a.data(this,"droppable");if(f.options.greedy&&a.ui.intersect(b,a.extend(f,{offset:f.element.offset()}),f.options.tolerance)){e=true;return false}});if(e){return false}if(this.options.accept.call(this.element[0],(b.currentItem||b.element))){if(this.options.activeClass){this.element.removeClass(this.options.activeClass)}if(this.options.hoverClass){this.element.removeClass(this.options.hoverClass)}this._trigger("drop",c,this.ui(b));return this.element}return false},ui:function(b){return{draggable:(b.currentItem||b.element),helper:b.helper,position:b.position,absolutePosition:b.positionAbs,offset:b.positionAbs}}});a.extend(a.ui.droppable,{version:"1.7.2",eventPrefix:"drop",defaults:{accept:"*",activeClass:false,addClasses:true,greedy:false,hoverClass:false,scope:"default",tolerance:"intersect"}});a.ui.intersect=function(q,j,o){if(!j.offset){return false}var e=(q.positionAbs||q.position.absolute).left,d=e+q.helperProportions.width,n=(q.positionAbs||q.position.absolute).top,m=n+q.helperProportions.height;var g=j.offset.left,c=g+j.proportions.width,p=j.offset.top,k=p+j.proportions.height;switch(o){case"fit":return(g<e&&d<c&&p<n&&m<k);break;case"intersect":return(g<e+(q.helperProportions.width/2)&&d-(q.helperProportions.width/2)<c&&p<n+(q.helperProportions.height/2)&&m-(q.helperProportions.height/2)<k);break;case"pointer":var h=((q.positionAbs||q.position.absolute).left+(q.clickOffset||q.offset.click).left),i=((q.positionAbs||q.position.absolute).top+(q.clickOffset||q.offset.click).top),f=a.ui.isOver(i,h,p,g,j.proportions.height,j.proportions.width);return f;break;case"touch":return((n>=p&&n<=k)||(m>=p&&m<=k)||(n<p&&m>k))&&((e>=g&&e<=c)||(d>=g&&d<=c)||(e<g&&d>c));break;default:return false;break}};a.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(e,g){var b=a.ui.ddmanager.droppables[e.options.scope];var f=g?g.type:null;var h=(e.currentItem||e.element).find(":data(droppable)").andSelf();droppablesLoop:for(var d=0;d<b.length;d++){if(b[d].options.disabled||(e&&!b[d].options.accept.call(b[d].element[0],(e.currentItem||e.element)))){continue}for(var c=0;c<h.length;c++){if(h[c]==b[d].element[0]){b[d].proportions.height=0;continue droppablesLoop}}b[d].visible=b[d].element.css("display")!="none";if(!b[d].visible){continue}b[d].offset=b[d].element.offset();b[d].proportions={width:b[d].element[0].offsetWidth,height:b[d].element[0].offsetHeight};if(f=="mousedown"){b[d]._activate.call(b[d],g)}}},drop:function(b,c){var d=false;a.each(a.ui.ddmanager.droppables[b.options.scope],function(){if(!this.options){return}if(!this.options.disabled&&this.visible&&a.ui.intersect(b,this,this.options.tolerance)){d=this._drop.call(this,c)}if(!this.options.disabled&&this.visible&&this.options.accept.call(this.element[0],(b.currentItem||b.element))){this.isout=1;this.isover=0;this._deactivate.call(this,c)}});return d},drag:function(b,c){if(b.options.refreshPositions){a.ui.ddmanager.prepareOffsets(b,c)}a.each(a.ui.ddmanager.droppables[b.options.scope],function(){if(this.options.disabled||this.greedyChild||!this.visible){return}var e=a.ui.intersect(b,this,this.options.tolerance);var g=!e&&this.isover==1?"isout":(e&&this.isover==0?"isover":null);if(!g){return}var f;if(this.options.greedy){var d=this.element.parents(":data(droppable):eq(0)");if(d.length){f=a.data(d[0],"droppable");f.greedyChild=(g=="isover"?1:0)}}if(f&&g=="isover"){f.isover=0;f.isout=1;f._out.call(f,c)}this[g]=1;this[g=="isout"?"isover":"isout"]=0;this[g=="isover"?"_over":"_out"].call(this,c);if(f&&g=="isout"){f.isout=0;f.isover=1;f._over.call(f,c)}})}}})(jQuery);;/*
 * jQuery UI Resizable 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Resizables
 *
 * Depends:
 *	ui.core.js
 */
(function(c){c.widget("ui.resizable",c.extend({},c.ui.mouse,{_init:function(){var e=this,j=this.options;this.element.addClass("ui-resizable");c.extend(this,{_aspectRatio:!!(j.aspectRatio),aspectRatio:j.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:j.helper||j.ghost||j.animate?j.helper||"ui-resizable-helper":null});if(this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)){if(/relative/.test(this.element.css("position"))&&c.browser.opera){this.element.css({position:"relative",top:"auto",left:"auto"})}this.element.wrap(c('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")}));this.element=this.element.parent().data("resizable",this.element.data("resizable"));this.elementIsWrapper=true;this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")});this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0});this.originalResizeStyle=this.originalElement.css("resize");this.originalElement.css("resize","none");this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"}));this.originalElement.css({margin:this.originalElement.css("margin")});this._proportionallyResize()}this.handles=j.handles||(!c(".ui-resizable-handle",this.element).length?"e,s,se":{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"});if(this.handles.constructor==String){if(this.handles=="all"){this.handles="n,e,s,w,se,sw,ne,nw"}var k=this.handles.split(",");this.handles={};for(var f=0;f<k.length;f++){var h=c.trim(k[f]),d="ui-resizable-"+h;var g=c('<div class="ui-resizable-handle '+d+'"></div>');if(/sw|se|ne|nw/.test(h)){g.css({zIndex:++j.zIndex})}if("se"==h){g.addClass("ui-icon ui-icon-gripsmall-diagonal-se")}this.handles[h]=".ui-resizable-"+h;this.element.append(g)}}this._renderAxis=function(p){p=p||this.element;for(var m in this.handles){if(this.handles[m].constructor==String){this.handles[m]=c(this.handles[m],this.element).show()}if(this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)){var n=c(this.handles[m],this.element),o=0;o=/sw|ne|nw|se|n|s/.test(m)?n.outerHeight():n.outerWidth();var l=["padding",/ne|nw|n/.test(m)?"Top":/se|sw|s/.test(m)?"Bottom":/^e$/.test(m)?"Right":"Left"].join("");p.css(l,o);this._proportionallyResize()}if(!c(this.handles[m]).length){continue}}};this._renderAxis(this.element);this._handles=c(".ui-resizable-handle",this.element).disableSelection();this._handles.mouseover(function(){if(!e.resizing){if(this.className){var i=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)}e.axis=i&&i[1]?i[1]:"se"}});if(j.autoHide){this._handles.hide();c(this.element).addClass("ui-resizable-autohide").hover(function(){c(this).removeClass("ui-resizable-autohide");e._handles.show()},function(){if(!e.resizing){c(this).addClass("ui-resizable-autohide");e._handles.hide()}})}this._mouseInit()},destroy:function(){this._mouseDestroy();var d=function(f){c(f).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};if(this.elementIsWrapper){d(this.element);var e=this.element;e.parent().append(this.originalElement.css({position:e.css("position"),width:e.outerWidth(),height:e.outerHeight(),top:e.css("top"),left:e.css("left")})).end().remove()}this.originalElement.css("resize",this.originalResizeStyle);d(this.originalElement)},_mouseCapture:function(e){var f=false;for(var d in this.handles){if(c(this.handles[d])[0]==e.target){f=true}}return this.options.disabled||!!f},_mouseStart:function(f){var i=this.options,e=this.element.position(),d=this.element;this.resizing=true;this.documentScroll={top:c(document).scrollTop(),left:c(document).scrollLeft()};if(d.is(".ui-draggable")||(/absolute/).test(d.css("position"))){d.css({position:"absolute",top:e.top,left:e.left})}if(c.browser.opera&&(/relative/).test(d.css("position"))){d.css({position:"relative",top:"auto",left:"auto"})}this._renderProxy();var j=b(this.helper.css("left")),g=b(this.helper.css("top"));if(i.containment){j+=c(i.containment).scrollLeft()||0;g+=c(i.containment).scrollTop()||0}this.offset=this.helper.offset();this.position={left:j,top:g};this.size=this._helper?{width:d.outerWidth(),height:d.outerHeight()}:{width:d.width(),height:d.height()};this.originalSize=this._helper?{width:d.outerWidth(),height:d.outerHeight()}:{width:d.width(),height:d.height()};this.originalPosition={left:j,top:g};this.sizeDiff={width:d.outerWidth()-d.width(),height:d.outerHeight()-d.height()};this.originalMousePosition={left:f.pageX,top:f.pageY};this.aspectRatio=(typeof i.aspectRatio=="number")?i.aspectRatio:((this.originalSize.width/this.originalSize.height)||1);var h=c(".ui-resizable-"+this.axis).css("cursor");c("body").css("cursor",h=="auto"?this.axis+"-resize":h);d.addClass("ui-resizable-resizing");this._propagate("start",f);return true},_mouseDrag:function(d){var g=this.helper,f=this.options,l={},p=this,i=this.originalMousePosition,m=this.axis;var q=(d.pageX-i.left)||0,n=(d.pageY-i.top)||0;var h=this._change[m];if(!h){return false}var k=h.apply(this,[d,q,n]),j=c.browser.msie&&c.browser.version<7,e=this.sizeDiff;if(this._aspectRatio||d.shiftKey){k=this._updateRatio(k,d)}k=this._respectSize(k,d);this._propagate("resize",d);g.css({top:this.position.top+"px",left:this.position.left+"px",width:this.size.width+"px",height:this.size.height+"px"});if(!this._helper&&this._proportionallyResizeElements.length){this._proportionallyResize()}this._updateCache(k);this._trigger("resize",d,this.ui());return false},_mouseStop:function(g){this.resizing=false;var h=this.options,l=this;if(this._helper){var f=this._proportionallyResizeElements,d=f.length&&(/textarea/i).test(f[0].nodeName),e=d&&c.ui.hasScroll(f[0],"left")?0:l.sizeDiff.height,j=d?0:l.sizeDiff.width;var m={width:(l.size.width-j),height:(l.size.height-e)},i=(parseInt(l.element.css("left"),10)+(l.position.left-l.originalPosition.left))||null,k=(parseInt(l.element.css("top"),10)+(l.position.top-l.originalPosition.top))||null;if(!h.animate){this.element.css(c.extend(m,{top:k,left:i}))}l.helper.height(l.size.height);l.helper.width(l.size.width);if(this._helper&&!h.animate){this._proportionallyResize()}}c("body").css("cursor","auto");this.element.removeClass("ui-resizable-resizing");this._propagate("stop",g);if(this._helper){this.helper.remove()}return false},_updateCache:function(d){var e=this.options;this.offset=this.helper.offset();if(a(d.left)){this.position.left=d.left}if(a(d.top)){this.position.top=d.top}if(a(d.height)){this.size.height=d.height}if(a(d.width)){this.size.width=d.width}},_updateRatio:function(g,f){var h=this.options,i=this.position,e=this.size,d=this.axis;if(g.height){g.width=(e.height*this.aspectRatio)}else{if(g.width){g.height=(e.width/this.aspectRatio)}}if(d=="sw"){g.left=i.left+(e.width-g.width);g.top=null}if(d=="nw"){g.top=i.top+(e.height-g.height);g.left=i.left+(e.width-g.width)}return g},_respectSize:function(k,f){var i=this.helper,h=this.options,q=this._aspectRatio||f.shiftKey,p=this.axis,s=a(k.width)&&h.maxWidth&&(h.maxWidth<k.width),l=a(k.height)&&h.maxHeight&&(h.maxHeight<k.height),g=a(k.width)&&h.minWidth&&(h.minWidth>k.width),r=a(k.height)&&h.minHeight&&(h.minHeight>k.height);if(g){k.width=h.minWidth}if(r){k.height=h.minHeight}if(s){k.width=h.maxWidth}if(l){k.height=h.maxHeight}var e=this.originalPosition.left+this.originalSize.width,n=this.position.top+this.size.height;var j=/sw|nw|w/.test(p),d=/nw|ne|n/.test(p);if(g&&j){k.left=e-h.minWidth}if(s&&j){k.left=e-h.maxWidth}if(r&&d){k.top=n-h.minHeight}if(l&&d){k.top=n-h.maxHeight}var m=!k.width&&!k.height;if(m&&!k.left&&k.top){k.top=null}else{if(m&&!k.top&&k.left){k.left=null}}return k},_proportionallyResize:function(){var j=this.options;if(!this._proportionallyResizeElements.length){return}var f=this.helper||this.element;for(var e=0;e<this._proportionallyResizeElements.length;e++){var g=this._proportionallyResizeElements[e];if(!this.borderDif){var d=[g.css("borderTopWidth"),g.css("borderRightWidth"),g.css("borderBottomWidth"),g.css("borderLeftWidth")],h=[g.css("paddingTop"),g.css("paddingRight"),g.css("paddingBottom"),g.css("paddingLeft")];this.borderDif=c.map(d,function(k,m){var l=parseInt(k,10)||0,n=parseInt(h[m],10)||0;return l+n})}if(c.browser.msie&&!(!(c(f).is(":hidden")||c(f).parents(":hidden").length))){continue}g.css({height:(f.height()-this.borderDif[0]-this.borderDif[2])||0,width:(f.width()-this.borderDif[1]-this.borderDif[3])||0})}},_renderProxy:function(){var e=this.element,h=this.options;this.elementOffset=e.offset();if(this._helper){this.helper=this.helper||c('<div style="overflow:hidden;"></div>');var d=c.browser.msie&&c.browser.version<7,f=(d?1:0),g=(d?2:-1);this.helper.addClass(this._helper).css({width:this.element.outerWidth()+g,height:this.element.outerHeight()+g,position:"absolute",left:this.elementOffset.left-f+"px",top:this.elementOffset.top-f+"px",zIndex:++h.zIndex});this.helper.appendTo("body").disableSelection()}else{this.helper=this.element}},_change:{e:function(f,e,d){return{width:this.originalSize.width+e}},w:function(g,e,d){var i=this.options,f=this.originalSize,h=this.originalPosition;return{left:h.left+e,width:f.width-e}},n:function(g,e,d){var i=this.options,f=this.originalSize,h=this.originalPosition;return{top:h.top+d,height:f.height-d}},s:function(f,e,d){return{height:this.originalSize.height+d}},se:function(f,e,d){return c.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[f,e,d]))},sw:function(f,e,d){return c.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[f,e,d]))},ne:function(f,e,d){return c.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[f,e,d]))},nw:function(f,e,d){return c.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[f,e,d]))}},_propagate:function(e,d){c.ui.plugin.call(this,e,[d,this.ui()]);(e!="resize"&&this._trigger(e,d,this.ui()))},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}));c.extend(c.ui.resizable,{version:"1.7.2",eventPrefix:"resize",defaults:{alsoResize:false,animate:false,animateDuration:"slow",animateEasing:"swing",aspectRatio:false,autoHide:false,cancel:":input,option",containment:false,delay:0,distance:1,ghost:false,grid:false,handles:"e,s,se",helper:false,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:1000}});c.ui.plugin.add("resizable","alsoResize",{start:function(e,f){var d=c(this).data("resizable"),g=d.options;_store=function(h){c(h).each(function(){c(this).data("resizable-alsoresize",{width:parseInt(c(this).width(),10),height:parseInt(c(this).height(),10),left:parseInt(c(this).css("left"),10),top:parseInt(c(this).css("top"),10)})})};if(typeof(g.alsoResize)=="object"&&!g.alsoResize.parentNode){if(g.alsoResize.length){g.alsoResize=g.alsoResize[0];_store(g.alsoResize)}else{c.each(g.alsoResize,function(h,i){_store(h)})}}else{_store(g.alsoResize)}},resize:function(f,h){var e=c(this).data("resizable"),i=e.options,g=e.originalSize,k=e.originalPosition;var j={height:(e.size.height-g.height)||0,width:(e.size.width-g.width)||0,top:(e.position.top-k.top)||0,left:(e.position.left-k.left)||0},d=function(l,m){c(l).each(function(){var p=c(this),q=c(this).data("resizable-alsoresize"),o={},n=m&&m.length?m:["width","height","top","left"];c.each(n||["width","height","top","left"],function(r,t){var s=(q[t]||0)+(j[t]||0);if(s&&s>=0){o[t]=s||null}});if(/relative/.test(p.css("position"))&&c.browser.opera){e._revertToRelativePosition=true;p.css({position:"absolute",top:"auto",left:"auto"})}p.css(o)})};if(typeof(i.alsoResize)=="object"&&!i.alsoResize.nodeType){c.each(i.alsoResize,function(l,m){d(l,m)})}else{d(i.alsoResize)}},stop:function(e,f){var d=c(this).data("resizable");if(d._revertToRelativePosition&&c.browser.opera){d._revertToRelativePosition=false;el.css({position:"relative"})}c(this).removeData("resizable-alsoresize-start")}});c.ui.plugin.add("resizable","animate",{stop:function(h,m){var n=c(this).data("resizable"),i=n.options;var g=n._proportionallyResizeElements,d=g.length&&(/textarea/i).test(g[0].nodeName),e=d&&c.ui.hasScroll(g[0],"left")?0:n.sizeDiff.height,k=d?0:n.sizeDiff.width;var f={width:(n.size.width-k),height:(n.size.height-e)},j=(parseInt(n.element.css("left"),10)+(n.position.left-n.originalPosition.left))||null,l=(parseInt(n.element.css("top"),10)+(n.position.top-n.originalPosition.top))||null;n.element.animate(c.extend(f,l&&j?{top:l,left:j}:{}),{duration:i.animateDuration,easing:i.animateEasing,step:function(){var o={width:parseInt(n.element.css("width"),10),height:parseInt(n.element.css("height"),10),top:parseInt(n.element.css("top"),10),left:parseInt(n.element.css("left"),10)};if(g&&g.length){c(g[0]).css({width:o.width,height:o.height})}n._updateCache(o);n._propagate("resize",h)}})}});c.ui.plugin.add("resizable","containment",{start:function(e,q){var s=c(this).data("resizable"),i=s.options,k=s.element;var f=i.containment,j=(f instanceof c)?f.get(0):(/parent/.test(f))?k.parent().get(0):f;if(!j){return}s.containerElement=c(j);if(/document/.test(f)||f==document){s.containerOffset={left:0,top:0};s.containerPosition={left:0,top:0};s.parentData={element:c(document),left:0,top:0,width:c(document).width(),height:c(document).height()||document.body.parentNode.scrollHeight}}else{var m=c(j),h=[];c(["Top","Right","Left","Bottom"]).each(function(p,o){h[p]=b(m.css("padding"+o))});s.containerOffset=m.offset();s.containerPosition=m.position();s.containerSize={height:(m.innerHeight()-h[3]),width:(m.innerWidth()-h[1])};var n=s.containerOffset,d=s.containerSize.height,l=s.containerSize.width,g=(c.ui.hasScroll(j,"left")?j.scrollWidth:l),r=(c.ui.hasScroll(j)?j.scrollHeight:d);s.parentData={element:j,left:n.left,top:n.top,width:g,height:r}}},resize:function(f,p){var s=c(this).data("resizable"),h=s.options,e=s.containerSize,n=s.containerOffset,l=s.size,m=s.position,q=s._aspectRatio||f.shiftKey,d={top:0,left:0},g=s.containerElement;if(g[0]!=document&&(/static/).test(g.css("position"))){d=n}if(m.left<(s._helper?n.left:0)){s.size.width=s.size.width+(s._helper?(s.position.left-n.left):(s.position.left-d.left));if(q){s.size.height=s.size.width/h.aspectRatio}s.position.left=h.helper?n.left:0}if(m.top<(s._helper?n.top:0)){s.size.height=s.size.height+(s._helper?(s.position.top-n.top):s.position.top);if(q){s.size.width=s.size.height*h.aspectRatio}s.position.top=s._helper?n.top:0}s.offset.left=s.parentData.left+s.position.left;s.offset.top=s.parentData.top+s.position.top;var k=Math.abs((s._helper?s.offset.left-d.left:(s.offset.left-d.left))+s.sizeDiff.width),r=Math.abs((s._helper?s.offset.top-d.top:(s.offset.top-n.top))+s.sizeDiff.height);var j=s.containerElement.get(0)==s.element.parent().get(0),i=/relative|absolute/.test(s.containerElement.css("position"));if(j&&i){k-=s.parentData.left}if(k+s.size.width>=s.parentData.width){s.size.width=s.parentData.width-k;if(q){s.size.height=s.size.width/s.aspectRatio}}if(r+s.size.height>=s.parentData.height){s.size.height=s.parentData.height-r;if(q){s.size.width=s.size.height*s.aspectRatio}}},stop:function(e,m){var p=c(this).data("resizable"),f=p.options,k=p.position,l=p.containerOffset,d=p.containerPosition,g=p.containerElement;var i=c(p.helper),q=i.offset(),n=i.outerWidth()-p.sizeDiff.width,j=i.outerHeight()-p.sizeDiff.height;if(p._helper&&!f.animate&&(/relative/).test(g.css("position"))){c(this).css({left:q.left-d.left-l.left,width:n,height:j})}if(p._helper&&!f.animate&&(/static/).test(g.css("position"))){c(this).css({left:q.left-d.left-l.left,width:n,height:j})}}});c.ui.plugin.add("resizable","ghost",{start:function(f,g){var d=c(this).data("resizable"),h=d.options,e=d.size;d.ghost=d.originalElement.clone();d.ghost.css({opacity:0.25,display:"block",position:"relative",height:e.height,width:e.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass(typeof h.ghost=="string"?h.ghost:"");d.ghost.appendTo(d.helper)},resize:function(e,f){var d=c(this).data("resizable"),g=d.options;if(d.ghost){d.ghost.css({position:"relative",height:d.size.height,width:d.size.width})}},stop:function(e,f){var d=c(this).data("resizable"),g=d.options;if(d.ghost&&d.helper){d.helper.get(0).removeChild(d.ghost.get(0))}}});c.ui.plugin.add("resizable","grid",{resize:function(d,l){var n=c(this).data("resizable"),g=n.options,j=n.size,h=n.originalSize,i=n.originalPosition,m=n.axis,k=g._aspectRatio||d.shiftKey;g.grid=typeof g.grid=="number"?[g.grid,g.grid]:g.grid;var f=Math.round((j.width-h.width)/(g.grid[0]||1))*(g.grid[0]||1),e=Math.round((j.height-h.height)/(g.grid[1]||1))*(g.grid[1]||1);if(/^(se|s|e)$/.test(m)){n.size.width=h.width+f;n.size.height=h.height+e}else{if(/^(ne)$/.test(m)){n.size.width=h.width+f;n.size.height=h.height+e;n.position.top=i.top-e}else{if(/^(sw)$/.test(m)){n.size.width=h.width+f;n.size.height=h.height+e;n.position.left=i.left-f}else{n.size.width=h.width+f;n.size.height=h.height+e;n.position.top=i.top-e;n.position.left=i.left-f}}}}});var b=function(d){return parseInt(d,10)||0};var a=function(d){return !isNaN(parseInt(d,10))}})(jQuery);;/*
 * jQuery UI Selectable 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Selectables
 *
 * Depends:
 *	ui.core.js
 */
(function(a){a.widget("ui.selectable",a.extend({},a.ui.mouse,{_init:function(){var b=this;this.element.addClass("ui-selectable");this.dragged=false;var c;this.refresh=function(){c=a(b.options.filter,b.element[0]);c.each(function(){var d=a(this);var e=d.offset();a.data(this,"selectable-item",{element:this,$element:d,left:e.left,top:e.top,right:e.left+d.outerWidth(),bottom:e.top+d.outerHeight(),startselected:false,selected:d.hasClass("ui-selected"),selecting:d.hasClass("ui-selecting"),unselecting:d.hasClass("ui-unselecting")})})};this.refresh();this.selectees=c.addClass("ui-selectee");this._mouseInit();this.helper=a(document.createElement("div")).css({border:"1px dotted black"}).addClass("ui-selectable-helper")},destroy:function(){this.element.removeClass("ui-selectable ui-selectable-disabled").removeData("selectable").unbind(".selectable");this._mouseDestroy()},_mouseStart:function(d){var b=this;this.opos=[d.pageX,d.pageY];if(this.options.disabled){return}var c=this.options;this.selectees=a(c.filter,this.element[0]);this._trigger("start",d);a(c.appendTo).append(this.helper);this.helper.css({"z-index":100,position:"absolute",left:d.clientX,top:d.clientY,width:0,height:0});if(c.autoRefresh){this.refresh()}this.selectees.filter(".ui-selected").each(function(){var e=a.data(this,"selectable-item");e.startselected=true;if(!d.metaKey){e.$element.removeClass("ui-selected");e.selected=false;e.$element.addClass("ui-unselecting");e.unselecting=true;b._trigger("unselecting",d,{unselecting:e.element})}});a(d.target).parents().andSelf().each(function(){var e=a.data(this,"selectable-item");if(e){e.$element.removeClass("ui-unselecting").addClass("ui-selecting");e.unselecting=false;e.selecting=true;e.selected=true;b._trigger("selecting",d,{selecting:e.element});return false}})},_mouseDrag:function(i){var c=this;this.dragged=true;if(this.options.disabled){return}var e=this.options;var d=this.opos[0],h=this.opos[1],b=i.pageX,g=i.pageY;if(d>b){var f=b;b=d;d=f}if(h>g){var f=g;g=h;h=f}this.helper.css({left:d,top:h,width:b-d,height:g-h});this.selectees.each(function(){var j=a.data(this,"selectable-item");if(!j||j.element==c.element[0]){return}var k=false;if(e.tolerance=="touch"){k=(!(j.left>b||j.right<d||j.top>g||j.bottom<h))}else{if(e.tolerance=="fit"){k=(j.left>d&&j.right<b&&j.top>h&&j.bottom<g)}}if(k){if(j.selected){j.$element.removeClass("ui-selected");j.selected=false}if(j.unselecting){j.$element.removeClass("ui-unselecting");j.unselecting=false}if(!j.selecting){j.$element.addClass("ui-selecting");j.selecting=true;c._trigger("selecting",i,{selecting:j.element})}}else{if(j.selecting){if(i.metaKey&&j.startselected){j.$element.removeClass("ui-selecting");j.selecting=false;j.$element.addClass("ui-selected");j.selected=true}else{j.$element.removeClass("ui-selecting");j.selecting=false;if(j.startselected){j.$element.addClass("ui-unselecting");j.unselecting=true}c._trigger("unselecting",i,{unselecting:j.element})}}if(j.selected){if(!i.metaKey&&!j.startselected){j.$element.removeClass("ui-selected");j.selected=false;j.$element.addClass("ui-unselecting");j.unselecting=true;c._trigger("unselecting",i,{unselecting:j.element})}}}});return false},_mouseStop:function(d){var b=this;this.dragged=false;var c=this.options;a(".ui-unselecting",this.element[0]).each(function(){var e=a.data(this,"selectable-item");e.$element.removeClass("ui-unselecting");e.unselecting=false;e.startselected=false;b._trigger("unselected",d,{unselected:e.element})});a(".ui-selecting",this.element[0]).each(function(){var e=a.data(this,"selectable-item");e.$element.removeClass("ui-selecting").addClass("ui-selected");e.selecting=false;e.selected=true;e.startselected=true;b._trigger("selected",d,{selected:e.element})});this._trigger("stop",d);this.helper.remove();return false}}));a.extend(a.ui.selectable,{version:"1.7.2",defaults:{appendTo:"body",autoRefresh:true,cancel:":input,option",delay:0,distance:0,filter:"*",tolerance:"touch"}})})(jQuery);;/*
 * jQuery UI Sortable 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Sortables
 *
 * Depends:
 *	ui.core.js
 */
(function(a){a.widget("ui.sortable",a.extend({},a.ui.mouse,{_init:function(){var b=this.options;this.containerCache={};this.element.addClass("ui-sortable");this.refresh();this.floating=this.items.length?(/left|right/).test(this.items[0].item.css("float")):false;this.offset=this.element.offset();this._mouseInit()},destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled").removeData("sortable").unbind(".sortable");this._mouseDestroy();for(var b=this.items.length-1;b>=0;b--){this.items[b].item.removeData("sortable-item")}},_mouseCapture:function(e,f){if(this.reverting){return false}if(this.options.disabled||this.options.type=="static"){return false}this._refreshItems(e);var d=null,c=this,b=a(e.target).parents().each(function(){if(a.data(this,"sortable-item")==c){d=a(this);return false}});if(a.data(e.target,"sortable-item")==c){d=a(e.target)}if(!d){return false}if(this.options.handle&&!f){var g=false;a(this.options.handle,d).find("*").andSelf().each(function(){if(this==e.target){g=true}});if(!g){return false}}this.currentItem=d;this._removeCurrentsFromItems();return true},_mouseStart:function(e,f,b){var g=this.options,c=this;this.currentContainer=this;this.refreshPositions();this.helper=this._createHelper(e);this._cacheHelperProportions();this._cacheMargins();this.scrollParent=this.helper.scrollParent();this.offset=this.currentItem.offset();this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};this.helper.css("position","absolute");this.cssPosition=this.helper.css("position");a.extend(this.offset,{click:{left:e.pageX-this.offset.left,top:e.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});this.originalPosition=this._generatePosition(e);this.originalPageX=e.pageX;this.originalPageY=e.pageY;if(g.cursorAt){this._adjustOffsetFromHelper(g.cursorAt)}this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]};if(this.helper[0]!=this.currentItem[0]){this.currentItem.hide()}this._createPlaceholder();if(g.containment){this._setContainment()}if(g.cursor){if(a("body").css("cursor")){this._storedCursor=a("body").css("cursor")}a("body").css("cursor",g.cursor)}if(g.opacity){if(this.helper.css("opacity")){this._storedOpacity=this.helper.css("opacity")}this.helper.css("opacity",g.opacity)}if(g.zIndex){if(this.helper.css("zIndex")){this._storedZIndex=this.helper.css("zIndex")}this.helper.css("zIndex",g.zIndex)}if(this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"){this.overflowOffset=this.scrollParent.offset()}this._trigger("start",e,this._uiHash());if(!this._preserveHelperProportions){this._cacheHelperProportions()}if(!b){for(var d=this.containers.length-1;d>=0;d--){this.containers[d]._trigger("activate",e,c._uiHash(this))}}if(a.ui.ddmanager){a.ui.ddmanager.current=this}if(a.ui.ddmanager&&!g.dropBehaviour){a.ui.ddmanager.prepareOffsets(this,e)}this.dragging=true;this.helper.addClass("ui-sortable-helper");this._mouseDrag(e);return true},_mouseDrag:function(f){this.position=this._generatePosition(f);this.positionAbs=this._convertPositionTo("absolute");if(!this.lastPositionAbs){this.lastPositionAbs=this.positionAbs}if(this.options.scroll){var g=this.options,b=false;if(this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"){if((this.overflowOffset.top+this.scrollParent[0].offsetHeight)-f.pageY<g.scrollSensitivity){this.scrollParent[0].scrollTop=b=this.scrollParent[0].scrollTop+g.scrollSpeed}else{if(f.pageY-this.overflowOffset.top<g.scrollSensitivity){this.scrollParent[0].scrollTop=b=this.scrollParent[0].scrollTop-g.scrollSpeed}}if((this.overflowOffset.left+this.scrollParent[0].offsetWidth)-f.pageX<g.scrollSensitivity){this.scrollParent[0].scrollLeft=b=this.scrollParent[0].scrollLeft+g.scrollSpeed}else{if(f.pageX-this.overflowOffset.left<g.scrollSensitivity){this.scrollParent[0].scrollLeft=b=this.scrollParent[0].scrollLeft-g.scrollSpeed}}}else{if(f.pageY-a(document).scrollTop()<g.scrollSensitivity){b=a(document).scrollTop(a(document).scrollTop()-g.scrollSpeed)}else{if(a(window).height()-(f.pageY-a(document).scrollTop())<g.scrollSensitivity){b=a(document).scrollTop(a(document).scrollTop()+g.scrollSpeed)}}if(f.pageX-a(document).scrollLeft()<g.scrollSensitivity){b=a(document).scrollLeft(a(document).scrollLeft()-g.scrollSpeed)}else{if(a(window).width()-(f.pageX-a(document).scrollLeft())<g.scrollSensitivity){b=a(document).scrollLeft(a(document).scrollLeft()+g.scrollSpeed)}}}if(b!==false&&a.ui.ddmanager&&!g.dropBehaviour){a.ui.ddmanager.prepareOffsets(this,f)}}this.positionAbs=this._convertPositionTo("absolute");if(!this.options.axis||this.options.axis!="y"){this.helper[0].style.left=this.position.left+"px"}if(!this.options.axis||this.options.axis!="x"){this.helper[0].style.top=this.position.top+"px"}for(var d=this.items.length-1;d>=0;d--){var e=this.items[d],c=e.item[0],h=this._intersectsWithPointer(e);if(!h){continue}if(c!=this.currentItem[0]&&this.placeholder[h==1?"next":"prev"]()[0]!=c&&!a.ui.contains(this.placeholder[0],c)&&(this.options.type=="semi-dynamic"?!a.ui.contains(this.element[0],c):true)){this.direction=h==1?"down":"up";if(this.options.tolerance=="pointer"||this._intersectsWithSides(e)){this._rearrange(f,e)}else{break}this._trigger("change",f,this._uiHash());break}}this._contactContainers(f);if(a.ui.ddmanager){a.ui.ddmanager.drag(this,f)}this._trigger("sort",f,this._uiHash());this.lastPositionAbs=this.positionAbs;return false},_mouseStop:function(c,d){if(!c){return}if(a.ui.ddmanager&&!this.options.dropBehaviour){a.ui.ddmanager.drop(this,c)}if(this.options.revert){var b=this;var e=b.placeholder.offset();b.reverting=true;a(this.helper).animate({left:e.left-this.offset.parent.left-b.margins.left+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollLeft),top:e.top-this.offset.parent.top-b.margins.top+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollTop)},parseInt(this.options.revert,10)||500,function(){b._clear(c)})}else{this._clear(c,d)}return false},cancel:function(){var b=this;if(this.dragging){this._mouseUp();if(this.options.helper=="original"){this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else{this.currentItem.show()}for(var c=this.containers.length-1;c>=0;c--){this.containers[c]._trigger("deactivate",null,b._uiHash(this));if(this.containers[c].containerCache.over){this.containers[c]._trigger("out",null,b._uiHash(this));this.containers[c].containerCache.over=0}}}if(this.placeholder[0].parentNode){this.placeholder[0].parentNode.removeChild(this.placeholder[0])}if(this.options.helper!="original"&&this.helper&&this.helper[0].parentNode){this.helper.remove()}a.extend(this,{helper:null,dragging:false,reverting:false,_noFinalSort:null});if(this.domPosition.prev){a(this.domPosition.prev).after(this.currentItem)}else{a(this.domPosition.parent).prepend(this.currentItem)}return true},serialize:function(d){var b=this._getItemsAsjQuery(d&&d.connected);var c=[];d=d||{};a(b).each(function(){var e=(a(d.item||this).attr(d.attribute||"id")||"").match(d.expression||(/(.+)[-=_](.+)/));if(e){c.push((d.key||e[1]+"[]")+"="+(d.key&&d.expression?e[1]:e[2]))}});return c.join("&")},toArray:function(d){var b=this._getItemsAsjQuery(d&&d.connected);var c=[];d=d||{};b.each(function(){c.push(a(d.item||this).attr(d.attribute||"id")||"")});return c},_intersectsWith:function(m){var e=this.positionAbs.left,d=e+this.helperProportions.width,k=this.positionAbs.top,j=k+this.helperProportions.height;var f=m.left,c=f+m.width,n=m.top,i=n+m.height;var o=this.offset.click.top,h=this.offset.click.left;var g=(k+o)>n&&(k+o)<i&&(e+h)>f&&(e+h)<c;if(this.options.tolerance=="pointer"||this.options.forcePointerForContainers||(this.options.tolerance!="pointer"&&this.helperProportions[this.floating?"width":"height"]>m[this.floating?"width":"height"])){return g}else{return(f<e+(this.helperProportions.width/2)&&d-(this.helperProportions.width/2)<c&&n<k+(this.helperProportions.height/2)&&j-(this.helperProportions.height/2)<i)}},_intersectsWithPointer:function(d){var e=a.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,d.top,d.height),c=a.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,d.left,d.width),g=e&&c,b=this._getDragVerticalDirection(),f=this._getDragHorizontalDirection();if(!g){return false}return this.floating?(((f&&f=="right")||b=="down")?2:1):(b&&(b=="down"?2:1))},_intersectsWithSides:function(e){var c=a.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,e.top+(e.height/2),e.height),d=a.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,e.left+(e.width/2),e.width),b=this._getDragVerticalDirection(),f=this._getDragHorizontalDirection();if(this.floating&&f){return((f=="right"&&d)||(f=="left"&&!d))}else{return b&&((b=="down"&&c)||(b=="up"&&!c))}},_getDragVerticalDirection:function(){var b=this.positionAbs.top-this.lastPositionAbs.top;return b!=0&&(b>0?"down":"up")},_getDragHorizontalDirection:function(){var b=this.positionAbs.left-this.lastPositionAbs.left;return b!=0&&(b>0?"right":"left")},refresh:function(b){this._refreshItems(b);this.refreshPositions()},_connectWith:function(){var b=this.options;return b.connectWith.constructor==String?[b.connectWith]:b.connectWith},_getItemsAsjQuery:function(b){var l=this;var g=[];var e=[];var h=this._connectWith();if(h&&b){for(var d=h.length-1;d>=0;d--){var k=a(h[d]);for(var c=k.length-1;c>=0;c--){var f=a.data(k[c],"sortable");if(f&&f!=this&&!f.options.disabled){e.push([a.isFunction(f.options.items)?f.options.items.call(f.element):a(f.options.items,f.element).not(".ui-sortable-helper"),f])}}}}e.push([a.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):a(this.options.items,this.element).not(".ui-sortable-helper"),this]);for(var d=e.length-1;d>=0;d--){e[d][0].each(function(){g.push(this)})}return a(g)},_removeCurrentsFromItems:function(){var d=this.currentItem.find(":data(sortable-item)");for(var c=0;c<this.items.length;c++){for(var b=0;b<d.length;b++){if(d[b]==this.items[c].item[0]){this.items.splice(c,1)}}}},_refreshItems:function(b){this.items=[];this.containers=[this];var h=this.items;var p=this;var f=[[a.isFunction(this.options.items)?this.options.items.call(this.element[0],b,{item:this.currentItem}):a(this.options.items,this.element),this]];var l=this._connectWith();if(l){for(var e=l.length-1;e>=0;e--){var m=a(l[e]);for(var d=m.length-1;d>=0;d--){var g=a.data(m[d],"sortable");if(g&&g!=this&&!g.options.disabled){f.push([a.isFunction(g.options.items)?g.options.items.call(g.element[0],b,{item:this.currentItem}):a(g.options.items,g.element),g]);this.containers.push(g)}}}}for(var e=f.length-1;e>=0;e--){var k=f[e][1];var c=f[e][0];for(var d=0,n=c.length;d<n;d++){var o=a(c[d]);o.data("sortable-item",k);h.push({item:o,instance:k,width:0,height:0,left:0,top:0})}}},refreshPositions:function(b){if(this.offsetParent&&this.helper){this.offset.parent=this._getParentOffset()}for(var d=this.items.length-1;d>=0;d--){var e=this.items[d];if(e.instance!=this.currentContainer&&this.currentContainer&&e.item[0]!=this.currentItem[0]){continue}var c=this.options.toleranceElement?a(this.options.toleranceElement,e.item):e.item;if(!b){e.width=c.outerWidth();e.height=c.outerHeight()}var f=c.offset();e.left=f.left;e.top=f.top}if(this.options.custom&&this.options.custom.refreshContainers){this.options.custom.refreshContainers.call(this)}else{for(var d=this.containers.length-1;d>=0;d--){var f=this.containers[d].element.offset();this.containers[d].containerCache.left=f.left;this.containers[d].containerCache.top=f.top;this.containers[d].containerCache.width=this.containers[d].element.outerWidth();this.containers[d].containerCache.height=this.containers[d].element.outerHeight()}}},_createPlaceholder:function(d){var b=d||this,e=b.options;if(!e.placeholder||e.placeholder.constructor==String){var c=e.placeholder;e.placeholder={element:function(){var f=a(document.createElement(b.currentItem[0].nodeName)).addClass(c||b.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];if(!c){f.style.visibility="hidden"}return f},update:function(f,g){if(c&&!e.forcePlaceholderSize){return}if(!g.height()){g.height(b.currentItem.innerHeight()-parseInt(b.currentItem.css("paddingTop")||0,10)-parseInt(b.currentItem.css("paddingBottom")||0,10))}if(!g.width()){g.width(b.currentItem.innerWidth()-parseInt(b.currentItem.css("paddingLeft")||0,10)-parseInt(b.currentItem.css("paddingRight")||0,10))}}}}b.placeholder=a(e.placeholder.element.call(b.element,b.currentItem));b.currentItem.after(b.placeholder);e.placeholder.update(b,b.placeholder)},_contactContainers:function(d){for(var c=this.containers.length-1;c>=0;c--){if(this._intersectsWith(this.containers[c].containerCache)){if(!this.containers[c].containerCache.over){if(this.currentContainer!=this.containers[c]){var h=10000;var g=null;var e=this.positionAbs[this.containers[c].floating?"left":"top"];for(var b=this.items.length-1;b>=0;b--){if(!a.ui.contains(this.containers[c].element[0],this.items[b].item[0])){continue}var f=this.items[b][this.containers[c].floating?"left":"top"];if(Math.abs(f-e)<h){h=Math.abs(f-e);g=this.items[b]}}if(!g&&!this.options.dropOnEmpty){continue}this.currentContainer=this.containers[c];g?this._rearrange(d,g,null,true):this._rearrange(d,null,this.containers[c].element,true);this._trigger("change",d,this._uiHash());this.containers[c]._trigger("change",d,this._uiHash(this));this.options.placeholder.update(this.currentContainer,this.placeholder)}this.containers[c]._trigger("over",d,this._uiHash(this));this.containers[c].containerCache.over=1}}else{if(this.containers[c].containerCache.over){this.containers[c]._trigger("out",d,this._uiHash(this));this.containers[c].containerCache.over=0}}}},_createHelper:function(c){var d=this.options;var b=a.isFunction(d.helper)?a(d.helper.apply(this.element[0],[c,this.currentItem])):(d.helper=="clone"?this.currentItem.clone():this.currentItem);if(!b.parents("body").length){a(d.appendTo!="parent"?d.appendTo:this.currentItem[0].parentNode)[0].appendChild(b[0])}if(b[0]==this.currentItem[0]){this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}}if(b[0].style.width==""||d.forceHelperSize){b.width(this.currentItem.width())}if(b[0].style.height==""||d.forceHelperSize){b.height(this.currentItem.height())}return b},_adjustOffsetFromHelper:function(b){if(b.left!=undefined){this.offset.click.left=b.left+this.margins.left}if(b.right!=undefined){this.offset.click.left=this.helperProportions.width-b.right+this.margins.left}if(b.top!=undefined){this.offset.click.top=b.top+this.margins.top}if(b.bottom!=undefined){this.offset.click.top=this.helperProportions.height-b.bottom+this.margins.top}},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var b=this.offsetParent.offset();if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0])){b.left+=this.scrollParent.scrollLeft();b.top+=this.scrollParent.scrollTop()}if((this.offsetParent[0]==document.body)||(this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&a.browser.msie)){b={top:0,left:0}}return{top:b.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:b.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var b=this.currentItem.position();return{top:b.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:b.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}else{return{top:0,left:0}}},_cacheMargins:function(){this.margins={left:(parseInt(this.currentItem.css("marginLeft"),10)||0),top:(parseInt(this.currentItem.css("marginTop"),10)||0)}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e=this.options;if(e.containment=="parent"){e.containment=this.helper[0].parentNode}if(e.containment=="document"||e.containment=="window"){this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,a(e.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(a(e.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]}if(!(/^(document|window|parent)$/).test(e.containment)){var c=a(e.containment)[0];var d=a(e.containment).offset();var b=(a(c).css("overflow")!="hidden");this.containment=[d.left+(parseInt(a(c).css("borderLeftWidth"),10)||0)+(parseInt(a(c).css("paddingLeft"),10)||0)-this.margins.left,d.top+(parseInt(a(c).css("borderTopWidth"),10)||0)+(parseInt(a(c).css("paddingTop"),10)||0)-this.margins.top,d.left+(b?Math.max(c.scrollWidth,c.offsetWidth):c.offsetWidth)-(parseInt(a(c).css("borderLeftWidth"),10)||0)-(parseInt(a(c).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,d.top+(b?Math.max(c.scrollHeight,c.offsetHeight):c.offsetHeight)-(parseInt(a(c).css("borderTopWidth"),10)||0)-(parseInt(a(c).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]}},_convertPositionTo:function(f,h){if(!h){h=this.position}var c=f=="absolute"?1:-1;var e=this.options,b=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,g=(/(html|body)/i).test(b[0].tagName);return{top:(h.top+this.offset.relative.top*c+this.offset.parent.top*c-(a.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():(g?0:b.scrollTop()))*c)),left:(h.left+this.offset.relative.left*c+this.offset.parent.left*c-(a.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():g?0:b.scrollLeft())*c))}},_generatePosition:function(e){var h=this.options,b=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,i=(/(html|body)/i).test(b[0].tagName);if(this.cssPosition=="relative"&&!(this.scrollParent[0]!=document&&this.scrollParent[0]!=this.offsetParent[0])){this.offset.relative=this._getRelativeOffset()}var d=e.pageX;var c=e.pageY;if(this.originalPosition){if(this.containment){if(e.pageX-this.offset.click.left<this.containment[0]){d=this.containment[0]+this.offset.click.left}if(e.pageY-this.offset.click.top<this.containment[1]){c=this.containment[1]+this.offset.click.top}if(e.pageX-this.offset.click.left>this.containment[2]){d=this.containment[2]+this.offset.click.left}if(e.pageY-this.offset.click.top>this.containment[3]){c=this.containment[3]+this.offset.click.top}}if(h.grid){var g=this.originalPageY+Math.round((c-this.originalPageY)/h.grid[1])*h.grid[1];c=this.containment?(!(g-this.offset.click.top<this.containment[1]||g-this.offset.click.top>this.containment[3])?g:(!(g-this.offset.click.top<this.containment[1])?g-h.grid[1]:g+h.grid[1])):g;var f=this.originalPageX+Math.round((d-this.originalPageX)/h.grid[0])*h.grid[0];d=this.containment?(!(f-this.offset.click.left<this.containment[0]||f-this.offset.click.left>this.containment[2])?f:(!(f-this.offset.click.left<this.containment[0])?f-h.grid[0]:f+h.grid[0])):f}}return{top:(c-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(a.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():(i?0:b.scrollTop())))),left:(d-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(a.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():i?0:b.scrollLeft())))}},_rearrange:function(g,f,c,e){c?c[0].appendChild(this.placeholder[0]):f.item[0].parentNode.insertBefore(this.placeholder[0],(this.direction=="down"?f.item[0]:f.item[0].nextSibling));this.counter=this.counter?++this.counter:1;var d=this,b=this.counter;window.setTimeout(function(){if(b==d.counter){d.refreshPositions(!e)}},0)},_clear:function(d,e){this.reverting=false;var f=[],b=this;if(!this._noFinalSort&&this.currentItem[0].parentNode){this.placeholder.before(this.currentItem)}this._noFinalSort=null;if(this.helper[0]==this.currentItem[0]){for(var c in this._storedCSS){if(this._storedCSS[c]=="auto"||this._storedCSS[c]=="static"){this._storedCSS[c]=""}}this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else{this.currentItem.show()}if(this.fromOutside&&!e){f.push(function(g){this._trigger("receive",g,this._uiHash(this.fromOutside))})}if((this.fromOutside||this.domPosition.prev!=this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!=this.currentItem.parent()[0])&&!e){f.push(function(g){this._trigger("update",g,this._uiHash())})}if(!a.ui.contains(this.element[0],this.currentItem[0])){if(!e){f.push(function(g){this._trigger("remove",g,this._uiHash())})}for(var c=this.containers.length-1;c>=0;c--){if(a.ui.contains(this.containers[c].element[0],this.currentItem[0])&&!e){f.push((function(g){return function(h){g._trigger("receive",h,this._uiHash(this))}}).call(this,this.containers[c]));f.push((function(g){return function(h){g._trigger("update",h,this._uiHash(this))}}).call(this,this.containers[c]))}}}for(var c=this.containers.length-1;c>=0;c--){if(!e){f.push((function(g){return function(h){g._trigger("deactivate",h,this._uiHash(this))}}).call(this,this.containers[c]))}if(this.containers[c].containerCache.over){f.push((function(g){return function(h){g._trigger("out",h,this._uiHash(this))}}).call(this,this.containers[c]));this.containers[c].containerCache.over=0}}if(this._storedCursor){a("body").css("cursor",this._storedCursor)}if(this._storedOpacity){this.helper.css("opacity",this._storedOpacity)}if(this._storedZIndex){this.helper.css("zIndex",this._storedZIndex=="auto"?"":this._storedZIndex)}this.dragging=false;if(this.cancelHelperRemoval){if(!e){this._trigger("beforeStop",d,this._uiHash());for(var c=0;c<f.length;c++){f[c].call(this,d)}this._trigger("stop",d,this._uiHash())}return false}if(!e){this._trigger("beforeStop",d,this._uiHash())}this.placeholder[0].parentNode.removeChild(this.placeholder[0]);if(this.helper[0]!=this.currentItem[0]){this.helper.remove()}this.helper=null;if(!e){for(var c=0;c<f.length;c++){f[c].call(this,d)}this._trigger("stop",d,this._uiHash())}this.fromOutside=false;return true},_trigger:function(){if(a.widget.prototype._trigger.apply(this,arguments)===false){this.cancel()}},_uiHash:function(c){var b=c||this;return{helper:b.helper,placeholder:b.placeholder||a([]),position:b.position,absolutePosition:b.positionAbs,offset:b.positionAbs,item:b.currentItem,sender:c?c.element:null}}}));a.extend(a.ui.sortable,{getter:"serialize toArray",version:"1.7.2",eventPrefix:"sort",defaults:{appendTo:"parent",axis:false,cancel:":input,option",connectWith:false,containment:false,cursor:"auto",cursorAt:false,delay:0,distance:1,dropOnEmpty:true,forcePlaceholderSize:false,forceHelperSize:false,grid:false,handle:false,helper:"original",items:"> *",opacity:false,placeholder:false,revert:false,scroll:true,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1000}})})(jQuery);;/*
 * jQuery UI Accordion 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Accordion
 *
 * Depends:
 *	ui.core.js
 */
(function(a){a.widget("ui.accordion",{_init:function(){var d=this.options,b=this;this.running=0;if(d.collapsible==a.ui.accordion.defaults.collapsible&&d.alwaysOpen!=a.ui.accordion.defaults.alwaysOpen){d.collapsible=!d.alwaysOpen}if(d.navigation){var c=this.element.find("a").filter(d.navigationFilter);if(c.length){if(c.filter(d.header).length){this.active=c}else{this.active=c.parent().parent().prev();c.addClass("ui-accordion-content-active")}}}this.element.addClass("ui-accordion ui-widget ui-helper-reset");if(this.element[0].nodeName=="UL"){this.element.children("li").addClass("ui-accordion-li-fix")}this.headers=this.element.find(d.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all").bind("mouseenter.accordion",function(){a(this).addClass("ui-state-hover")}).bind("mouseleave.accordion",function(){a(this).removeClass("ui-state-hover")}).bind("focus.accordion",function(){a(this).addClass("ui-state-focus")}).bind("blur.accordion",function(){a(this).removeClass("ui-state-focus")});this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom");this.active=this._findActive(this.active||d.active).toggleClass("ui-state-default").toggleClass("ui-state-active").toggleClass("ui-corner-all").toggleClass("ui-corner-top");this.active.next().addClass("ui-accordion-content-active");a("<span/>").addClass("ui-icon "+d.icons.header).prependTo(this.headers);this.active.find(".ui-icon").toggleClass(d.icons.header).toggleClass(d.icons.headerSelected);if(a.browser.msie){this.element.find("a").css("zoom","1")}this.resize();this.element.attr("role","tablist");this.headers.attr("role","tab").bind("keydown",function(e){return b._keydown(e)}).next().attr("role","tabpanel");this.headers.not(this.active||"").attr("aria-expanded","false").attr("tabIndex","-1").next().hide();if(!this.active.length){this.headers.eq(0).attr("tabIndex","0")}else{this.active.attr("aria-expanded","true").attr("tabIndex","0")}if(!a.browser.safari){this.headers.find("a").attr("tabIndex","-1")}if(d.event){this.headers.bind((d.event)+".accordion",function(e){return b._clickHandler.call(b,e,this)})}},destroy:function(){var c=this.options;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role").unbind(".accordion").removeData("accordion");this.headers.unbind(".accordion").removeClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("tabindex");this.headers.find("a").removeAttr("tabindex");this.headers.children(".ui-icon").remove();var b=this.headers.next().css("display","").removeAttr("role").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active");if(c.autoHeight||c.fillHeight){b.css("height","")}},_setData:function(b,c){if(b=="alwaysOpen"){b="collapsible";c=!c}a.widget.prototype._setData.apply(this,arguments)},_keydown:function(e){var g=this.options,f=a.ui.keyCode;if(g.disabled||e.altKey||e.ctrlKey){return}var d=this.headers.length;var b=this.headers.index(e.target);var c=false;switch(e.keyCode){case f.RIGHT:case f.DOWN:c=this.headers[(b+1)%d];break;case f.LEFT:case f.UP:c=this.headers[(b-1+d)%d];break;case f.SPACE:case f.ENTER:return this._clickHandler({target:e.target},e.target)}if(c){a(e.target).attr("tabIndex","-1");a(c).attr("tabIndex","0");c.focus();return false}return true},resize:function(){var e=this.options,d;if(e.fillSpace){if(a.browser.msie){var b=this.element.parent().css("overflow");this.element.parent().css("overflow","hidden")}d=this.element.parent().height();if(a.browser.msie){this.element.parent().css("overflow",b)}this.headers.each(function(){d-=a(this).outerHeight()});var c=0;this.headers.next().each(function(){c=Math.max(c,a(this).innerHeight()-a(this).height())}).height(Math.max(0,d-c)).css("overflow","auto")}else{if(e.autoHeight){d=0;this.headers.next().each(function(){d=Math.max(d,a(this).outerHeight())}).height(d)}}},activate:function(b){var c=this._findActive(b)[0];this._clickHandler({target:c},c)},_findActive:function(b){return b?typeof b=="number"?this.headers.filter(":eq("+b+")"):this.headers.not(this.headers.not(b)):b===false?a([]):this.headers.filter(":eq(0)")},_clickHandler:function(b,f){var d=this.options;if(d.disabled){return false}if(!b.target&&d.collapsible){this.active.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").find(".ui-icon").removeClass(d.icons.headerSelected).addClass(d.icons.header);this.active.next().addClass("ui-accordion-content-active");var h=this.active.next(),e={options:d,newHeader:a([]),oldHeader:d.active,newContent:a([]),oldContent:h},c=(this.active=a([]));this._toggle(c,h,e);return false}var g=a(b.currentTarget||f);var i=g[0]==this.active[0];if(this.running||(!d.collapsible&&i)){return false}this.active.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").find(".ui-icon").removeClass(d.icons.headerSelected).addClass(d.icons.header);this.active.next().addClass("ui-accordion-content-active");if(!i){g.removeClass("ui-state-default ui-corner-all").addClass("ui-state-active ui-corner-top").find(".ui-icon").removeClass(d.icons.header).addClass(d.icons.headerSelected);g.next().addClass("ui-accordion-content-active")}var c=g.next(),h=this.active.next(),e={options:d,newHeader:i&&d.collapsible?a([]):g,oldHeader:this.active,newContent:i&&d.collapsible?a([]):c.find("> *"),oldContent:h.find("> *")},j=this.headers.index(this.active[0])>this.headers.index(g[0]);this.active=i?a([]):g;this._toggle(c,h,e,i,j);return false},_toggle:function(b,i,g,j,k){var d=this.options,m=this;this.toShow=b;this.toHide=i;this.data=g;var c=function(){if(!m){return}return m._completed.apply(m,arguments)};this._trigger("changestart",null,this.data);this.running=i.size()===0?b.size():i.size();if(d.animated){var f={};if(d.collapsible&&j){f={toShow:a([]),toHide:i,complete:c,down:k,autoHeight:d.autoHeight||d.fillSpace}}else{f={toShow:b,toHide:i,complete:c,down:k,autoHeight:d.autoHeight||d.fillSpace}}if(!d.proxied){d.proxied=d.animated}if(!d.proxiedDuration){d.proxiedDuration=d.duration}d.animated=a.isFunction(d.proxied)?d.proxied(f):d.proxied;d.duration=a.isFunction(d.proxiedDuration)?d.proxiedDuration(f):d.proxiedDuration;var l=a.ui.accordion.animations,e=d.duration,h=d.animated;if(!l[h]){l[h]=function(n){this.slide(n,{easing:h,duration:e||700})}}l[h](f)}else{if(d.collapsible&&j){b.toggle()}else{i.hide();b.show()}c(true)}i.prev().attr("aria-expanded","false").attr("tabIndex","-1").blur();b.prev().attr("aria-expanded","true").attr("tabIndex","0").focus()},_completed:function(b){var c=this.options;this.running=b?0:--this.running;if(this.running){return}if(c.clearStyle){this.toShow.add(this.toHide).css({height:"",overflow:""})}this._trigger("change",null,this.data)}});a.extend(a.ui.accordion,{version:"1.7.2",defaults:{active:null,alwaysOpen:true,animated:"slide",autoHeight:true,clearStyle:false,collapsible:false,event:"click",fillSpace:false,header:"> li > :first-child,> :not(li):even",icons:{header:"ui-icon-triangle-1-e",headerSelected:"ui-icon-triangle-1-s"},navigation:false,navigationFilter:function(){return this.href.toLowerCase()==location.href.toLowerCase()}},animations:{slide:function(j,h){j=a.extend({easing:"swing",duration:300},j,h);if(!j.toHide.size()){j.toShow.animate({height:"show"},j);return}if(!j.toShow.size()){j.toHide.animate({height:"hide"},j);return}var c=j.toShow.css("overflow"),g,d={},f={},e=["height","paddingTop","paddingBottom"],b;var i=j.toShow;b=i[0].style.width;i.width(parseInt(i.parent().width(),10)-parseInt(i.css("paddingLeft"),10)-parseInt(i.css("paddingRight"),10)-(parseInt(i.css("borderLeftWidth"),10)||0)-(parseInt(i.css("borderRightWidth"),10)||0));a.each(e,function(k,m){f[m]="hide";var l=(""+a.css(j.toShow[0],m)).match(/^([\d+-.]+)(.*)$/);d[m]={value:l[1],unit:l[2]||"px"}});j.toShow.css({height:0,overflow:"hidden"}).show();j.toHide.filter(":hidden").each(j.complete).end().filter(":visible").animate(f,{step:function(k,l){if(l.prop=="height"){g=(l.now-l.start)/(l.end-l.start)}j.toShow[0].style[l.prop]=(g*d[l.prop].value)+d[l.prop].unit},duration:j.duration,easing:j.easing,complete:function(){if(!j.autoHeight){j.toShow.css("height","")}j.toShow.css("width",b);j.toShow.css({overflow:c});j.complete()}})},bounceslide:function(b){this.slide(b,{easing:b.down?"easeOutBounce":"swing",duration:b.down?1000:200})},easeslide:function(b){this.slide(b,{easing:"easeinout",duration:700})}}})})(jQuery);;/*
 * jQuery UI Dialog 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Dialog
 *
 * Depends:
 *	ui.core.js
 *	ui.draggable.js
 *	ui.resizable.js
 */
(function(c){var b={dragStart:"start.draggable",drag:"drag.draggable",dragStop:"stop.draggable",maxHeight:"maxHeight.resizable",minHeight:"minHeight.resizable",maxWidth:"maxWidth.resizable",minWidth:"minWidth.resizable",resizeStart:"start.resizable",resize:"drag.resizable",resizeStop:"stop.resizable"},a="ui-dialog ui-widget ui-widget-content ui-corner-all ";c.widget("ui.dialog",{_init:function(){this.originalTitle=this.element.attr("title");var l=this,m=this.options,j=m.title||this.originalTitle||"&nbsp;",e=c.ui.dialog.getTitleId(this.element),k=(this.uiDialog=c("<div/>")).appendTo(document.body).hide().addClass(a+m.dialogClass).css({position:"absolute",overflow:"hidden",zIndex:m.zIndex}).attr("tabIndex",-1).css("outline",0).keydown(function(n){(m.closeOnEscape&&n.keyCode&&n.keyCode==c.ui.keyCode.ESCAPE&&l.close(n))}).attr({role:"dialog","aria-labelledby":e}).mousedown(function(n){l.moveToTop(false,n)}),g=this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(k),f=(this.uiDialogTitlebar=c("<div></div>")).addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(k),i=c('<a href="#"/>').addClass("ui-dialog-titlebar-close ui-corner-all").attr("role","button").hover(function(){i.addClass("ui-state-hover")},function(){i.removeClass("ui-state-hover")}).focus(function(){i.addClass("ui-state-focus")}).blur(function(){i.removeClass("ui-state-focus")}).mousedown(function(n){n.stopPropagation()}).click(function(n){l.close(n);return false}).appendTo(f),h=(this.uiDialogTitlebarCloseText=c("<span/>")).addClass("ui-icon ui-icon-closethick").text(m.closeText).appendTo(i),d=c("<span/>").addClass("ui-dialog-title").attr("id",e).html(j).prependTo(f);f.find("*").add(f).disableSelection();(m.draggable&&c.fn.draggable&&this._makeDraggable());(m.resizable&&c.fn.resizable&&this._makeResizable());this._createButtons(m.buttons);this._isOpen=false;(m.bgiframe&&c.fn.bgiframe&&k.bgiframe());(m.autoOpen&&this.open())},destroy:function(){(this.overlay&&this.overlay.destroy());this.uiDialog.hide();this.element.unbind(".dialog").removeData("dialog").removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body");this.uiDialog.remove();(this.originalTitle&&this.element.attr("title",this.originalTitle))},close:function(f){var d=this;if(false===d._trigger("beforeclose",f)){return}(d.overlay&&d.overlay.destroy());d.uiDialog.unbind("keypress.ui-dialog");(d.options.hide?d.uiDialog.hide(d.options.hide,function(){d._trigger("close",f)}):d.uiDialog.hide()&&d._trigger("close",f));c.ui.dialog.overlay.resize();d._isOpen=false;if(d.options.modal){var e=0;c(".ui-dialog").each(function(){if(this!=d.uiDialog[0]){e=Math.max(e,c(this).css("z-index"))}});c.ui.dialog.maxZ=e}},isOpen:function(){return this._isOpen},moveToTop:function(f,e){if((this.options.modal&&!f)||(!this.options.stack&&!this.options.modal)){return this._trigger("focus",e)}if(this.options.zIndex>c.ui.dialog.maxZ){c.ui.dialog.maxZ=this.options.zIndex}(this.overlay&&this.overlay.$el.css("z-index",c.ui.dialog.overlay.maxZ=++c.ui.dialog.maxZ));var d={scrollTop:this.element.attr("scrollTop"),scrollLeft:this.element.attr("scrollLeft")};this.uiDialog.css("z-index",++c.ui.dialog.maxZ);this.element.attr(d);this._trigger("focus",e)},open:function(){if(this._isOpen){return}var e=this.options,d=this.uiDialog;this.overlay=e.modal?new c.ui.dialog.overlay(this):null;(d.next().length&&d.appendTo("body"));this._size();this._position(e.position);d.show(e.show);this.moveToTop(true);(e.modal&&d.bind("keypress.ui-dialog",function(h){if(h.keyCode!=c.ui.keyCode.TAB){return}var g=c(":tabbable",this),i=g.filter(":first")[0],f=g.filter(":last")[0];if(h.target==f&&!h.shiftKey){setTimeout(function(){i.focus()},1)}else{if(h.target==i&&h.shiftKey){setTimeout(function(){f.focus()},1)}}}));c([]).add(d.find(".ui-dialog-content :tabbable:first")).add(d.find(".ui-dialog-buttonpane :tabbable:first")).add(d).filter(":first").focus();this._trigger("open");this._isOpen=true},_createButtons:function(g){var f=this,d=false,e=c("<div></div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix");this.uiDialog.find(".ui-dialog-buttonpane").remove();(typeof g=="object"&&g!==null&&c.each(g,function(){return !(d=true)}));if(d){c.each(g,function(h,i){c('<button type="button"></button>').addClass("ui-state-default ui-corner-all").text(h).click(function(){i.apply(f.element[0],arguments)}).hover(function(){c(this).addClass("ui-state-hover")},function(){c(this).removeClass("ui-state-hover")}).focus(function(){c(this).addClass("ui-state-focus")}).blur(function(){c(this).removeClass("ui-state-focus")}).appendTo(e)});e.appendTo(this.uiDialog)}},_makeDraggable:function(){var d=this,f=this.options,e;this.uiDialog.draggable({cancel:".ui-dialog-content",handle:".ui-dialog-titlebar",containment:"document",start:function(){e=f.height;c(this).height(c(this).height()).addClass("ui-dialog-dragging");(f.dragStart&&f.dragStart.apply(d.element[0],arguments))},drag:function(){(f.drag&&f.drag.apply(d.element[0],arguments))},stop:function(){c(this).removeClass("ui-dialog-dragging").height(e);(f.dragStop&&f.dragStop.apply(d.element[0],arguments));c.ui.dialog.overlay.resize()}})},_makeResizable:function(g){g=(g===undefined?this.options.resizable:g);var d=this,f=this.options,e=typeof g=="string"?g:"n,e,s,w,se,sw,ne,nw";this.uiDialog.resizable({cancel:".ui-dialog-content",alsoResize:this.element,maxWidth:f.maxWidth,maxHeight:f.maxHeight,minWidth:f.minWidth,minHeight:f.minHeight,start:function(){c(this).addClass("ui-dialog-resizing");(f.resizeStart&&f.resizeStart.apply(d.element[0],arguments))},resize:function(){(f.resize&&f.resize.apply(d.element[0],arguments))},handles:e,stop:function(){c(this).removeClass("ui-dialog-resizing");f.height=c(this).height();f.width=c(this).width();(f.resizeStop&&f.resizeStop.apply(d.element[0],arguments));c.ui.dialog.overlay.resize()}}).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")},_position:function(i){var e=c(window),f=c(document),g=f.scrollTop(),d=f.scrollLeft(),h=g;if(c.inArray(i,["center","top","right","bottom","left"])>=0){i=[i=="right"||i=="left"?i:"center",i=="top"||i=="bottom"?i:"middle"]}if(i.constructor!=Array){i=["center","middle"]}if(i[0].constructor==Number){d+=i[0]}else{switch(i[0]){case"left":d+=0;break;case"right":d+=e.width()-this.uiDialog.outerWidth();break;default:case"center":d+=(e.width()-this.uiDialog.outerWidth())/2}}if(i[1].constructor==Number){g+=i[1]}else{switch(i[1]){case"top":g+=0;break;case"bottom":g+=e.height()-this.uiDialog.outerHeight();break;default:case"middle":g+=(e.height()-this.uiDialog.outerHeight())/2}}g=Math.max(g,h);this.uiDialog.css({top:g,left:d})},_setData:function(e,f){(b[e]&&this.uiDialog.data(b[e],f));switch(e){case"buttons":this._createButtons(f);break;case"closeText":this.uiDialogTitlebarCloseText.text(f);break;case"dialogClass":this.uiDialog.removeClass(this.options.dialogClass).addClass(a+f);break;case"draggable":(f?this._makeDraggable():this.uiDialog.draggable("destroy"));break;case"height":this.uiDialog.height(f);break;case"position":this._position(f);break;case"resizable":var d=this.uiDialog,g=this.uiDialog.is(":data(resizable)");(g&&!f&&d.resizable("destroy"));(g&&typeof f=="string"&&d.resizable("option","handles",f));(g||this._makeResizable(f));break;case"title":c(".ui-dialog-title",this.uiDialogTitlebar).html(f||"&nbsp;");break;case"width":this.uiDialog.width(f);break}c.widget.prototype._setData.apply(this,arguments)},_size:function(){var e=this.options;this.element.css({height:0,minHeight:0,width:"auto"});var d=this.uiDialog.css({height:"auto",width:e.width}).height();this.element.css({minHeight:Math.max(e.minHeight-d,0),height:e.height=="auto"?"auto":Math.max(e.height-d,0)})}});c.extend(c.ui.dialog,{version:"1.7.2",defaults:{autoOpen:true,bgiframe:false,buttons:{},closeOnEscape:true,closeText:"close",dialogClass:"",draggable:true,hide:null,height:"auto",maxHeight:false,maxWidth:false,minHeight:150,minWidth:150,modal:false,position:"center",resizable:true,show:null,stack:true,title:"",width:300,zIndex:1000},getter:"isOpen",uuid:0,maxZ:0,getTitleId:function(d){return"ui-dialog-title-"+(d.attr("id")||++this.uuid)},overlay:function(d){this.$el=c.ui.dialog.overlay.create(d)}});c.extend(c.ui.dialog.overlay,{instances:[],maxZ:0,events:c.map("focus,mousedown,mouseup,keydown,keypress,click".split(","),function(d){return d+".dialog-overlay"}).join(" "),create:function(e){if(this.instances.length===0){setTimeout(function(){if(c.ui.dialog.overlay.instances.length){c(document).bind(c.ui.dialog.overlay.events,function(f){var g=c(f.target).parents(".ui-dialog").css("zIndex")||0;return(g>c.ui.dialog.overlay.maxZ)})}},1);c(document).bind("keydown.dialog-overlay",function(f){(e.options.closeOnEscape&&f.keyCode&&f.keyCode==c.ui.keyCode.ESCAPE&&e.close(f))});c(window).bind("resize.dialog-overlay",c.ui.dialog.overlay.resize)}var d=c("<div></div>").appendTo(document.body).addClass("ui-widget-overlay").css({width:this.width(),height:this.height()});(e.options.bgiframe&&c.fn.bgiframe&&d.bgiframe());this.instances.push(d);return d},destroy:function(d){this.instances.splice(c.inArray(this.instances,d),1);if(this.instances.length===0){c([document,window]).unbind(".dialog-overlay")}d.remove();var e=0;c.each(this.instances,function(){e=Math.max(e,this.css("z-index"))});this.maxZ=e},height:function(){if(c.browser.msie&&c.browser.version<7){var e=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight);var d=Math.max(document.documentElement.offsetHeight,document.body.offsetHeight);if(e<d){return c(window).height()+"px"}else{return e+"px"}}else{return c(document).height()+"px"}},width:function(){if(c.browser.msie&&c.browser.version<7){var d=Math.max(document.documentElement.scrollWidth,document.body.scrollWidth);var e=Math.max(document.documentElement.offsetWidth,document.body.offsetWidth);if(d<e){return c(window).width()+"px"}else{return d+"px"}}else{return c(document).width()+"px"}},resize:function(){var d=c([]);c.each(c.ui.dialog.overlay.instances,function(){d=d.add(this)});d.css({width:0,height:0}).css({width:c.ui.dialog.overlay.width(),height:c.ui.dialog.overlay.height()})}});c.extend(c.ui.dialog.overlay.prototype,{destroy:function(){c.ui.dialog.overlay.destroy(this.$el)}})})(jQuery);;/*
 * jQuery UI Slider 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Slider
 *
 * Depends:
 *	ui.core.js
 */
(function(a){a.widget("ui.slider",a.extend({},a.ui.mouse,{_init:function(){var b=this,c=this.options;this._keySliding=false;this._handleIndex=null;this._detectOrientation();this._mouseInit();this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget ui-widget-content ui-corner-all");this.range=a([]);if(c.range){if(c.range===true){this.range=a("<div></div>");if(!c.values){c.values=[this._valueMin(),this._valueMin()]}if(c.values.length&&c.values.length!=2){c.values=[c.values[0],c.values[0]]}}else{this.range=a("<div></div>")}this.range.appendTo(this.element).addClass("ui-slider-range");if(c.range=="min"||c.range=="max"){this.range.addClass("ui-slider-range-"+c.range)}this.range.addClass("ui-widget-header")}if(a(".ui-slider-handle",this.element).length==0){a('<a href="#"></a>').appendTo(this.element).addClass("ui-slider-handle")}if(c.values&&c.values.length){while(a(".ui-slider-handle",this.element).length<c.values.length){a('<a href="#"></a>').appendTo(this.element).addClass("ui-slider-handle")}}this.handles=a(".ui-slider-handle",this.element).addClass("ui-state-default ui-corner-all");this.handle=this.handles.eq(0);this.handles.add(this.range).filter("a").click(function(d){d.preventDefault()}).hover(function(){if(!c.disabled){a(this).addClass("ui-state-hover")}},function(){a(this).removeClass("ui-state-hover")}).focus(function(){if(!c.disabled){a(".ui-slider .ui-state-focus").removeClass("ui-state-focus");a(this).addClass("ui-state-focus")}else{a(this).blur()}}).blur(function(){a(this).removeClass("ui-state-focus")});this.handles.each(function(d){a(this).data("index.ui-slider-handle",d)});this.handles.keydown(function(i){var f=true;var e=a(this).data("index.ui-slider-handle");if(b.options.disabled){return}switch(i.keyCode){case a.ui.keyCode.HOME:case a.ui.keyCode.END:case a.ui.keyCode.UP:case a.ui.keyCode.RIGHT:case a.ui.keyCode.DOWN:case a.ui.keyCode.LEFT:f=false;if(!b._keySliding){b._keySliding=true;a(this).addClass("ui-state-active");b._start(i,e)}break}var g,d,h=b._step();if(b.options.values&&b.options.values.length){g=d=b.values(e)}else{g=d=b.value()}switch(i.keyCode){case a.ui.keyCode.HOME:d=b._valueMin();break;case a.ui.keyCode.END:d=b._valueMax();break;case a.ui.keyCode.UP:case a.ui.keyCode.RIGHT:if(g==b._valueMax()){return}d=g+h;break;case a.ui.keyCode.DOWN:case a.ui.keyCode.LEFT:if(g==b._valueMin()){return}d=g-h;break}b._slide(i,e,d);return f}).keyup(function(e){var d=a(this).data("index.ui-slider-handle");if(b._keySliding){b._stop(e,d);b._change(e,d);b._keySliding=false;a(this).removeClass("ui-state-active")}});this._refreshValue()},destroy:function(){this.handles.remove();this.range.remove();this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider");this._mouseDestroy()},_mouseCapture:function(d){var e=this.options;if(e.disabled){return false}this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()};this.elementOffset=this.element.offset();var h={x:d.pageX,y:d.pageY};var j=this._normValueFromMouse(h);var c=this._valueMax()-this._valueMin()+1,f;var k=this,i;this.handles.each(function(l){var m=Math.abs(j-k.values(l));if(c>m){c=m;f=a(this);i=l}});if(e.range==true&&this.values(1)==e.min){f=a(this.handles[++i])}this._start(d,i);k._handleIndex=i;f.addClass("ui-state-active").focus();var g=f.offset();var b=!a(d.target).parents().andSelf().is(".ui-slider-handle");this._clickOffset=b?{left:0,top:0}:{left:d.pageX-g.left-(f.width()/2),top:d.pageY-g.top-(f.height()/2)-(parseInt(f.css("borderTopWidth"),10)||0)-(parseInt(f.css("borderBottomWidth"),10)||0)+(parseInt(f.css("marginTop"),10)||0)};j=this._normValueFromMouse(h);this._slide(d,i,j);return true},_mouseStart:function(b){return true},_mouseDrag:function(d){var b={x:d.pageX,y:d.pageY};var c=this._normValueFromMouse(b);this._slide(d,this._handleIndex,c);return false},_mouseStop:function(b){this.handles.removeClass("ui-state-active");this._stop(b,this._handleIndex);this._change(b,this._handleIndex);this._handleIndex=null;this._clickOffset=null;return false},_detectOrientation:function(){this.orientation=this.options.orientation=="vertical"?"vertical":"horizontal"},_normValueFromMouse:function(d){var c,h;if("horizontal"==this.orientation){c=this.elementSize.width;h=d.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)}else{c=this.elementSize.height;h=d.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)}var f=(h/c);if(f>1){f=1}if(f<0){f=0}if("vertical"==this.orientation){f=1-f}var e=this._valueMax()-this._valueMin(),i=f*e,b=i%this.options.step,g=this._valueMin()+i-b;if(b>(this.options.step/2)){g+=this.options.step}return parseFloat(g.toFixed(5))},_start:function(d,c){var b={handle:this.handles[c],value:this.value()};if(this.options.values&&this.options.values.length){b.value=this.values(c);b.values=this.values()}this._trigger("start",d,b)},_slide:function(f,e,d){var g=this.handles[e];if(this.options.values&&this.options.values.length){var b=this.values(e?0:1);if((this.options.values.length==2&&this.options.range===true)&&((e==0&&d>b)||(e==1&&d<b))){d=b}if(d!=this.values(e)){var c=this.values();c[e]=d;var h=this._trigger("slide",f,{handle:this.handles[e],value:d,values:c});var b=this.values(e?0:1);if(h!==false){this.values(e,d,(f.type=="mousedown"&&this.options.animate),true)}}}else{if(d!=this.value()){var h=this._trigger("slide",f,{handle:this.handles[e],value:d});if(h!==false){this._setData("value",d,(f.type=="mousedown"&&this.options.animate))}}}},_stop:function(d,c){var b={handle:this.handles[c],value:this.value()};if(this.options.values&&this.options.values.length){b.value=this.values(c);b.values=this.values()}this._trigger("stop",d,b)},_change:function(d,c){var b={handle:this.handles[c],value:this.value()};if(this.options.values&&this.options.values.length){b.value=this.values(c);b.values=this.values()}this._trigger("change",d,b)},value:function(b){if(arguments.length){this._setData("value",b);this._change(null,0)}return this._value()},values:function(b,e,c,d){if(arguments.length>1){this.options.values[b]=e;this._refreshValue(c);if(!d){this._change(null,b)}}if(arguments.length){if(this.options.values&&this.options.values.length){return this._values(b)}else{return this.value()}}else{return this._values()}},_setData:function(b,d,c){a.widget.prototype._setData.apply(this,arguments);switch(b){case"disabled":if(d){this.handles.filter(".ui-state-focus").blur();this.handles.removeClass("ui-state-hover");this.handles.attr("disabled","disabled")}else{this.handles.removeAttr("disabled")}case"orientation":this._detectOrientation();this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation);this._refreshValue(c);break;case"value":this._refreshValue(c);break}},_step:function(){var b=this.options.step;return b},_value:function(){var b=this.options.value;if(b<this._valueMin()){b=this._valueMin()}if(b>this._valueMax()){b=this._valueMax()}return b},_values:function(b){if(arguments.length){var c=this.options.values[b];if(c<this._valueMin()){c=this._valueMin()}if(c>this._valueMax()){c=this._valueMax()}return c}else{return this.options.values}},_valueMin:function(){var b=this.options.min;return b},_valueMax:function(){var b=this.options.max;return b},_refreshValue:function(c){var f=this.options.range,d=this.options,l=this;if(this.options.values&&this.options.values.length){var i,h;this.handles.each(function(p,n){var o=(l.values(p)-l._valueMin())/(l._valueMax()-l._valueMin())*100;var m={};m[l.orientation=="horizontal"?"left":"bottom"]=o+"%";a(this).stop(1,1)[c?"animate":"css"](m,d.animate);if(l.options.range===true){if(l.orientation=="horizontal"){(p==0)&&l.range.stop(1,1)[c?"animate":"css"]({left:o+"%"},d.animate);(p==1)&&l.range[c?"animate":"css"]({width:(o-lastValPercent)+"%"},{queue:false,duration:d.animate})}else{(p==0)&&l.range.stop(1,1)[c?"animate":"css"]({bottom:(o)+"%"},d.animate);(p==1)&&l.range[c?"animate":"css"]({height:(o-lastValPercent)+"%"},{queue:false,duration:d.animate})}}lastValPercent=o})}else{var j=this.value(),g=this._valueMin(),k=this._valueMax(),e=k!=g?(j-g)/(k-g)*100:0;var b={};b[l.orientation=="horizontal"?"left":"bottom"]=e+"%";this.handle.stop(1,1)[c?"animate":"css"](b,d.animate);(f=="min")&&(this.orientation=="horizontal")&&this.range.stop(1,1)[c?"animate":"css"]({width:e+"%"},d.animate);(f=="max")&&(this.orientation=="horizontal")&&this.range[c?"animate":"css"]({width:(100-e)+"%"},{queue:false,duration:d.animate});(f=="min")&&(this.orientation=="vertical")&&this.range.stop(1,1)[c?"animate":"css"]({height:e+"%"},d.animate);(f=="max")&&(this.orientation=="vertical")&&this.range[c?"animate":"css"]({height:(100-e)+"%"},{queue:false,duration:d.animate})}}}));a.extend(a.ui.slider,{getter:"value values",version:"1.7.2",eventPrefix:"slide",defaults:{animate:false,delay:0,distance:0,max:100,min:0,orientation:"horizontal",range:false,step:1,value:0,values:null}})})(jQuery);;/*
 * jQuery UI Tabs 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Tabs
 *
 * Depends:
 *	ui.core.js
 */
(function(a){a.widget("ui.tabs",{_init:function(){if(this.options.deselectable!==undefined){this.options.collapsible=this.options.deselectable}this._tabify(true)},_setData:function(b,c){if(b=="selected"){if(this.options.collapsible&&c==this.options.selected){return}this.select(c)}else{this.options[b]=c;if(b=="deselectable"){this.options.collapsible=c}this._tabify()}},_tabId:function(b){return b.title&&b.title.replace(/\s/g,"_").replace(/[^A-Za-z0-9\-_:\.]/g,"")||this.options.idPrefix+a.data(b)},_sanitizeSelector:function(b){return b.replace(/:/g,"\\:")},_cookie:function(){var b=this.cookie||(this.cookie=this.options.cookie.name||"ui-tabs-"+a.data(this.list[0]));return a.cookie.apply(null,[b].concat(a.makeArray(arguments)))},_ui:function(c,b){return{tab:c,panel:b,index:this.anchors.index(c)}},_cleanup:function(){this.lis.filter(".ui-state-processing").removeClass("ui-state-processing").find("span:data(label.tabs)").each(function(){var b=a(this);b.html(b.data("label.tabs")).removeData("label.tabs")})},_tabify:function(n){this.list=this.element.children("ul:first");this.lis=a("li:has(a[href])",this.list);this.anchors=this.lis.map(function(){return a("a",this)[0]});this.panels=a([]);var p=this,d=this.options;var c=/^#.+/;this.anchors.each(function(r,o){var q=a(o).attr("href");var s=q.split("#")[0],u;if(s&&(s===location.toString().split("#")[0]||(u=a("base")[0])&&s===u.href)){q=o.hash;o.href=q}if(c.test(q)){p.panels=p.panels.add(p._sanitizeSelector(q))}else{if(q!="#"){a.data(o,"href.tabs",q);a.data(o,"load.tabs",q.replace(/#.*$/,""));var w=p._tabId(o);o.href="#"+w;var v=a("#"+w);if(!v.length){v=a(d.panelTemplate).attr("id",w).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").insertAfter(p.panels[r-1]||p.list);v.data("destroy.tabs",true)}p.panels=p.panels.add(v)}else{d.disabled.push(r)}}});if(n){this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all");this.list.addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");this.lis.addClass("ui-state-default ui-corner-top");this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom");if(d.selected===undefined){if(location.hash){this.anchors.each(function(q,o){if(o.hash==location.hash){d.selected=q;return false}})}if(typeof d.selected!="number"&&d.cookie){d.selected=parseInt(p._cookie(),10)}if(typeof d.selected!="number"&&this.lis.filter(".ui-tabs-selected").length){d.selected=this.lis.index(this.lis.filter(".ui-tabs-selected"))}d.selected=d.selected||0}else{if(d.selected===null){d.selected=-1}}d.selected=((d.selected>=0&&this.anchors[d.selected])||d.selected<0)?d.selected:0;d.disabled=a.unique(d.disabled.concat(a.map(this.lis.filter(".ui-state-disabled"),function(q,o){return p.lis.index(q)}))).sort();if(a.inArray(d.selected,d.disabled)!=-1){d.disabled.splice(a.inArray(d.selected,d.disabled),1)}this.panels.addClass("ui-tabs-hide");this.lis.removeClass("ui-tabs-selected ui-state-active");if(d.selected>=0&&this.anchors.length){this.panels.eq(d.selected).removeClass("ui-tabs-hide");this.lis.eq(d.selected).addClass("ui-tabs-selected ui-state-active");p.element.queue("tabs",function(){p._trigger("show",null,p._ui(p.anchors[d.selected],p.panels[d.selected]))});this.load(d.selected)}a(window).bind("unload",function(){p.lis.add(p.anchors).unbind(".tabs");p.lis=p.anchors=p.panels=null})}else{d.selected=this.lis.index(this.lis.filter(".ui-tabs-selected"))}this.element[d.collapsible?"addClass":"removeClass"]("ui-tabs-collapsible");if(d.cookie){this._cookie(d.selected,d.cookie)}for(var g=0,m;(m=this.lis[g]);g++){a(m)[a.inArray(g,d.disabled)!=-1&&!a(m).hasClass("ui-tabs-selected")?"addClass":"removeClass"]("ui-state-disabled")}if(d.cache===false){this.anchors.removeData("cache.tabs")}this.lis.add(this.anchors).unbind(".tabs");if(d.event!="mouseover"){var f=function(o,i){if(i.is(":not(.ui-state-disabled)")){i.addClass("ui-state-"+o)}};var j=function(o,i){i.removeClass("ui-state-"+o)};this.lis.bind("mouseover.tabs",function(){f("hover",a(this))});this.lis.bind("mouseout.tabs",function(){j("hover",a(this))});this.anchors.bind("focus.tabs",function(){f("focus",a(this).closest("li"))});this.anchors.bind("blur.tabs",function(){j("focus",a(this).closest("li"))})}var b,h;if(d.fx){if(a.isArray(d.fx)){b=d.fx[0];h=d.fx[1]}else{b=h=d.fx}}function e(i,o){i.css({display:""});if(a.browser.msie&&o.opacity){i[0].style.removeAttribute("filter")}}var k=h?function(i,o){a(i).closest("li").removeClass("ui-state-default").addClass("ui-tabs-selected ui-state-active");o.hide().removeClass("ui-tabs-hide").animate(h,h.duration||"normal",function(){e(o,h);p._trigger("show",null,p._ui(i,o[0]))})}:function(i,o){a(i).closest("li").removeClass("ui-state-default").addClass("ui-tabs-selected ui-state-active");o.removeClass("ui-tabs-hide");p._trigger("show",null,p._ui(i,o[0]))};var l=b?function(o,i){i.animate(b,b.duration||"normal",function(){p.lis.removeClass("ui-tabs-selected ui-state-active").addClass("ui-state-default");i.addClass("ui-tabs-hide");e(i,b);p.element.dequeue("tabs")})}:function(o,i,q){p.lis.removeClass("ui-tabs-selected ui-state-active").addClass("ui-state-default");i.addClass("ui-tabs-hide");p.element.dequeue("tabs")};this.anchors.bind(d.event+".tabs",function(){var o=this,r=a(this).closest("li"),i=p.panels.filter(":not(.ui-tabs-hide)"),q=a(p._sanitizeSelector(this.hash));if((r.hasClass("ui-tabs-selected")&&!d.collapsible)||r.hasClass("ui-state-disabled")||r.hasClass("ui-state-processing")||p._trigger("select",null,p._ui(this,q[0]))===false){this.blur();return false}d.selected=p.anchors.index(this);p.abort();if(d.collapsible){if(r.hasClass("ui-tabs-selected")){d.selected=-1;if(d.cookie){p._cookie(d.selected,d.cookie)}p.element.queue("tabs",function(){l(o,i)}).dequeue("tabs");this.blur();return false}else{if(!i.length){if(d.cookie){p._cookie(d.selected,d.cookie)}p.element.queue("tabs",function(){k(o,q)});p.load(p.anchors.index(this));this.blur();return false}}}if(d.cookie){p._cookie(d.selected,d.cookie)}if(q.length){if(i.length){p.element.queue("tabs",function(){l(o,i)})}p.element.queue("tabs",function(){k(o,q)});p.load(p.anchors.index(this))}else{throw"jQuery UI Tabs: Mismatching fragment identifier."}if(a.browser.msie){this.blur()}});this.anchors.bind("click.tabs",function(){return false})},destroy:function(){var b=this.options;this.abort();this.element.unbind(".tabs").removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible").removeData("tabs");this.list.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");this.anchors.each(function(){var c=a.data(this,"href.tabs");if(c){this.href=c}var d=a(this).unbind(".tabs");a.each(["href","load","cache"],function(e,f){d.removeData(f+".tabs")})});this.lis.unbind(".tabs").add(this.panels).each(function(){if(a.data(this,"destroy.tabs")){a(this).remove()}else{a(this).removeClass(["ui-state-default","ui-corner-top","ui-tabs-selected","ui-state-active","ui-state-hover","ui-state-focus","ui-state-disabled","ui-tabs-panel","ui-widget-content","ui-corner-bottom","ui-tabs-hide"].join(" "))}});if(b.cookie){this._cookie(null,b.cookie)}},add:function(e,d,c){if(c===undefined){c=this.anchors.length}var b=this,g=this.options,i=a(g.tabTemplate.replace(/#\{href\}/g,e).replace(/#\{label\}/g,d)),h=!e.indexOf("#")?e.replace("#",""):this._tabId(a("a",i)[0]);i.addClass("ui-state-default ui-corner-top").data("destroy.tabs",true);var f=a("#"+h);if(!f.length){f=a(g.panelTemplate).attr("id",h).data("destroy.tabs",true)}f.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide");if(c>=this.lis.length){i.appendTo(this.list);f.appendTo(this.list[0].parentNode)}else{i.insertBefore(this.lis[c]);f.insertBefore(this.panels[c])}g.disabled=a.map(g.disabled,function(k,j){return k>=c?++k:k});this._tabify();if(this.anchors.length==1){i.addClass("ui-tabs-selected ui-state-active");f.removeClass("ui-tabs-hide");this.element.queue("tabs",function(){b._trigger("show",null,b._ui(b.anchors[0],b.panels[0]))});this.load(0)}this._trigger("add",null,this._ui(this.anchors[c],this.panels[c]))},remove:function(b){var d=this.options,e=this.lis.eq(b).remove(),c=this.panels.eq(b).remove();if(e.hasClass("ui-tabs-selected")&&this.anchors.length>1){this.select(b+(b+1<this.anchors.length?1:-1))}d.disabled=a.map(a.grep(d.disabled,function(g,f){return g!=b}),function(g,f){return g>=b?--g:g});this._tabify();this._trigger("remove",null,this._ui(e.find("a")[0],c[0]))},enable:function(b){var c=this.options;if(a.inArray(b,c.disabled)==-1){return}this.lis.eq(b).removeClass("ui-state-disabled");c.disabled=a.grep(c.disabled,function(e,d){return e!=b});this._trigger("enable",null,this._ui(this.anchors[b],this.panels[b]))},disable:function(c){var b=this,d=this.options;if(c!=d.selected){this.lis.eq(c).addClass("ui-state-disabled");d.disabled.push(c);d.disabled.sort();this._trigger("disable",null,this._ui(this.anchors[c],this.panels[c]))}},select:function(b){if(typeof b=="string"){b=this.anchors.index(this.anchors.filter("[href$="+b+"]"))}else{if(b===null){b=-1}}if(b==-1&&this.options.collapsible){b=this.options.selected}this.anchors.eq(b).trigger(this.options.event+".tabs")},load:function(e){var c=this,g=this.options,b=this.anchors.eq(e)[0],d=a.data(b,"load.tabs");this.abort();if(!d||this.element.queue("tabs").length!==0&&a.data(b,"cache.tabs")){this.element.dequeue("tabs");return}this.lis.eq(e).addClass("ui-state-processing");if(g.spinner){var f=a("span",b);f.data("label.tabs",f.html()).html(g.spinner)}this.xhr=a.ajax(a.extend({},g.ajaxOptions,{url:d,success:function(i,h){a(c._sanitizeSelector(b.hash)).html(i);c._cleanup();if(g.cache){a.data(b,"cache.tabs",true)}c._trigger("load",null,c._ui(c.anchors[e],c.panels[e]));try{g.ajaxOptions.success(i,h)}catch(j){}c.element.dequeue("tabs")}}))},abort:function(){this.element.queue([]);this.panels.stop(false,true);if(this.xhr){this.xhr.abort();delete this.xhr}this._cleanup()},url:function(c,b){this.anchors.eq(c).removeData("cache.tabs").data("load.tabs",b)},length:function(){return this.anchors.length}});a.extend(a.ui.tabs,{version:"1.7.2",getter:"length",defaults:{ajaxOptions:null,cache:false,cookie:null,collapsible:false,disabled:[],event:"click",fx:null,idPrefix:"ui-tabs-",panelTemplate:"<div></div>",spinner:"<em>Loading&#8230;</em>",tabTemplate:'<li><a href="#{href}"><span>#{label}</span></a></li>'}});a.extend(a.ui.tabs.prototype,{rotation:null,rotate:function(d,f){var b=this,g=this.options;var c=b._rotate||(b._rotate=function(h){clearTimeout(b.rotation);b.rotation=setTimeout(function(){var i=g.selected;b.select(++i<b.anchors.length?i:0)},d);if(h){h.stopPropagation()}});var e=b._unrotate||(b._unrotate=!f?function(h){if(h.clientX){b.rotate(null)}}:function(h){t=g.selected;c()});if(d){this.element.bind("tabsshow",c);this.anchors.bind(g.event+".tabs",e);c()}else{clearTimeout(b.rotation);this.element.unbind("tabsshow",c);this.anchors.unbind(g.event+".tabs",e);delete this._rotate;delete this._unrotate}}})})(jQuery);;/*
 * jQuery UI Datepicker 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Datepicker
 *
 * Depends:
 *	ui.core.js
 */
(function($){$.extend($.ui,{datepicker:{version:"1.7.2"}});var PROP_NAME="datepicker";function Datepicker(){this.debug=false;this._curInst=null;this._keyEvent=false;this._disabledInputs=[];this._datepickerShowing=false;this._inDialog=false;this._mainDivId="ui-datepicker-div";this._inlineClass="ui-datepicker-inline";this._appendClass="ui-datepicker-append";this._triggerClass="ui-datepicker-trigger";this._dialogClass="ui-datepicker-dialog";this._disableClass="ui-datepicker-disabled";this._unselectableClass="ui-datepicker-unselectable";this._currentClass="ui-datepicker-current-day";this._dayOverClass="ui-datepicker-days-cell-over";this.regional=[];this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],dateFormat:"mm/dd/yy",firstDay:0,isRTL:false};this._defaults={showOn:"focus",showAnim:"show",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:false,hideIfNoPrevNext:false,navigationAsDateFormat:false,gotoCurrent:false,changeMonth:false,changeYear:false,showMonthAfterYear:false,yearRange:"-10:+10",showOtherMonths:false,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"normal",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:true,showButtonPanel:false};$.extend(this._defaults,this.regional[""]);this.dpDiv=$('<div id="'+this._mainDivId+'" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all ui-helper-hidden-accessible"></div>')}$.extend(Datepicker.prototype,{markerClassName:"hasDatepicker",log:function(){if(this.debug){console.log.apply("",arguments)}},setDefaults:function(settings){extendRemove(this._defaults,settings||{});return this},_attachDatepicker:function(target,settings){var inlineSettings=null;for(var attrName in this._defaults){var attrValue=target.getAttribute("date:"+attrName);if(attrValue){inlineSettings=inlineSettings||{};try{inlineSettings[attrName]=eval(attrValue)}catch(err){inlineSettings[attrName]=attrValue}}}var nodeName=target.nodeName.toLowerCase();var inline=(nodeName=="div"||nodeName=="span");if(!target.id){target.id="dp"+(++this.uuid)}var inst=this._newInst($(target),inline);inst.settings=$.extend({},settings||{},inlineSettings||{});if(nodeName=="input"){this._connectDatepicker(target,inst)}else{if(inline){this._inlineDatepicker(target,inst)}}},_newInst:function(target,inline){var id=target[0].id.replace(/([:\[\]\.])/g,"\\\\$1");return{id:id,input:target,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:inline,dpDiv:(!inline?this.dpDiv:$('<div class="'+this._inlineClass+' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))}},_connectDatepicker:function(target,inst){var input=$(target);inst.append=$([]);inst.trigger=$([]);if(input.hasClass(this.markerClassName)){return}var appendText=this._get(inst,"appendText");var isRTL=this._get(inst,"isRTL");if(appendText){inst.append=$('<span class="'+this._appendClass+'">'+appendText+"</span>");input[isRTL?"before":"after"](inst.append)}var showOn=this._get(inst,"showOn");if(showOn=="focus"||showOn=="both"){input.focus(this._showDatepicker)}if(showOn=="button"||showOn=="both"){var buttonText=this._get(inst,"buttonText");var buttonImage=this._get(inst,"buttonImage");inst.trigger=$(this._get(inst,"buttonImageOnly")?$("<img/>").addClass(this._triggerClass).attr({src:buttonImage,alt:buttonText,title:buttonText}):$('<button type="button"></button>').addClass(this._triggerClass).html(buttonImage==""?buttonText:$("<img/>").attr({src:buttonImage,alt:buttonText,title:buttonText})));input[isRTL?"before":"after"](inst.trigger);inst.trigger.click(function(){if($.datepicker._datepickerShowing&&$.datepicker._lastInput==target){$.datepicker._hideDatepicker()}else{$.datepicker._showDatepicker(target)}return false})}input.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).bind("setData.datepicker",function(event,key,value){inst.settings[key]=value}).bind("getData.datepicker",function(event,key){return this._get(inst,key)});$.data(target,PROP_NAME,inst)},_inlineDatepicker:function(target,inst){var divSpan=$(target);if(divSpan.hasClass(this.markerClassName)){return}divSpan.addClass(this.markerClassName).append(inst.dpDiv).bind("setData.datepicker",function(event,key,value){inst.settings[key]=value}).bind("getData.datepicker",function(event,key){return this._get(inst,key)});$.data(target,PROP_NAME,inst);this._setDate(inst,this._getDefaultDate(inst));this._updateDatepicker(inst);this._updateAlternate(inst)},_dialogDatepicker:function(input,dateText,onSelect,settings,pos){var inst=this._dialogInst;if(!inst){var id="dp"+(++this.uuid);this._dialogInput=$('<input type="text" id="'+id+'" size="1" style="position: absolute; top: -100px;"/>');this._dialogInput.keydown(this._doKeyDown);$("body").append(this._dialogInput);inst=this._dialogInst=this._newInst(this._dialogInput,false);inst.settings={};$.data(this._dialogInput[0],PROP_NAME,inst)}extendRemove(inst.settings,settings||{});this._dialogInput.val(dateText);this._pos=(pos?(pos.length?pos:[pos.pageX,pos.pageY]):null);if(!this._pos){var browserWidth=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;var browserHeight=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;var scrollX=document.documentElement.scrollLeft||document.body.scrollLeft;var scrollY=document.documentElement.scrollTop||document.body.scrollTop;this._pos=[(browserWidth/2)-100+scrollX,(browserHeight/2)-150+scrollY]}this._dialogInput.css("left",this._pos[0]+"px").css("top",this._pos[1]+"px");inst.settings.onSelect=onSelect;this._inDialog=true;this.dpDiv.addClass(this._dialogClass);this._showDatepicker(this._dialogInput[0]);if($.blockUI){$.blockUI(this.dpDiv)}$.data(this._dialogInput[0],PROP_NAME,inst);return this},_destroyDatepicker:function(target){var $target=$(target);var inst=$.data(target,PROP_NAME);if(!$target.hasClass(this.markerClassName)){return}var nodeName=target.nodeName.toLowerCase();$.removeData(target,PROP_NAME);if(nodeName=="input"){inst.append.remove();inst.trigger.remove();$target.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress)}else{if(nodeName=="div"||nodeName=="span"){$target.removeClass(this.markerClassName).empty()}}},_enableDatepicker:function(target){var $target=$(target);var inst=$.data(target,PROP_NAME);if(!$target.hasClass(this.markerClassName)){return}var nodeName=target.nodeName.toLowerCase();if(nodeName=="input"){target.disabled=false;inst.trigger.filter("button").each(function(){this.disabled=false}).end().filter("img").css({opacity:"1.0",cursor:""})}else{if(nodeName=="div"||nodeName=="span"){var inline=$target.children("."+this._inlineClass);inline.children().removeClass("ui-state-disabled")}}this._disabledInputs=$.map(this._disabledInputs,function(value){return(value==target?null:value)})},_disableDatepicker:function(target){var $target=$(target);var inst=$.data(target,PROP_NAME);if(!$target.hasClass(this.markerClassName)){return}var nodeName=target.nodeName.toLowerCase();if(nodeName=="input"){target.disabled=true;inst.trigger.filter("button").each(function(){this.disabled=true}).end().filter("img").css({opacity:"0.5",cursor:"default"})}else{if(nodeName=="div"||nodeName=="span"){var inline=$target.children("."+this._inlineClass);inline.children().addClass("ui-state-disabled")}}this._disabledInputs=$.map(this._disabledInputs,function(value){return(value==target?null:value)});this._disabledInputs[this._disabledInputs.length]=target},_isDisabledDatepicker:function(target){if(!target){return false}for(var i=0;i<this._disabledInputs.length;i++){if(this._disabledInputs[i]==target){return true}}return false},_getInst:function(target){try{return $.data(target,PROP_NAME)}catch(err){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(target,name,value){var inst=this._getInst(target);if(arguments.length==2&&typeof name=="string"){return(name=="defaults"?$.extend({},$.datepicker._defaults):(inst?(name=="all"?$.extend({},inst.settings):this._get(inst,name)):null))}var settings=name||{};if(typeof name=="string"){settings={};settings[name]=value}if(inst){if(this._curInst==inst){this._hideDatepicker(null)}var date=this._getDateDatepicker(target);extendRemove(inst.settings,settings);this._setDateDatepicker(target,date);this._updateDatepicker(inst)}},_changeDatepicker:function(target,name,value){this._optionDatepicker(target,name,value)},_refreshDatepicker:function(target){var inst=this._getInst(target);if(inst){this._updateDatepicker(inst)}},_setDateDatepicker:function(target,date,endDate){var inst=this._getInst(target);if(inst){this._setDate(inst,date,endDate);this._updateDatepicker(inst);this._updateAlternate(inst)}},_getDateDatepicker:function(target){var inst=this._getInst(target);if(inst&&!inst.inline){this._setDateFromField(inst)}return(inst?this._getDate(inst):null)},_doKeyDown:function(event){var inst=$.datepicker._getInst(event.target);var handled=true;var isRTL=inst.dpDiv.is(".ui-datepicker-rtl");inst._keyEvent=true;if($.datepicker._datepickerShowing){switch(event.keyCode){case 9:$.datepicker._hideDatepicker(null,"");break;case 13:var sel=$("td."+$.datepicker._dayOverClass+", td."+$.datepicker._currentClass,inst.dpDiv);if(sel[0]){$.datepicker._selectDay(event.target,inst.selectedMonth,inst.selectedYear,sel[0])}else{$.datepicker._hideDatepicker(null,$.datepicker._get(inst,"duration"))}return false;break;case 27:$.datepicker._hideDatepicker(null,$.datepicker._get(inst,"duration"));break;case 33:$.datepicker._adjustDate(event.target,(event.ctrlKey?-$.datepicker._get(inst,"stepBigMonths"):-$.datepicker._get(inst,"stepMonths")),"M");break;case 34:$.datepicker._adjustDate(event.target,(event.ctrlKey?+$.datepicker._get(inst,"stepBigMonths"):+$.datepicker._get(inst,"stepMonths")),"M");break;case 35:if(event.ctrlKey||event.metaKey){$.datepicker._clearDate(event.target)}handled=event.ctrlKey||event.metaKey;break;case 36:if(event.ctrlKey||event.metaKey){$.datepicker._gotoToday(event.target)}handled=event.ctrlKey||event.metaKey;break;case 37:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,(isRTL?+1:-1),"D")}handled=event.ctrlKey||event.metaKey;if(event.originalEvent.altKey){$.datepicker._adjustDate(event.target,(event.ctrlKey?-$.datepicker._get(inst,"stepBigMonths"):-$.datepicker._get(inst,"stepMonths")),"M")}break;case 38:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,-7,"D")}handled=event.ctrlKey||event.metaKey;break;case 39:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,(isRTL?-1:+1),"D")}handled=event.ctrlKey||event.metaKey;if(event.originalEvent.altKey){$.datepicker._adjustDate(event.target,(event.ctrlKey?+$.datepicker._get(inst,"stepBigMonths"):+$.datepicker._get(inst,"stepMonths")),"M")}break;case 40:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,+7,"D")}handled=event.ctrlKey||event.metaKey;break;default:handled=false}}else{if(event.keyCode==36&&event.ctrlKey){$.datepicker._showDatepicker(this)}else{handled=false}}if(handled){event.preventDefault();event.stopPropagation()}},_doKeyPress:function(event){var inst=$.datepicker._getInst(event.target);if($.datepicker._get(inst,"constrainInput")){var chars=$.datepicker._possibleChars($.datepicker._get(inst,"dateFormat"));var chr=String.fromCharCode(event.charCode==undefined?event.keyCode:event.charCode);return event.ctrlKey||(chr<" "||!chars||chars.indexOf(chr)>-1)}},_showDatepicker:function(input){input=input.target||input;if(input.nodeName.toLowerCase()!="input"){input=$("input",input.parentNode)[0]}if($.datepicker._isDisabledDatepicker(input)||$.datepicker._lastInput==input){return}var inst=$.datepicker._getInst(input);var beforeShow=$.datepicker._get(inst,"beforeShow");extendRemove(inst.settings,(beforeShow?beforeShow.apply(input,[input,inst]):{}));$.datepicker._hideDatepicker(null,"");$.datepicker._lastInput=input;$.datepicker._setDateFromField(inst);if($.datepicker._inDialog){input.value=""}if(!$.datepicker._pos){$.datepicker._pos=$.datepicker._findPos(input);$.datepicker._pos[1]+=input.offsetHeight}var isFixed=false;$(input).parents().each(function(){isFixed|=$(this).css("position")=="fixed";return !isFixed});if(isFixed&&$.browser.opera){$.datepicker._pos[0]-=document.documentElement.scrollLeft;$.datepicker._pos[1]-=document.documentElement.scrollTop}var offset={left:$.datepicker._pos[0],top:$.datepicker._pos[1]};$.datepicker._pos=null;inst.rangeStart=null;inst.dpDiv.css({position:"absolute",display:"block",top:"-1000px"});$.datepicker._updateDatepicker(inst);offset=$.datepicker._checkOffset(inst,offset,isFixed);inst.dpDiv.css({position:($.datepicker._inDialog&&$.blockUI?"static":(isFixed?"fixed":"absolute")),display:"none",left:offset.left+"px",top:offset.top+"px"});if(!inst.inline){var showAnim=$.datepicker._get(inst,"showAnim")||"show";var duration=$.datepicker._get(inst,"duration");var postProcess=function(){$.datepicker._datepickerShowing=true;if($.browser.msie&&parseInt($.browser.version,10)<7){$("iframe.ui-datepicker-cover").css({width:inst.dpDiv.width()+4,height:inst.dpDiv.height()+4})}};if($.effects&&$.effects[showAnim]){inst.dpDiv.show(showAnim,$.datepicker._get(inst,"showOptions"),duration,postProcess)}else{inst.dpDiv[showAnim](duration,postProcess)}if(duration==""){postProcess()}if(inst.input[0].type!="hidden"){inst.input[0].focus()}$.datepicker._curInst=inst}},_updateDatepicker:function(inst){var dims={width:inst.dpDiv.width()+4,height:inst.dpDiv.height()+4};var self=this;inst.dpDiv.empty().append(this._generateHTML(inst)).find("iframe.ui-datepicker-cover").css({width:dims.width,height:dims.height}).end().find("button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a").bind("mouseout",function(){$(this).removeClass("ui-state-hover");if(this.className.indexOf("ui-datepicker-prev")!=-1){$(this).removeClass("ui-datepicker-prev-hover")}if(this.className.indexOf("ui-datepicker-next")!=-1){$(this).removeClass("ui-datepicker-next-hover")}}).bind("mouseover",function(){if(!self._isDisabledDatepicker(inst.inline?inst.dpDiv.parent()[0]:inst.input[0])){$(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");$(this).addClass("ui-state-hover");if(this.className.indexOf("ui-datepicker-prev")!=-1){$(this).addClass("ui-datepicker-prev-hover")}if(this.className.indexOf("ui-datepicker-next")!=-1){$(this).addClass("ui-datepicker-next-hover")}}}).end().find("."+this._dayOverClass+" a").trigger("mouseover").end();var numMonths=this._getNumberOfMonths(inst);var cols=numMonths[1];var width=17;if(cols>1){inst.dpDiv.addClass("ui-datepicker-multi-"+cols).css("width",(width*cols)+"em")}else{inst.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("")}inst.dpDiv[(numMonths[0]!=1||numMonths[1]!=1?"add":"remove")+"Class"]("ui-datepicker-multi");inst.dpDiv[(this._get(inst,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl");if(inst.input&&inst.input[0].type!="hidden"&&inst==$.datepicker._curInst){$(inst.input[0]).focus()}},_checkOffset:function(inst,offset,isFixed){var dpWidth=inst.dpDiv.outerWidth();var dpHeight=inst.dpDiv.outerHeight();var inputWidth=inst.input?inst.input.outerWidth():0;var inputHeight=inst.input?inst.input.outerHeight():0;var viewWidth=(window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth)+$(document).scrollLeft();var viewHeight=(window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight)+$(document).scrollTop();offset.left-=(this._get(inst,"isRTL")?(dpWidth-inputWidth):0);offset.left-=(isFixed&&offset.left==inst.input.offset().left)?$(document).scrollLeft():0;offset.top-=(isFixed&&offset.top==(inst.input.offset().top+inputHeight))?$(document).scrollTop():0;offset.left-=(offset.left+dpWidth>viewWidth&&viewWidth>dpWidth)?Math.abs(offset.left+dpWidth-viewWidth):0;offset.top-=(offset.top+dpHeight>viewHeight&&viewHeight>dpHeight)?Math.abs(offset.top+dpHeight+inputHeight*2-viewHeight):0;return offset},_findPos:function(obj){while(obj&&(obj.type=="hidden"||obj.nodeType!=1)){obj=obj.nextSibling}var position=$(obj).offset();return[position.left,position.top]},_hideDatepicker:function(input,duration){var inst=this._curInst;if(!inst||(input&&inst!=$.data(input,PROP_NAME))){return}if(inst.stayOpen){this._selectDate("#"+inst.id,this._formatDate(inst,inst.currentDay,inst.currentMonth,inst.currentYear))}inst.stayOpen=false;if(this._datepickerShowing){duration=(duration!=null?duration:this._get(inst,"duration"));var showAnim=this._get(inst,"showAnim");var postProcess=function(){$.datepicker._tidyDialog(inst)};if(duration!=""&&$.effects&&$.effects[showAnim]){inst.dpDiv.hide(showAnim,$.datepicker._get(inst,"showOptions"),duration,postProcess)}else{inst.dpDiv[(duration==""?"hide":(showAnim=="slideDown"?"slideUp":(showAnim=="fadeIn"?"fadeOut":"hide")))](duration,postProcess)}if(duration==""){this._tidyDialog(inst)}var onClose=this._get(inst,"onClose");if(onClose){onClose.apply((inst.input?inst.input[0]:null),[(inst.input?inst.input.val():""),inst])}this._datepickerShowing=false;this._lastInput=null;if(this._inDialog){this._dialogInput.css({position:"absolute",left:"0",top:"-100px"});if($.blockUI){$.unblockUI();$("body").append(this.dpDiv)}}this._inDialog=false}this._curInst=null},_tidyDialog:function(inst){inst.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(event){if(!$.datepicker._curInst){return}var $target=$(event.target);if(($target.parents("#"+$.datepicker._mainDivId).length==0)&&!$target.hasClass($.datepicker.markerClassName)&&!$target.hasClass($.datepicker._triggerClass)&&$.datepicker._datepickerShowing&&!($.datepicker._inDialog&&$.blockUI)){$.datepicker._hideDatepicker(null,"")}},_adjustDate:function(id,offset,period){var target=$(id);var inst=this._getInst(target[0]);if(this._isDisabledDatepicker(target[0])){return}this._adjustInstDate(inst,offset+(period=="M"?this._get(inst,"showCurrentAtPos"):0),period);this._updateDatepicker(inst)},_gotoToday:function(id){var target=$(id);var inst=this._getInst(target[0]);if(this._get(inst,"gotoCurrent")&&inst.currentDay){inst.selectedDay=inst.currentDay;inst.drawMonth=inst.selectedMonth=inst.currentMonth;inst.drawYear=inst.selectedYear=inst.currentYear}else{var date=new Date();inst.selectedDay=date.getDate();inst.drawMonth=inst.selectedMonth=date.getMonth();inst.drawYear=inst.selectedYear=date.getFullYear()}this._notifyChange(inst);this._adjustDate(target)},_selectMonthYear:function(id,select,period){var target=$(id);var inst=this._getInst(target[0]);inst._selectingMonthYear=false;inst["selected"+(period=="M"?"Month":"Year")]=inst["draw"+(period=="M"?"Month":"Year")]=parseInt(select.options[select.selectedIndex].value,10);this._notifyChange(inst);this._adjustDate(target)},_clickMonthYear:function(id){var target=$(id);var inst=this._getInst(target[0]);if(inst.input&&inst._selectingMonthYear&&!$.browser.msie){inst.input[0].focus()}inst._selectingMonthYear=!inst._selectingMonthYear},_selectDay:function(id,month,year,td){var target=$(id);if($(td).hasClass(this._unselectableClass)||this._isDisabledDatepicker(target[0])){return}var inst=this._getInst(target[0]);inst.selectedDay=inst.currentDay=$("a",td).html();inst.selectedMonth=inst.currentMonth=month;inst.selectedYear=inst.currentYear=year;if(inst.stayOpen){inst.endDay=inst.endMonth=inst.endYear=null}this._selectDate(id,this._formatDate(inst,inst.currentDay,inst.currentMonth,inst.currentYear));if(inst.stayOpen){inst.rangeStart=this._daylightSavingAdjust(new Date(inst.currentYear,inst.currentMonth,inst.currentDay));this._updateDatepicker(inst)}},_clearDate:function(id){var target=$(id);var inst=this._getInst(target[0]);inst.stayOpen=false;inst.endDay=inst.endMonth=inst.endYear=inst.rangeStart=null;this._selectDate(target,"")},_selectDate:function(id,dateStr){var target=$(id);var inst=this._getInst(target[0]);dateStr=(dateStr!=null?dateStr:this._formatDate(inst));if(inst.input){inst.input.val(dateStr)}this._updateAlternate(inst);var onSelect=this._get(inst,"onSelect");if(onSelect){onSelect.apply((inst.input?inst.input[0]:null),[dateStr,inst])}else{if(inst.input){inst.input.trigger("change")}}if(inst.inline){this._updateDatepicker(inst)}else{if(!inst.stayOpen){this._hideDatepicker(null,this._get(inst,"duration"));this._lastInput=inst.input[0];if(typeof(inst.input[0])!="object"){inst.input[0].focus()}this._lastInput=null}}},_updateAlternate:function(inst){var altField=this._get(inst,"altField");if(altField){var altFormat=this._get(inst,"altFormat")||this._get(inst,"dateFormat");var date=this._getDate(inst);dateStr=this.formatDate(altFormat,date,this._getFormatConfig(inst));$(altField).each(function(){$(this).val(dateStr)})}},noWeekends:function(date){var day=date.getDay();return[(day>0&&day<6),""]},iso8601Week:function(date){var checkDate=new Date(date.getFullYear(),date.getMonth(),date.getDate());var firstMon=new Date(checkDate.getFullYear(),1-1,4);var firstDay=firstMon.getDay()||7;firstMon.setDate(firstMon.getDate()+1-firstDay);if(firstDay<4&&checkDate<firstMon){checkDate.setDate(checkDate.getDate()-3);return $.datepicker.iso8601Week(checkDate)}else{if(checkDate>new Date(checkDate.getFullYear(),12-1,28)){firstDay=new Date(checkDate.getFullYear()+1,1-1,4).getDay()||7;if(firstDay>4&&(checkDate.getDay()||7)<firstDay-3){return 1}}}return Math.floor(((checkDate-firstMon)/86400000)/7)+1},parseDate:function(format,value,settings){if(format==null||value==null){throw"Invalid arguments"}value=(typeof value=="object"?value.toString():value+"");if(value==""){return null}var shortYearCutoff=(settings?settings.shortYearCutoff:null)||this._defaults.shortYearCutoff;var dayNamesShort=(settings?settings.dayNamesShort:null)||this._defaults.dayNamesShort;var dayNames=(settings?settings.dayNames:null)||this._defaults.dayNames;var monthNamesShort=(settings?settings.monthNamesShort:null)||this._defaults.monthNamesShort;var monthNames=(settings?settings.monthNames:null)||this._defaults.monthNames;var year=-1;var month=-1;var day=-1;var doy=-1;var literal=false;var lookAhead=function(match){var matches=(iFormat+1<format.length&&format.charAt(iFormat+1)==match);if(matches){iFormat++}return matches};var getNumber=function(match){lookAhead(match);var origSize=(match=="@"?14:(match=="y"?4:(match=="o"?3:2)));var size=origSize;var num=0;while(size>0&&iValue<value.length&&value.charAt(iValue)>="0"&&value.charAt(iValue)<="9"){num=num*10+parseInt(value.charAt(iValue++),10);size--}if(size==origSize){throw"Missing number at position "+iValue}return num};var getName=function(match,shortNames,longNames){var names=(lookAhead(match)?longNames:shortNames);var size=0;for(var j=0;j<names.length;j++){size=Math.max(size,names[j].length)}var name="";var iInit=iValue;while(size>0&&iValue<value.length){name+=value.charAt(iValue++);for(var i=0;i<names.length;i++){if(name==names[i]){return i+1}}size--}throw"Unknown name at position "+iInit};var checkLiteral=function(){if(value.charAt(iValue)!=format.charAt(iFormat)){throw"Unexpected literal at position "+iValue}iValue++};var iValue=0;for(var iFormat=0;iFormat<format.length;iFormat++){if(literal){if(format.charAt(iFormat)=="'"&&!lookAhead("'")){literal=false}else{checkLiteral()}}else{switch(format.charAt(iFormat)){case"d":day=getNumber("d");break;case"D":getName("D",dayNamesShort,dayNames);break;case"o":doy=getNumber("o");break;case"m":month=getNumber("m");break;case"M":month=getName("M",monthNamesShort,monthNames);break;case"y":year=getNumber("y");break;case"@":var date=new Date(getNumber("@"));year=date.getFullYear();month=date.getMonth()+1;day=date.getDate();break;case"'":if(lookAhead("'")){checkLiteral()}else{literal=true}break;default:checkLiteral()}}}if(year==-1){year=new Date().getFullYear()}else{if(year<100){year+=new Date().getFullYear()-new Date().getFullYear()%100+(year<=shortYearCutoff?0:-100)}}if(doy>-1){month=1;day=doy;do{var dim=this._getDaysInMonth(year,month-1);if(day<=dim){break}month++;day-=dim}while(true)}var date=this._daylightSavingAdjust(new Date(year,month-1,day));if(date.getFullYear()!=year||date.getMonth()+1!=month||date.getDate()!=day){throw"Invalid date"}return date},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TIMESTAMP:"@",W3C:"yy-mm-dd",formatDate:function(format,date,settings){if(!date){return""}var dayNamesShort=(settings?settings.dayNamesShort:null)||this._defaults.dayNamesShort;var dayNames=(settings?settings.dayNames:null)||this._defaults.dayNames;var monthNamesShort=(settings?settings.monthNamesShort:null)||this._defaults.monthNamesShort;var monthNames=(settings?settings.monthNames:null)||this._defaults.monthNames;var lookAhead=function(match){var matches=(iFormat+1<format.length&&format.charAt(iFormat+1)==match);if(matches){iFormat++}return matches};var formatNumber=function(match,value,len){var num=""+value;if(lookAhead(match)){while(num.length<len){num="0"+num}}return num};var formatName=function(match,value,shortNames,longNames){return(lookAhead(match)?longNames[value]:shortNames[value])};var output="";var literal=false;if(date){for(var iFormat=0;iFormat<format.length;iFormat++){if(literal){if(format.charAt(iFormat)=="'"&&!lookAhead("'")){literal=false}else{output+=format.charAt(iFormat)}}else{switch(format.charAt(iFormat)){case"d":output+=formatNumber("d",date.getDate(),2);break;case"D":output+=formatName("D",date.getDay(),dayNamesShort,dayNames);break;case"o":var doy=date.getDate();for(var m=date.getMonth()-1;m>=0;m--){doy+=this._getDaysInMonth(date.getFullYear(),m)}output+=formatNumber("o",doy,3);break;case"m":output+=formatNumber("m",date.getMonth()+1,2);break;case"M":output+=formatName("M",date.getMonth(),monthNamesShort,monthNames);break;case"y":output+=(lookAhead("y")?date.getFullYear():(date.getYear()%100<10?"0":"")+date.getYear()%100);break;case"@":output+=date.getTime();break;case"'":if(lookAhead("'")){output+="'"}else{literal=true}break;default:output+=format.charAt(iFormat)}}}}return output},_possibleChars:function(format){var chars="";var literal=false;for(var iFormat=0;iFormat<format.length;iFormat++){if(literal){if(format.charAt(iFormat)=="'"&&!lookAhead("'")){literal=false}else{chars+=format.charAt(iFormat)}}else{switch(format.charAt(iFormat)){case"d":case"m":case"y":case"@":chars+="0123456789";break;case"D":case"M":return null;case"'":if(lookAhead("'")){chars+="'"}else{literal=true}break;default:chars+=format.charAt(iFormat)}}}return chars},_get:function(inst,name){return inst.settings[name]!==undefined?inst.settings[name]:this._defaults[name]},_setDateFromField:function(inst){var dateFormat=this._get(inst,"dateFormat");var dates=inst.input?inst.input.val():null;inst.endDay=inst.endMonth=inst.endYear=null;var date=defaultDate=this._getDefaultDate(inst);var settings=this._getFormatConfig(inst);try{date=this.parseDate(dateFormat,dates,settings)||defaultDate}catch(event){this.log(event);date=defaultDate}inst.selectedDay=date.getDate();inst.drawMonth=inst.selectedMonth=date.getMonth();inst.drawYear=inst.selectedYear=date.getFullYear();inst.currentDay=(dates?date.getDate():0);inst.currentMonth=(dates?date.getMonth():0);inst.currentYear=(dates?date.getFullYear():0);this._adjustInstDate(inst)},_getDefaultDate:function(inst){var date=this._determineDate(this._get(inst,"defaultDate"),new Date());var minDate=this._getMinMaxDate(inst,"min",true);var maxDate=this._getMinMaxDate(inst,"max");date=(minDate&&date<minDate?minDate:date);date=(maxDate&&date>maxDate?maxDate:date);return date},_determineDate:function(date,defaultDate){var offsetNumeric=function(offset){var date=new Date();date.setDate(date.getDate()+offset);return date};var offsetString=function(offset,getDaysInMonth){var date=new Date();var year=date.getFullYear();var month=date.getMonth();var day=date.getDate();var pattern=/([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g;var matches=pattern.exec(offset);while(matches){switch(matches[2]||"d"){case"d":case"D":day+=parseInt(matches[1],10);break;case"w":case"W":day+=parseInt(matches[1],10)*7;break;case"m":case"M":month+=parseInt(matches[1],10);day=Math.min(day,getDaysInMonth(year,month));break;case"y":case"Y":year+=parseInt(matches[1],10);day=Math.min(day,getDaysInMonth(year,month));break}matches=pattern.exec(offset)}return new Date(year,month,day)};date=(date==null?defaultDate:(typeof date=="string"?offsetString(date,this._getDaysInMonth):(typeof date=="number"?(isNaN(date)?defaultDate:offsetNumeric(date)):date)));date=(date&&date.toString()=="Invalid Date"?defaultDate:date);if(date){date.setHours(0);date.setMinutes(0);date.setSeconds(0);date.setMilliseconds(0)}return this._daylightSavingAdjust(date)},_daylightSavingAdjust:function(date){if(!date){return null}date.setHours(date.getHours()>12?date.getHours()+2:0);return date},_setDate:function(inst,date,endDate){var clear=!(date);var origMonth=inst.selectedMonth;var origYear=inst.selectedYear;date=this._determineDate(date,new Date());inst.selectedDay=inst.currentDay=date.getDate();inst.drawMonth=inst.selectedMonth=inst.currentMonth=date.getMonth();inst.drawYear=inst.selectedYear=inst.currentYear=date.getFullYear();if(origMonth!=inst.selectedMonth||origYear!=inst.selectedYear){this._notifyChange(inst)}this._adjustInstDate(inst);if(inst.input){inst.input.val(clear?"":this._formatDate(inst))}},_getDate:function(inst){var startDate=(!inst.currentYear||(inst.input&&inst.input.val()=="")?null:this._daylightSavingAdjust(new Date(inst.currentYear,inst.currentMonth,inst.currentDay)));return startDate},_generateHTML:function(inst){var today=new Date();today=this._daylightSavingAdjust(new Date(today.getFullYear(),today.getMonth(),today.getDate()));var isRTL=this._get(inst,"isRTL");var showButtonPanel=this._get(inst,"showButtonPanel");var hideIfNoPrevNext=this._get(inst,"hideIfNoPrevNext");var navigationAsDateFormat=this._get(inst,"navigationAsDateFormat");var numMonths=this._getNumberOfMonths(inst);var showCurrentAtPos=this._get(inst,"showCurrentAtPos");var stepMonths=this._get(inst,"stepMonths");var stepBigMonths=this._get(inst,"stepBigMonths");var isMultiMonth=(numMonths[0]!=1||numMonths[1]!=1);var currentDate=this._daylightSavingAdjust((!inst.currentDay?new Date(9999,9,9):new Date(inst.currentYear,inst.currentMonth,inst.currentDay)));var minDate=this._getMinMaxDate(inst,"min",true);var maxDate=this._getMinMaxDate(inst,"max");var drawMonth=inst.drawMonth-showCurrentAtPos;var drawYear=inst.drawYear;if(drawMonth<0){drawMonth+=12;drawYear--}if(maxDate){var maxDraw=this._daylightSavingAdjust(new Date(maxDate.getFullYear(),maxDate.getMonth()-numMonths[1]+1,maxDate.getDate()));maxDraw=(minDate&&maxDraw<minDate?minDate:maxDraw);while(this._daylightSavingAdjust(new Date(drawYear,drawMonth,1))>maxDraw){drawMonth--;if(drawMonth<0){drawMonth=11;drawYear--}}}inst.drawMonth=drawMonth;inst.drawYear=drawYear;var prevText=this._get(inst,"prevText");prevText=(!navigationAsDateFormat?prevText:this.formatDate(prevText,this._daylightSavingAdjust(new Date(drawYear,drawMonth-stepMonths,1)),this._getFormatConfig(inst)));var prev=(this._canAdjustMonth(inst,-1,drawYear,drawMonth)?'<a class="ui-datepicker-prev ui-corner-all" onclick="DP_jQuery.datepicker._adjustDate(\'#'+inst.id+"', -"+stepMonths+", 'M');\" title=\""+prevText+'"><span class="ui-icon ui-icon-circle-triangle-'+(isRTL?"e":"w")+'">'+prevText+"</span></a>":(hideIfNoPrevNext?"":'<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="'+prevText+'"><span class="ui-icon ui-icon-circle-triangle-'+(isRTL?"e":"w")+'">'+prevText+"</span></a>"));var nextText=this._get(inst,"nextText");nextText=(!navigationAsDateFormat?nextText:this.formatDate(nextText,this._daylightSavingAdjust(new Date(drawYear,drawMonth+stepMonths,1)),this._getFormatConfig(inst)));var next=(this._canAdjustMonth(inst,+1,drawYear,drawMonth)?'<a class="ui-datepicker-next ui-corner-all" onclick="DP_jQuery.datepicker._adjustDate(\'#'+inst.id+"', +"+stepMonths+", 'M');\" title=\""+nextText+'"><span class="ui-icon ui-icon-circle-triangle-'+(isRTL?"w":"e")+'">'+nextText+"</span></a>":(hideIfNoPrevNext?"":'<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="'+nextText+'"><span class="ui-icon ui-icon-circle-triangle-'+(isRTL?"w":"e")+'">'+nextText+"</span></a>"));var currentText=this._get(inst,"currentText");var gotoDate=(this._get(inst,"gotoCurrent")&&inst.currentDay?currentDate:today);currentText=(!navigationAsDateFormat?currentText:this.formatDate(currentText,gotoDate,this._getFormatConfig(inst)));var controls=(!inst.inline?'<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" onclick="DP_jQuery.datepicker._hideDatepicker();">'+this._get(inst,"closeText")+"</button>":"");var buttonPanel=(showButtonPanel)?'<div class="ui-datepicker-buttonpane ui-widget-content">'+(isRTL?controls:"")+(this._isInRange(inst,gotoDate)?'<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" onclick="DP_jQuery.datepicker._gotoToday(\'#'+inst.id+"');\">"+currentText+"</button>":"")+(isRTL?"":controls)+"</div>":"";var firstDay=parseInt(this._get(inst,"firstDay"),10);firstDay=(isNaN(firstDay)?0:firstDay);var dayNames=this._get(inst,"dayNames");var dayNamesShort=this._get(inst,"dayNamesShort");var dayNamesMin=this._get(inst,"dayNamesMin");var monthNames=this._get(inst,"monthNames");var monthNamesShort=this._get(inst,"monthNamesShort");var beforeShowDay=this._get(inst,"beforeShowDay");var showOtherMonths=this._get(inst,"showOtherMonths");var calculateWeek=this._get(inst,"calculateWeek")||this.iso8601Week;var endDate=inst.endDay?this._daylightSavingAdjust(new Date(inst.endYear,inst.endMonth,inst.endDay)):currentDate;var defaultDate=this._getDefaultDate(inst);var html="";for(var row=0;row<numMonths[0];row++){var group="";for(var col=0;col<numMonths[1];col++){var selectedDate=this._daylightSavingAdjust(new Date(drawYear,drawMonth,inst.selectedDay));var cornerClass=" ui-corner-all";var calender="";if(isMultiMonth){calender+='<div class="ui-datepicker-group ui-datepicker-group-';switch(col){case 0:calender+="first";cornerClass=" ui-corner-"+(isRTL?"right":"left");break;case numMonths[1]-1:calender+="last";cornerClass=" ui-corner-"+(isRTL?"left":"right");break;default:calender+="middle";cornerClass="";break}calender+='">'}calender+='<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix'+cornerClass+'">'+(/all|left/.test(cornerClass)&&row==0?(isRTL?next:prev):"")+(/all|right/.test(cornerClass)&&row==0?(isRTL?prev:next):"")+this._generateMonthYearHeader(inst,drawMonth,drawYear,minDate,maxDate,selectedDate,row>0||col>0,monthNames,monthNamesShort)+'</div><table class="ui-datepicker-calendar"><thead><tr>';var thead="";for(var dow=0;dow<7;dow++){var day=(dow+firstDay)%7;thead+="<th"+((dow+firstDay+6)%7>=5?' class="ui-datepicker-week-end"':"")+'><span title="'+dayNames[day]+'">'+dayNamesMin[day]+"</span></th>"}calender+=thead+"</tr></thead><tbody>";var daysInMonth=this._getDaysInMonth(drawYear,drawMonth);if(drawYear==inst.selectedYear&&drawMonth==inst.selectedMonth){inst.selectedDay=Math.min(inst.selectedDay,daysInMonth)}var leadDays=(this._getFirstDayOfMonth(drawYear,drawMonth)-firstDay+7)%7;var numRows=(isMultiMonth?6:Math.ceil((leadDays+daysInMonth)/7));var printDate=this._daylightSavingAdjust(new Date(drawYear,drawMonth,1-leadDays));for(var dRow=0;dRow<numRows;dRow++){calender+="<tr>";var tbody="";for(var dow=0;dow<7;dow++){var daySettings=(beforeShowDay?beforeShowDay.apply((inst.input?inst.input[0]:null),[printDate]):[true,""]);var otherMonth=(printDate.getMonth()!=drawMonth);var unselectable=otherMonth||!daySettings[0]||(minDate&&printDate<minDate)||(maxDate&&printDate>maxDate);tbody+='<td class="'+((dow+firstDay+6)%7>=5?" ui-datepicker-week-end":"")+(otherMonth?" ui-datepicker-other-month":"")+((printDate.getTime()==selectedDate.getTime()&&drawMonth==inst.selectedMonth&&inst._keyEvent)||(defaultDate.getTime()==printDate.getTime()&&defaultDate.getTime()==selectedDate.getTime())?" "+this._dayOverClass:"")+(unselectable?" "+this._unselectableClass+" ui-state-disabled":"")+(otherMonth&&!showOtherMonths?"":" "+daySettings[1]+(printDate.getTime()>=currentDate.getTime()&&printDate.getTime()<=endDate.getTime()?" "+this._currentClass:"")+(printDate.getTime()==today.getTime()?" ui-datepicker-today":""))+'"'+((!otherMonth||showOtherMonths)&&daySettings[2]?' title="'+daySettings[2]+'"':"")+(unselectable?"":" onclick=\"DP_jQuery.datepicker._selectDay('#"+inst.id+"',"+drawMonth+","+drawYear+', this);return false;"')+">"+(otherMonth?(showOtherMonths?printDate.getDate():"&#xa0;"):(unselectable?'<span class="ui-state-default">'+printDate.getDate()+"</span>":'<a class="ui-state-default'+(printDate.getTime()==today.getTime()?" ui-state-highlight":"")+(printDate.getTime()>=currentDate.getTime()&&printDate.getTime()<=endDate.getTime()?" ui-state-active":"")+'" href="#">'+printDate.getDate()+"</a>"))+"</td>";printDate.setDate(printDate.getDate()+1);printDate=this._daylightSavingAdjust(printDate)}calender+=tbody+"</tr>"}drawMonth++;if(drawMonth>11){drawMonth=0;drawYear++}calender+="</tbody></table>"+(isMultiMonth?"</div>"+((numMonths[0]>0&&col==numMonths[1]-1)?'<div class="ui-datepicker-row-break"></div>':""):"");group+=calender}html+=group}html+=buttonPanel+($.browser.msie&&parseInt($.browser.version,10)<7&&!inst.inline?'<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>':"");inst._keyEvent=false;return html},_generateMonthYearHeader:function(inst,drawMonth,drawYear,minDate,maxDate,selectedDate,secondary,monthNames,monthNamesShort){minDate=(inst.rangeStart&&minDate&&selectedDate<minDate?selectedDate:minDate);var changeMonth=this._get(inst,"changeMonth");var changeYear=this._get(inst,"changeYear");var showMonthAfterYear=this._get(inst,"showMonthAfterYear");var html='<div class="ui-datepicker-title">';var monthHtml="";if(secondary||!changeMonth){monthHtml+='<span class="ui-datepicker-month">'+monthNames[drawMonth]+"</span> "}else{var inMinYear=(minDate&&minDate.getFullYear()==drawYear);var inMaxYear=(maxDate&&maxDate.getFullYear()==drawYear);monthHtml+='<select class="ui-datepicker-month" onchange="DP_jQuery.datepicker._selectMonthYear(\'#'+inst.id+"', this, 'M');\" onclick=\"DP_jQuery.datepicker._clickMonthYear('#"+inst.id+"');\">";for(var month=0;month<12;month++){if((!inMinYear||month>=minDate.getMonth())&&(!inMaxYear||month<=maxDate.getMonth())){monthHtml+='<option value="'+month+'"'+(month==drawMonth?' selected="selected"':"")+">"+monthNamesShort[month]+"</option>"}}monthHtml+="</select>"}if(!showMonthAfterYear){html+=monthHtml+((secondary||changeMonth||changeYear)&&(!(changeMonth&&changeYear))?"&#xa0;":"")}if(secondary||!changeYear){html+='<span class="ui-datepicker-year">'+drawYear+"</span>"}else{var years=this._get(inst,"yearRange").split(":");var year=0;var endYear=0;if(years.length!=2){year=drawYear-10;endYear=drawYear+10}else{if(years[0].charAt(0)=="+"||years[0].charAt(0)=="-"){year=drawYear+parseInt(years[0],10);endYear=drawYear+parseInt(years[1],10)}else{year=parseInt(years[0],10);endYear=parseInt(years[1],10)}}year=(minDate?Math.max(year,minDate.getFullYear()):year);endYear=(maxDate?Math.min(endYear,maxDate.getFullYear()):endYear);html+='<select class="ui-datepicker-year" onchange="DP_jQuery.datepicker._selectMonthYear(\'#'+inst.id+"', this, 'Y');\" onclick=\"DP_jQuery.datepicker._clickMonthYear('#"+inst.id+"');\">";for(;year<=endYear;year++){html+='<option value="'+year+'"'+(year==drawYear?' selected="selected"':"")+">"+year+"</option>"}html+="</select>"}if(showMonthAfterYear){html+=(secondary||changeMonth||changeYear?"&#xa0;":"")+monthHtml}html+="</div>";return html},_adjustInstDate:function(inst,offset,period){var year=inst.drawYear+(period=="Y"?offset:0);var month=inst.drawMonth+(period=="M"?offset:0);var day=Math.min(inst.selectedDay,this._getDaysInMonth(year,month))+(period=="D"?offset:0);var date=this._daylightSavingAdjust(new Date(year,month,day));var minDate=this._getMinMaxDate(inst,"min",true);var maxDate=this._getMinMaxDate(inst,"max");date=(minDate&&date<minDate?minDate:date);date=(maxDate&&date>maxDate?maxDate:date);inst.selectedDay=date.getDate();inst.drawMonth=inst.selectedMonth=date.getMonth();inst.drawYear=inst.selectedYear=date.getFullYear();if(period=="M"||period=="Y"){this._notifyChange(inst)}},_notifyChange:function(inst){var onChange=this._get(inst,"onChangeMonthYear");if(onChange){onChange.apply((inst.input?inst.input[0]:null),[inst.selectedYear,inst.selectedMonth+1,inst])}},_getNumberOfMonths:function(inst){var numMonths=this._get(inst,"numberOfMonths");return(numMonths==null?[1,1]:(typeof numMonths=="number"?[1,numMonths]:numMonths))},_getMinMaxDate:function(inst,minMax,checkRange){var date=this._determineDate(this._get(inst,minMax+"Date"),null);return(!checkRange||!inst.rangeStart?date:(!date||inst.rangeStart>date?inst.rangeStart:date))},_getDaysInMonth:function(year,month){return 32-new Date(year,month,32).getDate()},_getFirstDayOfMonth:function(year,month){return new Date(year,month,1).getDay()},_canAdjustMonth:function(inst,offset,curYear,curMonth){var numMonths=this._getNumberOfMonths(inst);var date=this._daylightSavingAdjust(new Date(curYear,curMonth+(offset<0?offset:numMonths[1]),1));if(offset<0){date.setDate(this._getDaysInMonth(date.getFullYear(),date.getMonth()))}return this._isInRange(inst,date)},_isInRange:function(inst,date){var newMinDate=(!inst.rangeStart?null:this._daylightSavingAdjust(new Date(inst.selectedYear,inst.selectedMonth,inst.selectedDay)));newMinDate=(newMinDate&&inst.rangeStart<newMinDate?inst.rangeStart:newMinDate);var minDate=newMinDate||this._getMinMaxDate(inst,"min");var maxDate=this._getMinMaxDate(inst,"max");return((!minDate||date>=minDate)&&(!maxDate||date<=maxDate))},_getFormatConfig:function(inst){var shortYearCutoff=this._get(inst,"shortYearCutoff");shortYearCutoff=(typeof shortYearCutoff!="string"?shortYearCutoff:new Date().getFullYear()%100+parseInt(shortYearCutoff,10));return{shortYearCutoff:shortYearCutoff,dayNamesShort:this._get(inst,"dayNamesShort"),dayNames:this._get(inst,"dayNames"),monthNamesShort:this._get(inst,"monthNamesShort"),monthNames:this._get(inst,"monthNames")}},_formatDate:function(inst,day,month,year){if(!day){inst.currentDay=inst.selectedDay;inst.currentMonth=inst.selectedMonth;inst.currentYear=inst.selectedYear}var date=(day?(typeof day=="object"?day:this._daylightSavingAdjust(new Date(year,month,day))):this._daylightSavingAdjust(new Date(inst.currentYear,inst.currentMonth,inst.currentDay)));return this.formatDate(this._get(inst,"dateFormat"),date,this._getFormatConfig(inst))}});function extendRemove(target,props){$.extend(target,props);for(var name in props){if(props[name]==null||props[name]==undefined){target[name]=props[name]}}return target}function isArray(a){return(a&&(($.browser.safari&&typeof a=="object"&&a.length)||(a.constructor&&a.constructor.toString().match(/\Array\(\)/))))}$.fn.datepicker=function(options){if(!$.datepicker.initialized){$(document).mousedown($.datepicker._checkExternalClick).find("body").append($.datepicker.dpDiv);$.datepicker.initialized=true}var otherArgs=Array.prototype.slice.call(arguments,1);if(typeof options=="string"&&(options=="isDisabled"||options=="getDate")){return $.datepicker["_"+options+"Datepicker"].apply($.datepicker,[this[0]].concat(otherArgs))}if(options=="option"&&arguments.length==2&&typeof arguments[1]=="string"){return $.datepicker["_"+options+"Datepicker"].apply($.datepicker,[this[0]].concat(otherArgs))}return this.each(function(){typeof options=="string"?$.datepicker["_"+options+"Datepicker"].apply($.datepicker,[this].concat(otherArgs)):$.datepicker._attachDatepicker(this,options)})};$.datepicker=new Datepicker();$.datepicker.initialized=false;$.datepicker.uuid=new Date().getTime();$.datepicker.version="1.7.2";window.DP_jQuery=$})(jQuery);;/*
 * jQuery UI Progressbar 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Progressbar
 *
 * Depends:
 *   ui.core.js
 */
(function(a){a.widget("ui.progressbar",{_init:function(){this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this._valueMin(),"aria-valuemax":this._valueMax(),"aria-valuenow":this._value()});this.valueDiv=a('<div class="ui-progressbar-value ui-widget-header ui-corner-left"></div>').appendTo(this.element);this._refreshValue()},destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow").removeData("progressbar").unbind(".progressbar");this.valueDiv.remove();a.widget.prototype.destroy.apply(this,arguments)},value:function(b){if(b===undefined){return this._value()}this._setData("value",b);return this},_setData:function(b,c){switch(b){case"value":this.options.value=c;this._refreshValue();this._trigger("change",null,{});break}a.widget.prototype._setData.apply(this,arguments)},_value:function(){var b=this.options.value;if(b<this._valueMin()){b=this._valueMin()}if(b>this._valueMax()){b=this._valueMax()}return b},_valueMin:function(){var b=0;return b},_valueMax:function(){var b=100;return b},_refreshValue:function(){var b=this.value();this.valueDiv[b==this._valueMax()?"addClass":"removeClass"]("ui-corner-right");this.valueDiv.width(b+"%");this.element.attr("aria-valuenow",b)}});a.extend(a.ui.progressbar,{version:"1.7.2",defaults:{value:0}})})(jQuery);;/*
 * jQuery UI Effects 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/
 */
jQuery.effects||(function(d){d.effects={version:"1.7.2",save:function(g,h){for(var f=0;f<h.length;f++){if(h[f]!==null){g.data("ec.storage."+h[f],g[0].style[h[f]])}}},restore:function(g,h){for(var f=0;f<h.length;f++){if(h[f]!==null){g.css(h[f],g.data("ec.storage."+h[f]))}}},setMode:function(f,g){if(g=="toggle"){g=f.is(":hidden")?"show":"hide"}return g},getBaseline:function(g,h){var i,f;switch(g[0]){case"top":i=0;break;case"middle":i=0.5;break;case"bottom":i=1;break;default:i=g[0]/h.height}switch(g[1]){case"left":f=0;break;case"center":f=0.5;break;case"right":f=1;break;default:f=g[1]/h.width}return{x:f,y:i}},createWrapper:function(f){if(f.parent().is(".ui-effects-wrapper")){return f.parent()}var g={width:f.outerWidth(true),height:f.outerHeight(true),"float":f.css("float")};f.wrap('<div class="ui-effects-wrapper" style="font-size:100%;background:transparent;border:none;margin:0;padding:0"></div>');var j=f.parent();if(f.css("position")=="static"){j.css({position:"relative"});f.css({position:"relative"})}else{var i=f.css("top");if(isNaN(parseInt(i,10))){i="auto"}var h=f.css("left");if(isNaN(parseInt(h,10))){h="auto"}j.css({position:f.css("position"),top:i,left:h,zIndex:f.css("z-index")}).show();f.css({position:"relative",top:0,left:0})}j.css(g);return j},removeWrapper:function(f){if(f.parent().is(".ui-effects-wrapper")){return f.parent().replaceWith(f)}return f},setTransition:function(g,i,f,h){h=h||{};d.each(i,function(k,j){unit=g.cssUnit(j);if(unit[0]>0){h[j]=unit[0]*f+unit[1]}});return h},animateClass:function(h,i,k,j){var f=(typeof k=="function"?k:(j?j:null));var g=(typeof k=="string"?k:null);return this.each(function(){var q={};var o=d(this);var p=o.attr("style")||"";if(typeof p=="object"){p=p.cssText}if(h.toggle){o.hasClass(h.toggle)?h.remove=h.toggle:h.add=h.toggle}var l=d.extend({},(document.defaultView?document.defaultView.getComputedStyle(this,null):this.currentStyle));if(h.add){o.addClass(h.add)}if(h.remove){o.removeClass(h.remove)}var m=d.extend({},(document.defaultView?document.defaultView.getComputedStyle(this,null):this.currentStyle));if(h.add){o.removeClass(h.add)}if(h.remove){o.addClass(h.remove)}for(var r in m){if(typeof m[r]!="function"&&m[r]&&r.indexOf("Moz")==-1&&r.indexOf("length")==-1&&m[r]!=l[r]&&(r.match(/color/i)||(!r.match(/color/i)&&!isNaN(parseInt(m[r],10))))&&(l.position!="static"||(l.position=="static"&&!r.match(/left|top|bottom|right/)))){q[r]=m[r]}}o.animate(q,i,g,function(){if(typeof d(this).attr("style")=="object"){d(this).attr("style")["cssText"]="";d(this).attr("style")["cssText"]=p}else{d(this).attr("style",p)}if(h.add){d(this).addClass(h.add)}if(h.remove){d(this).removeClass(h.remove)}if(f){f.apply(this,arguments)}})})}};function c(g,f){var i=g[1]&&g[1].constructor==Object?g[1]:{};if(f){i.mode=f}var h=g[1]&&g[1].constructor!=Object?g[1]:(i.duration?i.duration:g[2]);h=d.fx.off?0:typeof h==="number"?h:d.fx.speeds[h]||d.fx.speeds._default;var j=i.callback||(d.isFunction(g[1])&&g[1])||(d.isFunction(g[2])&&g[2])||(d.isFunction(g[3])&&g[3]);return[g[0],i,h,j]}d.fn.extend({_show:d.fn.show,_hide:d.fn.hide,__toggle:d.fn.toggle,_addClass:d.fn.addClass,_removeClass:d.fn.removeClass,_toggleClass:d.fn.toggleClass,effect:function(g,f,h,i){return d.effects[g]?d.effects[g].call(this,{method:g,options:f||{},duration:h,callback:i}):null},show:function(){if(!arguments[0]||(arguments[0].constructor==Number||(/(slow|normal|fast)/).test(arguments[0]))){return this._show.apply(this,arguments)}else{return this.effect.apply(this,c(arguments,"show"))}},hide:function(){if(!arguments[0]||(arguments[0].constructor==Number||(/(slow|normal|fast)/).test(arguments[0]))){return this._hide.apply(this,arguments)}else{return this.effect.apply(this,c(arguments,"hide"))}},toggle:function(){if(!arguments[0]||(arguments[0].constructor==Number||(/(slow|normal|fast)/).test(arguments[0]))||(d.isFunction(arguments[0])||typeof arguments[0]=="boolean")){return this.__toggle.apply(this,arguments)}else{return this.effect.apply(this,c(arguments,"toggle"))}},addClass:function(g,f,i,h){return f?d.effects.animateClass.apply(this,[{add:g},f,i,h]):this._addClass(g)},removeClass:function(g,f,i,h){return f?d.effects.animateClass.apply(this,[{remove:g},f,i,h]):this._removeClass(g)},toggleClass:function(g,f,i,h){return((typeof f!=="boolean")&&f)?d.effects.animateClass.apply(this,[{toggle:g},f,i,h]):this._toggleClass(g,f)},morph:function(f,h,g,j,i){return d.effects.animateClass.apply(this,[{add:h,remove:f},g,j,i])},switchClass:function(){return this.morph.apply(this,arguments)},cssUnit:function(f){var g=this.css(f),h=[];d.each(["em","px","%","pt"],function(j,k){if(g.indexOf(k)>0){h=[parseFloat(g),k]}});return h}});d.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor","borderTopColor","color","outlineColor"],function(g,f){d.fx.step[f]=function(h){if(h.state==0){h.start=e(h.elem,f);h.end=b(h.end)}h.elem.style[f]="rgb("+[Math.max(Math.min(parseInt((h.pos*(h.end[0]-h.start[0]))+h.start[0],10),255),0),Math.max(Math.min(parseInt((h.pos*(h.end[1]-h.start[1]))+h.start[1],10),255),0),Math.max(Math.min(parseInt((h.pos*(h.end[2]-h.start[2]))+h.start[2],10),255),0)].join(",")+")"}});function b(g){var f;if(g&&g.constructor==Array&&g.length==3){return g}if(f=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(g)){return[parseInt(f[1],10),parseInt(f[2],10),parseInt(f[3],10)]}if(f=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(g)){return[parseFloat(f[1])*2.55,parseFloat(f[2])*2.55,parseFloat(f[3])*2.55]}if(f=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(g)){return[parseInt(f[1],16),parseInt(f[2],16),parseInt(f[3],16)]}if(f=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(g)){return[parseInt(f[1]+f[1],16),parseInt(f[2]+f[2],16),parseInt(f[3]+f[3],16)]}if(f=/rgba\(0, 0, 0, 0\)/.exec(g)){return a.transparent}return a[d.trim(g).toLowerCase()]}function e(h,f){var g;do{g=d.curCSS(h,f);if(g!=""&&g!="transparent"||d.nodeName(h,"body")){break}f="backgroundColor"}while(h=h.parentNode);return b(g)}var a={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0],transparent:[255,255,255]};d.easing.jswing=d.easing.swing;d.extend(d.easing,{def:"easeOutQuad",swing:function(g,h,f,j,i){return d.easing[d.easing.def](g,h,f,j,i)},easeInQuad:function(g,h,f,j,i){return j*(h/=i)*h+f},easeOutQuad:function(g,h,f,j,i){return -j*(h/=i)*(h-2)+f},easeInOutQuad:function(g,h,f,j,i){if((h/=i/2)<1){return j/2*h*h+f}return -j/2*((--h)*(h-2)-1)+f},easeInCubic:function(g,h,f,j,i){return j*(h/=i)*h*h+f},easeOutCubic:function(g,h,f,j,i){return j*((h=h/i-1)*h*h+1)+f},easeInOutCubic:function(g,h,f,j,i){if((h/=i/2)<1){return j/2*h*h*h+f}return j/2*((h-=2)*h*h+2)+f},easeInQuart:function(g,h,f,j,i){return j*(h/=i)*h*h*h+f},easeOutQuart:function(g,h,f,j,i){return -j*((h=h/i-1)*h*h*h-1)+f},easeInOutQuart:function(g,h,f,j,i){if((h/=i/2)<1){return j/2*h*h*h*h+f}return -j/2*((h-=2)*h*h*h-2)+f},easeInQuint:function(g,h,f,j,i){return j*(h/=i)*h*h*h*h+f},easeOutQuint:function(g,h,f,j,i){return j*((h=h/i-1)*h*h*h*h+1)+f},easeInOutQuint:function(g,h,f,j,i){if((h/=i/2)<1){return j/2*h*h*h*h*h+f}return j/2*((h-=2)*h*h*h*h+2)+f},easeInSine:function(g,h,f,j,i){return -j*Math.cos(h/i*(Math.PI/2))+j+f},easeOutSine:function(g,h,f,j,i){return j*Math.sin(h/i*(Math.PI/2))+f},easeInOutSine:function(g,h,f,j,i){return -j/2*(Math.cos(Math.PI*h/i)-1)+f},easeInExpo:function(g,h,f,j,i){return(h==0)?f:j*Math.pow(2,10*(h/i-1))+f},easeOutExpo:function(g,h,f,j,i){return(h==i)?f+j:j*(-Math.pow(2,-10*h/i)+1)+f},easeInOutExpo:function(g,h,f,j,i){if(h==0){return f}if(h==i){return f+j}if((h/=i/2)<1){return j/2*Math.pow(2,10*(h-1))+f}return j/2*(-Math.pow(2,-10*--h)+2)+f},easeInCirc:function(g,h,f,j,i){return -j*(Math.sqrt(1-(h/=i)*h)-1)+f},easeOutCirc:function(g,h,f,j,i){return j*Math.sqrt(1-(h=h/i-1)*h)+f},easeInOutCirc:function(g,h,f,j,i){if((h/=i/2)<1){return -j/2*(Math.sqrt(1-h*h)-1)+f}return j/2*(Math.sqrt(1-(h-=2)*h)+1)+f},easeInElastic:function(g,i,f,m,l){var j=1.70158;var k=0;var h=m;if(i==0){return f}if((i/=l)==1){return f+m}if(!k){k=l*0.3}if(h<Math.abs(m)){h=m;var j=k/4}else{var j=k/(2*Math.PI)*Math.asin(m/h)}return -(h*Math.pow(2,10*(i-=1))*Math.sin((i*l-j)*(2*Math.PI)/k))+f},easeOutElastic:function(g,i,f,m,l){var j=1.70158;var k=0;var h=m;if(i==0){return f}if((i/=l)==1){return f+m}if(!k){k=l*0.3}if(h<Math.abs(m)){h=m;var j=k/4}else{var j=k/(2*Math.PI)*Math.asin(m/h)}return h*Math.pow(2,-10*i)*Math.sin((i*l-j)*(2*Math.PI)/k)+m+f},easeInOutElastic:function(g,i,f,m,l){var j=1.70158;var k=0;var h=m;if(i==0){return f}if((i/=l/2)==2){return f+m}if(!k){k=l*(0.3*1.5)}if(h<Math.abs(m)){h=m;var j=k/4}else{var j=k/(2*Math.PI)*Math.asin(m/h)}if(i<1){return -0.5*(h*Math.pow(2,10*(i-=1))*Math.sin((i*l-j)*(2*Math.PI)/k))+f}return h*Math.pow(2,-10*(i-=1))*Math.sin((i*l-j)*(2*Math.PI)/k)*0.5+m+f},easeInBack:function(g,h,f,k,j,i){if(i==undefined){i=1.70158}return k*(h/=j)*h*((i+1)*h-i)+f},easeOutBack:function(g,h,f,k,j,i){if(i==undefined){i=1.70158}return k*((h=h/j-1)*h*((i+1)*h+i)+1)+f},easeInOutBack:function(g,h,f,k,j,i){if(i==undefined){i=1.70158}if((h/=j/2)<1){return k/2*(h*h*(((i*=(1.525))+1)*h-i))+f}return k/2*((h-=2)*h*(((i*=(1.525))+1)*h+i)+2)+f},easeInBounce:function(g,h,f,j,i){return j-d.easing.easeOutBounce(g,i-h,0,j,i)+f},easeOutBounce:function(g,h,f,j,i){if((h/=i)<(1/2.75)){return j*(7.5625*h*h)+f}else{if(h<(2/2.75)){return j*(7.5625*(h-=(1.5/2.75))*h+0.75)+f}else{if(h<(2.5/2.75)){return j*(7.5625*(h-=(2.25/2.75))*h+0.9375)+f}else{return j*(7.5625*(h-=(2.625/2.75))*h+0.984375)+f}}}},easeInOutBounce:function(g,h,f,j,i){if(h<i/2){return d.easing.easeInBounce(g,h*2,0,j,i)*0.5+f}return d.easing.easeOutBounce(g,h*2-i,0,j,i)*0.5+j*0.5+f}})})(jQuery);;/*
 * jQuery UI Effects Blind 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/Blind
 *
 * Depends:
 *	effects.core.js
 */
(function(a){a.effects.blind=function(b){return this.queue(function(){var d=a(this),c=["position","top","left"];var h=a.effects.setMode(d,b.options.mode||"hide");var g=b.options.direction||"vertical";a.effects.save(d,c);d.show();var j=a.effects.createWrapper(d).css({overflow:"hidden"});var e=(g=="vertical")?"height":"width";var i=(g=="vertical")?j.height():j.width();if(h=="show"){j.css(e,0)}var f={};f[e]=h=="show"?i:0;j.animate(f,b.duration,b.options.easing,function(){if(h=="hide"){d.hide()}a.effects.restore(d,c);a.effects.removeWrapper(d);if(b.callback){b.callback.apply(d[0],arguments)}d.dequeue()})})}})(jQuery);;/*
 * jQuery UI Effects Bounce 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/Bounce
 *
 * Depends:
 *	effects.core.js
 */
(function(a){a.effects.bounce=function(b){return this.queue(function(){var e=a(this),l=["position","top","left"];var k=a.effects.setMode(e,b.options.mode||"effect");var n=b.options.direction||"up";var c=b.options.distance||20;var d=b.options.times||5;var g=b.duration||250;if(/show|hide/.test(k)){l.push("opacity")}a.effects.save(e,l);e.show();a.effects.createWrapper(e);var f=(n=="up"||n=="down")?"top":"left";var p=(n=="up"||n=="left")?"pos":"neg";var c=b.options.distance||(f=="top"?e.outerHeight({margin:true})/3:e.outerWidth({margin:true})/3);if(k=="show"){e.css("opacity",0).css(f,p=="pos"?-c:c)}if(k=="hide"){c=c/(d*2)}if(k!="hide"){d--}if(k=="show"){var h={opacity:1};h[f]=(p=="pos"?"+=":"-=")+c;e.animate(h,g/2,b.options.easing);c=c/2;d--}for(var j=0;j<d;j++){var o={},m={};o[f]=(p=="pos"?"-=":"+=")+c;m[f]=(p=="pos"?"+=":"-=")+c;e.animate(o,g/2,b.options.easing).animate(m,g/2,b.options.easing);c=(k=="hide")?c*2:c/2}if(k=="hide"){var h={opacity:0};h[f]=(p=="pos"?"-=":"+=")+c;e.animate(h,g/2,b.options.easing,function(){e.hide();a.effects.restore(e,l);a.effects.removeWrapper(e);if(b.callback){b.callback.apply(this,arguments)}})}else{var o={},m={};o[f]=(p=="pos"?"-=":"+=")+c;m[f]=(p=="pos"?"+=":"-=")+c;e.animate(o,g/2,b.options.easing).animate(m,g/2,b.options.easing,function(){a.effects.restore(e,l);a.effects.removeWrapper(e);if(b.callback){b.callback.apply(this,arguments)}})}e.queue("fx",function(){e.dequeue()});e.dequeue()})}})(jQuery);;/*
 * jQuery UI Effects Clip 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/Clip
 *
 * Depends:
 *	effects.core.js
 */
(function(a){a.effects.clip=function(b){return this.queue(function(){var f=a(this),j=["position","top","left","height","width"];var i=a.effects.setMode(f,b.options.mode||"hide");var k=b.options.direction||"vertical";a.effects.save(f,j);f.show();var c=a.effects.createWrapper(f).css({overflow:"hidden"});var e=f[0].tagName=="IMG"?c:f;var g={size:(k=="vertical")?"height":"width",position:(k=="vertical")?"top":"left"};var d=(k=="vertical")?e.height():e.width();if(i=="show"){e.css(g.size,0);e.css(g.position,d/2)}var h={};h[g.size]=i=="show"?d:0;h[g.position]=i=="show"?0:d/2;e.animate(h,{queue:false,duration:b.duration,easing:b.options.easing,complete:function(){if(i=="hide"){f.hide()}a.effects.restore(f,j);a.effects.removeWrapper(f);if(b.callback){b.callback.apply(f[0],arguments)}f.dequeue()}})})}})(jQuery);;/*
 * jQuery UI Effects Drop 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/Drop
 *
 * Depends:
 *	effects.core.js
 */
(function(a){a.effects.drop=function(b){return this.queue(function(){var e=a(this),d=["position","top","left","opacity"];var i=a.effects.setMode(e,b.options.mode||"hide");var h=b.options.direction||"left";a.effects.save(e,d);e.show();a.effects.createWrapper(e);var f=(h=="up"||h=="down")?"top":"left";var c=(h=="up"||h=="left")?"pos":"neg";var j=b.options.distance||(f=="top"?e.outerHeight({margin:true})/2:e.outerWidth({margin:true})/2);if(i=="show"){e.css("opacity",0).css(f,c=="pos"?-j:j)}var g={opacity:i=="show"?1:0};g[f]=(i=="show"?(c=="pos"?"+=":"-="):(c=="pos"?"-=":"+="))+j;e.animate(g,{queue:false,duration:b.duration,easing:b.options.easing,complete:function(){if(i=="hide"){e.hide()}a.effects.restore(e,d);a.effects.removeWrapper(e);if(b.callback){b.callback.apply(this,arguments)}e.dequeue()}})})}})(jQuery);;/*
 * jQuery UI Effects Explode 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/Explode
 *
 * Depends:
 *	effects.core.js
 */
(function(a){a.effects.explode=function(b){return this.queue(function(){var k=b.options.pieces?Math.round(Math.sqrt(b.options.pieces)):3;var e=b.options.pieces?Math.round(Math.sqrt(b.options.pieces)):3;b.options.mode=b.options.mode=="toggle"?(a(this).is(":visible")?"hide":"show"):b.options.mode;var h=a(this).show().css("visibility","hidden");var l=h.offset();l.top-=parseInt(h.css("marginTop"),10)||0;l.left-=parseInt(h.css("marginLeft"),10)||0;var g=h.outerWidth(true);var c=h.outerHeight(true);for(var f=0;f<k;f++){for(var d=0;d<e;d++){h.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-d*(g/e),top:-f*(c/k)}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:g/e,height:c/k,left:l.left+d*(g/e)+(b.options.mode=="show"?(d-Math.floor(e/2))*(g/e):0),top:l.top+f*(c/k)+(b.options.mode=="show"?(f-Math.floor(k/2))*(c/k):0),opacity:b.options.mode=="show"?0:1}).animate({left:l.left+d*(g/e)+(b.options.mode=="show"?0:(d-Math.floor(e/2))*(g/e)),top:l.top+f*(c/k)+(b.options.mode=="show"?0:(f-Math.floor(k/2))*(c/k)),opacity:b.options.mode=="show"?1:0},b.duration||500)}}setTimeout(function(){b.options.mode=="show"?h.css({visibility:"visible"}):h.css({visibility:"visible"}).hide();if(b.callback){b.callback.apply(h[0])}h.dequeue();a("div.ui-effects-explode").remove()},b.duration||500)})}})(jQuery);;/*
 * jQuery UI Effects Fold 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/Fold
 *
 * Depends:
 *	effects.core.js
 */
(function(a){a.effects.fold=function(b){return this.queue(function(){var e=a(this),k=["position","top","left"];var h=a.effects.setMode(e,b.options.mode||"hide");var o=b.options.size||15;var n=!(!b.options.horizFirst);var g=b.duration?b.duration/2:a.fx.speeds._default/2;a.effects.save(e,k);e.show();var d=a.effects.createWrapper(e).css({overflow:"hidden"});var i=((h=="show")!=n);var f=i?["width","height"]:["height","width"];var c=i?[d.width(),d.height()]:[d.height(),d.width()];var j=/([0-9]+)%/.exec(o);if(j){o=parseInt(j[1],10)/100*c[h=="hide"?0:1]}if(h=="show"){d.css(n?{height:0,width:o}:{height:o,width:0})}var m={},l={};m[f[0]]=h=="show"?c[0]:o;l[f[1]]=h=="show"?c[1]:0;d.animate(m,g,b.options.easing).animate(l,g,b.options.easing,function(){if(h=="hide"){e.hide()}a.effects.restore(e,k);a.effects.removeWrapper(e);if(b.callback){b.callback.apply(e[0],arguments)}e.dequeue()})})}})(jQuery);;/*
 * jQuery UI Effects Highlight 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/Highlight
 *
 * Depends:
 *	effects.core.js
 */
(function(a){a.effects.highlight=function(b){return this.queue(function(){var e=a(this),d=["backgroundImage","backgroundColor","opacity"];var h=a.effects.setMode(e,b.options.mode||"show");var c=b.options.color||"#ffff99";var g=e.css("backgroundColor");a.effects.save(e,d);e.show();e.css({backgroundImage:"none",backgroundColor:c});var f={backgroundColor:g};if(h=="hide"){f.opacity=0}e.animate(f,{queue:false,duration:b.duration,easing:b.options.easing,complete:function(){if(h=="hide"){e.hide()}a.effects.restore(e,d);if(h=="show"&&a.browser.msie){this.style.removeAttribute("filter")}if(b.callback){b.callback.apply(this,arguments)}e.dequeue()}})})}})(jQuery);;/*
 * jQuery UI Effects Pulsate 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/Pulsate
 *
 * Depends:
 *	effects.core.js
 */
(function(a){a.effects.pulsate=function(b){return this.queue(function(){var d=a(this);var g=a.effects.setMode(d,b.options.mode||"show");var f=b.options.times||5;var e=b.duration?b.duration/2:a.fx.speeds._default/2;if(g=="hide"){f--}if(d.is(":hidden")){d.css("opacity",0);d.show();d.animate({opacity:1},e,b.options.easing);f=f-2}for(var c=0;c<f;c++){d.animate({opacity:0},e,b.options.easing).animate({opacity:1},e,b.options.easing)}if(g=="hide"){d.animate({opacity:0},e,b.options.easing,function(){d.hide();if(b.callback){b.callback.apply(this,arguments)}})}else{d.animate({opacity:0},e,b.options.easing).animate({opacity:1},e,b.options.easing,function(){if(b.callback){b.callback.apply(this,arguments)}})}d.queue("fx",function(){d.dequeue()});d.dequeue()})}})(jQuery);;/*
 * jQuery UI Effects Scale 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/Scale
 *
 * Depends:
 *	effects.core.js
 */
(function(a){a.effects.puff=function(b){return this.queue(function(){var f=a(this);var c=a.extend(true,{},b.options);var h=a.effects.setMode(f,b.options.mode||"hide");var g=parseInt(b.options.percent,10)||150;c.fade=true;var e={height:f.height(),width:f.width()};var d=g/100;f.from=(h=="hide")?e:{height:e.height*d,width:e.width*d};c.from=f.from;c.percent=(h=="hide")?g:100;c.mode=h;f.effect("scale",c,b.duration,b.callback);f.dequeue()})};a.effects.scale=function(b){return this.queue(function(){var g=a(this);var d=a.extend(true,{},b.options);var j=a.effects.setMode(g,b.options.mode||"effect");var h=parseInt(b.options.percent,10)||(parseInt(b.options.percent,10)==0?0:(j=="hide"?0:100));var i=b.options.direction||"both";var c=b.options.origin;if(j!="effect"){d.origin=c||["middle","center"];d.restore=true}var f={height:g.height(),width:g.width()};g.from=b.options.from||(j=="show"?{height:0,width:0}:f);var e={y:i!="horizontal"?(h/100):1,x:i!="vertical"?(h/100):1};g.to={height:f.height*e.y,width:f.width*e.x};if(b.options.fade){if(j=="show"){g.from.opacity=0;g.to.opacity=1}if(j=="hide"){g.from.opacity=1;g.to.opacity=0}}d.from=g.from;d.to=g.to;d.mode=j;g.effect("size",d,b.duration,b.callback);g.dequeue()})};a.effects.size=function(b){return this.queue(function(){var c=a(this),n=["position","top","left","width","height","overflow","opacity"];var m=["position","top","left","overflow","opacity"];var j=["width","height","overflow"];var p=["fontSize"];var k=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"];var f=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"];var g=a.effects.setMode(c,b.options.mode||"effect");var i=b.options.restore||false;var e=b.options.scale||"both";var o=b.options.origin;var d={height:c.height(),width:c.width()};c.from=b.options.from||d;c.to=b.options.to||d;if(o){var h=a.effects.getBaseline(o,d);c.from.top=(d.height-c.from.height)*h.y;c.from.left=(d.width-c.from.width)*h.x;c.to.top=(d.height-c.to.height)*h.y;c.to.left=(d.width-c.to.width)*h.x}var l={from:{y:c.from.height/d.height,x:c.from.width/d.width},to:{y:c.to.height/d.height,x:c.to.width/d.width}};if(e=="box"||e=="both"){if(l.from.y!=l.to.y){n=n.concat(k);c.from=a.effects.setTransition(c,k,l.from.y,c.from);c.to=a.effects.setTransition(c,k,l.to.y,c.to)}if(l.from.x!=l.to.x){n=n.concat(f);c.from=a.effects.setTransition(c,f,l.from.x,c.from);c.to=a.effects.setTransition(c,f,l.to.x,c.to)}}if(e=="content"||e=="both"){if(l.from.y!=l.to.y){n=n.concat(p);c.from=a.effects.setTransition(c,p,l.from.y,c.from);c.to=a.effects.setTransition(c,p,l.to.y,c.to)}}a.effects.save(c,i?n:m);c.show();a.effects.createWrapper(c);c.css("overflow","hidden").css(c.from);if(e=="content"||e=="both"){k=k.concat(["marginTop","marginBottom"]).concat(p);f=f.concat(["marginLeft","marginRight"]);j=n.concat(k).concat(f);c.find("*[width]").each(function(){child=a(this);if(i){a.effects.save(child,j)}var q={height:child.height(),width:child.width()};child.from={height:q.height*l.from.y,width:q.width*l.from.x};child.to={height:q.height*l.to.y,width:q.width*l.to.x};if(l.from.y!=l.to.y){child.from=a.effects.setTransition(child,k,l.from.y,child.from);child.to=a.effects.setTransition(child,k,l.to.y,child.to)}if(l.from.x!=l.to.x){child.from=a.effects.setTransition(child,f,l.from.x,child.from);child.to=a.effects.setTransition(child,f,l.to.x,child.to)}child.css(child.from);child.animate(child.to,b.duration,b.options.easing,function(){if(i){a.effects.restore(child,j)}})})}c.animate(c.to,{queue:false,duration:b.duration,easing:b.options.easing,complete:function(){if(g=="hide"){c.hide()}a.effects.restore(c,i?n:m);a.effects.removeWrapper(c);if(b.callback){b.callback.apply(this,arguments)}c.dequeue()}})})}})(jQuery);;/*
 * jQuery UI Effects Shake 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/Shake
 *
 * Depends:
 *	effects.core.js
 */
(function(a){a.effects.shake=function(b){return this.queue(function(){var e=a(this),l=["position","top","left"];var k=a.effects.setMode(e,b.options.mode||"effect");var n=b.options.direction||"left";var c=b.options.distance||20;var d=b.options.times||3;var g=b.duration||b.options.duration||140;a.effects.save(e,l);e.show();a.effects.createWrapper(e);var f=(n=="up"||n=="down")?"top":"left";var p=(n=="up"||n=="left")?"pos":"neg";var h={},o={},m={};h[f]=(p=="pos"?"-=":"+=")+c;o[f]=(p=="pos"?"+=":"-=")+c*2;m[f]=(p=="pos"?"-=":"+=")+c*2;e.animate(h,g,b.options.easing);for(var j=1;j<d;j++){e.animate(o,g,b.options.easing).animate(m,g,b.options.easing)}e.animate(o,g,b.options.easing).animate(h,g/2,b.options.easing,function(){a.effects.restore(e,l);a.effects.removeWrapper(e);if(b.callback){b.callback.apply(this,arguments)}});e.queue("fx",function(){e.dequeue()});e.dequeue()})}})(jQuery);;/*
 * jQuery UI Effects Slide 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/Slide
 *
 * Depends:
 *	effects.core.js
 */
(function(a){a.effects.slide=function(b){return this.queue(function(){var e=a(this),d=["position","top","left"];var i=a.effects.setMode(e,b.options.mode||"show");var h=b.options.direction||"left";a.effects.save(e,d);e.show();a.effects.createWrapper(e).css({overflow:"hidden"});var f=(h=="up"||h=="down")?"top":"left";var c=(h=="up"||h=="left")?"pos":"neg";var j=b.options.distance||(f=="top"?e.outerHeight({margin:true}):e.outerWidth({margin:true}));if(i=="show"){e.css(f,c=="pos"?-j:j)}var g={};g[f]=(i=="show"?(c=="pos"?"+=":"-="):(c=="pos"?"-=":"+="))+j;e.animate(g,{queue:false,duration:b.duration,easing:b.options.easing,complete:function(){if(i=="hide"){e.hide()}a.effects.restore(e,d);a.effects.removeWrapper(e);if(b.callback){b.callback.apply(this,arguments)}e.dequeue()}})})}})(jQuery);;/*
 * jQuery UI Effects Transfer 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Effects/Transfer
 *
 * Depends:
 *	effects.core.js
 */
(function(a){a.effects.transfer=function(b){return this.queue(function(){var f=a(this),h=a(b.options.to),e=h.offset(),g={top:e.top,left:e.left,height:h.innerHeight(),width:h.innerWidth()},d=f.offset(),c=a('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(b.options.className).css({top:d.top,left:d.left,height:f.innerHeight(),width:f.innerWidth(),position:"absolute"}).animate(g,b.duration,b.options.easing,function(){c.remove();(b.callback&&b.callback.apply(f[0],arguments));f.dequeue()})})}})(jQuery);;
/*
 * jquery.tools 1.0.0 - The missing UI library
 *
 * [tools.tabs-1.0.0, tools.tooltip-1.0.0, tools.scrollable-1.0.3, tools.overlay-1.0.2, tools.expose-1.0.2]
 *
 * Copyright (c) 2009 Tero Piirainen
 * http://flowplayer.org/tools/
 *
 * Dual licensed under MIT and GPL 2+ licenses
 * http://www.opensource.org/licenses
 *
 * -----
 *
 * Build: Wed Jun 03 08:30:25 GMT+00:00 2009
 */
(function(c){c.tools=c.tools||{version:{}};c.tools.version.tabs="1.0.0";c.tools.addTabEffect=function(d,e){b[d]=e};var b={"default":function(d){this.getPanes().hide().eq(d).show()},fade:function(d){this.getPanes().hide().eq(d).fadeIn()},slide:function(d){this.getCurrentPane().slideUp("fast");this.getPanes().eq(d).slideDown()},horizontal:function(d){if(!c._hW){c._hW=this.getPanes().eq(0).width()}this.getCurrentPane().animate({width:0},function(){c(this).hide()});this.getPanes().eq(d).animate({width:c._hW},function(){c(this).show()})}};function a(e,f,g){var d=this;var h;function i(j,k){c(d).bind(j,function(m,l){if(k&&k.call(this,l.index)===false&&l){l.proceed=false}});return d}c.each(g,function(j,k){if(c.isFunction(k)){i(j,k)}});c.extend(this,{click:function(k){if(k===h){return d}var m=d.getCurrentPane();var l=e.eq(k);if(typeof k=="string"){l=e.filter("[href="+k+"]");k=e.index(l)}if(!l.length){if(h>=0){return d}k=g.initialIndex;l=e.eq(k)}var j={index:k,proceed:true};c(d).triggerHandler("onBeforeClick",j);if(!j.proceed){return d}l.addClass(g.current);b[g.effect].call(d,k);c(d).triggerHandler("onClick",j);e.removeClass(g.current);l.addClass(g.current);h=k;return d},getTabs:function(){return e},getPanes:function(){return f},getCurrentPane:function(){return f.eq(h)},getCurrentTab:function(){return e.eq(h)},getIndex:function(){return h},next:function(){return d.click(h+1)},prev:function(){return d.click(h-1)},onBeforeClick:function(j){return i("onBeforeClick",j)},onClick:function(j){return i("onClick",j)}});e.each(function(j){c(this).bind(g.event,function(k){d.click(j);if(!g.history){return k.preventDefault()}})});if(g.history){e.history(function(j,k){d.click(k||0)})}if(location.hash){d.click(location.hash)}else{d.click(g.initialIndex)}f.find("a[href^=#]").click(function(){d.click(c(this).attr("href"))})}c.fn.tabs=function(g,d){var e=this.eq(typeof conf=="number"?conf:0).data("tabs");if(e){return e}var f={tabs:"a",current:"current",onBeforeClick:null,onClick:null,effect:"default",history:false,initialIndex:0,event:"click",api:false};if(c.isFunction(d)){d={onBeforeClick:d}}c.extend(f,d);this.each(function(){var h=c(this).find(f.tabs);if(!h.length){h=c(this).children()}var i=g.jquery?g:c(g);e=new a(h,i,f);c(this).data("tabs",e)});return f.api?e:this}})(jQuery);(function(b){var c,a;b.prototype.history=function(e){var d=this;if(b.browser.msie){if(!a){a=b("<iframe />").hide().get(0);b("body").append(a);setInterval(function(){var f=a.contentWindow.document;var g=f.location.hash;if(c!==g){b.event.trigger("hash",g);c=g}},100)}d.bind("click.hash",function(g){var f=a.contentWindow.document;f.open().close();f.location.hash=b(this).attr("href")});d.eq(0).triggerHandler("click.hash")}else{setInterval(function(){var f=location.hash;if(d.filter("[href*="+f+"]").length&&f!==c){c=f;b.event.trigger("hash",f)}},100)}b(window).bind("hash",e);return this}})(jQuery);
(function(c){c.tools=c.tools||{version:{}};c.tools.version.tooltip="1.0.0";var b={toggle:[function(){this.getTip().show()},function(){this.getTip().hide()}]};c.tools.addTipEffect=function(d,f,e){b[d]=[f,e]};c.tools.addTipEffect("slideup",function(){var d=this.getConf();var e=d.slideOffset||10;this.getTip().css({opacity:0}).animate({top:"-="+e,opacity:d.opacity},d.slideInSpeed||200).show()},function(){var d=this.getConf();var e=d.slideOffset||10;this.getTip().animate({top:"-="+e,opacity:0},d.slideOutSpeed||200,function(){c(this).hide().animate({top:"+="+(e*2)},0)})});function a(g,e){var d=this;function i(j,k){c(d).bind(j,function(m,l){if(k&&k.call(this)===false&&l){l.proceed=false}});return d}c.each(e,function(j,k){if(c.isFunction(k)){i(j,k)}});var f=e.triggers?c(e.triggers):g.prev(e.trigger);if(!f.length){throw"cannot find trigges for tip: "+g.selector}f.bind(f.is("input")?"focus":"mouseover",function(j){d.show(j);g.hover(function(){d.show()},function(){d.hide()})});f.bind(f.is("input")?"blur":"mouseout",function(){d.hide()});g.css("opacity",e.opacity);var h=0;c.extend(d,{show:function(o){if(o){f=c(o.target)}clearTimeout(h);if(g.is(":animated")||g.is(":visible")){return d}var n={proceed:true};c(d).trigger("onBeforeShow",n);if(!n.proceed){return d}var m=f.position().top-g.outerHeight();var j=g.outerHeight()+f.outerHeight();var q=e.position[0];if(q=="center"){m+=j/2}if(q=="bottom"){m+=j}var k=f.outerWidth()+g.outerWidth();var l=f.position().left+f.outerWidth();q=e.position[1];if(q=="center"){l-=k/2}if(q=="left"){l-=k}m+=e.offset[0];l+=e.offset[1];g.css({position:"absolute",top:m,left:l});b[e.effect][0].call(d);c(d).trigger("onShow");return d},hide:function(){clearTimeout(h);h=setTimeout(function(){if(g.is(":animated")||!g.is(":visible")){return d}var j={proceed:true};c(d).trigger("onBeforeHide",j);if(!j.proceed){return d}b[e.effect][1].call(d);c(d).trigger("onHide")},e.delay||1);return d},isShown:function(){return g.is(":visible, :animated")},getConf:function(){return e},getTip:function(){return g},getTrigger:function(){return f},onBeforeShow:function(j){return i("onBeforeShow",j)},onShow:function(j){return i("onShow",j)},onBeforeHide:function(j){return i("onBeforeHide",j)},onHide:function(j){return i("onHide",j)}})}c.prototype.tooltip=function(d){var e=this.eq(typeof d=="number"?d:0).data("tooltip");if(e){return e}var f={trigger:null,triggers:null,effect:"slideup",delay:30,opacity:1,position:["top","center"],offset:[0,0],api:false};if(c.isFunction(d)){d={onBeforeShow:d}}c.extend(f,d);this.each(function(){e=new a(c(this),f);c(this).data("tooltip",e)});return f.api?e:this}})(jQuery);
(function(b){b.tools=b.tools||{version:{}};b.tools.version.scrollable="1.0.3";var c=null;function a(p,m){var s=this;if(!c){c=s}function n(t,u){b(s).bind(t,function(w,v){if(u&&u.call(this,v.index)===false&&v){v.proceed=false}});return s}b.each(m,function(t,u){if(b.isFunction(u)){n(t,u)}});var d=!m.vertical;var f=b(m.items,p);var j=0;function l(u,t){return u.indexOf("#")!=-1?b(u).eq(0):t.siblings(u).eq(0)}var q=l(m.navi,p);var g=l(m.prev,p);var i=l(m.next,p);var h=l(m.prevPage,p);var o=l(m.nextPage,p);b.extend(s,{getIndex:function(){return j},getConf:function(){return m},getSize:function(){return s.getItems().size()},getPageAmount:function(){return Math.ceil(this.getSize()/m.size)},getPageIndex:function(){return Math.ceil(j/m.size)},getRoot:function(){return p},getItemWrap:function(){return f},getItems:function(){return f.children()},seekTo:function(w,u,A){u=u||m.speed;if(b.isFunction(u)){A=u;u=m.speed}if(w<0){w=0}if(w>s.getSize()-m.size){return s}var B=s.getItems().eq(w);if(!B.length){return s}var t={index:w,proceed:true};b(s).trigger("onBeforeSeek",t);if(!t.proceed){return s}if(d){var v=-B.position().left;f.animate({left:v},u,m.easing,A?function(){A.call(s)}:null)}else{var z=-B.position().top;f.animate({top:z},u,m.easing,A?function(){A.call(s)}:null)}if(q.length){var x=m.activeClass;var y=Math.ceil(w/m.size);y=Math.min(y,q.children().length-1);q.children().removeClass(x).eq(y).addClass(x)}if(w===0){g.add(h).addClass(m.disabledClass)}else{g.add(h).removeClass(m.disabledClass)}if(w>=s.getSize()-m.size){i.add(o).addClass(m.disabledClass)}else{i.add(o).removeClass(m.disabledClass)}c=s;j=w;b(s).trigger("onSeek",{index:w});return s},move:function(v,u,t){var w=j+v;if(m.loop&&w>(s.getSize()-m.size)){w=0}return this.seekTo(w,u,t)},next:function(u,t){return this.move(1,u,t)},prev:function(u,t){return this.move(-1,u,t)},movePage:function(v,u,t){return this.move(m.size*v,u,t)},setPage:function(x,y,v){var u=m.size;var t=u*x;var w=t+u>=this.getSize();if(w){t=this.getSize()-m.size}return this.seekTo(t,y,v)},prevPage:function(u,t){return this.setPage(this.getPageIndex()-1,u,t)},nextPage:function(u,t){return this.setPage(this.getPageIndex()+1,u,t)},begin:function(u,t){return this.seekTo(0,u,t)},end:function(u,t){return this.seekTo(this.getSize()-m.size,u,t)},reload:function(){return r()},click:function(u,x,v){var w=s.getItems().eq(u);var t=m.activeClass;if(u<0||u>=this.getSize()){return s}if(m.size==2){if(u==s.getIndex()){u--}s.getItems().removeClass(t);w.addClass(t);return this.seekTo(u,x,v)}if(!w.hasClass(t)){s.getItems().removeClass(t);w.addClass(t);var z=Math.floor(m.size/2);var y=u-z;if(y>s.getSize()-m.size){y=s.getSize()-m.size}if(y!==u){return this.seekTo(y,x,v)}}return s},onBeforeSeek:function(t){return n("onBeforeSeek",t)},onSeek:function(t){return n("onSeek",t)}});if(b.isFunction(b.fn.mousewheel)){p.bind("mousewheel.scrollable",function(u,v){var t=b.browser.opera?1:-1;s.move(v>0?t:-t,50);return false})}g.addClass(m.disabledClass).click(function(){s.prev()});i.click(function(){s.next()});o.click(function(){s.nextPage()});h.addClass(m.disabledClass).click(function(){s.prevPage()});if(m.keyboard){b(document).unbind("keydown.scrollable").bind("keydown.scrollable",function(t){var u=c;if(!u){return}if(d&&(t.keyCode==37||t.keyCode==39)){u.move(t.keyCode==37?-1:1);return t.preventDefault()}if(!d&&(t.keyCode==38||t.keyCode==40)){u.move(t.keyCode==38?-1:1);return t.preventDefault()}return true})}function r(){if(q.is(":empty")||q.data("me")==s){q.empty();q.data("me",s);for(var u=0;u<s.getPageAmount();u++){var v=b("<"+m.naviItem+"/>").attr("href",u).click(function(x){var w=b(this);w.parent().children().removeClass(m.activeClass);w.addClass(m.activeClass);s.setPage(w.attr("href"));return x.preventDefault()});if(u===0){v.addClass(m.activeClass)}q.append(v)}}else{var t=q.children();t.each(function(w){var x=b(this);x.attr("href",w);if(w===0){x.addClass(m.activeClass)}x.click(function(){q.find("."+m.activeClass).removeClass(m.activeClass);x.addClass(m.activeClass);s.setPage(x.attr("href"))})})}if(m.clickable){s.getItems().each(function(x,w){var y=b(this);if(!y.data("set")){y.bind("click.scrollable",function(){s.click(x)});y.data("set",true)}})}if(m.hoverClass){s.getItems().hover(function(){b(this).addClass(m.hoverClass)},function(){b(this).removeClass(m.hoverClass)})}return s}r();var e=null;function k(){e=setInterval(function(){if(m.interval===0){clearInterval(e)}s.next()},m.interval)}if(m.interval>0){p.hover(function(){clearInterval(e)},function(){k()});k()}}b.fn.scrollable=function(d){var e=this.eq(typeof d=="number"?d:0).data("scrollable");if(e){return e}var f={size:5,vertical:false,clickable:true,loop:false,interval:0,speed:400,keyboard:true,activeClass:"active",disabledClass:"disabled",hoverClass:null,easing:"swing",items:".items",prev:".prev",next:".next",prevPage:".prevPage",nextPage:".nextPage",navi:".navi",naviItem:"a",api:false,onBeforeSeek:null,onSeek:null};b.extend(f,d);this.each(function(){e=new a(b(this),f);b(this).data("scrollable",e)});return f.api?e:this}})(jQuery);
(function(b){b.tools=b.tools||{version:{}};b.tools.version.overlay="1.0.2";var c=[];function a(h,d){var q=this,p=b(window),f,m,r,i,k,l;var e=d.expose&&b.tools.version.expose;function n(o,s){b(q).bind(o,function(u,t){if(s&&s.call(this)===false&&t){t.proceed=false}});return q}b.each(d,function(o,s){if(b.isFunction(s)){n(o,s)}});var j=d.target||h.attr("rel");var g=j?b(j):null;if(!g){g=h}else{k=h}p.load(function(){l=g.attr("overlay");if(!l){l=g.css("backgroundImage");if(!l){throw"background-image CSS property not set for overlay element: "+j}l=l.substring(l.indexOf("(")+1,l.indexOf(")")).replace(/\"/g,"");g.css("backgroundImage","none");g.attr("overlay",l)}r=g.outerWidth({margin:true});i=g.outerHeight({margin:true});m=b('<img src="'+l+'"/>');m.css({border:0,position:"absolute",display:"none"}).width(r).attr("overlay",true);b("body").append(m);if(k){k.bind("click.overlay",function(o){q.load(o.pageY-p.scrollTop(),o.pageX-p.scrollLeft());return o.preventDefault()})}if(!d.close||!g.find(d.close).length){g.prepend('<div class="close"></div>');d.close="div.close"}f=g.find(d.close);f.bind("click.overlay",function(){q.close()});if(d.preload){setTimeout(function(){var o=new Image();o.src=l},2000)}});b.extend(q,{load:function(v,u){if(q.isOpened()){return q}if(d.oneInstance){b.each(c,function(){this.close()})}var t={proceed:true};b(q).trigger("onBeforeLoad",t);if(!t.proceed){return q}if(e){m.expose(d.expose);m.expose().load()}v=v||d.start.top;u=u||d.start.left;var o=d.finish.top;var s=d.finish.left;if(o=="center"){o=Math.max((p.height()-i)/2,0)}if(s=="center"){s=Math.max((p.width()-r)/2,0)}if(!d.start.absolute){v+=p.scrollTop();u+=p.scrollLeft()}if(!d.finish.absolute){o+=p.scrollTop();s+=p.scrollLeft()}m.css({top:v,left:u,width:d.start.width,zIndex:d.zIndex}).show();m.animate({top:o,left:s,width:r},d.speed,function(){g.css({position:"absolute",top:o,left:s});var w=m.css("zIndex");f.add(g).css("zIndex",++w);g.fadeIn(d.fadeInSpeed,function(){b(q).trigger("onLoad")})});return q},close:function(){if(!q.isOpened()){return q}var t={proceed:true};b(q).trigger("onBeforeClose",t);if(!t.proceed){return q}if(e){m.expose().close()}if(m.is(":visible")){g.hide();var s=d.start.top;var o=d.start.left;if(k){t=k.offset();s=t.top+k.height()/2;o=t.left+k.width()/2}m.animate({top:s,left:o,width:0},d.closeSpeed,function(){b(q).trigger("onClose",t)})}return q},getBackgroundImage:function(){return m},getContent:function(){return g},getTrigger:function(){return k},isOpened:function(){return g.is(":visible")},getConf:function(){return d},onBeforeLoad:function(o){return n("onBeforeLoad",o)},onLoad:function(o){return n("onLoad",o)},onBeforeClose:function(o){return n("onBeforeClose",o)},onClose:function(o){return n("onClose",o)}});b(document).keydown(function(o){if(o.keyCode==27){q.close()}});if(d.closeOnClick){b(document).bind("click.overlay",function(o){if(!g.is(":visible, :animated")){return}var s=b(o.target);if(s.attr("overlay")){return}if(s.parents("[overlay]").length){return}q.close()})}}b.fn.overlay=function(e){var f=this.eq(typeof e=="number"?e:0).data("overlay");if(f){return f}var d=b(window);var g={start:{top:Math.round(d.height()/2),left:Math.round(d.width()/2),width:0,absolute:false},finish:{top:80,left:"center",absolute:false},speed:"normal",fadeInSpeed:"fast",closeSpeed:"fast",close:null,oneInstance:true,closeOnClick:true,preload:true,zIndex:9999,api:false,expose:null,target:null};if(b.isFunction(e)){e={onBeforeLoad:e}}b.extend(true,g,e);this.each(function(){f=new a(b(this),g);c.push(f);b(this).data("overlay",f)});return g.api?f:this}})(jQuery);
(function(b){b.tools=b.tools||{version:{}};b.tools.version.expose="1.0.2";function a(){var e=b(window).width();if(b.browser.mozilla){return e}var d;if(window.innerHeight&&window.scrollMaxY){d=window.innerWidth+window.scrollMaxX}else{if(document.body.scrollHeight>document.body.offsetHeight){d=document.body.scrollWidth}else{d=document.body.offsetWidth}}return d<e?d+20:e}function c(g,h){var e=this,d=null,f=false,i=0;function j(k,l){b(e).bind(k,function(n,m){if(l&&l.call(this)===false&&m){m.proceed=false}});return e}b.each(h,function(k,l){if(b.isFunction(l)){j(k,l)}});b(window).bind("resize.expose",function(){if(d){d.css({width:a(),height:b(document).height()})}});b.extend(this,{getMask:function(){return d},getExposed:function(){return g},getConf:function(){return h},isLoaded:function(){return f},load:function(){if(f){return e}i=g.eq(0).css("zIndex");if(h.maskId){d=b("#"+h.maskId)}if(!d||!d.length){d=b("<div/>").css({position:"absolute",top:0,left:0,width:a(),height:b(document).height(),display:"none",opacity:0,zIndex:h.zIndex});if(h.maskId){d.attr("id",h.maskId)}b("body").append(d);var k=d.css("backgroundColor");if(!k||k=="transparent"||k=="rgba(0, 0, 0, 0)"){d.css("backgroundColor",h.color)}if(h.closeOnEsc){b(document).bind("keydown.unexpose",function(n){if(n.keyCode==27){e.close()}})}if(h.closeOnClick){d.bind("click.unexpose",function(){e.close()})}}var m={proceed:true};b(e).trigger("onBeforeLoad",m);if(!m.proceed){return e}b.each(g,function(){var n=b(this);if(!/relative|absolute/i.test(n.css("position"))){n.css("position","relative")}});g.css({zIndex:h.zIndex+1});var l=d.height();if(!this.isLoaded()){d.css({opacity:0,display:"block"}).fadeTo(h.loadSpeed,h.opacity,function(){if(d.height()!=l){d.css("height",l)}b(e).trigger("onLoad")})}f=true;return e},close:function(){if(!f){return e}var k={proceed:true};b(e).trigger("onBeforeClose",k);if(k.proceed===false){return e}d.fadeOut(h.closeSpeed,function(){b(e).trigger("onClose");g.css({zIndex:b.browser.msie?i:null})});f=false;return e},onBeforeLoad:function(k){return j("onBeforeLoad",k)},onLoad:function(k){return j("onLoad",k)},onBeforeClose:function(k){return j("onBeforeClose",k)},onClose:function(k){return j("onClose",k)}})}b.fn.expose=function(d){var e=this.eq(typeof d=="number"?d:0).data("expose");if(e){return e}var f={maskId:null,loadSpeed:"slow",closeSpeed:"fast",closeOnClick:true,closeOnEsc:true,zIndex:9998,opacity:0.8,color:"#456",api:false};if(typeof d=="string"){d={color:d}}b.extend(f,d);this.each(function(){e=new c(b(this),f);b(this).data("expose",e)});return f.api?e:this}})(jQuery);
/*! Copyright (c) 2009 Brandon Aaron (http://brandonaaron.net)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version: 1.1.0-pre
 * Requires jQuery 1.3+
 * Docs: http://docs.jquery.com/Plugins/livequery
 */
(function($) {

$.extend($.fn, {
  livequery: function(type, fn, fn2) {
    var self = this, q;

    if ($.isFunction(type))
      fn2 = fn, fn = type, type = undefined;

    $.each( $.livequery.queries, function(i, query) {
      if ( self.selector == query.selector && self.context == query.context &&
        type == query.type && (!fn || fn.$lqguid == query.fn.$lqguid) && (!fn2 || fn2.$lqguid == query.fn2.$lqguid) )
          return (q = query) && false;
    });

    q = q || new $.livequery(this.selector, this.context, type, fn, fn2);

    q.stopped = false;

    q.run();

    return this;
  },

  expire: function(type, fn, fn2) {
    var self = this;

    if ($.isFunction(type))
      fn2 = fn, fn = type, type = undefined;

    $.each( $.livequery.queries, function(i, query) {
      if ( self.selector == query.selector && self.context == query.context &&
        (!type || type == query.type) && (!fn || fn.$lqguid == query.fn.$lqguid) && (!fn2 || fn2.$lqguid == query.fn2.$lqguid) && !this.stopped )
          $.livequery.stop(query.id);
    });

    return this;
  }
});

$.livequery = function(selector, context, type, fn, fn2) {
  this.selector = selector;
  this.context  = context;
  this.type     = type;
  this.fn       = fn;
  this.fn2      = fn2;
  this.elements = [];
  this.stopped  = false;

  this.id = $.livequery.queries.push(this)-1;

  fn.$lqguid = fn.$lqguid || $.livequery.guid++;
  if (fn2) fn2.$lqguid = fn2.$lqguid || $.livequery.guid++;

  return this;
};

$.livequery.prototype = {
  stop: function() {
    var query = this;

    if ( this.type )
      this.elements.unbind(this.type, this.fn);
    else if (this.fn2)
      this.elements.each(function(i, el) {
        query.fn2.apply(el);
      });

    this.elements = [];

    this.stopped = true;
  },

  run: function() {
    if ( this.stopped ) return;
    var query = this;

    var oEls = this.elements,
      els  = $(this.selector, this.context),
      nEls = els.not(oEls);

    this.elements = els;

    if (this.type) {
      nEls.bind(this.type, this.fn);

      if (oEls.length > 0)
        $.each(oEls, function(i, el) {
          if ( $.inArray(el, els) < 0 )
            $.event.remove(el, query.type, query.fn);
        });
    }
    else {
      nEls.each(function() {
        query.fn.apply(this);
      });

      if ( this.fn2 && oEls.length > 0 )
        $.each(oEls, function(i, el) {
          if ( $.inArray(el, els) < 0 )
            query.fn2.apply(el);
        });
    }
  }
};

$.extend($.livequery, {
  guid: 0,
  queries: [],
  queue: [],
  running: false,
  timeout: null,

  checkQueue: function() {
    if ( $.livequery.running && $.livequery.queue.length ) {
      var length = $.livequery.queue.length;
      while ( length-- )
        $.livequery.queries[ $.livequery.queue.shift() ].run();
    }
  },

  pause: function() {
    $.livequery.running = false;
  },

  play: function() {
    $.livequery.running = true;
    $.livequery.run();
  },

  registerPlugin: function() {
    $.each( arguments, function(i,n) {
      if (!$.fn[n]) return;

      var old = $.fn[n];

      $.fn[n] = function() {
        var r = old.apply(this, arguments);

        $.livequery.run();

        return r;
      }
    });
  },

  run: function(id) {
    if (id != undefined) {
      if ( $.inArray(id, $.livequery.queue) < 0 )
        $.livequery.queue.push( id );
    }
    else
      $.each( $.livequery.queries, function(id) {
        if ( $.inArray(id, $.livequery.queue) < 0 )
          $.livequery.queue.push( id );
      });

    if ($.livequery.timeout) clearTimeout($.livequery.timeout);
    $.livequery.timeout = setTimeout($.livequery.checkQueue, 20);
  },

  stop: function(id) {
    if (id != undefined)
      $.livequery.queries[ id ].stop();
    else
      $.each( $.livequery.queries, function(id) {
        $.livequery.queries[ id ].stop();
      });
  }
});

$.livequery.registerPlugin('append', 'prepend', 'after', 'before', 'wrap', 'attr', 'removeAttr', 'addClass', 'removeClass', 'toggleClass', 'empty', 'remove');

$(function() { $.livequery.play(); });

})(jQuery);

/*
 * jQuery validation plug-in 1.5.2
 *
 * http://bassistance.de/jquery-plugins/jquery-plugin-validation/
 * http://docs.jquery.com/Plugins/Validation
 *
 * Copyright (c) 2006 - 2008 Jörn Zaefferer
 *
 * $Id: jquery.validate.js 6243 2009-02-19 11:40:49Z joern.zaefferer $
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
(function($){$.extend($.fn,{validate:function(options){if(!this.length){options&&options.debug&&window.console&&console.warn("nothing selected, can't validate, returning nothing");return;}var validator=$.data(this[0],'validator');if(validator){return validator;}validator=new $.validator(options,this[0]);$.data(this[0],'validator',validator);if(validator.settings.onsubmit){this.find("input, button").filter(".cancel").click(function(){validator.cancelSubmit=true;});this.submit(function(event){if(validator.settings.debug)event.preventDefault();function handle(){if(validator.settings.submitHandler){validator.settings.submitHandler.call(validator,validator.currentForm);return false;}return true;}if(validator.cancelSubmit){validator.cancelSubmit=false;return handle();}if(validator.form()){if(validator.pendingRequest){validator.formSubmitted=true;return false;}return handle();}else{validator.focusInvalid();return false;}});}return validator;},valid:function(){if($(this[0]).is('form')){return this.validate().form();}else{var valid=false;var validator=$(this[0].form).validate();this.each(function(){valid|=validator.element(this);});return valid;}},removeAttrs:function(attributes){var result={},$element=this;$.each(attributes.split(/\s/),function(index,value){result[value]=$element.attr(value);$element.removeAttr(value);});return result;},rules:function(command,argument){var element=this[0];if(command){var settings=$.data(element.form,'validator').settings;var staticRules=settings.rules;var existingRules=$.validator.staticRules(element);switch(command){case"add":$.extend(existingRules,$.validator.normalizeRule(argument));staticRules[element.name]=existingRules;if(argument.messages)settings.messages[element.name]=$.extend(settings.messages[element.name],argument.messages);break;case"remove":if(!argument){delete staticRules[element.name];return existingRules;}var filtered={};$.each(argument.split(/\s/),function(index,method){filtered[method]=existingRules[method];delete existingRules[method];});return filtered;}}var data=$.validator.normalizeRules($.extend({},$.validator.metadataRules(element),$.validator.classRules(element),$.validator.attributeRules(element),$.validator.staticRules(element)),element);if(data.required){var param=data.required;delete data.required;data=$.extend({required:param},data);}return data;}});$.extend($.expr[":"],{blank:function(a){return!$.trim(a.value);},filled:function(a){return!!$.trim(a.value);},unchecked:function(a){return!a.checked;}});$.format=function(source,params){if(arguments.length==1)return function(){var args=$.makeArray(arguments);args.unshift(source);return $.format.apply(this,args);};if(arguments.length>2&&params.constructor!=Array){params=$.makeArray(arguments).slice(1);}if(params.constructor!=Array){params=[params];}$.each(params,function(i,n){source=source.replace(new RegExp("\\{"+i+"\\}","g"),n);});return source;};$.validator=function(options,form){this.settings=$.extend({},$.validator.defaults,options);this.currentForm=form;this.init();};$.extend($.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",errorElement:"label",focusInvalid:true,errorContainer:$([]),errorLabelContainer:$([]),onsubmit:true,ignore:[],ignoreTitle:false,onfocusin:function(element){this.lastActive=element;if(this.settings.focusCleanup&&!this.blockFocusCleanup){this.settings.unhighlight&&this.settings.unhighlight.call(this,element,this.settings.errorClass);this.errorsFor(element).hide();}},onfocusout:function(element){if(!this.checkable(element)&&(element.name in this.submitted||!this.optional(element))){this.element(element);}},onkeyup:function(element){if(element.name in this.submitted||element==this.lastElement){this.element(element);}},onclick:function(element){if(element.name in this.submitted)this.element(element);},highlight:function(element,errorClass){$(element).addClass(errorClass);},unhighlight:function(element,errorClass){$(element).removeClass(errorClass);}},setDefaults:function(settings){$.extend($.validator.defaults,settings);},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",dateDE:"Bitte geben Sie ein gültiges Datum ein.",number:"Please enter a valid number.",numberDE:"Bitte geben Sie eine Nummer ein.",digits:"Please enter only digits",creditcard:"Please enter a valid credit card number.",equalTo:"Please enter the same value again.",accept:"Please enter a value with a valid extension.",maxlength:$.format("Please enter no more than {0} characters."),minlength:$.format("Please enter at least {0} characters."),rangelength:$.format("Please enter a value between {0} and {1} characters long."),range:$.format("Please enter a value between {0} and {1}."),max:$.format("Please enter a value less than or equal to {0}."),min:$.format("Please enter a value greater than or equal to {0}.")},autoCreateRanges:false,prototype:{init:function(){this.labelContainer=$(this.settings.errorLabelContainer);this.errorContext=this.labelContainer.length&&this.labelContainer||$(this.currentForm);this.containers=$(this.settings.errorContainer).add(this.settings.errorLabelContainer);this.submitted={};this.valueCache={};this.pendingRequest=0;this.pending={};this.invalid={};this.reset();var groups=(this.groups={});$.each(this.settings.groups,function(key,value){$.each(value.split(/\s/),function(index,name){groups[name]=key;});});var rules=this.settings.rules;$.each(rules,function(key,value){rules[key]=$.validator.normalizeRule(value);});function delegate(event){var validator=$.data(this[0].form,"validator");validator.settings["on"+event.type]&&validator.settings["on"+event.type].call(validator,this[0]);}$(this.currentForm).delegate("focusin focusout keyup",":text, :password, :file, select, textarea",delegate).delegate("click",":radio, :checkbox",delegate);if(this.settings.invalidHandler)$(this.currentForm).bind("invalid-form.validate",this.settings.invalidHandler);},form:function(){this.checkForm();$.extend(this.submitted,this.errorMap);this.invalid=$.extend({},this.errorMap);if(!this.valid())$(this.currentForm).triggerHandler("invalid-form",[this]);this.showErrors();return this.valid();},checkForm:function(){this.prepareForm();for(var i=0,elements=(this.currentElements=this.elements());elements[i];i++){this.check(elements[i]);}return this.valid();},element:function(element){element=this.clean(element);this.lastElement=element;this.prepareElement(element);this.currentElements=$(element);var result=this.check(element);if(result){delete this.invalid[element.name];}else{this.invalid[element.name]=true;}if(!this.numberOfInvalids()){this.toHide=this.toHide.add(this.containers);}this.showErrors();return result;},showErrors:function(errors){if(errors){$.extend(this.errorMap,errors);this.errorList=[];for(var name in errors){this.errorList.push({message:errors[name],element:this.findByName(name)[0]});}this.successList=$.grep(this.successList,function(element){return!(element.name in errors);});}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors();},resetForm:function(){if($.fn.resetForm)$(this.currentForm).resetForm();this.submitted={};this.prepareForm();this.hideErrors();this.elements().removeClass(this.settings.errorClass);},numberOfInvalids:function(){return this.objectLength(this.invalid);},objectLength:function(obj){var count=0;for(var i in obj)count++;return count;},hideErrors:function(){this.addWrapper(this.toHide).hide();},valid:function(){return this.size()==0;},size:function(){return this.errorList.length;},focusInvalid:function(){if(this.settings.focusInvalid){try{$(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus();}catch(e){}}},findLastActive:function(){var lastActive=this.lastActive;return lastActive&&$.grep(this.errorList,function(n){return n.element.name==lastActive.name;}).length==1&&lastActive;},elements:function(){var validator=this,rulesCache={};return $([]).add(this.currentForm.elements).filter(":input").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function(){!this.name&&validator.settings.debug&&window.console&&console.error("%o has no name assigned",this);if(this.name in rulesCache||!validator.objectLength($(this).rules()))return false;rulesCache[this.name]=true;return true;});},clean:function(selector){return $(selector)[0];},errors:function(){return $(this.settings.errorElement+"."+this.settings.errorClass,this.errorContext);},reset:function(){this.successList=[];this.errorList=[];this.errorMap={};this.toShow=$([]);this.toHide=$([]);this.formSubmitted=false;this.currentElements=$([]);},prepareForm:function(){this.reset();this.toHide=this.errors().add(this.containers);},prepareElement:function(element){this.reset();this.toHide=this.errorsFor(element);},check:function(element){element=this.clean(element);if(this.checkable(element)){element=this.findByName(element.name)[0];}var rules=$(element).rules();var dependencyMismatch=false;for(method in rules){var rule={method:method,parameters:rules[method]};try{var result=$.validator.methods[method].call(this,element.value.replace(/\r/g,""),element,rule.parameters);if(result=="dependency-mismatch"){dependencyMismatch=true;continue;}dependencyMismatch=false;if(result=="pending"){this.toHide=this.toHide.not(this.errorsFor(element));return;}if(!result){this.formatAndAdd(element,rule);return false;}}catch(e){this.settings.debug&&window.console&&console.log("exception occured when checking element "+element.id
+", check the '"+rule.method+"' method");throw e;}}if(dependencyMismatch)return;if(this.objectLength(rules))this.successList.push(element);return true;},customMetaMessage:function(element,method){if(!$.metadata)return;var meta=this.settings.meta?$(element).metadata()[this.settings.meta]:$(element).metadata();return meta&&meta.messages&&meta.messages[method];},customMessage:function(name,method){var m=this.settings.messages[name];return m&&(m.constructor==String?m:m[method]);},findDefined:function(){for(var i=0;i<arguments.length;i++){if(arguments[i]!==undefined)return arguments[i];}return undefined;},defaultMessage:function(element,method){return this.findDefined(this.customMessage(element.name,method),this.customMetaMessage(element,method),!this.settings.ignoreTitle&&element.title||undefined,$.validator.messages[method],"<strong>Warning: No message defined for "+element.name+"</strong>");},formatAndAdd:function(element,rule){var message=this.defaultMessage(element,rule.method);if(typeof message=="function")message=message.call(this,rule.parameters,element);this.errorList.push({message:message,element:element});this.errorMap[element.name]=message;this.submitted[element.name]=message;},addWrapper:function(toToggle){if(this.settings.wrapper)toToggle=toToggle.add(toToggle.parents(this.settings.wrapper));return toToggle;},defaultShowErrors:function(){for(var i=0;this.errorList[i];i++){var error=this.errorList[i];this.settings.highlight&&this.settings.highlight.call(this,error.element,this.settings.errorClass);this.showLabel(error.element,error.message);}if(this.errorList.length){this.toShow=this.toShow.add(this.containers);}if(this.settings.success){for(var i=0;this.successList[i];i++){this.showLabel(this.successList[i]);}}if(this.settings.unhighlight){for(var i=0,elements=this.validElements();elements[i];i++){this.settings.unhighlight.call(this,elements[i],this.settings.errorClass);}}this.toHide=this.toHide.not(this.toShow);this.hideErrors();this.addWrapper(this.toShow).show();},validElements:function(){return this.currentElements.not(this.invalidElements());},invalidElements:function(){return $(this.errorList).map(function(){return this.element;});},showLabel:function(element,message){var label=this.errorsFor(element);if(label.length){label.removeClass().addClass(this.settings.errorClass);label.attr("generated")&&label.html(message);}else{label=$("<"+this.settings.errorElement+"/>").attr({"for":this.idOrName(element),generated:true}).addClass(this.settings.errorClass).html(message||"");if(this.settings.wrapper){label=label.hide().show().wrap("<"+this.settings.wrapper+"/>").parent();}if(!this.labelContainer.append(label).length)this.settings.errorPlacement?this.settings.errorPlacement(label,$(element)):label.insertAfter(element);}if(!message&&this.settings.success){label.text("");typeof this.settings.success=="string"?label.addClass(this.settings.success):this.settings.success(label);}this.toShow=this.toShow.add(label);},errorsFor:function(element){return this.errors().filter("[for='"+this.idOrName(element)+"']");},idOrName:function(element){return this.groups[element.name]||(this.checkable(element)?element.name:element.id||element.name);},checkable:function(element){return/radio|checkbox/i.test(element.type);},findByName:function(name){var form=this.currentForm;return $(document.getElementsByName(name)).map(function(index,element){return element.form==form&&element.name==name&&element||null;});},getLength:function(value,element){switch(element.nodeName.toLowerCase()){case'select':return $("option:selected",element).length;case'input':if(this.checkable(element))return this.findByName(element.name).filter(':checked').length;}return value.length;},depend:function(param,element){return this.dependTypes[typeof param]?this.dependTypes[typeof param](param,element):true;},dependTypes:{"boolean":function(param,element){return param;},"string":function(param,element){return!!$(param,element.form).length;},"function":function(param,element){return param(element);}},optional:function(element){return!$.validator.methods.required.call(this,$.trim(element.value),element)&&"dependency-mismatch";},startRequest:function(element){if(!this.pending[element.name]){this.pendingRequest++;this.pending[element.name]=true;}},stopRequest:function(element,valid){this.pendingRequest--;if(this.pendingRequest<0)this.pendingRequest=0;delete this.pending[element.name];if(valid&&this.pendingRequest==0&&this.formSubmitted&&this.form()){$(this.currentForm).submit();}else if(!valid&&this.pendingRequest==0&&this.formSubmitted){$(this.currentForm).triggerHandler("invalid-form",[this]);}},previousValue:function(element){return $.data(element,"previousValue")||$.data(element,"previousValue",previous={old:null,valid:true,message:this.defaultMessage(element,"remote")});}},classRuleSettings:{required:{required:true},email:{email:true},url:{url:true},date:{date:true},dateISO:{dateISO:true},dateDE:{dateDE:true},number:{number:true},numberDE:{numberDE:true},digits:{digits:true},creditcard:{creditcard:true}},addClassRules:function(className,rules){className.constructor==String?this.classRuleSettings[className]=rules:$.extend(this.classRuleSettings,className);},classRules:function(element){var rules={};var classes=$(element).attr('class');classes&&$.each(classes.split(' '),function(){if(this in $.validator.classRuleSettings){$.extend(rules,$.validator.classRuleSettings[this]);}});return rules;},attributeRules:function(element){var rules={};var $element=$(element);for(method in $.validator.methods){var value=$element.attr(method);if(value){rules[method]=value;}}if(rules.maxlength&&/-1|2147483647|524288/.test(rules.maxlength)){delete rules.maxlength;}return rules;},metadataRules:function(element){if(!$.metadata)return{};var meta=$.data(element.form,'validator').settings.meta;return meta?$(element).metadata()[meta]:$(element).metadata();},staticRules:function(element){var rules={};var validator=$.data(element.form,'validator');if(validator.settings.rules){rules=$.validator.normalizeRule(validator.settings.rules[element.name])||{};}return rules;},normalizeRules:function(rules,element){$.each(rules,function(prop,val){if(val===false){delete rules[prop];return;}if(val.param||val.depends){var keepRule=true;switch(typeof val.depends){case"string":keepRule=!!$(val.depends,element.form).length;break;case"function":keepRule=val.depends.call(element,element);break;}if(keepRule){rules[prop]=val.param!==undefined?val.param:true;}else{delete rules[prop];}}});$.each(rules,function(rule,parameter){rules[rule]=$.isFunction(parameter)?parameter(element):parameter;});$.each(['minlength','maxlength','min','max'],function(){if(rules[this]){rules[this]=Number(rules[this]);}});$.each(['rangelength','range'],function(){if(rules[this]){rules[this]=[Number(rules[this][0]),Number(rules[this][1])];}});if($.validator.autoCreateRanges){if(rules.min&&rules.max){rules.range=[rules.min,rules.max];delete rules.min;delete rules.max;}if(rules.minlength&&rules.maxlength){rules.rangelength=[rules.minlength,rules.maxlength];delete rules.minlength;delete rules.maxlength;}}if(rules.messages){delete rules.messages}return rules;},normalizeRule:function(data){if(typeof data=="string"){var transformed={};$.each(data.split(/\s/),function(){transformed[this]=true;});data=transformed;}return data;},addMethod:function(name,method,message){$.validator.methods[name]=method;$.validator.messages[name]=message;if(method.length<3){$.validator.addClassRules(name,$.validator.normalizeRule(name));}},methods:{required:function(value,element,param){if(!this.depend(param,element))return"dependency-mismatch";switch(element.nodeName.toLowerCase()){case'select':var options=$("option:selected",element);return options.length>0&&(element.type=="select-multiple"||($.browser.msie&&!(options[0].attributes['value'].specified)?options[0].text:options[0].value).length>0);case'input':if(this.checkable(element))return this.getLength(value,element)>0;default:return $.trim(value).length>0;}},remote:function(value,element,param){if(this.optional(element))return"dependency-mismatch";var previous=this.previousValue(element);if(!this.settings.messages[element.name])this.settings.messages[element.name]={};this.settings.messages[element.name].remote=typeof previous.message=="function"?previous.message(value):previous.message;param=typeof param=="string"&&{url:param}||param;if(previous.old!==value){previous.old=value;var validator=this;this.startRequest(element);var data={};data[element.name]=value;$.ajax($.extend(true,{url:param,mode:"abort",port:"validate"+element.name,dataType:"json",data:data,success:function(response){if(response){var submitted=validator.formSubmitted;validator.prepareElement(element);validator.formSubmitted=submitted;validator.successList.push(element);validator.showErrors();}else{var errors={};errors[element.name]=response||validator.defaultMessage(element,"remote");validator.showErrors(errors);}previous.valid=response;validator.stopRequest(element,response);}},param));return"pending";}else if(this.pending[element.name]){return"pending";}return previous.valid;},minlength:function(value,element,param){return this.optional(element)||this.getLength($.trim(value),element)>=param;},maxlength:function(value,element,param){return this.optional(element)||this.getLength($.trim(value),element)<=param;},rangelength:function(value,element,param){var length=this.getLength($.trim(value),element);return this.optional(element)||(length>=param[0]&&length<=param[1]);},min:function(value,element,param){return this.optional(element)||value>=param;},max:function(value,element,param){return this.optional(element)||value<=param;},range:function(value,element,param){return this.optional(element)||(value>=param[0]&&value<=param[1]);},email:function(value,element){return this.optional(element)||/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(value);},url:function(value,element){return this.optional(element)||/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value);},date:function(value,element){return this.optional(element)||!/Invalid|NaN/.test(new Date(value));},dateISO:function(value,element){return this.optional(element)||/^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(value);},dateDE:function(value,element){return this.optional(element)||/^\d\d?\.\d\d?\.\d\d\d?\d?$/.test(value);},number:function(value,element){return this.optional(element)||/^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(value);},numberDE:function(value,element){return this.optional(element)||/^-?(?:\d+|\d{1,3}(?:\.\d{3})+)(?:,\d+)?$/.test(value);},digits:function(value,element){return this.optional(element)||/^\d+$/.test(value);},creditcard:function(value,element){if(this.optional(element))return"dependency-mismatch";if(/[^0-9-]+/.test(value))return false;var nCheck=0,nDigit=0,bEven=false;value=value.replace(/\D/g,"");for(n=value.length-1;n>=0;n--){var cDigit=value.charAt(n);var nDigit=parseInt(cDigit,10);if(bEven){if((nDigit*=2)>9)nDigit-=9;}nCheck+=nDigit;bEven=!bEven;}return(nCheck%10)==0;},accept:function(value,element,param){param=typeof param=="string"?param:"png|jpe?g|gif";return this.optional(element)||value.match(new RegExp(".("+param+")$","i"));},equalTo:function(value,element,param){return value==$(param).val();}}});})(jQuery);;(function($){var ajax=$.ajax;var pendingRequests={};$.ajax=function(settings){settings=$.extend(settings,$.extend({},$.ajaxSettings,settings));var port=settings.port;if(settings.mode=="abort"){if(pendingRequests[port]){pendingRequests[port].abort();}return(pendingRequests[port]=ajax.apply(this,arguments));}return ajax.apply(this,arguments);};})(jQuery);;(function($){$.each({focus:'focusin',blur:'focusout'},function(original,fix){$.event.special[fix]={setup:function(){if($.browser.msie)return false;this.addEventListener(original,$.event.special[fix].handler,true);},teardown:function(){if($.browser.msie)return false;this.removeEventListener(original,$.event.special[fix].handler,true);},handler:function(e){arguments[0]=$.event.fix(e);arguments[0].type=fix;return $.event.handle.apply(this,arguments);}};});$.extend($.fn,{delegate:function(type,delegate,handler){return this.bind(type,function(event){var target=$(event.target);if(target.is(delegate)){return handler.apply(target,arguments);}});},triggerEvent:function(type,target){return this.triggerHandler(type,[$.event.fix({type:type,target:target})]);}})})(jQuery);
/*
 * jQuery Auto-Focus (0.1.0)
 *
 * NOTE: This script requires jQuery to work. Download jQuery at http://jquery.com.
 *
 * Copyright (c) 2009 Jonas Grimfelt, released under the MIT-license.
 *
 */
(function($)
{
  $.fn.autofocus = function(options)
  {
    var e = $(':input:visible:enabled:first', this);
    e.focus();
    return e;
  };
})(jQuery);
/*
 * jQuery Input Hint (0.1.0)
 *
 * NOTE: This script requires jQuery to work. Download jQuery at http://jquery.com.
 *
 * Copyright (c) 2009 Jonas Grimfelt, released under the MIT-license.
 *
 */
(function($)
{
  $.fn.hintable = function(options)
  {
    var hintable = this;

    hintable.each(function()
    {
      var e = $(this);

      hintable.focus(function()
      {
        if (e.val() == e[0].title)
        {
          e.removeClass('hint');
          e.val('');
        }
      });

      hintable.blur(function()
      {
        if (e.val() == '')
        {
          e.addClass('hint');
          e.val(e[0].title);
        }
      });

      hintable.blur();
    });

    return hintable;
  };
})(jQuery);
(function($){$.fn.extend({elastic:function(){var mimics=['paddingTop','paddingRight','paddingBottom','paddingLeft','fontSize','lineHeight','fontFamily','width','fontWeight'];return this.each(function(){if(this.type!='textarea'){return false;}
var $textarea=$(this),$twin=$('<div />').css({'position':'absolute','display':'none'}),lineHeight=parseInt($textarea.css('lineHeight'),10)||parseInt($textarea.css('fontSize'),'10'),minheight=parseInt($textarea.css('height'),10)||lineHeight*3,maxheight=parseInt($textarea.css('max-height'),10)||Number.MAX_VALUE,goalheight=0,i=0;$twin.appendTo($textarea.parent());var i=mimics.length;while(i--){$twin.css(mimics[i].toString(),$textarea.css(mimics[i].toString()));}
function setHeightAndOverflow(height,overflow){curratedHeight=Math.floor(parseInt(height,10));if($textarea.height()!=curratedHeight){$textarea.css({'height':curratedHeight+'px','overflow':overflow});}}
function update(){var textareaContent=$textarea.val().replace(/<|>/g,' ').replace(/\n/g,'<br />').replace(/&/g,"&amp;");var twinContent=$twin.html();if(textareaContent+'&nbsp;'!=twinContent){$twin.html(textareaContent+'&nbsp;');if(Math.abs($twin.height()+lineHeight-$textarea.height())>3){var goalheight=$twin.height()+lineHeight;if(goalheight>=maxheight){setHeightAndOverflow(maxheight,'auto');}else if(goalheight<=minheight){setHeightAndOverflow(minheight,'hidden');}else{setHeightAndOverflow(goalheight,'hidden');}}}}
$textarea.css({'overflow':'hidden'}).bind('focus',function(){self.periodicalUpdater=window.setInterval(function(){update();},50);}).bind('blur',function(){clearInterval(self.periodicalUpdater);});update();});}});})(jQuery);

(function($) {

  var trailing_whitespace = true;

  $.fn.truncate = function(options) {

    var opts = $.extend({}, $.fn.truncate.defaults, options);

    $(this).each(function() {

      var content_length = $.trim(squeeze($(this).text())).length;
      if (content_length <= opts.max_length)
        return;  // bail early if not overlong

      var actual_max_length = opts.max_length - opts.more.length - 1;  // 1 for leading whitespace
      var truncated_node = recursivelyTruncate(this, actual_max_length);
      var full_node = $(this).hide();

      truncated_node.insertAfter(full_node);

      findNodeForMore(truncated_node).append((opts.expandable ? ' <a href="#show more content">' : ' ')+opts.more+(opts.expandable ? '</a>' : ''));
      findNodeForLess(full_node).append(' <a href="#show less content">'+opts.less+'</a>');

      truncated_node.find('a:last').click(function() {
        truncated_node.hide(); full_node.show(); return false;
      });
      full_node.find('a:last').click(function() {
        truncated_node.show(); full_node.hide(); return false;
      });

    });
  }

  $.fn.truncate.defaults = {
    max_length: 100,
    more: '(…more)',
    less: '(less)',
    expandable: true
  };

  function recursivelyTruncate(node, max_length) {
    return (node.nodeType == 3) ? truncateText(node, max_length) : truncateNode(node, max_length);
  }

  function truncateNode(node, max_length) {
    var node = $(node);
    var new_node = node.clone().empty();
    var truncatedChild;
    node.contents().each(function() {
      var remaining_length = max_length - new_node.text().length;
      if (remaining_length == 0) return;  // breaks the loop
      truncatedChild = recursivelyTruncate(this, remaining_length);
      if (truncatedChild) new_node.append(truncatedChild);
    });
    return new_node;
  }

  function truncateText(node, max_length) {
    var text = squeeze(node.data);
    if (trailing_whitespace)  // remove initial whitespace if last text
      text = text.replace(/^ /, '');  // node had trailing whitespace.
    trailing_whitespace = !!text.match(/ $/);
    var text = text.slice(0, max_length);
    text = $('<div/>').text(text).html();
    return text;
  }

  function squeeze(string) {
    return string.replace(/\s+/g, ' ');
  }

  function findNodeForMore(node) {
    var $node = $(node);
    var last_child = $node.children(":last");
    if (!last_child) return node;
    var display = last_child.css('display');
    if (!display || display=='inline') return $node;
    return findNodeForMore(last_child);
  };

  function findNodeForLess(node) {
    var $node = $(node);
    var last_child = $node.children(":last");
    if (last_child && last_child.is('p')) return last_child;
    return node;
  };

})(jQuery);


(function($){$.fn.lazyload=function(options){var settings={threshold:0,failurelimit:0,event:"scroll",effect:"show",container:window};if(options){$.extend(settings,options);}
var elements=this;if("scroll"==settings.event){$(settings.container).bind("scroll",function(event){var counter=0;elements.each(function(){if(!$.belowthefold(this,settings)&&!$.rightoffold(this,settings)){$(this).trigger("appear");}else{if(counter++>settings.failurelimit){return false;}}});var temp=$.grep(elements,function(element){return!element.loaded;});elements=$(temp);});}
return this.each(function(){var self=this;$(self).attr("original",$(self).attr("src"));if("scroll"!=settings.event||$.belowthefold(self,settings)||$.rightoffold(self,settings)){if(settings.placeholder){$(self).attr("src",settings.placeholder);}else{$(self).removeAttr("src");}
self.loaded=false;}else{self.loaded=true;}
$(self).one("appear",function(){if(!this.loaded){$("<img />").bind("load",function(){$(self).hide().attr("src",$(self).attr("original"))
[settings.effect](settings.effectspeed);self.loaded=true;}).attr("src",$(self).attr("original"));};});if("scroll"!=settings.event){$(self).bind(settings.event,function(event){if(!self.loaded){$(self).trigger("appear");}});}});};$.belowthefold=function(element,settings){if(settings.container===undefined||settings.container===window){var fold=$(window).height()+$(window).scrollTop();}
else{var fold=$(settings.container).offset().top+$(settings.container).height();}
return fold<=$(element).offset().top-settings.threshold;};$.rightoffold=function(element,settings){if(settings.container===undefined||settings.container===window){var fold=$(window).width()+$(window).scrollLeft();}
else{var fold=$(settings.container).offset().left+$(settings.container).width();}
return fold<=$(element).offset().left-settings.threshold;};$.extend($.expr[':'],{"below-the-fold":"$.belowthefold(a, {threshold : 0, container: window})","above-the-fold":"!$.belowthefold(a, {threshold : 0, container: window})","right-of-fold":"$.rightoffold(a, {threshold : 0, container: window})","left-of-fold":"!$.rightoffold(a, {threshold : 0, container: window})"});})(jQuery);


/*
 * timeago: a jQuery plugin, version: 0.7.2 (2009-07-30)
 * @requires jQuery v1.2 or later
 *
 * Timeago is a jQuery plugin that makes it easy to support automatically
 * updating fuzzy timestamps (e.g. "4 minutes ago" or "about 1 day ago").
 *
 * For usage and examples, visit:
 * http://timeago.yarp.com/
 *
 * Licensed under the MIT:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright (c) 2008-2009, Ryan McGeary (ryanonjavascript -[at]- mcgeary [*dot*] org)
 */
(function($) {
  $.timeago = function(timestamp) {
    if (timestamp instanceof Date) return inWords(timestamp);
    else if (typeof timestamp == "string") return inWords($.timeago.parse(timestamp));
    else return inWords($.timeago.parse($(timestamp).attr("title")));
  };
  var $t = $.timeago;

  $.extend($.timeago, {
    settings: {
      refreshMillis: 60000,
      allowFuture: false,
      strings: {
        prefixAgo: null,
        prefixFromNow: null,
        suffixAgo: "ago",
        suffixFromNow: "from now",
        ago: null, // DEPRECATED, use suffixAgo
        fromNow: null, // DEPRECATED, use suffixFromNow
        seconds: "less than a minute",
        minute: "about a minute",
        minutes: "%d minutes",
        hour: "about an hour",
        hours: "about %d hours",
        day: "a day",
        days: "%d days",
        month: "about a month",
        months: "%d months",
        year: "about a year",
        years: "%d years"
      }
    },
    inWords: function(distanceMillis) {
      var $l = this.settings.strings;
      var prefix = $l.prefixAgo;
      var suffix = $l.suffixAgo || $l.ago;
      if (this.settings.allowFuture) {
        if (distanceMillis < 0) {
          prefix = $l.prefixFromNow;
          suffix = $l.suffixFromNow || $l.fromNow;
        }
        distanceMillis = Math.abs(distanceMillis);
      }

      var seconds = distanceMillis / 1000;
      var minutes = seconds / 60;
      var hours = minutes / 60;
      var days = hours / 24;
      var years = days / 365;

      var words = seconds < 45 && substitute($l.seconds, Math.round(seconds)) ||
        seconds < 90 && substitute($l.minute, 1) ||
        minutes < 45 && substitute($l.minutes, Math.round(minutes)) ||
        minutes < 90 && substitute($l.hour, 1) ||
        hours < 24 && substitute($l.hours, Math.round(hours)) ||
        hours < 48 && substitute($l.day, 1) ||
        days < 30 && substitute($l.days, Math.floor(days)) ||
        days < 60 && substitute($l.month, 1) ||
        days < 365 && substitute($l.months, Math.floor(days / 30)) ||
        years < 2 && substitute($l.year, 1) ||
        substitute($l.years, Math.floor(years));

      return $.trim([prefix, words, suffix].join(" "));
    },
    parse: function(iso8601) {
      var s = $.trim(iso8601);
      s = s.replace(/-/,"/").replace(/-/,"/");
      s = s.replace(/T/," ").replace(/Z/," UTC");
      s = s.replace(/([\+-]\d\d)\:?(\d\d)/," $1$2"); // -04:00 -> -0400
      return new Date(s);
    }
  });

  $.fn.timeago = function() {
    var self = this;
    self.each(refresh);

    var $s = $t.settings;
    if ($s.refreshMillis > 0) {
      setInterval(function() { self.each(refresh); }, $s.refreshMillis);
    }
    return self;
  };

  function refresh() {
    var date = $t.parse(this.title);
    if (!isNaN(date)) {
      $(this).text(inWords(date));
    }
    return this;
  }

  function inWords(date) {
    return $t.inWords(distance(date));
  }

  function distance(date) {
    return (new Date().getTime() - date.getTime());
  }

  function substitute(stringOrFunction, value) {
    var string = $.isFunction(stringOrFunction) ? stringOrFunction(value) : stringOrFunction;
    return string.replace(/%d/i, value);
  }

  document.createElement('abbr');
})(jQuery);
﻿/*!
 *  Hyphenator 2.3.0 - client side hyphenation for webbrowsers
 *  Copyright (C) 2009  Mathias Nater, Zürich (mathias at mnn dot ch)
 *  Project and Source hosted on http://code.google.com/p/hyphenator/
 *
 *  This JavaScript code is free software: you can redistribute
 *  it and/or modify it under the terms of the GNU Lesser
 *  General Public License (GNU LGPL) as published by the Free Software
 *  Foundation, either version 3 of the License, or (at your option)
 *  any later version.  The code is distributed WITHOUT ANY WARRANTY;
 *  without even the implied warranty of MERCHANTABILITY or FITNESS
 *  FOR A PARTICULAR PURPOSE.  See the GNU GPL for more details.
 *
 *  As additional permission under GNU GPL version 3 section 7, you
 *  may distribute non-source (e.g., minimized or compacted) forms of
 *  that code without the copy of the GNU GPL normally required by
 *  section 4, provided you include this license notice and a URL
 *  through which recipients can access the Corresponding Source.
 */

/*
 *  Comments are jsdoctoolkit formatted. See jsdoctoolkit.org
 */

/* The following comment is for JSLint: */
/*global window, ActiveXObject, unescape */
/*jslint browser: true, eqeqeq: true, immed: true, newcap: true, nomen: true, onevar: true, undef: true, white: true, indent: 4*/

/**
 * @fileOverview
 * A script that does hyphenation in (X)HTML files
 * @author Mathias Nater, <a href = "mailto:mathias@mnn.ch">mathias@mnn.ch</a>
 * @version 2.3.0
  */

/**
 * @constructor
 * @description Provides all functionality to do hyphenation, except the patterns that are loaded
 * externally.
 * @namespace Holds all methods and properties
 * @example
 * &lt;script src = "Hyphenator.js" type = "text/javascript"&gt;&lt;/script&gt;
 * &lt;script type = "text/javascript"&gt;
 *   Hyphenator.run();
 * &lt;/script&gt;
 */
var Hyphenator = (function () {


	/**
	 * @name Hyphenator-languageHint
	 * @fieldOf Hyphenator
	 * @description
	 * A string to be displayed in a prompt if the language can't be guessed.
	 * If you add hyphenation patterns change this string.
	 * Internally, this string is used to define languages that are supported by Hyphenator.
	 * @see Hyphenator-supportedLang
	 * @type string
	 * @private
	 * @see Hyphenator-autoSetMainLanguage
	 */
	var languageHint = 'cs, da, bn, de, en, es, fi, fr, gu, hi, hu, it, kn, ml, nl, or, pa, pl, pt, ru, sv, ta, te, uk',

	/**
	 * @name Hyphenator-supportedLang
	 * @fieldOf Hyphenator
	 * @description
	 * A generated key-value object that stores supported languages.
	 * The languages are retrieved from {@link Hyphenator-languageHint}.
	 * @type object
	 * @private
	 * @example
	 * Check if language lang is supported:
	 * if (supportedLang[lang])
	 */
	supportedLang = (function () {
		var k, i = 0, a = languageHint.split(', '), r = {};
		while (!!(k = a[i++])) {
			r[k] = true;
		}
		return r;
	}()),

	/**
	 * @name Hyphenator-prompterStrings
	 * @fieldOf Hyphenator
	 * @description
	 * A key-value object holding the strings to be displayed if the language can't be guessed
	 * If you add hyphenation patterns change this string.
	 * @type object
	 * @private
	 * @see Hyphenator-autoSetMainLanguage
	 */
	prompterStrings = {
		'cs': 'Jazyk této internetové stránky nebyl automaticky rozpoznán. Určete prosím její jazyk:',
		'da': 'Denne websides sprog kunne ikke bestemmes. Angiv venligst sprog:',
		'de': 'Die Sprache dieser Webseite konnte nicht automatisch bestimmt werden. Bitte Sprache angeben:',
		'en': 'The language of this website could not be determined automatically. Please indicate the main language:',
		'es': 'El idioma del sitio no pudo determinarse autom%E1ticamente. Por favor, indique el idioma principal:',
		'fi': 'Sivun kielt%E4 ei tunnistettu automaattisesti. M%E4%E4rit%E4 sivun p%E4%E4kieli:',
		'fr': 'La langue de ce site n%u2019a pas pu %EAtre d%E9termin%E9e automatiquement. Veuillez indiquer une langue, s.v.p.%A0:',
		'hu': 'A weboldal nyelvét nem sikerült automatikusan megállapítani. Kérem adja meg a nyelvet:',
		'it': 'Lingua del sito sconosciuta. Indicare una lingua, per favore:',
		'ml': 'ഈ വെ%u0D2C%u0D4D%u200Cസൈറ്റിന്റെ ഭാഷ കണ്ടുപിടിയ്ക്കാ%u0D28%u0D4D%u200D കഴിഞ്ഞില്ല. ഭാഷ ഏതാണെന്നു തിരഞ്ഞെടുക്കുക:',
		'nl': 'De taal van deze website kan niet automatisch worden bepaald. Geef de hoofdtaal op:',
		'pt': 'A língua deste site não pôde ser determinada automaticamente. Por favor indique a língua principal:',
		'ru': 'Язык этого сайта не может быть определен автоматически. Пожалуйста укажите язык:',
		'sv': 'Spr%E5ket p%E5 den h%E4r webbplatsen kunde inte avg%F6ras automatiskt. V%E4nligen ange:',
		'uk': 'Мова цього веб-сайту не може бути визначена автоматично. Будь ласка, вкажіть головну мову:'
	},

	/**
	 * @name Hyphenator-basePath
	 * @fieldOf Hyphenator
	 * @description
 	 * A string storing the basepath from where Hyphenator.js was loaded.
	 * This is used to load the patternfiles.
	 * The basepath is determined dynamically by searching all script-tags for Hyphenator.js
	 * If the path cannot be determined http://hyphenator.googlecode.com/svn/trunk/ is used as fallback.
	 * @type string
	 * @private
	 * @see Hyphenator-loadPatterns
	 */
	basePath = (function () {
		var s = document.getElementsByTagName('script'), i = 0, p, src, t;
		while (!!(t = s[i++])) {
			if (!t.src) {
				continue;
			}
			src = t.src;
			p = src.indexOf('Hyphenator.js');
			if (p !== -1) {
				return src.substring(0, p);
			}
		}
		return 'http://hyphenator.googlecode.com/svn/trunk/';
	}()),

	/**
	 * @name Hyphenator-isLocal
	 * @fieldOf Hyphenator
	 * @description
	 * isLocal is true, if Hyphenator is loaded from the same domain, as the webpage, but false, if
	 * it's loaded from an external source (i.e. directly from google.code)
	 */
	isLocal = (function () {
		var re = false;
		if (basePath.indexOf(window.location.hostname) !== -1) {
			re = true;
		}
		return re;
	}()),

	/**
	 * @name Hyphenator-documentLoaded
	 * @fieldOf Hyphenator
	 * @description
	 * documentLoaded is true, when the DOM has been loaded. This is set by runOnContentLoaded
	 */
	documentLoaded = false,

	/**
	 * @name Hyphenator-dontHyphenate
	 * @fieldOf Hyphenator
	 * @description
	 * A key-value object containing all html-tags whose content should not be hyphenated
	 * @type object
	 * @private
	 * @see Hyphenator-hyphenateElement
	 */
	dontHyphenate = {'script': true, 'code': true, 'pre': true, 'img': true, 'br': true, 'samp': true, 'kbd': true, 'var': true, 'abbr': true, 'acronym': true, 'sub': true, 'sup': true, 'button': true, 'option': true, 'label': true, 'textarea': true},

	/**
	 * @name Hyphenator-enableCache
	 * @fieldOf Hyphenator
	 * @description
	 * A variable to set if caching is enabled or not
	 * @type boolean
	 * @default true
	 * @private
	 * @see Hyphenator.config
	 * @see hyphenateWord
	 */
	enableCache = true,

	/**
	 * @name Hyphenator-enableRemoteLoading
	 * @fieldOf Hyphenator
	 * @description
	 * A variable to set if pattern files should be loaded remotely or not
	 * @type boolean
	 * @default true
	 * @private
	 * @see Hyphenator.config
	 * @see Hyphenator-loadPatterns
	 */
	enableRemoteLoading = true,

	/**
	 * @name Hyphenator-displayToggleBox
	 * @fieldOf Hyphenator
	 * @description
	 * A variable to set if the togglebox should be displayed or not
	 * @type boolean
	 * @default false
	 * @private
	 * @see Hyphenator.config
	 * @see Hyphenator-toggleBox
	 */
	displayToggleBox = false,

	/**
	 * @name Hyphenator-hyphenateClass
	 * @fieldOf Hyphenator
	 * @description
	 * A string containing the css-class-name for the hyphenate class
	 * @type string
	 * @default 'hyphenate'
	 * @private
	 * @example
	 * &lt;p class = "hyphenate"&gt;Text&lt;/p&gt;
	 * @see Hyphenator.config
	 */
	hyphenateClass = 'hyphenate',

	/**
	 * @name Hyphenator-dontHyphenateClass
	 * @fieldOf Hyphenator
	 * @description
	 * A string containing the css-class-name for elements that should not be hyphenated
	 * @type string
	 * @default 'donthyphenate'
	 * @private
	 * @example
	 * &lt;p class = "donthyphenate"&gt;Text&lt;/p&gt;
	 * @see Hyphenator.config
	 */
	dontHyphenateClass = 'donthyphenate',

	/**
	 * @name Hyphenator-min
	 * @fieldOf Hyphenator
	 * @description
	 * A number wich indicates the minimal length of words to hyphenate.
	 * @type number
	 * @default 6
	 * @private
	 * @see Hyphenator.config
	 */
	min = 6,

	/**
	 * @name Hyphenator-isBookmarklet
	 * @fieldOf Hyphenator
	 * @description
	 * Indicates if Hyphanetor runs as bookmarklet or not.
	 * @type boolean
	 * @default false
	 * @private
	 */
	isBookmarklet = (function () {
		var loc = null, re = false, jsArray = document.getElementsByTagName('script'), i, l;
		for (i = 0, l = jsArray.length; i < l; i++) {
			if (!!jsArray[i].getAttribute('src')) {
				loc = jsArray[i].getAttribute('src');
			}
			if (!loc) {
				continue;
			} else if (loc.indexOf('Hyphenator.js?bm=true') !== -1) {
				re = true;
			}
		}
		return re;
	}()),

	/**
	 * @name Hyphenator-mainLanguage
	 * @fieldOf Hyphenator
	 * @description
	 * The general language of the document
	 * @type number
	 * @private
	 * @see Hyphenator-autoSetMainLanguage
	 */
	mainLanguage = null,

	/**
	 * @name Hyphenator-elements
	 * @fieldOf Hyphenator
	 * @description
	 * An array holding all elements that have to be hyphenated. This var is filled by
	 * {@link Hyphenator-gatherDocumentInfos}
	 * @type array
	 * @private
	 */
	elements = [],

	/**
	 * @name Hyphenator-exceptions
	 * @fieldOf Hyphenator
	 * @description
	 * An object containing exceptions as comma separated strings for each language.
	 * When the language-objects are loaded, their exceptions are processed, copied here and then deleted.
	 * @see Hyphenator-prepareLanguagesObj
	 * @type object
	 * @private
	 */
	exceptions = {},

	/**
	 * @name Hyphenator-docLanguages
	 * @fieldOf Hyphenator
	 * @description
	 * An object holding all languages used in the document. This is filled by
	 * {@link Hyphenator-gatherDocumentInfos}
	 * @type object
	 * @private
	 */
	docLanguages = {},


	/**
	 * @name Hyphenator-state
	 * @fieldOf Hyphenator
	 * @description
	 * A number that inidcates the current state of the script
	 * 0: not initialized
	 * 1: loading patterns
	 * 2: ready
	 * 3: hyphenation done
	 * 4: hyphenation removed
	 * @type number
	 * @private
	 */
	state = 0,

	/**
	 * @name Hyphenator-url
	 * @fieldOf Hyphenator
	 * @description
	 * A string containing a RegularExpression to match URL's
	 * @type string
	 * @private
	 */
	url = '(\\w*:\/\/)?((\\w*:)?(\\w*)@)?((([\\d]{1,3}\\.){3}([\\d]{1,3}))|(([\\w]*\\.)+([\\w]{2,4})))(:\\d*)?(\/[\\w#!:\\.?\\+=&%@!\\-]*)*',

	/**
	 * @name Hyphenator-mail
	 * @fieldOf Hyphenator
	 * @description
	 * A string containing a RegularExpression to match mail-adresses
	 * @type string
	 * @private
	 */
	mail = '[\\w-\\.]+@[\\w\\.]+',

	/**
	 * @name Hyphenator-urlRE
	 * @fieldOf Hyphenator
	 * @description
	 * A RegularExpressions-Object for url- and mail adress matching
	 * @type object
	 * @private
	 */
	urlOrMailRE = new RegExp('(' + url + ')|(' + mail + ')', 'i'),

	/**
	 * @name Hyphenator-zeroWidthSpace
	 * @fieldOf Hyphenator
	 * @description
	 * A string that holds a char.
	 * Depending on the browser, this is the zero with space or an empty string.
	 * The zeroWidthSpace is inserted after a '-' in compound words, so even FF and IE
	 * will break after a '-' if necessary.
	 * zeroWidthSpace is also used to break URLs
	 * @type string
	 * @private
	 */
	zeroWidthSpace = (function () {
		var zws, ua = navigator.userAgent.toLowerCase();
		if (ua.indexOf('msie 6') === -1) {
			zws = String.fromCharCode(8203); //Unicode zero width space
		} else {
			zws = ''; //IE6 doesn't support zws
		}
		return zws;
	}()),

	/**
	 * @name Hyphenator-onHyphenationDone
	 * @fieldOf Hyphenator
	 * @description
	 * A method to be called, when the last element has been hyphenated or the hyphenation has been
	 * removed from the last element.
	 * @see Hyphenator.config
	 * @type function
	 * @private
	 */
	onHyphenationDone = function () {},

	/**
	 * @name Hyphenator-onError
	 * @fieldOf Hyphenator
	 * @description
	 * A function that can be called upon an error.
	 * @see Hyphenator.config
	 * @type function
	 * @private
	 */
	onError = function (e) {
		alert("Hyphenator.js says:\n\nAn Error ocurred:\n" + e.message);
	},

	/**
	 * @name Hyphenator-selectorFunction
	 * @fieldOf Hyphenator
	 * @description
	 * A function that has to return a HTMLNodeList of Elements to be hyphenated.
	 * By default it uses the classname ('hyphenate') to select the elements.
	 * @see Hyphenator.config
	 * @type function
	 * @private
	 */
	selectorFunction = function () {
		var tmp, el = [], i, l;
		if (document.getElementsByClassName) {
			el = document.getElementsByClassName(hyphenateClass);
		} else {
			tmp = document.getElementsByTagName('*');
			l = tmp.length;
			for (i = 0; i < l; i++)
			{
				if (tmp[i].className.indexOf(hyphenateClass) !== -1 && tmp[i].className.indexOf(dontHyphenateClass) === -1) {
					el.push(tmp[i]);
				}
			}
		}
		return el;
	},

	/**
	 * @name Hyphenator-intermediateState
	 * @fieldOf Hyphenator
	 * @description
	 * The value of style.visibility of the text while it is hyphenated.
	 * @see Hyphenator.config
	 * @type string
	 * @private
	 */
	intermediateState = 'hidden',

	/**
	 * @name Hyphenator-hyphen
	 * @fieldOf Hyphenator
	 * @description
	 * A string containing the character for in-word-hyphenation
	 * @type string
	 * @default the soft hyphen
	 * @private
	 * @see Hyphenator.config
	 */
	hyphen = String.fromCharCode(173),

	/**
	 * @name Hyphenator-urlhyphen
	 * @fieldOf Hyphenator
	 * @description
	 * A string containing the character for url/mail-hyphenation
	 * @type string
	 * @default the zero width space
	 * @private
	 * @see Hyphenator.config
	 * @see Hyphenator-zeroWidthSpace
	 */
	urlhyphen = zeroWidthSpace,

	/**
	 * @name Hyphenator-Expando
	 * @methodOf Hyphenator
	 * @description
	 * This custom object stores data for elements: storing data directly in elements
	 * (DomElement.customData = foobar;) isn't a good idea. It would lead to conflicts
	 * in form elements, when the form has a child with name="foobar". Therefore, this
	 * solution follows the approach of jQuery: the data is stored in an object and
	 * referenced by a unique attribute of the element. The attribute has a name that
	 * is built by the prefix "HyphenatorExpando_" and a random number, so if the very
	 * very rare case occurs, that there's already an attribute with the same name, a
	 * simple reload is enough to make it function.
	 * @private
	 */
	Expando = (function () {
		var container = {},
			name = "HyphenatorExpando_" + Math.random(),
			uuid = 0;
		return {
			getDataForElem : function (elem) {
				return container[elem[name]];
			},
			setDataForElem : function (elem, data) {
				var id;
				if (elem[name] && elem[name] !== '') {
					id = elem[name];
				} else {
					id = uuid++;
					elem[name] = id;
				}
				container[id] = data;
			},
			appendDataForElem : function (elem, data) {
				var k;
				for (k in data) {
					if (data.hasOwnProperty(k)) {
						container[elem[name]][k] = data[k];
					}
				}
			},
			delDataOfElem : function (elem) {
				delete container[elem[name]];
			}
		};
	}()),

	/*
	 * ContentLoaded.js
	 *
	 * Author: Diego Perini (diego.perini at gmail.com)
	 * Summary: Cross-browser wrapper for DOMContentLoaded
	 * Updated: 17/05/2008
	 * License: MIT
	 * Version: 1.1
	 *
	 * URL:
	 * http://javascript.nwbox.com/ContentLoaded/
	 * http://javascript.nwbox.com/ContentLoaded/MIT-LICENSE
	 *
	 * Notes:
	 * based on code by Dean Edwards and John Resig
	 * http://dean.edwards.name/weblog/2006/06/again/
	 */
	/**
	 * @name Hyphenator-runOnContentLoaded
	 * @methodOf Hyphenator
	 * @description
	 * A crossbrowser solution for the DOMContentLoaded-Event
	 * @author Diego Perini (diego.perini at gmail.com)
	 * <a href = "http://javascript.nwbox.com/ContentLoaded/">http://javascript.nwbox.com/ContentLoaded/</a>
	 * @param object the window-object
	 * @param function-object the function to call onDOMContentLoaded
	 * @private
 	 */
	runOnContentLoaded = function (w, f) {
		var	d = w.document,
			D = 'DOMContentLoaded',
			u = w.navigator.userAgent.toLowerCase(),
			v = parseFloat(u.match(/.+(?:rv|it|ml|ra|ie)[\/: ]([\d.]+)/)[1]),
			oldonload = w.onload;

		function init(e) {
			if (!documentLoaded) {
				documentLoaded = true;
				f((e.type && e.type === D) ? e : {
					type: D,
					target: d,
					eventPhase: 0,
					currentTarget: d,
					timeStamp: new Date().getTime(),
					eventType: e.type || e
				});
			}
		}

		if (/webkit\//.test(u) && v < 525.13) {

			(function () {
				if (/complete|loaded/.test(d.readyState)) {
					init('khtml-poll');
				} else {
					setTimeout(arguments.callee, 10);
				}
			}());

		} else if (/msie/.test(u) && !w.opera) {

			d.attachEvent('onreadystatechange',
				function (e) {
					if (d.readyState === 'complete') {
						d.detachEvent('on' + e.type, arguments.callee);
						init(e);
					}
				}
			);
			if (w.self === top) {
				(function () {
					try {
						d.documentElement.doScroll('left');
					} catch (e) {
						setTimeout(arguments.callee, 10);
						return;
					}
					init('msie-poll');
				}());
			}

		} else if (d.addEventListener &&
			(/opera\//.test(u) && v > 9) ||
			(/gecko\//.test(u) && v >= 1.8) ||
			(/khtml\//.test(u) && v >= 4.0) ||
			(/webkit\//.test(u) && v >= 525.13)) {

			d.addEventListener(D,
				function (e) {
					d.removeEventListener(D, arguments.callee, false);
					init(e);
				}, false
			);

		} else {

			/**
			 * @ignore
			 */
			w.onload = function (e) {
				init(e || w.event);
				if (typeof oldonload === 'function') {
					oldonload(e || w.event);
				}
			};

		}
	},
	/* end ContentLoaded.js */

	/**
	 * @name Hyphenator-getLang
	 * @methodOf Hyphenator
	 * @description
	 * Gets the language of an element. If no language is set, it may use the {@link Hyphenator-mainLanguage}.
	 * @param object The first parameter is an DOM-Element-Object
	 * @param boolean The second parameter is a boolean to tell if the function should return the {@link Hyphenator-mainLanguage}
	 * if there's no language found for the element.
	 * @private
	 */
	getLang = function (el, fallback) {
		if (!!el.getAttribute('lang')) {
			return el.getAttribute('lang').substring(0, 2).toLowerCase();
		}
		/*if (!!el.getAttribute('xml:lang')) {
			return el.getAttribute('xml:lang').substring(0, 2);
		}*/
		try {
			if (!!el.getAttribute('xml:lang')) {
				return el.getAttribute('xml:lang').substring(0, 2).toLowerCase();
			}
		} catch (ex) {}
		if (el.tagName !== 'HTML') {
			return getLang(el.parentNode, true);
		}
		if (fallback) {
			return mainLanguage;
		}
		return null;
	},

	/**
	 * @name Hyphenator-autoSetMainLanguage
	 * @methodOf Hyphenator
	 * @description
	 * Retrieves the language of the document from the DOM.
	 * The function looks in the following places:
	 * <ul>
	 * <li>lang-attribute in the html-tag</li>
	 * <li>&lt;meta http-equiv = "content-language" content = "xy" /&gt;</li>
	 * <li>&lt;meta name = "DC.Language" content = "xy" /&gt;</li>
	 * <li>&lt;meta name = "language" content = "xy" /&gt;</li>
	 * </li>
	 * If nothing can be found a prompt using {@link Hyphenator-languageHint} and {@link Hyphenator-prompterStrings} is displayed.
	 * If the retrieved language is in the object {@link Hyphenator-supportedLang} it is copied to {@link Hyphenator-mainLanguage}
	 * @private
	 */
	autoSetMainLanguage = function () {
		var el = document.getElementsByTagName('html')[0],
			m = document.getElementsByTagName('meta'),
			i, text, lang, e, ul;
		mainLanguage = getLang(el);
		if (!mainLanguage) {
			for (i = 0; i < m.length; i++) {
				if (!!m[i].getAttribute('http-equiv') && (m[i].getAttribute('http-equiv') === 'content-language')) {
					mainLanguage = m[i].getAttribute('content').substring(0, 2).toLowerCase();
				}
				if (!!m[i].getAttribute('name') && (m[i].getAttribute('name') === 'DC.language')) {
					mainLanguage = m[i].getAttribute('content').substring(0, 2).toLowerCase();
				}
				if (!!m[i].getAttribute('name') && (m[i].getAttribute('name') === 'language')) {
					mainLanguage = m[i].getAttribute('content').substring(0, 2).toLowerCase();
				}
			}
		}
		if (!mainLanguage) {
			text = '';
			ul = navigator.language ? navigator.language : navigator.userLanguage;
			ul = ul.substring(0, 2);
			if (prompterStrings.hasOwnProperty(ul)) {
				text = prompterStrings[ul];
			} else {
				text = prompterStrings.en;
			}
			text += ' (ISO 639-1)\n\n' + languageHint;
			lang = window.prompt(unescape(text), ul).toLowerCase();
			if (supportedLang[lang]) {
				mainLanguage = lang;
			} else {
				e = new Error('The language "' + lang + '" is not yet supported.');
				throw e;
			}
		}
	},

	/**
	 * @name Hyphenator-gatherDocumentInfos
	 * @methodOf Hyphenator
	 * @description
	 * This method runs through the DOM and executes the process()-function on:
	 * - every node returned by the {@link Hyphenator-selectorFunction}.
	 * The process()-function copies the element to the elements-variable, sets its visibility
	 * to intermediateState, retrieves its language and recursivly descends the DOM-tree until
	 * the child-Nodes aren't of type 1
	 * @private
	 */
	gatherDocumentInfos = function () {
		var elToProcess, tmp, i = 0,
			process = function (el, hide, lang) {
			var n, i = 0, hyphenatorSettings = {};
			if (hide && intermediateState === 'hidden') {
				if (!!el.getAttribute('style')) {
					hyphenatorSettings.hasOwnStyle = true;
				} else {
					hyphenatorSettings.hasOwnStyle = false;
				}
				hyphenatorSettings.isHidden = true;
				el.style.visibility = 'hidden';
			}
			if (el.lang) {
				hyphenatorSettings.language = el.lang.toLowerCase(); //copy attribute-lang to internal lang
			} else if (lang) {
				hyphenatorSettings.language = lang.toLowerCase();
			} else {
				hyphenatorSettings.language = getLang(el, true);
			}
			lang = hyphenatorSettings.language;
			if (supportedLang[lang]) {
				docLanguages[lang] = true;
			} else {
				onError(new Error('Language ' + lang + ' is not yet supported.'));
			}
			Expando.setDataForElem(el, hyphenatorSettings);
			elements.push(el);
			while (!!(n = el.childNodes[i++])) {
				if (n.nodeType === 1 && !dontHyphenate[n.nodeName.toLowerCase()] &&
					n.className.indexOf(dontHyphenateClass) === -1 && !(n in elToProcess)) {
					process(n, false, lang);
				}
			}
		};
		if (Hyphenator.isBookmarklet()) {
			elToProcess = document.getElementsByTagName('body')[0];
			process(elToProcess, false, mainLanguage);
		} else {
			elToProcess = selectorFunction();
			while (!!(tmp = elToProcess[i++]))
			{
				process(tmp, true);
			}
		}
		if (!Hyphenator.languages.hasOwnProperty(mainLanguage)) {
			docLanguages[mainLanguage] = true;
		} else if (!Hyphenator.languages[mainLanguage].prepared) {
			docLanguages[mainLanguage] = true;
		}
		if (elements.length > 0) {
			Expando.appendDataForElem(elements[elements.length - 1], {isLast : true});
		}
	},

	/*
	registerOnCopy = function () {
			document.getElementsByTagName('body')[0].oncopy = function (e) {
				var text, h;
				if (window.getSelection) {
					text = window.getSelection().toString();
				}
				else if (document.selection) { // should come last; Opera!
					text = document.selection.createRange().text;
				}
				switch (hyphen) {
					case '|':
						h = '\\|';
						break;
					case '+':
						h = '\\+';
						break;
					case '*':
						h = '\\*';
						break;
					case String.fromCharCode(173):
						h = '\u00AD';
						break;
					default:
						h = hyphen;
					}
				text = text.replace(new RegExp(h, 'g'), '');
				text = text.replace(new RegExp(zeroWidthSpace, 'g'), '');
				alert(text);
				if (!!e && !!e.clipboardData) { //Safari
					e.preventDefault();
					e.clipboardData.setData('text/plain', text);
				} else if (!!window.clipboardData) { // IE
					window.preventDefault();
					window.clipboardData.setData('Text', text);
				}
			}
	},
	*/

	/**
	 * @name Hyphenator-convertPatterns
	 * @methodOf Hyphenator
	 * @description
	 * Converts the patterns from string '_a6' to object '_a':'_a6'.
	 * The result is stored in the {@link Hyphenator-patterns}-object.
	 * @private
	 * @param string the language whose patterns shall be converted
	 */
	convertPatterns = function (lang) {
		var plen, anfang, pats, pat, key, tmp = {};
		pats = Hyphenator.languages[lang].patterns;
		for (plen in pats) {
			if (pats.hasOwnProperty(plen)) {
				plen = parseInt(plen, 10);
				anfang = 0;
				while (!!(pat = pats[plen].substr(anfang, plen))) {
					key = pat.replace(/\d/g, '');
					tmp[key] = pat;
					anfang += plen;
				}
			}
		}
		Hyphenator.languages[lang].patterns = tmp;
		Hyphenator.languages[lang].patternsConverted = true;
	},

	/**
	 * @name Hyphenator-convertExceptionsToObject
	 * @methodOf Hyphenator
	 * @description
	 * Converts a list of comma seprated exceptions to an object:
	 * 'Fortran,Hy-phen-a-tion' -> {'Fortran':'Fortran','Hyphenation':'Hy-phen-a-tion'}
	 * @private
	 * @param string a comma separated string of exceptions (without spaces)
	 */
	convertExceptionsToObject = function (exc) {
		var w = exc.split(', '),
			r = {},
			i, l, key;
		for (i = 0, l = w.length; i < l; i++) {
			key = w[i].replace(/-/g, '');
			if (!r.hasOwnProperty(key)) {
				r[key] = w[i];
			}
		}
		return r;
	},

	/**
	 * @name Hyphenator-loadPatterns
	 * @methodOf Hyphenator
	 * @description
	 * Adds a &lt;script&gt;-Tag to the DOM to load an externeal .js-file containing patterns and settings for the given language.
	 * If the iven language is not in the {@link Hyphenator-supportedLang}-Object it returns.
	 * One may ask why we are not using AJAX to load the patterns. The XMLHttpRequest-Object
	 * has a same-origin-policy. This makes the isBookmarklet-functionality impossible.
	 * @param string The language to load the patterns for
	 * @private
	 * @see Hyphenator-basePath
	 */
	loadPatterns = function (lang) {
		var url, xhr, head, script;
		if (supportedLang[lang] && !Hyphenator.languages[lang]) {
	        url = basePath + 'patterns/' + lang + '.js';
		} else {
			return;
		}
		if (isLocal && !isBookmarklet) {
			xhr = null;
			if (typeof XMLHttpRequest !== 'undefined') {
				xhr = new XMLHttpRequest();
			}
			if (!xhr) {
				try {
					xhr  = new ActiveXObject("Msxml2.XMLHTTP");
				} catch (e) {
					xhr  = null;
				}
			}
			if (xhr) {
				xhr.open('HEAD', url, false);
				xhr.setRequestHeader('Cache-Control', 'no-cache');
				xhr.send(null);
				if (xhr.status === 404) {
					onError(new Error('Could not load\n' + url));
					delete docLanguages[lang];
					return;
				}
			}
		}
		if (document.createElement) {
			head = document.getElementsByTagName('head').item(0);
			script = document.createElement('script');
			script.src = url;
			script.type = 'text/javascript';
			head.appendChild(script);
		}
	},

	/**
	 * @name Hyphenator-prepareLanguagesObj
	 * @methodOf Hyphenator
	 * @description
	 * Adds a cache to each language and converts the exceptions-list to an object.
	 * @private
	 * @param string the language ob the lang-obj
	 */
	prepareLanguagesObj = function (lang) {
		var lo = Hyphenator.languages[lang], wrd;
		if (!lo.prepared) {
			if (enableCache) {
				lo.cache = {};
			}
			if (lo.hasOwnProperty('exceptions')) {
				Hyphenator.addExceptions(lang, lo.exceptions);
				delete lo.exceptions;
			}
			if (exceptions.hasOwnProperty('global')) {
				if (exceptions.hasOwnProperty(lang)) {
					exceptions[lang] += ', ' + exceptions.global;
				} else {
					exceptions[lang] = exceptions.global;
				}
			}
			if (exceptions.hasOwnProperty(lang)) {
				lo.exceptions = convertExceptionsToObject(exceptions[lang]);
				delete exceptions[lang];
			} else {
				lo.exceptions = {};
			}
			convertPatterns(lang);
			wrd = '[\\w' + lo.specialChars + '@' + String.fromCharCode(173) + '-]{' + min + ',}';
			lo.genRegExp = new RegExp('(' + url + ')|(' + mail + ')|(' + wrd + ')', 'gi');
			lo.prepared = true;
		}
	},

	/**
	 * @name Hyphenator-prepare
	 * @methodOf Hyphenator
	 * @description
	 * This funtion prepares the Hyphenator-Object: If RemoteLoading is turned off, it assumes
	 * that the patternfiles are loaded, all conversions are made and the callback is called.
	 * If RemoteLoading is on (default), it loads the pattern files and waits until they are loaded,
	 * by repeatedly checking Hyphenator.languages. If a patterfile is loaded the patterns are
	 * converted to their object style and the lang-object extended.
	 * Finally the callback is called.
	 * @param function-object callback to call, when all patterns are loaded
	 * @private
	 */
	prepare = function (callback) {
		var lang, docLangEmpty = true, interval;
		if (!enableRemoteLoading) {
			for (lang in Hyphenator.languages) {
				if (Hyphenator.languages.hasOwnProperty(lang)) {
					prepareLanguagesObj(lang);
				}
			}
			state = 2;
			callback();
			return;
		}
		state = 1;
		for (lang in docLanguages) {
			if (docLanguages.hasOwnProperty(lang)) {
				loadPatterns(lang);
				docLangEmpty = false;
			}
		}
		if (docLangEmpty) {
			state = 2;
			callback();
			return;
		}
		interval = window.setInterval(function () {
			var finishedLoading = false, lang;
			for (lang in docLanguages) {
				if (docLanguages.hasOwnProperty(lang)) {
					if (!Hyphenator.languages[lang]) {
						finishedLoading = false;
						break;
					} else {
						finishedLoading = true;
						delete docLanguages[lang];
						prepareLanguagesObj(lang);
					}
				}
			}
			if (finishedLoading) {
				window.clearInterval(interval);
				state = 2;
				callback();
			}
		}, 100);
	},

	/**
	 * @name Hyphenator-switchToggleBox
	 * @methodOf Hyphenator
	 * @description
	 * Creates or hides the toggleBox: a small button to turn off/on hyphenation on a page.
	 * @param boolean true when hyphenation is on, false when it's off
	 * @see Hyphenator.config
	 * @private
	 */
	toggleBox = function (s) {
		var myBox, bdy, myIdAttribute, myTextNode, myClassAttribute;
		if (!!(myBox = document.getElementById('HyphenatorToggleBox'))) {
			if (s) {
				myBox.firstChild.data = 'Hy-phe-na-ti-on';
			} else {
				myBox.firstChild.data = 'Hyphenation';
			}
		} else {
			bdy = document.getElementsByTagName('body')[0];
			myBox = document.createElement('div');
			myIdAttribute = document.createAttribute('id');
			myIdAttribute.nodeValue = 'HyphenatorToggleBox';
			myClassAttribute = document.createAttribute('class');
			myClassAttribute.nodeValue = dontHyphenateClass;
			myTextNode = document.createTextNode('Hy-phe-na-ti-on');
			myBox.appendChild(myTextNode);
			myBox.setAttributeNode(myIdAttribute);
			myBox.setAttributeNode(myClassAttribute);
			myBox.onclick =  Hyphenator.toggleHyphenation;
			myBox.style.position = 'absolute';
			myBox.style.top = '0px';
			myBox.style.right = '0px';
			myBox.style.margin = '0';
			myBox.style.backgroundColor = '#AAAAAA';
			myBox.style.color = '#FFFFFF';
			myBox.style.font = '6pt Arial';
			myBox.style.letterSpacing = '0.2em';
			myBox.style.padding = '3px';
			myBox.style.cursor = 'pointer';
			myBox.style.WebkitBorderBottomLeftRadius = '4px';
			myBox.style.MozBorderRadiusBottomleft = '4px';
			bdy.appendChild(myBox);
		}
	},

	/**
	 * @name Hyphenator-hyphenateWord
	 * @methodOf Hyphenator
	 * @description
	 * This function is the heart of Hyphenator.js. It returns a hyphenated word.
	 *
	 * If there's already a {@link Hyphenator-hypen} in the word, the word is returned as it is.
	 * If the word is in the exceptions list or in the cache, it is retrieved from it.
	 * If there's a '-' put a zeroWidthSpace after the '-' and hyphenate the parts.
	 * @param string The language of the word
	 * @param string The word
	 * @returns string The hyphenated word
	 * @public
	 */
	hyphenateWord = function (lang, word) {
		var lo = Hyphenator.languages[lang],
			parts, i, l, w, wl, s, hypos, p, maxwins, win, pat = false, patk, patl, c, digits, z, numb3rs, n, inserted, hyphenatedword;
		if (word === '') {
			return '';
		}
		if (word.indexOf(hyphen) !== -1) {
			return word;
		}
		if (enableCache && lo.cache.hasOwnProperty(word)) { //the word is in the cache
			return lo.cache[word];
		}
		if (lo.exceptions.hasOwnProperty(word)) { //the word is in the exceptions list
			return lo.exceptions[word].replace(/-/g, hyphen);
		}
		if (word.indexOf('-') !== -1) {
			parts = word.split('-');
			for (i = 0, l = parts.length; i < l; i++) {
				parts[i] = hyphenateWord(lang, parts[i]);
			}
			return parts.join('-' + zeroWidthSpace);
		}
		w = '_' + word + '_';
		wl = w.length;
		s = w.split('');
		w = w.toLowerCase();
		hypos = [];
		numb3rs = {'0': true, '1': true, '2': true, '3': true, '4': true, '5': true, '6': true, '7': true, '8': true, '9': true}; //check for member is faster then isFinite()
		n = wl - lo.shortestPattern;
		for (p = 0; p <= n; p++) {
			maxwins = Math.min((wl - p), lo.longestPattern);
			for (win = lo.shortestPattern; win <= maxwins; win++) {
				if (lo.patterns.hasOwnProperty(patk = w.substr(p, win))) {
					pat = lo.patterns[patk];
				} else {
					continue;
				}
				digits = 1;
				patl = pat.length;
				for (i = 0; i < patl; i++) {
					c = pat.charAt(i);
					if (numb3rs[c]) {
						if (i === 0) {
							z = p - 1;
							if (!hypos[z] || hypos[z] < c) {
								hypos[z] = c;
							}
						} else {
							z = p + i - digits;
							if (!hypos[z] || hypos[z] < c) {
								hypos[z] = c;
							}
						}
						digits++;
					}
				}
			}
		}
		inserted = 0;
		for (i = lo.leftmin; i <= (word.length - lo.rightmin); i++) {
			if (!!(hypos[i] & 1)) {
				s.splice(i + inserted + 1, 0, hyphen);
				inserted++;
			}
		}
		hyphenatedword = s.slice(1, -1).join('');
		if (enableCache) {
			lo.cache[word] = hyphenatedword;
		}
		return hyphenatedword;
	},

	/**
	 * @name Hyphenator-hyphenateURL
	 * @methodOf Hyphenator
	 * @description
	 * Puts {@link Hyphenator-urlhyphen} after each no-alphanumeric char that my be in a URL.
	 * @param string URL to hyphenate
	 * @returns string the hyphenated URL
	 * @public
	 */
	hyphenateURL = function (url) {
		return url.replace(/([:\/\.\?#&_,;!@]+)/gi, '$&' + urlhyphen);
	},

	/**
	 * @name Hyphenator-hyphenateElement
	 * @methodOf Hyphenator
	 * @description
	 * Takes the content of the given element and - if there's text - replaces the words
	 * by hyphenated words. If there's another element, the function is called recursively.
	 * When all words are hyphenated, the visibility of the element is set to 'visible'.
	 * @param object The element to hyphenate
	 * @param string The language used in this element
	 * @public
	 */
	hyphenateElement = function (el) {
		var hyphenatorSettings = Expando.getDataForElem(el),
			lang = hyphenatorSettings.language, hyphenate, n, i;
		if (Hyphenator.languages.hasOwnProperty(lang)) {
			hyphenate = function (word) {
				if (urlOrMailRE.test(word)) {
					return hyphenateURL(word);
				} else {
					return hyphenateWord(lang, word);
				}
			};
			i = 0;
			while (!!(n = el.childNodes[i++])) {
				if (n.nodeType === 3 && n.data.length >= min) { //type 3 = #text -> hyphenate!
					n.data = n.data.replace(Hyphenator.languages[lang].genRegExp, hyphenate);
				}
			}
		}
		if (hyphenatorSettings.isHidden && intermediateState === 'hidden') {
			el.style.visibility = 'visible';
			if (!hyphenatorSettings.hasOwnStyle) {
				el.setAttribute('style', ''); // without this, removeAttribute doesn't work in Safari (thanks to molily)
				el.removeAttribute('style');
			} else {
				if (el.style.removeProperty) {
					el.style.removeProperty('visibility');
				} else if (el.style.removeAttribute) { // IE
					el.style.removeAttribute('visibility');
				}
			}
		}
		if (hyphenatorSettings.isLast) {
			state = 3;
			onHyphenationDone();
		}
	},

	/**
	 * @name Hyphenator-removeHyphenationFromElement
	 * @methodOf Hyphenator
	 * @description
	 * Removes all hyphens from the element. If there are other elements, the function is
	 * called recursively.
	 * Removing hyphens is usefull if you like to copy text. Some browsers are buggy when the copy hyphenated texts.
	 * @param object The element where to remove hyphenation.
	 * @public
	 */
	removeHyphenationFromElement = function (el) {
		var h, i = 0, n;
		switch (hyphen) {
		case '|':
			h = '\\|';
			break;
		case '+':
			h = '\\+';
			break;
		case '*':
			h = '\\*';
			break;
		default:
			h = hyphen;
		}
		while (!!(n = el.childNodes[i++])) {
			if (n.nodeType === 3) {
				n.data = n.data.replace(new RegExp(h, 'g'), '');
				n.data = n.data.replace(new RegExp(zeroWidthSpace, 'g'), '');
			} else if (n.nodeType === 1) {
				removeHyphenationFromElement(n);
			}
		}
	},

	/**
	 * @name Hyphenator-hyphenateDocument
	 * @methodOf Hyphenator
	 * @description
	 * Calls hyphenateElement() for all members of elements. This is done with a setTimout
	 * to prevent a "long running Script"-alert when hyphenating large pages.
	 * Therefore a tricky bind()-function was necessary.
	 * @public
	 */
	hyphenateDocument = function () {
		function bind(fun, arg) {
			return function () {
				return fun(arg);
			};
		}
		var i = 0, el;
		while (!!(el = elements[i++])) {
			window.setTimeout(bind(hyphenateElement, el), 0);

		}
	},

	/**
	 * @name Hyphenator-removeHyphenationFromDocument
	 * @methodOf Hyphenator
	 * @description
	 * Does what it says ;-)
	 * @public
	 */
	removeHyphenationFromDocument = function () {
		var i = 0, el;
		while (!!(el = elements[i++])) {
			removeHyphenationFromElement(el);
		}
		state = 4;
	};

	return {

		/**
		 * @name Hyphenator.version
		 * @memberOf Hyphenator
		 * @description
		 * String containing the actual version of Hyphenator.js
		 * [major release].[minor releas].[bugfix release]
		 * major release: new API, new Features, big changes
		 * minor release: new languages, improvements
		 * @public
         */
		version: '2.3.0',

		/**
		 * @name Hyphenator.languages
		 * @memberOf Hyphenator
		 * @description
		 * Objects that holds key-value pairs, where key is the language and the value is the
		 * language-object loaded from (and set by) the pattern file.
		 * The language object holds the following members:
		 * <table>
		 * <tr><th>key</th><th>desc></th></tr>
		 * <tr><td>leftmin</td><td>The minimum of chars to remain on the old line</td></tr>
		 * <tr><td>rightmin</td><td>The minimum of chars to go on the new line</td></tr>
		 * <tr><td>shortestPattern</td><td>The shortes pattern (numbers don't count!)</td></tr>
		 * <tr><td>longestPattern</td><td>The longest pattern (numbers don't count!)</td></tr>
		 * <tr><td>specialChars</td><td>Non-ASCII chars in the alphabet.</td></tr>
		 * <tr><td>patterns</td><td>the patterns</td></tr>
		 * </table>
		 * And optionally (or after prepareLanguagesObj() has been called):
		 * <table>
		 * <tr><td>exceptions</td><td>Excpetions for the secified language</td></tr>
		 * </table>
		 * @public
         */
		languages: {},


		/**
		 * @name Hyphenator.config
		 * @methodOf Hyphenator
		 * @description
		 * Config function that takes an object as an argument. The object contains key-value-pairs
		 * containig Hyphenator-settings. This is a shortcut for calling Hyphenator.set...-Methods.
		 * @param object <table>
		 * <tr><th>key</th><th>values</th><th>default</th></tr>
		 * <tr><td>classname</td><td>string</td><td>'hyphenate'</td></tr>
		 * <tr><td>minwordlength</td><td>integer</td><td>6</td></tr>
		 * <tr><td>hyphenchar</td><td>string</td><td>'&amp;shy;'</td></tr>
		 * <tr><td>urlhyphenchar</td><td>string</td><td>'zero with space'</td></tr>
		 * <tr><td>togglebox</td><td>function</td><td>see code</td></tr>
		 * <tr><td>displaytogglebox</td><td>boolean</td><td>false</td></tr>
		 * <tr><td>remoteloading</td><td>boolean</td><td>true</td></tr>
		 * <tr><td>onhyphenationdonecallback</td><td>function</td><td>empty function</td></tr>
		 * <tr><td>onerrorhandler</td><td>function</td><td>alert(onError)</td></tr>
		 * <tr><td>intermediatestate</td><td>string</td><td>'hidden'</td></tr>
		 * </table>
		 * @public
		 * @example &lt;script src = "Hyphenator.js" type = "text/javascript"&gt;&lt;/script&gt;
         * &lt;script type = "text/javascript"&gt;
         *     Hyphenator.config({'minwordlength':4,'hyphenchar':'|'});
         *     Hyphenator.run();
         * &lt;/script&gt;
         */
		config: function (obj) {
			var assert = function (name, type) {
					if (typeof obj[name] === type) {
						return true;
					} else {
						onError(new Error('Config onError: ' + name + ' must be of type ' + type));
						return false;
					}
				},
				key;
			for (key in obj) {
				if (obj.hasOwnProperty(key)) {
					switch (key) {
					case 'classname':
						if (assert('classname', 'string')) {
							hyphenateClass = obj.classname;
						}
						break;
					case 'donthyphenateclassname':
						if (assert('donthyphenateclassname', 'string')) {
							dontHyphenateClass = obj.donthyphenateclassname;
						}
						break;
					case 'minwordlength':
						if (assert('minwordlength', 'number')) {
							min = obj.minwordlength;
						}
						break;
					case 'hyphenchar':
						if (assert('hyphenchar', 'string')) {
							if (obj.hyphenchar === '&shy;') {
								obj.hyphenchar = String.fromCharCode(173);
							}
							hyphen = obj.hyphenchar;
						}
						break;
					case 'urlhyphenchar':
						if (obj.hasOwnProperty('urlhyphenchar')) {
							if (assert('urlhyphenchar', 'string')) {
								urlhyphen = obj.urlhyphenchar;
							}
						}
						break;
					case 'togglebox':
						if (assert('togglebox', 'function')) {
							toggleBox = obj.togglebox;
						}
						break;
					case 'displaytogglebox':
						if (assert('displaytogglebox', 'boolean')) {
							displayToggleBox = obj.displaytogglebox;
						}
						break;
					case 'remoteloading':
						if (assert('remoteloading', 'boolean')) {
							enableRemoteLoading = obj.remoteloading;
						}
						break;
					case 'enablecache':
						if (assert('enablecache', 'boolean')) {
							enableCache = obj.enablecache;
						}
						break;
					case 'onhyphenationdonecallback':
						if (assert('onhyphenationdonecallback', 'function')) {
							onHyphenationDone = obj.onhyphenationdonecallback;
						}
						break;
					case 'onerrorhandler':
						if (assert('onerrorhandler', 'function')) {
							onError = obj.onerrorhandler;
						}
						break;
					case 'intermediatestate':
						if (assert('intermediatestate', 'string')) {
							intermediateState = obj.intermediatestate;
						}
						break;
					case 'selectorfunction':
						if (assert('selectorfunction', 'function')) {
							selectorFunction = obj.selectorfunction;
						}
						break;
					default:
						onError(new Error('Hyphenator.config: property ' + key + ' not known.'));
					}
				}
			}
		},

		/**
		 * @name Hyphenator.run
		 * @methodOf Hyphenator
		 * @description
		 * Bootstrap function that starts all hyphenation processes when called.
		 * @public
		 * @example &lt;script src = "Hyphenator.js" type = "text/javascript"&gt;&lt;/script&gt;
         * &lt;script type = "text/javascript"&gt;
         *   Hyphenator.run();
         * &lt;/script&gt;
         */
		run: function () {
			var process = function () {
				try {
					autoSetMainLanguage();
					gatherDocumentInfos();
					prepare(hyphenateDocument);
					if (displayToggleBox) {
						toggleBox(true);
					}
				} catch (e) {
					onError(e);
				}
			};
			if (!documentLoaded) {
				runOnContentLoaded(window, process);
			}
			if (Hyphenator.isBookmarklet() || documentLoaded) {
				process();
			}
		},

		/**
		 * @name Hyphenator.addExceptions
		 * @methodOf Hyphenator
		 * @description
		 * Adds the exceptions from the string to the appropriate language in the
		 * {@link Hyphenator-languages}-object
		 * @param string The language
		 * @param string A comma separated string of hyphenated words WITH spaces.
		 * @public
		 * @example &lt;script src = "Hyphenator.js" type = "text/javascript"&gt;&lt;/script&gt;
         * &lt;script type = "text/javascript"&gt;
         *   Hyphenator.addExceptions('de','ziem-lich, Wach-stube');
         *   Hyphenator.run();
         * &lt;/script&gt;
         */
		addExceptions: function (lang, words) {
			if (lang === '') {
				lang = 'global';
			}
			if (exceptions.hasOwnProperty[lang]) {
				exceptions[lang] += ", " + words;
			} else {
				exceptions[lang] = words;
			}
		},

		/**
		 * @name Hyphenator.hyphenate
		 * @methodOf Hyphenator
		 * @public
		 * @description
		 * Hyphenates the target. The language patterns must be loaded.
		 * If the target is a string, the hyphenated string is returned,
		 * if it's an object, the values are hyphenated directly.
		 * @param mixed the target to be hyphenated
		 * @param string the language of the target
		 * @returns string
		 * @example &lt;script src = "Hyphenator.js" type = "text/javascript"&gt;&lt;/script&gt;
		 * &lt;script src = "patterns/en.js" type = "text/javascript"&gt;&lt;/script&gt;
         * &lt;script type = "text/javascript"&gt;
		 * var t = Hyphenator.hyphenate('Hyphenation', 'en'); //Hy|phen|ation
		 * &lt;/script&gt;
		 */
		hyphenate: function (target, lang) {
			var hyphenate, n, i;
			if (Hyphenator.languages.hasOwnProperty(lang)) {
				if (!Hyphenator.languages[lang].prepared) {
					prepareLanguagesObj(lang);
				}
				hyphenate = function (word) {
					if (urlOrMailRE.test(word)) {
						return hyphenateURL(word);
					} else {
						return hyphenateWord(lang, word);
					}
				};
				if (typeof target === 'string' || target.constructor === String) {
					return target.replace(Hyphenator.languages[lang].genRegExp, hyphenate);
				} else if (typeof target === 'object') {
					i = 0;
					while (!!(n = target.childNodes[i++])) {
						if (n.nodeType === 3 && n.data.length >= min) { //type 3 = #text -> hyphenate!
							n.data = n.data.replace(Hyphenator.languages[lang].genRegExp, hyphenate);
						} else if (n.nodeType === 1) {
							Hyphenator.hyphenate(n, lang);
						}
					}
				}
			} else {
				onError(new Error('Language "' + lang + '" is not loaded.'));
			}
		},

		/**
		 * @name Hyphenator.isBookmarklet
		 * @methodOf Hyphenator
		 * @description
		 * Returns {@link Hyphenator-isBookmarklet}.
		 * @returns boolean
		 * @public
         */
		isBookmarklet: function () {
			return isBookmarklet;
		},


		/**
		 * @name Hyphenator.toggleHyphenation
		 * @methodOf Hyphenator
		 * @description
		 * Checks the current state of the ToggleBox and removes or does hyphenation.
		 * @public
         */
		toggleHyphenation: function () {
			switch (state) {
			case 3:
				removeHyphenationFromDocument();
				toggleBox(false);
				break;
			case 4:
				hyphenateDocument();
				toggleBox(true);
				break;
			}
		}
	};
}());
if (Hyphenator.isBookmarklet()) {
	Hyphenator.config({displaytogglebox: true, intermediatestate: 'visible'});
	Hyphenator.run();
}
/*
 * Copyright (c) 2009 Simo Kinnunen.
 * Licensed under the MIT license.
 *
 * @version 1.05
 */
var Cufon=(function(){var m=function(){return m.replace.apply(null,arguments)};var x=m.DOM={ready:(function(){var C=false,E={loaded:1,complete:1};var B=[],D=function(){if(C){return}C=true;for(var F;F=B.shift();F()){}};if(document.addEventListener){document.addEventListener("DOMContentLoaded",D,false);window.addEventListener("pageshow",D,false)}if(!window.opera&&document.readyState){(function(){E[document.readyState]?D():setTimeout(arguments.callee,10)})()}if(document.readyState&&document.createStyleSheet){(function(){try{document.body.doScroll("left");D()}catch(F){setTimeout(arguments.callee,1)}})()}q(window,"load",D);return function(F){if(!arguments.length){D()}else{C?F():B.push(F)}}})(),root:function(){return document.documentElement||document.body}};var n=m.CSS={Size:function(C,B){this.value=parseFloat(C);this.unit=String(C).match(/[a-z%]*$/)[0]||"px";this.convert=function(D){return D/B*this.value};this.convertFrom=function(D){return D/this.value*B};this.toString=function(){return this.value+this.unit}},addClass:function(C,B){var D=C.className;C.className=D+(D&&" ")+B;return C},color:j(function(C){var B={};B.color=C.replace(/^rgba\((.*?),\s*([\d.]+)\)/,function(E,D,F){B.opacity=parseFloat(F);return"rgb("+D+")"});return B}),fontStretch:j(function(B){if(typeof B=="number"){return B}if(/%$/.test(B)){return parseFloat(B)/100}return{"ultra-condensed":0.5,"extra-condensed":0.625,condensed:0.75,"semi-condensed":0.875,"semi-expanded":1.125,expanded:1.25,"extra-expanded":1.5,"ultra-expanded":2}[B]||1}),getStyle:function(C){var B=document.defaultView;if(B&&B.getComputedStyle){return new a(B.getComputedStyle(C,null))}if(C.currentStyle){return new a(C.currentStyle)}return new a(C.style)},gradient:j(function(F){var G={id:F,type:F.match(/^-([a-z]+)-gradient\(/)[1],stops:[]},C=F.substr(F.indexOf("(")).match(/([\d.]+=)?(#[a-f0-9]+|[a-z]+\(.*?\)|[a-z]+)/ig);for(var E=0,B=C.length,D;E<B;++E){D=C[E].split("=",2).reverse();G.stops.push([D[1]||E/(B-1),D[0]])}return G}),quotedList:j(function(E){var D=[],C=/\s*((["'])([\s\S]*?[^\\])\2|[^,]+)\s*/g,B;while(B=C.exec(E)){D.push(B[3]||B[1])}return D}),recognizesMedia:j(function(G){var E=document.createElement("style"),D,C,B;E.type="text/css";E.media=G;try{E.appendChild(document.createTextNode("/**/"))}catch(F){}C=g("head")[0];C.insertBefore(E,C.firstChild);D=(E.sheet||E.styleSheet);B=D&&!D.disabled;C.removeChild(E);return B}),removeClass:function(D,C){var B=RegExp("(?:^|\\s+)"+C+"(?=\\s|$)","g");D.className=D.className.replace(B,"");return D},supports:function(D,C){var B=document.createElement("span").style;if(B[D]===undefined){return false}B[D]=C;return B[D]===C},textAlign:function(E,D,B,C){if(D.get("textAlign")=="right"){if(B>0){E=" "+E}}else{if(B<C-1){E+=" "}}return E},textShadow:j(function(F){if(F=="none"){return null}var E=[],G={},B,C=0;var D=/(#[a-f0-9]+|[a-z]+\(.*?\)|[a-z]+)|(-?[\d.]+[a-z%]*)|,/ig;while(B=D.exec(F)){if(B[0]==","){E.push(G);G={};C=0}else{if(B[1]){G.color=B[1]}else{G[["offX","offY","blur"][C++]]=B[2]}}}E.push(G);return E}),textTransform:(function(){var B={uppercase:function(C){return C.toUpperCase()},lowercase:function(C){return C.toLowerCase()},capitalize:function(C){return C.replace(/\b./g,function(D){return D.toUpperCase()})}};return function(E,D){var C=B[D.get("textTransform")];return C?C(E):E}})(),whiteSpace:(function(){var D={inline:1,"inline-block":1,"run-in":1};var C=/^\s+/,B=/\s+$/;return function(H,F,G,E){if(E){if(E.nodeName.toLowerCase()=="br"){H=H.replace(C,"")}}if(D[F.get("display")]){return H}if(!G.previousSibling){H=H.replace(C,"")}if(!G.nextSibling){H=H.replace(B,"")}return H}})()};n.ready=(function(){var B=!n.recognizesMedia("all"),E=false;var D=[],H=function(){B=true;for(var K;K=D.shift();K()){}};var I=g("link"),J=g("style");function C(K){return K.disabled||G(K.sheet,K.media||"screen")}function G(M,P){if(!n.recognizesMedia(P||"all")){return true}if(!M||M.disabled){return false}try{var Q=M.cssRules,O;if(Q){search:for(var L=0,K=Q.length;O=Q[L],L<K;++L){switch(O.type){case 2:break;case 3:if(!G(O.styleSheet,O.media.mediaText)){return false}break;default:break search}}}}catch(N){}return true}function F(){if(document.createStyleSheet){return true}var L,K;for(K=0;L=I[K];++K){if(L.rel.toLowerCase()=="stylesheet"&&!C(L)){return false}}for(K=0;L=J[K];++K){if(!C(L)){return false}}return true}x.ready(function(){if(!E){E=n.getStyle(document.body).isUsable()}if(B||(E&&F())){H()}else{setTimeout(arguments.callee,10)}});return function(K){if(B){K()}else{D.push(K)}}})();function s(D){var C=this.face=D.face,B={"\u0020":1,"\u00a0":1,"\u3000":1};this.glyphs=D.glyphs;this.w=D.w;this.baseSize=parseInt(C["units-per-em"],10);this.family=C["font-family"].toLowerCase();this.weight=C["font-weight"];this.style=C["font-style"]||"normal";this.viewBox=(function(){var F=C.bbox.split(/\s+/);var E={minX:parseInt(F[0],10),minY:parseInt(F[1],10),maxX:parseInt(F[2],10),maxY:parseInt(F[3],10)};E.width=E.maxX-E.minX;E.height=E.maxY-E.minY;E.toString=function(){return[this.minX,this.minY,this.width,this.height].join(" ")};return E})();this.ascent=-parseInt(C.ascent,10);this.descent=-parseInt(C.descent,10);this.height=-this.ascent+this.descent;this.spacing=function(L,N,E){var O=this.glyphs,M,K,G,P=[],F=0,J=-1,I=-1,H;while(H=L[++J]){M=O[H]||this.missingGlyph;if(!M){continue}if(K){F-=G=K[H]||0;P[I-1]-=G}F+=P[++I]=~~(M.w||this.w)+N+(B[H]?E:0);K=M.k}P.total=F;return P}}function f(){var C={},B={oblique:"italic",italic:"oblique"};this.add=function(D){(C[D.style]||(C[D.style]={}))[D.weight]=D};this.get=function(H,I){var G=C[H]||C[B[H]]||C.normal||C.italic||C.oblique;if(!G){return null}I={normal:400,bold:700}[I]||parseInt(I,10);if(G[I]){return G[I]}var E={1:1,99:0}[I%100],K=[],F,D;if(E===undefined){E=I>400}if(I==500){I=400}for(var J in G){if(!k(G,J)){continue}J=parseInt(J,10);if(!F||J<F){F=J}if(!D||J>D){D=J}K.push(J)}if(I<F){I=F}if(I>D){I=D}K.sort(function(M,L){return(E?(M>=I&&L>=I)?M<L:M>L:(M<=I&&L<=I)?M>L:M<L)?-1:1});return G[K[0]]}}function r(){function D(F,G){if(F.contains){return F.contains(G)}return F.compareDocumentPosition(G)&16}function B(G){var F=G.relatedTarget;if(!F||D(this,F)){return}C(this)}function E(F){C(this)}function C(F){setTimeout(function(){m.replace(F,d.get(F).options,true)},10)}this.attach=function(F){if(F.onmouseenter===undefined){q(F,"mouseover",B);q(F,"mouseout",B)}else{q(F,"mouseenter",E);q(F,"mouseleave",E)}}}function u(){var C=[],D={};function B(H){var E=[],G;for(var F=0;G=H[F];++F){E[F]=C[D[G]]}return E}this.add=function(F,E){D[F]=C.push(E)-1};this.repeat=function(){var E=arguments.length?B(arguments):C,F;for(var G=0;F=E[G++];){m.replace(F[0],F[1],true)}}}function A(){var D={},B=0;function C(E){return E.cufid||(E.cufid=++B)}this.get=function(E){var F=C(E);return D[F]||(D[F]={})}}function a(B){var D={},C={};this.extend=function(E){for(var F in E){if(k(E,F)){D[F]=E[F]}}return this};this.get=function(E){return D[E]!=undefined?D[E]:B[E]};this.getSize=function(F,E){return C[F]||(C[F]=new n.Size(this.get(F),E))};this.isUsable=function(){return !!B}}function q(C,B,D){if(C.addEventListener){C.addEventListener(B,D,false)}else{if(C.attachEvent){C.attachEvent("on"+B,function(){return D.call(C,window.event)})}}}function v(C,B){var D=d.get(C);if(D.options){return C}if(B.hover&&B.hoverables[C.nodeName.toLowerCase()]){b.attach(C)}D.options=B;return C}function j(B){var C={};return function(D){if(!k(C,D)){C[D]=B.apply(null,arguments)}return C[D]}}function c(F,E){var B=n.quotedList(E.get("fontFamily").toLowerCase()),D;for(var C=0;D=B[C];++C){if(i[D]){return i[D].get(E.get("fontStyle"),E.get("fontWeight"))}}return null}function g(B){return document.getElementsByTagName(B)}function k(C,B){return C.hasOwnProperty(B)}function h(){var B={},D,F;for(var E=0,C=arguments.length;D=arguments[E],E<C;++E){for(F in D){if(k(D,F)){B[F]=D[F]}}}return B}function o(E,M,C,N,F,D){var K=document.createDocumentFragment(),H;if(M===""){return K}var L=N.separate;var I=M.split(p[L]),B=(L=="words");if(B&&t){if(/^\s/.test(M)){I.unshift("")}if(/\s$/.test(M)){I.push("")}}for(var J=0,G=I.length;J<G;++J){H=z[N.engine](E,B?n.textAlign(I[J],C,J,G):I[J],C,N,F,D,J<G-1);if(H){K.appendChild(H)}}return K}function l(D,M){var C=D.nodeName.toLowerCase();if(M.ignore[C]){return}var E=!M.textless[C];var B=n.getStyle(v(D,M)).extend(M);var F=c(D,B),G,K,I,H,L,J;if(!F){return}for(G=D.firstChild;G;G=I){K=G.nodeType;I=G.nextSibling;if(E&&K==3){if(H){H.appendData(G.data);D.removeChild(G)}else{H=G}if(I){continue}}if(H){D.replaceChild(o(F,n.whiteSpace(H.data,B,H,J),B,M,G,D),H);H=null}if(K==1){if(G.firstChild){if(G.nodeName.toLowerCase()=="cufon"){z[M.engine](F,null,B,M,G,D)}else{arguments.callee(G,M)}}J=G}}}var t=" ".split(/\s+/).length==0;var d=new A();var b=new r();var y=new u();var e=false;var z={},i={},w={autoDetect:false,engine:null,forceHitArea:false,hover:false,hoverables:{a:true},ignore:{applet:1,canvas:1,col:1,colgroup:1,head:1,iframe:1,map:1,optgroup:1,option:1,script:1,select:1,style:1,textarea:1,title:1,pre:1},printable:true,selector:(window.Sizzle||(window.jQuery&&function(B){return jQuery(B)})||(window.dojo&&dojo.query)||(window.Ext&&Ext.query)||(window.YAHOO&&YAHOO.util&&YAHOO.util.Selector&&YAHOO.util.Selector.query)||(window.$$&&function(B){return $$(B)})||(window.$&&function(B){return $(B)})||(document.querySelectorAll&&function(B){return document.querySelectorAll(B)})||g),separate:"words",textless:{dl:1,html:1,ol:1,table:1,tbody:1,thead:1,tfoot:1,tr:1,ul:1},textShadow:"none"};var p={words:/[^\S\u00a0]+/,characters:"",none:/^/};m.now=function(){x.ready();return m};m.refresh=function(){y.repeat.apply(y,arguments);return m};m.registerEngine=function(C,B){if(!B){return m}z[C]=B;return m.set("engine",C)};m.registerFont=function(D){if(!D){return m}var B=new s(D),C=B.family;if(!i[C]){i[C]=new f()}i[C].add(B);return m.set("fontFamily",'"'+C+'"')};m.replace=function(D,C,B){C=h(w,C);if(!C.engine){return m}if(!e){n.addClass(x.root(),"cufon-active cufon-loading");n.ready(function(){n.addClass(n.removeClass(x.root(),"cufon-loading"),"cufon-ready")});e=true}if(C.hover){C.forceHitArea=true}if(C.autoDetect){delete C.fontFamily}if(typeof C.textShadow=="string"){C.textShadow=n.textShadow(C.textShadow)}if(typeof C.color=="string"&&/^-/.test(C.color)){C.textGradient=n.gradient(C.color)}if(!B){y.add(D,arguments)}if(D.nodeType||typeof D=="string"){D=[D]}n.ready(function(){for(var F=0,E=D.length;F<E;++F){var G=D[F];if(typeof G=="string"){m.replace(C.selector(G),C,true)}else{l(G,C)}}});return m};m.set=function(B,C){w[B]=C;return m};return m})();Cufon.registerEngine("canvas",(function(){var b=document.createElement("canvas");if(!b||!b.getContext||!b.getContext.apply){return}b=null;var a=Cufon.CSS.supports("display","inline-block");var e=!a&&(document.compatMode=="BackCompat"||/frameset|transitional/i.test(document.doctype.publicId));var f=document.createElement("style");f.type="text/css";f.appendChild(document.createTextNode(("cufon{text-indent:0;}@media screen,projection{cufon{display:inline;display:inline-block;position:relative;vertical-align:middle;"+(e?"":"font-size:1px;line-height:1px;")+"}cufon cufontext{display:-moz-inline-box;display:inline-block;width:0;height:0;overflow:hidden;text-indent:-10000in;}"+(a?"cufon canvas{position:relative;}":"cufon canvas{position:absolute;}")+"}@media print{cufon{padding:0;}cufon canvas{display:none;}}").replace(/;/g,"!important;")));document.getElementsByTagName("head")[0].appendChild(f);function d(p,h){var n=0,m=0;var g=[],o=/([mrvxe])([^a-z]*)/g,k;generate:for(var j=0;k=o.exec(p);++j){var l=k[2].split(",");switch(k[1]){case"v":g[j]={m:"bezierCurveTo",a:[n+~~l[0],m+~~l[1],n+~~l[2],m+~~l[3],n+=~~l[4],m+=~~l[5]]};break;case"r":g[j]={m:"lineTo",a:[n+=~~l[0],m+=~~l[1]]};break;case"m":g[j]={m:"moveTo",a:[n=~~l[0],m=~~l[1]]};break;case"x":g[j]={m:"closePath"};break;case"e":break generate}h[g[j].m].apply(h,g[j].a)}return g}function c(m,k){for(var j=0,h=m.length;j<h;++j){var g=m[j];k[g.m].apply(k,g.a)}}return function(V,w,P,t,C,W){var k=(w===null);if(k){w=C.alt}var A=V.viewBox;var m=P.getSize("fontSize",V.baseSize);var B=0,O=0,N=0,u=0;var z=t.textShadow,L=[];if(z){for(var U=z.length;U--;){var F=z[U];var K=m.convertFrom(parseFloat(F.offX));var I=m.convertFrom(parseFloat(F.offY));L[U]=[K,I];if(I<B){B=I}if(K>O){O=K}if(I>N){N=I}if(K<u){u=K}}}var Z=Cufon.CSS.textTransform(w,P).split("");var E=V.spacing(Z,~~m.convertFrom(parseFloat(P.get("letterSpacing"))||0),~~m.convertFrom(parseFloat(P.get("wordSpacing"))||0));if(!E.length){return null}var h=E.total;O+=A.width-E[E.length-1];u+=A.minX;var s,n;if(k){s=C;n=C.firstChild}else{s=document.createElement("cufon");s.className="cufon cufon-canvas";s.alt=w;n=document.createElement("canvas");s.appendChild(n);if(t.printable){var S=document.createElement("cufontext");S.appendChild(document.createTextNode(w));s.appendChild(S)}}var aa=s.style;var H=n.style;var j=m.convert(A.height);var Y=Math.ceil(j);var M=Y/j;var G=M*Cufon.CSS.fontStretch(P.get("fontStretch"));var J=h*G;var Q=Math.ceil(m.convert(J+O-u));var o=Math.ceil(m.convert(A.height-B+N));n.width=Q;n.height=o;H.width=Q+"px";H.height=o+"px";B+=A.minY;H.top=Math.round(m.convert(B-V.ascent))+"px";H.left=Math.round(m.convert(u))+"px";var r=Math.max(Math.ceil(m.convert(J)),0)+"px";if(a){aa.width=r;aa.height=m.convert(V.height)+"px"}else{aa.paddingLeft=r;aa.paddingBottom=(m.convert(V.height)-1)+"px"}var X=n.getContext("2d"),D=j/A.height;X.scale(D,D*M);X.translate(-u,-B);X.save();function T(){var x=V.glyphs,ab,l=-1,g=-1,y;X.scale(G,1);while(y=Z[++l]){var ab=x[Z[l]]||V.missingGlyph;if(!ab){continue}if(ab.d){X.beginPath();if(ab.code){c(ab.code,X)}else{ab.code=d("m"+ab.d,X)}X.fill()}X.translate(E[++g],0)}X.restore()}if(z){for(var U=z.length;U--;){var F=z[U];X.save();X.fillStyle=F.color;X.translate.apply(X,L[U]);T()}}var q=t.textGradient;if(q){var v=q.stops,p=X.createLinearGradient(0,A.minY,0,A.maxY);for(var U=0,R=v.length;U<R;++U){p.addColorStop.apply(p,v[U])}X.fillStyle=p}else{X.fillStyle=P.get("color")}T();return s}})());Cufon.registerEngine("vml",(function(){var e=document.namespaces;if(!e){return}e.add("cvml","urn:schemas-microsoft-com:vml");e=null;var b=document.createElement("cvml:shape");b.style.behavior="url(#default#VML)";if(!b.coordsize){return}b=null;var h=(document.documentMode||0)<8;document.write(('<style type="text/css">cufoncanvas{text-indent:0;}@media screen{cvml\\:shape,cvml\\:rect,cvml\\:fill,cvml\\:shadow{behavior:url(#default#VML);display:block;antialias:true;position:absolute;}cufoncanvas{position:absolute;text-align:left;}cufon{display:inline-block;position:relative;vertical-align:'+(h?"middle":"text-bottom")+";}cufon cufontext{position:absolute;left:-10000in;font-size:1px;}a cufon{cursor:pointer}}@media print{cufon cufoncanvas{display:none;}}</style>").replace(/;/g,"!important;"));function c(i,j){return a(i,/(?:em|ex|%)$|^[a-z-]+$/i.test(j)?"1em":j)}function a(l,m){if(m==="0"){return 0}if(/px$/i.test(m)){return parseFloat(m)}var k=l.style.left,j=l.runtimeStyle.left;l.runtimeStyle.left=l.currentStyle.left;l.style.left=m.replace("%","em");var i=l.style.pixelLeft;l.style.left=k;l.runtimeStyle.left=j;return i}function f(l,k,j,n){var i="computed"+n,m=k[i];if(isNaN(m)){m=k.get(n);k[i]=m=(m=="normal")?0:~~j.convertFrom(a(l,m))}return m}var g={};function d(p){var q=p.id;if(!g[q]){var n=p.stops,o=document.createElement("cvml:fill"),i=[];o.type="gradient";o.angle=180;o.focus="0";o.method="sigma";o.color=n[0][1];for(var m=1,l=n.length-1;m<l;++m){i.push(n[m][0]*100+"% "+n[m][1])}o.colors=i.join(",");o.color2=n[l][1];g[q]=o}return g[q]}return function(ac,G,Y,C,K,ad,W){var n=(G===null);if(n){G=K.alt}var I=ac.viewBox;var p=Y.computedFontSize||(Y.computedFontSize=new Cufon.CSS.Size(c(ad,Y.get("fontSize"))+"px",ac.baseSize));var y,q;if(n){y=K;q=K.firstChild}else{y=document.createElement("cufon");y.className="cufon cufon-vml";y.alt=G;q=document.createElement("cufoncanvas");y.appendChild(q);if(C.printable){var Z=document.createElement("cufontext");Z.appendChild(document.createTextNode(G));y.appendChild(Z)}if(!W){y.appendChild(document.createElement("cvml:shape"))}}var ai=y.style;var R=q.style;var l=p.convert(I.height),af=Math.ceil(l);var V=af/l;var P=V*Cufon.CSS.fontStretch(Y.get("fontStretch"));var U=I.minX,T=I.minY;R.height=af;R.top=Math.round(p.convert(T-ac.ascent));R.left=Math.round(p.convert(U));ai.height=p.convert(ac.height)+"px";var F=Y.get("color");var ag=Cufon.CSS.textTransform(G,Y).split("");var L=ac.spacing(ag,f(ad,Y,p,"letterSpacing"),f(ad,Y,p,"wordSpacing"));if(!L.length){return null}var k=L.total;var x=-U+k+(I.width-L[L.length-1]);var ah=p.convert(x*P),X=Math.round(ah);var O=x+","+I.height,m;var J="r"+O+"ns";var u=C.textGradient&&d(C.textGradient);var o=ac.glyphs,S=0;var H=C.textShadow;var ab=-1,aa=0,w;while(w=ag[++ab]){var D=o[ag[ab]]||ac.missingGlyph,v;if(!D){continue}if(n){v=q.childNodes[aa];while(v.firstChild){v.removeChild(v.firstChild)}}else{v=document.createElement("cvml:shape");q.appendChild(v)}v.stroked="f";v.coordsize=O;v.coordorigin=m=(U-S)+","+T;v.path=(D.d?"m"+D.d+"xe":"")+"m"+m+J;v.fillcolor=F;if(u){v.appendChild(u.cloneNode(false))}var ae=v.style;ae.width=X;ae.height=af;if(H){var s=H[0],r=H[1];var B=Cufon.CSS.color(s.color),z;var N=document.createElement("cvml:shadow");N.on="t";N.color=B.color;N.offset=s.offX+","+s.offY;if(r){z=Cufon.CSS.color(r.color);N.type="double";N.color2=z.color;N.offset2=r.offX+","+r.offY}N.opacity=B.opacity||(z&&z.opacity)||1;v.appendChild(N)}S+=L[aa++]}var M=v.nextSibling,t,A;if(C.forceHitArea){if(!M){M=document.createElement("cvml:rect");M.stroked="f";M.className="cufon-vml-cover";t=document.createElement("cvml:fill");t.opacity=0;M.appendChild(t);q.appendChild(M)}A=M.style;A.width=X;A.height=af}else{if(M){q.removeChild(M)}}ai.width=Math.max(Math.ceil(p.convert(k*P)),0);if(h){var Q=Y.computedYAdjust;if(Q===undefined){var E=Y.get("lineHeight");if(E=="normal"){E="1em"}else{if(!isNaN(E)){E+="em"}}Y.computedYAdjust=Q=0.5*(a(ad,E)-parseFloat(ai.height))}if(Q){ai.marginTop=Math.ceil(Q)+"px";ai.marginBottom=Q+"px"}}return y}})());

﻿Hyphenator.languages.en = {
	leftmin : 2,
	rightmin : 2,
	shortestPattern : 2,
	longestPattern : 8,
	specialChars : '',
	patterns : {
		3 : 'a2da2fai2a1ja2n4ao2bfb1jbk44bp2btb1v1cac3c2ch1cick1c5n1coc1q1cyd1bd5cd1jd1m1dod1p1dr1dud1vd1wd2ye1fei2e1je1q4eu1fa4fd4fh1fi4fm4fn1fo2ft3fu1fy1gag3bgd4gl2g1m1gog3p1grgs2g3w1gyh1bh1fh1h4hkh1w2id2igi3hi3j4ik2io2ip4iri1u2iv4iy5ja1jek1bk3fkh4k1ikk4k1lk1mk5tk1w2ld2lf4ljl1l2lm2lp4lt1ly1ma2mh4mkm1m1mo4mt1mu4mw1nan3fn1jn5mn1qn1rn1t4nz4oaoi2o5j2oko2noo2o1qou21papd44pf4pgpr2p3wqu2r1br1cr1frg2rh4r3jr1lr1mr1pr1wsa2s2hsk21sos1r2ss1su4svsw2s4y1ta4tc2tl1to1tu4tvtw41ty4tzu5j4uk2usu3u1vav4yw1bwi2w4kw5p4wtwy4x1ax1ex1hx3ix3ox3px1uxx4y1by1cy1dy1iy1wza14zb2ze5zl4zm1zo',
		4 : '_ch4_ci2_eb4_eg2_es3_eu3_ga2_ge2_he2_in1_le2_me2_od2_os3_sh2_si2_st4_sy2_ta4_te4_th2_ti2_up3_ye44ab_abe24abr2adi4aduae4raff4ag1iag1na2goa4gya3haa3heah4la3hoa5ia2aleal1i4alm4amaa2mo4and2angano4a2pla3pu2a2rar1iar2par3q4as_as4la2ta4atha1tra2tua2tyau4bau3ra2vaav1iaw3iaws4aye4ays45ba_1batba4z2b1bb2be4b1d4be_1bel3betbe3w4b3hbi2bbi4d3bie1bilbi2tb2l2b4lo4b1m4b3n3bodbo4e3boobt4lb4tob3trbu4n4b5w5by_bys42ce_3cei1cen3cepcet4cew44ch_che23ciaci5c4cii2cim2cin5cizck3icly4coe22cogcoi4cov1cri22c1tc2tec4twcud5c4ufc4ui3cun1cuscze41d2a5da_4daf2dag3dat5dayd1d42de_d4em1dende1pd3eqdes2de1tde1v4dey4d1fd4gadg1id2gyd1h25di_3didd1ifd1in1diodir2dis1d5k22dly3do_5doed4ogd4or3dosdo4v3doxdre44dryds4pd4swd4syd2thdu2cdu4gdu4n4dup5dynead1ea4lea2tea2v2e1be3bre1ceec2ie1cre1cu4edi4edoee2cee2fee2me5ex1effeg5n5egye1h4e5icei5deig2e1lael2fel2iem5be1mee3my4enn4enoe5ofeo2ge3ole1oreos4e4ote5owe2pae1poer1a2erber1her1i2eroer1s4erues2c4eshe1sie1sp2esses4w4etnet5ze5une3upeus4e1vie5vue1wae3wh1exp5eyceys44fag5far4f5b4fe_fe4b2fedfer1fev44f1ff2fyfi3a2finf4l25fonfo2rfos54f5pfri22f3sf4tof2ty4fuggaf42gam4gaz2ge_2ged1gen1geoge4vg2geggo45gi_g1icgil45gio3girgi4u5giv3gizgla41gle3glog4mygn4ag1nig1no3go_gob55goegon25googov1g4rogth3gu4a2gue3gun3gusha4m5hazh4edhe2nhep5h1eshe4theu4hi4phi2vh2lo4h1m2h1nho4g4h5p4hr4h4shh4tyhu4ghu4thy2s2i1ai2aliam4i2anibe4i1bli5boi1br4ich2iciid5di2dii4dri2du2ie4i3et4if_i3fl4ift4igii2goi1lail5fil1i4ilnil3vim1ii2mu2in_4ind2ine2ini4ink4inl2inn2insin1u4iny4io_i1olio4mi4osipe4ip3ii1rair1i2is_4ise3isfi2sois1pi2su2ite2ithi1ti4itt4i5wix4oizi4ja4pjew3jo4p3ka_k3abk5agkal4k2ed1keeke4gk1erkes45ki_k4imki4pkis44klyko5rk3ouk4scks4lk4sy4lav2l1blce4l3cil2deldi4l3drle2ales23leyl5frl5galgo32l3h3likl1itl1izlka3l2lell2ill4o3lo_4lof4lovl4pll5pr4l1rl4scl2sel1tel1trltu2lu5aluf4lu3o4lup1lut2l1w4lya4lyb2mab2mah4map4m1b4m5c4me_2medme2gme2m1men2mesme4v4m1f5mi_mi3amig4m2ism2iz4m1l4m1nmn4amn4o4mokmo2rmos2mo2v4m1pm2pim2py4m3rm4shm5si3mummun24mupmu4unak4n2ann4asn2atn2aun1crn1cun1de2ne_ne2bne2c2ned1nen3neone2qn1er1nesne4vne4wn1gun2gynha4nhe4ni4dnik4n1imn1inni4on2it4nk2n1kl4n1lnme4nne43noe4nogno4n4nop1noun1p4npi4nru4ns4cn2sen2slns3mnt2int4snu1anu4dn4umn3uon1v2n1w4nym4nyp4n3zaoad3o1bio3bro1ceoch4o4elo3ero3evo2fio1geo4gl1ogyo1h2oig4o1laol2dol2iol2tol2vo2lyo2meon1aon1c2ondon3soo4ko2pa2opho1prop1uopy5o1rao1ryos2cos4lo2so4othou4lou5vow1io4wooy1ap4adp4aip4alpa1ppav43pay4p1b4pe_pe2cp4eepek4pe2t4ph_ph2l4phsph3t5phu1phypi3ap4idpi2n4p1m2p3npo4cpo4p1posp4ot4p1pp2pep2seps4h2p1tp2tep2thp4twpub3pue4puf4pu4mpu2n5puspu2t2rabr2air2asrbi2rb4or2cerd2i2re_re1oreu2rev2rfu4r4fyr1glr3gu4rh_ri3ar4ibri1or4iqr2isrle4r2mer4myrno4r3nur2ocro4erok2rox5r3por1r44rs2r1sars4cr2ser1shr1sir1spr5swr1tiru3aru2nrv4er3vory4cry3t5sais1apsau45saw4s5bsch2s1cu4s5d4se_se4ase2g5sei5sev5sex4s3f2s3g2sh_sho44shwsi1b1siosi2r1sis5siu1siv5siz4skes1l2s2le2s1ms3mas1n43soms4op4sov2spas1sas1sis4sls4snss2tss5w2st_st2ist4rs2tys4ulsu2msu2nsu2r4swo4syc3syl3ta_2tabta2ltav42taw2t1bt4ch4t1d4te_1teeteg41teote4p3teu3tex4tey2t1f4t1g2th_th2e4thl2ths1tiatif22tig1tim1tio5tiqti4u1tiv1tizt5lat5lo4t1mtme4to3b2toftos24t1p1trat4sctsh4t4swt5tottu4tu1atud24tue3tum3tus4two4tya2tyltz4e4uabuac4u1atuav4ub4eu3cau3cru3cuu4cyud5du4du3ufau3fl2ui2ui4nuiv3u1laul4eul2i4ulsu3luul5vu1mium2pu2neu1niunu4un5yun5zu5osu1ouu1peu3plup3pu1raurc4ur1dur2lu3ruusc2us1pu2suuts4uu4mu1v2uxu3uz4e5va_vag43vat4ve_4vedveg3v3ifvik42vilv1invi4p3viv5vo_voi43vok4vv42wacwam4w1erw3evwhi4wil2wir4wiz5w4no1wo2wom1wra4wri4w3shws4lxam3x4apxas5x3c2x2edxhi2xhu4xi5axi5cx4obx1t2x3tixu3ay5acy5aty2cey3chy5eey1eryes4ye4ty5gi4y3hy3lay3loy5luyme4yn5dyn5g5ynxy1o4yo5dyom4y4osyp3iy3poy5puy3royr4rys4cy4soyss4ys1tzar2ze4nze4pz1erzet42z1iz4ilz4iszo4mzte4z4zy',
		5 : '_ach4_af1t_al3t_an5c_ang4_ant4_ar5s_as3c_as1p_as1s_au1d_av4i_awn4_ba4g_ber4_bri2_ca4t_co3e_co4r_de3o_do4t_du4c_eer4_el5d_en3g_en3s_eye5_fes3_gi5a_gi4b_go4r_hes3_het3_hi3b_hov5_id4l_im3m_ine2_in2k_in3s_ir5r_is4i_ju3r_la4m_len4_lep5_lev1_li4g_li2n_li3o_li4t_mis1_ni4c_odd5_or3c_or1d_or3t_oth3_out3_pi4e_pi2t_ra4c_ree2_res2_ri4g_ro4q_ru4d_se2n_til4_to4p_un1a_un1e_un5k_un5o_un3u_ure3_us5aa5bala5banabi5aab3ula4carac1er4a2cia3cieac1ina3cioac3ulac4uma3diaa3dioa3dita5diuad4lead3owad4sua3ducad5uma4gabaga4nage4o4ageu4ag4l3agogag5ula3ic_ai5lya4i4nain5oak1enal5abal3ada4lar4aldiali4ea4ly_4alys5alyt3alyzam5abam3agam3icam5ifam1ina5mona3naran1dla5neea3nena3neuan1glan3ioa3nipan3ita3niuan5otan2saan4snan2span4st4antoan2tran4twan3uaan3ula5nurapar4ap5at4aphiap3inapoc5aque5ar3alara3par4ata5rauaraw4ar4dra3reear4fiar4flar4imar3ioar2izar2mia3rooarre4ar4saar2shas4abashi4a3siba3sicask3ia4socas5phas4shas1trat5acat5apate5cat5evat4ho4ati_a5tiaat1icat3ifa4toga2toma4topa4tosat4skat5teat4that5uaat5ueat3ulaugh3au3guau4l2aun5dau1thav3aga5vanav3igav5oca1vor3awayaw4lyax4icax4iday5alazz5iba4gebal1aban4eban3ib3berbeak4beat34be2dbe3dabe3debe3dibe3gibe5gube1libe3lo4be5mbe5nu4bes4be3spbe5trbe3twbe5yobi5enbi4er2b3ifbin4dbi5oubi3trb5itzb4le_blen4b3lisbne5gbod3ibon4a5bor_bor5d5bore5bori5bos4b5otaboth5bo4to4brit2b5s2bsor4bu4gabu3libumi4bu3re5bust4butab5utoca1blcach44cag42c5ah4calocan5dcan4ecany44casyca4thccha5cci4accon44ced_5cel_3cell3cenc4ceni3cent4cesaces5t4ched5chio3chitchi2z3cho2ch4ticia5r4cierci4la3cilic4inac1ing5cinocion44cipeci3ph2c1it1c4l44clarcle4m4clicclim4co5agco4grcol5i5colocon4ac4onecon3gcon5tco3paco4pl4corbcos4ecove4cow5acoz5eco5zi5credcre4vcri5fc4rincris4cru4d4c3s2cta4bc3terctu4r5culicu2mac3umecu4micu3picu5py3c4ut4cutrdach4da2m2dan3gdard5dark54dary4dato5dav4dav5edeaf52d1ed4dee_de5ifde5lo5dem_de3node3nude3padepi4de2pud4erh5dermder5sd2es_de1scde4sude2todia5bd4ice3dictdi3ge1dina5dinidio5gdi4pldi1re5disid2iti1di1v4d5la3dle_3dled2d3lo4d5lu4d1n4do5de2d5ofdo4ladoli4doni4doo3ddop4p4drai5drendri4bdril4dro4p4drow2d1s2d1u1ad1ucadu5eld3uledu4pedy4sedys5pe1a4be3actea4gee5andear3aear4cear5kear2tea5spe3asseast3eav5ieav5oe4bene4bite4cadecca5e4cibec3imeci4te2cole2corec4tee4cul2e2da4ed3dede4se3diaed3ibed3imed1itedi5ze4doledon2e4drie4duleed3ieel3iee4lyee4naee4p1ee2s4eest4ee4tye4ficefil43efit4egaleger4eg5ibeg4ice4go_e4goseg1ule5gureher4ei5gle3imbe3infe1ingeir4deit3eei3the5itye4judeki4nek4lae4la_e4lace4lawe3lea5elece4lede5lene1lese5lime3lioe2lis4ellaello4e5locel5ogel2shel4tae5ludel5uge4mace4mage5mane2mele4metemi4ee4misem3izemo4gem3pie4mulemu3ne5neae5neeen3eme3newe5niee5nile3nioen3ite5niu5enizeno4ge4nosen3oven4swen3uaen5ufe3ny_4en3ze4oi4eo3reeo4toe5oute3paie5pelephe4e4plie3proep4she4putera4ber3arer4bler3ch2ere_ere4qeret4e1rio4eriter4iueri4ver3m4er3noer5obe5rocero4rer1ou4ertler3tweru4te1s4ae2scae3scres5cue1s2ee2sece3shae2sice2sidesi4ues4mie2sole2son2estre2sureta4be3teoet1icetin4e5tire3trae3treet3uaet5ymeu3roeute4eu5tre2vase5veaev1erev3idevi4le4vinevi4ve5voce4wage5weeewil5e3wit5eye_fa3blfab3rfa4cefain4fa3ta4fatofeas44feca5fectfe3life4mofen2d5ferrf4fesf4fief4flyfic4i4ficsfi3cufil5i4fily5finafi2nefin4nflin4f2ly5fon4tfor4ifra4tf5reafril4frol5fu5elfu5nefu3rifusi4fus4s4futa5gal_3galiga3log5amo4ganogass4gath3geez44gely4geno4genyge3omg4ery5gesigeth54getoge4ty4g1g2g3gergglu5gh3ingh4to1gi4agia5rg4icogien5gir4lg3isl5glasgli4bg3ligglo3rg4na_g2ning4niog4nongo3isgo3ni5gos_g4raigran24graygre4n4gritgruf4g5ste4gu4tgy5rahach4hae4mhae4th5aguha3lahan4ghan4khap3lhap5thar2dhas5shaun4haz3a1head3hearh5elohem4phena4heo5rh4erah3ernh3eryhi5anhi4cohigh5h4il2h4inahir4lhi3rohir4phir4rhis4s4h1l4hlan4hmet4h5odshoge4ho4mahome3hon4aho5ny3hoodhoon4ho5ruhos4ehos1p1houshree54h1s2h4tarht1enht5eshun4thy3pehy3ph4iancian3iia5peiass4i4atuib5iaib3inib3lii5bun4icam5icap4icaricas5i4cayiccu44iceoi5cidi2cipi4cly4i1cr5icrai4cryic4teictu2ic4umic5uoi3curi4daiide4si5dieid3ioid1itid5iui3dlei4domid3owid5uoied4eield3ien4ei5enni1er_i3esci1estif4fri3fieiga5bi3gibig3ilig3inig3iti4g4lig3orig5oti5greigu5iig1ur4i5i4i3legil1erilev4il3iail2ibil3io2ilitil2izil3oqil4tyil5uri4mag4imet4imitim4nii3mon4inavi3nee4inga4inge4ingi4ingo4ingui5ni_i4niain3ioin1is2i1noino4si4notin3se2int_i5nusioge4io2grion3iio5phior3iio5thi5otiio4toi4ourip4icip3uli3quaira4bi4racird5ei4refi4resir5giir4isiro4gir5ulis5agis3arisas52is1cis3chis3eris3ibisi4di5sis4is4k4ismsis2piis4py4is1sis1teis1tiis5us4ita_i4tagi3tani3tatit4es4itiait3igi2tim2itio4itis4itonit5ryi5tudit3ul4itz_iv5ioiv1it4izarjac4qjer5s5judgkais4ke5like4ty5k2ick4illkilo5k4in_kin4gk5ish4kleyk5nes1k2nokosh4kro5n4k1s2l4abolaci4l4adela3dylag4nlam3o3landlar4glar3ilas4elbin44l1c2ld5isl4drile4bileft55leg_5legg4len_3lenc1lentle3phle4prler4e3lergl4ero5lesq3lessl3eva4leye4l1g4lgar3l4gesli4agli2amli4asli5bi4licsl4icul3icyl3ida3lidil4iffli4fl3lighlim3ili4mol4inalin3ili5og4l4iqlis4pl2it_l3kallka4tl4lawl5leal3lecl3legl3lell5lowl5metl4modlmon42l1n2lo4cil5ogo3logu5longlon4ilood5lop3il3opmlora45los_los4tlo4ta2loutlpa5bl3phal5phil3pit2l1s2l4sielt5aglten4lth3iltis4lu3brluch4lu3cilu3enlu5idlu4ma5lumiluo3rluss4l5venly5mely3no2lys4l5ysema2cama4cl5magnmaid54maldmar3vmas4emas1t5matemath3m5bilmbi4v4med_mel4tmen4a4menemen4imens43mentme5onme4tame1tem4etrmid4amid4gm4illmin4a3mindmin4tm4inumiot4mis5l4mithm4nin4mocrmo2d1mo4gomois2mo3memo3spmoth3m5ouf3mousm3petmpi4am5pirmp5ismpov5mp4tr4m1s25multn4abu4nac_na4can5actna4li4naltnank4nar3c4narenar3inar4ln5armnas4c3nautnav4e4n1b4ncar5n3chanc1innc4itn4dain5danndi4bn1ditn3dizn5ducndu4rnd2wen3earneb3u5neck5negene4lane5mine4mo4nenene4pon2erener4r2nes_4nesp2nest4neswn5even4gabn3gelng5han3gibng1inn5gitn4glangov4ng5shn4gum4n1h4nhab33n4iani3anni4apni3bani4blni5dini4erni2fin5igrnin4g5nis_n4ithni3trn3ketnk3innmet44n1n2nni4vnob4ln5oclnoge4no4mono3mynon5i4noscnos4enos5tno5ta3nounnowl32n1s2ns5abnsid1nsig4n4socns4pen5spinta4bn5tibnti2fnti4pnu5enn3uinnu1men5umi3nu4nnu3troard3oas4eoat5io5barobe4lo2binob3ulocif3o4cilo4codocre3od3icodi3oo2do4odor3o5engoe4tao5geoo4gero3gieog3ito4groogu5i2ogynohab5oiff4o3ingo5ismo3kenok5ieo4lanold1eol3ero3letol4fio3liao5lilo5lioo5livolo4rol5plol3ubol3uno5lusom5ahoma5lom2beom4blo4meto3miao5midom1ino4monom3pion4aco3nanon5doo3nenon4guon1ico3nioon1iso5niuonsu4on5umonva5ood5eood5ioop3io3ordoost5ope5dop1ero3pito5pono5ra_ore5aor3eiorew4or4guo5rilor1ino1rioo3riuor2miorn2eo5rofor5pe3orrhor4seorst4or4tyo5rumos3alos4ceo5scrosi4uos4paos4poos2tao4tano4teso3tifo3tisoto5sou3blou5etoun2dov4eno3visow3elown5ipa4capa4cepac4tpain4pan4apa3nypa4pu3parepa2te3pe4a2p2ed3pede3pedipee4dpe4lap4encpe5onp4erip4ernper3ope5ruper1vph4erph1ic5phie3phiz3phobpho4rpian4pi4cyp5idapi3de5pidi3piecpi3enpi3lop4in_pind4p4ino3pi1opion4p3ithpi2tu2p3k21p2l23planpli3a4pligpli4nploi4plu4m5pod_po5em5po4gpoin2po4ni1p4orpo4rypos1spo4ta5pounp4pedp5pelp3penp3perp3petpre3rpre3vpri4spro3lpro1t2p1s2p4sibpti3mptu4rpul3cpur4r5putepu3trqua5v2que_3quer3quetra3bir5aclraf4tra4lor2amir4anira5norar5crare4rau4tr4babr4bagrbi4fr2binrcen4r3charc4itrcum3r4dalrdi4ardin4re1alre3an5reavre4aw2r2edre1dere2fere3fire4fyre5itre1lire5lure1pur1er4r4erirero4re5rur4es_res2tre4whrg3err3getr3gicrgi4nr5gisr5gitrgo4n4rhalria4bri4agrib3ar4ice4ricir4icori1erri5et5rigirim5i3rimor2inarin4drin4erin4g5riphri2plr4is_ris4cr3ishris4pri2turiv3ir3ketrk4ler2ledr4ligr4lisr3lo4rma5cr3menr4mior3mitr4narr3nelr4nerr5netr3neyr5nicr3nitr3nivr4nourob3lro3crro1ferom4irom4pron4e1room5rootror3iro5roros4sro4tyro4var4pear3petrp4h4rre4crre4fr4reorri4orri4vrron4rros4rrys4r3secrs3esr5sharson3r4tagr3tebrte5ort5ibrti4dr3tigr4tivr3trirt4shru3enru4glru3inrunk5r5uscr3venr3veyr3vicrvi4v2s1ab5sacks3actsal4msa5losal4t3sancsa5tasat3usca4pscav5s4ced4sceis4cess4choscle5s4cliscof4seas4sea5w3sect4s4eds5edlseg3rse1le5self5selv4seme4sencsen4dsen5gs4erlser4os1e4sse5shses5tsew4ish1er5shevsh1insh3io3shipshiv5shon3shor4s5icc5sidisil4e4sily2s1ins2inas3ing5sionsir5as3kets3latsman3smel4s5menso4cesoft35solvsona4son4gsor5csor5dso5vi5spaispa4n2spers2phespho5spil44spios4plys4ponspor44spotssas3s2s5cs3sels5sets4siess4lis2tags2tals4tedste2ws3thes4ti_s5tias1tics4ties3tif5stirs1tles4top4stry4st3wsu1alsu4b3su2g3su5issuit3sum3isyn5o4tacita5do4taf4ta5latal3i4talkta5mota5pltar4a4tarc4taretas4eta5sytaun44teattece45tect2t1edte5dite5gi3tel_teli45tels3tenc3tend1tentte5peter3c1teriter5v4tes_4tessthan44thea3thet4thil4thooti4ab2ti2b4tickt4ico5tidi3tienti5fy5tigu4timp2t1int2ina3tiniti5octi3sa3tisetis4mti5sotis4pti3tltiv4ati3zatlan43tle_3tled2t1n24todoto2grto5icto2matom4bto3my4tono4tonyto2ra5tour4touttra3btras4tre5ftre4m5tria2trimtri4vtro3vtru5itrus44t1s24t3t2t4testu3artu4bi4tuf45tu3i3ture5turitur5otu5ry4t1watwis4type3ty5phua5nauan4iuar2duar3iuar3tu4belu3beru1b4iuci4buc4itucle3ud3erudev4u1dicud5isu5ditu4donud4siu4eneuens4ug5inu1inguir4muita4ula5bulch4u1lenul4giu5lia4ul3mu1l4oul1ti4ultuul5ulum5abum4biunat4un4erun4imu2ninuni3vun3s4un4swu4orsu5piauptu44ura_u4ragu4rasur4beur4fru3rifur1inu3riou1ritur3izur4nouros4ur4peur4piurti4u5sadu5sanus4apus3ciuse5au5siau3sicus5slus1trusur4uta4bu3tat4ute_4utel4utenu4tisu4t1lut5ofuto5gu5tonu4touvac3uva4geval5oval1uva5mova5piv3el_ve4lov4elyv4erdv4e2s4ves_ve4teve4ty5vian5vidivi5gnv2incvin5d4vingvio3lvi1ouvi5rovi3sovi3su4vitivit3r4vityvo4lav5ole5volt3volvvom5ivori4vo4ryvo4taw5ablwag5owait5w5al_war4twas4twa1tewed4nweet3wee5vwel4lwest3win4g3wisewith3wl4eswl3inws4pew5s4txac5ex4agoxer4ixe5roxhil5xi5dix4imexpe3d3yar4yc5erych4eycom4ycot4y4erfympa3yn5icy4o5gy4onsy4pedyper5y4pocyp2tayra5myr5iay3s2eys3io3ysisys3taysur4yt3icz5a2bze3rozo5ol4z1z2',
		6 : '_am5at_ani5m_an3te_ar4ty_atom5_ba5na_bas4e_be5ra_be3sm_can5c_ce4la_cit5r_de3ra_de3ri_des4c_dumb5_eas3i_el3em_enam3_er4ri_ge5og_han5k_hi3er_hon3o_idol3_in3ci_la4cy_lath5_leg5e_lig5a_mal5o_man5a_mer3c_mon3e_mo3ro_mu5ta_of5te_os4tl_pe5te_pio5n_pre3m_ran4t_rit5u_ros5t_row5d_sci3e_self5_sell5_sing4_ting4_tin5k_ton4a_top5i_tou5s_un3ce_ve5ra_wil5iab5erdab5latab5rogac5ardac5aroa5ceoua5chetac5robact5ifad4dinad5er_ad3icaadi4erad5ranaeri4eag5ellag3onia5guerain5inait5enal3enda5le5oal4ia_al5lev4allica5log_ama5raam5ascam5eraam5ilyami4noamor5iamp5enan3age3analyan3arcanar4ia3natiande4san3disan4dowang5iea4n1ica3niesan3i3fan4imea5nimia5ninean3ishan4kli5annizanoth5an4scoans3poan4surantal4an4tieap5eroa3pherap3itaa3pituap5olaapor5iapos3taps5esar3acta5radearan4gar5av4arbal4ar5easar3enta5ressar5ialar3iana3rietar5o5da5ronias3anta5sia_as3tenasur5aat3ablat3aloat5echat3egoat3en_at3eraater5nat3estath5ema5thenath5omat5i5bat3ituat5ropat4tagat3uraau5sibaut5enave4noav3eraav5ernav5eryavi4erazi4erbarbi5bari4abas4sibbi4nabe5nigbe5strbet5izbi3lizbi5netbi3ogrblath55blespblun4tbol3icbom4bibon5at4b1orabound3broth3bunt4ibus5iebuss4e3butiocab3inca5denca3latcal4lacan4iccan5iscan3izcan4tyca5percar5om4cativcav5alccou3t4ceden2cen4ece5ram3cessic5e4ta4ch3abcheap3che5lo3chemich5enech3er_ch3ers4ch1in5chinici2a5b3cinatcin3emc5ing_4cipic4cista4cisticit3iz5clareco3inccol3orcom5ercop3iccoro3ncras5t5crat_cre3at5criticro4plcrop5ocros4ect5angc5tantc4ticuctim3icu5ity3cultucu5riacuss4icu4tie2d3a4b4dativdeb5itde4bondecan4de4cilde5comdeli4e3demicde5mildemor5de4narde2s5odes3tide3strdev3ild3ge4t1d4i3adi4cam5di3en3dine_di5nizdirt5id4is3t3dles_4dlessdo5lordom5izdo3nat4d5outdrea5rduc5er4duct_4ductsdum4beead5ieea5gereal5ereal3oueam3erear5esear4icear4ileart3eeat5eneath3ie5atife4a3tueav3ene4bel_e4belsecan5cec5ifye5citee4clame4cluse4comme4concec3oraeco5roe4cremec4tanec3ulae4d1ered3icaed5ulo5eficie3fineeg5inge5git5e5instej5udielan4delaxa4el3egae4l1ere3libeel3icae3lierel5ishe3liv3el4label3op_em5anaem3icaem1in2em5ineem5ishe5miss5emnizem5ulaen5amoe4nanten3dicen5eroen5esien5esten3etren5icsen3isheop3areo5rolep5ance3pente4prece4predep3rehe4probep5utaequi3l4erander4chee3realere5coere3iner5el_er3emoer5ena4ereneer3enter5esser3este1ria45ericke3rieneri4erer3inee4rivaer4nis4ernit5ernizer3setert3er5erwaues5canes5ecres5encesh5ene2s5imes4i4ne5skines3olues5onaes3peres4preestan4es3tiges5tim4es2toe3stone5stroes5urreten4dethod3e5tideeti4noet5onaet3ricet5rifet3roget5roseuti5leva2p5ev5astev3ellevel3oe5vengeven4ie5verbew3ingfall5e4fa4mafam5isfar5thfa3thefault5feath3fend5ef5fin_f2f5is2f3ic_f3icanf3icenfi3cer5ficia5ficiefi5delfight5fin2d5f1in3gfis4tif5lessflo3refon4defo5ratfor5ayfore5tfort5afres5cfu4minga5metgan5isga3nizgar5n44gativgel4inge5lisge5lizge4natge5nizgh5out5gicia5gies_g3imen3g4in_gin5ge5g4insglad5ignet4t3g4o4ggondo5go5rizgor5ou4grada3guard5gui5t2g5y3nh3ab4lhala3mhan4cihan4cy5hand_hang5ohan4teha3ranha5rashard3ehar4lehe4canh5ecathe5do5he3l4ihel4lyhen5athera3pher4bahere5ah5erouhe2s5phet4edhimer4hion4ehis3elhlo3rih5odizhol5ar3hol4ehor5atho5rishort3eho5senhouse3hov5elhro3pohu4minhun5kehus3t4h4wart4ian4ti4ativib3eraib5ertib5it_ib5itei2b5rii4car_i4caraic5inaic3ipai2c5ocic3ulaid5ancide3alid5ianidi4aridi5ou5ie5gaien5a4i3entiif5eroiff5en4ific_ig3eraight3iil3a4bi4ladei2l5amila5rail4istill5abim3ageima5ryim5idaimi5lei5miniim3ulai4n3auincel4in3ceri5nessin5genin3ityi4no4c2in4thion3atip4re4iq5uefiq3uidire4dei4rel4iri5deiri3tuir4min5iron_is5hanis3honish5opislan4is4salissen4is4sesis4ta_ist4lyita4bi4ita5mit3erai5teri4i2ticit3icait5illi4tismi4tramit3uativ3elliv3en_iv5il_i5vorei4v3ot5izont4jestyk3en4dk3est_kin4delab3iclan4dllan5etlan4tela5tan4lativla4v4ald4ereld4erile4mat5lene_lera5b3l4erile5sco5less_li4ato5licioli4cor4lict_lid5erlif3erli4gra4l4i4llim4bll4im4p1l4inelin3ealiv3erl3le4nl3le4tl2lin4l5linall5outlm3inglob5al3logiclom3er5lope_lo5rielor5oulos5etloun5dlp5ingltane5ltera4ltur3al5umn_lus3tel5vet4mag5inma3ligma5linmal4limal4ty5maniaman5isman3izma5rizmar4lyma5scema3tismba4t55mediame3diem5e5dymel5onmem1o3men5acmen4demensu5men4tem5ersa3mestimet3alme5thime3try3miliam5ineem4inglmis4timma5rymoi5semon5etmon5gemoni3amo3nizmonol4mo3ny_4mora_mo5seympara5mpar5imphas4mp5iesm4p1inmpo3rim4pousmulti32n1a2bna5liana5mitnanci4nan4itnas5tina3talnau3sen4ces_n5cheon5chiln3chisn5d2ifne4gatnel5iznera5bn4erarn4er5i3neticn5geren3gerini3miz5nine_nis4ta3nition3itorn5keronni3alno3ble4n3o2dnois5ino5l4i3nomicnon4agn5oniznor5abnpre4cnsati4n4s3esnter3snti4ern3tinentu3menuf4fe3nu3itoast5eob3a3bob5ingo3cheto4clamoc3rac5ocritoc3ulao5cureod5dedof5iteofit4to4gatoo5gene1o1giso5g2ly3ognizoic3esoi3deroi5letoi5sonoi3terolass4o3lesco3liceol5id_o3li4fol3ingo5lis_ol3isho5liteolli4eol3umeom3enaom3ic_om3icao5miniomo4geompro53oncilon5eston3keyon4odion3omyonspi4onten4on3t4iontif53operao5phano5pherop3ingo4posio4r3ago5realore5sh4o5riaor3icaor3ityor3ougors5enor3thior3thyo3scopos4i4eos3itoos3ityos5tilos5titot3er_ot5ersoth3i4ot3ic_ot5icao3ticeouch5iover3sov4ertoviti4o5v4olow3derow5est5paganp3agatpan3elpan4typar5dipar5elp4a4ripar4ispa5terpa5thypear4lpedia4ped4icpeli4epe4nanpen4thp4era_p4eragperme5per3tipe5tenpe5tizphar5iphe3noph4es_ph5ing3phone5phonipi4ciepi5thaplas5tpli5erplum4bpo3et55pointpoly5tppa5rapray4e5precipre5copre3empre4lap3rese3press5pri4epris3op3rocapros3ept5a4bput3errach4eraf5firam3etrane5oran4gerap3er3raphyrar5ef4rarilra5vairav3elra5zier5binerch4err4ci4brdi4errd3ingre5arrre4crere3disred5itre4facreg3isren4tere5pinre4spire3strre4terre3trire5utire4valrev3elre5vilrg3ingric5as5ricidri4cierid5erri3encri3entrig5anril3iz5rimanrim4pe5rina_riph5erit3icrit5urriv5elriv3etrk4linrl5ishrm5ersrm3ingr1nis4ro5filro5ker5role_ron4alron4taro3pelrop3icro4therov5elr5pentrp5er_rp3ingrre4strsa5tirse4crrs5er_rse5v2r4si4brtach4rten4dr4tierrtil3irtil4lr4tilyr4tistru3e4lrum3plrun4tyruti5nrvel4irv5er_r5vest5ryngesac3risalar4san4desa5vor3s4cie4scopyse2c3ose4d4ese4molsen5ats5eneds5enin4sentd4sentlsep3a34s1er_4servo5se5umsev3ensh5oldshort53side_5sidessi5diz4signa5sine_sion5a3sitiosk5inesk5ingslith5small35smithso4labsol3d2so3lic3s4on_s5ophyspen4d2s5peo3sphersp5ings5sengs4ses_ssi4erss5ilyssur5astam4i5stands4ta4p5stat_s5terostew5a5stickst3ing5stockstom3a5stone3stores4trads4trays4tridsy5rintai5lotal5enta5logtan4detanta3ta5perta3riz4taticta4turtax4istch5ettead4ite5gerte2ma2tem3at3tenan4tenes5ter3dter3ist3ess_teth5eth3easthe5atthe3isth5ic_th5ica5thinkth5odeti4atot4ic1utim5ul3tine_ti3zen3tles_t5let_to3natto3rietor5izto3wartra5chtraci4trem5i4tricstro5mitron5i4tronytro3sptu4nis2t3up_tur3isu4berou3ble_ud5estud3iedud3iesuen4teuer4ilugh3enuil5izu5lati5ulcheul3derul3ingul5ishul4larul4lisuls5esultra3um4blyumor5oun5ishunt3abun4tesuper5sup3ingupt5ibure5atur4ferurs5erur5tesur3theur4tieus4linuten4i4u1t2iu3tineut3ing5u5tiz2v1a4bvac5ilva5lieva5nizvel3liven3omv5enue5vere_v4erelv3erenv4eresver3ie3versever3thves4tevet3ervi5ali5vide_5vided5vides5vilit4vi4nav3io4rvis3itvor5ab4voteewa5gerwa5verweath3win4dewo5venwrita4xi5mizxpan4dymbol5yn3chryo5netys3icay3thin',
		7 : '_ad4der_anti5s_ar4tie_aster5_be5sto_but4ti_cam4pe_capa5b_car5ol_de4moi_earth5_gen3t4_hand5i_hero5i_hon5ey_im5pin_lat5er_mag5a5_mar5ti_me5ter_mist5i_muta5b_or5ato_ped5al_pe5tit_re5mit_se5rie_sta5bl_ten5an_tim5o5_under5_ven4dea4lenti5a5lysta4matisa4m5atoan5est_a4pillaar5adisa5ratioar5ativar4chanar5dinear5inat5a5si4ta5ternaat5omizbad5gerban5dagbina5r43bi3tio3bit5uabuf4fercall5incast5ercas5tigccompa55chanic5chine_5cific_5cratic4c3retacul4tiscur5a4b4c5utivdel5i5qdem5ic_de4monsdenti5fdern5izdi4latodrag5on5drupliec5essaec5ifiee4compee4f3ereefor5ese4fuse_el5ativel5ebrae4l5ic_el5igibe4l3ingem5igraem3i3niemoni5oench4erent5age4enthesep5recaep5ti5b4erati_er5encee4sage_e4sagese4sert_e4sertse4servaes5idenes5ignaesis4tees5piraes4si4bestruc5e5titioet5itiv4f3ical4ficatefill5ingani5za4g3o3na5graph_4graphy4gress_hang5erh5a5nizharp5enhar5terhel4lishith5erhro5niziam5eteia4tricic4t3uainer4ari5nite_5initioinsur5aion4eryiphras4iq3ui3t5i5r2izis5itiviso5mer4istral5i5ticki2t5o5mi4v3er_i4vers_iv3o3ro4jestiek5iness4latelilev4er_lev4eralev4ersliar5iz5ligatelink5er5liticalloqui5l3o3nizlo4ratol5ties_5lumnia4matizam4b3ing5metricme5triem5i5liemin5glim5inglymis4er_m5istrymo5lestmon4ismmon4istmpa5rabmula5r4nag5er_ncour5and5est_nge4n4en5o5mizno4rarynov3el3nsta5bln4t3ingo5a5lesoctor5aod5uct_od5uctso2g5a5rog5ativoint5eroist5eno5litiool5ogizom5atizom5erseom5etry5ommend4operagor5alizor5angeor5est_4oscopios5itivo5statiotele4goth5esiounc5erover4nepara5blpar5age5pathicpa4tricpera5blperi5stper4mal5phistipi4grappref5acpre5tenprin4t3prof5itput4tedput4tinration4rb5ing_r5ebratrec5ollre5fer_r4en4tare4posiress5ibre5stalre4ti4zre5versre5vertrev5olurip5licri3ta3br5ited_rit5er_rit5ersr4ming_rom5etero5n4isros5perrtroph45sa3tioscan4t55scin4dscour5asmol5d45sophics5ophizsqual4lsspend4stern5i5stratuta5blestal4listen4tagter5iesteri5za5ternit5thodicthor5ittho5riztill5intion5eeto5cratton4alitrac4ittrac4tetra5ventri5ces5triciatro5pheuar5antu4b5inguiv4er_ul4li4bu4m3ingun4ter_upport5uri4ficus5tereuti5lizution5avar5iedver5encvermi4n4v3idenv3i3lizwea5riewill5inxe4cutoxpecto5ylla5bl',
		8 : '_chill5i_cor5ner_dictio5_eq5ui5t_for5mer_re5stat_trib5utab5it5abab5o5lizap5illara5rameteation5arces5si5bch5a5nisch5inesse4q3ui3sg5rapher5graphicimenta5rin5dlingin5glinglem5aticl5i5tics5losophyma5chinema5rine_mpos5itenato5mizneg5ativni5ficat5nologisntrol5lioc5ratizonspir5appo5siterec5omper5ev5er_5taboliz5tisticatrav5es5url5ing_',
		9 : '_ratio5nac5laratioec5ificatef5i5niteep5etitio5losophiz5mocratiz5nop5o5liuto5matic'
	}
};



jQuery(document).ready(function(){

  jQuery('#step li').each(function (i) {
    i = i + 1;
    jQuery(this).addClass('item' + i);
   });

});

/*!
 * Created by Thatcher Ulrich (http://tulrich. com) with FontForge 1.0
 * (http://fontforge. sf. net)
 *
 * This font, including hint instructions, has been donated to the Public
 * Domain.  Do whatever you want with it.
 */
Cufon.registerFont({"w":199,"face":{"font-family":"Tuffy","font-weight":500,"font-stretch":"normal","units-per-em":"360","panose-1":"2 11 6 3 6 1 0 0 0 0","ascent":"281","descent":"-79","x-height":"5","bbox":"-21 -275.786 275 79.2881","underline-thickness":"8.78906","underline-position":"-13.1836","stemh":"12","stemv":"12","unicode-range":"U+0020-U+007E"},"glyphs":{" ":{"w":108},"!":{"d":"49,-77v0,6,-5,10,-10,10v-6,0,-10,-4,-10,-10r-7,-167v0,-9,8,-17,17,-17v9,0,18,7,18,16xm37,2v-28,0,-22,-40,0,-38v10,1,19,7,19,19v0,10,-9,19,-19,19","w":74},"\"":{"d":"78,-190r-4,-68v0,-16,27,-18,26,-3r-3,69v-1,9,-18,12,-19,2xm27,-190v-4,-20,-4,-46,-4,-68v0,-17,23,-17,26,-3r-4,69v0,9,-16,12,-18,2","w":121},"#":{"d":"170,-96r0,-60r-60,0r0,60r60,0xm197,-71r0,62r-27,0r0,-62r-60,0r0,62r-26,0r0,-62r-61,0r0,-25r61,0r0,-60r-61,0r0,-24r61,0r0,-67r26,0r0,67r60,0r0,-67r27,0r0,67r63,0r0,24r-63,0r0,60r63,0r0,25r-63,0","w":279,"k":{"$":10}},"$":{"d":"80,-270r22,0r0,22v27,2,48,19,63,43r-22,14v-7,-14,-22,-28,-41,-31r0,86v33,13,69,20,69,69v0,38,-26,67,-69,72r0,22r-22,0r0,-22v-39,-3,-57,-22,-76,-52r24,-14v12,19,25,37,52,40r0,-97v-36,-9,-65,-25,-65,-67v0,-37,30,-61,65,-63r0,-22xm80,-144r0,-79v-21,3,-37,16,-37,38v0,27,16,36,37,41xm102,-111r0,90v51,-7,57,-79,0,-90","w":178},"%":{"d":"207,-66v0,-15,-12,-26,-26,-26v-14,0,-24,12,-24,26v0,16,9,28,24,28v14,0,26,-12,26,-28xm182,-18v-26,-1,-47,-20,-48,-48v0,-26,21,-47,48,-47v26,1,48,19,48,47v0,26,-21,48,-48,48xm66,-216v-16,0,-27,15,-25,33v4,29,52,27,51,-6v-1,-15,-11,-27,-26,-27xm66,-142v-26,-1,-47,-19,-48,-47v0,-26,21,-48,48,-48v26,1,47,19,48,48v0,26,-21,47,-48,47xm75,-24r-27,0r127,-208r25,0","w":246},"&":{"d":"143,-211v-11,-38,-88,-35,-85,14v2,32,26,47,59,43r0,25v-43,-3,-72,11,-72,53v0,36,28,56,54,56v30,0,51,-25,51,-52r-35,0r0,-24r89,0r0,25r-25,0v0,30,-24,76,-80,76v-43,0,-81,-36,-81,-81v0,-40,28,-63,46,-67v-17,-7,-34,-24,-34,-54v0,-33,28,-65,70,-65v33,0,55,17,66,39","w":218},"'":{"d":"27,-190v-4,-20,-4,-46,-4,-68v0,-17,23,-17,26,-3r-4,69v0,9,-16,12,-18,2","w":67},"(":{"d":"49,15v-52,-78,-58,-201,0,-287r31,0v-66,89,-56,206,0,287r-31,0","w":96},")":{"d":"47,15r-31,0v63,-88,57,-204,0,-287r31,0v52,78,58,203,0,287","w":94},"*":{"d":"100,-101v8,16,43,46,12,56v-19,-6,-20,-32,-31,-46v-11,15,-12,39,-31,46v-31,-9,4,-40,12,-56v-21,-3,-52,14,-56,-11v2,-23,37,-9,57,-11v-7,-16,-44,-46,-12,-56v18,5,20,31,30,45v10,-14,12,-40,30,-45v32,9,-4,40,-12,56v20,2,55,-12,57,11v-4,25,-36,8,-56,11","w":160},"+":{"d":"14,-125r54,0r0,-55r24,0r0,55r55,0r0,25r-55,0r0,55r-24,0r0,-55r-54,0r0,-25","w":157},",":{"d":"37,-36v39,3,4,73,-3,75r-10,-6v4,-5,13,-18,13,-31v-11,0,-19,-8,-19,-19v0,-11,9,-19,19,-19","w":70},"-":{"d":"19,-124r119,0r0,25r-119,0r0,-25","w":152},".":{"d":"37,2v-28,0,-22,-40,0,-38v10,1,19,7,19,19v0,10,-9,19,-19,19","w":71},"\/":{"d":"24,0r-28,0r126,-271r28,0","w":142,"k":{"\/":25}},"0":{"d":"101,5v-54,0,-83,-64,-83,-133v0,-72,31,-134,84,-134v54,0,83,67,82,134v0,72,-30,133,-83,133xm157,-128v0,-49,-15,-110,-55,-110v-39,0,-57,61,-57,110v0,48,17,108,56,108v39,0,56,-59,56,-108"},"1":{"d":"102,-212r-27,0r39,-44r16,0r0,256r-28,0r0,-212"},"2":{"d":"46,-195r-24,-10v18,-74,153,-84,152,20v0,49,-53,78,-70,90v-18,13,-52,47,-52,70r127,0r0,25r-160,0v0,-57,40,-93,77,-119v19,-13,51,-30,51,-66v0,-69,-85,-68,-101,-10"},"3":{"d":"20,-44r27,-9v21,52,109,38,108,-22v-1,-40,-33,-56,-72,-53r0,-22v35,4,59,-12,60,-46v2,-47,-71,-58,-85,-15r-24,-11v24,-61,136,-51,136,26v0,31,-20,50,-32,56v17,5,44,30,44,65v2,85,-129,110,-162,31","w":197},"4":{"d":"152,-256r0,162r33,0r0,24r-33,0r0,70r-28,0r0,-70r-109,0r107,-186r30,0xm125,-215r-68,120r68,0r0,-120"},"5":{"d":"157,-81v0,-34,-24,-61,-51,-61v-28,0,-41,13,-46,17r-25,-13r17,-118r118,0r0,25r-95,0r-12,75v53,-28,121,5,121,75v0,45,-30,86,-79,86v-41,0,-70,-26,-81,-63r27,-5v6,18,19,43,54,43v31,0,52,-25,52,-61"},"6":{"d":"49,-72v0,32,25,50,52,51v33,0,54,-26,54,-51v0,-30,-23,-52,-54,-53v-31,0,-52,27,-52,53xm100,5v-44,0,-76,-32,-77,-77v0,-36,21,-66,29,-81r59,-103r27,0r-61,111v51,-20,103,19,104,73v0,36,-32,77,-81,77"},"7":{"d":"190,-256r-98,256r-32,0r91,-230r-131,0r0,-26r170,0"},"8":{"d":"46,-76v0,35,27,55,56,56v32,0,58,-25,58,-56v0,-35,-28,-53,-57,-54v-32,0,-57,20,-57,54xm147,-198v-1,-25,-17,-39,-44,-40v-29,0,-45,18,-45,40v0,28,19,42,45,43v25,0,44,-16,44,-43xm63,-142v-13,-7,-32,-25,-32,-56v0,-37,31,-65,72,-65v41,1,72,25,72,65v0,34,-22,49,-33,56v18,8,47,29,46,66v0,46,-40,81,-86,81v-45,0,-84,-32,-84,-81v0,-39,28,-59,45,-66"},"9":{"d":"157,-184v0,-32,-25,-51,-52,-52v-32,0,-53,26,-53,51v1,32,23,53,53,53v31,0,52,-26,52,-52xm105,-262v45,0,77,31,78,77v0,36,-21,66,-29,81r-57,104r-30,0r62,-111v-52,18,-103,-19,-104,-74v0,-36,31,-77,80,-77"},":":{"d":"20,-141v-3,-30,37,-28,38,-4v0,22,-34,26,-38,4xm20,-13v-3,-30,37,-28,38,-4v0,22,-34,26,-38,4","w":74},";":{"d":"39,-36v39,0,4,73,-3,75r-10,-6v4,-5,13,-18,13,-31v-10,0,-19,-7,-19,-19v0,-11,9,-19,19,-19xm20,-141v-3,-30,37,-28,38,-4v0,22,-34,26,-38,4","w":74},"<":{"d":"104,-4r-89,-108r89,-105r35,0r-90,106r90,107r-35,0","w":148},"=":{"d":"12,-88r140,0r0,25r-140,0r0,-25xm12,-152r140,0r0,25r-140,0r0,-25","w":159},">":{"d":"51,-4r-35,0r89,-107r-89,-106r35,0r89,105","w":150},"?":{"d":"73,-89v0,-55,62,-49,63,-103v0,-30,-21,-46,-49,-46v-31,0,-51,27,-51,47r-26,-4v3,-84,153,-94,154,2v0,25,-11,43,-24,54v-25,21,-45,30,-39,76r-28,0r0,-26xm70,-13v-4,-26,33,-30,37,-8v4,25,-32,31,-37,8","w":173},"@":{"d":"30,-128v0,93,105,141,177,91r13,17v-84,62,-213,3,-213,-108v0,-74,60,-135,135,-135v72,0,133,51,133,126v0,58,-54,83,-87,46v-30,43,-108,19,-107,-37v0,-33,28,-60,61,-60v32,0,56,24,56,60v0,16,13,32,27,32v13,0,27,-19,27,-41v-3,-60,-48,-103,-110,-103v-63,0,-112,52,-112,112xm176,-128v0,-22,-16,-38,-34,-38v-20,0,-38,17,-38,38v1,23,18,37,38,37v22,0,34,-16,34,-37","w":285},"A":{"d":"116,-213r-36,104r73,0xm159,-85r-87,0r-28,85r-31,0r92,-256r22,0r92,256r-31,0","w":228,"k":{"w":17,"v":29,"V":37,"T":17,"C":14}},"B":{"d":"163,-76v0,-50,-60,-50,-114,-48r0,99r56,0v42,0,58,-26,58,-51xm149,-190v10,-39,-52,-43,-100,-42r0,84r42,0v51,0,58,-27,58,-42xm133,-137v41,2,58,31,58,62v0,24,-9,75,-86,75r-84,0r0,-256r70,0v65,3,87,27,87,66v0,29,-26,53,-45,53","w":207},"C":{"d":"205,-52v-11,28,-35,57,-82,57v-72,0,-105,-64,-105,-132v0,-68,33,-136,105,-136v47,0,72,30,80,53r-27,7v-7,-22,-29,-35,-53,-35v-51,0,-76,56,-76,111v0,56,28,107,76,107v25,0,49,-18,56,-39","w":214},"D":{"d":"173,-128v0,-44,-19,-103,-81,-103r-43,0r0,206r43,0v61,0,81,-42,81,-103xm203,-128v0,72,-38,128,-104,128r-78,0r0,-256r78,0v66,0,104,62,104,128","w":214},"E":{"d":"21,-256r162,0r0,25r-134,0r0,87r127,0r0,25r-127,0r0,94r134,0r0,25r-162,0r0,-256","w":200,"k":{"R":-7}},"F":{"d":"21,-256r162,0r0,25r-134,0r0,87r127,0r0,25r-127,0r0,119r-28,0r0,-256","w":201},"G":{"d":"124,5v-69,2,-106,-64,-106,-133v0,-60,33,-135,105,-135v39,0,61,17,77,42r-24,11v-12,-17,-26,-28,-53,-28v-101,0,-101,218,0,218v52,0,66,-49,66,-78r-69,0r0,-24r97,0v3,64,-23,125,-93,127","w":239,"k":{"T":12}},"H":{"d":"21,-256r28,0r0,113r116,0r0,-113r28,0r0,256r-28,0r0,-118r-116,0r0,118r-28,0r0,-256","w":210},"I":{"d":"27,0r0,-256r28,0r0,256r-28,0","w":78},"J":{"d":"45,-94v1,38,22,73,54,73v84,0,46,-148,54,-235r28,0r0,162v0,57,-34,99,-82,99v-48,0,-78,-43,-79,-99r25,0","w":200},"K":{"d":"21,-256r28,0r0,133r131,-133r34,0r-114,115r117,141r-36,0r-99,-123r-33,32r0,91r-28,0r0,-256","w":217,"k":{"O":19}},"L":{"d":"21,-256r28,0r0,231r135,0r0,25r-163,0r0,-256","w":194},"M":{"d":"21,0r0,-256r38,0r81,219r81,-219r36,0r0,256r-27,0r0,-212r-75,209r-32,0r-75,-209r0,212r-27,0","w":274},"N":{"d":"21,0r0,-256r27,0r130,204r0,-204r28,0r0,256r-26,0r-131,-209r0,209r-28,0","w":223},"O":{"d":"45,-127v1,55,21,107,74,107v56,0,74,-60,74,-107v-1,-57,-19,-111,-74,-111v-57,0,-74,64,-74,111xm119,5v-72,0,-103,-62,-103,-132v0,-57,28,-136,103,-136v72,0,103,64,103,136v0,56,-28,132,-103,132","w":234,"k":{"T":20,"A":17}},"P":{"d":"153,-184v0,-42,-49,-50,-104,-47r0,95r36,0v56,0,68,-25,68,-48xm21,-256v81,-4,160,3,160,72v0,52,-57,81,-132,73r0,111r-28,0r0,-256","w":193,"k":{"A":24}},"Q":{"d":"118,-238v-94,4,-103,219,4,218v12,0,29,-5,37,-13r-33,-25r15,-20r35,26v35,-54,22,-189,-58,-186xm121,5v-73,0,-105,-61,-105,-132v0,-57,29,-136,103,-136v107,0,127,157,78,227r29,21r-15,20r-31,-22v-15,12,-31,22,-59,22","w":240},"R":{"d":"49,-136r36,0v57,0,68,-27,68,-48v0,-39,-51,-52,-104,-47r0,95xm162,0r-75,-111r-38,0r0,111r-28,0r0,-256v78,-5,162,4,161,72v0,35,-25,63,-64,70r76,114r-32,0","w":193},"S":{"d":"155,-65v0,-82,-135,-43,-135,-135v0,-40,34,-63,75,-63v42,0,71,24,80,53r-27,5v-5,-15,-25,-33,-53,-33v-27,0,-46,16,-46,38v0,34,34,42,65,55v28,12,68,32,68,80v0,47,-40,70,-87,70v-48,0,-75,-28,-87,-62r30,-6v4,19,28,43,57,43v32,0,60,-17,60,-45","w":189},"T":{"d":"15,-256r192,0r0,25r-80,0r0,231r-28,0r0,-231r-84,0r0,-25","w":218,"k":{"u":24,"A":20}},"U":{"d":"50,-113v-3,52,27,93,63,93v34,0,63,-28,63,-93r0,-143r29,0r0,143v0,74,-34,118,-92,118v-58,0,-93,-49,-92,-118r0,-143r29,0r0,143","w":222},"V":{"d":"180,-256r28,0r-77,256r-39,0r-78,-256r30,0r68,226","w":218,"k":{"e":12,"E":12,"A":43}},"W":{"d":"15,-256r28,0r32,224r48,-217r35,0r48,217r32,-224r28,0r-40,256r-38,0r-47,-216r-47,216r-39,0","w":277,"k":{"e":5,"A":17}},"X":{"d":"13,-256r32,0r64,107r62,-107r32,0r-80,128r81,128r-33,0r-62,-103r-64,103r-31,0r80,-128","w":213},"Y":{"d":"13,-256r30,0r62,106r63,-106r30,0r-79,125r0,131r-28,0r0,-131","w":207,"k":{"a":22,"A":33}},"Z":{"d":"23,-256r194,0r-152,231r154,0r0,25r-201,0r153,-231r-148,0r0,-25","w":232},"[":{"d":"92,17r-69,0r0,-286r69,0r0,25r-43,0r0,236r43,0r0,25","w":110},"\\":{"d":"121,0r-126,-271r30,0r126,271r-30,0","w":142,"k":{"\\":25}},"]":{"d":"23,17r0,-25r43,0r0,-236r-43,0r0,-25r69,0r0,286r-69,0","w":112},"^":{"d":"144,-202r-33,0r-27,-37r-28,37r-33,0r49,-60r23,0","w":162},"_":{"d":"15,41r0,-25r192,0r0,25r-192,0","w":218},"`":{"d":"78,-216v5,10,-9,21,-16,12v-15,-20,-36,-34,-45,-59v0,-12,17,-18,24,-7","w":90},"a":{"d":"86,-102v-27,0,-44,19,-44,42v0,24,19,41,44,41v22,0,42,-18,42,-41v0,-25,-22,-42,-42,-42xm80,-126v27,0,45,19,47,28v3,-40,-9,-71,-42,-70v-17,0,-32,6,-40,14r-14,-18v47,-43,121,-15,121,78r0,94r-24,0r0,-28v-17,53,-113,36,-113,-32v0,-38,29,-66,65,-66","w":174,"k":{"v":22}},"b":{"d":"49,-256r0,100v8,-19,23,-38,53,-38v49,0,69,48,69,99v0,50,-19,100,-69,100v-31,0,-45,-18,-53,-37r0,32r-26,0r0,-256r26,0xm144,-95v0,-49,-21,-75,-47,-75v-26,0,-48,28,-48,76v0,48,22,75,48,75v26,0,47,-28,47,-76","w":183},"c":{"d":"131,-142v-30,-53,-91,-16,-91,48v0,47,24,75,54,75v22,0,35,-19,39,-27r21,13v-11,18,-31,38,-60,38v-47,0,-81,-44,-81,-99v0,-50,31,-98,81,-98v29,0,49,17,60,38","w":161},"d":{"d":"135,-256r27,0r0,256r-27,0r0,-32v-8,19,-22,37,-53,37v-49,0,-69,-50,-69,-100v0,-51,20,-99,69,-99v30,0,45,19,53,38r0,-100xm40,-95v0,48,21,76,47,76v26,0,49,-27,49,-75v0,-48,-23,-76,-49,-76v-26,0,-47,26,-47,75","w":183},"e":{"d":"45,-106r92,0v-2,-32,-18,-62,-46,-62v-28,0,-44,32,-46,62xm45,-82v3,32,18,63,46,63v17,0,35,-10,43,-24r24,10v-12,23,-40,38,-67,38v-47,0,-74,-44,-74,-99v0,-55,27,-98,74,-98v53,0,73,55,72,110r-118,0","w":178,"k":{"t":9}},"f":{"d":"73,-165r0,165r-27,0r0,-165r-24,0r0,-24r24,0v-10,-57,47,-91,81,-57r-19,19v-6,-13,-36,-14,-35,7r0,31r35,0r0,24r-35,0","w":125,"k":{"y":7,"u":14,"t":12,"o":7,"n":12,"a":14}},"g":{"d":"162,0v1,50,-35,79,-72,79v-45,0,-70,-35,-73,-60r25,0v11,51,99,48,93,-19r0,-32v-8,19,-21,37,-52,37v-50,0,-70,-50,-70,-100v0,-51,20,-99,69,-99v30,0,45,19,53,38r0,-33r27,0r0,189xm40,-95v0,48,21,76,47,76v26,0,49,-27,49,-75v0,-48,-23,-76,-49,-76v-26,0,-47,26,-47,75","w":179,"k":{"j":-21}},"h":{"d":"49,0r-26,0r0,-256r26,0r0,99v6,-20,26,-37,54,-37v38,0,65,30,65,99r0,95r-26,0v-3,-66,16,-170,-46,-170v-62,0,-45,104,-47,170","w":187},"i":{"d":"23,-231v-3,-21,29,-28,33,-7v4,23,-29,26,-33,7xm26,-189r27,0r0,189r-27,0r0,-189","w":75},"j":{"d":"30,-234v0,-9,7,-17,16,-17v9,0,17,8,17,17v0,9,-8,16,-17,16v-9,0,-16,-7,-16,-16xm-21,61r19,-18v8,13,35,13,35,-13r0,-219r27,0r0,213v-6,54,-57,63,-81,37","w":82,"k":{"j":-14}},"k":{"d":"84,-108r81,108r-30,0r-67,-90r-19,23r0,67r-26,0r0,-256r26,0r0,154r72,-87r31,0","w":165},"l":{"d":"74,5v-30,1,-48,-12,-48,-41r0,-220r27,0r0,225v2,9,10,13,21,13r0,23","w":75},"m":{"d":"150,0r-27,0r0,-96v0,-38,-4,-74,-35,-74v-58,0,-34,109,-39,170r-26,0r0,-189r26,0r0,32v8,-18,18,-37,46,-37v29,0,46,20,52,43v6,-23,23,-43,50,-43v75,0,50,119,54,194r-27,0v-6,-59,20,-168,-35,-168v-58,0,-34,107,-39,168","w":269},"n":{"d":"49,0r-26,0r0,-189r26,0r0,32v6,-20,26,-37,54,-37v38,0,65,30,65,99r0,95r-26,0v-3,-66,16,-170,-46,-170v-62,0,-45,104,-47,170","w":187},"o":{"d":"18,-94v0,-55,27,-98,77,-98v50,0,76,43,76,98v0,56,-25,99,-76,99v-50,0,-77,-44,-77,-99xm45,-94v0,41,14,75,50,75v35,0,49,-34,49,-75v0,-41,-14,-74,-49,-74v-36,0,-50,33,-50,74","w":185,"k":{"x":9}},"p":{"d":"49,-189r0,33v8,-19,23,-38,53,-38v49,0,69,48,69,99v0,50,-19,100,-69,100v-31,0,-45,-18,-53,-37r0,107r-26,0r0,-264r26,0xm144,-95v0,-49,-21,-75,-47,-75v-26,0,-48,28,-48,76v0,48,22,75,48,75v26,0,47,-28,47,-76","w":183},"q":{"d":"162,0v2,24,-10,57,20,55r0,24v-57,5,-47,-56,-47,-111v-13,30,-32,37,-53,37v-49,0,-69,-50,-69,-100v0,-51,20,-99,69,-99v30,0,45,19,53,38r0,-33r27,0r0,189xm40,-95v0,48,21,76,47,76v26,0,49,-27,49,-75v0,-48,-23,-76,-49,-76v-26,0,-47,26,-47,75","w":184,"k":{"j":-48}},"r":{"d":"130,-187r-14,23v-78,-30,-68,83,-67,164r-26,0r0,-189r26,0r0,32v6,-28,50,-48,81,-30","w":120,"k":{"e":7}},"s":{"d":"121,-50v-8,-51,-100,-29,-100,-92v0,-34,28,-51,61,-51v40,0,58,25,63,40r-26,5v-3,-25,-72,-32,-71,5v0,22,24,29,35,33v24,9,65,19,65,60v0,33,-30,55,-65,55v-37,0,-58,-19,-66,-43r26,-5v5,32,84,32,78,-7","w":161},"t":{"d":"43,-165r-25,0r0,-24r25,0r0,-44r26,0r0,44r35,0r0,24r-35,0r0,127v-1,19,13,23,33,21r0,22v-39,2,-59,-7,-59,-42r0,-128","w":122},"u":{"d":"140,-189r26,0r0,189r-26,0r0,-32v-6,20,-26,37,-54,37v-38,0,-65,-30,-65,-99r0,-95r27,0v3,65,-16,170,45,170v62,0,45,-104,47,-170","w":187},"v":{"d":"78,0r-64,-189r29,0r49,155r50,-155r28,0r-65,189r-27,0","w":180},"w":{"d":"123,-152r-40,152r-21,0r-50,-189r27,0r34,145r37,-143r26,0r37,143r34,-145r27,0r-51,189r-21,0","w":241},"x":{"d":"153,0r-30,0r-42,-77r-41,77r-31,0r56,-95r-55,-94r30,0r41,77r41,-77r30,0r-55,94","w":158},"y":{"d":"166,3v3,82,-106,95,-138,45r18,-15v21,32,94,31,94,-27r0,-38v-6,20,-26,37,-54,37v-38,0,-65,-30,-65,-99r0,-95r27,0v3,65,-16,170,45,170v62,0,45,-104,47,-170r26,0r0,192","w":187,"k":{"j":-21}},"z":{"d":"60,-25r94,0r0,25r-138,0r99,-164r-92,0r0,-25r136,0","w":169},"{":{"d":"112,-6r0,24v-26,0,-51,-3,-60,-27v-6,-33,5,-111,-36,-119v47,-15,28,-96,38,-118v10,-22,34,-22,58,-23r0,24v-23,-3,-37,4,-37,35v0,21,-4,75,-22,82v40,21,-6,141,59,122","w":131},"|":{"d":"22,0r0,-256r25,0r0,256r-25,0","w":64},"}":{"d":"23,-245r0,-24v26,0,52,3,60,28v3,34,-4,105,36,113v-47,14,-28,100,-38,122v-10,22,-34,22,-58,23r0,-24v23,3,37,-4,37,-36v0,-22,4,-78,22,-85v-38,-20,4,-135,-59,-117","w":131},"~":{"d":"11,-134v8,-7,18,-17,32,-17v17,0,29,26,47,26v12,0,22,-9,33,-17r0,26v-11,8,-20,17,-33,17v-20,0,-33,-27,-47,-27v-14,0,-22,9,-32,17r0,-25","w":129},"\u00a0":{"w":108}}});
/*!
 * Created by Thatcher Ulrich (http://tulrich. com) with FontForge 1.0
 * (http://fontforge. sf. net)
 *
 * This font, including hint instructions, has been donated to the Public
 * Domain.  Do whatever you want with it.
 */
Cufon.registerFont({"w":206,"face":{"font-family":"Tuffy","font-weight":700,"font-stretch":"normal","units-per-em":"360","panose-1":"2 11 8 3 6 1 0 0 0 0","ascent":"281","descent":"-79","x-height":"5","bbox":"-41 -278.773 292 82","underline-thickness":"17.9297","underline-position":"-26.8945","stemh":"42","stemv":"45","unicode-range":"U+0020-U+007E"},"glyphs":{" ":{"w":108},"!":{"d":"58,-77v-4,13,-32,13,-35,0r-7,-167v3,-20,45,-23,49,-1xm12,-23v0,-16,13,-29,29,-29v16,0,29,13,29,29v0,16,-13,29,-29,29v-16,0,-29,-13,-29,-29","w":80},"\"":{"d":"92,-190r-3,-68v4,-17,33,-17,40,-3r-3,69v-4,10,-27,11,-34,2xm27,-190v-4,-20,-2,-46,-4,-68v4,-17,34,-17,40,-3r-3,69v-4,9,-27,12,-33,2","w":153},"#":{"d":"154,-105r0,-42r-33,0r0,42r33,0xm199,-63r0,55r-45,0r0,-55r-33,0r0,55r-44,0r0,-55r-56,0r0,-42r56,0r0,-42r-56,0r0,-42r56,0r0,-58r44,0r0,58r33,0r0,-58r45,0r0,58r54,0r0,42r-54,0r0,42r54,0r0,42r-54,0","w":275,"k":{"$":10}},"$":{"d":"76,-270r30,0r0,23v30,2,50,17,65,44r-47,14v-7,-10,-8,-13,-18,-15r0,59v35,12,73,28,73,77v0,38,-27,68,-73,73r0,22r-30,0r0,-22v-39,-3,-63,-37,-72,-65r43,-15v7,14,15,33,29,35r0,-72v-37,-8,-68,-29,-68,-73v0,-36,33,-60,68,-62r0,-23xm76,-156r0,-49v-32,7,-22,43,0,49xm106,-102r0,64v33,-11,35,-46,0,-64","w":162},"%":{"d":"165,-65v0,11,7,18,16,18v9,0,15,-6,15,-18v0,-10,-7,-19,-16,-19v-8,0,-15,9,-15,19xm127,-65v0,-31,24,-55,54,-55v29,0,53,25,53,55v0,30,-24,54,-53,54v-30,0,-54,-24,-54,-54xm54,-189v0,11,7,18,16,18v9,0,15,-6,15,-18v0,-10,-7,-19,-16,-19v-8,0,-15,9,-15,19xm17,-189v0,-30,23,-55,53,-55v30,0,53,25,53,55v0,30,-23,54,-53,54v-30,0,-53,-24,-53,-54xm85,-21r-37,0r118,-214r36,0","w":252},"&":{"d":"125,-205v-7,-23,-59,-30,-59,8v0,32,30,33,62,31r0,42v-43,-5,-71,9,-72,49v0,23,17,42,41,42v28,0,39,-15,39,-30r-31,0r0,-38r103,0r0,38r-28,0v0,29,-24,72,-83,72v-46,0,-87,-33,-87,-78v0,-54,29,-71,42,-77v-12,-5,-33,-22,-33,-51v0,-80,124,-92,143,-27","w":225},"'":{"d":"27,-190v-4,-20,-2,-46,-4,-68v4,-17,34,-17,40,-3r-3,69v-4,9,-27,12,-33,2","w":81},"(":{"d":"51,15v-65,-91,-63,-197,0,-290r46,0v-62,96,-62,195,0,290r-46,0","w":114},")":{"d":"60,17r-46,0v60,-94,62,-193,0,-289r46,0v64,92,64,198,0,289","w":113},"*":{"d":"123,-201v12,-14,40,3,35,20r-24,37r43,-3v17,3,18,42,0,41r-43,-2v14,18,41,56,-2,61v-19,-4,-18,-31,-29,-44v-11,14,-11,39,-31,44v-14,-1,-32,-14,-24,-26r23,-36r-42,3v-18,-3,-19,-42,0,-41r43,3v-8,-14,-19,-25,-25,-41v2,-15,25,-30,37,-16r19,38"},"+":{"d":"12,-134r47,0r0,-53r42,0r0,53r50,0r0,43r-50,0r0,50r-42,0r0,-50r-47,0r0,-43","w":170},",":{"d":"31,7v-25,-5,-29,-61,7,-59v56,2,14,82,-2,88r-13,-8v2,-3,8,-15,8,-21","w":78},"-":{"d":"17,-133r136,0r0,43r-136,0r0,-43","w":168},".":{"d":"11,-23v0,-16,13,-29,29,-29v16,0,29,13,29,29v0,16,-13,29,-29,29v-16,0,-29,-13,-29,-29","w":79},"\/":{"d":"43,0r-50,0r115,-271r47,0","w":148,"k":{"\/":25}},"0":{"d":"14,-133v0,-81,34,-129,90,-129v56,0,87,48,87,129v0,81,-32,138,-88,138v-56,0,-89,-57,-89,-138xm61,-133v0,62,9,95,42,95v33,0,41,-33,41,-95v0,-62,-7,-86,-40,-86v-33,0,-43,24,-43,86"},"1":{"d":"88,0r0,-212r-48,0r49,-44r46,0r0,256r-47,0"},"2":{"d":"179,-183v4,71,-92,98,-108,141r116,0r0,42r-171,0v0,-37,5,-63,36,-94v33,-33,81,-49,81,-89v0,-49,-64,-48,-70,-6r-42,-13v18,-76,152,-92,158,19"},"3":{"d":"16,-57r46,-12v15,46,84,38,84,-6v0,-33,-32,-43,-70,-39r0,-38v32,4,57,-7,58,-33v2,-41,-53,-44,-63,-16r-44,-11v18,-70,152,-70,151,19v0,23,-12,39,-26,49v19,13,41,32,41,69v0,43,-37,80,-88,80v-38,0,-73,-18,-89,-62"},"4":{"d":"166,-103r24,0r0,42r-24,0r0,61r-47,0r0,-61r-103,0r0,-36r99,-159r51,0r0,153xm120,-194r-59,91r59,0r0,-91"},"5":{"d":"148,-81v0,-37,-50,-58,-72,-35r-45,-16r20,-124r120,0r0,42r-82,0r-10,51v60,-17,116,22,115,82v0,52,-39,86,-89,86v-55,0,-82,-43,-88,-69r46,-8v2,11,16,34,42,34v26,0,43,-19,43,-43"},"6":{"d":"140,-75v0,-22,-15,-41,-37,-41v-22,0,-37,20,-37,40v0,23,17,39,37,39v23,0,37,-19,37,-38xm94,-158v55,-7,94,32,94,83v0,40,-34,80,-85,80v-49,0,-84,-40,-84,-81v0,-41,20,-68,29,-86r48,-94r51,0"},"7":{"d":"204,-256r-130,256r-57,0r107,-211r-106,0r0,-45r186,0"},"8":{"d":"104,-34v27,0,44,-17,44,-42v0,-25,-21,-43,-44,-43v-29,0,-45,18,-45,43v0,25,18,42,45,42xm69,-192v0,21,14,30,35,30v20,0,34,-9,34,-30v0,-17,-11,-31,-35,-31v-24,0,-34,14,-34,31xm103,-262v49,0,82,30,82,70v0,31,-23,44,-33,51v19,5,43,32,43,65v0,54,-41,81,-92,81v-57,0,-91,-33,-91,-81v0,-32,25,-61,43,-65v-10,-6,-33,-21,-33,-51v0,-42,32,-70,81,-70"},"9":{"d":"66,-181v0,22,16,41,38,41v22,0,36,-20,36,-40v0,-23,-17,-39,-37,-39v-23,0,-37,19,-37,38xm112,-98v-55,7,-93,-33,-93,-83v0,-40,34,-80,85,-80v49,0,83,40,83,81v0,41,-20,68,-29,86r-48,94r-50,0"},":":{"d":"11,-151v0,-16,13,-29,29,-29v16,0,29,13,29,29v0,16,-13,29,-29,29v-16,0,-29,-13,-29,-29xm11,-23v0,-16,13,-29,29,-29v16,0,29,13,29,29v0,16,-13,29,-29,29v-16,0,-29,-13,-29,-29","w":77},";":{"d":"40,-52v57,4,13,82,-3,88r-13,-8v2,-4,9,-15,8,-23v-31,-5,-23,-58,8,-57xm11,-151v0,-16,13,-29,29,-29v16,0,29,13,29,29v0,16,-13,29,-29,29v-16,0,-29,-13,-29,-29","w":77},"<":{"d":"81,-4r-73,-108r73,-105r59,0r-74,106r73,107r-58,0","w":151},"=":{"d":"10,-97r140,0r0,43r-140,0r0,-43xm10,-161r140,0r0,42r-140,0r0,-42","w":159},">":{"d":"69,-4r-59,0r74,-107r-74,-106r59,0r73,105","w":151},"?":{"d":"173,-193v0,78,-75,58,-61,123r-47,0r0,-34v0,-43,58,-47,58,-88v0,-21,-17,-28,-34,-28v-19,0,-32,14,-34,32r-47,-7v4,-38,34,-68,80,-68v43,0,85,24,85,70xm60,-23v0,-16,13,-29,29,-29v16,0,29,13,29,29v0,16,-13,29,-29,29v-16,0,-29,-13,-29,-29","w":181},"@":{"d":"215,-46r20,26v-83,64,-221,0,-221,-108v0,-76,62,-135,140,-135v77,0,138,56,138,129v0,56,-58,94,-89,46v-31,55,-120,18,-120,-40v0,-35,32,-64,71,-64v39,0,67,29,67,61v0,13,7,27,16,27v9,0,18,-13,18,-30v0,-54,-44,-99,-101,-99v-57,0,-105,48,-105,105v0,84,107,136,166,82xm121,-128v0,19,16,31,33,31v19,0,30,-15,30,-34v0,-17,-15,-28,-30,-28v-17,0,-33,12,-33,31","w":305},"A":{"d":"123,-184r-28,74r53,0xm161,-67r-79,0r-24,67r-54,0r98,-256r45,0r90,256r-54,0","w":249,"k":{"w":17,"v":29,"V":37,"T":17,"C":14}},"B":{"d":"68,-112r0,70v42,4,98,-6,90,-37v8,-30,-50,-36,-90,-33xm68,-214r0,60v35,4,82,-7,75,-30v7,-23,-40,-34,-75,-30xm21,-256r77,0v79,0,91,42,91,68v0,27,-16,42,-36,48v36,9,51,43,51,63v0,27,-13,77,-91,77r-92,0r0,-256","w":215},"C":{"d":"217,-54v-14,31,-41,60,-90,60v-83,0,-111,-69,-111,-139v0,-67,30,-130,112,-130v44,0,74,27,86,54r-44,16v-9,-15,-27,-28,-42,-28v-48,0,-62,42,-62,88v0,50,17,96,61,96v19,0,33,-16,44,-35","w":230},"D":{"d":"160,-132v0,-62,-30,-91,-93,-82r0,172v65,8,93,-19,93,-90xm210,-132v0,75,-44,132,-108,132r-82,0r0,-256r82,0v65,0,108,56,108,124","w":223},"E":{"d":"20,-256r173,0r0,42r-126,0r0,62r115,0r0,42r-115,0r0,68r126,0r0,42r-173,0r0,-256","w":212,"k":{"R":-7}},"F":{"d":"20,-256r173,0r0,42r-126,0r0,62r115,0r0,42r-115,0r0,110r-47,0r0,-256","w":209},"G":{"d":"125,5v-80,0,-109,-75,-109,-139v0,-59,30,-129,110,-129v36,0,68,19,82,52r-45,15v-4,-13,-27,-25,-37,-25v-83,3,-78,184,-1,184v43,0,53,-39,53,-63r-54,0r0,-42r102,0v4,76,-15,147,-101,147","w":249,"k":{"T":12}},"H":{"d":"20,-256r47,0r0,104r86,0r0,-104r47,0r0,256r-47,0r0,-110r-86,0r0,110r-47,0r0,-256","w":220},"I":{"d":"25,0r0,-256r47,0r0,256r-47,0","w":97},"J":{"d":"18,-103r42,0v0,31,12,65,48,65v34,0,43,-33,43,-65r0,-153r47,0r0,153v0,64,-30,109,-90,109v-63,0,-90,-47,-90,-109","w":219},"K":{"d":"20,-256r47,0r0,110r96,-110r59,0r-98,114r103,142r-59,0r-80,-110r-21,23r0,87r-47,0r0,-256","w":234,"k":{"O":19}},"L":{"d":"20,-256r47,0r0,214r135,0r0,42r-182,0r0,-256","w":214},"M":{"d":"12,0r0,-256r63,0r61,181r63,-181r63,0r0,256r-46,0r0,-176r-56,176r-47,0r-55,-174r0,174r-46,0","w":272},"N":{"d":"21,0r0,-256r46,0r100,165r0,-165r48,0r0,256r-47,0r-100,-171r0,171r-47,0","w":236},"O":{"d":"184,-133v0,-40,-13,-87,-58,-87v-45,0,-59,47,-59,87v0,43,14,96,59,96v45,0,58,-53,58,-96xm18,-133v0,-56,29,-129,108,-129v79,0,108,73,108,129v0,60,-29,138,-108,138v-79,0,-108,-78,-108,-138","w":247,"k":{"T":20,"A":17}},"P":{"d":"68,-145v38,3,77,-6,72,-34v4,-28,-33,-38,-72,-35r0,69xm21,-256r70,0v65,0,97,35,97,77v0,49,-49,84,-120,77r0,102r-47,0r0,-256","w":201,"k":{"A":24}},"Q":{"d":"174,-75v20,-50,11,-146,-48,-146v-44,0,-58,45,-58,88v0,48,25,120,81,90r-28,-21r25,-34xm17,-133v0,-52,27,-130,109,-130v111,0,127,148,85,217r24,18r-27,33r-23,-19v-13,12,-34,20,-60,20v-73,0,-108,-74,-108,-139","w":252},"R":{"d":"68,-145v38,3,77,-6,72,-34v4,-28,-33,-38,-72,-35r0,69xm151,0r-55,-102r-28,0r0,102r-47,0r0,-256r70,0v109,-3,128,109,48,146r66,110r-54,0","w":212},"S":{"d":"150,-71v0,-60,-126,-38,-126,-121v0,-92,151,-87,167,-16r-48,8v-7,-27,-72,-30,-71,8v0,25,46,34,71,46v31,14,55,34,55,75v0,47,-40,76,-89,76v-49,0,-87,-30,-94,-76r47,-8v5,21,19,42,47,42v27,0,41,-15,41,-34","w":211},"T":{"d":"14,-256r211,0r0,42r-80,0r0,214r-47,0r0,-214r-84,0r0,-42","w":237,"k":{"u":24,"A":20}},"U":{"d":"163,-256r49,0r0,134v0,80,-37,127,-97,127v-60,0,-95,-47,-95,-127r0,-134r48,0v3,74,-18,219,47,219v67,0,45,-145,48,-219","w":236},"V":{"d":"168,-256r48,0r-73,256r-56,0r-75,-256r51,0r52,184","w":228,"k":{"e":12,"E":12,"A":43}},"W":{"d":"13,-256r49,0r25,161r37,-156r49,0r40,157r25,-162r41,0r-41,256r-55,0r-39,-164r-39,164r-52,0","w":293,"k":{"e":5,"A":17}},"X":{"d":"10,-256r55,0r47,88r48,-88r54,0r-74,128r75,128r-59,0r-44,-81r-43,81r-60,0r75,-128","w":228},"Y":{"d":"12,-256r50,0r54,94r55,-94r49,0r-80,132r0,124r-47,0r0,-124","w":230,"k":{"a":22,"A":33}},"Z":{"d":"24,-256r206,0r-141,214r140,0r0,42r-216,0r140,-214r-129,0r0,-42","w":249},"[":{"d":"110,17r-89,0r0,-286r89,0r0,42r-44,0r0,203r44,0r0,41","w":130},"\\":{"d":"103,0r-110,-271r51,0r113,271r-54,0","w":150,"k":{"\\":25}},"]":{"d":"21,17r0,-42r43,0r0,-202r-43,0r0,-42r88,0r0,286r-88,0","w":130},"^":{"d":"163,-202r-48,0r-23,-28r-22,28r-49,0r50,-60r42,0","w":190},"_":{"d":"14,49r0,-42r191,0r0,42r-191,0","w":218},"`":{"d":"83,-220v0,14,-14,26,-26,21v-14,-19,-33,-34,-44,-56v0,-16,20,-31,33,-20","w":94},"a":{"d":"94,-92v-21,0,-36,14,-36,29v0,15,15,29,36,29v21,0,34,-14,34,-29v0,-15,-13,-29,-34,-29xm16,-63v0,-65,90,-89,110,-38v8,-60,-45,-67,-81,-47r-18,-29v54,-33,145,-20,145,70r0,107r-45,0r0,-24v-4,14,-22,29,-47,29v-36,0,-64,-29,-64,-68","w":189,"k":{"v":7}},"b":{"d":"66,0r-45,0r0,-256r45,0r0,95v12,-19,34,-32,54,-32v46,0,67,46,67,99v0,53,-21,99,-67,99v-20,0,-42,-14,-54,-33r0,28xm141,-94v0,-43,-20,-58,-37,-58v-17,0,-39,14,-39,58v0,83,74,75,76,0","w":197},"c":{"d":"135,-133v-21,-39,-74,-16,-74,39v0,51,56,78,73,39r38,19v-12,20,-35,41,-65,41v-56,0,-92,-40,-92,-99v0,-97,113,-133,157,-59","w":184},"d":{"d":"134,0r0,-28v-12,19,-34,33,-54,33v-46,0,-67,-46,-67,-99v0,-53,21,-99,67,-99v20,0,42,13,54,32r0,-95r45,0r0,256r-45,0xm59,-94v0,39,20,58,37,58v17,0,39,-13,39,-58v0,-44,-22,-58,-39,-58v-17,0,-37,15,-37,58","w":197},"e":{"d":"64,-114r72,0v-2,-20,-14,-39,-36,-39v-22,0,-35,20,-36,39xm64,-82v5,55,40,56,65,35r40,17v-49,69,-154,27,-154,-64v0,-57,38,-99,85,-99v50,0,84,47,80,111r-116,0","w":192,"k":{"t":9}},"f":{"d":"83,-148r0,148r-46,0r0,-148r-24,0r0,-41r24,0v-11,-52,61,-97,102,-57r-26,31v-10,-10,-32,-10,-30,9r0,17r29,0r0,41r-29,0","w":137,"k":{"y":7,"u":14,"t":12,"o":7,"n":12,"a":14}},"g":{"d":"97,42v39,0,39,-32,37,-70v-12,19,-34,33,-54,33v-46,0,-67,-46,-67,-99v0,-53,21,-99,67,-99v20,0,42,13,54,32r0,-28r45,0r0,198v0,37,-28,72,-82,72v-54,0,-76,-38,-79,-64r43,-2v2,15,13,27,36,27xm59,-94v0,39,20,58,37,58v17,0,39,-13,39,-58v0,-44,-22,-58,-39,-58v-17,0,-37,15,-37,58","w":199},"h":{"d":"66,0r-45,0r0,-256r45,0r0,96v30,-52,112,-45,112,43r0,117r-45,0v-2,-49,12,-159,-32,-152v-46,-8,-34,102,-35,152","w":197},"i":{"d":"21,-234v0,-15,12,-29,26,-29v14,0,26,14,26,29v0,15,-12,28,-26,28v-14,0,-26,-13,-26,-28xm24,-189r46,0r0,189r-46,0r0,-189","w":93},"j":{"d":"21,-234v0,-15,12,-29,26,-29v14,0,26,14,26,29v0,15,-12,28,-26,28v-14,0,-26,-13,-26,-28xm-41,59r29,-31v9,14,36,7,36,-12r0,-205r46,0r0,195v1,52,-71,96,-111,53","w":93},"k":{"d":"102,-105r73,105r-52,0r-54,-82v-8,20,-1,56,-3,82r-45,0r0,-256r45,0r0,130r50,-63r55,0","w":175},"l":{"d":"70,-49v0,8,3,15,16,15r0,39v-42,0,-62,-13,-62,-54r0,-207r46,0r0,207","w":98},"m":{"d":"162,0r-45,0r0,-95v0,-35,-5,-58,-25,-58v-42,0,-21,104,-26,153r-45,0r0,-189r45,0r0,28v7,-12,25,-33,48,-33v36,0,42,39,43,42v8,-16,28,-42,51,-42v65,-2,48,123,50,194r-45,0r0,-95v0,-35,-5,-58,-25,-58v-42,0,-21,104,-26,153","w":276},"n":{"d":"66,0r-45,0r0,-189r45,0r0,29v30,-52,112,-45,112,43r0,117r-45,0v-2,-49,12,-159,-32,-152v-46,-8,-34,102,-35,152","w":197},"o":{"d":"60,-94v0,46,19,58,39,58v20,0,40,-12,40,-58v0,-46,-20,-58,-40,-58v-20,0,-39,12,-39,58xm16,-94v0,-60,30,-99,83,-99v54,0,83,39,83,99v0,60,-29,99,-83,99v-53,0,-83,-38,-83,-99","w":194,"k":{"x":9,"v":5}},"p":{"d":"66,75r-45,0r0,-264r45,0r0,28v12,-19,34,-32,54,-32v46,0,67,46,67,99v0,53,-21,99,-67,99v-20,0,-42,-14,-54,-33r0,103xm141,-94v0,-43,-20,-58,-37,-58v-17,0,-39,14,-39,58v0,83,74,75,76,0","w":198},"q":{"d":"198,79v-65,4,-68,-45,-64,-107v-12,19,-34,33,-54,33v-46,0,-67,-46,-67,-99v0,-53,21,-99,67,-99v20,0,42,13,54,32r0,-28r45,0r0,213v0,10,3,13,19,13r0,42xm59,-94v0,39,20,58,37,58v17,0,39,-13,39,-58v0,-44,-22,-58,-39,-58v-17,0,-37,15,-37,58","w":198},"r":{"d":"129,-142v-4,-2,-19,-11,-27,-11v-56,0,-29,96,-35,153r-46,0r0,-189r46,0r0,29v19,-34,52,-45,79,-17","w":150,"k":{"e":6}},"s":{"d":"112,-52v-8,-33,-102,-31,-90,-90v0,-31,26,-51,65,-51v39,0,63,27,67,52r-43,8v-3,-17,-11,-20,-23,-20v-12,0,-23,2,-23,15v0,16,23,18,52,32v26,13,39,28,39,59v0,31,-33,52,-71,52v-39,0,-64,-22,-71,-56r40,-7v3,15,17,23,31,23v14,0,27,-2,27,-17","w":168},"t":{"d":"37,-148r-24,0r0,-41r24,0r0,-44r46,0r0,44r27,0r0,41r-27,0r0,96v1,18,13,16,26,16r0,39v-51,2,-72,-16,-72,-55r0,-96","w":124},"u":{"d":"176,0r-45,0r0,-28v-39,57,-120,41,-112,-66r0,-95r45,0r0,95v0,48,18,58,32,58v14,0,35,-10,35,-58r0,-95r45,0r0,189","w":195},"v":{"d":"72,0r-59,-189r47,0r32,121r34,-121r43,0r-59,189r-38,0","w":186,"k":{"e":8}},"w":{"d":"126,-117r-25,117r-36,0r-55,-189r45,0r29,118r23,-118r41,0r23,117r30,-117r42,0r-55,189r-38,0","w":254},"x":{"d":"179,0r-53,0r-34,-59r-33,59r-54,0r60,-94r-57,-95r51,0r33,58r33,-58r55,0r-60,93","w":185},"y":{"d":"176,-5v4,48,-37,87,-78,87v-37,0,-63,-21,-73,-43r35,-19v7,28,74,29,71,-10r0,-38v-39,57,-120,41,-112,-66r0,-95r45,0r0,95v0,48,18,58,32,58v14,0,35,-10,35,-58r0,-95r45,0r0,184","w":194},"z":{"d":"85,-42r71,0r0,42r-144,0r76,-147r-68,0r0,-42r142,0","w":176},"{":{"d":"14,-128v44,-14,28,-105,39,-126v11,-20,32,-19,60,-20r0,37v-19,0,-27,6,-27,27v0,27,-3,73,-24,82v21,9,24,55,24,82v0,21,8,26,27,26r0,38v-28,-1,-49,0,-60,-20v-11,-21,5,-112,-39,-126","w":131},"|":{"d":"20,0r0,-256r43,0r0,256r-43,0","w":82},"}":{"d":"121,-128v-44,14,-28,105,-39,126v-11,20,-33,19,-61,20r0,-38v19,0,28,-5,28,-26v0,-27,2,-73,23,-82v-21,-9,-23,-55,-23,-82v0,-21,-9,-27,-28,-27r0,-37v28,1,50,0,61,20v11,21,-5,112,39,126","w":131},"~":{"d":"9,-142v8,-7,18,-18,32,-18v17,0,31,27,49,27v12,0,23,-12,31,-19r0,45v-7,5,-16,17,-31,17v-20,0,-35,-27,-49,-27v-14,0,-21,9,-32,17r0,-42","w":133},"\u00a0":{"w":108}}});
/*!
 * Created by Thatcher Ulrich (http://tulrich. com) with FontForge 1.0
 * (http://fontforge. sf. net)
 *
 * This font, including hint instructions, has been donated to the Public
 * Domain.  Do whatever you want with it.
 */
Cufon.registerFont({"w":199,"face":{"font-family":"Tuffy","font-weight":500,"font-style":"italic","font-stretch":"normal","units-per-em":"360","panose-1":"2 11 6 3 6 1 0 0 0 0","ascent":"281","descent":"-79","x-height":"5","bbox":"-34 -276.188 321 79.0408","underline-thickness":"8.78906","underline-position":"-13.1836","slope":"-12","stemh":"12","stemv":"12","unicode-range":"U+0020-U+007E"},"glyphs":{" ":{"w":108},"!":{"d":"66,-77v-2,11,-23,15,-21,0r28,-167v2,-19,37,-24,36,-1xm21,-13v-1,-25,44,-32,38,-4v-2,19,-36,28,-38,4","w":74},"\"":{"d":"118,-190r11,-68v2,-17,30,-18,26,0r-17,66v-2,8,-18,13,-20,2xm67,-190r11,-68v2,-16,31,-18,26,0r-18,66v-2,8,-17,12,-19,2","w":121},"#":{"d":"191,-96r12,-60r-60,0r-12,60r60,0xm212,-71r-14,62r-26,0r13,-62r-60,0r-13,62r-26,0r13,-62r-61,0r5,-25r61,0r13,-60r-61,0r5,-24r61,0r14,-67r27,0r-14,67r60,0r14,-67r26,0r-14,67r63,0r-5,24r-63,0r-13,60r63,0r-5,25r-63,0","w":279,"k":{"$":10}},"$":{"d":"137,-270r23,0r-5,22v26,2,43,19,53,43r-25,14v-4,-14,-15,-28,-33,-31r-19,86v32,11,64,25,54,69v-9,38,-40,67,-84,72r-4,22r-23,0r5,-22v-38,-3,-52,-22,-65,-52r27,-14v8,19,16,37,43,40r21,-97v-34,-7,-61,-27,-51,-67v8,-37,42,-61,78,-63xm127,-223v-25,4,-46,19,-46,50v0,18,13,24,30,29xm107,-21v45,-3,77,-74,19,-90","w":178},"%":{"d":"201,-92v-27,-4,-47,51,-11,54v26,4,49,-52,11,-54xm147,-56v-4,-57,94,-82,98,-19v3,56,-93,82,-98,19xm112,-216v-27,-3,-49,51,-12,54v27,4,50,-51,12,-54xm57,-179v0,-32,30,-57,60,-58v23,0,39,16,39,38v-1,34,-29,56,-59,57v-23,0,-40,-16,-40,-37xm80,-24r-27,0r171,-208r25,0","w":246},"&":{"d":"95,-143v-56,-32,-4,-119,60,-119v33,0,52,17,59,39r-27,12v-12,-47,-90,-27,-88,23v1,28,21,37,51,34r-5,25v-49,-4,-85,16,-85,67v0,71,99,40,105,-10r-34,0r5,-24r88,0r-5,25r-25,0v-6,30,-40,76,-96,76v-37,0,-66,-27,-66,-64v0,-47,41,-81,63,-84","w":218},"'":{"d":"67,-190r11,-68v2,-16,31,-18,26,0r-18,66v-2,8,-17,12,-19,2","w":67},"(":{"d":"138,-272v-72,76,-105,179,-61,287r-31,0v-40,-107,-2,-214,61,-287r31,0","w":96},")":{"d":"105,-272v39,105,3,216,-61,287r-31,0v68,-74,105,-178,61,-287r31,0","w":94},"*":{"d":"137,-172v6,-12,26,-7,24,6v-9,17,-24,28,-35,43v18,2,59,-11,54,11v-5,25,-36,8,-59,11v5,17,29,41,8,54v-24,9,-20,-29,-28,-44v-14,15,-20,38,-41,46v-11,0,-15,-12,-8,-20r32,-36v-19,-3,-58,13,-54,-11v3,-22,37,-10,59,-11v-6,-18,-33,-50,0,-56v16,5,13,31,21,45","w":160},"+":{"d":"40,-125r54,0r12,-55r25,0r-12,55r54,0r-5,25r-54,0r-12,55r-25,0r12,-55r-54,0","w":157},",":{"d":"45,-36v39,11,-16,73,-19,75r-9,-6v5,-5,17,-18,20,-31v-10,0,-18,-9,-15,-19v3,-11,13,-19,23,-19","w":70},"-":{"d":"46,-124r119,0r-6,25r-119,0","w":152},".":{"d":"21,-13v-1,-25,44,-32,38,-4v-2,19,-36,28,-38,4","w":71},"\/":{"d":"24,0r-28,0r184,-271r27,0","w":142,"k":{"\/":25}},"0":{"d":"40,-79v0,-91,54,-183,118,-183v40,0,59,35,59,84v0,91,-53,183,-117,183v-41,0,-60,-35,-60,-84xm153,-238v-50,0,-84,87,-85,155v0,34,10,63,37,63v50,0,84,-87,84,-157v0,-33,-10,-61,-36,-61"},"1":{"d":"147,-212r-27,0r48,-44r16,0r-54,256r-28,0"},"2":{"d":"216,-206v0,111,-130,102,-159,181r127,0r-5,25r-160,0v12,-57,59,-93,102,-119v25,-15,67,-34,67,-80v0,-64,-79,-41,-100,4r-23,-10v16,-32,55,-58,91,-58v32,0,60,18,60,57"},"3":{"d":"199,-89v0,58,-53,92,-104,94v-27,0,-59,-17,-66,-49r29,-9v20,62,115,28,114,-34v0,-33,-28,-43,-62,-41r5,-22v40,4,70,-16,70,-55v0,-47,-66,-40,-82,-6r-22,-11v26,-50,129,-61,132,12v2,37,-31,64,-45,70v14,4,31,23,31,51","w":197},"4":{"d":"206,-256r-34,162r33,0r-5,24r-33,0r-15,70r-28,0r15,-70r-109,0r146,-186r30,0xm171,-215r-94,120r68,0"},"5":{"d":"109,-20v35,0,67,-32,67,-76v0,-27,-17,-46,-40,-46v-28,0,-43,13,-49,17r-23,-13r42,-118r118,0r-5,25r-95,0r-28,75v42,-24,112,-4,108,53v-4,61,-45,108,-100,108v-41,0,-65,-26,-68,-63r29,-5v2,18,9,43,44,43"},"6":{"d":"106,-21v37,0,64,-27,65,-62v0,-23,-17,-42,-44,-42v-59,0,-94,104,-21,104xm198,-88v-3,51,-44,93,-99,93v-45,0,-70,-36,-61,-77v8,-36,36,-66,47,-81r80,-103r27,0r-84,111v43,-19,92,13,90,57"},"7":{"d":"244,-256r-152,256r-32,0r140,-230r-132,0r6,-26r170,0"},"8":{"d":"131,-130v-35,0,-69,23,-70,66v0,26,20,44,46,44v35,0,70,-27,71,-68v0,-26,-21,-42,-47,-42xm153,-238v-54,-7,-79,82,-17,83v45,9,84,-82,17,-83xm71,-182v2,-49,42,-81,88,-81v37,0,60,21,59,54v-1,38,-33,61,-46,67v14,7,34,24,34,52v0,56,-55,94,-105,95v-40,0,-68,-27,-68,-64v0,-49,41,-76,61,-83v-10,-7,-23,-17,-23,-40"},"9":{"d":"155,-236v-35,0,-64,27,-65,62v0,23,16,42,43,42v59,0,94,-104,22,-104xm63,-168v2,-51,43,-94,98,-94v46,0,70,36,61,77v-8,36,-34,66,-46,81r-79,104r-30,0r86,-111v-44,17,-92,-13,-90,-57"},":":{"d":"50,-141v-1,-25,44,-32,38,-4v-2,19,-36,28,-38,4xm23,-13v-3,-27,44,-31,38,-4v-2,18,-37,29,-38,4","w":74},";":{"d":"62,-21v-5,28,-29,54,-34,60r-9,-6v5,-5,16,-18,19,-31v-10,0,-16,-7,-15,-19v2,-20,37,-27,39,-4xm50,-141v-1,-25,44,-32,38,-4v-2,19,-36,28,-38,4","w":74},"<":{"d":"105,-4r-67,-108r112,-105r35,0r-112,106r67,107r-35,0","w":148},"=":{"d":"30,-88r141,0r-5,25r-141,0xm44,-152r141,0r-6,25r-140,0","w":159},">":{"d":"52,-4r-35,0r112,-107r-67,-106r35,0r67,105","w":150},"?":{"d":"207,-209v-1,80,-91,70,-93,146r-27,0v3,-46,29,-70,59,-87v33,-11,52,-88,-8,-88v-31,0,-58,27,-62,47r-24,-4v12,-38,50,-68,90,-68v35,0,65,18,65,54xm73,-13v-2,-25,41,-33,38,-4v-2,18,-37,29,-38,4","w":173},"@":{"d":"193,-240v-70,0,-135,58,-139,135v-5,80,98,113,161,68r9,17v-73,54,-198,18,-193,-80v5,-95,83,-163,166,-163v65,0,110,47,110,103v0,62,-61,116,-100,69v-27,36,-103,28,-100,-25v2,-41,38,-71,75,-72v35,0,51,31,43,66v0,13,8,26,20,26v17,0,39,-29,39,-59v0,-45,-35,-85,-91,-85xm177,-166v-39,-6,-71,73,-16,75v41,6,63,-71,16,-75","w":285},"A":{"d":"161,-213r-58,104r73,0xm178,-85r-88,0r-46,85r-31,0r146,-256r22,0r38,256r-31,0","w":228,"k":{"w":17,"v":29,"V":37,"T":17,"C":14}},"B":{"d":"181,-87v0,-39,-61,-40,-106,-37r-21,99v66,6,127,-8,127,-62xm122,-148v56,-3,67,-24,69,-51v9,-28,-54,-36,-93,-33r-17,84r41,0xm208,-88v0,43,-20,88,-103,88r-84,0r55,-256r69,0v58,0,74,28,74,53v1,38,-36,65,-57,66v35,0,46,27,46,49","w":207},"C":{"d":"174,-238v-60,2,-104,72,-104,144v0,42,19,74,57,74v25,0,53,-18,65,-39r24,7v-17,28,-47,57,-94,57v-58,0,-82,-41,-82,-92v0,-91,55,-176,139,-176v47,0,65,30,68,53r-27,7v-2,-22,-22,-35,-46,-35","w":214},"D":{"d":"54,-25v102,12,150,-40,150,-134v0,-36,-15,-72,-63,-72r-43,0xm234,-163v0,90,-60,162,-135,163r-78,0r55,-256r78,0v54,0,80,42,80,93","w":214},"E":{"d":"76,-256r161,0r-5,25r-134,0r-18,87r126,0r-5,25r-127,0r-20,94r134,0r-5,25r-162,0","w":200,"k":{"R":-7}},"F":{"d":"76,-256r161,0r-5,25r-134,0r-18,87r126,0r-5,25r-127,0r-25,119r-28,0","w":201},"G":{"d":"174,-238v-60,0,-102,73,-103,142v0,41,16,76,56,76v52,0,77,-49,83,-78r-69,0r5,-24r97,0v-10,62,-48,127,-121,127v-55,0,-81,-42,-81,-95v0,-88,54,-173,138,-173v39,0,57,17,68,42r-27,11v-8,-17,-19,-28,-46,-28","w":239,"k":{"T":12}},"H":{"d":"76,-256r27,0r-24,113r117,0r24,-113r27,0r-54,256r-28,0r25,-118r-116,0r-25,118r-28,0","w":210},"I":{"d":"27,0r54,-256r28,0r-54,256r-28,0","w":78},"J":{"d":"40,-94r25,0v-7,34,6,73,39,73v89,0,77,-154,103,-235r28,0r-34,162v-12,57,-55,99,-103,99v-50,1,-69,-48,-58,-99","w":200},"K":{"d":"76,-256r27,0r-28,133r160,-133r34,0r-139,115r87,141r-36,0r-73,-123r-40,32r-19,91r-28,0","w":217,"k":{"O":19}},"L":{"d":"76,-256r27,0r-49,231r135,0r-5,25r-163,0","w":194},"M":{"d":"21,0r55,-256r37,0r34,219r128,-219r36,0r-54,256r-27,0r45,-212r-120,209r-31,0r-31,-209r-45,212r-27,0","w":274},"N":{"d":"21,0r55,-256r26,0r87,204r44,-204r27,0r-54,256r-26,0r-86,-209r-45,209r-28,0","w":223},"O":{"d":"123,-20v68,0,99,-75,101,-147v0,-37,-13,-71,-55,-71v-69,0,-101,79,-101,149v0,36,14,69,55,69xm39,-89v0,-87,49,-174,136,-174v59,0,78,48,78,96v0,87,-47,172,-135,172v-59,0,-79,-47,-79,-94","w":234,"k":{"T":20,"A":17}},"P":{"d":"78,-136v65,4,121,-13,115,-59v9,-28,-50,-41,-95,-36xm222,-199v1,67,-63,93,-149,88r-24,111r-28,0r55,-256r64,0v56,0,82,24,82,57","w":193,"k":{"A":24}},"Q":{"d":"187,-52v36,-34,73,-186,-18,-186v-58,0,-100,74,-100,148v0,36,13,70,57,70v12,0,30,-5,40,-13r-28,-25r20,-20xm39,-89v0,-87,50,-174,136,-174v119,0,80,184,30,227r25,21r-21,20r-25,-22v-17,12,-36,22,-64,22v-60,0,-81,-46,-81,-94","w":240},"R":{"d":"114,-136v62,-3,74,-25,79,-59v5,-33,-51,-39,-95,-36r-20,95r36,0xm223,-199v-3,47,-35,75,-81,85r52,114r-32,0r-52,-111r-37,0r-24,111r-28,0r55,-256v67,-3,150,-1,147,57","w":193},"S":{"d":"197,-81v-3,58,-51,86,-103,86v-48,0,-69,-28,-74,-62r31,-6v1,19,19,43,48,43v35,-1,70,-18,71,-54v-11,-65,-104,-40,-109,-110v-6,-90,151,-106,158,-26r-27,5v-9,-50,-108,-39,-102,15v6,54,110,38,107,109","w":189},"T":{"d":"70,-256r192,0r-5,25r-81,0r-49,231r-28,0r50,-231r-84,0","w":218,"k":{"u":24,"A":20}},"U":{"d":"231,-256r28,0r-30,143v-16,74,-59,118,-117,118v-121,0,-50,-176,-36,-261r28,0r-30,143v-13,44,4,93,43,93v34,0,70,-28,84,-93","w":222},"V":{"d":"234,-256r29,0r-132,256r-39,0r-24,-256r30,0r20,226","w":218,"k":{"e":12,"E":12,"A":43}},"W":{"d":"69,-256r28,0r-15,224r94,-217r35,0r2,217r80,-224r28,0r-95,256r-38,0r-1,-216r-93,216r-39,0","w":277,"k":{"e":5,"A":17}},"X":{"d":"67,-256r32,0r41,107r85,-107r32,0r-106,128r53,128r-33,0r-40,-103r-86,103r-31,0r107,-128","w":213},"Y":{"d":"68,-256r29,0r40,106r85,-106r30,0r-105,125r-28,131r-28,0r28,-131","w":207,"k":{"a":22,"A":33}},"Z":{"d":"77,-256r194,0r-201,231r154,0r-5,25r-201,0r202,-231r-148,0","w":232},"[":{"d":"89,17r-69,0r60,-286r70,0r-6,25r-43,0r-50,236r43,0","w":110},"\\":{"d":"121,0r-68,-271r30,0r68,271r-30,0","w":142,"k":{"\\":25}},"]":{"d":"19,17r5,-25r44,0r50,-236r-43,0r5,-25r69,0r-60,286r-70,0","w":112},"^":{"d":"187,-202r-33,0r-19,-37r-36,37r-33,0r62,-60r23,0","w":162},"_":{"d":"7,41r5,-25r192,0r-6,25r-191,0","w":218},"`":{"d":"124,-216v2,11,-11,19,-18,12v-10,-21,-28,-33,-33,-59v2,-10,19,-20,25,-7","w":90},"a":{"d":"90,-19v24,0,51,-20,52,-50v0,-20,-16,-33,-34,-33v-50,0,-81,83,-18,83xm26,-44v0,-48,40,-81,81,-82v27,0,41,19,41,28v10,-29,10,-70,-28,-70v-17,0,-32,6,-42,14r-10,-18v38,-37,126,-22,109,57r-25,115r-24,0r6,-28v-3,9,-28,33,-55,33v-32,0,-53,-18,-53,-49","w":174,"k":{"v":22}},"b":{"d":"195,-129v-1,69,-35,134,-94,134v-31,0,-41,-18,-45,-37r-7,32r-26,0r54,-256r27,0r-22,100v12,-19,31,-38,61,-38v38,0,52,29,52,65xm101,-19v31,0,67,-50,67,-103v0,-31,-14,-48,-35,-48v-31,0,-67,48,-67,102v0,31,14,49,35,49","w":183},"c":{"d":"31,-68v0,-68,48,-124,104,-124v28,0,45,17,52,38r-26,12v-1,-10,-13,-26,-31,-26v-34,0,-73,44,-72,98v0,32,16,51,40,51v22,0,39,-19,44,-27r19,13v-14,18,-39,38,-68,38v-39,0,-62,-31,-62,-73","w":161},"d":{"d":"29,-60v0,-68,35,-133,94,-134v30,0,41,19,45,38r21,-100r27,0r-54,256r-27,0r7,-32v-12,19,-30,37,-61,37v-38,0,-52,-29,-52,-65xm123,-170v-32,0,-66,49,-66,103v0,31,14,48,34,48v32,0,68,-48,68,-102v0,-31,-15,-49,-36,-49","w":183},"e":{"d":"68,-106r91,0v7,-29,-4,-63,-32,-62v-28,0,-51,32,-59,62xm132,-192v55,-1,62,64,48,110r-117,0v-4,31,3,63,32,63v17,0,37,-10,48,-24r22,10v-17,23,-48,38,-75,38v-38,0,-56,-28,-56,-68v1,-70,43,-128,98,-129","w":178,"k":{"t":9}},"f":{"d":"108,-165r-35,165r-27,0r35,-165r-24,0r5,-24r24,0v1,-50,61,-94,93,-57r-23,19v-5,-15,-32,-11,-36,7r-7,31r35,0r-5,24r-35,0","w":125,"k":{"y":7,"u":14,"t":12,"o":7,"n":12,"a":14}},"g":{"d":"29,-60v0,-68,35,-133,94,-134v30,0,41,19,45,38r7,-33r27,0r-41,192v-10,48,-52,76,-88,76v-44,0,-61,-29,-60,-60v8,1,21,-3,25,2v9,53,88,41,96,-15r8,-38v-12,19,-29,37,-60,37v-38,0,-53,-29,-53,-65xm123,-170v-32,0,-66,49,-66,103v0,31,14,48,34,48v32,0,68,-48,68,-102v0,-31,-15,-49,-36,-49","w":179,"k":{"j":-21}},"h":{"d":"49,0r-26,0r54,-256r27,0r-21,99v10,-20,33,-37,61,-37v81,0,36,133,24,194r-26,0v7,-41,23,-80,23,-126v0,-26,-9,-44,-33,-44v-65,0,-66,110,-83,170","w":187},"i":{"d":"106,-238v3,19,-32,29,-34,7v0,-18,32,-30,34,-7xm66,-189r27,0r-40,189r-27,0","w":75},"j":{"d":"79,-231v0,-19,36,-31,34,-3v-2,17,-33,24,-34,3xm-34,61r23,-18v9,15,33,10,38,-13r46,-219r27,0r-46,213v-17,51,-63,65,-88,37","w":82,"k":{"j":-14}},"k":{"d":"107,-108r58,108r-30,0r-48,-90r-23,23r-15,67r-26,0r54,-256r27,0r-33,154r90,-87r31,0","w":165},"l":{"d":"107,-256r-47,225v0,9,8,13,18,13r-5,23v-30,1,-45,-12,-39,-41r47,-220r26,0","w":75},"m":{"d":"150,0r-27,0v8,-44,26,-88,26,-136v0,-19,-6,-34,-25,-34v-60,0,-57,113,-75,170r-26,0r40,-189r26,0r-6,32v12,-18,25,-37,53,-37v29,0,42,20,43,43v11,-23,32,-43,59,-43v42,0,45,41,37,79r-24,115r-27,0v8,-44,26,-88,26,-136v0,-19,-6,-32,-25,-32v-61,0,-57,112,-75,168","w":269},"n":{"d":"49,0r-26,0r40,-189r26,0r-6,32v10,-20,33,-37,61,-37v81,0,36,133,24,194r-26,0v7,-41,23,-80,23,-126v0,-26,-9,-44,-33,-44v-65,0,-66,110,-83,170","w":187},"o":{"d":"34,-63v0,-69,43,-129,102,-129v40,0,59,28,59,67v0,70,-41,130,-101,130v-40,0,-60,-28,-60,-68xm131,-168v-44,0,-67,50,-69,103v0,27,10,46,37,46v43,1,69,-53,69,-104v0,-27,-11,-45,-37,-45","w":185,"k":{"x":9}},"p":{"d":"195,-129v-1,69,-35,134,-94,134v-31,0,-41,-18,-45,-37r-23,107r-26,0r56,-264r26,0r-7,33v12,-19,31,-38,61,-38v38,0,52,29,52,65xm101,-19v31,0,67,-50,67,-103v0,-31,-14,-48,-35,-48v-31,0,-67,48,-67,102v0,31,14,49,35,49","w":183},"q":{"d":"29,-60v3,-68,35,-133,94,-134v30,0,41,19,45,38r7,-33r27,0r-49,232v0,8,6,12,18,12r-5,24v-65,2,-31,-70,-24,-111v-35,62,-116,43,-113,-28xm123,-170v-32,0,-66,49,-66,103v0,31,14,48,34,48v32,0,68,-48,68,-102v0,-31,-15,-49,-36,-49","w":184,"k":{"j":-48}},"r":{"d":"169,-187r-19,23v-77,-30,-84,97,-101,164r-26,0r40,-189r26,0r-6,32v11,-26,54,-49,86,-30","w":120,"k":{"e":7}},"s":{"d":"131,-50v3,-49,-86,-29,-81,-81v3,-40,36,-63,73,-62v40,0,52,25,54,40r-27,5v-5,-33,-73,-25,-72,11v11,44,79,22,82,75v4,71,-128,93,-135,24r27,-5v4,36,78,28,79,-7","w":161},"t":{"d":"78,-165r-25,0r5,-24r25,0r9,-44r27,0r-9,44r34,0r-5,24r-35,0r-27,134v-1,13,14,15,29,14r-5,22v-37,2,-57,-7,-50,-42","w":122},"u":{"d":"180,-189r27,0r-41,189r-26,0r7,-32v-10,20,-34,37,-62,37v-81,0,-36,-133,-24,-194r27,0v-8,41,-24,82,-24,126v0,26,9,44,33,44v65,0,67,-109,83,-170","w":187},"v":{"d":"78,0r-24,-189r29,0r16,155r83,-155r28,0r-105,189r-27,0","w":180},"w":{"d":"155,-152r-72,152r-21,0r-10,-189r27,0r3,145r67,-143r27,0r6,143r65,-145r27,0r-91,189r-21,0","w":241},"x":{"d":"153,0r-30,0r-26,-77r-57,77r-31,0r76,-95r-35,-94r30,0r25,77r57,-77r30,0r-75,94","w":158},"y":{"d":"166,3v-12,75,-116,100,-149,45r22,-15v22,36,90,27,100,-27r8,-38v-10,20,-34,37,-62,37v-81,0,-36,-133,-24,-194r27,0v-8,41,-24,82,-24,126v0,26,9,44,33,44v65,0,67,-109,83,-170r27,0","w":187,"k":{"j":-21}},"z":{"d":"65,-25r94,0r-5,25r-138,0r134,-164r-92,0r5,-25r137,0","w":169},"{":{"d":"113,-6r-5,24v-26,-1,-54,-2,-54,-27v0,-29,31,-107,-11,-119v51,-15,49,-96,63,-118v15,-22,39,-22,63,-23r-5,24v-24,-5,-44,9,-44,35v-4,21,-20,75,-39,82v33,33,-36,136,32,122","w":131},"|":{"d":"22,0r54,-256r25,0r-54,256r-25,0","w":64},"}":{"d":"109,-128v-22,-20,-3,-79,-1,-107v-5,-8,-20,-13,-32,-10r5,-24v25,1,53,0,53,28v0,29,-29,100,12,113v-50,14,-48,100,-63,122v-15,22,-39,22,-63,23r5,-24v25,4,41,-10,44,-36v3,-22,21,-78,40,-85","w":131},"~":{"d":"40,-134v9,-7,21,-17,35,-17v17,0,24,26,42,26v12,0,24,-9,36,-17r-5,26v-12,8,-24,17,-37,17v-20,0,-27,-27,-41,-27v-14,0,-24,9,-36,17","w":129},"\u00a0":{"w":108}}});
/*!
 * Created by Thatcher Ulrich (http://tulrich. com) with FontForge 1.0
 * (http://fontforge. sf. net)
 *
 * This font, including hint instructions, has been donated to the Public
 * Domain.  Do whatever you want with it.
 */
Cufon.registerFont({"w":206,"face":{"font-family":"Tuffy","font-weight":700,"font-style":"italic","font-stretch":"normal","units-per-em":"360","panose-1":"2 11 8 3 6 1 0 0 0 0","ascent":"281","descent":"-79","x-height":"5","bbox":"-54 -278.412 334 82","underline-thickness":"17.9297","underline-position":"-26.8945","slope":"-12","stemh":"42","stemv":"102","unicode-range":"U+0020-U+007E"},"glyphs":{" ":{"w":108},"!":{"d":"75,-77v-5,11,-32,15,-35,0r28,-167v6,-19,45,-24,50,-2xm16,-17v-2,-36,63,-51,59,-6v-2,30,-57,42,-59,6","w":80},"\"":{"d":"133,-190r10,-68v7,-15,34,-20,41,-3v-4,25,-13,45,-18,69v-5,9,-27,12,-33,2xm67,-190r11,-68v6,-15,33,-19,41,-3r-18,69v-5,9,-28,12,-34,2","w":153},"#":{"d":"176,-105r9,-42r-32,0r-9,42r32,0xm212,-63r-12,55r-44,0r11,-55r-32,0r-12,55r-44,0r11,-55r-56,0r9,-42r56,0r9,-42r-56,0r9,-42r56,0r12,-58r45,0r-12,58r32,0r12,-58r45,0r-12,58r54,0r-8,42r-55,0r-9,42r55,0r-9,42r-55,0","w":275,"k":{"$":10}},"$":{"d":"133,-270r30,0r-5,23v29,2,47,17,56,44r-50,14v-4,-10,-6,-13,-15,-15r-12,59v32,11,66,32,56,77v-9,38,-41,68,-88,73r-5,22r-30,0r5,-22v-38,-3,-56,-37,-59,-65r47,-15v4,14,8,33,22,35r15,-72v-36,-7,-63,-30,-53,-73v8,-36,45,-60,81,-62xm120,-205v-29,4,-36,39,-11,49xm127,-102r-13,64v32,-6,45,-46,13,-64","w":162},"%":{"d":"198,-84v-15,0,-30,35,-7,37v10,0,20,-8,19,-23v0,-8,-5,-14,-12,-14xm140,-53v1,-40,33,-66,66,-67v25,0,43,18,43,43v0,39,-34,66,-66,66v-26,0,-43,-18,-43,-42xm114,-208v-16,0,-31,34,-8,37v11,1,19,-10,20,-23v0,-8,-5,-14,-12,-14xm55,-177v0,-38,33,-66,67,-67v26,0,43,18,43,43v0,38,-33,65,-67,66v-26,0,-43,-18,-43,-42xm90,-21r-37,0r163,-214r36,0","w":252},"&":{"d":"59,-185v-3,-81,132,-114,151,-39r-41,19v-9,-32,-62,-23,-62,16v-1,26,30,23,56,23r-9,42v-49,-5,-83,13,-83,58v0,18,12,33,33,33v28,0,42,-15,45,-30r-31,0r9,-38r103,0r-8,38r-28,0v-6,29,-40,72,-99,72v-41,0,-72,-25,-72,-62v0,-55,45,-91,60,-93v-9,-4,-24,-17,-24,-39","w":225},"'":{"d":"67,-190r11,-68v6,-15,33,-19,41,-3r-18,69v-5,9,-28,12,-34,2","w":81},"(":{"d":"156,-275v-70,79,-109,177,-62,290r-46,0v-16,-27,-22,-56,-22,-85v0,-90,26,-141,83,-205r47,0","w":114},")":{"d":"118,-272v48,109,9,216,-62,289r-45,0v68,-76,106,-176,61,-289r46,0","w":113},"*":{"d":"165,-201v12,-14,44,4,31,20r-31,37v0,0,57,-14,52,18v-4,25,-35,20,-60,18v5,14,13,24,16,40v-4,15,-28,28,-40,16r-11,-39v-15,15,-23,54,-53,40v-23,-20,15,-41,25,-58v-21,-1,-56,15,-52,-18v3,-26,36,-19,61,-17v-5,-14,-14,-26,-16,-41v3,-13,28,-31,39,-16r12,38"},"+":{"d":"40,-134r47,0r11,-53r43,0r-12,53r51,0r-9,43r-51,0r-10,50r-42,0r10,-50r-47,0","w":170},",":{"d":"29,5v-31,-11,-7,-59,20,-57v19,1,27,13,23,28v-6,29,-35,54,-44,60r-11,-8v2,-4,12,-15,12,-23","w":78},"-":{"d":"45,-133r136,0r-9,43r-136,0","w":168},".":{"d":"16,-17v-4,-38,62,-51,58,-6v-2,29,-56,43,-58,6","w":79},"\/":{"d":"43,0r-50,0r172,-271r48,0","w":148,"k":{"\/":25}},"0":{"d":"36,-81v1,-94,54,-181,123,-181v44,0,66,29,66,80v-1,96,-56,187,-123,187v-43,0,-66,-34,-66,-86xm111,-38v43,7,69,-92,69,-148v0,-23,-9,-33,-30,-33v-33,0,-48,24,-61,86v-7,40,-19,88,22,95"},"1":{"d":"88,0r45,-212r-48,0r58,-44r47,0r-55,256r-47,0"},"2":{"d":"221,-205v0,90,-108,114,-141,163r115,0r-8,42r-171,0v8,-37,19,-63,56,-94v43,-37,98,-47,102,-100v-5,-41,-62,-30,-71,5r-39,-13v14,-35,56,-60,91,-60v30,0,66,13,66,57"},"3":{"d":"211,-93v0,95,-163,145,-183,36r48,-12v12,53,87,31,87,-14v0,-29,-31,-34,-63,-31r8,-38v38,4,65,-10,66,-43v1,-36,-52,-27,-61,-6r-41,-11v19,-32,47,-50,84,-50v35,0,65,15,65,52v-1,32,-17,54,-38,66v14,11,28,25,28,51"},"4":{"d":"188,-103r24,0r-9,42r-24,0r-13,61r-47,0r13,-61r-103,0r8,-36r132,-159r51,0xm161,-194r-78,91r59,0"},"5":{"d":"113,-38v29,-1,49,-22,53,-54v4,-34,-50,-42,-66,-24r-41,-16r47,-124r120,0r-9,42r-83,0r-20,51v50,-15,102,13,100,62v-3,66,-55,105,-110,106v-55,0,-74,-43,-74,-69r49,-8v0,11,8,34,34,34"},"6":{"d":"111,-37v26,0,45,-21,46,-48v0,-17,-11,-31,-30,-31v-42,0,-68,79,-16,79xm206,-95v-1,57,-46,100,-104,100v-49,0,-75,-35,-67,-81v8,-41,35,-68,48,-86r68,-94r50,0r-73,98v46,-6,79,23,78,63"},"7":{"d":"258,-256r-184,256r-57,0r151,-211r-106,0r10,-45r186,0"},"8":{"d":"129,-119v-52,-8,-82,83,-18,85v52,8,79,-82,18,-85xm151,-223v-41,0,-63,61,-13,61v22,0,40,-12,42,-38v0,-13,-9,-23,-29,-23xm62,-181v0,-52,45,-81,97,-81v43,0,69,22,69,55v0,36,-32,60,-46,66v15,4,31,25,31,51v0,65,-57,94,-111,95v-49,0,-76,-25,-76,-62v0,-43,37,-78,59,-84v-8,-5,-23,-18,-23,-40"},"9":{"d":"150,-219v-26,0,-47,21,-47,48v0,17,11,31,30,31v41,0,69,-79,17,-79xm55,-161v1,-57,46,-100,104,-100v49,0,75,35,67,81v-8,41,-35,68,-48,86r-68,94r-50,0r73,-98v-47,6,-79,-22,-78,-63"},":":{"d":"43,-145v-4,-36,56,-50,59,-12v2,34,-56,51,-59,12xm16,-17v-4,-38,62,-51,58,-6v-2,29,-56,43,-58,6","w":77},";":{"d":"31,5v-31,-11,-7,-59,20,-57v19,1,27,13,23,28v-6,29,-35,54,-44,60r-12,-8v2,-4,13,-15,13,-23xm43,-145v-4,-36,56,-50,59,-12v2,34,-56,51,-59,12","w":77},"<":{"d":"82,-4r-50,-108r96,-105r58,0r-96,106r50,107r-58,0","w":151},"=":{"d":"30,-97r141,0r-9,43r-141,0xm44,-161r141,0r-9,42r-141,0","w":159},">":{"d":"70,-4r-60,0r97,-107r-51,-106r59,0r51,105","w":151},"?":{"d":"215,-208v-1,74,-77,82,-83,115r-5,23r-47,0r7,-34v9,-46,74,-46,78,-95v-7,-37,-67,-20,-70,11r-45,-7v12,-38,48,-68,94,-68v38,0,71,18,71,55xm65,-17v-4,-36,56,-50,59,-12v2,34,-56,51,-59,12","w":181},"@":{"d":"203,-233v-63,0,-129,53,-129,127v0,47,35,83,85,83v25,0,51,-12,66,-23r14,26v-72,55,-207,17,-201,-81v6,-97,86,-162,172,-162v68,0,113,43,113,103v0,63,-66,129,-102,72v-30,47,-113,29,-112,-27v1,-47,44,-77,86,-77v41,0,62,30,53,69v0,10,5,19,12,19v13,1,26,-27,26,-50v0,-45,-33,-79,-83,-79xm188,-159v-34,-6,-60,60,-14,62v32,5,58,-59,14,-62","w":305},"A":{"d":"162,-184r-44,74r53,0xm175,-67r-79,0r-38,67r-54,0r153,-256r45,0r35,256r-54,0","w":249,"k":{"w":17,"v":29,"V":37,"T":17,"C":14}},"B":{"d":"77,-42v50,4,103,-6,99,-45v6,-26,-51,-26,-84,-25xm114,-214r-13,60v41,2,86,-5,81,-36v6,-20,-38,-27,-68,-24xm222,-88v0,43,-26,88,-109,88r-92,0r54,-256r77,0v114,-5,88,100,31,116v29,7,39,32,39,52","w":215},"C":{"d":"175,-221v-60,1,-86,63,-86,125v0,34,13,59,46,59v19,0,36,-16,51,-35r42,18v-21,31,-53,60,-102,60v-65,0,-87,-42,-87,-93v0,-96,48,-176,145,-176v44,0,69,27,75,54r-48,16v-6,-15,-21,-28,-36,-28","w":230},"D":{"d":"76,-42v76,11,110,-37,115,-116v3,-48,-29,-62,-78,-56xm242,-164v0,92,-68,164,-140,164r-82,0r55,-256r82,0v54,0,85,39,85,92","w":223},"E":{"d":"75,-256r172,0r-9,42r-125,0r-13,62r114,0r-9,42r-114,0r-15,68r126,0r-9,42r-173,0","w":212,"k":{"R":-7}},"F":{"d":"75,-256r172,0r-9,42r-125,0r-13,62r114,0r-9,42r-114,0r-24,110r-47,0","w":209},"G":{"d":"173,-221v-51,4,-82,62,-83,121v0,34,12,63,43,63v43,0,61,-39,66,-63r-53,0r9,-42r102,0v-12,71,-45,147,-133,147v-63,0,-84,-46,-84,-97v0,-91,48,-171,142,-171v36,0,64,19,71,52r-49,15v-1,-13,-21,-25,-31,-25","w":249,"k":{"T":12}},"H":{"d":"75,-256r47,0r-22,104r85,0r22,-104r47,0r-54,256r-47,0r23,-110r-85,0r-24,110r-47,0","w":220},"I":{"d":"25,0r54,-256r48,0r-55,256r-47,0","w":97},"J":{"d":"40,-103r42,0v-6,33,0,64,35,65v34,0,49,-33,56,-65r32,-153r48,0v-26,102,-27,262,-146,262v-64,1,-80,-51,-67,-109","w":219},"K":{"d":"75,-256r47,0r-24,110r119,-110r59,0r-122,114r73,142r-59,0r-57,-110r-25,23r-19,87r-47,0","w":234,"k":{"O":19}},"L":{"d":"75,-256r47,0r-46,214r135,0r-9,42r-182,0","w":214},"M":{"d":"12,0r54,-256r63,0r23,181r101,-181r63,0r-54,256r-46,0r37,-176r-93,176r-47,0r-18,-174r-37,174r-46,0","w":272},"N":{"d":"21,0r54,-256r46,0r66,165r35,-165r47,0r-54,256r-47,0r-64,-171r-36,171r-47,0","w":236},"O":{"d":"134,-37v54,0,82,-69,82,-128v0,-29,-11,-55,-44,-55v-56,0,-79,64,-81,125v0,31,11,58,43,58xm41,-93v0,-86,47,-169,140,-169v63,0,85,47,85,94v0,86,-50,173,-141,173v-62,0,-84,-48,-84,-98","w":247,"k":{"T":20,"A":17}},"P":{"d":"99,-145v45,2,81,-6,80,-43v4,-23,-34,-28,-65,-26xm228,-196v0,64,-57,98,-138,94r-22,102r-47,0r55,-256r70,0v56,0,82,26,82,60","w":201,"k":{"A":24}},"Q":{"d":"190,-75v22,-34,51,-146,-17,-146v-55,0,-78,64,-81,126v-2,41,27,75,66,52r-24,-21r33,-34xm41,-93v0,-86,45,-164,141,-170v122,-8,83,176,39,217r20,18r-34,33r-19,-19v-15,12,-39,20,-65,20v-59,0,-82,-47,-82,-99","w":252},"R":{"d":"99,-145v45,2,81,-6,80,-43v4,-22,-34,-28,-65,-26xm228,-196v0,43,-25,67,-65,86r42,110r-54,0r-34,-102r-27,0r-22,102r-47,0r55,-256r69,0v57,0,83,26,83,60","w":212},"S":{"d":"215,-89v0,107,-189,133,-185,18r48,-8v1,21,11,42,39,42v30,-1,49,-16,49,-42v0,-45,-103,-37,-103,-97v0,-96,158,-117,173,-32r-50,8v-7,-32,-73,-25,-74,12v0,22,41,31,62,42v23,12,41,28,41,57","w":211},"T":{"d":"68,-256r211,0r-8,42r-81,0r-45,214r-47,0r45,-214r-84,0","w":237,"k":{"u":24,"A":20}},"U":{"d":"218,-256r48,0r-28,134v-17,80,-64,127,-124,127v-65,0,-82,-62,-68,-127r28,-134r48,0r-28,134v-10,37,-8,85,29,85v68,0,76,-151,95,-219","w":236},"V":{"d":"222,-256r49,0r-128,256r-56,0r-20,-256r50,0r13,184","w":228,"k":{"e":12,"E":12,"A":43}},"W":{"d":"67,-256r50,0r-10,161r70,-156r50,0r6,157r59,-162r42,0r-96,256r-55,0r-4,-164r-74,164r-52,0","w":293,"k":{"e":5,"A":17}},"X":{"d":"65,-256r54,0r29,88r66,-88r55,0r-102,128r48,128r-59,0r-27,-81r-60,81r-60,0r103,-128","w":228},"Y":{"d":"66,-256r50,0r34,94r75,-94r49,0r-108,132r-26,124r-47,0r26,-124","w":230,"k":{"a":22,"A":33}},"Z":{"d":"79,-256r205,0r-186,214r139,0r-8,42r-216,0r186,-214r-129,0","w":249},"[":{"d":"106,17r-88,0r61,-286r88,0r-9,42r-44,0r-43,203r44,0","w":130},"\\":{"d":"103,0r-52,-271r51,0r55,271r-54,0","w":150,"k":{"\\":25}},"]":{"d":"17,17r9,-42r43,0r43,-202r-43,0r9,-42r88,0r-61,286r-88,0","w":130},"^":{"d":"206,-202r-48,0r-17,-28r-28,28r-48,0r62,-60r42,0","w":190},"_":{"d":"3,49r9,-42r192,0r-9,42r-192,0","w":218},"`":{"d":"130,-220v-2,13,-18,25,-30,21v-10,-19,-26,-33,-33,-56v3,-13,24,-31,37,-20","w":94},"a":{"d":"142,-68v-7,-41,-72,-22,-71,11v7,40,72,21,71,-11xm27,-47v0,-49,40,-82,80,-83v25,0,39,15,41,29v1,-8,4,-18,4,-27v-1,-44,-55,-30,-76,-20r-11,-29v51,-34,149,-19,130,70r-23,107r-45,0r5,-24v-7,14,-28,29,-53,29v-31,0,-52,-21,-52,-52","w":189,"k":{"v":7}},"b":{"d":"211,-131v-3,69,-36,136,-92,136v-20,0,-39,-14,-47,-33r-6,28r-45,0r54,-256r46,0r-20,95v33,-47,113,-43,110,30xm112,-36v21,0,52,-39,52,-80v0,-26,-14,-36,-28,-36v-21,-6,-54,36,-54,79v0,28,16,37,30,37","w":197},"c":{"d":"32,-66v0,-75,54,-128,112,-127v27,0,52,15,60,40r-41,20v-4,-11,-11,-20,-27,-20v-27,-1,-54,35,-57,76v-3,45,54,52,67,22r33,19v-16,20,-44,41,-74,41v-47,0,-73,-27,-73,-71","w":184},"d":{"d":"29,-57v3,-68,36,-136,92,-136v20,0,39,13,47,32r20,-95r45,0r-54,256r-45,0r5,-28v-32,47,-113,44,-110,-29xm128,-152v-20,-5,-51,33,-51,77v0,26,13,39,27,39v21,7,54,-36,54,-80v0,-27,-16,-36,-30,-36","w":197},"e":{"d":"88,-114r73,0v1,-22,-6,-38,-29,-39v-22,0,-38,20,-44,39xm33,-70v2,-70,55,-122,108,-123v54,-1,72,57,57,111r-117,0v-8,46,30,61,58,35r36,17v-46,56,-144,44,-142,-40","w":192,"k":{"t":9}},"f":{"d":"114,-148r-31,148r-46,0r32,-148r-25,0r9,-41r25,0v0,-46,72,-99,113,-57r-33,31v-10,-11,-27,-7,-31,9r-4,17r29,0r-9,41r-29,0","w":137,"k":{"y":7,"u":14,"t":12,"o":7,"n":12,"a":14}},"g":{"d":"29,-57v3,-68,36,-136,92,-136v20,0,39,13,47,32r6,-28r45,0r-42,198v-8,37,-43,72,-97,72v-53,0,-69,-33,-65,-64v0,0,26,-1,43,-2v-1,16,7,26,30,27v41,2,46,-36,51,-70v-32,47,-113,44,-110,-29xm128,-152v-20,-5,-51,33,-51,77v0,26,13,39,27,39v21,7,54,-36,54,-80v0,-27,-16,-36,-30,-36","w":199},"h":{"d":"66,0r-45,0r54,-256r46,0r-21,96v27,-39,106,-56,106,20v0,50,-19,93,-28,140r-45,0v7,-40,24,-82,24,-125v0,-22,-9,-27,-23,-27v-19,0,-38,10,-48,58","w":197},"i":{"d":"71,-228v-3,-34,50,-50,53,-13v2,32,-50,51,-53,13xm65,-189r45,0r-40,189r-46,0","w":93},"j":{"d":"71,-228v-3,-34,50,-50,53,-13v2,32,-50,51,-53,13xm-54,59r36,-31v9,16,35,5,39,-12r44,-205r45,0r-41,195v-11,48,-82,98,-123,53","w":93},"k":{"d":"124,-105r51,105r-52,0r-37,-82v-11,23,-12,56,-20,82r-45,0r54,-256r46,0r-28,130r63,-63r55,0","w":175},"l":{"d":"124,-256r-44,211v0,6,3,11,13,11r-8,39v-44,2,-58,-16,-50,-54r44,-207r45,0","w":98},"m":{"d":"162,0r-45,0r25,-128v0,-16,-5,-25,-18,-25v-45,0,-43,107,-58,153r-45,0r40,-189r45,0r-6,28v10,-12,32,-33,55,-33v36,0,33,39,34,42v11,-16,37,-42,60,-42v35,0,42,41,34,77r-25,117r-45,0r25,-128v0,-16,-5,-25,-18,-25v-20,0,-30,23,-37,58","w":276},"n":{"d":"66,0r-45,0r40,-189r45,0r-6,29v27,-39,106,-56,106,20v0,50,-19,93,-28,140r-45,0v7,-40,24,-82,24,-125v0,-22,-9,-27,-23,-27v-19,0,-38,10,-48,58","w":197},"o":{"d":"132,-152v-24,-7,-54,37,-54,82v0,26,13,34,29,34v24,7,54,-36,54,-83v0,-26,-13,-33,-29,-33xm33,-62v1,-75,46,-132,107,-131v43,0,66,25,66,67v0,74,-45,132,-108,131v-43,0,-65,-25,-65,-67","w":194,"k":{"x":9,"v":5}},"p":{"d":"211,-131v-3,69,-36,136,-92,136v-20,0,-39,-14,-47,-33r-22,103r-45,0r56,-264r45,0r-5,28v33,-47,113,-43,110,30xm112,-36v21,0,52,-39,52,-80v0,-26,-14,-36,-28,-36v-21,-6,-54,36,-54,79v0,28,16,37,30,37","w":198},"q":{"d":"29,-57v3,-68,36,-136,92,-136v20,0,39,13,47,32r6,-28r45,0r-46,218v0,6,4,8,17,8r-9,42v-71,6,-54,-60,-42,-107v-32,47,-113,44,-110,-29xm128,-152v-20,-5,-51,33,-51,77v0,26,13,39,27,39v21,7,54,-36,54,-80v0,-27,-16,-36,-30,-36","w":198},"r":{"d":"160,-142v-31,-28,-64,9,-72,45r-21,97r-46,0r41,-189r45,0r-6,29v24,-31,57,-48,83,-17","w":150,"k":{"e":6}},"s":{"d":"123,-52v0,-31,-77,-30,-73,-73v4,-44,33,-68,78,-68v39,0,57,25,56,52v-14,1,-34,10,-44,6v0,-29,-46,-22,-46,0v0,22,83,30,74,71v0,46,-40,69,-84,69v-39,0,-59,-22,-59,-56v13,-1,30,-7,42,-6v-1,28,50,31,56,5","w":168},"t":{"d":"69,-148r-25,0r9,-41r25,0r9,-44r45,0r-9,44r27,0r-9,41r-27,0r-21,101v1,14,13,11,24,11r-8,39v-50,1,-70,-14,-61,-55","w":124},"u":{"d":"176,0r-45,0r6,-28v-26,37,-107,56,-103,-22v1,-47,17,-95,25,-139r45,0v-7,40,-23,79,-23,122v0,25,12,31,23,31v14,0,37,-10,47,-58r20,-95r45,0","w":195},"v":{"d":"72,0r-19,-189r47,0r6,121r60,-121r43,0r-99,189r-38,0","w":186,"k":{"e":8}},"w":{"d":"150,-117r-49,117r-36,0r-15,-189r45,0r4,118r48,-118r41,0r-2,117r55,-117r43,0r-96,189r-38,0r0,-117","w":254},"x":{"d":"179,0r-53,0r-21,-59r-46,59r-54,0r80,-94r-37,-95r51,0r21,58r45,-58r55,0r-80,93","w":185},"y":{"d":"177,-5v-5,46,-55,87,-97,87v-37,0,-58,-21,-64,-43r40,-19v6,32,66,24,73,-10r8,-38v-26,37,-107,56,-103,-22v1,-47,17,-95,25,-139r45,0v-7,40,-23,79,-23,122v0,25,12,31,23,31v14,0,37,-10,47,-58r20,-95r45,0","w":194},"z":{"d":"94,-42r71,0r-9,42r-144,0r107,-147r-68,0r9,-42r142,0","w":176},"{":{"d":"110,18v-29,-1,-58,1,-58,-27v0,-29,26,-106,-11,-119v47,-14,51,-105,66,-126v15,-20,37,-19,65,-20r-8,37v-19,0,-29,6,-34,27v-6,27,-18,73,-41,82v24,15,5,64,5,92v0,13,8,16,24,16","w":131},"|":{"d":"20,0r55,-256r42,0r-54,256r-43,0","w":82},"}":{"d":"80,-274v29,1,57,0,57,27v0,29,-26,106,11,119v-47,14,-50,105,-65,126v-15,20,-38,19,-66,20r8,-38v19,0,29,-5,34,-26v6,-27,18,-73,41,-82v-24,-17,-5,-64,-5,-93v0,-13,-7,-16,-23,-16","w":131},"~":{"d":"40,-142v9,-7,22,-18,36,-18v17,0,24,27,42,27v12,0,27,-12,36,-19r-10,45v-8,5,-20,17,-35,17v-20,0,-29,-27,-43,-27v-14,0,-23,9,-35,17","w":133},"\u00a0":{"w":108}}});


jQuery(function()
{
  jQuery('img').lazyload();

  jQuery('form').autofocus();
  jQuery('form .hintable').hintable();
  jQuery('form textarea').elastic();

  jQuery('.expandable').truncate({max_length: 25, more: 'More&hellip;', less: 'Less'});

  jQuery('abbr.timeago').timeago();

  Hyphenator.config({displaytogglebox: true});
  Hyphenator.run();


  Cufon.replace('h1');

});
