import React from 'react';
import {
    CategoryNav, CategoryUl,
    HomeContentsContainer,
    HomeContentsInnerContainer,
    HomeMainContents, HomeMainContentsContainer, SearchSectionContainer, SearchSectionOuterContainer,
} from "./HomeStyle";
import {SearchBoxContainer} from "../../style/ConstantStyle";

function Home(props) {
    return (
        <>
            <SearchSectionContainer>
                <SearchBoxContainer>
                    <input className={"search-input"} placeholder={"검색창"}/>
                    <span className={"search-icon"}/>
                </SearchBoxContainer>
            </SearchSectionContainer>
            <HomeContentsContainer>
                <HomeContentsInnerContainer>
                    <CategoryNav>
                        <CategoryUl>
                            <li>
                                <h1>트렌딩</h1>
                            </li>
                            <li>
                                <h1>최신</h1>
                            </li>
                            <li>
                                <h1>피드</h1>
                            </li>
                        </CategoryUl>
                    </CategoryNav>
                    <HomeMainContentsContainer>
                        <HomeMainContents>
                            sda
                        </HomeMainContents>
                    </HomeMainContentsContainer>
                </HomeContentsInnerContainer>
            </HomeContentsContainer>
        </>
    );
}

export default Home;