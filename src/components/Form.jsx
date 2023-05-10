import React from 'react'
import { useNavigate } from 'react-router-dom'


const Form = () => {
    const navigate = useNavigate();
    const searchSubmit = (e) =>{
        e.preventDefault();
        const type = e.target.type.value;
        const apiID = e.target.id.value
        navigate(`/${type}/${apiID}`)
    }
    return (
        <>
            <h1>Star Wars</h1>
            <form onSubmit={searchSubmit}>
                <label htmlFor="searchFor">Search for:</label>
                <select name="searchFor" id="type">
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                </select>
                <label htmlFor="apiId">ID:</label>
                <input type="number" name='apiId' id='id' min={1}/>
                <button type='submit'>Search</button>
            </form>
        </>

    )
}

export default Form