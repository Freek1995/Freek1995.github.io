//setting the axis and rectangles for bar chart 12-factor scale

var margin = {top: 50, right: 30, bottom: 240, left: 170},
    width = 1070 - margin.left - margin.right,
    height = 450 - margin.top - margin.bottom;

var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], .1);

var y = d3.scale.linear()
    .rangeRound([height, 0]);

var color = d3.scale.ordinal()
    .range(["#485b6e","#6c7b8b","#919ca8","#63822f","#8EBA43","#b0cf7a","#cbb006", "#F9DC24","#fbe86e","#cd6216","#EB8A44","#f2b589",'red']);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("right")
    .tickFormat(d3.format(".2s"));

var svg = d3.select("#barchart_factor").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var div_tooltip_fac = d3.select("#tooltipholder_fac").append("div")
  .attr("class", "tooltip_fac")
  .style("opacity", 0)
  .attr("align","left")

var abatement_option = d3.select("#options_holder").append("div")
var checkbox_holder = d3.select("#checkboxholder")

// Load the needed files
queue()
  .defer(d3.tsv, "factor_data.txt") 
  .await(parsedataset)


function parsedataset(error, data) {
  color.domain(d3.keys(data[0]).filter(function(key) { return key !== "technology" && key !=="label" && key !=="info" && key !=="barrier" && key !=="maccvalues" && key !=="potential"; }));

  data.forEach(function(d) {
// console.log(color.domain())
    var mytech = d.technology; //add to stock code
    var y0 = 0;
    d['costs'] = parseFloat(d['A1'])+parseFloat(d['A2'])+parseFloat(d['A3'])
    d['multiactor'] = parseFloat(d['B1'])+parseFloat(d['B2'])+parseFloat(d['B3'])
    d['physical'] = parseFloat(d['C1'])+parseFloat(d['C2'])+parseFloat(d['C3'])
    d['behavior'] = parseFloat(d['D1'])+parseFloat(d['D2'])+parseFloat(d['D3'])

    d.factors = color.domain().map(function(name) { return {mytech:mytech, name: name, y0: y0, y1: y0 += +d[name]}; });
    d.total = d.factors[d.factors.length - 1].y1;
    dataset = data
    checkboxdata = data
  });
  // console.log(data)
  makeBarChart(dataset); //12-factorbarchart
  makecheckbox(dataset);
};

// this function initiates when checkboxes are submitted or weights are changed
function changedataset() {
  new_data = JSON.parse(JSON.stringify(dataset));

// adding weights to the factors
  new_data.forEach(function(d){
    d['technology'] = d['technology']

    d['A1'] = d['A1'] * A1_weight
    d['A2'] = d['A2'] * A2_weight
    d['A3'] = d['A3'] * A3_weight
    d['B1'] = d['B1'] * B1_weight
    d['B2'] = d['B2'] * B2_weight
    d['B3'] = d['B3'] * B3_weight
    d['C1'] = d['C1'] * C1_weight
    d['C2'] = d['C2'] * C2_weight
    d['C3'] = d['C3'] * C3_weight
    d['D1'] = d['D1'] * D1_weight
    d['D2'] = d['D2'] * D2_weight
    d['D3'] = d['D3'] * D3_weight

    var mytech = d.technology; //add to stock code
    var y0 = 0;

    d.factors = color.domain().map(function(name) { return {mytech:mytech, name: name, y0: y0, y1: y0 += +d[name]}; });
    d.total = d.factors[d.factors.length - 1].y1;
  })

  makeBarChart(new_data)
}

