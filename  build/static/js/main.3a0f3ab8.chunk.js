(this.webpackJsonpalan=this.webpackJsonpalan||[]).push([[0],{37:function(e,t,a){e.exports=a(47)},46:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(8),l=a.n(r),o=a(31),c=a(26),s=a.n(c),m=a(71),d=a(63),p=a(64),g=a(65),u=a(66),h=a(67),f=a(68),b=a(61),x=Object(b.a)({image:{height:250},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderBottom:"10px solid white",height:"100%"},activeCard:{borderBottom:"10px solid #22289a"},desc:{padding:"20px 20px"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px",lineHeight:"100%"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"}}),y=function(e){var t=e.article,a=e.i,n=x();return i.a.createElement("div",null,i.a.createElement(m.a,{className:n.card},i.a.createElement(d.a,{href:t.url,target:"_blank"},i.a.createElement("div",{className:n.details},i.a.createElement(p.a,{compnent:"h2",variant:"body2"},new Date(t.publishedAt).toDateString()),i.a.createElement(p.a,{compnent:"h2",variant:"body2"},t.source.name)),i.a.createElement(g.a,{className:n.image,image:t.urlToImage||"https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png"}),i.a.createElement(u.a,null,i.a.createElement(p.a,{className:n.title,variant:"h6",component:"h1"},t.title),i.a.createElement(p.a,{className:n.desc,variant:"body2",component:"p",color:"textSecondary"},t.description))),i.a.createElement(h.a,{className:n.cardActions},i.a.createElement(f.a,{size:"small",color:"primary"},"Learn More"),i.a.createElement(p.a,{variant:"h6",component:"h6",color:"textSecondary"},a+1))))},w=a(70),E=a(69),v=Object(b.a)({container:{padding:"5% 10%",margin:"0",width:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center",width:"100%",height:"45vh",padding:"10%",borderRadius:10,color:"white"},infoCard:{display:"flex",flexDirection:"column",textAlign:"center"}}),N=[{color:"#00838f",title:"Latest News",text:"Give me the latest news"},{color:"#1565c0",title:"News by Categories",info:"Business, Entertainment, General, Health, Science, Sports, Technology",text:"Give me the latest Technology news"},{color:"#4527a0",title:"News by Terms",info:"Bitcoin, PlayStation 5, Smartphones, Donald Trump...",text:"What's up with PlayStation 5"},{color:"#283593",title:"News by Sources",info:"CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...",text:"Give me the news from CNN"}],C=function(e){var t=e.articles,a=v();return t.length?i.a.createElement("div",null,i.a.createElement(w.a,{in:!0},i.a.createElement(E.a,{className:a.container,container:!0,alignItems:"stretch",spacing:3},t.map((function(e,t){return i.a.createElement(E.a,{item:!0,s:12,sm:6,lg:4},i.a.createElement(y,{article:e,i:t}))}))))):i.a.createElement(w.a,{in:!0},i.a.createElement(E.a,{className:a.container,container:!0,alignItems:"stretch",spacing:3},N.map((function(e){return i.a.createElement(E.a,{item:!0,xs:12,sm:6,md:4,lg:3,className:a.infoCard},i.a.createElement("div",{className:a.card,style:{backgroundColor:e.color}},i.a.createElement(p.a,{variant:"h5",component:"h5"},e.title),e.info?i.a.createElement(p.a,{variant:"h6",component:"h6"},i.a.createElement("strong",null,e.title.split(" ")[2]),": ",i.a.createElement("br",null),e.info):null,i.a.createElement(p.a,{variant:"h6",component:"h6"},"Try saying: ",i.a.createElement("br",null)," ",i.a.createElement("i",null,e.text))))}))))},j=(a(46),a(16)),k=Object(b.a)((function(e){return{footer:Object(j.a)({textAlign:"center",position:"fixed",left:0,bottom:0,color:"black",width:"100%",display:"flex",alignItems:"center",justifyContent:"center",height:"120px"},e.breakpoints.down("sm"),{display:"none"}),link:{textDecoration:"none",color:"rgba(21, 101, 192)"},image:{marginLeft:20},card:Object(j.a)({display:"flex",justifyContent:"center",alignItems:"center",width:"50%",padding:"3%",borderRadius:10,color:"white",backgroundColor:"rgba(21, 101, 192)",margin:"0 12px",textAlign:"center",height:"25vmin"},e.breakpoints.down("sm"),{flexDirection:"column-reverse",textAlign:"center",width:"100%",height:"initial","&:nth-of-type(1)":{marginBottom:"12px"}}),infoContainer:Object(j.a)({display:"flex",alignItems:"center",justifyContent:"space-around"},e.breakpoints.down("sm"),{flexDirection:"column"}),logoContainer:Object(j.a)({padding:"0 5%",display:"flex",justifyContent:"space-around",alignItems:"center",width:"100%"},e.breakpoints.down("sm"),{flexDirection:"column-reverse",textAlign:"center"}),alanLogo:Object(j.a)({height:"27vmin",borderRadius:"15%",padding:"0 5%",margin:"3% 0"},e.breakpoints.down("sm"),{height:"35vmin"})}})),S=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],r=t[1],l=k();return Object(n.useEffect)((function(){s()({key:"738cc0c520d23155366b2e22f0de50362e956eca572e1d8b807a3e2338fdd0dc/stage",onCommand:function(e){var t=e.command,a=e.articles;"newsFromSource"===t&&r(a)}})}),[]),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:l.logoContainer},i.a.createElement("img",{src:"https://alan.app/voice/images/previews/preview.jpg",className:l.alanLogo,alt:"logo"})),i.a.createElement(C,{articles:a}))};l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(S,null)),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.3a0f3ab8.chunk.js.map