import { Component, OnInit } from '@angular/core';
import {Actor}  from '../models/actor';
import {Router}  from '@angular/router';
import {BettingsService}  from '../services/bettings.service';

@Component({
  selector: 'app-actingchoices',
  templateUrl: './actingchoices.component.html',
  styleUrls: ['./actingchoices.component.css']
})
export class ActingchoicesComponent implements OnInit {
  private actors:Actor[];
  constructor(private bService:BettingsService, private _router:Router) { }

ngOnInit() 
{   this.bService.getActors().subscribe( 
      (actors)=>{ console.log(actors);   this.actors=actors;}
      ,(error)=>{ console.log(error);  })  
      console.log("Original List")
  }
// chosen bet
selectedGame(actor)
{  
  this.bService.setter(actor);  console.log("selectedBet");
  this._router.navigate(['/select']);   
}

selectAll1()
{  
  this.bService.getActors1()
  .subscribe( (error)=>{ console.log(error);   })
  this.ngOnInit() 
  console.log("Generated-Bet")
}
selectAll2()
{  
  this.bService.getActors2()
  .subscribe( (error)=>{ console.log(error);  })  
  console.log("Start-Polling") 
}
selectAll3()
{  
  this.bService.getActors3()
  .subscribe((error)=>{ console.log(error);  })  
  console.log("Start-Polling") 
}

processForm2()
{ this.bService.getActors()                   // All current games
  .subscribe((actor)=>{console.log(actor);
  this._router.navigate(['/']);},
  (error)=>{ console.log(error); });  console.log("Another-bet") 
}

}
