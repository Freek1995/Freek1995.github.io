// var slider = document.getElementById("myRange");
// var output = document.getElementById("costs");
// costs = output.innerHTML = slider.value;

// Initialize variables to store data in

var A1_weight = 1.0
var A2_weight = 1.0
var A3_weight = 1.0
var B1_weight = 1.0
var B2_weight = 1.0
var B3_weight = 1.0
var C1_weight = 1.0
var C2_weight = 1.0
var C3_weight = 1.0
var D1_weight = 1.0
var D2_weight = 1.0
var D3_weight = 1.0

var costs_weight = 1.0
var physical_weight = 1.0
var multiactor_weight = 1.0
var behavior_weight = 1.0



// Update to initial values - FACTORS
document.getElementById('A1_weight_display').innerHTML = A1_weight
document.getElementById('A2_weight_display').innerHTML = A2_weight
document.getElementById('A3_weight_display').innerHTML = A3_weight
document.getElementById('B1_weight_display').innerHTML = B1_weight
document.getElementById('B2_weight_display').innerHTML = B2_weight
document.getElementById('B3_weight_display').innerHTML = B3_weight
document.getElementById('C1_weight_display').innerHTML = C1_weight
document.getElementById('C2_weight_display').innerHTML = C2_weight
document.getElementById('C3_weight_display').innerHTML = C3_weight
document.getElementById('D1_weight_display').innerHTML = D1_weight
document.getElementById('D2_weight_display').innerHTML = D2_weight
document.getElementById('D3_weight_display').innerHTML = D3_weight

document.getElementById('costs_weight_display').innerHTML = costs_weight
document.getElementById('physical_weight_display').innerHTML = physical_weight
document.getElementById('multiactor_weight_display').innerHTML = multiactor_weight
document.getElementById('behavior_weight_display').innerHTML = behavior_weight


// Update on input - FACTORS

document.getElementById('slider_A1').oninput = function() {
  A1_weight = document.getElementById('A1_weight').value/10
  costs_weight = (A1_weight+A2_weight+A3_weight)/3
  document.getElementById('A1_weight_display').innerHTML = A1_weight
  document.getElementById('costs_weight_display').innerHTML = parseFloat(Math.round(costs_weight * 100) / 100).toFixed(1);
  changedataset()
  changedataset_cat()
}

document.getElementById('slider_A2').oninput = function() {
  A2_weight = document.getElementById('A2_weight').value/10
  costs_weight = (A1_weight+A2_weight+A3_weight)/3
  document.getElementById('A2_weight_display').innerHTML = A2_weight
  document.getElementById('costs_weight_display').innerHTML = parseFloat(Math.round(costs_weight * 100) / 100).toFixed(1);
  changedataset()
  changedataset_cat()
}

document.getElementById('slider_A3').oninput = function() {
  A3_weight = document.getElementById('A3_weight').value/10
  costs_weight = (A1_weight+A2_weight+A3_weight)/3
  document.getElementById('A3_weight_display').innerHTML = A3_weight
  document.getElementById('costs_weight_display').innerHTML = parseFloat(Math.round(costs_weight * 100) / 100).toFixed(1);
  changedataset()
  changedataset_cat()
}

document.getElementById('slider_B1').oninput = function() {
  B1_weight = document.getElementById('B1_weight').value/10
  multiactor_weight = (B1_weight+B2_weight+B3_weight)/3
  document.getElementById('B1_weight_display').innerHTML = B1_weight
  document.getElementById('multiactor_weight_display').innerHTML = parseFloat(Math.round(multiactor_weight * 100) / 100).toFixed(1);
  changedataset()
  changedataset_cat()
}

document.getElementById('slider_B2').oninput = function() {
  B2_weight = document.getElementById('B2_weight').value/10
  multiactor_weight = (B1_weight+B2_weight+B3_weight)/3
  document.getElementById('B2_weight_display').innerHTML = B2_weight
  document.getElementById('multiactor_weight_display').innerHTML = parseFloat(Math.round(multiactor_weight * 100) / 100).toFixed(1);
  changedataset()
  changedataset_cat()
}

