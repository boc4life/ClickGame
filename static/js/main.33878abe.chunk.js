(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e){e.exports=[{id:1,name:"Broncos",image:"/images/broncos.gif"},{id:2,name:"Chargers",image:"/images/chargers.gif"},{id:3,name:"Raiders",image:"/images/raiders.gif"},{id:4,name:"Chiefs",image:"/images/chiefs.gif"},{id:5,name:"Ravens",image:"/images/ravens.gif"},{id:6,name:"Steelers",image:"/images/steelers.gif"},{id:7,name:"Browns",image:"/images/browns.gif"},{id:8,name:"Bengals",image:"/images/bengals.gif"},{id:9,name:"Titans",image:"/images/titans.gif"},{id:10,name:"Texans",image:"/images/texans.gif"},{id:11,name:"Jaguars",image:"/images/jaguars.gif"},{id:12,name:"Colts",image:"/images/colts.gif"},{id:13,name:"Jets",image:"/images/jets.gif"},{id:14,name:"Bills",image:"/images/bills.gif"},{id:15,name:"Dolphins",image:"/images/dolphins.gif"},{id:16,name:"Patriots",image:"/images/patriots.gif"},{id:17,name:"Seahawks",image:"/images/seahawks.gif"},{id:18,name:"Cardinals",image:"/images/cardinals.gif"},{id:19,name:"Rams",image:"/images/rams.gif"},{id:20,name:"49ers",image:"/images/49ers.gif"},{id:21,name:"Panthers",image:"/images/panthers.gif"},{id:22,name:"Buccaneers",image:"/images/buccaneers.gif"},{id:23,name:"Saints",image:"/images/saints.gif"},{id:24,name:"Falcons",image:"/images/falcons.gif"},{id:25,name:"Lions",image:"/images/lions.gif"},{id:26,name:"Vikings",image:"/images/vikings.gif"},{id:27,name:"Bears",image:"/images/bears.gif"},{id:28,name:"Packers",image:"/images/packers.gif"},{id:29,name:"Redskins",image:"/images/redskins.gif"},{id:30,name:"Cowboys",image:"/images/cowboys.gif"},{id:31,name:"Giants",image:"/images/giants.gif"},{id:32,name:"Eagles",image:"/images/eagles.gif"}]},function(e,a,i){e.exports=i(20)},,,,,,function(e,a,i){},function(e,a,i){},function(e,a,i){},function(e,a,i){},function(e,a,i){},function(e,a,i){"use strict";i.r(a);var r=i(0),t=i.n(r),s=i(7),n=i.n(s),m=(i(15),i(1)),c=i(2),o=i(4),g=i(3),d=i(5);i(16);var l=function(e){return t.a.createElement("div",null,t.a.createElement("div",{className:"header"},"Andrew's ",e.game," Clicky Game"),t.a.createElement("div",{className:"instruction-header"},"Click on a team logo to score points. Don't choose the same logo twice!"))};i(17),i(18);var u=function(e){return t.a.createElement("input",{type:"image",className:"game-square",src:"/ClickGame"+e.image,key:e.id,team:e.team,onClick:function(){return e.click(e.id)}})},h=function(e){function a(){var e,i;Object(m.a)(this,a);for(var r=arguments.length,s=new Array(r),n=0;n<r;n++)s[n]=arguments[n];return(i=Object(o.a)(this,(e=Object(g.a)(a)).call.apply(e,[this].concat(s)))).renderSquare=function(e){return t.a.createElement(u,{image:i.props.teams[e].image,id:i.props.teams[e].id,team:i.props.teams[e].name,click:i.props.handleClick})},i}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return t.a.createElement("div",{className:"game-container"},t.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2),this.renderSquare(3),this.renderSquare(4),this.renderSquare(5),this.renderSquare(6),this.renderSquare(7)),t.a.createElement("div",{className:"board-row"},this.renderSquare(8),this.renderSquare(9),this.renderSquare(10),this.renderSquare(11),this.renderSquare(12),this.renderSquare(13),this.renderSquare(14),this.renderSquare(15)),t.a.createElement("div",{className:"board-row"},this.renderSquare(16),this.renderSquare(17),this.renderSquare(18),this.renderSquare(19),this.renderSquare(20),this.renderSquare(21),this.renderSquare(22),this.renderSquare(23)),t.a.createElement("div",{className:"board-row"},this.renderSquare(24),this.renderSquare(25),this.renderSquare(26),this.renderSquare(27),this.renderSquare(28),this.renderSquare(29),this.renderSquare(30),this.renderSquare(31)))}}]),a}(t.a.Component);i(19);var f=function(e){return t.a.createElement("div",{className:"footer"},"Score: ",e.score)},S=i(8),q=function(e){function a(){var e,i;Object(m.a)(this,a);for(var r=arguments.length,t=new Array(r),s=0;s<r;s++)t[s]=arguments[s];return(i=Object(o.a)(this,(e=Object(g.a)(a)).call.apply(e,[this].concat(t)))).state={teams:S,clicked:[],score:0},i.handleClick=function(e){if(i.state.clicked.includes(e))alert("GAME OVER. You scored ".concat(i.state.score)),i.setState({clicked:[],score:0}),console.log(i.state);else if(31==i.state.score)alert("Perfect Score! You win!"),i.setState({clicked:[],score:0});else{i.state.clicked.push(e);for(var a=i.state.teams.length-1;a>0;a--){var r=Math.floor(Math.random()*(a+1)),t=[i.state.teams[r],i.state.teams[a]];i.state.teams[a]=t[0],i.state.teams[r]=t[1]}i.setState({score:i.state.score+1})}},i}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return t.a.createElement("div",null,t.a.createElement(l,{game:"NFL"}),t.a.createElement(h,{teams:this.state.teams,handleClick:this.handleClick}),t.a.createElement(f,{score:this.state.score}))}}]),a}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(t.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.33878abe.chunk.js.map