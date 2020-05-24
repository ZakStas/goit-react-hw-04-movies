const reviewsMapper = reviews => {
  return reviews.map(({ author, content, id }) => ({
    author,
    content,
    id
  }));
};

export default reviewsMapper;