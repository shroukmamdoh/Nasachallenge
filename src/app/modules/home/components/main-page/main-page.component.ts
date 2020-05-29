import { Component, OnInit } from '@angular/core';
import { NbSearchService } from '@nebular/theme';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  value = '';
  constructor(private searchService: NbSearchService) {
    this.searchService.onSearchSubmit()
    .subscribe((data: any) => {
      this.value = data.term;
    })
   }

  ngOnInit(): void {
  }

}
