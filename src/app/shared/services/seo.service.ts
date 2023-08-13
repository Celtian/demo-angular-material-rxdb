import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Subject } from 'rxjs';
import { VERSION } from 'src/environments/version';
import { SeoDto } from '../dto/seo.dto';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  private readonly siteName = 'Dynamic Forms demo';
  private seoSubj = new Subject<SeoDto>();

  constructor(@Inject(DOCUMENT) private doc: any, private meta: Meta) {
    this.applySeo();
  }

  public setSeo(seo: SeoDto, canonical: string): void {
    this.seoSubj.next(seo);
    if (typeof canonical !== 'undefined') {
      this.setCanonical(canonical);
    } else {
      this.resetCanonical();
    }
  }

  private applySeo(): void {
    this.seoSubj.asObservable().subscribe((seo) => {
      const title = seo.title;
      const description = seo.description;

      // common tags
      this.meta.updateTag({ name: 'description', content: description });
      this.meta.updateTag({ name: 'author', content: VERSION.author.name });
      this.meta.updateTag({ name: 'revised', content: VERSION.date });
      this.meta.updateTag({ name: 'keywords', content: 'Demo' });

      // og tags
      this.meta.updateTag({ property: 'og:title', content: title });
      this.meta.updateTag({ property: 'og:description', content: description });
      this.meta.updateTag({ property: 'og:site_name', content: this.siteName });
      // this.meta.updateTag({ property: 'og:image', content: `${environment.domain}/assets/logos/og-image.png` });
      // this.meta.updateTag({ property: 'og:image:width', content: String(1200) });
      // this.meta.updateTag({ property: 'og:image:height', content: String(630) });
    });
  }

  private setCanonical(url: string): void {
    let linkEl: HTMLLinkElement = this.doc.querySelector('link[rel=canonical]');
    if (!linkEl) {
      linkEl = this.doc.createElement('link');
      linkEl.setAttribute('rel', 'canonical');
      this.doc.head.appendChild(linkEl);
    }
    // const href = `${environment.domain}${url}`;
    const href = `https://celtian.github.io/demo-angular-material-rxdb${url}`;
    linkEl.setAttribute('href', href);
    this.meta.updateTag({ property: 'og:url', content: href });
  }

  private resetCanonical(): void {
    if (this.doc) {
      const canonical: HTMLLinkElement = this.doc.querySelector('link[rel=canonical]');
      if (canonical) {
        canonical.remove();
        this.meta.removeTag("name='og:url'");
      }
    }
  }
}
