import { Injectable } from '@angular/core';
import { SERVER_API_URL } from 'app/app.constants';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
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

  /*
   * Obtiene thumbnail (imagen) de video del servidor.
   * @param filePath  Dirección donde está almacenado el video.
   * @returns         Imagen en formato blob.
   */
  getVideoThumbnailFile(filePath: string): Observable<HttpResponse<Blob>> {
    return this.http.get(SERVER_API_URL + 'api/videoFrame?file=' + filePath, {
      observe: 'response',
      responseType: 'blob'
    });
  }

  getPdfPreviewFile(filePath: string): Observable<HttpResponse<Blob>> {
    return this.http.get(SERVER_API_URL + 'api/loadDocs?file=' + filePath, {
      observe: 'response',
      responseType: 'blob'
    });
  }

  /*
   * Obtiene video del servidor.
   * @param filePath  Dirección donde está almacenado el video.
   * @returns         Video en formato blob.
   */
  getVideoFile(filePath: string): Observable<HttpResponse<Blob>> {
    return this.http.get(SERVER_API_URL + 'api/loadVideo?file=' + filePath, {
      observe: 'response',
      responseType: 'blob'
    });
  }
  
  /*
   * Solicita thumbnail de video (imagen) del servidor, crea un objectUrl con ella y asigna el src a videoervice.
   * @param filePath  Dirección donde está almacenada la imagen.
   */
  public getVideo(path: string): SafeUrl {
    let objectUrl: SafeUrl = "";
    this.getVideoFile(path).subscribe(data => {
      const videoPath = URL.createObjectURL(data.body);
      objectUrl = this.domSanitizer.bypassSecurityTrustUrl(videoPath);
    });
    return objectUrl;
  }

  /*
   * Solicita thumbnail de video (imagen) del servidor, crea un objectUrl con ella y asigna el src a videoervice.
   * @param filePath  Dirección donde está almacenada la imagen.
   */
  public getVideoThumbnail(path: string): SafeUrl {
    let objectUrl: SafeUrl = "";
    this.getVideoThumbnailFile(path).subscribe(data => {
      const videoPath = URL.createObjectURL(data.body);
      objectUrl = this.domSanitizer.bypassSecurityTrustUrl(videoPath);
    });
    return objectUrl;
  }

  getSafeUrl(file: Blob): SafeUrl {
    const path = URL.createObjectURL(file);
    return this.domSanitizer.bypassSecurityTrustUrl(path);
  }

}
