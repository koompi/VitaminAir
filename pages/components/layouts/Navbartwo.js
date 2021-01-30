import Link from 'next/link'
import React, { useState } from "react"
import { Layout, Menu,  Drawer, Button  } from 'antd';

import { Row, Col } from 'antd';

const { Header, Content, Footer } = Layout;

export default function Navbar() {
  const [visible, setVisible] = useState(false)


  const handleChange = () => {
    setVisible(!visible)
  }

  

    return (
      <>
        <Layout>
        <Header style={{height: '70px'}}  className="Navbar-header ">
            <Row>
              <Col span={12}>
                <Link href="/">
                  <img style={{marginTop:'0'}}  src="/image/VA-White-V1.png"  />
                </Link>
              </Col>
              <Col span={12}>
                  <div style={{marginTop: "10px" }} className="Navbar-menu hidden-mobile ">
                    
                    <Menu mode="horizontal">
                    <Menu.Item  className="modified-item">
                      <Link href="/about">
                          About Us
                      </Link>
                    </Menu.Item >
                    <Menu.Item  className="modified-item">
                      <Link href="/initiation">
                          Initiation
                      </Link>
                    </Menu.Item>
                    <Menu.Item  className="modified-item">
                        <a
                          href="https://t.me/vitaminair"
                          target="_blank"
                          rel="noopener noreferrer"
                        >COMMUNITY</a>
                    </Menu.Item>
                    </Menu>
                  </div>
                  <div className="Navbar-bgcolor hidden-desktop">
                  <div >
                    <Button className="btn-style" type="primary" onClick={handleChange}>
                      Menu
                    </Button>
                    <Drawer
                      title="Vitamin Air"
                      placement="right"
                      closable={false}
                      onClose={handleChange}
                      visible={visible}
                    >
                     <p>
                     <Link href="/about">
                          About Us
                      </Link>
                     </p>
                     <p>
                     <Link href="/initiation">
                          Initiation
                      </Link>
                     </p>
                     <p>
                     <a
                          href="https://t.me/vitaminair"
                          target="_blank"
                          rel="noopener noreferrer"
                        >COMMUNITY</a>
                     </p>
                    </Drawer>
                  </div>
                  </div>
                  
              </Col>
            </Row>
        </Header>
      </Layout>
      </>
    );
  }