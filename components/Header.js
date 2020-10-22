import NextLink from 'next/link';


const Header = () => (
    <div>
        <NextLink href='/'>
            <a id='home-boton'>Home</a>
        </NextLink>
    <style jsx>{`
        div {
            margin-top: 20px;
        }
        #home-boton {
            font-size: 40px;
            font-weight: 900;
            text-decoration: none;
            color: black;
            background-color: rgb(179, 179, 204);
            padding-left: 15px;
            padding-right: 15px;
            border-radius: 10px;
        }
        #home-boton:hover {
            color: white;
            background-color: black;
            padding-left: 15px;
            padding-right: 15px;
            border-radius: 10px;
        }
    `}</style>
    </div>
)

export default Header;