import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsercalService {

  constructor() { }
  getNumbers(){
    return [0,1,2,3,4,5,6,7,8,9,10,]
  }
}
