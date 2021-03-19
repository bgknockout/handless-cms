// eslint-disable-next-line import/no-named-as-default
import html from 'atomico/html';
import '@ca-design-system/ds-container';
import '@ca-design-system/ds-label';
import '@ca-design-system/ds-kebab';
import '@ca-design-system/ds-pill';
// eslint-disable-next-line import/extensions
import '@ca-design-system/ds-icon';
import { useProp } from 'atomico';
export function dsDespegableSimple({ label, }) {
    const internalLabel = useProp('label');
    return html `<host>
    <ds-label
      text="${internalLabel}"
      color="primary"
      label-for="Hola"
    ></ds-label>
    <ds-kebab></ds-kebab>
    <ds-container border-type="none" box-shadow="shadow2">
      <span slot="1"> </span>
    </ds-container>
  </host>`;
}
dsDespegableSimple.props = {
    label: { type: String, value: '' },
};
//# sourceMappingURL=dsDespegableSimple.js.map