// this function creates the bar chart
function makeBarChart(data) {

  svg.selectAll('g').remove()
  data.sort(function(b, a) { return b.total - a.total; });

// setting the domain of the axes
  x.domain(data.map(function(d) { return d.technology; }));
  y.domain([0, d3.max(data, function(d) { return d.total; })]);


// adding values to the x-axis
  svg.append("g")
      .attr("class", "x axis")
      .attr("id","xaxis")
      .attr("transform", "translate(0," + height + ")")
         .call(xAxis)
    .selectAll("text")
     .attr("y", 0)
    .attr("x", 9  )
    .attr("dy", ".35em")
    .attr("transform", "rotate(90)")
    .style("text-anchor", "start");
    
// adding values to the y-axis
  svg.append("g")
      .attr("class", "y axis")
      .attr("id","yaxis")
      .attr("transform", "translate(" + width + ",0)")
        .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", -6)
      .attr("dy", ".71em")
      .style("text-anchor", "end");

  // svg.append("g")
  //     .attr("class","grid")
  //     .attr("transform","translate(0,"+height +")")
  //     .call(make_y_gridlines()
  //         .tickSize(-height)
  //         .tickFormat("")
  //     )
  
  // svg.append("g")
  //     .attr("class","grid")
  //     .call(make_x_gridlines()
  //         .tickSize(-width)
  //         .tickFormat("")
  //     )

  var technology = svg.selectAll(".technology")
      .data(data)
    .enter().append("g")
   
  technology.selectAll("rect")
      .data(function(d) {
        return d.factors; 
      })
    .enter().append("rect")
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.y1); })
      .attr("x",function(d) { //add to stock code
          return x(d.mytech)
        })
      .attr("height", function(d) { return y(d.y0) - y(d.y1); })
      .style("fill", function(d) { return color(d.name); })
      .transition();

var mouseover_fac = function (d){
  clicklegend_fac(d,data)

  var delta = d.y1- d.y0;
  var info_fac =   "<b>" + d.mytech + "</b>" + " (total: " + totalscore +")" + "<br/>" +
                  "<span style='color:red"  + ";'>" +description+ " : " + "</span>" + scoredescription + " (" + score + ") *"+weight;

    div_tooltip_fac.html(info_fac)
        .style("left", (margin.left+20+"px") )
        .style("top", (40+"px") )
        .style("background","none")
        // .attr("align", "center")
      .transition()
        .duration(200) // ms
        .style("opacity", .9) // started as 0!

};

var  mouseout_fac = function(d) {
    div_tooltip_fac.transition()
      .duration(300) // ms
      .style("opacity", 0); // don't care about position!
};

technology.selectAll("rect")
       .on("mouseover", mouseover_fac)
       .on("mouseout", mouseout_fac)

d3.selectAll('.tick')       
     .attr('className','member')
     .attr('font-size', 11);

// making the ticks clickable        
d3.selectAll("#xaxis")
     .selectAll(".tick")
     .attr('font-size', 11)
     .on("click",clickme)
     .on('mouseover', function(d,i) {
      d3.select(this).transition()
        .ease('cubic-out')
        .duration('200')
        .attr('font-size', 12)
        .attr('fill', 'red')
        .style("cursor","pointer");
    })
    .on('mouseout', function(d,i) {
      d3.select(this).transition()
        .ease('cubic-out')
        .duration('200')
        .attr('font-size', 11)
        .attr('fill', 'black')
        .style("cursor","default");
    });

// get values from dropdown list
var mouseover_legend_fac = function (d){
  var info_legend_fac = "\xa0" + "<b>" + category + "</b>" + "\xa0" + "<br>" +
                        "\xa0" + description + "\xa0"
    div_tooltip_fac.html(info_legend_fac)
        .style("left", 25 + "px")
        .style("top", 40 +"px")
        .style("background","lightgrey")
        .style("border-radius","5px")
        .style("font-size",13)
        .attr("align","left")
        // .style("left", (130) + "px")
        // .style("top", (d3.event.pageY -480) +"px")
      .transition()
        .duration(200) // ms
        .style("opacity", 1) // started as 0!
};

var  mouseout_legend_fac = function(d) {
    div_tooltip_fac.transition()
      .duration(300) // ms
      .style("opacity", 0); // don't care about position!
};

// create a legend
  var legend = svg.selectAll(".legend")
      .data(color.domain().slice().reverse())
    .enter().append("g")
      .attr("transform", function(d, i) { return "translate(0," + i * 12 + ")"; }) 

//adding colors and squares to the legend
  legend.append("rect")
      .attr("x", -160)
      .attr("width", 18)
      .attr("height", 11)
      .style("fill", color)
      .attr("id", function (d, i) {
        return "id" + d.replace(/\s/g, '')
      })
      .on("mouseover", function(d) {
          d3.select(this).style("cursor", "help"); 
        clicklegend_fac(d,data);
        mouseover_legend_fac(d)})
      .on("mouseout", function(d) {
          d3.select(this).style("cursor", "default"); 
        mouseout_legend_fac(d)}
      );

  
