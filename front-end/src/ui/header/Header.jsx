import React from 'react';
import {HeaderContainer, HeaderSpan, LeftHeaderNav, RightHeaderNav} from "./HeaderStyle";


function Header(props) {
    return (<HeaderContainer>
        <LeftHeaderNav>
                <HeaderSpan>
                    <h1>True blog</h1>
                </HeaderSpan>
                <HeaderSpan>
                 <h1>북마크</h1>
                </HeaderSpan>
        </LeftHeaderNav>
        <RightHeaderNav>
                <HeaderSpan>
                <h1>로그인</h1>
                    </HeaderSpan>
            <HeaderSpan>
                <h1>회원가입</h1>
                    </HeaderSpan>
        </RightHeaderNav>
    </HeaderContainer>);
}

export default Header;