import React from "react"
import "./style.css"
import { Image } from "../Image"
import { BookDescription } from "../BookDescription"
import { StarRating } from "../StarRating"

export class BookItem extends React.Component {
  render() {
    return (
      <div className={!this.props.layout ? "book-item" : "book-item " + this.props.layout}>
        <Image img={this.props.img} imageClass="book-image" />
        <BookDescription title={this.props.title} author={this.props.author} rating={this.props.rating}>
          <StarRating rating={this.props.rating} />
        </BookDescription>
      </div>
    )
  }
}