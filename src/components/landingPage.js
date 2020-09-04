import React , {Component} from 'react';
import classes from './LandingPage.module.css';
import {Grid, Cell} from 'react-mdl';
import myAvator from '../assets/circle-cropped.png'

class LandingPage extends Component {
    render () {
        return (
            <div className={classes.land}>
               <Grid className={classes.landingGrid}>
                   <Cell col={12}>
                       <img 
                          src={myAvator}
                          alt="MyAvatar"
                          className={classes.Avatar}
                          />
                          <div className={classes.BannerText}>
                              <h1>Front End Web Developer</h1>

                              <hr/>
                              <p>HTML5  | CSS3  | Bootstrap  | JavaScript  | React  | React Native  </p>
                              <div className={classes.social}>
                                  {/* LinkedIn*/}
                                  <a href="" target="_blank">
                                  <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                                  </a>

                                   {/* Github*/}
                                   <a href="" target="_blank">
                                   <i class="fa fa-github-square" aria-hidden="true"></i>
                                  </a>

                                  {/* G-mail*/}
                                  <a href="" target="_blank">
                                  <i class="fa fa-envelope" aria-hidden="true"></i>
                                  </a>
                              </div>
                          </div>
                   </Cell>
               </Grid>
            </div>
        );
    }
}


export default LandingPage;