const search = require('../pages/search');
const searchText = "Nike Air";
const expectedProduct = "Nike air presto by you ";

describe ("Search Functionality",() => {

    it("Search with valid product name", async () => {
        await search.clickSearchIcon();
       
        await search.enterSearchText(searchText);
       
        const productList = await search.getProductList(searchText);

        // assertion
        let searchCount = 0;
        for(let i=0; i<productList.length; i++){
            let currentProduct = productList[i].toLowerCase();

            try{
                expect(expectedProduct).toHaveText(currentProduct.toLowerCase());
                searchCount++;
            } catch (error) {
                console.error("Searched result not found yet");
            }
        }
        if(searchCount === 0){
            throw new Error("Searched product not found");
        }
        
            
        // expect(productList).toContain("");


    })

})