document.getElementById('slider_B3').oninput = function() {
  B3_weight = document.getElementById('B3_weight').value/10
  multiactor_weight = (B1_weight+B2_weight+B3_weight)/3
  document.getElementById('B3_weight_display').innerHTML = B3_weight
  document.getElementById('multiactor_weight_display').innerHTML = parseFloat(Math.round(multiactor_weight * 100) / 100).toFixed(1);
  changedataset()
  changedataset_cat()
}

document.getElementById('slider_C1').oninput = function() {
  C1_weight = document.getElementById('C1_weight').value/10
  physical_weight = (C1_weight+C2_weight+C3_weight)/3
  document.getElementById('C1_weight_display').innerHTML = C1_weight
  document.getElementById('physical_weight_display').innerHTML = parseFloat(Math.round(physical_weight * 100) / 100).toFixed(1);
  changedataset()
  changedataset_cat()
}

document.getElementById('slider_C2').oninput = function() {
  C2_weight = document.getElementById('C2_weight').value/10
  physical_weight = (C1_weight+C2_weight+C3_weight)/3
  document.getElementById('C2_weight_display').innerHTML = C2_weight
  document.getElementById('physical_weight_display').innerHTML = parseFloat(Math.round(physical_weight * 100) / 100).toFixed(1);
  changedataset()
  changedataset_cat()
}

document.getElementById('slider_C3').oninput = function() {
  C3_weight = document.getElementById('C3_weight').value/10
  physical_weight = (C1_weight+C2_weight+C3_weight)/3
  document.getElementById('C3_weight_display').innerHTML = C3_weight
  document.getElementById('physical_weight_display').innerHTML = parseFloat(Math.round(physical_weight * 100) / 100).toFixed(1);
  changedataset()
  changedataset_cat()
}

document.getElementById('slider_D1').oninput = function() {
  D1_weight = document.getElementById('D1_weight').value/10
  behavior_weight = (D1_weight+D2_weight+D3_weight)/3
  document.getElementById('D1_weight_display').innerHTML = D1_weight
  document.getElementById('behavior_weight_display').innerHTML = parseFloat(Math.round(behavior_weight * 100) / 100).toFixed(1);
  changedataset()
  changedataset_cat()
}

document.getElementById('slider_D2').oninput = function() {
  D2_weight = document.getElementById('D2_weight').value/10
  behavior_weight = (D1_weight+D2_weight+D3_weight)/3
  document.getElementById('D2_weight_display').innerHTML = D2_weight
  document.getElementById('behavior_weight_display').innerHTML = parseFloat(Math.round(behavior_weight * 100) / 100).toFixed(1);
  changedataset()
  changedataset_cat()
}

document.getElementById('slider_D3').oninput = function() {
  D3_weight = document.getElementById('D3_weight').value/10
  behavior_weight = (D1_weight+D2_weight+D3_weight)/3
  document.getElementById('D3_weight_display').innerHTML = D3_weight
  document.getElementById('behavior_weight_display').innerHTML = parseFloat(Math.round(behavior_weight * 100) / 100).toFixed(1);
  changedataset()
  changedataset_cat()
}

// Update on input - CATEGORIES

document.getElementById('slider_costs').oninput = function() {
  costs_weight = document.getElementById('costs_weight').value/10
  A1_initial_weight = A1_weight
  A2_initial_weight = A2_weight
  A3_initial_weight = A3_weight
  A1_weight = ((A1_initial_weight/(A1_initial_weight+A2_initial_weight+A3_initial_weight))*3*costs_weight)
  A2_weight = ((A2_initial_weight/(A1_initial_weight+A2_initial_weight+A3_initial_weight))*3*costs_weight)
  A3_weight = ((A3_initial_weight/(A1_initial_weight+A2_initial_weight+A3_initial_weight))*3*costs_weight)
  document.getElementById('costs_weight_display').innerHTML = costs_weight
  document.getElementById('A1_weight_display').innerHTML = parseFloat(Math.round(A1_weight * 100) / 100).toFixed(1);
  document.getElementById('A2_weight_display').innerHTML = parseFloat(Math.round(A2_weight * 100) / 100).toFixed(1);
  document.getElementById('A3_weight_display').innerHTML = parseFloat(Math.round(A3_weight * 100) / 100).toFixed(1);
  console.log(A1_initial_weight,A2_initial_weight,A3_initial_weight,A1_weight,A2_weight,A3_weight)
  changedataset()
  changedataset_cat()
}

