import React from 'react';
import {
    SearchResultContent,
    SearchResultsContentsContainer,
    SearchResultsPageContainer,
} from "./SearchResultsPageStyle";
import {SearchBoxContainer} from "../../style/ConstantStyle";

function SearchResultsPage(props) {
    return (
        <>
            <SearchBoxContainer>
                <input className={"search-input"} placeholder={"검색창"}/>
                <span className={"search-icon"}/>
            </SearchBoxContainer>
            <SearchResultsPageContainer>
                <SearchResultsContentsContainer>
                    <SearchResultContent>
                    </SearchResultContent>
                </SearchResultsContentsContainer>
            </SearchResultsPageContainer>
        </>
    );
}

export default SearchResultsPage;