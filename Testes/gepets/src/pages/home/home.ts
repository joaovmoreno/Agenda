import { Component } from '@angular/core';
// import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'home.html'
})
export class HomePage {
  public press : number = 0;
  constructor(){

  }
  pressEvent(e){
    this.press++;
    console.log('Selecionado')
  }


  slides = [
    {
      // title: "Welcome to the Docs!",
      // description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
      image: "assets/imgs/Adult_Mulher1.png",
    },
    {
      title: "What is Ionic?",
      description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
      // image: "assets/img/ica-slidebox-img-2.png",
    },
    {
      title: "What is Ionic Cloud?",
      description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
      // image: "assets/img/ica-slidebox-img-3.png",
    }
 ];
}
