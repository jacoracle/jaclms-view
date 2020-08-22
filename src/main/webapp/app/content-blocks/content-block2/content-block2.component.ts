import { Component, Input } from '@angular/core';
import { BloquesCurso } from 'app/shared/model/bloques-curso.model';

@Component({
  selector: 'jhi-content-block2',
  templateUrl: './content-block2.component.html',
  styleUrls: ['./content-block2.component.scss']
})
export class ContentBlock2Component {
  @Input() contentBlock?: BloquesCurso;

  constructor() {}

}
