const Search: React.FC<any> = ({ setSearch }) => {
  return (
    <div>
      <h3>State Capital Lookup</h3>
      <input
        name='search'
        type='text'
        placeholder='Search Capital'
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
