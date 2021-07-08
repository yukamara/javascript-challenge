// // from data.js
// var tableData = data;

// // YOUR CODE HERE!
// var tbody = d3.select("tbody");

// // select each object ib the array of objects
// tableData.forEach(ufoInfo => {
//     // append it to the table row
//     var row = tbody.append("tr");
//     // take each entry in the object containing key-value pairs
//     Object.entries(ufoInfo).forEach(([key, value]) => {
//         // append each value to the cell below its corrresponding key label
//         var cell = row.append("td");
//         cell.text(value);
//     });
// });