import { Component, OnInit } from '@angular/core';
import {Actor}  from '../models/actor';
import {Router}  from '@angular/router';
import {BettingsService}  from '../services/bettings.service';

@Component({
  selector: 'app-actingselect',
  templateUrl: './actingselect.component.html',
  styleUrls: ['./actingselect.component.css']
})
export class ActingselectComponent implements OnInit {
  private actor:Actor;
  constructor(private _bService: BettingsService, private _routb:Router) { }
  ngOnInit() 
  {   this.actor=this._bService.getter(); 
    console.log(this.actor);                    // Assigned selected bet
   }
  processForm()
  { this._bService.getActors()                  // All current bets
    .subscribe((actor)=>{console.log(actor);
    this._routb.navigate(['/']);},
    (error)=>{ console.log(error); });
  }

}
