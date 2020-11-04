import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AgrupadorService } from 'app/entities/agrupador/agrupador.service';
import { IAgrupador } from 'app/shared/model/agrupador.model';

@Component({
  selector: 'jhi-visor',
  templateUrl: './visor.component.html',
  styleUrls: ['./visor.component.scss']
})
export class VisorComponent implements OnInit {

  agrupador?: IAgrupador;

  constructor(private route: ActivatedRoute, private agrupadorService: AgrupadorService, private router: Router) {
    const id = this.route.snapshot.paramMap.get('id') as any;
    if(id) {
      this.agrupadorService.find(id).subscribe(data => {
        if(data.body) {
          this.agrupador = data.body;
          this.calculateNumeration();
        }
      });
    }
   }

  ngOnInit(): void {
  }

  return(): void {
    this.router.navigate(['/groupings']);
  }

  calculateNumeration(): void {
    let numerador = 0;
    if(this.agrupador && this.agrupador.modulos) {
      const umas = this.agrupador.modulos;
      for(let j = 0; j < umas.length; j++) {
        const uma = umas[j];
        if(uma.modulo && uma.modulo.nivelesModulo && uma.modulo.nivelesModulo.nivelModulo && uma.modulo.nivelesModulo.nivelModulo.bloquesCurso) {
          const bloques = uma.modulo.nivelesModulo.nivelModulo.bloquesCurso
          for(let i = 0; i < bloques.length; i++) {
            if(bloques[i].bloqueComponentes?.tipoBloqueComponentes?.nombre === 'numeracion_actividad') {
              numerador++;
              bloques[i].numeracion = numerador;
            }
          }
        }
      }
    }
  }
  

}
