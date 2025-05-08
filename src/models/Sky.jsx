import React from 'react'
import skyScene from '../assets/3d/sky.glb';
import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

function Sky({isRotating}) {
  const sky = useGLTF(skyScene);

  //referencing the sky object to change its position and rotation
  const skyRef = useRef();

  useFrame((_, delta) => {
    if(isRotating) {
      skyRef.current.rotation.y += 0.15 * delta; // Adjust the rotation speed as needed
    }
  })
  return (
   <mesh ref={skyRef}>
     <primitive object={sky.scene}/>
   </mesh>
  )
}

export default Sky