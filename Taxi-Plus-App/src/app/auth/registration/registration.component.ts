import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  isLoading = false;
  error : string;
  constructor(private authService: AuthService, private router : Router, private userService: UserService) { }
  @ViewChild('registrationForm') public registrationForm: NgForm;
  ngOnInit(): void {
    if (localStorage.getItem('token') != null) {
      this.router.navigate(['/adminpanel']);
    }
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
       cityId: 1, //dodaj option
       genderId: 1, //dodaj option 
       address: this.registrationForm.value.address,
       email : this.registrationForm.value.email,
       roleId: roleIdUser

    }
    //provjeriti da li ima user sa istim username-om --- JAKO BITNOO !!!! 
    console.log(user)
    this.authService.registration(user).subscribe(s=> {
      this.router.navigate(['/adminpanel']);
      this.isLoading = false;

    }, 
    error => {

      this.error = "Korisničko ime ili lozinka su neispravni. "
        
      this.isLoading = false
    });
  }

}
