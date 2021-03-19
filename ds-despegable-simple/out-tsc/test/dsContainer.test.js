import { html, fixture, expect } from '@open-wc/testing';
import '../src/main.es.js';
describe('dsContainer', () => {
    it('passes the a11y audit', async () => {
        const element = await fixture(html `<ds-container>
        <span slot="data">
          <p>Componente Container normal</p>
        </span>
      </ds-container>`);
        await expect(element).to.be.accessible();
    });
    it('passes the a11y audit', async () => {
        const element = await fixture(html `<ds-container
        padding="16px"
        border-type="normal1px"
        border-color="gray"
        rounded-border
      >
        <span slot="data">
          <p>Componente Container normal</p>
        </span>
      </ds-container>`);
        await expect(element).to.be.accessible();
    });
    it('passes the a11y audit', async () => {
        const element = await fixture(html `<ds-container
        background-color="gray"
        border-type="highlight"
        highlight-color="urgencia"
        box-shadow="s1"
        rounded-border
      >
        <span slot="data">
          <p>Componente Container normal</p>
        </span>
      </ds-container>`);
        await expect(element).to.be.accessible();
    });
});
//# sourceMappingURL=dsContainer.test.js.map