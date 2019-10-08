import { Injectable, AfterViewInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { throwError, BehaviorSubject } from 'rxjs';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AppFilterService {
  baseUrl = environment.APLICACIONES_SERVICE;
  private dataFilterSubject = new BehaviorSubject([]);
  public eventFilter$ = this.dataFilterSubject.asObservable();
  httpOptions: { headers: HttpHeaders; };

  constructor(private http: HttpClient) {
    // tslint:disable-next-line: variable-name
    const acces_token = window.localStorage.getItem('access_token');

    if (acces_token) {
      // Clone the request and replace the original headers with
      // cloned headers, updated with the authorization.
        const authToken = 'Bearer ' + acces_token;

        this.httpOptions = {
        headers: new HttpHeaders({
          'Authorization': authToken,
        })
      };
    }
  }

  existe(nombre: string, array: any) {
    const filtro = array.filter((data: any) => (nombre.toLowerCase() === data.Nombre.toLowerCase()));
    return filtro.length > 0;
  }

  // tslint:disable-next-line: contextual-lifecycle
  public getAplication(): any {
    const roles = this.getRole();
    this.http.post(this.baseUrl, roles, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl),
    ).subscribe((data: any) => {
      let nuevasAplicaciones = environment.categorias.map((categoria: any) => {
        categoria.aplicaciones = categoria.aplicaciones.filter((aplicacion: any) => (this.existe(aplicacion.nombre, data)));
        return categoria;
      });
      nuevasAplicaciones = nuevasAplicaciones.filter((categoria) => (categoria.aplicaciones.length > 0));
      this.dataFilterSubject.next(nuevasAplicaciones);
    });
    return this.eventFilter$;
  }


  getRole() {
    const data = [];
    if (window.localStorage.getItem( 'id_token') !== null) {
        // tslint:disable-next-line: variable-name
        const  id_token = window.localStorage.getItem( 'id_token').split( '.');
        const  payload = JSON.parse(atob(id_token[1]));
        return payload.role.map((element) => ({Nombre: element}));
    }
  }

  public getAllAplications() {
    this.dataFilterSubject.next(environment.categorias);
  }

  errorHandl(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {

      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }


}
