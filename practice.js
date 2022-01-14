var person = {  // object
    name: 'salman', // key: value  ---> key is property and value is value
    age: 30,
    city: "chennai",
    country: {
        pincode:600121
    }
}
// console.log(person.city.area.street) // type error: cannot read property 'street' of undefined

//=========================

const salman = {};

// faulty values are undefined, null, 0, '', NaN  ----> falsy values return false
// truthy values are 1, 'somestring', [], {}, function(){}  ----> truthy values return true
if (salman){
    console.log("true statement")
} else {
    console.log("false statement")
}


// =========================

//logical operators --> 
// && --> and
// || --> or
// ! --> not


// && --> returns true both are true  eg: true && true = true
// || --> returns true even if one is true eg: true || true = true, true || false = true, false || false = false
//  ! --> returns true if false or vice versa  eg:  --->  !true ===> false , !false ===> true

//=========================

//   if (true / false){   ----> comparators or logical operators or data types
//       // executes if true
//   } else {
//       //executes if false
//   }


//=========================