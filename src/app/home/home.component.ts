import { Component, Inject, OnInit } from '@angular/core';
import { User } from '@app/_models';
import { AccountService, AlertService } from '@app/_services';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit {
    loading = false;
    user: User;
    userData = JSON.parse(localStorage.getItem('user')).userData;

    constructor(
        private alertService: AlertService,
        public dialog: MatDialog) {
        // this.user = this.accountService.userValue;
    }

    ngOnInit() {
        
    }

    openDialog() {
        this.dialog.open(DialogElementsExampleDialog, {
            width: '600px',
            data: this.userData
        });
    }
}

@Component({
    selector: 'update-user-dialog',
    templateUrl: 'update-user-dialog.html',
})
export class DialogElementsExampleDialog implements OnInit {
    form: FormGroup;
    submitted = false;
    loading = false;

    constructor(
        public dialogRef: MatDialogRef<DialogElementsExampleDialog>,
        private accountService: AccountService,
        public dialog: MatDialog,
        private fb: FormBuilder,
        private alertService: AlertService,
        @Inject(MAT_DIALOG_DATA) public data: any) {
        // this.user = this.accountService.userValue;
    }

    ngOnInit() {
        this.form = this.fb.group({
            firstName: [this.data.firstName, [Validators.required]],
            lastName: [this.data.lastName, [Validators.required]],
            email: [this.data.email, [Validators.required]],
            password: [this.data.password, [Validators.required]]
        });
    }

    updateUserData(form) {
        this.submitted = true;
        this.alertService.clear();
        if (form.invalid) {
            return;
        }
        this.loading = true;
        this.accountService.update(this.data.id, this.form.value).subscribe(data => {
            this.alertService.success('Update successful', { keepAfterRouteChange: true });
            this.dialogRef.close();
            // this.router.navigate(['..', { relativeTo: this.route }]);
        }, error => {
            this.alertService.error(error);
            this.loading = false;
            this.dialogRef.close();
        });
    }
}
