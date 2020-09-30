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
        }
      });
    }
   }

  ngOnInit(): void {
  }

  return(): void {
    this.router.navigate(['/groupings']);
  }
  

}
