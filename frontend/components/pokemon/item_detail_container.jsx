import { connect } from 'react-redux';
import ItemDetail from './item_detail';
import { receiveItem } from '../../actions/pokemon_actions';
import { selectItem } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  itemId: ownProps.params.itemId,
  item: selectItem(state, ownProps.params.itemId)
});

const mapDispatchToProps = dispatch => ({
  receiveItem: (itemId) => dispatch(receiveItem(itemId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetail);
