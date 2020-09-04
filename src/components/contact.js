import React , {Component} from 'react';
import {Grid, Cell,List, ListItem, ListItemContent} from 'react-mdl';
import classes from './contact.module.css';


class Contact extends Component {
    render () {
        return (
            <div className={classes.contactBody}>
               <Grid className={classes.contactGrid}>
                   <Cell col={6}>
                       <h2>Shivam Bale </h2>
                           <img src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                           alt="avatar"
                           style={{height: '250px'}}
                           /> 
                           <p style={{width: '70%', margin: 'auto', paddingTop:'1em'}}>Contrary to popular belief, Lorem Ipsum is not simply random text. 
                            It has roots in a piece of classical Latin literature from 45 BC, 
                            making it over 2000 years old.Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, 
                            looked up one of the more obscure Latin words, 
                            consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, 
                            discovered the undoubtable source.</p> 
                   </Cell>
                   <Cell col={6}>
                       <h2>Contact Me</h2>
                       <hr />
                        <div className={classes.contactList}>
                        <List>
                        <ListItem>
                           <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                           <i class="fa fa-phone-square" aria-hidden="true"></i>
                               (+91) 9373564380
                            </ListItemContent>
                        </ListItem>
                        <ListItem>
                           <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                           <i class="fa fa-fax" aria-hidden="true"></i>
                               (0832) 273088
                            </ListItemContent>
                        </ListItem>
                        <ListItem>
                           <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                           <i class="fa fa-envelope" aria-hidden="true"></i>
                               shivambale98@gmail.com
                            </ListItemContent>
                        </ListItem>
                        <ListItem>
                           <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                           <i class="fa fa-skype" aria-hidden="true"></i>
                               MySkypeID
                            </ListItemContent>
                        </ListItem>
                        </List>
                        </div>           
                       
                   </Cell>
               </Grid>
            </div>
        );
    }
}


export default Contact;