
import React, { useRef, useEffect, useCallback } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import islandScene from '../assets/3d/island.glb'
import { a } from '@react-spring/three'

// Helper function to normalize rotation
const normalizeRotation = (rotation) =>
  ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI)

const Island = ({ isRotating, setIsRotating, setCurrentStage, ...props }) => {
  const islandRef = useRef()

  const previousStage = useRef(null)

  const { gl, viewport } = useThree()
  const { nodes, materials } = useGLTF(islandScene)

  const lastX = useRef(0)
  const rotationSpeed = useRef(0)
  const dampingFactor = 0.95;

  // Pointer Handlers
  const handlePointerDown = useCallback((e) => {
    e.stopPropagation()
    e.preventDefault()
    setIsRotating(true)

    const clientX = e.touches ? e.touches[0].clientX : e.clientX
    lastX.current = clientX
  }, [setIsRotating])

  const handlePointerUp = useCallback((e) => {
    e.stopPropagation()
    e.preventDefault()
    setIsRotating(false)
  }, [setIsRotating])

  const handlePointerMove = useCallback(
    (e) => {
      if (!isRotating || !islandRef.current) return

      e.stopPropagation()
      e.preventDefault()

      const clientX = e.touches ? e.touches[0].clientX : e.clientX
      const delta = (clientX - lastX.current) / viewport.width

      islandRef.current.rotation.y += delta * 0.01 * Math.PI
      lastX.current = clientX

      rotationSpeed.current = delta * 0.01 * Math.PI
    },
    [isRotating, viewport.width]
  )

  // Keyboard Handlers
  const handleKeyDown = useCallback((e) => {
    if (!islandRef.current) return

    if (e.key === 'ArrowLeft') {
      if (!isRotating) setIsRotating(true)
      islandRef.current.rotation.y += 0.01 * Math.PI
    } else if (e.key === 'ArrowRight') {
      if (!isRotating) setIsRotating(true)
      islandRef.current.rotation.y -= 0.01 * Math.PI
    }
  }, [isRotating, setIsRotating])

  const handleKeyUp = useCallback((e) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      setIsRotating(false)
    }
  }, [setIsRotating])

  useFrame(() => {
    if (!islandRef.current) return

    if (!isRotating) {
      rotationSpeed.current *= dampingFactor

      if (Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0
      }

      islandRef.current.rotation.y += rotationSpeed.current
    } else {
      const normalizedRotation = normalizeRotation(islandRef.current.rotation.y)

      // Set the current stage based on the island's orientation
          const stageAngles = [
      { stage: 1, angle: 4.5 },
      { stage: 2, angle: 2.5 },
      { stage: 3, angle: 1.1 },
      { stage: 4, angle: 5.65 }
    ];

    let closestStage = null;
    let smallestDiff = Infinity;
    const threshold = 0.5;

    for (const { stage, angle } of stageAngles) {
      const diff = Math.abs(normalizedRotation - angle);
      if (diff < smallestDiff) {
        smallestDiff = diff;
        closestStage = stage;
      }
    }

    if (smallestDiff < threshold) {
      if (previousStage.current !== closestStage) {
        setCurrentStage(closestStage);
        previousStage.current = closestStage;
      }
    } else {
      if (previousStage.current !== null) {
        setCurrentStage(null);
        previousStage.current = null;
      }
    }

    }
  })

  useEffect(() => {
    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('pointerup', handlePointerUp)
    document.addEventListener('pointermove', handlePointerMove)
    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('keyup', handleKeyUp)

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('pointerup', handlePointerUp)
      document.removeEventListener('pointermove', handlePointerMove)
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('keyup', handleKeyUp)
    }
  }, [
    handlePointerDown,
    handlePointerUp,
    handlePointerMove,
    handleKeyDown,
    handleKeyUp
  ])

  if (!nodes || !materials) return null

  return (
    <a.group ref={islandRef} {...props} dispose={null}>
      <mesh geometry={nodes.polySurface944_tree_body_0.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.polySurface945_tree1_0.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.polySurface946_tree2_0.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.polySurface947_tree1_0.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.polySurface948_tree_body_0.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.polySurface949_tree_body_0.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.pCube11_rocks1_0.geometry} material={materials.PaletteMaterial001} />
    </a.group>
  )
}

useGLTF.preload(islandScene)

export default Island
