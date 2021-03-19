// eslint-disable-next-line import/no-named-as-default
import html from 'atomico/html';
import {
  FontFamilyPrimary,
  ColorComplementaryB1,
  ColorComplementaryB2,
  ColorPrimaryP1,
  ColorPrimaryP3,
  ColorPrimaryP5,
  ColorComplementaryT8,
  ColorComplementaryT10,
  ColorContextA1,
  ColorContextH1,
  ColorContextU1,
  ColorSecondaryS6,
  SpacingPaddingP6,
  SpacingPaddingP8,
  SpacingPaddingP4,
} from '@ca-design-system/ds-tokens/build/ts/tokens';
import '@ca-design-system/ds-container';
import '@ca-design-system/ds-label';
import '@ca-design-system/ds-kebab';
import '@ca-design-system/ds-pill';

// eslint-disable-next-line import/extensions
import '@ca-design-system/ds-icon';
import { css } from '@emotion/css';
import { Props, useState, useProp } from 'atomico';

export function dsDespegableSimple({
  label,
}: Props<typeof dsDespegableSimple.props>) {
  const internalLabel = useProp('label');

  return html`<host>
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
