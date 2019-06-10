import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import './style.css';

const Container = styled.div`
        position: relative;
        width: 163px;
        height: 119px;
        mix-blend-mode: normal;
        border-radius: 5px;
        opacity: 0.9;
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.0001) 0%, #000000 100%), url( ${ props => props.img } )
`;

const ContainerService = () => {
    
    const [ dataSVA, setDataSVA ] = useState([]);
    
    useEffect(() => {

        async function loadSVA() {
            const response = await fetch('https://tidal-hearing.glitch.me/sva');
            const dataJson = await response.json();
            
            setDataSVA(dataJson);
        }

        loadSVA();
       
    }, []);

   

    return (
        
        dataSVA.map((data) => (

                <div key={data.id} className="container-service">
    
                    <Container className="service" img={data.image} > 
                        <a href="#" className="button-signature">Assine</a>
                        <p className="desc-image">{ data.name }</p>
                    </Container>
    
                    <h2 className="h2-image">{ data.description }</h2>
                    <p className="p-image">{ data.gain }</p>
                </div>

            )
        )
    )   



}

export default ContainerService;