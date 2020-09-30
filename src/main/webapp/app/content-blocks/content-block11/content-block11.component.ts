import { Component, OnInit, Input } from '@angular/core';
import { BloquesCurso } from 'app/shared/model/bloques-curso.model';

@Component({
  selector: 'jhi-content-block11',
  templateUrl: './content-block11.component.html',
  styleUrls: ['./content-block11.component.scss']
})
export class ContentBlock11Component implements OnInit {

  imgSrc = './../../../../content/images/cover_upload.png';
  @Input() contentBlock?: BloquesCurso;

  constructor() { }

  ngOnInit(): void {
  }

}
