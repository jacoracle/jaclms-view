export interface ITipoActividadInterativa {
    opcion?: String;
    subtipo?: String;
    tipoActividad?: String;
  }
  
  export class TipoActividadInterativa implements ITipoActividadInterativa {
    constructor(
        public opcion?: String,
        public subtipo?: String,
        public tipoActividad?: String
    ) {}
  }