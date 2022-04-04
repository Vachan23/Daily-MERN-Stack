function pos_change(a){
  len_a = a.length;
  if (a.length<=1) {
    return a;
  }
  middle_char = a.substring(1, len_a-1);
  return (a.charAt(len_a-1) + middle_char + a.charAt(0));
}

console.log(pos_change('a'));
console.log(pos_change('vachan'));
console.log(pos_change('abhi'));
console.log(pos_change('james'));
