import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module(
  'Integration | Component | about-section/services-grid',
  function (hooks) {
    setupRenderingTest(hooks);

    test('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await render(hbs`<AboutSection::ServicesGrid />`);

      assert.strictEqual(this.element.textContent.trim(), '');

      // Template block usage:
      await render(hbs`
    <AboutSection::ServicesGrid>
      template block text
    </AboutSection::ServicesGrid>
  `);

      assert.strictEqual(
        this.element.textContent.trim(),
        'template block text'
      );
    });
  }
);
