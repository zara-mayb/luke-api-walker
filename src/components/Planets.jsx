import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Planets = () => {
    const navigate = useNavigate();

    const { apiID } = useParams();
    const [planet, setPlanet] = useState(null);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${apiID}`)
            .then((serverRes) => {
                setPlanet(serverRes.data);
            })
            .catch(err => console.log("XXX", err))
    }, [planet])

    //back button
    const goBack = (e) => {
        e.preventDefault();
        navigate(-1);
    }
    return (
        <>
            <h1>Planets</h1>
            <hr />
            <div>
                {
                    planet ? (
                        <>
                            <h1>{planet.name}</h1>
                            <p><span style={{ fontWeight: 'bold' }}>Climate:</span> {planet.climate} </p>
                            <p><span style={{ fontWeight: 'bold' }}>Terrain:</span> {planet.terrain} </p>
                            <p><span style={{ fontWeight: 'bold' }}>Surface Water:</span> {planet.surface_water}</p>
                            <p><span style={{ fontWeight: 'bold' }}>Population:</span> {planet.population}</p>
                        </>
                    ) :
                        <p>
                            These Aren't the Droids you're looking for
                            <img src="/obi2.webp" alt="" />
                        </p>
                }
            </div>
            <button onClick={goBack}>home</button>
        </>
    )
}

export default Planets