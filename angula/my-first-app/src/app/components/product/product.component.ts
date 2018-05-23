import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

interface Users {
  id: number;
  name: string;
  email: string;
  phone: string;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
  private userLists: Users[];

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getUserList().subscribe((response) => {
      console.log("log :"+response);
      this.userLists = response;
      }); 
  }

}
