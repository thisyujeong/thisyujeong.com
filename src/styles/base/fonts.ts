import localFont from 'next/font/local';

const pretendard = localFont({
  src: [
    {
      path: '../../assets/fonts/Pretendard-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/Pretendard-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/Pretendard-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/Pretendard-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/Pretendard-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-pretendard',
});

const safiro = localFont({
  src: [
    {
      path: '../../assets/fonts/Safiro-Medium.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-safiro',
});

export { pretendard, safiro };
