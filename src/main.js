//var axios = require("axios'");

var i = 0;

function test(){
    i++;
    console.log("Counting :"+i);
    //setTimeout(test,500);
}

var unique = require('uniq');

var data = [1, 2, 2, 3, 4, 5, 5, 5, 6];

console.log(unique(data));

test();