import React from 'react';
import { useState, useEffect } from 'react';
import './InventoryItem.css'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function InventoryItem({ card }) {

  const dispatch = useDispatch();
  const history = useHistory();
  const [cardColor, setCardColor] = useState('transparent');
  const [textColor, setTextColor] = useState('black');
  const [gradientFromColor, setGradientFromColor] = useState('transparent');
  const [gradientToColor, setGradientToColor] = useState('transparent');

  const colorChange = () => {
    if (card.card_type === 'Normal Monster' || card.card_type === 'Gemini Monster') {
      setCardColor('#FFE09E');
    } else if (card.card_type === 'Toon Monster' || card.card_type === 'Spirit Monster' || card.card_type === 'Union Effect Monster' || card.card_type === 'Effect Monster' || card.card_type === 'Flip Effect Monster' || card.card_type === 'Tuner Monster') {
      setCardColor('#B9855D');
      setTextColor('white');
    } else if (card.card_type === 'Fusion Monster') {
      setCardColor('#7972AE');
      setTextColor('white');
    } else if (card.card_type === 'Synchro Monster') {
      setCardColor('white');
    } else if (card.card_type === 'Ritual Effect Monster' || card.card_type === 'Ritual Monster') {
      setCardColor('#0C28C0');
      setTextColor('white');
    } else if (card.card_type === 'Link Monster' || card.card_type === 'Skill Card') {
      setCardColor('#0B63F6');
      setTextColor('white');
    } else if (card.card_type === 'XYZ Monster') {
      setCardColor('#292D2D');
      setTextColor('white');
    } else if (card.card_type === 'Spell Card') {
      setCardColor('#208685');
      setTextColor('white');
    } else if (card.card_type === 'Trap Card') {
      setCardColor('#D187A8');
      setTextColor('white');
    } else if (card.card_type === 'Token') {
      setCardColor('#746B78');
      setTextColor('white');
    } else if (card.card_type === 'Pendulum Monster' || card.card_type === 'Pendulum Normal Monster' || card.card_type === 'Pendulum Effect Monster' || card.card_type === 'Pendulum Tuner Effect Monster') {
      setTextColor('white');
      setGradientFromColor('#B9855D');
      setGradientToColor('#208685');
    } else if (card.card_type === 'Pendulum Fusion Monster') {
      setTextColor('white');
      setGradientFromColor('');
      setGradientToColor('#208685');
    } else if (card.card_type === 'XYZ Pendulum Effect Monster') {
      setTextColor('white');
      setGradientFromColor('#292D2D');
      setGradientToColor('#208685');
    } else if (card.card_type === 'Pendulum Effect Ritual Monster') {
      setTextColor('white');
      setGradientFromColor('#0C28C0');
      setGradientToColor('#208685');
    } else if (card.card_type === 'Synchro Pendulum Effect Monster') {
      setTextColor('black');
      setGradientFromColor('white');
      setGradientToColor('#208685');
    } else if (card.card_type === 'Pendulum Effect Fusion Monster') {
      setTextColor('white');
      setGradientFromColor('#7972AE');
      setGradientToColor('#208685');
    } else {
      setCardColor('transparent');
      setTextColor('black');
      setGradientFromColor('transparent');
      setGradientToColor('transparent');
    }
  }

  const handleCardClick = (card) => {
    dispatch({ type: 'SET_CARD_INFO', payload: card });
    console.log(`card is clicked! ${card.id}`)
    history.push('/card-info-page');
  }

  useEffect(() => {
    colorChange();
  }, [])

  console.log('Check IventoryItem', card.card_images)

  return (
    <center>
      <div id="inventory-item"
        style={{
          backgroundColor: cardColor,
          color: textColor,
          backgroundImage: `linear-gradient(0deg, ${gradientToColor}, ${gradientFromColor})`
        }}>
        {/* {card.card_images.map(data => (
        <img src={data.image_url_small} onClick={handleCardClick} />
      ))}
      <img src={card.card_images.image_url_small} /> */}

        {card.card_images.map(data => (
          <img src={data.image_url_small} onClick={handleCardClick} />
        ))}
        <b>{card.card_name}</b> || <i>{card.card_type}</i>
        <br />
        Location: <b>{card.storage_location}</b> || Quantity: <b>{card.quantity}</b>
      </div>
    </center>

  )
}

export default InventoryItem;