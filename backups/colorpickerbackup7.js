// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it

  
var hex1; var hex2; var hex3; var hex4; var hex5; var hex6;
  
var colorPicker = new iro.ColorPicker("#color-picker-container", {
  width: 120,
  color: "#fff"
});
  
  var values = document.getElementById("values");

// https://iro.js.org/guide.html#color-picker-events
colorPicker.on(["color:init", "color:change"], function(color){
  // Show the current color in different formats
  // Using the selected color: https://iro.js.org/guide.html#selected-color-api
  colorUpdate1();
    values.innerHTML = [
    hex1 = color.hexString,
    //"rgb: " + color.rgbString,
   // "hsl: " + color.hslString,
  ].join("<br>");
});
   function colorUpdate1() {
    document.body.style.backgroundColor = hex1;
  }
  
var colorPicker = new iro.ColorPicker("#color-picker-container2", {
  width: 120,
  color: "#fff"
});
  
  var values = document.getElementById("values");

// https://iro.js.org/guide.html#color-picker-events
colorPicker.on(["color:init", "color:change"], function(color){
  // Show the current color in different formats
  // Using the selected color: https://iro.js.org/guide.html#selected-color-api
  colorUpdate2();
  values.innerHTML = [
    hex2 = color.hexString,
    //"rgb: " + color.rgbString,
   // "hsl: " + color.hslString,
    
  ].join("<br>");
});
   function colorUpdate2() {
  document.getElementById("endText").style.color = hex2;
  document.getElementById("time").style.color = hex2;

        document.getElementById("video").style.backgroundColor = hex2;
       
     document.getElementById("myBtn").style.backgroundColor = hex2;
             document.getElementById("feature").style.backgroundColor = hex2;
        document.getElementById("title").style.color = hex2;

  }
  
  
  
  
  var colorPicker = new iro.ColorPicker("#color-picker-container3", {
  width: 120,
  color: "#fff"
});
  
  var values = document.getElementById("values");

// https://iro.js.org/guide.html#color-picker-events
colorPicker.on(["color:init", "color:change"], function(color){
  // Show the current color in different formats
  // Using the selected color: https://iro.js.org/guide.html#selected-color-api
  colorUpdate3();
  values.innerHTML = [
    hex3 = color.hexString,
    //"rgb: " + color.rgbString,
   // "hsl: " + color.hslString,
    
  ].join("<br>");
});
  function colorUpdate3() {
     document.getElementById("firstEndText").style.color = hex3; //time text
        document.getElementById("secondEndText").style.color = hex3;
        document.getElementById("thirdEndText").style.color = hex3;
        document.getElementById("fourthEndText").style.color = hex3;
        document.getElementById("fifthEndText").style.color = hex3;
        document.getElementById("sixthEndText").style.color = hex3;
        document.getElementById("seventhEndText").style.color = hex3;
        document.getElementById("eighthEndText").style.color = hex3;

        document.getElementById("firstEnd").style.color = hex3; //actual times
        document.getElementById("secondEnd").style.color = hex3;
        document.getElementById("thirdEnd").style.color = hex3;
        document.getElementById("fourthEnd").style.color = hex3;
        document.getElementById("fifthEnd").style.color = hex3;
        document.getElementById("sixthEnd").style.color = hex3;
        document.getElementById("seventhEnd").style.color = hex3;
        document.getElementById("eighthEnd").style.color = hex3;
    
    document.getElementById("like").style.color = hex3;
    
     
    
      document.getElementById("copy").style.color = hex3;
   
   }
  
  
  
  
  
  
  
    var colorPicker = new iro.ColorPicker("#color-picker-container4", {
  width: 120,
  color: "#fff"
});
     var values = document.getElementById("values");

// https://iro.js.org/guide.html#color-picker-events
colorPicker.on(["color:init", "color:change"], function(color){
  // Show the current color in different formats
  // Using the selected color: https://iro.js.org/guide.html#selected-color-api
  colorUpdate4();
  values.innerHTML = [
    hex4 = color.hexString,
    //"rgb: " + color.rgbString,
   // "hsl: " + color.hslString,
    
  ].join("<br>");
});
   function colorUpdate4() {
   document.getElementById("dayContainer").style.backgroundColor = hex4;
   document.getElementById("yearContainer").style.backgroundColor = hex4;
     
   }
  
  
     var colorPicker = new iro.ColorPicker("#color-picker-container5", {
  width: 120,
  color: "#fff"
});
     var values = document.getElementById("values");

// https://iro.js.org/guide.html#color-picker-events
colorPicker.on(["color:init", "color:change"], function(color){
  // Show the current color in different formats
  // Using the selected color: https://iro.js.org/guide.html#selected-color-api
  colorUpdate5();
  values.innerHTML = [
    hex5 = color.hexString,
    //"rgb: " + color.rgbString,
   // "hsl: " + color.hslString,
    
  ].join("<br>");
});
   function colorUpdate5() {
  document.getElementById("video").style.color = hex5;
       
     document.getElementById("myBtn").style.color = hex5;
             document.getElementById("feature").style.color = hex5;
        //document.getElementById("title").style.color = hex2;
   }

  
       var colorPicker = new iro.ColorPicker("#color-picker-container6", {
  width: 120,
  color: "#fff"
});
     var values = document.getElementById("values");

// https://iro.js.org/guide.html#color-picker-events
colorPicker.on(["color:init", "color:change"], function(color){
  // Show the current color in different formats
  // Using the selected color: https://iro.js.org/guide.html#selected-color-api
  colorUpdate6();
  values.innerHTML = [
    hex6 = color.hexString,
    //"rgb: " + color.rgbString,
   // "hsl: " + color.hslString,
    
  ].join("<br>");
});
   function colorUpdate6() {
    document.getElementById("schoolScheduleTxt").style.color = hex6;
    document.getElementById("darklightTxt").style.color = hex6;
    document.getElementById("tabTxt").style.color = hex6;
    document.getElementById("lunchTxt").style.color = hex6;
    document.getElementById("daySelectTxt").style.color = hex6;
    document.getElementById("daySelectTxt2").style.color = hex6;
    document.getElementById("daySelectTxt3").style.color = hex6;
    document.getElementById("daySelectTxt4").style.color = hex6;
    document.getElementById("getDate").style.color = hex6;
    document.getElementById("endYearTxt").style.color = hex6;
   }



  
  