(this["webpackJsonpdream-journal"]=this["webpackJsonpdream-journal"]||[]).push([[0],{25:function(e,t,a){e.exports=a(51)},30:function(e,t,a){},31:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(22),i=a.n(l),o=(a(30),a(2)),c=a(3),u=a(5),s=a(4),m=(a(31),a(23)),d=a.n(m),p=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={img:[]},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;d()({url:"https://api.unsplash.com/photos/random",method:"GET",responseType:"JSON",params:{client_id:"cDOViFNyBQD9qXEF626qEz25DTg6KOHx8b_2oq7mPdw",count:"1",query:"galaxy"}}).then((function(t){var a=t.data[0].urls.regular;e.setState({img:a}),console.log(t)}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"background"},r.a.createElement("img",{src:this.state.img}),r.a.createElement("h1",{className:"header-title"},"Lucid"))}}]),a}(n.Component),h=a(24),f=a(8),v=a.n(f);a(49);v.a.initializeApp({apiKey:"AIzaSyCgy_W3eD6pW_EGjavWGXG5Ty28LfeKaHA",authDomain:"dream-journal-779f3.firebaseapp.com",databaseURL:"https://dream-journal-779f3.firebaseio.com",projectId:"dream-journal-779f3",storageBucket:"dream-journal-779f3.appspot.com",messagingSenderId:"887214919631",appId:"1:887214919631:web:f37c599e097702249accba"});var b=v.a,E=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).handleChange=function(t){e.setState(Object(h.a)({},t.target.name,t.target.value))},e.validate=function(){var t="";return 0!==e.state.titleInput.length&&0!==e.state.dreamInput.length||(t="Input fields cannot be blank"),!t||(e.setState({inputError:t}),!1)},e.handleClick=function(t){t.preventDefault(),e.validate()&&e.setState({titleInput:"",dreamInput:"",inputError:""});var a=b.database().ref(),n={title:e.state.titleInput,desc:e.state.dreamInput};a.push(n),e.setState({titleInput:"",dreamInput:"",inputError:""})},e.deleteDream=function(e){b.database().ref().child(e).remove()},e.state={dreams:[],titleInput:"",dreamInput:"",inputError:""},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;b.database().ref().on("value",(function(t){var a=[],n=t.val();for(var r in n)a.push({content:n[r],id:r});e.setState({dreams:a})}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"dreamDiv"},r.a.createElement("input",{value:this.state.titleInput,onChange:this.handleChange,name:"titleInput",type:"text"}),r.a.createElement("br",null),r.a.createElement("input",{value:this.state.dreamInput,onChange:this.handleChange,name:"dreamInput",type:"text"}),r.a.createElement("br",null),r.a.createElement("button",{onClick:this.handleClick},"Add Dream"),r.a.createElement("ul",null,this.state.dreams.map((function(t){return r.a.createElement("li",{key:t.id},r.a.createElement("p",null,t.content.title),r.a.createElement("p",null,t.content.desc),r.a.createElement("button",{onClick:function(){return e.deleteDream(t.id)}},"Delete"))}))))}}]),a}(n.Component),g=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"dreamDiv"},r.a.createElement(p,null),r.a.createElement(E,null),r.a.createElement("footer",null,r.a.createElement("p",null,"hctr")))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.c41ae990.chunk.js.map