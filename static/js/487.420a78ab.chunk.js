"use strict";(self.webpackChunkiteam_react_test=self.webpackChunkiteam_react_test||[]).push([[487],{6487:function(n,e,t){t.r(e),t.d(e,{default:function(){return j}});var i,r,a,c=t(9439),o=t(2791),s=t(296),l=t(4956),d=t(4037),p=t(3388),u=t(9728),x=t(7689),h=t(168),g=t(6444),f=g.ZP.section(i||(i=(0,h.Z)(["\n  padding: 24px 0;\n  @media screen and (max-width: 1170px) {\n    padding: 15px 0;\n  }\n"]))),m=g.ZP.div(r||(r=(0,h.Z)(["\n  margin: 0 auto;\n  max-width: 1171px;\n  padding: 0 26px;\n  @media screen and (max-width: 1170px) {\n    max-width: 360px;\n    padding: 0 53.5px;\n  }\n"]))),b=g.ZP.ul(a||(a=(0,h.Z)(["\n  display: flex;\n  gap: 21px;\n  margin-bottom: 30px;\n  @media screen and (max-width: 1170px) {\n    flex-direction: column;\n  }\n"]))),Z=t(3329),j=function(){var n=(0,x.TH)(),e=(0,l.C)((function(n){return n.games})),t=e.filteredFavorites,i=e.favoriteGames,r=e.sortFromLower,a=e.sortKey,h=(0,l.T)(),g=(0,o.useState)(1),j=(0,c.Z)(g,2),v=j[0],w=j[1],P=(0,p.$)(v,t.length),y=(0,c.Z)(P,2),k=y[0],C=y[1],F=t.slice(k,C);return(0,o.useEffect)((function(){h((0,u.IJ)(n.pathname)),w(1)}),[i,r,a]),t.length?(0,Z.jsx)(f,{children:(0,Z.jsxs)(m,{children:[(0,Z.jsx)(b,{children:F.slice(0,4).map((function(n){return(0,Z.jsx)(d.y,{game:n},n.appId)}))}),t.length>4&&(0,Z.jsx)(s.i,{currentPage:v,setCurrentPage:w,items:t})]})}):(0,Z.jsx)(f,{children:(0,Z.jsx)(m,{children:(0,Z.jsx)("p",{children:"Games not Found"})})})}},4037:function(n,e,t){t.d(e,{y:function(){return I}});var i,r,a,c,o,s,l,d,p,u=t(9439),x=t(2791),h=t(4956),g=t(9728),f=t(5210),m=t(168),b=t(6444),Z=t(1087),j=b.ZP.li(i||(i=(0,m.Z)(["\n  position: relative;\n  width: calc((100% - 54px) / 4);\n  background-color: ",";\n  border-radius: 10px;\n  @media screen and (max-width: 1170px) {\n    width: 100%;\n  }\n"])),(function(n){return n.theme.colors.secondary})),v=(0,b.ZP)(Z.rU)(r||(r=(0,m.Z)([""]))),w=b.ZP.img(a||(a=(0,m.Z)(["\n  width: 100%;\n  height: 99px;\n  margin-bottom: 6px;\n  object-fit: cover;\n  border-radius: 10px;\n"]))),P=b.ZP.p(c||(c=(0,m.Z)(["\n  min-height: 47px;\n  margin-left: 11px;\n  margin-bottom: 6px;\n  font-weight: 400;\n  font-size: 18px;\n  line-height: calc(22 / 18);\n"]))),y=b.ZP.p(o||(o=(0,m.Z)(["\n  margin-left: 11px;\n  margin-bottom: 5px;\n  font-size: 15px;\n  line-height: calc(18 / 15);\n"]))),k=b.ZP.p(s||(s=(0,m.Z)(["\n  margin-left: 11px;\n  margin-bottom: 11px;\n  font-size: 14px;\n  line-height: calc(17 / 14);\n"]))),C=b.ZP.svg(l||(l=(0,m.Z)(["\n  position: absolute;\n  right: 12.6px;\n  bottom: 7.3px;\n  width: 25px;\n  height: 25px;\n  cursor: pointer;\n  stroke-width: 3px;\n  stroke: ",";\n  fill: ",";\n  transition: stroke 200ms cubic-bezier(0.39, 0.575, 0.565, 1),\n    fill 200ms cubic-bezier(0.39, 0.575, 0.565, 1);\n"])),(function(n){return n.isSelected?"#DD1717":"#FFFFFF"}),(function(n){return n.isSelected?"#DD1717":"transparent"})),F=b.ZP.div(d||(d=(0,m.Z)(["\n  position: absolute;\n  top: 76px;\n  right: 17px;\n  width: 47px;\n  height: 43px;\n  visibility: ",";\n  opacity: ",";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));\n  cursor: pointer;\n  background-color: ",";\n  transition: visibility 200ms cubic-bezier(0.39, 0.575, 0.565, 1),\n    opacity 200ms cubic-bezier(0.39, 0.575, 0.565, 1);\n"])),(function(n){return n.isSelected?"visible":"hidden"}),(function(n){return n.isSelected?1:0}),(function(n){return n.theme.colors.primary})),z=b.ZP.svg(p||(p=(0,m.Z)(["\n  width: 43px;\n  height: 43px;\n  cursor: pointer;\n"]))),S=t(3329),I=function(n){var e=n.game,t=(0,h.C)((function(n){return n.games.favoriteGames})),i=(0,h.T)(),r=(0,x.useState)((function(){return!!t.find((function(n){return n.appId===e.appId}))})),a=(0,u.Z)(r,2),c=a[0],o=a[1];return(0,S.jsx)(j,{children:(0,S.jsxs)(v,{to:"/".concat(e.appId),children:[(0,S.jsx)(w,{src:e.imgUrl,alt:e.title}),(0,S.jsx)(P,{children:e.title}),(0,S.jsx)(y,{children:e.released||"Unknown"}),(0,S.jsx)(k,{children:e.price.trim()||"Unknown"}),(0,S.jsx)(C,{isSelected:c,onClick:function(n){n.preventDefault(),o((function(n){return!n})),i(c?(0,g.mW)(e.appId):(0,g.z7)(e))},role:"button",children:(0,S.jsx)("use",{href:"".concat(f.Z,"#icon-heart")})}),(0,S.jsx)(F,{isSelected:c,children:(0,S.jsx)(z,{children:(0,S.jsx)("use",{href:"".concat(f.Z,"#icon-play-circle")})})})]})})}},296:function(n,e,t){t.d(e,{i:function(){return u}});t(2791);var i,r,a=t(3637),c=t(5210),o=t(168),s=t(6444),l=s.ZP.div(i||(i=(0,o.Z)(["\n  .pagination {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 8px;\n  }\n  .break-me {\n    cursor: default;\n  }\n  .link {\n    min-width: 30px;\n    min-height: 30px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 5px;\n    border-radius: 50%;\n    background-color: #5b5e63;\n    border: none;\n    color: #fff;\n    cursor: pointer;\n    user-select: none;\n    font-size: 12px;\n    line-height: calc(15 / 12);\n  }\n  .active {\n    background-color: #17323a;\n  }\n  .previous,\n  .next {\n    min-width: 30px;\n    min-height: 30px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 50%;\n    background-color: #5b5e63;\n  }\n"]))),d=s.ZP.svg(r||(r=(0,o.Z)(["\n  width: 15px;\n  height: 15px;\n  display: flex;\n  align-items: center;\n"]))),p=t(3329),u=function(n){var e=n.currentPage,t=n.setCurrentPage,i=n.items;return(0,p.jsx)(l,{children:(0,p.jsx)(a.Z,{activePage:e,itemsCountPerPage:4,totalItemsCount:i.length,pageRangeDisplayed:3,innerClass:"pagination",itemClassPrev:"previous",itemClassNext:"next",itemClass:"link",activeLinkClass:"active",hideFirstLastPages:!0,prevPageText:(0,p.jsx)(d,{children:(0,p.jsx)("use",{href:"".concat(c.Z,"#icon-arrow-left")})}),nextPageText:(0,p.jsx)(d,{children:(0,p.jsx)("use",{href:"".concat(c.Z,"#icon-arrow-right")})}),onChange:function(n){return t(n)}})})}},3388:function(n,e,t){t.d(e,{$:function(){return i}});var i=function(n,e){return[4*(n-1),n===Math.ceil(e/4)?e:4*n]}}}]);
//# sourceMappingURL=487.420a78ab.chunk.js.map