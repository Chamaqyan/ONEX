import { AuthRoutingModule } from './auth-routing.module';
import { AuthView } from './auth.view';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        AuthView
    ],
    imports: [
        CommonModule,
        AuthRoutingModule
    ],
    providers: []
})

export class AuthModule { }