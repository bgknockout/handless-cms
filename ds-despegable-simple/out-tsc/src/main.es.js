// eslint-disable-next-line import/extensions
import { dsDespegableSimple } from './dsDespegableSimple';
import { c } from 'atomico';
const myElementExists = !!window.customElements.get('ds-despegable-simple');
/* istanbul ignore else*/
if (!myElementExists)
    window.customElements.define('ds-despegable-simple', c(dsDespegableSimple));
//# sourceMappingURL=main.es.js.map