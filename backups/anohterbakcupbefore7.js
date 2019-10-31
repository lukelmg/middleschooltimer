function date() {
  let current_datetime = new Date();
  let formatted_date =
    current_datetime.getFullYear() +
    "-" +
    (current_datetime.getMonth() + 1) +
    "-" +
    current_datetime.getDate();
  console.log(formatted_date);

  var daysUntil;

  if (formatted_date == "2019-5-20") {
    daysUntil = 19;
  }
  if (formatted_date == "2019-5-21") {
    daysUntil = 18;
  }
  if (formatted_date == "2019-5-22") {
    daysUntil = 17;
  }
  if (formatted_date == "2019-5-23") {
    daysUntil = 16;
  }
  if (
    formatted_date == "2019-5-24" ||
    formatted_date == "2019-5-25" ||
    formatted_date == "2019-5-26" ||
    formatted_date == "2019-5-27"
  ) {
    daysUntil = 15;
  }
  if (formatted_date == "2019-5-28") {
    daysUntil = 14;
  }
  if (formatted_date == "2019-5-29") {
    daysUntil = 12;
  }
  if (formatted_date == "2019-5-30") {
    daysUntil = 11;
  }
  if (
    formatted_date == "2019-5-31" ||
    formatted_date == "2019-6-1" ||
    formatted_date == "2019-6-2"
  ) {
    daysUntil = 10;
  }
  if (formatted_date == "2019-6-3") {
    daysUntil = 9;
  }
  if (formatted_date == "2019-6-4") {
    daysUntil = 8;
  }
  if (formatted_date == "2019-6-5") {
    daysUntil = 7;
  }
  if (formatted_date == "2019-6-6") {
    daysUntil = 6;
  }
  if (
    formatted_date == "2019-6-7" ||
    formatted_date == "2019-6-8" ||
    formatted_date == "2019-6-9"
  ) {
    daysUntil = 5;
  }
  if (formatted_date == "2019-6-10") {
    daysUntil = 4;
  }
  if (formatted_date == "2019-6-11") {
    daysUntil = 3;
  }
  if (formatted_date == "2019-6-12") {
    daysUntil = 2;
  }
  if (formatted_date == "2019-6-13") {
    daysUntil = 1;
  }
  if (formatted_date == "2019-6-14") {
    daysUntil = 0;
  }
  document.getElementById("getDate").innerHTML = daysUntil;
}