// Giving the legend text
  legend.append("text")
      .attr("x", -136 )
      .attr("y", 6)
      .attr("font-size",13)
      .attr("dy", ".35em")
      .style("text-anchor", "begin")
      .text(function(d) { return d;})
      .on("mouseover", function(d) {
          d3.select(this).style("cursor", "help"); 
        clicklegend_fac(d,data);
        mouseover_legend_fac(d)})
      .on("mouseout", function(d) {
          d3.select(this).style("cursor", "default"); 
        mouseout_legend_fac(d)}
      );
    };

// setting the 4-cateogory bar chart axis 
var margin_cat = {top_cat: 50, right_cat: 30, bottom_cat: 240, left_cat: 170},
    width_cat = 1070 - margin_cat.left_cat - margin_cat.right_cat,
    height_cat = 450 - margin_cat.top_cat - margin_cat.bottom_cat;

var x_cat= d3.scale.ordinal()
    .rangeRoundBands([0, width_cat], .1);

var y_cat = d3.scale.linear()
    .rangeRound([height_cat, 0]); 

var color_cat = d3.scale.ordinal()
    .range(["#6c7b8b","#8EBA43", "#F9DC24","#EB8A44"]);

var xAxis_cat = d3.svg.axis()
    .scale(x_cat)
    .orient("bottom");

var yAxis_cat = d3.svg.axis()
    .scale(y_cat)
    .orient("right")
    .tickFormat(d3.format(".2s"));

var svg_cat = d3.select("#barchart_category").append("svg")
    .attr("width", width_cat + margin_cat.left_cat + margin_cat.right_cat)
    .attr("height", height_cat + margin_cat.top_cat + margin_cat.bottom_cat)
  .append("g")
    .attr("transform", "translate(" + margin_cat.left_cat + "," + margin_cat.top_cat + ")");

var div_tooltip_cat = d3.select("#barchart_category").append("div")
  .attr("class", "tooltip_cat")
  .style("opacity", 0)
  .attr("align","left")

// Load the needed files
queue()
  .defer(d3.tsv, "factor_data.txt") 
  .await(parsedataset_cat)


function parsedataset_cat(error, data) {
  data.forEach(function(d) {
   
    d['Behavior'] = parseFloat(d['D1'])+parseFloat(d['D2'])+parseFloat(d['D3'])
    d['Physical Interdependencies'] = parseFloat(d['C1'])+parseFloat(d['C2'])+parseFloat(d['C3'])
    d['Multi-actor Complexity'] = parseFloat(d['B1'])+parseFloat(d['B2'])+parseFloat(d['B3'])
    d['Cost and Financials'] = parseFloat(d['A1'])+parseFloat(d['A2'])+parseFloat(d['A3'])
  }
  )

  color_cat.domain(d3.keys(data[0]).filter(function(key) { return key !==  "technology" && key !== "label" && key !=="barrier" && key !=="info" && key !=="maccvalues" && key !=="potential" && key !=="A1" && key !=="A2" && key !=="A3" && key !=="B1" && key !=="B2" && key !=="B3" && key !=="C1" && key !=="C2" && key !=="C3" && key !=="D1" && key !=="D2" && key !=="D3" ; }));

  data.forEach(function(d) {
    var mytech = d.technology; //add to stock code
    var y0 = 0;
    
    //d.factors = color.domain().map(function(name) { return {name: name, y0: y0, y1: y0 += +d[name]}; });
    d.factors = color_cat.domain().map(function(name) { return {mytech:mytech, name: name, y0: y0, y1: y0 += +d[name]}; });
    d.total = d.factors[d.factors.length - 1].y1;

    dataset = data
    checkboxdata_cat = data
  });
  // console.log(dataset_cat)
  makeBarChart_cat(dataset);
};

