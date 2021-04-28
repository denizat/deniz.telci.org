import React from "react";

type HeaderProps = {
  title: String;
  num: number;
};

export class Header extends React.Component<HeaderProps> {
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
