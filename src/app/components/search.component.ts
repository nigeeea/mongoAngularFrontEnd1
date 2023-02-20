import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import { BGGService } from '../bgg.service';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchForm!: FormGroup;

  constructor(private fb: FormBuilder, private bggSvc: BGGService){}

  ngOnInit(): void {this.searchForm = this.createForm()}


  private createForm(){
    return this.fb.group({
      ranking: this.fb.control('')
    })
  }

  doSearch() {
    const ranking = this.searchForm.get('ranking')?.value
    console.info('>>>> ranking: ', ranking)
    this.bggSvc.searchGameByRanking(ranking)
      .then(games => {
        console.info('>>> games: ', games)
        this.searchForm.reset()
      })
      .catch(error => {
        console.error('>>> error: ', error)
      })
  }
}
