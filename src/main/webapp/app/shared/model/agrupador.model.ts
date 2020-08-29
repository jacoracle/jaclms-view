import { Moment } from 'moment';
import { IModulosAgrupador } from './modulos-agrupador.model';

export interface IAgrupador {
    id?: number;
    titulo?: string;
    descripcion?: string;
    fecha_inicio?: Moment;
    fecha_fin?: Moment;
    modulos?: IModulosAgrupador[];
}

export class Agrupador implements IAgrupador {
  constructor(
    public id?: number,
    public titulo?: string,
    public descripcion?: string,
    public fecha_inicio?: Moment,
    public fecha_fin?: Moment,
    public modulos?: IModulosAgrupador[]
  ) {}
}
