import React from "react";
import "./style.css";

export class BookList extends React.Component {
  initialScroll = 0
  deltaScroll = 0
  scrolling = false

  mouseDown = event => {
    this.initialScroll = event.nativeEvent.x
    this.scrolling = true

    console.log(this.initialScroll);
  };

  mouseUp = event => {
    this.scrolling = false
    console.log(this.scrolling);
  };

  mouseMove = event => {
    if (this.scrolling) {
      this.deltaScroll = event.nativeEvent.x
      event.target.scrollLeft = this.initialScroll - this.deltaScroll
    }
  }

  render() {
    return (
      <section className="book-list">
        <div className="book-list-header">
          <h2>{this.props.title}</h2>
          <a href="">View all</a>
        </div>

        <div
          onMouseDown={this.mouseDown}
          onMouseUp={this.mouseUp}
          onMouseMove={this.mouseMove}
          className="book-list-container"
        >
          {this.props.children}
        </div>
      </section>
    );
  }
}
