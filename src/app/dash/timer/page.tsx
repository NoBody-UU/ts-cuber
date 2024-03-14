"use client";
import { useEffect, useState } from 'react';

export default function Timer () {
  const [startTime, setStartTime] = useState<number | null>(null);
  const [currentTime, setCurrentTime] = useState<number | null>(null);
  const [running, setRunning] = useState<boolean>(false);
  const [spacePressed, setSpacePressed] = useState<boolean>(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === 'Space') {
        setSpacePressed(true);
        event.preventDefault();
        if (!running) {
          setStartTime(Date.now());
        }
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.code === 'Space' && spacePressed) {
        setSpacePressed(false);
        if (!running) {
          setRunning(true);
        } else {
          setRunning(false);
          setCurrentTime(Date.now() - startTime!);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [startTime, running, spacePressed]);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (running) {
      interval = setInterval(() => {
        setCurrentTime(Date.now() - startTime!);
      }, 10);
    } 

    return () => clearInterval(interval);
  }, [running, startTime]);

  const formatTime = (time: number | null): { m: string, s: string, ms: string } => {
    if (time === null) return { m: '00', s: '00', ms: '00' };

    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);

    const m = minutes.toString().padStart(2, '0');
    const s = seconds.toString().padStart(2, '0');
    const ms = milliseconds.toString().padStart(2, '0');

    return { m, s, ms };
  };
  // hacer que si doy espacio no se mueva la pantalla
  return (

    <div className={`flex flex-col items-center justify-center h-screen ${currentTime && currentTime > 0 ? "overflow-hidden": ""}`}>
      <h1 className={`text-9xl font-bold mb-4 ${spacePressed ? 'text-red-500' : 'text-gray-100'}`}>
        {formatTime(currentTime).m}
        <span className='text-yellow-500'>:</span>
        {formatTime(currentTime).s}
        <span className='text-red-500 text-4xl'>:</span>
        <span className='text-4xl'>{formatTime(currentTime).ms}</span>
      </h1>
    </div>
  );
};
