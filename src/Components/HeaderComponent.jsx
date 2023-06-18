// eslint-disable-next-line react/prop-types
const HeaderComponent = ({ dark, setDarkMode }) => {
  {
    /* handleClick function starts from over here */
  }
  const handleClick = () => {
    setDarkMode(!dark);
  };

  {
    /* handleClick function starts from over here */
  }
  return (
    <>
      {/* Header Container Starts From over here */}
      <div className="Header_Container">
        {/* Header Starts From over here */}
        <div className="Header">
          {/* Header Content1 Starts From over here */}
          <div className="HeaderContent1">
            <h4
              style={{
                color: dark ? "hsl(228, 12%, 44%)" : "hsl(0, 0%, 100%)",
              }}
            >
              Social Media Dashboard
            </h4>
            <p>Total Followers: 23,004</p>
          </div>

          {/* Header Content1 ends over here */}

          {/* divider line starts from  over here */}
          <div
            className="divider_line"
            style={{
              backgroundColor: dark
                ? "hsl(230, 17%, 14%)"
                : "hsl(228, 34%, 66%)",
            }}
          ></div>

          {/* divider line ends over here */}

          {/*  Header Content2 starts from over here */}
          <div className="HeaderContent2">
            <h6
              style={{
                color: dark ? "hsl(228, 34%, 66%)" : "hsl(0, 0%, 100%)",
              }}
            >
              Dark Mode
            </h6>
            <div className="header_toggle">
              <input
                type="checkbox"
                name="checkbox"
                id="checkbox"
                onClick={handleClick}
              />
              <label htmlFor="checkbox" className="switch"></label>
            </div>
          </div>

          {/*  Header Content2 ends over here */}
        </div>

        {/* Header ends over here */}
      </div>
      {/* Header Container Starts From over here */}
      <style>
        {`
          .switch {
            position: relative;
            display: inline-block;
            width: 3rem;
            height: 1.5rem;
            border-radius: 0.75rem;
            background: ${
              dark === false &&
              "linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))"
            };
            background-color:${dark === true && "hsl(230, 22%, 74%)"}; 
            transition: all 0.3s linear;
          }
          .switch::after {
            content: "";
            position: absolute;
            top: 0.1rem;
            left: 0.1rem;
            width: 1.3rem;
            height: 1.3rem;
            border-radius: 50%;
            transition: all 0.3s linear;
            background-color: ${
              dark ? "hsl(225, 100%, 98%)" : "hsl(230, 17%, 14%)"
            };
          }
          .header_toggle input[type="checkbox"] {
            display: none;
          }
          .header_toggle input[type="checkbox"]:checked + .switch::after {
            transform: translateX(1.4rem);
          }
          .switch:hover {
            background: ${dark === true && "hsl(208, 92%, 53%)"};
            background-color: ${
              dark === false &&
              "linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))"
            };
            cursor: pointer;
          }
        `}
      </style>{" "}
    </>
  );
};

export default HeaderComponent;
