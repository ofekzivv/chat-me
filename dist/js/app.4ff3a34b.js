(function(e){function t(t){for(var r,o,c=t[0],u=t[1],i=t[2],l=0,d=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(d.length)d.shift()();return s.push.apply(s,i||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(s.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},s=[];function o(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-1d362db6":"d9a37dbd","chunk-1f34851e":"6316e57e","chunk-75717072":"d2f45133"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=r);var s,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=o(e);var i=new Error;s=function(t){u.onerror=u.onload=null,clearTimeout(l);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+r+": "+s+")",i.name="ChunkLoadError",i.type=r,i.request=s,n[1](i)}a[e]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:u})}),12e4);u.onerror=u.onload=s,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var f=i;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0e21":function(e,t,n){},"32c0":function(e,t,n){"use strict";n("9568")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-layout",{attrs:{view:"lHh Lpr lFf"}},[n("q-header",{staticClass:"glossy",attrs:{elevated:""}},[n("q-toolbar",[e.$route.fullPath.includes("/chat")?n("q-btn",{directives:[{name:"go-back",rawName:"v-go-back.single",modifiers:{single:!0}}],attrs:{icon:"arrow_back",flat:"",dense:"",label:"Back"}}):e._e(),e.$route.fullPath.includes("/home")?n("q-btn",{directives:[{name:"go-back",rawName:"v-go-back.single",modifiers:{single:!0}}],attrs:{icon:"add",flat:"",dense:"",label:"צור קבוצה"}}):e._e(),e.$route.fullPath.includes("/users")?n("q-input",{staticClass:"q-input",attrs:{rounded:"",outlined:"",dir:"rtl",label:": חיפוש",flat:"",dense:"",standout:"bg-white"},on:{input:function(t){return e.startSearch(e.selectedUser)}},model:{value:e.selectedUser,callback:function(t){e.selectedUser=t},expression:"selectedUser"}},[[""!==e.selectedUser?n("q-icon",{staticClass:"icon-close",attrs:{name:"close"},on:{click:function(t){e.selectedUser=""}}}):e._e(),n("q-icon",{staticClass:"icon-search",attrs:{name:"search",color:"dark"}})]],2):e._e(),n("q-toolbar-title",{staticClass:"absolute-center"},[e._v(" "+e._s(e.title)+" ")]),!0===e.isConnected?n("q-btn",{staticClass:"absolute-right q-pr-sm",attrs:{icon:"account_circle",flat:"",dense:"",label:"התנתק"},on:{click:function(t){return e.logout()}}}):e._e()],1)],1),n("q-page-container",[n("router-view")],1)],1)},s=[],o=n("1da1"),c=n("5530"),u=(n("96cf"),n("bb51")),i=n("9c70"),l=n("2f62"),f={name:"LayoutDefault",components:{Home:u["default"]},data:function(){return{isConnected:!0,selectedUser:""}},computed:Object(c["a"])(Object(c["a"])(Object(c["a"])({},Object(l["e"])("users",["users"])),Object(l["c"])("users",["filterSomething"])),{},{title:function(){var e=this.$route.fullPath;return"/"==e?"כניסה":"/home"==e?"דף הבית":"/users"==e?"משתמשים":"/chat/:id"==e?"צאט":void 0}}),methods:Object(c["a"])(Object(c["a"])({},Object(l["d"])("users",["getFilteredUsers"])),{},{startSearch:function(e){this.getFilteredUsers(e)},logout:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,i["a"].LogOut();case 2:return e.isConnected=!1,t.next=5,e.$router.push("/");case 5:case"end":return t.stop()}}),t)})))()}})},d=f,p=(n("32c0"),n("2877")),h=n("4d5a"),m=n("e359"),g=n("65c6"),b=n("9c40"),v=n("27f9"),w=n("0016"),y=n("6ac5"),k=n("09e3"),x=n("2eeb"),O=n("93dc"),U=n.n(O),j=Object(p["a"])(d,a,s,!1,null,"0e8ca83f",null),I=j.exports;U()(j,"components",{QLayout:h["a"],QHeader:m["a"],QToolbar:g["a"],QBtn:b["a"],QInput:v["a"],QIcon:w["a"],QToolbarTitle:y["a"],QPageContainer:k["a"]}),U()(j,"directives",{GoBack:x["a"]});n("d3b7"),n("3ca3"),n("ddb0");var R=n("8c4f");r["a"].use(R["a"]);var P=[{path:"/",name:"login",component:function(){return n.e("chunk-75717072").then(n.bind(null,"a55b"))}},{path:"/home",name:"Home",component:function(){return Promise.resolve().then(n.bind(null,"bb51"))}},{path:"/users",name:"Users",component:function(){return n.e("chunk-1f34851e").then(n.bind(null,"4c7a"))}},{path:"/chat/:uid",name:"Chat",component:function(){return n.e("chunk-1d362db6").then(n.bind(null,"293a"))}}],_=new R["a"]({routes:P}),C=_,M={user:{},userId:""},S={setUser:function(e,t){return e.user=t},setUserStatus:function(e,t){return e.user.online=t},setUserId:function(e,t){return e.userId=t},resetUserId:function(e){return e.userId=""},resetUser:function(e){e.user={}}},q={},A={namespaced:!0,state:M,mutations:S,actions:q},T={users:[],userData:{},statuses:[],filteredUsers:[]},E=(n("4160"),n("159b"),n("f200"));function L(){return E["a"].firebase.firestore().collection("users").get().then((function(e){var t=[];return e.docs.forEach((function(e){var n=e.data();t.push(n)})),t}))}var F={getAllUsers:L},H={getUsers:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t,n){var r,a,s,o,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.next=3,F.getAllUsers();case 3:for(a=e.sent,s=[],o=0;o<a.length;o++)c=a[o],c.uid!==n&&s.push(c);r("setUsers",s);case 7:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}()},$=(n("4de4"),n("ac1f"),n("466d"),n("b0c0"),{setUsers:function(e,t){e.users=t,e.filteredUsers=t},getFilteredUsers:function(e,t){e.filteredUsers=e.users.filter((function(e){return e.name.toLowerCase().match(t.toLowerCase())}))}}),Q={filterSomething:function(e,t){return e.users.filter((function(e){return e.name.match(t)}))}},D={namespaced:!0,state:T,actions:H,mutations:$,getters:Q},B={allMessages:[],message:{},otherUserId:"",image:null,imageUrl:"",viewImage:""};n("d272");function W(e){return N.apply(this,arguments)}function N(){return N=Object(o["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,E["a"].firebase.firestore().collection("test").doc().id;case 2:return t.message.messageId=e.sent,e.next=5,E["a"].firebase.firestore().collection("conversation").doc(window.user.uid).collection("data").doc(t.otherUserId).collection("messages").doc(t.message.messageId).set(t.message)["catch"]((function(e){return console.log("sendMessageFromDb",e)}));case 5:case"end":return e.stop()}}),e)}))),N.apply(this,arguments)}function G(e){return z.apply(this,arguments)}function z(){return z=Object(o["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=[],e.next=3,E["a"].firebase.firestore().collection("conversation").doc(window.user.uid).collection("data").doc(t).collection("messages").get().then((function(e){e.forEach((function(e){var t=e.data();n.push(t)}))}))["catch"]((function(e){return console.error(e)}));case 3:return e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)}))),z.apply(this,arguments)}function J(e){return Y.apply(this,arguments)}function Y(){return Y=Object(o["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=[],e.next=3,E["a"].firebase.firestore().collection("conversation").doc(window.user.uid).collection("data").doc(t).collection("messages").orderBy("createdAt","asc").onSnapshot((function(e){e.docChanges().forEach((function(e){"added"===e.type&&n.push(e.doc.data())}))}));case 3:return e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)}))),Y.apply(this,arguments)}var Z={sendMessageFromDb:W,getRealTimeMessages:J,getAllMessages:G},K={sendMessage:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t,n){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.state,r={},Object.assign(r,n.message),a={otherUserId:n.otherUserId,message:r},e.next=6,Z.sendMessageFromDb(a);case 6:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),getMessages:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t,n){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.next=3,Z.getRealTimeMessages(n);case 3:a=e.sent,r("setMessage",a);case 5:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}()},V={setUserIdOnChat:function(e,t){return e.otherUserId=t},setMessage:function(e,t){return e.allMessages=t},setMessageToAllMessages:function(e,t){return e.allMessages.push(t)},setImage:function(e,t){return e.image=t},setImageUrl:function(e,t){return e.imageUrl=t},setViewImage:function(e,t){return e.viewImage=t}},X={},ee={namespaced:!0,state:B,actions:K,mutations:V,getters:X};r["a"].use(l["a"]);var te=new l["a"].Store({strict:!1,modules:{auth:A,users:D,chat:ee}}),ne=(n("0e21"),n("e54f"),n("573e"),n("b05d"));r["a"].use(ne["a"],{config:{},plugins:{}}),r["a"].config.productionTip=!1,E["a"].firebase.auth().onAuthStateChanged((function(e){window.user=e,new r["a"]({router:C,store:te,render:function(e){return e(I)}}).$mount("#app")}))},9568:function(e,t,n){},"9c70":function(e,t,n){"use strict";var r=n("1da1"),a=(n("96cf"),n("f200"));n("ea7b");function s(){return o.apply(this,arguments)}function o(){return o=Object(r["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=new a["a"].firebase.auth.FacebookAuthProvider,e.next=3,a["a"].firebase.auth().signInWithPopup(t).then((function(e){var t=e.credential;t.accessToken,e.user;window.user=e.user}))["catch"]((function(e){e.code,e.message,e.email,e.credential;console.error(e)}));case 3:case"end":return e.stop()}}),e)}))),o.apply(this,arguments)}function c(){return u.apply(this,arguments)}function u(){return u=Object(r["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=new a["a"].firebase.auth.GoogleAuthProvider,e.next=3,a["a"].firebase.auth().signInWithPopup(t).then((function(e){var t=e.credential;t.accessToken,e.user;window.user=e.user}))["catch"]((function(e){e.code,e.message,e.email,e.credential;console.error(e)}));case 3:case"end":return e.stop()}}),e)}))),u.apply(this,arguments)}function i(e,t){return l.apply(this,arguments)}function l(){return l=Object(r["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a["a"].firebase.auth().signInWithEmailAndPassword(t,n).then((function(e){window.user=e.user}))["catch"]((function(e){alert(e);e.code,e.message;console.error(e)}));case 2:case"end":return e.stop()}}),e)}))),l.apply(this,arguments)}function f(e,t,n){return d.apply(this,arguments)}function d(){return d=Object(r["a"])(regeneratorRuntime.mark((function e(t,n,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a["a"].firebase.auth().createUserWithEmailAndPassword(t,n);case 2:return e.next=5,p(r)["catch"]((function(e){e.message;console.error(e)}));case 5:case"end":return e.stop()}}),e)}))),d.apply(this,arguments)}function p(e){return h.apply(this,arguments)}function h(){return h=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=a["a"].firebase.auth().currentUser,e.next=3,n.updateProfile({displayName:t});case 3:return e.next=5,a["a"].firebase.firestore().collection("users").doc(n.uid).update({name:n.displayName}).then((function(){return console.log(n)}))["catch"]((function(e){return console.error(e)}));case 5:case"end":return e.stop()}}),e)}))),h.apply(this,arguments)}function m(){return g.apply(this,arguments)}function g(){return g=Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a["a"].firebase.auth().signOut().then((function(){}))["catch"]((function(e){console.error(e)}));case 2:case"end":return e.stop()}}),e)}))),g.apply(this,arguments)}t["a"]={facebook:s,google:c,logInEmailPassword:i,registerUser:f,LogOut:m,updateUserProfile:p}},bb51:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home",attrs:{dir:"rtl"}},[n("h1",[e._v("Home Page")])])}],s={name:"Home",components:{}},o=s,c=n("2877"),u=Object(c["a"])(o,r,a,!1,null,null,null);t["default"]=u.exports},f200:function(e,t,n){"use strict";var r=n("260b"),a=(n("ea7b"),n("e71f"),{apiKey:"AIzaSyBHCZpc-sfudxLoZNFg5h2Y-5WHuwDl1_s",authDomain:"chat-me-df2df.firebaseapp.com",projectId:"chat-me-df2df",storageBucket:"chat-me-df2df.appspot.com",messagingSenderId:"927077119765",appId:"1:927077119765:web:20260fb0e1689d82e1db1c",measurementId:"G-3010PY5H5W"});r["a"].initializeApp(a),t["a"]={firebase:r["a"]}}});
//# sourceMappingURL=app.4ff3a34b.js.map