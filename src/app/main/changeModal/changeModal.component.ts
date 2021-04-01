import { MainService } from './../main.service';
import { Component, Inject, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { User } from "src/app/models/models";
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'changeUserData-app',
    templateUrl: 'changeModal.component.html',
    styleUrls: ['changeModal.component.scss']
})


export class ChangeUserData implements OnInit, OnDestroy {
    public changeUserData: FormGroup;


    constructor(
        private _fb: FormBuilder,
        public mainService: MainService,
        @Inject(MAT_DIALOG_DATA) private _data: { user: any, i: number },
        private _mainService: MainService
    ) { }

    ngOnInit() {
        this._formBuilder()
        console.log(this._data)
        this._get_user()
    }

    private _formBuilder(): void {
        this.changeUserData = this._fb.group({
            firstName: [null, Validators.required],
            lastName: [null, Validators.required],
            email: [null, Validators.required],
            password: [null, Validators.required],
            age: [null, Validators.required],
            role: [null, Validators.required]
        })
    }

    private _get_user(): void {
        const userData = this._data.user;
        if (userData) {
            this.changeUserData.patchValue({
                firstName: userData.firstName,
                lastName: userData.lastName,
                email: userData.email,
                password: userData.password,
                age: userData.age,
                role: userData.role,
            })

        }

    }

    public submit() {
        const userID = this._data.i
        console.log(userID)
        let users = this._mainService.users;
        users[userID] = {
            firstName: this.changeUserData.get('firstName').value,
            lastName: this.changeUserData.get('lastName').value,
            email: this.changeUserData.get('email').value,
            age: this.changeUserData.get('age').value,
            password: this.changeUserData.get('password').value,
            role: this.changeUserData.get('role').value,
        }
        localStorage.setItem('dataSource', JSON.stringify(this._mainService.users));
    }


    ngOnDestroy() { }
}