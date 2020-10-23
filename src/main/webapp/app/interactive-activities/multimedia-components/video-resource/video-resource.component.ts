import { Component, Input, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { MultimediaService } from './../../../services/multimedia.service';
import { Subscription } from 'rxjs';
import { SafeUrl } from '@angular/platform-browser';
import { MultimediaPlayingService } from 'app/services/multimedia-playing.service';

@Component({
  selector: 'jhi-video-resource',
  templateUrl: './video-resource.component.html',
  styleUrls: ['./video-resource.component.scss']
})
export class VideoResourceComponent implements OnDestroy {

  _path?: string;
  @Input()
  set path(path: string | undefined) {
    this._path = path;
    if(this.path) {
      this.getThumbnail(path);
    }
  }
  get path(): string | undefined {
    return this._path;
  }
  defaultUrl = "./../../../content/images/logo_login.svg";
  thumbSrc?: SafeUrl;
  videoSrc?: SafeUrl;
  subscription?: Subscription;
  showLoader = false;
  loadedThumbnail = false;
  loadedVideo = false;
  @ViewChild('video') video?: ElementRef;
  active = false;
  playing = false;

  constructor(private multimediaService: MultimediaService, private multimediaPlayingService: MultimediaPlayingService) { 
    this.subscription = this.multimediaPlayingService.getActive().subscribe(active => {
      this.active = active;
    });
    this.subscription = this.multimediaPlayingService.getPlaying().subscribe(playing => {
      if(!this.active) {
        this.playing = playing;
        this.pauseVideo();
      }
    });
  }

  getThumbnail(path: string | undefined): void {
    if(!path || path === '') {
      return;
    }
    this.showLoader = true;
    this.subscription = this.multimediaService.getVideoThumbnailFile(path).subscribe(data => {
      this.showLoader = true;
      if(data.body) {
        this.thumbSrc = this.multimediaService.getSafeUrl(data.body);
        this.loadedThumbnail = true;
        this.showLoader = false;
      }
    });
  }

  loadVideo(): void {
    if(this.path) {
      this.showLoader = true;
      this.subscription = this.multimediaService.getVideoFile(this.path).subscribe(data => {
        if(data.body) {
          this.videoSrc = this.multimediaService.getSafeUrl(data.body);
          this.loadedVideo = true;
          this.showLoader = false;
        }
      })
    }
  }

  ngOnDestroy(): void {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  public toggleVideo(): void {
    this.multimediaPlayingService.setActive(false);
    this.active= true;
    this.multimediaPlayingService.setPlaying(false);
  }

  private pauseVideo(): void {
    if(this.video) {
      this.video.nativeElement.pause();
    }
  }

}
