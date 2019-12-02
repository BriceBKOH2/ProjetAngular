import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, BehaviorSubject, merge } from 'rxjs';
import { Card } from '../interface/card.interface';
import { CardInteractionService } from '../service/card-interaction.service';
import { switchMap, tap } from 'rxjs/operators';
import { SearchCardService } from '../service/search-card.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  query = 'default';
  myForm: string;
  info$: Observable<{ classes: string[]; sets: string[] }>;
  filterForm$: BehaviorSubject<{ set: string; classe: string }>;

  cards$: Observable<Card[]>;

  filterForm = new FormGroup({
    set: new FormControl('Basic', [
      Validators.required,
      Validators.minLength(3)
    ]),
    classe: new FormControl('Druid', [
      Validators.required,
      Validators.minLength(3)
    ])
  });

  constructor(
    private cardService: CardInteractionService,
    private searchService: SearchCardService
  ) {}

  ngOnInit() {
    this.filterForm$ = new BehaviorSubject({
      set: this.filterForm.get('set').value,
      classe: this.filterForm.get('classe').value
    });
    this.cards$ = merge(
      this.searchService.searchForm$.pipe(
        tap(t => console.log(t)),
        switchMap(query => {
          return this.cardService.search(query);
        })
      ),
      this.filterForm$.pipe(
        switchMap(query => {
          return this.cardService.getCards(query.set, query.classe);
        })
      )
    );
    this.info$ = this.cardService.info();
  }

  submit(myForm) {
    console.log(myForm);
    if (myForm.valid) {
      this.searchService.searchForm$.next(this.query);
    }
  }

  filter() {
    if (this.filterForm.valid) {
      this.filterForm$.next(this.filterForm.getRawValue());
    }
  }
}
