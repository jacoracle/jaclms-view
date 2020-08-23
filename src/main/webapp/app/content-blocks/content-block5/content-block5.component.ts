import { Component, Input } from '@angular/core';
import { BloquesCurso } from 'app/shared/model/bloques-curso.model';

@Component({
  selector: 'jhi-content-block5',
  templateUrl: './content-block5.component.html',
  styleUrls: ['./content-block5.component.scss']
})
export class ContentBlock5Component {
  videoSrc = './../../../../content/images/cover_upload.png';
  @Input() contentBlock?: BloquesCurso;

  constructor() {}

}
