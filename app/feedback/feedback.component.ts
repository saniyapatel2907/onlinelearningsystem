import { Component } from '@angular/core';
import { Feedback } from '../models/feedback';
import { FeedbackService } from '../services/feedback.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent {
f:Feedback=new Feedback();
constructor(private fServ:FeedbackService)
{

}
submitdata()
{
  this.f.emailid=localStorage.getItem("emailid")
  this.fServ.newFeedback(this.f).subscribe((data:Feedback)=>{
    if(data!=null)
      {
        alert('Thank You For Your Feedback')
      }
  })
}
}
