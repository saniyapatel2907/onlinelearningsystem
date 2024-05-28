
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Addmcq } from '../models/addmcq';
import { AddmcqService } from '../services/addmcq.service';



@Component({
  selector: 'app-mcqht',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './mcqht.component.html',
  styleUrl: './mcqht.component.css'
})
export class McqhtComponent  implements OnInit{
  mcq:Addmcq[]=[]
  uq:String[]=[]
  marks:number=0
  constructor(private addServ:AddmcqService)
  {

  }
  submitdata(){
    let x:number=0
for(x=0;x<this.uq.length;x++)
  {
    if(this.uq[x]==this.mcq[x].ans)
      {
        this.marks++;
      }

  }
  alert("Obtained Marks="+this.marks)
  }
  ngOnInit(): void {
    this.addServ.getAllLang('html').subscribe((data:Addmcq[])=>{
      if(data!=null)
        {
          this.mcq=data

        }
    })
  }

}
