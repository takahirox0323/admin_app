// import App from 'next/app'

function MyApp({ Component, pageProps }) {
  return <p>fasfas</p>;
}

// もし、アプリケーション内のすべてのページでブロックするデータを必要とする場合のみ、このメソッドのコメントを外してください。
// Automatic Static Optimizationを無効にし、アプリケーション内の各ページはサーバーサイドでレンダリングされます。
//
// MyApp.getInitialProps = async (appContext) => {
//   // ページの`getInitialProps`を呼び、`appProps.pageProps`を満たします。
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
