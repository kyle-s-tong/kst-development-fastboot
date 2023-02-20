import { module, test } from 'qunit';
import { setupRenderingTest } from 'kst-development-fastboot/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | work-section/slider', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<WorkSection::Slider />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <WorkSection::Slider>
        template block text
      </WorkSection::Slider>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
