import React from 'react';

export default function DragonBallApi({ dbz }) {
  if (!dbz || !dbz.image) {
    return <p>Carregando personagem do Dragon Ball...</p>;
  }

  return (
    <div className="hero">
      <img src={dbz.image} className="base" width="170" height="179" alt={dbz.name} />
    </div>
  );
}