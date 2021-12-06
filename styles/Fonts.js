/*
 * Web Fonts from colophon-foundry.org
 *
 * The fonts included in this stylesheet are subject to the End User License you purchased
 * from Colophon Foundry. The fonts are protected under domestic and international trademark and
 * copyright law. You are prohibited from modifying, reverse engineering, duplicating, or
 * distributing this font software.
 *
 * (c) 2020 Colophon Foundry
 *
 * Licenced to Guide Dogs The Guide Dogs for the Blind Association
 */

import * as React from 'react'
import { Global } from "@emotion/react"

export const Fonts = () => (
  <Global
    styles={`
    @font-face {
        font-family: 'castledown-heavy';
        src: url('/fonts/castledown/castledown-heavy.woff2') format('woff2'),
             url('/fonts/castledown/castledown-heavy.woff') format('woff');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }
    
    @font-face {
        font-family: 'castledown-bold';
        src: url('/fonts/castledown/castledown-bold.woff2') format('woff2'),
             url('/fonts/castledown/castledown-bold.woff') format('woff');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }
    
    @font-face {
        font-family: 'castledown-regular';
        src: url('/fonts/castledown/castledown-regular.woff2') format('woff2'),
             url('/fonts/castledown/castledown-regular.woff') format('woff');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }
      `}
  />
)

export default Fonts