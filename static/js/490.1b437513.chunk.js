"use strict";(self.webpackChunksteam=self.webpackChunksteam||[]).push([[490],{4037:function(n,e,t){t.d(e,{y:function(){return I}});var i,r,a,o,c,s,p,u,l,d=t(9439),x=t(2791),h=t(4956),g=t(9728),f=t(5210),m=t(168),b=t(6444),Z=t(1087),v=b.ZP.li(i||(i=(0,m.Z)(["\n  position: relative;\n  width: calc((100% - 54px) / 4);\n  background-color: ",";\n  border-radius: 10px;\n  @media screen and (max-width: 1170px) {\n    width: 100%;\n  }\n"])),(function(n){return n.theme.colors.secondary})),j=(0,b.ZP)(Z.rU)(r||(r=(0,m.Z)([""]))),w=b.ZP.img(a||(a=(0,m.Z)(["\n  width: 100%;\n  height: 99px;\n  margin-bottom: 6px;\n  object-fit: cover;\n  border-radius: 10px;\n"]))),P=b.ZP.p(o||(o=(0,m.Z)(["\n  min-height: 47px;\n  margin-left: 11px;\n  margin-bottom: 6px;\n  font-weight: 400;\n  font-size: 18px;\n  line-height: calc(22 / 18);\n"]))),y=b.ZP.p(c||(c=(0,m.Z)(["\n  margin-left: 11px;\n  margin-bottom: 5px;\n  font-size: 15px;\n  line-height: calc(18 / 15);\n"]))),k=b.ZP.p(s||(s=(0,m.Z)(["\n  margin-left: 11px;\n  margin-bottom: 11px;\n  font-size: 14px;\n  line-height: calc(17 / 14);\n"]))),C=b.ZP.svg(p||(p=(0,m.Z)(["\n  position: absolute;\n  right: 12.6px;\n  bottom: 7.3px;\n  width: 25px;\n  height: 25px;\n  cursor: pointer;\n  stroke-width: 3px;\n  stroke: ",";\n  fill: ",";\n  transition: stroke 200ms cubic-bezier(0.39, 0.575, 0.565, 1),\n    fill 200ms cubic-bezier(0.39, 0.575, 0.565, 1);\n"])),(function(n){return n.isSelected?"#DD1717":"#FFFFFF"}),(function(n){return n.isSelected?"#DD1717":"transparent"})),z=b.ZP.div(u||(u=(0,m.Z)(["\n  position: absolute;\n  top: 76px;\n  right: 17px;\n  width: 47px;\n  height: 43px;\n  visibility: ",";\n  opacity: ",";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));\n  cursor: pointer;\n  background-color: ",";\n  transition: visibility 200ms cubic-bezier(0.39, 0.575, 0.565, 1),\n    opacity 200ms cubic-bezier(0.39, 0.575, 0.565, 1);\n"])),(function(n){return n.isSelected?"visible":"hidden"}),(function(n){return n.isSelected?1:0}),(function(n){return n.theme.colors.primary})),S=b.ZP.svg(l||(l=(0,m.Z)(["\n  width: 43px;\n  height: 43px;\n  cursor: pointer;\n"]))),F=t(3329),I=function(n){var e=n.game,t=(0,h.C)((function(n){return n.games.favoriteGames})),i=(0,h.T)(),r=(0,x.useState)((function(){return!!t.find((function(n){return n.appId===e.appId}))})),a=(0,d.Z)(r,2),o=a[0],c=a[1];return(0,F.jsx)(v,{children:(0,F.jsxs)(j,{to:"/".concat(e.appId),children:[(0,F.jsx)(w,{src:e.imgUrl,alt:e.title}),(0,F.jsx)(P,{children:e.title}),(0,F.jsx)(y,{children:e.released||"Unknown"}),(0,F.jsx)(k,{children:e.price.trim()||"Unknown"}),(0,F.jsx)(C,{isSelected:o,onClick:function(n){n.preventDefault(),c((function(n){return!n})),i(o?(0,g.mW)(e.appId):(0,g.z7)(e))},role:"button",children:(0,F.jsx)("use",{href:"".concat(f.Z,"#icon-heart")})}),(0,F.jsx)(z,{isSelected:o,children:(0,F.jsx)(S,{children:(0,F.jsx)("use",{href:"".concat(f.Z,"#icon-play-circle")})})})]})})}},1490:function(n,e,t){t.r(e),t.d(e,{default:function(){return w}});var i,r,a,o=t(9439),c=t(2791),s=t(296),p=t(4956),u=t(4037),l=t(2400),d=t(3388),x=t(7689),h=t(1087),g=t(9728),f=t(168),m=t(6444),b=m.ZP.section(i||(i=(0,f.Z)(["\n  padding: 24px 0;\n  @media screen and (max-width: 1170px) {\n    padding: 15px 0;\n  }\n"]))),Z=m.ZP.div(r||(r=(0,f.Z)(["\n  margin: 0 auto;\n  max-width: 1171px;\n  padding: 0 26px;\n  @media screen and (max-width: 1170px) {\n    max-width: 360px;\n    padding: 0 50px;\n  }\n"]))),v=m.ZP.ul(a||(a=(0,f.Z)(["\n  display: flex;\n  gap: 21px;\n  margin-bottom: 30px;\n  @media screen and (max-width: 1170px) {\n    flex-direction: column;\n  }\n"]))),j=t(3329),w=function(){var n=(0,x.TH)(),e=(0,p.C)((function(n){return n.games})),t=e.games,i=e.isLoading,r=e.sortKey,a=e.sortFromLower,f=(0,p.T)(),m=(0,h.lr)(),w=(0,o.Z)(m,2),P=w[0],y=w[1],k=(0,c.useState)((function(){return Number(P.get("page"))||1})),C=(0,o.Z)(k,2),z=C[0],S=C[1];(0,c.useEffect)((function(){1!==z&&(P.set("page",String(z)),y(P))}),[z]),(0,c.useEffect)((function(){f((0,g.IJ)(n.pathname)),S(1)}),[r,a]);var F=(0,d.$)(z,t.length),I=(0,o.Z)(F,2),D=I[0],T=I[1],L=t.slice(D,T);return i?(0,j.jsx)(l.$,{}):(0,j.jsx)(b,{children:(0,j.jsxs)(Z,{children:[(0,j.jsx)(v,{children:L.map((function(n){return(0,j.jsx)(u.y,{game:n},n.appId)}))}),t.length>4&&(0,j.jsx)(s.i,{currentPage:z,setCurrentPage:S,items:t})]})})}},296:function(n,e,t){t.d(e,{i:function(){return d}});t(2791);var i,r,a=t(3637),o=t(5210),c=t(168),s=t(6444),p=s.ZP.div(i||(i=(0,c.Z)(["\n  .pagination {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 8px;\n  }\n  .break-me {\n    cursor: default;\n  }\n  .link {\n    min-width: 30px;\n    min-height: 30px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 5px;\n    border-radius: 50%;\n    background-color: #5b5e63;\n    border: none;\n    color: #fff;\n    cursor: pointer;\n    user-select: none;\n    font-size: 12px;\n    line-height: calc(15 / 12);\n  }\n  .active {\n    background-color: #17323a;\n  }\n  .previous,\n  .next {\n    min-width: 30px;\n    min-height: 30px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 50%;\n    background-color: #5b5e63;\n  }\n"]))),u=s.ZP.svg(r||(r=(0,c.Z)(["\n  width: 15px;\n  height: 15px;\n  display: flex;\n  align-items: center;\n"]))),l=t(3329),d=function(n){var e=n.currentPage,t=n.setCurrentPage,i=n.items;return(0,l.jsx)(p,{children:(0,l.jsx)(a.Z,{activePage:e,itemsCountPerPage:4,totalItemsCount:i.length,pageRangeDisplayed:3,innerClass:"pagination",itemClassPrev:"previous",itemClassNext:"next",itemClass:"link",activeLinkClass:"active",hideFirstLastPages:!0,prevPageText:(0,l.jsx)(u,{children:(0,l.jsx)("use",{href:"".concat(o.Z,"#icon-arrow-left")})}),nextPageText:(0,l.jsx)(u,{children:(0,l.jsx)("use",{href:"".concat(o.Z,"#icon-arrow-right")})}),onChange:function(n){return t(n)}})})}},3388:function(n,e,t){t.d(e,{$:function(){return i}});var i=function(n,e){return[4*(n-1),n===Math.ceil(e/4)?e:4*n]}}}]);
//# sourceMappingURL=490.1b437513.chunk.js.map