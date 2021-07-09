import Head from 'next/head'
import http from '../http.ts'

const Home = ({routes}) => {
  return (
    
    <div>
      <Head>
        <title>Routes</title>
      </Head>
      <div style={{marginLeft:20}}>
      <h1>Rotas</h1>
      {
        routes.map((route, key) => (
          <div key={key}>
            <h3 style={{marginLeft:10}}>Título: {route.title} </h3>
            <p style={{marginLeft:20}}>Latitude: {route.startPosition}</p>
            <p style={{marginLeft:20}}>Longitude: {route.endPosition}</p>
          </div>
        ))
      }
      </div>
    </div>
  )

}

export default Home;

export const getServerSideProps = async (context) => {
  const { data: routes } = await http.get("routes");
  console.log(process.env.API_BASE_URL);
  return {
    props: {
      routes,
    },
  };
};
