const searchLocator = require('../locators/searchLocator');

class Search {

    async clickSearchIcon(){
        await searchLocator.searchIcon.click();
    }

    async enterSearchText(searchProduct){
        await searchLocator.searchInput.setValue(searchProduct);
        await browser.keys('Enter');
    }
    
    async getProductList(searchText){
       // return await searchLocator.searchResults(searchText).getText();

       let searchedData =[];
        const data = await searchLocator.searchResults(searchText);
        for(let i=0; i<data.length; i++){
            searchedData.push(await data[i].getText());
        }
        return searchedData;

    }

}
module.exports = new Search();