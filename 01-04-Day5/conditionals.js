// let age = ;

function bouncer(patron) {
  if (patron > 75) return "Are you sure you want to be here?";
  else if (patron > 21) return "Come on in!";
  if (patron >= 18 && patron <= 21) return "Come on in (but no drinking)!";
  else return "You're too young to be in here!";
}

console.log(bouncer(80));
console.log(bouncer(1));
console.log(bouncer(20));
console.log(bouncer(30));
console.log(bouncer(100));
