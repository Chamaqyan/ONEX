import { User } from './../../models/models';
import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: 'registor-view',
    templateUrl: 'registor.view.html',
    styleUrls: ['registor.view.scss']
})

export class RegistorView implements OnInit, OnDestroy {
    public registorForm: FormGroup;
    private dataSource: any = [];
    constructor(private _fb: FormBuilder,) { }
    ngOnInit() {
        this._formBuilder()
    }

    private _formBuilder(): void {
        this.registorForm = this._fb.group({
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
        this.dataSource = JSON.parse(localStorage.getItem('dataSource')) || [];
        
        this.dataSource.push(data);
     
        localStorage.setItem('dataSource', JSON.stringify(this.dataSource));
    }

    public submit(): void {
        if (this.registorForm.invalid) {
            return
        }
        const registrationData: User = {
            firstName: this.registorForm.get('firstName').value,
            lastName: this.registorForm.get('lastName').value,
            email: this.registorForm.get('email').value,
            age: this.registorForm.get('age').value,
            password: this.registorForm.get('password').value,
            role: this.registorForm.get('role').value,
        }

        this._saveDataToLocalStorage(registrationData);
    }


    ngOnDestroy() { }
}