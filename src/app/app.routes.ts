import { Potfolio } from './component/potfolio/potfolio';
import { Routes } from '@angular/router';
import { Home } from './component/home/home';
import { Contact } from './component/contact/contact';
import { Notfound } from './component/notfound/notfound';
import { Settings } from './component/settings/settings';


export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path:'home', component: Home,title: 'home'},
    {path:'contact', component: Contact,title: 'contact'},
    {path:'portfolio', component: Potfolio,title: 'portfolio'},
    {path:'settings', component: Settings,title: 'settings'},
    {path:'**', component: Notfound, title: 'page not found'}
];
