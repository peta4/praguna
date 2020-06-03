import React from 'react';
import Title from './components/Title/Title'


function Header() {
    let headerStyles = {textAlign:'center', marginTop: '130px'}
    return(
        <header style={headerStyles}>
            
            <Title nadpis='Železářství a domácí potřeby U Praguny' type={1} styles={{fontWeight:'bold', color:'white'}} />
            

        </header>
    )
}

export default Header