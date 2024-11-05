import React from "react";
import { Steps } from "antd";

const items = [
  {
    title: "سبد خرید",
    icon: 1,
  },
  {
    title: "اطلاعات ارسال",
    icon: 2,
  },
  {
    title: "اطلاعات پرداخت",
    icon: 3,
  },
];
const App: React.FC = () => (
  <>
    <Steps
      current={2}
      labelPlacement="vertical"
      items={items}
      className="custom-step mt-10 w-[50%] m-auto"
    />
  </>
);

export default App;
