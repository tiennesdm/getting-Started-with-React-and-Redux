import React, { Component } from 'react';
import axios from '../../axios';
import { Route } from 'react-router-dom';

// import Post from '../../../components/Post/Post';
import Post from '../../container/Post/Post'
import classes from './Posts.css';
import FullPost from '../FullPost/FullPost';
import UpdatePost from '../UpdatePost/UpdatePost';

class Posts extends Component {
    state = {
        posts: [],
        myPhotos: [],
    }

    componentDidMount () {

        console.log('props', this.props );
        axios.get( '/photos' )
            .then( response => {
                const photos = response.data.slice(0,10);
                const updatedPosts = photos.map( photo =>{
                    return {
                        ...photo
                    }
                });
                this.setState({myPhotos: updatedPosts});
                // console.log('myPhotos', updatedPosts);
                // const posts = response.data.slice( 0, 4 );
                // const updatedPosts = posts.map( post => {
                //     return {
                //         ...post,
                //         author: 'Max'
                //     }
                // } );
                // this.setState( { posts: updatedPosts } );
                // console.log('myposts', updatedPosts);
                // console.log( response );
            } )
            .catch( error => {
                console.log( error );
                // this.setState({error: true});
            } );
    }

    postSelectedHandler = ( id ) => {
        // console.log('')
        // this.props.history.push({pathname: '/posts/' + id});
        this.props.history.push( '/posts/' + id );
    }
    updateHandler =(id) =>{
        this.props.history.push('/posts/update/' + id)
    }

    render () {
        let posts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;
        if ( !this.state.error ) {
            posts = this.state.myPhotos.map( post => {
                //    console.log(post);                
                return (
                    // <Link to={'/posts/' + post.id} key={post.id}>
                    <Post
                        key={post.id}
                        title={post.title}
                        author={post.author}
                        url = {post.url}
                        clicked={() => this.postSelectedHandler( post.id )}
                        mousePress={()=> this.updateHandler(post.id)} />
                    // </Link>
                );
            } );
        }

        return (
            <div>
                <section className={classes.Posts}>
                    {posts}
                </section>
                <Route path={this.props.match.url + '/:id'} exact component={FullPost} />
                <Route path={this.props.match.url + ':/id'} exact component={UpdatePost} />
            </div>
        );
    }
}

export default Posts;