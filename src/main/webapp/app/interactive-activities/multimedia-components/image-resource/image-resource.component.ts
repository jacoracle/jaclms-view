import { Component, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MultimediaService } from 'app/services/multimedia.service';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'jhi-image-resource',
  templateUrl: './image-resource.component.html',
  styleUrls: ['./image-resource.component.scss']
})
export class ImageResourceComponent implements OnDestroy {

  _path?: string;
  @Input()
  set path(path: string | undefined) {
    this._path = path;
    if(this.path) {
      this.getImage(path);
    }
  }
  get path(): string | undefined {
    return this._path;
  }
  defaultUrl = "./../../../content/images/logo_login.svg";
  imageSrc?: SafeUrl;
  subscription?: Subscription;
  showLoader = false;
  loadedImage = false;

  constructor(private multimediaService: MultimediaService) { }

  getImage(path: string | undefined): void {
    if(!path || path === '') {
      return;
    }
    this.showLoader = true;
    this.subscription = this.multimediaService.getImageFile(path).subscribe(data => {
      this.showLoader = true;
      if(data.body) {
        this.imageSrc = this.multimediaService.getSafeUrl(data.body);
        this.loadedImage = true;
        this.showLoader = false;
      }
    });
  }

  ngOnDestroy(): void {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
