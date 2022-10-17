import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

// GLOBAL VARIABLES

var xValueWaves = ['2', '3', '4', '5', '6', '7', '8'];
var colorValue_vulnPrimary = "#CB181D"


// PARTICIPATION AND DEMOGRAPHICS
$('#demoNumTable_btn').on('click', function() {
    gsap.to("#demoNumTable", {visibility: 'visible'});
    gsap.to("#demoPercentTable", {visibility: 'hidden'});
});

$('#demoPercentTable_btn').on('click', function() {
    gsap.to("#demoNumTable", {visibility: 'hidden'});
    gsap.to("#demoPercentTable", {visibility: 'visible'});
});




// VULNERABLE ON ONE OR MORE SCALES OVER TIME

var data = [{
    x: xValueWaves,
    y: [29.9,28.7,30.9,32.5,32.2,33.4,32.9],
    mode: 'lines+markers+text',
    marker: {
        color: 'rgb( 203, 24, 29)',
        size: 12
    },
    line: {
        color: 'rgb( 203, 24, 29)',
        width: 4
    },
    text: [29.9,28.7,30.9,32.5,32.2,33.4,32.9],
    texttemplate: "%{text}%",
    textposition: "top center",
    hovertext: [11300,10741,14401,13797,13918,14468,13535],
    hovertemplate: '<span style="padding: 1rem; color:#f5f5f5;"><br>&nbsp;# Vulnerable: <br></span>'+
    '<b>&nbsp;%{hovertext:,}</b><br>'+
    '<extra></extra>',
    textfont: {'family': "Nunito Sans", 'size': 16 , 'color': 'rgb( 203, 24, 29)'},

}];

var layout = {
    margin: {
        l: 100,
        r: 50,
        b: 100,
        t: 50,
        pad: 4
    },
    font: {
        family: 'Nunito Sans',
        size: 16,
        color: '#252525',
    },
    xaxis: {
        title: 'Wave',
        showgrid: false,
        range: [1.5,8.5],
        fixedrange: true
    },
    yaxis: {
        title: 'Percent Vulnerable (%)',
        showline: false,
        range: [20,40],
        fixedrange: true
    },
    
        
};

Plotly.newPlot('trend_vuln1orMore', data, layout, {displayModeBar: false, responsive: true, scrollZoom: false});


// OVERALL VULNERABILITY PROFILE

var yValue_vuln = [29.9,28.7,30.9,32.5,32.2,33.4,32.9];
var yValue_inFlux = [24.0,22.8,22.5,22.9,22.9,22.2,21.8];
var yValue_onTrack = [46.1,48.5,46.6,44.6,44.8,44.5,45.4];

var vuln = {
    x: xValueWaves,
    y: yValue_vuln,
    name: 'Vulnerable',
    type: 'bar',
    text: yValue_vuln.map(String),
    texttemplate: "%{text}%",
    marker: {
        color: colorValue_vulnPrimary
    },
};

var inFlux = {
    x: xValueWaves,
    y: yValue_inFlux,
    name: 'In Flux',
    type: 'bar',
    text: yValue_inFlux.map(String),
    texttemplate: "%{text}%",
    marker: {
        color: "#fcb017"
    },
};

var onTrack = {
    x: xValueWaves,
    y: yValue_onTrack,
    name: 'On Track',
    type: 'bar',
    text: yValue_onTrack.map(String),
    texttemplate: "%{text}%",
    marker: {
        color: "#8EC73F"
    },
    };

var data = [vuln, inFlux, onTrack];

var layout = {
    barmode: 'stack',
    width: 1024,
    height: 500,
    margin: {
        l: 100,
        r: 50,
        b: 100,
        t: 50,
        pad: 4
    },
    font: {
        family: 'Nunito Sans',
        size: 16,
        color: '#252525',
    },
    yaxis: {
        title: "Percent (%)"
    },
    xaxis: {
        title: "Wave"
    }
};

