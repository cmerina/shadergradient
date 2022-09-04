import React, { useEffect, useState } from 'react'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Gradient,
  Links,
  mainLoading,
  PRESETS,
  PresetTitles,
  PreviewBtn,
  PreviewWrapper,
  TextHover,
  useUIStore,
  useCursorStore,
  dToRArr,
  sleep,
} from 'shadergradient'

import styles from './Home.module.scss'
import { MobileSwiper } from '@/components/dom/MobileUI'
import { useTimer } from '@/hooks/useTimer'

// Dynamic import is ussed to prevent a payload when the website start that will include threejs r3f etc..
// WARNING ! errors might get obfuscated by using dynamic import.
// If something goes wrong go back to a static import to show the error.
// https://github.com/pmndrs/react-three-next/issues/49
// const Shader = dynamic(() => import('@/components/canvas/Shader/Shader'), {
//   ssr: false,
// })

// dom components goes here
const DOM = () => {
  const mode = useUIStore((state: any) => state.mode)
  const setMode = useUIStore((state: any) => state.setMode)
  const activePreset = useUIStore((state) => state.activePreset)
  const [isMobile, setIsMobile] = useState(null)

  const time = useTimer(true)

  // //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 641) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

  // create an event listener
  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    setMode('full')
  }, [])

  const textAnimationBase = 0.3
  const textAnimationGap = 0.15
  const textDuration = 0.35
  const textEase = 'easeInOut'

  if (time <= mainLoading.end) return <></>

  return (
    <>
      {isMobile && <MobileSwiper />}

      <PreviewWrapper />

      <div
        className={styles.contentWrapper}
        style={{ display: mode === 'full' ? 'flex' : 'none' }}
      >
        <div
          className={styles.content}
          style={{
            writingMode: isMobile === true ? 'vertical-rl' : null,
          }}
        >
          <div className={styles.presetTitleWrapper}>
            <PresetTitles
              isMobile={isMobile}
              fontSize={isMobile === true ? 70 : 120}
              arrowOn={isMobile === true ? false : true}
            />
          </div>

          <motion.div
            className={styles.paragraph}
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: textAnimationBase,
              duration: textDuration,
              ease: textEase,
            }}
            style={{
              color: PRESETS[activePreset].color,
              display: isMobile === false ? 'block' : 'none',
            }}
          >
            All visuals are created with ShaderGradient,
            <br /> a new way of creating beautiful, moving gradients. <br />
            {`It's made with lines of codes, so you can create your own with just
            a few clicks.`}
          </motion.div>
          <motion.div
            className={styles.customizeBtnWrapper}
            initial={{
              display: 'none',
              opacity: 0,
              y: 20,
            }}
            animate={{
              display: isMobile === false ? 'flex' : 'none',
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: textAnimationBase + textAnimationGap,
              duration: textDuration,
              ease: textEase,
            }}
          >
            <Link href='/customize'>
              <motion.div
                className={styles.customizeBtn}
                onMouseMove={() => {
                  useCursorStore.setState({ hover: 'button' })
                }}
                onMouseLeave={() => {
                  useCursorStore.setState({ hover: 'default' })
                }}
              >
                <TextHover
                  fontSize={isMobile === true ? 15 : 18}
                  color={PRESETS[activePreset].color}
                  content={'Create yours →'}
                  delay={0}
                  border
                />
              </motion.div>
            </Link>
          </motion.div>
          <motion.div
            style={{ position: 'absolute', bottom: 0 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: textAnimationBase + textAnimationGap * 2,
              duration: textDuration,
              ease: textEase,
            }}
          >
            {isMobile === false && <Links />}
          </motion.div>
        </div>
      </div>
      {isMobile === false && (
        <div className={styles.footer}>
          <PreviewBtn
            color={mode !== 'full' ? '#FF430A' : PRESETS[activePreset].color}
          />
        </div>
      )}
    </>
  )
}

// canvas components goes here
const R3F = () => {
  const afterStart = useTimer(
    true,
    (mainLoading.posDelay + mainLoading.posDur) * 1000
  )
  const c1 = 1.70158
  const c2 = c1 * 1.525
  const c3 = c1 + 1
  const c4 = (2 * Math.PI) / 3
  const c5 = (2 * Math.PI) / 4.5

  if (!afterStart)
    return (
      <Gradient
        // cDistance={3.6}
        cAzimuthAngle={180}
        cPolarAngle={90}
        dampingFactor={1} // default value 0.05, max 1
        rotSpringOption={({ rotation }) => ({
          to: async (next, cancel) => {
            await sleep(mainLoading.rotDelay)
            await next({ animatedRotation: dToRArr([30, 10, 40]) })
            await next({ animatedRotation: rotation })
          },
          from: { animatedRotation: dToRArr([0, 0, 0]) },
          config: {
            duration: mainLoading.rotDur * 1000,
            // friction: 15,
            // mass: 0.5,
            // https://github.com/pmndrs/react-spring/blob/master/packages/core/src/constants.ts
            easing: (x) =>
              x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2, //cubic in out
          },
        })}
        posSpringOption={({ position }) => ({
          to: async (next, cancel) => {
            await sleep(mainLoading.posDelay)
            await next({ animatedPosition: position })
          },
          from: { animatedPosition: [0, 0, 15] },
          config: {
            duration: mainLoading.posDur * 1000,
            // friction: 2,
            // mass: 0.1,
            // https://github.com/pmndrs/react-spring/blob/master/packages/core/src/constants.ts
            easing: (x) =>
              x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2, //cubic in out
          },
        })}
      />
    )
  return <Gradient control='query' dampingFactor={0.03} />
}

const Page = () => {
  return (
    <>
      <DOM />
      {/* @ts-ignore */}
      <R3F r3f />
    </>
  )
}

export default Page

export async function getStaticProps() {
  return {
    props: {
      title: 'Index',
    },
  }
}
