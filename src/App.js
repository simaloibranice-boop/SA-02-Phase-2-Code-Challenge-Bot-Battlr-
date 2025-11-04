import React, { useState } from "react";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";
import "./App.css";
import botData from "./db.json";

function App () {
    const botData = [
       {
            "id": 101,
            "name": "wHz-93",
            "health": 90,
            "damage": 20,
            "armor": 10,
            "bot_class": "Support",
            "catchphrase": "1010010101001101100011000111101",
            "avatar_url": "https://robohash.org/nostrumrepellendustenetur.png?size=300x300&set=set1"
        },
        {
            "id": 102,
            "name": "RyM-66",
            "health": 86,
            "damage": 36,
            "armor": 77,
            "bot_class": "Medic",
            "catchphrase": "0110011100000100011110100110011000011001",
            "avatar_url": "https://robohash.org/quidemconsequaturaut.png?size=300x300&set=set1"
        }
    ]
    const[bots, setBots] = useState(botData);
    const [army, setArmy] = useState([]);
   

      function handleAddToArmy(bot) {
    if (!army.find((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  }

    function handleRelease(bot) {
    setArmy(army.filter((b) => b.id !== bot.id));
  }

  function handleDischarge(bot) {
    setArmy(army.filter((b) => b.id !== bot.id));
    setBots(bots.filter((b) => b.id !== bot.id));
  }


return (
      <div className="App">
      <h1>Bot Battlr</h1>
      <YourBotArmy
        army={army}
        onRelease={handleRelease}
        onDischarge={handleDischarge}
      />
      <BotCollection bots={bots} onAddToArmy={handleAddToArmy} />
    </div>
  );
}

export default App;
