(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{150:function(t,e,a){t.exports=a(247)},246:function(t,e,a){t.exports=a.p+"static/media/miyagi.90d98937.mp3"},247:function(t,e,a){"use strict";a.r(e);a(151),a(202);var n=a(0),o=a.n(n),r=a(40),l=a.n(r),s=a(48),i=a.n(s),c=a(106),u=a(19),m=a(20),p=a(22),h=a(21),d=a(23),g=(a(68),a(3)),b=a(35),E=a.n(b),S=a(55),f=a.n(S),y=a(105),k=a.n(y),v=(a(236),a(36)),w=a.n(v),O=[{url:"https://raw.githubusercontent.com/maximzubkov/on_hack/master/src/audio/miyagi.mp3",title:"miyagi",duration:0},{url:"https://raw.githubusercontent.com/scottschiller/SoundManager2/master/demo/_mp3/1hz-10khz-sweep.mp3",title:"1hz-10khz sweep",duration:0},{url:"https://raw.githubusercontent.com/scottschiller/SoundManager2/master/demo/_mp3/440hz.mp3",title:"440hz",duration:0},{url:"https://raw.githubusercontent.com/scottschiller/SoundManager2/master/demo/_mp3/880hz.mp3",title:"880hz",duration:0},{url:"https://raw.githubusercontent.com/scottschiller/SoundManager2/master/demo/_mp3/background0.mp3",title:"background 0",duration:0},{url:"https://raw.githubusercontent.com/scottschiller/SoundManager2/master/demo/_mp3/background1.mp3",title:"background 1",duration:0},{url:"https://raw.githubusercontent.com/scottschiller/SoundManager2/master/demo/_mp3/background2.mp3",title:"background 2",duration:0},{url:"https://raw.githubusercontent.com/scottschiller/SoundManager2/master/demo/_mp3/bass.mp3",title:"bass",duration:0},{url:"https://raw.githubusercontent.com/scottschiller/SoundManager2/master/demo/_mp3/button-0.mp3",title:"button 0",duration:0},{url:"https://raw.githubusercontent.com/scottschiller/SoundManager2/master/demo/_mp3/button-1.mp3",title:"button 1",duration:0},{url:"https://raw.githubusercontent.com/scottschiller/SoundManager2/master/demo/_mp3/click-high.mp3",title:"click high",duration:0},{url:"https://raw.githubusercontent.com/scottschiller/SoundManager2/master/demo/_mp3/click-low.mp3",title:"click low",duration:0},{url:"https://raw.githubusercontent.com/scottschiller/SoundManager2/master/demo/_mp3/coins.mp3",title:"coins",duration:0},{url:"https://raw.githubusercontent.com/scottschiller/SoundManager2/master/demo/_mp3/fancy-beer-bottle-pop.mp3",title:"fancy beer bottle pop",duration:0},{url:"https://raw.githubusercontent.com/scottschiller/SoundManager2/master/demo/_mp3/going_outside.mp3",title:"going outside",duration:0},{url:"https://raw.githubusercontent.com/scottschiller/SoundManager2/master/demo/_mp3/mak.mp3",title:"mak",duration:0},{url:"https://raw.githubusercontent.com/scottschiller/SoundManager2/master/demo/_mp3/mouseover.mp3",title:"mouseover",duration:0},{url:"https://raw.githubusercontent.com/scottschiller/SoundManager2/master/demo/_mp3/mouseover2.mp3",title:"mouseover 2",duration:0},{url:"https://raw.githubusercontent.com/scottschiller/SoundManager2/master/demo/_mp3/mouseover3.mp3",title:"mouseover 3",duration:0},{url:"https://raw.githubusercontent.com/scottschiller/SoundManager2/master/demo/_mp3/office_lobby.mp3",title:"office lobby",duration:0},{url:"https://raw.githubusercontent.com/scottschiller/SoundManager2/master/demo/_mp3/rain.mp3",title:"rain",duration:0},{url:"https://raw.githubusercontent.com/scottschiller/SoundManager2/master/demo/_mp3/select.mp3",title:"select",duration:0},{url:"https://raw.githubusercontent.com/scottschiller/SoundManager2/master/demo/_mp3/sine, square, sawtooth, rando.mp3",title:"sine, square, sawtooth, rando",duration:0},{url:"https://raw.githubusercontent.com/scottschiller/SoundManager2/master/demo/_mp3/walking.mp3",title:"walking",duration:0}],j=a(16),P=a.n(j),C=(a(99),a(72)),M=a.n(C),_=a(73),D=a.n(_);a(243);function A(t,e){return o.a.createElement(g.i,null,o.a.createElement(g.o,null,o.a.createElement(g.n,{href:"#",onClick:function(t){t.preventDefault(),e()}},t)))}new Intl.NumberFormat([],{minimumFractionDigits:2});var R=function(t){function e(){return Object(u.a)(this,e),Object(p.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(m.a)(e,[{key:"render",value:function(){return o.a.createElement(g.f,null,this.renderControls())}},{key:"renderControls",value:function(){var t={play:this.props.playStatus===P.a.status.STOPPED,stop:this.props.playStatus!==P.a.status.STOPPED,pause:this.props.playStatus===P.a.status.PLAYING,resume:this.props.playStatus===P.a.status.PAUSED};return o.a.createElement(g.f,null,o.a.createElement(g.o,null,t.play&&o.a.createElement(g.c,{before:o.a.createElement(D.a,{width:20,hight:20})},A("Play",this.props.onPlay)),t.stop&&o.a.createElement(g.c,{before:o.a.createElement(M.a,{width:20,hight:20})},A("Stop",this.props.onStop)),t.pause&&o.a.createElement(g.c,{before:o.a.createElement(M.a,{width:20,hight:20})},A("Pause",this.props.onPause)),t.resume&&o.a.createElement(g.c,{before:o.a.createElement(D.a,{width:20,hight:20})},A("Resume",this.props.onResume))),o.a.createElement(g.h,null,o.a.createElement(g.d,{checked:this.props.loop,onChange:this.props.onToggleLoop}," Loop?")))}}]),e}(o.a.Component),x=function(t){function e(){return Object(u.a)(this,e),Object(p.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(m.a)(e,[{key:"render",value:function(){return o.a.createElement(g.w,{placeholder:"Select a song",value:this.props.songs.indexOf(this.props.selectedSong),onChange:this.handleSongChange.bind(this)},this.renderSongOptions())}},{key:"renderSongOptions",value:function(){return this.props.songs.map(function(t,e){return o.a.createElement("option",{key:e,value:e},t.title)})}},{key:"handleSongChange",value:function(t){this.props.onSongSelected(this.props.songs[t.target.value])}}]),e}(o.a.Component),z=(a(69),function(t){var e=t.id,a=t.go,n=t.fetchedUser,r=t.player;return o.a.createElement(g.t,{id:e},o.a.createElement(g.u,null,"Example"),n&&o.a.createElement(g.i,{title:"User Data Fetched with VK Connect"},o.a.createElement(g.p,{before:n.photo_200?o.a.createElement(g.a,{src:n.photo_200}):null,description:n.city&&n.city.title?n.city.title:""},"".concat(n.first_name," ").concat(n.last_name))),o.a.createElement(g.i,{title:"Navigation Example"},o.a.createElement(g.f,null,o.a.createElement(g.b,{size:"xl",level:"2",onClick:a,"data-to":"scaner"},"Show me the Scaner, please")),o.a.createElement(g.f,null,o.a.createElement(g.b,{size:"xl",level:"2",onClick:a,"data-to":"audio"},"Show me the Audio, please")),o.a.createElement(g.f,null,o.a.createElement(g.b,{size:"xl",level:"2",onClick:a,"data-to":"geo"},"Show me the Geo, please"))),r)}),T=a(32),L=a.n(T),N=a(44),U=a.n(N),V=Object(g.B)(),G=function(t){function e(t){var a;return Object(u.a)(this,e),(a=Object(p.a)(this,Object(h.a)(e).call(this,t))).state={props:t,qrData:111,qrType:111},a}return Object(d.a)(e,t),Object(m.a)(e,[{key:"componentDidMount",value:function(){var t=this;L.a.subscribe(function(e){switch(e.detail.type){case"VKWebAppOpenQRResult":t.setState({qrData:e.detail.data.qr_data});break;default:console.log(e.detail.type)}}),L.a.send("VKWebAppOpenQR")}},{key:"render",value:function(){return o.a.createElement(g.t,{id:this.props.id},o.a.createElement(g.u,{left:o.a.createElement(g.j,{onClick:this.props.go,"data-to":"home"},V===g.l?o.a.createElement(E.a,null):o.a.createElement(w.a,null))},"Persik"),o.a.createElement("img",{className:"Persik",src:U.a,alt:"Persik The Cat"}),o.a.createElement(g.i,{title:"QR Data Fetched with VK Connect"},this.state.qrData&&o.a.createElement(g.p,null,"DDDATA ".concat(this.state.qrData))),this.props.player)}}]),e}(o.a.Component),B=a(71),I=(a(246),Object(g.B)()),K=function(t){function e(t){var a;return Object(u.a)(this,e),(a=Object(p.a)(this,Object(h.a)(e).call(this,t))).startRecording=function(){a.setState({record:!0})},a.stopRecording=function(){a.setState({record:!1})},a.state={record:!1,props:t},a}return Object(d.a)(e,t),Object(m.a)(e,[{key:"onData",value:function(t){return null}},{key:"onStop",value:function(t){return null}},{key:"render",value:function(){return o.a.createElement(g.t,{id:this.state.props.id},o.a.createElement(g.u,{left:o.a.createElement(g.j,{onClick:this.state.props.go,"data-to":"home"},I===g.l?o.a.createElement(E.a,null):o.a.createElement(w.a,null))},"Persik"),o.a.createElement("img",{className:"Persik",src:U.a,alt:"Persik The Cat"}),o.a.createElement(g.i,{title:"Voice Recorder"},o.a.createElement(g.f,null,o.a.createElement(B.a,{record:this.state.record,className:"sound-wave",onStop:this.onStop,onData:this.onData,width:"200",strokeColor:"#000000",backgroundColor:"#335E8F"}),o.a.createElement(g.f,null,o.a.createElement(g.b,{size:"xl",level:"2",onClick:this.startRecording,type:"button"},"Start")),o.a.createElement(g.f,null,o.a.createElement(g.b,{size:"xl",level:"2",onClick:this.stopRecording,type:"button"},"Stop")))),this.props.player)}}]),e}(o.a.Component),q=(Object(g.B)(),o.a.Component,Object(g.B)()),F=function(t){function e(t){var a;return Object(u.a)(this,e),(a=Object(p.a)(this,Object(h.a)(e).call(this,t))).state={type:111,available:0,lat:0,long:0},a}return Object(d.a)(e,t),Object(m.a)(e,[{key:"componentDidMount",value:function(){var t=this;L.a.subscribe(function(e){switch(e.detail.type){case"VKWebAppGeodataResult":t.setState({available:e.detail.data.available,lat:e.detail.data.lat,long:e.detail.data.long});break;default:console.log(e.detail.type)}}),L.a.send("VKWebAppGetGeodata",{})}},{key:"render",value:function(){return o.a.createElement(g.t,{id:this.props.id},o.a.createElement(g.u,{left:o.a.createElement(g.j,{onClick:this.props.go,"data-to":"home"},q===g.l?o.a.createElement(E.a,null):o.a.createElement(w.a,null))},"\u041d\u0443 \u0448\u043e?"),o.a.createElement(g.i,{title:"QR Data Fetched with VK Connect"},o.a.createElement(g.c,null,"\u0422\u044b \u0442\u0443\u0442 ".concat(this.state.lat))),o.a.createElement(g.i,null,o.a.createElement(g.y,{theme:"header",type:"buttons"},o.a.createElement(g.k,null,o.a.createElement(g.z,{after:o.a.createElement(g.e,null,"8")},"\u0412\u0441\u0435"),o.a.createElement(g.z,{selected:!0,after:o.a.createElement(g.e,null,"24")},"\u041b\u044e\u0434\u0438"),o.a.createElement(g.z,{after:o.a.createElement(g.e,null,"2")},"\u0421\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u0430"),o.a.createElement(g.z,null,"\u041c\u0443\u0437\u044b\u043a\u0430")))),this.props.player)}}]),e}(o.a.Component),W=Object(g.B)(),H=W!=g.l,Y=W!=g.l,Q=function(t){function e(t){var a;return Object(u.a)(this,e),(a=Object(p.a)(this,Object(h.a)(e).call(this,t))).handleSongSelected=function(t){a.setState({currentSong:t,position:0})},a.go=function(t){a.setState({activePanel:t.currentTarget.dataset.to})},a.state={activePanel:"home",fetchedUser:null,activeModal:null,modalHistory:[],currentSong:O[0],position:0,volume:100,playbackRate:1,loop:!1,playStatus:P.a.status.PAUSED},a.modalBack=function(t){a.setActiveModal(a.state.modalHistory[a.state.modalHistory.length-2])},a}return Object(d.a)(e,t),Object(m.a)(e,[{key:"setActiveModal",value:function(t){t=t||null;var e=this.state.modalHistory?Object(c.a)(this.state.modalHistory):[];null===t?e=[]:-1!==e.indexOf(t)?e=e.splice(0,e.indexOf(t)+1):e.push(t),this.setState({activeModal:t,modalHistory:e})}},{key:"componentDidMount",value:function(){var t=this;i.a.subscribe(function(e){switch(e.detail.type){case"VKWebAppGetUserInfoResult":t.setState({fetchedUser:e.detail.data});break;default:console.log(e.detail.type)}}),i.a.send("VKWebAppGetUserInfo",{})}},{key:"getStatusText",value:function(){switch(this.state.playStatus){case P.a.status.PLAYING:return"playing";case P.a.status.PAUSED:return"paused";case P.a.status.STOPPED:return"stopped";default:return"(unknown)"}}},{key:"renderCurrentSong",value:function(){return o.a.createElement("p",null,"Current song ",this.state.currentSong.title,". Song is ",this.getStatusText())}},{key:"render",value:function(){var t=this,e=this.state,a=e.volume,n=e.playbackRate,r=e.loop,l=o.a.createElement(g.s,{activeModal:this.state.activeModal},o.a.createElement(g.q,{id:"music",onClose:this.modalBack,header:o.a.createElement(g.r,{left:H&&o.a.createElement(g.j,{onClick:this.modalBack},o.a.createElement(f.a,null)),right:o.a.createElement(g.j,{onClick:this.modalBack},Y?"\u0413\u043e\u0442\u043e\u0432\u043e":o.a.createElement(k.a,null))},"\u0424\u0438\u043b\u044c\u0442\u0440\u044b")},o.a.createElement(g.i,{title:"Player"},o.a.createElement(g.f,null,o.a.createElement(x,{songs:O,selectedSong:this.state.currentSong,onSongSelected:this.handleSongSelected}),o.a.createElement(g.f,null,o.a.createElement(g.m,{title:this.state.currentSong.title},o.a.createElement(g.v,{value:this.state.position/this.state.currentSong.duration*100}))),o.a.createElement(g.h,null,o.a.createElement(g.x,{min:0,max:100,value:Number(this.state.volume),onChange:function(e){return t.setState({volume:e})},top:"Volume"})),o.a.createElement(g.h,null,o.a.createElement(g.x,{min:0,max:5,value:Number(this.state.playbackRate),onChange:function(e){return t.setState({playbackRate:e})},top:"Playback Rate"})),o.a.createElement(R,{playStatus:this.state.playStatus,loop:r,onPlay:function(){return t.setState({playStatus:P.a.status.PLAYING})},onPause:function(){return t.setState({playStatus:P.a.status.PAUSED})},onResume:function(){return t.setState({playStatus:P.a.status.PLAYING})},onStop:function(){return t.setState({playStatus:P.a.status.STOPPED,position:0})},onSeek:function(e){return t.setState({position:e})},onToggleLoop:function(e){return t.setState({loop:e.target.checked})},duration:this.state.currentSong?this.state.currentSong.duration:0,position:this.state.position,playbackRate:n}))))),s=o.a.createElement(g.i,null,o.a.createElement(g.f,null,this.state.playStatus==P.a.status.PLAYING&&o.a.createElement(P.a,{url:this.state.currentSong.url,playStatus:this.state.playStatus,position:this.state.position,volume:a,playbackRate:n,loop:r,onLoading:function(t){var e=t.bytesLoaded,a=t.bytesTotal;return console.log("".concat(e/a*100,"% loaded"))},onLoad:function(){return console.log("Loaded")},onPlaying:function(e){var a=e.position;return t.setState({position:a})},onFinishedPlaying:function(){return t.setState({playStatus:P.a.status.STOPPED})}})),o.a.createElement(g.g,{vertical:"bottom"},o.a.createElement(g.b,{size:"xl",level:"secondary",onClick:function(){return t.setActiveModal("music")}},"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u043c\u043e\u0434\u0430\u043b\u044c\u043d\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443")));return o.a.createElement(g.A,{activePanel:this.state.activePanel,modal:l},o.a.createElement(z,{id:"home",fetchedUser:this.state.fetchedUser,go:this.go,player:s}),o.a.createElement(G,{id:"scaner",go:this.go,player:s}),o.a.createElement(F,{id:"geo",go:this.go,player:s}),o.a.createElement(K,{id:"audio",go:this.go,player:s}))}}]),e}(o.a.Component);i.a.send("VKWebAppInit",{}),l.a.render(o.a.createElement(Q,null),document.getElementById("root"))},44:function(t,e,a){t.exports=a.p+"static/media/persik.4e1ec840.png"},69:function(t,e,a){}},[[150,1,2]]]);
//# sourceMappingURL=main.5fd6bd30.chunk.js.map