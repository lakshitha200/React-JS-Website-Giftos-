
import './home.css'
import girl1Img from "../../assets/saving-img.png"; 
import girl2Img from "../../assets/slider-img.png"; 
import giftPng from '../../assets/gifts.png';
import Shop from '../Shop/shop';
import WhyUS from '../Why Us/whyUs';
import Testimonial from '../Testimonial/testimonial';

function Home() {

  return (
    <> 

      <section className='banner'> 
        <div className="banner-box d-flex justify-content-center align-items-center">
            <div className="banner-text">
              <div className="detail-box">
                <h1><b>
                  Welcome To Our <br/>
                  Gift Shop
                  </b>
                </h1>
                <p>
                  Sequi perspiciatis nulla reiciendis, rem, tenetur impedit, eveniet non necessitatibus error distinctio mollitia suscipit. Nostrum fugit doloribus consequatur distinctio esse, possimus maiores aliquid repellat beatae cum, perspiciatis enim, accusantium perferendis.
                </p>
                <span  className="contact-btn">
                  Contact Us
                </span>
              </div>
            </div>
            <div className="banner-image">
              <img src={girl2Img} alt="" />
            </div>
          </div>
        </section>

        <Shop title={"Latest Products"} size={4} showLatest="true"/>

        <section className="saving_section mt-4">
        <div className="box">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6">
                <div className="img-box">
                  <img src={girl1Img} alt=""/>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="detail-box">
                  <div className="heading_container">
                    <h2>
                      Best Savings on <br/>
                      new arrivals
                    </h2>
                  </div>
                  <p>
                    Qui ex dolore at repellat, quia neque doloribus omnis adipisci, ipsum eos odio fugit ut eveniet blanditiis praesentium totam non nostrum dignissimos nihil eius facere et eaque. Qui, animi obcaecati.
                  </p>
                  <div className="btn-box">
                    <a href="#" className="btn1">
                      Buy Now
                    </a>
                    <a href="#" className="btn2">
                      See More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhyUS/>

      <section className="gift_section layout_padding-bottom">
          <div className="box ">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-5">
                  <div className="img_container">
                    <div className="img-box">
                      <img src={giftPng} alt=""/>
                    </div>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="detail-box">
                    <div className="heading_container">
                      <h2>
                        Gifts for your <br/>
                        loved ones
                      </h2>
                    </div>
                    <p>
                      Omnis ex nam laudantium odit illum harum, excepturi accusamus at corrupti, velit blanditiis unde perspiciatis, vitae minus culpa? Beatae at aut consequuntur porro adipisci aliquam eaque iste ducimus expedita accusantium?
                    </p>
                    <div className="btn-box">
                      <a href="#" className="btn1">
                        Buy Now
                      </a>
                      <a href="#" className="btn2">
                        See More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Testimonial/>
    </>
  )
}

export default Home;