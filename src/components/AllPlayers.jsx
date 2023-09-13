import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const AllPlayers = () => {    
    const [players, setPlayers] = useState([]);

    useEffect(() => {
      const fetchPlayers = async() => {
        const response = await axios.get('https://fsa-puppy-bowl.herokuapp.com/api/2307-FTB-ET-WEB-FT/players/');
        const data = response.data.data.players;
        setPlayers(data);
        console.log(data);      
      };
      fetchPlayers();
    }, []);

    return (
        <>
        <h1>All Players</h1>
        {
          players.map( player => {
            return (
                <div key={player.id}>
                    <Link to={`/players/${player.id}`}>{ player.name }</Link>                    
                </div>
            )
          })  
        }
        
        </>
    );
};

export default AllPlayers;