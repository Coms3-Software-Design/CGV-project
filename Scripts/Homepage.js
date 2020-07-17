
let post = "posts";
let user = "1814732";
/*
 * The 4 lines below gets information from the server
 * We set the url and the array of categories
 */
const  url = 'https://lamp.ms.wits.ac.za/~s1814731/MPphpfiles/categories/categories.php';
let goodsArray;

let categories = function() {
    $.getJSON(url, function (result) {
        goodsArray = result;
        for (let i = 0; i < goodsArray.length; i++) {
            console.log(goodsArray[i].Category);
        }
    });
};

categories();