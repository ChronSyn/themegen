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

#### Parameters

- `shades` - An object containing keys `PRIMARY` and `SECONDARY` keys, as well as optional `TERTIARY`, `ERROR`, `DARK`, and `LIGHT` keys. Each key represents a colour to generate shades for.
- `outputMode` [optional] [default: `rgba`] - `hex` | `rgb` | `rgba` - the output mode for the colours and shades.
- `factor` [optional] [default: 0.2] - The factor by which to adjust shades. Higher number = more extreme difference between shades
- `darkerShadesToGenerate` [optional] [default: 3] - The number of darker shades to generate for each colour
- `lighterShadesToGenerate` [optional] [default: 3] - The number of lighter shades to generate for each colour

#### Caveats

**Typescript 4.1 or greater required**

Due to limitations of typescript and it's template literal types, it will only provide type suggestions for **up to 20 lighter shades and 20 darker shades**.
This means that if you are generating 21 darker shades and 21 lighter shades, only shades 1 through to 20 will be suggested.
Likewise, even if you only generate 3 darker shades and 3 lighter shades, it will suggest shades 1 through to 20.

This is simply because it doesn't appear to be possible to specify `number` as part of the template literal, so I've had to manually specify numbers - I figured 20 shades would be more than enough for the majority of use cases.

This means you could technically use a colour which isn't generated because you didn't generate enough shades.

You can still technically use `PRIMARY_DARKER_28` if you happen to generate enough shades, but you will have to make use of `//@ts-ignore` to prevent TS from complaining.

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
