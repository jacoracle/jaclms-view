import { Component, Input } from '@angular/core';
import { BloquesCurso } from 'app/shared/model/bloques-curso.model';

@Component({
  selector: 'jhi-content-block9',
  templateUrl: './content-block9.component.html',
  styleUrls: ['./content-block9.component.scss']
})
export class ContentBlock9Component {
  @Input() contentBlock?: BloquesCurso;

  constructor() {}

}
