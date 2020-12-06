function tabulate(data, columns) {
	var tbody = d3.select('body').append('tbody');

	// create a row for each object in the data
	var rows = tbody.selectAll('tr')
	  .data(data)
	  .enter()
	  .append('tr');

	// create a cell in each row for each column
	var cells = rows.selectAll('td')
	  .data(function (row) {
	    return columns.map(function (column) {
	      return {column: column, value: row[column]};
	    });
	  })
	  .enter()
	  .append('td')
	    .text(function (d) { return d.value; });

  return table;
}

// render the tables
tabulate(data, ['datetime', 'city', 'state', 'country', 'shape', 'comments']); // 2 column table
tabulate(data, ['datetime']); // table with only date column
tabulate(data, ['city']); // table with only close column
tabulate(data, ['state']); // table with only date column
tabulate(data, ['country']); // table with only date column
tabulate(data, ['shape']); // table with only date column
tabulate(data, ['comments']); // table with only date column