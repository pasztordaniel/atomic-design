import React from "react";
import { Heading, Icon, Text } from "../atoms";

const Welcome: React.FC = () => (
  <div className="text-center space-y-6">
    <Heading component="h1" variant="h1">
      Lorem ipsum dolor, sit amet consectetur
    </Heading>
    <Icon name="close" className="w-10 mx-auto" />
    <Text className="max-w-">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque eligendi,
      qui ratione quibusdam et commodi recusandae, veritatis natus nesciunt odit
      iste impedit alias fugit facere blanditiis nisi? Numquam, quam iste! Lorem
      ipsum dolor sit amet, consectetur adipisicing elit. Sed doloribus fugiat,
      ipsum sit sequi facilis adipisci suscipit sapiente, debitis a doloremque,
      eum neque sint veritatis totam reprehenderit assumenda animi ab.
    </Text>
  </div>
);

export default Welcome;
