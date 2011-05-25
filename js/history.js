
google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart);

function drawChart() {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Year');
  data.addColumn('number', 'Expenses');
  data.addRows(4);
  data.setValue(0, 0, '2004');
  data.setValue(0, 1, 1000);
  data.setValue(1, 0, '2005');
  data.setValue(1, 1, 1170);
  data.setValue(2, 0, '2006');
  data.setValue(2, 1, 660);
  data.setValue(3, 0, '2007');
  data.setValue(3, 1, 1030);

  var chart = new google.visualization.LineChart(document.getElementById('historyChart'));
  chart.draw(data, {width: 950, height: 150, min: 300, max: 1400, pointSize:0, title: '', legend: 'none'});
}