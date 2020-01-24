import React from 'react';

class SearchBar extends React.Component{

    state={term:''};

    onFormSubmit=(e)=>{
         e.preventDefault();
         this.props.onFormSubmitted(this.state.term)
    }

    render(){
        
        return(
            <div className="search-bar">
                <div className="ui segment" style={{marginTop:'10px'}}>
                  <form onSubmit={this.onFormSubmit} className="ui form">
                  <div className="field">
                      <label>Youtube Videos Search</label>
                      <input type="text" value={this.state.value} onChange={(e)=>this.setState({term:e.target.value})}/>
                  </div>
              </form>
              </div>
              </div>
        )
    }
}
export default SearchBar;