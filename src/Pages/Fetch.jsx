import React from 'react'

const Fetch = () => {
  return (
    <form onSubmit={searchArtists}>
    <input type="text" onChange={(e) => setSearchKey(e.target.value)} />
    <button type={"submit"}>Search</button>
  </form>
  )
}

export default Fetch