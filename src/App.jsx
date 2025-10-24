import { OrbitControls } from '@react-three/drei'
import './App.css'
import { Canvas } from '@react-three/fiber'
import { Leva } from 'leva'
import { useRef, useState, useEffect } from 'react'
import * as THREE from 'three'
import Experience from './components/Experience'
import Overlay from './components/Overlay'


function LogCameraAndTarget () {
  const controls = useRef()

  return <OrbitControls ref={ controls } makeDefault />
}





function App() {

  // Detectar si es móvil
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Configuración de cámara adaptativa
  const cameraConfig = isMobile 
    ? {
        fov: 60,
        near: 0.1,
        far: 200,
        position: [ 25, 15, -40 ] 
      }
    : {
        fov: 45,
        near: 0.1,
        far: 200,
        position: [ 15, 10, -30 ] 
      }

  return (
    <>

      <Leva collapsed hidden={ isMobile } />
      <Canvas
          dpr={ [ 1, 2 ] }
          gl={ {
              antialias: true,
              toneMapping: THREE.ACESFilmicToneMapping,
              outputColorSpace: THREE.SRGBColorSpace
          }}
          camera={ cameraConfig }
          shadows={{
            enabled: true,
            type: "VSMShadowMap"
          }}
      >

          {/* <LogCameraAndTarget /> */}

          <Experience isMobile={ isMobile } />

      </Canvas>

      <Overlay isMobile={ isMobile } />


    </>
  )
}

export default App
