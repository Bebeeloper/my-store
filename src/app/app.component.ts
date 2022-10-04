import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'my-store';
  btnAddToggle: boolean = true;
  // backgroundLiMarket: String = '';

  persons = [{
    avatarPic: "https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg",
    firstName: "Kevind",
    lastName: "Ospina",
    age: 28,
    eyeColor: "Green",
    added: true
  },
  {
    avatarPic: "https://img.freepik.com/premium-vector/female-user-profile-avatar-is-woman-character-screen-saver-with-emotions_505620-617.jpg",
    firstName: "Mayra",
    lastName: "Ospina",
    age: 26,
    eyeColor: "Brown",
    added: true
  }];

  market : any[] = [{
    productName: 'Meat',
    quantity: 1,
    productImg: '../assets/products/carne.png',
    price: 12000,
    added: false,
    productIndex: 1
  },
  {
    productName: 'Chicken',
    quantity: 1,
    productImg: '../assets/products/chicken-leg.png',
    price: 8500,
    added: false,
    productIndex: 1
  }];

  miniCart: any[] = [];
  newFruit: String = '';
  fruits: String[] = [];

  addFruit() {
    if (this.newFruit != '') {
      this.fruits.push(this.newFruit);
      this.newFruit = '';
    }
  }

  deleteFruit(position: number) {
    this.fruits.splice(position, 1);
  }

  addMiniCart(index: number){
    this.market[index].added = true;
    this.market[index].productIndex = index;
    this.miniCart.push(this.market[index]);
  }

  deleteItemsFromCart(index: number) {
    console.log(this.miniCart[index].added);
    console.log('Market added: ' + this.market[this.miniCart[index].productIndex].added);
    this.market[this.miniCart[index].productIndex].added = false;
    this.miniCart.splice(index, 1);
  }

  // productAdded(){
  //   this.btnAddToggle = false;
  // }
}
