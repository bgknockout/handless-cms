// eslint-disable-next-line import/no-named-as-default
import html from 'atomico/html';
import { FontFamilyPrimary, ColorComplementaryB1, ColorComplementaryB2, ColorPrimaryP1, ColorPrimaryP3, ColorPrimaryP5, ColorComplementaryT8, ColorComplementaryT10, ColorContextA1, ColorContextH1, ColorContextU1, ColorSecondaryS6, } from '@ca-design-system/ds-tokens/build/ts/tokens';
// eslint-disable-next-line import/extensions
import { useSlots } from './hooks';
import '@ca-design-system/ds-icon';
import { css } from '@emotion/css';
var BackgroundColorTypes;
(function (BackgroundColorTypes) {
    BackgroundColorTypes["white"] = "white";
    BackgroundColorTypes["green"] = "green";
    BackgroundColorTypes["grayLight"] = "grayLight";
    BackgroundColorTypes["grayDark"] = "grayDark";
})(BackgroundColorTypes || (BackgroundColorTypes = {}));
var BoxShadowTypes;
(function (BoxShadowTypes) {
    BoxShadowTypes["shadow1"] = "shadow1";
    BoxShadowTypes["shadow2"] = "shadow2";
})(BoxShadowTypes || (BoxShadowTypes = {}));
var BorderColorTypes;
(function (BorderColorTypes) {
    BorderColorTypes["gray"] = "gray";
    BorderColorTypes["primary"] = "primary";
})(BorderColorTypes || (BorderColorTypes = {}));
var BorderTypeTypes;
(function (BorderTypeTypes) {
    BorderTypeTypes["none"] = "none";
    BorderTypeTypes["normal1px"] = "normal1px";
    BorderTypeTypes["highlight"] = "highlight";
})(BorderTypeTypes || (BorderTypeTypes = {}));
var HighlightColorTypes;
(function (HighlightColorTypes) {
    HighlightColorTypes["hospitalario"] = "hospitalario";
    HighlightColorTypes["ambulatorio"] = "ambulatorio";
    HighlightColorTypes["urgencia"] = "urgencia";
    HighlightColorTypes["primary5"] = "primary5";
    HighlightColorTypes["secondary6"] = "secondary6";
})(HighlightColorTypes || (HighlightColorTypes = {}));
const backgroundColorSwitch = (backgroundColor) => ({
    white: ColorComplementaryB1,
    green: ColorPrimaryP3,
    grayLight: ColorComplementaryB2,
    grayDark: ColorComplementaryT10,
}[backgroundColor]);
const boxShadowSwitch = (boxShadow) => ({
    shadow1: '0 2px 5px 0 rgba(201, 207, 227, 0.75)',
    shadow2: '0 6px 20px 0 rgba(178, 185, 207, 0.75)',
}[boxShadow]);
const borderWidthSwitch = (borderType) => ({
    none: 'none',
    normal1px: '1px',
    highlight: '0px 0px 0px 12px',
}[borderType]);
const borderColorSwitch = (borderColor) => ({
    gray: ColorComplementaryT8,
    primary: ColorPrimaryP1,
}[borderColor]);
const highlightColorSwitch = (highlightColor) => ({
    hospitalario: ColorContextH1,
    ambulatorio: ColorContextA1,
    urgencia: ColorContextU1,
    primary5: ColorPrimaryP5,
    secondary6: ColorSecondaryS6,
}[highlightColor]);
const containerStyles = (backgroundColor, padding, boxShadow, borderColor, roundedBorder, borderType, highlightColor) => {
    return css `
    box-sizing: border-box;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    padding: ${padding};
    background-color: ${backgroundColorSwitch(backgroundColor)};
    border-radius: ${roundedBorder ? '8px' : '0px'};
    box-shadow: ${boxShadowSwitch(boxShadow)};
    font-family: ${FontFamilyPrimary};

    ${borderType === BorderTypeTypes.none &&
        css `
      border: none;
    `}

    ${borderType === BorderTypeTypes.normal1px &&
        css `
      border-color: ${borderColorSwitch(borderColor)};
      border-width: ${borderWidthSwitch(borderType)};
      border-style: ${borderColor === BorderColorTypes[borderColor]
            ? 'solid'
            : 'none'};
    `}

    ${borderType === BorderTypeTypes.highlight &&
        css `
      border-color: ${highlightColorSwitch(highlightColor)};
      border-width: ${borderWidthSwitch(borderType)};
      border-style: ${highlightColor === HighlightColorTypes[highlightColor]
            ? 'solid'
            : 'none'};
    `}
  `;
};
export function dsContainer({ backgroundColor, padding, boxShadow, borderColor, roundedBorder, borderType, highlightColor, }) {
    const { children } = useSlots();
    return html `<host>
    <div
      class=${containerStyles(backgroundColor, padding, boxShadow, borderColor, roundedBorder, borderType, highlightColor)}
    >
      ${children.map((elem) => html `<${elem} />`)}
    </div>
  </host>`;
}
dsContainer.props = {
    backgroundColor: { type: String, value: 'white' },
    padding: { type: String, value: '16px' },
    boxShadow: { type: String, value: '' },
    borderColor: { type: String, value: '' },
    borderType: { type: String, value: 'none' },
    roundedBorder: { type: Boolean, value: false },
    highlightColor: { type: String, value: '' },
};
//# sourceMappingURL=dsContainer.js.map