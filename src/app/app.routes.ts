import { Potfolio } from './component/potfolio/potfolio';
import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Home } from './component/home/home';
import { Contact } from './component/contact/contact';


export const routes: Routes = [
    {path:'', component: Home,title: 'home'},
    {path:'contact', component: Contact,title: 'contact'},
    {path:'portfolio', component: Potfolio,title: 'portfolio'},
];
