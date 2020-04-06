import React, { Component } from "react";
import CommentSlide from "./CommentSlide";
import Carousel from "react-bootstrap/Carousel";
class ListCommentSlide extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  showlist(listcomment) {
    let commentnull = {
      id: 0,
      image: "images/null.png",
      userName: "",
      content: "",
      job: ""
    };

    if (listcomment.length % 3 === 1) {
      listcomment.push(commentnull);
      listcomment.push(commentnull);
    }
    if (listcomment.length % 3 === 2) {
      listcomment.push(commentnull);
    }
    let _listcomment = [];
    for (let i = 0; i < listcomment.length; i++) {
      if (i % 3 === 0) {
        let temp = [listcomment[i], listcomment[i + 1], listcomment[i + 2]];
        _listcomment.push(temp);
      }
    }
    return _listcomment.map((x, index) => {
      let mapcomment = x.map((x_1, index_1) => (
        <div className="p-2 " key={index_1}>
          <CommentSlide comment={x_1} />
        </div>
      ));
      return (
        <Carousel.Item key={index}>
          <div className="d-flex flex-row mb-3 justify-content-center">
            {mapcomment}
          </div>
        </Carousel.Item>
      );
    });
  }
  render() {
    const listcomment = this.props.listComment;
    // if (listcomment.length % 3 === 1) {
    //   listcomment.push(commentnull);
    //   listcomment.push(commentnull);
    // }
    // if (listcomment.length % 3 === 2) {
    //   listcomment.push(commentnull);
    // }
    // const showlist = listcomment => {
    //   let _listcomment = [];
    //   for (let i = 0; i < listcomment.length; i++) {
    //     if (i % 3 === 0) {
    //       let temp = [listcomment[i], listcomment[i + 1], listcomment[i + 2]];
    //       _listcomment.push(temp);
    //     }
    //   }
    //   return _listcomment.map((x, index) => {
    //     let mapcomment = x.map((x_1, index_1) => (
    //       <div className="p-2 " key={index_1}>
    //         <Comment comment={x_1} />
    //       </div>
    //     ));
    //     return (
    //       <Carousel.Item key={index}>
    //         <div className="d-flex flex-row mb-3 justify-content-center">
    //           {mapcomment}
    //         </div>
    //       </Carousel.Item>
    //     );
    //   });
    // };
    return (
      <>
        <Carousel className="ListComment container ">
          {this.showlist(listcomment)}
        </Carousel>
      </>
    );
  }
}

export default ListCommentSlide;
