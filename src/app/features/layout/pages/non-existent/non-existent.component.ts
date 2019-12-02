import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-non-existent',
  templateUrl: './non-existent.component.html',
  styleUrls: ['./non-existent.component.scss']
})
export class NonExistentComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}
