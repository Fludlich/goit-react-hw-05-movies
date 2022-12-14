"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[765],{765:function(t,n,e){e.r(n),e.d(n,{Home:function(){return i}});var r=e(885),a=e(791),c=e(731),A=e(216),u=e(84),o=e(184);function i(){var t=(0,a.useState)([]),n=(0,r.Z)(t,2),e=n[0],i=n[1];return(0,a.useEffect)((function(){(0,A._L)().then((function(t){i(t.results)})).catch((function(t){return console.log(Error)}))}),[]),(0,o.jsx)("div",{children:(0,o.jsx)("ul",{style:{display:"flex",flexWrap:"wrap",gap:"30px"},children:e.length>0?e.map((function(t){var n=t.id,e=t.original_title,r=t.poster_path,a=t.title;return(0,o.jsx)(c.rU,{to:"movies/".concat(n),children:(0,o.jsxs)("div",{children:[(0,o.jsx)("img",{src:r?"https://image.tmdb.org/t/p/w500".concat(r):u,alt:"".concat(a),width:"300"}),(0,o.jsxs)("h2",{children:[" ",e]})]})},e)})):(0,o.jsx)("p",{children:"We can't find any film, pls try to reload page"})})})}},216:function(t,n,e){e.d(n,{IQ:function(){return f},Jh:function(){return d},Pg:function(){return p},Pt:function(){return s},_L:function(){return i}});var r=e(861),a=e(757),c=e.n(a),A=e(388),u="cc9feb50eaf7ec71b368044a87f5f06b",o=A.Z.create({baseURL:"https://api.themoviedb.org/3/"}),i=function(){var t=(0,r.Z)(c().mark((function t(){var n,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.get("movie/popular?api_key=".concat(u,"&language=en-US&page=1"));case 2:return n=t.sent,e=n.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.get("search/movie?api_key=".concat(u,"&language=en-US&query=").concat(n));case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.get("movie/".concat(n,"?api_key=").concat(u));case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.get("movie/".concat(n,"/credits?api_key=").concat(u));case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.get("movie/".concat(n,"/reviews?api_key=").concat(u));case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},84:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAYFBMVEXDw8MAAABwcHDHx8eKioqkpKS8vLzGxsatra3KysqQkJCenp6AgIB3d3dra2u3t7dZWVlMTEyysrIsLCxTU1NDQ0OUlJQhISEyMjJlZWUMDAw9PT2Dg4N0dHQYGBhGRkaaAXj3AAACVklEQVR4nO3a63KiQBBAYbATxxYQbxtNdjd5/7dMIFwEGbaA1Fo05/tpNFVzZJgBCQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICFEdFJROTRQ5jKxbvVRLF79CCmkW043XbeEeTpBxo8zXs2ZA2i9RSRiQbPUw5l90wDUw2cqIyIYamBHpP9Lho+GEMNNM7P8IfB/8BOg2qbcNaB/8BQg2qt3ww8J5hpkA2kkAwcj50GUdVgN3AymGkQpPW+1zMXfFeHdhror7LBuvt9GsXHzpHaaVAdCC/dw9FddnnYNU0MNXDp4WuUp6j7bCAv3jXDUIPAabo5eia9K46SS9ffDDX44nxbA7kWM2V/f5gYa+CTnwyKVeMuwjIaSL15CMNj+72LaODWt7fNTotsUG8dcq+t2bCEBpq0bqC2dhA2G4ho/cLN1VT3TtJkA00u57R8xQVvdw2ujdlgsYGusnGWEfRwl6B1aWmwQbEQ/v4elf7pSBCGt7cdDTYoF8K/2XftNp0JGqcEew3qhTD7rt27p8FHPRvMNbhZCN/Wge49CcIwqSJYa9BYCD+07yfpxmcsNQgax/6qJ0H4Xn7EWAM99426pfwhwlYDz0LoU1xGm2rgXQh9vu+smWoQXAY2uJhr0LMQ+uR31gw1GPVs1lZMNUj/PeIOqaUGchrV4Cp2GujrqATZZbSVBr274n5bNdJANuOJjQY8ozl6GtRm3sD9yDPb824QuHjqo/ureOYJ8p8TZKJHDwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOB/+wQBph2Iu8J1cQAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=765.21d4883c.chunk.js.map