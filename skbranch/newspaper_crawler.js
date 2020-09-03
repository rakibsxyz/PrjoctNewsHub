const request = require('request');
const cheerio = require('cheerio');
const axios = require('axios');
fs = require('fs');
var options = {
  headers: {'user-agent': 'stachoverflow'}
}

request('https://www.prothomalo.com/world', options, (error, response, html) => {
  if (!error) {
    const $ = cheerio.load(html);
    
    fs.writeFile('helloworld.html', html, function (err) {
      if (err) return console.log(err);
    });
    $('.custom-story-card-2.first-story.customStoryCard2-m__base__3BIpY.customStoryCard2-m__bn-base__18fYj .image-view')
    .find('div > a > div > figure > picture > img').each(function(index,element){
      console.log($(element).attr('src'));
    })
  }
});


axios.get('https://www.prothomalo.com/world')
  .then(function (response) {
    // handle success
    console.log(response);
    fs.writeFile('helloworld.html', response.data, function (err) {
      if (err) return console.log(err);
    });
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });


// var dailyNewshighlightDetails;
// var dailyNewshighlightLink;
// var dailyNewshighlightText;
// var dailyNewshighlightPara;
// var dailyNewshighlightPicture;
// var lastestNews = [];

// request('https://www.thedailystar.net/world', { insecureHTTPParser: true }, (error, response, html) => {
//   if (!error) {
//     const $ = cheerio.load(html);


//     $('.highlight-feature, .margin-bottom-big').find('a > picture >img').each(function (index, element) {
//       dailyNewshighlightPicture = $(element).attr('data-srcset');
//     });

//     $('.highlight-text').find('h2 > a').each(function (index, element) {
//       dailyNewshighlightLink = $(element).attr('href');
//       dailyNewshighlightText = $(element).text();
//     })
//     $('.highlight-text').find('p').each(function (index, element) {
//       dailyNewshighlightPara = $(element).text();
//     })

//     dailyNewshighlightDetails = {
//       picture: dailyNewshighlightPicture,
//       link: dailyNewshighlightLink,
//       text: dailyNewshighlightText,
//       para: dailyNewshighlightPara
//     }

//     $('.list-border, .list-border-dotted,.margin-bottom-big').find('li > h5 > a').each(function (index, element) {
//       var temp = { link: $(element).attr('href'), text: $(element).text() };
//       lastestNews.push(temp);
//     });
//      console.log({ highLight: dailyNewshighlightDetails, lastest: lastestNews })
//   }
//   else{
//     console.log(error);
//   }
// })
