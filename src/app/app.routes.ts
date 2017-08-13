//import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import{
	AboutComponent,
	PortafolioComponent,
	ItemComponent
} from './components/index.paginas';

const app_routes: Routes = [  
  { path: 'home', component: PortafolioComponent },
  { path: 'about', component: AboutComponent },
  { path: 'item/:id', component: ItemComponent },
  { path: '**', pathMatch: 'full', redirectTo:'home' }
];

//export const appRoutingProviders:any[]=[];
export const app_routing = RouterModule.forRoot(app_routes,{useHash:true});