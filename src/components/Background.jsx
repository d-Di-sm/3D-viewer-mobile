import { Environment } from "@react-three/drei"

const Background = () => {

    return(
        <>

        <Environment  preset="sunset" background blur={ 1 } environmentIntensity={ 0.8 } />

        </>

    )



}


export default Background


