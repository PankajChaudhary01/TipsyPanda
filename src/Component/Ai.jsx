// import React from 'react'
// import ai from '../Images/AI/pandaAI.png'
// import {Link} from 'react-router-dom'
// export default function Ai() {
//   return (
//     <>
//         <div className='text-center PandaAI'>
//         <Link to="/ChatBot"><img src={ai} width="120px" alt="" /></Link>
//         <p className='fw-bold'>Ask anything?</p>
//     </div>

//     <style jsx global>{
//        ` .PandaAI{
//                 position:fixed;
//                 bottom:0;
//                 right:0;
//         }`
//     }</style>
//     </>
//   )
// }


import React from 'react';
import ai from '../Images/AI/pandaAI.png'; // Your Panda AI icon
import ai2 from '../Images/AI/8372043.png'; // Your Panda AI icon
import { Link } from 'react-router-dom';

// --- Configuration ---
// Option 1: Keep existing green theme
const fabBackgroundColor = '#198754'; // Main background color
const fabGlowColor = '#20c997'; // A slightly lighter green/teal for the glow

// Option 2: Techy Blue/Cyan theme (Uncomment to use)
// const fabBackgroundColor = '#0d6efd'; // Bootstrap blue
// const fabGlowColor = '#0dcaf0'; // Bootstrap cyan

export default function Ai() {
  return (
    <>
      <Link
        to="/ChatBot"
        className="panda-ai-fab-enhanced" // New class name
        title="Ask the AI Panda!"
        aria-label="Open AI Chatbot"
      >
        <img
          src={ai2}
          width="40"
          height="40"
          alt="" // Alt text handled by aria-label
          className="panda-ai-icon" // Class for potential icon-specific styling
        />
      </Link>

      {/* Global JSX styles for the enhanced FAB */}
      <style jsx global>{`
        /* Define the pulsing animation */
        @keyframes pulse-glow {
          0% {
            box-shadow: 0 0 8px 2px ${fabBackgroundColor}cc, /* Base glow (80% opacity) */
                        0 0 10px 4px ${fabGlowColor}66,    /* Outer glow (40% opacity) */
                        inset 0 0 8px 1px rgba(255, 255, 255, 0.5), /* Inner glow */
                        0 4px 8px rgba(0, 0, 0, 0.2); /* Standard elevation shadow */
          }
          70% {
            box-shadow: 0 0 14px 5px ${fabBackgroundColor}ff, /* Brighter base glow (100% opacity) */
                        0 0 18px 8px ${fabGlowColor}99,    /* Wider outer glow (60% opacity) */
                        inset 0 0 10px 2px rgba(255, 255, 255, 0.6), /* Brighter Inner glow */
                        0 6px 12px rgba(0, 0, 0, 0.25); /* Slightly larger elevation */
          }
          100% {
             box-shadow: 0 0 8px 2px ${fabBackgroundColor}cc, /* Return to Base glow */
                         0 0 10px 4px ${fabGlowColor}66,    /* Return to Outer glow */
                         inset 0 0 8px 1px rgba(255, 255, 255, 0.5), /* Return to Inner glow */
                         0 4px 8px rgba(0, 0, 0, 0.2); /* Return to Standard elevation */
          }
        }

        .panda-ai-fab-enhanced {
          position: fixed;
          bottom: 25px;
          right: 25px;
          z-index: 1050;

          display: flex;
          align-items: center;
          justify-content: center;
          width: 70px; /* Slightly larger to accommodate effects */
          height: 70px;
          border-radius: 50%;
          background-color: ${fabBackgroundColor};
          /* Optional Gradient: */
          /* background: linear-gradient(145deg, ${fabGlowColor}, ${fabBackgroundColor}); */
          color: white;
          text-decoration: none;
          cursor: pointer;

          /* Apply the animation */
          animation: pulse-glow 2.5s infinite ease-in-out;

          /* Initial box-shadow state (matches 0%/100% of animation) */
          box-shadow: 0 0 8px 2px ${fabBackgroundColor}cc,
                      0 0 10px 4px ${fabGlowColor}66,
                      inset 0 0 8px 1px rgba(255, 255, 255, 0.5),
                      0 4px 8px rgba(0, 0, 0, 0.2);

          transition: transform 0.2s ease-out; /* Only transition transform for smoothness */
        }

        .panda-ai-fab-enhanced:hover {
          /* Make it slightly larger on hover */
          transform: scale(1.1);
           /* Optional: Pause animation or make it faster/brighter on hover */
           /* animation-play-state: paused; */
           /* animation-duration: 1s; */ /* Faster pulse on hover */
        }

        .panda-ai-icon { /* Target the image inside */
           display: block; /* Remove extra space below image */
           width: 40px; /* Ensure size constraints */
           height: 40px;
           /* Add a subtle drop shadow to the icon itself */
           filter: drop-shadow(0 1px 2px rgba(0,0,0,0.4));
           -webkit-user-drag: none;
           user-select: none;
        }

        /* Responsive Adjustments */
        @media (max-width: 768px) {
          .panda-ai-fab-enhanced {
            width: 60px;
            height: 60px;
            bottom: 20px;
            right: 20px;
          }
          .panda-ai-icon {
            width: 35px;
            height: 35px;
          }
          /* Maybe tone down the animation on mobile if needed */
          /* .panda-ai-fab-enhanced { animation: none; box-shadow: ... simpler shadow ...; } */
        }
      `}</style>
    </>
  );
}