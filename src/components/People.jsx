
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const People = () => {

    const navigate = useNavigate();

    const { apiID } = useParams();

    const [person, setPerson] = useState(null);
    //use axios to grab api
    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${apiID}`)
            .then((serverRes) => {
                setPerson(serverRes.data);
            })
            .catch(err => console.log("XXX", err))
    }, [person])

    //back button
    const goBack = (e) => {
        e.preventDefault();
        navigate(-1);
    }
    return (
        <>
            <h1>Characters</h1>
            <hr />
            <div>
                {
                    person ? (
                        <>
                            <h1>{person.name}</h1>
                            <p><span style={{ fontWeight: 'bold' }}>Height:</span> {person.height} cm</p>
                            <p><span style={{ fontWeight: 'bold' }}>Mass:</span> {person.mass} kg</p>
                            <p><span style={{ fontWeight: 'bold' }}>Hair Color:</span> {person.hair_color}</p>
                            <p><span style={{ fontWeight: 'bold' }}>Skin Color:</span> {person.skin_color}</p>
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

export default People