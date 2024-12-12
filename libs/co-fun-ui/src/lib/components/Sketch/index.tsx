"use client";
import React from 'react';
import dynamic from 'next/dynamic';
import p5 from 'p5';

const P5Wrapper = dynamic(import('./P5Wrapper'), {
  ssr: false
});

// Global variables for colors and accentColors, which will be assigned in setup()
let colors: any[] = [];
let accentColors: any[] = [];

// Class for the sculptural shape
class SculpturalShape {
  p5;
  radius;
  points;
  useCurves;
  angleOffset;
  vertices: any[];
  depths: any[];
  colors;
  accentColors;

  constructor(p5: p5, radius: number, points: number, useCurves: boolean) {
    this.p5 = p5;
    this.radius = radius;
    this.points = points;
    this.useCurves = useCurves;
    this.angleOffset = p5.random(0, 360);
    this.vertices = [];
    this.depths = [];
    this.colors = colors; // Global colors assigned in setup()
    this.accentColors = accentColors; // Global accentColors assigned in setup()
    this.createVertices();
  }

  createVertices() {
    const { p5 } = this;
    let angleStep = 360 / this.points;
    for (let i = 0; i < this.points; i++) {
      let angle = i * angleStep + p5.random(-15, 15);
      let r = this.radius + p5.random(-20, 20);
      let x = r * p5.cos(angle);
      let y = r * p5.sin(angle);
      let z = p5.random(-150, 150);
      this.vertices.push(p5.createVector(x, y, z));
      this.depths.push(z);
    }
  }

  display() {
    const { p5 } = this;
    p5.push();
    p5.rotateY(this.angleOffset);
    p5.rotateX(this.angleOffset / 2);

    let fillCol = p5.random(this.colors);
    let strokeCol = p5.random(this.accentColors);
    let gradientCol = p5.lerpColor(fillCol, p5.random(this.accentColors), 0.4);
    p5.fill(gradientCol);
    p5.noStroke();

    p5.beginShape();
    p5.vertex(this.vertices[0].x, this.vertices[0].y, this.vertices[0].z);
    for (let i = 1; i < this.vertices.length; i++) {
      let v = this.vertices[i];
      if (this.useCurves && i < this.vertices.length - 1) {
        let next = this.vertices[i + 1];
        p5.bezierVertex(v.x, v.y, v.z, next.x, next.y, next.z, next.x, next.y, next.z);
      } else {
        p5.vertex(v.x, v.y, v.z);
      }
    }
    p5.endShape(p5.CLOSE);

    p5.stroke(strokeCol);
    for (let i = 0; i < this.vertices.length; i++) {
      let start = this.vertices[i];
      for (let j = i + 1; j < this.vertices.length; j++) {
        let end = this.vertices[j];
        if (p5.dist(start.x, start.y, start.z, end.x, end.y, end.z) < this.radius * 1.5) {
          let randomThickness = p5.random(1, 8);
          p5.strokeWeight(randomThickness);

          if (p5.random(1) > 0.5) {
            p5.beginShape();
            p5.curveVertex(start.x, start.y, start.z);
            p5.curveVertex((start.x + end.x) / 2, (start.y + end.y) / 2, (start.z + end.z) / 2);
            p5.curveVertex(end.x, end.y, end.z);
            p5.endShape();
          } else {
            p5.line(start.x, start.y, start.z, end.x, end.y, end.z);
          }
        }
      }
    }
    p5.pop();
  }
}

const generateColorPalettes = (p5: p5) => {
  let newPalettes: p5.Color[][] = [];

  // Generate monochrome palettes
  for (let i = 0; i < 10; i++) {
    let baseColor = p5.color(p5.random(0, 255), p5.random(0, 255), p5.random(0, 255));
    let palette = [
      baseColor,
      p5.lerpColor(baseColor, p5.color(255), 0.3),
      p5.lerpColor(baseColor, p5.color(0), 0.3),
      p5.lerpColor(baseColor, p5.color(255), 0.6),
      p5.lerpColor(baseColor, p5.color(255), 0.9),
    ];
    newPalettes.push(palette);
  }

  // Generate complementary and contrast palettes
  for (let i = 0; i < 10; i++) {
    let baseColor1 = p5.color(p5.random(0, 255), p5.random(0, 255), p5.random(0, 255));
    let baseColor2 = p5.color(255 - p5.red(baseColor1), 255 - p5.green(baseColor1), 255 - p5.blue(baseColor1));
    newPalettes.push([baseColor1, baseColor2, p5.lerpColor(baseColor1, baseColor2, 0.5), p5.lerpColor(baseColor2, p5.color(255), 0.3)]);
  }

  // Fluorescent and vibrant palettes
  newPalettes.push(
    [p5.color('#1b47e4'), p5.color('#ff8a52'), p5.color('#ed6500'), p5.color('#ffffff'), p5.color('#72aaff'), p5.color('#4e5aa7')],
    [p5.color('#ff4da6'), p5.color('#ff3385'), p5.color('#ff1a66'), p5.color('#ff0066'), p5.color('#cc0052'), p5.color('#ff6699')],
    [p5.color('#3399ff'), p5.color('#66b2ff'), p5.color('#99ccff'), p5.color('#0073e6'), p5.color('#0059b3'), p5.color('#80d4ff')],
    [p5.color('#7fffd4'), p5.color('#76eec6'), p5.color('#66cdaa'), p5.color('#40e0d0'), p5.color('#48d1cc'), p5.color('#00ced1')],
    [p5.color('#00ff40'), p5.color('#40ff8c'), p5.color('#80ffbf'), p5.color('#00ff80'), p5.color('#00cc66'), p5.color('#00ffbf')],
    [p5.color(255, 69, 0), p5.color(255, 140, 0), p5.color(255, 165, 0), p5.color(255, 97, 56)],
    [p5.color(255, 20, 147), p5.color(255, 105, 180), p5.lerpColor(p5.color(255, 20, 147), p5.color(255), 0.3), p5.color(255, 182, 193)]
  );

  return newPalettes;
};

const Sketch: React.FC<{ reset: boolean, w?: number, h?: number, customColors?: (p5: p5) => p5.Color[][]}> = ({ w = 1200 , h = 1200, customColors }) => {
  const sketch = (p5: p5) => {
    let shapes: SculpturalShape[] = [];

    p5.setup = () => {
      p5.createCanvas(w, h, p5.WEBGL);
      p5.angleMode(p5.DEGREES);
      p5.noLoop();
      p5.strokeWeight(2);

      const palettes = customColors?.(p5) || generateColorPalettes(p5);

      colors = p5.random(palettes) || [];
      accentColors = colors.map((col) => p5.lerpColor(col, p5.color(255), 0.5));

      for (let i = 0; i < 6; i++) {
        let shape = new SculpturalShape(p5, p5.random(150, 400), p5.int(p5.random(6, 12)), p5.random(0, 1) > 0.5);
        shapes.push(shape);
        shape.display();
      }
    };
  };
  return <><P5Wrapper sketch={sketch} /></>;
};

export { Sketch };
