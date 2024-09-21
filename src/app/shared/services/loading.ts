import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoadingService {
    public loading = new Subject<boolean>();
    public isLoading = false;

    show() {
        this.isLoading = true;
        this.loading.next(true);
    }

    hide() {
        this.isLoading = false;
        this.loading.next(false);
    }
}
