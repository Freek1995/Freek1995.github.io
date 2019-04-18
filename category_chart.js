var margin = {top: 20, right: 30, bottom: 240, left: 170},
    width = 1070 - margin.left - margin.right,
    height = 450 - margin.top - margin.bottom;

var x= d3.scale.ordinal()
    .rangeRoundBands([0, width], .1);

var y = d3.scale.linear()
    .rangeRound([height, 0]);

var color_cat = d3.scale.ordinal()
    .range(["#8EBA43", "#4B7447", "#F9DC24","#EB8A44"]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("right")
    .tickFormat(d3.format(".2s"));

var svg_cat = d3.select("#barchart_category").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var div_tooltip_cat = d3.select("#chartholder_cat").append("div")
  .attr("class", "tooltip_cat")
  .style("opacity", 0)
  .attr("align","left")

// Load the needed files
queue()
  .defer(d3.csv, "category_data.csv") 
  .await(parsedataset_cat)


function parsedataset_cat(error, data) {
  color_cat.domain(d3.keys(data[0]).filter(function(key) { return key !== "technology"; }));

  data.forEach(function(d) {
    var mytech = d.technology; //add to stock code
    var y0 = 0;

    //d.factors = color.domain().map(function(name) { return {name: name, y0: y0, y1: y0 += +d[name]}; });
    d.factors = color_cat.domain().map(function(name) { return {mytech:mytech, name: name, y0: y0, y1: y0 += +d[name]}; });
    d.total = d.factors[d.factors.length - 1].y1;

    dataset_cat = data
    checkboxdata_cat = data
  });
  makeBarChart_cat(dataset_cat);
};

function changedataset_cat() {
  new_data = JSON.parse(JSON.stringify(dataset_cat));

  new_data.forEach(function(d){


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

  x.domain(data.map(function(d) { return d.technology; }));
  y.domain([0, d3.max(data, function(d) { return d.total; })]);


// FUNTIE HIERONDER GEEFT DE X-AS WAARDE
  svg_cat.append("g")
      .attr("class", "x axis")
      .attr("id","xAxis")
      .attr("transform", "translate(0," + height + ")")
         .call(xAxis)
    .selectAll("text")
     .attr("y", 0)
    .attr("x", 9  )
    .attr("dy", ".35em")
    .attr("transform", "rotate(90)")
    .style("text-anchor", "start");
    
// FUNTIE HIERONDER GEEFT DE Y-AS WAARDE
  svg_cat.append("g")
      .attr("class", "y axis")
      .attr("transform", "translate(" + width + ",0)")
        .call(yAxis)
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
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.y1); })
      .attr("x",function(d) { //add to stock code
          return x(d.mytech)
        })
      .attr("height", function(d) { return y(d.y0) - y(d.y1); })
      .style("fill", function(d) { return color_cat(d.name); });

  technology.selectAll("rect")
// FUNCTIE HIERONDER LAAT ZIEN WAT DE WAARDE IS PER RECHTHOEKJE ALS JE ER MET JE MUIS OVERHEEN GAAT

var mouseover_cat = function (d){
  
  var delta = d.y1- d.y0;
  // var sum = d['Cost and Financials'] + d['Physical Interdependencies'] + d['Multi-actor complexity'] + d['Behavior']
  var info_cat =   "<b>" + d.mytech + "</b>" + "<br/>" + 
                  "<span style='color:red"  + ";'>" +d.name + " : " + "</span>" + delta;

    div_tooltip_cat.html(info_cat)
        .style("left", (220+"px") )
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
       

d3.selectAll(".tick")
     .attr('className','member')
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

function clickme(d){
      var info = document.getElementById(""+d+ "");
      if (info.style.display === "none") {
      info.style.display = "block";
    } else {
      info.style.display = "none";
    }
}

var mouseover_legend_cat = function (d){
  var info_legend_cat = "\xa0"+"<b>" + d + "</b>"+ "\xa0"+ "<br/>" +
                        "\xa0"+ subcat1 + "\xa0"+"<br/>" + 
                        "\xa0"+ subcat2 + "\xa0"+"<br/>" +
                        "\xa0"+ subcat3 + "\xa0"+"<br/>";
    div_tooltip_cat.html(info_legend_cat)
        .style("left", (30) + "px")
        .style("top", (-40) +"px")
        .style("background","lightgrey")
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

// Checkboxes array creation
var checkboxes=document.querySelectorAll("input[type=checkbox]")
var submit = document.getElementById("submit")

function getchecked() {   
  var checked =[];
  for (var i=0; i< checkboxes.length; i++){
    var checkbox = checkboxes[i]
    if (checkbox.checked) checked.push(checkbox.value);
  }
  return checked;
}
submit.addEventListener("click", function(){
  dataset_cat = checkboxdata_cat
  var checked = getchecked();
  dataset_cat = dataset_cat.filter(function(e){
      return checked.indexOf(e.technology) !== -1;
  })
  changedataset_cat()
    console.log(dataset_cat);
})

var isAllCheck = true;
function togglecheckboxes(cn){
    var uncheck = document.getElementsByName(cn);
    for(var i = 0; i < uncheck.length; i++){
        uncheck[i].checked = !isAllCheck
}   
isAllCheck = !isAllCheck;   
}


// $(document).ready(function () {
//   var $answers = $('.hidden');
//   $(".member").click(function () {
//       var $ans = $(this).next(".hidden").stop(true).slideToggle(100);
//       $answers.not($ans).filter('.block').stop(true).slideUp();
//   })
// });