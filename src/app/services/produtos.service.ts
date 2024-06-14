import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUsuario } from '../components/model/IUsuario.model';
import { EMPTY, Observable } from 'rxjs';
import {map,catchError} from 'rxjs/operators';
//import {map, catchError} from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';



@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  private URL: string = 'http://localhost:3000/produtos';

  constructor(private http: HttpClient,private toastr: ToastrService) { }

  buscarTodos(): Observable<IUsuario[]>
  {
    return this.http.get<IUsuario[]>(this.URL).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );

   }
   buscarPorId(id: number): Observable<IUsuario>
  {
    return this.http.get<IUsuario>(`${this.URL}/${id}`).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );

   }

   cadastrar(produto: IUsuario): Observable<IUsuario>
   {
    return this.http.post<IUsuario>(this.URL, produto).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );

   }
   atualizar(produto: IUsuario): Observable<IUsuario>
   {
    return this.http.put<IUsuario>(`${this.URL}/${produto.id}`,produto).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );

   }
   excluir(id: number): Observable<any>
   {
    return this.http.delete<any>(`${this.URL}/${id}`).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );

   }
   exibirErro(e: any): Observable<any> {
    this.exibirMensagem('Erro!!!', 'Não foi possivel realizar a operação', 'toast-error');
    return EMPTY;


   }
   exibirMensagem(titulo: string, mensagem: string, tipo: string): void {

       this.toastr.show(mensagem,titulo, {closeButton:true, progressBar: true},tipo);

   }

}
