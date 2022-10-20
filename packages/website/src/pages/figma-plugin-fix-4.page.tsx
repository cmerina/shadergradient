import React, { useEffect } from 'react'

const FigmaPlugin: any = dynamic(
  () =>
    import('https://framer.com/m/Figma-Plugin-SHx3.js@zETP63MWCZhIab6pFijX'),
  { ssr: false }
)

import dynamic from 'next/dynamic'

const DOM = () => {
  useEffect(() => {
    window.React = React
  }, [])

  console.log('no url input comp')

  return <FigmaPlugin style={{ width: '100%', height: '100%' }} />
}

const Page = () => {
  return (
    <>
      <DOM />
    </>
  )
}

export default Page

export async function getStaticProps() {
  return {
    props: {
      title: 'Shader Gradient ─ Figma Plugin',
    },
  }
}
