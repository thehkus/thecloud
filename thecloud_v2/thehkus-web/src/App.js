import React from 'react';
import { Button, ConfigProvider, Space } from 'antd';
import AppRoutes from './router';

function App () {
  return (
    <ConfigProvider
      theme={{
        token: {
          // Seed Token，影响范围大
          // colorPrimary: '#00b96b',
          // borderRadius: 2,

          // 派生变量，影响范围小
          // colorBgContainer: '#f6ffed',
        },
        components: {
          Menu: {
            activeBarHeight:0,
          },
        }
      }}
    >
      <AppRoutes />
    </ConfigProvider>
  );
}

export default App;
