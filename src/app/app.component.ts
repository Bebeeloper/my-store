import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'my-store';
  persons: any[] = [{
    avatarPic: "https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg",
    firstName: "Kevind",
    lastName: "Ospina",
    age: 28,
    eyeColor: "Green"
  },
  {
    avatarPic: "https://img.freepik.com/premium-vector/female-user-profile-avatar-is-woman-character-screen-saver-with-emotions_505620-617.jpg",
    firstName: "Mayra",
    lastName: "Ospina",
    age: 26,
    eyeColor: "Brown"
  }];
}
