import React, { Component } from 'react'
import './App.css'
import slugify from 'slugify';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

class Options extends Component {
    render(){
        //creates options for each feature type
        const options = this.props.features[this.props.feature].map(item => { 
            const itemHash = slugify(JSON.stringify(item));
            return ( 
              <div key={itemHash} className="feature__item">
                <input
                  type="radio"
                  id={itemHash}
                  className="feature__option"
                  name={slugify(this.props.feature)}
                  checked={item.name === this.props.selected[this.props.feature].name}
                  onChange={e => this.props.updateFeature(this.props.feature, item)}
                />
                <label htmlFor={itemHash} className="feature__label">
                  {item.name} ({USCurrencyFormat.format(item.cost)})
                </label>
              </div>
            );
          });

        return(
            <div>{options}</div>
        )
    }


}

export default Options
