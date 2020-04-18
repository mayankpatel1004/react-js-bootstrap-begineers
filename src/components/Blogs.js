import axios from 'axios';
import React from 'react';
import BlogsTable from './BlogsTable';

class Blogs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lists: []
        }
        const api_url = 'https://jsonplaceholder.typicode.com/users';
        axios(api_url).then(result => {
            this.setState({
                lists: result.data
            });
        });
    }
    render() {
        return (<div>
            <div><BlogsTable lists={this.state.lists} /></div>
        </div>)
    }
}
export default Blogs