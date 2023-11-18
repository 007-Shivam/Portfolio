import React from 'react';
import { isMobile } from 'react-device-detect';
import AnimatedCursor from 'react-animated-cursor';

export default function AnimatedCursorComponent() {
  if (isMobile) {
    return null;
  }

  return (
    <AnimatedCursor
      style={{ zIndex: 999 }}
      color='#000'
      innerSize={8}
      outerSize={35}
      innerScale={1}
      outerScale={1.5}
      outerAlpha={0}
      hasBlendMode={true}
      innerStyle={{
        backgroundColor: '#000',
      }}
      outerStyle={{
        border: '3px solid #000',
      }}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link',
      ]}
    />
  );
}
