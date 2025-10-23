import { OrbitControls } from '@react-three/drei'
import './App.css'
import { Canvas } from '@react-three/fiber'
import { Leva } from 'leva'
import { useRef } from 'react'
import * as THREE from 'three'
import Experience from './components/Experience'
import Overlay from './components/Overlay'


function LogCameraAndTarget () {
  const controls = useRef()

  return <OrbitControls ref={ controls } makeDefault />
}





function App() {

  return (
    <>

      <Leva collapsed />
      <Canvas
          dpr={ [ 1, 2 ] }
          gl={ {
              antialias: true,
              toneMapping: THREE.ACESFilmicToneMapping,
              outputColorSpace: THREE.SRGBColorSpace
          }}
          camera={ {
              fov: 45,
              near: 0.1,
              far: 200,
              position: [ 20, 5, -35 ] 
          } }
          shadows={{
            enabled: true,
            type: "VSMShadowMap"
          }}
      >

          {/* <LogCameraAndTarget /> */}

          <Experience />

      </Canvas>

      <Overlay />


    </>
  )
}

export default App
