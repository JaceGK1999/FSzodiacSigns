import React from 'react';
import { zodiac } from '../../data.js';
import ZodiacRender from '../Zodiacs/Zodiacs';

export default function Main() {
  return (
    <div>
      test
      {zodiac.map((item) => (
        <ZodiacRender key={item.name} {...item} />
      ))}
    </div>
  );
}
