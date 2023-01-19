import React, {useEffect, useState } from "react"
import styles from './LoadingScreen.module.sass'
import anime from 'animejs'
import {InfinitySpin} from 'react-loader-spinner'

export default function LoadingScreen() {
  let [count, setCounter] = useState(0)
  let [loaded, setLoadStatus] = useState(false)
  let [fullyLoaded, setFullLoadStatus] = useState(false)

  const loadingScreenRef = React.createRef<HTMLDivElement>();
  const loadingLineRef = React.createRef<HTMLDivElement>();
  const loadingScreenLayoutRef = React.createRef<HTMLDivElement>();

  useEffect(() => {
     const to = setTimeout(() => {
       if(count < 100){
         setCounter(count + 1)
       } else{
         setLoadStatus(true)
       }
      }, 10)
      return () => {
        clearTimeout(to)
      }
  }, [count])

  useEffect(() => {
    const line = anime.timeline({
      targets: loadingLineRef.current,
      duration: 100
    })

    line.add({
      width: `${count}%`
    })
    if(loaded){
      const layout = anime.timeline({
        targets: loadingScreenLayoutRef.current,
        easing: 'easeInOutSine',
        duration: 1000,
      })

      layout.add({
        opacity: [1, 0],
        visibility: 'hidden'
      })
      const tl = anime.timeline({
        targets: loadingScreenRef.current,
        easing: 'easeInOutSine',
        duration: 1000,
        delay: 1000
      })
  
      tl.add({
        opacity: [1, 0]
      })
    }
    setTimeout(() => {
      setFullLoadStatus(true)
    }, 4000)
  })

  return (
    <>
      <div className={`${styles.loadingScreen}`} style={fullyLoaded ? {display: 'none'} : {display: 'grid'}}>
        <div className={`${styles.loadingScreenCircle}`} ref={loadingScreenRef}></div>
          <div className={`${styles.loadingScreenContainer}`} ref={loadingScreenLayoutRef}>
              <div className={`${styles.loadingMainText}`}>
                <div className={`${styles.loadingMainImage}`}>
                  <img src={'/kbploading.png'}></img>
                </div>
              </div>
              <div className={`${styles.loadingBottom}`}>
                <p></p>
                <InfinitySpin width='200' color='#000'/>
              </div>
          </div>
      </div>
    </>
  )
}
