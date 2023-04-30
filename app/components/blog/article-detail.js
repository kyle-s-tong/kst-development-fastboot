import Component from '@glimmer/component';

export default class BlogArticleDetailComponent extends Component {
  get calculatedStyle() {
    return `background-image: url('${this.imageUrl}')`;
  }

  get imageUrl() {
    const articleImage = this.args.article?.image;
    return articleImage.get('formattedUrl');
  }
}
