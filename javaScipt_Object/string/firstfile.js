// Create String using Literals

var str = "You are self learning..";
console.log('Create String using Literals : ' + str);

// create String using new keywords

var str_new = new String('Hello, everyone i am speaking');
console.log(str_new);

var str3 = "Hello i'm learning javascript. Javascipt is a scripting language.";
console.log("check if 'javascript' exist in str3 : " + str3.search('javascript'));

/* match() */ 
console.log("match if 'java' exist in str3 : " + str3.match('java'));
console.log("match if 'Language' exist in str3 : " + str3.match('Language'));
console.log("match if 'Language' exist in str3 : " + str3.match(/Language/i));

/* indexOf() */ 
console.log("checking the 'y' in str_new : " + str_new.indexOf('y'));

/* lastIndexOf() */ 
var str_repetetion = "hello hello";
console.log("checking the 'y' in str_repetetion using lastIndexOf() : " + str_repetetion.lastIndexOf('h'));