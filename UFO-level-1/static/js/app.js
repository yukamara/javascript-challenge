// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

function generateTable(tableData) {
    tbody.html("")
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
}

// Adding Event Listener
function filterTable() {
    // alert("testing")

    // Define filterData as the whole table
    var filterData = tableData

    // select the input element and get the raw html node
    var inputElement = d3.select("#datetime");

    // get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);

    // to do: filter table data array based on user input
    filterData = filterData.filter(row => row.datetime = inputValue);

    generateTable(filterData)
}

// Use "click" even to filter table after inputing value and then clicking
d3.select("#filter-btn")
    .on("click", filterTable);

// Use "change" event to filter table without clicking
d3.select("input")
    .on("change", filterTable);
// Calling the function to generate the table
generateTable(tableData)