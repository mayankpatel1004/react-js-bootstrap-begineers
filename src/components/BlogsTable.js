import React from 'react';
import { Link } from 'react-router-dom';

const BlogsTable = (props) => {
    return(
        <table className="table table-hover">
            <thead>
                <tr className="bg-dark text-light">
                    <th scope="col">Type</th>
                    <th scope="col">Column heading</th>
                    <th scope="col">Column heading</th>
                    <th scope="col">Column heading</th>
                </tr>
            </thead>
            <tbody>
                {props.lists.map((e) => 
                    <tr class="table-success">
                        <td><Link to={"/blog/"+e.id}>{e.name}</Link></td>
                        <td>{e.username}</td>
                        <td>{e.email}</td>
                        <td>{e.phone}</td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}
export default BlogsTable;