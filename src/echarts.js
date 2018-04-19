import React, { Component, PureComponent } from 'react';
import ReactEcharts from 'echarts-for-react';
import 'echarts-gl';
import data from './blocks.js';

let edges = data.links.map( (e) => {
  return {source: e.source, target: e.target, value: 10}
})

const usermap = {};
const categories = [];
const catindex = [];
let nodes = data.nodes.map( (n) => {
  if (!usermap[n.user]){
    categories.push({name:n.user});
    catindex.push(n.user);
    usermap[n.user] = true;
  }
  var i = catindex.indexOf(n.user);
  return {
    category: i,
    name: n.id,
    des: n.description,
    value: 20,
    symbolSize: 10,
    user: n.user,
    fixed: false,
    draggable: true,

  }
})




let elem = false;



export default class Echarts extends PureComponent {



getOption2 = () => ({
        title: {
            text: 'Title',
            subtext: 'Default layout',
            top: 'bottom',
            left: 'right'
        },
        tooltip:{},
        animationDuration: 150,
        animationEasingUpdate: 'quinticInOut',
        series: [{
            name: 'B.locks',
            type: 'graphGL',
            modularity: false,
            nodes: nodes,
            links: data.links,
            categories: categories.sort( (a,b) => {return a.name -b.name}),
            focusNodeAdjacency: true,
            forceAtlas2: {
              steps: 100,
              stopThreshold: 0.9,
              jitterTolerence: 10,
              edgeWeight: [0.3, 3],
              gravity: 1,
              edgeWeightInfluence: 1,
              scaling: 1,
              GPU: true,
              // preventOverlap: true
            },
            label: {
                normal: {
                    position: 'right',
                    formatter: function(a,b){
                      return a.data.des;
                    },
                    textStyle: {
                        fontSize: 12,
                    }
                }
            },
            lineStyle: {
                normal: {
                    color: 'source',
                    curveness: 0.3
                }
            },

        }]
  });



render() {

  return(
    <ReactEcharts option={this.getOption2()}  style={{height: '800px', width:'100%'}}/>
  )
}

}
