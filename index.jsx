

// index.jsx
import React from "react";
import { createRoot } from "react-dom/client";

const data = {
  ps4SystemUpdates: "https://archive.midnightchannel.net/SonyPS/Firmware/?cat=ps4sys#google_vignette",
  apps: "pkg-zone.com",
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


