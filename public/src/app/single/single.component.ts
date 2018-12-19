import { Component, OnInit } from '@angular/core';

import { PetService } from '../pet.service';

import { ActivatedRoute, Params, Router } from '@angular/router';



@Component({

  selector: 'app-single',

  templateUrl: './single.component.html',

  styleUrls: ['./single.component.css']

})

export class SingleComponent implements OnInit {

  truck: any;
  
  newreview = {

    "likes" : 0,

  }

  constructor(private _ftservice: PetService, private _router: Router, private _route: ActivatedRoute) { }



  ngOnInit() {

    this._route.params.subscribe((params: Params)=>{

      this.getPet(params['id']);

    })

  }



  getPet(id){

    let observable = this._ftservice.getOne(id);

    observable.subscribe( data => {

      this.truck = data['pet']

    })

  }



  newLike(id){

    let observable = this._ftservice.addLike(id, this.newreview);

    observable.subscribe( data => {

      this.getPet(id);

      this.newreview = {

        "likes" : 0,

      }

    })

  }

  delete(id){

    let observable = this._ftservice.deleteOne(id);

    observable.subscribe( data => {

        this._router.navigate(['/']);

    })

  }


}
