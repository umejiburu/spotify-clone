import React, { useEffect, useState } from 'react'
import { LeftMenu } from './LeftMenu'
import { MainContainer } from './MainContainer'
import { RightMenu } from './RightMenu'

let timeout;
function Dashboard() {
  const [searchValue, setSearchValue] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [trackData, setTrackData] = useState(null);

  let token = window.localStorage.getItem("token");

  useEffect(() => {
    timeout = setTimeout(() => {
      setSearchQuery(searchValue);
      clearTimeout(timeout);
    }, 500)

    return () => {
      clearTimeout(timeout)
    }
  }, [searchValue])

  const fetchMusic = async () => {
    try {
      const response = await fetch(
        `https://api.spotify.com/v1/search?q=artist:${
          searchQuery ? searchQuery : "fireboy"
        }&type=track&limit=5
        `,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      setTrackData(data);
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    fetchMusic();
    // setSearch(searchQuery);
  }, [searchQuery]);



  return (
    <>
        <LeftMenu searchValue={searchValue} setSearchValue={setSearchValue} />
        <MainContainer trackData={trackData} />
        <RightMenu/>
    </>
  )
}

export default Dashboard