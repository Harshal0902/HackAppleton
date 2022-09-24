/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Binkley-Spacetrucker (https://sketchfab.com/Binkley-Piratepants)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/mining-base-spaceport-6283537511d54a4eb33ca6c7b7b64d74
title: Mining Base Spaceport
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials['Scene_-_Root']} />
        <mesh geometry={nodes.Object_3.geometry} material={materials['Scene_-_Root']} />
        <mesh geometry={nodes.Object_4.geometry} material={materials['Scene_-_Root']} />
        <mesh geometry={nodes.Object_5.geometry} material={materials['Scene_-_Root']} />
        <mesh geometry={nodes.Object_6.geometry} material={materials['Scene_-_Root']} />
        <mesh geometry={nodes.Object_7.geometry} material={materials['Scene_-_Root']} />
        <mesh geometry={nodes.Object_8.geometry} material={materials['Scene_-_Root']} />
        <mesh geometry={nodes.Object_9.geometry} material={materials['Scene_-_Root']} />
        <mesh geometry={nodes.Object_10.geometry} material={materials['Scene_-_Root']} />
        <mesh geometry={nodes.Object_11.geometry} material={materials['Scene_-_Root']} />
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')