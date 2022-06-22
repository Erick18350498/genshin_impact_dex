import "./App.css";
import { useEffect } from 'react';
import { useState } from 'react';
//para poner lista desplegable
const tipos= {
  artifacts:"Artefactos",
  boss:"Jefes",
  characters:"Personajes",
  consumables:"Consumibles",
  domains:"Dominios",
  elements:"Elementos",
  enemies: "Enemigos",
  materials:"Materiales",
  nations:"Naciones",
  weapons: "Armas",
};



function App () {

  const [genshinState, setGenshinState] = useState({
    types:[],
  }  );

  

  const fetchGenshinApi = async (item, url= "https://api.genshin.dev/") =>{
  const respuesta = await fetch(url);
  const respJson  = await respuesta.json();
    if(item==="types"){
      setGenshinState({
    ...genshinState,
    types: respJson.types,
  });
    } else { 
      setGenshinState({types:
        [...genshinState.types],
      [item]:respJson
      });
    }
  };
  
  useEffect(()=>{
    fetchGenshinApi("types");
  },[]);

  
 

 const hanledChangeType =({target}) =>{
   const url= `https://api.genshin.dev/${target.value}`;
   fetchGenshinApi(target.value, url);
   console.log(genshinState);
 };
  
  
  return (
    
      <div className="App container">
        <h2>GENSHIN IMPACT DEX</h2>
        <hr/>
        <select name = "types" onChange={hanledChangeType}>
          <option value="">seleccione una opcion</option>
          {genshinState.types.map((type)=> (
          <option key={type} value={type} >
            {tipos[type]}
          
          </option>
          
          ))}

        
        </select>
        {
          genshinState.artifacts && <select name="artifacts">
            <option value="">seleccione un set de artefactos</option>
            {genshinState.artifacts.map((artifacts)=>(
              <option key={artifacts} value={artifacts}>
                {artifacts }
              </option>
            ))}
          </select>
        }
        {
          genshinState.boss && <select name="boss">
            <option value="">seleccione un set de Jefes</option>
            {genshinState.boss.map((boss)=>(
              <option key={boss} value={boss}>
                {boss }
              </option>
            ))}
          </select>
        }
        {
          genshinState.characters && <select name="characters">
            <option value="">seleccione un set de Personajes</option>
            {genshinState.characters.map((characters)=>(
              <option key={characters} value={characters}>
                {characters }
              </option>
            ))}
          </select>
        }
        {
          genshinState.consumables && <select name="consumables">
            <option value="">seleccione un set de Consumibles</option>
            {genshinState.consumables.map((consumables)=>(
              <option key={consumables} value={consumables}>
                {consumables }
              </option>
            ))}
          </select>
        }
        {
          genshinState.domains && <select name="domains">
            <option value="">seleccione un set de Dominios</option>
            {genshinState.domains.map((domains)=>(
              <option key={domains} value={domains}>
                {domains }
              </option>
            ))}
          </select>
        }
        {
          genshinState.elements && <select name="elements">
            <option value="">seleccione un set de Elementos</option>
            {genshinState.elements.map((elements)=>(
              <option key={elements} value={elements}>
                {elements }
              </option>
            ))}
          </select>
        }
        {
          genshinState.enemies && <select name="enemies">
            <option value="">seleccione un set de Enemigos</option>
            {genshinState.enemies.map((enemies)=>(
              <option key={enemies} value={enemies}>
                {enemies }
              </option>
            ))}
          </select>
        }
        {
          genshinState.materials && <select name="materials">
            <option value="">seleccione un set de Materiales</option>
            {genshinState.materials.map((materials)=>(
              <option key={materials} value={materials}>
                {materials }
              </option>
            ))}
          </select>
        }
        {
          genshinState.nations && <select name="nations">
            <option value="">seleccione un set de Naciones</option>
            {genshinState.nations.map((nations)=>(
              <option key={nations} value={nations}>
                {nations }
              </option>
            ))}
          </select>
        }
        {
          genshinState.weapons && <select name="weapons">
            <option value="">seleccione un set de Armas</option>
            {genshinState.weapons.map((weapons)=>(
              <option key={weapons} value={weapons}>
                {weapons }
              </option>
            ))}
          </select>
        }


      </div>
  
  );
}

export default App;

