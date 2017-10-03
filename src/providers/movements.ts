import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Movements provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Movements {

	globalLink: string = 'http://192.168.0.107:3000';

  constructor(public http: Http) {
    console.log('Hello Movements Provider');
  }

  getGlobalLink(): string{
    return this.globalLink;
  }

  setGlobalLink(link: string): void{
    this.globalLink = link;
  }

  public turnBase(position){
  	return new Promise<any>((resolve, reject)=>{
  		this.http.get(this.globalLink+'/base/precise?position='+position)
  		.map(res => res.json())
  		.subscribe(action=> resolve(action), err=> reject(err));
  	});
  }

  public turnBaseRight(){
  	return new Promise<any>((resolve, reject)=>{
  		this.http.get(this.globalLink+'/base/right')
  		.map(res => res.json())
  		.subscribe(action=> resolve(action), err=> reject(err));
  	});
  }

  public turnBaseLeft(){
  	return new Promise<any>((resolve, reject)=>{
  		this.http.get(this.globalLink+'/base/left')
  		.map(res => res.json())
  		.subscribe(action=> resolve(action), err=> reject(err));
  	});
  }

  public closeHand(){
  	return new Promise<any>((resolve, reject)=>{
  		this.http.get(this.globalLink+'/hand/close')
  		.map(res => res.json())
  		.subscribe(action=> resolve(action), err=> reject(err));
  	});
  }

  public openHand(){
  	return new Promise<any>((resolve, reject)=>{
  		this.http.get(this.globalLink+'/hand/open')
  		.map(res => res.json())
  		.subscribe(action=> resolve(action), err=> reject(err));
  	});
  }

  public rightElbowDown(){
  	return new Promise<any>((resolve, reject)=>{
  		this.http.get(this.globalLink+'/elbow/right/down')
  		.map(res => res.json())
  		.subscribe(action=> resolve(action), err=> reject(err));
  	});
  }

  public rightElbowUp(){
  	return new Promise<any>((resolve, reject)=>{
  		this.http.get(this.globalLink+'/elbow/right/up')
  		.map(res => res.json())
  		.subscribe(action=> resolve(action), err=> reject(err));
  	});
  }

  public rightElbow(position){
  	return new Promise<any>((resolve, reject)=>{
  		this.http.get(this.globalLink+'/elbow/right/precise?position='+position)
  		.map(res => res.json())
  		.subscribe(action=> resolve(action), err=> reject(err));
  	});
  }

  public leftElbow(position){
  	return new Promise<any>((resolve, reject)=>{
  		this.http.get(this.globalLink+'/elbow/left/precise?position='+position)
  		.map(res => res.json())
  		.subscribe(action=> resolve(action), err=> reject(err));
  	});
  }




}
