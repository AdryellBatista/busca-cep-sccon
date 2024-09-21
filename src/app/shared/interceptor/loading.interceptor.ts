import { Injectable } from '@angular/core';
import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { finalize } from 'rxjs/operators';
import { LoadingService } from '../../shared/services/loading';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor(public loadingService: LoadingService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    if (!this.loadingService.isLoading) {
      this.loadingService.show();
    }

    return next.handle(req).pipe(finalize(() => {
      setTimeout(() => {
        if (this.loadingService.isLoading) {
          this.loadingService.hide();
        }
      }, 300);
    }));
  }
}
