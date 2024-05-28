import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HtmComponent } from './htm/htm.component';
import { CsComponent } from './cs/cs.component';
import { JsComponent } from './js/js.component';
import { RegComponent } from './reg/reg.component';
import { LogComponent } from './log/log.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ViewRegisterComponent } from './view-register/view-register.component';
import { ViewFeedbackComponent } from './view-feedback/view-feedback.component';
import { McqhtComponent } from './mcqht/mcqht.component';
import { McqcsComponent } from './mcqcs/mcqcs.component';
import { McqjsComponent } from './mcqjs/mcqjs.component';
import { AddmcqComponent } from './addmcq/addmcq.component';

export const routes: Routes = [
{'path':'',component:HomeComponent},
{'path':'htm',component:HtmComponent},
{'path':'cs',component:CsComponent},
{'path':'js',component:JsComponent},
{'path':'reg',component:RegComponent},
{'path':'log',component:LogComponent},
{'path':'feedback',component:FeedbackComponent},
{'path':'alog',component:AdminloginComponent},
{'path':'viewreg',component:ViewRegisterComponent},
{'path':'viewfeedback',component:ViewFeedbackComponent},
{'path':'mcqht',component:McqhtComponent},
{'path':'mcqcs',component:McqcsComponent},
{'path':'mcqjs',component:McqjsComponent},
{'path':'addmcq',component:AddmcqComponent}


];
