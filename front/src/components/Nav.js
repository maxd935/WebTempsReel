import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to={`/`}>Home</Link>
        </li>
        <li>
          <Link to={`/service-client`}>Service Client</Link>
        </li>
        <li>
          <Link to={`/chatroom`}>ChatRoom</Link>
        </li>
        <li>
          <Link to={`/websocket`}>Test Websocket</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
