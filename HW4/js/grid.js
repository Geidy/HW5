function  createTable() {
    var rowCount = parseInt(document.getElementById('row-count').value, 10);
    var colCount = parseInt(document.getElementById('col-count').value, 10);
    var table = document.getElementById('myTable');
    for (var r = 0; r < rowCount; r++) {
      var row = table.insertRow(r);
      for (var c = 0; c < colCount; c++) {
        var cell = row.insertCell(c)
        cell.textContent = "Row" + r + " Col" + c;
      }
    }
  }