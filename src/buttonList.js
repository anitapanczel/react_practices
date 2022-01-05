import InsertText from './insertText';
import React from 'react'

function buttonList(props) {

let rows = [];
    for (let i = 0; i < 10; i++) {
        rows.push(<InsertText text={props.text} index={i}/>);
    }

return <div key={props.index}>{rows}</div>;    

}

export default buttonList