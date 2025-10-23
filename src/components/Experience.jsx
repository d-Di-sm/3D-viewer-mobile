import { useFrame } from '@react-three/fiber'
import { useHelper, Html, OrbitControls, Stage, Center, PivotControls } from '@react-three/drei'
import { useRef, useState } from 'react'
import { useControls } from 'leva'
import { Perf } from 'r3f-perf'
import * as THREE from 'three'


import CameraControls from "./CameraControls.jsx"
import Background from "./Background.jsx"
import LondonHouse from './Building/LondonHouse.jsx'
import N1 from './Building/N1.jsx'
import N2 from './Building/N2.jsx'
import N3 from './Building/N3.jsx'
import N4 from './Building/N4.jsx'
import N5 from './Building/N5.jsx'


const Experience = () => {

    const directionalLight = useRef()
    useHelper(directionalLight, THREE.DirectionalLightHelper, 1 )
    const cubeRef = useRef()
    const sphere = useRef()
    const groupRef = useRef()


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

        { perfVisible ? <Perf position="top-left"/> : null }

        {/* <CameraControls /> */}
        <OrbitControls makeDefault />

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


        <LondonHouse />

        <PivotControls
            anchor={[ 1, 0, 0 ]}
            depthTest={ false }
            lineWidth={ 4 }
            scale={ 100 }
            fixed={ true }
        >
        <N1 />
        </PivotControls>


        <PivotControls
            anchor={[ 1, 0, 0 ]}
            depthTest={ false }
            lineWidth={ 4 }
            scale={ 100 }
            fixed={ true }
        >
            <N2 />
        </PivotControls>


        <PivotControls
            anchor={[ 1, 0, 0 ]}
            depthTest={ false }
            lineWidth={ 4 }
            scale={ 100 }
            fixed={ true }
        >
        <N3 />
        </PivotControls>


        <PivotControls
            anchor={[ 1, 0, 0 ]}
            depthTest={ false }
            lineWidth={ 4 }
            scale={ 100 }
            fixed={ true }
        >
            <N4 />
        </PivotControls>


        <PivotControls
            anchor={[ 1, 0, 0 ]}
            depthTest={ false }
            lineWidth={ 4 }
            scale={ 100 }
            fixed={ true }
        >
            <N5 />
        </PivotControls>



        <mesh receiveShadow position={[ -10, .1, 10 ]} rotation-x={ - Math.PI * 0.5 } scale={ 40 }>
            <planeGeometry />
            <meshStandardMaterial color="ivory" />
        </mesh>


        </Center>




        {/* </Stage> */}


        
        </>
    )

}

export default Experience





