import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { CookieService } from 'ngx-cookie';
@Component({
    selector: 'login-view',
    templateUrl: 'login.view.html',
    styleUrls: ['login.view.scss']
})

export class LoginView implements OnInit, OnDestroy {
    public loginForm: FormGroup;
    private _user:any;
    private _users = JSON.parse(localStorage.getItem("dataSource"));
    constructor(
        private _fb: FormBuilder, 
        private _router: Router,
        private _cookieService: CookieService
        ) { }

    ngOnInit() {
        this._formBuilder()
    }

    private _formBuilder(): void {
        this.loginForm = this._fb.group({
            login: [null, Validators.required],
            password: [null, Validators.required]
        })
    }

    public submit():void {
      this._user = this._users.find((u)=>{
            return  (u.email == this.loginForm.get('login').value && u.password == this.loginForm.get('password').value)
        })
        if(this._users){
            this._cookieService.putObject('authUser',this._user);
            this._router.navigate(['/main']);
        }
    }

    ngOnDestroy() { }
}