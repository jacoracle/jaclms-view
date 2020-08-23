import { Component, Input } from '@angular/core';
import { BloquesCurso } from 'app/shared/model/bloques-curso.model';

@Component({
  selector: 'jhi-content-block6',
  templateUrl: './content-block6.component.html',
  styleUrls: ['./content-block6.component.scss']
})
export class ContentBlock6Component {
  @Input() contentBlock?: BloquesCurso;

  constructor() {}

}
