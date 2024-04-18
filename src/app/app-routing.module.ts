import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { TrackingComponent } from './pages/tracking/tracking.component';
import { OrderTrackingComponent } from './pages/order-tracking/order-tracking.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { BusinessPlanComponent } from './pages/business-plan/business-plan.component';
import { FaqComponent } from './pages/faq/faq.component';
import { IndividualPlansComponent } from './pages/individual-plans/individual-plans.component';
import { IndividualServicesComponent } from './pages/individual-services/individual-services.component';
import { MaintenancePlansComponent } from './pages/maintenance-plans/maintenance-plans.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { TermsComponent } from './pages/terms/terms.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:'tracking', component: TrackingComponent},
  {path:'activetracking', component: OrderTrackingComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'busines-plan', component: BusinessPlanComponent},
  {path:'busines-service', component: BusinessPlanComponent},
  {path: 'faq', component: FaqComponent},
  {path: 'individual-plans', component: IndividualPlansComponent},
  {path: 'individual-services', component: IndividualServicesComponent},
  {path:'maintenance-plans', component: MaintenancePlansComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'terms', component: TermsComponent},
  {path:'testimonials', component: TestimonialsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}]
})
export class AppRoutingModule { }
