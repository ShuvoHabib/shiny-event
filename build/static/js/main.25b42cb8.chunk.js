(this["webpackJsonpshiny-event"]=this["webpackJsonpshiny-event"]||[]).push([[0],{20:function(e,t,n){e.exports=n(32)},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"FETCH_EVENTS_PENDING",(function(){return u})),n.d(r,"FETCH_EVENTS_SUCCESS",(function(){return m})),n.d(r,"FETCH_EVENTS_ERROR",(function(){return E})),n.d(r,"FETCH_MEMBERS_PENDING",(function(){return f})),n.d(r,"FETCH_MEMBERS_SUCCESS",(function(){return v})),n.d(r,"FETCH_MEMBERS_ERROR",(function(){return p})),n.d(r,"ADD_EVENT",(function(){return b})),n.d(r,"SELECTED_MEMBER",(function(){return h})),n.d(r,"LOCATE_EVENT",(function(){return g})),n.d(r,"fetchEventsPending",(function(){return O})),n.d(r,"locateEvent",(function(){return S})),n.d(r,"fetchEventsSuccess",(function(){return _})),n.d(r,"addEvent",(function(){return y})),n.d(r,"selectedMember",(function(){return j})),n.d(r,"fetchEventsError",(function(){return N})),n.d(r,"fetchMembersPending",(function(){return M})),n.d(r,"fetchMembersSuccess",(function(){return C})),n.d(r,"fetchMembersError",(function(){return I}));var a=n(0),c=n.n(a),s=n(7),o=n(1),i=n(19),l=n(13),d=n(2),u="FETCH_EVENTS_PENDING",m="FETCH_EVENTS_SUCCESS",E="FETCH_EVENTS_ERROR",f="FETCH_MEMBERS_PENDING",v="FETCH_MEMBERS_SUCCESS",p="FETCH_MEMBERS_ERROR",b="ADD_EVENT",h="SELECTED_MEMBER",g="LOCATE_EVENT";function O(){return{type:u}}function S(){return{type:g,data:!0}}function _(e){return{type:m,data:e}}function y(e){return{type:b,event:[e]}}function j(e){return{type:h,member:e}}function N(e){return{type:E,error:e}}function M(){return{type:f}}function C(e){return{type:v,data:e}}function I(e){return{type:p,error:e}}var T={pending:!1,data:[],error:null,isSelected:!1};var w=function(e){return e.members.data},D=function(e){return e.members.event&&e.members.event},k=function(e){return e.members.pending},A=function(e){return e.members.error},R={pending:!1,data:[],error:null};var F=function(e){return e.events.data},V=function(e){return e.events.pending},H=function(e){return e.events.error},x=Object(o.c)({members:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(d.a)({},e,{pending:!0});case g:return Object(d.a)({},e,{isSelected:t.data});case v:return Object(d.a)({},e,{pending:!1,data:t.data});case b:console.log(e.selected,e.selectedMemberId);var n=e.selected&&e.selected.findIndex((function(t){return t.id===e.selectedMemberId})),r=[],a=e.selected[n].events,c=t.event&&t.event[0]&&t.event[0].events[0],s=e.selected[n].id;return e.data.filter((function(t,n){return t._id===e.selected.id&&r.push(n)})),a.includes(t.event[0].events[0])?Object(d.a)({},e):Object(d.a)({},e,{selected:[].concat(Object(l.a)(e.selected.slice(0,n)),[{id:s,events:[].concat(Object(l.a)(e.selected[n].events),[c])}]),isSelected:!1});case h:var o=e.selected&&e.selected.map((function(e){return e.id}));return o&&o.includes(t.member)?Object(d.a)({},e,{selectedMemberId:t.member,isSelected:!1}):Object(d.a)({},e,{selected:[].concat(Object(l.a)(e.selected||[]),[{id:t.member,events:[]}]),isSelected:!1,selectedMemberId:t.member});case p:return Object(d.a)({},e,{pending:!1,error:t.error});default:return e}},events:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(d.a)({},e,{pending:!0});case m:return Object(d.a)({},e,{pending:!1,data:t.data});case E:return Object(d.a)({},e,{pending:!1,error:t.error});default:return e}}}),B="object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({name:"appName",actionCreators:r,trace:!0}):o.d;var P=n(11),L=n.n(P),U=(n(30),n(4)),X=n(5),G=n(8),W=n(6),J=n(9);n(31);var q=function(){return function(e){e(O()),fetch("https://next.json-generator.com/api/json/get/Vk7OTypQ8").then((function(e){return e.json()})).then((function(t){if(t.error)throw t.error;return e(_(t)),t})).catch((function(t){e(N(t))}))}},z=n(12),Q=n.n(z),$=function(e){function t(){var e,n;Object(U.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(G.a)(this,(e=Object(W.a)(t)).call.apply(e,[this].concat(a)))).state={addEvent:!1,display:!0},n.addEvent=function(e){n.props.addEvent({events:[e]})},n.toggleEvent=function(){n.setState({display:!n.state.display})},n}return Object(J.a)(t,e),Object(X.a)(t,[{key:"render",value:function(){var e=this,t=Q()("box-container events",{selected:this.state.selected,hidden:!this.state.display});return c.a.createElement("div",{className:"col-6"},c.a.createElement("div",{className:"row"},c.a.createElement("button",{onClick:this.toggleEvent},"Toggle Event"),c.a.createElement("div",{className:t},c.a.createElement("div",{className:"box"},this.props.selected&&c.a.createElement("button",{onClick:function(){return e.addEvent(e.props.event._id)}},"Add Event"),c.a.createElement("div",{className:"name"},this.props.event.organizer.first," ",this.props.event.organizer.last),c.a.createElement("div",{className:"company"},this.props.event.company),c.a.createElement("div",{className:"scheduled_at"},this.props.event.scheduled_at),c.a.createElement("div",{className:"duration"},this.props.event.duration),c.a.createElement("div",{className:"capacity"},"Capacity: ",this.props.event.capacity)))))}}]),t}(a.Component),K=Object(s.b)((function(e){return{events:D(e),selected:e.members.selected}}),(function(e){return Object(o.b)({addEvent:y},e)}))($),Y=function(e){function t(){var e,n;Object(U.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(G.a)(this,(e=Object(W.a)(t)).call.apply(e,[this].concat(a)))).state={allEvents:null,isSelected:!0,selectedMemberId:""},n}return Object(J.a)(t,e),Object(X.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchEvents()}},{key:"componentWillReceiveProps",value:function(e){this.setState({allEvents:e.selected&&e.selected,isSelected:e.isSelected&&e.isSelected,selectedMemberId:e.selectedMemberId&&e.selectedMemberId})}},{key:"render",value:function(){var e,t,n=this.props,r=n.events,a=n.error,s=n.pending,o=n.selectedMemberId,i=this.state,l=i.allEvents,d=i.isSelected,u=l&&l.filter((function(e){return e.id===o}));return console.log("selectedEventsId",u),s?c.a.createElement("p",null,"Loading..."):a?c.a.createElement("p",null,"Sorry, no data found"):(u&&u[0]&&(e=r&&r.filter((function(e){return u&&u[0].events.includes(e._id)})),console.log("myEvents",e)),t=o&&d?e.map((function(e){return c.a.createElement(K,{key:e._id,event:e})})):r.map((function(e){return c.a.createElement(K,{key:e._id,event:e})})),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row row-eq-height"},t)))}}]),t}(a.Component),Z=Object(s.b)((function(e){return{error:H(e),events:F(e),pending:V(e),selected:e.members.selected,isSelected:e.members.isSelected,selectedMemberId:e.members.selectedMemberId}}),(function(e){return Object(o.b)({fetchEvents:q},e)}))(Y);var ee=function(){return function(e){e(M()),fetch("https://next.json-generator.com/api/json/get/NyNrlJTX8").then((function(e){return e.json()})).then((function(t){if(t.error)throw t.error;return e(C(t)),t})).catch((function(t){e(I(t))}))}},te=function(e){function t(){var e,n;Object(U.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(G.a)(this,(e=Object(W.a)(t)).call.apply(e,[this].concat(a)))).state={members:null,deletedId:null,deletedIdArr:[],sortData:"",selected:!1,allEvents:""},n.deleteMember=function(e){n.setState({deletedId:e},(function(){return n.state.deletedIdArr.push(n.state.deletedId)}))},n.selectedMember=function(e){n.setState({selected:e},(function(){n.props.selectedMember(e)}))},n.sortArr=function(e){n.setState({sortData:e})},n.locateEvent=function(e){n.props.locateEvent(e),n.props.locateEventId()},n}return Object(J.a)(t,e),Object(X.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchMembers()}},{key:"componentDidUpdate",value:function(e){var t=this.props.members;e.members!==t&&t&&this.setState({members:this.props.members})}},{key:"componentWillReceiveProps",value:function(e){this.setState({allEvents:e.selected&&e.selected})}},{key:"render",value:function(){var e=this,t=(Q()("box-container col-4",{selected:this.state.selected}),this.props),n=t.error;if(t.pending)return c.a.createElement("p",null,"Loading...");if(n)return c.a.createElement("p",null,"Sorry, no data found");var r=this.state.members;"ageAsc"===this.state.sortData?r.sort((function(e,t){return parseFloat(e.age)-parseFloat(t.age)})):"ageDesc"===this.state.sortData?r.sort((function(e,t){return parseFloat(t.age)-parseFloat(e.age)})):"nameAsc"===this.state.sortData?r.sort((function(e,t){return 2*(e.name.first>t.name.first)-1})):"nameDesc"===this.state.sortData&&r.sort((function(e,t){return 2*(t.name.first>e.name.first)-1}));var a=this.state.members&&this.state.members.map((function(t){return e.state.deletedId!==t._id&&!e.state.deletedIdArr.includes(t._id)&&c.a.createElement("div",{className:"box-container col-4",style:{border:e.state.selected===t._id&&"1px solid green"}},c.a.createElement("div",{className:"box"},c.a.createElement("button",{onClick:function(){return e.selectedMember(t._id)}},"Select Member"),c.a.createElement("button",{onClick:function(){return e.deleteMember(t._id)}},"Delete"),c.a.createElement("div",{className:"name"},t.name.first," ",t.name.last),c.a.createElement("div",{className:"name"},"Age: ",t.age),e.state.allEvents&&e.state.allEvents.map((function(e){return e.events.length>0&&e.id})).includes(t._id)&&c.a.createElement("button",{onClick:function(){return e.locateEvent(t._id)}},"locate on calendar")))}));return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"sort-by"},c.a.createElement("span",null,"Sort by - "),c.a.createElement("button",{onClick:function(){return e.sortArr("ageAsc")}},"Age:ascending"),c.a.createElement("button",{onClick:function(){return e.sortArr("ageDesc")}},"Age:descending"),c.a.createElement("button",{onClick:function(){return e.sortArr("nameAsc")}},"Name:ascending"),c.a.createElement("button",{onClick:function(){return e.sortArr("nameDesc")}},"Name:descending")),c.a.createElement("div",{className:"m-top-20 row row-eq-height"},a))}}]),t}(a.Component),ne=Object(s.b)((function(e){return{error:A(e),members:w(e),pending:k(e),selected:e.members.selected}}),(function(e){return Object(o.b)({fetchMembers:ee,selectedMember:j,locateEventId:S},e)}))(te),re=function(e){function t(){var e,n;Object(U.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(G.a)(this,(e=Object(W.a)(t)).call.apply(e,[this].concat(a)))).state={memberId:""},n.locateEvent=function(e){n.setState({memberId:e})},n}return Object(J.a)(t,e),Object(X.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-6"},c.a.createElement("h2",null,"Members"),c.a.createElement(ne,{locateEvent:this.locateEvent})),c.a.createElement("div",{className:"col-6"},c.a.createElement("h2",null,"Events"),c.a.createElement(Z,{memberId:this.state.memberId}))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));L.a.render(c.a.createElement(s.a,{store:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(o.e)(x,e,B(Object(o.a)(i.a)))}()},c.a.createElement(re,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[20,1,2]]]);
//# sourceMappingURL=main.25b42cb8.chunk.js.map