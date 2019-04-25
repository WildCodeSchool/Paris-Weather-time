import React, { Component } from "react";
import Slider from "react-slick";
import'./SimpleSlider.css';
import ActivityCards from "./ActivityCards";
class SimpleSlider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 1500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
           <ActivityCards
            photo="https://qph.fs.quoracdn.net/main-qimg-43e73d55d915ec8db0899e15958e26df.webp"
            alt="vol"
            activity="simulateur de vol"
            price="450$"
            />
          </div>
          <div>
          <ActivityCards
            photo="https://i.ytimg.com/vi/-f7z017ONto/hqdefault.jpg"
            alt="fury room"
            activity="tout peter"
            price="50$"
            />
          </div>
          <div>
          <ActivityCards
            photo="https://vignette.wikia.nocookie.net/desencyclopedie/images/1/1f/FuckThis_clochard.jpg/revision/latest?cb=20100521092032"
            alt="clodo"
            activity="crache sur un clodo"
            price="gratuit"
            />
          </div>
          <div>
          <ActivityCards
            photo="https://i.ytimg.com/vi/z5GdJ_BzUNo/maxresdefault.jpg"
            alt="aqua poney"
            activity="aqua poney"
            price="99$"
            />
          </div>
          <div>
          <ActivityCards
            photo="https://img.bfmtv.com/c/1000/600/21a/f1b9493974ec9b51aaec0f9962944.jpg"
            alt="zero"
            activity="vol a 0 G"
            price="250$"
            />
          </div>
          <div>
          <ActivityCards
            photo="https://i.ytimg.com/vi/-f7z017ONto/hqdefault.jpg"
            alt="fury room"
            activity="tout peter"
            price="50$"
            />
          </div>
        </Slider>
      </div>
    );
  }
}

export default SimpleSlider