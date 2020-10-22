import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';

// accesses and renders data collected by API consumption
const Info = (props) => (
    <Layout>

        {props.details.map(details => (
            <div id='details-container'>
                <h1 id='pais-name'>{details.name}:</h1>
                <ul>
                    <li className='details-list'><span>Capital:</span> {details.capital}</li>
                    <li className='details-list'><span>Region:</span> {details.region}</li>
                    <li className='details-list'><span>TimeZones: </span>{details.timezones}</li>
                    <li className='details-list'> <span>Population:</span>{details.population}</li>
                    <li className='details-list'><span>Currencies: </span> {details.currencies.map(curr => (
                        <p>
                            {curr.name} ({curr.symbol})
                        </p>
                    ))}</li>
                </ul>
            </div>
        ))}
       <style jsx>{`
          span {
               font-weight: 900;     
           } 
           .details-list {
               font-size: 26px;
           }

           #pais-name {
            font-size: 66px;
            font-weight: 900;
            text-decoration: underline;
           }
           #details-container {
               margin-top: 40px;
               background-color: rgb(193, 193, 215);
               border-radius: 20px;
               padding: 20px;
               color: rgb(255, 0, 102);
           }
       `}</style> 
    </Layout>
);

// fetches data for access in Info component
Info.getInitialProps = async function (context) {
    const { name } = context.query; // access param value that was passed in index.js
    const res = await fetch(`https://restcountries.eu/rest/v2/name/${name}?fullText=true`)
    const data = await res.json();

    return {
        details: data
    }
}
export default Info;