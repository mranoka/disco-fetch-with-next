import Header from './Header';
import Head from 'next/head';
import Container from 'react-bootstrap/Container';
const layoutStyle = {
    border: '1px dotted gray'
}
const Layout = (props) => (
    <>
        <Head>
            <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
                integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
                crossOrigin="anonymous"
            />
        </Head>
        <Container style={layoutStyle}>
            <Header />
            {props.children}
        </Container>
    </>

)

export default Layout;