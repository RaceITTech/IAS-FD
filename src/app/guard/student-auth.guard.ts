import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { StudentAuthService } from '../services/student/student-auth.service'; 

export const studentAuthGuard: CanActivateFn = (route, state) => {
  const authServiceStudent = inject(StudentAuthService);
  const routerStudent = inject(Router);

  if (authServiceStudent.isLoggedInStudent()) {
    return true;
  } else {
    routerStudent.navigate(['students']);  // Redirect to student login page
    return false;
  }
};
