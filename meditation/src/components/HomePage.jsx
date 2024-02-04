import React, { useState } from 'react';
import sunset from '../icons/superepicsunset.webp';

function HomePage() {
    const backgroundImageStyle = {
    backgroundImage: `url(${sunset})`,
    opacity: 0.5,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'fixed',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    zIndex: -1,
  };
  const centerContentStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'calc(100vh - 50px)',
    zIndex: 1, 
    position: 'relative', 
    textAlign: 'center',
  };
  const buttonStyle = {
    backgroundColor: 'black',
    color: '#CBC3E3',
    padding: '10px 20px',
    borderRadius: '10px',
    cursor: 'pointer',
  }
  const[showButton, setShowButton] = useState(true);
  const[show, setShow] = useState('hidden');
  const handleClick = () => {
    setShow('visible');
    setShowButton(false);
    setShowSecondButton(true);
  }
  const [showSecondButton, setShowSecondButton] = useState(false);
  const handleInput = () => {
    console.log("placeholder");
  }
  const [selectedNoise, setSelectedNoise] = useState('');
  const handleNoiseChange = (event) => {
    setSelectedNoise(event.target.value);
  }
  const dropDownMenuStyle = {
    visibility: show,
    opacity: '0.5',
    display: 'block',
    margin: '10px 0',
    width: '40%',
    justifyContent: 'center'
  }
  const textAreaStyle = {
    resize: 'none',
    opacity: '0.5',
    justifyContent: 'center',
    visibility: show,
    textAlign: 'center',
    width: '80%',
  }
  const subHeadingStyle = {
    marginBlockEnd: '0em',
    paddingBottom: '10px'
  }

  return (
    <div> 
    <div style={backgroundImageStyle}></div> 
    <div style={centerContentStyle}>
    <div className="home">
      <section>
        <h1>Your Journey to Peace Begins Here</h1>
        <p style = {subHeadingStyle}>Personalized Meditations for Everyone <br/> with the assistance of AI companion Zen</p>
      </section>
      {showButton &&
        <button onClick = {handleClick} style = {buttonStyle} >Start Now</button>
        }
        <p style = {{visibility: show}} type> Describe your situation to me:</p>
        <textarea
        type = "text"
        rows = "4" 
        cols = "40"
        placeholder="I'm looking to get into the zone for a big sports game coming up, can you guide me through a 5 minute meditation?"
        style = {textAreaStyle}
        />
        <p style = {{visibility: show}}>Choose a background noise:</p>
        <div style = {{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
         <select
            value = {selectedNoise}
            onChange = {handleNoiseChange}
            style = {dropDownMenuStyle}
         >
            <option value="">Select...</option>
            <option value="rain">Rain</option>
            <option value="ocean">Ocean</option>
            <option value="rain">None</option>
         </select>
        {showSecondButton && 
            <button onClick = {handleInput} style = {buttonStyle}>  Generate Response </button>
        }
    </div>
    </div>
    </div>
    </div>
  );
}

export default HomePage;