<InfiniteScroll
  dataLength={messages.length} // Update the dataLength prop
  next={fetchMoreMessages}
  hasMore={hasMore}
  loader={<h4>Loading...</h4>}
  style={{display: "flex", flexDirection: "column-reverse"}} //To put endMessage and loader to the top.
  inverse={true} // inverse the direction
  height={400}
  scrollableTarget="scrollableDiv"
  endMessage={
    <p style={{textAlign: "center"}}>
      <b>Yay! You have seen it all</b>
    </p>
  }
>
  {/* Rest of the code */}
</InfiniteScroll>
