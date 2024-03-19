import { atom, selector } from "recoil";
// define atom
export const countAtom = atom({
    key: "CountAtom",
    default: 0
});


export const isEvenSelector = selector({
    key: "isEvenSelector",
    get: ({get}) => {
        const count = get(countAtom);
        return count % 2 == 0;
    }
})