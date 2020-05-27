import React from 'react';
import ReactAutocomplete from 'react-autocomplete';

// function Searchbox({onSearchChange}) {
// 	return (
// 		<div className='pa2'>
// 			<input
// 			className='pa3 ba b--white bg-lightest-blue'
// 			style ={{ backgroundColor: 'rgb(255,255,255,0.3)'}}
// 			type='search'
// 			placeholder='search auction'
// 			onChange={onSearchChange}
// 		/>
// 		</div>
// 	)
// }

class Searchbox extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      value: '',
    }
  }

  handleChange = (e) => {
  	this.setState({ value: e.target.value });
  	this.props.onSearchChange(e.target.value)
  }

  handleChangeOnSelect = (e) => {
    this.setState({ value: e });
    this.props.onSearchChange(e)
  }

  render() {
  	const menuStyle = {
      borderRadius: '3px',
      boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
      background: 'rgba(255, 255, 255, 0.9)',
      padding: '2px 0',
      fontSize: '90%',
      position: 'fixed',
      overflow: 'auto',
      maxHeight: '50%', // TODO: don't cheat, let it flow to the bottom
      "zIndex": 100,
    };
  	const { itemNames } = this.props;
    return (
      <ReactAutocomplete
        items={itemNames}
        shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
        getItemValue={item => item.label}
        renderItem={(item, highlighted) =>
          <div
            key={item.id}
            style={{ backgroundColor: highlighted ? '#eee' : 'transparent', zIndex: '-1'}}
            className='pa3 ba b--white bg-lightest-blue'
          >
            {item.label}
          </div>
        }
        value={this.state.value}
        onChange={e => this.handleChange(e)}
        onSelect={e=> this.handleChangeOnSelect(e)}
        menuStyle={menuStyle}
      />
    )
  }
}

export default Searchbox;