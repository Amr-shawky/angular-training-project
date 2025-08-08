import { Potfolio } from './component/potfolio/potfolio';
import { Routes } from '@angular/router';
import { Home } from './component/home/home';
import { Contact } from './component/contact/contact';
import { Notfound } from './component/notfound/notfound';
import { Settings } from './component/settings/settings';
import { Changepassword } from './component/changepassword/changepassword';
import { Profile } from './component/profile/profile';
import { Setting } from './component/setting/setting';
import { InputOutputDemoComponent } from './input-output-demo-component/input-output-demo-component';



export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path:'home', component: Home,title: 'home'},
    {path:'contact', component: Contact,title: 'contact'},
    {path:'portfolio', component: Potfolio,title: 'portfolio'},
    {path:'SharedData', component: InputOutputDemoComponent,title: 'SharedData'},
    {path:'settings', component: Settings,title: 'settings',children: [
        { path: '', redirectTo: 'setting', pathMatch: 'full' },
        {path: 'profile', component: Profile, title: 'Profile'},
        {path: 'change', component: Changepassword, title: 'Change Password'},
        {path:'setting', component: Setting, title: 'Setting'}
    ]},
    {path:'**', component: Notfound, title: 'page not found'}
];