document.getElementById('slider_multiactor').oninput = function() {
  multiactor_weight = document.getElementById('multiactor_weight').value/10
  B1_initial_weight = B1_weight
  B2_initial_weight = B2_weight
  B3_initial_weight = B3_weight
  B1_weight = ((B1_initial_weight/(B1_initial_weight+B2_initial_weight+B3_initial_weight))*3*multiactor_weight)
  B2_weight = ((B2_initial_weight/(B1_initial_weight+B2_initial_weight+B3_initial_weight))*3*multiactor_weight)
  B3_weight = ((B3_initial_weight/(B1_initial_weight+B2_initial_weight+B3_initial_weight))*3*multiactor_weight)
  document.getElementById('multiactor_weight_display').innerHTML = multiactor_weight
  document.getElementById('B1_weight_display').innerHTML = parseFloat(Math.round(B1_weight * 100) / 100).toFixed(1);
  document.getElementById('B2_weight_display').innerHTML = parseFloat(Math.round(B2_weight * 100) / 100).toFixed(1);
  document.getElementById('B3_weight_display').innerHTML = parseFloat(Math.round(B3_weight * 100) / 100).toFixed(1);
  changedataset()
  changedataset_cat()
}

document.getElementById('slider_physical').oninput = function() {
  physical_weight = document.getElementById('physical_weight').value/10
  C1_initial_weight = C1_weight
  C2_initial_weight = C2_weight
  C3_initial_weight = C3_weight
  C1_weight = ((C1_initial_weight/(C1_initial_weight+C2_initial_weight+C3_initial_weight))*3*physical_weight)
  C2_weight = ((C2_initial_weight/(C1_initial_weight+C2_initial_weight+C3_initial_weight))*3*physical_weight)
  C3_weight = ((C3_initial_weight/(C1_initial_weight+C2_initial_weight+C3_initial_weight))*3*physical_weight)
  document.getElementById('physical_weight_display').innerHTML = physical_weight
  document.getElementById('C1_weight_display').innerHTML = parseFloat(Math.round(C1_weight * 100) / 100).toFixed(1);
  document.getElementById('C2_weight_display').innerHTML = parseFloat(Math.round(C2_weight * 100) / 100).toFixed(1);
  document.getElementById('C3_weight_display').innerHTML = parseFloat(Math.round(C3_weight * 100) / 100).toFixed(1);
  changedataset()
  changedataset_cat()
}

document.getElementById('slider_behavior').oninput = function() {
  behavior_weight = document.getElementById('behavior_weight').value/10
  D1_initial_weight = D1_weight
  D2_initial_weight = D2_weight
  D3_initial_weight = D3_weight
  D1_weight = ((D1_initial_weight/(D1_initial_weight+D2_initial_weight+D3_initial_weight))*3*behavior_weight)
  D2_weight = ((D2_initial_weight/(D1_initial_weight+D2_initial_weight+D3_initial_weight))*3*behavior_weight)
  D3_weight = ((D3_initial_weight/(D1_initial_weight+D2_initial_weight+D3_initial_weight))*3*behavior_weight)
  document.getElementById('behavior_weight_display').innerHTML = behavior_weight
  document.getElementById('D1_weight_display').innerHTML = parseFloat(Math.round(D1_weight * 100) / 100).toFixed(1);
  document.getElementById('D2_weight_display').innerHTML = parseFloat(Math.round(D2_weight * 100) / 100).toFixed(1);
  document.getElementById('D3_weight_display').innerHTML = parseFloat(Math.round(D3_weight * 100) / 100).toFixed(1);
  changedataset()
  changedataset_cat()
}


