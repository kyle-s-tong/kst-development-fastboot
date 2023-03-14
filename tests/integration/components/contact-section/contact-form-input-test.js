import { module, test } from 'qunit';
import { setupRenderingTest } from 'kst-development-fastboot/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module(
  'Integration | Component | contact-section/contact-form-input',
  function (hooks) {
    setupRenderingTest(hooks);

    test('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await render(hbs`<ContactSection::ContactFormInput />`);

      assert.dom(this.element).hasText('');

      // Template block usage:
      await render(hbs`
      <ContactSection::ContactFormInput>
        template block text
      </ContactSection::ContactFormInput>
    `);

      assert.dom(this.element).hasText('template block text');
    });
  }
);
