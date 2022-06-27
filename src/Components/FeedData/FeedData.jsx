import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { logout } from "../../Redux/Actions/LoginAction";
import { Button } from "@mui/material";
import axios from "axios";

export default function FeedData() {
  const [feeds, setfeeds] = useState({
    User_id: "",
    Notice: "",
  });
  const [feedsList, setfeedsList] = useState([]);

  useEffect(() => {
    fatchData();
  }, []);

  const Dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    Dispatch(logout());
    navigate("/");
  };

  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  var today = new Date();

  const time =
    today.getHours() +
    ":" +
    today.getMinutes() +
    ":" +
    today.getSeconds();

  const fatchData = () => {
    axios
      .get("https://crime-check-api.herokuapp.com/notice")
      .then(res => {
        setfeedsList([...res.data]);
      })
      .catch(err => {
        alert("error something wents wrong");
      });
  };

  feedsList.sort((a, b) => {
    return new Date(b.createdAt) - new Date(a.createdAt);
  });

  const handleSubmit = () => {
    axios
      .post(
        "https://crime-check-api.herokuapp.com/notice",
        feeds
      )
      .then(res => {
        fatchData();
      })
      .catch(err => {
        alert(err.message);
      });
  };

  const { user } = useSelector(store => store.LoginFatch);

  return (
    <>
      <AppBar
        position="relative"
        style={{ backgroundColor: "teal" }}
      >
        <Toolbar>
          <Typography variant="h5" color="white" noWrap>
            {user.User_id}
          </Typography>
          <Button
            onClick={handleLogout}
            sx={{
              marginLeft: "1200px",
              backgroundColor: "noen",
            }}
            variant="contained"
          >
            SIGNOUT
          </Button>
        </Toolbar>
      </AppBar>
      <Box mt={5} sx={{ display: "flex" }}>
        
        <Box
          sx={{
            width: "60%",
            height: "600px",
            overflow: "auto",
            marginLeft: "40px",
          }}
        >
          {feedsList.map(item => {
            return (
              <>
                <Box
                  key={item._id}
                  sx={{
                    boxShadow:
                      "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                    margin: "10px",
                  }}
                >
                  <Typography
                    component="h2"
                    variant="h5"
                    color="inherit"
                    noWrap
                  >
                    {item.User_id.User_id}
                  </Typography>
                  <Typography
                    component="h2"
                    variant="subtitle1"
                    color="inherit"
                    noWrap
                  >
                    Creation Data - {date}
                  </Typography>
                  <Typography
                    component="h2"
                    variant="subtitle1"
                    color="inherit"
                    noWrap
                  >
                    Creation Time - {time}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    paragraph
                    color="inherit"
                    noWrap
                  >
                    {item.Notice}
                  </Typography>
                </Box>
              </>
            );
          })}
        </Box>
        <Box>
          {" "}
          <TextareaAutosize
            aria-label="minimum height"
            minRows={10}
            placeholder="what you think you can tell me............"
            onChange={e =>
              setfeeds({
                ...feeds,
                Notice: e.target.value,
                User_id: user._id,
              })
            }
            style={{ width: 500 }}
          />
          <Button
            variant="outlined"
            style={{color:"teal",border:"2px solid teal"}}
            onClick={() => {
              handleSubmit();
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </>
  );
}
