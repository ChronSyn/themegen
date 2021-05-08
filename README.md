<p align="center">
  <img src="/assets/logo.png" height=128px width=128px />
</p>
<h1 align="center">Themegen</h1>
<h3 align="center">Easily generate colour shades for a theme</h3>

#### Installation

```
yarn add js-themegen
```

or

```
npm i js-themegen
```

#### Usage

```(typescript)
import { GenerateShades, TShadesResult } from "js-themegen";

const theme: TShadesResult = GenerateShades({
  shades: {
    PRIMARY: "#3c28cc",
    SECONDARY: "#f9c70b",
    TERTIARY: "#00c8ff",
    WARNING: "#ff6200",
    SUCCESS: "#009944",
    INFO: "#0073ff",
    ERROR: "#ac3931",
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
  "LIGHT_LIGHTER_3": "rgb(255,255,255)",
  "DARK_DARKER_3": "rgb(20,18,20)",
  "DARK_DARKER_2": "rgb(27,25,27)",
  "DARK_DARKER_1": "rgb(34,33,34)",
  "DARK": "rgb(42,40,42)",
  "DARK_LIGHTER_1": "rgb(50,48,50)",
  "DARK_LIGHTER_2": "rgb(58,56,58)",
  "DARK_LIGHTER_3": "rgb(66,64,66)",
  "ERROR_DARKER_3": "rgb(140,26,26)",
  "ERROR_DARKER_2": "rgb(150,37,33)",
  "ERROR_DARKER_1": "rgb(161,47,41)",
  "ERROR": "rgb(172,57,49)",
  "ERROR_LIGHTER_1": "rgb(183,67,57)",
  "ERROR_LIGHTER_2": "rgb(194,76,65)",
  "ERROR_LIGHTER_3": "rgb(205,86,74)",
  "INFO_DARKER_3": "rgb(0,89,223)",
  "INFO_DARKER_2": "rgb(0,98,234)",
  "INFO_DARKER_1": "rgb(0,106,244)",
  "INFO": "rgb(0,115,255)",
  "INFO_LIGHTER_1": "rgb(41,124,255)",
  "INFO_LIGHTER_2": "rgb(61,133,255)",
  "INFO_LIGHTER_3": "rgb(78,142,255)",
  "SUCCESS_DARKER_3": "rgb(0,124,42)",
  "SUCCESS_DARKER_2": "rgb(0,134,51)",
  "SUCCESS_DARKER_1": "rgb(0,143,59)",
  "SUCCESS": "rgb(0,153,68)",
  "SUCCESS_LIGHTER_1": "rgb(27,163,77)",
  "SUCCESS_LIGHTER_2": "rgb(44,173,86)",
  "SUCCESS_LIGHTER_3": "rgb(57,183,95)",
  "WARNING_DARKER_3": "rgb(219,68,0)",
  "WARNING_DARKER_2": "rgb(231,78,0)",
  "WARNING_DARKER_1": "rgb(243,88,0)",
  "WARNING": "rgb(255,98,0)",
  "WARNING_LIGHTER_1": "rgb(255,108,18)",
  "WARNING_LIGHTER_2": "rgb(255,118,31)",
  "WARNING_LIGHTER_3": "rgb(255,128,42)",
  "TERTIARY_DARKER_3": "rgb(0,170,224)",
  "TERTIARY_DARKER_2": "rgb(0,180,234)",
  "TERTIARY_DARKER_1": "rgb(0,190,245)",
  "TERTIARY": "rgb(0,200,255)",
  "TERTIARY_LIGHTER_1": "rgb(41,210,255)",
  "TERTIARY_LIGHTER_2": "rgb(62,220,255)",
  "TERTIARY_LIGHTER_3": "rgb(79,230,255)",
  "SECONDARY_DARKER_3": "rgb(215,170,0)",
  "SECONDARY_DARKER_2": "rgb(227,179,0)",
  "SECONDARY_DARKER_1": "rgb(238,189,0)",
  "SECONDARY": "rgb(249,199,11)",
  "SECONDARY_LIGHTER_1": "rgb(255,209,32)",
  "SECONDARY_LIGHTER_2": "rgb(255,219,47)",
  "SECONDARY_LIGHTER_3": "rgb(255,229,60)",
  "PRIMARY_DARKER_3": "rgb(0,10,174)",
  "PRIMARY_DARKER_2": "rgb(24,21,184)",
  "PRIMARY_DARKER_1": "rgb(44,31,194)",
  "PRIMARY": "rgb(60,40,204)",
  "PRIMARY_LIGHTER_1": "rgb(74,49,214)",
  "PRIMARY_LIGHTER_2": "rgb(86,58,225)",
  "PRIMARY_LIGHTER_3": "rgb(98,67,235)"
}
```

#### Parameters

- `shades` - An object containing keys `PRIMARY` and `SECONDARY` keys, as well as optional `TERTIARY`, `ERROR`, `SUCCESS`, `WARNING`, `INFO`, `DARK`, and `LIGHT` keys. Each key represents a colour to generate shades for.
- `outputMode` [optional] [default: `rgba`] - `hex` | `rgb` | `rgba` | `hsl` | `channels` - the output mode for the colours and shades.
- `factor` [optional] [default: 0.2] - The factor by which to adjust shades. Higher number = more extreme difference between shades
- `darkerShadesToGenerate` [optional] [default: 3] - The number of darker shades to generate for each colour
- `lighterShadesToGenerate` [optional] [default: 3] - The number of lighter shades to generate for each colour

#### Output modes

The `outputMode` options are mostly self-explanatory, but here's a refresher:

- `hex` - Returns the hexadecimal representation of the colour
- `rgb` - Returns the RGB (red, green, blue) representation of the colour
- `rgba` - Returns the RGBA (red, green, blue, alpha) representation of the colour
- `hsl` - Returns the HSL (hue, saturation, light) representation of the colour
- `channels` - Returns the individual channels of the colour as an array of RGB channel values

`channels` is useful if you want integrate a colour into a third-party library which may not offer as much configuration as you'd like.

#### Caveats

**Typescript 4.1 or greater required**

Due to limitations of typescript and it's template literal types, it will only provide type suggestions for **up to 20 lighter shades and 20 darker shades**.
This means that if you are generating 21 darker shades and 21 lighter shades, only shades 1 through to 20 will be suggested.
Likewise, even if you only generate 3 darker shades and 3 lighter shades, it will suggest shades 1 through to 20.

This is simply because it doesn't appear to be possible to specify `number` as part of the template literal, so I've had to manually specify numbers - I figured 20 shades would be more than enough for the majority of use cases.

This means you could technically use a colour which isn't generated because you didn't generate enough shades.

You can still technically use `PRIMARY_DARKER_28` if you happen to generate enough shades, but you will have to make use of `//@ts-ignore` to prevent TS from complaining.

Likewise, if you only generate 3 shades, and try to use a shade like `PRIMARY_DARKER_5`, you'll possibly experience an error as it's undefined.

As always, use responsibly.

#### Why?

I've typically manually generated shades of colours and copied them into an interface or const to generate a theme. I decided it was time to try and automate the process.

By providing a few colours commonly found in many projects (primary, secondary, etc), and providing optional but commonly used ones (e.g. tertiary, error), it allows me to generate a theme in seconds instead of hours.

#### License

MIT License

Copyright (c) 2021 Scott Pritchard

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
