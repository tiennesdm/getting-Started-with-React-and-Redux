import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

import './UpdatePost.css';

class UpdatePost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Max',
        submitted: false,
        loadedPost:{},
    }

    componentDidMount () {
        this.loadData();
        // console.log( this.props );
    }
    loadData () {
        if ( this.props.match.params.id ) {
            if ( !this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== +this.props.match.params.id) ) {
                axios.get( '/photos/' + this.props.match.params.id )
                    .then( response => {
                        console.log(response.data);
                        console.log(response.data.title);
                        // console.log(response);
                        this.setState( { title: response.data.title} );
                    } );
            }
        }
    }

    postDataHandler = () => {
        const data = {
            title: this.state.title,
            body: this.state.content,
            author: this.state.author
        };
        axios.post( '/posts', data )
            .then( response => {
                console.log( response );
                this.props.history.replace('/posts');
                // this.setState( { submitted: true } );
            } );
    }

    render () {
        let redirect = null;
        if (this.state.submitted) {
            redirect = <Redirect to="/posts" />;
        }
        return (
            <div className="NewPost">
                {redirect}
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={( event ) => this.setState( { title: event.target.value } )} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={( event ) => this.setState( { content: event.target.value } )} />
                <label>Author</label>
                <select value={this.state.author} onChange={( event ) => this.setState( { author: event.target.value } )}>
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>
                </select>
                <button onClick={this.postDataHandler}>Add Post</button>
            </div>
        );
    }
}

export default UpdatePost;