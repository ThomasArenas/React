import React, { useState } from 'react';

const AddPokemon = () => {
  const [nom, setNom] = useState('')
  const [pv, setPV] = useState('')
  const [attaque, setAtk] = useState('')
  const [defense, setDef] = useState('')
  const [attaqueSp, setAtkSp] = useState('')
  const [defenseSp, setDefSp] = useState('')
  const [vitesse, setVit] = useState('')

  const CreatePokemon = (e) => {
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

    const pokemon = {
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
  
    fetch("http://localhost:3000/pokemons", {
      method: 'POST', 
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(pokemon)
    }).then(() => {
      document.location.href="/";
    })
  }

  return (
    <form onSubmit={CreatePokemon}>
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
};

export default AddPokemon;