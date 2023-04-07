import { ComponentPortal, DomPortal, TemplatePortal } from '@angular/cdk/portal';

export type Portal = TemplatePortal | ComponentPortal<any> | DomPortal;
