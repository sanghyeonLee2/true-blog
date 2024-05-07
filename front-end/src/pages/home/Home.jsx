import React from 'react';
import {
    SearchBoxContainer, CategoryNav, CategoryUl,
    HomeContentsContainer,
    HomeContentsInnerContainer,
    HomeMainContents, HomeMainContentsContainer, SearchInput, SearchIconSpan
} from "./HomeStyle";

function Home(props) {
    return (
        <>
            <SearchBoxContainer>
                    <SearchInput placeholder={"검색창"}/>
                    <SearchIconSpan/>
            </SearchBoxContainer>
            <HomeContentsContainer>
                <HomeContentsInnerContainer>
                    <CategoryNav>
                        <CategoryUl>
                            <li>
                                <h1>요소1</h1>
                            </li>
                            <li>
                                <h1>요소2</h1>
                            </li>
                            <li>
                                <h1>요소3</h1>
                            </li>
                            <li>
                                <h1>요소4</h1>
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