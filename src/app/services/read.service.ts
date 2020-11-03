import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ReadService {

  private comicsBaseUri : string = "https://kitsu.io/api/edge";
  private booksBaseUri : string = "";
  private documentsBaseUri : string = "";

  constructor() { }

  getToken(){
    // return axios.get(`https://kitsu.io/api/oauth/token`, {
    //   grant_type: 'password',
    //   username: '<email|slug>',
    //   password: '<password>' // RFC3986 URl encoded string
    // })
    // .then(() => {});
  }

  getComics(){
    return axios.get(`${this.comicsBaseUri}/manga`)
    .then(res => {
      const dados = res.data.data;
      const teste = {
        
      }
      return dados;
    });
  }

  getBooks(){

  }

  getDocuments(){
    
  }
}
