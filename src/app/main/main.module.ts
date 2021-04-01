import { SharedModule } from './../shared/shared.module';
import { MainView } from './main.view';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { AddUserModale } from './addUserModal/addUser.component';
import { MainService } from './main.service';
import { ChangeUserData } from './changeModal/changeModal.component';
@NgModule({
    declarations: [
        MainView,
        AddUserModale,
        ChangeUserData
    ],
    imports: [
        CommonModule,
        MainRoutingModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        MatDialogModule,
        SharedModule
    ],
    exports: [
        MatDialogModule
    ],
    providers: [
        MainService
    ]
})

export class MainModule { }