import React from "react";
import SearchIcon from "../assets/icons/search.svg";
import Logo from "../assets/icons/nft-logo.svg";
type Props = {};

function Navbar({}: Props) {
  return (
    <>
      <div className="w-full h-20 px-20 py-5 grid grid-cols-3 font-orbitron font-bold text-sm ">
        <div className="flex justify-start items-center  text-white">
          <img className="h-10 w-10 primaryFilter mx-1" src={Logo} alt="logo" />
          <h2 className="mx-1 text-lg">Nft- market</h2>
        </div>
        <div className="flex justify-between items-center text-white ">
          <h2>Discover</h2>
          <h2>Features</h2>
          <h2>Market</h2>
          <h2>Explore</h2>
        </div>
        <div className="flex justify-end items-center text-white ">
          <img className="whiteFilter h-6 w-6" src={SearchIcon} alt="search" />
          <div className="poligon shallow">
            <button className="">Log in</button>
          </div>
          <div className="poligon grad">
            <button className="">Connect Wallet</button>
          </div>
        </div>
        <hr className="col-span-12 mt-5 border-1 border-secondarydark" />
      </div>
    </>
  );
}

export default Navbar;
