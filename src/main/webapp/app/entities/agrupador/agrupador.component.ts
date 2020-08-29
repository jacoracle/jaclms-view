import { Component, OnInit } from '@angular/core';
import { AgrupadorService } from './agrupador.service';
import { IAgrupador } from 'app/shared/model/agrupador.model';

@Component({
  selector: 'jhi-agrupador',
  templateUrl: './agrupador.component.html',
  styleUrls: ['./agrupador.component.scss']
})
export class AgrupadorComponent implements OnInit {

  agrupadores: IAgrupador[] = [];
  agrupador?: IAgrupador;

  constructor(private agrupadorService: AgrupadorService) {
    
    this.agrupadorService.query().subscribe(data => {
      if(data.body) {
        this.agrupadores = data.body;
      }
    });

  }

  selectGrouping(agrupador: IAgrupador): void {
    if(agrupador.id) {
      this.agrupadorService.find(agrupador.id).subscribe(data => {
        if(data.body) {
          this.agrupador = data.body;
        }
      });
    }
  }

  ngOnInit(): void {
  }

}
