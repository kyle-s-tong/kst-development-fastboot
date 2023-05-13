import Model, { attr, hasMany } from '@ember-data/model';

export default class UserModel extends Model {
  @attr name;
  @attr mail;
  @hasMany('article') articles;
}
