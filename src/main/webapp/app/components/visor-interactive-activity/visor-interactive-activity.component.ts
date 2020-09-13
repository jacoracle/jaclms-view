import { Component, Input } from '@angular/core';
import { IComponente } from 'app/shared/model/componente.model';

@Component({
  selector: 'jhi-visor-interactive-activity',
  templateUrl: './visor-interactive-activity.component.html',
  styleUrls: ['./visor-interactive-activity.component.scss']
})
export class VisorInteractiveActivityComponent {

  _component?: IComponente;
  @Input()
  set component(component: IComponente | undefined) {
    this._component = component;
  }
  get component(): IComponente | undefined{
    return this._component;
  }  

  constructor() { }

}
