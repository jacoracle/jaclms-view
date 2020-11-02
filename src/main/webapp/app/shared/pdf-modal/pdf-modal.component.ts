import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SafeUrl } from '@angular/platform-browser';
import { MultimediaService } from 'app/services/multimedia.service';
import * as fileSaver from 'file-saver';

@Component({
  selector: 'jhi-pdf-modal',
  templateUrl: './pdf-modal.component.html',
  styleUrls: ['./pdf-modal.component.scss']
})
export class PdfModalComponent {

  pdfSrc?: SafeUrl;
  path?: string;
  typePdf = 'application/pdf';

  constructor(public activeModal: NgbActiveModal, private multimediaService: MultimediaService) {}

  download(): void {
    if(this.path)
    this.multimediaService.getPdfFile(this.path).subscribe(data => {
      this.saveToFileSystem(data);
    })
  }

  private saveToFileSystem(response: any): void {
    /*
    const contentDispositionHeader: string = response.headers.get('Content-Disposition');
    const parts: string[] = contentDispositionHeader.split(';');
    const filename = parts[1].split('=')[1];
    */
    const filename = "archivo";
    const blob = new Blob([response.body], { type: 'application/pdf' });
    fileSaver.saveAs(blob, filename);
  }

}
