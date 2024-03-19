import { atom, selector } from "recoil";

// for async data fetching from server we use selector and atom together to fetch data from server and store it in atom     
// define atom
export const notification = atom({
  key: "NotifiCountAtom",
  default: selector({
    key: "NotificatonAtomSelector",
    get: async () => {
        // Adding artificial delay
      //await new Promise((resolve) => setTimeout(resolve, 5000));   sleep for 5 sec
      const res = await fetch("https://sum-server.100xdevs.com/notifications");
      return res.json();
    },
  })
});

export const totalNotificationSelector = selector({
  key: "total",
  get: ({ get }) => {
    const { network, jobs, messaging, notifications } = get(notification);
    return network + jobs + messaging + notifications;
  },
});
