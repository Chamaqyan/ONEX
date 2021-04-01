import { MainService } from './main.service';
import { Component, OnDestroy, OnInit } from "@angular/core";
import { MatDialog } from '@angular/material/dialog';
import { AddUserModale } from "./addUserModal/addUser.component";
import { CookieService } from 'ngx-cookie';
import { ChangeUserData } from './changeModal/changeModal.component';

@Component({
    selector: 'main-view',
    templateUrl: 'main.view.html',
    styleUrls: ['main.view.scss']
})

export class MainView implements OnInit, OnDestroy {
    public page: number = 1;
    public users: any = [];
    public userAuth:any = JSON.parse(this._cookieService.get('authUser'));
    constructor(
        public dialog: MatDialog, 
        public mainService: MainService, 
        private _cookieService: CookieService
        ) { }

    ngOnInit() {
        this._getUsers()
      
    }

    private _getUsers(): void {
        this.mainService.users = JSON.parse(localStorage.getItem('dataSource'));
        console.log(this.users)
    }

    public deletUser(i): void {
        console.log(i);
        this.mainService.users.splice(i, 1);
        localStorage.setItem('dataSource', JSON.stringify(this.mainService.users));
    }

    public openModale() {
        let dialogRef = this.dialog.open(AddUserModale, {
            height: '400px',
            width: '500px',
            panelClass: 'custom-dialog-container',
           
        });
    }

    public openModaleChangeUser(user,i) {
        let dialogRef = this.dialog.open(ChangeUserData, {
            height: '400px',
            width: '500px',
            panelClass: 'custom-dialog-container',
            data: { user,i }
        });

        console.log(111111111)
    }



    ngOnDestroy() { }
}