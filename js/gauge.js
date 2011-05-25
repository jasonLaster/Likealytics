google.load('visualization', '1', {packages:['gauge']});
google.setOnLoadCallback(drawChart);

function drawChart() {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Label');
  data.addColumn('number', 'Value');
  data.addRows(1);
  data.setValue(0, 0, 'Likitude');
  data.setValue(0, 1, 80);

  var chart = new google.visualization.Gauge(document.getElementById('gaugeChart'));
  chart.draw(data, {width: 400, height: 150, redFrom: 90, redTo: 100, yellowFrom:75, yellowTo: 90, minorTicks: 5});
}
