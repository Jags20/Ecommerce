import React from 'react';

const Overlay = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(128, 128, 128, 0.8)',
        zIndex: 2,
        pointerEvents: 'none',
        overflow:"hidden",
      }}
    ></div>
  );
};

export default Overlay;
