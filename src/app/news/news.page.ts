import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  data: any;

  constructor(private newsServices: NewsService, private router: Router) { }

  ngOnInit() {
    this.newsServices
      .getData('top-headlines?country=us&category=business')
      .subscribe(data => {
        console.log(data);
        this.data = data;
    })
  }

  onGoToNewsSinglePage(article) {
    this.newsServices.currentArticle = article;
    this.router.navigate(['/news-single']);
  }

}
