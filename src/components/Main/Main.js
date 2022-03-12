import React from 'react';
import { zodiac } from '../../data.js';
import ZodiacRender from '../Zodiacs/Zodiacs';
import './Main.css';

export default function Main() {
  return (
    <div className="zodiac-main">
      {zodiac.map((item) => (
        <ZodiacRender key={item.name} {...item} />
      ))}
    </div>
  );
}
