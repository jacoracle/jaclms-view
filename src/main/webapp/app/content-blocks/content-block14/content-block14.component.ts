import { Component, OnInit, Input } from '@angular/core';
import { BloquesCurso } from 'app/shared/model/bloques-curso.model';

@Component({
  selector: 'jhi-content-block14',
  templateUrl: './content-block14.component.html',
  styleUrls: ['./content-block14.component.scss']
})
export class ContentBlock14Component implements OnInit {

  imgSrc = './../../../../content/images/cover_upload.png';
  @Input() contentBlock?: BloquesCurso;

  constructor() { }

  ngOnInit(): void {
  }

}