function changedataset_cat() {
  new_data = JSON.parse(JSON.stringify(dataset));

  new_data.forEach(function(d){

    d['Behavior'] = parseFloat(d['D1'])+parseFloat(d['D2'])+parseFloat(d['D3'])
    d['Physical Interdependencies'] = parseFloat(d['C1'])+parseFloat(d['C2'])+parseFloat(d['C3'])
    d['Multi-actor Complexity'] = parseFloat(d['B1'])+parseFloat(d['B2'])+parseFloat(d['B3'])
    d['Cost and Financials'] = parseFloat(d['A1'])+parseFloat(d['A2'])+parseFloat(d['A3'])

    d['technology'] = d['technology']
    d['Cost and Financials'] = d['Cost and Financials'] * costs_weight
    d['Physical Interdependencies'] = d['Physical Interdependencies'] * physical_weight
    d['Multi-actor Complexity'] = d['Multi-actor Complexity'] * multiactor_weight
    d['Behavior'] = d['Behavior'] * behavior_weight
    // d['Cost and Financials'] = d['Cost and Financials'] * ((A1_weight + A2_weight + A3_weight)/3)
    // d['Physical Interdependencies'] = d['Physical Interdependencies'] * ((B1_weight + B2_weight + B3_weight)/3)
    // d['Multi-actor Complexity'] = d['Multi-actor Complexity'] * ((C1_weight + C2_weight + C3_weight)/3)
    // d['Behavior'] = d['Behavior'] * ((A1_weight + A2_weight + A3_weight)/3)

    var mytech = d.technology; //add to stock code
    var y0 = 0;

    //d.factors = color.domain().map(function(name) { return {name: name, y0: y0, y1: y0 += +d[name]}; });
    d.factors = color_cat.domain().map(function(name) { return {mytech:mytech, name: name, y0: y0, y1: y0 += +d[name]}; });
    d.total = d.factors[d.factors.length - 1].y1;
  })

  makeBarChart_cat(new_data)
}

