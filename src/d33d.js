import React, { Component, PureComponent } from 'react';
import { ForceGraph3D } from 'react-force-graph';
import SpriteText from 'three-spritetext';
import data from './blocks.js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
let elem = false;

export default class D33d extends Component {

  color = (a) => {
    return a.user
  }

  lbl = (n) => {
    return `${n.description} ${n.user} ${n.id}`
  }
  hover = (node, prev) => {
    elem = elem || document.querySelector('.parent');
    if (node){
      elem.style.cursor = 'pointer';
    } else {
      elem.style.cursor = null;
    }
  }
  handleClick = (node) => {
    // Aim at node from outside it
    const distance = 40;
    const distRatio = 1 + distance/Math.hypot(node.x, node.y, node.z);
    this.fg.cameraPosition(
      { x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio }, // new position
      node, // lookAt ({ x, y, z })
      3000  // ms transition duration
    );
  };

  componentWillUnmount(){
    this.fg.stopAnimation();
  }



render(){
  <Link to="/echarts">Echarts graph</Link>
  return(
    <ForceGraph3D ref={el => { this.fg = el; }} graphData={data} width={1000} height={600} nodeLabel={this.lbl} nodeAutoColorBy={this.color} nodeResolution={8} linkDirectionalParticles={4} linkDirectionalParticleColor="red" warmupTicks={1} cooldownTime={5000} linkHoverPrecision={4} cooldownTicks={30} nodeVal={15} onNodeHover={this.hover} nodeOpacity={1} nodeRelSize={1} enableNodeDrag={false} onNodeClick={this.handleClick}/>

  )
}


}
