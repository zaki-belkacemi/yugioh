import React from 'react';
import '../styles/search.css';
export const Search=()=>{
    
        const types = ["Effect Monster",
        "Flip Effect Monster",
        "Flip Tuner Effect Monster",
        "Gemini Monster",
        "Normal Monster",
        "Normal Tuner Monster",
        "Pendulum Effect Monster",
        "Pendulum Flip Effect Monster",
        "Pendulum Normal Monster",
        "Pendulum Tuner Effect Monster",
        "Ritual Effect Monster",
        "Ritual Monster",
        "Skill Card",
        "Spell Card",
        "Spirit Monster",
        "Toon Monster",
        "Trap Card",
        "Tuner Monster",
        "Union Effect Monster"]
        const race =["Aqua",
            "Beast",
            "Beast-Warrior",
            "Creator-God",
            "Cyberse",
           "Dinosaur",
            "Divine-Beast",
            "Dragon",
            "Fairy",
            "Fiend",
            "Fish",
            "Insect",
            "Machine",
            "Plant",
            "Psychic",
            "Pyro",
            "Reptile",
            "Rock",
            "Sea Serpent",
            "Spellcaster",
            "Thunder",
            "Warrior",
            "Winged Beast",
            "Wyrm",
            "Zombie"]

        return (
            <div className='search'>
<br/>
                
                    <h1>Types:</h1>
                    
                    <div className='lyes'>
          {types.map(type => <p>{type}</p>)}
          </div>
              <br/>
              <h2>Races:</h2>
            <div className='zaki'>
        {race.map(race => <p>{race}</p>)} </div>
            </div>
        )
    }
