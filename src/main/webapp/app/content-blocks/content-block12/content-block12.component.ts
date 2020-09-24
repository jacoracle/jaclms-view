import { Component, OnInit, Input } from '@angular/core';
import { BloquesCurso } from 'app/shared/model/bloques-curso.model';

@Component({
  selector: 'jhi-content-block12',
  templateUrl: './content-block12.component.html',
  styleUrls: ['./content-block12.component.scss']
})
export class ContentBlock12Component implements OnInit {

  imgSrc = './../../../../content/images/cover_upload.png';
  @Input() contentBlock?: BloquesCurso;

  constructor() { }

  ngOnInit(): void {
  }

}
