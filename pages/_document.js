import Document, {Head, Main,Html, NextScript} from "next/document";


class MyDocument extends Document {
    render() {
        return(
            <Html lang="en">
                <Head>
                    <meta charSet="utf-8"/>
                    <meta name="description" content="My Seo with next"/>
                    <meta name="author" content="Jag"/>
                    {/* <link rel="stylesheet" href="/static/styles.css"/> */}
                    <link 
                        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" 
                        rel="stylesheet" 
                        integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" 
                        crossOrigin="anonymous"
                        />
                </Head>

                <body>
                    <Main/>
                    
                    <NextScript/>
                    
                    {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script> */}
                </body>
            </Html>
        );
    }
}

export default MyDocument;