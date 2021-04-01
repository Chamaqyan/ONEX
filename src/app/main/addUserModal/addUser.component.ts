import { MainService } from './../main.service';
import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { User } from "src/app/models/models";

@Component({
    selector: 'adduser-app',
    templateUrl: 'addUser.component.html',
    styleUrls: ['addUser.component.scss']
})


export class AddUserModale implements OnInit, OnDestroy {
    public adduser: FormGroup;
     

    constructor(private _fb: FormBuilder,public mainService:MainService) { }

    ngOnInit() {
        this._formBuilder()
    }

    private _formBuilder(): void {
        this.adduser = this._fb.group({
            firstName: [null, Validators.required],
            lastName: [null, Validators.required],
            email: [null, Validators.required],
            password: [null, Validators.required],
            passwordConfirm: [null, Validators.required],
            age: [null, Validators.required],
            role: [null, Validators.required]
        })
    }
    private _saveDataToLocalStorage(data) {
        this.mainService.users.push(data);
        localStorage.setItem('dataSource', JSON.stringify( this.mainService.users));
    }

    public submit(): void {
        if (this.adduser.invalid) {
            return
        }
        const registrationData: User = {
            firstName: this.adduser.get('firstName').value,
            lastName: this.adduser.get('lastName').value,
            email: this.adduser.get('email').value,
            age: this.adduser.get('age').value,
            password: this.adduser.get('password').value,
            role: this.adduser.get('role').value,
        }

        this._saveDataToLocalStorage(registrationData);
    }


    ngOnDestroy() { }
}