(this["webpackJsonpbalzaclegeek.github.io"]=this["webpackJsonpbalzaclegeek.github.io"]||[]).push([[0],{43:function(e,a,t){e.exports=t(85)},48:function(e,a,t){},82:function(e,a,t){},85:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(11),s=t.n(c),r=(t(48),t(7)),m=t(42),i=t(6),o=t(38),u=t(8),d=t(37),E=function(){var e=Object(n.useState)([{to:"about",title:"A propos"},{to:"experience",title:"Experiences"},{to:"education",title:"Education"},{to:"skills",title:"Comp\xe9tences"},{to:"awards",title:"Awards"},{to:"interests",title:"Autres"}]),a=Object(r.a)(e,2),t=a[0];a[1];return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary fixed-top",id:"sideNav"},l.a.createElement("a",{className:"navbar-brand js-scroll-trigger",href:"#page-top"},l.a.createElement("span",{className:"d-block d-lg-none"},"balzacLeGeek"),l.a.createElement("span",{className:"d-none d-lg-block"},l.a.createElement("img",{className:"img-fluid img-profile rounded-circle mx-auto mb-2",src:"./imgs/RAZAFIMANDIMBY-Niaina-Michael-profil-5eff0df06.jpg",alt:"RAZAFIMANDIMBY Niaina Michael, balzacLeGeek"}))),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav"},t.map((function(e,a){return l.a.createElement("li",{className:"nav-item",key:a},l.a.createElement(d.Link,{className:"nav-link",activeclassname:"active",to:e.to,spy:!0,smooth:!0,duration:500},e.title))})))))},p=t(3),b=t(12),v=function(e){var a=e.aboutDatas;if(null===a)return l.a.createElement(p.a,null);var t=a.me,n=a.address,c=a.contact,s=a.socials,r={__html:t.about};return l.a.createElement("div",null,l.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"about"},l.a.createElement("div",{className:"w-100"},l.a.createElement("h1",{className:"mb-0"},t.firstname,l.a.createElement("br",null)," ",l.a.createElement("span",{className:"text-primary"},t.lastname)),l.a.createElement("div",{dangerouslySetInnerHTML:r}),l.a.createElement("div",{className:"social-icons"},s.map((function(e,a){return l.a.createElement("a",{href:e.url,key:a,target:"_blank"},l.a.createElement(b.a,{icon:["fab",e.icon]}))}))),l.a.createElement("div",{className:"contacts"},c.phone," .",l.a.createElement("a",{href:"mailto:{ contact.mail }"},c.mail)," .",l.a.createElement("a",{href:"https://www.google.com/maps/place/RAZAFIMANDIMBY+Niaina+Micha%C3%ABl+(balzacLeGeek)/@-18.9950618,47.5283049,1042m/data=!3m1!1e3!4m5!3m4!1s0x21f07ba3c02e6077:0x7798057095e53355!8m2!3d-18.9955488!4d47.5301449",target:"_blank"},"".concat(n.name," . ").concat(n.city," ").concat(n.country))))))},N=function(e){var a=e.experiencesDatas;if(null===a)return l.a.createElement(p.a,null);var t=a.title,n=a.lists;return l.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex justify-content-center",id:"experience"},l.a.createElement("div",{className:"w-100"},l.a.createElement("h2",{className:"mb-5"},t),n.map((function(e,a){var t=e.society.website?e.society.website:"javascript:;",n=e.date.end?e.date.end:"Aujourd'hui";return l.a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row mb-5",key:a},l.a.createElement("div",{className:"resume-content mr-auto"},l.a.createElement("h3",{className:"mb-0 experience-society"},l.a.createElement("a",{href:t,target:"_blank"},e.society.name)),l.a.createElement("div",{className:"subheading mb-3"},e.title),l.a.createElement("div",null,e.technos.map((function(e,a){return l.a.createElement("span",{key:a},"".concat(e," - "))})))),l.a.createElement("div",{className:"resume-date text-md-right"},l.a.createElement("span",{className:"text-primary"},e.date.start," - ",n)))}))))},f=function(e){var a=e.educationDatas;if(null===a)return l.a.createElement(p.a,null);var t=a.title,n=a.lists;return l.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"education"},l.a.createElement("div",{className:"w-100"},l.a.createElement("h2",{className:"mb-5"},t),n.map((function(e,a){return l.a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row mb-5",key:a},l.a.createElement("div",{className:"resume-content mr-auto"},l.a.createElement("h3",{className:"mb-0"},e.etablishment),l.a.createElement("div",{className:"subheading mb-3"},e.diploma),l.a.createElement("div",null,e.description)),l.a.createElement("div",{className:"resume-date text-md-right"},l.a.createElement("span",{className:"text-primary"},"".concat(e.date.start," - ").concat(e.date.end))))}))))},h=function(e){var a=e.skillsDatas;if(null===a)return l.a.createElement(p.a,null);var t=a.title,n=a.technos,c=a.inLearn;return l.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"skills"},l.a.createElement("div",{className:"w-100"},l.a.createElement("h2",{className:"mb-5"},t),l.a.createElement("div",{className:"subheading mb-3"},n.title),l.a.createElement("ul",{className:"list-inline dev-icons"},n.lists.map((function(e,a){return l.a.createElement("li",{key:a,className:"list-inline-item"},l.a.createElement("a",null,l.a.createElement("img",{src:"/datas/icons/".concat(e.logoPath," ")})))}))),l.a.createElement("div",{className:"subheading mb-3"},c.title),l.a.createElement("ul",{className:"list-inline dev-icons"},c.lists.map((function(e,a){return l.a.createElement("li",{key:a,className:"list-inline-item"},l.a.createElement("a",null,l.a.createElement("img",{src:"/datas/icons/".concat(e.logoPath," ")})))})))))},g=function(e){var a=e.interestsDatas;if(null===a)return l.a.createElement(p.a,null);var t=a.title,n={__html:a.content};return l.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"interests"},l.a.createElement("div",{className:"w-100"},l.a.createElement("h2",{className:"mb-5"},t),l.a.createElement("div",{dangerouslySetInnerHTML:n})))},x=function(e){var a=e.awardsDatas;if(null===a)return l.a.createElement(p.a,null);var t=a.title,n=a.lists;return l.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex",id:"awards"},l.a.createElement("div",{className:"w-100"},l.a.createElement("h2",{className:"mb-5"},t),l.a.createElement("ul",{className:"fa-ul mb-0"},n.map((function(e,a){var t=1===e.place?"er":"\xe8me",n={__html:e.content};return l.a.createElement("li",{key:a},l.a.createElement(b.a,{icon:["fas","trophy"],className:"text-warning"}),e.place,l.a.createElement("sup",null,t),l.a.createElement("p",{dangerouslySetInnerHTML:n}),l.a.createElement("p",null,l.a.createElement("span",{className:"team-name"},l.a.createElement("a",{href:e.team.website},e.team.name))," -",l.a.createElement("span",{className:"date"},e.date)))})))))},k=function(){i.b.add(o.a,u.d,u.a,u.c,u.b);var e=Object(n.useState)({about:null,experiences:null,education:null,skills:null,interests:null,awards:null}),a=Object(r.a)(e,2),t=a[0],c=a[1],s=Object(m.a)("./datas/resumeDatas.json"),d=Object(r.a)(s,2),p=d[0],b=p.data;p.loading,p.error,d[1];Object(n.useEffect)((function(){void 0!==b&&c(b)}));var k=t.about,w=t.experiences,y=t.education,D=t.skills,A=t.interests,j=t.awards;return l.a.createElement("div",null,l.a.createElement(E,null),l.a.createElement("div",{className:"container-fluid p-0"},l.a.createElement(v,{aboutDatas:k}),l.a.createElement("hr",{className:"m-0"}),l.a.createElement(N,{experiencesDatas:w}),l.a.createElement("hr",{className:"m-0"}),l.a.createElement(f,{educationDatas:y}),l.a.createElement("hr",{className:"m-0"}),l.a.createElement(h,{skillsDatas:D}),l.a.createElement("hr",{className:"m-0"}),l.a.createElement(x,{awardsDatas:j}),l.a.createElement("hr",{className:"m-0"}),l.a.createElement(g,{interestsDatas:A})))},w=t(41);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(81),t(82);s.a.render(l.a.createElement(w.a,{basename:""},l.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[43,1,2]]]);
//# sourceMappingURL=main.22834b24.chunk.js.map