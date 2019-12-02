import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Card } from '../interface/card.interface';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CardInteractionService {
  getCard(id: string): Observable<Card> {
    return this.httpClient
      .get(`${this.endPoint}cards/${id}`, this.httpOptions)
      .pipe(map((cards: Card) => cards[0]));
  }
  constructor(private httpClient: HttpClient) {}

  getCards(setName: string, className: string): Observable<Card[]> {
    return forkJoin([this.set(setName), this.playerClass(className)]).pipe(
      map(([setCards, playerclassCards]) => {
        return this.intersectionCards(setCards, playerclassCards);
      })
    );
  }

  get endPoint() {
    return 'https://omgvamp-hearthstone-v1.p.rapidapi.com/';
  }

  get httpOptions() {
    let headers = new HttpHeaders();
    headers = headers.append(
      'x-rapidapi-host',
      'omgvamp-hearthstone-v1.p.rapidapi.com'
    );
    headers = headers.append(
      'x-rapidapi-key',
      'd99e92cde6mshffcf37544a876bep14eb15jsn1c1928e0dec3'
    );
    return {
      headers
    };
  }

  search(name): Observable<Card[]> {
    return this.httpClient
      .get(`${this.endPoint}cards/search/${name}`, this.httpOptions)
      .pipe(map((cards: Card[]) => cards));
  }

  info(): Observable<{ classes: string[]; sets: string[] }> {
    return this.httpClient
      .get(`${this.endPoint}info`, this.httpOptions)
      .pipe(map((cards: { classes: string[]; sets: string[] }) => cards));
  }

  private set(name: string): Observable<Card[]> {
    return this.httpClient
      .get(`${this.endPoint}cards/sets/${name}`, this.httpOptions)
      .pipe(map((cards: Card[]) => cards));
  }

  private playerClass(name: string): Observable<Card[]> {
    return this.httpClient
      .get(`${this.endPoint}cards/classes/${name}`, this.httpOptions)
      .pipe(map((cards: Card[]) => cards));
  }

  private intersectionCards(arrayCard1, arrayCard2) {
    return arrayCard1.filter(card1 => {
      return arrayCard2.find(card2 => {
        return card2.cardId === card1.cardId;
      });
    });
  }
}
