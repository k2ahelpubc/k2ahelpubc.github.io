import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

// GLOBAL VARIABLES

const xValueWaves = ['2', '3', '4', '5', '6', '7', '8'];
const scaleColours = {
    onTrack: '#8EC73F',
    inFlux: '#FCB017',
    vuln1orMore: {
        primary: '#CB181D',
        colorramp: ['#FFF5F0', '#FEE0D2', '#FCBBA1', '#FC9272', '#FB6A4A', '#EF3B2C', '#CB181D', '#99000D'],
    },
    social: {
        primary: '#3182BD',
        colorramp: ['#EFF3FF', '#C6DBEF', '#9ECAE1', '#6BAED6', '#3182BD', '#08519C'],
    },
    emotional: {
        primary: '#54278F',
        colorramp: ['#F2F0F7', '#DADAEB', '#BCBDDC', '#9E9AC8', '#756BB1', '#54278F'],
    },
    physical: {
        primary: '#006D2C',
        colorramp: ['#EDF8E9', '#C7E9C0', '#A1D99B', '#74C476', '#31A354', '#006D2C'],
    },
    language: {
        primary: '#C51B8A',
        colorramp: ['#FEEBE2', '#FCC5C0', '#FA9FB5', '#F768A1', '#C51B8A', '#7A0177'],
    },
    communication: {
        primary: '#E6550D',
        colorramp: ['#FEEDDE', '#FDD0A2', '#FDAE6B', '#FD8D3C', '#E6550D', '#A63603'],
    },
};
// EDI SCALE DATA STRUCTURES

const overallTrendData = {
    vuln: [29.9, 28.7, 30.9, 32.5, 32.2, 33.4, 32.9], 
    numVuln: [11300, 10741, 14401, 13797, 13918, 14468, 13535],
    inFlux: [24.0, 22.8, 22.5, 22.9, 22.9, 22.2, 21.8],
    onTrack: [46.1, 48.5, 46.6, 44.6, 44.8, 44.5, 45.4],
    multiVuln: {
        oneVuln: [13.8, 13.1, 13.8, 14.5, 13.6, 13.6, 13.3],
        twoVuln: [7, 6.9, 7.2, 8, 7.7, 8.1, 8],
        threeVuln: [4.1, 4.1, 4.5, 4.6, 5.1, 5.2, 5.2],
        fourVuln: [2.9, 2.7, 3, 3.1, 3.3, 3.4, 3.5],
        fiveVuln: [2.1, 2, 2.3, 2.4, 2.6, 2.9, 2.8],
    },
};
const socialTrendData = {
    scaleVuln: [13.3, 12.7, 14.5, 15.6, 15.7, 16.1, 16.3],
    scaleNumVuln: [5013, 4748, 6750, 6609, 6756, 6976, 6703],
    scaleAtRisk: [14, 13.8, 13.6, 14.9, 15.6, 15.5, 15.2],
    scaleOnTrack: [72.7, 73.5, 71.9, 69.4, 68.7, 68.4, 68.5],
    subscales: {
        overallSocComp: [0.00, 0.03, -0.02, -0.08, -0.11, -0.11, -0.11],
        approachLearn: [0.00, 0.02, -0.01, -0.06, -0.08, -0.10, -0.12],
        readinessExplore: [0.00, 0.02, 0.03, 0.04, 0.00, -0.01, 0.02],
        respectResponsibility: [0.00, 0.01, -0.05, -0.12, -0.13, -0.14, -0.15],
    },
};
const emotionalTrendData = {
    scaleVuln: [11.9, 12.4, 13.8, 14.9, 16.1, 17.7, 17.5],
    scaleNumVuln: [4441, 4578, 6394, 6269, 6936, 7642, 7173],
    scaleAtRisk: [15.1, 15.4, 15.6, 15.8, 16, 16.2, 15.6],
    scaleOnTrack: [72.9, 72.2, 70.6, 69.4, 67.9, 66.1, 67],
    subscales: {
        agressive: [0.00, -0.01, -0.07, -0.17, -0.19, -0.23, -0.20],
        anxiousFearful: [0.00, 0.01, 0.00, -0.08, -0.20, -0.25, -0.23],
        hyperInattentive: [0.00, 0.02, 0.00, -0.06, -0.13, -0.16, -0.17],
        prosocialHelping: [0.00, -0.09, -0.10, -0.03, 0.00, -0.02, 0.01],
    },
};
const physicalTrendData = {
    scaleVuln: [12, 11.7, 13.4, 15.7, 14.8, 15.4, 14.7],
    scaleNumVuln: [4514, 4351, 6262, 6631, 6390, 6683, 6030],
    scaleAtRisk: [16.6, 15.5, 16.3, 17.7, 16.9, 16.5, 15.5],
    scaleOnTrack: [71.4, 72.9, 70.2, 66.7, 68.2, 68.1, 69.8],
    subscales: {
        grossFineMotorSkills: [0.00, 0.09, 0.04, 0.03, 0.01, 0.04, 0.04],
        physIndep: [0.00, -0.02, -0.04, -0.11, -0.11, -0.15, -0.16],
        physRead: [0.00, -0.04, -0.11, -0.25, -0.15, -0.19, -0.09],
    },
};
const languageTrendData = {
    scaleVuln: [11.3, 10.1, 10.3, 9, 9.4, 10.6, 10.5],
    scaleNumVuln: [4236, 3748, 4755, 3800, 4058, 4578, 4302],
    scaleAtRisk: [11.8, 10.6, 10.4, 9.6, 9.6, 10.5, 11.1],
    scaleOnTrack: [76.8, 79.3, 79.3, 81.4, 81, 78.9, 78.4],
    subscales: {
        basicLit: [0.00, 0.05, 0.06, 0.13, 0.10, 0.06, 0.04],
        advLit: [0.00, 0.10, 0.07, 0.11, 0.13, 0.06, 0.03],
        basicNum: [0.00, 0.02, 0.01, 0.07, 0.07, 0.02, 0.02],
        interestNumLit: [0.00, 0.07, 0.09, 0.11, 0.09, 0.06, 0.04],
    },
};
const communicationTrendData = {
    scaleVuln: [14.2, 13.2, 13.6, 13.7, 14.2, 14.3, 14.3],
    scaleNumVuln: [5337, 4927, 6349, 5795, 6144, 6214, 5885],
    scaleAtRisk: [11.8, 10.6, 10.9, 11.2, 11.4, 10.6, 10.4],
    scaleOnTrack: [74, 76.2, 75.5, 75.2, 74.4, 75, 75.3],
    subscales: {
        commSkills: [0.00, 0.07, 0.04, 0.04, 0.01, 0.03, 0.03],
    }
};




// PARTICIPATION AND DEMOGRAPHICS
$('#demoNumTable_btn').on('click', function () {
    gsap.to("#demoNumTable", { visibility: 'visible' });
    gsap.to("#demoPercentTable", { visibility: 'hidden' });
});

$('#demoPercentTable_btn').on('click', function () {
    gsap.to("#demoNumTable", { visibility: 'hidden' });
    gsap.to("#demoPercentTable", { visibility: 'visible' });
});





// VULNERABLE ON ONE OR MORE SCALES OVER TIME

function vulnTrendLineChart() {
    var data = [{
        x: xValueWaves,
        y: overallTrendData.vuln,
        mode: 'lines+markers+text',
        marker: {
            color: scaleColours.vuln1orMore.primary,
            size: 12
        },
        line: {
            color: scaleColours.vuln1orMore.primary,
            width: 4
        },
        text: overallTrendData.vuln,
        texttemplate: "%{text}%",
        textposition: "top center",
        hovertext: overallTrendData.numVuln,
        hovertemplate: '<span style="color:#f5f5f5;"><br>&nbsp;# Vulnerable: <br></span>' +
            '<b>&nbsp;%{hovertext:,}</b><br>' +
            '<extra></extra>',
        textfont: { 'family': "Nunito Sans", 'size': 16, 'color': scaleColours.vuln1orMore.primary },

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
            range: [1.5, 8.5],
            fixedrange: true
        },
        yaxis: {
            title: 'Percent Vulnerable (%)',
            showline: false,
            range: [0, 40],
            fixedrange: true,
            dtick: 10,
        }
    };

    Plotly.newPlot('trend_vuln1orMore', data, layout, { displayModeBar: false, responsive: true, scrollZoom: false });
};

vulnTrendLineChart();





// MULTIPLE VULNERABILITIES STACKED BAR CHART

