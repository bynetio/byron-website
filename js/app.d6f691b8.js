(function(t){function a(a){for(var e,r,n=a[0],c=a[1],o=a[2],l=0,u=[];l<n.length;l++)r=n[l],Object.prototype.hasOwnProperty.call(A,r)&&A[r]&&u.push(A[r][0]),A[r]=0;for(e in c)Object.prototype.hasOwnProperty.call(c,e)&&(t[e]=c[e]);m&&m(a);while(u.length)u.shift()();return i.push.apply(i,o||[]),s()}function s(){for(var t,a=0;a<i.length;a++){for(var s=i[a],e=!0,r=1;r<s.length;r++){var c=s[r];0!==A[c]&&(e=!1)}e&&(i.splice(a--,1),t=n(n.s=s[0]))}return t}var e={},A={app:0},i=[];function r(t){return n.p+"js/"+({about:"about"}[t]||t)+"."+{about:"140d35b5"}[t]+".js"}function n(a){if(e[a])return e[a].exports;var s=e[a]={i:a,l:!1,exports:{}};return t[a].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.e=function(t){var a=[],s=A[t];if(0!==s)if(s)a.push(s[2]);else{var e=new Promise((function(a,e){s=A[t]=[a,e]}));a.push(s[2]=e);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.src=r(t);var o=new Error;i=function(a){c.onerror=c.onload=null,clearTimeout(l);var s=A[t];if(0!==s){if(s){var e=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;o.message="Loading chunk "+t+" failed.\n("+e+": "+i+")",o.name="ChunkLoadError",o.type=e,o.request=i,s[1](o)}A[t]=void 0}};var l=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(a)},n.m=t,n.c=e,n.d=function(t,a,s){n.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,a){if(1&a&&(t=n(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var e in t)n.d(s,e,function(a){return t[a]}.bind(null,e));return s},n.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(a,"a",a),a},n.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},n.p="/",n.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=a,c=c.slice();for(var l=0;l<c.length;l++)a(c[l]);var m=o;i.push([0,"chunk-vendors"]),s()})({0:function(t,a,s){t.exports=s("56d7")},"0521":function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC7SURBVHgB7ZSxDcIwEEX/xYlFmQWQyAZUMdvACLRUsAGMRabALRUpUSQwVsAUgUQ+2UWKvOKsk+yv7/P5CLPVGo/nCUQ5wtAwdCBIdbHJAnGo069YUxFCkMrYmCeIDF9Qlntk5e3j6IcUHDJ1tHGLgeIwHZrN+xQVfTXnCbrWup913xa/K3dby9Xvj8vor+znsKmKdh1w5hhBH06CXXhfz2MiRXdI7eQIn9YOLSDmVyu7tEmYqDE1RLJ7ARknJzUv6yulAAAAAElFTkSuQmCC"},"129e":function(t,a,s){"use strict";s("76e7")},"16cc":function(t,a,s){},"1cc2":function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQaSURBVHgBzVk9TBRBFP5mJTFiJJhopdE9YoMWWJhoo54mGi1MFCwUY4RGO0ELGzVqNBY2clRWilF+CkETGxILDmw0sYBGGoElkQoTToiQmHjj93bv4Dj2dmeP4+Ajm72dv/32m5n33jwUisS+SzqerkCd+oe4VjgIhWpoXgKFFH87ihfrRqw0kj96VBJFQEVpbJ/X1VYlWtirdZGMORxeyXQaj5we5Zh2MiLoEtuKByTVitKgw5RoKMGaRi2KPSxCsTA4iuOOdarXQY0CCdZc0c9LqFohBm3jnepW4WofyJRu2oL3XOBxlAEaGNbzOOF8UKn8Osuvg6rEQLnIue8DDioK4le3gqBMq3RAmcH1GHeXVH557oPdqJvI+BXWExq3xrtVW/ZxkaB9SdvKwgALbKwvUul5xLLrcXGKZctvAHICz+Zm4Coo6lkWJrCBQBW3i4oV8iDqocTYtQNoPgucOgTM/gFGJ4FELzD1y6vfVgns3umV+4EuVezvQ1fBWKOeCJvelgbg3eDSC4IgpJ5dB6q2rqx71e/dG44C5+4CP6cLDpMa71LblRuVcHMgBGOd3mCNT4JJinJd9zx1CmGOirb1eeN8+la4Hf31CYvk4ghB9mVyl5c3HCvc9vShYHICeg7cv+p9TBAshnGW1qhDCEQ5+eosyWc3vMvvBYdrEQqZ+jsvGNL0B7cjt7hF22fDAC/zBhMVhxKeos1nPGKy8Gfnw8eSD+79HN6O3OoqqLcNA8jXXiSpXXnTJ8RMVMvFnMFHZFAthjo0zquiMh+fAr/NBw7EbESCRgPKjtu/FyXBl+/mbYVgyqShGNlS4euocdOUpQ0JyqClIDk1HYmgY3GTDJu27h0CnrzhLjTwJoWQ6DNvq9OYpC3EoGkH2X0t9bSFO1AURD35SFPQzAxb6QgKymZ5/BZFI2pfurqkGyzwaDkDmB8rxZvcpJKH95ur2d4bbXolM8HIOpY1M4kIXV1PIBtm1DFrH5mcQCHp3Qi7iZmDv5gJ6yNq1dpeqCTewy+cykU2agnzuX7g9MYk87B4JuE0y0Glxa+xkLnJePBIBJcmm6G9LzDeC0IHY8Fm+bF0aPJUlLC/4FoUT1JPf1zL+4E9DA5yFBTTI1MuNk7IzRbrFjUmuHFPZvM2y46dNZd1K0ueRxmvqnIVZHzAlF3TWPdSvmZF6iNoqtccmnma7uV5Gt/cTOyyHlBlTH0IGJwOTHSrk/nlvtGM3owL7JBEmSDk9ALq/eqC029rP92af4n8ac1FYDzIrd5Ke9SsvfRtqTFDcreDyAnMUsCSt5HUiMI1rB6uaukFpoB98oH5iJZEzxBlr+MR8jg6cxcy7UxptJkQK4pgLkg2znxOnG+XY6udIZw18imWz7BMIqVBLpMRp8h/Q/wHEFdwV4po84kAAAAASUVORK5CYII="},"3f7a":function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJSSURBVHgB7VTNchJBEP56l91CvXC2yiryBGKVCsfNG+gTyBsQniDk6EnyBCFPYHLyaLgBHsAnAA9WeeSEZJFte2b/ZlhWscwlVfmqtrZ7Zrqn5+sf4L7DtTS/dQr3aYDt9yHuCJRJ3qsGyJlqmamNzeiy3CyowV91xLwtSl2+hRgNED4+B26WJRc0P4sWGDtd3I77+53/nCaOd7EA4xqI5thAWPgyc/I9bsQ/nCf/D/BfnxZceKt+FnVExwjHBI5eaF2tEzrCRB9Vd2kb+k3Wn5ZbvUz3m3NUXgbGubleV5SaqMnLFAuxzUVOhHmBgopIodIK4PAFciri56sIzXMZWnX4PNeiQ0dYjxZahMmfdpxE+2t0g/BWnk5n1vPNsxYDUTuRBqnznQsorhpyDd5nS4SjnkR7pPlmnEhyziTCY5SCv5laJZPCdR+eLwmiQPMM7iKcXGX76kVSg/hHOFa0rpNXA+ijVFEP/4mKpUVJklJsaYqDQc/32TjWGea0dmey9Rbb8TUOBXOg/x59NZftF5Dm+I18DWmejtR1AEouDSc9lEHNMHBNLplhPV7YLi00ZAz40qn0ruCkUPcppOH88hlmT1P8WMN7Nouporos1JKNgUzYIl2qGV18ksqr6hGzGb8vHMmkuL3bkmj7YcrwySPpBdMsnabc02eZL7GZnGAP8guYhsJ329i7kobq6q5UWajKKIgiyY30CVZCIdWyAEqcA7s58Jp9Yxz8GSwFwTJG4gbEYRco6CEnc4Wh6lrmD6V5UMNuIfoQkTj/i+MHHIzf4dndKexQlcUAAAAASUVORK5CYII="},"43c7":function(t,a,s){"use strict";s("cc13")},"46c8":function(t,a){t.exports="data:image/png;base64,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"},"4e75":function(t,a,s){"use strict";s("8282")},"555a":function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAANCAYAAACZ3F9/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADJSURBVHgBlZHBDcIwDEXtlANjMAIjVCwAG0B7gpZKZQJUBiBSaXsFJoERmIAduHLA2KnUU+qCD0kk+/nbPwBK0NpO+nKmF0pLC8HoSWm1/AsExJec3OLsgxGUYNUdlxzlyXeE9fY6rOjIwAJR3ClvyrxTdAYYCNUGEMx59IVTJiiwyQoBQzbhBr8Hsf5sBGN4wJsitRRRzAnbNxywyu66OUkty6xkv3ZME2OTXiSnmwOf3AepICWnPY9lfZCuaNwfe6HB4B2nfbkvwaZJi8d9OagAAAAASUVORK5CYII="},"56d7":function(t,a,s){"use strict";s.r(a);s("e260"),s("e6cf"),s("cca6"),s("a79d");var e=s("2b0e"),A=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"container text-left",attrs:{id:"nav"}},[e("router-link",{staticClass:"nav-item home ",attrs:{to:"/"}},[e("span",{},[e("img",{attrs:{alt:"",src:s("85a7")}})]),t._v("Byron Network")])],1),e("router-view")],1)},i=[],r=(s("5c0b"),s("2877")),n={},c=Object(r["a"])(n,A,i,!1,null,null,null),o=c.exports,l=(s("d3b7"),s("3ca3"),s("ddb0"),s("8c4f")),m=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"home"}},[s("Hero"),s("Features"),s("Roadmap"),s("Tokenomics"),s("Community"),s("Footer")],1)},u=[],C=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},g=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{attrs:{id:"hero"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row align-items-center"},[e("div",{staticClass:"col col-sm-12 col-md-7 text-left"},[e("h1",[t._v(" Decentralized apps for the Cardano Blockchain ")]),e("p",[t._v("Our team works tightely with Cardano Developers to deliver the best experience of Plutus Platform.")]),e("button",{staticClass:"btn btn-primary"},[t._v("Get Started")]),t._v(" "),e("button",{staticClass:"btn btn-outline-primary"},[t._v("Read More")])]),e("div",{staticClass:"col col-sm-12 col-md-5"},[e("div",{staticClass:"img-wrapper"},[e("img",{staticClass:"hero-img img-fluid",attrs:{alt:"",src:s("f0b9")}})])])])])])}],f={name:"Hero",components:{}},d=f,v=(s("43c7"),Object(r["a"])(d,C,g,!1,null,"02adec4c",null)),p=v.exports,h=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},b=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"features"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("div",{staticClass:"features-img"},[e("img",{attrs:{alt:"",src:s("ba8e")}})]),e("div",{staticClass:"features-numbers"},[t._v("$342B")]),e("div",{staticClass:"features-numbers-desc"},[t._v("Trade Volume")])]),e("div",{staticClass:"col"},[e("div",{staticClass:"features-img"},[e("img",{attrs:{alt:"",src:s("6d23")}})]),e("div",{staticClass:"features-numbers"},[t._v("+2M")]),e("div",{staticClass:"features-numbers-desc"},[t._v("Active users")])]),e("div",{staticClass:"col"},[e("div",{staticClass:"features-img"},[e("img",{attrs:{alt:"",src:s("875b")}})]),e("div",{staticClass:"features-numbers"},[t._v("53,324,233")]),e("div",{staticClass:"features-numbers-desc"},[t._v("All time trades")])]),e("div",{staticClass:"col"},[e("div",{staticClass:"features-img"},[e("img",{attrs:{alt:"",src:s("aa06")}})]),e("div",{staticClass:"features-numbers"},[t._v("+200")]),e("div",{staticClass:"features-numbers-desc"},[t._v("Financial instruments")])])])])])}],w={name:"Features",components:{}},B=w,R=(s("4e75"),Object(r["a"])(B,h,b,!1,null,"7a54dd5c",null)),k=R.exports,U=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},E=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"container",attrs:{id:"roadmap"}},[e("h1",[t._v("Product Roadmap")]),e("p",[t._v("Get the Scoop")]),e("div",{staticClass:"d-flex align-items-baseline justify-content-around"},[e("div",{staticClass:"align-self-end"},[e("img",{staticClass:"white-bckg",attrs:{alt:"",src:s("75b2")}}),e("div",{staticClass:"timestamp"},[t._v("Q2 2021")])]),e("div",{staticClass:"align-self-end"},[e("img",{attrs:{alt:"",src:s("46c8")}})]),e("div",{staticClass:"align-self-end"},[e("img",{staticClass:"white-bckg",attrs:{alt:"",src:s("75b2")}}),e("div",{staticClass:"timestamp"},[t._v("Q3 2021")])]),e("div",{staticClass:"align-self-center "},[e("img",{attrs:{alt:"",src:s("c5d4")}})]),e("div",{staticClass:"align-self-end"},[e("img",{staticClass:"white-bckg",attrs:{alt:"",src:s("75b2")}}),e("div",{staticClass:"timestamp"},[t._v("Q4 2021")])])]),e("div",{staticClass:"achievements text-left"},[e("div",{staticClass:"d-flex lign-items-baseline justify-content-between"},[e("ul",{},[e("li",{},[e("img",{staticClass:"tick",attrs:{alt:"",src:s("a413")}}),t._v("Public White Paper")]),e("li",{},[e("img",{staticClass:"tick",attrs:{alt:"",src:s("a413")}}),t._v("Education Campaign")]),e("li",{},[e("img",{staticClass:"tick",attrs:{alt:"",src:s("a413")}}),t._v("Marketing Campaign")]),e("li",{},[e("img",{staticClass:"tick",attrs:{alt:"",src:s("a413")}}),t._v("Tokenomics Finalized")])]),e("ul",{},[e("li",{},[e("img",{staticClass:"tick",attrs:{alt:"",src:s("a413")}}),t._v("Public White Paper")]),e("li",{},[e("img",{staticClass:"tick",attrs:{alt:"",src:s("a413")}}),t._v("Education Campaign")]),e("li",{},[e("img",{staticClass:"tick",attrs:{alt:"",src:s("a413")}}),t._v("Marketing Campaign")]),e("li",{},[e("img",{staticClass:"tick",attrs:{alt:"",src:s("a413")}}),t._v("Tokenomics Finalized")])]),e("ul",{},[e("li",{},[e("img",{staticClass:"tick",attrs:{alt:"",src:s("a413")}}),t._v("Public White Paper")]),e("li",{},[e("img",{staticClass:"tick",attrs:{alt:"",src:s("a413")}}),t._v("Education Campaign")]),e("li",{},[e("img",{staticClass:"tick",attrs:{alt:"",src:s("a413")}}),t._v("Marketing Campaign")]),e("li",{},[e("img",{staticClass:"tick",attrs:{alt:"",src:s("a413")}}),t._v("Tokenomics Finalized")])])])])])}],S={name:"Roadmap",components:{}},I=S,Y=(s("6249"),Object(r["a"])(I,U,E,!1,null,"ad13eaf2",null)),Q=Y.exports,V=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},x=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{attrs:{id:"tokenomics"}},[e("div",{staticClass:"container"},[e("h1",[t._v("Tokenomics")]),e("p",[t._v("Chart")]),e("div",{staticClass:"img-wrapper"},[e("img",{staticClass:"hero-img img-fluid",attrs:{alt:"",src:s("ca3e")}})])])])}],y={name:"Tokenomics",components:{}},J=y,L=(s("129e"),Object(r["a"])(J,V,x,!1,null,"5d8df4b1",null)),O=L.exports,F=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},M=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{attrs:{id:"community"}},[e("div",{staticClass:"container"},[e("h1",[t._v("Join our community")]),e("p",[t._v("Follow us on social media")]),e("div",{staticClass:"row"},[e("div",{staticClass:"card sm-col-12 md-col-3",staticStyle:{width:"18rem"}},[e("div",{staticClass:"card-body text-left"},[e("img",{staticClass:"icon",attrs:{alt:"",src:s("1cc2")}}),e("h5",{staticClass:"card-title mb-4"},[t._v("Twitter")]),e("h6",{staticClass:"card-subtitle mb-5 text-muted"},[t._v("Stay up to date with "),e("a",{staticClass:"follow",attrs:{href:"https://www.w3schools.com/",target:"_blank"}},[t._v("@ByronNetwork")]),t._v(" updates on our Twitter ")]),e("a",{staticClass:"card-link",attrs:{href:"#",target:"_blank"}},[t._v("Card link "),e("img",{attrs:{alt:"",src:s("555a")}})])])])])])])}],T={name:"Community",components:{}},G=T,X=(s("c077"),Object(r["a"])(G,F,M,!1,null,"4feea1b2",null)),N=X.exports,W=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},j=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{attrs:{id:"footer"}},[e("div",{staticClass:"container"},[e("hr"),e("div",{staticClass:"row icons-row"},[e("a",{staticClass:"col-12 col-md-6 main-logo text-left",attrs:{href:"#",target:"_blank"}},[e("img",{attrs:{alt:"ellipse",src:s("85a7")}}),t._v("Byron Network")]),e("div",{staticClass:"icons-collection col-12 col-md-6 text-right"},[e("a",{staticClass:"card-link",attrs:{href:"#",target:"_blank"}},[e("img",{attrs:{alt:"ellipse",src:s("3f7a")}})]),e("a",{staticClass:"card-link",attrs:{href:"#",target:"_blank"}},[e("img",{attrs:{alt:"ellipse",src:s("0521")}})]),e("a",{staticClass:"card-link",attrs:{href:"#",target:"_blank"}},[e("img",{attrs:{alt:"ellipse",src:s("a5a2")}})]),e("a",{staticClass:"card-link",attrs:{href:"#",target:"_blank"}},[e("img",{attrs:{alt:"ellipse",src:s("6982")}})])])]),e("div",{staticClass:"row text-left"},[e("ul",{staticClass:"col-6 col-md-6 col-lg-3"},[e("li",[e("a",{staticClass:"main-category",attrs:{href:"#",target:"_blank"}},[t._v("Platform")])]),e("li",[e("a",{staticClass:"footer-link",attrs:{href:"#",target:"_blank"}},[t._v("Products")])]),e("li",[e("a",{staticClass:"footer-link",attrs:{href:"#",target:"_blank"}},[t._v("Use Cases")])]),e("li",[e("a",{staticClass:"footer-link",attrs:{href:"#",target:"_blank"}},[t._v("FAQ")])])]),e("ul",{staticClass:"col-6 col-md-6 col-lg-3"},[e("li",[e("a",{staticClass:"main-category",attrs:{href:"#",target:"_blank"}},[t._v("For Developers")])]),e("li",[e("a",{staticClass:"footer-link",attrs:{href:"#",target:"_blank"}},[t._v("Introduction")])]),e("li",[e("a",{staticClass:"footer-link",attrs:{href:"#",target:"_blank"}},[t._v("API References")])]),e("li",[e("a",{staticClass:"footer-link",attrs:{href:"#",target:"_blank"}},[t._v("Lorem Ipsum")])])]),e("ul",{staticClass:"col-6 col-md-6 col-lg-3"},[e("li",[e("a",{staticClass:"main-category",attrs:{href:"#",target:"_blank"}},[t._v("About Fizen")])]),e("li",[e("a",{staticClass:"footer-link",attrs:{href:"#",target:"_blank"}},[t._v("About us")])]),e("li",[e("a",{staticClass:"footer-link",attrs:{href:"#",target:"_blank"}},[t._v("Career")])]),e("li",[e("a",{staticClass:"footer-link",attrs:{href:"#",target:"_blank"}},[t._v("Lorem Ipsum")])])]),e("ul",{staticClass:"col-6 col-md-6 col-lg-3"},[e("li",[e("a",{staticClass:"main-category",attrs:{href:"#",target:"_blank"}},[t._v("Legal")])]),e("li",[e("a",{staticClass:"footer-link",attrs:{href:"#",target:"_blank"}},[t._v("Terms&Condidtions")])]),e("li",[e("a",{staticClass:"footer-link",attrs:{href:"#",target:"_blank"}},[t._v("Privacy Policy")])]),e("li",[e("a",{staticClass:"footer-link",attrs:{href:"#",target:"_blank"}},[t._v("Lorem Ipsum")])])]),e("hr")])])])}],z={name:"Footer",components:{}},q=z,D=(s("b143"),Object(r["a"])(q,W,j,!1,null,"6a499a5c",null)),H=D.exports,P={name:"Home",components:{Hero:p,Features:k,Roadmap:Q,Tokenomics:O,Community:N,Footer:H}},K=P,Z=(s("ee71"),Object(r["a"])(K,m,u,!1,null,"fedb808a",null)),_=Z.exports;e["a"].use(l["a"]);var $=[{path:"/",name:"Home",component:_},{path:"/solutions",name:"Solutions",component:function(){return s.e("about").then(s.bind(null,"70e4"))}},{path:"/developers",name:"Developers",component:function(){return s.e("about").then(s.bind(null,"bd86"))}},{path:"/use-case",name:"UseCase",component:function(){return s.e("about").then(s.bind(null,"3666"))}},{path:"/about",name:"About",component:function(){return s.e("about").then(s.bind(null,"f820"))}},{path:"/contact",name:"Contact",component:function(){return s.e("about").then(s.bind(null,"b8fa"))}}],tt=new l["a"]({mode:"history",base:"/",routes:$}),at=tt;s("4989"),s("ab8b");e["a"].config.productionTip=!1,new e["a"]({router:at,render:function(t){return t(o)}}).$mount("#app")},"5c0b":function(t,a,s){"use strict";s("9c0c")},6249:function(t,a,s){"use strict";s("16cc")},6982:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADRSURBVHgB5ZQxDoIwFIb/V5Q4cgETvYEu4Kg38AYeQR3dOIJH8AgewVHC4g1gdZIZlCdQJDGBhOR1MPEbKH1Jv7avryWMFhu88iOIHMiIweQTbC8qOhOYIRk0sjQgSLA9Lr6OgmFUx2xRnQpDQgGD1mgaTGFUqBOsD0r/n8G8rEqLOQH4hCzctw3tu+V1U6dlS2oH2/UlQiCnVbVizuc6QFuZ8Hm9VG0W3uqIIxP25PeF9FUiEmrPX+Zw6D4MvNYfYgvW+F5oZ+go1N6Ud9xShzcG9zS90n1HGQAAAABJRU5ErkJggg=="},"6d23":function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUjSURBVHgB3VpNchtFFP66lVQIbJQTZBxg443FCSznBA5VVJGwiAI7Nk4ugGUOQOwLBGWRmIIqYk5g+QbxjgJi94JVNlZYxMbG03xv1D2aGY/+ZWUmn2tK3TOy5n39Xr9+/V4rzBCffmFr59ewrELULFDjrSqvIPM1oywMn++jgsPKv9j78xf1EjOCwpT45EtbDxVWoXEfNiIwCQyvduUMW9OSm5iQELEK67zqfb7SsV1BDV/SkRvWdrWlVKy9PLzk881Xz9RTTICxCQ0g0qGGnoYcaRyjbXZUZ9DvBKu2iuuoU4BVSrGsckwzDLFiflIGY2BkQiKA/gjrFPph8j5Hvc1rgy9uYwoEHChqpsHrPtISbh48U49G/Z2RCPFlgdLYTY6iI/Jg3BEc6V0KzQyxkbU1lFBwz9a0wm484emhwi6RNi4RJNbgIK4nBtGEZ7hjhjgNPfBH79rVJBnRSniMzy6bjIDvaFlqhY5lx4ujr2JXZBr0f301dEEzwMbBc9XEO8Cte7bJj3XX7VBTK/00lUsoZ868MzIeF0iFkaWY7PdyTa5oZAROhg3XrWrKGLn+DC4QuvWVfezJiP0WgYyHyCLz2HWDaBnJIEVITC1eZyTeCjGy/58X7DXccRGIyPhQ1q/k8xQhMbW4DTRnvcbMAqalOhzoB77P9SqlpZgQvVojMW9ar7Yni6XmAVk2vOmRUD2ppZgQXfSab9ODbKDgkCjFt5NaiggF3MfQHmvuXquIppaFyJinpYiQutILOKmdwppaFhIU+7aWPRm8yTF8734DZh5hzazgZO1uU1wwq8XcYmegYh9fJniLqgoXra/0NmphLxAsDVRvoYVw0dRKED99iz2UDEzKtH2bzmFJk+GS63eGbZuLCFlo4XMWzDTp0GmIHmNmqaS5Q7lQSILWnORE6cBQyLhmkIwUDMqLN76h8Z4hJsQI4QZKCpK4Gbf93oJbh5soP4ym7/auOkBJYbupZfHURtND7Lv71bw9etERNCKZI7npsffFbffWnw9dkFoisBxTT3SNDv9LxEIWKygZQiBOPAoX7RJ2qRC8LKg3bHrrQy7ebfdC8EwWpcj4+yQqxwRRx219IkJcg+JtQzaLUlTUmxbnLL/4PtPDW/IZp4IX7tpd5YpYJLhQ9LyC5BCZPT2UtuQWDrdVNP/jSCG5PyexH1FgLH5rRcam75NEy7dTyfqMllaKmF8QUzN/oEES3UG3ODzYVrf881RwmsqiaDxGAWF+x4LqVSHA4tvt5PMUIacRT6pwG74a3TQH+ofYs1lsZud63/pQ0ZyCkPnnNJo3Xe1kTM0jdz+UJCNl/I+HlAEvG3lksqbmMXCDF50SYUWC0ewLVtDmvj416QAWG1alyABHzIN83s+CBlbBk75eQKexw+vRPMxRwhrzBjcqH+DXxCGPI8ZrX5ufVd/84WhlfUR1I7+1MLIGTHp0ZRjELb82UKcMa841niSSOEcMRG+b54PL+hMfvCBaUnaZlbZEI68pz9sTBBWFJ6mjN27OzOTghYdspHTXltcyj1qaFYu/JlyEF7+x6uSUk/kMcobou8wZIsu/rfCYAzdiEnRkQh5Rcv8qXuQdNuLVZib2t/MRDy9VrkcHK5ZzjqZZd/Tm+3GjlbEJxQJ1j66sKcSFsuwvd1ToFmcVF3mrVjK1cuWfrZuYSO+1U0KchpLKef4RsWGw7rN7NI3anTZ+nJpQEs4jLlO4BUq6JJrIkJRDgUfy6XIZ+/Rce8M81zj4HykJQpwXQXJdAAAAAElFTkSuQmCC"},"75b2":function(t,a){t.exports="data:image/png;base64,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"},"76e7":function(t,a,s){},8282:function(t,a,s){},"85a7":function(t,a){t.exports="data:image/png;base64,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"},"875b":function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE8AAAAkCAYAAADIB2cfAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPdSURBVHgB7ZlRUtpQFIb/G+3U+sQOGm0XYFdQ2AE+dKbaB2EFxRWIK1BXoHZGcaYP2hVAVyALqJIdlL44bbW5/U9IIIQkkOCkKeabySQhlwv5c86555wABWOY77U561gDBUPWt/WeYaC3tq2vzaouTRtfiOdDaZSdPbChVtGeJmAhXgQioLGKg7gxhXjx1OjKx1EXFXKMua1rS8BbzINC5+ZMnc4ypw2UKYjJw77m5h4LJ7fnqj45dU4xa7pk/MZ3PAL2Pd5Yn1U3wZxd28amMtCOEzC3bmudqL7W6GBeNCzcc/PmxOA4bjwtsG5dKEvbqPjGT7hwrt02D0jeF2WBc4vnLefWlepjQYkScC7xZFJjCdc0dYkrFYkrWFB4r2Um0G3vnDFxLXXM854GhRPLK+EZXmJBce91GO8Yi08lJi4jJZzsYGjGGkdWS33BAhJ0WRGu11I1OU7ltlIDctccfmCgoWz8iBrPa9a3C9VBQl5t6bZWg5IpQyy6ZEUsa0I44Kp3rja9gYnFe03ft32+Pyv2MqrWp9mt8zHzvKRIisStHhCuq+8oqm9hTOy2D0iZHD4kGy45GZ98nUF6vgojGVVuJaWwQbOKFU6YanmSiiy9QPmPRldMWT6j2za52/PG2Bqb/IXoVMVA3zrPx0rspFYrKHn34icsTEQJJyxP+yFpzWhp0cDJ9ivyOXOc5toW44HCjpzz2k7vYhQL8ooTCu7RkwyBQtVuWqOaN4w44YRID/SEk9aMnFMoc2zi52h4pQuvVSUPwv/AILUCLezQfKc3oofFCyeEihcULgynThzVfvIDFnKO/GeqsuueloxnuPQ3PCnoV2c/g3DCRMyLEc6iu66FTSLfyUt5JtmANsa9JAgL/4/e/cnKyryt4l2T9CQsHoYxJt6EcOww8GnA63GxTZ1Z0KcA3dsztZvkO2nTKLHG25Y6RELGFgwKd+wXjqtoxVCoYbCyljJNWPk+gTHpNEm9/LCCLnND8YCpL2/88J5T5ZNDy3N7VTXnxBXOybK5QqlfOOTILPMt5z/43WlW3FeHZtwY5o6XGAm8L9kDUuCIFyUcFpD1D/qA99iQ42C8S4rhTPZEhHOs0hXOiecswTAHBiepeSdchY4WVTiHFXht+P5jGIla39INOu/w/SRX1KmZd8EAL+Y14atVgwJ69SCy5Cfr4Zy39v2rbRMhAvpa7dmKJ321O74yzLGAY0lymICMg1WpXfEPkPcEeY7BE+VZUECO6LtWJxZwhIygcB0rRfc5S0L7eRMCDoisbZ8qoV0VN+PeR0Eskf28QsDpxL6OCAhY5H4B/gJU+93wDLNnrwAAAABJRU5ErkJggg=="},"9c0c":function(t,a,s){},"9d18":function(t,a,s){},a413:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAI4SURBVHgBrVU9TBRBFP7eHNUlmjPRShP36LTSaGKlUqix4yKNXGLkOioPGysSuUQbCz3trI4KaCDQkVDwU9EQqKCDJYEKEjYQKAjZ4b2ZO47czh27sF+ymdl9u9+bed/s9wgd4BV0TmVRJo0eTfDkkQkQAgqxpjOYDs8w40+Q346DnMQftZch1Ji0B/EwGoaouBKp1gfdRV1WGawmIBcMKIXV7n491BqgFvLvPIzgZhjZHKNKJIGsnIcq0oDG181xql4kkJpLWTiQQzoIWJOnoonRgIjLkh65IMecNcNtVq+whWvixSPg8ATY2I7GwhPcUYpQwDXR9woYG7bX2+fROP9DQ10sQq9GcnzpA8of7PzoGNjdi76jNV4rPu9PXAS3ssD9u7iSXIiLP4F1R4lYB6+Lx4i4QizbFhR/MMl+M/ZrkEvz0s6l7oN/gB3H6uvwlOvpO67ng3v2kkSSUHYk8wb58oZN3oHc7iJf1FvUMLFLKL0Hhj/ZuZwSIXr80N5PLgHf/iMOAsXn33dFarO8/d9WwNvZJvm/ydjkIvKaYiEW270wt2IFbJwQIf87hdjgysyQN8Cef4qDTi+KFm+esSfPIhHYLvLGi/L9ep6S2XMcjLKrlswp4lqVeAiQHsTsjGWbBKYTaVSQFnSzu138B3X/TiNJpdELBJGebNoeQTpbUvsOZOWXyZ0JBGLh0iP4+owYYA0XREdX06dOH9Z7RS9/XCBrimZX7L6imS//EHt+1Z+mtgfkHE12wlKR9rLLAAAAAElFTkSuQmCC"},a5a2:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAWCAYAAADNX8xBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHwSURBVHgBrVRBVhNBEP3Vk/DU53viVjdwApKFkh3hBOIJCCcQTgBZuhJuMNzAGxg3vkx0MTdwFu6dJc6MXVZVdwYS4El4+e/NdHV31a+u6qoG1gSyf/fNSMRPICrBmKCmMTAtgspwM4yT0obOYAjiU4B7Nmf/Hs2PSSTa/SKUwyUnSrT1/zUeo5qduTgJ7J72Rb6MGsGAubRvvmaynJhwEoMyW7dA3hGP1WwETvpG+uzpS9Sz8FUZSRh9JK6PanqGhotFUwzEsw+zmnfs+PW33OblYhCov+eoo+yc5I5V2lOOBN1X55LkgSykaLKPeCj8rxzJ656F5kAa2k7Ihb/AqvAu2BDeETZ27XyWg8cg2jusCUpUmPREk74qerFYUQoRfzXR+xFWRbd7YCMjd5KwNKzSh1AKD4XokjuNtmlskbeplMBhZE/Bfy/RPM/b/mohfde5kuv2e6J3LDYamhRxth1uTY2JhTSSzaHtoFUdnP2Ohjf2pcETOsLVtAi3RhjJ7wUcbYt80faWvgbL0D3V0Raqs30l0WVnxsHwAE2zhT/Z8TVB28CimYwjOUynmU5uOZFn5NxC1FGh8rxQb+K+dcwLkulzDPFwtZtbJrJjspJtYoN/xr3ilvb1u3QPkaKqjtqcqIGj8R3qJ3c6WCf+ATRHvE5yzxBLAAAAAElFTkSuQmCC"},aa06:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAA2CAYAAABnctHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAjNSURBVHgBvVpNUttIFH4tmFSGLMa5gSHJOnCCMScILFKVn6nCnABzAvAJgBNgFvmpmgXOCXBOELOfBM8J8GwIldjq+V6rW/1ako2lQfOqVLbbcvf7/d6PrKhmam7pxvJDWuf3f31UA/ofSFFNxMJEj+iANHXE8iiOaXP0UY2oRoqoJioQiKkZRXTBAlONVItQzVe6mQqk6QTWWcW1676OfqU21Ui1CLUMxt37eEI9djdcPTj7kNeUoudUI9Ui1GRKY/d+aTkRgK2nNRm3w+s/VCPVBhSrr/UFLNIyh2ga6AgIaIVid6wTLJazC803ur2k6QXeNrQyaNWtwgCssQuVXUBrTc3C6fSrblWBDKKu0B6U1DJnKOrHN3Q26quxvC+w1OobfY6FrcxelWGYXQ7WOsS1Yw5T1P76Tp1RBTJ7RYmSKMvfDW1IwVJLsYWcQNDyAOKO7Wdm7BSb7gZb3dI4q6EssSLW3uiR+zyd0t+0oADZNaMcKxD467M5HH+wHiPtobs3BQq43I4T6OqD2rx6r7bhMvt2wxbyy1VwrdD12mvdoXumtbf6KHcWLmdtUA/8bTN/4NVZfUfukUO/CHHk3seK5loCqjoo0irT01e6tfaH3sPBv6d7R7Tz5LXeevZSrxf9hr2lIGGHpOnSH5+kCFAjZMsS3OQQLwf2h/uKfVXRkTG5hqAKLun21cYlW/a9sawTBL/Zgqp2HNLNoRGugQOigpjphbJQy343xtkdLKgY/BogEjwEQjXbuqF+0JeCQGRIbn/9EAY4QIXvXbcnHvN7bQWtQD0w3RAg1fv2XgUxDCuuw60uiHLKGkMxGxLIAvSzaHWqPHNjMNz99kEdZ7nAvRxnF1RM/LuzOKkghhSnbtykBHhauEzayP0SXhHrYrRlwcDwqVMmWwiK3B+9V0N5X2HyNQXnQ2rcBeMywSb80FDHOGSBFsOesQWXOwi8A7UilNi587egWehbuaJADHL8Hc5jhgEh/gVuyUxHdB1N6HJyS0PJTDaXGaYK3L0MVRIKAu3hJXVJROzuVy5YyWd9SoK5ECzAdH+qjUVHYs9DckDFcfITLvhn6FaLUmmhWLPREn1xDAcCAa4RZ6cLIJ87/fjbO7XvPkIwVhQrzLgyctEGVaDSVTq7imC66wRid0SOOydfiQ/w0rG9lLs2RcJkzjuMoi5GgHgd+zvW9nrV5F7KUsZKyO6WoRFiaNWss4VYoITGsN6+E3bWPtmc5CDcQvcXtxfWH1NJKmUpCJRqTlmQsIF+5JhAQtycJxATx5J+QBvaVwRtVoz5DvBsaruEGpw6Zu3DZxdVNIFQXBE8QanydNZGypc80+/0yWyACsJpHADQyeaMmYL11Bjwv02U5LDIK4Zd9yRlUOW6BgNUqBGvXV2Iz1dP3mqPnmQlXkLSzVQEQcvBFUf0g67toWlZgpi4cqWUc8cyJFHPnjew63wWx9oILrgqBSKBvAEBUblQMJZi/y4ocYLJz/ItpUUo3O2zueGlyfBNu3xCFSh+4BkMrOIL62bKEBQLl3UhwBbu4uposvdygc0phV1NMNaFVpRrOYxgjxLzxgzV6XnJJstLHrpR2lTKKcYN7X44+Te3DtdMq3E+n69I1Kbs6uD1ENdJ5PltLK3QVjSJvCb4JvMqa70EoptUUOjK3xL5lqUsRTr5LRTTnHFLkzI8TEVbJNsl8xnFZrrgkEYiiqnnuHCkvCXQWPraa7pgwi0gDGUa9jA5ZfJWczxo3/4w+hr0g7tNtAeZ6U8aRhyYzvwcQ8bMIhcxQjEo6J/pMJKBwsTXVLhctFyt7eA4IbufEhqPRAXPlYXpxpkPSuCek7PrwEVR3ePSKrKa2NaUC8wxWofttD575A/EvWaWZ78b27UXVIV+eHDAeWkrI4Ar8BDkt11psXRdJw0nv/dNYuJy3CPx63XR6Em2Gvj+MX8/C5IXpaKUwC2/dhXKjFbE9nMte+5AnptOk6zWezSHLJS3+L2b4DAkA5U4dzS4mMVhC4/TeMhCFhyUaGNQlew4bce+ugjICjEo5JNKkE3AHG/s72NYa9VYiwtPXxHcOSfMPeYRVnqG2m/qar+KCb1U7cc5hXySTRijNAV0Hc+2dDnNllvs4lzNqxXTuqQCcftOVtgJpYVxYL0yVL6fCq3FxAnQCJRp9CTxNKqR7bMsTO86q7Ii8NJ238kJURmq1PkWDF1SwQqGN0WUG+hIgeYNXxah/zKjOKTQKj35MCFFU4Uc5MufIe65lEhle6vzdNxm25dFq/0iyo3IeIqqbDJExPXnDfSz0yTQiDtjzMw/36XlmbOMOdMkNyxVSZ7k+D7DgKY/U6hZ8wVTotxAc5mcxSNioMwpzSCVzOQ+43WobDmFcoinqVzZP58z+MwNJ5ly0ysvQTDnSJYo315zdaESIEhnEa7YNfdDy4xgsrq3o+gdKk8mvgyQWHfOgkQwRvD8NVMhMo+IEqGk1m2jlfH1sRJ1nk4YcDHg5wvJ4S9waFvESCEx40o8NMuOvZUohXAer5l1V7XYszifNQpn6XI0ZfopS5mkWsDZnBFxMoFdh2L2xIy8G3NBekOjounqHaNsskKlj1YR0z3rHcGAJnLMyY09z3O1PY6n4UBSEjPNGoVAl4KhAaParHGxRcUuLUp+ZjKSy6b2iyc0iH5JFqCpcxSUA0qe+bbsfbmnEAsTA0+JxGFj91CuyREcWxLDoQEsLkcJn+T93tVmVQMVEyHP79BEHmWHOZQoaHFrWBKulufve/jMN5un2jYGDDiYxzF49lRaoMxouoCR/aLHQwvsm/JnEfAMQHM89+n8fRHcV06n+MC+eBJoyPVjVAPd+z9ezBhLuBwnUo5HtOSrsmOt8/9J9/83ntvA5YbSdSGsL7lU9UHNXXT/Qj0MnugHs273TxVDmmpxPXMO1UCZQpcDesBte8Yta/t/Ui3/IuOHy0T+4TWXTRlo79YlEFMtQnHVwD2Rzk9txwbORXFcB9XifpJM2eXG0zfUrwvGJf0LzczN6jX34rIAAAAASUVORK5CYII="},b143:function(t,a,s){"use strict";s("9d18")},ba8e:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAApCAYAAAB3LnrpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAS0SURBVHgBzVkxbxxFFP5mL0RAga4gXSQ2FgWyhERBDWdLkKQLIkhREPgMBRIFNi6oEBgFIUGR2OkowI5QMAUgSzTQ2Bf+QFIFIsX2RrFSJFF0SaTYucQ3+d7uznn3ss7OzOWs+6S73Zmb3Z1v3nvfvH2nMMCo1TXWN1HTChM6QA0aVSg0VRsNpTF7+TfVMGMVBhTDH2u1uYmTnPzkjoMUTq2eVVPJ6QDCioRBSmbgiKTuNNIOsGT6xg8B9cPA/heBi1eA+b+BP/7tXKLbbYxWMGCovDqttKY1FF6R9tE3gBMfAS88n/y+rwq89TpwdwO4cDnuUhI7AQYMWr4UA1sO9JexQ8Xjxt7ePlcB3hw4InsTH6ma9vBLxeP278s1q3vQA14+pq2k0QWtrfjQREpm/cZjk47x35Vcs+ltkaH39SkG5DKJHIlJCHiUtvTL7/CASu7TiA86CexuiPvN/5Npt3HOi0g8yTJp5O8+ZLYqnJfGadOeI5EvfkzUSrB+E/j2l7xqkdiss/yKO8mKm3aJNILSOBI5utlwXauN+1hSadA/ERozqwvqc2eLbDEmzPm7lMYvP0hIxBNgYP7wCckd3h7PlSrf1DKoTWvc20ToQkJOnYlkH1DfQRrrBzPjKY1wwLVLfITC150OCge/F5EIANLjoljakBD4qJazNMISYo3of4RBgLG4Q2ON8TITLaio7FqfYDcrE0tjEbqlEZa4ugJVCbirJ6AA4hvGV2RzrTMRnUqjoEgaBXOZfpFGWEByLPWAKTso5/GFiFYW1BlYwofIrDkvksYTeWkUzZ+xue91hhNN8JW5TKwBB3hlv0PHtUxuwmLo/Oqvarxs0PCnVKomxrmqP8cdjA0G8hAc4LUhcnKTXOnIYuiR8D39Wtmg1u04P/S2hsCLSHhc1/mwMG02kZFGElzUiVwKqsEzWA6P6XCne4k1Hmps388xNgy8kkY+tKPzTBAnux8c1nUVLW5qgFijSjldIpnRIgV6GtZI5+QGsQbNOJc8FhF9+UDhOJJRLSynZARr8ibHlQu7M2aTdFJIltcW1Cg84ORa4gY5awDTO42N5lWT0vtOJpYOBBWcL8qYO/dTVnFXCCciVJasL6+V+bK4EsmMdMjo0l1+nBnzSXjAmkiBNax8WcgEGlPZPsmYz3E3WjkL/PVdknx2wJhjPNXgCGsiWWtwhc+7KAvHf2jOj5ZnzBL8NntUDlZEuq1Bd5mCCzyKCXBETn4l37m6JYqaFAHk/VlkjdYYC4w1mGtF7u/jfcuYDToWkeqeFMbwEH+ijVutFr95lHbOGtpL5/uWMRvEREyJUqp7RcUE1Zs1vIoJcEQg7tRdZxVfNp8s6LsXuNHBFT7FBDhClRUTzvDBv/daTBCLb0AqKuVqlHkPd0HQLikmfN9jMUFw8Seln30OMrknr7QnCUGAPhcTDIRMey8mxaKwKCa4QuS379JowPxLDo3081QhqtV3adwNBOgqJhRpkk8xYbexh9I4G6ikciETvnOP6cLBxM1EGrtLoLbFhN1G7LQsJog0lqtRD6rSb3S2vJTMBIrfGrWULgeVhCA3aXkP4Pv1ZzytIVEnCewGpfF05PnHzW7hEYyDL3C5ZlFDAAAAAElFTkSuQmCC"},bddc:function(t,a,s){},c077:function(t,a,s){"use strict";s("d17c")},c5d4:function(t,a,s){t.exports=s.p+"img/arrow.8892081a.png"},ca3e:function(t,a,s){t.exports=s.p+"img/chart.a9146136.png"},cc13:function(t,a,s){},d17c:function(t,a,s){},ee71:function(t,a,s){"use strict";s("bddc")},f0b9:function(t,a,s){t.exports=s.p+"img/Group.8d3bf0b0.png"}});
//# sourceMappingURL=app.d6f691b8.js.map