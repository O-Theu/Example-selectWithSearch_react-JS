import { useEffect, useState } from 'react';
import './App.css';
import dados from './mock.json';


function App() {
  const modulos = Object.keys(dados);

  const [searchText, setSearchText] = useState('');
  const [open, setOpen] = useState(false);

  function onChangeInputText(e) {
    setSearchText(e.target.value);
    setOpen(true);
  }

  return (
    <div className='wrapper'>
      <input className="search" type="text" onClick={onChangeInputText} onChange={onChangeInputText}/>
      {open ? (<div className='modal'>
        {
          modulos.map(modulo => {
            return(
              <ul key={modulo}>
                <h2 className='titulo'>{modulo}</h2>
                {
                  dados[modulo].filter((item) => {
                    return item.nome.includes(searchText.toLowerCase())
                  }).map((item, index) => (
                    <li className="link" key={index}>{item.nome}</li>
                  ))
                }
              </ul>
            )
          })
        }
      </div>)
      :
      (<></>)
      }
    </div>
  );
}

export default App;
