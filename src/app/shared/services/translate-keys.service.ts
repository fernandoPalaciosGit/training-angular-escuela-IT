import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { translations } from '@shares/models/translations';

@Injectable({
  providedIn: 'root'
})
export class TranslateKeysService {
  private readonly DEFAULT_LANGUAGE = 'en';

  constructor(
    private translate: TranslateService
  ) {
    translate.addLangs(['en', 'es']);
    translate.setDefaultLang(this.DEFAULT_LANGUAGE);
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|es/) ? browserLang : this.DEFAULT_LANGUAGE);
  }

  private getTranslations(category: string, key: string): string {
    const texts: string[] = translations.filter((translate) => !!translate[category])
      .map((translate) => translate[category])
      .map((translate) => translate[key]);

    return !!texts.length ? texts[0] : `unknown translation for ${category}.${key}`;
  }

  getMessage(category: string, key: string): Observable<string> {
    return this.translate.get(this.getTranslations(category, key));
  }
}
