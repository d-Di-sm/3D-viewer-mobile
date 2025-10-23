import { OrbitControls } from "@react-three/drei"
import { useRef } from "react"



const CameraControls = () => {

    const orbitControls = useRef()


    return (
        <>
            <OrbitControls ref={ orbitControls } makeDefault/>
        
        
        </>

    )



}

export default CameraControls





