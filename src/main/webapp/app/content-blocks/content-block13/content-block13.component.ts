import { Component, OnInit, Input } from '@angular/core';
import { BloquesCurso } from 'app/shared/model/bloques-curso.model';

@Component({
  selector: 'jhi-content-block13',
  templateUrl: './content-block13.component.html',
  styleUrls: ['./content-block13.component.scss']
})
export class ContentBlock13Component implements OnInit {

  imgSrc = './../../../../content/images/cover_upload.png';
  @Input() contentBlock?: BloquesCurso;

  constructor() { }

  ngOnInit(): void {
  }

}