function multiVulnBarChart() {

    const oneVuln = {
        x: xValueWaves,
        y: overallTrendData.multiVuln.twoVuln,
        name: '1 Scale',
        type: 'bar',
        text: overallTrendData.multiVuln.oneVuln,
        texttemplate: "%{text}%",
        marker: {
            color: scaleColours.vuln1orMore.colorramp[3],
        },
    };

    const twoVuln = {
        x: xValueWaves,
        y: overallTrendData.multiVuln.twoVuln,
        name: '2 Scales',
        type: 'bar',
        text: overallTrendData.multiVuln.twoVuln,
        texttemplate: "%{text}%",
        marker: {
            color: scaleColours.vuln1orMore.colorramp[4],
        },
    };

    const threeVuln = {
        x: xValueWaves,
        y: overallTrendData.multiVuln.threeVuln,
        name: '3 Scales',
        type: 'bar',
        text: overallTrendData.multiVuln.threeVuln,
        texttemplate: "%{text}%",
        marker: {
            color: scaleColours.vuln1orMore.colorramp[5],
        },
    };

    const fourVuln = {
        x: xValueWaves,
        y: overallTrendData.multiVuln.fourVuln,
        name: '4 Scales',
        type: 'bar',
        text: overallTrendData.multiVuln.fourVuln,
        texttemplate: "%{text}%",
        marker: {
            color: scaleColours.vuln1orMore.colorramp[6],
        },
        legend: {
            y: 0.0,
        },
    };

    const fiveVuln = {
        x: xValueWaves,
        y: overallTrendData.multiVuln.fiveVuln,
        name: '5 Scales',
        type: 'bar',
        text: overallTrendData.multiVuln.fiveVuln,
        texttemplate: "%{text}%",
        marker: {
            color: scaleColours.vuln1orMore.colorramp[7],
        },
    };


    var data = [oneVuln, twoVuln, threeVuln, fourVuln, fiveVuln];

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
            range: [1.5, 8.5],
            fixedrange: true
        },
        yaxis: {
            title: 'Percent Vulnerable (%)',
            showline: false,
            range: [0, 40],
            fixedrange: true,
            dtick: 10,
        },
        legend: {
            y: 0,
            itemclick: false,
            itemdoubleclick: false,
        }
    };

    Plotly.newPlot('stackedBar_multiVuln', data, layout, { displayModeBar: false, responsive: true, scrollZoom: false });
};

multiVulnBarChart();





// OVERALL VULNERABILITY PROFILE

