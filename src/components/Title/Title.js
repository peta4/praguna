import React from 'react'

function Title({nadpis,type,styles}){
    let titleType;
    if(type===1){
        titleType = <h1 style={styles}>{nadpis}</h1>
    }

    if(type===2){
        titleType = <h2 style={styles}>{nadpis}</h2>
    }

return(titleType)
}

export default Title
