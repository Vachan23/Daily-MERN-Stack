// 1
// let cities = ['Bengaluru', 'Pune', 'Mumbai'];
// console.log(cities.length);

// 2
// const upper = (string) => result = string.charAt(0).toUpperCase() + string.slice(1);
// console.log(upper('vachan'));

// // 3
// const concatString = (s1, s2) => result = s1.concat(s2);
// console.log(concatString('vachan','rannore'));

// let arr = [1,2,3,4];
// n = [5,6];
// for (i=0;i<arr.length;i++){
//     n = n.concat(arr[i])
// }
// console.log(n);



// 4
// let wrongName = 'vchan';
// missedLetter = 'a';
// console.log(wrongName.slice(0,1) + missedLetter + wrongName.slice(1));


// 5 
// let string = 'vachanrannore';
// let n = 2;
// let arr = [];
// let j = 0;
// for(i=0; i<string.length; i= i+n){
//     arr[j] = string.slice(i,i+n);
//     j++;
// }
// console.log(arr);


// 6 (incomplete)
// let str = 'vachanrannorechan';
// // substring = 'cha';
// l = str.length;
// count = 0
// for(i=0; i<l; i++){
//     for(j=0; j<substring.length; j++){
//         if(substring[j]==str[i]){
//             count+=1;
//         }
//     }
// }
// console.log(count);


// 7

// const repeatString = (string, n) => r = string.repeat(n);
// console.log(repeatString('vachan', 2));


// 8
// const partOfString = (string, char) => {
//     index = string.indexOf(char);
//     new_string = string.slice(index);
//     return new_string;
// }

// console.log(partOfString('vachanrannore', 'r'));


// 9
// let string = 'the bike is very nice. the car is very nice';
// search_string = 'the';
// const firstOccurance = (string, search_string) => {
//     index_of_search_string = (string.indexOf(search_string));
//     return string.slice(0, index_of_search_string) + string.slice(index_of_search_string + search_string.length);
// }
// console.log(firstOccurance(string, search_string));


// 10
const searchWord = (text, word) => {
    var x = 0, y=0;
    for (i=0;i< text.length;i++)
        {
        if(text[i] == word[0])
            {
            for(j=i;j< i+word.length;j++)
               {
                if(text[j]==word[j-i])
                  {
                    y++;
                  }
                if (y==word.length){
                    x++;
                }
            }
            y=0;
        }
    }
   return x;
}

let string = 'the bike is very nice. the car is very nice';
search_string = 'the';
console.log(searchWord(string, search_string));