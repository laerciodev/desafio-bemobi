import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './style.css';
import { greenBright } from 'ansi-colors';

const url_api = ['recarga', 'dados'];

const Plan = props => {

    const [ datas, setData ] = useState([]);

    let index = props.page.index;
    let extension_api = url_api[index];
   
    useEffect(() => {

        async function loadData() {
            const response = await fetch(`https://tidal-hearing.glitch.me/${extension_api}`);
            const dataJson = await response.json();
            
            setData(dataJson);
        }

        loadData();
       
    }, [props.page]);


    return (

        <div className="container-plan">
            
            {
                datas.map(data => (

                    <div key={data.id} className="plan">
                        <p className="price">
                            { data.amount ? `R$ ${data.amount}` : `${data.gb_amount} GB` }
                        </p>
                        <p className="bonus"> 
                         { 
                            data.bonus_amount 
                            ? `Ganhe ${data.bonus_amount} reais de bônus` 
                            : 'Redes sociais ilimitadas'
                        } </p>
                        <div className="button-hire">Contratar</div>
                    </div>
                ))
            }
                 
        </div>

    )
}

const mapStateToProps = state => ({
  page: state.page
});

export default connect(mapStateToProps)(Plan);