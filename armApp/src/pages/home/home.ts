import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Movements } from '../../providers/movements'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
  			  private movements: Movements) {

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

  turnBaseLeft(){
  	this.movements.turnBaseLeft()
  	.then(action=>{
  		console.log(action);
  	}).catch(err=>{
  		console.log(err);
  	})
  }

  turnBaseRight(){
  	this.movements.turnBaseRight()
  	.then(action=>{
  		console.log(action);
  	}).catch(err=>{
  		console.log(err);
  	})
  }

  rightElbowDown(){
  	this.movements.rightElbowDown()
  	.then(action=>{
  		console.log(action);
  	}).catch(err=>{
  		console.log(err);
  	})
  }

  rightElbowUp(){
  	this.movements.rightElbowUp()
  	.then(action=>{
  		console.log(action);
  	}).catch(err=>{
  		console.log(err);
  	})	
  }

}
