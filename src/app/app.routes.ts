import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ComposeComponent } from './pages/compose/compose.component';
import { ReadComponent } from './pages/read/read.component';
import { OthersMessageComponent } from './pages/others-message/others-message.component';
import { AuthComponent } from './pages/auth/auth.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { AccountComponent } from './pages/account/account.component';
import { FormAccountComponent } from './pages/form-account/form-account.component';

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
        path: "read/:id",
        component :ReadComponent
    },
    {
        path: "mail/:slug",
        component :OthersMessageComponent
    },
    {
        path: '',
        component : AuthComponent
    },
    {
        path: 'register',
        component : SignUpComponent
    },
    {
        path: 'account',
        component : AccountComponent
    },
    {
        path: 'create-account',
        component : FormAccountComponent
    }
];
