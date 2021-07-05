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

document.getElementById("datetime").addEventListener("date", function () {
    table = document.getElementById("ufo-table");
    tr = table.querySelector("tbody").getElementsByTagName("tr");
    for (var i = 0; i < tr.length; i++) {
        if (tr[i].getElementsByTagName("td")[0].innertext.indexOf("date") > -1) {
            tr[i].classList.remove()
        } else {
            tr[i].classList.add()
        }
    }
})

document.getElementById("filter-btn").addEventListener("click", function () {
    table = document.getElementById("ufo-table");
    tr = table.querySelector("tbody").getElementsByTagName("tr");
    for (var i = 0; i < tr.length; i++) {
        if (tr[i].getElementsByTagName("td")[0].innertext.indexOf("date") > -1) {
            tr[i].classList.remove()
        } else {
            tr[i].classList.add()
        }
    }
})

// function handleClick() {
//     d3.select('body')
//         .append('h3')
//         .text('Today is a great day for learning d3.js!!');
// }
// d3.select('filter-btn')
//     .on('click', handleClick);