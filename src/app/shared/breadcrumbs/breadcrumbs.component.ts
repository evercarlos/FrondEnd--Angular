import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { filter,map, Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {

  public title = '';
  public titleSubs$?: Subscription;
  // con el pip y filter filtramos los activationEnd
  constructor(private router: Router, private route: ActivatedRoute) { 
    // console.log(route.snapshot.children[0].data); solo mustra cuando se ingresa
    // por primera vez
  }

  ngOnInit(): void {
    this.titleSubs$ = this.getDataRuta()
    .subscribe((data:any) => {
      this.title =  data.titulo;
      document.title = `AdminTecsofec - ${this.title}`; // para el title del index.html
    })
  }

  getDataRuta() {
    return this.router.events
    .pipe(
      filter<any>(event => event instanceof ActivationEnd),
      filter((event: ActivationEnd)  => event.snapshot.firstChild ===null),
      map((event: ActivationEnd)  => event.snapshot.data),
    )
    /*.subscribe((data:any) => {
      this.title =  data.titulo;
      document.title = `AdminTecsofec - ${this.title}`; // para el title del index.html
    });*/
  }

  ngOnDestroy(): void {
    this.titleSubs$?.unsubscribe();
  }


}
