import React from 'react';
import '../../node_modules/react-image-gallery/styles/scss/image-gallery.scss';
import ImageGallery from 'react-image-gallery';

//todo: 이들은 DB에서 받아오겠지요오오
const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/'
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/'
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/'
  }
];

class StoryBoard extends React.Component {
  render() {
    return (
      <ImageGallery
        items={images}
        showNav={false}
        showThumbnails={false}
        showFullscreenButton={false}
        showPlayButton={false}
        autoPlay={false}
        showBullets={true}
        onClick={(e) => {
          const imageIndex =
            e.target.parentElement.parentElement
              .getAttribute('aria-label')
              .split('Go to Slide ')[1] *
              1 -
            1;
          console.log(imageIndex);
        }}
      />
    );
  }
}

export default StoryBoard;
