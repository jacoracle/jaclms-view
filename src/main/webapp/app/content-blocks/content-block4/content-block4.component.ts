import { Component, Input, AfterContentInit } from '@angular/core';
import { IComponente } from 'app/shared/model/componente.model';
import { BloquesCurso } from 'app/shared/model/bloques-curso.model';

@Component({
  selector: 'jhi-content-block4',
  templateUrl: './content-block4.component.html',
  styleUrls: ['./content-block4.component.scss']
})
export class ContentBlock4Component {
  imgSrc = './../../../../content/images/cover_upload.png';
  @Input() contentBlock?: BloquesCurso;

  constructor() {}

}
