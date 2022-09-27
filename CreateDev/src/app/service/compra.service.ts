import { HttpClient, HttpHeaderResponse } from '@angular/common/http';

import { Compra } from './../model/Compra';

import { Subject } from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompraService {
  url: string = "http://localhost:5000/Compra";

  private listaCAmbio = new Subject<Compra[]>();


  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Compra[]>(this.url);
  }


  insertar(compra: Compra) {
    return this.http.post(this.url, compra);
  }

  setLista(listaNueva: Compra[]) {
    this.listaCAmbio.next(listaNueva);
  }
  getLista() {
    return this.listaCAmbio.asObservable();
  }


  modificar(compra: Compra) {
    return this.http.put(this.url + "/" + compra.id, compra);
  }

  listarId(id: number) {
    return this.http.get<Compra>(`${this.url}/${id}`);
  }
}
