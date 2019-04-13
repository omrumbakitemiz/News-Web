export class NewsType {
  constructor(public name?: string) {}
}

export class News {
  constructor(
    public id?: string,
    public title?: string,
    public text?: string,
    public type?: string,
    public image?: string,
    public publishDate?: Date,
    public likeCount?: number,
    public dislikeCount?: number,
    public viewCount?: number
  ) {}
}
