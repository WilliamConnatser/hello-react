import React from 'react';
import Info from './Info';
import styled from 'styled-components';

const userData = {
    'day': {
        'Monday': 38,
        'Tuesday': 19,
        'Wednesday': 18,
        'Thursday': 46,
        'Friday': 36,
        'Saturday': 1,
        'Sunday': 1
    },
    'hour': {
        0: 16,
        1: 1,
        2: 6,
        3: 2,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
        9: 0,
        10: 0,
        11: 0,
        12: 0,
        13: 0,
        14: 0,
        15: 0,
        16: 0,
        17: 0,
        18: 0,
        19: 0,
        20: 0,
        21: 0,
        22: 22,
        23: 31
    }
}

const dailyArray = Object.values(userData.day)
const max = Math.max(...dailyArray);

function percentageOfMax(value) {
    return 100 - (value * 100 / max);
};

//Initiate starting coordinates of polygon
let polygonArray = [
    '0% 100%'
];

for(let i=0; i<dailyArray.length; i++) {
    //Increment X axis in steps of 14%
    //Y axis is determined depending on the percentage it is of the maximum value
    //Add the string to the array of coordinates
    polygonArray.push(`${(i+1)*14}% ${percentageOfMax(dailyArray[i])}%`);
}

//Close the polygon
polygonArray.push('100% 100%','0% 100%');

const XLegend = styled.div `
  width: 500px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  color: #f8f8f8;
  font-size: .6rem;
`;

const YLegend = styled.div `
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #f8f8f8;
  font-size: .6rem;
`;

const ContainerDiv = styled.div `
  background: #2f323a;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 600px;
  width: 600px;
`;


const Chart = styled.div `
  background: #007ae1;
  height: 500px;
  width: 500px;
  clip-path: polygon(${polygonArray.toString()});
`;

export default function (props) {
    let yLegend = [];
    
    for(let i=11; i>0; i--) {
        yLegend.push(<span>{i * (max/10).toFixed() }</span>);
    }

    return ( <div>
        <h1> The User Page </h1>

            <ContainerDiv>
                <Chart />
                <YLegend>
                    { yLegend }
                </YLegend>
                <XLegend>
                    <span>Monday</span>
                    <span>Tuesday</span>
                    <span>Wednesday</span>
                    <span>Thursday</span>
                    <span>Friday</span>
                    <span>Saturday</span>
                    <span>Sunday</span>
                </XLegend> 
            </ContainerDiv>        
            <Info/>
        </div>
    );
}