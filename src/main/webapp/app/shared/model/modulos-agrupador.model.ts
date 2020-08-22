import { IModulo } from './modulo.model';

export interface IModulosAgrupador {
  id?: number;
  modulo?: IModulo
}

export class ModulosAgrupador implements IModulosAgrupador {
  constructor(
    public id?: number,
  ) {}
}
