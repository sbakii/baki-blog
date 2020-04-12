import Layout from '../../components/layout'
import Head from 'next/head'
import unfetch from 'isomorphic-unfetch'


function CharacterDetail({character}) {
    return(
         <Layout>

        <Head>
            <title>Ana Sayfa</title>
        </Head>
       
        <div>{hello}</div>
        <div>{character.name}</div>
      
    </Layout>
    )
}
export async function getStaticPaths() {
    const data = await unfetch('https://rickandmortyapi.com/api/character/')
    const characters = await data.json()
    return {
    
    paths: characters.results.map(character => {
        return {params: { id: 'character.id' }}
        
    }),
    
    fallback: false
  };
}
export async function getStaticProps(params) {
    //datafetch
    const data = await unfetch('https://rickandmortyapi.com/api/character/'+ params.id)
    const character = await data.json()
  
    return {
      props: {
          character 
      }, 
    }
  }
export default CharacterDetail