(this["webpackJsonprappa-mappa"]=this["webpackJsonprappa-mappa"]||[]).push([[0],{233:function(e,a,t){e.exports=t(443)},238:function(e,a,t){},441:function(e,a,t){},442:function(e,a,t){},443:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),o=t(9),i=t.n(o),l=(t(238),t(23)),c=t.n(l),p=t(38),s=t(74),u=t(41),m=t(495),d=t(496),f=t(492),g=t(447),b=t(494),h=t(8),y=t(208),E=t.n(y),v=t(216),w=t(512),O=t(446),k=t(506),j=t(508),x=t(26),I=t(207),S=t.n(I),_=t(28),T="https://rappamappa.herokuapp.com";console.log("BACKEND URL",T);var R="rappamappa/rappers/LOAD_ALL",N="rappamappa/rappers/SET_ACTIVE",C="rappamappa/rappers/SET_INACTIVE",A="rappamappa/rappers/SET_SEARCH_ACTIVE",L=function(e){return{type:N,rapper:e}},F=function(e){return{type:A,rapper:e}},B=function(e){return{type:"rappamappa/rappers/LOAD_ADDITIONAL_INFO",rapper:e}},D=function(){return function(){var e=Object(p.a)(c.a.mark((function e(a){var t,r,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(T,"/artists/"));case 2:return t=e.sent,e.next=5,t.json();case 5:r=e.sent,n=r.allArtists,a({type:R,rappers:n});case 8:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()};var M="rappamappa/errorHandler/INVALID_SEARCH",z="rappamappa/errorHandler/CLEAR_ERROR_MESSAGES";var P=Object(x.b)((function(e){return{rappers:e.rappers.rappers}}),(function(e){return{search:function(a){return e((t=a,function(){var e=Object(p.a)(c.a.mark((function e(a,r){var n,o,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=r(),o=n.rappers.rappers,i=o.find((function(e){return e.fields.name===t})),a(F(i));case 3:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}()));var t},invalidSearch:function(){return e((function(e){e({type:M,msg:"It looks like we couldn't complete your search. Please select one of the rappers from the dropdown and try again."})}))}}}))((function(e){var a=[];return e.rappers&&e.rappers.length&&(a=e.rappers.map((function(e){return e.fields.name}))),n.a.createElement(n.a.Fragment,null,e.rappers&&e.rappers.length?n.a.createElement("form",{onSubmit:function(t){t.preventDefault();var r=document.getElementsByName("search-query")[0].value;a.includes(r)?e.search(r):e.invalidSearch()},style:{width:"100%"}},n.a.createElement(j.a,{id:"combo-box",options:a,autoComplete:!0,noOptionsText:"Please select one of the listed artists",renderInput:function(e){return n.a.createElement(k.a,Object.assign({},e,{label:n.a.createElement(S.a,null),variant:"outlined",name:"search-query",style:{color:"white"}}))}})):null)})),H=t(79),W=Object(b.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(u.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(u.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(h.c)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(h.c)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:300}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(u.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"20"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}}),clearStyles:{color:"inherit",textDecoration:"inherit"}}}));function G(e){var a=W(),t=n.a.useState(null),r=Object(s.a)(t,2),o=r[0],i=r[1],l=Boolean(o),c=function(){i(null)};return n.a.createElement("div",{className:a.root,style:{zIndex:10}},n.a.createElement(m.a,{position:"static"},n.a.createElement(d.a,null,n.a.createElement(f.a,{edge:"start",className:a.menuButton,color:"inherit","aria-label":"open drawer","aria-haspopup":"true",onClick:function(e){i(e.currentTarget)}},n.a.createElement(E.a,null)),n.a.createElement(v.a,{id:"fade-menu",anchorEl:o,keepMounted:!0,open:l,onClose:c,TransitionComponent:O.a},n.a.createElement(w.a,{onClick:c,component:H.b,to:"/"},"Home"),n.a.createElement(w.a,{onClick:c,component:H.b,to:"/about"},"About"),n.a.createElement(w.a,{onClick:function(e){e.preventDefault(),window.open("https://github.com/bpmutter/RappaMappa","_blank"),c()}},"Github")),n.a.createElement(g.a,{className:a.title,variant:"h6",noWrap:!0},n.a.createElement(H.b,{to:"/",style:{textDecoration:"none",color:"inherit"}},"RappaMappa")),n.a.createElement("div",{className:a.search},n.a.createElement(P,null)))))}var U=t(66),V=[{featureType:"all",elementType:"labels.text.fill",stylers:[{color:"#ffffff"}]},{featureType:"all",elementType:"labels.text.stroke",stylers:[{color:"#000000"},{lightness:13}]},{featureType:"administrative",elementType:"geometry.fill",stylers:[{color:"#000000"}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#144b53"},{lightness:14},{weight:1.4}]},{featureType:"landscape",elementType:"all",stylers:[{color:"#08304b"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#0c4152"},{lightness:5}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#000000"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#0b434f"},{lightness:25}]},{featureType:"road.arterial",elementType:"geometry.fill",stylers:[{color:"#000000"}]},{featureType:"road.arterial",elementType:"geometry.stroke",stylers:[{color:"#0b3d51"},{lightness:16}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#000000"}]},{featureType:"transit",elementType:"all",stylers:[{color:"#146474"}]},{featureType:"water",elementType:"all",stylers:[{color:"#021019"}]}],J=Object(x.b)((function(e){return{}}),(function(e){return{setActiveRapper:function(a){return e(function(e){return function(){var a=Object(p.a)(c.a.mark((function a(t,r){var n,o,i;return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:n=r(),o=n.rappers.rappers,i=o.find((function(a){return a.recordid===e})),t(L(i));case 3:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}()}(a))}}}))((function(e){var a=Object(s.a)(e.fields.location_coordinates,2),t=a[0],r=a[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement(U.Marker,{position:{lat:t,lng:r},onClick:function(){e.setActiveRapper(e.recordid)},icon:{url:"/img/map-icon.png",scaledSize:new window.google.maps.Size(40,40)},zIndex:12}))})),X=t(49),q=t(499),Y=t(501),Z=t(500),K=t(210),$=t.n(K),Q=t(73),ee=t.n(Q),ae=t(510),te=t(498),re=t(507),ne=t(497),oe=t(211),ie=t.n(oe),le=t(217),ce=Object(b.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center",zIndex:5,outline:"none"},paper:{backgroundColor:e.palette.background.paper,boxShadow:e.shadows[5],padding:e.spacing(2,4,3),maxWidth:400,outline:"none",margin:15,display:"flex",flexDirection:"column",alignItems:"flex-start",position:"relative"},closeButton:{position:"absolute",cursor:"pointer",right:15,top:15},avatar:{margin:"0 auto",alignSelf:"center",borderRadius:"3em",width:160,marginBottom:"1rem"},originWrapper:{margin:".5rem 0 1rem"},originField:{paddingRight:"1rem"},mainInfoField:{marginBottom:".5rem"},playButton:{alignSelf:"center"}}}));function pe(e){var a=ce(),t=n.a.useState(!1),r=Object(s.a)(t,2),o=r[0],i=r[1],l=function(){i(!1)},c="";e.rapper&&e.rapper.additionalInfo&&(c=e.rapper.additionalInfo.genres.join(", "));var p="";if(e.rapper&&e.rapper.additionalInfo){var u=e.rapper.additionalInfo.popularity;u>=90?p="\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25":u>=80?p="\ud83d\udd25\ud83d\udd25\ud83d\udd25\ud83d\udd25":u>=65?p="\ud83d\udd25\ud83d\udd25\ud83d\udd25":u>=40&&(p="\ud83d\udd25\ud83d\udd25"),u<40&&(p="\ud83d\udd25")}return n.a.createElement("div",null,n.a.createElement(ne.a,{size:"small",onClick:function(){i(!0)}},"Music & More"),n.a.createElement(ae.a,{"aria-labelledby":"rapper-more-info","aria-describedby":"addition-info-for-rapper",className:a.modal,open:o,onClose:l,closeAfterTransition:!0,disableAutoFocus:!0,BackdropComponent:te.a,BackdropProps:{timeout:500}},n.a.createElement(O.a,{in:o,disableAutoFocus:!0},n.a.createElement(le.a,{className:a.paper,disableAutoFocus:!0},n.a.createElement(ee.a,{onClick:l,className:a.closeButton}),e.rapper.additionalInfo?n.a.createElement(n.a.Fragment,null,n.a.createElement("img",{className:a.avatar,src:e.rapper.additionalInfo.images[1].url,alt:e.rapper.fields.name}),n.a.createElement(g.a,{component:"h2",variant:"h4"},e.rapper.fields.name),n.a.createElement(re.a,{className:a.originWrapper,display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"space-between"},n.a.createElement(re.a,{className:a.originField},n.a.createElement(g.a,{color:"textSecondary"},n.a.createElement("b",null,"Origins: "),e.rapper.fields.location_neighborhood?"".concat(e.rapper.fields.location_neighborhood,", ").concat(e.rapper.fields.location_city):"".concat(e.rapper.fields.location_city))),n.a.createElement(re.a,{className:a.originField},e.rapper.fields.bio_yearsactivestart?n.a.createElement(g.a,{color:"textSecondary"},n.a.createElement("b",null,"Active since: "),e.rapper.fields.bio_yearsactivestart):null)),n.a.createElement(g.a,{variant:"body1",component:"p",className:a.mainInfoField},n.a.createElement("b",null,"Bio: "),e.rapper.fields.bio_summary),c?n.a.createElement(g.a,{variant:"body1",component:"p",className:a.mainInfoField},n.a.createElement("b",null,"Subgenres: "),n.a.createElement("span",null,c)):null,n.a.createElement(g.a,{variant:"body1",component:"p",className:a.mainInfoField},n.a.createElement("b",null,"Popularity: "),n.a.createElement("span",null,p)),n.a.createElement(ne.a,{onClick:function(a){a.preventDefault(),e.rapper&&e.rapper.additionalInfo&&window.open(e.rapper.additionalInfo.external_urls.spotify,"_blank")},style:{alignSelf:"center"}},n.a.createElement(ie.a,null),"\xa0 Listen on Spotify")):n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",{id:"rapper-more-info"},"Aww snap!"),n.a.createElement("p",{id:"addition-info-for-rapper"},"It looks like there was an issue loading the data from Spotify. Please try again later."))))))}var se=t(502),ue=Object(b.a)((function(e){var a;return{root:(a={},Object(u.a)(a,e.breakpoints.up("sm"),{width:350}),Object(u.a)(a,e.breakpoints.down("sm"),{width:300,position:"fixed",bottom:0,left:15}),a),bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}}}));function me(e){var a=ue();return Object(r.useEffect)((function(){Object(p.a)(c.a.mark((function a(){return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.loadAdditionalInfo(e.activeRapper);case 2:case"end":return a.stop()}}),a)})))()})),n.a.createElement(q.a,{className:a.root},n.a.createElement(Z.a,null,n.a.createElement(g.a,{className:a.title,color:"textSecondary",gutterBottom:!0,style:{display:"flex",justifyContent:"space-between",alignItems:"center",p:{display:"inline-block"}}},n.a.createElement("span",null,n.a.createElement("b",null,"Origins: "),e.fields.location_neighborhood?"".concat(e.fields.location_neighborhood,", ").concat(e.fields.location_city):"".concat(e.fields.location_city)),n.a.createElement(ee.a,{onClick:e.removeActiveStatus,style:{height:60,paddingRight:10,cursor:"pointer",zIndex:10}})),n.a.createElement(g.a,{variant:"h5",component:"h2"},e.fields.name),n.a.createElement(g.a,{variant:"body2",component:"p"},n.a.createElement("p",null,n.a.createElement("b",null,"Bio: "),e.fields.bio_summary))),n.a.createElement(Y.a,null,n.a.createElement(pe,{"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",rapper:e.activeRapper})))}var de=Object(x.b)((function(e){return{activeRapper:e.rappers.activeRapper}}),(function(e){return{removeActiveStatus:function(){return e(function(){var e=Object(p.a)(c.a.mark((function e(a){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a({type:C,rapper:null});case 1:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}())},loadAdditionalInfo:function(a){return e(function(e){return function(){var a=Object(p.a)(c.a.mark((function a(t){var r,n,o,i;return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r=e.fields.name,a.prev=1,a.next=4,fetch("".concat(T,"/spotify/more-info/").concat(r));case 4:return n=a.sent,a.next=7,n.json();case 7:o=a.sent,i=o.artistInfo,e.additionalInfo=i,t(B(e)),a.next=16;break;case 13:a.prev=13,a.t0=a.catch(1),console.error("OH SNAP",a.t0);case 16:case"end":return a.stop()}}),a,null,[[1,13]])})));return function(e){return a.apply(this,arguments)}}()}(a))}}}))((function(e){var a=Object(X.a)(),t=Object(se.a)(a.breakpoints.up("sm"));return n.a.createElement(n.a.Fragment,null,t?n.a.createElement($.a,{options:{closeBoxURL:"",enableEventPropagation:!0}},n.a.createElement(me,e)):n.a.createElement(me,e))})),fe=Object(U.withScriptjs)(Object(U.withGoogleMap)((function(e){return console.log(e.rappers),n.a.createElement(U.GoogleMap,{defaultZoom:11,center:e.focusLocation,defaultOptions:{styles:V}},e.rappers.map((function(e){return n.a.createElement(J,Object.assign({},e,{key:e.recordid}))})),e.activeRapper&&n.a.createElement(U.Marker,{position:{lat:e.activeRapper.fields.location_coordinates[0],lng:e.activeRapper.fields.location_coordinates[1]},icon:{url:"/img/map-icon.png",scaledSize:new window.google.maps.Size(1,1)}},n.a.createElement(de,e.activeRapper)))}))),ge=Object(x.b)((function(e){var a={lat:40.844,lng:-73.8648};return e.rappers.refocusLocation&&(a=e.rappers.refocusLocation),{activeRapper:e.rappers.activeRapper,focusLocation:a}}),(function(e){return{getRappers:function(){return e(D())}}}))(fe),be=t(13),he=(t(441),t(513)),ye=t(504),Ee=t(503),ve=t(213),we=t.n(ve),Oe=t(214),ke=t.n(Oe),je=t(212),xe=t.n(je);t(442);function Ie(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(g.a,{variant:"body2",color:"textSecondary",align:"center"},"Made with \ud83d\udc9c by ","Ben Perlmutter,"," ",(new Date).getFullYear()),n.a.createElement(g.a,{variant:"body2",color:"textSecondary",align:"center"},n.a.createElement(Ee.a,{color:"inherit",href:"https://ben.perlmutter.io/",target:"_blank",rel:"noopener"},n.a.createElement(xe.a,{className:"footer__icon"})),n.a.createElement(Ee.a,{color:"inherit",href:"https://github.com/bpmutter",target:"_blank",rel:"noopener"},n.a.createElement(we.a,{className:"footer__icon"})),n.a.createElement(Ee.a,{color:"inherit",href:"https://twitter.com/bpmutter",target:"_blank",rel:"noopener"},n.a.createElement(ke.a,{className:"footer__icon"}))))}var Se=Object(b.a)((function(e){return{wrapper:{width:"100%",padding:"3%",display:"flex",alignItems:"center",justifyContent:"center"},paper:{marginTop:e.spacing(8),maxWidth:500,padding:"10px 20px",boxSizing:"border-box",display:"flex",flexDirection:"column",alignItems:"flex-start"},avatar:{margin:e.spacing(1),backgroundColor:"lightgrey",alignSelf:"center",padding:e.spacing(1)},title:{alignSelf:"center",paddingBottom:e.spacing(1.5)},p:{paddingBottom:e.spacing(1)}}}));function _e(){var e=Se();return n.a.createElement("div",{className:e.wrapper},n.a.createElement(le.a,{component:"main",style:{maxWidth:550}},n.a.createElement(ye.a,null),n.a.createElement("div",{className:e.paper},n.a.createElement(he.a,{className:e.avatar,src:"/img/rappa-mappa-logo.png"}),n.a.createElement(g.a,{component:"h1",variant:"h5",className:e.title},"About RappaMappa"),n.a.createElement(g.a,{component:"p",variant:"body1",align:"left",className:e.p},"The title pretty much says it all. RappaMappa is an interactive map of rappers. You can browse around the map, search for rappers, and see some details about the artists."),n.a.createElement(g.a,{component:"p",variant:"body1",align:"left",className:e.p},"Also be sure to check out the 'More' button on the rappers to see additional info and some choice songs that you can listen to on Spotify."),n.a.createElement(g.a,{component:"p",variant:"body1",align:"left",className:e.p},"If you'd like to learn more about RappaMappa and how it was made, check out the"," ",n.a.createElement(Ee.a,{href:"https://github.com/bpmutter/RappaMappa",target:"_blank",rel:"noopener"},"Github"),".")),n.a.createElement(re.a,{mt:5},n.a.createElement(Ie,null))))}var Te={FourOhFour:{position:"absolute",width:"100%",height:"100%",background:"#121212",display:"flex",alignItems:"center",justifyContent:"center",backgroundSize:"cover",backgroundImage:'url("https://media.giphy.com/media/CZoOmrTeIeD6w/giphy.gif")',backgroundPosition:"center",zIndex:-5},overlay:{position:"absolute",top:0,left:0,zIndex:-2,width:"100%",height:"100%",backgroundColor:"black",opacity:.6},message:{fontFamily:"Roboto",height:"100%",color:"white",width:"100%",display:"flex",backgroundPosition:"center",alignItems:"center",flexDirection:"column",backgroundSize:"cover",justifyContent:"center",position:"relative",bottom:"5rem",paddingBottom:"5rem",opacity:1,header:{fontSize:144,display:"block",margin:0,padding:0},p:{fontSize:32,display:"block",margin:0,padding:0}}},Re=function(){return n.a.createElement("div",{style:Te.FourOhFour},n.a.createElement("div",{style:Object(_.a)({},Te.overlay)}),n.a.createElement("div",{style:Te.message},n.a.createElement("h2",{style:Te.message.header},"404"),n.a.createElement("p",{style:Te.message.p},"Resource Not Found")))},Ne=t(511),Ce=t(509);function Ae(e){return n.a.createElement(Ce.a,Object.assign({elevation:6,variant:"filled"},e))}var Le=Object(b.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}}));var Fe=Object(x.b)((function(e){return{errors:e.errorHandler.errors,numErrors:e.errorHandler.errors.length}}),(function(e){return{clearErrorMessages:function(){return e((function(e){e({type:z})}))}}}))((function(e){var a=Le(),t=function(a,t){"clickaway"!==t&&e.clearErrorMessages()};return n.a.createElement(n.a.Fragment,null,e.numErrors?n.a.createElement("div",{className:a.root},e.errors.map((function(e,a){return n.a.createElement(Ne.a,{open:!0,autoHideDuration:6e3,onClose:t},n.a.createElement(Ae,{onClose:t,severity:"error"},e))}))):null)})),Be=t(505),De=Object(b.a)((function(e){return{root:{display:"flex",position:"absolute",width:"100%",height:"90%",justifyContent:"center",alignItems:"center",backgroundColor:"#02121A","& > * + *":{marginLeft:e.spacing(2)}}}}));function Me(){var e=De();return n.a.createElement("div",{className:e.root},n.a.createElement(Be.a,null))}var ze=Object(x.b)((function(e){return{rappers:e.rappers.rappers,rappersLoaded:!!e.rappers.rappers&&!!e.rappers.rappers.length}}),(function(e){return{getRappers:function(){return e(D())}}}))((function(e){return Object(r.useEffect)((function(){Object(p.a)(c.a.mark((function a(){return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.getRappers();case 2:console.log(e.rappers);case 3:case"end":return a.stop()}}),a)})))()}),[]),n.a.createElement(n.a.StrictMode,null,n.a.createElement(H.a,null,n.a.createElement(G,null),n.a.createElement(be.c,null,n.a.createElement(be.a,{path:"/",exact:!0},e.rappersLoaded?n.a.createElement(ge,{isMarkerShown:!0,googleMapURL:"https://maps.googleapis.com/maps/api/js?key=".concat("AIzaSyBNf4_S9tTiAgNXwUEDLgmSo6nbJ06NG7A","&v=3.exp&libraries=geometry,drawing,places"),loadingElement:n.a.createElement("div",{style:{height:"100%"}}),containerElement:n.a.createElement("div",{style:{bottom:0,left:0,top:55,width:"100%",position:"absolute"}}),mapElement:n.a.createElement("div",{style:{height:"100%"}}),rappers:e.rappers}):n.a.createElement(Me,null)),n.a.createElement(be.a,{path:"/about"},n.a.createElement(_e,null)),n.a.createElement(be.a,{path:"*"},n.a.createElement(Re,null))),n.a.createElement(Fe,null)))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Pe=t(64),He=t(215),We=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Pe.d,Ge=Object(Pe.c)({rappers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(Object.freeze(e),a.type){case R:var t=Object(_.a)({},e);return t.rappers=a.rappers,Object(_.a)(Object(_.a)({},e),{},{rappers:a.rappers});case N:var r=Object(_.a)({},e);return r.activeRapper=a.rapper,r.refocusLocation={lat:a.rapper.fields.location_coordinates[0],lng:a.rapper.fields.location_coordinates[1]},r;case C:var n=Object(_.a)({},e);return n.activeRapper=null,n;case A:var o=Object(_.a)({},e);return o.activeRapper=a.rapper,o.refocusLocation={lat:a.rapper.fields.location_coordinates[0],lng:a.rapper.fields.location_coordinates[1]},o;case"rappamappa/rappers/LOAD_ADDITIONAL_INFO":var i=Object(_.a)({},e);return i.activeRapper=a.rapper,i;default:return e}},errorHandler:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{errors:[]},a=arguments.length>1?arguments[1]:void 0;switch(Object.freeze(e),a.type){case M:var t=Object(_.a)({},e);return t.errors.push(a.msg),t;case z:var r=Object(_.a)({},e);return r.errors=[],r;default:return e}}}),Ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(Pe.e)(Ge,e,We(Object(Pe.a)(He.a)))}();i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(x.a,{store:Ue},n.a.createElement(ze,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[233,1,2]]]);
//# sourceMappingURL=main.1fc8f4ad.chunk.js.map