function overallOutcomesBarChart() {

    const vuln = {
        x: xValueWaves,
        y: overallTrendData.vuln,
        name: 'Vulnerable',
        type: 'bar',
        text: overallTrendData.vuln,
        texttemplate: "%{text}%",
        marker: {
            color: scaleColours.vuln1orMore.primary,
        },
    };

    const inFlux = {
        x: xValueWaves,
        y: overallTrendData.inFlux,
        name: 'In Flux',
        type: 'bar',
        text: overallTrendData.inFlux,
        texttemplate: "%{text}%",
        marker: {
            color: scaleColours.inFlux
        },
    };

    const onTrack = {
        x: xValueWaves,
        y: overallTrendData.onTrack,
        name: 'On Track',
        type: 'bar',
        text: overallTrendData.onTrack,
        texttemplate: "%{text}%",
        marker: {
            color: scaleColours.onTrack
        },
    };

    var data = [vuln, inFlux, onTrack];

    var layout = {
        barmode: 'stack',
        width: 1024,
        height: 500,
        margin: {
            l: 100,
            r: 0,
            b: 100,
            t: 0,
            pad: 4
        },
        legend: {
            x: 110,
            y: 0.5,
            traceorder: 'reversed',
            itemclick: false,
            itemdoubleclick: false,
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

    Plotly.newPlot('stackedBar_vulnProfile', data, layout, { displayModeBar: false, responsive: true, scrollZoom: false });
};

overallOutcomesBarChart();





// MAPBOX MAP CODE
mapboxgl.accessToken = 'pk.eyJ1IjoiamVyZW15cmFsZXhhbmRlciIsImEiOiJjaWtyZ3F4anEwMWE5dXBtN3htc3ljNWZ5In0.9rsk4ooh5S5Cr15q9W2rDA';

const map = new mapboxgl.Map({
    container: 'map', // container id
    zoom: 4.3,
    center: [-126.0, 54.4],
    style: 'mapbox://styles/jeremyralexander/cl94q91qo000514o4l6p1on6l', // replace this with your style URL
    cooperativeGestures: true,
});

// const nav = new mapboxgl.NavigationControl();
// map.addControl(nav, 'top-left');





// RANGE IN NH VULNERABILITY

function nhRangeVulnBoxPlot() {
    const wave2 = {
        y: [6, 9, 9.4, 10.5, 11, 11.5, 11.8, 12, 12.5, 12.5, 12.7, 13, 13.3, 13.6, 13.9, 14, 14.3, 14.3, 14.5, 14.6, 14.8, 15, 15.5, 15.5, 15.6, 16, 16, 16.1, 18, 18.1, 18.2, 18.2, 18.9, 18.9, 19, 19.5, 19.7, 19.8, 20, 20.2, 20.4, 20.5, 20.6, 20.8, 20.9, 20.9, 21.1, 21.1, 21.4, 21.4, 21.5, 21.5, 21.7, 21.8, 21.9, 22.1, 22.1, 22.2, 22.2, 22.2, 22.4, 22.4, 22.5, 22.5, 22.5, 22.6, 22.7, 22.9, 23, 23, 23, 23.1, 23.1, 23.3, 23.4, 23.5, 23.5, 23.5, 23.6, 23.6, 23.8, 23.8, 23.9, 24.1, 24.1, 24.4, 24.4, 24.4, 24.4, 24.6, 24.7, 25, 25.2, 25.3, 25.3, 25.3, 25.3, 25.4, 25.6, 25.6, 25.7, 25.7, 25.7, 25.8, 25.9, 25.9, 26.1, 26.2, 26.3, 26.4, 26.4, 26.4, 26.5, 26.5, 26.5, 26.5, 26.7, 26.7, 26.8, 27, 27.1, 27.1, 27.1, 27.4, 27.5, 27.5, 27.5, 27.6, 27.6, 28, 28.1, 28.1, 28.3, 28.3, 28.4, 28.6, 28.6, 28.8, 28.8, 29, 29.2, 29.2, 29.2, 29.2, 29.4, 29.4, 29.5, 29.8, 29.8, 29.8, 29.9, 30, 30.1, 30.2, 30.3, 30.5, 30.5, 30.6, 30.6, 30.8, 30.8, 31, 31.1, 31.1, 31.1, 31.1, 31.3, 31.3, 31.3, 31.5, 31.6, 31.7, 31.8, 31.8, 31.9, 32, 32.1, 32.3, 32.3, 32.4, 32.5, 32.6, 32.6, 32.8, 32.8, 33.2, 33.3, 33.3, 33.3, 33.3, 33.3, 33.3, 33.7, 33.8, 33.9, 34, 34.2, 34.3, 34.4, 34.6, 34.6, 34.8, 35, 35.1, 35.1, 35.2, 35.2, 35.4, 35.6, 35.6, 35.8, 36, 36.4, 36.5, 37, 37.2, 37.5, 37.6, 37.9, 38.1, 38.3, 38.4, 38.5, 39, 39.3, 39.7, 40.1, 40.1, 40.3, 40.4, 41.2, 41.3, 41.8, 41.8, 42.3, 43.1, 43.4, 43.4, 43.8, 44.4, 44.8, 45.1, 45.3, 45.3, 45.4, 45.5, 45.9, 46.2, 46.2, 46.8, 47.1, 47.2, 48.1, 48.3, 48.3, 48.5, 48.5, 49.1, 49.1, 49.4, 51.6, 51.9, 52.8, 53.2, 53.6, 53.8, 54.5, 55.4, 29.9, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        x: 'Wave 2',
        boxpoints: 'all',
        fillcolor: 'rgba(0,0,0,0)',
        line: {
            color: 'rgba(0,0,0,0)',
        },
        marker: {
            color: scaleColours.vuln1orMore.primary,
            opacity: 0.75,
        },
        selectedpoints: [0,267,268],
        selected: {
            marker: {
                color: scaleColours.vuln1orMore.colorramp[7],
                opacity: 1,
                size: 6,
            },
            text: '%{y[0,267]}%',
            hoverinfo: '%{text)'
        },
        
        name: '2',
        type: 'box',
        pointpos: 0,
    };
    const wave3 = {
        y: [6.1, 6.7, 7.6, 8, 10.4, 10.6, 10.7, 10.8, 11.4, 11.4, 11.8, 12.1, 12.2, 12.7, 13, 13.4, 13.6, 13.6, 13.8, 14.2, 14.7, 14.8, 14.8, 15, 15, 15.1, 15.4, 15.5, 15.6, 15.8, 16.1, 16.2, 16.2, 16.4, 16.4, 16.5, 16.5, 17.1, 17.3, 17.3, 17.4, 17.5, 17.5, 17.6, 17.6, 17.9, 18.1, 18.1, 18.2, 18.3, 18.3, 18.4, 18.4, 18.4, 18.5, 18.5, 19, 19.2, 19.3, 19.3, 19.4, 19.4, 19.4, 19.6, 19.6, 19.8, 20, 20.2, 20.5, 20.5, 20.6, 20.7, 20.7, 20.8, 20.9, 20.9, 21, 21.3, 21.3, 21.3, 21.7, 21.8, 21.8, 21.9, 22.1, 22.1, 22.3, 22.3, 22.6, 22.6, 22.7, 22.7, 22.8, 23, 23.2, 23.3, 23.4, 23.5, 23.5, 23.6, 23.6, 23.7, 23.7, 23.7, 23.8, 23.8, 23.9, 24, 24.1, 24.1, 24.2, 24.3, 24.3, 24.4, 24.4, 24.4, 24.4, 24.6, 24.8, 24.8, 25, 25.2, 25.2, 25.3, 25.4, 25.7, 25.9, 26, 26, 26.1, 26.1, 26.2, 26.2, 26.3, 26.4, 26.4, 26.6, 26.7, 26.7, 26.8, 27.1, 27.3, 27.3, 27.3, 27.4, 27.6, 27.6, 27.8, 27.8, 27.9, 28, 28, 28.1, 28.3, 28.4, 28.4, 28.6, 28.6, 28.7, 28.9, 29.1, 29.1, 29.3, 29.3, 29.3, 29.6, 29.8, 29.9, 29.9, 30, 30.1, 30.1, 30.2, 30.6, 30.7, 30.9, 31, 31, 31.3, 31.3, 31.3, 31.3, 31.4, 31.5, 31.6, 31.8, 31.8, 31.8, 31.8, 31.8, 31.9, 32, 32, 32.1, 32.2, 32.2, 32.2, 32.3, 32.6, 32.6, 32.6, 32.8, 32.9, 33.1, 33.3, 33.3, 33.3, 33.6, 33.6, 33.9, 34, 34, 34, 34.1, 34.1, 34.1, 34.5, 34.8, 35, 35.1, 35.1, 35.1, 35.1, 35.2, 35.4, 35.4, 35.6, 35.7, 35.9, 36, 36.2, 36.4, 36.4, 36.6, 36.7, 36.8, 37.3, 37.7, 37.9, 38.3, 39.1, 39.1, 39.2, 39.2, 39.8, 39.9, 40, 40.2, 40.3, 40.4, 40.4, 40.7, 40.7, 40.9, 41, 41, 41.1, 41.2, 41.5, 42.2, 42.4, 42.6, 42.6, 42.9, 42.9, 43, 43.6, 43.6, 43.7, 43.8, 44.6, 44.8, 45.1, 45.3, 45.4, 45.7, 45.9, 45.9, 46, 46.2, 46.5, 46.7, 46.8, 46.8, 47.7, 47.9, 47.9, 49.2, 50, 54.9, 69.6, 28.7, null, null, null, null, null, null, null],
        x: 'Wave 3',
        boxpoints: 'all',
        fillcolor: 'rgba(0,0,0,0)',
        line: {
            color: 'rgba(0,0,0,0)',
        },
        marker: {
            color: scaleColours.vuln1orMore.primary,
            opacity: 0.75,
        },
        selectedpoints: [0,290,291],
        selected: {
            marker: {
                color: scaleColours.vuln1orMore.colorramp[7],
                opacity: 1,
                size: 6,
            },
        },
        name: '3',
        type: 'box',
        pointpos: 0,
    };
    const wave4 = {
        y: [6.4, 6.6, 10.1, 13.4, 14.6, 14.8, 15, 15.1, 15.2, 15.3, 15.4, 15.5, 15.7, 15.7, 15.8, 15.8, 15.9, 16.9, 17, 17.1, 17.1, 17.2, 17.4, 17.4, 17.5, 17.6, 17.6, 17.9, 17.9, 18.1, 18.2, 18.3, 18.4, 18.8, 19.3, 19.4, 19.6, 19.8, 19.9, 20, 20.2, 20.3, 20.5, 20.5, 20.5, 20.6, 20.8, 21.1, 21.1, 21.2, 21.2, 21.3, 21.3, 21.3, 21.5, 21.5, 21.8, 21.9, 21.9, 22, 22.2, 22.3, 22.4, 22.4, 22.6, 22.7, 22.7, 22.8, 22.9, 22.9, 22.9, 23, 23.1, 23.2, 23.3, 23.3, 23.8, 23.8, 24, 24.1, 24.1, 24.2, 24.3, 24.4, 24.4, 24.5, 24.7, 24.7, 24.8, 24.8, 24.8, 25, 25.2, 25.2, 25.4, 25.7, 25.7, 25.7, 25.7, 25.9, 25.9, 25.9, 26, 26, 26.4, 26.5, 26.6, 26.6, 26.8, 26.8, 27, 27.1, 27.1, 27.2, 27.3, 27.3, 27.3, 27.4, 27.4, 27.4, 27.5, 27.8, 27.9, 27.9, 28, 28.1, 28.3, 28.4, 28.6, 28.8, 28.8, 29.1, 29.1, 29.1, 29.2, 29.3, 29.4, 29.5, 29.9, 30, 30.2, 30.2, 30.3, 30.4, 30.4, 30.4, 30.5, 30.6, 30.8, 30.8, 30.9, 31, 31, 31.1, 31.4, 31.6, 31.8, 31.8, 31.9, 31.9, 32, 32.1, 32.1, 32.4, 32.4, 32.5, 32.6, 32.6, 32.6, 32.7, 32.7, 32.7, 33.1, 33.2, 33.3, 33.6, 33.6, 33.6, 33.7, 33.8, 33.8, 33.9, 33.9, 34.1, 34.1, 34.3, 34.4, 34.4, 34.5, 34.5, 34.6, 34.7, 34.7, 34.9, 34.9, 35, 35, 35.1, 35.2, 35.3, 35.6, 35.9, 35.9, 36.1, 36.1, 36.3, 36.5, 36.8, 36.8, 36.8, 37, 37, 37.1, 37.3, 37.5, 37.7, 37.9, 38.1, 38.2, 38.2, 38.4, 38.5, 38.6, 38.7, 38.9, 39.3, 39.3, 39.4, 40, 40, 40.1, 40.2, 40.5, 40.6, 40.7, 40.9, 41.2, 41.5, 41.7, 41.8, 41.8, 42.4, 42.4, 42.5, 42.7, 42.7, 42.8, 42.8, 43, 43.2, 43.2, 43.7, 43.7, 43.8, 44, 44.1, 44.1, 44.3, 44.6, 44.9, 45.1, 45.4, 45.5, 45.8, 45.9, 46, 46.4, 47, 47.2, 47.7, 47.8, 48, 48.1, 49.1, 50.3, 50.8, 50.9, 51, 51.2, 51.4, 54.5, 55.3, 55.4, 59.1, 30.9, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        x: 'Wave 4',
        boxpoints: 'all',
        fillcolor: 'rgba(0,0,0,0)',
        line: {
            color: 'rgba(0,0,0,0)',
        },
        marker: {
            color: scaleColours.vuln1orMore.primary,
            opacity: 0.75,
        },
        selectedpoints: [0,283,284],
        selected: {
            marker: {
                color: scaleColours.vuln1orMore.colorramp[7],
                opacity: 1,
                size: 6,
            },
        },
        name: '4',
        type: 'box',
        pointpos: 0,
    };
    const wave5 = {
        y: [4.3, 8.1, 8.3, 10.9, 12.5, 13.8, 14.9, 15.9, 16.5, 16.6, 17, 17.2, 17.3, 17.6, 17.6, 17.7, 17.7, 17.9, 18, 18.4, 18.6, 18.7, 19.6, 19.8, 20, 20, 20.4, 20.5, 20.8, 20.9, 21.1, 21.4, 22.3, 22.4, 22.4, 22.8, 22.9, 22.9, 22.9, 23, 23, 23.1, 23.1, 23.1, 23.3, 23.4, 23.6, 23.7, 23.7, 23.8, 23.8, 24.1, 24.2, 24.4, 24.5, 24.6, 24.6, 24.7, 24.8, 24.8, 25, 25, 25.1, 25.2, 25.2, 25.2, 25.4, 25.6, 25.7, 25.8, 25.8, 25.9, 26, 26.3, 26.6, 26.6, 26.7, 26.8, 26.9, 27, 27, 27.1, 27.1, 27.1, 27.1, 27.1, 27.2, 27.2, 27.2, 27.3, 27.5, 27.5, 27.5, 27.8, 27.8, 27.8, 27.8, 27.9, 28, 28, 28.2, 28.3, 28.5, 28.6, 28.6, 28.8, 28.8, 28.9, 29.1, 29.3, 29.5, 29.6, 29.6, 29.7, 29.7, 29.7, 29.8, 29.9, 29.9, 30, 30, 30, 30.1, 30.1, 30.1, 30.1, 30.2, 30.3, 30.3, 30.4, 30.5, 30.5, 30.6, 30.6, 30.7, 30.7, 30.8, 31, 31.3, 31.3, 31.3, 31.4, 31.5, 31.5, 31.6, 31.8, 31.9, 31.9, 32, 32.1, 32.1, 32.2, 32.3, 32.3, 32.4, 32.4, 32.5, 32.5, 32.5, 32.6, 32.7, 32.9, 33, 33.1, 33.1, 33.1, 33.1, 33.1, 33.3, 33.3, 33.3, 33.3, 33.6, 33.8, 33.8, 34.1, 34.1, 34.1, 34.2, 34.3, 34.3, 34.3, 34.5, 34.5, 34.6, 34.7, 34.7, 34.8, 34.9, 35, 35.1, 35.1, 35.2, 35.3, 35.3, 35.3, 35.5, 35.8, 35.8, 35.9, 36, 36, 36, 36, 36.1, 36.2, 36.2, 36.3, 36.4, 36.4, 36.5, 36.5, 36.6, 36.9, 36.9, 37.1, 37.1, 37.1, 37.2, 37.4, 37.4, 37.9, 37.9, 37.9, 38.1, 38.2, 38.2, 38.4, 38.5, 38.9, 39, 39.1, 39.1, 39.1, 39.2, 39.4, 39.6, 39.7, 40, 40.2, 40.3, 40.4, 40.7, 40.9, 40.9, 41.3, 41.7, 41.8, 41.8, 41.9, 41.9, 42.3, 42.4, 42.4, 42.4, 42.4, 42.4, 42.5, 42.6, 42.7, 42.9, 43, 43.1, 43.1, 43.2, 43.4, 43.6, 43.7, 44, 44.3, 44.5, 44.9, 45.2, 45.5, 45.7, 45.9, 46, 46.7, 47, 47.1, 47.7, 48.3, 49.1, 49.2, 49.6, 50, 50, 50.6, 51.7, 51.8, 52, 52.4, 52.9, 53.5, 56.4, 32.5, null, null, null],
        x: 'Wave 5',
        boxpoints: 'all',
        fillcolor: 'rgba(0,0,0,0)',
        line: {
            color: 'rgba(0,0,0,0)',
        },
        marker: {
            color: scaleColours.vuln1orMore.primary,
            opacity: 0.75,
        },
        selectedpoints: [0,294,295],
        selected: {
            marker: {
                color: scaleColours.vuln1orMore.colorramp[7],
                opacity: 1,
                size: 6,
            },
        },
        name: '5',
        type: 'box',
        pointpos: 0,
    };
    const wave6 = {
        y: [9.2, 10.4, 11.3, 13.8, 13.8, 14.3, 15.7, 15.7, 16.6, 16.9, 16.9, 17.3, 17.5, 17.6, 18.1, 18.3, 18.6, 18.6, 18.8, 18.9, 19.2, 19.4, 19.4, 19.6, 19.7, 19.8, 20.1, 20.5, 20.5, 20.6, 20.7, 20.7, 20.8, 20.8, 21, 21.1, 21.4, 21.5, 21.6, 21.6, 21.7, 22.1, 22.2, 22.4, 22.5, 22.5, 22.9, 23.1, 23.4, 23.6, 23.9, 24, 24.1, 24.1, 24.2, 24.3, 24.4, 24.5, 24.7, 24.7, 24.7, 24.8, 25.2, 25.2, 25.2, 25.4, 25.5, 25.6, 25.6, 25.6, 25.7, 25.8, 25.8, 25.8, 26, 26.1, 26.4, 26.4, 26.5, 26.5, 26.7, 26.8, 26.9, 26.9, 26.9, 27, 27.1, 27.2, 27.4, 27.5, 27.5, 27.5, 27.7, 27.7, 27.8, 27.8, 27.8, 28, 28.2, 28.3, 28.4, 28.4, 28.6, 28.7, 28.7, 28.9, 28.9, 29, 29, 29.2, 29.2, 29.4, 29.5, 29.5, 29.5, 29.6, 29.6, 29.6, 29.7, 29.8, 29.8, 29.8, 30, 30, 30, 30.1, 30.2, 30.3, 30.4, 30.4, 30.6, 30.6, 30.7, 30.8, 30.8, 30.9, 30.9, 31.2, 31.2, 31.3, 31.3, 31.4, 31.4, 31.5, 31.5, 31.6, 31.7, 31.7, 31.7, 31.8, 31.8, 31.9, 31.9, 31.9, 32, 32.1, 32.1, 32.3, 32.5, 32.7, 32.8, 32.8, 32.9, 33, 33, 33.1, 33.1, 33.1, 33.1, 33.2, 33.3, 33.3, 33.3, 33.3, 33.3, 33.6, 33.7, 33.8, 33.9, 34, 34, 34.1, 34.1, 34.2, 34.7, 34.8, 34.9, 35, 35.1, 35.3, 35.3, 35.3, 35.3, 35.4, 35.7, 35.8, 35.8, 35.9, 35.9, 35.9, 35.9, 36.1, 36.1, 36.4, 36.5, 36.5, 36.5, 36.5, 36.5, 36.6, 36.7, 36.7, 36.8, 36.9, 37, 37.1, 37.1, 37.3, 37.4, 37.9, 38.1, 38.1, 38.2, 38.3, 38.3, 38.3, 38.3, 38.4, 38.5, 38.5, 38.5, 38.6, 38.6, 38.7, 38.8, 38.9, 39, 39.1, 39.2, 39.2, 39.4, 39.6, 39.7, 39.8, 40.1, 40.2, 40.4, 40.5, 40.6, 40.6, 40.7, 40.8, 41.1, 41.5, 41.5, 41.6, 41.9, 41.9, 42.3, 42.6, 43.2, 43.4, 43.7, 44, 44.1, 44.4, 44.6, 44.6, 45.1, 45.4, 45.5, 45.5, 45.7, 45.8, 46.2, 46.4, 47.1, 47.6, 47.9, 47.9, 48.2, 48.8, 50.3, 51.1, 51.5, 51.8, 52, 52.6, 52.9, 55.6, 56.2, 57.1, 57.9, 60.4, 32.2, null, null, null, null],
        x: 'Wave 6',
        boxpoints: 'all',
        fillcolor: 'rgba(0,0,0,0)',
        line: {
            color: 'rgba(0,0,0,0)',
        },
        marker: {
            color: scaleColours.vuln1orMore.primary,
            opacity: 0.75,
        },
        selectedpoints: [0,293,294],
        selected: {
            marker: {
                color: scaleColours.vuln1orMore.colorramp[7],
                opacity: 1,
                size: 6,
            },
        },
        name: '6',
        type: 'box',
        pointpos: 0,
    };
    const wave7 = {
        y: [12.6, 13.2, 13.8, 14.7, 14.9, 17.7, 18.1, 18.9, 19.2, 19.8, 19.8, 20.3, 20.3, 20.7, 21, 21.1, 21.3, 21.4, 21.4, 21.5, 21.7, 21.7, 22, 22.1, 22.2, 22.4, 22.4, 22.6, 22.6, 22.7, 22.8, 23, 23, 23.1, 23.1, 23.2, 23.5, 23.5, 23.6, 23.8, 24, 24.1, 24.1, 24.2, 24.3, 24.5, 24.6, 24.9, 25.3, 25.3, 25.4, 25.4, 25.7, 25.7, 25.8, 25.8, 26, 26.1, 26.1, 26.1, 26.1, 26.3, 26.5, 26.6, 26.6, 26.7, 26.9, 27, 27, 27.1, 27.2, 27.4, 27.4, 27.5, 27.5, 27.6, 27.7, 27.8, 27.9, 28, 28, 28.1, 28.3, 28.3, 28.3, 28.4, 28.5, 28.6, 28.6, 28.7, 28.7, 28.8, 28.8, 28.8, 28.9, 28.9, 28.9, 29, 29, 29.2, 29.2, 29.2, 29.3, 29.3, 29.3, 29.3, 29.4, 29.4, 29.4, 29.4, 29.4, 29.6, 29.6, 29.7, 29.8, 29.8, 30, 30, 30.2, 30.2, 30.5, 30.6, 30.6, 30.7, 30.8, 30.8, 31, 31, 31, 31.2, 31.2, 31.3, 31.3, 31.4, 31.4, 31.5, 31.6, 31.7, 31.7, 31.9, 31.9, 32, 32, 32.2, 32.4, 32.5, 32.5, 32.5, 32.9, 33.1, 33.2, 33.3, 33.3, 33.3, 33.3, 33.5, 33.6, 33.7, 33.8, 33.8, 33.9, 33.9, 34, 34.1, 34.1, 34.1, 34.2, 34.3, 34.4, 34.4, 34.5, 34.5, 34.6, 34.7, 34.8, 35.1, 35.3, 35.5, 35.6, 35.7, 35.7, 35.9, 36, 36, 36, 36.3, 36.3, 36.3, 36.4, 36.4, 36.4, 36.4, 36.5, 36.5, 36.6, 36.8, 36.8, 36.8, 36.9, 36.9, 37.1, 37.2, 37.3, 37.5, 37.5, 37.6, 37.7, 37.9, 38.2, 38.3, 38.4, 38.6, 39, 39.1, 39.2, 39.2, 39.2, 39.3, 39.6, 39.6, 39.6, 39.7, 39.7, 39.8, 40, 40.3, 40.3, 40.4, 40.5, 40.6, 40.7, 40.7, 40.8, 40.9, 41.1, 41.2, 41.4, 41.5, 41.5, 41.6, 41.7, 42, 42.2, 42.3, 42.4, 42.4, 42.4, 42.5, 42.6, 42.6, 42.8, 42.9, 43.1, 43.1, 43.1, 43.5, 44.1, 44.3, 44.4, 44.6, 44.8, 45, 45.1, 45.2, 45.7, 45.7, 45.7, 45.9, 46, 46.1, 46.2, 46.2, 46.3, 46.5, 47, 47.1, 47.1, 47.2, 47.4, 47.7, 48.7, 48.8, 49.2, 51.3, 51.5, 51.7, 53.3, 54, 55.6, 57.1, 58.3, 60.2, 60.7, 68.4, 33.4, null, null, null, null],
        x: 'Wave 7',
        boxpoints: 'all',
        fillcolor: 'rgba(0,0,0,0)',
        line: {
            color: 'rgba(0,0,0,0)',
        },
        marker: {
            color: scaleColours.vuln1orMore.primary,
            opacity: 0.75,
        },
        selectedpoints: [0,293,294],
        selected: {
            marker: {
                color: scaleColours.vuln1orMore.colorramp[7],
                opacity: 1,
                size: 6,
            },
        },
        name: '7',
        type: 'box',
        pointpos: 0,
    };
    const wave8 = {
        y: [13.2, 14, 15.4, 15.5, 16.7, 17.6, 18.5, 18.6, 18.7, 19, 19, 19.6, 19.9, 20, 20.6, 20.7, 20.9, 20.9, 21.2, 21.2, 21.3, 21.3, 21.7, 21.8, 21.9, 21.9, 22, 22.6, 23.1, 23.3, 23.6, 23.7, 23.8, 23.9, 24, 24, 24.1, 24.3, 24.3, 24.3, 24.4, 24.4, 24.5, 24.6, 24.6, 24.7, 24.7, 24.8, 24.8, 24.8, 24.9, 24.9, 25, 25, 25.2, 25.2, 25.4, 25.4, 25.5, 25.6, 25.6, 25.8, 25.9, 26.4, 26.5, 26.6, 26.6, 26.7, 26.8, 26.8, 26.9, 27, 27, 27, 27, 27.3, 27.3, 27.4, 27.4, 27.6, 27.7, 27.7, 27.7, 27.8, 27.9, 27.9, 28, 28.3, 28.3, 28.4, 28.4, 28.4, 28.5, 28.6, 28.7, 28.8, 28.9, 29.2, 29.3, 29.3, 29.4, 29.5, 29.5, 29.6, 29.7, 29.7, 29.8, 29.8, 29.8, 29.9, 30.1, 30.1, 30.1, 30.2, 30.3, 30.4, 30.5, 30.6, 30.6, 30.7, 30.7, 30.7, 30.9, 31, 31, 31.1, 31.4, 31.5, 31.5, 31.7, 31.8, 31.8, 31.9, 32.3, 32.4, 32.4, 32.5, 32.5, 32.6, 32.7, 32.7, 32.8, 32.8, 32.9, 33, 33.1, 33.1, 33.1, 33.1, 33.3, 33.3, 33.3, 33.3, 33.6, 33.6, 33.6, 33.6, 33.7, 33.7, 33.7, 33.7, 33.8, 33.9, 33.9, 33.9, 34, 34.1, 34.1, 34.2, 34.4, 34.4, 34.5, 34.6, 34.7, 34.7, 34.8, 34.8, 34.8, 34.9, 34.9, 35, 35.2, 35.4, 35.4, 35.5, 35.6, 35.6, 35.6, 35.7, 35.7, 35.8, 35.9, 35.9, 36.1, 36.1, 36.3, 36.3, 36.4, 36.4, 36.5, 36.5, 36.6, 36.6, 36.8, 36.9, 37, 37.3, 37.3, 37.4, 37.6, 37.6, 37.7, 37.7, 38, 38, 38.1, 38.2, 38.2, 38.5, 38.7, 38.9, 39, 39, 39.1, 39.1, 39.4, 39.7, 40.2, 40.2, 40.2, 40.2, 40.3, 40.4, 40.4, 40.4, 40.5, 40.5, 40.5, 40.6, 40.7, 40.9, 41.6, 41.6, 41.8, 42.1, 42.1, 42.2, 42.2, 42.2, 42.4, 42.5, 43, 43, 43.1, 43.1, 43.2, 43.2, 43.3, 43.3, 43.4, 43.5, 43.7, 43.9, 44.1, 44.4, 44.5, 45, 45.3, 45.5, 45.6, 45.7, 45.9, 45.9, 45.9, 46.4, 47, 47, 47.7, 48.9, 49, 49.2, 50.7, 50.8, 51.1, 51.2, 51.3, 51.9, 52, 52.5, 53.2, 57.3, 62.5, 72, 32.9, null, null, null, null],
        x: 'Wave 8',
        boxpoints: 'all',
        fillcolor: 'rgba(0,0,0,0)',
        line: {
            color: 'rgba(0,0,0,0)',
        },
        marker: {
            color: scaleColours.vuln1orMore.primary,
            opacity: 0.75,
        },
        selectedpoints: [0,292,293],
        selected: {
            marker: {
                color: scaleColours.vuln1orMore.colorramp[7],
                opacity: 1,
                size: 6,
            },
        },
        name: '8',
        type: 'box',
        pointpos: 0,
    };

    var data = [wave2, wave3, wave4, wave5, wave6, wave7, wave8];

    var layout = {
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
            title: "Percent Vulnerable (%)",
            range: [1, 80],
        },
        xaxis: {
            title: "Wave",
            zeroline: true,
            zerolinecolor: '#969696',
            zerolinewidth: 4,
            margin: '2rem',
        },
        showlegend: false,
    }

    Plotly.newPlot('range_vulnDisparity', data, layout, { displayModeBar: false, responsive: true, scrollZoom: false });

};

nhRangeVulnBoxPlot();





// HIGH LOW NH GROUPED BAR CHART

// function nhLowHighBarChart() {

//     const below15 = {
//         x: xValueWaves,
//         y: [22,25,7,7,6,5,2],
//         name: 'Below 15%',
//         type: 'bar',
//         text: [22,25,7,7,6,5,2],
//         texttemplate: "%{text}",
//         marker: {
//             color: scaleColours.vuln1orMore.colorramp[1],
//         },
//     };

//     const above45 = {
//         x: xValueWaves,
//         y: [27,19,24,23,26,33,27],
//         name: 'Above 45%',
//         type: 'bar',
//         text: [27,19,24,23,26,33,27],
//         texttemplate: "%{text}",
//         marker: {
//             color: scaleColours.vuln1orMore.colorramp[6],
//         },
//     };


//     var data = [below15,above45];

//     var layout = {
//         barmode: 'group',
//         width: 1024,
//         height: 500,
//         margin: {
//             l: 100,
//             r: 50,
//             b: 100,
//             t: 50,
//             pad: 4
//         },
//         font: {
//             family: 'Nunito Sans',
//             size: 16,
//             color: '#252525',
//         },
//         xaxis: {
//             title: 'Wave',
//             showgrid: false,
//             range: [1.5, 8.5],
//             fixedrange: true
//         },
//         yaxis: {
//             title: 'Number of Neighbourhoods',
//             showline: false,
//             range: [0, 40],
//             fixedrange: true,
//             dtick: 10,
//         },
//         legend: {
//             xanchor: 'center',
//             x: 0.5,
//             traceorder: 'reversed',
//             itemclick: false,
//             itemdoubleclick: false,
//         }
//     };

//     Plotly.newPlot('barchart_nhLowHigh', data, layout, { displayModeBar: false, responsive: true, scrollZoom: false });
// };

// nhLowHighBarChart();





// URBAN RURAL OUTCOMES PROFILE

function urbanRuralOutcomesBarChart() {

    const vuln = {
        x: ['Urban','Rural'],
        y: [33.4,33.2],
        name: 'Vulnerable',
        type: 'bar',
        text: [33.4,33.2],
        texttemplate: "%{text}%",
        marker: {
            color: scaleColours.vuln1orMore.primary,
        },
    };

    const inFlux = {
        x: ['Urban','Rural'],
        y: [21.2,22.0],
        name: 'In Flux',
        type: 'bar',
        text: [21.2,22.0],
        texttemplate: "%{text}%",
        marker: {
            color: scaleColours.inFlux
        },
    };

    const onTrack = {
        x: ['Urban','Rural'],
        y: [45.3,44.8],
        name: 'On Track',
        type: 'bar',
        text: [45.3,44.8],
        texttemplate: "%{text}%",
        marker: {
            color: scaleColours.onTrack
        },
    };

    var data = [vuln, inFlux, onTrack];

    var layout = {
        barmode: 'stack',
        width: 500,
        height: 500,
        margin: {
            l: 100,
            r: 0,
            b: 100,
            t: 50,
            pad: 4
        },
        legend: {
            x: 110,
            y: 0.5,
            itemclick: false,
            itemdoubleclick: false,
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
            title: "Wave 8"
        },
        hovermode: false,
    };

    Plotly.newPlot('stackedBar_urbanRuralvulnProfile', data, layout, { displayModeBar: false, responsive: true, scrollZoom: false });
};

urbanRuralOutcomesBarChart();





// SCALE-LEVEL OUTCOMES STACKED BAR CHART

function scaleOutcomesBarChart() {
    const yValue_ScaleNames = ['Physical', 'Social', 'Emotional', 'Language', 'Communication'];
    const xValue_vulnOutcome = [14.7, 16.3, 17.5, 10.5, 14.3];
    const xValue_inFluxOutcome = [15.5, 15.2, 15.6, 11.1, 10.4];
    const xValue_onTrackOutcome = [69.8, 68.5, 67.0, 78.4, 75.3];

    const vulnOutcome = {
        x: xValue_vulnOutcome,
        y: yValue_ScaleNames,
        name: 'Vulnerable',
        type: 'bar',
        text: xValue_vulnOutcome.map(String),
        texttemplate: "%{text}%",
        marker: {
            color: scaleColours.vuln1orMore.primary,
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
            color: scaleColours.inFlux
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
            color: scaleColours.onTrack
        },
        orientation: 'h',
    };


    var data = [vulnOutcome, inFluxOutcome, onTrackOutcome];

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
            "orientation": "h",
            y: 5,
            x: 0,
            traceorder: 'normal',
            itemclick: false,
            itemdoubleclick: false,
        },
        xaxis: {
            title: "Percent (%)",
            showgrid: false,
            range: [0, 100],
            fixedrange: true
        },
        yaxis: {
            showline: false,
            fixedrange: true
        },
    };

    Plotly.newPlot('stackedBar_scaleOutcomes', data, layout, { displayModeBar: false, responsive: true, scrollZoom: false });
};

scaleOutcomesBarChart();





// 
// 
// ----------------------- SCALE AND SUBSCALE-LEVEL VULNERABILITY TRENDS CHARTS
// 
// 


// ALL SCALES SCALE-LEVEL TREND LINE CHART

function allScalesTrendChart() {

    const socialTrend = {
        x: xValueWaves,
        y: socialTrendData.scaleVuln,
        name: 'Social',
        mode: 'lines+markers+text',
        marker: {
            color: scaleColours.social.primary,
            size: 12
        },
        line: {
            color: scaleColours.social.primary,
            width: 4
        },
        textposition: "top center",
        hovertext: socialTrendData.scaleNumVuln.map(String),
        hovertemplate: '<br><b>&nbsp;Wave %{x}:</b>' +
            '<br>&nbsp;% Vulnerable: <br>' +
            '<b>&nbsp;%{y}%</b><br>' +
            '<br>&nbsp;# Vulnerable: <br>' +
            '<b>&nbsp;%{hovertext:,}</b><br>' +
            '<extra></extra>',
        textfont: { 'family': "Nunito Sans", 'size': 16, 'color': scaleColours.social.primary },
    };

    const emotionalTrend = {
        x: xValueWaves,
        y: emotionalTrendData.scaleVuln,
        name: 'Emotional',
        mode: 'lines+markers+text',
        marker: {
            color: scaleColours.emotional.primary,
            size: 12
        },
        line: {
            color: scaleColours.emotional.primary,
            width: 4
        },
        textposition: "top center",
        hovertext: emotionalTrendData.scaleNumVuln.map(String),
        hovertemplate: '<br><b>&nbsp;Wave %{x}:</b>' +
            '<br>&nbsp;% Vulnerable: <br>' +
            '<b>&nbsp;%{y}%</b><br>' +
            '<br>&nbsp;# Vulnerable: <br>' +
            '<b>&nbsp;%{hovertext:,}</b><br>' +
            '<extra></extra>',
        textfont: { 'family': "Nunito Sans", 'size': 16, 'color': scaleColours.emotional.primary },
    };

    const physicalTrend = {
        x: xValueWaves,
        y: physicalTrendData.scaleVuln,
        name: 'Physical',
        mode: 'lines+markers+text',
        marker: {
            color: scaleColours.physical.primary,
            size: 12
        },
        line: {
            color: scaleColours.physical.primary,
            width: 4
        },
        textposition: "top center",
        hovertext: physicalTrendData.scaleNumVuln.map(String),
        hovertemplate: '<br><b>&nbsp;Wave %{x}:</b>' +
            '<br>&nbsp;% Vulnerable: <br>' +
            '<b>&nbsp;%{y}%</b><br>' +
            '<br>&nbsp;# Vulnerable: <br>' +
            '<b>&nbsp;%{hovertext:,}</b><br>' +
            '<extra></extra>',
        textfont: { 'family': "Nunito Sans", 'size': 16, 'color': scaleColours.physical.primary },

    };

    const languageTrend = {
        x: xValueWaves,
        y: languageTrendData.scaleVuln,
        name: 'Language',
        mode: 'lines+markers+text',
        marker: {
            color: scaleColours.language.primary,
            size: 12
        },
        line: {
            color: scaleColours.language.primary,
            width: 4
        },
        textposition: "top center",
        hovertext: languageTrendData.scaleNumVuln.map(String),
        hovertemplate: '<br><b>&nbsp;Wave %{x}:</b>' +
            '<br>&nbsp;% Vulnerable: <br>' +
            '<b>&nbsp;%{y}%</b><br>' +
            '<br>&nbsp;# Vulnerable: <br>' +
            '<b>&nbsp;%{hovertext:,}</b><br>' +
            '<extra></extra>',
        textfont: { 'family': "Nunito Sans", 'size': 16, 'color': scaleColours.language.primary },

    };

    const communicationTrend = {
        x: xValueWaves,
        y: communicationTrendData.scaleVuln,
        name: 'Communication',
        mode: 'lines+markers+text',
        marker: {
            color: scaleColours.communication.primary,
            size: 12
        },
        line: {
            color: scaleColours.communication.primary,
            width: 4
        },
        textposition: "top center",
        hovertext: communicationTrendData.scaleNumVuln.map(String),
        hovertemplate: '<br><b>&nbsp;Wave %{x}:</b>' +
            '<br>&nbsp;% Vulnerable: <br>' +
            '<b>&nbsp;%{y}%</b><br>' +
            '<br>&nbsp;# Vulnerable: <br>' +
            '<b>&nbsp;%{hovertext:,}</b><br>' +
            '<extra></extra>',
        textfont: { 'family': "Nunito Sans", 'size': 16, 'color': scaleColours.communication.primary },

    };

    var data = [socialTrend, emotionalTrend, physicalTrend, languageTrend, communicationTrend];

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
            range: [1.5, 8.5],
            fixedrange: true
        },
        yaxis: {
            title: 'Percent Vulnerable (%)',
            showline: false,
            range: [1, 21],
            fixedrange: true
        },
        legend: {
            itemclick: 'toggleothers',
            itemdoubleclick: 'false',
        },
    };

    Plotly.newPlot('trend_allScales', data, layout, { displayModeBar: false, responsive: true, scrollZoom: false });
};

