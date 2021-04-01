import { AuthView } from './auth.view';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";

const authRoutin: Routes = [
    {
        path: '',
        component: AuthView,
        children: [
            {
                path: '',
                redirectTo: 'login',
                pathMatch: 'full'
            },
            { path: 'login', loadChildren: () => import('./login/login.module').then((l) => l.LoginModule) },
            { path: 'registor', loadChildren: () => import('./registor/registor.module').then((r) => r.RegistorModule) }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(authRoutin)],
    exports: [RouterModule]
})

export class AuthRoutingModule { }