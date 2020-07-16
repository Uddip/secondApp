import { Component, OnInit, Input } from '@angular/core';
import { Student } from "./student";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Second App';
  bio:Student = {
    sid: 991518202,
    sname: "Uddip Amin",
    scampus: "Trafalgar",
    slogin: "aminu"
  };
}