Plotly.newPlot('stackedBar_vulnProfile', data, layout, {displayModeBar: false, responsive: true, scrollZoom: false});



// MAPBOX MAP CODE
mapboxgl.accessToken = 'pk.eyJ1IjoiamVyZW15cmFsZXhhbmRlciIsImEiOiJjaWtyZ3F4anEwMWE5dXBtN3htc3ljNWZ5In0.9rsk4ooh5S5Cr15q9W2rDA';

const map = new mapboxgl.Map({
    container: 'map', // container id
    zoom: 4.3,
    center: [-123.760, 54.4],
    style: 'mapbox://styles/jeremyralexander/cl94q91qo000514o4l6p1on6l', // replace this with your style URL
    cooperativeGestures: true,
});

const nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'top-left');



// RANGE IN NH VULNERABILITY

var wave2 = {
    y: [6,29.9,55],
    x: 'Wave 2',
    marker: {
        color: colorValue_vulnPrimary,
        symbol: 'circle'
    },
    name: '2',
    type: 'box'
};

var wave3 = {
    y: [6,28.7,70],
    x: 'Wave 3',
    marker: {color: colorValue_vulnPrimary},
    name: '3',
    type: 'box'
};

var wave4 = {
    y: [6,30.9,59],
    x: 'Wave 4',
    marker: {color: colorValue_vulnPrimary},
    name: '4',
    type: 'box'
};

var wave5 = {
    y: [4,32.5,56],
    x: 'Wave 5',
    marker: {color: colorValue_vulnPrimary},
    name: '5',
    type: 'box'
};

var wave6 = {
    y: [6,32.2,60],
    x: 'Wave 6',
    marker: {color: colorValue_vulnPrimary},
    name: '6',
    type: 'box'
};

var wave7 = {
    y: [13,33.4,68],
    x: 'Wave 7',
    marker: {color: colorValue_vulnPrimary},
    name: '7',
    type: 'box'
};

var wave8 = {
    y: [13,32.9,72],
    x: 'Wave 8',
    marker: {color: colorValue_vulnPrimary},
    name: '8',
    type: 'box'
};

var data = [wave2, wave3, wave4, wave5, wave6, wave7, wave8];

var layout = {
    font: {
        family: 'Nunito Sans',
        size: 16,
        color: '#252525',
    },
    yaxis: {
        title: "Percent Vulnerable (%)",
        range: [1,80],
    },
    xaxis: {
        title: "Wave",
        zeroline: true,
        zerolinecolor: '#969696',
        zerolinewidth: 4,
        margin: '2rem',
    },
    width: 1024,
    height: 500,
    margin: {
        l: 100,
        r: 50,
        b: 100,
        t: 50,
        pad: 4
    },
    showlegend: false,
}

  Plotly.newPlot('range_vulnDisparity', data, layout, {displayModeBar: false, responsive: true, scrollZoom: false});



// MULTIPLE VULNERABILITIES STACKED BAR CHART

var yValue_oneVuln = [13.8,13.1,13.8,14.5,13.6,13.6,13.3];
var yValue_twoVuln = [7,6.9,7.2,8,7.7,8.1,8];
var yValue_threeVuln = [4.1,4.1,4.5,4.6,5.1,5.2,5.2];
var yValue_fourVuln = [2.9,2.7,3,3.1,3.3,3.4,3.5];
var yValue_fiveVuln = [2.1,2,2.3,2.4,2.6,2.9,2.8];

var oneVuln = {
    x: xValueWaves,
    y: yValue_oneVuln,
    name: '1 Scale',
    type: 'bar',
    text: yValue_oneVuln.map(String),
    texttemplate: "%{text}%",
    marker: {
        color: "#FC9272"
    },
};

var twoVuln = {
    x: xValueWaves,
    y: yValue_twoVuln,
    name: '2 Scales',
    type: 'bar',
    text: yValue_twoVuln.map(String),
    texttemplate: "%{text}%",
    marker: {
        color: "#FB6A4A"
    },
};

