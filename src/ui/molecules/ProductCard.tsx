import React from "react";
import { Card, Heading, Image, Text } from "../atoms";
import { Button } from ".";

const ProductCard: React.FC = () => (
  <Card className="space-y-4">
    <Image src="/placeholder.svg" />
    <div className="space-y-2">
      <Heading>Lorem ipsum dolor sit amet consectetur</Heading>
      <Text>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
        laudantium magnam sed eos quaerat unde perferendis
      </Text>
    </div>
    <Button>More</Button>
  </Card>
);

export default ProductCard;
