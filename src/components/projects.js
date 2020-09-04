import React , {Component} from 'react';
import {Card, CardTitle, Button, CardText, CardActions, CardMenu,  IconButton} from 'react-mdl';
import classes from  './projects.module.css';
import csspng from '../assets/AdvanceCSS.png';

class Projects extends Component {
    render () {
        return (
           <div className={classes.projectGrid}>
               {/* Project #1 */}
              <Card shadow={0} style={{width: '400px', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '176px', 
                           background: 'url(https://raw.githubusercontent.com/shivambale98/assets/master/REQUEST_FOR_STARTUPS_LOGO.jpg) center / cover'}}>
                  RequestsForStratups.in
                  </CardTitle>
             <CardText>
             A simple platform to start a dialog about problems you face and gauge the severity of such problems.
            </CardText>
            <CardActions border>
            <Button colored style={{ fontWeight: 'bolder' }}>GitHub</Button>
            <Button colored  style={{ fontWeight: 'bolder' }}>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
           </CardMenu>
           </Card>
            {/* Project #2 */}
           <Card shadow={0} style={{width: '400px', margin: 'auto'}}>
              <CardTitle style={{color: '#1C2331', height: '200px', 
                           background: 'url(https://raw.githubusercontent.com/shivambale98/assets/master/css%2022.png) center / cover'}}>
                  Advance CSS
                  </CardTitle>
             <CardText>
               Flaunting my css 3 skills 
            </CardText>
            <CardActions border>
            <Button colored  style={{ fontWeight: 'bolder' }}>GitHub</Button>
            <Button colored  style={{ fontWeight: 'bolder' }}>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
           </CardMenu>
           </Card>

            {/* Project #3 */}
            <Card shadow={0} style={{width: '400px', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '176px', 
                           background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>
                  RequestsForStratups
                  </CardTitle>
             <CardText>
             A simple platform to start a dialog about problems you face and gauge the severity of such problems.
            </CardText>
            <CardActions border>
            <Button colored  style={{ fontWeight: 'bolder' }}>GitHub</Button>
            <Button colored  style={{ fontWeight: 'bolder' }}>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
           </CardMenu>
           </Card>
           </div>
        );
    }
}


export default Projects;