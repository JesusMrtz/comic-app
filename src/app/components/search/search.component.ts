import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
  heroes: any[] = [];
  termino = '' ;

  constructor(private _activatedRoute: ActivatedRoute,
    private _heroeService: HeroesService) {
      _activatedRoute.params.subscribe(params => {
        this.termino = params.name;
        this.heroes = _heroeService.buscarHeroe(this.termino);
      });
     }

  ngOnInit() {
  }

}
