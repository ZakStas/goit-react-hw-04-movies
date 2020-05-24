const castMapper = cast => {
  return cast.map(({ profile_path, name, character, id }) => ({
    profile_path,
    name,
    character,
    id
  }));
};

export default castMapper;