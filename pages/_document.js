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
    </Head>

    
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
    .search {
     width: 600px;
    }
    .search,
    input,
    button {
     border-radius: 5px;
    }

    .search-btn {
     padding: 10px 10px;
     background: #e4811c;
     font-weight: 500px;
    }
    @media (max-width: 768px) {
     .search {
      width: 100%;
     }
    }
   `}</style>
    <body>
     <Main />
     <NextScript />
    </body>
   </Html>
  );
 }
}

export default MyDocument;
