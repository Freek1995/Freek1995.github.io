var margin = {top: 20, right: 30, bottom: 240, left: 60},
    width = 960 - margin.left - margin.right,
    height = 450 - margin.top - margin.bottom;

var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], .1);

var y = d3.scale.linear()
    .rangeRound([height, 0]);

var color = d3.scale.ordinal()
    .range(["#63822f","#8EBA43","#b0cf7a","#375434", "#4B7447","#6ba166","#cbb006", "#F9DC24","#fbe86e","#cd6216","#EB8A44","#f2b589"]);

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

var div_tooltip_fac = d3.select("#chartholder_fac").append("div")
  .attr("class", "tooltip_fac")
  .style("opacity", 0);

var abatement_option = d3.select("#options_holder").append("div")

var checkbox_holder = d3.select("#checkboxholder").append("div")

// Load the needed files
queue()
  .defer(d3.csv, "factor_data.csv") 
  .await(parsedataset)


function parsedataset(error, data) {
  color.domain(d3.keys(data[0]).filter(function(key) { return key !== "technology"; }));

  data.forEach(function(d) {
    var mytech = d.technology;
    //add to stock code
    var y0 = 0;

                                    // if value in kolom D1

    d.factors = color.domain().map(function(name) { return {mytech:mytech, name: name, class:name, y0: y0, y1: y0 += +d[name]}; });
    d.total = d.factors[d.factors.length - 1].y1;
\

    dataset = data
    checkboxdata = data
  });
  makeBarChart(dataset)
  makecheckbox(dataset);
};

