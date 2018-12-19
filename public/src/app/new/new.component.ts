import { Component, OnInit } from '@angular/core';

import {PetService } from '../pet.service';

import { Router } from '@angular/router';



@Component({

  selector: 'app-new',

  templateUrl: './new.component.html',

  styleUrls: ['./new.component.css']

})

export class NewComponent implements OnInit {

  pet = {

    "name": '',

    "type": '',

    'description': ''

  }

  errors = {};

  constructor(private _ftService: PetService, private _router: Router) { }



  ngOnInit() {

  }

  create(){

    let observable = this._ftService.createPet(this.pet);

    observable.subscribe(data => {

      console.log(data);

      if (data['status']== 'not ok'){

        this.errors = data['errors']['errors'];

      }else{

        this._router.navigate(['/']);

      }

    });

  }



}