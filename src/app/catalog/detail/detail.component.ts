import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CardInteractionService } from '../service/card-interaction.service';
import { Card } from '../interface/card.interface';
import { switchMap, map, tap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  card$: Observable<Card>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private cardService: CardInteractionService
  ) {}

  ngOnInit() {
    this.card$ = this.activatedRoute.params.pipe(
      map(params => params.id),
      switchMap(id => this.cardService.getCard(id)),
      tap(card => console.log(card)),
      catchError(reason => {
        console.log(reason);
        this.router.navigate(['..']);
        return of(
          null
        ); /*Dont send anything in console, of() return an Observable it takes in parameters
        used to avoid type problem in card$, it will compile but with and IDE error*/
      })
    );
  }
}
