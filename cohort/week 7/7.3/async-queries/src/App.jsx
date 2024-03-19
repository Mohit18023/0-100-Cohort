import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import "./App.css";
import axios from "axios";
import { notification, totalNotificationSelector } from "./store/atoms/atom";
import { useEffect } from "react";

function App() {
  return (
    <>
      <RecoilRoot>
        <MainApp />
      </RecoilRoot>
    </>
  );
}

function MainApp() {
  const [networkCount, setNetworkCount] = useRecoilState(notification);
  const totoalNotificationCount = useRecoilValue(totalNotificationSelector);

  useEffect(() => {
    //fetch data from server
    axios
      .get("https://sum-server.100xdevs.com/notifications")
      .then((res) => setNetworkCount(res.data));
  }, []); // Include an empty dependency array to run the effect only once when the component mounts

  return (
    <>
      <button>Home</button>
      <button>
        Network {networkCount.network > 99 ? "99+" : networkCount.network}
      </button>
      <button>jobs {networkCount.jobs}</button>
      <button>Messages {networkCount.messaging}</button>
      <button>Notification {networkCount.notifications}</button>
      <button>Me {totoalNotificationCount}</button>
    </>
  );
}

export default App;
