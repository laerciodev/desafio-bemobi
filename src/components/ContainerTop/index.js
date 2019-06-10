import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Logo from '../Logo';
import Text from '../Text';
import Plan from '../Plan';
import ContainerButtons from '../ContainerButtons';
import background_services from './img/background-services.png';
import background_data from './img/background-data.png';

const images = [ background_services, background_data];

const gradients = [
    `90deg, #333333 10.8%, rgba(51, 51, 51, 0) 70.13%`,
    `271.18deg, #333333 -0.52%, rgba(79, 79, 79, 0) 87.99%`
];

const Container = styled.section`
    position: relative;
    height: 424px;
    background: linear-gradient(${ props => props.gradient }), url(${ props => props.src });
    background-repeat: no-repeat; 
    background-position: top right;
`

class ContainerTop extends Component {

    render() {
        
        let index = this.props.image.index;
     
        return (
            <Container 
                gradient={ gradients[0] } 
                src={ images[index] } >

                <Logo />
                <Text />
                <Plan />
                <ContainerButtons />
                
            </Container> 
        
        )
    }

}

const mapStateToProps = state => ({
  image: state.page
});

export default connect(mapStateToProps)(ContainerTop);