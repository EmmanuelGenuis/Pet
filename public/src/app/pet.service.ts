import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(private _http: HttpClient) {
   }

  getPets(){
    return this._http.get('/pets') ;
  }
  createPet(pet){
    return this._http.post('/pet', pet) ;
  }
  getOne(id){

    return this._http.get(`/pet/${id}`);

  }



  addLike(id, review){

    return this._http.post(`/pet/${id}/like`, review);

  }



  updateOne(id, pet){

    return this._http.put(`/pet/${id}`, pet);

  }



  deleteOne(id){

    return this._http.delete(`/pet/${id}`);

  }


}
