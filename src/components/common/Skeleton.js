import React from 'react';

const Skeleton = ({ type }) => {
  const classes = `skeleton ${type}`;
  
  return (
    <div className={classes}>
      <div className="shimmer-wrapper">
        <div className="shimmer"></div>
      </div>
    </div>
  );
};

export default Skeleton;

// Add this to your global.css:
/* .skeleton { background: #ddd; margin: 10px 0; border-radius: 4px; overflow: hidden; position: relative; }
.skeleton.title { width: 50%; height: 20px; }
.skeleton.text { width: 100%; height: 12px; }
.skeleton.card-img { width: 100%; height: 150px; }
.shimmer-wrapper { position: absolute; top: 0; left: 0; width: 100%; height: 100%; animation: loading 1.5s infinite; }
.shimmer { width: 50%; height: 100%; background: rgba(255,255,255,0.2); transform: skewX(-20deg); box-shadow: 0 0 30px 30px rgba(255,255,255,0.2); }
@keyframes loading { 0% { transform: translateX(-150%); } 50% { transform: translateX(-60%); } 100% { transform: translateX(150%); } }
*/