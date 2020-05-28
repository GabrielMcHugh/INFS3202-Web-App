import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import CardDisplay from '../CardDisplay/CardDisplay';

/*
1.render loads cards
2.render takes items from an array
3. I must pass individual items from an array into render
4. to get the load effect, i must load an items, from items and pass it into the slected items array

What i want to do:
1. render from selected items array
2. when it runs out, fetch an item from the normal array and pass it into the selected items array
*/


class InfScroll extends React.Component {
  state = {
    items: Array.from({ length: 1 }),
    hasMore: true,
    webitems: this.props.items,
    selectedItem: [],
    index: 0,
  };

  fetchMoreData = () => {
    console.log('fetchMoreData Ran')
    if (this.state.selectedItem.length >= 10) {
      this.setState({ hasMore: false });
      return;
    }
    // a fake async api call like which sends
    // 20 more records in .5 secs
    setTimeout(() => {
      this.setState({
        selectedItem: this.state.selectedItem.concat([this.state.webitems[this.state.index]]),
        index: this.state.index+1
      });
    }, 1500);
  };

  render() {

    const { selectedItem } = this.state;

    return (
      <div>
        <h1>Other Similar Items</h1>
        <hr />
        <InfiniteScroll
          dataLength={selectedItem.length}
          next={this.fetchMoreData}
          hasMore={this.state.hasMore}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p>
              <b>There are no more items on sale</b>
            </p>
          }
        >
          {selectedItem.map((i, index) => (
            <CardDisplay
            key={index}
            selectedItem={selectedItem[index]} 
            userID={this.props.userID}
            AUD={this.props.AUD}
            JPY={this.props.JPY}
            />
          ))}
        </InfiniteScroll>
      </div>
    );
  }
}


export default InfScroll;
