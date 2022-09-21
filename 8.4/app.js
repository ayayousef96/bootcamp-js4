const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];
function count_letters_arr(arr){
    let letters=new Object();
    for(i=0;i<arr.length;i++){
        let c=arr[i].toLowerCase();
        for(j=0;j<c.length;j++){
            letters[c.charAt(j)]=0;
        }
    }
    for(i=0;i<arr.length;i++){
        let c=arr[i].toLowerCase();
        for(j=0;j<c.length;j++){
            letters[c.charAt(j)]++;
        }
    }
    delete letters[' '];

    return letters;
}

let result = count_letters_arr(array);
console.log(result);