import { Injectable } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { SafeUrl } from '@angular/platform-browser';
import { PdfModalComponent } from 'app/shared/pdf-modal/pdf-modal.component';

@Injectable({
  providedIn: 'root'
})
export class PDFModalService {

  private isOpen = false;

  constructor(private modalService: NgbModal) {}

  open(pdfSrc: SafeUrl): void {
    if (this.isOpen) {
      return;
    }
    this.isOpen = true;
    const modalRef: NgbModalRef = this.modalService.open(PdfModalComponent);
    modalRef.componentInstance.pdfSrc = pdfSrc;
    modalRef.result.finally(() => (this.isOpen = false));
  }
  
}
