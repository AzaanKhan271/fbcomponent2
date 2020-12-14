import React from 'react'
import './App.css'
import CustomComponent from './components/CustomComponents'

function App(props) {
  const post1 =
    "https://media.istockphoto.com/photos/wazir-khan-mosque-lahore-pakistan-picture-id619503842?k=6&m=619503842&s=612x612&w=0&h=-iayLeIw4biKRxrqebpcBL2YIuVUseniRPy-30IZimo=";
  const post2 =
    "https://media.istockphoto.com/photos/pakistan-monument-islamabad-picture-id535695503?k=6&m=535695503&s=612x612&w=0&h=uP8aDK4xlfjk3kEiyr9wwUiuh80UwAiICweFpiBDosk=";
  const post3 =
    "https://media.istockphoto.com/photos/indian-red-chilli-powder-at-spice-shops-karachi-emprss-market-picture-id171159663?k=6&m=171159663&s=612x612&w=0&h=O1tgdzW4lBQwIb6p6fjRN6o7f7U0nunH-WjCFr4XX58=";

  const profile1 =
    "https://mcdn.wallpapersafari.com/medium/16/79/BtdDpL.jpg";

  const profile2 =
    "https://mcdn.wallpapersafari.com/medium/0/65/mJ9qh6.jpg";
    
  const profile3 =
    "https://mcdn.wallpapersafari.com/medium/82/49/cGReOg.jpg";
  return (
    <div >
    <CustomComponent
        post={post1}
        profile={profile1}
        name="Azaan"
        time="7h"
        text="Wazir Mosque, Lahore, Pakistan"
      />
     <CustomComponent
        post={post2}
        profile={profile2}
        name="Hamza"
        time="9h"
        text="Pakistan Monument Islamabad"
      />
      <CustomComponent
        post={post3}
        profile={profile3}
        name="Mudassir"
        time="11h"
        text="Pakistani Spices"
      />
    </div>
     
  );
}

export default App;