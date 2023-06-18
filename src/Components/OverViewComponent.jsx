import { GrFacebook, GrInstagram } from "react-icons/gr";
import { BiUpArrow, BiCaretDown } from "react-icons/bi";
import { BsYoutube, BsTwitter } from "react-icons/bs";
import { useState } from "react";
// eslint-disable-next-line react/prop-types
const OverViewComponent = ({ dark }) => {
  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);
  const [hovered4, setHovered4] = useState(false);
  const [hovered5, setHovered5] = useState(false);
  const [hovered6, setHovered6] = useState(false);
  const [hovered7, setHovered7] = useState(false);
  const [hovered8, setHovered8] = useState(false);

  const cardStyle = {
    backgroundColor: dark ? "hsl(227, 47%, 96%)" : "hsl(228, 28%, 20%)",
    transition: "0.2s linear",
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
  // Card 5
  const card5HoverStyle = {
    backgroundColor:
      hovered5 && dark ? "hsl(228, 34%, 90%)" : "hsl(228, 28%, 24%)",
  };
  // Card 6
  const card6HoverStyle = {
    backgroundColor:
      hovered6 && dark ? "hsl(228, 34%, 90%)" : "hsl(228, 28%, 24%)",
  };
  // Card 7
  const card7HoverStyle = {
    backgroundColor:
      hovered7 && dark ? "hsl(228, 34%, 90%)" : "hsl(228, 28%, 24%)",
  };
  // Card 8
  const card8HoverStyle = {
    backgroundColor:
      hovered8 && dark ? "hsl(228, 34%, 90%)" : "hsl(228, 28%, 24%)",
  };
  return (
    <>
      <div className="Overview_main">
        <h4
          style={{
            color: dark ? "hsl(228, 12%, 44%)" : "hsl(0, 0%, 100%)",
          }}
        >
          Overview - Today
        </h4>
        <div className="OverView_grid">
          {/* Card 1 Starts from over here */}
          <div
            className="card"
            style={{
              ...cardStyle,
              ...(hovered1 && card1HoverStyle),
            }}
            onMouseEnter={() => setHovered1(true)}
            onMouseLeave={() => setHovered1(false)}
          >
            <div className="content1">
              <p
                style={{
                  color: dark ? "hsl(228, 12%, 44%)" : "hsl(228, 34%, 66%)",
                }}
              >
                Page Views
              </p>
              <GrFacebook className="icon" />
            </div>
            <div className="content2">
              <h4
                style={{
                  color: dark ? "hsl(230, 17%, 14%)" : "hsl(0, 0%, 100%)",
                }}
              >
                87
              </h4>
              <div className="content3">
                <BiUpArrow className="icon2" />
                <p>3%</p>
              </div>
            </div>
          </div>

          {/* Card 1 Ends over here */}
          {/* Card 2 starts from over here */}
          <div
            className="card"
            style={{
              ...cardStyle,
              ...(hovered2 && card2HoverStyle),
            }}
            onMouseEnter={() => setHovered2(true)}
            onMouseLeave={() => setHovered2(false)}
          >
            <div className="content1">
              <p
                style={{
                  color: dark ? "hsl(228, 12%, 44%)" : "hsl(228, 34%, 66%)",
                }}
              >
                Likes
              </p>
              <GrFacebook className="icon" />
            </div>
            <div className="content2">
              <h4
                style={{
                  color: dark ? "hsl(230, 17%, 14%)" : "hsl(0, 0%, 100%)",
                }}
              >
                52
              </h4>
              <div className="content3">
                <BiCaretDown className="red_icon" />
                <p className="text">2%</p>
              </div>
            </div>
          </div>
          {/* Card 2 Ends over here */}
          {/* Card 3 starts from over here */}
          <div
            className="card"
            style={{
              ...cardStyle,
              ...(hovered3 && card3HoverStyle),
            }}
            onMouseEnter={() => setHovered3(true)}
            onMouseLeave={() => setHovered3(false)}
          >
            <div className="content1">
              <p
                style={{
                  color: dark ? "hsl(228, 12%, 44%)" : "hsl(228, 34%, 66%)",
                }}
              >
                Likes
              </p>
              <GrInstagram className="icon1_card3" />
            </div>
            <div className="content2">
              <h4
                style={{
                  color: dark ? "hsl(230, 17%, 14%)" : "hsl(0, 0%, 100%)",
                }}
              >
                5462
              </h4>
              <div className="content3">
                <BiUpArrow className="icon2" />
                <p>2257%</p>
              </div>
            </div>
          </div>
          {/* Card 3 Ends over here */}
          {/* Card 4 starts from over here */}
          <div
            className="card"
            style={{
              ...cardStyle,
              ...(hovered4 && card4HoverStyle),
            }}
            onMouseEnter={() => setHovered4(true)}
            onMouseLeave={() => setHovered4(false)}
          >
            <div className="content1">
              <p
                style={{
                  color: dark ? "hsl(228, 12%, 44%)" : "hsl(228, 34%, 66%)",
                }}
              >
                Profile Views
              </p>
              <GrInstagram className="icon1_card3" />
            </div>
            <div className="content2">
              <h4
                style={{
                  color: dark ? "hsl(230, 17%, 14%)" : "hsl(0, 0%, 100%)",
                }}
              >
                52k
              </h4>
              <div className="content3">
                <BiUpArrow className="icon2" />
                <p>1375%</p>
              </div>
            </div>
          </div>
          {/* Card 4 Ends over here */}
          {/* Card 5 starts from over here */}
          <div
            className="card"
            style={{
              ...cardStyle,
              ...(hovered5 && card5HoverStyle),
            }}
            onMouseEnter={() => setHovered5(true)}
            onMouseLeave={() => setHovered5(false)}
          >
            <div className="content1">
              <p
                style={{
                  color: dark ? "hsl(228, 12%, 44%)" : "hsl(228, 34%, 66%)",
                }}
              >
                Retweets
              </p>
              <BsTwitter className="icon1_card2" />
            </div>
            <div className="content2">
              <h4
                style={{
                  color: dark ? "hsl(230, 17%, 14%)" : "hsl(0, 0%, 100%)",
                }}
              >
                117
              </h4>
              <div className="content3">
                <BiUpArrow className="icon2" />
                <p>303%</p>
              </div>
            </div>
          </div>
          {/* Card 5 Ends over here */}
          {/* Card 6 starts from over here */}
          <div
            className="card"
            style={{
              ...cardStyle,
              ...(hovered6 && card6HoverStyle),
            }}
            onMouseEnter={() => setHovered6(true)}
            onMouseLeave={() => setHovered6(false)}
          >
            <div className="content1">
              <p
                style={{
                  color: dark ? "hsl(228, 12%, 44%)" : "hsl(228, 34%, 66%)",
                }}
              >
                Likes
              </p>
              <BsTwitter className="icon1_card2" />
            </div>
            <div className="content2">
              <h4
                style={{
                  color: dark ? "hsl(230, 17%, 14%)" : "hsl(0, 0%, 100%)",
                }}
              >
                507
              </h4>
              <div className="content3">
                <BiUpArrow className="icon2" />
                <p>553%</p>
              </div>
            </div>
          </div>
          {/* Card 6 Ends over here */}

          {/* Card 7 starts from over here */}
          <div
            className="card"
            style={{
              ...cardStyle,
              ...(hovered7 && card7HoverStyle),
            }}
            onMouseEnter={() => setHovered7(true)}
            onMouseLeave={() => setHovered7(false)}
          >
            <div className="content1">
              <p
                style={{
                  color: dark ? "hsl(228, 12%, 44%)" : "hsl(228, 34%, 66%)",
                }}
              >
                Likes
              </p>
              <BsYoutube className="icon1_card4" />
            </div>
            <div className="content2">
              <h4
                style={{
                  color: dark ? "hsl(230, 17%, 14%)" : "hsl(0, 0%, 100%)",
                }}
              >
                107
              </h4>
              <div className="content3">
                <BiCaretDown className="red_icon" />
                <p className="text">19%</p>
              </div>
            </div>
          </div>

          {/* Card 7 Ends over here */}

          {/* Card 8 starts from over here */}
          <div
            className="card"
            style={{
              ...cardStyle,
              ...(hovered8 && card8HoverStyle),
            }}
            onMouseEnter={() => setHovered8(true)}
            onMouseLeave={() => setHovered8(false)}
          >
            <div className="content1">
              <p
                style={{
                  color: dark ? "hsl(228, 12%, 44%)" : "hsl(228, 34%, 66%)",
                }}
              >
                Total Views
              </p>
              <BsYoutube className="icon1_card4" />
            </div>
            <div className="content2">
              <h4
                style={{
                  color: dark ? "hsl(230, 17%, 14%)" : "hsl(0, 0%, 100%)",
                }}
              >
                1407
              </h4>
              <div className="content3">
                <BiCaretDown className="red_icon" />
                <p className="text">12%</p>
              </div>
            </div>
          </div>

          {/* Card 8 Ends over here */}
        </div>
      </div>
    </>
  );
};

export default OverViewComponent;
