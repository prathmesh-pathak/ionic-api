import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { JokeService, JokeType } from 'src/app/services/joke.service';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.page.html',
  styleUrls: ['./jokes.page.scss'],
})
export class JokesPage implements OnInit {

  results: Observable<any>;
  type: JokeType = JokeType.all;

  constructor(private jokeService: JokeService) { }

  ngOnInit() {
    this.results = this.jokeService.getJokes();
  }

  typeChanged() {
    this.results = this.jokeService.getJokesOnType(this.type);
  }
}
