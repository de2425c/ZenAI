import React from 'react';

function NavBar(){
    const navbarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#CBC3E3',
    color: 'white',
    padding: '10px 20px',
    };
    const logoStyle = {
        height: '50px',
      };
    
      const loginButtonStyle = {
        padding: '10px 20px',
        backgroundColor: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        color: 'black',
        fontWeight: 'bold',
      };
    
      const loginButtonHoverStyle = {
        ...loginButtonStyle,
        backgroundColor: '#f0f0f0',
      };
      const [isHovered, setIsHovered] = React.useState(false);

  return (
    <nav style={navbarStyle}>
      <a href="/" className="logo">
        <img src="https://via.placeholder.com/50" alt="Company Logo" style={logoStyle} />
      </a>
      <h1 style = {{color: 'black'}}> ZenAI </h1>
      <div className="login-button">
        <button 
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={isHovered ? loginButtonHoverStyle : loginButtonStyle}
        >
          Log In
        </button>
      </div>
    </nav>
  );
}

export default NavBar;