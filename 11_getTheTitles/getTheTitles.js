const getTheTitles = function(object) {
    let result = [];
    for (let i = 0; i < object.length; i++) {
        result.push(object[i].title);
    };
    return result;
    // return the authors of all books
    // let result = [];
    // for (let i = 0; i < author.length; i++) {
    //     result.push(object[i].author);
    // }
    // return result;
};

// Do not edit below this line
module.exports = getTheTitles;
