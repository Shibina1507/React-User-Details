import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import './UserDetails.css';
import Map from '../Map/Map'

class UserDetails extends Component {
    state = {
        loadedPost: null,
        classes: ["UserDetails"]
    }
    componentDidUpdate() {
            if(this.props.id){
                 if(!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)){
                    axios.get('http://jsonplaceholder.typicode.com/users/'+this.props.id).then(response =>{
                        this.setState({loadedPost:response.data})
                        if(document.getElementsByClassName('UserDetails')[0]){
                            this.setState({classes: ["UserDetails"]})
                    }
                    });
                 }
            }
    }
    deletePost = () => {
        this.setState({classes: ["UserDetails","pageHide"]})
        document.getElementsByClassName('Items')[0].style.display = "block";
    }
    render () {
        let post = <p />;
        if( this.state.loadedPost ){
            post = (
                <div className={this.state.classes.join(" ")}>
                    <article className="User">
                    </article>
                    <span className="close" onClick={this.deletePost} id={this.state.loadedPost.id}>x</span>
                    <div className="UserFullDetails">
                    <p>Name :    {this.state.loadedPost.name}</p>
                    <p>User Name :    {this.state.loadedPost.username}</p>
                    <p>Phone No. :    {this.state.loadedPost.phone}</p>
                    <p>Website :    {this.state.loadedPost.website}</p>
                    <p>Email :    {this.state.loadedPost.email}</p>
                    <p>City :    {this.state.loadedPost.address.city}</p>
                    <p>zipcode :    {this.state.loadedPost.address.zipcode}</p>
                    <p>Working Company :    {this.state.loadedPost.company.name}</p>
                    <p>Working Technology :    {this.state.loadedPost.company.bs}</p>
                    <p>Post :    View Post</p>
                    <p>Social Networks :    <span className="twitter"/>  <span className="facebook"/>  <span className="instagram"/></p>
                    </div>
                    <Map centerMark={{lat:this.state.loadedPost.address.geo.lat,lng:this.state.loadedPost.address.geo.lng}} lat={this.state.loadedPost.address.geo.lat} lng={this.state.loadedPost.address.geo.lng} locate={this.state.loadedPost.address.city} />
                </div>
    
            );
            
    }
        return post;
    }
}

export default UserDetails;