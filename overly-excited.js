
var walrusPhrase = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];
var thaPhrase = ["This", "is", "a", "phrase","made", "of", "words", "that", "I", "came","up", "with", "while", "watching","Bob's", "Burgers","coding", "4", "Lyfe"]
// 
let addExcitement =  (sentence,q) =>{ 
    sen = ""
    exp = ""
    for(i=0;i<sentence.length;i++){
        sen += " "
        sen += sentence[i]
        test = ((i+1)%3)

        if (test === 0 && i!= 0){
            sen += exp + q;     
            exp += q     
        }

        
        console.log(sen);
        
    }
}

addExcitement(walrusPhrase, "?");
addExcitement(thaPhrase, "#")


