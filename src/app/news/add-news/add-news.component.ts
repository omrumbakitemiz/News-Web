import { ChangeDetectorRef, Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { News, NewsType } from '../news';

import { NewsService } from './news.service';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.sass']
})
export class AddNewsComponent implements OnInit {
  @ViewChild('newsImageFileInput') newsImageFileInput: ElementRef;

  news: News;
  newsFormGroup = this.formBuilder.group({
    title: [''],
    text: [''],
    type: [''],
    image: [''],
    publishDate: ['']
  });
  newsTypes: Array<NewsType> = [];

  constructor(private formBuilder: FormBuilder, private changeDetectorRef: ChangeDetectorRef, private newsService: NewsService) {}

  ngOnInit() {
    this.news = new News();
    this.newsService.getAllNewsTypes().subscribe(newsTypes => (this.newsTypes = newsTypes));
  }

  onImageSelect(event: any) {
    const fileReader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        this.newsFormGroup.patchValue({
          image: fileReader.result
        });

        this.changeDetectorRef.markForCheck();
      };
    }
  }

  removeImage() {
    this.newsFormGroup.value.image = null;
    this.newsImageFileInput.nativeElement.value = '';
  }

  onSubmit() {
    this.newsFormGroup.patchValue({ publishDate: new Date() });
    this.news = this.newsFormGroup.value;

    this.newsService.addNews(this.news).subscribe(() => this.newsFormGroup.reset());
  }
}
