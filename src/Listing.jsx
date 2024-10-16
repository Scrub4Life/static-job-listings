import { useEffect, useState } from "react";
import data from "../data.json";
import Card from "./Card";
import removeIcon from "./images/icon-remove.svg";

const Listing = () => {
  const [itemArr, setItemArr] = useState([]);
  const [displayArr, setDisplayArr] = useState(false);
  const [selectedValue, setSelectedValue] = useState("all");
  const [keyValue, setKeyValue] = useState("");

  // document.addEventListener("click", (event) => {
  //   console.dir(event.target);
  // });

  // Event handler for adding text to array
  const handleAddItem = (e) => {
    const clickedItem = e.target.textContent;
    setItemArr((prevArr) => [...prevArr, clickedItem]);
    setSelectedValue(clickedItem);

    const keyType = e.target.id;
    setKeyValue(() => keyType);
  };

  // Event handler for deleting an array item
  const handleDeleteItem = (itemToDelete) => {
    setItemArr(itemArr.filter((item) => item !== itemToDelete));
  };

  // clear function to empty the array
  const handleClearClick = () => {
    setItemArr([]);
    setSelectedValue("all");
  };

const filteredItemArr =
  selectedValue === "all"
    ? data
    : data.filter((d) => {
        const value = d[keyValue];
        if (Array.isArray(value)) {
          return value.includes(selectedValue);
        } else {
          return value === selectedValue;
        }
      });


  // const filteredItemArr =
  //   selectedValue === "all"
  //     ? data
  //     : data.filter((d) => d[keyValue] === selectedValue);

  // const filteredItemArr =
  //   selectedValue === "all"
  //     ? data
  //     : data.filter((d) => d[keyValue][0] === selectedValue);

  // useEfftect
  useEffect(() => {
    setDisplayArr(itemArr.length > 0);
  }, [itemArr]);

  // dev testing
  useEffect(() => {
    
    console.log("************************");
    console.log(`keyValue: ${keyValue}`)

    console.log(`selectedValue: ${selectedValue}`);


    
  }, [keyValue])

  return (
    <>
      {/* arr items div */}
      {displayArr && (
        <div className="flex border-solid border-2 font-spartan w-2/5 m-auto p-5 rounded  my-6">
          {itemArr.map((item, index) => {
            return (
              <>
                <p
                  key={index}
                  className="bg-vd bg-lgc1 rounded-tl rounded-bl font-bold p-2 text-ddc justify-center text-sm"
                >
                  {item}
                </p>
                <button
                  className="cursor-pointer"
                  onClick={() => handleDeleteItem(item)}
                >
                  <img
                    src={removeIcon}
                    alt="remove icon"
                    className="bg-ddc mr-2 p-3 rounded-tr rounded-br hover:bg-black"
                  />
                </button>
              </>
            );
          })}
          <p
            className="flex cursor-pointer ml-auto hover:text-ddc hover:underline items-center"
            onClick={handleClearClick}
          >
            Clear
          </p>
        </div>
      )}
      {/*  */}
      <div className="flex flex-col items-center ">
        {filteredItemArr.map((listing) => {
          return (
            <Card
              key={listing.id}
              {...listing}
              arr={itemArr}
              handleAddText={handleAddItem}
            />
          );
        })}
      </div>
    </>
  );
};
export default Listing;
