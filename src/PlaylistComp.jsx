import React from 'react'

function PlaylistComp() {
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
          <tr>
            <td className='number'>1</td>
            <td>No wahalssa</td>
            <td>Kelly</td>
            <td>1:30</td>
            <td>Kell Gold</td>
          </tr>

          <tr>
          <td className='number'>1</td>
            <td>No wahalssa</td>
            <td>Kelly</td>
            <td>1:30</td>
            <td>Kell Gold</td>
          </tr>

          <tr>
          <td className='number'>1</td>
            <td>No wahalssa</td>
            <td>Kelly</td>
            <td>1:30</td>
            <td>Kell Gold</td>
          </tr>
        </tbody>
      </table>

    </div>
  )
}

export default PlaylistComp