import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';
import NextLink from 'next/link';

const Landing = (props) => (
    <Layout>
        <h1 id='items-head'>You Are Just One Click Away from Fun Facts</h1>
        <div id='main-items-container'>
            {props.countries.map((countries) => (
                <>
                    <ul id='items-list'>
                        <li id='list-items' key={countries.population}>
                            <NextLink as={`/p/${countries.alpha2Code}`} href={`info?name=${countries.name.toLowerCase()}`}>
                                <a id='items'>{countries.name}</a>
                            </NextLink>
                        </li>
                    </ul>
                </>
            ))}
        </div>
        <style jsx>{`
           #items {
               text-decoration: none;
               color: black;
               font-size: 26px;
           } 
           #items-list {
               margin-top: 50px;
               padding-top: 50px;
           }
           #items:hover {
               color: gray;
               text-decoration: underline;
               border-right: 10px solid black;
               padding-right: 10px; 
           }
           #items:visited {
               color: purple;
           }
           #list-items {
               list-style-type: circle;

           }
           #list-items:hover {
               background-color: white;
               padding-left: 10px;

           }
           #main-items-container {
               background-color: rgb(224, 224, 235);
               border-radius: 20px;
           }
           #items-head {
               font-weight: 900;
               margin-top: 20px;
               color: rgb(99, 99, 156)
           }
       `}</style>
    </Layout>
)

Landing.getInitialProps = async function () {
    const res = await fetch(`https://restcountries.eu/rest/v2/all`);
    const data = await res.json();

    return {
        countries: data
    }
}

export default Landing;