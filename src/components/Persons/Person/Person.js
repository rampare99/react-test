import React, { Component } from "react";
import PropTypes from "prop-types";
import classes from "./Person.css";
import WithClass from "../../../hoc/WithClass";
import AuthContext from "../../../context/auth-context";

class Person extends Component {
  componentDidMount() {
    this.inputElementRef.current.focus();
    console.log(this.context);
  }

  static contextType = AuthContext;

  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  render() {
    return (
      <WithClass classes={classes.Person}>
        {this.context.authenticated ? (
          <p>Authenticated!</p>
        ) : (
          <p>Please log in.</p>
        )}
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          ref={this.inputElementRef}
          onChange={this.props.changed}
          value={this.props.name}
        />
      </WithClass>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
};

export default Person;
