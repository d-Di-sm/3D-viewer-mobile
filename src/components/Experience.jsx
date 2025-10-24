import { useFrame } from '@react-three/fiber'
import { useHelper, Html, OrbitControls, Stage, Center, PivotControls, useGLTF } from '@react-three/drei'
import { useRef, useState } from 'react'
import { useControls } from 'leva'
import { Perf } from 'r3f-perf'
import * as THREE from 'three'


import CameraControls from "./CameraControls.jsx"
import Background from "./Background.jsx"
import N1 from './Building/N1_F.jsx'
import N2 from './Building/N2_F.jsx'
import N3 from './Building/N3_F.jsx'
import N4 from './Building/N4_F.jsx'
import N5 from './Building/N5_F.jsx'
import PB from './Building/PB_F.jsx'


const Experience = ({ isMobile }) => {

    const directionalLight = useRef()
    useHelper(directionalLight, THREE.DirectionalLightHelper, 1 )
    const cubeRef = useRef()
    const sphere = useRef()
    const groupRef = useRef()

    const { nodes } = useGLTF('./models/Prueba10.glb')

    /**
     * Animations
     */

    // useFrame((state, delta) =>
    // {
    //     // const angle = state.clock.elapsedTime
    //     // state.camera.position.x = Math.sin(angle) * 8
    //     // state.camera.position.z = Math.cos(angle) * 8
    //     // state.camera.lookAt(0,0,0) 

    //     cubeRef.current.rotation.y += delta
    // })


    /**
     * Leva controls
     */

    const { perfVisible } = useControls('Perf', {
        perfVisible: true
    })

    const { position, color, visible, choice, envMapIntensity } = useControls('performance',{
        position:
        {
            value: { x: 0, y: 0 },
            step: 0.01,
            joystick: 'invertY'
        },
        color: '#ff0000',
        visible: true,
        choice: { options: [ "a", "b", "c" ] },
        envMapIntensity:
            {
                value:1, 
                min:0, 
                max: 12
            }
    })



    return (
        <>

        { perfVisible && !isMobile ? <Perf position="top-left"/> : null }

        {/* <CameraControls /> */}
        <OrbitControls 
            makeDefault 
            enableDamping={ true }
            dampingFactor={ 0.05 }
            minDistance={ isMobile ? 20 : 10 }
            maxDistance={ isMobile ? 80 : 100 }
            maxPolarAngle={ Math.PI / 2.2 }
            touchAction="pan-y"
        />

        <Background />

        <directionalLight 
            castShadow 
            ref={ directionalLight } 
            position={ [ 10, 10, 15 ] } 
            intensity={ 4.5 }
            shadow-mapSize={ [ 4096, 4096 ] }
            shadow-bias={ -0.005 }
            shadow-camera-near={ .1 }
            shadow-camera-far={ 200 }
            shadow-camera-left={ -100 }
            shadow-camera-right={ 100 }
            shadow-camera-top={ 100 }
            shadow-camera-bottom={ -100 } 
        />
        {/* <ambientLight intensity={ 1.5 } /> */}



        {/* <Stage
            shadows={{
                type: 'contact',
                opacity: 0.9,
                blur: 1
            }}
            environment="sunset"
            preset="portrait"
            intensity={ envMapIntensity }
        > */}


        {/* <group ref= { groupRef }>
            
            <mesh ref={ sphere }  position-x={ - 2 }>
                <sphereGeometry />
                <meshStandardMaterial  color="orange" />
                <Html 
                    position={ [ 1, 1, 0 ] }
                    wrapperClass='label'
                    center
                    distanceFactor={ 6 }
                    occlude={ [ sphere, cubeRef ] }
                >
                    Test
                </Html>
            </mesh>

            <mesh ref={ cubeRef } position-x={ 2 } scale={ 1.5 }>
                <boxGeometry />
                <meshStandardMaterial color="mediumpurple" />
            </mesh>

            <mesh receiveShadow position-y={ - 1.2 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
                <planeGeometry />
                <meshStandardMaterial color="green" />
            </mesh>
        </group> */}

        <Center>


        <PB />

        {/* PivotControls con escala adaptativa para móviles */}
        <PivotControls
            anchor={[ 1, 0, 0 ]}
            depthTest={ false }
            lineWidth={ isMobile ? 2 : 4 }
            scale={ isMobile ? 50 : 100 }
            fixed={ true }
        >
        <N1 />
        </PivotControls>


        <PivotControls
            anchor={[ 1, 0, 0 ]}
            depthTest={ false }
            lineWidth={ isMobile ? 2 : 4 }
            scale={ isMobile ? 50 : 100 }
            fixed={ true }
        >
            <N2 />
        </PivotControls>


        <PivotControls
            anchor={[ 1, 0, 0 ]}
            depthTest={ false }
            lineWidth={ isMobile ? 2 : 4 }
            scale={ isMobile ? 50 : 100 }
            fixed={ true }
        >
        <N3 />
        </PivotControls>


        <PivotControls
            anchor={[ 1, 0, 0 ]}
            depthTest={ false }
            lineWidth={ isMobile ? 2 : 4 }
            scale={ isMobile ? 50 : 100 }
            fixed={ true }
        >
            <N4 />
        </PivotControls>


        <PivotControls
            anchor={[ 1, 0, 0 ]}
            depthTest={ false }
            lineWidth={ isMobile ? 2 : 4 }
            scale={ isMobile ? 50 : 100 }
            fixed={ true }
        >
            <N5 />
        </PivotControls>


        {/* <PB /> */}

        <mesh castShadow receiveShadow position={[ -10, 1, 0 ]}  scale={ 2 } >
            <boxGeometry  />
            <meshStandardMaterial color="#ffffff" side={THREE.DoubleSide} />
        </mesh>

        <mesh castShadow position={[ -10, 3, 2 ]}  scale={ 2 } >
            <boxGeometry  />
            <meshStandardMaterial color="#ffffff" side={THREE.DoubleSide} />
        </mesh>

        

        {/* <mesh castShadow receiveShadow geometry={ nodes.Cube1.geometry} position={ nodes.Cube1.position } position-y={ 3 } >
            <meshStandardMaterial { ...nodes.Cube1.material } color="#ffffff" side={THREE.DoubleSide}/>
        </mesh>

        <mesh castShadow receiveShadow geometry={ nodes.Cube2.geometry} position={ nodes.Cube2.position }>
            <meshStandardMaterial { ...nodes.Cube2.material } color="#ff0000" side={THREE.DoubleSide}/>
        </mesh> */}


        <mesh receiveShadow position={[ -7.5, 0, 15 ]} rotation-x={ - Math.PI * 0.5 } scale={ 50 }>
            <planeGeometry />
            <meshStandardMaterial color="#ffffe5" />
        </mesh>


        </Center>




        {/* </Stage> */}


        
        </>
    )

}

export default Experience





