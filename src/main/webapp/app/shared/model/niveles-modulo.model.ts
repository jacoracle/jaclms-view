import { TipoNivelJerarquico } from './enumerations/tipo-nivel-jerarquico.model';
import { IBloqueComponentes } from './bloque-componentes.model';
import { IBloquesCurso } from './bloques-curso.model';
import { NivelJerarquico } from './nivel-jerarquico.model';

export interface INivelesModulo {
  id?: number;
  nivelJerarquico?: NivelJerarquico;
  orden?: number;
}

export class NivelesModulo implements INivelesModulo {
  public id?: number;
  public nivelJerarquico?: NivelJerarquico;
  public orden?: number;
}
