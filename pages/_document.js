import Document, {Head, Main, NextScript} from "next/document"

class MyDocument extends Document {
    render() {
        return(
            <html lang="en">
                <Head>
                    <meta charSet="utf-8"/>
                    <meta name="description" content="My Seo with next"/>
                    <meta name="author" content="Jag"/>
                    <link rel="stylesheet" href="/static/styles.css"/>
                    <link 
                        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" 
                        rel="stylesheet" 
                        integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" 
                        crossorigin="anonymous"/>
                </Head>

                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </html>
        );
    }
}

export default MyDocument;