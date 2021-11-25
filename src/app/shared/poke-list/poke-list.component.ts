import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  public getAllPokemons: any;
  private setAllPokemons: any;

  constructor(
    private PokeApiService: PokeApiService
  ) { }

  ngOnInit(): void {
    this.PokeApiService.apiListAllPokemons.subscribe(
      res=>{
        
        this.setAllPokemons =  res.results
        this.getAllPokemons = this.setAllPokemons
        
      }
    );
  }


  public getsearch(value: string) {
    const filter = this.setAllPokemons.filter((res: any)=>{
      return !res.name.indexOf(value.toLocaleLowerCase());
    })

    this.getAllPokemons =  filter;
    
  }

}
