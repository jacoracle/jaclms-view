import { Injectable } from '@angular/core';
import { SERVER_API_URL } from 'app/app.constants';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {
  constructor(private http: HttpClient, private domSanitizer: DomSanitizer) {}

  /*
   * Obtiene imagen del servidor.
   * @param filePath  Dirección donde está almacenada la imagen.
   * @returns         Imagen en formato blob.
   */
  getImageFile(filePath: string): Observable<HttpResponse<Blob>> {
    return this.http.get(SERVER_API_URL + 'api/loadImage?file=' + filePath, {
      observe: 'response',
      responseType: 'blob'
    });
  }

}