function switch_graphs() {
  var switch_category = document.getElementById("barchart_category"); 
  var switch_factor = document.getElementById("barchart_factor");
  
  switch_category.style.display = (
      switch_category.style.display == "none" ? "block" : "none"); 
  switch_factor.style.display = (
      switch_factor.style.display == "none" ? "block" : "none"); 
  }
  function switch_sliders() {
  var switch_category_slider = document.getElementById("sliders_category"); 
  var switch_factor_slider = document.getElementById("sliders_factor");
  
  switch_category_slider.style.display = (
      switch_category_slider.style.display == "none" ? "block" : "none"); 
  switch_factor_slider.style.display = (
      switch_factor_slider.style.display == "none" ? "block" : "none"); 
  }
  
  function switch_tooltip() {
    var switch_tooltip_cat = document.getElementById("chartholder_cat"); 
    var switch_tooltip_fac = document.getElementById("chartholder_fac");
    var switch_buttons_cat = document.getElementById("buttons_cat"); 
    var switch_buttons_fac = document.getElementById("buttons_fac");
    
    switch_tooltip_cat.style.display = (
        switch_tooltip_cat.style.display == "none" ? "block" : "none"); 
    switch_tooltip_fac.style.display = (
        switch_tooltip_fac.style.display == "none" ? "block" : "none");
    switch_buttons_cat.style.display = (
        switch_buttons_cat.style.display == "none" ? "block" : "none"); 
    switch_buttons_fac.style.display = (
        switch_buttons_fac.style.display == "none" ? "block" : "none");  
    }
  function show_sliders() {
      var show_sliders_div = document.getElementById("sliders");      
      show_sliders_div.style.display = (
          show_sliders_div.style.display == "none" ? "block" : "none"); 
      }  
  
  function togglemaccinfo() {
      var toggle_mac_div = document.getElementById("maccinfo");
      toggle_mac_div.style.display = (
          toggle_mac_div.style.display == "none" ? "block" : "none"); 
  }

   function clicklegend_cat(d){
    if(d==cat_data[0].NAME){ subcat1 = cat_data[0].SUBCAT1; subcat2 =cat_data[0].SUBCAT2; subcat3=cat_data[0].SUBCAT3}
    else {if (d==cat_data[1].NAME){ subcat1 = cat_data[1].SUBCAT1; subcat2 =cat_data[1].SUBCAT2; subcat3=cat_data[1].SUBCAT3}
      else {if(d==cat_data[2].NAME){ subcat1 = cat_data[2].SUBCAT1; subcat2 =cat_data[2].SUBCAT2; subcat3=cat_data[2].SUBCAT3}
        else {if (d==cat_data[3].NAME){ subcat1 = cat_data[3].SUBCAT1; subcat2 =cat_data[3].SUBCAT2; subcat3=cat_data[3].SUBCAT3}
             }
           }
         }
        }  
  
    function get_value_of(technology, factor) {
      for (var j = 0; j < dataset.length; j++) { 
        if (dataset[j]['technology'] == technology) {
          return dataset[j][factor];
          
        }
      }
    }

  function set_value_of(technology,factor,value) {
    for (var m = 0; m< dataset.length; m++) {
      if (dataset[m]['technology'] == technology && dataset[m][factor] !== value) {
        dataset[m][factor] = value
        console.log(dataset)
      }
    }
  }
 function set_checkbox_lines(technology,label,barrier,info) {
  for (var n=0; n<checkboxdata.length; n++) {
    if(checkboxdata[n]['technology'] == technology) {
      var clicktech = technology
      checkbox_holder.append("input")
      .attr("type","checkbox")
      .attr('name','cb')
      .attr('checked','true')
      .attr('value', technology)
      checkbox_holder.append("text")
      .style('color', 'red')
      .style('font-size','15px')
      .text(' ' + label + ":" )     
      checkbox_holder.append("text")
      .text(" " + technology + " ")
      .style('font-size','15px')
      .attr("id",'clicker')
      .attr('cursor','pointer')
      .attr('value',technology)
      checkbox_holder.selectAll('#clicker')
        .on('mouseover', function(d,i) {
          d3.select(this).transition()
            .ease('cubic-out')
            .duration('200')
            .style('color', 'red')
            .style("cursor","pointer");
        })
        .on('mouseout', function(d,i) {
          d3.select(this).transition()
            .ease('cubic-out')
            .duration('200')
            .style('font-size', 11)
            .style('color', 'black')
            .style("cursor","default");
        })
        .on("click", function(){clickme(this.getAttribute('value'))})
      checkbox_holder.append("br")
    }
  }
 }
 
