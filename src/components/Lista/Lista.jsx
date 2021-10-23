import React, { useEffect, useState } from 'react';
import axios from "axios";
import {Card, Button, Row} from 'react-bootstrap';
import "./global.css"

const Lista = () => {

    const [pokemons, setPokemons] = useState([]);
    const getName = localStorage.getItem("name")

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon/?limit=151&offset=0")
        .then((res) => {
            setPokemons(res.data.results)
        })

    }, [])
    return(
        <Row>
            <h2>Olá {getName}, esses são nossos pokémon</h2>
            {pokemons.map((pokemon, index) => {
                return (
                <Card key={index} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={`https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${index + 1}.png?raw=true`} />
                    <Card.Body>
                        <Card.Title>{pokemon.name}</Card.Title>
                        <Button href={`https://pokedex.org/#/pokemon/${index + 1}`} variant="primary">Ver mais detalhes</Button>
                    </Card.Body>
                </Card>
                )
            })}
        </Row>
    )
}  

export default Lista;