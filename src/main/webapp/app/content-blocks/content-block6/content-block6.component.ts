import { Component, Input, EventEmitter, Output, AfterContentInit } from '@angular/core';
import { BloquesCurso } from 'app/shared/model/bloques-curso.model';
import { IComponente } from 'app/shared/model/componente.model';
import { ITargetScroll, TargetScroll } from 'app/shared/model/target-scroll.model';

@Component({
  selector: 'jhi-content-block6',
  templateUrl: './content-block6.component.html',
  styleUrls: ['./content-block6.component.scss']
})
export class ContentBlock6Component implements AfterContentInit {
  imgSrc = './../../../../content/images/cover_upload.png';
  @Input() contentBlock?: BloquesCurso;
  @Output() updateBlock = new EventEmitter();
  @Input() target?: HTMLElement;
  @Input() index?: number;
  newTarget: ITargetScroll[] = [];

  constructor() {}

  // Actualizar valor de componente y del bloque de contenido en visorContainer
  onUpdateComponent($event: Event, index: number): void {
    this.updateBlock.emit({
      newValue: $event['newValue'],
      type: $event['type'],
      componentIndex: index
    });
  }

  orderTextVideo(components: IComponente[]): IComponente[] {
    let temp: IComponente[] = [];
    if (components.length > 1) {
      if (components[0].tipoComponente!.nombre === 'video') {
        temp.push(components[1]);
        temp.push(components[0]);
      } else {
        temp = components;
      }
    }
    return temp;
  }

  ngAfterContentInit(): void {
    /*
    this.contentBlocksService.getTarget().subscribe(res => {
      this.newTarget = res;
      this.setTarget();
    });
    */
  }

  setTarget(): void {
    if (this.newTarget !== undefined && this.index !== undefined && this.target != null) {
      const targetScroll = new TargetScroll(this.index, this.target);
      this.newTarget.push(targetScroll);
      // this.contentBlocksService.setTarget(this.newTarget);
    }
  }
}
