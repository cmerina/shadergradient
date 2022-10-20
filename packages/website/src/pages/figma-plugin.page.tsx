import React, { useEffect } from 'react'

const FigmaPlugin: any = dynamic(
  () =>
    import('https://framer.com/m/Figma-Plugin-SHx3.js@71yuttd9o5OzeP8CMHd3'),
  { ssr: false }
)

import dynamic from 'next/dynamic'

const DOM = () => {
  useEffect(() => {
    window.React = React
  }, [])

  console.log('remove the gradient comp')

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
