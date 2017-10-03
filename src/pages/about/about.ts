import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Movements } from '../../providers/movements'


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
	base      : number = 0;
	rightElbow: number = 0;
	leftElbow : number = 0;
  constructor(public navCtrl: NavController,
  			  private movements: Movements) {

  }

 turnBase(){
  	this.movements.turnBase(this.base)
  	.then(action=>{
  		console.log(action);
  	}).catch(err=>{
  		console.log(err);
  	})
  }

  turnLeftElbow(){
  	this.movements.leftElbow(this.leftElbow)
  	.then(action=>{
  		console.log(action);
  	}).catch(err=>{
  		console.log(err);
  	})	
  }

  turnRightElbow(){
  	this.movements.rightElbow(this.rightElbow)
  	.then(action=>{
  		console.log(action);
  	}).catch(err=>{
  		console.log(err);
  	})	
  }

  openHand(){
  	this.movements.openHand()
  	.then(action=>{
  		console.log(action);
  	}).catch(err=>{
  		console.log(err);
  	})
  }

  closeHand(){
  	this.movements.closeHand()
  	.then(action=>{
  		console.log(action);
  	}).catch(err=>{
  		console.log(err);
  	})
  }


}
