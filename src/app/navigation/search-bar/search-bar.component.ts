import { Component, OnInit } from '@angular/core';
import { SearchCardService } from 'src/app/catalog/service/search-card.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  query = 'default';
  myForm: string;

  constructor(private searchService: SearchCardService) {}

  ngOnInit() {}

  submit(myForm) {
    console.log(myForm);
    if (myForm.valid) {
      this.searchService.searchForm$.next(this.query);
    }
  }
}
