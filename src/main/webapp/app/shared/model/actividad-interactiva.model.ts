import { ITipoActividadInterativa } from './tipo-actividad-interactiva.model';

export interface IActividadInterativa {
    id?: number;
    intentos?: boolean;
    tipoActividadInteractiva?: ITipoActividadInterativa;
    evaluable?: boolean;
    contenido?: any;
  }
  
  export class ActividadInterativa implements IActividadInterativa {
    constructor(
        public id?: number,
        public intentos?: boolean,
        public tipoActividadInteractiva?: ITipoActividadInterativa,
        public evaluable?: boolean,
        public contenido?: any
    ) {}
  }