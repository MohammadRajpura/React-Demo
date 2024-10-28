import { useState } from "react";

function ListGroup() {
  const [selectedIndex, setSelectedIndex] = [-1, ƒ];

  let items = [
    "An item",
    "A second item",
    "A third item",
    "A fourth item",
    "And a fifth one",
  ];

  // items = [];

  const isShow = false;
  const userName = "";

  // // for (let i = 0; i < array.length; i++) {
  // //   const element = array[i];
  // // }

  // const changedArray = items.map((x, i) => {
  //   return `<li>${x}</li>`;
  // });

  // console.log(changedArray);

  // let selectedIndex = 0;

  const handleOnClick = (i) => {
    setSelectedIndex(i);
  };
const gh = useState(-1);
  console.log(gh);

  return (
    <>
      <div className="container pt-5">
        {/* Ternary Operator */}
        {/* <h5>{isShow ? "List Group" : "List Items"}</h5> */}

        {/* {isShow == false && <h5>List Item 2</h5>} */}
        {/* <h5>{ userName || 'HTML' }</h5> */}

        {items.length > 0 ? <h5>Group Items</h5> : <h5>No Items</h5>}

        <ul className="list-group">
          {items.length > 0 ? (
            items.map((x, i) => {
              return (
                <li
                  onClick={() => handleOnClick(i)}
                  key={i}
                  className={
                    selectedIndex === i
                      ? "list-group-item active"
                      : "list-group-item"
                  }
                >
                  {x}
                </li>
              );
            })
          ) : (
            <h2>No Data Found</h2>
          )}
        </ul>
      </div>
    </>
  );
}

export default ListGroup;
