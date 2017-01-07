import React from 'react';

const Repos = ({repos}) => (
    <div className="repos columns is-mobile">
      <div className="column is-half is-offset-one-quarter">
        <ul>
            {repos.map((repo, index) => (
                <li key={index}><a href="/issues">{repo.name} - <span>{repo.count}</span> Issues</a></li>
            ))}
        </ul>      
      </div>
    </div>
)

export default Repos;