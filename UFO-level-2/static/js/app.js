// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select('tbody');

// Loop Through `data` report object
data.forEach(report => {
    // Use d3 to append one table row `tr` for each report object
    var row = tbody.append("tr");
    // Use `Object.entries` for each report value
    Object.entries(report).forEach(([key, value])=>{
    // Use d3 to append 1 cell per report value (date, city, state, country, shape, duration and comments)
    var cell = row.append("td");
    cell.text(value);
    });
});


// Select the button
var button = d3.select("#filter-btn");

// Create event handlers 
button.on("click", runEnter);

// Complete the event handler function for the form
function runEnter() {
// Select the input elements and get the raw HTML node
var inputDate = d3.select("#datetime").property("value");
var inputCity = d3.select("#city").property("value");
var inputState = d3.select("#state").property("value");
var inputCountry = d3.select("#country").property("value");
var inputShape = d3.select("#shape").property("value");

tbody.html("");

filteredData = tableData;
// using if condition and filter to create a new table by new input data
if (inputDate) {filteredData = filteredData.filter(report => report.datetime === inputDate);}
if (inputCity) {filteredData = filteredData.filter(report => report.city === inputCity);}
if (inputState) {filteredData = filteredData.filter(report => report.state === inputState);}
if (inputCountry) {filteredData = filteredData.filter(report => report.country === inputCountry);}
if (inputShape) {filteredData = filteredData.filter(report => report.shape === inputShape);}


filteredData.forEach((filDt) => {
    var row = tbody.append("tr");
    Object.entries(filDt).forEach(([key, value])=>{
        var cell = row.append("td");
        cell.text(value);
    });
  });
};