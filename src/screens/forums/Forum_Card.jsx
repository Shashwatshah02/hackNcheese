import React, { useState } from "react";
import {
    Card,
    CardHeader,
    CardBody,
    Heading,
    Input,
    Flex,
    Button,
  } from "@chakra-ui/react";

export default function Forum_Card(props) {
  const [displayText, setDisplayText] = useState();
  const [color, setColor] = useState("");

  const handleClickHeart = () => {
    if (color === "") {
      setColor("red");
    } else {
      setColor("");
    }
  };
  const handleClick = () => {
    if (displayText === <Comment />) {
      setDisplayText();
    } else {
      setDisplayText(<Comment></Comment>);
    }
  };
  return (
    <Card style={{margin:'20px'}}>
      <CardBody>
        <div>
          <div
            style={{
              display: "none",
              color: "#f3f3f3",
              fontSize: "1px",
              lineHeight: "1px",
              maxHeight: "0",
              maxWidth: "0",
              MSHide: "all",
              opacity: "0",
              overflow: "hidden",
              visibility: "hidden",
            }}
          >
            A brief summary since your last visit on April 11, 2023
          </div>

          {/* Header */}
          <table style={{ verticalAlign: "top", width: "100%" }}>
            <tbody>
              <tr>
                <td
                  style={{
                    padding: "0 8px 8px 16px",
                    textAlign: "left",
                    width: "100%",
                  }}
                >
                  <h2
                    style={{
                      fontSize: "18px",
                      fontWeight: "400",
                      lineHeight: "1.3",
                      margin: "0",
                      padding: "0",
                      wordWrap: "normal",
                    }}
                  >
                    <a
                      href="https://forum.sublimetext.com/t/discovering-commands-and-their-parameters/70760"
                      style={{
                        textDecoration: "none",
                        fontWeight: "bold",
                        color: "#006699",
                        lineHeight: "1.3",
                        margin: "0",
                        padding: "0",
                      }}
                    >
                      {/* <strong>Discovering commands and their parameters</strong> */}
                    </a>
                  </h2>
                </td>
              </tr>
            </tbody>
          </table>

          <table
            style={{
              borderBottom: "1px solid #f3f3f3",
              padding: "0",
              textAlign: "left",
              verticalAlign: "top",
              width: "100%",
            }}
          >
            <tbody>
              <tr>
                <td
                  style={{
                    color: "#0a0a0a",
                    fontSize: "14px",
                    padding: "0 16px 0 16px",
                    textAlign: "left",
                    width: "100%",
                    fontWeight: "normal",
                  }}
                >
                  <p>
                    {props.value}
                  </p>
                  <p>
                    Many times, I'm wanting a keybinding to do something and,
                    unless it's in the default keymap, I have no idea what the
                    command is.
                  </p>
                </td>
              </tr>
            </tbody>
          </table>

          <table
            style={{
              padding: "0",
              textAlign: "left",
              verticalAlign: "top",
              width: "100%",
              marginTop: "20px",
            }}
          >
            <tbody>
              <tr>
                <td
                  style={{
                    padding: "0 8px 16px 16px",
                    textAlign: "left",
                    whiteSpace: "nowrap",
                    verticalAlign: "top",
                    width: "75px",
                  }}
                >
                  <img
                    src="https://forum.sublimetext.com/images/emails/heart.png"
                    style={{
                      clear: "both",
                      display: "inline-block",
                      float: "left",
                      height: "20px",
                      margin: "0",
                      maxWidth: "100%",
                      opacity: ".4",
                      outline: "0",
                      textDecoration: "none",
                      width: "auto",
                    }}
                    onClick={handleClickHeart}
                    alt="Heart"
                  />
                  <p
                    style={{
                      color: "#8f8f8f",
                      float: "left",
                      lineHeight: "1.3",
                      margin: "0 5px 10px 5px",
                      padding: "0",
                      textAlign: "left",
                      fontWeight: "400",
                    }}
                  ></p>
                </td>
                <td
                  style={{
                    padding: "0 8px 16px 8px",
                    textAlign: "left",
                    whiteSpace: "nowrap",
                    verticalAlign: "top",
                    width: "75px",
                  }}
                >
                  <img
                    src="https://forum.sublimetext.com/images/emails/comment.png"
                    style={{
                      clear: "none",
                      display: "inline-block",
                      float: "left",
                      height: "20px",
                      margin: "0",
                      maxWidth: "100%",
                      opacity: ".4",
                      outline: "0",
                      textDecoration: "none",
                      width: "auto",
                    }}
                    onClick={handleClick}
                    alt="Comment"
                  />
                  <p
                    style={{
                      color: "#8f8f8f",
                      float: "left",
                      lineHeight: "1.3",
                      margin: "0 5px 10px 5px",
                      padding: "0",
                      textAlign: "left",
                      fontWeight: "400",
                    }}
                  ></p>
                </td>
                <td
                  style={{
                    padding: "0 8px 16px 8px",
                    textAlign: "left",
                    whiteSpace: "nowrap",
                    verticalAlign: "top",
                  }}
                >
                  <img
                    src="https://forum.sublimetext.com/user_avatar/forum.sublimetext.com/marcuso/45/66787_2.png"
                    style={{
                      borderRadius: "50%",
                      clear: "both",
                      display: "inline-block",
                      height: "20px",
                      width: "20px",
                      outline: "0",
                      textDecoration: "none",
                    }}
                    alt="User Avatar"
                  />
                  <img
                    src="https://forum.sublimetext.com/user_avatar/forum.sublimetext.com/deathaxe/45/52468_2.png"
                    style={{
                      borderRadius: "50%",
                      clear: "both",
                      display: "inline-block",
                      height: "20px",
                      width: "20px",
                      outline: "0",
                      textDecoration: "none",
                    }}
                    alt="User Avatar"
                  />
                  <img
                    src="https://forum.sublimetext.com/user_avatar/forum.sublimetext.com/frindleblat/45/78498_2.png"
                    style={{
                      borderRadius: "50%",
                      clear: "both",
                      display: "inline-block",
                      height: "20px",
                      width: "20px",
                      outline: "0",
                      textDecoration: "none",
                    }}
                    alt="User Avatar"
                  />
                </td>
                <td
                  style={{
                    lineHeight: "1.3",
                    padding: "0 16px 0 8px",
                    textAlign: "right",
                    whiteSpace: "nowrap",
                    verticalAlign: "top",
                  }}
                ></td>
              </tr>
              <td>
                <p>{displayText}</p>
              </td>
            </tbody>
          </table>
        </div>
      </CardBody>
    </Card>
  );
}
