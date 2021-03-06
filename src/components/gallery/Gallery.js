import React, { Component } from 'react';
import Image1 from '../../img/Gallery/P1_result.jpg';
import Image2 from '../../img/Gallery/P2_result.jpg';
import Image3 from '../../img/Gallery/P3_result.jpg';
import Image4 from '../../img/Gallery/P4_result.jpg';
import Image5 from '../../img/Gallery/P5_result.jpg';
import Image6 from '../../img/Gallery/P6_result.jpg';
import Image7 from '../../img/Gallery/P7_result.jpg';
import Image8 from '../../img/Gallery/P8_result.jpg';
import Image9 from '../../img/Gallery/P9_result.jpg';
import Image10 from '../../img/Gallery/P10_result.jpg';
import Image11 from '../../img/Gallery/P11_result.jpg';
import Image12 from '../../img/Gallery/P12_result.jpg';
import Image13 from '../../img/Gallery/P13_result.jpg';
import Image14 from '../../img/Gallery/P14_result.jpg';
import Image15 from '../../img/Gallery/P15_result.jpg';
import Image16 from '../../img/Gallery/P16_result.jpg';
import Image17 from '../../img/Gallery/P17_result.jpg';
import Image18 from '../../img/Gallery/P18_result.jpg';
import Image19 from '../../img/Gallery/P19_result.jpg';
import Image20 from '../../img/Gallery/P20_result.jpg';
import Image21 from '../../img/Gallery/P21_result.jpg';

class Gallery extends Component {
  renderGalleryItem(img, name) {
    return (
      <div className="col-lg-4 box mb-3">
        <div className="imgBox">
          <a
            href={img}
            data-toggle="lightbox"
            data-gallery="img-gallery"
            data-height="560"
            data-width="560"
          >
            <img className="img-fluid" src={img} alt={name} />
          </a>
          <p className="imgName text-center">{name}</p>
        </div>
      </div>
    );
  }

  render() {
    return (
      <section id="gallery" className="py-5">
        <div className="container">
          <h1 className="text-center Title">Gallery</h1>
          <hr />
          <br />
          <br />
          <div className="row">
            {this.renderGalleryItem(Image2, 'Enjoy our refreshing drinks!')}
            {this.renderGalleryItem(Image1, 'Welcome to Lambada!')}
            {this.renderGalleryItem(Image3, 'Fresh ingredients everyday!')}
            {this.renderGalleryItem(Image4, 'Man-Go Crazy')}
            {this.renderGalleryItem(Image5, 'Peachberry Tea')}
            {this.renderGalleryItem(Image6, 'Mango Tango')}
            {this.renderGalleryItem(Image7, 'Strawberry Wild')}
            {this.renderGalleryItem(Image8, "Pistachio Luv'n")}
            {this.renderGalleryItem(Image9, 'MMM-Mocha')}
            {this.renderGalleryItem(Image10, 'Strawber-chee')}
            {this.renderGalleryItem(Image11, 'Taro Milk Tea')}
            {this.renderGalleryItem(Image12, 'Taro Temptation')}
            {this.renderGalleryItem(Image13, 'Buttery Nut')}
            {this.renderGalleryItem(Image14, 'Avocado Nut')}
            {this.renderGalleryItem(Image15, 'Jasmine Milk Tea')}
            {this.renderGalleryItem(Image16, 'Strawberry Suave')}
            {this.renderGalleryItem(Image17, 'Frizzled Wings')}
            {this.renderGalleryItem(Image18, 'Egg Rolls')}
            {this.renderGalleryItem(Image19, 'Pho Satay Dac Biet (Dry)')}
            {this.renderGalleryItem(Image20, 'Seasoned Fries')}
            {this.renderGalleryItem(Image21, 'Pho Dac Biet')}
          </div>
        </div>
      </section>
    );
  }
}

export default Gallery;
