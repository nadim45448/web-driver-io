class SearchLocator {
    get searchIcon() {

        return $("//a[@class='search-icon']");

    }

    get searchInput() {

        return $("//input[@placeholder='Search']");

    }

    searchResults(searchTxt){
        return $$ (`//span[contains(text(),'${searchTxt}')]`);
    }

}

module.exports = new SearchLocator();