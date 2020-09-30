import { Component, OnInit, Input } from '@angular/core';
import { IModulo } from 'app/shared/model/modulo.model';

@Component({
  selector: 'jhi-modulo',
  templateUrl: './modulo.component.html',
  styleUrls: ['./modulo.component.scss']
})
export class ModuloComponent implements OnInit {

  _modulo?: IModulo;
  @Input()
  set modulo(modulo: IModulo | undefined) {
    this._modulo = modulo;
  }
  get modulo(): IModulo | undefined{
    return this._modulo;
  }

  constructor() { }

  ngOnInit(): void {
    let numerador = 0;
    const bloques = this._modulo?.nivelesModulo?.nivelJerarquico?.bloquesCurso;
    if(bloques) {
      for(let i = 0; i < bloques.length; i++) {
        if(bloques[i].bloqueComponentes?.tipoBloqueComponentes?.nombre === 'numeracion_actividad') {
          numerador++;
          bloques[i].numeracion = numerador;
        }
        
      }
    }

  }

}
