import React, { useState } from "react";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";
import "./App.css";
import botData from "./db.json";

function App () {
    const[bots, setBots] = useState(botData.bots);
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
