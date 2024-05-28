import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddmcqService } from '../services/addmcq.service';
import { Addmcq } from '../models/addmcq';

@Component({
  selector: 'app-mcqcs',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './mcqcs.component.html',
  styleUrl: './mcqcs.component.css'
})
export class McqcsComponent implements OnInit{
  add:Addmcq[]=[]
  uq:String[]=[]
  marks:number=0
  constructor(private addServ:AddmcqService)
  {

  }
  submitdata(){
    let x:number=0
for(x=0;x<this.uq.length;x++)
  {
    if(this.uq[x]==this.add[x].ans)
      {
        this.marks++;
      }

  }
  alert("Obtained Marks="+this.marks)
  }
  ngOnInit(): void {
    this.addServ.getAllLang('css').subscribe((data:Addmcq[])=>{
      if(data!=null)
        {
          this.add=data
        }
    })
  }

}
