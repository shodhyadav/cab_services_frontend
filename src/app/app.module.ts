import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignUpComponent } from './signup/sign-up/sign-up.component';
import { LoginComponent } from './login/login/login.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatListModule} from '@angular/material/list';
import { authIntercepterProvidors } from './Services/auth.intercepter';
import { UserComponent } from './Component/user/user.component';
import { HomeComponent } from './home/home/home.component';
import { UserDashboardComponent } from './Component/user/userDashboard/user-dashboard/user-dashboard.component';
import { SidebarComponent } from './Component/user/sidebar/sidebar/sidebar.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { BookingComponent } from './Component/user/booking/booking/booking.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ViewbookingComponent } from './Component/user/viewbooking/viewbooking.component';
import { FeedbackComponent } from './Component/user/feedback/feedback.component';
import { ChangepasswordComponent } from './Component/user/changepassword/changepassword.component';
import { ProfileComponent } from './Component/user/profile/profile/profile.component';
import { AdminComponent } from './admin/admin.component';
import { AdmindashboardComponent } from './Component/AdminDasboard/admindashboard/admindashboard.component';
import { SidebaradminComponent } from './Component/AdminDasboard/sidebaradmin/sidebaradmin/sidebaradmin.component';
import { FeatureComponent } from './navbarComponent/feature/feature/feature.component';
import { ContactComponent } from './navbarComponent/contact/contact/contact.component';
import { PricingComponent } from './navbarComponent/pricing/pricing/pricing.component';
import { ManagebookingComponent } from './Component/AdminDasboard/managebooking/managebooking/managebooking.component';
import { ManageUsersComponent } from './Component/AdminDasboard/manageUsers/manage-users/manage-users.component';
import { MembersComponent } from './Component/AdminDasboard/members/members/members.component';
import { ChangePasswordAdminComponent } from './Component/AdminDasboard/changePasswordAdmin/change-password-admin/change-password-admin.component';
import { UpdateComponent } from './Component/AdminDasboard/manageUsers/update/update.component';
import { DeleteComponent } from './Component/AdminDasboard/delete/delete.component';
import {MatSelectModule} from '@angular/material/select';
import { BookingsuccessfulComponent } from './Component/user/booking/bookingsuccessful/bookingsuccessful.component';
import { ReceiptComponent } from './Component/user/booking/receipt/receipt.component';
import { CancelbookingComponent } from './Component/user/viewbooking/cancelbooking/cancelbooking.component';
import { FeedbackSubmitComponent } from './Component/user/feedback/feedback-submit/feedback-submit.component';
import { CancelBookingComponent } from './Component/AdminDasboard/managebooking/cancel-booking/cancel-booking.component';
import { ViewFeedbackComponent } from './Component/AdminDasboard/viewFeedback/view-feedback/view-feedback.component';
import { CompleteComponent } from './Component/AdminDasboard/managebooking/complete/complete.component';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    NavbarComponent,
    UserComponent,
    HomeComponent,
    UserDashboardComponent,
    SidebarComponent,
    ProfileComponent,
    BookingComponent,
    ViewbookingComponent,
    FeedbackComponent,
    ChangepasswordComponent,
    AdminComponent,
    AdmindashboardComponent,
    SidebaradminComponent,
    FeatureComponent,
    ContactComponent,
    PricingComponent,
    ManagebookingComponent,
    ManageUsersComponent,
    MembersComponent,
    ChangePasswordAdminComponent,
    UpdateComponent,
    DeleteComponent,
    BookingsuccessfulComponent,
    ReceiptComponent,
    CancelbookingComponent,
    FeedbackSubmitComponent,
    CancelBookingComponent,
    ViewFeedbackComponent,
    CompleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatListModule,
    MatSlideToggleModule,
    NgbModule,
    MatSelectModule,
  ],
  providers: [authIntercepterProvidors],
  bootstrap: [AppComponent]
})
export class AppModule { }
