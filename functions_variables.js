// var slider = document.getElementById("myRange");
// var output = document.getElementById("costs");
// costs = output.innerHTML = slider.value;

// Initialize variables to store data in

var Costs1_weight = 1.0
var Costs2_weight = 1.0
var Costs3_weight = 1.0
var MultiActor1_weight = 1.0
var MultiActor2_weight = 1.0
var MultiActor3_weight = 1.0
var Physical1_weight = 1.0
var Physical2_weight = 1.0
var Physical3_weight = 1.0
var Behaviour1_weight = 1.0
var Behaviour2_weight = 1.0
var Behaviour3_weight = 1.0

var costs_weight = 1.0
var physical_weight = 1.0
var multiactor_weight = 1.0
var behaviour_weight = 1.0



// Update to initial values - FACTORS
document.getElementById('Costs1_weight_display').innerHTML = Costs1_weight
document.getElementById('Costs2_weight_display').innerHTML = Costs2_weight
document.getElementById('Costs3_weight_display').innerHTML = Costs3_weight
document.getElementById('MultiActor1_weight_display').innerHTML = MultiActor1_weight
document.getElementById('MultiActor2_weight_display').innerHTML = MultiActor2_weight
document.getElementById('MultiActor3_weight_display').innerHTML = MultiActor3_weight
document.getElementById('Physical1_weight_display').innerHTML = Physical1_weight
document.getElementById('Physical2_weight_display').innerHTML = Physical2_weight
document.getElementById('Physical3_weight_display').innerHTML = Physical3_weight
document.getElementById('Behaviour1_weight_display').innerHTML = Behaviour1_weight
document.getElementById('Behaviour2_weight_display').innerHTML = Behaviour2_weight
document.getElementById('Behaviour3_weight_display').innerHTML = Behaviour3_weight

document.getElementById('costs_weight_display').innerHTML = costs_weight
document.getElementById('physical_weight_display').innerHTML = physical_weight
document.getElementById('multiactor_weight_display').innerHTML = multiactor_weight
document.getElementById('behaviour_weight_display').innerHTML = behaviour_weight


// Update on input - FACTORS

document.getElementById('slider_Costs1').oninput = function() {
  Costs1_weight = document.getElementById('Costs1_weight').value/10
  costs_weight = (Costs1_weight+Costs2_weight+Costs3_weight)/3
  document.getElementById('Costs1_weight_display').innerHTML = Costs1_weight
  document.getElementById('costs_weight_display').innerHTML = parseFloat(Math.round(costs_weight * 100) / 100).toFixed(1);
  changedataset()
  changedataset_cat()
  changedataset_macc()
}

document.getElementById('slider_Costs2').oninput = function() {
  Costs2_weight = document.getElementById('Costs2_weight').value/10
  costs_weight = (Costs1_weight+Costs2_weight+Costs3_weight)/3
  document.getElementById('Costs2_weight_display').innerHTML = Costs2_weight
  document.getElementById('costs_weight_display').innerHTML = parseFloat(Math.round(costs_weight * 100) / 100).toFixed(1);
  changedataset()
  changedataset_cat()
  changedataset_macc()
}

document.getElementById('slider_Costs3').oninput = function() {
  Costs3_weight = document.getElementById('Costs3_weight').value/10
  costs_weight = (Costs1_weight+Costs2_weight+Costs3_weight)/3
  document.getElementById('Costs3_weight_display').innerHTML = Costs3_weight
  document.getElementById('costs_weight_display').innerHTML = parseFloat(Math.round(costs_weight * 100) / 100).toFixed(1);
  changedataset()
  changedataset_cat()
  changedataset_macc()
}

document.getElementById('slider_MultiActor1').oninput = function() {
  MultiActor1_weight = document.getElementById('MultiActor1_weight').value/10
  multiactor_weight = (MultiActor1_weight+MultiActor2_weight+MultiActor3_weight)/3
  document.getElementById('MultiActor1_weight_display').innerHTML = MultiActor1_weight
  document.getElementById('multiactor_weight_display').innerHTML = parseFloat(Math.round(multiactor_weight * 100) / 100).toFixed(1);
  changedataset()
  changedataset_cat()
  changedataset_macc()
}

document.getElementById('slider_MultiActor2').oninput = function() {
  MultiActor2_weight = document.getElementById('MultiActor2_weight').value/10
  multiactor_weight = (MultiActor1_weight+MultiActor2_weight+MultiActor3_weight)/3
  document.getElementById('MultiActor2_weight_display').innerHTML = MultiActor2_weight
  document.getElementById('multiactor_weight_display').innerHTML = parseFloat(Math.round(multiactor_weight * 100) / 100).toFixed(1);
  changedataset()
  changedataset_cat()
  changedataset_macc()
}

