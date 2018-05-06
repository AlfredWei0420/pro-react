import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PhotoGallray extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      photoLength: 0,
      imgIndex: 0
    }
    this.onRightClick=this.onRightClick.bind(this);
    this.onLeftClick=this.onLeftClick.bind(this);
    this.onImgClick=this.onImgClick.bind(this);
  }

  componentDidMount() {
    const { photos } = this.props;
    this.setState({photoLength: photos.length});
  }

  onRightClick() {
    const { imgIndex, photoLength} = this.state;
    if(imgIndex<photoLength-1) {
      this.setState({imgIndex: imgIndex+1});
    }else {
      this.setState({imgIndex: 0});
    }
  }

  onLeftClick() {
    const { imgIndex, photoLength} = this.state;
    if(imgIndex<=photoLength-1 && imgIndex>0) {
      this.setState({imgIndex: imgIndex-1});
    }else {
      this.setState({imgIndex: photoLength-1});
    }
  }

  onImgClick(index) {
    this.setState({imgIndex:index});
  }

  render() {
    const { photos } = this.props;
    const { imgIndex } = this.state;
    const hasPhoto = photos.length !== 0;
    return (
      hasPhoto && (
        <div className='photo-gallary'>
          <div className='main-frame'>
            <button className='left-button' onClick={this.onLeftClick} />
            <img className='display-photo' src={photos[imgIndex].slidePath} style={{height:"320px",width:"640px"}}/>
            <button className='right-button' onClick={this.onRightClick} />
          </div>
          <div className='thumbnails'>
            {photos.map(
              (e,i)=> <img key={i}
                          src={e.thumbnailPath} onClick={(e)=>{this.onImgClick(i)}}/>
            )}
          </div>
        </div>
      )
    )
  }
  
}

PhotoGallray.propTypes = {
  photos: PropTypes.array,
}

PhotoGallray.defaultProps = {
  photos: []
};

export default PhotoGallray;