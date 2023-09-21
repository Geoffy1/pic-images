import React, { Component } from 'react';
import firebase from '../firebase/config';

export default class Photos extends Component {
  state = {
    photos: [],
  };

  componentDidMount() {
    this.fetchImages();
  }

  fetchImages() {
    const images = [];

    firebase
      .firestore()
      .collection(localStorage.getItem('user_id'))
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots

          let imageData = {
            url: doc.data().url,
            created: doc.data().added,
          };
          images.push(imageData);
        });

        // Update the state after fetching data
        this.setState({ photos: images });
      })
      .catch((error) => {
        console.error('Error fetching images:', error);
      });
  }

  render() {
    const items = this.state.photos;

    return (
      <div className="container-fluid pt-3">
        <div className="card-columns">
          {items.map((i, index) => (
            <div className="card" key={index}>
              <img className="card-img-top materialboxed" src={i.url} alt="" />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
