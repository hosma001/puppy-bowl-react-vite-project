import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SinglePlayer = () => {
    const {id} = useParams()
    console.log(id)
    const [player, setPlayer] = useState(null);

    useEffect(() => {
        async function fetchPlayer() {
            const response = await axios.get(`https://fsa-puppy-bowl.herokuapp.com/api/2307-FTB-ET-WEB-FT/players/${id}`);
            const data = response.data.data.players;
            setPlayer(data);
        }
        fetchPlayer();
    }, [])

    return (
        <>
        <h1>{ player && player.name }</h1>
        </>
    );
};

export default SinglePlayer;