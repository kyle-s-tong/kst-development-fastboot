import Component from '@glimmer/component';

export default class BlogArticleDetailComponent extends Component {
  get backgroundImageClass() {
    return `bg-[url('${this.imageUrl}')]`;
  }

  get imageUrl() {
    const articleImage = this.args.article?.image;
    return articleImage.get('uri').url;
  }
}
