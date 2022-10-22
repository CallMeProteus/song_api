import React, {useState, useEffect} from 'react'
import axios from "axios";
import '../App.css';
import Beggar from '../assets/music/Beggar.mp3'

const Node = () => {

    const [music, setMusic] = useState([])
    // const [ title, setTitle] =useState('Pinky')

    useEffect(()=>{
        const options = {
            method: 'GET',
            url: 'https://genius.p.rapidapi.com/artists/16775/songs',
            headers: {
              'X-RapidAPI-Key': 'cd36329ed9msh88a34f56cb4f0ddp1cf49ejsn4faa0ee3492b',
              'X-RapidAPI-Host': 'genius.p.rapidapi.com'
            }
          };
          
          axios.request(options).then(function (response) {
    
              setMusic(response.data.response.songs)
          }).catch(function (error) {
              console.error(error);
          });
    },[])





  return (
    <>
<div className='main-song-title'> <h1>Pinky</h1>
<p>Search bar coming soon</p>
<audio  controls style={{width:"90%",backgroundColor:'blue'}}>
  <source src={Beggar} type="audio/ogg"/>
  <source src={Beggar} type="audio/mpeg"/>
  </audio>


</div>

<div className='music-section'>


{
music.map((item,index)=>{return(
    <div className='holder' key={index} onClick={()=>{}}>
<img className='song-pic' src={item.song_art_image_thumbnail_url} alt="cong" />
<p className='song-title'>{item.full_title}</p>

</div>)
})
}


<div className='player-section'>
<img src="https://img.icons8.com/external-others-inmotus-design/67/000000/external-Play-basic-functions-others-inmotus-design.png"/>

<p className='pre-play'> Play Something ...</p>
</div>


</div>
    </>

  )
}

export default Node