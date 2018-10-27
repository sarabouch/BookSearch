import React from "react";

// Data
import { books } from "../../data/bookdata";

// Components
import { Image } from "../Image";
import { BookDescription } from "../BookDescription";
import { StarRating } from "../StarRating";


export class BookPage extends React.Component {
  render() {
    console.log(this.props)

    return (
      <div>
        <div style={{ display: "flex" }}>
          <div onClick={this.props.history.goBack}>
            ←
          </div>

          <div>
            BUY ME
          </div>
        </div>

        {books.filter(book => {
          return this.props.match.params.id == book.id
        }).map(book => {
          return (
            <div>
              <div style={{ display: "flex" }}>
                <div>
                  <Image img={"http://localhost:3000/" + book.img} />
                </div>
                <div>
                  <BookDescription title={book.title} author={book.author} />
                  <StarRating rating={book.rating} />
                  <p>{book.tags}</p>
                </div>
              </div>

              <div>
                {book.description}
              </div>

              <div>
                {book.comments.map(comment => {
                  return (
                    <div>
                      <p>{comment.author}</p>
                      <p>{comment.title}</p>
                      <p>{comment.date}</p>
                      <p>{comment.comment}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })
        }
      </div>
    );
  }
}