import { RegistorView } from './registor.view';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";

const registorRouting: Routes = [
    { path: '', component: RegistorView }
]

@NgModule({
    imports: [RouterModule.forChild(registorRouting)],
    exports: [RouterModule]
})


export class RegistorRoutingModule { }