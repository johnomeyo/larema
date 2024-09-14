import React from 'react';
import './ScenaryCard.css';

function SceneryCard({ imageUrl, name }) {
    const images = [
        { id: 1, url: 'https://images.unsplash.com/photo-1519066629447-267fffa62d4b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { id: 2, url: 'https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { id: 3, url: 'https://plus.unsplash.com/premium_photo-1666666222364-7479e7347833?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { id: 4, url: 'https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { id: 5, url: 'https://plus.unsplash.com/premium_photo-1663950774999-8da6f0553d8c?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      ];
   
 
  return (
    <div className="scenery-card">
      <img src={imageUrl} alt={name} />
      <div className="scenery-name">
        {name}
      </div>
    </div>
  );
}

export default SceneryCard;