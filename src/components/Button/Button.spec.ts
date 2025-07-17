import { newSpecPage } from '@stencil/core/testing';
import { Button } from './Button';

describe('button', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [Button],
      html: '<button></button>',
    });
    expect(root).toEqualHtml(`
      <button>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </button>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [Button],
      html: `<button first="Stencil" middle="'Don't call me a framework'" last="JS"></button>`,
    });
    expect(root).toEqualHtml(`
      <button first="Stencil" middle="'Don't call me a framework'" last="JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </button>
    `);
  });
});