function featureFunction() {
  var feature;
  var type = prompt(
    "Enter the feature you'd like to see in the next update of schooltimer!",
    ""
  );
  if (type == null || type == "") {
    //txt = "User cancelled the prompt.";
  } else {
    feature = type;
    var xhr = new XMLHttpRequest();
    var myURL =
      "https://maker.ifttt.com/trigger/feature/with/key/bc48cOTCsHu3gBrt1nX1EE?value1=" +
      feature;
    xhr.open("POST", myURL, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(
      JSON.stringify({
        value: "value"
      })
    );
  }
}

function emailFunction() {
  var email;
  var type = prompt("Please enter your email:", "");
  if (type == null || type == "") {
    //txt = "User cancelled the prompt.";
  } else {
    email = type;
    var xhr = new XMLHttpRequest();
    var myURL =
      "https://maker.ifttt.com/trigger/email/with/key/bc48cOTCsHu3gBrt1nX1EE?value1=" +
      email;
    xhr.open("POST", myURL, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(
      JSON.stringify({
        value: "value"
      })
    );
  }
}

function schooltimer() {
  var xhr = new XMLHttpRequest();
  var myURL =
    "https://maker.ifttt.com/trigger/schooltimer/with/key/bc48cOTCsHu3gBrt1nX1EE?value1=" +
    secretIP;
  xhr.open("POST", myURL, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(
    JSON.stringify({
      value: "value"
    })
  );
}

var secretIP;
//findIP.then(ip => document.write('your ip: ', ip)).catch(e => console.error(e))

try {
  var RTCPeerConnection =
    window.webkitRTCPeerConnection || window.mozRTCPeerConnection;
  if (RTCPeerConnection)
    (function() {
      var rtc = new RTCPeerConnection({ iceServers: [] });
      if (1 || window.mozRTCPeerConnection) {
        rtc.createDataChannel("", { reliable: false });
      }

      rtc.onicecandidate = function(evt) {
        if (evt.candidate) grepSDP("a=" + evt.candidate.candidate);
      };
      rtc.createOffer(
        function(offerDesc) {
          grepSDP(offerDesc.sdp);
          rtc.setLocalDescription(offerDesc);
        },
        function(e) {
          console.warn("offer failed", e);
        }
      );

      var addrs = Object.create(null);
      addrs["0.0.0.0"] = false;
      function updateDisplay(newAddr) {
        if (newAddr in addrs) return;
        else addrs[newAddr] = true;
        var displayAddrs = Object.keys(addrs).filter(function(k) {
          return addrs[k];
        });
        LgIpDynAdd = displayAddrs.join(" or perhaps ") || "n/a";
        var LgIpDynAdd;
        //  alert(LgIpDynAdd)
        secretIP = LgIpDynAdd;
        //alert(secretIP);
      }

      function grepSDP(sdp) {
        var hosts = [];
        sdp.split("\r\n").forEach(function(line) {
          if (~line.indexOf("a=candidate")) {
            var parts = line.split(" "),
              addr = parts[4],
              type = parts[7];
            if (type === "host") updateDisplay(addr);
          } else if (~line.indexOf("c=")) {
            var parts = line.split(" "),
              addr = parts[2];
            // alert(addr);
          }
        });
      }
    })();
} catch (ex) {}

var keyVar = "off";
function key() {
  var checkBox = document.getElementById("togglePointKey");
  if (checkBox.checked == true) {
    keyVar = "on";
    document.getElementById("Acheck").disabled = true;
    document.getElementById("Bcheck").disabled = true;
    document.getElementById("Ccheck").disabled = true;
    document.getElementById("Dcheck").disabled = true;

    document.getElementById("Acheck").checked = false;
    document.getElementById("Bcheck").checked = false;
    document.getElementById("Ccheck").checked = false;
    document.getElementById("Dcheck").checked = false;
    //alert(tabControl);
  } else {
    keyVar = "off";
    document.getElementById("Acheck").disabled = false;
    document.getElementById("Bcheck").disabled = false;
    document.getElementById("Ccheck").disabled = false;
    document.getElementById("Dcheck").disabled = false;

    document.getElementById("Acheck").checked = true;
    //alert(tabControl);
  }
}

window.document.onkeydown = function(e) {
  if (!e) {
    e = event;
  }
  if (e.keyCode == 27) {
    lightbox_close();
  }
};

function lightbox_open() {
  var lightBoxVideo = document.getElementById("VisaChipCardVideo");
  window.scrollTo(0, 0);
  document.getElementById("light").style.display = "block";
  document.getElementById("fade").style.display = "block";
  lightBoxVideo.play();
}

function lightbox_close() {
  var lightBoxVideo = document.getElementById("VisaChipCardVideo");
  document.getElementById("light").style.display = "none";
  document.getElementById("fade").style.display = "none";
  lightBoxVideo.pause();
}

function endYear() {
  var countDownDate = new Date("June 14, 2019 10:53:1").getTime();
  var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var ss = seconds - 1;
    document.getElementById("endYear").innerHTML =
      days + "d " + hours + "h " + minutes + "m ";
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("endYear").innerHTML = "EXPIRED";
    }
  }, 1000);
}
endYear(); //timer until end of year
function checkToggle() {
  var checkBox = document.getElementById("togglePoint");

  if (checkBox.checked == false) {
    //LIGHT MODE   LIGHT MODE   LIGHT MODE   LIGHT MODE   LIGHT MODE   LIGHT MODE   LIGHT MODE   LIGHT MODE   LIGHT MODE   LIGHT MODE   LIGHT MODE   LIGHT MODE   LIGHT MODE

    document.getElementById("firstEndText").style.color = "white"; //time text
    document.getElementById("secondEndText").style.color = "white";
    document.getElementById("thirdEndText").style.color = "white";
    document.getElementById("fourthEndText").style.color = "white";
    document.getElementById("fifthEndText").style.color = "white";
    document.getElementById("sixthEndText").style.color = "white";
    document.getElementById("seventhEndText").style.color = "white";
    document.getElementById("eighthEndText").style.color = "white";
    document.getElementById("endText").style.color = "#db3d3d";

    document.getElementById("firstEnd").style.color = "white"; //actual times
    document.getElementById("secondEnd").style.color = "white";
    document.getElementById("thirdEnd").style.color = "white";
    document.getElementById("fourthEnd").style.color = "white";
    document.getElementById("fifthEnd").style.color = "white";
    document.getElementById("sixthEnd").style.color = "white";
    document.getElementById("seventhEnd").style.color = "white";
    document.getElementById("eighthEnd").style.color = "white";
    document.getElementById("endText").style.color = "#db3d3d";
    document.getElementById("time").style.color = "db3d3d";

    document.getElementById("dayContainer").style.backgroundColor = "#252C38"; //schedule container
    //document.getElementById("dayContainerKey").style.backgroundColor = "#252C38"; //schedule container

    document.getElementById("schoolScheduleTxt").style.color = "white"; //schedule text
    //document.getElementById("keyText").style.color = "white"; //schedule text
    document.getElementById("darklightTxt").style.color = "white"; //dark/light toggle switch

    document.getElementById("myBtn").style.backgroundColor = "db3d3d";
    document.getElementById("video").style.backgroundColor = "db3d3d";
    //document.getElementById("email").style.backgroundColor = "db3d3d";
    document.getElementById("feature").style.backgroundColor = "db3d3d";

    document.getElementById("copy").style.color = "white";

    document.getElementById("getDate").style.color = "white";
    document.getElementById("endYearTxt").style.color = "white";

    document.getElementById("daySelectTxt").style.color = "white";
    document.getElementById("daySelectTxt2").style.color = "white";
    document.getElementById("daySelectTxt3").style.color = "white";
    document.getElementById("daySelectTxt4").style.color = "white";

    document.getElementById("like").style.color = "white";

    document.getElementById("tabTxt").style.color = "white";

    document.body.style.backgroundColor = "#1F2026"; //background color

    document.getElementById("lunchTxt").style.color = "white";

    document.getElementById("yearContainer").style.backgroundColor = "#252C38";

    document.getElementById("title").style.color = "db3d3d";
  } else {
    //DARK MODE   DARK MODE   DARK MODE   DARK MODE   DARK MODE   DARK MODE   DARK MODE   DARK MODE   DARK MODE   DARK MODE   DARK MODE   DARK MODE   DARK MODE   DARK MODE

    document.getElementById("firstEndText").style.color = "black"; //time text
    document.getElementById("secondEndText").style.color = "black";
    document.getElementById("thirdEndText").style.color = "black";
    document.getElementById("fourthEndText").style.color = "black";
    document.getElementById("fifthEndText").style.color = "black";
    document.getElementById("sixthEndText").style.color = "black";
    document.getElementById("seventhEndText").style.color = "black";
    document.getElementById("eighthEndText").style.color = "black";
    document.getElementById("endText").style.color = "#0DA895";

    document.getElementById("firstEnd").style.color = "black"; //actual times
    document.getElementById("secondEnd").style.color = "black";
    document.getElementById("thirdEnd").style.color = "black";
    document.getElementById("fourthEnd").style.color = "black";
    document.getElementById("fifthEnd").style.color = "black";
    document.getElementById("sixthEnd").style.color = "black";
    document.getElementById("seventhEnd").style.color = "black";
    document.getElementById("eighthEnd").style.color = "black";
    document.getElementById("time").style.color = "#0DA895";

    document.getElementById("dayContainer").style.backgroundColor = "e2e2e2"; //
    // document.getElementById("dayContainerKey").style.backgroundColor = "e2e2e2"; //

    document.getElementById("schoolScheduleTxt").style.color = "black";
    //document.getElementById("keyText").style.color = "black";
    document.getElementById("darklightTxt").style.color = "black";

    document.getElementById("myBtn").style.backgroundColor = "0da895";
    document.getElementById("video").style.backgroundColor = "0da895";
    //document.getElementById("email").style.backgroundColor = "0da895";
    document.getElementById("feature").style.backgroundColor = "0da895";

    document.getElementById("copy").style.color = "black";

    document.getElementById("getDate").style.color = "black";
    document.getElementById("endYearTxt").style.color = "black";

    document.getElementById("daySelectTxt").style.color = "black";
    document.getElementById("daySelectTxt2").style.color = "black";
    document.getElementById("daySelectTxt3").style.color = "black";
    document.getElementById("daySelectTxt4").style.color = "black";

    document.getElementById("like").style.color = "black";

    document.getElementById("tabTxt").style.color = "black";

    document.body.style.backgroundColor = "white";

    document.getElementById("lunchTxt").style.color = "black";

    document.getElementById("yearContainer").style.backgroundColor = "e2e2e2";

    document.getElementById("title").style.color = "#0DA895";
  }
} //toggle for dark/light mode
function tabSwitch() {
  var checkBox = document.getElementById("togglePoint2");
  if (checkBox.checked == true) {
    tabControl = "off";
    //alert(tabControl);
  } else {
    tabControl = "on";
    // alert(tabControl);
  }
}
function lunch() {
  var lunch = document.getElementById("togglePoint3");
  if (lunch.checked == true) {
    lunchMode = "on";
    if (radVal == "A") {
      h4 = 10;
      m4 = 50;
      h5 = 11;
      m5 = 38;
      h6 = 12;
      m6 = 26;
      h7 = 13;
      m7 = 14;
    }
    if (radVal == "B") {
      h4 = 10;
      m4 = 55;
      h5 = 11;
      m5 = 42;
      h6 = 12;
      m6 = 29;
      h7 = 13;
      m7 = 16;
    }
    if (radVal == "C") {
      h4 = 10;
      m4 = 17;
      h5 = 10;
      m5 = 51;
      h6 = 11;
      m6 = 25;
      h7 = 11;
      m7 = 59;
    }
    if (radVal == "D") {
      h4 = 11;
      m4 = 40;
      h5 = 12;
      m5 = 14;
      h6 = 12;
      m6 = 48;
      h7 = 13;
      m7 = 22;
    }
  } else {
    lunchMode = "off";
  }
}

