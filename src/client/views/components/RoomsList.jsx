import React from 'react';
import Rooms from './Rooms.jsx'
import '../../styles/browse.css';

export default ({
  rooms,
  user,
  onEnterRoom
}) => (
  <div>
    <div className="card-layout">
      <div className="card-deck">
        {
          rooms.map(room => (
            <Rooms
              key={room.name}
              room={room}
            />
          ))
        }
      </div>
    </div>
</div>
)