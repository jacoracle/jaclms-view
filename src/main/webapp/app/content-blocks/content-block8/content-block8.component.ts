import { Component, Input } from '@angular/core';
import { BloquesCurso } from 'app/shared/model/bloques-curso.model';

@Component({
  selector: 'jhi-content-block8',
  templateUrl: './content-block8.component.html',
  styleUrls: ['./content-block8.component.scss']
})
export class ContentBlock8Component {
  @Input() contentBlock?: BloquesCurso;

  constructor() {}

}
