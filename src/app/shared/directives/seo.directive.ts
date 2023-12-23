import { DOCUMENT } from '@angular/common';
import { Directive, Inject, OnInit, Renderer2 } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { VERSION } from 'src/environments/version';

@Directive({
  selector: '[appSeo]',
  standalone: true,
})
export class SeoDirective implements OnInit {
  private readonly siteName = 'RXDB demo';

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private meta: Meta,
    private router: Router,
    private renderer: Renderer2,
  ) {}

  public ngOnInit(): void {
    this.meta.updateTag({ name: 'author', content: VERSION.author.name });
    this.meta.updateTag({ name: 'revised', content: VERSION.date });
    this.meta.updateTag({ name: 'keywords', content: 'Demo' });
    this.meta.updateTag({ property: 'og:site_name', content: this.siteName });
    // this.meta.updateTag({ property: 'og:image', content: `${environment.domain}/assets/logos/og-image.png` });
    // this.meta.updateTag({ property: 'og:image:width', content: String(1200) });
    // this.meta.updateTag({ property: 'og:image:height', content: String(630) });
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateCanonicalLink();
      }
    });
  }

  private updateCanonicalLink(): void {
    let canonicalLink = this.document.querySelector('link[rel=canonical]');
    if (!canonicalLink) {
      canonicalLink = this.renderer.createElement('link');
      this.renderer.setAttribute(canonicalLink, 'rel', 'canonical');
      this.renderer.appendChild(document.head, canonicalLink);
    }
    const href = `https://celtian.github.io/demo-angular-material-rxdb${window.location.pathname}`;
    this.renderer.setAttribute(canonicalLink, 'href', href);
    this.meta.updateTag({ property: 'og:url', content: href });
  }
}
