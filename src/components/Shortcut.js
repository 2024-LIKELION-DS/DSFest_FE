import React from "react";
import * as S from "../styles/ShortStyle";

import logo from "../img/splash_logo_202x220.png"
import rock from "../img/rock_94x140.png"
import beachball from "../img/beachball_41x41.png"
import boat from "../img/boat_40x60.png"
import star from "../img/star_94x320.png"
import beach from "../img/beach_215x215.png"
import parasol from "../img/parasol_58x46.png"

function Shortcut() {
    return (
        <S.All>
            <S.Logo>
                <div><img src={logo} alt="찬란 로고"/></div>
            </S.Logo>
            <S.ShortcutArea>
                <S.Notice>
                    <img className='rock' src={rock} alt='rock' />
                    <div>Notice</div>
                </S.Notice>
                <S.QuadArea>
                    <S.TimeTable>
                        <img className='beachball' src={beachball} alt='beachball'/>
                        <img className='boat' src={boat} alt='boat'/>
                        <img className='star' src={star} alt='star'/>
                        <div>Time Table</div>
                    </S.TimeTable>
                    <S.TrioArea>
                        <S.DuoArea>
                            <S.Map><div>Map</div></S.Map>
                            <S.Review><div>Review</div></S.Review>
                        </S.DuoArea>
                        <S.Photo>
                            <img className='parasol' src={parasol} alt='parasol' />
                            <img className='beach' src={beach} alt='Beach' />
                            <div>Photo</div>
                        </S.Photo>
                    </S.TrioArea>
                </S.QuadArea>
            </S.ShortcutArea>
        </S.All>
    );
}

export default Shortcut;
