(function(t){function e(e){for(var r,a,c=e[0],s=e[1],u=e[2],l=0,b=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&b.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);d&&d(e);while(b.length)b.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,c=1;c<n.length;c++){var s=n[c];0!==o[s]&&(r=!1)}r&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},o={app:0},i=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/ui/debug-1.0/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=s;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"003f":function(t,e,n){},"470f":function(t,e,n){"use strict";n("fdbf")},"84e6":function(t,e,n){},b4f3:function(t,e,n){"use strict";n("84e6")},c0cb:function(t,e,n){"use strict";n("003f")},cd49:function(t,e,n){"use strict";n.r(e);var r={};n.r(r),n.d(r,"getStreamsObtained",(function(){return s})),n.d(r,"getStreams",(function(){return u})),n.d(r,"getStream",(function(){return d})),n.d(r,"getVideoURL",(function(){return l})),n.d(r,"getVideoURLObtained",(function(){return b})),n.d(r,"getDataURL",(function(){return f})),n.d(r,"getDataURLObtained",(function(){return m}));var o={};n.r(o),n.d(o,"login",(function(){return O})),n.d(o,"clear",(function(){return h})),n.d(o,"deleteToken",(function(){return p})),n.d(o,"deleteBearer",(function(){return v}));var i={};n.r(i),n.d(i,"deleteStreams",(function(){return j})),n.d(i,"setStreams",(function(){return g})),n.d(i,"setVideoURL",(function(){return y})),n.d(i,"deleteVideoURL",(function(){return L})),n.d(i,"setDataURL",(function(){return R})),n.d(i,"deleteDataURL",(function(){return U}));n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("f2bf"),c=n("5502"),s=(n("4de4"),function(t){return t.streamsObtained}),u=function(t){return t.streams},d=function(t,e){return function(e){if(!t.streamsObtained)return{};var n=t.streams.filter((function(t){return t.for==e}));return n.length<1?{}:n[0]}},l=function(t){return t.videoURL},b=function(t){return t.videoURLObtained},f=function(t){return t.dataURL},m=function(t){return t.dataURLObtained},O=function(t){var e=t.commit;e("login")},h=function(t){var e=t.commit;e("clear")},p=function(t){var e=t.commit;e("deleteToken")},v=function(t){var e=t.commit;e("deleteBearer")},j=function(t){t.streams={},t.streamsObtained=!1},g=function(t,e){t.streams=e,t.streamsObtained=!0},y=function(t,e){t.videoURL=e,t.videoURLObtained=!0},L=function(t,e){t.videoURL="",t.videoURLObtained=!1},R=function(t,e){t.dataURL=e,t.dataURLObtained=!0},U=function(t,e){t.dataURL="",t.dataURLObtained=!1},w={streams:[],streamsObtained:!1,videoURL:"",videoURLObtained:!1,dataURL:"",dataURLObtained:!1},S=Object(c["b"])({state:w,getters:r,actions:o,mutations:i,plugins:[Object(c["a"])()]}),k=S,x=Object(a["h"])("img",{width:"300",src:"https://assets.practable.io/images/common/practable-logo-3-1980x660.png"},null,-1),q={id:"nav"},$=Object(a["g"])("Connections"),D=Object(a["g"])(" | "),K=Object(a["g"])("About"),V=Object(a["h"])("p",{style:{"margin-bottom":"0.7cm"}},null,-1);function A(t,e,n,r,o,i){var c=Object(a["v"])("router-link"),s=Object(a["v"])("router-view");return Object(a["q"])(),Object(a["d"])(a["a"],null,[x,Object(a["h"])("div",q,[Object(a["h"])(c,{to:"/"},{default:Object(a["A"])((function(){return[$]})),_:1}),D,Object(a["h"])(c,{to:"/about"},{default:Object(a["A"])((function(){return[K]})),_:1})]),V,Object(a["h"])(s)],64)}var T={name:"App",components:{}};n("c0cb");T.render=A;var C=T,E=n("6c02"),P={class:"container-fluid align-center"},_=Object(a["h"])("h1",null,"About",-1),M=Object(a["h"])("p",null," This is a diagnostic interface to show developers what information the booking system has passed to their user interface. User interfaces typically require to connect to video and data streams, using authentication, with time limits and with different read/write scopes. If this page is working, but your user interface for same piece of hardware is not, then check again your implementation of the stream decoding, and (re)connection process, using this page as an example. Note that this interface implements both store and router to mimic a typical interface, placing the query params in the store upon loading, so that when using the router to navigate between pages, the streams information is not lost.",-1);function B(t,e){return Object(a["q"])(),Object(a["d"])("div",P,[_,M])}const I={};I.render=B;var H=I;function J(t,e){return Object(a["q"])(),Object(a["d"])("h1",null,"Oops, it looks like the page you're looking for doesn't exist.")}const W={};W.render=J;var z=W,N={class:"row"},F={class:"col"},G=Object(a["h"])("h1",null," Connection diagnostics ",-1),Q={class:"col"},X=Object(a["h"])("h1",null," Video ",-1),Y={class:"col"},Z=Object(a["h"])("h1",null," Data ",-1);function tt(t,e,n,r,o,i){var c=Object(a["v"])("display-connections"),s=Object(a["v"])("display-video"),u=Object(a["v"])("display-data");return Object(a["q"])(),Object(a["d"])("div",N,[Object(a["h"])("div",F,[G,Object(a["h"])(c,{streams:t.decodedStreams},null,8,["streams"])]),Object(a["h"])("div",Q,[X,Object(a["h"])(s,{stream:t.videoStream},null,8,["stream"])]),Object(a["h"])("div",Y,[Z,Object(a["h"])(u,{stream:t.dataStream},null,8,["stream"])])])}function et(t,e,n,r,o,i){var c=Object(a["v"])("display-connection");return Object(a["q"])(!0),Object(a["d"])(a["a"],null,Object(a["u"])(t.streams,(function(t,e){return Object(a["q"])(),Object(a["d"])(c,{stream:t,key:t.for},null,8,["stream"])})),128)}function nt(t,e,n,r,o,i){return Object(a["q"])(),Object(a["d"])(a["a"],null,[Object(a["h"])("h3",null,Object(a["x"])(t.stream.for),1),Object(a["h"])("p",null,Object(a["x"])(t.stream.verb)+" to "+Object(a["x"])(t.stream.url),1),Object(a["h"])("p",null," Scopes: "+Object(a["x"])(t.stream.permission.scopes),1),Object(a["h"])("p",null," Token: "+Object(a["x"])(t.tokenSnippet),1)],64)}n("fb6a"),n("d3b7"),n("25f0");var rt=n("1232"),ot=Object(a["i"])({name:"DisplayConnection",props:["stream"],computed:{decoded:function(){try{return JSON.stringify(Object(rt["a"])(this.stream.token),void 0,2)}catch(t){return"could not decode token"}},tokenSnippet:function(){if(this.stream.hasOwnProperty("token")){var t=this.stream.token,e=t.substring(0,6),n=t.length.toString(),r=t.slice(t.length-6);return e+"..."+r+" ("+n+" chars)"}return"(none supplied)"}}});ot.render=nt;var it=ot,at=Object(a["i"])({name:"DisplayConnections",props:["streams"],components:{"display-connection":it}});at.render=et;var ct=at;function st(t,e,n,r,o,i){var c=Object(a["v"])("video-element");return Object(a["q"])(),Object(a["d"])(a["a"],null,[Object(a["h"])("div",null,[t.urlOK?(Object(a["q"])(),Object(a["d"])(c,{key:0,url:t.url},null,8,["url"])):Object(a["e"])("",!0)]),Object(a["g"])(" "+Object(a["x"])(t.url),1)],64)}var ut={id:"videoWrapper"};function dt(t,e,n,r,o,i){return Object(a["q"])(),Object(a["d"])("div",ut)}var lt=n("7a33"),bt=n.n(lt),ft=Object(a["i"])({name:"VideoElement",props:["url"],mounted:function(){this.player=new bt.a.VideoElement("#videoWrapper",this.url,{autoplay:!0,chunkSize:10485760})}});n("470f");ft.render=dt;var mt=ft,Ot=n("bc3a"),ht=n.n(Ot),pt=Object(a["i"])({name:"DisplayVideo",components:{"video-element":mt},props:["stream"],computed:{urlOK:function(){return this.$store.getters.getVideoURLObtained},streamOK:function(){return this.stream},url:function(){return this.$store.getters.getVideoURL}},watch:{streamOK:function(t,e){if(t){var n=this.stream.url,r=this.stream.token,o=this.$store;ht.a.post(n,{},{headers:{Authorization:r}}).then((function(t){o.commit("setVideoURL",t.data.uri)})).catch((function(t){return console.log(t)}))}},urlOK:function(t,e){t&&console.log("get videoURL",this.urlOK,this.url)}}});pt.render=st;var vt=pt;function jt(t,e,n,r,o,i){var c=Object(a["v"])("data-element");return Object(a["q"])(),Object(a["d"])(a["a"],null,[t.urlOK?(Object(a["q"])(),Object(a["d"])(c,{key:0,url:t.url},null,8,["url"])):Object(a["e"])("",!0),Object(a["g"])(" "+Object(a["x"])(t.url),1)],64)}var gt={class:"col"},yt=Object(a["f"])('<div class="row"><h4> Read </h4></div><div class="row"><div id="data-box" class="textbox" contenteditable="true"></div></div><div class="row"><h4> Write </h4></div><div class="row"><div id="cmd-box" class="textbox" contenteditable="true"></div></div>',4),Lt={class:"row"},Rt=Object(a["g"])(" Clear "),Ut=Object(a["h"])("span",{class:"caret"},null,-1),wt=Object(a["g"])(" Send "),St=Object(a["h"])("span",{class:"caret"},null,-1);function kt(t,e,n,r,o,i){return Object(a["q"])(),Object(a["d"])("div",gt,[yt,Object(a["h"])("div",Lt,[Object(a["h"])("button",{type:"button",onClick:e[1]||(e[1]=function(){return t.clear&&t.clear.apply(t,arguments)}),class:"btn btn-secondary",id:"cmd-btn"},[Rt,Ut]),Object(a["h"])("button",{type:"button",onClick:e[2]||(e[2]=function(){return t.send&&t.send.apply(t,arguments)}),class:"btn btn-primary",id:"cmd-btn"},[wt,St])])])}var xt=Object(a["i"])({name:"DataElement",props:["url"],data:function(){return{connection:null}},methods:{send:function(){var t=document.getElementById("cmd-box");t&&this.connection&&this.connection.send(t.innerHTML)},clear:function(){var t=document.getElementById("cmd-box");t&&(t.innerHTML="")}},mounted:function(){this.connection=new WebSocket(this.url),console.log("opening data socket"),this.connection.addEventListener("open",(function(t){console.log("data connection open")})),this.connection.addEventListener("message",(function(t){var e=document.getElementById("data-box");e&&(e.innerHTML=t.data)}))}});n("b4f3");xt.render=kt;var qt=xt,$t=Object(a["i"])({name:"DisplayData",components:{"data-element":qt},props:["stream"],computed:{urlOK:function(){return this.$store.getters.getDataURLObtained},streamOK:function(){return this.stream},url:function(){return this.$store.getters.getDataURL}},watch:{streamOK:function(t,e){if(t){var n=this.stream.url,r=this.stream.token,o=this.$store;ht.a.post(n,{},{headers:{Authorization:r}}).then((function(t){o.commit("setDataURL",t.data.uri)})).catch((function(t){return console.log(t)}))}},urlOK:function(t,e){t&&console.log("get dataURL",this.urlOK,this.url)}}});$t.render=jt;var Dt=$t,Kt=Object(a["i"])({name:"Activity",components:{"display-connections":ct,"display-video":vt,"display-data":Dt},computed:{id:function(){return this.$route.params.id},decodedStreams:function(){return this.$store.getters.getStreams},streamsObtained:function(){return this.$store.getters.getStreamsObtained},videoStream:function(){return this.$store.getters.getStream("video")},dataStream:function(){return this.$store.getters.getStream("data")}},mounted:function(){if(!this.streamsObtained)try{var t=JSON.parse(decodeURIComponent(String(this.$route.query.streams)));this.$store.commit("setStreams",t)}catch(e){console.log("error decoding streams"),this.$store.commit("deleteStreams")}},watch:{$route:function(t,e){console.log("Activity:",t,e)}}});Kt.render=tt;var Vt=Kt,At=[{path:"/",name:"Home",component:Vt},{path:"/about",name:"about",component:H},{path:"/:catchAll(.*)",component:z}],Tt=Object(E["a"])({history:Object(E["b"])("/ui/debug-1.0/"),routes:At}),Ct=Tt,Et=n("2510"),Pt=(n("4989"),n("ab8b"),Object(a["c"])(C));Pt.use(k).use(Ct).use(Et["a"]),Pt.mount("#app")},fdbf:function(t,e,n){}});
//# sourceMappingURL=app.c69624f5.js.map