import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  // define una query para actuar en el responsive de una pagina (Breakpoints[TIPOS_QUERY]
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      // se resuelve cuando la query (Breakpoints.Handset) machea con el breakpoint
      map(result => result.matches),
      // cuando existen multiples subscriptores (en este caso todos los pipe async del template) -> performance
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {
  }
}
