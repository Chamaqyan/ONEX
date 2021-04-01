import { LoginView } from './login.view';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";

const loginRouting: Routes = [
    { path: '', component: LoginView }
]

@NgModule({
    imports: [RouterModule.forChild(loginRouting)],
    exports: [RouterModule]
})


export class LoginRoutingModule { }