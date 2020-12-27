import React, { Component } from 'react';
import axios from 'axios';

// import Post from '../../components/Post/Post';
import UserDetails from '../../components/UserDetails/UserDetails';

import './UserView.css';

class UserView extends Component {
    state = {
        items : [],
        selectedID : null
    };
    componentDidMount(){
       axios.get('http://jsonplaceholder.typicode.com/users').then(response => {
            this.setState({items:response.data});
       });
    }
    postSelectionHandler = (id) => {
        document.getElementsByClassName('Items')[0].style.display = "none"
        this.setState({selectedID:id})
    }
    render () {
        const Post = (props) => (
            <article className="Post" onClick={props.clicked}>
                <span className="UserName">{props.user}</span>
            </article>
            
        );
        const items = this.state.items.map(item =>{
            return <Post 
            key={item.id} 
            title={item.id} 
            user={item.name}
            clicked={()=> this.postSelectionHandler(item.id)}
             />;
        });
        
        return (
            <div>
                <section className="NavBar">Welcome! User Details
                </section>
                <section className="Items"><div className="ItemContainer">
                    {items}</div>
                </section>
                <section>
                    <UserDetails id={this.state.selectedID} />
                </section>
            </div>
        );
    }
}

export default UserView;