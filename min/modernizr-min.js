//http://www.minifier.org/
(function(window,document,undefined){var classes=[];var tests=[];var ModernizrProto={_version:'3.5.0',_config:{'classPrefix':'','enableClasses':!0,'enableJSClass':!0,'usePrefixes':!0},_q:[],on:function(test,cb){var self=this;setTimeout(function(){cb(self[test])},0)},addTest:function(name,fn,options){tests.push({name:name,fn:fn,options:options})},addAsyncTest:function(fn){tests.push({name:null,fn:fn})}};var Modernizr=function(){};Modernizr.prototype=ModernizrProto;Modernizr=new Modernizr();Modernizr.addTest('applicationcache','applicationCache' in window);Modernizr.addTest('geolocation','geolocation' in navigator);Modernizr.addTest('history',function(){var ua=navigator.userAgent;if((ua.indexOf('Android 2.')!==-1||(ua.indexOf('Android 4.0')!==-1))&&ua.indexOf('Mobile Safari')!==-1&&ua.indexOf('Chrome')===-1&&ua.indexOf('Windows Phone')===-1&&location.protocol!=='file:'){return!1}
return(window.history&&'pushState' in window.history)});Modernizr.addTest('postmessage','postMessage' in window);Modernizr.addTest('svg',!!document.createElementNS&&!!document.createElementNS('http://www.w3.org/2000/svg','svg').createSVGRect);var supports=!1;try{supports='WebSocket' in window&&window.WebSocket.CLOSING===2}catch(e){}
Modernizr.addTest('websockets',supports);Modernizr.addTest('localstorage',function(){var mod='modernizr';try{localStorage.setItem(mod,mod);localStorage.removeItem(mod);return!0}catch(e){return!1}});Modernizr.addTest('sessionstorage',function(){var mod='modernizr';try{sessionStorage.setItem(mod,mod);sessionStorage.removeItem(mod);return!0}catch(e){return!1}});Modernizr.addTest('websqldatabase','openDatabase' in window);Modernizr.addTest('webworkers','Worker' in window);var prefixes=(ModernizrProto._config.usePrefixes?' -webkit- -moz- -o- -ms- '.split(' '):['','']);ModernizrProto._prefixes=prefixes;function is(obj,type){return typeof obj===type};function testRunner(){var featureNames;var feature;var aliasIdx;var result;var nameIdx;var featureName;var featureNameSplit;for(var featureIdx in tests){if(tests.hasOwnProperty(featureIdx)){featureNames=[];feature=tests[featureIdx];if(feature.name){featureNames.push(feature.name.toLowerCase());if(feature.options&&feature.options.aliases&&feature.options.aliases.length){for(aliasIdx=0;aliasIdx<feature.options.aliases.length;aliasIdx++){featureNames.push(feature.options.aliases[aliasIdx].toLowerCase())}}}
result=is(feature.fn,'function')?feature.fn():feature.fn;for(nameIdx=0;nameIdx<featureNames.length;nameIdx++){featureName=featureNames[nameIdx];featureNameSplit=featureName.split('.');if(featureNameSplit.length===1){Modernizr[featureNameSplit[0]]=result}else{if(Modernizr[featureNameSplit[0]]&&!(Modernizr[featureNameSplit[0]]instanceof Boolean)){Modernizr[featureNameSplit[0]]=new Boolean(Modernizr[featureNameSplit[0]])}
Modernizr[featureNameSplit[0]][featureNameSplit[1]]=result}
classes.push((result?'':'no-')+featureNameSplit.join('-'))}}}};var docElement=document.documentElement;var isSVG=docElement.nodeName.toLowerCase()==='svg';function setClasses(classes){var className=docElement.className;var classPrefix=Modernizr._config.classPrefix||'';if(isSVG){className=className.baseVal}
if(Modernizr._config.enableJSClass){var reJS=new RegExp('(^|\\s)'+classPrefix+'no-js(\\s|$)');className=className.replace(reJS,'$1'+classPrefix+'js$2')}
if(Modernizr._config.enableClasses){className+=' '+classPrefix+classes.join(' '+classPrefix);if(isSVG){docElement.className.baseVal=className}else{docElement.className=className}}};var html5;if(!isSVG){;(function(window,document){var version='3.7.3';var options=window.html5||{};var reSkip=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;var saveClones=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;var supportsHtml5Styles;var expando='_html5shiv';var expanID=0;var expandoData={};var supportsUnknownElements;(function(){try{var a=document.createElement('a');a.innerHTML='<xyz></xyz>';supportsHtml5Styles=('hidden' in a);supportsUnknownElements=a.childNodes.length==1||(function(){(document.createElement)('a');var frag=document.createDocumentFragment();return(typeof frag.cloneNode=='undefined'||typeof frag.createDocumentFragment=='undefined'||typeof frag.createElement=='undefined')}())}catch(e){supportsHtml5Styles=!0;supportsUnknownElements=!0}}());function addStyleSheet(ownerDocument,cssText){var p=ownerDocument.createElement('p'),parent=ownerDocument.getElementsByTagName('head')[0]||ownerDocument.documentElement;p.innerHTML='x<style>'+cssText+'</style>';return parent.insertBefore(p.lastChild,parent.firstChild)}
function getElements(){var elements=html5.elements;return typeof elements=='string'?elements.split(' '):elements}
function addElements(newElements,ownerDocument){var elements=html5.elements;if(typeof elements!='string'){elements=elements.join(' ')}
if(typeof newElements!='string'){newElements=newElements.join(' ')}
html5.elements=elements+' '+newElements;shivDocument(ownerDocument)}
function getExpandoData(ownerDocument){var data=expandoData[ownerDocument[expando]];if(!data){data={};expanID++;ownerDocument[expando]=expanID;expandoData[expanID]=data}
return data}
function createElement(nodeName,ownerDocument,data){if(!ownerDocument){ownerDocument=document}
if(supportsUnknownElements){return ownerDocument.createElement(nodeName)}
if(!data){data=getExpandoData(ownerDocument)}
var node;if(data.cache[nodeName]){node=data.cache[nodeName].cloneNode()}else if(saveClones.test(nodeName)){node=(data.cache[nodeName]=data.createElem(nodeName)).cloneNode()}else{node=data.createElem(nodeName)}
return node.canHaveChildren&&!reSkip.test(nodeName)&&!node.tagUrn?data.frag.appendChild(node):node}
function createDocumentFragment(ownerDocument,data){if(!ownerDocument){ownerDocument=document}
if(supportsUnknownElements){return ownerDocument.createDocumentFragment()}
data=data||getExpandoData(ownerDocument);var clone=data.frag.cloneNode(),i=0,elems=getElements(),l=elems.length;for(;i<l;i++){clone.createElement(elems[i])}
return clone}
function shivMethods(ownerDocument,data){if(!data.cache){data.cache={};data.createElem=ownerDocument.createElement;data.createFrag=ownerDocument.createDocumentFragment;data.frag=data.createFrag()}
ownerDocument.createElement=function(nodeName){if(!html5.shivMethods){return data.createElem(nodeName)}
return createElement(nodeName,ownerDocument,data)};ownerDocument.createDocumentFragment=Function('h,f','return function(){'+'var n=f.cloneNode(),c=n.createElement;'+'h.shivMethods&&('+getElements().join().replace(/[\w\-:]+/g,function(nodeName){data.createElem(nodeName);data.frag.createElement(nodeName);return 'c("'+nodeName+'")'})+');return n}')(html5,data.frag)}
function shivDocument(ownerDocument){if(!ownerDocument){ownerDocument=document}
var data=getExpandoData(ownerDocument);if(html5.shivCSS&&!supportsHtml5Styles&&!data.hasCSS){data.hasCSS=!!addStyleSheet(ownerDocument,'article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}'+'mark{background:#FF0;color:#000}'+'template{display:none}')}
if(!supportsUnknownElements){shivMethods(ownerDocument,data)}
return ownerDocument}
var html5={'elements':options.elements||'abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video','version':version,'shivCSS':(options.shivCSS!==!1),'supportsUnknownElements':supportsUnknownElements,'shivMethods':(options.shivMethods!==!1),'type':'default','shivDocument':shivDocument,createElement:createElement,createDocumentFragment:createDocumentFragment,addElements:addElements};window.html5=html5;shivDocument(document);if(typeof module=='object'&&module.exports){module.exports=html5}}(typeof window!=='undefined'?window:this,document))};var omPrefixes='Moz O ms Webkit';var domPrefixes=(ModernizrProto._config.usePrefixes?omPrefixes.toLowerCase().split(' '):[]);ModernizrProto._domPrefixes=domPrefixes;var hasOwnProp;(function(){var _hasOwnProperty=({}).hasOwnProperty;if(!is(_hasOwnProperty,'undefined')&&!is(_hasOwnProperty.call,'undefined')){hasOwnProp=function(object,property){return _hasOwnProperty.call(object,property)}}
else{hasOwnProp=function(object,property){return((property in object)&&is(object.constructor.prototype[property],'undefined'))}}})();ModernizrProto._l={};ModernizrProto.on=function(feature,cb){if(!this._l[feature]){this._l[feature]=[]}
this._l[feature].push(cb);if(Modernizr.hasOwnProperty(feature)){setTimeout(function(){Modernizr._trigger(feature,Modernizr[feature])},0)}};ModernizrProto._trigger=function(feature,res){if(!this._l[feature]){return}
var cbs=this._l[feature];setTimeout(function(){var i,cb;for(i=0;i<cbs.length;i++){cb=cbs[i];cb(res)}},0);delete this._l[feature]};function addTest(feature,test){if(typeof feature=='object'){for(var key in feature){if(hasOwnProp(feature,key)){addTest(key,feature[key])}}}else{feature=feature.toLowerCase();var featureNameSplit=feature.split('.');var last=Modernizr[featureNameSplit[0]];if(featureNameSplit.length==2){last=last[featureNameSplit[1]]}
if(typeof last!='undefined'){return Modernizr}
test=typeof test=='function'?test():test;if(featureNameSplit.length==1){Modernizr[featureNameSplit[0]]=test}else{if(Modernizr[featureNameSplit[0]]&&!(Modernizr[featureNameSplit[0]]instanceof Boolean)){Modernizr[featureNameSplit[0]]=new Boolean(Modernizr[featureNameSplit[0]])}
Modernizr[featureNameSplit[0]][featureNameSplit[1]]=test}
setClasses([(!!test&&test!=!1?'':'no-')+featureNameSplit.join('-')]);Modernizr._trigger(feature,test)}
return Modernizr}
Modernizr._q.push(function(){ModernizrProto.addTest=addTest});function createElement(){if(typeof document.createElement!=='function'){return document.createElement(arguments[0])}else if(isSVG){return document.createElementNS.call(document,'http://www.w3.org/2000/svg',arguments[0])}else{return document.createElement.apply(document,arguments)}};var hasEvent=(function(){var needsFallback=!('onblur' in document.documentElement);function inner(eventName,element){var isSupported;if(!eventName){return!1}
if(!element||typeof element==='string'){element=createElement(element||'div')}
eventName='on'+eventName;isSupported=eventName in element;if(!isSupported&&needsFallback){if(!element.setAttribute){element=createElement('div')}
element.setAttribute(eventName,'');isSupported=typeof element[eventName]==='function';if(element[eventName]!==undefined){element[eventName]=undefined}
element.removeAttribute(eventName)}
return isSupported}
return inner})();ModernizrProto.hasEvent=hasEvent;Modernizr.addTest('hashchange',function(){if(hasEvent('hashchange',window)===!1){return!1}
return(document.documentMode===undefined||document.documentMode>7)});Modernizr.addTest('audio',function(){var elem=createElement('audio');var bool=!1;try{bool=!!elem.canPlayType
if(bool){bool=new Boolean(bool);bool.ogg=elem.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,'');bool.mp3=elem.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/,'');bool.opus=elem.canPlayType('audio/ogg; codecs="opus"')||elem.canPlayType('audio/webm; codecs="opus"').replace(/^no$/,'');bool.wav=elem.canPlayType('audio/wav; codecs="1"').replace(/^no$/,'');bool.m4a=(elem.canPlayType('audio/x-m4a;')||elem.canPlayType('audio/aac;')).replace(/^no$/,'')}}catch(e){}
return bool});Modernizr.addTest('canvas',function(){var elem=createElement('canvas');return!!(elem.getContext&&elem.getContext('2d'))});Modernizr.addTest('canvastext',function(){if(Modernizr.canvas===!1){return!1}
return typeof createElement('canvas').getContext('2d').fillText=='function'});Modernizr.addTest('video',function(){var elem=createElement('video');var bool=!1;try{bool=!!elem.canPlayType
if(bool){bool=new Boolean(bool);bool.ogg=elem.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,'');bool.h264=elem.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,'');bool.webm=elem.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,'');bool.vp9=elem.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,'');bool.hls=elem.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,'')}}catch(e){}
return bool});Modernizr.addTest('webgl',function(){var canvas=createElement('canvas');var supports='probablySupportsContext' in canvas?'probablySupportsContext':'supportsContext';if(supports in canvas){return canvas[supports]('webgl')||canvas[supports]('experimental-webgl')}
return 'WebGLRenderingContext' in window});Modernizr.addTest('cssgradients',function(){var str1='background-image:';var str2='gradient(linear,left top,right bottom,from(#9f9),to(white));';var css='';var angle;for(var i=0,len=prefixes.length-1;i<len;i++){angle=(i===0?'to ':'');css+=str1+prefixes[i]+'linear-gradient('+angle+'left top, #9f9, white);'}
if(Modernizr._config.usePrefixes){css+=str1+'-webkit-'+str2}
var elem=createElement('a');var style=elem.style;style.cssText=css;return(''+style.backgroundImage).indexOf('gradient')>-1});Modernizr.addTest('multiplebgs',function(){var style=createElement('a').style;style.cssText='background:url(https://),url(https://),red url(https://)';return(/(url\s*\(.*?){3}/).test(style.background)});Modernizr.addTest('opacity',function(){var style=createElement('a').style;style.cssText=prefixes.join('opacity:.55;');return(/^0.55$/).test(style.opacity)});Modernizr.addTest('rgba',function(){var style=createElement('a').style;style.cssText='background-color:rgba(150,255,150,.5)';return(''+style.backgroundColor).indexOf('rgba')>-1});Modernizr.addTest('inlinesvg',function(){var div=createElement('div');div.innerHTML='<svg/>';return(typeof SVGRect!='undefined'&&div.firstChild&&div.firstChild.namespaceURI)=='http://www.w3.org/2000/svg'});function cssToDOM(name){return name.replace(/([a-z])-([a-z])/g,function(str,m1,m2){return m1+m2.toUpperCase()}).replace(/^-/,'')};var inputElem=createElement('input');var inputattrs='autocomplete autofocus list placeholder max min multiple pattern required step'.split(' ');var attrs={};Modernizr.input=(function(props){for(var i=0,len=props.length;i<len;i++){attrs[props[i]]=!!(props[i]in inputElem)}
if(attrs.list){attrs.list=!!(createElement('datalist')&&window.HTMLDataListElement)}
return attrs})(inputattrs);var inputtypes='search tel url email datetime date month week time datetime-local number range color'.split(' ');var inputs={};Modernizr.inputtypes=(function(props){var len=props.length;var smile='1)';var inputElemType;var defaultView;var bool;for(var i=0;i<len;i++){inputElem.setAttribute('type',inputElemType=props[i]);bool=inputElem.type!=='text'&&'style' in inputElem;if(bool){inputElem.value=smile;inputElem.style.cssText='position:absolute;visibility:hidden;';if(/^range$/.test(inputElemType)&&inputElem.style.WebkitAppearance!==undefined){docElement.appendChild(inputElem);defaultView=document.defaultView;bool=defaultView.getComputedStyle&&defaultView.getComputedStyle(inputElem,null).WebkitAppearance!=='textfield'&&(inputElem.offsetHeight!==0);docElement.removeChild(inputElem)}else if(/^(search|tel)$/.test(inputElemType)){}else if(/^(url|email)$/.test(inputElemType)){bool=inputElem.checkValidity&&inputElem.checkValidity()===!1}else{bool=inputElem.value!=smile}}
inputs[props[i]]=!!bool}
return inputs})(inputtypes);function contains(str,substr){return!!~(''+str).indexOf(substr)};Modernizr.addTest('hsla',function(){var style=createElement('a').style;style.cssText='background-color:hsla(120,40%,100%,.5)';return contains(style.backgroundColor,'rgba')||contains(style.backgroundColor,'hsla')});var newSyntax='CSS' in window&&'supports' in window.CSS;var oldSyntax='supportsCSS' in window;Modernizr.addTest('supports',newSyntax||oldSyntax);var toStringFn=({}).toString;Modernizr.addTest('svgclippaths',function(){return!!document.createElementNS&&/SVGClipPath/.test(toStringFn.call(document.createElementNS('http://www.w3.org/2000/svg','clipPath')))});Modernizr.addTest('smil',function(){return!!document.createElementNS&&/SVGAnimate/.test(toStringFn.call(document.createElementNS('http://www.w3.org/2000/svg','animate')))});var cssomPrefixes=(ModernizrProto._config.usePrefixes?omPrefixes.split(' '):[]);ModernizrProto._cssomPrefixes=cssomPrefixes;var atRule=function(prop){var length=prefixes.length;var cssrule=window.CSSRule;var rule;if(typeof cssrule==='undefined'){return undefined}
if(!prop){return!1}
prop=prop.replace(/^@/,'');rule=prop.replace(/-/g,'_').toUpperCase()+'_RULE';if(rule in cssrule){return '@'+prop}
for(var i=0;i<length;i++){var prefix=prefixes[i];var thisRule=prefix.toUpperCase()+'_'+rule;if(thisRule in cssrule){return '@-'+prefix.toLowerCase()+'-'+prop}}
return!1};ModernizrProto.atRule=atRule;function getBody(){var body=document.body;if(!body){body=createElement(isSVG?'svg':'body');body.fake=!0}
return body};function injectElementWithStyles(rule,callback,nodes,testnames){var mod='modernizr';var style;var ret;var node;var docOverflow;var div=createElement('div');var body=getBody();if(parseInt(nodes,10)){while(nodes--){node=createElement('div');node.id=testnames?testnames[nodes]:mod+(nodes+1);div.appendChild(node)}}
style=createElement('style');style.type='text/css';style.id='s'+mod;(!body.fake?div:body).appendChild(style);body.appendChild(div);if(style.styleSheet){style.styleSheet.cssText=rule}else{style.appendChild(document.createTextNode(rule))}
div.id=mod;if(body.fake){body.style.background='';body.style.overflow='hidden';docOverflow=docElement.style.overflow;docElement.style.overflow='hidden';docElement.appendChild(body)}
ret=callback(div,rule);if(body.fake){body.parentNode.removeChild(body);docElement.style.overflow=docOverflow;docElement.offsetHeight}else{div.parentNode.removeChild(div)}
return!!ret};var testStyles=ModernizrProto.testStyles=injectElementWithStyles;var blacklist=(function(){var ua=navigator.userAgent;var webos=ua.match(/w(eb)?osbrowser/gi);var wppre8=ua.match(/windows phone/gi)&&ua.match(/iemobile\/([0-9])+/gi)&&parseFloat(RegExp.$1)>=9;return webos||wppre8}());if(blacklist){Modernizr.addTest('fontface',!1)}else{testStyles('@font-face {font-family:"font";src:url("https://")}',function(node,rule){var style=document.getElementById('smodernizr');var sheet=style.sheet||style.styleSheet;var cssText=sheet?(sheet.cssRules&&sheet.cssRules[0]?sheet.cssRules[0].cssText:sheet.cssText||''):'';var bool=/src/i.test(cssText)&&cssText.indexOf(rule.split(' ')[0])===0;Modernizr.addTest('fontface',bool)})};testStyles('#modernizr{font:0/0 a}#modernizr:after{content:":)";visibility:hidden;font:7px/1 a}',function(node){Modernizr.addTest('generatedcontent',node.offsetHeight>=6)});var modElem={elem:createElement('modernizr')};Modernizr._q.push(function(){delete modElem.elem});var mStyle={style:modElem.elem.style};Modernizr._q.unshift(function(){delete mStyle.style});function fnBind(fn,that){return function(){return fn.apply(that,arguments)}};function testDOMProps(props,obj,elem){var item;for(var i in props){if(props[i]in obj){if(elem===!1){return props[i]}
item=obj[props[i]];if(is(item,'function')){return fnBind(item,elem||obj)}
return item}}
return!1};function domToCSS(name){return name.replace(/([A-Z])/g,function(str,m1){return '-'+m1.toLowerCase()}).replace(/^ms-/,'-ms-')};function computedStyle(elem,pseudo,prop){var result;if('getComputedStyle' in window){result=getComputedStyle.call(window,elem,pseudo);var console=window.console;if(result!==null){if(prop){result=result.getPropertyValue(prop)}}else{if(console){var method=console.error?'error':'log';console[method].call(console,'getComputedStyle returning null, its possible modernizr test results are inaccurate')}}}else{result=!pseudo&&elem.currentStyle&&elem.currentStyle[prop]}
return result};function nativeTestProps(props,value){var i=props.length;if('CSS' in window&&'supports' in window.CSS){while(i--){if(window.CSS.supports(domToCSS(props[i]),value)){return!0}}
return!1}
else if('CSSSupportsRule' in window){var conditionText=[];while(i--){conditionText.push('('+domToCSS(props[i])+':'+value+')')}
conditionText=conditionText.join(' or ');return injectElementWithStyles('@supports ('+conditionText+') { #modernizr { position: absolute; } }',function(node){return computedStyle(node,null,'position')=='absolute'})}
return undefined};function testProps(props,prefixed,value,skipValueTest){skipValueTest=is(skipValueTest,'undefined')?!1:skipValueTest;if(!is(value,'undefined')){var result=nativeTestProps(props,value);if(!is(result,'undefined')){return result}}
var afterInit,i,propsLength,prop,before;var elems=['modernizr','tspan','samp'];while(!mStyle.style&&elems.length){afterInit=!0;mStyle.modElem=createElement(elems.shift());mStyle.style=mStyle.modElem.style}
function cleanElems(){if(afterInit){delete mStyle.style;delete mStyle.modElem}}
propsLength=props.length;for(i=0;i<propsLength;i++){prop=props[i];before=mStyle.style[prop];if(contains(prop,'-')){prop=cssToDOM(prop)}
if(mStyle.style[prop]!==undefined){if(!skipValueTest&&!is(value,'undefined')){try{mStyle.style[prop]=value}catch(e){}
if(mStyle.style[prop]!=before){cleanElems();return prefixed=='pfx'?prop:!0}}
else{cleanElems();return prefixed=='pfx'?prop:!0}}}
cleanElems();return!1};var testProp=ModernizrProto.testProp=function(prop,value,useValue){return testProps([prop],undefined,value,useValue)};Modernizr.addTest('textshadow',testProp('textShadow','1px 1px'));function testPropsAll(prop,prefixed,elem,value,skipValueTest){var ucProp=prop.charAt(0).toUpperCase()+prop.slice(1),props=(prop+' '+cssomPrefixes.join(ucProp+' ')+ucProp).split(' ');if(is(prefixed,'string')||is(prefixed,'undefined')){return testProps(props,prefixed,value,skipValueTest)}else{props=(prop+' '+(domPrefixes).join(ucProp+' ')+ucProp).split(' ');return testDOMProps(props,prefixed,elem)}}
ModernizrProto.testAllProps=testPropsAll;var prefixed=ModernizrProto.prefixed=function(prop,obj,elem){if(prop.indexOf('@')===0){return atRule(prop)}
if(prop.indexOf('-')!=-1){prop=cssToDOM(prop)}
if(!obj){return testPropsAll(prop,'pfx')}else{return testPropsAll(prop,obj,elem)}};Modernizr.addAsyncTest(function(){var indexeddb;try{indexeddb=prefixed('indexedDB',window)}catch(e){}
if(!!indexeddb){var testDBName='modernizr-'+Math.random();var req=indexeddb.open(testDBName);req.onerror=function(){if(req.error&&req.error.name==='InvalidStateError'){addTest('indexeddb',!1)}else{addTest('indexeddb',!0);detectDeleteDatabase(indexeddb,testDBName)}};req.onsuccess=function(){addTest('indexeddb',!0);detectDeleteDatabase(indexeddb,testDBName)}}else{addTest('indexeddb',!1)}});function detectDeleteDatabase(indexeddb,testDBName){var deleteReq=indexeddb.deleteDatabase(testDBName);deleteReq.onsuccess=function(){addTest('indexeddb.deletedatabase',!0)};deleteReq.onerror=function(){addTest('indexeddb.deletedatabase',!1)}};function testAllProps(prop,value,skipValueTest){return testPropsAll(prop,undefined,undefined,value,skipValueTest)}
ModernizrProto.testAllProps=testAllProps;Modernizr.addTest('cssanimations',testAllProps('animationName','a',!0));Modernizr.addTest('backgroundsize',testAllProps('backgroundSize','100%',!0));Modernizr.addTest('borderimage',testAllProps('borderImage','url() 1',!0));Modernizr.addTest('borderradius',testAllProps('borderRadius','0px',!0));Modernizr.addTest('boxshadow',testAllProps('boxShadow','1px 1px',!0));(function(){Modernizr.addTest('csscolumns',function(){var bool=!1;var test=testAllProps('columnCount');try{bool=!!test
if(bool){bool=new Boolean(bool)}}catch(e){}
return bool});var props=['Width','Span','Fill','Gap','Rule','RuleColor','RuleStyle','RuleWidth','BreakBefore','BreakAfter','BreakInside'];var name,test;for(var i=0;i<props.length;i++){name=props[i].toLowerCase();test=testAllProps('column'+props[i]);if(name==='breakbefore'||name==='breakafter'||name=='breakinside'){test=test||testAllProps(props[i])}
Modernizr.addTest('csscolumns.'+name,test)}})();Modernizr.addTest('flexbox',testAllProps('flexBasis','1px',!0));Modernizr.addTest('cssreflections',testAllProps('boxReflect','above',!0));Modernizr.addTest('csstransforms',function(){return navigator.userAgent.indexOf('Android 2.')===-1&&testAllProps('transform','scale(1)',!0)});Modernizr.addTest('csstransforms3d',function(){var ret=!!testAllProps('perspective','1px',!0);var usePrefix=Modernizr._config.usePrefixes;if(ret&&(!usePrefix||'webkitPerspective' in docElement.style)){var mq;var defaultStyle='#modernizr{width:0;height:0}';if(Modernizr.supports){mq='@supports (perspective: 1px)'}else{mq='@media (transform-3d)';if(usePrefix){mq+=',(-webkit-transform-3d)'}}
mq+='{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}';testStyles(defaultStyle+mq,function(elem){ret=elem.offsetWidth===7&&elem.offsetHeight===18})}
return ret});Modernizr.addTest('csstransitions',testAllProps('transition','all',!0));testRunner();setClasses(classes);delete ModernizrProto.addTest;delete ModernizrProto.addAsyncTest;for(var i=0;i<Modernizr._q.length;i++){Modernizr._q[i]()}
window.Modernizr=Modernizr})(window,document)
