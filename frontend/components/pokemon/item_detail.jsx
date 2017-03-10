import React from 'react';
import { selectItem } from '../../reducers/selectors';

class ItemDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className='items'>
        {this.props.item}
      </section>
    );
  }
}



export default ItemDetail;