var threeVuln = {
    x: xValueWaves,
    y: yValue_threeVuln,
    name: '3 Scales',
    type: 'bar',
    text: yValue_threeVuln.map(String),
    texttemplate: "%{text}%",
    marker: {
        color: "#EF3B2C"
    },
};

var fourVuln = {
    x: xValueWaves,
    y: yValue_fourVuln,
    name: '4 Scales',
    type: 'bar',
    text: yValue_fourVuln.map(String),
    texttemplate: "%{text}%",
    marker: {
        color: colorValue_vulnPrimary,
    },
};

var fiveVuln = {
    x: xValueWaves,
    y: yValue_fiveVuln,
    name: '5 Scales',
    type: 'bar',
    text: yValue_fiveVuln.map(String),
    texttemplate: "%{text}%",
    marker: {
        color: "#99000D"
    },
};


var data = [oneVuln,twoVuln,threeVuln,fourVuln,fiveVuln];

var layout = {
    barmode: 'stack',
    width: 1024,
    height: 500,
    margin: {
        l: 100,
        r: 50,
        b: 100,
        t: 50,
        pad: 4
    },
    font: {
        family: 'Nunito Sans',
        size: 16,
        color: '#252525',
    },
    xaxis: {
        title: 'Wave',
        showgrid: false,
        range: [1.5,8.5],
        fixedrange: true
    },
    yaxis: {
        title: 'Percent Vulnerable (%)',
        showline: false,
        range: [0,50],
        fixedrange: true
    }, 
};

Plotly.newPlot('stackedBar_multiVuln', data, layout, {displayModeBar: false, responsive: true, scrollZoom: false});



// SCALE-LEVEL OUTCOMES STACKED BAR CHART

var yValue_ScaleNames = ['Physical', 'Social', 'Emotional','Language','Communication'];
var xValue_vulnOutcome = [14.7,16.3,17.5,10.5,14.3];
var xValue_inFluxOutcome = [15.5,15.2,15.6,11.1,10.4];
var xValue_onTrackOutcome = [69.8,68.5,67.0,78.4,75.3];

var vulnOutcome = {
    x: xValue_vulnOutcome,
    y: yValue_ScaleNames,
    name: 'Vulnerable',
    type: 'bar',
    text: xValue_vulnOutcome.map(String),
    texttemplate: "%{text}%",
    marker: {
        color: colorValue_vulnPrimary
    },
    orientation: 'h'
};

var inFluxOutcome = {
    x: xValue_inFluxOutcome,
    y: yValue_ScaleNames,
    name: 'In Flux',
    type: 'bar',
    text: xValue_inFluxOutcome.map(String),
    texttemplate: "%{text}%",
    marker: {
        color: "#fcb017"
    },
    orientation: 'h'
};

var onTrackOutcome = {
    x: xValue_onTrackOutcome,
    y: yValue_ScaleNames,
    name: 'On Track',
    type: 'bar',
    text: xValue_onTrackOutcome.map(String),
    texttemplate: "%{text}%",
    marker: {
        color: "#8EC73F"
    },
    orientation: 'h'
};


var data = [vulnOutcome,inFluxOutcome,onTrackOutcome];

var layout = {
    barmode: 'stack',
    width: 1024,
    height: 500,
    margin: {
        l: 150,
        r: 50,
        b: 100,
        t: 50,
        pad: 5
    },
    font: {
        family: 'Nunito Sans',
        size: 16,
        color: '#252525',
    },
    xaxis: {
        title: "Percent (%)",
        showgrid: false,
        range: [0,100],
        fixedrange: true
    },
    yaxis: {
        showline: false,
        fixedrange: true
    }, 
};

Plotly.newPlot('stackedBar_scaleOutcomes', data, layout, {displayModeBar: false, responsive: true, scrollZoom: false});