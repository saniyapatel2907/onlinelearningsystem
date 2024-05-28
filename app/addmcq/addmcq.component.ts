import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddmcqService } from '../services/addmcq.service';
import { Addmcq } from '../models/addmcq';

@Component({
  selector: 'app-addmcq',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './addmcq.component.html',
  styleUrl: './addmcq.component.css'
})
export class AddmcqComponent implements OnInit {
  add:Addmcq=new Addmcq();
  ngOnInit(): void {
    
  }
constructor (private addServ: AddmcqService)
{

}
submitdata()
{
  this.addServ.newAddmcq(this.add).subscribe((data:Addmcq)=>{
if(data!=null)
  {
    alert('Add MCQ Successful')
  }
  })
}
}
