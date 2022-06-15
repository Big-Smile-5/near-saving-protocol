export interface RouteMenu {
  to: string;
  title: string;
  external: boolean;
}

const dashboard: RouteMenu = {
  to: '/',
  title: 'DASHBOARD',
  external: false,
};

const myPage: RouteMenu = {
  to: `/mypage`,
  title: 'MY PAGE',
  external: false,
};

const earn: RouteMenu = {
  to: '/earn',
  title: 'EARN',
  external: false,
};

const borrow: RouteMenu = {
  to: '/utility',
  title: 'UTILITY+',
  external: false,
};

const bridge: RouteMenu = {
  to: 'https://rainbowbridge.app/transfer',
  title: 'BRIDGE',
  external: true,
};


const useMenus = (): RouteMenu[] => {
  return [dashboard, myPage, earn, borrow, bridge];
};

export { useMenus };
