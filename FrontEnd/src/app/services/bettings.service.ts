import { Injectable } from '@angular/core';
import { Http ,Response ,Headers, RequestOptions } from '@angular/http';
import{ Observable }   from 'rxjs';
import {Actor} from '../models/actor'; 
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BettingsService {
  private url1:string='http://localhost:3000';
  private headers = new Headers ({'Content-Type' : 'application/json'});
  private options = new RequestOptions({headers:this.headers});      
  private actor:Actor;                                  // Data type Server
  constructor(private _http : Http ) { }
  
// http://localhost/3000/bets                            
getActors() {                                            // one
        return  this._http.get(this.url1+'/bets',this.options)
       .map((response:Response)=>response.json())
       .catch(this.errorPost);  } 
getActors1() {                                           // one ARRAY
       return  this._http.get(this.url1+'/bets-generate',this.options)
       .map((response:Response)=>response.json())
       .catch(this.errorPost);  }
getActors2() {                                           // one  OK.ONE?
       return  this._http.get(this.url1+'/pulling/start',this.options)
       .map((response:Response)=>response.json())
       .catch(this.errorPost);  }
getActors3() {                                           // one  OK.ONE?
       return  this._http.get(this.url1+'/pulling/stop',this.options)
      .map((response:Response)=>response.json())
       .catch(this.errorPost);  }

// http://localhost/3000/bets/:id                
setter(actor:Actor)       { this.actor=actor;  }              //  Three
getter()                { return this.actor;  }               //  Four
errorPost(error:Response) 
      {  return Observable.throw(error||"SERVER ERROR");  }    //  Two    
}
