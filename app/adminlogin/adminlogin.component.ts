import { Component } from '@angular/core';
import { AdminLogin } from '../models/admin-login';
import { AdminLoginService } from '../services/admin-login.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-adminlogin',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './adminlogin.component.html',
  styleUrl: './adminlogin.component.css'
})
export class AdminloginComponent {
ad:AdminLogin=new AdminLogin();
constructor(private adserv:AdminLoginService,private router:Router)
{

}
submitdata()
{
  this.adserv.login(this.ad).subscribe((data:AdminLogin)=>{
    if(data!=null)
      {
        localStorage.setItem('aemailid',data.emailid)
        alert("Login Successful")
        this.router.navigate(['/'])
      }
      else
      alert("Invalid Emailid and Password")
  })
}
}
