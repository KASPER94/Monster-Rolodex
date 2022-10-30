import { Component } from "react";

class SearchBox extends Component{
  render(){
    return(
      <input 
        className={this.props.className}
        type='Search' 
        placeholder={this.props.placeholder}
        onChange={this.props.OnChangeHandler}/>
    )
  }
}

export default SearchBox;