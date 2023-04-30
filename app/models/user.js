import Model, { attr, hasMany } from '@ember-data/model';

export default class UserModel extends Model {
  @attr displayName;
  @hasMany('article') articles;
}
