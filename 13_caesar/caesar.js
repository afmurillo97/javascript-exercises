const caesar = function(string, factor) {
    let result = ''; 
    const minus = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
                     'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const mayus = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
                     'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const rest = [' ', ',', '.', '!'];
    
    for (let i = 0; i < string.length; i++){
       for (let pos in mayus){
           if (string[i] === mayus[pos]){
               let total = parseInt(pos) + factor;
               if (total > 0){
                    while (total >= 26){
                        total -= 26
                    }
                    result += mayus[total];
                } else {
                    while (total < 0){
                        total += 26
                    }
                    result += mayus[total];
                }
           } else if (string[i] === minus[pos]){
                let total = parseInt(pos) + factor;
                if (total > 0){
                    while (total >= 26){
                        total -= 26
                    }
                    result += minus[total];
                } else {
                    while (total < 0){
                        total += 26
                    }
                    result += minus[total];
                }
           } else if (string[i] === rest[pos]){
               result += rest[pos];
           }; 
       };
    };
    return result;
};

// Do not edit below this line
module.exports = caesar;