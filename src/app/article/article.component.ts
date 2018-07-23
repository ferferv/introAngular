import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title = 'What is like to be in Ironhack Mexico'
  image = 'https://cdn-images-1.medium.com/max/2000/1*6PAmNtyNDKSFRdCoyg8g5g.jpeg'
  description = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit rerum corrupti consequuntur praesentium eum vitae doloremque dicta inventore, ipsa quibusdam nobis quisquam accusamus velit id dolorem soluta magnam aut harum.'
}
