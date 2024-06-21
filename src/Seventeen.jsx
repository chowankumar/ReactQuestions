import "./Seventeen.css";

export const Seventeen = () => {
  const handleGrandParent = () => {
    console.log("GrandParent clicked");
  };

  const handleParentClick = () => {
    console.log("Parent clicked");
  };

  const handleChildClick = (event) => {
     
    event.stopPropagation();
    console.log("Child clicked");
  };
  return (
    <section className="main-div">
      <div className="g-div" onClickCapture={handleGrandParent}>
        <div className="p-div" onClickCapture={handleParentClick}>
          <button className="c-div" onClickCapture={handleChildClick}>
            Child Div
          </button>
        </div>
      </div>
    </section>
  );
};