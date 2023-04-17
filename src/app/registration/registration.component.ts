import { Component } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  user: User = new User();

  constructor(private userService: UserService) {}

  register() {
    this.userService.registerUser(this.user).subscribe({
      next: (response) => {
        // handle the response
      },
      error: (error) => {
        // handle the error
      },
      complete: () => {
        // handle the completion
      }
    });
  }

}