function makeBarChart_cat(data) { 

  svg_cat.selectAll('g').remove()


  data.sort(function(b, a) { return b.total - a.total; });
// FUNCTIE HIERONDER MAAKT HET DOMEIN VAN DE X-AS EN DE Y-AS

  x_cat.domain(data.map(function(d) { return d.technology; }));
  y_cat.domain([0, d3.max(data, function(d) { return d.total; })]);


// FUNTIE HIERONDER GEEFT DE X-AS WAARDE
  svg_cat.append("g")
      .attr("class", "x axis")
      .attr("id","xaxis")
      .attr("transform", "translate(0," + height_cat + ")")
         .call(xAxis_cat)
    .selectAll("text")
     .attr("y", 0)
    .attr("x", 9  )
    .attr("dy", ".35em")
    .attr("transform", "rotate(90)")
    .style("text-anchor", "start");
    
// FUNTIE HIERONDER GEEFT DE Y-AS WAARDE
  svg_cat.append("g")
      .attr("class", "y axis")
      .attr("id", "yaxis")
      .attr("transform", "translate(" + width_cat + ",0)")
        .call(yAxis_cat)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end");
      //.text("Population");

  var technology = svg_cat.selectAll(".technology")
      .data(data)
    .enter().append("g")
   
 
      //.attr("transform", function(d) { return "translate(" + x(d.technology) + ",0)"; })

  technology.selectAll("rect")
      .data(function(d) {
        return d.factors; 
      })
    .enter().append("rect")
      .attr("width", x_cat.rangeBand())
      .attr("y", function(d) { return y_cat(d.y1); })
      .attr("x",function(d) { //add to stock code
          return x_cat(d.mytech)
        })
      .attr("height", function(d) { return y_cat(d.y0) - y_cat(d.y1); })
      .style("fill", function(d) { return color_cat(d.name); });

  technology.selectAll("rect")
// FUNCTIE HIERONDER LAAT ZIEN WAT DE WAARDE IS PER RECHTHOEKJE ALS JE ER MET JE MUIS OVERHEEN GAAT

var mouseover_cat = function (d){
  totalscore = parseFloat(Math.round((get_total_of(d.mytech,data)) * 100) / 100).toFixed(1)
  
  var delta = parseFloat(Math.round((d.y1- d.y0) * 100) / 100).toFixed(1);
  var info_cat =   "<b>" + d.mytech + "</b>" + " (total: " + totalscore + ")" +"<br/>" + 
                  "<span style='color:red"  + ";'>" +d.name + " : " + "</span>" + delta;

    div_tooltip_cat.html(info_cat)
        .style("left", (margin_cat.left_cat+20+"px") )
        .style("top", (-10+"px") )
        .style("background","none")
        // .attr("align","center")
      .transition()
        .duration(200) // ms
        .style("opacity", .9) // started as 0!
};

var  mouseout_cat = function(d) {
    div_tooltip_cat.transition()
      .duration(300) // ms
      .style("opacity", 0); // don't care about position!
};

technology.selectAll("rect")
       .on("mouseover", mouseover_cat)
       .on("mouseout", mouseout_cat)
       
d3.selectAll('.tick')       
     .attr('className','member')
     .attr('font-size', 11);

d3.selectAll("#xaxis")
     .selectAll(".tick")
     .on("click",clickme)
     .on('mouseover', function(d,i) {
      d3.select(this).transition()
        .ease('cubic-out')
        .duration('200')
        .attr('font-size', 12)
        .attr('fill', 'red')
        .style("cursor","pointer");
    })
    .on('mouseout', function(d,i) {
      d3.select(this).transition()
        .ease('cubic-out')
        .duration('200')
        .attr('font-size', 11)
        .attr('fill', 'black')
        .style("cursor","default");
    });

var mouseover_legend_cat = function (d){
  var info_legend_cat = "\xa0"+"<b>" + d + "</b>"+ "\xa0"+ "<br/>" +
                        "\xa0"+ subcat1 + "\xa0"+"<br/>" + 
                        "\xa0"+ subcat2 + "\xa0"+"<br/>" +
                        "\xa0"+ subcat3 + "\xa0"+"<br/>";
    div_tooltip_cat.html(info_legend_cat)
        .style("left", 25 + "px")
        .style("top", -60 +"px")
        .style("background","lightgrey")
        .style("border-radius","5px")
        .attr('align','left')
      .transition()
        .duration(200) // ms
        .style("opacity", 1) // started as 0!
};

var  mouseout_legend_fac = function(d) {
    div_tooltip_cat.transition()
      .duration(300) // ms
      .style("opacity", 0); // don't care about position!
};

// FUNCTIE HIERONDER ZORGT ER VOOR DAT ER EEN LEGEND IS
  var legend = svg_cat.selectAll(".legend")
      .data(color_cat.domain().slice().reverse())
    .enter().append("g")
      .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

  //reverse order to match order in which bars are stacked    
    

//FUNCTIE HIERONDER ZORGT ERVOOR DAT DE LEGEND EEN VLAKJE HEEFT
  legend.append("rect")
      .attr("x",-160)
      .attr("width", 18)
      .attr("height", 18)
      .style("fill", color_cat)
      .attr("id", function (d, i) {
        return "id" + d.replace(/\s/g, '');
      })
      .on("mouseover", function(d) {
        d3.select(this).style("cursor", "help"); 
        clicklegend_cat(d);
        mouseover_legend_cat(d)})
      .on("mouseout", function(d) {
        d3.select(this).style("cursor", "default"); 
      mouseout_legend_fac(d)}
      );

// FUNCTIE HIERONDER ZORGT DAT DE LEGEND TEXT HEEFT
  legend.append("text")
      .attr("x", -136)
      .attr("y", 9)
      .attr("font-size",13)
      .attr("dy", ".35em")
      .style("text-anchor", "begin")
      .text(function(d) { return d; })
      .on("mouseover", function(d) {
        d3.select(this).style("cursor", "help"); 
        clicklegend_cat(d);
        mouseover_legend_cat(d)})
      .on("mouseout", function(d) {
        d3.select(this).style("cursor", "default"); 
      mouseout_legend_fac(d)}
      );
};

var marginmacc = { topmacc: 20, rightmacc: 20, bottommacc: 30, leftmacc: 40 },
widthmacc  = 1070 - marginmacc.leftmacc - marginmacc.rightmacc,
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
d3.tsv('factor_data.txt', function parsedataset_macc(error, data) {
    data.forEach(function(d) { // convert strings to numbers
        d.totalmacc = parseFloat(d['A1'])+parseFloat(d['A2'])+parseFloat(d['A3'])+parseFloat(d['B1'])+parseFloat(d['B2'])+parseFloat(d['B3'])+parseFloat(d['C1'])+parseFloat(d['C2'])+parseFloat(d['C3'])+parseFloat(d['D1'])+parseFloat(d['D2'])+parseFloat(d['D3']);
        d.maccvalues = +d.maccvalues;
        dataset_macc = data;
        checkboxdata_macc = data;
    });
    
    makescatterplot(dataset_macc);
});

