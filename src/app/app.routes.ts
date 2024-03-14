import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ComposeComponent } from './pages/compose/compose.component';
import { ReadComponent } from './pages/read/read.component';
import { OthersMessageComponent } from './pages/others-message/others-message.component';

export const routes: Routes = [

    {
        path : "inbox",
        component  :HomeComponent
    },
    {
        path :"compose",
        component : ComposeComponent
    },
    {
        path: "read",
        component :ReadComponent
    },
    {
        path: "mail/:slug",
        component :OthersMessageComponent
    }
];
