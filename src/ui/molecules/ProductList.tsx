import React from "react";
import { Button, ProductCard } from ".";
import { Heading, Text } from "../atoms";

const ProductList: React.FC = () => (
  <div className="space-y-8">
    <div className="flex flex-row gap-4">
      {[...Array(4)].map(() => (
        <ProductCard />
      ))}
    </div>
    <div className="text-center space-y-6">
      <Heading>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit
      </Heading>

      <Text>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos explicabo
        dignissimos repellendus modi dolore libero consequuntur eveniet nam,
        maxime rerum! Maiores quia vel repellat, hic asperiores numquam omnis
        autem quae.
      </Text>

      <Button>Click here!</Button>
    </div>
  </div>
);

export default ProductList;
