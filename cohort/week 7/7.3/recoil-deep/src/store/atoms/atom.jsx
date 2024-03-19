import { atom, selector } from "recoil";


export const notificationAtom = atom({
    key: "notificationAtom",
    default: 12
});

export const networkAtom = atom({
    key: "networkAtom",
    default: 104
});


export const jobCountAtom =atom({
    key:"jobCountAtom",
    default: 0
});

export const messageCountAtom = atom({
    key:"messageCountAtom",
    default: 0
})


export const totalSelector = selector({
    key:"total",
    get:({get})=> {
        const jobCount = get(jobCountAtom);
        const messageCount = get(messageCountAtom);
        const notificationCount = get(notificationAtom);
        const network = get(networkAtom);
        return jobCount + messageCount + notificationCount + network;

    }
})