allScalesTrendChart();


// INDIVIDUAL SCALE AND SUBSCALE-LEVEL TREND CHARTS

// INDIVIDUAL SCALE-LEVEL TREND CHARTS

function socialScalesTrendChart() {

    var data = [{
        x: xValueWaves,
        y: socialTrendData.scaleVuln,
        mode: 'lines+markers+text',
        marker: {
            color: scaleColours.social.primary,
            size: 12
        },
        line: {
            color: scaleColours.social.primary,
            width: 4
        },
        text: socialTrendData.scaleVuln.map(String),
        texttemplate: "%{text}%",
        textposition: "top center",
        hovertext: socialTrendData.scaleNumVuln.map(String),
        hovertemplate: '<br><b>&nbsp;Wave %{x}:</b>' +
            '<br>&nbsp;# Vulnerable: <br>' +
            '<b>&nbsp;%{hovertext:,}</b><br>' +
            '<extra></extra>',
        textfont: { 'family': "Nunito Sans", 'size': 16, 'color': scaleColours.social.primary },
    }];

    var layout = {
        width: 976,
        height: 200,
        margin: {
            l: 100,
            r: 50,
            b: 0,
            t: 0
        },
        font: {
            family: 'Nunito Sans',
            size: 16,
            color: '#252525',
        },
        xaxis: {
            showzeroline: false,
            visibile: false,
            showgrid: false,
            zeroline: false,
            showticklabels: false,
        },
        yaxis: {
            showline: false,
            showgrid: false,
            visibile: false,
            range: [8, 19],
            showticklabels: false,
        },
    };

    Plotly.newPlot('trend_socialScales', data, layout, { displayModeBar: false, responsive: true, scrollZoom: false });

};
socialScalesTrendChart();

