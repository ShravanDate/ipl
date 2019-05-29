import React, { Component } from 'react';
import Camera from 'react-camera';
import Button from '../../component/button/button';

class Camerascan extends Component {

  constructor(props) {
    super(props);
    this.takePicture = this.takePicture.bind(this);
    this.state = {
      imageSrc : 'test'
    }
  }

  takePicture() {
    this.camera.capture()
    .then(blob => {
      this.img.src = URL.createObjectURL(blob);
      this.img.onload = () => { URL.revokeObjectURL(this.src);  }
      this.setState({
        imageSrc : URL.createObjectURL(blob)
      })
    }).bind();
  }

  render() {
    return (
      <div style={style.container}>
        <Camera
          style={style.preview}
          ref={(cam) => {
            this.camera = cam;
          }}
        >
          <div style={style.captureContainer} onClick={this.takePicture}>
            <div style={style.captureButton} />
          </div>
        </Camera>
        <img
          style={style.captureImage}
          ref={(img) => {
            this.img = img;
          }} alt="IPL"          
        />
        <p>Here is image</p>
        

        <p>......... <img src={this.state.imageSrc}  alt={this.state.imageSrc} title={this.state.imageSrc} className="img"/> ...........</p> 


        

        <Button buttonElement="button-a start-btn" linkTo="offer" buttonName="Take your Score" />

      </div>
    );
  }
}


const style = {
  preview: {
    position: 'relative',
  },
  captureContainer: {
    display: 'flex',
    position: 'absolute',
    justifyContent: 'center',
    zIndex: 1,
    bottom: 0,
    width: '100%'
  },
  captureButton: {
    backgroundColor: '#fff',
    borderRadius: '50%',
    height: 56,
    width: 56,
    color: '#000',
    margin: 20
  },
  captureImage: {
    width: '100%',
  }
};

export default Camerascan;