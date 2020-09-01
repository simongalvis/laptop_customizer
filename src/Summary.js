import React, { Component } from 'react'
import './App.css'
import SummaryOptions from './SummaryOptions';

class Summary extends Component {

    render(){
        
        const summary = Object.keys(this.props.selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = this.props.selected[feature];
            
            return (<SummaryOptions 
                        featureHash={featureHash} 
                        feature={feature} 
                        selectedOption={selectedOption}
                        key={idx}/>
            );
        });
        
        return(
            <div>{summary}</div>
        )

    }
}

export default Summary
