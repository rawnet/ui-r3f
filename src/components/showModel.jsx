import React, { Suspense } from 'react';
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber"
import Model from './Yoda'

function ShowModel(props) {

  return (
    <div style = {{height:"100vh", backgroundColor:"#000"}}>
      <Canvas camera={{position: [30, 30, 30], fov: 17 }}>
        <pointLight position={[10, 10, 10]} intensity={1.3} />
        <Suspense fallback={null}>
          <Model/>
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default ShowModel