const axios = require("axios").default;
const cheerio = require("cheerio");


const fethHtml = async url => {
    try {
        const { data } = await axios.get(url);
        return data;
    } catch {
        console.error(
            `ERROR: An error occurred while trying to fetch the URL: ${url}`
        );
    }
};

const extractDeal = selector => {
    const title = selector
        .find("a > h2")
        .text()
        .trim();
    // console.log(selector)

        const subTitle = selector
        .find(" a > h3 > span")
        .text()
        .trim();
        
        const link = selector
        .find('a')
        .attr('href');

        const img = selector
            .parent()
            .find('img')
            
            
            // .find("div[class='card-image-wrapper cardImage-m__card-image-wrapper__2Ozvn']")
            // .find("img[class='qt-image image cardImage-m__image__kVGNr']").attr('src')
            

            // .find('.hero-image')
            // .find('figure > picture > img').attr('src');
        // .find(' div > figure > picture img')
        // .find('qt-image image cardImage-m__image__kVGNr')
        // .attr('src')
        // .attr('src');
        console.log(img)
        // console.log(img)
        


    // const releaseDate = selector
    //     .find(".responsive_search_name_combined")
    //     .find("div[class='col search_released responsive_secondrow']")
    //     .text()
    //     .trim();

    // const link = selector.attr("href").trim();

    // const priceSelector = selector
    //     .find("div[class='col search_price_discount_combined responsive_secondrow']")
    //     .find("div[class='col search_price discounted responsive_secondrow']");

    // const originalPrice = priceSelector
    //     .find("span > strike")
    //     .text()
    //     .trim();

    // const pricesHtml = priceSelector.html().trim();
    // const matched = pricesHtml.match(/(<br>(.+\s[0-9].+.\d+))/);

    // const discountedPrice = matched[matched.length - 1];

    return {
        title,
        subTitle,
        link, 
        img
        // releaseDate,
        // originalPrice,
        // // discountedPrice,
        // link
    };
}

const scrapSteam = async () => {
    const steamUrl =
        "https://www.prothomalo.com/";

    const html = await fethHtml(steamUrl);
    const selector = cheerio.load(html);
    // console.log(html)

    const searchResults = selector("body")
        .find(".container > #container > div > div > div > div > div > div  > div > div a");

    console.log(searchResults.length)
    list = [];
    // searchResults.toArray.forEach(element => {
    //     list.push(element);
    //     console.log(element)
    // });
    const deals = searchResults.map((idx, el) => {
        // console.log(el.parent())      
        const elementSelector = selector(el.parent);
        return extractDeal(elementSelector)
    })
        .get();

    
        // console.log(deals);

    return deals;
};

// module.exports = scrapSteam;
scrapSteam();