document.getElementById('slider_MultiActor3').oninput = function() {
  MultiActor3_weight = document.getElementById('MultiActor3_weight').value/10
  multiactor_weight = (MultiActor1_weight+MultiActor2_weight+MultiActor3_weight)/3
  document.getElementById('MultiActor3_weight_display').innerHTML = MultiActor3_weight
  document.getElementById('multiactor_weight_display').innerHTML = parseFloat(Math.round(multiactor_weight * 100) / 100).toFixed(1);
  changedataset()
  changedataset_cat()
  changedataset_macc()
}

document.getElementById('slider_Physical1').oninput = function() {
  Physical1_weight = document.getElementById('Physical1_weight').value/10
  physical_weight = (Physical1_weight+Physical2_weight+Physical3_weight)/3
  document.getElementById('Physical1_weight_display').innerHTML = Physical1_weight
  document.getElementById('physical_weight_display').innerHTML = parseFloat(Math.round(physical_weight * 100) / 100).toFixed(1);
  changedataset()
  changedataset_cat()
  changedataset_macc()
}

document.getElementById('slider_Physical2').oninput = function() {
  Physical2_weight = document.getElementById('Physical2_weight').value/10
  physical_weight = (Physical1_weight+Physical2_weight+Physical3_weight)/3
  document.getElementById('Physical2_weight_display').innerHTML = Physical2_weight
  document.getElementById('physical_weight_display').innerHTML = parseFloat(Math.round(physical_weight * 100) / 100).toFixed(1);
  changedataset()
  changedataset_cat()
  changedataset_macc()
}

document.getElementById('slider_Physical3').oninput = function() {
  Physical3_weight = document.getElementById('Physical3_weight').value/10
  physical_weight = (Physical1_weight+Physical2_weight+Physical3_weight)/3
  document.getElementById('Physical3_weight_display').innerHTML = Physical3_weight
  document.getElementById('physical_weight_display').innerHTML = parseFloat(Math.round(physical_weight * 100) / 100).toFixed(1);
  changedataset()
  changedataset_cat()
  changedataset_macc()
}

document.getElementById('slider_Behaviour1').oninput = function() {
  Behaviour1_weight = document.getElementById('Behaviour1_weight').value/10
  behaviour_weight = (Behaviour1_weight+Behaviour2_weight+Behaviour3_weight)/3
  document.getElementById('Behaviour1_weight_display').innerHTML = Behaviour1_weight
  document.getElementById('behaviour_weight_display').innerHTML = parseFloat(Math.round(behaviour_weight * 100) / 100).toFixed(1);
  changedataset()
  changedataset_cat()
  changedataset_macc()
}

document.getElementById('slider_Behaviour2').oninput = function() {
  Behaviour2_weight = document.getElementById('Behaviour2_weight').value/10
  behaviour_weight = (Behaviour1_weight+Behaviour2_weight+Behaviour3_weight)/3
  document.getElementById('Behaviour2_weight_display').innerHTML = Behaviour2_weight
  document.getElementById('behaviour_weight_display').innerHTML = parseFloat(Math.round(behaviour_weight * 100) / 100).toFixed(1);
  changedataset()
  changedataset_cat()
  changedataset_macc()
}

document.getElementById('slider_Behaviour3').oninput = function() {
  Behaviour3_weight = document.getElementById('Behaviour3_weight').value/10
  behaviour_weight = (Behaviour1_weight+Behaviour2_weight+Behaviour3_weight)/3
  document.getElementById('Behaviour3_weight_display').innerHTML = Behaviour3_weight
  document.getElementById('behaviour_weight_display').innerHTML = parseFloat(Math.round(behaviour_weight * 100) / 100).toFixed(1);
  changedataset()
  changedataset_cat()
  changedataset_macc()
}

// Update on input - CATEGORIES

document.getElementById('slider_costs').oninput = function() {
  costs_weight = document.getElementById('costs_weight').value/10
  // Costs1_initial_weight = Costs1_weight
  // Costs2_initial_weight = Costs2_weight
  // Costs3_initial_weight = Costs3_weight
  // Costs1_weight = ((Costs1_initial_weight/(Costs1_initial_weight+Costs2_initial_weight+Costs3_initial_weight))*3*costs_weight)
  // Costs2_weight = ((Costs2_initial_weight/(Costs1_initial_weight+Costs2_initial_weight+Costs3_initial_weight))*3*costs_weight)
  // Costs3_weight = ((Costs3_initial_weight/(Costs1_initial_weight+Costs2_initial_weight+Costs3_initial_weight))*3*costs_weight)
  Costs1_weight = costs_weight
  Costs2_weight = costs_weight
  Costs3_weight = costs_weight
  MultiActor1_weight = multiactor_weight
  MultiActor2_weight = multiactor_weight
  MultiActor3_weight = multiactor_weight
  Physical1_weight = physical_weight
  Physical2_weight = physical_weight
  Physical3_weight = physical_weight
  Behaviour1_weight = behaviour_weight
  Behaviour2_weight = behaviour_weight
  Behaviour3_weight = behaviour_weight
  document.getElementById('costs_weight_display').innerHTML = costs_weight
  document.getElementById('Costs1_weight_display').innerHTML = parseFloat(Math.round(Costs1_weight * 100) / 100).toFixed(1);
  document.getElementById('Costs2_weight_display').innerHTML = parseFloat(Math.round(Costs2_weight * 100) / 100).toFixed(1);
  document.getElementById('Costs3_weight_display').innerHTML = parseFloat(Math.round(Costs3_weight * 100) / 100).toFixed(1);
  changedataset()
  changedataset_cat()
  changedataset_macc()
}