function emotionalScalesTrendChart() {

    var data = [{
        x: xValueWaves,
        y: emotionalTrendData.scaleVuln,
        name: 'Emotional',
        mode: 'lines+markers+text',
        marker: {
            color: scaleColours.emotional.primary,
            size: 12
        },
        line: {
            color: scaleColours.emotional.primary,
            width: 4
        },
        text: emotionalTrendData.scaleVuln.map(String),
        texttemplate: "%{text}%",
        textposition: "top center",
        hovertext: emotionalTrendData.scaleNumVuln.map(String),
        hovertemplate: '<br><b>&nbsp;Wave %{x}:</b>' +
            '<br>&nbsp;# Vulnerable: <br>' +
            '<b>&nbsp;%{hovertext:,}</b><br>' +
            '<extra></extra>',
        textfont: { 'family': "Nunito Sans", 'size': 16, 'color': scaleColours.emotional.primary },
    }];

    var layout = {
        width: 976,
        height: 200,
        margin: {
            l: 100,
            r: 50,
            b: 0,
            t: 0
        },
        font: {
            family: 'Nunito Sans',
            size: 16,
            color: '#252525',
        },
        xaxis: {
            showzeroline: false,
            visibile: false,
            showgrid: false,
            zeroline: false,
            showticklabels: false,
        },
        yaxis: {
            showline: false,
            showgrid: false,
            visibile: false,
            range: [8, 19],
            showticklabels: false,
        },
    };

    Plotly.newPlot('trend_emotionalScales', data, layout, { displayModeBar: false, responsive: true, scrollZoom: false });

};
emotionalScalesTrendChart();

