import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CarManufacturerService } from 'src/app/car-list/car-manufacturer.service';
import { UserService } from 'src/app/user.service';
import { NumberLiteralType } from 'typescript';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  isLoading = true;
  error: string;

  cityList: any[];
  genderList: any[];

  cityId: number;
  genderId: number;

  usernameTaken = false;


  constructor(private authService: AuthService, private router: Router, private userService: UserService, private multiService: CarManufacturerService) { }

  @ViewChild('registrationForm') public registrationForm: NgForm;

  ngOnInit(): void {
    if (localStorage.getItem('token') != null) {
      this.router.navigate(['/adminpanel']);
    }

    this.multiService.getCitiesFromServer().subscribe(ftFromServer => {
      this.cityList = ftFromServer;
    });

    this.multiService.getGendersFromServer().subscribe(cFromServer => {
      this.genderList = cFromServer;
    });
  }
  onSubmit() {
    if (!this.registrationForm.valid)
      return;
    this.isLoading = true;
    const roleIdUser = 2
    var user = {
      username: this.registrationForm.value.username,
      password: this.registrationForm.value.password,
      firstName: this.registrationForm.value.firstName,
      lastName: this.registrationForm.value.lastName,
      birthDate: this.registrationForm.value.birthDate,
      phoneNumber: this.registrationForm.value.phoneNumber,
      cityId: this.registrationForm.value.cityId,
      genderId: this.registrationForm.value.genderId,
      address: this.registrationForm.value.address,
      email: this.registrationForm.value.email,
      roleId: roleIdUser

    }
      this.registerUser(user);
  }

  checkUser(data: any) {
    this.usernameTaken = false;
    this.userService.getUsersFromServer().subscribe(usersData => {
      usersData.forEach(userRecord => {
        if (data.target.value === userRecord.username) {
          console.log('uslo ovdiii')
          this.usernameTaken = true;
        }
      });
    });
  }

  registerUser(user: any) {

    this.authService.registration(user).subscribe(s => {
      this.router.navigate(['/adminpanel']);
      this.isLoading = false;

    },
      error => {

        this.error = "Korisničko ime ili lozinka su neispravni. "

        this.isLoading = false
      });
  }
}