document.getElementById('slider_multiactor').oninput = function() {
  multiactor_weight = document.getElementById('multiactor_weight').value/10
  // MultiActor1_initial_weight = MultiActor1_weight
  // MultiActor2_initial_weight = MultiActor2_weight
  // MultiActor3_initial_weight = MultiActor3_weight
  // MultiActor1_weight = ((MultiActor1_initial_weight/(MultiActor1_initial_weight+MultiActor2_initial_weight+MultiActor3_initial_weight))*3*multiactor_weight)
  // MultiActor2_weight = ((MultiActor2_initial_weight/(MultiActor1_initial_weight+MultiActor2_initial_weight+MultiActor3_initial_weight))*3*multiactor_weight)
  // MultiActor3_weight = ((MultiActor3_initial_weight/(MultiActor1_initial_weight+MultiActor2_initial_weight+MultiActor3_initial_weight))*3*multiactor_weight)
  Costs1_weight = costs_weight
  Costs2_weight = costs_weight
  Costs3_weight = costs_weight
  MultiActor1_weight = multiactor_weight
  MultiActor2_weight = multiactor_weight
  MultiActor3_weight = multiactor_weight
  Physical1_weight = physical_weight
  Physical2_weight = physical_weight
  Physical3_weight = physical_weight
  Behaviour1_weight = behaviour_weight
  Behaviour2_weight = behaviour_weight
  Behaviour3_weight = behaviour_weight
  document.getElementById('multiactor_weight_display').innerHTML = multiactor_weight
  document.getElementById('MultiActor1_weight_display').innerHTML = parseFloat(Math.round(MultiActor1_weight * 100) / 100).toFixed(1);
  document.getElementById('MultiActor2_weight_display').innerHTML = parseFloat(Math.round(MultiActor2_weight * 100) / 100).toFixed(1);
  document.getElementById('MultiActor3_weight_display').innerHTML = parseFloat(Math.round(MultiActor3_weight * 100) / 100).toFixed(1);
  changedataset()
  changedataset_cat()
  changedataset_macc()
}

document.getElementById('slider_physical').oninput = function() {
  physical_weight = document.getElementById('physical_weight').value/10
  // Physical1_initial_weight = Physical1_weight
  // Physical2_initial_weight = Physical2_weight
  // Physical3_initial_weight = Physical3_weight
  // Physical1_weight = ((Physical1_initial_weight/(Physical1_initial_weight+Physical2_initial_weight+Physical3_initial_weight))*3*physical_weight)
  // Physical2_weight = ((Physical2_initial_weight/(Physical1_initial_weight+Physical2_initial_weight+Physical3_initial_weight))*3*physical_weight)
  // Physical3_weight = ((Physical3_initial_weight/(Physical1_initial_weight+Physical2_initial_weight+Physical3_initial_weight))*3*physical_weight)
  Costs1_weight = costs_weight
  Costs2_weight = costs_weight
  Costs3_weight = costs_weight
  MultiActor1_weight = multiactor_weight
  MultiActor2_weight = multiactor_weight
  MultiActor3_weight = multiactor_weight
  Physical1_weight = physical_weight
  Physical2_weight = physical_weight
  Physical3_weight = physical_weight
  Behaviour1_weight = behaviour_weight
  Behaviour2_weight = behaviour_weight
  Behaviour3_weight = behaviour_weight
  document.getElementById('physical_weight_display').innerHTML = physical_weight
  document.getElementById('Physical1_weight_display').innerHTML = parseFloat(Math.round(Physical1_weight * 100) / 100).toFixed(1);
  document.getElementById('Physical2_weight_display').innerHTML = parseFloat(Math.round(Physical2_weight * 100) / 100).toFixed(1);
  document.getElementById('Physical3_weight_display').innerHTML = parseFloat(Math.round(Physical3_weight * 100) / 100).toFixed(1);
  changedataset()
  changedataset_cat()
  changedataset_macc()
}

