

// index.jsx
import React from "react";
import { createRoot } from "react-dom/client";

const data = {
  ps4SystemUpdates: "https://archive.midnightchannel.net/SonyPS/Firmware/?cat=ps4sys#google_vignette",
  apps: "pkg-zone.com",
};
const games = {
  residentEvil: [
    codeVeronica = {
      id: "",
      title: 'Resident Evil Code Veronica X - 2017',
      v: '',
      download: 'https://akirabox.to/BnkmWVw60GR0/file',
      file: 'R_07104_v1.00-v1.01_[4.00]_OPOISSO893-[DLPSGAME.COM].rar',
    },
    codeVeronica2001 = {
      id: '',
      title: 'Resident Evil Code Veronica X - 2001',
      download: 'https://www.mediafire.com/file/z7gx3rtddk6brlp/UP9000-SLUS22184_00-SLUS201840000001-A0100-V0100.pkg/file',
      file: 'UP9000-SLUS22184_00-SLUS201840000001-A0100-V0100.pkg'
    },
    codeVeronicaDublado = {
      id: 'SLUS-20184',
    },
    residentEvil2Remake = {
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
  ],
  shenmue: [
    shenmue_1 = {
      id: '',
      title: 'Shenmue 1',
      download: 'https://www.mediafire.com/file/lp0brx14jdqc9hk/hako-playable-shenmueips4.rar',
    },
  ],
  jurassicPark: [
    theLostWorld = {
      id: '',
      title: 'Jurassic Park - The Lost World',
      download: 'https://www.mediafire.com/file/3x8ir2trf0s5br8/UP9000-SLES00903_00-PSHD123450000001-A0100-V0100.pkg/file',
    },
  ],
  callOfDuty: [
    modernWarfare = {
      id: '',
      title: 'Call Of Duty: Modern Warfare',
      page: 'https://dlpsgame.com/call-of-duty-modern-warfare-2019-ps4-pkg/',
    },
  ],
  fifa: [
    fifa_19 = {
      id: '',
      title: 'Fifa 19',
      page: 'https://dlpsgame.com/fifa-19-ps4-pkg/',
      download: [
        // 'https://filecrypt.cc/Container/000451142D.html'
        'https://www.mediafire.com/file/umdx407simcmnxb/UP0006-CUSA11600_00-FIFAFOOTBALL2019-A0100-V0100-[DLPSGAME.COM].part1.rar/file',
        'https://www.mediafire.com/file/dd6lcstfa65otnl/UP0006-CUSA11600_00-FIFAFOOTBALL2019-A0100-V0100-[DLPSGAME.COM].part2.rar/file',
        'https://www.mediafire.com/file/spch6tl51i52y5g/UP0006-CUSA11600_00-FIFAFOOTBALL2019-A0100-V0100-[DLPSGAME.COM].part3.rar/file',
        'https://www.mediafire.com/file/6rhosja3lm59o5x/UP0006-CUSA11600_00-FIFAFOOTBALL2019-A0100-V0100-[DLPSGAME.COM].part4.rar/file',
      ],
      update: 'https://www.mediafire.com/file/62p05w94xfidmwc/UP0006-CUSA11600_00-FIFAFOOTBALL2019-A0117-V0100-[DLPSGAME.COM].pkg/file',
    },
    fifa_23 = {
      id: 'CUSA31873 – EUR',
      title: 'Fifa 23',
      page: 'https://dlpsgame.com/fifa-23-ps4-pkg/',
      dPage: 'https://filecrypt.cc/Container/AEEC0917A7.html',
      download: [
        'https://www.mediafire.com/file/g45xjp8z98bm2m2/F23_31873_v1.00_[9.00]_OPOISSO893-[DLPSGAME.COM].part1.rar/file',
        'https://www.mediafire.com/file/3pmgv0uevrzim8p/F23_31873_v1.00_[9.00]_OPOISSO893-[DLPSGAME.COM].part2.rar/file',
        'https://www.mediafire.com/file/nk4a3rtf321idg9/F23_31873_v1.00_[9.00]_OPOISSO893-[DLPSGAME.COM].part3.rar/file',
        'https://www.mediafire.com/file/5ktakhkubgd7j3s/F23_31873_v1.00_[9.00]_OPOISSO893-[DLPSGAME.COM].part4.rar/file',
        'https://www.mediafire.com/file/qchvh8bv0tytgb9/F23_31873_v1.00_[9.00]_OPOISSO893-[DLPSGAME.COM].part5.rar/file',
      ],
      update: [
        {
          id: '1.24 - fix',
          download: 'https://www.mediafire.com/file/b3p81rmxwop8rpp/[DLPSGAME.COM]-FIFA.23_CUSA31873_v1.24_BACKPORT_[5.05-6.72-7.xx-8.xx]_OPOISSO893.rar/file'
        },
        {
          id: 'language - pt-br',
          download: 'https://www.mediafire.com/file/5ndohup5bb7hep4/FIFA.23_CUSA31873_Brazilian.Portuguese.Audio-[DLPSGAME.COM].rar/file'
        },
      ],
    },
    fifa24 = {
      id: '',
      title: '',
      download: 'https://akirabox.to/Z9dzBklEEGk1/file',
    },
    fifa26 = {
      id: 'CUSA52342 – USA',
      title: 'EA SPORTS™ FC 26',
      download: 'https://akirabox.to/LJlGnqQNZz15/file',
      update: 'https://downloadgameps3.net/archives/26104',
    },
  ],
  efootball: [
    efootball = {
      id: '',
      title: 'efootball',
      page: 'https://dlpsgame.com/efootball-2022-ps4-pkg/',
      dpage: 'https://downloadgameps3.net/archives/26177',
      download: [
        'https://www.mediafire.com/file/m805d7jimjcc11g/eF_26997_v1.39_FULLGAME_[5.05-6.72-7.xx-9.00]-OPOISSO893-[DLPSGAME.COM].part1.rar/file',
        'https://www.mediafire.com/file/ymkoyacipfd0ssr/eF_26997_v1.39_FULLGAME_[5.05-6.72-7.xx-9.00]-OPOISSO893-[DLPSGAME.COM].part2.rar/file',
        'https://www.mediafire.com/file/wb3yo7vjua0fet6/eF_26997_v1.39_FULLGAME_[5.05-6.72-7.xx-9.00]-OPOISSO893-[DLPSGAME.COM].part3.rar/file',
        'https://www.mediafire.com/file/vnm6i9jsv4m21ta/eF_26997_v1.39_FULLGAME_[5.05-6.72-7.xx-9.00]-OPOISSO893-[DLPSGAME.COM].part4.rar/file',
        'https://www.mediafire.com/file/sqbqzdhlr8onkpq/eF_26997_v1.39_FULLGAME_[5.05-6.72-7.xx-9.00]-OPOISSO893-[DLPSGAME.COM].part5.rar/file',
        'https://www.mediafire.com/file/bxmdyrcxym8zzxr/eF_26997_v1.39_FULLGAME_[5.05-6.72-7.xx-9.00]-OPOISSO893-[DLPSGAME.COM].part6.rar/file',
      ],
    },
    ef25 = {
      id: '',
      title: 'efootball 2025',
      page: 'https://es.anotepad.com/notes/s7kqrcp8',
      download: [
        'https://www.mediafire.com/file/zaoy61o8wid9hme/NEW+MONSTER+BASE+2024+EU+-[DLPSGAME.COM].part1.rar/file',
        'https://www.mediafire.com/file/7m58jmpqive9era/NEW+MONSTER+BASE+2024+EU+-[DLPSGAME.COM].part2.rar/file',
        'https://www.mediafire.com/file/mro1ji1hsp5im3t/NEW+MONSTER+BASE+2024+EU+-[DLPSGAME.COM].part3.rar/file',
        'https://www.mediafire.com/file/l1v9mmw8dqfkrl6/NEW+MONSTER+BASE+2024+EU+-[DLPSGAME.COM].part4.rar/file',
        'https://www.mediafire.com/file/q5v6zz60dihwa6i/NEW+MONSTER+BASE+2024+EU+-[DLPSGAME.COM].part5.rar/file',
        'https://www.mediafire.com/file/hk1to11ngskhdvb/NEW+MONSTER+BASE+2024+EU+-[DLPSGAME.COM].part6.rar/file',
        'https://www.mediafire.com/file/j0llnf4rpfib8lg/NEW+MONSTER+BASE+2024+EU+-[DLPSGAME.COM].part7.rar/file',
      ],
        MonsterPatch8_05: [
        'https://www.mediafire.com/file/2rqh9jzyd1epnm7/EP0101-CUSA18740_DATAPACK_805-[DLPSGAME.COM].part1.rar/file',
        'https://www.mediafire.com/file/2qf9hthj1gt0yof/EP0101-CUSA18740_DATAPACK_805-[DLPSGAME.COM].part2.rar/file',
      ],
    },
  ],
  mortalKombat: [
    mk11 = {
      id: '',
      title: 'Mortal Kombat 11',
      key: 'DLPSGAME.COM',
      title: 'Game + Update 1.30 + All DLC + Mod unlock All Content',
      gamelink: 'https://filecrypt.cc/Container/D8DB176A69.html',
      download: [
        'https://www.mediafire.com/file/9odjffjextzart5/UP1018-CUSA11395_00-00MORTALKOMBAT11-A0100-V0100[+High-Speed+]-[DLPSGAME.COM].part1.rar/file',
        'https://www.mediafire.com/file/t36pou156cvhkfu/UP1018-CUSA11395_00-00MORTALKOMBAT11-A0100-V0100[+High-Speed+]-[DLPSGAME.COM].part2.rar/file',
        'https://www.mediafire.com/file/z9x3i2h9osl7jn6/UP1018-CUSA11395_00-00MORTALKOMBAT11-A0100-V0100[+High-Speed+]-[DLPSGAME.COM].part3.rar/file',
        'https://www.mediafire.com/file/u0gjhi19jb8qez0/UP1018-CUSA11395_00-00MORTALKOMBAT11-A0100-V0100[+High-Speed+]-[DLPSGAME.COM].part4.rar/file',
      ],
      update: 'https://filecrypt.cc/Container/146F4D98AE.html',
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


