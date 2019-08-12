import { Component, OnInit, Output, OnChanges } from '@angular/core';
import { ProfileDataService } from '../services/profile-data.service';
import { NgOnChangesFeature } from '@angular/core/src/render3';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(
    private profileDataService : ProfileDataService,
    private messageService: MessageService
  ) { }
  searchString : String;
  sortingType : String;
  listOfProfile;
  showDetails = false;
  selectedIndex = false;
  repoDetails;

  ngOnInit() {
    
  }

  //get search string from header component
  getSearchString(value){
    this.searchString = value;
    this.getProfileData();
  }

  //get sorting type from header component
  getSortingType(value){
    this.sortingType = value;
    this.sortingMartixFunctionCalling(this.sortingType ? this.sortingType : '1');
  }

  //get list of profile with search string
  getProfileData(){
    this.profileDataService.getAllProfileData(this.searchString).subscribe(
      (response) => {
        this.listOfProfile = response.items;
        this.getSortingType(this.sortingType)
        console.log(this.listOfProfile);
      },
      (error) => {
        console.log(error);
      }
    )
  }

  //get the details of specific user
  openCurrentDetails(index,name){
    this.profileDataService.getReposDetailsForSingleUser(name).subscribe(
      (response) => {
        this.repoDetails = response;

        if(this.selectedIndex==index){
          this.showDetails = !this.showDetails;
        }else{
          this.showDetails = true;
        }
        this.selectedIndex = index;

        if(response && response.length == 0 && this.showDetails){
          this.showMessage('warn','No data to load')
        }
      },
      (error) => {
        console.log('error occures while retreiving repo details')
      }
    )
  }

  // sorting matrix 
  sortingMartixFunctionCalling(sortingValue){
    this.showDetails = false;
    if(sortingValue == '1')
      this.sortListAscOrder();
    else if(sortingValue == '2')
      this.sortListDescOrder();
    else if(sortingValue == '3')
      this.sortListAscOrderRankwise();
    else
      this.sortListDescOrderRankwise();
  }

  //ascending order sorting with respect to login name
  sortListAscOrder(){
    if(this.listOfProfile){
      return this.listOfProfile.sort((a, b) => {
        return a.login.localeCompare(b.login);
      });
    }
  }

  //descending order sorting with respect to login name
  sortListDescOrder(){
    if(this.listOfProfile){
      return this.listOfProfile.sort((a, b) => {
        return b.login.localeCompare(a.login);
      });
    }
  }

  //ascending order sorting with respect to ranking
  sortListAscOrderRankwise(){
    if(this.listOfProfile){
      return this.listOfProfile.sort((a, b) => {
        return a.score - b.score;
      });
    }
  }

  //descending order sorting to respect with ranking
  sortListDescOrderRankwise(){
    if(this.listOfProfile){
      return this.listOfProfile.sort((a, b) => {
        return b.score - a.score;
      });
    }
  }

  showMessage(messageType,message){
    this.messageService.add({severity:messageType, detail:message});
  }
}
