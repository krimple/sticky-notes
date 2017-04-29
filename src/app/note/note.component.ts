import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sn-note',
  template: `
    <div class="container">
      <div class="title">
        {{ title }}
      </div>
      <div class="content">
        {{ content }}
      </div>
    </div>
  `,
  styles: [`
    .container {
      width: 300px;
      margin: 5px;
      padding: 10px;
      border: 1px solid black;
      background-color: blanchedalmond;
      color: black;
    }
    .title {
      font-family: sans-serif;
      font-size: 1.2em;
      text-align: center;
      font-weight: bold;
      border-bottom: 1px solid black;
    }
    .content {
      font-family: sans-serif;
      font-size: .9em;
      color: darkslategrey;
      font-weight: normal;
    }
  `]
})
export class NoteComponent implements OnInit {

  title = 'I am the title';
  content = 'This is a note';

  constructor() { }

  ngOnInit() {
  }

}
