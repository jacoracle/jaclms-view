import { IModulo } from './modulo.model';

export interface IModulosAgrupador {
  id?: number;
  modulo?: IModulo;
  orden?: number;
}

export class ModulosAgrupador implements IModulosAgrupador {
  constructor(
    public id?: number,
    public modulo?: IModulo,
    public orden?: number
  ) {}
}
