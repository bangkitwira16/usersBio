import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { BrowserModule } from '@angular/platform-browser';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
  standalone: true,
  imports: [
    BrowserModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    MatSelectModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatRadioModule,
    FormsModule,
  ],
  providers: [MatDatepickerModule],
})
export class UserFormComponent implements OnInit {
  qualifications: string[] = ['Post Graduate', 'Under Graduate'];
  srcResult: any;
  fileName: any;
  userForm = this._formBuilder.group({
    firstName: [''],
    lastName: [''],
    address: [''],
    specialization: [''],
    dob: [''],
    contact: [''],
    qualification: [''],
    languages: this._formBuilder.group({
      english: false,
      kanada: false,
      malaysia: false,
      hindi: false,
    }),
  });
  gender: 'male' | 'female' = 'male';

  @Output() onSave = new EventEmitter();
  userIndex: undefined | number = undefined;
  isSubmitting = false;
  constructor(
    private _formBuilder: FormBuilder,
    private userService: UserService
  ) {}

  ngOnInit(): void {}

  onFileSelected(event: any) {
    let selectedFiles = event.target.files;

    if (selectedFiles && selectedFiles[0]) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.srcResult = e.target.result;
      };

      reader.readAsDataURL(selectedFiles[0]);

      this.fileName = selectedFiles[0].name;
    }
  }

  save() {
    const payload = {
      firstName: this.userForm.get('firstName')?.value,
      lastName: this.userForm.get('lastName')?.value,
      address: this.userForm.get('address')?.value,
      specialization: this.userForm.get('specialization')?.value,
      qualification: this.userForm.get('qualification')?.value,
      dob: this.userForm.get('dob')?.value,
      image: {
        fileName: this.fileName,
        src: this.srcResult,
      },
      gender: this.gender,
      languages: this.userForm.get('languages')?.value,
      contact: this.userForm.get('contact')?.value,
    };
    this.isSubmitting = true;
    if (this.userIndex !== undefined) {
      setTimeout(() => {
        this.userService.updateUser(payload, this.userIndex!);
        this.isSubmitting = false;
      }, 500);
    } else {
      setTimeout(() => {
        this.userService.addUser(payload);
        this.isSubmitting = false;
      }, 500);
    }
    this.onSave.emit();
  }

  edit(index: number) {
    this.userIndex = index;
    this.fetchAndSetUserIndex(index);
  }

  fetchAndSetUserIndex(index: number) {
    const user = this.userService.getUsers()[index];
    this.userForm.get('firstName')?.setValue(user.firstName);
    this.userForm.get('lastName')?.setValue(user.lastName);
    this.userForm.get('address')?.setValue(user.address);
    this.userForm.get('qualification')?.setValue(user.qualification);
    this.userForm.get('specialization')?.setValue(user.specialization);
    this.userForm.get('contact')?.setValue(user.contact);
    this.userForm.get('dob')?.setValue(user.dob);
    this.fileName = user.image.fileName;
    this.srcResult = user.image.src;
    this.userForm.get('languages')?.setValue(user.languages);
    this.gender = user.gender;
  }
}
