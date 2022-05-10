import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-try-route',
  templateUrl: './try-route.component.html',
  styleUrls: ['./try-route.component.scss'],
})
export class TryRouteComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  sayHello = () => 'Hello';
  number = 1;
  increaseNumberValue =  ()=> {this.number+=1}
}
