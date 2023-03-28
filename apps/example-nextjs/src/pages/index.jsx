import { Gradient } from 'shadergradient'

// Dom components go here
export default function Page(props) {
  return <></>
}

// Canvas components go here
// It will receive same props as the Page component (from getStaticProps, etc.)
Page.canvas = (props) => <Gradient cDistance={24} />

export async function getStaticProps() {
  return { props: { title: 'Index' } }
}