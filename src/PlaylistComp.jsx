import React from 'react'

function PlaylistComp(trackData) {

  return (
    <div className='playlistComp'>
      <h2>My Playlist</h2>
      
      <table>
        <thead>
          <tr>
          <th align='left' className='number'>#</th>
          <th align='left'>Title</th>
          <th align='left'>Artist</th>
          <th align='left'>Time</th>
          <th align='left'>Album</th>
          </tr>
        </thead>
        <tbody>
          {
            trackData?.items?.map((item, index) => (
              (
                <React.Fragment key={item.id}>
                  <tr>
                    <td className='number'>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.artists[0].name}</td>
                    <td>1:30</td>
                    <td>Kell Gold</td>
                  </tr>
                </React.Fragment>
              )
            ))
          }

        </tbody>
      </table>

    </div>
  )
}

export default PlaylistComp