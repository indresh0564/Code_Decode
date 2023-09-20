var data1 = [
	{
		domain: { x: [0, 1], y: [0, 1] },
		value: 1.86,
		title: { text: "Current ratio:" },
		type: "indicator",
		mode: "gauge+number"
	}
];


var layout1 = { width: 300, height: 300, margin: { t: 0, b: 0 } };
Plotly.newPlot('myDiv1', data1, layout1);
Plotly.newPlot('myDiv2', data1, layout1);
Plotly.newPlot('myDiv3', data1, layout1);
Plotly.newPlot('myDiv4', data1, layout1);
const xArray = ["Current","1-30","31-40","41-50","51-60"];
const y1Array =  [2.9, 2, 1, 1.5, 1,0.5];
const y2Array = [1.6, 1.1, 0.2, 1.5, 0.2,0.1];
const data2 = [{
  x: xArray,
  y: y1Array,
  type: "bar",
  orientation:"v",
  marker: {color:"rgba(0,0,255)"},
},
{
  x: xArray,
  y: y2Array,
  type: "bar",
  orientation:"v",
  marker: {color:"rgba(0,0,255)"}
  
}];

const layout2 = {title:"Total account receivables and payables"};

Plotly.newPlot("myPlot", data2, layout2);
const x3Array = [1,2,3,4,5,6,7,8,9,10,11];
const y3Array = [37,239,248,55,203,199,500,700,500,300,500];
const y4Array = [37,39,248,255,203,199,300,400,500,600,700];
// Define Data
const data3 = [{
  x: x3Array,
  y: y3Array,
  mode: "lines",
  type: "scatter"
},
{
  x: x3Array,
  y: y4Array,
  mode: "lines",
  type: "scatter"
}];

// Define Layout
const layout3 = {
  xaxis: {range: [1, 12], title1: "Net working Capital",title2: "Net working Capital"},
  yaxis: {range: [-300, 700], title: "Volume"},
  title: "Net Working Capital vs Gross Working Capital"
};
Plotly.newPlot("myChart", data3, layout3);
// Get the drawing context on the canvas
var myContext = document.getElementById(
  "stackedChartID").getContext('2d');
var myChart = new Chart(myContext, {
  type: 'bar',
  data: {
      labels: ["jan", "Feb", "March", 
          "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [{
          label: 'worst',
          backgroundColor: "blue",
          data: [17, 16, 4, 11, 8, 9, 5, 8, 2, 10, 6, 12],
      }, {
          label: 'Okay', 
          backgroundColor: "green",
          data: [4, 2, 10, 6, 12, 6, 4, 8, 7, 4 ,9, 16],
      }, {
          label: 'bad',
          backgroundColor: "red",
          data: [2, 11, 13, 3, 14, 7, 4 ,9, 16, 4, 11, 8],
      }],
  },
  options: {
      plugins: {
          title: {
              display: true,
              text: 'Stacked Bar chart for pollution status'
          },
      },
      scales: {
          x: {
              stacked: true,
          },
          y: {
              stacked: true
          }
      }
  }
});