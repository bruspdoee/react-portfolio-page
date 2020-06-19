import React, { Component } from "react";
import { Grid, Cell, ListItem, List, ListItemContent } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={12}>
            <h2>Contact Me</h2>
            <hr />
            <List>
              <ListItem>
                <ListItemContent style={{ fontSize: "30px" }}>
                  <i className="fa fa-phone-square" />
                  (929) 389-4965
                </ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent style={{ fontSize: "30px" }}>
                  <i className="fa fa-envelope" /> brus.palaj71@gmail.com
                </ListItemContent>
              </ListItem>
            </List>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
