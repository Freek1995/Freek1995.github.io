// var slider = document.getElementById("myRange");
// var output = document.getElementById("costs");
// costs = output.innerHTML = slider.value;

// Initialize variables to store data in


var costs_weight = 1
var physical_weight = 1
var multiactor_weight = 1
var behavior_weight = 1

var dataset_cat_cat
var new_data_cat

var checkboxes_cat
var submit_cat

var checkboxdata_cat

// Update to initial values - CATEGORIES
document.getElementById('costs_weight_display').innerHTML = costs_weight
document.getElementById('physical_weight_display').innerHTML = physical_weight
document.getElementById('multiactor_weight_display').innerHTML = multiactor_weight
document.getElementById('behavior_weight_display').innerHTML = behavior_weight




// Update on input - CATEGORIES

document.getElementById('slider_costs').oninput = function() {
    costs_weight = document.getElementById('costs_weight').value
    document.getElementById('costs_weight_display').innerHTML = costs_weight
    changedataset_cat()
  }
  
  document.getElementById('slider_physical').oninput = function() {
    physical_weight = document.getElementById('physical_weight').value
    document.getElementById('physical_weight_display').innerHTML = physical_weight
    changedataset_cat()
  }
  
  document.getElementById('slider_multiactor').oninput = function() {
    multiactor_weight = document.getElementById('multiactor_weight').value
    document.getElementById('multiactor_weight_display').innerHTML = multiactor_weight
    changedataset_cat()
  }
  
  document.getElementById('slider_behavior').oninput = function() {
    behavior_weight = document.getElementById('behavior_weight').value
    document.getElementById('behavior_weight_display').innerHTML = behavior_weight
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
      
      switch_tooltip_cat.style.display = (
          switch_tooltip_cat.style.display == "none" ? "block" : "none"); 
      switch_tooltip_fac.style.display = (
          switch_tooltip_fac.style.display == "none" ? "block" : "none"); 
      }
  function show_sliders() {
      var show_sliders_div = document.getElementById("sliders");      
      show_sliders_div.style.display = (
          show_sliders_div.style.display == "none" ? "block" : "none"); 
      show_sliders_div.scrollIntoView
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
    
    