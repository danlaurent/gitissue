import React from 'react';

const IssueList = () => (
    <div className="column is-6">
        <table className="table is-narrow">
            <thead>
            <tr>
                <th>Issue</th>
                <th>Ação</th>
            </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Issue title</td>
                    <td className="is-icon">
                        <a href="#">
                            <i className="fa fa-pencil"></i>
                        </a>
                        <a href="#">
                            <i className="fa fa-lock"></i>
                        </a>
                        <a href="#">
                            <i className="fa fa-unlock"></i>
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
)

export default IssueList;