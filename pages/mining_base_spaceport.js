import React, { Suspense, useRef, useState } from "react"
import Image from "next/image"
import Link from 'next/link'
import * as THREE from 'three'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'
import { Canvas } from "@react-three/fiber"
import { ContactShadows, Environment, useGLTF, OrbitControls, useAnimations } from "@react-three/drei"
import { proxy, useSnapshot } from "valtio"

const state = proxy({
    current: null,
})

export function Model(props) {
    const group = useRef()
    const { nodes, materials } = useGLTF('/mining_base_spaceport/scene.gltf')
    const [hovered, set] = useState(null)

    console.log(hovered)
    return (
        <group ref={group} {...props} dispose={null}
            //@ts-ignore
            onPointerOver={(e) => (e.stopPropagation(), set(e.object.material.name))}
            onPointerOut={(e) => e.intersections.length === 0 && set(null)}
            onPointerMissed={() => (state.current = null)}
            //@ts-ignore
            onPointerDown={(e) => (e.stopPropagation(), (state.current = e.object.material.name))}
        >
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

function Details() {

    const snap = useSnapshot(state)
    // return (
    //     <div className="text-2xl text-white">
    //         {snap.current}
    //     </div>
    // )
    if (snap.current === "Scene_-_Root") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center">
                <h1 className="text-3xl uppercase">Storage Tank</h1>
            </div>
        )
    }
    else {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center">
                <h1 className="text-2xl tracking-wider">Click on diffrent parts of Mining Base Spaceport to know more</h1>
                <p className="self-center mx-8 text-xl tracking-wide text-justify">To view the 3D model in AR, scan the QR code or click on the button below.</p>

                <div className="grid justify-center grid-cols-1 gap-2 pb-8 mx-8 md:grid-cols-2 lg:grid-cols-2">
                    <div className="flex p-6 text-6xl rounded-xl h-48 w-48">
                        <Image width="250" height="250" src="/3D_Model_QR_Code/Mining_base_spaceport.png" alt=""  className="rounded-xl"/>
                    </div>
                    <a href="/Mining_base_spaceport.html" target="_blank" rel="noreferrer">
                        <button className="h-12 px-8 ml-8 text-base font-semibold tracking-wider text-white border rounded-full shadow-sm mt-16 bg-red-50 bg-gradient-to-r from-secondary to-tertiary hover:shadow-lg">View in AR</button>
                    </a>
                </div>
            </div>
        )
    }
}

export default function Mining_base_spaceport() {
    return (
        <div className="pt-8 text-white">

            <div className="grid w-full place-items-center">
                <h1 className="pb-2 text-5xl font-semibold tracking-wide">
                    Mining Base Spaceport
                </h1>
                <div className="inline-flex mt-2 h-1 bg-secondary rounded-full w-72"></div>
                <div className="text-justify text-xl w-86 mt-2 mx-4 md:mx-44">This work is based on &quot;Mining Base Spaceport&quot; (https://sketchfab.com/3d-models/mining-base-spaceport-6283537511d54a4eb33ca6c7b7b64d74) by Binkley-Spacetrucker (https://sketchfab.com/Binkley-Piratepants) licensed under CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)</div>
            </div>

            <div className="md:grid md:grid-cols-3 md:pr-15 pr-1">

                <div className="w-full h-128 px-4 outline-none cursor-grab md:col-span-2 lg:block">
                    <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
                        <ambientLight intensity={0.7} />
                        <Suspense fallback={null}>
                            <Model scale={0.0001} />
                            <Environment preset="city" />
                        </Suspense>
                        <OrbitControls autoRotate addEventListener={undefined} hasEventListener={undefined} removeEventListener={undefined} dispatchEvent={undefined} />
                    </Canvas>
                </div>

                <div className="mt-56 md:mt-0 md:col-span-1 p-4">
                    <Details />
                </div>

            </div>

        </div>

    )
}
