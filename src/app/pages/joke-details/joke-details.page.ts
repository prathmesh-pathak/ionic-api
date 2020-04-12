import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JokeService } from 'src/app/services/joke.service';

@Component({
  selector: 'app-joke-details',
  templateUrl: './joke-details.page.html',
  styleUrls: ['./joke-details.page.scss'],
})
export class JokeDetailsPage implements OnInit {
  data = null;
  constructor(private activatedRoute: ActivatedRoute, private jokeService: JokeService) { }

  ngOnInit() {
    var data: any;
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.data = this.jokeService.getJokeDetails(id);
  }
}
