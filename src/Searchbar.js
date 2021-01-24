import React from 'react';
import './App.css';
class Searchbar extends React.Component {
    handleChange = (event) => {
        this.setState({
            term: event.target.value
        });
    
    };
    handleSubmit = event => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.term);
    }

    render() {
        
        return (
            <>
            
            <h2  style={{textAlign:"center"}}>   <h1>FIRE REVIEWS </h1>  <img style={{width:'500px',justifyContent:'center'}} src='https://www.nicepng.com/png/full/969-9691607_cinch-gaming-logo-png-emblem.png' alt="youtube logo"></img></h2>
            <div className='wrapper'>
                <form onSubmit={"review",this.handleSubmit} className='ui form'>
                    <div className='input'>
                        <label htmlFor="video-search">VIDEO SEARCH &nbsp; </label>
                        <input onChange={this.handleChange} name='video-search' type="text" placeholder="Search then scroll down.." />
                        
                    </div>
                </form>
            </div>
            </>
        )
    }
}
export default Searchbar;