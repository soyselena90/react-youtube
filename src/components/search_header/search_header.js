import React, { useRef } from "react";
import styles from "./search_header.module.css";

const SearchHeader = ({ onSearch }) => {
   const inputRef = useRef();
   const handleSearch = () => {
      const value = inputRef.current.value;
      console.log(value);
      onSearch(value);
   };
   const onKeyPress = (e) => {
      console.log("onkeypresssss");
      if (e.key === "Enter") {
         handleSearch();
      }
   };
   const onClick = () => {
      console.log("onClick");
      handleSearch();
   };
   return (
      <header className={styles.hder}>
         <a href="#!">
            <img src="./images/logo.png" alt="logo" />
            <h1>Youtobo</h1>
         </a>
         <input
            ref={inputRef}
            type="search"
            placeholder="Search.."
            onKeyPress={onKeyPress}
         />
         <button type="submit" onClick={onClick}>
            search
         </button>
      </header>
   );
};

export default SearchHeader;
