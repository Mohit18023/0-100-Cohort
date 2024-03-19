
import { RevenueCard } from "../../Components/RevenueCard";

const meta = {
    component: RevenueCard,
};

export default meta;

export const Primary = {
    args: {
        orderCount: 12,
        amount: 100000,
        title: "Revenue",
    }
}

export const SmallAmount = {
    args: {
        orderCount: 12,
        amount: 1000,
        title: "Revenue",
    }
}

export const BigAmount = {
    args: {
        orderCount: 12,
        amount: 10000000,
        title: "Revenue",
    }
}