import { MainView } from './main.view';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";

const mainRouting:Routes = [
    {path:'',component:MainView}
]

@NgModule({
    imports:[RouterModule.forChild(mainRouting)],
    exports:[RouterModule]
})


export class MainRoutingModule{}