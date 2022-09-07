import {Observable} from 'rxjs'

export interface Icrud<T> {
  get(id:string):Observable<T>;
  list():Observable<T[]>;
  createOrUpdate(item:T):Promise<T>|undefined;
  delete(id:string):Promise<void>;
}
