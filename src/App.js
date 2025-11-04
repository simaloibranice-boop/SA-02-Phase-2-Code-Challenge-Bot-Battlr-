import React, { useEffect, useState } from "react";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";
import "./App.css";

function App () {
    const[bots, setBots] = useState([]);
    const [army, setArmy] = useState([]);
    useEffect(() => {
        fetch("https://localhost:3000/bots")
         .then((r) => r.json())
         .then((data) => setBots(data)); 
    }, [])

      function handleAddToArmy(bot) {
    if (!army.find((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  }

    function handleRelease(bot) {
    setArmy(army.filter((b) => b.id !== bot.id));
  }

  function handleDischarge(bot) {
     fetch(`http://localhost:8001/bots/${bot.id}`, {
      method: "DELETE",
    }).then(() => {
      setArmy(army.filter((b) => b.id !== bot.id));
      setBots(bots.filter((b) => b.id !== bot.id));
    });
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
