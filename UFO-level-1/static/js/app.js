// from data.js
var tableData = data;

// Get a reference to the table body
var	tbody = d3.select('tbody');

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

// Select the input element and get the raw HTML node
var inputElement = d3.select("#datetime");

// Get the value property of the input element
var inputValue = inputElement.property("value");
tbody.html("");

// using filter to create aa new table by new input date
var filteredData = tableData.filter(data => data.datetime === inputValue);
filteredData.forEach(filDt => {
	var row = tbody.append("tr");
	Object.entries(filDt).forEach(([key, value])=>{
		var cell = row.append("td");
		cell.text(value);
	});
  });
};




