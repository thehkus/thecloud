import React from 'react';
import { Breadcrumb, Layout, Menu, theme, Radio, Typography } from 'antd';
import logo from '../assets/images/favicon.png'
// import backgroundImg from '../assets/images/重阳节-黄山云海.jpeg'
import backgroundImg from '../assets/images/重阳节-黄山云海.jpeg'


const { Header, Content, Footer } = Layout;
const { Paragraph } = Typography;

const menuItems = [
  {
    key: '1',
    label: 'The Cloud',
    children: [
      { label: (<a href="https://cloud.thehkus.com">全球</a>), key: '1.1' },
      { label: (<a href="https://cn.cloud.thehkus.com:7443">中国内地</a>), key: '1.2' },
    ]
  },
  {
    key: '2',
    label: 'AnyConnect',
    children: [
      { label: (<a href="https://cn2hk.thehkus.com:30444" style={{ cursor: "not-allowed" }} onClick={(e) => e.preventDefault()}>中国香港</a>), key: '1.1', disabled: true, },
      { label: (<a href="https://cn2sg.thehkus.com:30444" >新加坡</a>), key: '1.2' },
      { label: (<a href="https://cn2usa2.thehkus.com" style={{ cursor: "not-allowed" }} onClick={(e) => e.preventDefault()}>美国</a>), key: '1.3', disabled: true, },
    ]
  },

  {
    key: '3',
    label: (<a href="https://status.thehkus.com">System Status</a>)

  },
];

function Home () {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout
      style={{
        minHeight: '100vh',
        alignItems: 'center',
        padding: '0px 20',
        // background: `url(${backgroundImg}) no-repeat center/cover `,
        backgroundImage: `url(${backgroundImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Header style={{ display: 'flex', alignItems: 'center', background: 'transparent', width: '100%', maxWidth: 1200 }}>
        <img src={logo} alt="THEHKUS LOGO" />
        <Typography.Title
          level={4}
          style={{ margin: "0 0.6em", textShadow: "3px 3px 4px rgba(0, 0, 0, .3)", color:'#e6e6e6' }}>
          THEHKUS
        </Typography.Title>
        <Menu
          // theme="dark"
          mode="horizontal"
          items={menuItems}
          style={{ flex: 1, minWidth: 0, justifyContent: 'flex-end', background: 'transparent' }}
          popupBg
        />
      </Header>
      <Content style={{ width: "100%" }}>
        {/* <div
          style={{
            background: colorBgContainer,
            minHeight: 280,
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
          Content
        </div> */}
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        © 2017-{new Date().getFullYear()} THEHKUS. All Rights Reserved.
      </Footer>
    </Layout>
  );
}

export default Home;