document.getElementById('slider_behaviour').oninput = function() {
  behaviour_weight = document.getElementById('behaviour_weight').value/10
  // Behaviour1_initial_weight = Behaviour1_weight
  // Behaviour2_initial_weight = Behaviour2_weight
  // Behaviour3_initial_weight = Behaviour3_weight
  Costs1_weight = costs_weight
  Costs2_weight = costs_weight
  Costs3_weight = costs_weight
  MultiActor1_weight = multiactor_weight
  MultiActor2_weight = multiactor_weight
  MultiActor3_weight = multiactor_weight
  Physical1_weight = physical_weight
  Physical2_weight = physical_weight
  Physical3_weight = physical_weight
  Behaviour1_weight = behaviour_weight
  Behaviour2_weight = behaviour_weight
  Behaviour3_weight = behaviour_weight
  // Behaviour1_weight = ((Behaviour1_initial_weight/(Behaviour1_initial_weight+Behaviour2_initial_weight+Behaviour3_initial_weight))*3*behaviour_weight)
  // Behaviour2_weight = ((Behaviour2_initial_weight/(Behaviour1_initial_weight+Behaviour2_initial_weight+Behaviour3_initial_weight))*3*behaviour_weight)
  // Behaviour3_weight = ((Behaviour3_initial_weight/(Behaviour1_initial_weight+Behaviour2_initial_weight+Behaviour3_initial_weight))*3*behaviour_weight)
  document.getElementById('behaviour_weight_display').innerHTML = behaviour_weight
  document.getElementById('Behaviour1_weight_display').innerHTML = parseFloat(Math.round(Behaviour1_weight * 100) / 100).toFixed(1);
  document.getElementById('Behaviour2_weight_display').innerHTML = parseFloat(Math.round(Behaviour2_weight * 100) / 100).toFixed(1);
  document.getElementById('Behaviour3_weight_display').innerHTML = parseFloat(Math.round(Behaviour3_weight * 100) / 100).toFixed(1);
  changedataset()
  changedataset_cat()
  changedataset_macc()
}