function clicklegend_fac(d) {
  if (d== "A1"||d.name=="A1"){category ="Cost and Financials", description="Investment cost required (A1)"} else{
    if (d== "A2"||d.name=="A2"){category ="Cost and Financials", description="Expected pay-back time (A2)"} else{
      if (d== "A3"||d.name=="A3"){category ="Cost and Financials", description="Difficulty in financing investment (A3)"} else{
        if (d== "B1"||d.name=="B1"){category ="Multi-actor Complexity", description="Dependence on other actors (B1)"} else{
          if (d== "B2"||d.name=="B2"){category ="Multi-actor Complexity", description="Diversity of other actors involved inc. conflicts (B2)"} else{
            if (d== "B3"||d.name=="B3"){category ="Multi-actor Complexity", description="Division of roles and responsibilities unclear (B3)"} else{
              if (d== "C1"||d.name=="C1"){category ="Physical Interdependencies", description="Physical embeddedness (C1)"} else{
                if (d== "C2"||d.name=="C2"){category ="Physical Interdependencies", description="Disturbs regular operation (C2)"} else{
                  if (d== "C3"||d.name=="C3"){category ="Physical Interdependencies", description="Technology uncertainty (C3)"} else{
                    if (d== "D1"||d.name=="D1"){category ="Behavior", description="Absence of knowledge (D1)"} else{
                      if (d== "D2"||d.name=="D2"){category ="Behavior", description="Frequency of opportunity (D2)"} else{
                        if (d== "D3"||d.name=="D3"){category ="Behavior", description="Requires change in behavior (D3)"} else{  
  }}}}}}}}}}}}
console.log(description)}

function makecheckbox(){
  checkbox_holder.append('br')
  checkbox_holder.append("h6")
    .text("Filter and Change Abatement Options")
    .style('font-weight','bold')
    .attr("align","center")
  checkbox_holder.append('p')
    .text("The abatement options can be filtered by checking the checkboxes and pressing the submit button. To change values of an abatement option, click this specific option and a menu will pop-up below the Y-curve.")
  dataset.sort(function(a,b) { return d3.ascending(a.label, b.label)})
  dataset.forEach(function(d){
    set_checkbox_lines(d.technology,d.label,d.barrier,d.info)

  })
  checkbox_holder.append("br")
  
var checkboxes=document.querySelectorAll("input[type=checkbox]")
var submit = document.getElementById("submit")

// creating a filtered array based on the checked checkboxes
function getchecked() {   
  var checked =[];
  for (i=0; i< checkboxes.length; i++){
    var checkbox = checkboxes[i]
    if (checkbox.checked) checked.push(checkbox.value);
  }
  return checked;
}
submit.addEventListener("click", function(){
  dataset = checkboxdata
  dataset_cat = checkboxdata_cat
  dataset_macc = checkboxdata_macc
  var checked = getchecked();
  dataset = dataset.filter(function(e){
      return checked.indexOf(e.technology) !== -1;
  })
  dataset_cat = dataset_cat.filter(function(e){
    return checked.indexOf(e.technology) !== -1;
  })
  dataset_macc = dataset_macc.filter(function(e){
    return checked.indexOf(e.technology) !== -1;
})
  changedataset()
  changedataset_cat()
  changedataset_macc()

})

}
var isAllCheck = true;
function togglecheckboxes(cn){
    var uncheck = document.getElementsByName(cn);
    for(var iii = 0; iii < uncheck.length; iii++){
        uncheck[iii].checked = !isAllCheck
}   
isAllCheck = !isAllCheck;   
}

function clickme(d){
  var info = document.getElementById(""+d+ "");
  info.style.display = (
    info.style.display == "none" ? "block" : "none"); 
abatement_option.html("")
abatement_option.append("h3")
  .text(info.id)
  .style("background-color", "#d3d3d3")
  .style("border-radius", "5px")
  .style("padding", "4px")
  .style("margin", "1px")

abatement_option.attr("id",info.id)
abatement_option.append("p")
  .text();
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




      