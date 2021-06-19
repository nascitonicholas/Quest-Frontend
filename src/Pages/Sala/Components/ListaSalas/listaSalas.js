import React from 'react'
import InfiniteLoading from 'react-simple-infinite-loading'

export default function ListSalas({ items, fetchMore, hasMore }) {
  return (
    <div style={{ width: 30, height: 30 }}>
      <InfiniteLoading
        items={items}
        itemHeight={40}
        hasMoreItems={hasMore}
        loadMoreItems={fetchMore}
      >
        {({ item }) => <div>{item}</div>}
      </InfiniteLoading>
    </div>
  )
}