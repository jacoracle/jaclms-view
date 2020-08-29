import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AudioPlayingService {

  private active = new Subject<boolean>();
  private playing = new Subject<boolean>();

  constructor() {}

  setActive(active: boolean): void {
    this.active.next(active);
  }

  getActive(): Observable<boolean> {
    return this.active.asObservable();
  }

  setPlaying(playing: boolean): void {
    this.playing.next(playing);
  }

  getPlaying(): Observable<boolean> {
    return this.playing.asObservable();
  }
}
