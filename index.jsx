

// index.jsx
import React from "react";
import { createRoot } from "react-dom/client";

const data = {
  ps4SystemUpdates: "https://archive.midnightchannel.net/SonyPS/Firmware/?cat=ps4sys#google_vignette",
  apps: "pkg-zone.com",
};
const games = {
  residentEvil: [
    {
      codeVeronica: {
        id: "Resident Evil Code Veronica X - 2017",
        title: '',
        v: '',
        download: 'https://akirabox.to/BnkmWVw60GR0/file',
        file: 'R_07104_v1.00-v1.01_[4.00]_OPOISSO893-[DLPSGAME.COM].rar',
      },
      codeVeronica2001: {
        id: '',
        download: 'https://www.mediafire.com/file/z7gx3rtddk6brlp/UP9000-SLUS22184_00-SLUS201840000001-A0100-V0100.pkg/file',
        file: 'UP9000-SLUS22184_00-SLUS201840000001-A0100-V0100.pkg'
      },
      residentEvil2Remake: {
        id: 'CUSA09193– USA',
        title: 'Resident Evil 2 Remake Deluxe Edition',
        v: '1.07',
        page: 'https://dlpsgame.com/resident-evil-2-ps4-pkg/',
        download: [
          'https://www.mediafire.com/file/ph3if2henly7ivq/R2_09193-[+PS4+-+PS5+].part1.rar/file',
          'https://www.mediafire.com/file/2a80k60lmzh858o/R2_09193-[+PS4+-+PS5+].part2.rar/file',
          'https://www.mediafire.com/file/u0v9sko2xe07333/R2_09193-[+PS4+-+PS5+].part3.rar/file',
        ],
        languages: 'Eng, Fra, Spa, Ger, Ita, Jpn, (text: Rus, Pol, Por/Bra)',
      },
    },
  ],
};

function Text( { children, as = "span", ...props } ) {
   const Element = as;
   return <Element { ...props }>{ children }</Element>;
}
function Title( { children, as = "h2", ...props } ) {
  const Element = as;
  const style = { fontSize: "1.5rem", color: "#ffab00", fontWeight: 700 };
  return <Element { ...props } style={ style }>{ children }</Element>;
}

function App() {
  document.body.style.backgroundColor = "#1b1d22";
  document.body.style.color = "#efefef";

  return( <>
    <Title>GoldHEN</Title>
    <ul>
      <li><a href="https://github.com/GoldHEN/henloader_lp/">HenLoader LP 1.0 - (9.00-12.52)</a></li>
      <li><a href="https://github.com/GoldHEN/henloader_lp/releases">releases</a></li>
    </ul>
    <Title>henloader_lp autoboot</Title>
    <ul>
      <li><a href="https://github.com/lucaslealdev/henloader_lp">repo</a></li>
      <li><a href="https://github.com/lucaslealdev/henloader_lp/releases">releases</a></li>
    </ul>

    <Title>Burning the Blu-ray ISO</Title>
    <ul>
      <li><a href="https://www.imgburn.com/">Windows: Use ImgBurn.</a></li>
      <li><a href="https://apps.kde.org/k3b">Linux: Use K3b.</a></li>
    </ul>

    <Title>Gezine / BD-JB-1250</Title>
    <ul>
      <li><a href="https://github.com/Gezine/BD-JB-1250">source code</a></li>
      <li><a href="https://github.com/Gezine/BD-JB-1250/releases">releases</a></li>
    </ul>

    { <a href={ data.ps4SystemUpdates }>{ `link to get iso updates for PS4` }</a> }
  </> );
}

const appRoot = document.querySelector( "#app_root" );
appRoot ? 
  createRoot( appRoot ).render( <App /> ) 
  : console.error( "appRoot not found" );


