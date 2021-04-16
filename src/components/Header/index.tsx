import { FC, useState, useEffect } from "react";
import { useHistory } from "react-router";
import "antd/dist/antd.less";
import { Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import logo from "../../assets/logo/zara-logo.png";
import { Typography, Row, Col } from "antd";
import styled from "styled-components";
import "./styles.scss";

const { SubMenu } = Menu;

const { Link, Text } = Typography;

const ItemList = styled(Menu.Item)`
  letter-spaceing: 3px;
  font-weight: 700;
  :hover {
    background-color: #bfbfbf;
  }
`;

const MenuItemText = styled(Text)`
  :hover {
    text-shadow: 4px 0 8px #1da57a;
  }
`;

const RightMenuItem = styled(Menu.Item)`
  :hover {
    background-color: #bfbfbf;
  }
`;

const LogoBlock = styled.div`
  width: 246px;
  display: flex;
  justify-content: flex-end;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Sider: FC = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const history = useHistory();

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Row
      style={{
        width: "100%",
        position: "fixed",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#aba8a8",
        zIndex: 34,
      }}
    >
      <Col>
        <Menu
          mode="horizontal"
          style={{ backgroundColor: "#aba8a8", border: "none" }}
          triggerSubMenuAction="click"
        >
          <SubMenu key="sub1" icon={<MenuOutlined />}>
            <ItemList key="1">
              <Link onClick={() => history.push("todo")}>
                <MenuItemText strong>Todo List</MenuItemText>
              </Link>
            </ItemList>
            <ItemList key="2">Option 2</ItemList>
            <ItemList key="3">Option 3</ItemList>
            <ItemList key="4">Option 4</ItemList>
          </SubMenu>
        </Menu>
      </Col>
      <Col>
        <LogoBlock>
          <Link onClick={() => history.push("home")}>
            <img src={logo} alt="brand-logo" style={{ width: "50px" }} />
          </Link>
        </LogoBlock>
      </Col>
      {width > 768 ? (
        <Col
          style={{
            width: "230px",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Link onClick={() => history.push("home")}>
            <MenuItemText strong>Home</MenuItemText>
          </Link>
          <Link onClick={() => history.push("about")}>
            <MenuItemText strong>About</MenuItemText>
          </Link>
          <Link onClick={() => history.push("contact")}>
            <MenuItemText strong>Contact</MenuItemText>
          </Link>
        </Col>
      ) : (
        <Col>
          <Menu
            mode="horizontal"
            style={{ backgroundColor: "#aba8a8", border: "none" }}
            triggerSubMenuAction="click"
          >
            <SubMenu
              key="sub1"
              icon={<MenuOutlined />}
              className="submenurightbox"
            >
              <RightMenuItem key="1" style={{ width: `100%` }}>
                <Link onClick={() => history.push("home")}>
                  <Text strong>Home</Text>
                </Link>
              </RightMenuItem>
              <RightMenuItem key="2" style={{ width: `100%` }}>
                <Link onClick={() => history.push("about")}>
                  <Text strong>About</Text>
                </Link>
              </RightMenuItem>
              <RightMenuItem key="3" style={{ width: `100%` }}>
                <Link onClick={() => history.push("contact")}>
                  <Text strong>Contact</Text>
                </Link>
              </RightMenuItem>
            </SubMenu>
          </Menu>
        </Col>
      )}
    </Row>
  );
};

export default Sider;
