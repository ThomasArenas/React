import { getPokemon } from './PokemonsJSON';
import { useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const UpdatePokemon = () => {
  const location = useLocation();
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    getPokemon(location.pathname.slice(7)).then((data) => {
      setPokemon(data)
      setNom(parseInt(pokemon.name.french))
      setPV(parseInt(pokemon.base.HP))
      setAtk(parseInt(pokemon.base.Attack))
      setDef(parseInt(pokemon.base.Defense))
      setAtkSp(parseInt(pokemon['base']['Sp. Attack']))
      setDefSp(parseInt(pokemon['base']['Sp. Defense']))
      setVit(parseInt(pokemon.base.Speed))

      if ('Normal' in pokemon.type) {
        document.getElementById('Normal').checked = true
      }
      if ('Fire' in pokemon.type) {
        document.getElementById('Feu').checked = true
      }
      if ('Water' in pokemon.type) {
        document.getElementById('Eau').checked = true
      }
      if ('Grass' in pokemon.type) {
        document.getElementById('Plante').checked = true
      }
      if ('Electric' in pokemon.type) {
        document.getElementById('Electrique').checked = true
      }
      if ('Ice' in pokemon.type) {
        document.getElementById('Glace').checked = true
      }
      if ('Fighting' in pokemon.type) {
        document.getElementById('Combat').checked = true
      }
      if ('Poison' in pokemon.type) {
        document.getElementById('Poison').checked = true
      }
      if ('Ground' in pokemon.type) {
        document.getElementById('Sol').checked = true
      }
      if ('Flying' in pokemon.type) {
        document.getElementById('Vol').checked = true
      }
      if ('Psychic' in pokemon.type) {
        document.getElementById('Psy').checked = true
      }
      if ('Bug' in pokemon.type) {
        document.getElementById('Insecte').checked = true
      }
      if ('Rock' in pokemon.type) {
        document.getElementById('Roche').checked = true
      }
      if ('Ghost' in pokemon.type) {
        document.getElementById('Spectre').checked = true
      }
      if ('Dragon' in pokemon.type) {
        document.getElementById('Dragon').checked = true
      }
      if ('Dark' in pokemon.type) {
        document.getElementById('Ténèbres').checked = true
      }
      if ('Steel' in pokemon.type) {
        document.getElementById('Acier').checked = true
      }
      if ('Fairy' in pokemon.type) {
        document.getElementById('Fée').checked = true
      }
    });
  }, [location.pathname]);
  
  var [nom, setNom] = useState('')
  var [pv, setPV] = useState('')
  var [attaque, setAtk] = useState('')
  var [defense, setDef] = useState('')
  var [attaqueSp, setAtkSp] = useState('')
  var [defenseSp, setDefSp] = useState('')
  var [vitesse, setVit] = useState('')

  const UpdatePokemon = (e) => {
    e.preventDefault()

    var types = []
    if (document.getElementById('Normal').checked) {
      types.push('Normal')
    }
    if (document.getElementById('Feu').checked) {
      types.push('Fire')
    }
    if (document.getElementById('Eau').checked) {
      types.push('Water')
    }
    if (document.getElementById('Plante').checked) {
      types.push('Grass')
    }
    if (document.getElementById('Electrique').checked) {
      types.push('Electric')
    }
    if (document.getElementById('Glace').checked) {
      types.push('Ice')
    }
    if (document.getElementById('Combat').checked) {
      types.push('Fighting')
    }
    if (document.getElementById('Poison').checked) {
      types.push('Poison')
    }
    if (document.getElementById('Sol').checked) {
      types.push('Ground')
    }
    if (document.getElementById('Vol').checked) {
      types.push('Flying')
    }
    if (document.getElementById('Psy').checked) {
      types.push('Psychic')
    }
    if (document.getElementById('Insecte').checked) {
      types.push('Bug')
    }
    if (document.getElementById('Roche').checked) {
      types.push('Rock')
    }
    if (document.getElementById('Spectre').checked) {
      types.push('Ghost')
    }
    if (document.getElementById('Dragon').checked) {
      types.push('Dragon')
    }
    if (document.getElementById('Ténèbres').checked) {
      types.push('Dark')
    }
    if (document.getElementById('Acier').checked) {
      types.push('Steel')
    }
    if (document.getElementById('Fée').checked) {
      types.push('Fairy')
    }

    const updPokemon = {
      name: {"french" : nom},
      type: types,
      base: {
        HP: parseInt(pv),
        Attack: parseInt(attaque),
        Defense: parseInt(defense),
        ['Sp. Attack']: parseInt(attaqueSp),
        ['Sp. Defense']: parseInt(defenseSp),
        Speed: parseInt(vitesse),
      } 
    }
  
    fetch(`http://localhost:3000/pokemons/${pokemon.id}`, {
      method: 'PUT', 
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(updPokemon)
    }).then(() => {
      document.location.href="/";
    })
  }
  
  if (pokemon.length != 0) {
    return (
      <form onSubmit={UpdatePokemon}>
        <div class="row">
          <div class="col s8 offset-s2">
            <div class="card-panel">

              <div class="form-group">
                <label for="name">Nom : </label>
                <input type="text" class="form-control" id="name" required 
                  pattern="^[a-zA-Z-0-9àéèç]{1,25}$" name="name" value={nom}
                  onChange={(e) => setNom(e.target.value)}/>
              </div>

              <div class="form-group">
                <label for="hp">PV : </label>
                <input type="number" class="form-control" id="hp" required 
                pattern="^[0-9]{1,3}$" name="hp" value={pv}
                onChange={(e) => setPV(e.target.value)}/>
              </div>

              <div class="form-group">
                <label for="atk">Attaque : </label>
                <input type="number" class="form-control" id="cp" required 
                pattern="^[0-9]{1,2}$" name="atk" value={attaque}
                onChange={(e) => setAtk(e.target.value)}/>
              </div>

              <div class="form-group">
                <label for="def">Défense : </label>
                <input type="number" class="form-control" id="cp" required 
                pattern="^[0-9]{1,2}$" name="def" value={defense}
                onChange={(e) => setDef(e.target.value)}/>
              </div>

              <div class="form-group">
                <label for="spAtk">Attaque Spéciale : </label>
                <input type="number" class="form-control" id="cp" required 
                pattern="^[0-9]{1,2}$" name="spAtk" value={attaqueSp}
                onChange={(e) => setAtkSp(e.target.value)}/>
              </div>
              
              <div class="form-group">
                <label for="spDef">Défense Spéciale : </label>
                <input type="number" class="form-control" id="cp" required 
                pattern="^[0-9]{1,2}$" name="spDef" value={defenseSp}
                onChange={(e) => setDefSp(e.target.value)}/>
              </div>
              
              <div class="form-group">
                <label for="vit">Vitesse : </label>
                <input type="number" class="form-control" id="cp" required 
                pattern="^[0-9]{1,2}$" name="vit" value={vitesse}
                onChange={(e) => setVit(e.target.value)}/>
              </div>

              <form class="form-group">
                <label for="types">Types : </label>
                <div>
                  <label className='type__input'>
                    <input type="checkbox" class="filled-in" id="Normal"/>
                    <span>
                      <div>Normal</div>
                    </span>
                  </label>
                  <label className='type__input'>
                    <input type="checkbox" class="filled-in" id="Feu"/>
                    <span>
                      <div>Feu</div>
                    </span>
                  </label>
                  <label className='type__input'>
                    <input type="checkbox" class="filled-in" id="Eau"/>
                    <span>
                      <div>Eau</div>
                    </span>
                  </label>
                  <label className='type__input'>
                    <input type="checkbox" class="filled-in" id="Plante"/>
                    <span>
                      <div>Plante</div>
                    </span>
                  </label>
                  <label className='type__input'>
                    <input type="checkbox" class="filled-in" id="Electrique"/>
                    <span>
                      <div>Electrique</div>
                    </span>
                  </label>
                  <label className='type__input'>
                    <input type="checkbox" class="filled-in" id="Glace"/>
                    <span>
                      <div>Glace</div>
                    </span>
                  </label>
                  <label className='type__input'>
                    <input type="checkbox" class="filled-in" id="Combat"/>
                    <span>
                      <div>Combat</div>
                    </span>
                  </label>
                  <label className='type__input'>
                    <input type="checkbox" class="filled-in" id="Poison"/>
                    <span>
                      <div>Poison</div>
                    </span>
                  </label>
                  <label className='type__input'>
                    <input type="checkbox" class="filled-in" id="Sol"/>
                    <span>
                      <div>Sol</div>
                    </span>
                  </label>
                  <label className='type__input'>
                    <input type="checkbox" class="filled-in" id="Vol"/>
                    <span>
                      <div>Vol</div>
                    </span>
                  </label>
                  <label className='type__input'>
                    <input type="checkbox" class="filled-in" id="Psy"/>
                    <span>
                      <div>Psy</div>
                    </span>
                  </label>
                  <label className='type__input'>
                    <input type="checkbox" class="filled-in" id="Insecte"/>
                    <span>
                      <div>Insecte</div>
                    </span>
                  </label>
                  <label className='type__input'>
                    <input type="checkbox" class="filled-in" id="Roche"/>
                    <span>
                      <div>Roche</div>
                    </span>
                  </label>
                  <label className='type__input'>
                    <input type="checkbox" class="filled-in" id="Spectre"/>
                    <span>
                      <div>Spectre</div>
                    </span>
                  </label>
                  <label className='type__input'>
                    <input type="checkbox" class="filled-in" id="Dragon"/>
                    <span>
                      <div>Dragon</div>
                    </span>
                  </label>
                  <label className='type__input'>
                    <input type="checkbox" class="filled-in" id="Ténèbres"/>
                    <span>
                      <div>Ténèbres</div>
                    </span>
                  </label>
                  <label className='type__input'>
                    <input type="checkbox" class="filled-in" id="Acier"/>
                    <span>
                      <div>Acier</div>
                    </span>
                  </label>
                  <label className='type__input'>
                    <input type="checkbox" class="filled-in" id="Fée"/>
                    <span>
                      <div>Fée</div>
                    </span>
                  </label>
                </div>
              </form>

              <div class="divider"></div>
              <div class="section center">
                <button type="submit"class="waves-effect waves-light btn">Valider</button>
              </div>

            </div>
          </div>
        </div>
      </form>
    );
  }
};

export default UpdatePokemon;