import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'about-us', loadChildren: () => import('./pages/about-us/about-us.module').then(m => m.AboutUsModule) },
  { path: 'contact-us', loadChildren: () => import('./pages/contact-us/contact-us.module').then(m => m.ContactUsModule) },
  { path: 'free-download', loadChildren: () => import('./pages/marketing/free-download/free-download.module').then(m => m.FreeDownloadModule) },
  { path: 'courses', loadChildren: () => import('./pages/product/product-listing/product-listing.module').then(m => m.ProductListingModule) },
  { path: 'upsc-residential', loadChildren: () => import('./pages/product/upsc-residential/upsc-residential.module').then(m => m.UpscResidentialModule) },
  { path: 'upsc-online', loadChildren: () => import('./pages/product/upsc-online/upsc-online.module').then(m => m.UpscOnlineModule) },
  { path: 'weekend-evening-online', loadChildren: () => import('./pages/product/weekend-evening/weekend-evening.module').then(m => m.WeekendEveningModule) },
  { path: 'product-ilp', loadChildren: () => import('./pages/product/iop/iop.module').then(m => m.IopModule) },
  { path: 'books/14-mantras-to-crack-upsc', loadChildren: () => import('./pages/product/handbooks/handbooks.module').then(m => m.HandbooksModule) },
  { path: 'payment', loadChildren: () => import('./pages/product/payment/payment-page/payment-page.module').then(m => m.PaymentPageModule) },
  { path: 'payment-status/:id', loadChildren: () => import('./pages/product/payment/payment-status/payment-status.module').then(m => m.PaymentStatusModule) },
  { path: 'slot-booking', loadChildren: () => import('./pages/slot-booking/slot-booking.module').then(m => m.SlotBookingModule) },
  { path: 'agent-dashboard', loadChildren: () => import('./pages/agent-dashboard/agent-dashboard.module').then(m => m.AgentDashboardModule) },
  { path: 'agent-form', loadChildren: () => import('./pages/agent-link/agent-link.module').then(m => m.AgentLinkModule) },
  { path: 'webinar', loadChildren: () => import('./pages/marketing/webinar/webinar.module').then(m => m.WebinarModule) },
  { path: 'upsc-coaching-online', loadChildren: () => import('./pages/marketing/weekend-evening-lp/weekend-evening-lp.module').then(m => m.WeekendEveningLpModule) },
  { path: 'register-webinar', loadChildren: () => import('./pages/marketing/register-webinar/register-webinar.module').then(m => m.RegisterWebinarModule) },
  { path: 'faculty', loadChildren: () => import('./pages/faculty/faculty.module').then(m => m.FacultyModule) },
  { path: 'termsofservice', loadChildren: () => import('./pages/termsofservice/termsofservice.module').then(m => m.TermsofserviceModule) },
  { path: 'privacy-policy', loadChildren: () => import('./pages/privacy-policy/privacy-policy.module').then(m => m.PrivacyPolicyModule) },
  { path: 'order/:id', loadChildren: () => import('./pages/product/payment/orderstatus/orderstatus.module').then(m => m.OrderstatusModule) },
  { path: 'student', loadChildren: () => import('./pages/test-update/student-upload/student-upload.module').then(m => m.StudentUploadModule) },
  { path: 'admin', loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule) },
  { path: 'tnpsc-online', loadChildren: () => import('./pages/marketing/tnpsc-online/tnpsc-online.module').then(m => m.TnpscOnlineModule) },
  { path: 'tnpsc-residential', loadChildren: () => import('./pages/marketing/tnpsc-residential/tnpsc-residential.module').then(m => m.TnpscResidentialModule) },
  { path: 'online-ias-coaching', loadChildren: () => import('./pages/marketing/ias-weekend-evening-lp/ias-weekend-evening-lp.module').then(m => m.IasWeekendEveningLpModule) },
  { path: 'online-ips-coaching', loadChildren: () => import('./pages/marketing/ips-weekend-evening-lp/ips-weekend-evening-lp.module').then(m => m.IpsWeekendEveningLpModule) },
  // { path: 'students', loadChildren: () => import('./pages/student/student.module').then(m => m.StudentModule) },
  { path: 'tnpsc-online-coaching', loadChildren: () => import('./pages/product/tnpsc-online-coaching/tnpsc-online-coaching.module').then(m => m.TnpscOnlineCoachingModule) },
  { path: 'upsc-residential-programme', loadChildren: () => import('./pages/marketing/upsc-residential-programme/upsc-residential-programme.module').then(m => m.UpscResidentialProgrammeModule) },
  { path: 'blogs', loadChildren: () => import('./pages/blogs/blog-explore/blog-explore.module').then(m => m.BlogExploreModule) },
  { path: 'blog/:id', loadChildren: () => import('./pages/blogs/blog-new/blog-new.module').then(m => m.BlogNewModule) },
  { path: 'refund-policy', loadChildren: () => import('./pages/refund-policy/refund-policy.module').then(m => m.RefundPolicyModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
