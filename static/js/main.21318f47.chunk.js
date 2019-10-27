(this["webpackJsonpreact-food"]=this["webpackJsonpreact-food"]||[]).push([[0],{63:function(e,t,a){e.exports=a(93)},68:function(e,t,a){},69:function(e,t,a){},93:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),s=a.n(c),i=(a(68),a(69),a(5)),l=a(6),o=a(8),m=a(7),h=a(9),u=a(97),d=a(98),p=a(99),f=a(96),b=a(60),v=a(59),E=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={search:"",enabled:!1},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"changed",value:function(e){this.setState({search:e.target.value}),null===e.target.value||""===e.target.value||void 0===e.target.value?this.setState({enabled:!1}):this.setState({enabled:!0})}},{key:"render",value:function(){var e=this;return r.a.createElement(u.a,{bg:"primary",variant:"dark",expand:"lg",fixed:"top"},r.a.createElement(u.a.Brand,{href:"/react-food/#/"},"Title"),r.a.createElement(u.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(u.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(d.a,{className:"mr-auto"},r.a.createElement(d.a.Link,{href:"/react-food/#/about"},"About"),r.a.createElement(p.a,{title:"Filter By",id:"basic-nav-dropdown"},r.a.createElement(p.a.Item,{href:"/react-food/#/categories"},"Categories"),r.a.createElement(p.a.Item,{href:"/react-food/#/areas"},"Area List"),r.a.createElement(p.a.Item,{href:"/react-food/#/ingredients"},"Ingredients"))),r.a.createElement(f.a,{inline:!0},r.a.createElement(b.a,{type:"text",placeholder:"Search Recipe",className:"mr-sm-2",value:this.state.search,onChange:function(t){return e.changed(t)}}),this.state.enabled?r.a.createElement(d.a.Link,{href:"/react-food/#/refresh/"+this.state.search},r.a.createElement(v.a,{variant:"outline-light"},"Search")):null)))}}]),t}(n.Component),g=a(25),w=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={url:e.url,catergory:e.category,data:[],sliced:parseInt(e.sliced),clicked:!1,idMeals:""},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch(this.state.url).then((function(e){return e.json()})).then((function(t){return e.setState({data:t.meals})}))}},{key:"find",value:function(e){this.setState({clicked:!0,idMeals:e})}},{key:"render",value:function(){var e=this;return this.state.clicked?r.a.createElement(g.a,{to:"/refresh/"+this.state.idMeals}):null===this.state.data||null==this.state.data?r.a.createElement("div",{className:"mt-5 shadow p-3 mb-5 bg-white rounded text-center",style:{margin:"auto"}},this.props.category," not found"):r.a.createElement("div",{className:"col-sm-11 row mt-5 shadow p-3 mb-5 bg-white rounded",style:{margin:"auto",justifyContent:"center",border:"1px solid #d3d3d3",textAlign:"center"}},r.a.createElement("h2",{className:"col-sm-12",style:{fontWeight:"Bolder"}},this.state.catergory),this.state.data.slice(0,parseInt(this.state.sliced)).map((function(t){return r.a.createElement("div",{className:"col-sm-3 listHover mt-5",onClick:function(){return e.find(t.idMeal)}},r.a.createElement("img",{src:t.strMealThumb,alt:t.strMeal,style:{width:"100%",height:"auto",margin:"0"}}),r.a.createElement("h4",null,r.a.createElement("b",null,t.strMeal)))})))}}]),t}(n.Component),j=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={random:[],showMore:[],isTrue:!1},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://www.themealdb.com/api/json/v1/1/random.php").then((function(e){return e.json()})).then((function(t){return e.setState({random:t.meals[0]})}))}},{key:"find",value:function(e){console.log(e),this.props.history.push("/recipe/"+e)}},{key:"showMore",value:function(){document.getElementById("button").remove();var e=[r.a.createElement(w,{url:"https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef",category:"Beef",sliced:"4"}),r.a.createElement(w,{url:"https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken",category:"Chicken",sliced:"4"}),r.a.createElement(w,{url:"https://www.themealdb.com/api/json/v1/1/filter.php?c=Pasta",category:"Pasta",sliced:"4"}),r.a.createElement(w,{url:"https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian",category:"Vegetarian",sliced:"4"})];this.setState({showMore:e,isTrue:!0})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"row",style:{justifyContent:"center"}},r.a.createElement("div",{className:"col-sm-11 row forHover",onClick:function(){return e.find(e.state.random.idMeal)}},r.a.createElement("h1",{className:"col-sm-6"},this.state.random.strMeal),r.a.createElement("img",{className:"col-sm-4",src:this.state.random.strMealThumb,alt:"thumbnail"})),r.a.createElement(w,{url:"https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast",category:"Breakfast",sliced:"4"}),r.a.createElement(w,{url:"https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood",category:"Seafood",sliced:"4"}),r.a.createElement(w,{url:"https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert",category:"Dessert",sliced:"4"}),r.a.createElement(w,{url:"https://www.themealdb.com/api/json/v1/1/filter.php?c=Starter",category:"Starter",sliced:"4"}),r.a.createElement(w,{url:"https://www.themealdb.com/api/json/v1/1/filter.php?c=Side",category:"Side",sliced:"4"}),r.a.createElement("div",{className:"col-sm-12",style:{textAlign:"center"}},r.a.createElement(v.a,{id:"button",onClick:function(){return e.showMore()}},"Show More")),this.state.isTrue?this.state.showMore.map((function(e){return r.a.createElement("div",null,e)})):null)}}]),t}(n.Component),y=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={data:[],searched:a.props.match.params.searched},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return console.log(window.location.pathname),r.a.createElement("div",{className:"row"},r.a.createElement(w,{url:"https://www.themealdb.com/api/json/v1/1/search.php?s="+this.state.searched,category:this.state.searched,sliced:this.state.data.length-1}))}}]),t}(n.Component),O=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={data:[],finding:"",clicked:!1},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://www.themealdb.com/api/json/v1/1/categories.php").then((function(e){return e.json()})).then((function(t){return e.setState({data:t.categories})}))}},{key:"find",value:function(e){this.setState({finding:e,clicked:!0})}},{key:"render",value:function(){var e=this;return this.state.clicked?r.a.createElement(g.a,{to:"/category/"+this.state.finding}):r.a.createElement("div",{className:"row",style:{margin:"auto",justifyContent:"center",columnGap:"2%"}},this.state.data.map((function(t){return r.a.createElement("div",{className:" listHover card col-sm-5 mt-5 shadow p-3 mb-5 bg-white rounded",style:{heigh:"auto",width:"100%"},onClick:function(){return e.find(t.strCategory)}},r.a.createElement("img",{className:"card-img-top",src:t.strCategoryThumb,alt:"thumbnail",style:{width:"100%",height:"auto",borderBottom:"1px solid #D3D3D3"}}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",{className:"card-title"},t.strCategory),r.a.createElement("p",{className:"card-text"},t.strCategoryDescription)))})))}}]),t}(n.Component),k=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={data:[],ingredients:[],measuring:[],update:!1},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.idmeal;fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i="+t).then((function(e){return e.json()})).then((function(t){return e.setState({data:t.meals[0],update:!0})}))}},{key:"componentDidUpdate",value:function(){if(this.state.update){this.setState({update:!1});for(var e=JSON.stringify(this.state.data),t=JSON.parse(e),a=Object.values(t),n=[],r=[],c=9;c<29&&(null!==a[c]&&""!==a[c]);c++)n.push(a[c]),r.push(a[c+20]);this.setState({measuring:r,ingredients:n})}}},{key:"tab",value:function(){var e=this,t=0;return r.a.createElement("table",{className:"table-borderless",cellPadding:"10px",style:{margin:"auto"}},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{align:"center"},"Ingredients"),r.a.createElement("th",{align:"center"},"Measuring"))),r.a.createElement("tbody",null,this.state.ingredients.map((function(a){return r.a.createElement("tr",null,r.a.createElement("td",{align:"center"},a),r.a.createElement("td",{align:"center"},e.state.measuring[t++]))}))))}},{key:"render",value:function(){return r.a.createElement("div",{style:{marginTop:"2%"}},r.a.createElement("div",{className:"row shadow p-3 mb-5 bg-white rounded",style:{width:"90%",margin:"auto",justifyContent:"center",border:"1px solid #d3d3d3"}},r.a.createElement("h1",{className:"col-sm-12 text-center"},r.a.createElement("b",null,this.state.data.strMeal)),r.a.createElement("h5",{className:"col-sm-12 text-center"},r.a.createElement("i",null,this.state.data.strCategory," | ",this.state.data.strArea," | ",this.state.data.strTags)),r.a.createElement("div",{className:"col-sm-4 row mt-5"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("h4",{className:"text-center"},r.a.createElement("b",null,"Ingredients")),this.tab())),r.a.createElement("div",{className:"col-sm-4 mt-5"},r.a.createElement("h4",null,r.a.createElement("b",null,"Instructions")),r.a.createElement("p",null,this.state.data.strInstructions)),r.a.createElement("div",{className:"col-sm-4 mt-5"},r.a.createElement("img",{src:this.state.data.strMealThumb,alt:"thumbnail",style:{width:"100%",height:"auto"}}))),r.a.createElement(w,{url:"https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert",sliced:"4",category:"Dessert"}),r.a.createElement(w,{url:"https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken",sliced:"4",category:"Chicken"}))}}]),t}(n.Component),N=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return isNaN(this.props.match.params.idmeal)?r.a.createElement(g.a,{to:"/search/"+this.props.match.params.idmeal}):r.a.createElement(g.a,{to:"/recipe/"+this.props.match.params.idmeal})}}]),t}(n.Component),C=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(w,{url:"https://www.themealdb.com/api/json/v1/1/filter.php?c="+this.props.match.params.category,category:this.props.match.params.category,sliced:"100"}))}}]),t}(n.Component),S=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(w,{url:"https://www.themealdb.com/api/json/v1/1/filter.php?a="+this.props.match.params.area,category:this.props.match.params.area,sliced:"100"}))}}]),t}(n.Component),M=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={data:[],clicked:!1,finding:""},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list").then((function(e){return e.json()})).then((function(t){return e.setState({data:t.meals})}))}},{key:"find",value:function(e){this.setState({clicked:!0,finding:e})}},{key:"render",value:function(){var e=this;return this.state.clicked?r.a.createElement(g.a,{to:"/area/"+this.state.finding}):r.a.createElement("div",{classNmae:"row"},this.state.data.map((function(t){return r.a.createElement("div",{className:"col-sm-3 text-center mt-5 shadow p-3 bg-white rounded listHover",style:{margin:"auto",width:"100%",height:"auto"},onClick:function(){return e.find(t.strArea)}},t.strArea)})))}}]),t}(n.Component),x=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={data:[],clicked:!1,finding:""},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch(" https://www.themealdb.com/api/json/v1/1/list.php?i=list").then((function(e){return e.json()})).then((function(t){return e.setState({data:t.meals})}))}},{key:"find",value:function(e){this.setState({clicked:!0,finding:e})}},{key:"render",value:function(){var e=this;return this.state.clicked?r.a.createElement(g.a,{to:"/ingredient/"+this.state.finding}):r.a.createElement("div",{className:"row",style:{margin:"auto",justifyContent:"center",columnGap:"2%"}},this.state.data.map((function(t){return r.a.createElement("div",{className:"col-sm-5 mt-5 p-3 shadow bg-white rounded listHover",onClick:function(){return e.find(t.strIngredient)}},r.a.createElement("h3",null,t.strIngredient),r.a.createElement("p",null,t.strDescription))})))}}]),t}(n.Component),D=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"text-center"},this.props.match.params.ingredient),r.a.createElement(w,{url:"https://www.themealdb.com/api/json/v1/1/filter.php?i="+this.props.match.params.ingredient.split(" ").join("_"),category:this.props.match.params.area,sliced:"600"}))}}]),t}(n.Component),I=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"card mt-5 shadow p-3 mb-5 bg-white rounded",style:{heigh:"auto",width:"100%"}},r.a.createElement("div",{className:"card-body"},r.a.createElement("h1",{className:"card-title"},"About"),r.a.createElement("p",{className:"card-text"},"This website, is a mockup of ",r.a.createElement("a",{href:"tasty.co",trget:"_blank",rel:"noopener noreferrer"},"tasty.co"),"and backend APIs are consumed from",r.a.createElement("a",{href:"https://www.themealdb.com/api.php",target:"_blank",rel:"noopener noreferrer"},"www.themealdb.com/api.php"),". The frontend is developed by using ",r.a.createElement("b",null,"React js"),".",r.a.createElement("br",null),"Hope you'll Like it.",r.a.createElement("br",null),"Developer: ",r.a.createElement("i",null,"A.Zahir"))))}}]),t}(n.Component),T=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(g.d,null,r.a.createElement(g.b,{exact:!0,path:"/",component:j}),r.a.createElement(g.b,{path:"/search/:searched",component:y}),r.a.createElement(g.b,{path:"/categories",component:O}),r.a.createElement(g.b,{path:"/recipe/:idmeal",component:k}),r.a.createElement(g.b,{path:"/refresh/:idmeal",component:N}),r.a.createElement(g.b,{path:"/category/:category",component:C}),r.a.createElement(g.b,{path:"/area/:area",component:S}),r.a.createElement(g.b,{path:"/areas",component:M}),r.a.createElement(g.b,{path:"/ingredients",component:x}),r.a.createElement(g.b,{path:"/ingredient/:ingredient",component:D}),r.a.createElement(g.b,{path:"/about",component:I}))}}]),t}(n.Component),B=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"row bg-dark p-5 mt-3",style:{margin:"auto",color:"white",width:"100%"}},r.a.createElement("div",{className:"col-sm-6 text-center"},r.a.createElement("span",null,"This frontend is a mockup of ")," ",r.a.createElement("a",{href:"tasty.co",target:"_blank",rel:"noopener noreferrer"},"Tasty.co")),r.a.createElement("div",{className:"col-sm-6 text-center"},r.a.createElement("span",null,"Backend APIs are consumed from "),r.a.createElement("a",{href:"https://www.themealdb.com/api.php",rel:"noopener noreferrer",target:"_blank"},"www.themealdb.com")))}}]),t}(n.Component);a(92);var A=function(){return r.a.createElement("div",null,r.a.createElement(E,null),r.a.createElement("div",{className:"mt-5 data"},r.a.createElement(T,null)),r.a.createElement(B,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var H=a(24);s.a.render(r.a.createElement(H.a,{basename:"/react-food/#/"},r.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[63,1,2]]]);
//# sourceMappingURL=main.21318f47.chunk.js.map