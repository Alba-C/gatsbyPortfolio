(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{147:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(152),s=n(158);t.default=function(){return o.a.createElement(s.a,null,o.a.createElement("h1",null,"Hi from the second page"),o.a.createElement("p",null,"Welcome to page 2"),o.a.createElement(i.Link,{to:"/"},"Go back to the homepage"))}},152:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return h});var a=n(0),o=n.n(a),i=n(4),s=n.n(i),r=n(151),l=n.n(r);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return r.withPrefix}),n.d(t,"navigate",function(){return r.navigate}),n.d(t,"push",function(){return r.push}),n.d(t,"replace",function(){return r.replace}),n.d(t,"navigateTo",function(){return r.navigateTo});var c=n(27);n.d(t,"waitForRouteChange",function(){return c.c});var d=n(153),u=n.n(d);n.d(t,"PageRenderer",function(){return u.a});var p=n(38);n.d(t,"parsePath",function(){return p.a});var m=o.a.createContext({}),h=function(e){return o.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},153:function(e,t,n){var a;e.exports=(a=n(155))&&a.default||a},154:function(e){e.exports={data:{site:{siteMetadata:{title:"Chris Albanese"}}}}},155:function(e,t,n){"use strict";n.r(t);n(39);var a=n(0),o=n.n(a),i=n(4),s=n.n(i),r=n(52),l=n(1),c=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return o.a.createElement(r.a,Object.assign({key:t.pathname,location:t,pageResources:n},n.json))};c.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=c},156:function(e,t,n){},158:function(e,t,n){"use strict";var a=n(154),o=n(0),i=n.n(o),s=n(4),r=n.n(s),l=n(160),c=n.n(l),d=n(152),u=n(81),p=(n(159),n(8)),m=n.n(p),h=function(e){function t(t){var n;return(n=e.call(this,t)||this).handleClick=function(){n.setState({collapsed:!n.state.collapsed})},n.closeMenu=function(){n.setState({collapsed:!0})},n.topnav=Object(u.css)({overflow:"hidden",backgroundColor:"transparent",boxShadow:"0 0 10px 0 black",zIndex:999,"@media (max-width: 600px)":{position:"relative"}}),n.state={collapsed:!0},n}m()(t,e);var n=t.prototype;return n.updateDimensions=function(){window.innerWidth>600&&this.setState({collapsed:!0})},n.componentDidMount=function(){this.updateDimensions(),window.addEventListener("resize",this.updateDimensions.bind(this))},n.componentWillUnmount=function(){window.removeEventListener("resize",this.updateDimensions.bind(this))},n.render=function(){var e=Object(u.css)({float:"right",padding:"10px 10px",textDecoration:"none",display:"none",border:"none",backgroundColor:"transparent","&:hover":{backgroundColor:"#ddd"},"@media (max-width: 600px)":{display:"block"}}),t=Object(u.css)({float:"left",display:"block",color:"#f2f2f2",textAlign:"center",padding:"14px 16px",fontSize:"17px","&:hover":{textDecoration:"none",color:"#bada55",borderBottom:"3px solid blue"},"@media (max-width: 600px)":{display:this.state.collapsed?"none":"block",float:"none",textAlign:"left"}}),n=Object(u.css)({float:"left",display:"block",color:"#f2f2f2",textAlign:"center",padding:"14px 16px",textDecoration:"none",fontSize:"17px","&:hover":{color:this.state.collapsed?"inherit":"#bada55",borderBottom:this.state.collapsed?"none":"3px solid blue"},"@media (max-width: 600px)":{display:this.state.collapsed?"none":"block",float:"none",textAlign:"left"}});return i.a.createElement("nav",null,i.a.createElement("div",{className:this.topnav,id:"myTopnav"},i.a.createElement("button",{className:e,onClick:this.handleClick},i.a.createElement(f,{collapsed:this.state.collapsed,size:30,lineColor:"white"})),i.a.createElement(d.Link,{to:"/",onClick:this.closeMenu,className:n},this.state.collapsed?i.a.createElement("img",{src:"/assets/CA-Logo.png",alt:"logo",className:Object(u.css)("margin-bottom:0;height:60px;width:60px;")}):"Home"),i.a.createElement(d.Link,{to:"/#projects",className:t,onClick:this.closeMenu},"Projects"),i.a.createElement(d.Link,{to:"/#contact",className:t,onClick:this.closeMenu},"Contact"),i.a.createElement(d.Link,{to:"/resume",className:t,onClick:this.closeMenu},"Resume")))},t}(o.Component),f=function(e){function t(t){var n;return(n=e.call(this,t)||this).background=n.props.background,n.lineColor=n.props.lineColor,n.size=n.props.size,n.handleClick=function(){n.setState({collapsed:!n.state.collapsed})},n.state={collapsed:n.props.collapsed},n}return m()(t,e),t.getDerivedStateFromProps=function(e,t){return e.collapsed!==t.collapsed?{collapsed:e.collapsed}:null},t.prototype.render=function(){var e=Object(u.css)({height:this.size,width:this.size,backgroundColor:this.background,border:"solid 1px "+this.lineColor,borderRadius:this.state.collapsed?"10%":"50%",position:"relative",transition:"border-radius .5s ease-in"}),t=Object(u.css)({position:"absolute",backgroundColor:this.lineColor,margin:"0 10%",top:this.state.collapsed?""+this.size/4:""+this.size/2,height:2,width:"80%",transform:this.state.collapsed?"rotate(0deg)":" rotate(135deg)",transition:"transform .5s ease-in, top .5s ease-in"}),n=Object(u.css)({position:"absolute",margin:"0 10%",top:""+this.size/2,backgroundColor:this.lineColor,height:2,width:this.state.collapsed?"80%":0,transition:"width .4s ease-in .1s"}),a=Object(u.css)({position:"absolute",backgroundColor:this.lineColor,height:2,margin:"0 10%",top:this.state.collapsed?""+this.size/4*3:""+this.size/2,width:"80%",transform:this.state.collapsed?"rotate(0deg)":" rotate(-135deg)",transition:"transform .5s ease-in, top .5s ease-in"});return i.a.createElement("div",{className:e},i.a.createElement("div",{className:t}),i.a.createElement("div",{className:n}),i.a.createElement("div",{className:a}))},t}(o.Component),g=h,b=function(e){e.siteTitle;return i.a.createElement("div",null,i.a.createElement("nav",{className:Object(u.css)("background-color:#002851;margin-bottom:0;z-index:1;")},i.a.createElement(g,null)))},x=(n(156),function(e){var t=e.children;return i.a.createElement(d.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement("div",{className:Object(u.css)("background-image:url('/assets/dark_exa.png');background-repeat:repeat;font-family:'Montserrat',sans-serif;")},i.a.createElement(c.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},i.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Audiowide|Montserrat",rel:"stylesheet"}),i.a.createElement("html",{lang:"en"})),i.a.createElement(b,null),i.a.createElement("div",{className:Object(u.css)("margin:0 auto;max-width:1200px;padding-top:0;z-index:-1;box-shadow:0px 2px 14px 10px rgba(20,20,20,0.1);")},t))},data:a})});x.propTypes={children:r.a.node.isRequired};t.a=x}}]);
//# sourceMappingURL=component---src-pages-page-2-js-e00dcbc8d3388884afb0.js.map