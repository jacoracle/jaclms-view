import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'jhi-pdf-modal',
  templateUrl: './pdf-modal.component.html',
  styleUrls: ['./pdf-modal.component.scss']
})
export class PdfModalComponent {

  pdfSrc?: SafeUrl;
  typePdf = 'application/pdf';

  constructor(public activeModal: NgbActiveModal) {}

}
