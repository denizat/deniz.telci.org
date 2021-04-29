import React from "react";

type HeaderProps = {
  title: String;
  num: number;
};

// /**
//  * @augments {Component<Props, State>}
//  */

export default class Header extends React.Component<HeaderProps> {
  render() {
    return (
      <header>
        <h1>
          {this.props.title}+{this.props.num}
        </h1>
      </header>
    );
  }
}
