var personalName = "Sidra Fatima";
console.log(personalName.toLowerCase());
console.log(personalName.toUpperCase());
console.log(personalName.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
