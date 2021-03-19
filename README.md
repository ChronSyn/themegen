<p align="center">
  <img src="/assets/logo.png" height=128px width=128px />
</p>
<h1 align="center">Themegen</h1>
<h3 align="center">Easily generate colour shades for a theme</h3>

####Installation

```
yarn add themegen
```

or

```
npm i themegen
```

####Usage

```(typescript)
import { GenerateShades } from "themegen";

const theme = GenerateShades({
  shades: {
    PRIMARY: "#CC99CC",
    SECONDARY: "#99CC99",
    TERTIARY: "#77ADAD",
    ERROR: "#BB3931",
    DARK: "#2A282A",
    LIGHT: "#F4F4F6"
  },
  outputMode: "rgb",
  factor: 0.2,
  darkerShadesToGenerate: 3,
  lighterShadesToGenerate: 2
})
```

Will generate:

```(json)
{
  "LIGHT_DARKER_3": "rgb(213,213,215)",
  "LIGHT_DARKER_2": "rgb(223,223,225)",
  "LIGHT_DARKER_1": "rgb(234,234,236)",
  "LIGHT": "rgb(244,244,246)",
  "LIGHT_LIGHTER_1": "rgb(254,254,255)",
  "LIGHT_LIGHTER_2": "rgb(255,255,255)",
  "DARK_DARKER_3": "rgb(20,18,20)",
  "DARK_DARKER_2": "rgb(27,25,27)",
  "DARK_DARKER_1": "rgb(34,33,34)",
  "DARK": "rgb(42,40,42)",
  "DARK_LIGHTER_1": "rgb(50,48,50)",
  "DARK_LIGHTER_2": "rgb(58,56,58)",
  "ERROR_DARKER_3": "rgb(154,23,26)",
  "ERROR_DARKER_2": "rgb(165,36,33)",
  "ERROR_DARKER_1": "rgb(176,47,41)",
  "ERROR": "rgb(187,57,49)",
  "ERROR_LIGHTER_1": "rgb(198,67,57)",
  "ERROR_LIGHTER_2": "rgb(209,77,65)",
  "TERTIARY_DARKER_3": "rgb(91,144,144)",
  "TERTIARY_DARKER_2": "rgb(100,154,154)",
  "TERTIARY_DARKER_1": "rgb(110,163,163)",
  "TERTIARY": "rgb(119,173,173)",
  "TERTIARY_LIGHTER_1": "rgb(129,183,183)",
  "TERTIARY_LIGHTER_2": "rgb(138,193,193)",
  "SECONDARY_DARKER_3": "rgb(124,174,125)",
  "SECONDARY_DARKER_2": "rgb(134,184,134)",
  "SECONDARY_DARKER_1": "rgb(143,194,144)",
  "SECONDARY": "rgb(153,204,153)",
  "SECONDARY_LIGHTER_1": "rgb(163,214,163)",
  "SECONDARY_LIGHTER_2": "rgb(173,224,172)",
  "PRIMARY_DARKER_3": "rgb(174,125,174)",
  "PRIMARY_DARKER_2": "rgb(184,134,184)",
  "PRIMARY_DARKER_1": "rgb(194,143,194)",
  "PRIMARY": "rgb(204,153,204)",
  "PRIMARY_LIGHTER_1": "rgb(214,163,214)",
  "PRIMARY_LIGHTER_2": "rgb(224,172,224)"
}
```

####Parameters

- `shades` - An object containing keys `PRIMARY` and `SECONDARY` keys, as well as optional `TERTIARY`, `ERROR`, `DARK`, and `LIGHT` keys. Each key represents a colour to generate shades for.
- `outputMode` [optional] [default: `rgba`] - `hex` | `rgb` | `rgba` - the output mode for the colours and shades.
- `factor` [optional] [default: 0.2] - The factor by which to adjust shades. Higher number = more extreme difference between shades
- `darkerShadesToGenerate` [optional] [default: 3] - The number of darker shades to generate for each colour
- `lighterShadesToGenerate` [optional] [default: 3] - The number of lighter shades to generate for each colour
