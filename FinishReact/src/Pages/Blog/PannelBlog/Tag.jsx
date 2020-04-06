import React, { Component } from "react";
class Tag extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  show_list(list_tag) {
    return list_tag.map((tag, index) => (
      <a href={`/${tag.url}`} className="tag-cloud-link" key={index}>
        {tag.name}
      </a>
    ));
  }
  render() {
    const list_tag = [
      {
        name: "Fruit",
        url: "/Shop"
      }
    ];

    return (
      <>
        <div className="sidebar-box ftco-animate fadeInUp ftco-animated">
          <h3 className="heading">Tag Cloud</h3>
          <div className="tagcloud">{this.show_list(list_tag)}</div>
        </div>
      </>
    );
  }
}

export default Tag;
