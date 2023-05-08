import React, { useState } from 'react'
import { GiphyFetch } from "@giphy/js-fetch-api";
const Test = () => {
  const [text, setText] = useState('')
  const [resultat, setResultat] = useState([])
  const gf = new GiphyFetch('3uTOxdhvHwkVdvaxrVNJOPobvC6LXSaF')
  console.log(gf);
  const handleSubmit = (e) => {
    // e.preventDefault();
    const anm = async () => {
      const res = await gf.animate(text, { limit: 10 });
      console.log(res)
      setResultat(res.data);
    };
    anm();

  };
  return (
    <div>
      <input type='text'
        value={text}
        onChange={(e) => setText(e.target.value)} />
      <button onClick={handleSubmit}>GO!</button>
      {
        resultat.map((el) => (
          <div key= {el.id} >
            <img src={el.images.fixed_width.url}/>
          </div>
        )) 
      }
    </div>
  )
}

export default Test