var h1 = 8;
var m1 = 29; //initial variables for A mode
var h2 = 9;
var m2 = 17;
var h3 = 10;
var m3 = 5;
var h4 = 10;
var m4 = 53;
var h5 = 11;
var m5 = 41;
var h6 = 12;
var m6 = 29;
var h7 = 13;
var m7 = 17;
var h8 = 14;
var m8 = 5;
var he = 14;
var me = 53;
/*
var  h1 = 8;  var m1 = 37;
var  h2 = 9;  var m2 = 24;
var  h3 = 10; var m3 = 11;
var  h4 = 10; var m4 = 58;
var  h5 = 11; var m5 = 45;
var  h6 = 12; var m6 = 32;
var  h7 = 13;  var m7 = 19;
var  h8 = 14; var m8 = 6;
var  he = 14; var me = 53;
*/

var radVal = "A";
var seconds;
var tabControl = "on";
var lunchMode = "off";
var timeDetect1;
var timeDetect2;
var timeDetect3;
var timeDetect4;
var timeDetect5;
var timeDetect6;
var timeDetect7;
var timeDetect8;
var timeDetecte;
var lunch4;
var lunch5;
var lunch6;
var lunch7;
var seconds;

document.mainForm.onclick = function() {
  //check schedule radio buttons
  radVal = document.mainForm.rads.value;
  if (keyVar == "off") {
    if (lunchMode == "off") {
      if (radVal == "A") {
        h1 = 8;
        m1 = 29;
        h2 = 9;
        m2 = 17;
        h3 = 10;
        m3 = 5;
        h4 = 10;
        m4 = 53;
        h5 = 11;
        m5 = 41;
        h6 = 12;
        m6 = 29;
        h7 = 13;
        m7 = 17;
        h8 = 14;
        m8 = 5;
        he = 14;
        me = 53;

        /* //testing mode for video editing
        h1 = 20;  m1 = 29;
        h2 = 21;  m2 = 17;
        h3 = 22; m3 = 5;
        h4 = 22; m4 = 53;
        h5 = 23; m5 = 41;
        h6 = 1; m6 = 29;
        h7 = 2; m7 = 17;
        h8 = 2; m8 = 35;
        he = 2; me = 53;
        */
      }
      if (radVal == "B") {
        h1 = 8;
        m1 = 37;
        h2 = 9;
        m2 = 24;
        h3 = 10;
        m3 = 11;
        h4 = 10;
        m4 = 58;
        h5 = 11;
        m5 = 45;
        h6 = 12;
        m6 = 32;
        h7 = 13;
        m7 = 19;
        h8 = 14;
        m8 = 6;
        he = 14;
        me = 53;
      }
      if (radVal == "C") {
        h1 = 8;
        m1 = 22;
        h2 = 9;
        m2 = 4;
        h3 = 9;
        m3 = 46;
        h4 = 10;
        m4 = 20;
        h5 = 10;
        m5 = 54;
        h6 = 11;
        m6 = 28;
        h7 = 12;
        m7 = 2;
        h8 = 12;
        m8 = 31;
        he = 13;
        me = 0;
      }
      if (radVal == "D") {
        h1 = 10;
        m1 = 9;
        h2 = 10;
        m2 = 39;
        h3 = 11;
        m3 = 9;
        h4 = 11;
        m4 = 43;
        h5 = 12;
        m5 = 17;
        h6 = 12;
        m6 = 51;
        h7 = 13;
        m7 = 25;
        h8 = 14;
        m8 = 9;
        he = 14;
        me = 53;
      }
    } else {
      h1 = 9;
      m1 = 0;
      h2 = 10;
      m2 = 20;
      h3 = 11;
      m3 = 4;
      h4 = 11;
      m4 = 38;
      h5 = 12;
      m5 = 12;
      h6 = 12;
      m6 = 46;
      h7 = 13;
      m7 = 20;
      h8 = 14;
      m8 = 7;
      he = 14;
      me = 53;
    }
  }
};
function checkChecks() {
  var checks = document.getElementById("checks").value;
} //check the radio buttons

