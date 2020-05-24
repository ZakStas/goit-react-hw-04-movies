const filmsMapper = films => {
  return films.map(({ title, name, id }) => ({
    title,
    name,
    id
  }));
};

export default filmsMapper;