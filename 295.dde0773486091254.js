"use strict";(self.webpackChunkrick_morty_api_test=self.webpackChunkrick_morty_api_test||[]).push([[295],{4295:($,l,n)=>{n.r(l),n.d(l,{CharactersModule:()=>L});var p=n(9808),s=n(9291),t=n(5e3);let d=(()=>{class a{constructor(){}ngOnInit(){}}return a.\u0275fac=function(r){return new(r||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-characters"]],decls:1,vars:0,template:function(r,e){1&r&&t._UZ(0,"router-outlet")},directives:[s.lC],styles:[""]}),a})();var i=n(8306),m=n(2426),h=n(9121),u=n(430),o=n(9224),g=n(7423);const C=function(){return["/characters/list"]};let f=(()=>{class a{constructor(r,e){this.store=r,this.activatedRoute=e,this.character$=new i.y,this.character={}}ngOnInit(){const r=this.activatedRoute.snapshot.queryParams.id;this.character$=this.store.select(h.L3),this.character$.subscribe(e=>{this.character=e.character,console.log(this.character),console.log(e)}),this.store.dispatch((0,m.Um)({id:r}))}}return a.\u0275fac=function(r){return new(r||a)(t.Y36(u.yh),t.Y36(s.gz))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-detail-characters"]],decls:35,vars:10,consts:[[1,"card-container"],[1,"example-card"],["mat-card-avatar","",1,"example-header-image"],["mat-card-image","",3,"src"],[1,"actions"],["mat-raised-button","","color","primary","mat-button","",3,"routerLink"]],template:function(r,e){1&r&&(t.TgZ(0,"h1"),t._uU(1,"Details"),t.qZA(),t.TgZ(2,"div",0)(3,"mat-card",1)(4,"mat-card-header"),t._UZ(5,"div",2),t.TgZ(6,"mat-card-title"),t._uU(7),t.qZA(),t.TgZ(8,"mat-card-subtitle"),t._uU(9),t.qZA()(),t._UZ(10,"img",3),t.TgZ(11,"mat-card-content")(12,"p")(13,"b"),t._uU(14,"Status:"),t.qZA(),t._uU(15),t.qZA(),t.TgZ(16,"p")(17,"b"),t._uU(18,"Gender:"),t.qZA(),t._uU(19),t.qZA(),t.TgZ(20,"p")(21,"b"),t._uU(22,"Origin:"),t.qZA(),t._uU(23),t.qZA(),t.TgZ(24,"p")(25,"b"),t._uU(26,"Location:"),t.qZA(),t._uU(27),t.qZA(),t.TgZ(28,"p")(29,"b"),t._uU(30,"Type:"),t.qZA(),t._uU(31),t.qZA()(),t.TgZ(32,"mat-card-actions",4)(33,"button",5),t._uU(34,"BACK"),t.qZA()()()()),2&r&&(t.xp6(7),t.Oqu(e.character.name),t.xp6(2),t.Oqu(e.character.species),t.xp6(1),t.s9C("src",e.character.image,t.LSH),t.xp6(5),t.hij(" ",e.character.status,""),t.xp6(4),t.hij(" ",e.character.gender,""),t.xp6(4),t.hij(" ",null==e.character.origin?null:e.character.origin.name,""),t.xp6(4),t.hij(" ",null==e.character.location?null:e.character.location.name,""),t.xp6(4),t.hij(" ",e.character.type||"None",""),t.xp6(2),t.Q6J("routerLink",t.DdM(9,C)))},directives:[o.a8,o.dk,o.n5,o.$j,o.dn,o.hq,g.lW,s.rH],styles:[".example-card[_ngcontent-%COMP%]{max-width:400px;max-height:600px}img[_ngcontent-%COMP%]{width:100%;margin-bottom:10px}.card-container[_ngcontent-%COMP%]{padding:50px;display:flex;justify-content:center;min-height:82vh}.actions[_ngcontent-%COMP%]{display:flex!important;justify-content:end}h1[_ngcontent-%COMP%]{margin-top:15px;margin-left:15px}"]}),a})();var y=n(104),Z=n(2015),v=n(6399);const x=function(){return["/characters/detail"]},U=function(a){return{id:a}};function A(a,c){if(1&a&&t._UZ(0,"app-character",2),2&a){const r=c.$implicit;t.Q6J("routerLink",t.DdM(3,x))("queryParams",t.VKq(4,U,r.id))("character",r)}}const M=[{path:"",component:d,children:[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:(()=>{class a{constructor(r){this.store=r,this.response$=new i.y,this.info={},this.characters=[],this.loading$=new i.y,this.change$=new i.y,this.initialCharacterValue=[]}ngOnInit(){this.response$=this.store.select(h.yp),this.response$.subscribe(r=>{this.info=r.info,this.characters=r.characters,this.initialCharacterValue=[...r.characters]}),this.loading$=this.store.select(h.NH),this.change$=this.store.select(y.K),this.change$.subscribe(r=>{this.filterItems(r)}),this.store.dispatch((0,m.Ve)({page:1}))}filterItems(r){this.characters=[...this.initialCharacterValue],r&&""!=r.trim()&&(this.characters=this.characters.filter(e=>(e.name?e.name:"").toLowerCase().indexOf(r.toLowerCase())>-1))}}return a.\u0275fac=function(r){return new(r||a)(t.Y36(u.yh))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-list-characters"]],decls:5,vars:1,consts:[[1,"card-container"],[3,"routerLink","queryParams","character",4,"ngFor","ngForOf"],[3,"routerLink","queryParams","character"]],template:function(r,e){1&r&&(t.TgZ(0,"h1"),t._uU(1,"Character List"),t.qZA(),t.TgZ(2,"div",0),t.YNc(3,A,1,6,"app-character",1),t.qZA(),t._UZ(4,"app-paginator")),2&r&&(t.xp6(3),t.Q6J("ngForOf",e.characters))},directives:[p.sg,Z.r,s.rH,v.J],styles:[".card-container[_ngcontent-%COMP%]{padding:50px;display:flex;justify-content:center;flex-direction:row;flex-wrap:wrap}.profile[_ngcontent-%COMP%]{border-radius:10px}h1[_ngcontent-%COMP%]{margin-top:15px;margin-left:15px}"]}),a})()},{path:"detail",component:f}]}];let O=(()=>{class a{}return a.\u0275fac=function(r){return new(r||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[[s.Bz.forChild(M)],s.Bz]}),a})();var T=n(8329);let L=(()=>{class a{}return a.\u0275fac=function(r){return new(r||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[[p.ez,O,T.m]]}),a})()}}]);