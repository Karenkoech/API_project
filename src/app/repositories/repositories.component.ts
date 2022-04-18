import { Component, OnInit } from '@angular/core';
import { RepoSearchService } from '../repo-search.service';



@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
  repoitems!: any[];
  repoName:string= "";

  constructor(private repoSearchService: RepoSearchService) { }

  

  findRepo () {
    this.repoSearchService.UpdateRepo(this.repoName);
    this.repoSearchService.searchrepos().subscribe(repo => {
      // console.log(repo["items"]);
      this.repoitems = this.repoitems;
      console.log(this.repoitems);
    })
  }
  ngOnInit(): void{
    this.findRepo();
  }
}

