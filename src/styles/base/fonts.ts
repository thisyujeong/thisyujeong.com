import localFont from 'next/font/local';

const pretendard = localFont({
  src: [
    {
      path: '../../../public/assets/fonts/Pretendard-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../public/assets/fonts/Pretendard-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../../public/assets/fonts/Pretendard-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../../public/assets/fonts/Pretendard-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-pretendard',
});

const safiro = localFont({
  src: [
    {
      path: '../../../public/assets/fonts/Safiro-Medium.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-safiro',
});

export { pretendard, safiro };
