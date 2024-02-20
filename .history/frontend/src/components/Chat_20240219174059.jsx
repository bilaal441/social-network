const fetchMoreMessages = useCallback(
  throttle(() => {
    if (messages.length < 50) {
      const newMessages = Array.from({ length: 10 }, (_, index) => ({
        id: messages.length + index + 1,
        text: `Hello, earth! ${messages.length + index + 1}`,
        time: new Date(),
      }));
      setMessages((prevMessages) => [...prevMessages, ...newMessages]);
    } else {
      console.log("no more messages");
      setHasMore(false);
    }
  }, 5000),
  [messages.length]
);
