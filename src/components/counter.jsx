import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   value: this.props.counter.value,
  // };

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  // use Arrow function for binding "this" without defining constructor as commented above
  // handleIncrement = () => {
  //   this.setState({ value: this.state.value + 1 });
  // };

  // renderTags() {
  //   if (this.state.tags.length === 0) return <p>هیچ برچسبی وجود ندارد!</p>;
  //   return (
  //     <ul>
  //       {this.state.tags.map((tag) => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  render() {
    return (
      <div>
        <span>{this.props.counter.id}</span>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          افزایش
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          حذف
        </button>

        {/*this.state.tags.length === 0 && "لطفاً ابتداً یک برچسب بسازید!"*/}
        {/*this.renderTags()*/}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "صفر" : count;
  }
}

export default Counter;
