(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{149:function(t,e,a){t.exports=a(247)},246:function(t,e,a){t.exports=a.p+"static/media/miyagi.90d98937.mp3"},247:function(t,e,a){"use strict";a.r(e);a(150),a(201);var n=a(0),r=a.n(n),o=a(40),l=a.n(o),s=a(50),i=a.n(s),c=a(105),u=a(18),m=a(19),p=a(21),h=a(20),d=a(22),g=(a(48),a(3)),b=a(33),E=a.n(b),f=a(57),S=a.n(f),y=a(103),v=a.n(y),k=(a(235),a(34)),w=a.n(k),O=[{url:"https://raw.githubusercontent.com/maximzubkov/on_hack/master/src/audio/miyagi.mp3",title:"miyagi",duration:0},{url:"https://raw.githubusercontent.com/scottschiller/SoundManager2/master/demo/_mp3/1hz-10khz-sweep.mp3",title:"1hz-10khz sweep",duration:0},{url:"https://raw.githubusercontent.com/scottschiller/SoundManager2/master/demo/_mp3/440hz.mp3",title:"440hz",duration:0},{url:"https://raw.githubusercontent.com/scottschiller/SoundManager2/master/demo/_mp3/880hz.mp3",title:"880hz",duration:0},{url:"https://raw.githubusercontent.com/scottschiller/SoundManager2/master/demo/_mp3/background0.mp3",title:"background 0",duration:0},{url:"https://raw.githubusercontent.com/scottschiller/SoundManager2/master/demo/_mp3/background1.mp3",title:"background 1",duration:0},{url:"https://raw.githubusercontent.com/scottschiller/SoundManager2/master/demo/_mp3/background2.mp3",title:"background 2",duration:0},{url:"https://raw.githubusercontent.com/scottschiller/SoundManager2/master/demo/_mp3/bass.mp3",title:"bass",duration:0},{url:"https://raw.githubusercontent.com/scottschiller/SoundManager2/master/demo/_mp3/button-0.mp3",title:"button 0",duration:0},{url:"https://raw.githubusercontent.com/scottschiller/SoundManager2/master/demo/_mp3/button-1.mp3",title:"button 1",duration:0},{url:"https://raw.githubusercontent.com/scottschiller/SoundManager2/master/demo/_mp3/click-high.mp3",title:"click high",duration:0},{url:"https://raw.githubusercontent.com/scottschiller/SoundManager2/master/demo/_mp3/click-low.mp3",title:"click low",duration:0},{url:"https://raw.githubusercontent.com/scottschiller/SoundManager2/master/demo/_mp3/coins.mp3",title:"coins",duration:0},{url:"https://raw.githubusercontent.com/scottschiller/SoundManager2/master/demo/_mp3/fancy-beer-bottle-pop.mp3",title:"fancy beer bottle pop",duration:0},{url:"https://raw.githubusercontent.com/scottschiller/SoundManager2/master/demo/_mp3/going_outside.mp3",title:"going outside",duration:0},{url:"https://raw.githubusercontent.com/scottschiller/SoundManager2/master/demo/_mp3/mak.mp3",title:"mak",duration:0},{url:"https://raw.githubusercontent.com/scottschiller/SoundManager2/master/demo/_mp3/mouseover.mp3",title:"mouseover",duration:0},{url:"https://raw.githubusercontent.com/scottschiller/SoundManager2/master/demo/_mp3/mouseover2.mp3",title:"mouseover 2",duration:0},{url:"https://raw.githubusercontent.com/scottschiller/SoundManager2/master/demo/_mp3/mouseover3.mp3",title:"mouseover 3",duration:0},{url:"https://raw.githubusercontent.com/scottschiller/SoundManager2/master/demo/_mp3/office_lobby.mp3",title:"office lobby",duration:0},{url:"https://raw.githubusercontent.com/scottschiller/SoundManager2/master/demo/_mp3/rain.mp3",title:"rain",duration:0},{url:"https://raw.githubusercontent.com/scottschiller/SoundManager2/master/demo/_mp3/select.mp3",title:"select",duration:0},{url:"https://raw.githubusercontent.com/scottschiller/SoundManager2/master/demo/_mp3/sine, square, sawtooth, rando.mp3",title:"sine, square, sawtooth, rando",duration:0},{url:"https://raw.githubusercontent.com/scottschiller/SoundManager2/master/demo/_mp3/walking.mp3",title:"walking",duration:0}],j=a(17),P=a.n(j),C=(a(238),a(71)),D=a.n(C),M=a(72),_=a.n(M);a(243);function A(t,e){return r.a.createElement(g.i,null,r.a.createElement(g.o,null,r.a.createElement(g.n,{href:"#",onClick:function(t){t.preventDefault(),e()}},t)))}new Intl.NumberFormat([],{minimumFractionDigits:2});var R=function(t){function e(){return Object(u.a)(this,e),Object(p.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(m.a)(e,[{key:"render",value:function(){return r.a.createElement(g.f,null,this.renderControls())}},{key:"renderControls",value:function(){var t={play:this.props.playStatus===P.a.status.STOPPED,stop:this.props.playStatus!==P.a.status.STOPPED,pause:this.props.playStatus===P.a.status.PLAYING,resume:this.props.playStatus===P.a.status.PAUSED};return r.a.createElement(g.f,null,r.a.createElement(g.o,null,t.play&&r.a.createElement(g.c,{before:r.a.createElement(_.a,{width:20,hight:20})},A("Play",this.props.onPlay)),t.stop&&r.a.createElement(g.c,{before:r.a.createElement(D.a,{width:20,hight:20})},A("Stop",this.props.onStop)),t.pause&&r.a.createElement(g.c,{before:r.a.createElement(D.a,{width:20,hight:20})},A("Pause",this.props.onPause)),t.resume&&r.a.createElement(g.c,{before:r.a.createElement(_.a,{width:20,hight:20})},A("Resume",this.props.onResume))),r.a.createElement(g.h,null,r.a.createElement(g.d,{checked:this.props.loop,onChange:this.props.onToggleLoop}," Loop?")))}}]),e}(r.a.Component),x=function(t){function e(){return Object(u.a)(this,e),Object(p.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(m.a)(e,[{key:"render",value:function(){return r.a.createElement(g.w,{placeholder:"Select a song",value:this.props.songs.indexOf(this.props.selectedSong),onChange:this.handleSongChange.bind(this)},this.renderSongOptions())}},{key:"renderSongOptions",value:function(){return this.props.songs.map(function(t,e){return r.a.createElement("option",{key:e,value:e},t.title)})}},{key:"handleSongChange",value:function(t){this.props.onSongSelected(this.props.songs[t.target.value])}}]),e}(r.a.Component),z=(a(49),function(t){var e=t.id,a=t.go,n=t.fetchedUser,o=t.player;return r.a.createElement(g.t,{id:e},r.a.createElement(g.u,null,"Example"),n&&r.a.createElement(g.i,{title:"User Data Fetched with VK Connect"},r.a.createElement(g.p,{before:n.photo_200?r.a.createElement(g.a,{src:n.photo_200}):null,description:n.city&&n.city.title?n.city.title:""},"".concat(n.first_name," ").concat(n.last_name))),r.a.createElement(g.i,{title:"Navigation Example"},r.a.createElement(g.f,null,r.a.createElement(g.b,{size:"xl",level:"2",onClick:a,"data-to":"scaner"},"Show me the Scaner, please")),r.a.createElement(g.f,null,r.a.createElement(g.b,{size:"xl",level:"2",onClick:a,"data-to":"audio"},"Show me the Audio, please")),r.a.createElement(g.f,null,r.a.createElement(g.b,{size:"xl",level:"2",onClick:a,"data-to":"geo"},"Show me the Geo, please"))),o)}),I=a(31),T=a.n(I),U=a(44),L=a.n(U),N=Object(g.B)(),V=function(t){function e(t){var a;return Object(u.a)(this,e),(a=Object(p.a)(this,Object(h.a)(e).call(this,t))).state={props:t,qrData:111,qrType:111},a}return Object(d.a)(e,t),Object(m.a)(e,[{key:"componentDidMount",value:function(){var t=this;T.a.subscribe(function(e){switch(e.detail.type){case"VKWebAppOpenQRResult":t.setState({qrData:e.detail.data.qr_data});break;default:console.log(e.detail.type)}}),T.a.send("VKWebAppOpenQR")}},{key:"render",value:function(){return r.a.createElement(g.t,{id:this.props.id},r.a.createElement(g.u,{left:r.a.createElement(g.j,{onClick:this.props.go,"data-to":"home"},N===g.l?r.a.createElement(E.a,null):r.a.createElement(w.a,null))},"Persik"),r.a.createElement("img",{className:"Persik",src:L.a,alt:"Persik The Cat"}),r.a.createElement(g.i,{title:"QR Data Fetched with VK Connect"},this.state.qrData&&r.a.createElement(g.p,null,"DDDATA ".concat(this.state.qrData))),this.props.player)}}]),e}(r.a.Component),B=a(104),G=(a(246),Object(g.B)()),K=function(t){function e(t){var a;return Object(u.a)(this,e),(a=Object(p.a)(this,Object(h.a)(e).call(this,t))).startRecording=function(){a.setState({record:!0})},a.stopRecording=function(){a.setState({record:!1})},a.state={record:!1,props:t},a}return Object(d.a)(e,t),Object(m.a)(e,[{key:"onData",value:function(t){return null}},{key:"onStop",value:function(t){return null}},{key:"render",value:function(){return r.a.createElement(g.t,{id:this.state.props.id},r.a.createElement(g.u,{left:r.a.createElement(g.j,{onClick:this.state.props.go,"data-to":"home"},G===g.l?r.a.createElement(E.a,null):r.a.createElement(w.a,null))},"Persik"),r.a.createElement("img",{className:"Persik",src:L.a,alt:"Persik The Cat"}),r.a.createElement(g.i,{title:"Voice Recorder"},r.a.createElement(g.f,null,r.a.createElement(B.a,{record:this.state.record,className:"sound-wave",onStop:this.onStop,onData:this.onData,width:"200",strokeColor:"#000000",backgroundColor:"#335E8F"}),r.a.createElement(g.f,null,r.a.createElement(g.b,{size:"xl",level:"2",onClick:this.startRecording,type:"button"},"Start")),r.a.createElement(g.f,null,r.a.createElement(g.b,{size:"xl",level:"2",onClick:this.stopRecording,type:"button"},"Stop")))),this.props.player)}}]),e}(r.a.Component);Object(g.B)();function q(t){return r.a.createElement("h2",null,"lihsdgl ",t.date.toLocaleTimeString(),".")}var W=function(t){function e(t){var a;return Object(u.a)(this,e),(a=Object(p.a)(this,Object(h.a)(e).call(this,t))).state={date:new Date},a}return Object(d.a)(e,t),Object(m.a)(e,[{key:"componentDidMount",value:function(){var t=this;this.timerID=setInterval(function(){return t.tick()},1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){this.setState({date:new Date})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"\u0422\u0432\u043e\u0435 \u0432\u0440\u0435\u043c\u044f:"),r.a.createElement(q,{date:this.state.date}))}}]),e}(r.a.Component);Object(g.B)();function F(t){return r.a.createElement("h2",null,"long: ",t.data.long,", lat: ",t.data.lat,".")}var H=function(t){function e(t){var a;return Object(u.a)(this,e),(a=Object(p.a)(this,Object(h.a)(e).call(this,t))).state={type:111,available:0,lat:0,long:0},a}return Object(d.a)(e,t),Object(m.a)(e,[{key:"componentDidMount",value:function(){var t=this;this.timerID=setInterval(function(){return t.tick()},1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){this.setState({date:new Date})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"\u0422\u0432\u043e\u0435 \u0432\u0440\u0435\u043c\u044f:"),r.a.createElement(F,{data:this.state}))}}]),e}(r.a.Component),Y=Object(g.B)(),Q=function(t){function e(t){var a;return Object(u.a)(this,e),(a=Object(p.a)(this,Object(h.a)(e).call(this,t))).state={type:111,available:0,lat:0,long:0},a}return Object(d.a)(e,t),Object(m.a)(e,[{key:"componentDidMount",value:function(){var t=this;T.a.subscribe(function(e){switch(e.detail.type){case"VKWebAppGeodataResult":t.setState({available:e.detail.data.available,lat:e.detail.data.lat,long:e.detail.data.long});break;default:console.log(e.detail.type)}}),T.a.send("VKWebAppGetGeodata",{})}},{key:"render",value:function(){return r.a.createElement(g.t,{id:this.props.id},r.a.createElement(g.u,{left:r.a.createElement(g.j,{onClick:this.props.go,"data-to":"home"},Y===g.l?r.a.createElement(E.a,null):r.a.createElement(w.a,null))},"\u0413\u0435\u043e\u043f\u043e\u0437\u0438\u0446\u0438\u044f"),r.a.createElement(W,null),r.a.createElement(H,null),r.a.createElement(g.i,{title:"QR Data Fetched with VK Connect"},r.a.createElement(g.c,null,"\u0428\u0438\u0440\u043e\u0442\u0430:".concat(this.state.lat)),r.a.createElement(g.c,null,"\u0414\u043e\u043b\u0433\u043e\u0442\u0430: ".concat(this.state.long))),r.a.createElement(g.i,null,r.a.createElement(g.y,{theme:"header",type:"buttons"},r.a.createElement(g.k,null,r.a.createElement(g.z,{after:r.a.createElement(g.e,null,"8")},"\u0412\u0441\u0435"),r.a.createElement(g.z,{selected:!0,after:r.a.createElement(g.e,null,"24")},"\u041b\u044e\u0434\u0438"),r.a.createElement(g.z,{after:r.a.createElement(g.e,null,"2")},"\u0421\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u0430"),r.a.createElement(g.z,null,"\u041c\u0443\u0437\u044b\u043a\u0430")))),this.props.player)}}]),e}(r.a.Component),J=Object(g.B)(),X=J!=g.l,Z=J!=g.l,$=function(t){function e(t){var a;return Object(u.a)(this,e),(a=Object(p.a)(this,Object(h.a)(e).call(this,t))).handleSongSelected=function(t){a.setState({currentSong:t,position:0})},a.go=function(t){a.setState({activePanel:t.currentTarget.dataset.to})},a.state={activePanel:"home",fetchedUser:null,activeModal:null,modalHistory:[],currentSong:O[0],position:0,volume:100,playbackRate:1,loop:!1,playStatus:P.a.status.PAUSED},a.modalBack=function(t){a.setActiveModal(a.state.modalHistory[a.state.modalHistory.length-2])},a}return Object(d.a)(e,t),Object(m.a)(e,[{key:"setActiveModal",value:function(t){t=t||null;var e=this.state.modalHistory?Object(c.a)(this.state.modalHistory):[];null===t?e=[]:-1!==e.indexOf(t)?e=e.splice(0,e.indexOf(t)+1):e.push(t),this.setState({activeModal:t,modalHistory:e})}},{key:"componentDidMount",value:function(){var t=this;i.a.subscribe(function(e){switch(e.detail.type){case"VKWebAppGetUserInfoResult":t.setState({fetchedUser:e.detail.data});break;default:console.log(e.detail.type)}}),i.a.send("VKWebAppGetUserInfo",{})}},{key:"getStatusText",value:function(){switch(this.state.playStatus){case P.a.status.PLAYING:return"playing";case P.a.status.PAUSED:return"paused";case P.a.status.STOPPED:return"stopped";default:return"(unknown)"}}},{key:"renderCurrentSong",value:function(){return r.a.createElement("p",null,"Current song ",this.state.currentSong.title,". Song is ",this.getStatusText())}},{key:"render",value:function(){var t=this,e=this.state,a=e.volume,n=e.playbackRate,o=e.loop,l=r.a.createElement(g.s,{activeModal:this.state.activeModal},r.a.createElement(g.q,{id:"music",onClose:this.modalBack,header:r.a.createElement(g.r,{left:X&&r.a.createElement(g.j,{onClick:this.modalBack},r.a.createElement(S.a,null)),right:r.a.createElement(g.j,{onClick:this.modalBack},Z?"\u0413\u043e\u0442\u043e\u0432\u043e":r.a.createElement(v.a,null))},"\u0424\u0438\u043b\u044c\u0442\u0440\u044b")},r.a.createElement(g.i,{title:"Player"},r.a.createElement(g.f,null,r.a.createElement(x,{songs:O,selectedSong:this.state.currentSong,onSongSelected:this.handleSongSelected}),r.a.createElement(g.f,null,r.a.createElement(g.m,{title:this.state.currentSong.title},r.a.createElement(g.v,{value:this.state.position/this.state.currentSong.duration*100}))),r.a.createElement(g.h,null,r.a.createElement(g.x,{min:0,max:100,value:Number(this.state.volume),onChange:function(e){return t.setState({volume:e})},top:"Volume"})),r.a.createElement(g.h,null,r.a.createElement(g.x,{min:0,max:5,value:Number(this.state.playbackRate),onChange:function(e){return t.setState({playbackRate:e})},top:"Playback Rate"})),r.a.createElement(R,{playStatus:this.state.playStatus,loop:o,onPlay:function(){return t.setState({playStatus:P.a.status.PLAYING})},onPause:function(){return t.setState({playStatus:P.a.status.PAUSED})},onResume:function(){return t.setState({playStatus:P.a.status.PLAYING})},onStop:function(){return t.setState({playStatus:P.a.status.STOPPED,position:0})},onSeek:function(e){return t.setState({position:e})},onToggleLoop:function(e){return t.setState({loop:e.target.checked})},duration:this.state.currentSong?this.state.currentSong.duration:0,position:this.state.position,playbackRate:n}))))),s=r.a.createElement(g.i,null,r.a.createElement(g.f,null,this.state.playStatus==P.a.status.PLAYING&&r.a.createElement(P.a,{url:this.state.currentSong.url,playStatus:this.state.playStatus,position:this.state.position,volume:a,playbackRate:n,loop:o,onLoading:function(t){var e=t.bytesLoaded,a=t.bytesTotal;return console.log("".concat(e/a*100,"% loaded"))},onLoad:function(){return console.log("Loaded")},onPlaying:function(e){var a=e.position;return t.setState({position:a})},onFinishedPlaying:function(){return t.setState({playStatus:P.a.status.STOPPED})}})),r.a.createElement(g.g,{vertical:"bottom"},r.a.createElement(g.b,{size:"xl",level:"secondary",onClick:function(){return t.setActiveModal("music")}},"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u043c\u043e\u0434\u0430\u043b\u044c\u043d\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443")));return r.a.createElement(g.A,{activePanel:this.state.activePanel,modal:l},r.a.createElement(z,{id:"home",fetchedUser:this.state.fetchedUser,go:this.go,player:s}),r.a.createElement(V,{id:"scaner",go:this.go,player:s}),r.a.createElement(Q,{id:"geo",go:this.go,player:s}),r.a.createElement(K,{id:"audio",go:this.go,player:s}))}}]),e}(r.a.Component);i.a.send("VKWebAppInit",{}),l.a.render(r.a.createElement($,null),document.getElementById("root"))},44:function(t,e,a){t.exports=a.p+"static/media/persik.4e1ec840.png"},49:function(t,e,a){}},[[149,1,2]]]);
//# sourceMappingURL=main.b29624c6.chunk.js.map