import React from "react";

class Pure extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      data: data - 1,
    };
  }
  render() {
    console.log("render");
    return (
      <>
        <hr />
        <h1>hii this is class = {this.state.data}</h1>
        <button
          onClick={() => {
            this.setState({ data: 10 });
          }}
        >
          change state
        </button>
      </>
    );
  }
}

export default Pure;
