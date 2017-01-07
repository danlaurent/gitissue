import React from 'react';
import Search from './search';
import User from './user';
import Repos from './repos';
import Logo from './logo';

const AppContainer = ({user, repos, handleSearch}) => (
    <div className="app container">
        <Logo />
        <Search handleSearch={handleSearch} />
        {!!user && <User user={user} />}
        {!!repos.length && <Repos
            repos={repos}
        />}
    </div>
)

export default AppContainer;