import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { SignUpComponent } from './signup/sign-up/sign-up.component';
import { UserComponent } from './Component/user/user.component';
import { HomeComponent } from './home/home/home.component';
import { BookingComponent } from './Component/user/booking/booking/booking.component';
import { ViewbookingComponent } from './Component/user/viewbooking/viewbooking.component';
import { FeedbackComponent } from './Component/user/feedback/feedback.component';
import { ChangepasswordComponent } from './Component/user/changepassword/changepassword.component';
import { ProfileComponent } from './Component/user/profile/profile/profile.component';
import { AdminComponent } from './admin/admin.component';
import { AdmindashboardComponent } from './Component/AdminDasboard/admindashboard/admindashboard.component';
import { ContactComponent } from './navbarComponent/contact/contact/contact.component';
import { FeatureComponent } from './navbarComponent/feature/feature/feature.component';
import { PricingComponent } from './navbarComponent/pricing/pricing/pricing.component';
import { ManagebookingComponent } from './Component/AdminDasboard/managebooking/managebooking/managebooking.component';
import { ManageUsersComponent } from './Component/AdminDasboard/manageUsers/manage-users/manage-users.component';
import { ChangePasswordAdminComponent } from './Component/AdminDasboard/changePasswordAdmin/change-password-admin/change-password-admin.component';
import { MembersComponent } from './Component/AdminDasboard/members/members/members.component';
import { UpdateComponent } from './Component/AdminDasboard/manageUsers/update/update.component';
import { DeleteComponent } from './Component/AdminDasboard/delete/delete.component';
import { BookingsuccessfulComponent } from './Component/user/booking/bookingsuccessful/bookingsuccessful.component';
import { ReceiptComponent } from './Component/user/booking/receipt/receipt.component';
import { CancelbookingComponent } from './Component/user/viewbooking/cancelbooking/cancelbooking.component';
import { FeedbackSubmitComponent } from './Component/user/feedback/feedback-submit/feedback-submit.component';
import { CancelBookingComponent } from './Component/AdminDasboard/managebooking/cancel-booking/cancel-booking.component';
import { ViewFeedbackComponent } from './Component/AdminDasboard/viewFeedback/view-feedback/view-feedback.component';
import { CompleteComponent } from './Component/AdminDasboard/managebooking/complete/complete.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'signup',
    component: SignUpComponent,
    pathMatch: 'full'
  },
  {
    path: 'user',
    component: UserComponent,
    children:[
      {
        path:'profile',
        component:ProfileComponent,
      },
      {
        path:'booking',
        component:BookingComponent,
      },
      {
        path:'viewbooking',
        component:ViewbookingComponent,
      },
      {
        path:'feedback',
        component:FeedbackComponent,
      },
      {
        path:'changepassword',
        component:ChangepasswordComponent,
      },
      {
        path:'bookingSuccess/:id',
        component:BookingsuccessfulComponent,
      },
      {
        path:'receipt/:id',
        component:ReceiptComponent,
      },
      {
        path:'cancel/:id',
        component:CancelbookingComponent,
      },
      {
        path:'submit',
        component:FeedbackSubmitComponent,
      },
    ]
  },
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path:'adminlogin',
    component:AdminComponent,
    pathMatch:'full'
  },

  {
    path: 'admin',
    component: AdmindashboardComponent,
    children :[
      {
        path:'managebooking',
        component:ManagebookingComponent,
      },
      {
        path:'manageUsers',
        component:ManageUsersComponent,
      },
      {
        path:'changepassword',
        component:ChangePasswordAdminComponent,
      },
      {
        path:'members',
        component:MembersComponent,
      },
      {
        path:'members',
        component:MembersComponent,
      },{
        path:'update/:Id',
        component:UpdateComponent,
      },
      {
        path:'delete/:Id',
        component:DeleteComponent,
      },
      {
        path:'cancel/:id',
        component:CancelBookingComponent,
      },
      {
        path:'complete/:id',
        component:CompleteComponent,
      },
      {
        path:'viewfeedback',
        component:ViewFeedbackComponent,
      },
    ]
  },

  {
    path:'contact',
    component:ContactComponent,
    pathMatch:'full'
  },
  {
    path:'feature',
    component:FeatureComponent,
    pathMatch:'full'
  },
  {
    path:'faq',
    component:PricingComponent,
    pathMatch:'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
