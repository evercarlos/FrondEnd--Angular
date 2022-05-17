import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, retry, take, map, filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnInit, OnDestroy {

  public intervalSubs?: Subscription; 

  constructor() {
    // retry(): Para intentar una a otra vez despues del error
    /*this.retornaObservable().pipe(
      retry() // retry(1)
    ).subscribe(
      valor => console.log('subs: ',valor),
      (err) => console.warn('error: ', err),
      () => console.info('obs terminado')
    );*/
    this.intervalSubs = this.retornaIntervalo()
    .subscribe(
      (valor) => console.log(valor)
    )
  }


  retornaIntervalo():Observable<number> {
    // take: Cuantas emisiones
    // map: Altera emisiones
    // en ese orden map, filter, take
    // al ser falso el filter ya no pasa el take  si es true
    // si pasa
    return interval(500)
    .pipe(
      map(valor => valor +1),
      filter(valor => (valor % 2 === 0)? true: false),
      //take(10),
    )
  }

  retornaObservable():Observable<number> {
    let i = -1;
    const obs$ = new Observable<number>(observer => {

     const intervalo  = setInterval(() => {
        
        i++;
        observer.next(i);

        if (i === 4) {
          clearInterval(intervalo);
          observer.complete();
        }
        if  ( i === 2) {
          //i  = 0;
          observer.error('i llego al valor de 2');
        }
      }, 1000);
    });
    return obs$;
  }


  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.intervalSubs?.unsubscribe();
  }


}
