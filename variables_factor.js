// var slider = document.getElementById("myRange");
// var output = document.getElementById("costs");
// costs = output.innerHTML = slider.value;

// Initialize variables to store data in

var A1_weight = 1
var A2_weight = 1
var A3_weight = 1
var B1_weight = 1
var B2_weight = 1
var B3_weight = 1
var C1_weight = 1
var C2_weight = 1
var C3_weight = 1
var D1_weight = 1
var D2_weight = 1
var D3_weight = 1

var dataset
var new_data

var checkboxes
var submit

var checkboxdata

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



// Update on input - FACTORS

document.getElementById('slider_A1').oninput = function() {
  A1_weight = document.getElementById('A1_weight').value
  document.getElementById('A1_weight_display').innerHTML = A1_weight
  changedataset()
}

document.getElementById('slider_A2').oninput = function() {
  A2_weight = document.getElementById('A2_weight').value
  document.getElementById('A2_weight_display').innerHTML = A2_weight
  changedataset()
}

document.getElementById('slider_A3').oninput = function() {
  A3_weight = document.getElementById('A3_weight').value
  document.getElementById('A3_weight_display').innerHTML = A3_weight
  changedataset()
}

document.getElementById('slider_B1').oninput = function() {
  B1_weight = document.getElementById('B1_weight').value
  document.getElementById('B1_weight_display').innerHTML = B1_weight
  changedataset()
}

document.getElementById('slider_B2').oninput = function() {
  B2_weight = document.getElementById('B2_weight').value
  document.getElementById('B2_weight_display').innerHTML = B2_weight
  changedataset()
}

document.getElementById('slider_B3').oninput = function() {
  B3_weight = document.getElementById('B3_weight').value
  document.getElementById('B3_weight_display').innerHTML = B3_weight
  changedataset()
}

document.getElementById('slider_C1').oninput = function() {
  C1_weight = document.getElementById('C1_weight').value
  document.getElementById('C1_weight_display').innerHTML = C1_weight
  changedataset()
}

document.getElementById('slider_C2').oninput = function() {
  C2_weight = document.getElementById('C2_weight').value
  document.getElementById('C2_weight_display').innerHTML = C2_weight
  changedataset()
}

document.getElementById('slider_C3').oninput = function() {
  C3_weight = document.getElementById('C3_weight').value
  document.getElementById('C3_weight_display').innerHTML = C3_weight
  changedataset()
}

document.getElementById('slider_D1').oninput = function() {
  D1_weight = document.getElementById('D1_weight').value
  document.getElementById('D1_weight_display').innerHTML = D1_weight
  changedataset()
}

document.getElementById('slider_D2').oninput = function() {
  D2_weight = document.getElementById('D2_weight').value
  document.getElementById('D2_weight_display').innerHTML = D2_weight
  changedataset()
}

document.getElementById('slider_D3').oninput = function() {
  D3_weight = document.getElementById('D3_weight').value
  document.getElementById('D3_weight_display').innerHTML = D3_weight
  changedataset()
}

var A1data = [{
  "NAME": "0: Absent",
  "VALUE": "0"
}, {
  "NAME": "1: Medium",
  "VALUE": "1"
}, {
  "NAME": "2: Large",
  "VALUE":"2"
}];

var A2data = [{
  "NAME": "0: less than 5 years",
  "VALUE": "0"
}, {
  "NAME": "1: 5-12 years",
  "VALUE": "1"
}, {
  "NAME": "2: more than 12 years",
  "VALUE":"2"
}];

var A3data = [{
  "NAME": "0: Low",
  "VALUE": "0"
}, {
  "NAME": "1: Medium",
  "VALUE": "1"
}, {
  "NAME": "2: High",
  "VALUE":"2"
}];

var B1data = [{
  "NAME": "0: No",
  "VALUE": "0"
}, {
  "NAME": "1: Little",
  "VALUE": "1"
}, {
  "NAME": "2: Much",
  "VALUE":"2"
}];

var B2data = [{
  "NAME": "0: Low",
  "VALUE": "0"
}, {
  "NAME": "1: Medium",
  "VALUE": "1"
}, {
  "NAME": "2: Large",
  "VALUE":"2"
}];

var B3data = [{
  "NAME": "0: Clear",
  "VALUE": "0"
}, {
  "NAME": "1: Slightly",
  "VALUE": "1"
}, {
  "NAME": "2: Unclear",
  "VALUE":"2"
}];

var C1data = [{
  "NAME": "0: No",
  "VALUE": "0"
}, {
  "NAME": "1: Medium",
  "VALUE": "1"
}, {
  "NAME": "2: High",
  "VALUE":"2"
}];

var C2data = [{
  "NAME": "0: No",
  "VALUE": "0"
}, {
  "NAME": "1: Slightly",
  "VALUE": "1"
}, {
  "NAME": "2: Strong",
  "VALUE":"2"
}];

var C3data = [{
  "NAME": "0: Fully proven",
  "VALUE": "0"
}, {
  "NAME": "1: Small",
  "VALUE": "1"
}, {
  "NAME": "2: Large",
  "VALUE":"2"
}];

var D1data = [{
  "NAME": "0: High Knowledge",
  "VALUE": "0"
}, {
  "NAME": "1: Low Knowledge",
  "VALUE": "1"
}, {
  "NAME": "2: No Knowledge",
  "VALUE":"2"
}];

var D2data = [{
  "NAME": "0: Often",
  "VALUE": "0"
}, {
  "NAME": "1: Medium",
  "VALUE": "1"
}, {
  "NAME": "2: Rarely",
  "VALUE":"2"
}];

var D3data = [{
  "NAME": "0: No",
  "VALUE": "0"
}, {
  "NAME": "1: Slight",
  "VALUE": "1"
}, {
  "NAME": "2: Severe",
  "VALUE":"2"
}];

var cat_data =[{
  "NAME": "Cost and Financials",
  "SUBCAT1" : "Investment cost required (A1)",
  "SUBCAT2" : "Expected pay-back time (A2)",
  "SUBCAT3" : "Difficulty in financing investment (A3)"
},
{  
  "NAME": "Multi-actor Complexity",
  "SUBCAT1" : "Dependence on other actors (B1)",
  "SUBCAT2" : "Diversity of actors involved inc. conflicts (B2)",
  "SUBCAT3" : "Division of roles and responsibilities unclear (B3)"
},
{
  "NAME": "Physical Interdependencies",
  "SUBCAT1" : "Physical embeddedness (C1)",
  "SUBCAT2" : "Disturbs regular operation (C2)",
  "SUBCAT3" : "Technology uncertainty (C3)"
},
{
  "NAME": "Behavior",
  "SUBCAT1" : "Absence of knowledge (D1)",
  "SUBCAT2" : "Frequency of opportunity (D2)",
  "SUBCAT3" : "Requires change in behavior (D3)"
}]


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
 function set_checkbox_lines(technology) {
  for (var n=0; n<dataset.length; n++) {
    if(dataset[n]['technology'] == technology) {
      checkbox_holder.append("input")
      .attr("type","checkbox")
      .attr('name','cb')
      .attr('checked','true')
      .attr('value', technology)
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
      