const concatString = (string) => {
    return string.concat('!');
}

const result = (concat) => {
    console.log(concat('Hello'));
}

result(concatString);