let firstName = prompt ("ჩაწერეთ თქვენი სახელი") ;

let lastName = prompt ("ჩაწერეთ თქვენი გვარი") ;

let birthYear = prompt ("ჩაწერეთ თქვენი დაბადების წელი") ;

let yourAddress = prompt ("ჩაწერეთ თქვენი საცხოვრებელი ადგილი") ;

const presentYear = 2023;

let userAge = presentYear - birthYear ;

alert("გამარჯობა," + firstName + " " + lastName + " " + "! მიხარია, რომ უკვე" + userAge + "ხარ და" + yourAddress + "-ში ცხოვრობ.");