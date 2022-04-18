import { Component, OnInit } from '@angular/core';
import { RepoSearchService } from '../repo-search.service';




@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;
  userRepos:any;
  username: string = 'karenkoech'
  imageWidth: number = 150;
  imageHeight: number = 200;
  

  constructor( private repoSearchService: RepoSearchService) { }

  findUser () {
    this.repoSearchService.UpdateUser(this.username);

    this.repoSearchService.getUser().subscribe(user => {
      console.log(user);
      this.user = user;
    });

    this.repoSearchService.getUserRepos().subscribe(repos => {
      console.log(repos);
      this.userRepos = repos;
    })
  }
  ngOnInit() {
    this.findUser();
  }


  

  
}