// this function initiates when checkboxes are submitted or weights are changed
function changedataset() {
  console.log(dataset)
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

function makecheckbox(d){
  checkbox_holder.append("h5")
    .text("Toggle Abatement Options")
    .attr("align","center")

  dataset.forEach(function(d){
    var mytech_checkbox= d.technology
  })
  set_checkbox_lines(d.mytech_checkbox)
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
      .attr("transform", "translate(" + width + ",0)")
        .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", -6)
      .attr("dy", ".71em")
      .style("text-anchor", "end");
      //.text("Population");

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


// Mouseover + Mouseout function that shows the value of a certain factor in the bar chart (doesn't work since the use of BOOTSTRAP)



var mouseover_fac = function (d){
  
  var delta = d.y1- d.y0;
  var xPos = parseFloat(d3.select(this).attr("x"));
  var yPos = parseFloat(d3.select(this).attr("y"));
  var info_fac =   d.mytech +"<br/>" +
                  "<span style='color:red"  + ";'>" +d.name + " : " + "</span>" + delta;

    div_tooltip_fac.html(info_fac)
        .style("left", (xPos + 10) )
        .style("top", (yPos - 10) )
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

infocircles = d3.selectAll(".fa-info-circle")

console.log(infocircles)

// making the ticks clickable        
d3.selectAll(".tick")
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
      console.log(info)
      if (info.style.display === "none") {
      info.style.display = "block";
    } else {
      info.style.display = "none";
    }
    abatement_option.html("")
    abatement_option.append("h3")
      .text(info.id)
      .style("background-color", "#d3d3d3")
      .style("border-radius", "5px")
      .style("padding", "4px")
      .style("margin", "1px")

    abatement_option.attr("id",info.id)
    abatement_option.append("p")
      .text("hier komt alle informatie over deze functie dit moet ik nog schrijven en kijken of ik dit in een variabele ga gieten. Nu knal ik hier nog even heel veel tekst achteraan om te kijken hoe de div uitlijnt als ik een 11kolom heb");
  {  
    var row1 = abatement_option.append("div")
      .attr("class", "row")
    var col1 = row1.append("div")
      .attr("id", "costs")
      .attr("class","col-3")
    col1.append("h6")
      .text("Costs and Financing")
      .style("font-weight", "bold")
    col1.append("span")
      .text("Investment cost required (A1)")
    col1.append("br")
    var dropdownA1 = col1.append("select")
      .attr("name","A1")
      .attr("id","A1")
      .attr("class","dropdown")
      .attr("name",info.id)
    var optionsA1 = dropdownA1.selectAll("option")
        .data(A1data)
        .enter()
        .append("option");
    optionsA1.text(function(d) {
      return d.NAME;
    })
    .attr("value", function(d) {
      return d.VALUE;
    });
    col1.append("br")
    col1.append("span")
      .text("Expected pay-back time (A2)")
    col1.append("br")
    var dropdownA2 = col1.append("select")
      .attr("name","A2")
      .attr("id","A2")
      .attr("class","dropdown")
      .attr("name",info.id)   
    var optionsA2 = dropdownA2.selectAll("option")
        .data(A2data)
        .enter()
        .append("option");
    optionsA2.text(function(d) {
      return d.NAME;
    })
    .attr("value", function(d) {
      return d.VALUE;
    });
    col1.append("br")
    col1.append("span")
      .text("Difficulty in financing investment (A3)")
    col1.append("br")
    var dropdownA3 = col1.append("select")
      .attr("name","A3")
      .attr("id","A3")
      .attr("class","dropdown")
      .attr("name",info.id)     
    var optionsA3 = dropdownA3.selectAll("option")
        .data(A3data)
        .enter()
        .append("option");
    optionsA3.text(function(d) {
      return d.NAME;
    })
    .attr("value", function(d) {
      return d.VALUE;
    });
  
  var col2 = row1.append("div")
      .attr("id", "multiactor")
      .attr("class","col-3")
    col2.append("h6")
      .text("Multi-Actor Complexity")
      .style("font-weight", "bold")
    col2.append("span")
      .text("Dependence on other actors (B1)")
    col2.append("br")
    var dropdownB1 = col2.append("select")
      .attr("name","B1")
      .attr("id","B1")
      .attr("class","dropdown")
      .attr("name",info.id)
    var optionsB1 = dropdownB1.selectAll("option")
        .data(B1data)
        .enter()
        .append("option");
    optionsB1.text(function(d) {
      return d.NAME;
    })
    .attr("value", function(d) {
      return d.VALUE;
    });
    col2.append("br")
    col2.append("span")
      .text("Diversity of actors involved inc. conflicts (B2)")
    col2.append("br")
    var dropdownB2 = col2.append("select")
      .attr("name","B2")
      .attr("id","B2")
      .attr("class","dropdown")
      .attr("name",info.id)   
    var optionsB2 = dropdownB2.selectAll("option")
        .data(B2data)
        .enter()
        .append("option");
    optionsB2.text(function(d) {
      return d.NAME;
    })
    .attr("value", function(d) {
      return d.VALUE;
    });
    col2.append("br")
    col2.append("span")
      .text("Division of roles and responsibilities unclear (B3)")
    col2.append("br")
    var dropdownB3 = col2.append("select")
      .attr("name","B3")
      .attr("id","B3")
      .attr("class","dropdown")
      .attr("name",info.id)     
    var optionsB3 = dropdownB3.selectAll("option")
        .data(B3data)
        .enter()
        .append("option");
    optionsB3.text(function(d) {
      return d.NAME;
    })
    .attr("value", function(d) {
      return d.VALUE;
    });
    
  var col3 = row1.append("div")
      .attr("id", "multiactor")
      .attr("class","col-3")
    col3.append("h6")
      .text("Physical Interdependences")
      .style("font-weight", "bold")
    col3.append("span")
      .text("Physical embeddedness (C1)")
    col3.append("br")
    var dropdownC1 = col3.append("select")
      .attr("name","C1")
      .attr("id","C1")
      .attr("class","dropdown")
      .attr("name",info.id)
    var optionsC1 = dropdownC1.selectAll("option")
        .data(C1data)
        .enter()
        .append("option");
    optionsC1.text(function(d) {
      return d.NAME;
    })
    .attr("value", function(d) {
      return d.VALUE;
    });
    col3.append("br")
    col3.append("span")
      .text("Disturbs regular operation (C2)")
    col3.append("br")
    var dropdownC2 = col3.append("select")
      .attr("name","C2")
      .attr("id","C2")
      .attr("class","dropdown")
      .attr("name",info.id)   
    var optionsC2 = dropdownC2.selectAll("option")
        .data(C2data)
        .enter()
        .append("option");
    optionsC2.text(function(d) {
      return d.NAME;
    })
    .attr("value", function(d) {
      return d.VALUE;
    });
    col3.append("br")
    col3.append("span")
      .text("Technology uncertainty (C3)")
    col3.append("br")
    var dropdownC3 = col3.append("select")
      .attr("name","C3")
      .attr("id","C3")
      .attr("class","dropdown")
      .attr("name",info.id)     
    var optionsC3 = dropdownC3.selectAll("option")
        .data(C3data)
        .enter()
        .append("option");
    optionsC3.text(function(d) {
      return d.NAME;
    })
    .attr("value", function(d) {
      return d.VALUE;
    });
  
    var col4 = row1.append("div")
      .attr("id", "multiactor")
      .attr("class","col-3")
    col4.append("h6")
      .text("Behavior")
      .style("font-weight", "bold")
    col4.append("span")
      .text("Absence of Knowledge (D1)")
    col4.append("br")
    var dropdownD1 = col4.append("select")
      .attr("name","D1")
      .attr("id","D1")
      .attr("class","dropdown")
      .attr("name",info.id)
    var optionsD1 = dropdownD1.selectAll("option")
        .data(D1data)
        .enter()
        .append("option");
    optionsD1.text(function(d) {
      return d.NAME;
    })
    .attr("value", function(d) {
      return d.VALUE;
    });
    col4.append("br")
    col4.append("span")
      .text("Frequency of opportunity (D2)")
    col4.append("br")
    var dropdownD2 = col4.append("select")
      .attr("name","D2")
      .attr("id","D2")
      .attr("class","dropdown")
      .attr("name",info.id)   
    var optionsD2 = dropdownD2.selectAll("option")
        .data(D2data)
        .enter()
        .append("option");
    optionsD2.text(function(d) {
      return d.NAME;
    })
    .attr("value", function(d) {
      return d.VALUE;
    });
    col4.append("br")
    col4.append("span")
      .text("Requires change in behavior (D3)")
    col4.append("br")
    var dropdownD3 = col4.append("select")
      .attr("name","D3")
      .attr("id","D3")
      .attr("class","dropdown")
      .attr("name",info.id)     
    var optionsD3 = dropdownD3.selectAll("option")
        .data(D3data)
        .enter()
        .append("option");
    optionsD3.text(function(d) {
      return d.NAME;
    })
    .attr("value", function(d) {
      return d.VALUE;
    });
  }
    abatement_option.append("input")
      .attr("type","button")
      .attr('class', 'btn btn-secondary')
      .attr('value',"Submit new values")
      .on("click", submitvalues)


    var list_of_dropdowns = document.getElementsByClassName("dropdown") 
    
    for (var i = 0; i < list_of_dropdowns.length; i++) {                    //loopt door de dropdown list
      var dropdown_id = list_of_dropdowns[i]['id']                          //haalt de id's op van de 12 dropdowns
      var value_from_dataset = get_value_of(info.id, dropdown_id)           //info.id is de technologie, dus waarde van 12 dropdowns bij technologie ophalen
      current_dropdown = document.getElementById(dropdown_id)               //lijst van hele dropdown ophalen
      current_dropdown[value_from_dataset].setAttribute('selected', true);  //de optie van de dropdown selecteren die overeenkomt met waarde in dataset

    }
}

// get values from dropdown list
  var list_of_dropdowns_new =document.getElementsByClassName("dropdown")
  function submitvalues() {
    for (var k=0; k < list_of_dropdowns_new.length; k++) {                        //loopt door de dropdown list
    var dropdown_id_new = list_of_dropdowns_new[k]['id']                          //haalt de id (A1/A2 etc. ) op en stopt ze in variable
    dropdown_new = document.getElementById(dropdown_id_new)    	                   //haalt de hele lisjt van huidige dropdown op
    selected_option = dropdown_new[dropdown_new.selectedIndex].value              // selected waarde van de dropdowns
    technology_id = dropdown_new.name                                             // naam van de technologie
    set_value_of(technology_id,dropdown_id_new,selected_option)                   // de waarde van dropdown_id_new in technology_id wordt veranderd in selected_option                                                               
    }
    changedataset()
  }

// create a legend
  var legend = svg.selectAll(".legend")
      .data(color.domain().slice().reverse())
    .enter().append("g")
      .attr("transform", function(d, i) { return "translate(0," + i * 12 + ")"; });

   

//adding colors and squares to the legend
  legend.append("rect")
      .attr("x", -50)
      .attr("width", 11)
      .attr("height", 11)
      .style("fill", color)
      .attr("id", function (d, i) {
        return "id" + d.replace(/\s/g, '');
      })
      

// Giving the legend text
  legend.append("text")
      .attr("x", -36 )
      .attr("y", 6)
      .attr("font-size",13)
      .attr("dy", ".35em")
      .style("text-anchor", "begin")
      .text(function(d) { return d; });

};

// Checkboxes array creation
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
  dataset = checkboxdata
  var checked = getchecked();
  dataset = dataset.filter(function(e){
      return checked.indexOf(e.technology) !== -1;
  })
  changedataset()
  
    console.log(dataset);
})

// toggle function for checkboxes
var isAllCheck = true;
function togglecheckboxes(cn){
    var uncheck = document.getElementsByName(cn);
    for(var i = 0; i < uncheck.length; i++){
        uncheck[i].checked = !isAllCheck
}   
isAllCheck = !isAllCheck;   
}