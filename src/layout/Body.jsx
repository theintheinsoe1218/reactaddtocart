import React from "react";
import Card from "../components/Card";
const fruits = [
  {
    id: 1,
    name: "Banana",
    price: 10.98,
    description: "fresh banana from thailand",
  },
  {
    id: 2,
    name: "Orange",
    price: 12.98,
    description: "fresh orange from thailand",
  },
  {
    id: 3,
    name: "Apple",
    price: 15.98,
    description: "fresh apple from thailand",
  },
  {
    id: 4,
    name: "Mango",
    price: 11.98,
    description: "fresh mango from thailand",
  },
  {
    id: 5,
    name: "Kiwi",
    price: 5.55,
    description: "fresh kiwi from thailand",
  },
];
const Body = () => {
  return (
    <section className="body">
      {fruits.map((fruit) => (
        <Card key={fruit.id} fruit={fruit} />
      ))}
    </section>
  );
};

export default Body;
