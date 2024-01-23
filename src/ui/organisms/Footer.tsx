import React from "react";
import { Link } from "react-router-dom";
import { Icon, Text } from "../atoms";

const Footer: React.FC = () => (
  <footer className="bg-slate-800 text-white px-10 py-8">
    <div className="flex flex-col gap-4 items-center">
      <Link to="/main">
        <img
          src="/vite.svg"
          className="w-10 h-auto block"
          alt="Atomic Design"
        />
      </Link>

      <div className="flex flex-row gap-6">
        <Icon name="email" className="w-8" />
        <Icon name="facebook" className="w-8" />
        <Icon name="instagram" className="w-8" />
        <Icon name="map-marker" className="w-8" />
      </div>

      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
    </div>
  </footer>
);

export default Footer;
