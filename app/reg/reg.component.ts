import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Register } from '../models/register';
import { RegisterServiceService } from '../services/register-service.service';
import { Router } from 'express';
import { RouterOutlet } from '@angular/router';




@Component({
  selector: 'app-reg',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterOutlet],
  templateUrl: './reg.component.html',
  styleUrl: './reg.component.css'
})
export class RegComponent implements OnInit {
  reg:Register=new Register();
  ngOnInit(): void {
  
  }
constructor(private regServ:RegisterServiceService)
{
  
}
submitdata(regForm:any)
{
  this.regServ.newUser(this.reg).subscribe((data:Register)=>{
    if(data!=null)
      {
        alert('Registration Successful')
      }
  })
  console.log(regForm.value)
}

}
