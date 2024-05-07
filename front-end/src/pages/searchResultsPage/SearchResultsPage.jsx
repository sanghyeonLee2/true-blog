import React from 'react';
import {
    SearchResultContent,
    SearchResultsContentsContainer,
    SearchResultsPageContainer, SearchResultsPageSearchBox
} from "./SearchResultsPageStyle";

function SearchResultsPage(props) {
    return (
        <>
            <SearchResultsPageSearchBox>
                <h1><input placeholder={"검색결과"}/>에 대한 검색결과</h1>
            </SearchResultsPageSearchBox>
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