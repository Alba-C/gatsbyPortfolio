(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{147:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(152),r=a(160);t.default=function(){return o.a.createElement(r.a,null,o.a.createElement("h1",null,"Hi from the second page"),o.a.createElement("p",null,"Welcome to page 2"),o.a.createElement(i.Link,{to:"/"},"Go back to the homepage"))}},152:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return g}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return h});var n=a(0),o=a.n(n),i=a(4),r=a.n(i),s=a(151),l=a.n(s);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return s.withPrefix}),a.d(t,"navigate",function(){return s.navigate}),a.d(t,"push",function(){return s.push}),a.d(t,"replace",function(){return s.replace}),a.d(t,"navigateTo",function(){return s.navigateTo});var c=a(27);a.d(t,"waitForRouteChange",function(){return c.c});var d=a(153),p=a.n(d);a.d(t,"PageRenderer",function(){return p.a});var u=a(38);a.d(t,"parsePath",function(){return u.a});var m=o.a.createContext({}),h=function(e){return o.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},153:function(e,t,a){var n;e.exports=(n=a(156))&&n.default||n},155:function(e){e.exports={data:{site:{siteMetadata:{title:"Chris Albanese | Front End Developer "}}}}},156:function(e,t,a){"use strict";a.r(t);a(39);var n=a(0),o=a.n(n),i=a(4),r=a.n(i),s=a(54),l=a(1),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return o.a.createElement(s.a,Object.assign({key:t.pathname,location:t,pageResources:a},a.json))};c.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},t.default=c},158:function(e,t,a){},160:function(e,t,a){"use strict";var n=a(155),o=a(0),i=a.n(o),r=a(4),s=a.n(r),l=a(161),c=a.n(l),d=a(152),p=a(81),u=(a(157),a(8)),m=a.n(u),h=function(e){function t(t){var a;return(a=e.call(this,t)||this).handleClick=function(){a.setState({collapsed:!a.state.collapsed})},a.closeMenu=function(){a.setState({collapsed:!0})},a.state={collapsed:!0},a}m()(t,e);var a=t.prototype;return a.updateDimensions=function(){window.innerWidth>600&&this.setState({collapsed:!0})},a.componentDidMount=function(){this.updateDimensions(),window.addEventListener("resize",this.updateDimensions.bind(this))},a.componentWillUnmount=function(){window.removeEventListener("resize",this.updateDimensions.bind(this))},a.render=function(){var e=Object(p.css)({fontSize:"1.25rem",overflow:"hidden",backgroundColor:"transparent",boxShadow:"0 0 10px 0 black",zIndex:999,display:"flex","@media (max-width: 600px)":{display:"block"}}),t=Object(p.css)({color:"#f2f2f2",textAlign:"center",padding:"14px 16px",textDecoration:"none","&:hover":{textDecoration:"none",color:this.state.collapsed?"inherit":"#bada55",borderBottom:this.state.collapsed?"none":"3px solid #bada55"},"@media (max-width: 600px)":{display:this.state.collapsed?"none":"block",margin:"auto",textAlign:"left"}}),a=Object(p.css)({maxWidth:1e3,margin:"12px auto",height:"100%",paddingRight:88}),n=Object(p.css)({float:"right",padding:"10px 10px",textDecoration:"none",display:"none",border:"none",backgroundColor:"transparent","&:hover":{},"@media (max-width: 600px)":{display:"block",position:this.state.collapsed?"relative":"absolute",top:0,right:0}}),o=Object(p.css)({float:"left",display:"block",color:"#f2f2f2",textAlign:"center",padding:"14px 16px",textDecoration:"none","&:hover":{textDecoration:"none",color:"#bada55",borderBottom:"3px solid #bada55",fontWeight:"bold"},"@media (max-width: 600px)":{display:this.state.collapsed?"none":"block",float:"none",textAlign:"left"}});return i.a.createElement("nav",null,i.a.createElement("div",{className:e,id:"myTopnav"},i.a.createElement(d.Link,{to:"/",onClick:this.closeMenu,className:t},this.state.collapsed?i.a.createElement("img",{src:"/assets/CA-Logo.png",alt:"logo",className:Object(p.css)("margin-bottom:0;height:60px;width:60px;")}):"Home"),i.a.createElement("div",{className:a},i.a.createElement(d.Link,{to:"/#projects",className:o,onClick:this.closeMenu},"Projects"),i.a.createElement(d.Link,{to:"/#contact",className:o,onClick:this.closeMenu},"Contact"),i.a.createElement(d.Link,{to:"/#about",className:o,onClick:this.closeMenu},"About"),i.a.createElement(d.Link,{to:"/resume",className:o,onClick:this.closeMenu},"Resume")),i.a.createElement("button",{className:n,"aria-label":"menu toggle",onClick:this.handleClick},i.a.createElement(g,{collapsed:this.state.collapsed,size:40,lineColor:"white"}))))},t}(o.Component),g=function(e){function t(t){var a;return(a=e.call(this,t)||this).background=a.props.background,a.lineColor=a.props.lineColor,a.size=a.props.size,a.state={collapsed:a.props.collapsed},a}return m()(t,e),t.getDerivedStateFromProps=function(e,t){return e.collapsed!==t.collapsed?{collapsed:e.collapsed}:null},t.prototype.render=function(){var e=Object(p.css)({height:this.size,width:this.size,backgroundColor:this.background,border:"solid 1px "+this.lineColor,borderRadius:this.state.collapsed?"10%":"50%",position:"relative",transition:"border-radius .5s ease-in"}),t=Object(p.css)({position:"absolute",backgroundColor:this.lineColor,margin:"0 10%",top:this.state.collapsed?""+this.size/4:""+this.size/2,height:2,width:"80%",transform:this.state.collapsed?"rotate(0deg)":" rotate(135deg)",transition:"transform .5s ease-in, top .5s ease-in"}),a=Object(p.css)({position:"absolute",margin:"0 10%",top:""+this.size/2,backgroundColor:this.lineColor,height:2,width:this.state.collapsed?"80%":0,transition:"width .4s ease-in .1s"}),n=Object(p.css)({position:"absolute",backgroundColor:this.lineColor,height:2,margin:"0 10%",top:this.state.collapsed?""+this.size/4*3:""+this.size/2,width:"80%",transform:this.state.collapsed?"rotate(0deg)":" rotate(-135deg)",transition:"transform .5s ease-in, top .5s ease-in"});return i.a.createElement("div",{className:e},i.a.createElement("div",{className:t}),i.a.createElement("div",{className:a}),i.a.createElement("div",{className:n}))},t}(o.Component),b=h,f=function(e){e.siteTitle;return i.a.createElement("div",null,i.a.createElement("nav",{className:Object(p.css)("background-color:#002851;margin-bottom:0;z-index:1;")},i.a.createElement(b,null)))},x=a(154),w=function(){var e=Object(x.a)({maxWidth:1e3,margin:"-50px auto",padding:20,width:400,display:"flex",justifyContent:"space-between",zIndex:100,"@media (max-width: 600px)":{width:"100%"}});return i.a.createElement("footer",{className:Object(x.a)("background-color:#002851;color:white;width:100%;bottom:0;")},i.a.createElement("div",{className:Object(x.a)("margin:0 auto;max-width:1200px;padding-top:0;")},i.a.createElement("a",{href:"#top",className:Object(x.a)("height:100px;width:150px;border-radius:50%;background-color:#002851;position:relative;bottom:40px;margin:0 auto;transition:all 0.3s ease 0s;display:flex;align-items:center;justify-content:center;&:hover{transform:translateY(2px);}")},i.a.createElement("div",{className:Object(x.a)("background-color:#bada55;height:50px;width:75px;margin:0px auto;box-shadow:0px 0px 14px 10px rgba(20,20,20,0.1);border-radius:5px;-webkit-clip-path:polygon( 0% 50%,50% 0%,100% 50%,100% 100%,50% 50%,0% 100% );clip-path:polygon( 0% 50%,50% 0%,100% 50%,100% 100%,50% 50%,0% 100% );")})),i.a.createElement("div",{className:e},i.a.createElement("a",{href:"https://codepen.io/Alba-C/",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("img",{src:"/icons/codepenlogo.png",alt:"codepen logo",className:Object(x.a)("height:30px;width:30px;transition:all 0.3s ease 0s;&:hover{transform:scale(1.1);}")})),i.a.createElement("a",{href:"https://github.com/Alba-c",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("img",{src:"/icons/GitHub-Mark-Light-64px.png",alt:"github logo",className:Object(x.a)("height:30px;width:30px;z-index:1000;transition:all 0.3s ease 0s;&:hover{transform:scale(1.1);}")})),i.a.createElement("a",{href:"mailto:christopher@cafere.com",className:Object(x.a)("width:30px;height:30px;padding:3px;background-color:white;border-radius:50%;transition:all 0.3s ease 0s;&:hover{transform:scale(1.1);}")},i.a.createElement("img",{src:"/icons/email.png",alt:"mail icon",className:Object(x.a)("border-radius:50%;height:24px;width:24px;")}))),i.a.createElement("p",{className:Object(x.a)("font-size:0.7rem;color:#e4e4e4;float:right;padding-top:20px;padding-right:30px;")},"© Chris Albanse 2018")))},v=(a(158),function(e){var t=e.children;return i.a.createElement(d.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement("div",{className:Object(p.css)("background-image:url('/assets/dark_exa.png');background-repeat:repeat;font-family:'Montserrat',sans-serif;")},i.a.createElement(c.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Portfolio of Chris Albanese"},{name:"robots",content:"follow"},{name:"robots",content:"index"},{name:"googlebot",content:"follow"},{name:"charset",content:"utf-8"}]},i.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Audiowide|Montserrat",rel:"stylesheet"}),i.a.createElement("html",{lang:"en"})),i.a.createElement(f,null),i.a.createElement("main",{id:"top",className:Object(p.css)("margin:0 auto;max-width:1200px;padding-top:0;font-family:'Montserrat',sans-serif;box-shadow:0px 2px 14px 10px rgba(20,20,20,0.1);")},t),i.a.createElement(w,null))},data:n})});v.propTypes={children:s.a.node.isRequired};t.a=v}}]);
//# sourceMappingURL=component---src-pages-page-2-js-0379067a10fdeae65e0a.js.map