function changedataset_macc() {
    new_data2 = JSON.parse(JSON.stringify(dataset));

    new_data2.forEach(function(d){
    d['A1'] = d['A1'] * A1_weight
    d['A2'] = d['A2'] * A2_weight
    d['A3'] = d['A3'] * A3_weight
    d['B1'] = d['B1'] * B1_weight
    d['B2'] = d['B2'] * B2_weight
    d['B3'] = d['B3'] * B3_weight
    d['C1'] = d['C1'] * C1_weight
    d['C2'] = d['C2'] * C2_weight
    d['C3'] = d['C3'] * C3_weight
    d['D1'] = d['D1'] * D1_weight
    d['D2'] = d['D2'] * D2_weight
    d['D3'] = d['D3'] * D3_weight
    d.maccvalues = + d.maccvalues;

    d.totalmacc = parseFloat(d['A1'])+parseFloat(d['A2'])+parseFloat(d['A3'])+parseFloat(d['B1'])+parseFloat(d['B2'])+parseFloat(d['B3'])+parseFloat(d['C1'])+parseFloat(d['C2'])+parseFloat(d['C3'])+parseFloat(d['D1'])+parseFloat(d['D2'])+parseFloat(d['D3'])
    })
    makescatterplot(new_data2)
}

makescatterplot = function(data) {
    canvas.selectAll('g').remove()
    canvas.selectAll('.dot').remove()
    canvas.selectAll('.labels').remove()
    canvas.selectAll('.tick').remove()
    canvas.selectAll('div').remove()
  // Common pattern for defining vis size and margins
  yScale.domain([ d3.min(data, function(d) { return d.totalmacc; }) - 1,
    d3.max(data, function(d) { return d.totalmacc; }) + 1 ])

  xScale.domain([ d3.min(data, function(d) { return d.maccvalues; }) - 1,
    d3.max(data, function(d) { return d.maccvalues; }) + 1 ])

    console.log(data)
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
    
  canvas.selectAll('.tick')
      .style('font-size', '12px')

  // Add the tooltip container to the vis container
  // it's invisible and its position/contents are defined during mouseover
  var tooltip = d3.select("#scatterplot").append("div")
      .attr("class", "tooltip")
      .style("opacity", 1); 

  // tooltip mouseover event handler
  var tipMouseover = function(d) {
    d3.select(this).style("cursor", "help"); 
      var infoMACC  = "<span style='color:red;font-size:16px"  + ";'>" +d.label + " : " + d.technology + "</span><br/>" +
                      "<span style='font-size:16px" + ";'>" + "Y-value: " + "<b>" + d.totalmacc +"</b>"+ "</span><br/>" + 
                      "<span style='font-size:16px" + ";'>" + "Abatement costs: " + "<b>" + d.maccvalues + "</b>" + " €/tCO" + "<sub>2</sub>"+ "e" + "</span><br>" +
                      "<span style='font-size:16px" + ";'>" + "Abatement potential: " + "<b>" + d.potential + "</b>"+ " MtCO" + "<sub>2</sub>"+ "e by 2030" + "</span>";
1
      tooltip.html(infoMACC)
          .style("top", 30+"px")
          .style("left",50+"px")
          .style("background-color","#FAFAFA")
        .transition()
          .duration(200) // ms
          .style("opacity", .9) // started as 0!   
           
        
      
  };
  // tooltip mouseout event handler
  var tipMouseout = function(d) {
      tooltip.transition()
          .duration(300) // ms
          .style("opacity", 0) // don't care about position!
      tooltip.html("")
  };

  // Add data points!
  canvas.selectAll(".dot")
    .data(data)
  .enter().append("circle")
    .attr("class", "dot")
    .attr("r", function(d) {return ( d.potential/100)}  ) // radius size, could map to another data dimension
    .attr("cx", function(d) { return xScale( d.maccvalues ); })     // x position
    .attr("cy", function(d) { return yScale( d.totalmacc ); })  // y position
    .style("fill", "#9fbfdf")
    .on("mouseover", tipMouseover)
    .on("mouseout", tipMouseout)

canvas.selectAll("labels")
    .data(data)
.enter().append("text")
    .attr("class","labels")
    .attr("x", function(d) { return xScale(d.maccvalues); })
    .attr("y", function(d) { return yScale(d.totalmacc); })
    .style("fill", "red")
    .style("font-size","12px")
    .style("font-weight","bold")
    .on("mouseover", tipMouseover)
    .on("mouseout", tipMouseout)
    .text(function(d){return d.label;});
};

