import { Component, OnInit } from '@angular/core';
import { User } from './user-data';
import { DataService } from './shared/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  users: User[] = [];
  constructor(private dataservice: DataService) {}

  getUsers() {
    this.dataservice.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  ngOnInit() {
    this.getUsers();
  }

}
