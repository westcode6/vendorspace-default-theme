import Document, {
 Html,
 Head,
 Main,
 NextScript,
} from "next/document";

class MyDocument extends Document {
 render() {
  return (
   <Html>
    <Head>
     <link
      href="https://fonts.googleapis.com/css2?family=Lato:wght@400&display=swap"
      rel="stylesheet"
     />

     <style jsx global>{`
      html,
      body {
       background: #f3f4f6;
       padding: 0;
       margin: 0;
       font-family: "Lato", sans-serif;
      }

      * {
       box-sizing: border-box;
      }
     `}</style>
    </Head>

    <body>
     <Main />
     <NextScript />
    </body>
   </Html>
  );
 }
}

export default MyDocument;
