import React from 'react';
import PropTypes from 'prop-types';
import './CheckBox.scss';

export class CheckBox extends React.Component {

  static propTypes = {
    item: PropTypes.shape({
      'text': PropTypes.string,
      'checked': PropTypes.bool,
      'expand': PropTypes.bool,
      'children': PropTypes.array
    }).isRequired,
    checkItem: PropTypes.func,
    toggleExpand: PropTypes.func
  };

  static defaultProps = {
    item: {
      text: '复选框',
      checked: false,
      expand: false,
      children: []
    }
  };

  constructor(props) {
    super(props);

    this.checkItem = this.checkItem.bind(this);
    this.toggleExpand = this.toggleExpand.bind(this);
  }

  checkItem(item) {

    this.props.checkItem(item);
  }

  toggleExpand(item) {
    // console.log('expand-item:', item);
    this.props.toggleExpand(item);
  }

  render() {
    const {item} = this.props;

    return (
      <div className="custom-check-box__item">
        <div className="input__check-box" data-checked={item.checked}
             onClick={() => this.checkItem(item)}>
        </div>
        {
          item.children.length === 0 ? null : (
            <img src={`/img/${item.expand ? 'icon_down.png' : 'icon_right.png'}`} alt
                 onClick={() => this.toggleExpand(item)}/>
          )
        }
        <label>{item.text.length > 8 ? `${item.text.substr(0, 8)}...` : item.text}</label>
      </div>
    );
  }
}