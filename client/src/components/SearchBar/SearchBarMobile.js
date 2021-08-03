export const SearchBarMobile = ({ setSearchInput, searchInput, navigate }) => {
   const handleSearch = (e) => {
      e.preventDefault();
      if (searchInput !== '') {
         navigate(`/search?query=${searchInput}`);
         setSearchInput('');
      }
   };

   return (
      <>
         <form className='form-inline'>
            <input
               className='input-box form-control'
               type='search'
               placeholder='Search'
               aria-label='Search'
               value={searchInput}
               onChange={(e) => setSearchInput(e.target.value)}
            />
            <button
               onClick={handleSearch}
               className='btn btn-search'
               type='submit'>
               <i className='fas fa-search'></i>
            </button>
         </form>
      </>
   );
};