function reset_weights() {
Costs1_weight = 1.0
Costs2_weight = 1.0
Costs3_weight = 1.0
MultiActor1_weight = 1.0
MultiActor2_weight = 1.0
MultiActor3_weight = 1.0
Physical1_weight = 1.0
Physical2_weight = 1.0
Physical3_weight = 1.0
Behaviour1_weight = 1.0
Behaviour2_weight = 1.0
Behaviour3_weight = 1.0

document.getElementById('Costs1_weight_display').innerHTML = 1
slider_Costs1.children[0].value =10
document.getElementById('Costs2_weight_display').innerHTML = 1
slider_Costs2.children[0].value =10
document.getElementById('Costs3_weight_display').innerHTML = 1
slider_Costs3.children[0].value =10
document.getElementById('MultiActor1_weight_display').innerHTML = 1
slider_MultiActor1.children[0].value =10
document.getElementById('MultiActor2_weight_display').innerHTML = 1
slider_MultiActor2.children[0].value =10
document.getElementById('MultiActor3_weight_display').innerHTML = 1
slider_MultiActor3.children[0].value =10
document.getElementById('Physical1_weight_display').innerHTML = 1
slider_Physical1.children[0].value =10
document.getElementById('Physical2_weight_display').innerHTML = 1
slider_Physical2.children[0].value =10
document.getElementById('Physical3_weight_display').innerHTML = 1
slider_Physical3.children[0].value =10
document.getElementById('Behaviour1_weight_display').innerHTML = 1
slider_Behaviour1.children[0].value =10
document.getElementById('Behaviour2_weight_display').innerHTML = 1
slider_Behaviour2.children[0].value =10
document.getElementById('Behaviour3_weight_display').innerHTML = 1
slider_Behaviour3.children[0].value =10

costs_weight = 1.0
physical_weight = 1.0
multiactor_weight = 1.0
behaviour_weight = 1.0

document.getElementById('costs_weight_display').innerHTML = 1
slider_costs.children[0].value =10
document.getElementById('multiactor_weight_display').innerHTML = 1
slider_multiactor.children[0].value =10
document.getElementById('physical_weight_display').innerHTML = 1
slider_physical.children[0].value =10
document.getElementById('behaviour_weight_display').innerHTML = 1
slider_behaviour.children[0].value =10

weights1 = document.getElementById('barchart_factor')
weights2 = document.getElementById('barchart_category')
weights2.scrollIntoView()
weights1.scrollIntoView()
changedataset()
changedataset_cat()
changedataset_macc()
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
    var switch_tooltip_cat = document.getElementById("tooltipholder_cat"); 
    var switch_tooltip_fac = document.getElementById("tooltipholder_fac");
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
      var toggle_macc_div = document.getElementById("maccinfo");
      toggle_macc_div.style.display = (
          toggle_macc_div.style.display == "none" ? "block" : "none"); 
  }

  function togglefilterinfo() {
    var toggle_filter_div = document.getElementById("filterinfo");
    toggle_filter_div.style.display = (
        toggle_filter_div.style.display == "none" ? "block" : "none"); 
}

  function toggleweightinfo() {
    var toggle_weight_div = document.getElementById("weightinfo");
    toggle_weight_div.style.display = (
        toggle_weight_div.style.display == "none" ? "block" : "none"); 
}

  function togglecurveinfo() {
    var toggle_curve_div = document.getElementById("ycurveinfo");
    toggle_curve_div.style.display = (
        toggle_curve_div.style.display == "none" ? "block" : "none"); 
}

   function clicklegend_cat(d,data){
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

    function get_total_of(technology,data) {
      for (var t=0; t< data.length; t++) {
        if (data[t]['technology'] == technology) {
          return data[t]['total'];
        }
      }
    }
    function get_barrier_of(technology) {
      for (var l = 0; l < dataset.length; l++) { 
        if (dataset[l]['technology'] == technology) {
          return dataset[l]['barrier'];
        }
      }
    }

    function get_info_of(technology) {
      for (var z = 0; z < dataset.length; z++) { 
        if (dataset[z]['technology'] == technology) {
          return dataset[z]['info'];
        }
      }
    }


  function set_value_of(technology,factor,value) {
    for (var m = 0; m< dataset.length; m++) {
      if (dataset[m]['technology'] == technology && dataset[m][factor] !== value) {
        dataset[m][factor] = value
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
      .style('border-bottom','1px dotted black')
      .attr("id",'clicker')
      .attr("href",'options_holder')
      .attr('cursor','pointer')
      .attr('value',technology)
      checkbox_holder.append("svg:embed")
      .attr({
        'xlink:href': 'infocircle.png', 
        x: 0,
        y: 0,
        width: 10,
        height: 10
      })
      .style('visibility','visible')
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
 
function clicklegend_fac(d,data) {
  initial = get_value_of(d.mytech,d.name)
  totalscore = get_total_of(d.mytech,data)
  if (d== "Costs1"||d.name=="Costs1"){category ="Cost and Financials", description="Investment cost required (Costs1)", weight = Costs1_weight; if (initial == 0){score = 0, scoredescription ="Absent";} else { if (initial ==1){score = 1, scoredescription ="Medium";} else { score = 2, scoredescription = "Large"}}} else{
    if (d== "Costs2"||d.name=="Costs2"){category ="Cost and Financials", description="Expected pay-back time (Costs2)", weight = Costs2_weight; if (initial == 0){score = 0, scoredescription ="less than 5 years";} else { if (initial ==1){score = 1, scoredescription ="5-12 years";} else { score = 2, scoredescription = "more than 12 years"}}} else{
      if (d== "Costs3"||d.name=="Costs3"){category ="Cost and Financials", description="Difficulty in financing investment (Costs3)", weight = Costs3_weight; if (initial == 0){score = 0, scoredescription ="Low";} else { if (initial ==1){score = 1, scoredescription ="Medium";} else {score = 2, scoredescription = "High"}}} else{
        if (d== "MultiActor1"||d.name=="MultiActor1"){category ="Multi-actor Complexity", description="Dependence on other actors (MultiActor1)", weight = MultiActor1_weight; if (initial == 0){score = 0, scoredescription ="No";} else { if (initial ==1){score = 1, scoredescription ="Little";} else  {score = 2, scoredescription = "Much"}}} else{
          if (d== "MultiActor2"||d.name=="MultiActor2"){category ="Multi-actor Complexity", description="Diversity of other actors involved inc. conflicts (MultiActor2)", weight = MultiActor2_weight; if (initial == 0){score = 0, scoredescription ="Low";} else { if (initial ==1){score = 1, scoredescription ="Medium";} else {score = 2, scoredescription = "Large"}}} else{
            if (d== "MultiActor3"||d.name=="MultiActor3"){category ="Multi-actor Complexity", description="Division of roles and responsibilities unclear (MultiActor3)", weight = MultiActor3_weight; if (initial == 0){score = 0, scoredescription ="Clear";} else { if (initial ==1){score = 1, scoredescription ="Slightly";} else {score = 2, scoredescription = "Unclear"}}} else{
              if (d== "Physical1"||d.name=="Physical1"){category ="Physical Interdependencies", description="Physical embeddedness (Physical1)", weight = Physical1_weight; if (initial == 0){score = 0, scoredescription ="No";} else { if (initial ==1){score = 1, scoredescription ="Medium";} else {score = 2, scoredescription = "High"}}} else{
                if (d== "Physical2"||d.name=="Physical2"){category ="Physical Interdependencies", description="Disturbs regular operation (Physical2)", weight = Physical2_weight; if (initial == 0){score = 0, scoredescription ="No";} else { if (initial ==1){score = 1, scoredescription ="Slightly";} else {score = 2, scoredescription = "Strong"}}} else{
                  if (d== "Physical3"||d.name=="Physical3"){category ="Physical Interdependencies", description="Technology uncertainty (Physical3)", weight = Physical3_weight; if (initial == 0){score = 0, scoredescription ="Fully proven";} else { if (initial ==1){score = 1, scoredescription ="Small";} else {score = 2, scoredescription = "Large"}}} else{
                    if (d== "Behaviour1"||d.name=="Behaviour1"){category ="Behaviour", description="Absence of knowledge (Behaviour1)", weight = Behaviour1_weight; if (initial == 0){score = 0, scoredescription ="High Knowledge";} else { if (initial ==1){score = 1, scoredescription ="Low Knowledge";} else {score = 2, scoredescription = "No Knowledge"}}} else{
                      if (d== "Behaviour2"||d.name=="Behaviour2"){category ="Behaviour", description="Frequency of opportunity (Behaviour2)", weight = Behaviour2_weight; if (initial == 0){score = 0, scoredescription ="Often";} else { if (initial ==1){score = 1, scoredescription ="Medium";} else {score = 2, scoredescription = "Rarely"}}} else{
                        if (d== "Behaviour3"||d.name=="Behaviour3"){category ="Behaviour", description="Requires change in behaviour (Behaviour3)", weight = Behaviour3_weight; if (initial == 0){score = 0, scoredescription ="None";} else { if (initial ==1){score = 1, scoredescription ="Slight";} else {score = 2, scoredescription = "Severe"}}} else{  
  }}}}}}}}}}}}
}

function makecheckbox(){
   dataset.sort(function(a,b) { return +a.label - +b.label})
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

// function make_x_gridlines() {
//   return Behaviour3.xAxis
//   .ticks(5)
// }

// function make_y_gridlines(){
//   return Behaviour3.yAxis
//   .ticks(5)
// }

function clickme(d){
  showoptions()
  var info = document.getElementById(""+d+ "");
  console.log(d)
  abatement_option.attr("id",info.id)
  
  var text_info = get_info_of(info.id)
  var text_barrier = get_barrier_of(info.id)

abatement_option.html("")
abatement_heading = abatement_option.append("h3")
  .text(info.id)
  .style("background-color", "#d3d3d3")
  .style("border-radius", "5px")
  .style("padding", "4px")
  .style("margin", "1px")

abatement_heading.append("input")
  .style("margin-right", "15px")
  .attr("type","button")
  .style('height','35px')
  .attr('class', 'btn btn-secondary')
  .style('float', 'right')
  .attr('value',"Collapse")
  .attr('text-anchor','end')
  .on("click", hideoptions)


abatement_option.append("p")
  .text(text_info);
abatement_option.append("h6")
  .text("Main barriers")
  .style("font-weight","bold")
abatement_option.append('p')
  .text(text_barrier)

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
  .text("Investment cost required (Costs1)")
  .attr("title","The degree to which the investment in an abatement measure is significant")
  .on({
    "mouseover": function(d) {
      d3.select(this).style("cursor", "help"); 
    },
    "mouseout": function(d) {
      d3.select(this).style("cursor", "default"); 
    }
  });
col1.append("br")
var dropdownCosts1 = col1.append("select")
  .attr("name","Costs1")
  .attr("id","Costs1")
  .attr("class","dropdown")
  .attr("name",info.id)
var optionsCosts1 = dropdownCosts1.selectAll("option")
    .data(Costs1data)
    .enter()
    .append("option");
optionsCosts1.text(function(d) {
  return d.NAME;
})
.attr("value", function(d) {
  return d.VALUE;
});
col1.append("br")
col1.append("span")
  .text("Expected pay-back time (Costs2)")
  .attr("title","Expected time required to earn back the investment for an abatement measure")
  .on({
    "mouseover": function(d) {
      d3.select(this).style("cursor", "help"); 
    },
    "mouseout": function(d) {
      d3.select(this).style("cursor", "default"); 
    }
  });
col1.append("br")
var dropdownCosts2 = col1.append("select")
  .attr("name","Costs2")
  .attr("id","Costs2")
  .attr("class","dropdown")
  .attr("name",info.id)   
var optionsCosts2 = dropdownCosts2.selectAll("option")
    .data(Costs2data)
    .enter()
    .append("option");
optionsCosts2.text(function(d) {
  return d.NAME;
})
.attr("value", function(d) {
  return d.VALUE;
});
col1.append("br")
col1.append("span")
  .text("Difficulty in financing investment (Costs3)")
  .attr("title","The degree to which it is difficult to finance the abatement or attract appropriate financial means")
  .on({
    "mouseover": function(d) {
      d3.select(this).style("cursor", "help"); 
    },
    "mouseout": function(d) {
      d3.select(this).style("cursor", "default"); 
    }
  });
col1.append("br")
var dropdownCosts3 = col1.append("select")
  .attr("name","Costs3")
  .attr("id","Costs3")
  .attr("class","dropdown")
  .attr("name",info.id)     
var optionsCosts3 = dropdownCosts3.selectAll("option")
    .data(Costs3data)
    .enter()
    .append("option");
optionsCosts3.text(function(d) {
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
  .text("Dependence on other actors (MultiActor1)")
  .attr("title","Degree of dependence on actions of other actors to successfully implement and execute the abatement measure")
  .on({
    "mouseover": function(d) {
      d3.select(this).style("cursor", "help"); 
    },
    "mouseout": function(d) {
      d3.select(this).style("cursor", "default"); 
    }
  });
col2.append("br")
var dropdownMultiActor1 = col2.append("select")
  .attr("name","MultiActor1")
  .attr("id","MultiActor1")
  .attr("class","dropdown")
  .attr("name",info.id)
var optionsMultiActor1 = dropdownMultiActor1.selectAll("option")
    .data(MultiActor1data)
    .enter()
    .append("option");
optionsMultiActor1.text(function(d) {
  return d.NAME;
})
.attr("value", function(d) {
  return d.VALUE;
});
col2.append("br")
col2.append("span")
  .text("Diversity of actors involved inc. conflicts (MultiActor2)")
  .attr("title", "Degree of diversity of interests, values, roles, skills andexpectations of the actors involved. Degree of public acceptance. When opposing interests from the (local) public to the implementation of the abatement option are (expected to be) present, a high score should be given")
  .on({
    "mouseover": function(d) {
      d3.select(this).style("cursor", "help"); 
    },
    "mouseout": function(d) {
      d3.select(this).style("cursor", "default"); 
    }
  });
col2.append("br")
var dropdownMultiActor2 = col2.append("select")
  .attr("name","MultiActor2")
  .attr("id","MultiActor2")
  .attr("class","dropdown")
  .attr("name",info.id)   
var optionsMultiActor2 = dropdownMultiActor2.selectAll("option")
    .data(MultiActor2data)
    .enter()
    .append("option");
optionsMultiActor2.text(function(d) {
  return d.NAME;
})
.attr("value", function(d) {
  return d.VALUE;
});
col2.append("br")
col2.append("span")
  .text("Division of roles and responsibilities unclear (MultiActor3)")
  .attr("title", "The extent to which the roles and responsibilities for the realization of the abatement option are clear")
  .on({
    "mouseover": function(d) {
      d3.select(this).style("cursor", "help"); 
    },
    "mouseout": function(d) {
      d3.select(this).style("cursor", "default"); 
    }
  });
col2.append("br")
var dropdownMultiActor3 = col2.append("select")
  .attr("name","MultiActor3")
  .attr("id","MultiActor3")
  .attr("class","dropdown")
  .attr("name",info.id)     
var optionsMultiActor3 = dropdownMultiActor3.selectAll("option")
    .data(MultiActor3data)
    .enter()
    .append("option");
optionsMultiActor3.text(function(d) {
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
  .text("Physical embeddedness (Physical1)")
  .attr("title", "Degree to which the abatement measure requires physical changes to the environment it is placed in")
  .on({
    "mouseover": function(d) {
      d3.select(this).style("cursor", "help"); 
    },
    "mouseout": function(d) {
      d3.select(this).style("cursor", "default"); 
    }
  });
col3.append("br")
var dropdownPhysical1 = col3.append("select")
  .attr("name","Physical1")
  .attr("id","Physical1")
  .attr("class","dropdown")
  .attr("name",info.id)
var optionsPhysical1 = dropdownPhysical1.selectAll("option")
    .data(Physical1data)
    .enter()
    .append("option");
optionsPhysical1.text(function(d) {
  return d.NAME;
})
.attr("value", function(d) {
  return d.VALUE;
});
col3.append("br")
col3.append("span")
  .text("Disturbs regular operation (Physical2)")
  .attr("title", "Degree (duration, intensity) to which status quo/regular operation is disrupted to successfully apply the abatement measure")
  .on({
    "mouseover": function(d) {
      d3.select(this).style("cursor", "help"); 
    },
    "mouseout": function(d) {
      d3.select(this).style("cursor", "default"); 
    }
  });
col3.append("br")
var dropdownPhysical2 = col3.append("select")
  .attr("name","Physical2")
  .attr("id","Physical2")
  .attr("class","dropdown")
  .attr("name",info.id)   
var optionsPhysical2 = dropdownPhysical2.selectAll("option")
    .data(Physical2data)
    .enter()
    .append("option");
optionsPhysical2.text(function(d) {
  return d.NAME;
})
.attr("value", function(d) {
  return d.VALUE;
});
col3.append("br")
col3.append("span")
  .text("Technology uncertainty (Physical3)")
  .attr("title", "Degree to which the technological performance of the abatement measure is uncertain")
  .on({
    "mouseover": function(d) {
      d3.select(this).style("cursor", "help"); 
    },
    "mouseout": function(d) {
      d3.select(this).style("cursor", "default"); 
    }
  });
col3.append("br")
var dropdownPhysical3 = col3.append("select")
  .attr("name","Physical3")
  .attr("id","Physical3")
  .attr("class","dropdown")
  .attr("name",info.id)     
var optionsPhysical3 = dropdownPhysical3.selectAll("option")
    .data(Physical3data)
    .enter()
    .append("option");
optionsPhysical3.text(function(d) {
  return d.NAME;
})
.attr("value", function(d) {
  return d.VALUE;
});

var col4 = row1.append("div")
  .attr("id", "multiactor")
  .attr("class","col-3")
col4.append("h6")
  .text("Behaviour")
  .style("font-weight", "bold")
col4.append("span")
  .text("Absence of Knowledge (Behaviour1)")
  .attr("title","Level of knowledge of the parties responsible for the abatement measure")
  .on({
    "mouseover": function(d) {
      d3.select(this).style("cursor", "help"); 
    },
    "mouseout": function(d) {
      d3.select(this).style("cursor", "default"); 
    }
  });
col4.append("br")
var dropdownBehaviour1 = col4.append("select")
  .attr("name","Behaviour1")
  .attr("id","Behaviour1")
  .attr("class","dropdown")
  .attr("name",info.id)
var optionsBehaviour1 = dropdownBehaviour1.selectAll("option")
    .data(Behaviour1data)
    .enter()
    .append("option");
optionsBehaviour1.text(function(d) {
  return d.NAME;
})
.attr("value", function(d) {
  return d.VALUE;
});
col4.append("br")
col4.append("span")
  .text("Frequency of opportunity (Behaviour2)")
  .attr("title", "Number of opportunities for the responsible party to realize the abatement measure")
  .on({
    "mouseover": function(d) {
      d3.select(this).style("cursor", "help"); 
    },
    "mouseout": function(d) {
      d3.select(this).style("cursor", "default"); 
    }
  });
col4.append("br")
var dropdownBehaviour2 = col4.append("select")
  .attr("name","Behaviour2")
  .attr("id","Behaviour2")
  .attr("class","dropdown")
  .attr("name",info.id)   
var optionsBehaviour2 = dropdownBehaviour2.selectAll("option")
    .data(Behaviour2data)
    .enter()
    .append("option");
optionsBehaviour2.text(function(d) {
  return d.NAME;
})
.attr("value", function(d) {
  return d.VALUE;
});
col4.append("br")
col4.append("span")
  .text("Requires change in behaviour (Behaviour3)")
  .attr("title","Degree to which the actors involved need to change their day to day behaviour")
  .on({
    "mouseover": function(d) {
      d3.select(this).style("cursor", "help"); 
    },
    "mouseout": function(d) {
      d3.select(this).style("cursor", "default"); 
    }
  });
col4.append("br")
var dropdownBehaviour3 = col4.append("select")
  .attr("name","Behaviour3")
  .attr("id","Behaviour3")
  .attr("class","dropdown")
  .attr("name",info.id)     
var optionsBehaviour3 = dropdownBehaviour3.selectAll("option")
    .data(Behaviour3data)
    .enter()
    .append("option");
optionsBehaviour3.text(function(d) {
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
  .style('margin','5px')
  .on("click", submitvalues)

   
var list_of_dropdowns = document.getElementsByClassName("dropdown") 

for (var i = 0; i < list_of_dropdowns.length; i++) {                    //loopt door de dropdown list
  var dropdown_id = list_of_dropdowns[i]['id']                          //haalt de id's op van de 12 dropdowns
  var value_from_dataset = get_value_of(info.id, dropdown_id)           //info.id is de technologie, dus waarde van 12 dropdowns bij technologie ophalen
  current_dropdown = document.getElementById(dropdown_id)               //lijst van hele dropdown ophalen
  current_dropdown[value_from_dataset].setAttribute('selected', true);  //de optie van de dropdown selecteren die overeenkomt met waarde in dataset
}
information = document.getElementById("movetooptions")
information.scrollIntoView()
}
var list_of_dropdowns_new =document.getElementsByClassName("dropdown")
function submitvalues() {
  for (var k=0; k < list_of_dropdowns_new.length; k++) {                        //loopt door de dropdown list
  var dropdown_id_new = list_of_dropdowns_new[k]['id']                          //haalt de id (Costs1/Costs2 etc. ) op en stopt ze in variable
  dropdown_new = document.getElementById(dropdown_id_new)    	                   //haalt de hele lisjt van huidige dropdown op
  selected_option = dropdown_new[dropdown_new.selectedIndex].value              // selected waarde van de dropdowns
  technology_id = dropdown_new.name                                             // naam van de technologie
  set_value_of(technology_id,dropdown_id_new,selected_option)                   // de waarde van dropdown_id_new in technology_id wordt veranderd in selected_option                                                               
} 
  graph = document.getElementById("infocurve")
  graph.scrollIntoView()
  changedataset()
  changedataset_cat()
  changedataset_macc()
}

function hideoptions() {
  var toggle_options_div = document.getElementById("options_holder");
  toggle_options_div.style.display = "none"
}

function showoptions() {
  var toggle_options_div = document.getElementById("options_holder");
  toggle_options_div.style.display = "block"
}




      