import { FC, useContext } from "react";

import SocketContext from "../contexts/socket/SocketContext";
import { User } from "./User";
import { DateString } from "./DateString";

export const TextLogs: FC = () => {
  const socket = useContext(SocketContext);
  return (
    <section>
      <style jsx>{`
        span {
          color: #999;
        }
      `}</style>
      <h4>Chat</h4>
      <ul>
        {Array.isArray(socket?.textLogs) && socket.textLogs.length > 0 ? (
          socket.textLogs.map((t, i) => (
            <li key={i}>
              {t.message}{" "}
              <span>
                <User data={socket.roomMembers[t.sender]?.profile} />
                , <DateString time={t.time} />
              </span>
            </li>
          ))
        ) : (
          <li>No chat yet</li>
        )}
      </ul>
    </section>
  );
};
