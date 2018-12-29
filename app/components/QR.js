// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';

type Props = {};

export default class QR extends Component < Props > {
  props: Props;

  render() {
    return (
      <div class="wrapper">
        <div class="main">
            <section class="split-home">
                <section class="left-section wow fadeIn" data-wow-delay="0.2s">
                    <div class="main-logo">
                        <img src="./assets/images/logo.png" width="50%"  alt="Logo" class="wow fadeIn" data-wow-delay="0.3s"  />
                    </div>
                        <div class="intro">
                            <div class="intro-text">
                                <h4 class="wow fadeInDown" data-wow-delay="0.4s">Creating a QR Code!</h4>
                                <p class="wow fadeInDown" data-wow-delay="0.6s"> It's simple.
                                </p>
                                <p class="wow fadeInDown" data-wow-delay="0.6s">Put the name of your event in the title box<br class="visible-lg "/> and export your custom QR code!
                                    <br class="visible-lg"/> </p>
                                <p class="wow fadeInDown" data-wow-delay="0.6s">Make sure you write down your pin for users, <br class="visible-lg "/> safety first!
                                    <br class="visible-lg"/> </p>
                                <p class="wow fadeInDown" data-wow-delay="0.6s">We'll do everything else. 🤠</p>
                                <Link to={routes.HOME} className="btn-contact wow fadeInDown" data-wow-delay="0.6s">Home</Link>
                            </div>
                        </div>

                </section>

                <section class="right-section">
                    <div class="intro-right intro">
                        <div class="intro-text">
                            <h4 class="wow fadeInDown" data-wow-delay="0.4s">Enter the name of your event!</h4>
                            <div class="wow" data-wow-delay=" 0.6s">
                                <div class="panel-body">
                                    <div class="searchContainer">
                                    <input
                                        type="title"
                                        id="partyname"
                                        type="text"
                                        placeholder="Title..."
                                    />

                                    </div>
                                </div>
                                <div class="row">

                                    <img id="qrimg" src="https://orig00.deviantart.net/c5f0/f/2015/066/1/9/qr_code_animated__by_junguler-d8kqfbf.gif" width="250px" height="250px" />
                                    <br/><br/>
                                    <div class="col-sm-12">
                                        <button type="button" onclick="createParty()" class="btn-contact wow fadeInDown" data-wow-delay=".6s">Submit</button>

                                    </div>
                                </div>
                            </div>
                            <br/>
                            <span id="social-export">
                <a href="#"><i class="fab fa-instagram icons-qr" ></i></a>
                <a href="#"><i class="fab fa-facebook icons-qr" ></i></a>
                <a href="#"><i class="fab fa-twitter icons-qr" ></i> </a>
              </span>
                        </div>
                    </div>
                </section>

            </section>
        </div>
    </div>
    );
  }
}