function physicalScalesTrendChart() {

    var data = [{
        x: xValueWaves,
        y: physicalTrendData.scaleVuln,
        name: 'Physical',
        mode: 'lines+markers+text',
        marker: {
            color: scaleColours.physical.primary,
            size: 12
        },
        line: {
            color: scaleColours.physical.primary,
            width: 4
        },
        text: physicalTrendData.scaleVuln.map(String),
        texttemplate: "%{text}%",
        textposition: "top center",
        hovertext: physicalTrendData.scaleNumVuln.map(String),
        hovertemplate: '<br><b>&nbsp;Wave %{x}:</b>' +
            '<br>&nbsp;# Vulnerable: <br>' +
            '<b>&nbsp;%{hovertext:,}</b><br>' +
            '<extra></extra>',
        textfont: { 'family': "Nunito Sans", 'size': 16, 'color': scaleColours.physical.primary },

    }];

    var layout = {
        width: 976,
        height: 200,
        margin: {
            l: 100,
            r: 50,
            b: 0,
            t: 0
        },
        font: {
            family: 'Nunito Sans',
            size: 16,
            color: '#252525',
        },
        xaxis: {
            showzeroline: false,
            visibile: false,
            showgrid: false,
            zeroline: false,
            showticklabels: false,
        },
        yaxis: {
            showline: false,
            showgrid: false,
            visibile: false,
            range: [8, 19],
            showticklabels: false,
        },
    };

    Plotly.newPlot('trend_physicalScales', data, layout, { displayModeBar: false, responsive: true, scrollZoom: false });

};
physicalScalesTrendChart();

