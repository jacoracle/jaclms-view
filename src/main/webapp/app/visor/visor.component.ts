import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CursoService } from 'app/entities/curso/curso.service';
import { ICurso } from 'app/shared/model/curso.model';

@Component({
  selector: 'jhi-visor',
  templateUrl: './visor.component.html',
  styleUrls: ['./visor.component.scss']
})
export class VisorComponent implements OnInit {

  curso?: ICurso;

  constructor(private route: ActivatedRoute, private cursoService: CursoService) {
    const id = this.route.snapshot.paramMap.get('id') as any;
    if(id) {
      this.cursoService.find(id).subscribe(response => {
        if(response.body) {
          this.curso = response.body;
        }
      });
    }
   }

  ngOnInit(): void {
  }

}
