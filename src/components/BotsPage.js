import React,{useEffect,useState} from 'react'
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {

  const [bots,setBots]= useState([]);

  useEffect (()=> {
    fetch("http://localhost:3000/bots")
    .then(res=>res.json())
    .then(bots => {
      setBots(bots);
      // console.log(bots)
    })

  },[]);



  return (
    <div>
      <BotCollection />
      <YourBotArmy />
    </div>
  );
}

export default BotsPage
