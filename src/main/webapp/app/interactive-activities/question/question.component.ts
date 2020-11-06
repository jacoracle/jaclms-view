import { Component, OnInit, Input } from '@angular/core';
import { IActividadInterativa } from 'app/shared/model/actividad-interactiva.model';
import { mixArray } from './../../shared/utilities'

@Component({
  selector: 'jhi-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  contenido?: any;

  _activity?: IActividadInterativa;
  @Input()
  set activity(activity: IActividadInterativa | undefined) {
    this._activity = activity;
  }
  get activity(): IActividadInterativa | undefined{
    return this._activity;
  }
  calificada = false;
  activityScore = 0;
  pendingAnswers = true;

  constructor() { }

  ngOnInit(): void {
    this.mixOptions();
  }

  selectAnswer(pregunta: any, respuesta: any): void {
    if(respuesta.seleccionada === true) {
      respuesta.seleccionada = false;
      this.updateMarcada(pregunta);
      return;
    }
    if(pregunta.tipoPregunta !== 'multiple' && pregunta.tipoPregunta !== 'Respuesta múltiple') {
      for(let i = 0; i < pregunta.respuestas.length; i++) {
        pregunta.respuestas[i].seleccionada = false;
      }
    }
    respuesta.seleccionada = true;
    this.updateMarcada(pregunta);
  }

  updateMarcada(pregunta: any): void {
    let marcada = false;
    for(let i = 0; i < pregunta.respuestas.length; i++) {
      if(pregunta.respuestas[i].seleccionada === true) {
        marcada = true;
        break;
      }
    }
    pregunta.marcada = marcada;
    this.isPendingAnswer();
  }

  score(): void {
    let sum = 0;
    if(this.activity && !this.isPendingAnswer()) {
      for(let i = 0; i < this.activity.contenido.preguntas.length; i++) {
        sum += this.scoreQuestion(this.activity.contenido.preguntas[i]);
      }
      this.activityScore = parseFloat(((sum * 10) / (this.activity.contenido.preguntas.length * 10)).toFixed(1));
      this.calificada = true;
    }
  }

  scoreQuestion(question: any): number {
    let score = 10;
    for(let i = 0; i < question.respuestas.length; i++) {
      if(question.respuestas[i].seleccionada !== question.respuestas[i].correcta) {
        score = 0;
        break;
      }
    }
    return score;
  }

  isPendingAnswer(): boolean {
    this.pendingAnswers = false;
    if(this.activity) {
      for(let i = 0; i < this.activity.contenido.preguntas.length; i++) {
        if(this.activity.contenido.preguntas[i].marcada === false) {
          this.pendingAnswers = true;
          break;
        }
      }
    }
    return this.pendingAnswers;
  }

  mixOptions(): void {
    const preguntas = this.activity?.contenido.preguntas;
    for(let i = 0; i < preguntas.length; i++) {
      preguntas[i].respuestas = mixArray(preguntas[i].respuestas);
    }
  }

}