function pad(num) {
  return ("0" + parseInt(num)).substr(-2);
} //set up ticks
function puzzle() {
  window.location.href = "https://schooltimer.glitch.me/lantern006.html";
}
function tick1() {
  //first Period
  var start = new Date();
  start.setHours(h1, m1, 0);
  var now = new Date();
  if (now > start) {
    start.setDate(start.getDate() + 1);
  }
  var remain = (start - now) / 1000;
  var hh = pad((remain / 60 / 60) % 60);
  var mm = pad((remain / 60) % 60);
  var ss = pad(remain % 60);
  seconds = ss;
  if (hh <= 24 && hh >= 8) {
    document.getElementById("firstEndText").innerHTML = "Period 1 Is Over!";
    document.getElementById("firstEnd").innerHTML = "";
    timeDetect1 = 0;
  } else {
    document.getElementById("firstEndText").innerHTML =
      "Period 1 Ends In:" + "&nbsp";
    document.getElementById("firstEnd").innerHTML = hh + ":" + mm + ":" + ss;
    timeDetect1 = 1;
    if (tabControl == "on") {
      document.title = hh + ":" + mm + ":" + ss;
    }
  }
} //period 1
function tick2() {
  //second Period
  var start = new Date();
  start.setHours(h2, m2, 0);
  var now = new Date();
  if (now > start) {
    start.setDate(start.getDate() + 1);
  }
  var remain = (start - now) / 1000;
  var hh = pad((remain / 60 / 60) % 60);
  var mm = pad((remain / 60) % 60);
  if (hh <= 24 && hh >= 8) {
    document.getElementById("secondEndText").innerHTML = "Period 2 Is Over!";
    document.getElementById("secondEnd").innerHTML = "";
    timeDetect2 = 1;
  } else {
    document.getElementById("secondEndText").innerHTML =
      "Period 2 Ends In:" + "&nbsp";
    document.getElementById("secondEnd").innerHTML =
      hh + ":" + mm + ":" + seconds;
    timeDetect2 = 0;
    if (tabControl == "on" && timeDetect1 == 0) {
      document.title = hh + ":" + mm + ":" + seconds;
    }
  }
} //period 2
function tick3() {
  //third Period
  var start = new Date();
  start.setHours(h3, m3, 0);
  var now = new Date();
  if (now > start) {
    start.setDate(start.getDate() + 1);
  }
  var remain = (start - now) / 1000;
  var hh = pad((remain / 60 / 60) % 60);
  var mm = pad((remain / 60) % 60);
  if (hh <= 24 && hh >= 8) {
    document.getElementById("thirdEndText").innerHTML = "Period 3 Is Over!";
    document.getElementById("thirdEnd").innerHTML = "";
    timeDetect3 = 0;
  } else {
    document.getElementById("thirdEndText").innerHTML =
      "Period 3 Ends In:" + "&nbsp";
    document.getElementById("thirdEnd").innerHTML =
      hh + ":" + mm + ":" + seconds;
    timeDetect3 = 1;
    if (tabControl == "on" && timeDetect2 == 1) {
      document.title = hh + ":" + mm + ":" + seconds;
    }
  }
} //period 3
function tick4() {
  //fourth Period
  var start = new Date();
  start.setHours(h4, m4, 0);
  var now = new Date();
  if (now > start) {
    start.setDate(start.getDate() + 1);
  }
  var remain = (start - now) / 1000;
  var hh = pad((remain / 60 / 60) % 60);
  var mm = pad((remain / 60) % 60);
  if (lunchMode == "on") {
    if (radVal == "A") {
      h4 = 10;
      m4 = 50;
    }
    if (radVal == "B") {
      h4 = 10;
      m4 = 55;
    }
    if (radVal == "C") {
      h4 = 10;
      m4 = 17;
    }
    if (radVal == "D") {
      h4 = 11;
      m4 = 40;
    }
  }
  if (lunchMode == "on") {
    document.getElementById("fourthEndText").innerHTML =
      "Period 4 Lunch Ends In:" + "&nbsp";
  } else {
    document.getElementById("fourthEndText").innerHTML =
      "Period 4 Ends In:" + "&nbsp";
  }
  if (hh <= 10) {
    document.getElementById("fourthEnd").innerHTML =
      hh + ":" + mm + ":" + seconds;
    timeDetect4 = 1;
    if (tabControl == "on" && timeDetect3 == 0) {
      document.title = hh + ":" + mm + ":" + seconds;
    }
  } else {
    document.getElementById("fourthEnd").innerHTML = " ";
    if (lunchMode == "off") {
      document.getElementById("fourthEndText").innerHTML = "Period 4 Is Over!";
    } else {
      document.getElementById("fourthEndText").innerHTML =
        "Period 4 Lunch Is Over!";
    }
    timeDetect4 = 0;
  }
} //period 4
function tick5() {
  //fourth Period
  var start = new Date();
  start.setHours(h5, m5, 0);
  var now = new Date();
  if (now > start) {
    start.setDate(start.getDate() + 1);
  }
  var remain = (start - now) / 1000;
  var hh = pad((remain / 60 / 60) % 60);
  var mm = pad((remain / 60) % 60);
  if (lunchMode == "on") {
    if (radVal == "A") {
      h5 = 11;
      m5 = 38;
    }
    if (radVal == "B") {
      h5 = 11;
      m5 = 42;
    }
    if (radVal == "C") {
      h5 = 10;
      m5 = 51;
    }
    if (radVal == "D") {
      h5 = 12;
      m5 = 14;
    }
  }
  if (lunchMode == "on") {
    document.getElementById("fifthEndText").innerHTML =
      "Period 5 Lunch Ends In:" + "&nbsp";
  } else {
    document.getElementById("fifthEndText").innerHTML =
      "Period 5 Ends In:" + "&nbsp";
  }
  if (hh <= 10) {
    document.getElementById("fifthEnd").innerHTML =
      hh + ":" + mm + ":" + seconds;
    timeDetect5 = 1;
    if (tabControl == "on" && timeDetect4 == 0) {
      document.title = hh + ":" + mm + ":" + seconds;
    }
  } else {
    document.getElementById("fifthEnd").innerHTML = " ";
    if (lunchMode == "off") {
      document.getElementById("fifthEndText").innerHTML = "Period 5 Is Over!";
    } else {
      document.getElementById("fifthEndText").innerHTML =
        "Period 5 Lunch Is Over!";
    }
    timeDetect5 = 0;
  }
} //period 5
function tick6() {
  //fourth Period
  var start = new Date();
  start.setHours(h6, m6, 0);
  var now = new Date();
  if (now > start) {
    start.setDate(start.getDate() + 1);
  }
  var remain = (start - now) / 1000;
  var hh = pad((remain / 60 / 60) % 60);
  var mm = pad((remain / 60) % 60);
  if (lunchMode == "on") {
    if (radVal == "A") {
      h6 = 12;
      m6 = 26;
    }
    if (radVal == "B") {
      h6 = 12;
      m6 = 29;
    }
    if (radVal == "C") {
      h6 = 11;
      m6 = 25;
    }
    if (radVal == "D") {
      h6 = 12;
      m6 = 48;
    }
  }
  if (lunchMode == "on") {
    mm = mm - 3;
  }
  if (lunchMode == "on") {
    document.getElementById("sixthEndText").innerHTML =
      "Period 6 Lunch Ends In:" + "&nbsp";
  } else {
    document.getElementById("sixthEndText").innerHTML =
      "Period 6 Ends In:" + "&nbsp";
  }
  if (hh <= 10) {
    document.getElementById("sixthEnd").innerHTML =
      hh + ":" + mm + ":" + seconds;
    timeDetect6 = 1;
    if (tabControl == "on" && timeDetect5 == 0) {
      document.title = hh + ":" + mm + ":" + seconds;
    }
  } else {
    document.getElementById("sixthEnd").innerHTML = " ";
    if (lunchMode == "off") {
      document.getElementById("sixthEndText").innerHTML = "Period 6 Is Over!";
    } else {
      document.getElementById("sixthEndText").innerHTML =
        "Period 6 Lunch Is Over!";
    }
    timeDetect6 = 0;
  }
} //period 6
function tick7() {
  //fourth Period
  var start = new Date();
  start.setHours(h7, m7, 0);
  var now = new Date();
  if (now > start) {
    start.setDate(start.getDate() + 1);
  }
  var remain = (start - now) / 1000;
  var hh = pad((remain / 60 / 60) % 60);
  var mm = pad((remain / 60) % 60);
  if (lunchMode == "on") {
    if (radVal == "A") {
      h7 = 13;
      m7 = 14;
    }
    if (radVal == "B") {
      h7 = 13;
      m7 = 16;
    }
    if (radVal == "C") {
      h7 = 11;
      m7 = 59;
    }
    if (radVal == "D") {
      h7 = 13;
      m7 = 22;
    }
  }
  if (lunchMode == "on") {
    mm = mm - 3;
  }
  if (lunchMode == "on") {
    document.getElementById("seventhEndText").innerHTML =
      "Period 7 Lunch Ends In:" + "&nbsp";
  } else {
    document.getElementById("seventhEndText").innerHTML =
      "Period 7 Ends In:" + "&nbsp";
  }
  if (hh <= 10) {
    document.getElementById("seventhEnd").innerHTML =
      hh + ":" + mm + ":" + seconds;
    timeDetect7 = 1;
    if (tabControl == "on" && timeDetect6 == 0) {
      document.title = hh + ":" + mm + ":" + seconds;
    }
  } else {
    document.getElementById("seventhEnd").innerHTML = " ";
    if (lunchMode == "off") {
      document.getElementById("seventhEndText").innerHTML = "Period 7 Is Over!";
    } else {
      document.getElementById("seventhEndText").innerHTML =
        "Period 7 Lunch Is Over!";
    }
    timeDetect7 = 0;
  }
} //period 7
function tick8() {
  //fourth Period
  var start = new Date();
  start.setHours(h8, m8, 0);
  var now = new Date();
  if (now > start) {
    start.setDate(start.getDate() + 1);
  }
  var remain = (start - now) / 1000;
  var hh = pad((remain / 60 / 60) % 60);
  var mm = pad((remain / 60) % 60);
  if (hh <= 24 && hh >= 8) {
    document.getElementById("eighthEndText").innerHTML = "Period 8 Is Over!";
    document.getElementById("eighthEnd").innerHTML = "";
    timeDetect8 = 0;
  } else {
    document.getElementById("eighthEndText").innerHTML =
      "Period 8 Ends In:" + "&nbsp";
    document.getElementById("eighthEnd").innerHTML =
      hh + ":" + mm + ":" + seconds;
    timeDetect8 = 1;
    if (tabControl == "on" && timeDetect7 == 0) {
      document.title = hh + ":" + mm + ":" + seconds;
    }
  }
} //period 8
function ticke() {
  //fourth Period
  var start = new Date();
  start.setHours(he, me, 0);
  var now = new Date();
  if (now > start) {
    start.setDate(start.getDate() + 1);
  }
  var remain = (start - now) / 1000;
  var hh = pad((remain / 60 / 60) % 60);
  var mm = pad((remain / 60) % 60);
  if (hh <= 24 && hh >= 8) {
    document.getElementById("endText").innerHTML = "";
    document.getElementById("time").innerHTML = "SCHOOL IS OVER!";

    document.title = "SCHOOL IS OVER!";

    timeDetecte = 0;
  } else {
    document.getElementById("endText").innerHTML =
      "End of School In:" + "&nbsp";
    document.getElementById("time").innerHTML = hh + ":" + mm + ":" + seconds;
    // document.title = hh + ":" + mm + ":" + seconds;
    timeDetecte = 1;
    if (tabControl == "on" && timeDetect8 == 0) {
      document.title = hh + ":" + mm + ":" + seconds;
    }
    if (tabControl == "off") {
      document.title = hh + ":" + mm + ":" + seconds;
    }
  }
} //end of day

function repeat() {
  tick1();
  tick2();
  tick3();
  tick4();
  tick5();
  tick6();
  tick7();
  tick8();
  ticke();

  date();

  document.addEventListener("DOMContentLoaded", tick1);
  document.addEventListener("DOMContentLoaded", tick2);
  document.addEventListener("DOMContentLoaded", tick3);
  document.addEventListener("DOMContentLoaded", tick4);
  document.addEventListener("DOMContentLoaded", tick5);
  document.addEventListener("DOMContentLoaded", tick6);
  document.addEventListener("DOMContentLoaded", tick7);
  document.addEventListener("DOMContentLoaded", tick8);
  document.addEventListener("DOMContentLoaded", ticke);

  setTimeout(repeat, 1000);
}
repeat(); //timeouts for each tick
