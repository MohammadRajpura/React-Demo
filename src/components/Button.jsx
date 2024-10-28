import { useState } from "react";

function Button({ name }) {
  // ** Hooks
  const [selectedColor, setSelectedColor] = useState("");
  console.log(name);

  // ** Variables
  const colors = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
  ];
  
  const products = [
    { name: "Product A", price: 150 },
    { name: "Product B", price: 120 },
    { name: "Product C", price: 95 },
  ];
  const finalData = products
    .filter((item) => item.price > 100)
    .map((x) => x.name);

  // Public Function
  // --------------------------------

  /**
   * Handling Alert on clicking button
   * @param color
   */
  const handleAlert = (color) => {
    setSelectedColor(color);
  };

  return (
    <>
      <div className="container pt-5">
        <div className="d-flex">
          {colors.map((item) => {
            return (
              <button
                key={item}
                type="button"
                className={"btn btn-" + item}
                onClick={() => handleAlert(item)}
              >
                {item.charAt(0).toUpperCase() + item.substring(1)}
              </button>
            );
          })}
        </div>

        {selectedColor ? (
          <div className={"alert mt-5 alert-" + selectedColor} role="alert">
            A simple {selectedColor} alert—check it out!
          </div>
        ) : null}
      </div>
    </>
  );
}

export default Button;
