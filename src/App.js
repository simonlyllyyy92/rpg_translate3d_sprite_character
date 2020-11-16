import './App.css';

function App() {
  return (
     
     <>
      <div className="Character">
        <img className="Character_shadow pixcelart" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/21542/DemoRpgCharacterShadow.png" alt="Shadow" />
        <img className="Character_spritesheet pixcelart face-right" src={'/images/m2.png'} alt="Character" />  
      </div>
      <div className="Character">
        <img className="Character_shadow pixcelart" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/21542/DemoRpgCharacterShadow.png" alt="Shadow" />
        <img className="Character_spritesheet pixcelart face-left" src={'/images/m1.png'} alt="Character" />  
      </div>
      <div className="Character">
        <img className="Character_shadow pixcelart" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/21542/DemoRpgCharacterShadow.png" alt="Shadow" />
        <img className="Character_spritesheet pixcelart" src={'/images/f1.png'} alt="Character" />  
      </div>
      <div className="Character">
        <img className="Character_shadow pixcelart" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/21542/DemoRpgCharacterShadow.png" alt="Shadow" />
        <img className="Character_spritesheet pixcelart face-up" src={'/images/f2.png'} alt="Character" />  
      </div>
     </>
      
  );
}

export default App;

