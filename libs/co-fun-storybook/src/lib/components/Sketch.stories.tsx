import type { Meta, StoryObj } from '@storybook/react';
import { ButtonPrimary } from '@co-fun/ui';
import { useState } from 'react';

const SketchBase = dynamic(() => import('@co-fun/ui').then((data) => data.Sketch), {ssr: false})!;


const meta: Meta = {
  component: SketchBase,
};
export default meta;
type Story = StoryObj<typeof SketchBase>;

const generateColorPalettes = (p5: any) => {
  let newPalettes = [];

  // Generate vibrant and organic monochrome palettes
  for (let i = 0; i < 10; i++) {
    let baseColor = p5.color(p5.random(50, 180), p5.random(80, 160), p5.random(50, 140));
    let palette = [
      baseColor,
      p5.lerpColor(baseColor, p5.color(255, 245, 230), 0.4),
      p5.lerpColor(baseColor, p5.color(20, 20, 20), 0.3),
      p5.lerpColor(baseColor, p5.color(240, 180, 70), 0.6),
      p5.lerpColor(baseColor, p5.color(250, 250, 240), 0.85)
    ];
    newPalettes.push(palette);
  }

  // Generate complementary and contrast palettes with vibrant and organic tones
  for (let i = 0; i < 10; i++) {
    let baseColor1 = p5.color(p5.random(50, 200), p5.random(50, 180), p5.random(50, 150));
    let accentColor = p5.color(255 - p5.red(baseColor1), 255 - p5.green(baseColor1), p5.random(100, 255));
    newPalettes.push([
      baseColor1,
      accentColor,
      p5.lerpColor(baseColor1, accentColor, 0.5),
      p5.lerpColor(accentColor, p5.color(255, 240, 200), 0.3)
    ]);
  }

  // Extended Fluorescent and expressive palettes with organic tones
  let fluorescentColors = [
    '#ff8a52', '#ff4500', '#ed6500', '#ffffff', '#8b4513', '#72aaff', '#ffa07a', '#ff6347', '#ff4500', '#ffa07a',
    '#f4a460', '#ffdab9', '#006400', '#8b0000', '#ff8c00', '#ff1493', '#ff7f50', '#3cb371', '#7fffd4', '#66cdaa',
    '#8fbc8f', '#556b2f', '#40e0d0', '#2e8b57', '#b0e0e6', '#4682b4', '#5f9ea0', '#4682b4', '#00ced1', '#2e8b57',
    '#ffa500', '#ff6347', '#d2691e', '#b22222', '#ff4500', '#ff7f50', '#9acd32', '#6b8e23', '#8fbc8f', '#556b2f',
    '#228b22', '#adff2f', '#ffd700', '#f0e68c', '#daa520', '#b8860b', '#ffebcd', '#8b4513', '#deb887', '#bc8f8f',
    '#a0522d', '#cd853f', '#f5deb3', '#d2b48c', '#ffb6c1', '#db7093', '#c71585', '#ff69b4', '#ff1493', '#ff80bf',
    '#f08080', '#cd5c5c', '#8b0000', '#dc143c', '#fa8072', '#f5c7b8', '#20b2aa', '#3cb371', '#2e8b57', '#66cdaa',
    '#8fbc8f', '#98fb98', '#4682b4', '#4169e1', '#0000cd', '#1e90ff', '#6495ed', '#87cefa', '#ffdead', '#ffdab9',
    '#ffe4b5', '#ffefd5', '#faebd7', '#f5deb3', '#d2691e', '#cd853f', '#8b4513', '#a0522d', '#b8860b', '#f4a460'
  ];

  // Adding 300 more vibrant colors to enhance probability
  for (let i = 0; i < 300; i++) {
    fluorescentColors.push(
      `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`
    );
  }

  // Generating final fluorescent palettes with extended vibrant colors
  for (let i = 0; i < fluorescentColors.length - 5; i += 6) {
    newPalettes.push([
      p5.color(fluorescentColors[i]),
      p5.color(fluorescentColors[i + 1]),
      p5.color(fluorescentColors[i + 2]),
      p5.color(fluorescentColors[i + 3]),
      p5.color(fluorescentColors[i + 4]),
      p5.color(fluorescentColors[i + 5])
    ]);
  }

  return newPalettes;
};

export const Sketch: Story = {
  // @ts-ignore
  args: {
    customColors: (p5: any) => generateColorPalettes(p5)
  },
  render: (args: any) => {
  const [isReset, setIsReset] = useState(false);
  
  // @ts-ignore
  return <><ButtonPrimary variant="outline_dark" onClick={() => setIsReset(!isReset)}>Draw</ButtonPrimary><SketchBase {...args} reset={isReset} /></>
}
}
function dynamic(arg0: () => Promise<any>, arg1: { ssr: boolean; }) {
  throw new Error('Function not implemented.');
}

