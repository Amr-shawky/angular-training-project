import { Potfolio } from './component/potfolio/potfolio';
import { Routes } from '@angular/router';
import { Home } from './component/home/home';
import { Contact } from './component/contact/contact';
import { Notfound } from './component/notfound/notfound';


export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path:'home', component: Home,title: 'home'},
    {path:'contact', component: Contact,title: 'contact'},
    {path:'portfolio', component: Potfolio,title: 'portfolio'},
    {path:'**', component: Notfound, title: 'page not found'}
];
