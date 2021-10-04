import { FC, useContext } from "react";

import SocketContext from "../contexts/socket/SocketContext";

export const RoomMembersList: FC = () => {
  const socket = useContext(SocketContext);
  return (
    <section>
      <h4>Players</h4>
      {Object.values(socket?.roomMembers).map((player) => (
        <pre key={player.profile.name}>{player.profile.name}</pre>
      ))}
    </section>
  );
};
