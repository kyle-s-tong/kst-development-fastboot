import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/template';

export default helper((params) => htmlSafe(params[0]));
