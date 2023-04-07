import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Portal } from '../dto/portal.dto';

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbsPortalService {
  private activePortal = new Subject<Portal>();

  public readonly portal$ = this.activePortal.asObservable();

  public setPortal(portal: Portal): void {
    this.activePortal.next(portal);
  }
}
