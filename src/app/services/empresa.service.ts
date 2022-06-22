import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Empresa } from '../models/empresa';

@Injectable({ providedIn: 'root' })
export class EmpresaService {
  resourceUrl: string;
  constructor(private httpClient: HttpClient) { 
    this.resourceUrl = environment.ConexionWebApiProxy + 'empresas' + '/';
  }

  get() {
    return this.httpClient.get(this.resourceUrl);
  }

  getById(Id: number) {
    return this.httpClient.get(this.resourceUrl + Id);
  }

  post(obj: Empresa) {
    return this.httpClient.post(this.resourceUrl, obj);
  }

  put(obj: Empresa, Id: number) {
    console.log(this.resourceUrl + Id);
    return this.httpClient.put(this.resourceUrl + Id, obj);
  }

  delete(Id: number) {
    return this.httpClient.delete(this.resourceUrl + Id);
  }
}
