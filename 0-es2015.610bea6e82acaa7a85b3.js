(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"8nyR":function(t,e,n){"use strict";var i=n("mrSG"),s=n("CoC1"),c=n("NZHw");class r{constructor(){this.isInitialised=!1,this.isBootstrapped=!1,this._dirty=!0}get dirty(){return this._dirty}set dirty(t){this._dirty=t}ngxsOnChanges(t){var e;this.dirty&&this.isBootstrapped&&(this.dirty=!1,null===(e=this.ngxsDataDoCheck)||void 0===e||e.call(this))}ngxsOnInit(){this.isInitialised=!0}ngxsAfterBootstrap(){var t;this.isBootstrapped=!0,this.dirty&&(this.dirty=!1,null===(t=this.ngxsDataDoCheck)||void 0===t||t.call(this))}markAsDirtyAfterReset(){var t;this.dirty=!0,null===(t=this.ngxsDataAfterReset)||void 0===t||t.call(this)}}let a=(()=>{class t extends r{get snapshot(){return Object(c.p)(this.getState())}get ctx(){return Object(c.n)(this.context)}getState(){return this.ctx.getState()}dispatch(t){return this.ctx.dispatch(t)}patchState(t){this.ctx.patchState(t)}setState(t){this.ctx.setState(t)}reset(){this.ctx.setState(this.initialState),this.markAsDirtyAfterReset()}}return Object(i.a)([Object(s.a)(),Object(i.b)("design:type",Object),Object(i.b)("design:paramtypes",[])],t.prototype,"snapshot",null),Object(i.a)([Object(s.b)(),Object(i.c)(0,Object(s.e)("patchValue")),Object(i.b)("design:type",Function),Object(i.b)("design:paramtypes",[Object]),Object(i.b)("design:returntype",void 0)],t.prototype,"patchState",null),Object(i.a)([Object(s.b)(),Object(i.c)(0,Object(s.e)("stateValue")),Object(i.b)("design:type",Function),Object(i.b)("design:paramtypes",[Object]),Object(i.b)("design:returntype",void 0)],t.prototype,"setState",null),Object(i.a)([Object(s.b)(),Object(i.b)("design:type",Function),Object(i.b)("design:paramtypes",[]),Object(i.b)("design:returntype",void 0)],t.prototype,"reset",null),t})(),o=(()=>{class t extends r{get snapshot(){return Object(c.p)(this.getState())}get ctx(){return Object(c.n)(this.context)}getState(){return this.ctx.getState()}dispatch(t){return this.ctx.dispatch(t)}patchState(t){this.ctx.patchState(t)}setState(t){this.ctx.setState(t)}reset(){this.ctx.setState(this.initialState),this.markAsDirtyAfterReset()}}return Object(i.a)([Object(s.a)(),Object(i.b)("design:type",Object),Object(i.b)("design:paramtypes",[])],t.prototype,"snapshot",null),Object(i.a)([Object(s.b)(),Object(i.c)(0,Object(s.e)("patchValue")),Object(i.b)("design:type",Function),Object(i.b)("design:paramtypes",[Object]),Object(i.b)("design:returntype",void 0)],t.prototype,"patchState",null),Object(i.a)([Object(s.b)(),Object(i.c)(0,Object(s.e)("stateValue")),Object(i.b)("design:type",Function),Object(i.b)("design:paramtypes",[Object]),Object(i.b)("design:returntype",void 0)],t.prototype,"setState",null),Object(i.a)([Object(s.b)(),Object(i.b)("design:type",Function),Object(i.b)("design:paramtypes",[]),Object(i.b)("design:returntype",void 0)],t.prototype,"reset",null),t})();var b=n("8Y7J"),p=n("UFJs"),u=function(t){return t.ID="id",t}({}),O=n("ty+z"),d=n("HDdC"),j=n("lJxs");let l=(()=>{class t extends r{constructor(){super(...arguments),this.primaryKey=u.ID,this.comparator=null}get snapshot(){return Object(c.p)(this.getState())}get ids(){return this.snapshot.ids}get entities(){return this.snapshot.entities}get ids$(){return this.state$.pipe(Object(j.a)(t=>t.ids))}get entities$(){return this.state$.pipe(Object(j.a)(t=>t.entities))}get ctx(){return Object(c.n)(this.context)}setComparator(t){return this.comparator=t,this}dispatch(t){return this.ctx.dispatch(t)}getState(){return this.ctx.getState()}selectId(t){var e;return null===(e=t)||void 0===e?void 0:e[this.primaryKey]}selectOne(t){var e;return null!==(e=this.snapshot.entities[t])&&void 0!==e?e:null}selectAll(){const t=this.getState();return t.ids.map(e=>t.entities[e])}reset(){this.setEntitiesState(this.initialState),this.markAsDirtyAfterReset()}addOne(t){this.addEntityOne(t)}addMany(t){this.addEntitiesMany(t)}setOne(t){this.setEntityOne(t)}setMany(t){this.setEntitiesMany(t)}setAll(t){this.setEntitiesAll(t)}updateOne(t){this.updateEntitiesMany([t])}updateMany(t){this.updateEntitiesMany(t)}upsertOne(t){this.upsertEntitiesMany([t])}upsertMany(t){this.upsertEntitiesMany(t)}removeOne(t){this.removeEntitiesMany([t])}removeMany(t){this.removeEntitiesMany(t)}removeByEntity(t){const e=this.selectId(t);this.removeEntitiesMany([e])}removeByEntities(t){const e=[];for(const n of t){const t=this.selectId(n);e.push(t)}this.removeEntitiesMany(e)}removeAll(){this.setEntitiesState(this.initialState)}sort(t){this.comparator=null!=t?t:this.comparator,Object(c.v)(this.comparator)?console.warn(p.c.NGXS_COMPARE):this.setEntitiesState(this.getState())}addEntityOne(t){const e=this.getState(),n=this.selectIdValue(t);n in e.entities||this.setEntitiesState(Object.assign(Object.assign({},e),{ids:[...e.ids,n],entities:Object.assign(Object.assign({},e.entities),{[n]:t})}))}addEntitiesMany(t){const e=this.getState(),n={},i=[];for(const s of t){const t=this.selectIdValue(s);t in e.entities||t in n||(i.push(t),n[t]=s)}i.length&&this.setEntitiesState(Object.assign(Object.assign({},e),{ids:[...e.ids,...i],entities:Object.assign(Object.assign({},e.entities),n)}))}setEntitiesAll(t){const e=this.getState(),n={},i=[];for(const s of t){const t=this.selectIdValue(s);t in n||(i.push(t),n[t]=s)}this.setEntitiesState(Object.assign(Object.assign({},e),{ids:i,entities:n}))}setEntityOne(t){const e=this.getState(),n=this.selectIdValue(t);this.setEntitiesState(Object.assign(Object.assign({},e),n in e.entities?{entities:Object.assign(Object.assign({},e.entities),{[n]:t})}:{ids:[...e.ids,n],entities:Object.assign(Object.assign({},e.entities),{[n]:t})}))}setEntitiesMany(t){for(const e of t)this.setEntityOne(e)}updateEntitiesMany(t){const e=this.getState();if(0===(t=t.filter(t=>t.id in e.entities)).length)return;const n=this.generateKeyMap(e),i=Object.assign({},e.entities);for(const s of t){const t=this.updateOrigin(i,s),e=this.selectIdValue(t);e!==s.id&&(delete n[s.id],delete i[s.id]),n[s.id]=e,i[e]=t}this.setEntitiesState(Object.assign(Object.assign({},e),{ids:e.ids.map(t=>{var e;return null!==(e=n[t])&&void 0!==e?e:t}),entities:i}))}upsertEntitiesMany(t){const e=this.getState(),n=[],i=[];for(const s of t){const t=this.selectIdValue(s);t in e.entities?n.push({id:t,changes:s}):i.push(s)}this.updateMany(n),this.addMany(i)}removeEntitiesMany(t){const e=this.getState(),n=this.generateKeyMap(e),i=Object.assign({},e.entities);for(const s of t)s in i&&(delete n[s],delete i[s]);this.setEntitiesState(Object.assign(Object.assign({},e),{ids:e.ids.filter(t=>t in n),entities:i}))}setEntitiesState(t){const e=this.sortKeysByComparator(t.ids,t.entities);this.ctx.setState(Object.assign(Object.assign({},t),{ids:e,entities:t.entities}))}sortKeysByComparator(t,e){if(Object(c.v)(this.comparator))return t;const n=t.slice(),i=this.comparator;return"function"==typeof i?n.sort((t,n)=>i(e[t],e[n])):this.sortByComparatorOptions(n,i,e)}sortByComparatorOptions(t,e,n){switch(null==e?void 0:e.sortByOrder){case"asc":return t.sort((t,i)=>Object(O.b)(null==e?void 0:e.sortBy,n[t],n[i]));case"desc":return t.sort((t,i)=>Object(O.c)(null==e?void 0:e.sortBy,n[t],n[i]));default:return Object(b.X)()&&console.warn(`Invalid --\x3e { sortByOrder: "${null==e?void 0:e.sortByOrder}" } not supported!`),t}}generateKeyMap(t){return t.ids.reduce((t,e)=>(t[e]=e,t),{})}updateOrigin(t,e){return Object.assign(Object.assign({},t[e.id]),e.changes)}selectIdValue(t){const e=this.selectId(t);return Object(c.v)(e)&&Object(b.X)()&&console.warn(`The entity passed to the 'selectId' implementation returned ${e}.`,"You should probably provide your own 'selectId' implementation.","The entity that was passed:",t,"The current `selectId` implementation: (entity: V): K => entity.id"),e}}return Object(i.a)([Object(s.a)(),Object(i.b)("design:type",Object),Object(i.b)("design:paramtypes",[])],t.prototype,"snapshot",null),Object(i.a)([Object(s.a)(),Object(i.b)("design:type",Array),Object(i.b)("design:paramtypes",[])],t.prototype,"ids",null),Object(i.a)([Object(s.a)(),Object(i.b)("design:type",Object),Object(i.b)("design:paramtypes",[])],t.prototype,"entities",null),Object(i.a)([Object(s.a)(),Object(i.b)("design:type",d.a),Object(i.b)("design:paramtypes",[])],t.prototype,"ids$",null),Object(i.a)([Object(s.a)(),Object(i.b)("design:type",d.a),Object(i.b)("design:paramtypes",[])],t.prototype,"entities$",null),Object(i.a)([Object(s.b)(),Object(i.b)("design:type",Function),Object(i.b)("design:paramtypes",[]),Object(i.b)("design:returntype",void 0)],t.prototype,"reset",null),Object(i.a)([Object(s.b)(),Object(i.c)(0,Object(s.e)("entity")),Object(i.b)("design:type",Function),Object(i.b)("design:paramtypes",[Object]),Object(i.b)("design:returntype",void 0)],t.prototype,"addOne",null),Object(i.a)([Object(s.b)(),Object(i.c)(0,Object(s.e)("entities")),Object(i.b)("design:type",Function),Object(i.b)("design:paramtypes",[Array]),Object(i.b)("design:returntype",void 0)],t.prototype,"addMany",null),Object(i.a)([Object(s.b)(),Object(i.c)(0,Object(s.e)("entity")),Object(i.b)("design:type",Function),Object(i.b)("design:paramtypes",[Object]),Object(i.b)("design:returntype",void 0)],t.prototype,"setOne",null),Object(i.a)([Object(s.b)(),Object(i.c)(0,Object(s.e)("entities")),Object(i.b)("design:type",Function),Object(i.b)("design:paramtypes",[Array]),Object(i.b)("design:returntype",void 0)],t.prototype,"setMany",null),Object(i.a)([Object(s.b)(),Object(i.c)(0,Object(s.e)("entities")),Object(i.b)("design:type",Function),Object(i.b)("design:paramtypes",[Array]),Object(i.b)("design:returntype",void 0)],t.prototype,"setAll",null),Object(i.a)([Object(s.b)(),Object(i.c)(0,Object(s.e)("update")),Object(i.b)("design:type",Function),Object(i.b)("design:paramtypes",[Object]),Object(i.b)("design:returntype",void 0)],t.prototype,"updateOne",null),Object(i.a)([Object(s.b)(),Object(i.c)(0,Object(s.e)("updates")),Object(i.b)("design:type",Function),Object(i.b)("design:paramtypes",[Array]),Object(i.b)("design:returntype",void 0)],t.prototype,"updateMany",null),Object(i.a)([Object(s.b)(),Object(i.c)(0,Object(s.e)("entity")),Object(i.b)("design:type",Function),Object(i.b)("design:paramtypes",[Object]),Object(i.b)("design:returntype",void 0)],t.prototype,"upsertOne",null),Object(i.a)([Object(s.b)(),Object(i.c)(0,Object(s.e)("entities")),Object(i.b)("design:type",Function),Object(i.b)("design:paramtypes",[Array]),Object(i.b)("design:returntype",void 0)],t.prototype,"upsertMany",null),Object(i.a)([Object(s.b)(),Object(i.c)(0,Object(s.e)("id")),Object(i.b)("design:type",Function),Object(i.b)("design:paramtypes",[Object]),Object(i.b)("design:returntype",void 0)],t.prototype,"removeOne",null),Object(i.a)([Object(s.b)(),Object(i.c)(0,Object(s.e)("ids")),Object(i.b)("design:type",Function),Object(i.b)("design:paramtypes",[Array]),Object(i.b)("design:returntype",void 0)],t.prototype,"removeMany",null),Object(i.a)([Object(s.b)(),Object(i.c)(0,Object(s.e)("entity")),Object(i.b)("design:type",Function),Object(i.b)("design:paramtypes",[Object]),Object(i.b)("design:returntype",void 0)],t.prototype,"removeByEntity",null),Object(i.a)([Object(s.b)(),Object(i.c)(0,Object(s.e)("entities")),Object(i.b)("design:type",Function),Object(i.b)("design:paramtypes",[Array]),Object(i.b)("design:returntype",void 0)],t.prototype,"removeByEntities",null),Object(i.a)([Object(s.b)(),Object(i.b)("design:type",Function),Object(i.b)("design:paramtypes",[]),Object(i.b)("design:returntype",void 0)],t.prototype,"removeAll",null),Object(i.a)([Object(s.b)(),Object(i.c)(0,Object(s.e)("comparator")),Object(i.b)("design:type",Function),Object(i.b)("design:paramtypes",[Object]),Object(i.b)("design:returntype",void 0)],t.prototype,"sort",null),t})();n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return l}))},CoC1:function(t,e,n){"use strict";var i=n("NZHw"),s=n("7+OI"),c=n("LRne"),r=n("lJxs");const a={cancelUncompleted:!0};function o(t=a){return(e,n,a)=>{Object(i.y)(e,a);const o=a.value,b=n.toString();return a.value=function(...e){const n=this;let a=null;const p=i.b.getRepositoryByInstance(n),u=p.operations;let O=u[b];const d=p.stateMeta,j=Object(i.r)(o);if(!O){const e=Object(i.a)(o),n=Object(i.e)({statePath:d.path,methodName:b,argumentsNames:e,argumentRegistry:j});O=u[b]={type:n,options:{cancelUncompleted:t.cancelUncompleted}},d.actions[O.type]=[{type:O.type,options:O.options,fn:O.type}]}i.b.ensureMappedState(d).instance[O.type]=()=>(a=o.apply(n,e),Object(s.a)(a)?Object(c.a)(null).pipe(Object(r.a)(()=>a)):a);const l=i.b.createAction(O,e,j),y=i.c.store.dispatch(l);return Object(s.a)(a)?Object(i.h)(y,a):a},a}}n("5Q4k");var b=n("8Y7J");const p=new b.p("NGXS_DATA_STORAGE_DECODE_TYPE_TOKEN");n("e1JD");var u=n("F7qv");const O=new b.p("NGXS_DATA_STORAGE_PREFIX_TOKEN");n("sXi/");var d=n("UFJs"),j=n("zqRF");function l(t){return e=>{const n=Object(i.q)(e),s=Object(i.s)(e);if(!n.name||!s)throw new Error(d.c.NGXS_PERSISTENCE_STATE);return new Proxy(e,{construct(e,n){const c=Reflect.construct(e,n);return function(t){var e;try{const n=null===(e=u.a.injector)||void 0===e?void 0:e.get(j.a);t.forEach(t=>{n.providers.add(t)})}catch(n){throw new Error(d.c.NGXS_PERSISTENCE_CONTAINER)}}(function(t,e){var n,s;let c;const r=null===(n=u.a.injector)||void 0===n?void 0:n.get(O,"@ngxs.store."),a=null===(s=u.a.injector)||void 0===s?void 0:s.get(p,"none");return c=e?(Array.isArray(e)?e:[e]).map(e=>function({option:t,decodeType:e,prefix:n,meta:s}){return function(t,e){return"path"in e||(e=Object.assign(Object.assign({},e),{get path(){return t.stateMeta&&t.stateMeta.path}})),e}(s,Object.assign(Object.assign({},t),{ttl:Object(i.u)(t.ttl)?t.ttl:-1,version:Object(i.u)(t.version)?t.version:1,decode:Object(i.u)(t.decode)?t.decode:e,prefixKey:Object(i.u)(t.prefixKey)?t.prefixKey:n,nullable:!!Object(i.u)(t.nullable)&&t.nullable}))}({option:e,prefix:r,decodeType:a,meta:t})):function(t,e,n){return[{get path(){return t.stateMeta&&t.stateMeta.path},existingEngine:localStorage,ttl:-1,version:1,decode:n,prefixKey:e,nullable:!1}]}(t,r,a),c}(s,t)),c}})}}function y(){return t=>{const e=Object(i.q)(t);if(!e.name)throw new Error(d.c.NGXS_DATA_STATE);Object(i.j)(t,e),function(t,e,n){Object.defineProperties(t.prototype,{name:{enumerable:!0,configurable:!0,value:e.name},initialState:{enumerable:!0,configurable:!0,get:()=>Object(i.l)(n)},context:Object(i.i)(t)})}(t,e,Object(i.f)(t)),Object(i.k)(t)}}function g(t=300){let e=null;return(n,s,c)=>{const r=c.value;return c.value=function(...n){var s;Object(i.g)(),null===(s=i.c.ngZone)||void 0===s||s.runOutsideAngular(()=>{window.clearTimeout(e),e=window.setTimeout(()=>{const t=r.apply(this,n);t&&Object(b.X)()&&console.warn(d.c.NGXS_DATA_ASYNC_ACTION_RETURN_TYPE,t)},t)})},c}}function h(t){return(e,n,s)=>{const c=t.trim();if(!c)throw new Error(d.c.NGXS_INVALID_PAYLOAD_NAME);Object(i.o)(e,n).createPayloadType(c,n,s)}}function f(t){return(e,n,s)=>{const c=t.trim();if(!c)throw new Error(d.c.NGXS_INVALID_ARG_NAME);Object(i.o)(e,n).createArgumentName(c,n,s)}}function v(){return(t,e,n)=>{Object(i.z)(t,e);const s=n.get;return n.get=function(...t){const e=Object(i.m)(this),n=null==e?void 0:e.get(s);if(null==n?void 0:n.isObservable)return n.value;if(!n||n.sequenceId!==Object(i.t)()){e.delete(s);const n=s.apply(this,t);return e.set(s,{value:n,sequenceId:Object(i.t)(),isObservable:Object(i.x)(n)}),n}return n.value},n}}n.d(e,"b",(function(){return o})),n.d(e,"f",(function(){return l})),n.d(e,"g",(function(){return y})),n.d(e,"c",(function(){return g})),n.d(e,"e",(function(){return h})),n.d(e,"d",(function(){return f})),n.d(e,"a",(function(){return v}))},mrSG:function(t,e,n){"use strict";function i(t,e,n,i){var s,c=arguments.length,r=c<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(c<3?s(r):c>3?s(e,n,r):s(e,n))||r);return c>3&&r&&Object.defineProperty(e,n,r),r}function s(t,e){return function(n,i){e(n,i,t)}}function c(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}n.d(e,"a",(function(){return i})),n.d(e,"c",(function(){return s})),n.d(e,"b",(function(){return c}))},"ty+z":function(t,e,n){"use strict";function i(t,e,n){return(null==e?void 0:e[t])>(null==n?void 0:n[t])?1:(null==e?void 0:e[t])<(null==n?void 0:n[t])?-1:0}function s(t,e,n){return(null==e?void 0:e[t])>(null==n?void 0:n[t])?-1:(null==e?void 0:e[t])<(null==n?void 0:n[t])?1:0}function c(t){return null!=t?t:{ids:[],entities:{}}}n("lLvT"),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return c}))}}]);