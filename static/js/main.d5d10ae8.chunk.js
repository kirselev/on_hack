(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{154:function(t,e,a){t.exports=a(254)},253:function(t,e,a){t.exports=a.p+"static/media/miyagi.90d98937.mp3"},254:function(t,e,a){"use strict";a.r(e);a(155),a(206);var n=a(0),r=a.n(n),o=a(41),s=a.n(o),l=a(51),i=a.n(l),c=a(59),u=a(17),m=a(18),p=a(20),h=a(19),d=a(21),g=(a(49),a(3)),b=a(33),S=a.n(b),f=a(58),E=a.n(f),v=a(73),y=a.n(v),k=(a(240),a(34)),w=a.n(k),O=[{url:"https://raw.githubusercontent.com/maximzubkov/on_hack/master/src/audio/miyagi.mp3",title:"miyagi",duration:0},{url:"https://raw.githubusercontent.com/scottschiller/SoundManager2/master/demo/_mp3/1hz-10khz-sweep.mp3",title:"1hz-10khz sweep",duration:0},{url:"https://raw.githubusercontent.com/scottschiller/SoundManager2/master/demo/_mp3/440hz.mp3",title:"440hz",duration:0},{url:"https://raw.githubusercontent.com/scottschiller/SoundManager2/master/demo/_mp3/880hz.mp3",title:"880hz",duration:0},{url:"https://raw.githubusercontent.com/scottschiller/SoundManager2/master/demo/_mp3/background0.mp3",title:"background 0",duration:0},{url:"https://raw.githubusercontent.com/scottschiller/SoundManager2/master/demo/_mp3/background1.mp3",title:"background 1",duration:0},{url:"https://raw.githubusercontent.com/scottschiller/SoundManager2/master/demo/_mp3/background2.mp3",title:"background 2",duration:0},{url:"https://raw.githubusercontent.com/scottschiller/SoundManager2/master/demo/_mp3/bass.mp3",title:"bass",duration:0},{url:"https://raw.githubusercontent.com/scottschiller/SoundManager2/master/demo/_mp3/button-0.mp3",title:"button 0",duration:0},{url:"https://raw.githubusercontent.com/scottschiller/SoundManager2/master/demo/_mp3/button-1.mp3",title:"button 1",duration:0},{url:"https://raw.githubusercontent.com/scottschiller/SoundManager2/master/demo/_mp3/click-high.mp3",title:"click high",duration:0},{url:"https://raw.githubusercontent.com/scottschiller/SoundManager2/master/demo/_mp3/click-low.mp3",title:"click low",duration:0},{url:"https://raw.githubusercontent.com/scottschiller/SoundManager2/master/demo/_mp3/coins.mp3",title:"coins",duration:0},{url:"https://raw.githubusercontent.com/scottschiller/SoundManager2/master/demo/_mp3/fancy-beer-bottle-pop.mp3",title:"fancy beer bottle pop",duration:0},{url:"https://raw.githubusercontent.com/scottschiller/SoundManager2/master/demo/_mp3/going_outside.mp3",title:"going outside",duration:0},{url:"https://raw.githubusercontent.com/scottschiller/SoundManager2/master/demo/_mp3/mak.mp3",title:"mak",duration:0},{url:"https://raw.githubusercontent.com/scottschiller/SoundManager2/master/demo/_mp3/mouseover.mp3",title:"mouseover",duration:0},{url:"https://raw.githubusercontent.com/scottschiller/SoundManager2/master/demo/_mp3/mouseover2.mp3",title:"mouseover 2",duration:0},{url:"https://raw.githubusercontent.com/scottschiller/SoundManager2/master/demo/_mp3/mouseover3.mp3",title:"mouseover 3",duration:0},{url:"https://raw.githubusercontent.com/scottschiller/SoundManager2/master/demo/_mp3/office_lobby.mp3",title:"office lobby",duration:0},{url:"https://raw.githubusercontent.com/scottschiller/SoundManager2/master/demo/_mp3/rain.mp3",title:"rain",duration:0},{url:"https://raw.githubusercontent.com/scottschiller/SoundManager2/master/demo/_mp3/select.mp3",title:"select",duration:0},{url:"https://raw.githubusercontent.com/scottschiller/SoundManager2/master/demo/_mp3/sine, square, sawtooth, rando.mp3",title:"sine, square, sawtooth, rando",duration:0},{url:"https://raw.githubusercontent.com/scottschiller/SoundManager2/master/demo/_mp3/walking.mp3",title:"walking",duration:0}],j=a(28),P=a.n(j),M=(a(243),a(27)),C=a.n(M),_=(a(50),a(46)),z=a.n(_);Object(g.z)();function A(t){return t.date.toLocaleTimeString()}r.a.Component;var D=a(37);Object(g.z)();var G=function(t){function e(t){var a;return Object(u.a)(this,e),(a=Object(p.a)(this,Object(h.a)(e).call(this,t))).state={firstEntry:!0,lat:0,long:0,currentGeo:null,coordinates:null,draggingList:[2,3,1,4,5],activePanel:"start"},C.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppGeodataResult":a.setState({lat:t.detail.data.lat,long:t.detail.data.long,firstEntry:!1,currentGeo:{center:[t.detail.data.lat,t.detail.data.long],zoom:15},coordinates:[[t.detail.data.lat,t.detail.data.long]]});break;default:console.log("error")}C.a.send("VKWebAppGetGeodata",{})}),a}return Object(d.a)(e,t),Object(m.a)(e,[{key:"componentDidMount",value:function(){var t=this;this.timerID=setInterval(function(){return t.tick()},1e4)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){C.a.send("VKWebAppGetGeodata",{})}},{key:"render",value:function(){return r.a.createElement(g.y,{activePanel:this.state.activePanel},r.a.createElement(g.s,{id:"start"},r.a.createElement(g.t,null,"\u0412\u0440\u0435\u043c\u044f \u0438 \u0413\u0435\u043e"),r.a.createElement(g.h,null,r.a.createElement(g.i,null,"\u041f\u043b\u0435\u0439\u043b\u0438\u0441\u0442\u044b"),this.state.currentGeo&&r.a.createElement(D.c,null,r.a.createElement(g.f,null,r.a.createElement(D.a,{defaultState:this.state.currentGeo},this.state.coordinates.map(function(t){return r.a.createElement(D.b,{geometry:t})}))))),r.a.createElement(g.n,null,r.a.createElement(g.c,{asideContent:r.a.createElement(g.x,null)},"Heatmap"),r.a.createElement(g.c,{expandable:!0,onClick:this.props.go,"data-to":"way"},"\u041f\u043e\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u043c\u0430\u0440\u0448\u0440\u0443\u0442"),this.props.player)))}}]),e}(r.a.Component),x=a(74),L=a.n(x),I=a(75),R=a.n(I);a(248);function U(t,e){return r.a.createElement(g.h,null,r.a.createElement(g.n,null,r.a.createElement(g.m,{href:"#",onClick:function(t){t.preventDefault(),e()}},t)))}new Intl.NumberFormat([],{minimumFractionDigits:2});var T=function(t){function e(){return Object(u.a)(this,e),Object(p.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(m.a)(e,[{key:"render",value:function(){return r.a.createElement(g.f,null,this.renderControls())}},{key:"renderControls",value:function(){var t={play:this.props.playStatus===P.a.status.STOPPED,stop:this.props.playStatus!==P.a.status.STOPPED,pause:this.props.playStatus===P.a.status.PLAYING,resume:this.props.playStatus===P.a.status.PAUSED};return r.a.createElement(g.f,null,r.a.createElement(g.n,null,t.play&&r.a.createElement(g.c,{before:r.a.createElement(R.a,{width:20,hight:20})},U("Play",this.props.onPlay)),t.stop&&r.a.createElement(g.c,{before:r.a.createElement(L.a,{width:20,hight:20})},U("Stop",this.props.onStop)),t.pause&&r.a.createElement(g.c,{before:r.a.createElement(L.a,{width:20,hight:20})},U("Pause",this.props.onPause)),t.resume&&r.a.createElement(g.c,{before:r.a.createElement(R.a,{width:20,hight:20})},U("Resume",this.props.onResume))),r.a.createElement(g.g,null,r.a.createElement(g.e,{checked:this.props.loop,onChange:this.props.onToggleLoop}," Loop?")))}}]),e}(r.a.Component),H=function(t){function e(){return Object(u.a)(this,e),Object(p.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(m.a)(e,[{key:"render",value:function(){return r.a.createElement(g.v,{placeholder:"Select a song",value:this.props.songs.indexOf(this.props.selectedSong),onChange:this.handleSongChange.bind(this)},this.renderSongOptions())}},{key:"renderSongOptions",value:function(){return this.props.songs.map(function(t,e){return r.a.createElement("option",{key:e,value:e},t.title)})}},{key:"handleSongChange",value:function(t){this.props.onSongSelected(this.props.songs[t.target.value])}}]),e}(r.a.Component),N=(a(249),a(250),a(106)),V=(a(253),Object(g.z)()),W=(r.a.Component,Object(g.z)());r.a.Component;var K=Object(g.z)(),B=function(t){function e(t){var a;return Object(u.a)(this,e),(a=Object(p.a)(this,Object(h.a)(e).call(this,t))).state={props:t,draggingList:[2,3,1,4,5],activePanel:"start"},a}return Object(d.a)(e,t),Object(m.a)(e,[{key:"render",value:function(){var t=this;return r.a.createElement(g.s,{id:this.props.id},r.a.createElement(g.t,{left:r.a.createElement(g.j,{onClick:this.props.go,"data-to":"start"},K===g.k?r.a.createElement(S.a,null):r.a.createElement(w.a,null))}),r.a.createElement(g.h,{title:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u0442\u0435 \u0412\u0430\u0448 \u043c\u0430\u0440\u0448\u0440\u0443\u0442"},r.a.createElement(g.g,null,r.a.createElement(g.v,{top:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043c\u0435\u0441\u0442",placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0447\u0438\u0441\u043b\u043e \u043c\u0435\u0441\u0442"},r.a.createElement("option",{value:"1"},"1"),r.a.createElement("option",{value:"2"},"2"),r.a.createElement("option",{value:"3"},"3"),r.a.createElement("option",{value:"4"},"4"),r.a.createElement("option",{value:"5"},"5"),r.a.createElement("option",{value:"6"},"6"),r.a.createElement("option",{value:"7"},"7"),r.a.createElement("option",{value:"8"},"8"),r.a.createElement("option",{value:"9"},"9"),r.a.createElement("option",{value:"10"},"10"))),r.a.createElement(g.n,null,this.state.draggingList.map(function(e){return r.a.createElement(g.c,{key:e,draggable:!0,onDragFinish:function(e){var a=e.from,n=e.to,r=Object(c.a)(t.state.draggingList);r.splice(a,1),r.splice(n,0,t.state.draggingList[a]),t.setState({draggingList:r})}},e)}))),r.a.createElement(g.h,null,r.a.createElement(g.d,{expandable:!0,onClick:function(){return t.setState({activePanel:"list"})}},"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043e\u0431\u0440\u0430\u0442\u043d\u043e")))}}]),e}(r.a.Component),Y=Object(g.z)(),q=Y!=g.k,F=Y!=g.k,J=function(t){function e(t){var a;return Object(u.a)(this,e),(a=Object(p.a)(this,Object(h.a)(e).call(this,t))).handleSongSelected=function(t){a.setState({currentSong:t,position:0})},a.go=function(t){a.setState({activePanel:t.currentTarget.dataset.to})},a.state={activePanel:"start",fetchedUser:null,activeModal:null,modalHistory:[],currentSong:O[0],position:0,volume:100,playbackRate:1,loop:!1,playStatus:P.a.status.PAUSED},a.modalBack=function(t){a.setActiveModal(a.state.modalHistory[a.state.modalHistory.length-2])},a}return Object(d.a)(e,t),Object(m.a)(e,[{key:"setActiveModal",value:function(t){t=t||null;var e=this.state.modalHistory?Object(c.a)(this.state.modalHistory):[];null===t?e=[]:-1!==e.indexOf(t)?e=e.splice(0,e.indexOf(t)+1):e.push(t),this.setState({activeModal:t,modalHistory:e})}},{key:"componentDidMount",value:function(){var t=this;i.a.subscribe(function(e){switch(e.detail.type){case"VKWebAppGetUserInfoResult":t.setState({fetchedUser:e.detail.data});break;default:console.log(e.detail.type)}}),i.a.send("VKWebAppGetUserInfo",{})}},{key:"getStatusText",value:function(){switch(this.state.playStatus){case P.a.status.PLAYING:return"playing";case P.a.status.PAUSED:return"paused";case P.a.status.STOPPED:return"stopped";default:return"(unknown)"}}},{key:"renderCurrentSong",value:function(){return r.a.createElement("p",null,"Current song ",this.state.currentSong.title,". Song is ",this.getStatusText())}},{key:"render",value:function(){var t=this,e=this.state,a=(e.volume,e.playbackRate),n=e.loop,o=r.a.createElement(g.r,{activeModal:this.state.activeModal},r.a.createElement(g.p,{id:"music",onClose:this.modalBack,header:r.a.createElement(g.q,{left:q&&r.a.createElement(g.j,{onClick:this.modalBack},r.a.createElement(E.a,null)),right:r.a.createElement(g.j,{onClick:this.modalBack},F?"\u0413\u043e\u0442\u043e\u0432\u043e":r.a.createElement(y.a,null))},"\u0424\u0438\u043b\u044c\u0442\u0440\u044b")},r.a.createElement(g.h,{title:"Player"},r.a.createElement(g.f,null,r.a.createElement(H,{songs:O,selectedSong:this.state.currentSong,onSongSelected:this.handleSongSelected}),r.a.createElement(g.f,null,r.a.createElement(g.l,{title:this.state.currentSong.title},r.a.createElement(g.u,{value:this.state.position/this.state.currentSong.duration*100}))),r.a.createElement(g.g,null,r.a.createElement(g.w,{min:0,max:100,value:Number(this.state.volume),onChange:function(e){return t.setState({volume:e})},top:"Volume"})),r.a.createElement(g.g,null,r.a.createElement(g.w,{min:0,max:5,value:Number(this.state.playbackRate),onChange:function(e){return t.setState({playbackRate:e})},top:"Playback Rate"})),r.a.createElement(T,{playStatus:this.state.playStatus,loop:n,onPlay:function(){return t.setState({playStatus:P.a.status.PLAYING})},onPause:function(){return t.setState({playStatus:P.a.status.PAUSED})},onResume:function(){return t.setState({playStatus:P.a.status.PLAYING})},onStop:function(){return t.setState({playStatus:P.a.status.STOPPED,position:0})},onSeek:function(e){return t.setState({position:e})},onToggleLoop:function(e){return t.setState({loop:e.target.checked})},duration:this.state.currentSong?this.state.currentSong.duration:0,position:this.state.position,playbackRate:a})))));return r.a.createElement(g.y,{activePanel:this.state.activePanel,modal:o},r.a.createElement(G,{id:"start",fetchedUser:this.state.fetchedUser,go:this.go}),r.a.createElement(B,{id:"way",go:this.go}))}}]),e}(r.a.Component);i.a.send("VKWebAppInit",{}),s.a.render(r.a.createElement(J,null),document.getElementById("root"))},46:function(t,e,a){t.exports=a.p+"static/media/persik.4e1ec840.png"},50:function(t,e,a){}},[[154,1,2]]]);
//# sourceMappingURL=main.d5d10ae8.chunk.js.map