import { Component, OnInit, Input } from '@angular/core';
import { Student } from "../student";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @Input() contentInfo: Student;

  constructor() { }

  ngOnInit(): void {
  }

  clearCity() {
    this.city = "";
  }

  backCampus() {
    return this.city.toUpperCase() === "BRAMPTON" ||
           this.city.toUpperCase() === "OAKVILLE" ? 'blue' : 'red'
  }

  city:string = "Oakville";

}
