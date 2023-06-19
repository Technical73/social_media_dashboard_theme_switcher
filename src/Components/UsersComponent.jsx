import { GrFacebook, GrInstagram } from "react-icons/gr";
import { BsTwitter, BsYoutube } from "react-icons/bs";
import { BiUpArrow, BiCaretDown } from "react-icons/bi";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const UsersComponent = ({ dark }) => {
  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);
  const [hovered4, setHovered4] = useState(false);
  const cardStyle = {
    backgroundColor: dark ? "hsl(227, 47%, 96%)" : "hsl(228, 28%, 20%)",
    cursor: "pointer",
  };

  // Card 1
  const card1HoverStyle = {
    backgroundColor:
      hovered1 && dark ? "hsl(228, 34%, 90%)" : "hsl(228, 28%, 24%)",
  };

  // Card 2
  const card2HoverStyle = {
    backgroundColor:
      hovered2 && dark ? "hsl(228, 34%, 90%)" : "hsl(228, 28%, 24%)",
  };

  // Card 3
  const card3HoverStyle = {
    backgroundColor:
      hovered3 && dark ? "hsl(228, 34%, 90%)" : "hsl(228, 28%, 24%)",
  };

  // Card 4
  const card4HoverStyle = {
    backgroundColor:
      hovered4 && dark ? "hsl(228, 34%, 90%)" : "hsl(228, 28%, 24%)",
  };

  return (
    <>
      <div className="card_groups">
        {/* Card 1 Starts From over here */}
        <div
          className="card_1"
          style={{
            ...cardStyle,
            ...(hovered1 && card1HoverStyle),
          }}
          onMouseEnter={() => setHovered1(true)}
          onMouseLeave={() => setHovered1(false)}
        >
          <div className="card_header_color"></div>
          <div className="card_content1">
            <GrFacebook className="icon" />
            <p
              style={{
                color: dark ? "hsl(228, 12%, 44%)" : "hsl(228, 34%, 66%)",
              }}
            >
              @nathanf
            </p>
          </div>
          <div className="card_content2">
            <h5
              style={{
                color: dark ? "hsl(230, 17%, 14%)" : "hsl(0, 0%, 100%)",
              }}
            >
              1987
            </h5>
            <p>Followers</p>
          </div>
          <div className="card_content3">
            <BiUpArrow className="icon2" />
            <p>12 Today</p>
          </div>
        </div>
        {/* Card 1 Ends here */}
        {/* Card 2 Starts From over here */}
        <div
          className="card_1"
          style={{
            ...cardStyle,
            ...(hovered2 && card2HoverStyle),
          }}
          onMouseEnter={() => setHovered2(true)}
          onMouseLeave={() => setHovered2(false)}
        >
          <div className="card2_header_color"></div>
          <div className="card_content1">
            <BsTwitter className="icon1_card2" />
            <p
              style={{
                color: dark ? "hsl(228, 12%, 44%)" : "hsl(228, 34%, 66%)",
              }}
            >
              @nathanf
            </p>
          </div>
          <div className="card_content2">
            <h5
              style={{
                color: dark ? "hsl(230, 17%, 14%)" : "hsl(0, 0%, 100%)",
              }}
            >
              1044
            </h5>
            <p>Followers</p>
          </div>
          <div className="card_content3">
            <BiUpArrow className="icon2" />
            <p>99 Today</p>
          </div>
        </div>
        {/* Card 2 Ends here */}
        {/* Card 3 Starts From over here */}
        <div
          className="card_1"
          style={{
            ...cardStyle,
            ...(hovered3 && card3HoverStyle),
          }}
          onMouseEnter={() => setHovered3(true)}
          onMouseLeave={() => setHovered3(false)}
        >
          <div className="card3_header_color"></div>
          <div className="card_content1">
            <GrInstagram className="icon1_card3" />
            <p
              style={{
                color: dark ? "hsl(228, 12%, 44%)" : "hsl(228, 34%, 66%)",
              }}
            >
              @realnathanf
            </p>
          </div>
          <div className="card_content2">
            <h5
              style={{
                color: dark ? "hsl(230, 17%, 14%)" : "hsl(0, 0%, 100%)",
              }}
            >
              11k
            </h5>
            <p>Followers</p>
          </div>
          <div className="card_content3">
            <BiUpArrow className="icon2" />
            <p>1099 Today</p>
          </div>
        </div>
        {/* Card 3 Ends over here */}
        {/* Card 4 Starts From over here */}
        <div
          className="card_1"
          style={{
            ...cardStyle,
            ...(hovered4 && card4HoverStyle),
          }}
          onMouseEnter={() => setHovered4(true)}
          onMouseLeave={() => setHovered4(false)}
        >
          <div className="card4_header_color"></div>
          <div className="card_content1">
            <BsYoutube className="icon1_card4" />

            <p
              style={{
                color: dark ? "hsl(228, 12%, 44%)" : "hsl(228, 34%, 66%)",
              }}
            >
              Nathan F
            </p>
          </div>
          <div className="card_content2">
            <h5
              style={{
                color: dark ? "hsl(230, 17%, 14%)" : "hsl(0, 0%, 100%)",
              }}
            >
              8239
            </h5>
            <p>Subscribers</p>
          </div>

          <div className="card_content3">
            {dark ? (
              <BiCaretDown
                className="icon2"
                style={{
                  color: "hsl(356, 69%, 56%)",
                  width: "15px",
                  height: "15px",
                }}
              />
            ) : (
              <BiCaretDown
                className="icon2"
                style={{
                  color: "hsl(356, 69%, 56%)",
                }}
              />
            )}

            <p
              style={{
                color: "hsl(356, 69%, 56%)",
              }}
            >
              144 Today
            </p>
          </div>
        </div>
        {/* Card 4 Ends here */}
      </div>
    </>
  );
};

export default UsersComponent;
