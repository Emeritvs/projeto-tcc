import { Component, OnInit } from '@angular/core';
const documentsJSON = require('../../mockups/books.json');

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss'],
})

export class DocumentsComponent implements OnInit {
  private documents : any[] = documentsJSON;
  constructor() { }

  ngOnInit() {}

}
