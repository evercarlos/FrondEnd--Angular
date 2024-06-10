import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, retry, take, map, filter, Subscription } from 'rxjs';
import { Company } from 'src/app/interfaces/company';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnInit, OnDestroy {
  public intervalSubs?: Subscription; 
  public items?: Company[];
  public company:Company = {} as Company;

  constructor(
    private _companyService: CompanyService
  ) {
    
  }


  ngOnInit(): void {
    this.start();
  }

  cleanForm = () => {
    this.company.id = 0;
    this.company.name= '';
    this.company.ruc= '';
    this.company.type = '';
  }
  

  start = () => {
    this._companyService.findAll()
    .subscribe((resp:any) => {
        console.log(resp);
        this.items= resp;
    })
  } 


  save = () => {
    this._companyService.save(this.company)
    .subscribe((resp:any) => {
      this.cleanForm();
      this.start();
    });
  }

  edit = (item: Company) => {
    this.cleanForm();
    this._companyService.find(item.id)
    .subscribe((resp:any) => {
      this.company = resp;
      this.start();
    });
  }

  delete = (item: Company) => {
    this._companyService.delete(item.id)
    .subscribe((resp:any) => {
      this.start();
    });
  }


  ngOnDestroy(): void {
    this.intervalSubs?.unsubscribe();
  }


}