function languageScalesTrendChart() {

    var data = [{
        x: xValueWaves,
        y: languageTrendData.scaleVuln,
        name: 'Language',
        mode: 'lines+markers+text',
        marker: {
            color: scaleColours.language.primary,
            size: 12
        },
        line: {
            color: scaleColours.language.primary,
            width: 4
        },
        text: languageTrendData.scaleVuln.map(String),
        texttemplate: "%{text}%",
        textposition: "top center",
        hovertext: languageTrendData.scaleNumVuln.map(String),
        hovertemplate: '<br><b>&nbsp;Wave %{x}:</b>' +
            '<br>&nbsp;# Vulnerable: <br>' +
            '<b>&nbsp;%{hovertext:,}</b><br>' +
            '<extra></extra>',
        textfont: { 'family': "Nunito Sans", 'size': 16, 'color': scaleColours.language.primary },

    }];

    var layout = {
        width: 976,
        height: 200,
        margin: {
            l: 100,
            r: 50,
            b: 0,
            t: 0
        },
        font: {
            family: 'Nunito Sans',
            size: 16,
            color: '#252525',
        },
        xaxis: {
            showzeroline: false,
            visibile: false,
            showgrid: false,
            zeroline: false,
            showticklabels: false,
        },
        yaxis: {
            showline: false,
            showgrid: false,
            visibile: false,
            range: [5, 16],
            showticklabels: false,
        },
    };

    Plotly.newPlot('trend_languageScales', data, layout, { displayModeBar: false, responsive: true, scrollZoom: false });

};
languageScalesTrendChart();

function communicationScalesTrendChart() {

    var data = [{
        x: xValueWaves,
        y: communicationTrendData.scaleVuln,
        name: 'Communication',
        mode: 'lines+markers+text',
        marker: {
            color: scaleColours.communication.primary,
            size: 12
        },
        line: {
            color: scaleColours.communication.primary,
            width: 4
        },
        text: communicationTrendData.scaleVuln.map(String),
        texttemplate: "%{text}%",
        textposition: "top center",
        hovertext: communicationTrendData.scaleNumVuln.map(String),
        hovertemplate: '<br><b>&nbsp;Wave %{x}:</b>' +
            '<br>&nbsp;# Vulnerable: <br>' +
            '<b>&nbsp;%{hovertext:,}</b><br>' +
            '<extra></extra>',
        textfont: { 'family': "Nunito Sans", 'size': 16, 'color': scaleColours.communication.primary },

    }];

    var layout = {
        width: 976,
        height: 200,
        margin: {
            l: 100,
            r: 50,
            b: 0,
            t: 0
        },
        font: {
            family: 'Nunito Sans',
            size: 16,
            color: '#252525',
        },
        xaxis: {
            showzeroline: false,
            visibile: false,
            showgrid: false,
            zeroline: false,
            showticklabels: false,
        },
        yaxis: {
            showline: false,
            showgrid: false,
            visibile: false,
            range: [8, 19],
            showticklabels: false,
        },
    };

    Plotly.newPlot('trend_communicationScales', data, layout, { displayModeBar: false, responsive: true, scrollZoom: false });

};
communicationScalesTrendChart();

// SUBSCALE-LEVEL TREND CHARTS

const subscaleLayout = {
    width: 976,
    height: 750,
    margin: {
        t: 100,
        r: 50,
        b: 100,
        l: 100,
        pad: 12
    },
    font: {
        family: 'Nunito Sans',
        size: 16,
        color: '#252525',
    },
    legend: {
        "orientation": "h",
        x: 0,
        y: 1.6,
        font: {
            size: 16,
        },
        itemwidth: 75,
        itemclick: 'toggleothers',
        itemdoubleclick: 'false',
    },
    xaxis: {
        title: 'Wave',
        showzeroline: false,
        showgrid: false,
        fixedrange: true,
    },
    yaxis: {
        showline: false,
        range: [0.3, -0.3],
        fixedrange: true,
    },
    hovermode: false,
};

