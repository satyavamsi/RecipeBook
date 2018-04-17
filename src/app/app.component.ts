import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .newColor {
      color: white;
    }
  `]
})
export class AppComponent implements OnInit {

  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'your api key',
      authDomain: 'your auth domain'
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
