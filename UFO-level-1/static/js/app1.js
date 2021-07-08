// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

// select each object ib the array of objects
tableData.forEach(ufoInfo => {
    // append it to the table row
    var row = tbody.append("tr");
    // take each entry in the object containing key-value pairs
    Object.entries(ufoInfo).forEach(([key, value]) => {
        // append each value to the cell below its corrresponding key label
        var cell = row.append("td");
        cell.text(value);
    });
});



// Select the button
function handleClick() {
    tbody.html("");

    // Select the input date get the raw HTML nodes
    var inputElement = d3.select("#datetime");
    // Get the value property of the input date, state, shape
    var inputValue = inputElement.property("value");
    // console.log input value
    console.log(inputValue);
    // Filter Data with datetime equal to input value
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
    // console.log filter values
    console.log(filteredData);


    filteredData.forEach(function(selections) {

    console.log(selections);
    // Append one table row `tr` for each UFO Sighting object
    var row = tbody.append("tr");
    // Use `Object.entries` to console.log each UFO Sighting value
    Object.entries(selections).forEach(function([key, value]) {
        console.log(key, value);
        // Append a cell to the row for each value
        var cell = row.append("td");
        cell.text(value);
    });
});

d3.select("filter-btn")
.on("click", handleClick);






// document.getElementById("datetime").addEventListener("date", function () {
//     table = document.getElementById("ufo-table");
//     tr = table.querySelector("tbody").getElementsByTagName("tr");
//     for (var i = 0; i < tr.length; i++) {
//         if (tr[i].getElementsByTagName("td")[0].innertext.indexOf("text") > -1) {
//             tr[i].classList.remove()
//         } else {
//             tr[i].classList.add()
//         }
//     }
// })

// document.getElementById("filter-btn").addEventListener("click", function () {
//     table = document.getElementById("ufo-table");
//     tr = table.querySelector("tbody").getElementsByTagName("tr");
//     for (var i = 0; i < tr.length; i++) {
//         if (tr[i].getElementsByTagName("td")[0].innertext.indexOf("text") > -1) {
//             tr[i].classList.remove()
//         } else {
//             tr[i].classList.add()
//         }
//     }
// })

``
// function enterDate() {
//     table = document.getElementById("ufo-table");
//     tr = table.querySelector("tbody").getElementsByTagName("tr");
//     for (var i = 0; i < tr.length; i++) {
//         if (tr[i].getElementsByTagName("td")[0].innertext.indexOf("text") > -1) {
//             tr[i].classList.remove()
//         } else {
//             tr[i].classList.add()
//         }
//     };


// function filterTable() {
//     table = document.getElementById("ufo-table");
//     tr = table.querySelector("tbody").getElementsByTagName("tr");
//     for (var i = 0; i < tr.length; i++) {
//         if (tr[i].getElementsByTagName("td")[0].innertext.indexOf("text") > -1) {
//             tr[i].classList.remove()
//         } else {
//             tr[i].classList.add()
//         }
//     };

// d3.select("filter-btn")
//     .on("click" filterTable);


// function handleClick() {
//     d3.select('body')
//         .append('h3')
//         .text('Today is a great day for learning d3.js!!');
// }
// d3.select('filter-btn')
//     .on('click', handleClick);