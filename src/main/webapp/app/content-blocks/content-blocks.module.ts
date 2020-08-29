import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentBlock1Component } from './content-block1/content-block1.component';
import { ContentBlock2Component } from './content-block2/content-block2.component';
import { ContentBlock3Component } from './content-block3/content-block3.component';
import { ContentBlock4Component } from './content-block4/content-block4.component';
import { ContentBlock5Component } from './content-block5/content-block5.component';
import { ContentBlock6Component } from './content-block6/content-block6.component';
import { ContentBlock7Component } from './content-block7/content-block7.component';
import { ContentBlock8Component } from './content-block8/content-block8.component';
import { ContentBlock9Component } from './content-block9/content-block9.component';
import { ComponentsModule } from 'app/components/components.module';

@NgModule({
  declarations: [
    ContentBlock1Component,
    ContentBlock2Component,
    ContentBlock3Component,
    ContentBlock4Component,
    ContentBlock5Component,
    ContentBlock6Component,
    ContentBlock7Component,
    ContentBlock8Component,
    ContentBlock9Component
  ],
  imports: [
    CommonModule, ComponentsModule
  ],
  exports: [
    ContentBlock1Component,
    ContentBlock2Component,
    ContentBlock3Component,
    ContentBlock4Component,
    ContentBlock5Component,
    ContentBlock6Component,
    ContentBlock7Component,
    ContentBlock8Component,
    ContentBlock9Component
  ]
})
export class ContentBlocksModule { }
