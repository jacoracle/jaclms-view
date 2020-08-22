import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPais } from 'app/shared/model/pais.model';
import { HttpResponse, HttpClient } from '@angular/common/http';
import { createRequestOption } from 'app/shared/util/request-util';
import { SERVER_API_URL } from 'app/app.constants';
import { IAgrupador } from 'app/shared/model/agrupador.model';

type EntityResponseType = HttpResponse<IAgrupador>;
type EntityArrayResponseType = HttpResponse<IAgrupador[]>;

@Injectable({
  providedIn: 'root'
})
export class AgrupadorService {
  public resourceUrl = SERVER_API_URL + 'api/agrupador';

  constructor(protected http: HttpClient) {}

  query(req?: IAgrupador): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IAgrupador[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IAgrupador>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
