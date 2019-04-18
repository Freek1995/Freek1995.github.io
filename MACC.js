var marginmacc = { topmacc: 20, rightmacc: 20, bottommacc: 30, leftmacc: 40 },
widthmacc  = 960 - marginmacc.leftmacc - marginmacc.rightmacc,
heightmacc = 550 - marginmacc.topmacc - marginmacc.bottommacc;

// Add the visualization svg canvas to the vis-container <div>
var canvas = d3.select("#scatterplot").append("svg")
.attr("width",  widthmacc  + marginmacc.leftmacc + marginmacc.rightmacc)
.attr("height", heightmacc + marginmacc.topmacc  + marginmacc.bottommacc)
.append("g")
.attr("transform", "translate(" + marginmacc.leftmacc + "," + marginmacc.topmacc + ")");

// Define our scales
var colorScale = d3.scale.category10();

var xScale = d3.scale.linear()
.range([0, widthmacc]);

var yScale = d3.scale.linear()
.range([heightmacc, 0]); // flip order because y-axis origin is upper LEFT

// Define our axes
var xAxisMacc = d3.svg.axis()
.scale(xScale)
.orient('bottom');

var yAxisMAcc = d3.svg.axis()
.scale(yScale)
.orient('left');
d3.csv('YFacMacc.csv', function loadCallback(error, data) {
    data.forEach(function(d) { // convert strings to numbers
        d.yvalues = +d.yvalues;
        d.maccvalues = +d.maccvalues;
        dataset2 = data;
        checkboxdata2 = data;
    });
    
    makescatterplot(dataset2);
});

function changedataset2() {
    new_data2 = JSON.parse(JSON.stringify(dataset2));
    makescatterplot(new_data2)
    
}

var makescatterplot = function(data) {
    canvas.selectAll('g').remove()
    canvas.selectAll('.dot').remove()
    canvas.selectAll('.labels').remove()
    canvas.selectAll('div').remove()
  // Common pattern for defining vis size and margins
  yScale.domain([ d3.min(data, function(d) { return d.yvalues; }) - 1,
    d3.max(data, function(d) { return d.yvalues; }) + 1 ])

  xScale.domain([ d3.min(data, function(d) { return d.maccvalues; }) - 1,
    d3.max(data, function(d) { return d.maccvalues; }) + 1 ])

  // Add x-axis to the canvas
  canvas.append("g")
      .attr("class", "axis")
      .attr("transform", "translate(0," + heightmacc + ")") // move axis to the bottom of the canvas
      .call(xAxisMacc)
    .append("text")
      .attr("class", "label")
      .attr("x", widthmacc) // x-offset from the xAxis, move label all the way to the right
      .attr("y", -6)    // y-offset from the xAxis, moves text UPWARD!
      .style("text-anchor", "end") // right-justify text
      .text("Abatement cost [€/tCO2eq]");

  // Add y-axis to the canvas   
  canvas.append("g")
      .attr("class", "axis") // .orient('left') took care of axis positioning for us
      .attr("transform", "translate(" + xScale(0) + ",0)")
      .call(yAxisMAcc)
    .append("text")
      .attr("class", "label")
      .attr("transform", "rotate(-90)") // although axis is rotated, text is not
      .attr("y", 15) // y-offset from yAxis, moves text to the RIGHT because it's rotated, and positive y is DOWN
      .style("text-anchor", "end")
      .text("Y-values");

  // Add the tooltip container to the vis container
  // it's invisible and its position/contents are defined during mouseover
  var tooltip = d3.select("#scatterplot").append("div")
      .attr("class", "tooltip")
      .style("opacity", 1); 

  // tooltip mouseover event handler
  var tipMouseover = function(d) {
    d3.select(this).style("cursor", "help"); 
      var infoMACC  = "<span style='color:red;font-size:16px"  + ";'>" +d.numbers + " : " + d.technology + "</span><br/>" +
                      "<span style='font-size:16px" + ";'>" + "Y-value: " + "<b>" + d.yvalues +"</b>"+ "</span><br/>" + 
                      "<span style='font-size:16px" + ";'>" + "Abatement Costs: " + "<b>" + d.maccvalues + "</b>" + " €/tCO2eq" + "</span>";

      tooltip.html(infoMACC)
          .style("top", 30+"px")
          .style("left",50+"px")
        .transition()
          .duration(200) // ms
          .style("opacity", .9) // started as 0!   
           
        
      
  };
  // tooltip mouseout event handler
  var tipMouseout = function(d) {
      tooltip.transition()
          .duration(300) // ms
          .style("opacity", 0); // don't care about position!
  };

  // Add data points!
  canvas.selectAll(".dot")
    .data(data)
  .enter().append("circle")
    .attr("class", "dot")
    .attr("r", 5.5) // radius size, could map to another data dimension
    .attr("cx", function(d) { return xScale( d.maccvalues ); })     // x position
    .attr("cy", function(d) { return yScale( d.yvalues ); })  // y position
    .style("fill", "#9fbfdf")
    .on("mouseover", tipMouseover)
    .on("mouseout", tipMouseout)

canvas.selectAll("labels")
    .data(data)
.enter().append("text")
    .attr("class","labels")
    .attr("x", function(d) { return xScale(d.maccvalues); })
    .attr("y", function(d) { return yScale(d.yvalues); })
    .style("fill", "red")
    .on("mouseover", tipMouseover)
    .on("mouseout", tipMouseout)
    .text(function(d){return d.numbers;});
};

var checkboxes=document.querySelectorAll("input[type=checkbox]")
var submit = document.getElementById("submit")

// creating a filtered array based on the checked checkboxes
function getchecked() {   
  var checked =[];
  for (var i=0; i< checkboxes.length; i++){
    var checkbox = checkboxes[i]
    if (checkbox.checked) checked.push(checkbox.value);
  }
  return checked;
}
submit.addEventListener("click", function(){
  dataset2 = checkboxdata2
  var checked = getchecked();
  dataset2 = dataset2.filter(function(e){
      return checked.indexOf(e.technology) !== -1;
  })
  changedataset2()  
})