function socialSubscalesTrendChart() {

    const overallSocCompSubscale = {
        x: xValueWaves,
        y: socialTrendData.subscales.overallSocComp,
        name: '<span style="color: #3182BD; font-size: 1.1rem;">Overall Social Competence</span></br></br>Ability to get along with other children, play with various children, cooperation and self-confidence.',
        mode: 'lines+markers+text',
        marker: {
            color: scaleColours.social.primary,
            size: 12
        },
        line: {
            color: scaleColours.social.primary,
            dash: 'solid',
            width: 4
        },
    };
    const approachLearnSubscale = {
        x: xValueWaves,
        y: socialTrendData.subscales.approachLearn,
        name: '<span style="color: #3182BD; font-size: 1.1rem;">Approach to Learning</span></br></br>Ability to work independently, solve problems, follow instructions and class routines, adjust to changes.',
        mode: 'lines+markers+text',
        marker: {
            color: scaleColours.social.primary,
            size: 12
        },
        line: {
            color: scaleColours.social.primary,
            dash: 'dash',
            width: 4
        },
    };
    const readinessExploreSubscale = {
        x: xValueWaves,
        y: socialTrendData.subscales.readinessExplore,
        name: '<span style="color: #3182BD; font-size: 1.1rem;">Readiness to Explore</span></br></br>Curiosity about the surrounding world, eagerness to explore new books, toys and games.',
        mode: 'lines+markers+text',
        marker: {
            color: scaleColours.social.primary,
            size: 12
        },
        line: {
            color: scaleColours.social.primary,
            dash: 'dot',
            width: 4
        },
    };
    const respectResponsibilitySubscale = {
        x: xValueWaves,
        y: socialTrendData.subscales.respectResponsibility,
        name: '<span style="color: #3182BD; font-size: 1.1rem;">Respect & Responsibility</span></br></br>Showing respect to others and property of others, self-control, ability to follow rules, take care of materials, </br>accept responsibility.',
        mode: 'lines+markers+text',
        marker: {
            color: scaleColours.social.primary,
            size: 12
        },
        line: {
            color: scaleColours.social.primary,
            dash: 'longdashdot',
            width: 4
        },
    };

    var data = [overallSocCompSubscale, approachLearnSubscale, readinessExploreSubscale, respectResponsibilitySubscale];


    Plotly.newPlot('trend_socialSubscales', data, subscaleLayout, { displayModeBar: false, responsive: true, scrollZoom: false });

};
socialSubscalesTrendChart();

function emotionalSubscalesTrendChart() {

    const agressiveSubscale = {
        x: xValueWaves,
        y: emotionalTrendData.subscales.agressive,
        name: 'Agressive Behaviour',
        mode: 'lines+markers+text',
        marker: {
            color: scaleColours.emotional.primary,
            size: 12
        },
        line: {
            color: scaleColours.emotional.primary,
            width: 4,
            dash: 'solid'
        },
    };
    const anxiousFearfulSubscale = {
        x: xValueWaves,
        y: emotionalTrendData.subscales.anxiousFearful,
        name: 'Anxious & Fearful Behaviour',
        mode: 'lines+markers+text',
        marker: {
            color: scaleColours.emotional.primary,
            size: 12,

        },
        line: {
            color: scaleColours.emotional.primary,
            width: 4,
            dash: 'dash',
        },
    };
    const hyperInattentiveSubscale = {
        x: xValueWaves,
        y: emotionalTrendData.subscales.hyperInattentive,
        name: 'Hyperactive & Inattentive Behaviour',
        mode: 'lines+markers+text',
        marker: {
            color: scaleColours.emotional.primary,
            size: 12
        },
        line: {
            color: scaleColours.emotional.primary,
            width: 4,
            dash: 'dot',
        },
    };
    const prosocialHelpingSubscale = {
        x: xValueWaves,
        y: emotionalTrendData.subscales.prosocialHelping,
        name: 'Prosocial & Helping Behaviour',
        mode: 'lines+markers+text',
        marker: {
            color: scaleColours.emotional.primary,
            size: 12
        },
        line: {
            color: scaleColours.emotional.primary,
            width: 4,
            dash: 'longdashdot',
        },
    };

    var data = [agressiveSubscale, anxiousFearfulSubscale, hyperInattentiveSubscale, prosocialHelpingSubscale];

    Plotly.newPlot('trend_emotionalSubscales', data, subscaleLayout, { displayModeBar: false, responsive: true, scrollZoom: false });

};
emotionalSubscalesTrendChart();

function physicalSubscalesTrendChart() {

    const grossFineMotorSkillsSubscale = {
        x: xValueWaves,
        y: physicalTrendData.subscales.grossFineMotorSkills,
        name: 'Gross & Fine Motor Skills',
        mode: 'lines+markers+text',
        marker: {
            color: scaleColours.physical.primary,
            size: 12
        },
        line: {
            color: scaleColours.physical.primary,
            width: 4,
            dash: 'solid',
        },
    };
    const physIndepSubscale = {
        x: xValueWaves,
        y: physicalTrendData.subscales.physIndep,
        name: 'Physical Independence',
        mode: 'lines+markers+text',
        marker: {
            color: scaleColours.physical.primary,
            size: 12
        },
        line: {
            color: scaleColours.physical.primary,
            width: 4,
            dash: 'dash',
        },
    };
    const physReadSubscale = {
        x: xValueWaves,
        y: physicalTrendData.subscales.physRead,
        name: 'Physical Readiness',
        mode: 'lines+markers+text',
        marker: {
            color: scaleColours.physical.primary,
            size: 12
        },
        line: {
            color: scaleColours.physical.primary,
            width: 4,
            dash: 'dot',
        },
    };

    var data = [grossFineMotorSkillsSubscale, physIndepSubscale, physReadSubscale];

    Plotly.newPlot('trend_physicalSubscales', data, subscaleLayout, { displayModeBar: false, responsive: true, scrollZoom: false });

};
physicalSubscalesTrendChart();

function languageSubscalesTrendChart() {

    const advLitSubscale = {
        x: xValueWaves,
        y: languageTrendData.subscales.advLit,
        name: 'Advanced Literacy',
        mode: 'lines+markers+text',
        marker: {
            color: scaleColours.language.primary,
            size: 12
        },
        line: {
            color: scaleColours.language.primary,
            width: 4,
            dash: 'solid',
        },
    };
    const basicLitSubscale = {
        x: xValueWaves,
        y: languageTrendData.subscales.basicLit,
        name: 'Basic Literacy',
        mode: 'lines+markers+text',
        marker: {
            color: scaleColours.language.primary,
            size: 12
        },
        line: {
            color: scaleColours.language.primary,
            width: 4,
            dash: 'dash',
        },
    };
    const basicNumSubscale = {
        x: xValueWaves,
        y: languageTrendData.subscales.basicNum,
        name: 'Basic Numeracy',
        mode: 'lines+markers+text',
        marker: {
            color: scaleColours.language.primary,
            size: 12
        },
        line: {
            color: scaleColours.language.primary,
            width: 4,
            dash: 'dot',
        },
    };
    const interestNumLitSubscale = {
        x: xValueWaves,
        y: languageTrendData.subscales.interestNumLit,
        name: 'Interest in Numeracy & Literacy',
        mode: 'lines+markers+text',
        marker: {
            color: scaleColours.language.primary,
            size: 12
        },
        line: {
            color: scaleColours.language.primary,
            width: 4,
            dash: 'dot',
        },
    };

    var data = [advLitSubscale, basicLitSubscale, basicNumSubscale, interestNumLitSubscale];

    Plotly.newPlot('trend_languageSubscales', data, subscaleLayout, { displayModeBar: false, responsive: true, scrollZoom: false });

};
languageSubscalesTrendChart();

function communicationSubscalesTrendChart() {

    const commSkillsSubscale = {
        x: xValueWaves,
        y: communicationTrendData.subscales.commSkills,
        name: 'Communication Skills & General Knowledge',
        mode: 'lines+markers+text',
        marker: {
            color: scaleColours.communication.primary,
            size: 12
        },
        line: {
            color: scaleColours.communication.primary,
            width: 4
        },
    };

    var data = [commSkillsSubscale];

    Plotly.newPlot('trend_communicationSubscales', data, subscaleLayout, { displayModeBar: false, responsive: true, scrollZoom: false });

};
communicationSubscalesTrendChart();



// 
// 
//  -------------------- INTERACTION/ANIMATION CODES -----------------------------
// 
// 

