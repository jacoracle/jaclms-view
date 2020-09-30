import { Component, Input } from '@angular/core';
import { IBloquesCurso } from 'app/shared/model/bloques-curso.model';

@Component({
  selector: 'jhi-content-block10',
  templateUrl: './content-block10.component.html',
  styleUrls: ['./content-block10.component.scss']
})
export class ContentBlock10Component {

  _contentBlock?: IBloquesCurso;
  @Input()
  set contentBlock(contentBlock: IBloquesCurso | undefined) {
    this._contentBlock = contentBlock;
  }
  get contentBlock(): IBloquesCurso | undefined{
    return this._contentBlock;
  }

  constructor() { }

}
