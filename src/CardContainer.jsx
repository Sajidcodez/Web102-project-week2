import React, { useState } from 'react';
import FlashCard from './FlashCard';
import cardData from './cardData';
import './CardContainer.css';

const CardContainer = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
      const [isFlipped, setIsFlipped] = useState(false);

  const currentCard = cardData[currentCardIndex];

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
      };

  const handleNextCard = () => {
         setIsFlipped(false);
    
    setTimeout(() => {
         let newIndex;
      do {
        newIndex = Math.floor(Math.random() * cardData.length);
           } while (newIndex === currentCardIndex && cardData.length > 1);
      
      setCurrentCardIndex(newIndex);
    }, 100); };

  return (
    <div className="cardContainer">
      <div className="cardInfo">
        <div className="cardMoreInfo">
     <h2>NBA History Trivia</h2>
          <p className="cardWord">
           Learn about all the NBA teams and players to ever participate in NBA history!
          </p>
             <p className="countCard">Total cards: {cardData.length}</p>
        </div>
        
        <div className="cardLevel">
          <span className={`difficulty ${currentCard.difficulty.toLowerCase()}`}>
            {currentCard.difficulty}
          </span></div></div>
      
      <FlashCard 
        question={currentCard.question}
        answer={currentCard.answer}
             image={currentCard.image}
        difficulty={currentCard.difficulty}
        isFlipped={isFlipped}
              onFlip={handleFlip}
      />
      
      <div className="controlCard">
        <button className="nextControl" onClick={handleNextCard}>
          Next Card
            </button>
           </div>
             </div>
  );};

    export default CardContainer;