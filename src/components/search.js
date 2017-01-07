import React from 'react';

const Search = ({ handleSearch }) => (
    <div className="busca columns is-mobile">
        <div className="column">
        <p className="control has-icon">
            <input className="input is-info" type="text" placeholder="Digite o nome do usuário"
                onKeyUp={handleSearch}
             />
            <i className="fa fa-search"></i>
        </p>
        </div>
    </div>
)

export default Search;