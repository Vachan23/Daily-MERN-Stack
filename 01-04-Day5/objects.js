// 1

var student = {
    name : "Jocob",
    sclass : "VI",
    rollno : 12 };

console.log(student.name);
console.log(student.sclass);
console.log(student.rollno);
console.log(student);

delete student.rollno;
console.log(student);

console.log(Object.keys(student).length);


// 2

var library = [{
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true
    }]
    for (var i = 0; i < library.length; i++) 
       {
        var book = " " ;
        if (library[i].readingStatus) {
          console.log("True" + book);
        } else
        {
         console.log("You still need to read " + book);
        }
       }