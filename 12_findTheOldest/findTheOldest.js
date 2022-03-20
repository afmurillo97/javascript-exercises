const findTheOldest = function(object) {
    let result = 0;
    let major = 0;
    let res = object[0];
    let live = '';
    const d = new Date();
     for (let i = 0; i < object.length; i++) {
        live = typeof object[i].yearOfDeath
        if (live === 'undefined'){
            result = d.getFullYear() - object[i].yearOfBirth
            if (major < result){
                major = result;
                res = object[i]
            }
        }
        result = object[i].yearOfDeath - object[i].yearOfBirth
        if (major < result){
            major = result;
            res = object[i]
        }
    }
    return res
};

// Do not edit below this line
module.exports = findTheOldest;
