import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

// GLOBAL VARIABLES

const xValueWaves = ['2', '3', '4', '5', '6', '7', '8'];
const colorValue_vulnPrimary = "#CB181D"


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

function vulnTrendLineChart () {
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
        hovertemplate: '<span style="color:#f5f5f5;"><br>&nbsp;# Vulnerable: <br></span>'+
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
};

vulnTrendLineChart ();


// OVERALL VULNERABILITY PROFILE

function overallOutcomesBarChart () {
    const yValue_vuln = [29.9,28.7,30.9,32.5,32.2,33.4,32.9];
    const yValue_inFlux = [24.0,22.8,22.5,22.9,22.9,22.2,21.8];
    const yValue_onTrack = [46.1,48.5,46.6,44.6,44.8,44.5,45.4];

    const vuln = {
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

    const inFlux = {
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

    const onTrack = {
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
        legend: {
            "orientation":"h",
            x: 0, 
            y: 110,
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
        },
        hovermode: false,
    };

    Plotly.newPlot('stackedBar_vulnProfile', data, layout, {displayModeBar: false, responsive: true, scrollZoom: false});
};

overallOutcomesBarChart ();




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

function nhRangeVulnBoxPlot () {
    const wave2 = {
        y: [6,9,9.4,10.5,11,11.5,11.8,12,12.5,12.5,12.7,13,13.3,13.6,13.9,14,14.3,14.3,14.5,14.6,14.8,15,15.5,15.5,15.6,16,16,16.1,18,18.1,18.2,18.2,18.9,18.9,19,19.5,19.7,19.8,20,20.2,20.4,20.5,20.6,20.8,20.9,20.9,21.1,21.1,21.4,21.4,21.5,21.5,21.7,21.8,21.9,22.1,22.1,22.2,22.2,22.2,22.4,22.4,22.5,22.5,22.5,22.6,22.7,22.9,23,23,23,23.1,23.1,23.3,23.4,23.5,23.5,23.5,23.6,23.6,23.8,23.8,23.9,24.1,24.1,24.4,24.4,24.4,24.4,24.6,24.7,25,25.2,25.3,25.3,25.3,25.3,25.4,25.6,25.6,25.7,25.7,25.7,25.8,25.9,25.9,26.1,26.2,26.3,26.4,26.4,26.4,26.5,26.5,26.5,26.5,26.7,26.7,26.8,27,27.1,27.1,27.1,27.4,27.5,27.5,27.5,27.6,27.6,28,28.1,28.1,28.3,28.3,28.4,28.6,28.6,28.8,28.8,29,29.2,29.2,29.2,29.2,29.4,29.4,29.5,29.8,29.8,29.8,29.9,30,30.1,30.2,30.3,30.5,30.5,30.6,30.6,30.8,30.8,31,31.1,31.1,31.1,31.1,31.3,31.3,31.3,31.5,31.6,31.7,31.8,31.8,31.9,32,32.1,32.3,32.3,32.4,32.5,32.6,32.6,32.8,32.8,33.2,33.3,33.3,33.3,33.3,33.3,33.3,33.7,33.8,33.9,34,34.2,34.3,34.4,34.6,34.6,34.8,35,35.1,35.1,35.2,35.2,35.4,35.6,35.6,35.8,36,36.4,36.5,37,37.2,37.5,37.6,37.9,38.1,38.3,38.4,38.5,39,39.3,39.7,40.1,40.1,40.3,40.4,41.2,41.3,41.8,41.8,42.3,43.1,43.4,43.4,43.8,44.4,44.8,45.1,45.3,45.3,45.4,45.5,45.9,46.2,46.2,46.8,47.1,47.2,48.1,48.3,48.3,48.5,48.5,49.1,49.1,49.4,51.6,51.9,52.8,53.2,53.6,53.8,54.5,55.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
        x: 'Wave 2',
        marker: {
            color: colorValue_vulnPrimary,
            symbol: 'circle'
        },
        name: '2',
        type: 'box'
    };
    
    const wave3 = {
        y: [6.1,6.7,7.6,8,10.4,10.6,10.7,10.8,11.4,11.4,11.8,12.1,12.2,12.7,13,13.4,13.6,13.6,13.8,14.2,14.7,14.8,14.8,15,15,15.1,15.4,15.5,15.6,15.8,16.1,16.2,16.2,16.4,16.4,16.5,16.5,17.1,17.3,17.3,17.4,17.5,17.5,17.6,17.6,17.9,18.1,18.1,18.2,18.3,18.3,18.4,18.4,18.4,18.5,18.5,19,19.2,19.3,19.3,19.4,19.4,19.4,19.6,19.6,19.8,20,20.2,20.5,20.5,20.6,20.7,20.7,20.8,20.9,20.9,21,21.3,21.3,21.3,21.7,21.8,21.8,21.9,22.1,22.1,22.3,22.3,22.6,22.6,22.7,22.7,22.8,23,23.2,23.3,23.4,23.5,23.5,23.6,23.6,23.7,23.7,23.7,23.8,23.8,23.9,24,24.1,24.1,24.2,24.3,24.3,24.4,24.4,24.4,24.4,24.6,24.8,24.8,25,25.2,25.2,25.3,25.4,25.7,25.9,26,26,26.1,26.1,26.2,26.2,26.3,26.4,26.4,26.6,26.7,26.7,26.8,27.1,27.3,27.3,27.3,27.4,27.6,27.6,27.8,27.8,27.9,28,28,28.1,28.3,28.4,28.4,28.6,28.6,28.7,28.9,29.1,29.1,29.3,29.3,29.3,29.6,29.8,29.9,29.9,30,30.1,30.1,30.2,30.6,30.7,30.9,31,31,31.3,31.3,31.3,31.3,31.4,31.5,31.6,31.8,31.8,31.8,31.8,31.8,31.9,32,32,32.1,32.2,32.2,32.2,32.3,32.6,32.6,32.6,32.8,32.9,33.1,33.3,33.3,33.3,33.6,33.6,33.9,34,34,34,34.1,34.1,34.1,34.5,34.8,35,35.1,35.1,35.1,35.1,35.2,35.4,35.4,35.6,35.7,35.9,36,36.2,36.4,36.4,36.6,36.7,36.8,37.3,37.7,37.9,38.3,39.1,39.1,39.2,39.2,39.8,39.9,40,40.2,40.3,40.4,40.4,40.7,40.7,40.9,41,41,41.1,41.2,41.5,42.2,42.4,42.6,42.6,42.9,42.9,43,43.6,43.6,43.7,43.8,44.6,44.8,45.1,45.3,45.4,45.7,45.9,45.9,46,46.2,46.5,46.7,46.8,46.8,47.7,47.9,47.9,49.2,50,54.9,69.6,null,null,null,null,null,null,null],
        x: 'Wave 3',
        marker: {color: colorValue_vulnPrimary},
        name: '3',
        type: 'box'
    };
    
    const wave4 = {
        y: [6.4,6.6,10.1,13.4,14.6,14.8,15,15.1,15.2,15.3,15.4,15.5,15.7,15.7,15.8,15.8,15.9,16.9,17,17.1,17.1,17.2,17.4,17.4,17.5,17.6,17.6,17.9,17.9,18.1,18.2,18.3,18.4,18.8,19.3,19.4,19.6,19.8,19.9,20,20.2,20.3,20.5,20.5,20.5,20.6,20.8,21.1,21.1,21.2,21.2,21.3,21.3,21.3,21.5,21.5,21.8,21.9,21.9,22,22.2,22.3,22.4,22.4,22.6,22.7,22.7,22.8,22.9,22.9,22.9,23,23.1,23.2,23.3,23.3,23.8,23.8,24,24.1,24.1,24.2,24.3,24.4,24.4,24.5,24.7,24.7,24.8,24.8,24.8,25,25.2,25.2,25.4,25.7,25.7,25.7,25.7,25.9,25.9,25.9,26,26,26.4,26.5,26.6,26.6,26.8,26.8,27,27.1,27.1,27.2,27.3,27.3,27.3,27.4,27.4,27.4,27.5,27.8,27.9,27.9,28,28.1,28.3,28.4,28.6,28.8,28.8,29.1,29.1,29.1,29.2,29.3,29.4,29.5,29.9,30,30.2,30.2,30.3,30.4,30.4,30.4,30.5,30.6,30.8,30.8,30.9,31,31,31.1,31.4,31.6,31.8,31.8,31.9,31.9,32,32.1,32.1,32.4,32.4,32.5,32.6,32.6,32.6,32.7,32.7,32.7,33.1,33.2,33.3,33.6,33.6,33.6,33.7,33.8,33.8,33.9,33.9,34.1,34.1,34.3,34.4,34.4,34.5,34.5,34.6,34.7,34.7,34.9,34.9,35,35,35.1,35.2,35.3,35.6,35.9,35.9,36.1,36.1,36.3,36.5,36.8,36.8,36.8,37,37,37.1,37.3,37.5,37.7,37.9,38.1,38.2,38.2,38.4,38.5,38.6,38.7,38.9,39.3,39.3,39.4,40,40,40.1,40.2,40.5,40.6,40.7,40.9,41.2,41.5,41.7,41.8,41.8,42.4,42.4,42.5,42.7,42.7,42.8,42.8,43,43.2,43.2,43.7,43.7,43.8,44,44.1,44.1,44.3,44.6,44.9,45.1,45.4,45.5,45.8,45.9,46,46.4,47,47.2,47.7,47.8,48,48.1,49.1,50.3,50.8,50.9,51,51.2,51.4,54.5,55.3,55.4,59.1,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
        x: 'Wave 4',
        marker: {color: colorValue_vulnPrimary},
        name: '4',
        type: 'box'
    };
    
    const wave5 = {
        y: [4.3,8.1,8.3,10.9,12.5,13.8,14.9,15.9,16.5,16.6,17,17.2,17.3,17.6,17.6,17.7,17.7,17.9,18,18.4,18.6,18.7,19.6,19.8,20,20,20.4,20.5,20.8,20.9,21.1,21.4,22.3,22.4,22.4,22.8,22.9,22.9,22.9,23,23,23.1,23.1,23.1,23.3,23.4,23.6,23.7,23.7,23.8,23.8,24.1,24.2,24.4,24.5,24.6,24.6,24.7,24.8,24.8,25,25,25.1,25.2,25.2,25.2,25.4,25.6,25.7,25.8,25.8,25.9,26,26.3,26.6,26.6,26.7,26.8,26.9,27,27,27.1,27.1,27.1,27.1,27.1,27.2,27.2,27.2,27.3,27.5,27.5,27.5,27.8,27.8,27.8,27.8,27.9,28,28,28.2,28.3,28.5,28.6,28.6,28.8,28.8,28.9,29.1,29.3,29.5,29.6,29.6,29.7,29.7,29.7,29.8,29.9,29.9,30,30,30,30.1,30.1,30.1,30.1,30.2,30.3,30.3,30.4,30.5,30.5,30.6,30.6,30.7,30.7,30.8,31,31.3,31.3,31.3,31.4,31.5,31.5,31.6,31.8,31.9,31.9,32,32.1,32.1,32.2,32.3,32.3,32.4,32.4,32.5,32.5,32.5,32.6,32.7,32.9,33,33.1,33.1,33.1,33.1,33.1,33.3,33.3,33.3,33.3,33.6,33.8,33.8,34.1,34.1,34.1,34.2,34.3,34.3,34.3,34.5,34.5,34.6,34.7,34.7,34.8,34.9,35,35.1,35.1,35.2,35.3,35.3,35.3,35.5,35.8,35.8,35.9,36,36,36,36,36.1,36.2,36.2,36.3,36.4,36.4,36.5,36.5,36.6,36.9,36.9,37.1,37.1,37.1,37.2,37.4,37.4,37.9,37.9,37.9,38.1,38.2,38.2,38.4,38.5,38.9,39,39.1,39.1,39.1,39.2,39.4,39.6,39.7,40,40.2,40.3,40.4,40.7,40.9,40.9,41.3,41.7,41.8,41.8,41.9,41.9,42.3,42.4,42.4,42.4,42.4,42.4,42.5,42.6,42.7,42.9,43,43.1,43.1,43.2,43.4,43.6,43.7,44,44.3,44.5,44.9,45.2,45.5,45.7,45.9,46,46.7,47,47.1,47.7,48.3,49.1,49.2,49.6,50,50,50.6,51.7,51.8,52,52.4,52.9,53.5,56.4,null,null,null],
        x: 'Wave 5',
        marker: {color: colorValue_vulnPrimary},
        name: '5',
        type: 'box'
    };
    
    const wave6 = {
        y: [9.2,10.4,11.3,13.8,13.8,14.3,15.7,15.7,16.6,16.9,16.9,17.3,17.5,17.6,18.1,18.3,18.6,18.6,18.8,18.9,19.2,19.4,19.4,19.6,19.7,19.8,20.1,20.5,20.5,20.6,20.7,20.7,20.8,20.8,21,21.1,21.4,21.5,21.6,21.6,21.7,22.1,22.2,22.4,22.5,22.5,22.9,23.1,23.4,23.6,23.9,24,24.1,24.1,24.2,24.3,24.4,24.5,24.7,24.7,24.7,24.8,25.2,25.2,25.2,25.4,25.5,25.6,25.6,25.6,25.7,25.8,25.8,25.8,26,26.1,26.4,26.4,26.5,26.5,26.7,26.8,26.9,26.9,26.9,27,27.1,27.2,27.4,27.5,27.5,27.5,27.7,27.7,27.8,27.8,27.8,28,28.2,28.3,28.4,28.4,28.6,28.7,28.7,28.9,28.9,29,29,29.2,29.2,29.4,29.5,29.5,29.5,29.6,29.6,29.6,29.7,29.8,29.8,29.8,30,30,30,30.1,30.2,30.3,30.4,30.4,30.6,30.6,30.7,30.8,30.8,30.9,30.9,31.2,31.2,31.3,31.3,31.4,31.4,31.5,31.5,31.6,31.7,31.7,31.7,31.8,31.8,31.9,31.9,31.9,32,32.1,32.1,32.3,32.5,32.7,32.8,32.8,32.9,33,33,33.1,33.1,33.1,33.1,33.2,33.3,33.3,33.3,33.3,33.3,33.6,33.7,33.8,33.9,34,34,34.1,34.1,34.2,34.7,34.8,34.9,35,35.1,35.3,35.3,35.3,35.3,35.4,35.7,35.8,35.8,35.9,35.9,35.9,35.9,36.1,36.1,36.4,36.5,36.5,36.5,36.5,36.5,36.6,36.7,36.7,36.8,36.9,37,37.1,37.1,37.3,37.4,37.9,38.1,38.1,38.2,38.3,38.3,38.3,38.3,38.4,38.5,38.5,38.5,38.6,38.6,38.7,38.8,38.9,39,39.1,39.2,39.2,39.4,39.6,39.7,39.8,40.1,40.2,40.4,40.5,40.6,40.6,40.7,40.8,41.1,41.5,41.5,41.6,41.9,41.9,42.3,42.6,43.2,43.4,43.7,44,44.1,44.4,44.6,44.6,45.1,45.4,45.5,45.5,45.7,45.8,46.2,46.4,47.1,47.6,47.9,47.9,48.2,48.8,50.3,51.1,51.5,51.8,52,52.6,52.9,55.6,56.2,57.1,57.9,60.4,null,null,null,null],
        x: 'Wave 6',
        marker: {color: colorValue_vulnPrimary},
        name: '6',
        type: 'box'
    };
    
    const wave7 = {
        y: [12.6,13.2,13.8,14.7,14.9,17.7,18.1,18.9,19.2,19.8,19.8,20.3,20.3,20.7,21,21.1,21.3,21.4,21.4,21.5,21.7,21.7,22,22.1,22.2,22.4,22.4,22.6,22.6,22.7,22.8,23,23,23.1,23.1,23.2,23.5,23.5,23.6,23.8,24,24.1,24.1,24.2,24.3,24.5,24.6,24.9,25.3,25.3,25.4,25.4,25.7,25.7,25.8,25.8,26,26.1,26.1,26.1,26.1,26.3,26.5,26.6,26.6,26.7,26.9,27,27,27.1,27.2,27.4,27.4,27.5,27.5,27.6,27.7,27.8,27.9,28,28,28.1,28.3,28.3,28.3,28.4,28.5,28.6,28.6,28.7,28.7,28.8,28.8,28.8,28.9,28.9,28.9,29,29,29.2,29.2,29.2,29.3,29.3,29.3,29.3,29.4,29.4,29.4,29.4,29.4,29.6,29.6,29.7,29.8,29.8,30,30,30.2,30.2,30.5,30.6,30.6,30.7,30.8,30.8,31,31,31,31.2,31.2,31.3,31.3,31.4,31.4,31.5,31.6,31.7,31.7,31.9,31.9,32,32,32.2,32.4,32.5,32.5,32.5,32.9,33.1,33.2,33.3,33.3,33.3,33.3,33.5,33.6,33.7,33.8,33.8,33.9,33.9,34,34.1,34.1,34.1,34.2,34.3,34.4,34.4,34.5,34.5,34.6,34.7,34.8,35.1,35.3,35.5,35.6,35.7,35.7,35.9,36,36,36,36.3,36.3,36.3,36.4,36.4,36.4,36.4,36.5,36.5,36.6,36.8,36.8,36.8,36.9,36.9,37.1,37.2,37.3,37.5,37.5,37.6,37.7,37.9,38.2,38.3,38.4,38.6,39,39.1,39.2,39.2,39.2,39.3,39.6,39.6,39.6,39.7,39.7,39.8,40,40.3,40.3,40.4,40.5,40.6,40.7,40.7,40.8,40.9,41.1,41.2,41.4,41.5,41.5,41.6,41.7,42,42.2,42.3,42.4,42.4,42.4,42.5,42.6,42.6,42.8,42.9,43.1,43.1,43.1,43.5,44.1,44.3,44.4,44.6,44.8,45,45.1,45.2,45.7,45.7,45.7,45.9,46,46.1,46.2,46.2,46.3,46.5,47,47.1,47.1,47.2,47.4,47.7,48.7,48.8,49.2,51.3,51.5,51.7,53.3,54,55.6,57.1,58.3,60.2,60.7,68.4,null,null,null,null],
        x: 'Wave 7',
        marker: {color: colorValue_vulnPrimary},
        name: '7',
        type: 'box'
    };
    
    const wave8 = {
        y: [13.2,14,15.4,15.5,16.7,17.6,18.5,18.6,18.7,19,19,19.6,19.9,20,20.6,20.7,20.9,20.9,21.2,21.2,21.3,21.3,21.7,21.8,21.9,21.9,22,22.6,23.1,23.3,23.6,23.7,23.8,23.9,24,24,24.1,24.3,24.3,24.3,24.4,24.4,24.5,24.6,24.6,24.7,24.7,24.8,24.8,24.8,24.9,24.9,25,25,25.2,25.2,25.4,25.4,25.5,25.6,25.6,25.8,25.9,26.4,26.5,26.6,26.6,26.7,26.8,26.8,26.9,27,27,27,27,27.3,27.3,27.4,27.4,27.6,27.7,27.7,27.7,27.8,27.9,27.9,28,28.3,28.3,28.4,28.4,28.4,28.5,28.6,28.7,28.8,28.9,29.2,29.3,29.3,29.4,29.5,29.5,29.6,29.7,29.7,29.8,29.8,29.8,29.9,30.1,30.1,30.1,30.2,30.3,30.4,30.5,30.6,30.6,30.7,30.7,30.7,30.9,31,31,31.1,31.4,31.5,31.5,31.7,31.8,31.8,31.9,32.3,32.4,32.4,32.5,32.5,32.6,32.7,32.7,32.8,32.8,32.9,33,33.1,33.1,33.1,33.1,33.3,33.3,33.3,33.3,33.6,33.6,33.6,33.6,33.7,33.7,33.7,33.7,33.8,33.9,33.9,33.9,34,34.1,34.1,34.2,34.4,34.4,34.5,34.6,34.7,34.7,34.8,34.8,34.8,34.9,34.9,35,35.2,35.4,35.4,35.5,35.6,35.6,35.6,35.7,35.7,35.8,35.9,35.9,36.1,36.1,36.3,36.3,36.4,36.4,36.5,36.5,36.6,36.6,36.8,36.9,37,37.3,37.3,37.4,37.6,37.6,37.7,37.7,38,38,38.1,38.2,38.2,38.5,38.7,38.9,39,39,39.1,39.1,39.4,39.7,40.2,40.2,40.2,40.2,40.3,40.4,40.4,40.4,40.5,40.5,40.5,40.6,40.7,40.9,41.6,41.6,41.8,42.1,42.1,42.2,42.2,42.2,42.4,42.5,43,43,43.1,43.1,43.2,43.2,43.3,43.3,43.4,43.5,43.7,43.9,44.1,44.4,44.5,45,45.3,45.5,45.6,45.7,45.9,45.9,45.9,46.4,47,47,47.7,48.9,49,49.2,50.7,50.8,51.1,51.2,51.3,51.9,52,52.5,53.2,57.3,62.5,72,null,null,null,null],
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

};

nhRangeVulnBoxPlot ();


// MULTIPLE VULNERABILITIES STACKED BAR CHART

function multiVulnBarChart () {
    const yValue_oneVuln = [13.8,13.1,13.8,14.5,13.6,13.6,13.3];
    const yValue_twoVuln = [7,6.9,7.2,8,7.7,8.1,8];
    const yValue_threeVuln = [4.1,4.1,4.5,4.6,5.1,5.2,5.2];
    const yValue_fourVuln = [2.9,2.7,3,3.1,3.3,3.4,3.5];
    const yValue_fiveVuln = [2.1,2,2.3,2.4,2.6,2.9,2.8];

    const oneVuln = {
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

    const twoVuln = {
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

    const threeVuln = {
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

    const fourVuln = {
        x: xValueWaves,
        y: yValue_fourVuln,
        name: '4 Scales',
        type: 'bar',
        text: yValue_fourVuln.map(String),
        texttemplate: "%{text}%",
        marker: {
            color: colorValue_vulnPrimary,
        },
        legend: {
            y: 0.0,
        },
    };

    const fiveVuln = {
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
};

multiVulnBarChart ();



// SCALE-LEVEL VULNERABILITY TRENDS





// SCALE-LEVEL OUTCOMES STACKED BAR CHART

function scaleOutcomesBarChart () {
    const yValue_ScaleNames = ['Physical', 'Social', 'Emotional','Language','Communication'];
    const xValue_vulnOutcome = [14.7,16.3,17.5,10.5,14.3];
    const xValue_inFluxOutcome = [15.5,15.2,15.6,11.1,10.4];
    const xValue_onTrackOutcome = [69.8,68.5,67.0,78.4,75.3];

    const vulnOutcome = {
        x: xValue_vulnOutcome,
        y: yValue_ScaleNames,
        name: 'Vulnerable',
        type: 'bar',
        text: xValue_vulnOutcome.map(String),
        texttemplate: "%{text}%",
        marker: {
            color: colorValue_vulnPrimary
        },
        orientation: 'h',
    };

    const inFluxOutcome = {
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

    const onTrackOutcome = {
        x: xValue_onTrackOutcome,
        y: yValue_ScaleNames,
        name: 'On Track',
        type: 'bar',
        text: xValue_onTrackOutcome.map(String),
        texttemplate: "%{text}%",
        marker: {
            color: "#8EC73F"
        },
        orientation: 'h',
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
        legend: {
            "orientation":"h",
            y: 5,
            x: 0,
            traceorder: 'normal',
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
};

scaleOutcomesBarChart ();




// EDI SUBSCALE-LEVEL OUTCOMES