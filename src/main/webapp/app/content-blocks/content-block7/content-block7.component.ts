import { Component, Input, ViewEncapsulation } from '@angular/core';
import { BloquesCurso } from 'app/shared/model/bloques-curso.model';

@Component({
  selector: 'jhi-content-block7',
  templateUrl: './content-block7.component.html',
  styleUrls: ['./content-block7.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContentBlock7Component {
  @Input() contentBlock?: BloquesCurso;

  constructor() {}

}
