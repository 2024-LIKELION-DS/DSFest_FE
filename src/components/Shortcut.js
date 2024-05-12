import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import * as S from "../styles/ShortStyle";

import bg from "../img/bg_360x440.png";
import logo from "../img/splash_logo_202x220.png"
import rock from "../img/rock_94x140.png"
import beachball from "../img/beachball_41x41.png"
import boat from "../img/boat_40x60.png"
import star from "../img/star_94x320.png"
import beach from "../img/beach_215x215.png"
import parasol from "../img/parasol_58x46.png"

import AOS from "aos";
import "aos/dist/aos.css";
import 'animate.css';

function Shortcut() {

    useEffect(() => {
        AOS.init();
    },[])

    return (
        <S.All>
            <S.BgBox><img className='bg' src={bg} alt='bg'/></S.BgBox>
            <S.Logo>
                <div><img src={logo} alt="찬란 로고"/></div>
            </S.Logo>
            <S.ShortcutArea>
                <NavLink to="/notice">
                    <S.Notice>
                        <img className='rock' src={rock} alt='rock' />
                        <div>Notice</div>
                    </S.Notice>
                </NavLink>
                <S.QuadArea>
                    <NavLink to="/timetable">
                        <S.TimeTable>
                            <img className='beachball' src={beachball} alt='beachball'/>
                            <img className='boat' src={boat} alt='boat'/>
                            <img className='star' src={star} alt='star'/>
                            <div>Time Table</div>
                        </S.TimeTable>
                    </NavLink>
                    <S.TrioArea>
                        <S.DuoArea>
                            <NavLink to="/map">
                                <S.Map><div>Map</div></S.Map>
                            </NavLink>
                            <NavLink to="/review">
                                <S.Review><div>Review</div></S.Review>
                            </NavLink>
                        </S.DuoArea>
                        <NavLink to="/photo">
                            <S.Photo>
                                <img className='parasol' src={parasol} alt='parasol' />
                                <img className='beach' src={beach} alt='Beach' />
                                <div>Photo</div>
                            </S.Photo>
                        </NavLink>
                    </S.TrioArea>
                </S.QuadArea>
            </S.ShortcutArea>
        </S.All>
    );
}

export default Shortcut;
