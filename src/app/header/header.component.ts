import { Component, OnInit, Output,EventEmitter } from '@angular/core';
// import {  } from 'events';
// import { emit } from 'cluster';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  sortTypeList = [
    {sortType : "Name(A-Z)"},
    {sortType : "Name(Z-A)"},
    {sortType : "Rank"},
    {sortType : "Rank"}
  ]
  selectedSortType;
  search;
  @Output() searchStringEmitter = new EventEmitter();
  @Output() sortingTypeEmitter = new EventEmitter();
  ngOnInit() {
  }
  
  getcode(event){
    if(event.key == "Enter"){
      this.searchEnterByUser();
    }
  }
  selectedValueFromDD(event){
    console.log(event);
    this.sortingTypeEmitter.emit(event);
  }

  searchEnterByUser(){
    this.searchStringEmitter.emit(this.search)
  }
}
