"use strict";
var event_list_component_1 = require("./events/event-list.component");
// import { HomeComponent } from './';
// import { Name2Component } from './';
// import { Name3Component } from './';
// import { Name4Component } from './';
// import { PageNotFoundComponent } from './';
exports.Approutes = [
    { path: 'Events', component: event_list_component_1.EventListComponent },
    { path: '', redirectTo: 'Events', pathMatch: 'full' }
];
//# sourceMappingURL=routes.js.map