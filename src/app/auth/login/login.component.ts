import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { FormsModule , NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {

  constructor(private apiservice: AuthService) { }

  ulogin(data: any) {
    //debugger
    //console.log(data);
    this.apiservice.login(data);
    
  }

}
