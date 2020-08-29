import { TipoNivelJerarquico } from './enumerations/tipo-nivel-jerarquico.model';
import { IBloqueComponentes } from './bloque-componentes.model';
import { IBloquesCurso } from './bloques-curso.model';
import { NivelJerarquico } from './nivel-jerarquico.model';

export interface INivelesCurso {
  id?: number;
  nivelJerarquico?: NivelJerarquico;
}

export class NivelesCurso implements INivelesCurso {
  public id?: number;
  public nivelJerarquico?: NivelJerarquico;
}
