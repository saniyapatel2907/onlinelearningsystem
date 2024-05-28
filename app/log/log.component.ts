import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Register } from '../models/register';
import { register } from 'module';
import { RegisterServiceService } from '../services/register-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './log.component.html',
  styleUrl: './log.component.css'
})
export class LogComponent {
reg:Register=new Register();
constructor(private regServ:RegisterServiceService,private router:Router)
{

}
submitdata()
{
  this.regServ.login(this.reg).subscribe((data:Register)=>{
if(data!=null)
  {
localStorage.setItem("emailid",data.emailid)
alert('Login Successful')
this.router.navigate(['/'])
  }
  })
}
}
