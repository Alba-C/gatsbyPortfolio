(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{146:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(158);t.default=function(){return o.a.createElement(i.a,null,o.a.createElement("h1",null,"NOT FOUND"),o.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},152:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return h}),a.d(t,"StaticQuery",function(){return m});var n=a(0),o=a.n(n),i=a(4),s=a.n(i),r=a(151),l=a.n(r);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return r.withPrefix}),a.d(t,"navigate",function(){return r.navigate}),a.d(t,"push",function(){return r.push}),a.d(t,"replace",function(){return r.replace}),a.d(t,"navigateTo",function(){return r.navigateTo});var c=a(27);a.d(t,"waitForRouteChange",function(){return c.c});var d=a(153),u=a.n(d);a.d(t,"PageRenderer",function(){return u.a});var p=a(38);a.d(t,"parsePath",function(){return p.a});var h=o.a.createContext({}),m=function(e){return o.a.createElement(h.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},153:function(e,t,a){var n;e.exports=(n=a(155))&&n.default||n},154:function(e){e.exports={data:{site:{siteMetadata:{title:"Chris Albanese"}}}}},155:function(e,t,a){"use strict";a.r(t);a(39);var n=a(0),o=a.n(n),i=a(4),s=a.n(i),r=a(52),l=a(1),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return o.a.createElement(r.a,Object.assign({key:t.pathname,location:t,pageResources:a},a.json))};c.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=c},156:function(e,t,a){},158:function(e,t,a){"use strict";var n=a(154),o=a(0),i=a.n(o),s=a(4),r=a.n(s),l=a(160),c=a.n(l),d=a(152),u=a(81),p=(a(159),a(8)),h=a.n(p),m=function(e){function t(t){var a;return(a=e.call(this,t)||this).handleClick=function(){a.setState({collapsed:!a.state.collapsed})},a.closeMenu=function(){a.setState({collapsed:!0})},a.topnav=Object(u.css)({overflow:"hidden",backgroundColor:"transparent","@media (max-width: 600px)":{position:"relative"}}),a.state={collapsed:!0},a}h()(t,e);var a=t.prototype;return a.updateDimensions=function(){window.innerWidth>600&&this.setState({collapsed:!0})},a.componentDidMount=function(){this.updateDimensions(),window.addEventListener("resize",this.updateDimensions.bind(this))},a.componentWillUnmount=function(){window.removeEventListener("resize",this.updateDimensions.bind(this))},a.render=function(){var e=Object(u.css)({float:"right",padding:"10px 10px",textDecoration:"none",display:"none",border:"none",backgroundColor:"transparent","&:hover":{backgroundColor:"#ddd"},"@media (max-width: 600px)":{display:"block"}}),t=Object(u.css)({float:"left",display:"block",color:"#f2f2f2",textAlign:"center",padding:"14px 16px",textDecoration:"none",fontSize:"17px","&:hover":{color:"#bada55",borderBottom:"3px solid blue"},"@media (max-width: 600px)":{display:this.state.collapsed?"none":"block",float:"none",textAlign:"left"}}),a=Object(u.css)({float:"left",display:"block",color:"#f2f2f2",textAlign:"center",padding:"14px 16px",textDecoration:"none",fontSize:"17px","&:hover":{color:this.state.collapsed?"inherit":"#bada55",borderBottom:this.state.collapsed?"none":"3px solid blue"},"@media (max-width: 600px)":{display:this.state.collapsed?"none":"block",float:"none",textAlign:"left"}});return i.a.createElement("nav",null,i.a.createElement("div",{className:this.topnav,id:"myTopnav"},i.a.createElement("button",{className:e,href:"#",onClick:this.handleClick},i.a.createElement(f,{collapsed:this.state.collapsed,size:30,lineColor:"white"})),i.a.createElement("a",{href:"#",onClick:this.closeMenu,className:a},this.state.collapsed?i.a.createElement("img",{src:"/assets/CA-Logo.png",alt:"logo",className:Object(u.css)("margin-bottom:0;height:60px;width:60px;")}):"Home"),i.a.createElement("a",{href:"#",className:t,onClick:this.closeMenu},"News"),i.a.createElement("a",{href:"#",className:t,onClick:this.closeMenu},"Contact"),i.a.createElement("a",{href:"#",className:t,onClick:this.closeMenu},"About")))},t}(o.Component),f=function(e){function t(t){var a;return(a=e.call(this,t)||this).background=a.props.background,a.lineColor=a.props.lineColor,a.size=a.props.size,a.handleClick=function(){a.setState({collapsed:!a.state.collapsed})},a.state={collapsed:a.props.collapsed},a}return h()(t,e),t.getDerivedStateFromProps=function(e,t){return e.collapsed!==t.collapsed?{collapsed:e.collapsed}:null},t.prototype.render=function(){var e=Object(u.css)({height:this.size,width:this.size,backgroundColor:this.background,border:"solid 1px "+this.lineColor,borderRadius:this.state.collapsed?"10%":"50%",position:"relative",transition:"border-radius .5s ease-in"}),t=Object(u.css)({position:"absolute",backgroundColor:this.lineColor,margin:"0 10%",top:this.state.collapsed?""+this.size/4:""+this.size/2,height:2,width:"80%",transform:this.state.collapsed?"rotate(0deg)":" rotate(135deg)",transition:"transform .5s ease-in, top .5s ease-in"}),a=Object(u.css)({position:"absolute",margin:"0 10%",top:""+this.size/2,backgroundColor:this.lineColor,height:2,width:this.state.collapsed?"80%":0,transition:"width .4s ease-in .1s"}),n=Object(u.css)({position:"absolute",backgroundColor:this.lineColor,height:2,margin:"0 10%",top:this.state.collapsed?""+this.size/4*3:""+this.size/2,width:"80%",transform:this.state.collapsed?"rotate(0deg)":" rotate(-135deg)",transition:"transform .5s ease-in, top .5s ease-in"});return i.a.createElement("div",{className:e},i.a.createElement("div",{className:t}),i.a.createElement("div",{className:a}),i.a.createElement("div",{className:n}))},t}(o.Component),g=m,b=function(e){e.siteTitle;return i.a.createElement("div",null,i.a.createElement("nav",{className:Object(u.css)("background-color:#002851;margin-bottom:0;z-index:1;")},i.a.createElement(g,null)))},x=(a(156),function(e){var t=e.children;return i.a.createElement(d.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement("div",{className:Object(u.css)("background-image:url('/assets/dark_exa.png');background-repeat:repeat;")},i.a.createElement(c.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(b,null),i.a.createElement("div",{className:Object(u.css)("margin:0 auto;max-width:1200px;padding-top:0;z-index:-1;box-shadow:0px 2px 14px 10px rgba(20,20,20,0.1);")},t))},data:n})});x.propTypes={children:r.a.node.isRequired};t.a=x}}]);
//# sourceMappingURL=component---src-pages-404-js-989d98a2810a8b339b14.js.map