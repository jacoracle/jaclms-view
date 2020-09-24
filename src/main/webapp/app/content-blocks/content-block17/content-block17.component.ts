import { Component, OnInit, Input } from '@angular/core';
import { BloquesCurso } from 'app/shared/model/bloques-curso.model';

@Component({
  selector: 'jhi-content-block17',
  templateUrl: './content-block17.component.html',
  styleUrls: ['./content-block17.component.scss']
})
export class ContentBlock17Component implements OnInit {

  imgSrc = './../../../../content/images/cover_upload.png';
  @Input() contentBlock?: BloquesCurso;

  constructor() { }

  ngOnInit(): void {
  }

}
