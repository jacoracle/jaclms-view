import { Component, Input, ViewEncapsulation } from '@angular/core';
import { IComponente } from 'app/shared/model/componente.model';

@Component({
  selector: 'jhi-visor-text',
  templateUrl: './visor-text.component.html',
  styleUrls: ['./visor-text.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class VisorTextComponent {
  exampleContent = "<p>Componente sin texto</p>";
  _component?: IComponente;
  @Input()
  set component(componente: IComponente | undefined) {
    this._component = componente;
  }
  get component(): IComponente | undefined {
    return this._component;
  }   

  constructor() {}

}
