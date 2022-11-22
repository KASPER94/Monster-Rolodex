import './search-box.styles.css';

const SearchBox = ({className, placeholder, OnChangeHandler}) => {
    return(
      <input 
        className={`search-box ${className}`}
        type='Search' 
        placeholder={placeholder}
        onChange={OnChangeHandler}/>
    )

}

export default SearchBox;