_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(r.default.useContext(a.AmpStateContext))};var o,r=(o=n("q1tI"))&&o.__esModule?o:{default:o},a=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,o=e.hybrid,r=void 0!==o&&o,a=e.hasQuery,i=void 0!==a&&a;return n||r&&i}},0:function(e,t,n){n("GcxT"),e.exports=n("nOHt")},"1TCz":function(e,t,n){"use strict";function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function r(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.r(t);var a=n("q1tI"),i=n.n(a),c=n("8Kt/"),s=n.n(c),l=n("JDnx"),u=(n("RNiq"),n("MX0m")),f=n.n(u),d=n("YFqc"),p=n.n(d),m=n("wx14"),g=n("zLVn"),v=n("17x9"),h=n.n(v),y=n("TSYQ"),b=n.n(y),x=n("33Jr"),w={tabs:h.a.bool,pills:h.a.bool,vertical:h.a.oneOfType([h.a.bool,h.a.string]),horizontal:h.a.string,justified:h.a.bool,fill:h.a.bool,navbar:h.a.bool,card:h.a.bool,tag:x.c,className:h.a.string,cssModule:h.a.object},j=function(e){var t=e.className,n=e.cssModule,o=e.tabs,r=e.pills,a=e.vertical,c=e.horizontal,s=e.justified,l=e.fill,u=e.navbar,f=e.card,d=e.tag,p=Object(g.a)(e,["className","cssModule","tabs","pills","vertical","horizontal","justified","fill","navbar","card","tag"]),v=Object(x.b)(b()(t,u?"navbar-nav":"nav",!!c&&"justify-content-"+c,function(e){return!1!==e&&(!0===e||"xs"===e?"flex-column":"flex-"+e+"-column")}(a),{"nav-tabs":o,"card-header-tabs":f&&o,"nav-pills":r,"card-header-pills":f&&r,"nav-justified":s,"nav-fill":l}),n);return i.a.createElement(d,Object(m.a)({},p,{className:v}))};j.propTypes=w,j.defaultProps={tag:"ul",vertical:!1};var C=j,O={tag:x.c,active:h.a.bool,className:h.a.string,cssModule:h.a.object},A=function(e){var t=e.className,n=e.cssModule,o=e.active,r=e.tag,a=Object(g.a)(e,["className","cssModule","active","tag"]),c=Object(x.b)(b()(t,"nav-item",!!o&&"active"),n);return i.a.createElement(r,Object(m.a)({},a,{className:c}))};A.propTypes=O,A.defaultProps={tag:"li"};var S=A,_=n("1Yj4"),M=i.a.createElement,I=function(e){var t=Object(a.useContext)(l.a),n=t.user,o=t.isAuthenticated;return console.log("AppContext in Layout"),console.log(l.a),console.log("Layout isAuthenticated:"),console.log(o),M("div",null,M(s.a,null,M("title",null,"Your Fav Rest App"),M("meta",{charSet:"utf-8"}),M("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),M("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",integrity:"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm",crossOrigin:"anonymous"}),M("script",{src:"https://js.stripe.com/v3"})),M("header",{className:"jsx-3796417845"},M(f.a,{id:"3796417845"},["a.jsx-3796417845{color:white;}","h5.jsx-3796417845{color:white;padding-top:11px;}"]),M(C,{className:"navbar navbar-dark bg-dark"},M(S,null,M(p.a,{href:"/"},M("a",{className:"jsx-3796417845 navbar-brand"},"Home"))),M(S,{className:"ml-auto"},n?M("h5",{className:"jsx-3796417845"},n.username):M(p.a,{href:"/register"},M("a",{className:"jsx-3796417845 nav-link"}," Sign up"))),M(S,null,n?M(p.a,{href:"/"},M("a",{onClick:function(){logout(),setUser(null)},className:"jsx-3796417845 nav-link"},"Logout")):M(p.a,{href:"/login"},M("a",{className:"jsx-3796417845 nav-link"},"Sign in"))))),M(_.a,null,e.children))},k=(n("p46w"),i.a.createElement);t.default=function(e){var t=Object(a.useContext)(l.a),n=t.cart,o=t.addItem,i=t.removeItem,c=(t.user,t.setUser),u=Object(a.useState)({cart:n}),f=u[0],d=u[1],p=e.Component,m=e.pageProps;console.log("AppContext:"),console.log(l.a);var g=Object(a.useContext)(l.a);console.log("appContext"),console.log(g),console.log("_app appContext.isAuthenticated"),console.log(g.isAuthenticated);var v=g.isAuthenticated;return console.log("authed"),console.log(v),console.log("_app appContext.user"),console.log(g.user),console.log("_app appContext.currentUser"),console.log(g.currentUser),c=function(e,t){console.log("setUser in app called"),console.log("currentUser (we are in setUser in app btw): "),console.log(e),e&&(t=!0),console.log("isAuthenticated (we are in setUser in app btw): "),console.log(t)},o=function(e){console.log("in AddItem in _app");var t=f.cart.items;console.log("items: "),console.log(t),console.log("items length: "+t.length);var n=!0;if(t.length>0?(console.log("inside the if block"),n=t.find((function(t){return t.id===e.id})),console.log("foundItem: "+n),console.log("item.id: "+e.id),n||(n=!1)):n=!1,console.log("Found Item value: ".concat(JSON.stringify(n))),n)console.log("else block, foundItem is truthy meaning there are things in the cart and the item added matches whats in the cart"),console.log("Total so far:  ".concat(f.cart.total)),a={items:t.map((function(e){return e.id===n.id?Object.assign({},e,{quantity:e.quantity+1}):e})),total:f.cart.total+e.price};else{console.log("if block, foundItem is falsy");var o=JSON.parse(JSON.stringify(e));console.log("temp:"),console.log(o),o.quantity=1;var a={items:[].concat(r(f.cart.items),[o]),total:f.cart.total+e.price};d({cart:a}),console.log("Total items: ".concat(JSON.stringify(a)))}d({cart:a}),console.log("state reset to cart:".concat(JSON.stringify(f)))},i=function(e){var t=f.cart.items,n=t.find((function(t){return t.id===e.id}));if(n.quantity>1)var o={items:t.map((function(e){return e.id===n.id?Object.assign({},e,{quantity:e.quantity-1}):e})),total:f.cart.total-e.price};else{console.log("Try remove item ".concat(JSON.stringify(n)));var r=t.findIndex((function(e){return e.id===n.id}));t.splice(r,1);o={items:t,total:f.cart.total-e.price}}d({cart:o})},k(l.a.Provider,{value:{cart:f.cart,addItem:o,removeItem:i,isAuthenticated:!1,user:!1,setUser:c}},k(s.a,null,k("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",integrity:"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm",crossOrigin:"anonymous"})),k(I,null,k(p,m)))}},"7W2i":function(e,t,n){var o=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=u,t.default=void 0;var o,r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=o?Object.getOwnPropertyDescriptor(e,r):null;a&&(a.get||a.set)?Object.defineProperty(n,r,a):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=(o=n("Xuae"))&&o.__esModule?o:{default:o},i=n("lwAK"),c=n("FYa8"),s=n("/0+H");function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(u(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,o={};return function(r){var a=!0;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){var i=r.key.slice(r.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(r.type){case"title":case"base":t.has(r.type)?a=!1:t.add(r.type);break;case"meta":for(var c=0,s=d.length;c<s;c++){var l=d[c];if(r.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?a=!1:n.add(l);else{var u=r.props[l],f=o[l]||new Set;f.has(u)?a=!1:(f.add(u),o[l]=f)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}function m(e){var t=e.children,n=(0,r.useContext)(i.AmpStateContext),o=(0,r.useContext)(c.HeadManagerContext);return r.default.createElement(a.default,{reduceComponentsToState:p,headManager:o,inAmpMode:(0,s.isInAmpMode)(n)},t)}m.rewind=function(){};var g=m;t.default=g},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var o;t.__esModule=!0,t.HeadManagerContext=void 0;var r=((o=n("q1tI"))&&o.__esModule?o:{default:o}).default.createContext({});t.HeadManagerContext=r},GcxT:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("1TCz")}])},Ijbi:function(e,t,n){var o=n("WkPL");e.exports=function(e){if(Array.isArray(e))return o(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},RIqP:function(e,t,n){var o=n("Ijbi"),r=n("EbDI"),a=n("ZhPi"),i=n("Bnag");e.exports=function(e){return o(e)||r(e)||a(e)||i()}},Xuae:function(e,t,n){"use strict";var o=n("RIqP"),r=n("lwsE"),a=n("W8MJ"),i=(n("PJYZ"),n("7W2i")),c=n("a1gu"),s=n("Nsbk");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=s(e);if(t){var r=s(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var u=n("q1tI"),f=function(e){i(n,e);var t=l(n);function n(e){var a;return r(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(o(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(u.Component);t.default=f},a1gu:function(e,t,n){var o=n("cDf5"),r=n("PJYZ");e.exports=function(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?r(e):t}},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var o;t.__esModule=!0,t.AmpStateContext=void 0;var r=((o=n("q1tI"))&&o.__esModule?o:{default:o}).default.createContext({});t.AmpStateContext=r},p46w:function(e,t,n){var o,r;!function(a){if(void 0===(r="function"===typeof(o=a)?o.call(t,n,t,e):o)||(e.exports=r),!0,e.exports=a(),!!0){var i=window.Cookies,c=window.Cookies=a();c.noConflict=function(){return window.Cookies=i,c}}}((function(){function e(){for(var e=0,t={};e<arguments.length;e++){var n=arguments[e];for(var o in n)t[o]=n[o]}return t}function t(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function n(o){function r(){}function a(t,n,a){if("undefined"!==typeof document){"number"===typeof(a=e({path:"/"},r.defaults,a)).expires&&(a.expires=new Date(1*new Date+864e5*a.expires)),a.expires=a.expires?a.expires.toUTCString():"";try{var i=JSON.stringify(n);/^[\{\[]/.test(i)&&(n=i)}catch(l){}n=o.write?o.write(n,t):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var c="";for(var s in a)a[s]&&(c+="; "+s,!0!==a[s]&&(c+="="+a[s].split(";")[0]));return document.cookie=t+"="+n+c}}function i(e,n){if("undefined"!==typeof document){for(var r={},a=document.cookie?document.cookie.split("; "):[],i=0;i<a.length;i++){var c=a[i].split("="),s=c.slice(1).join("=");n||'"'!==s.charAt(0)||(s=s.slice(1,-1));try{var l=t(c[0]);if(s=(o.read||o)(s,l)||t(s),n)try{s=JSON.parse(s)}catch(u){}if(r[l]=s,e===l)break}catch(u){}}return e?r[e]:r}}return r.set=a,r.get=function(e){return i(e,!1)},r.getJSON=function(e){return i(e,!0)},r.remove=function(t,n){a(t,"",e(n,{expires:-1}))},r.defaults={},r.withConverter=n,r}((function(){}))}))}},[[0,0,1,2,3,6]]]);