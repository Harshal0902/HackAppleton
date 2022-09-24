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
    const { nodes, materials } = useGLTF('/space_station_asteroid_mining_facility/scene.gltf')
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
                <group rotation={[Math.PI / 2, 0, 0]}>
                    <group position={[-211.83, 24.26, 132.1]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={[0.77, 0.77, 0.31]}>
                        <mesh geometry={nodes.MaterialFBXASC032FBXASC0352142150880.geometry} material={materials.MaterialFBXASC032FBXASC0352142150880} />
                        <mesh geometry={nodes['SG-Gold-glow_ncl1_1'].geometry} material={materials['SG-Gold-glow_ncl1_1']} />
                    </group>
                    <group position={[-224.93, 91.34, 179.52]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={[0.32, 0.32, 0.43]}>
                        <mesh geometry={nodes.MaterialFBXASC032FBXASC0352142150880_1.geometry} material={materials.MaterialFBXASC032FBXASC0352142150880} />
                        <mesh geometry={nodes['SG-Gold-glow_ncl1_1_1'].geometry} material={materials['SG-Gold-glow_ncl1_1']} />
                    </group>
                    <group position={[-244.4, 91.34, 179.52]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={[0.32, 0.32, 0.43]}>
                        <mesh geometry={nodes.MaterialFBXASC032FBXASC0352142150880_2.geometry} material={materials.MaterialFBXASC032FBXASC0352142150880} />
                        <mesh geometry={nodes['SG-Gold-glow_ncl1_1_2'].geometry} material={materials['SG-Gold-glow_ncl1_1']} />
                    </group>
                    <group position={[-254.53, 91.34, 161.53]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={[0.32, 0.32, 0.43]}>
                        <mesh geometry={nodes.MaterialFBXASC032FBXASC0352142150880_3.geometry} material={materials.MaterialFBXASC032FBXASC0352142150880} />
                        <mesh geometry={nodes['SG-Gold-glow_ncl1_1_3'].geometry} material={materials['SG-Gold-glow_ncl1_1']} />
                    </group>
                    <group position={[-214.94, 91.34, 161.53]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={[0.32, 0.32, 0.43]}>
                        <mesh geometry={nodes.MaterialFBXASC032FBXASC0352142150880_4.geometry} material={materials.MaterialFBXASC032FBXASC0352142150880} />
                        <mesh geometry={nodes['SG-Gold-glow_ncl1_1_4'].geometry} material={materials['SG-Gold-glow_ncl1_1']} />
                    </group>
                    <group position={[-195.15, 91.34, 161.53]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={[0.32, 0.32, 0.43]}>
                        <mesh geometry={nodes.MaterialFBXASC032FBXASC0352142150880_5.geometry} material={materials.MaterialFBXASC032FBXASC0352142150880} />
                        <mesh geometry={nodes['SG-Gold-glow_ncl1_1_5'].geometry} material={materials['SG-Gold-glow_ncl1_1']} />
                    </group>
                    <group position={[-211.91, 46.97, 201.3]}>
                        <mesh geometry={nodes.MaterialFBXASC032FBXASC0352142150880_6.geometry} material={materials.MaterialFBXASC032FBXASC0352142150880} />
                        <mesh geometry={nodes['SG-Gold-glow_ncl1_1_6'].geometry} material={materials['SG-Gold-glow_ncl1_1']} />
                    </group>
                    <group position={[9.14, -20.84, 57.18]} rotation={[-Math.PI, Math.PI / 9, -Math.PI / 2]} scale={1.74}>
                        <mesh geometry={nodes.MaterialFBXASC032FBXASC0352142150880_7.geometry} material={materials.MaterialFBXASC032FBXASC0352142150880} />
                    </group>
                    <group position={[-126.09, 0, 137.2]} rotation={[-Math.PI / 2, -Math.PI / 2, 0]} scale={1.74}>
                        <mesh geometry={nodes.MaterialFBXASC032FBXASC0352142150880_8.geometry} material={materials.MaterialFBXASC032FBXASC0352142150880} />
                    </group>
                    <group position={[-267.7, 35.92, 88.44]} rotation={[-Math.PI / 2, 0, 0]} scale={[1.93, 1.93, 3.7]}>
                        <mesh geometry={nodes.MaterialFBXASC032FBXASC0352142150880_9.geometry} material={materials.MaterialFBXASC032FBXASC0352142150880} />
                    </group>
                    <group position={[-219.44, 21.29, 129.19]} rotation={[-Math.PI / 2, 0, -1.88]} scale={[0.4, 0.52, 0.42]}>
                        <mesh geometry={nodes.MaterialFBXASC032FBXASC0352142150779.geometry} material={materials.MaterialFBXASC032FBXASC0352142150779} />
                    </group>
                    <group position={[-261.59, 23.62, 166.49]} rotation={[Math.PI / 2, 0, 2.18]} scale={[-1.51, 1.51, 1.51]}>
                        <mesh geometry={nodes.MaterialFBXASC032FBXASC0352142150880_10.geometry} material={materials.MaterialFBXASC032FBXASC0352142150880} />
                    </group>
                    <group position={[-270.05, 23.69, 166.38]} rotation={[-Math.PI / 2, 0, 0.44]} scale={[1.04, 1.51, 1.51]}>
                        <mesh geometry={nodes.MaterialFBXASC032FBXASC0352142150880_ncl1_1.geometry} material={materials.MaterialFBXASC032FBXASC0352142150880_ncl1_1} />
                        <mesh geometry={nodes['SG-LightW'].geometry} material={materials['SG-LightW']} />
                        <mesh geometry={nodes.ORDNUNGSKRAFTFBXASC032Graviton.geometry} material={materials.ORDNUNGSKRAFTFBXASC032Graviton} />
                    </group>
                    <group position={[-192.63, 82.17, 71.02]} rotation={[-Math.PI / 2, 0, 0.87]} scale={[-0.11, 0.11, 0.11]}>
                        <mesh geometry={nodes.MaterialFBXASC032FBXASC0352142150880_ncl1_1_1.geometry} material={materials.MaterialFBXASC032FBXASC0352142150880_ncl1_1} />
                        <mesh geometry={nodes.MaterialFBXASC032FBXASC0352142150880_ncl1_1_2.geometry} material={materials.MaterialFBXASC032FBXASC0352142150880_ncl1_1} />
                        <mesh geometry={nodes.MaterialFBXASC032FBXASC0352142150880_ncl1_1_3.geometry} material={materials.MaterialFBXASC032FBXASC0352142150880_ncl1_1} />
                        <mesh geometry={nodes.MaterialFBXASC032FBXASC0352142150880_ncl1_1_4.geometry} material={materials.MaterialFBXASC032FBXASC0352142150880_ncl1_1} />
                        <mesh geometry={nodes.MaterialFBXASC032FBXASC0352142150880_ncl1_1_5.geometry} material={materials.MaterialFBXASC032FBXASC0352142150880_ncl1_1} />
                        <mesh geometry={nodes.MaterialFBXASC032FBXASC0352142150880_ncl1_1_6.geometry} material={materials.MaterialFBXASC032FBXASC0352142150880_ncl1_1} />
                        <mesh geometry={nodes['SG-LightW_1'].geometry} material={materials['SG-LightW']} />
                        <mesh geometry={nodes['SG-Gold-glow'].geometry} material={materials['SG-Gold-glow']} />
                        <mesh geometry={nodes['SG-Window'].geometry} material={materials['SG-Window']} />
                        <mesh geometry={nodes.ORDNUNGSKRAFTFBXASC032Graviton_1.geometry} material={materials.ORDNUNGSKRAFTFBXASC032Graviton} />
                    </group>
                    <group position={[54.04, 35.93, 4.76]} rotation={[-Math.PI / 2, 0, 1.13]} scale={[0.44, 0.67, 2.18]}>
                        <mesh geometry={nodes.MaterialFBXASC032FBXASC0352142150880_ncl1_1_7.geometry} material={materials.MaterialFBXASC032FBXASC0352142150880_ncl1_1} />
                        <mesh geometry={nodes['SG-Window_1'].geometry} material={materials['SG-Window']} />
                    </group>
                    <group position={[-9.9, 2.05, 64.91]} rotation={[Math.PI / 2, 0, -Math.PI / 6]} scale={[-1.33, 1.33, 1.33]}>
                        <mesh geometry={nodes.MaterialFBXASC032FBXASC0352142150880_11.geometry} material={materials.MaterialFBXASC032FBXASC0352142150880} />
                    </group>
                    <group position={[-11.97, -0.4, 20.2]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={[2.56, 2.56, 2.89]}>
                        <mesh geometry={nodes.MaterialFBXASC032FBXASC0352142150880_12.geometry} material={materials.MaterialFBXASC032FBXASC0352142150880} />
                    </group>
                    <group position={[-3.2, 2.11, 68.13]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={[0.91, 1.33, 1.33]}>
                        <mesh geometry={nodes.MaterialFBXASC032FBXASC0352142150880_ncl1_1_8.geometry} material={materials.MaterialFBXASC032FBXASC0352142150880_ncl1_1} />
                        <mesh geometry={nodes['SG-LightW_2'].geometry} material={materials['SG-LightW']} />
                        <mesh geometry={nodes.ORDNUNGSKRAFTFBXASC032Graviton_2.geometry} material={materials.ORDNUNGSKRAFTFBXASC032Graviton} />
                    </group>
                    <group position={[19.42, 83.01, -48.28]} rotation={[0, 0, Math.PI / 2]} scale={[0.37, 0.73, 0.73]}>
                        <mesh geometry={nodes.MaterialFBXASC032FBXASC0352142150880_ncl1_1_9.geometry} material={materials.MaterialFBXASC032FBXASC0352142150880_ncl1_1} />
                        <mesh geometry={nodes.ORDNUNGSKRAFTFBXASC032Graviton_3.geometry} material={materials.ORDNUNGSKRAFTFBXASC032Graviton} />
                    </group>
                    <group position={[69.92, 0.01, 3.67]} rotation={[-Math.PI / 2, 0, 0]} scale={[1.93, 1.93, 2.18]}>
                        <mesh geometry={nodes.MaterialFBXASC032FBXASC0352142150880_13.geometry} material={materials.MaterialFBXASC032FBXASC0352142150880} />
                    </group>
                    <group position={[70.4, 28.85, -38.92]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.71, 0.64, 0.51]}>
                        <mesh geometry={nodes.MaterialFBXASC032FBXASC0352142150880_ncl1_1_10.geometry} material={materials.MaterialFBXASC032FBXASC0352142150880_ncl1_1} />
                        <mesh geometry={nodes.Window.geometry} material={materials.Window} />
                    </group>
                    <group position={[38.16, 35.93, 22.37]} rotation={[-Math.PI / 2, 0, 0.61]} scale={[0.44, 0.67, 2.18]}>
                        <mesh geometry={nodes.MaterialFBXASC032FBXASC0352142150880_ncl1_1_11.geometry} material={materials.MaterialFBXASC032FBXASC0352142150880_ncl1_1} />
                        <mesh geometry={nodes['SG-Window_2'].geometry} material={materials['SG-Window']} />
                    </group>
                    <group position={[81.94, 8.15, -40.02]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={[0.44, 0.67, 2.18]}>
                        <mesh geometry={nodes.MaterialFBXASC032FBXASC0352142150880_ncl1_1_12.geometry} material={materials.MaterialFBXASC032FBXASC0352142150880_ncl1_1} />
                        <mesh geometry={nodes['SG-Window_3'].geometry} material={materials['SG-Window']} />
                    </group>
                    <group position={[49.79, 42.12, -51.77]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={[0.95, 1.39, 1.39]}>
                        <mesh geometry={nodes.MaterialFBXASC032FBXASC0352142150880_14.geometry} material={materials.MaterialFBXASC032FBXASC0352142150880} />
                    </group>
                    <group position={[20.17, 52.75, -60.66]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={[-0.12, 0.12, 0.12]}>
                        <mesh geometry={nodes.MaterialFBXASC032FBXASC0352142150880_ncl1_1_13.geometry} material={materials.MaterialFBXASC032FBXASC0352142150880_ncl1_1} />
                        <mesh geometry={nodes.MaterialFBXASC032FBXASC0352142150880_ncl1_1_14.geometry} material={materials.MaterialFBXASC032FBXASC0352142150880_ncl1_1} />
                        <mesh geometry={nodes.MaterialFBXASC032FBXASC0352142150880_ncl1_1_15.geometry} material={materials.MaterialFBXASC032FBXASC0352142150880_ncl1_1} />
                        <mesh geometry={nodes.MaterialFBXASC032FBXASC0352142150880_ncl1_1_16.geometry} material={materials.MaterialFBXASC032FBXASC0352142150880_ncl1_1} />
                        <mesh geometry={nodes.MaterialFBXASC032FBXASC0352142150880_ncl1_1_17.geometry} material={materials.MaterialFBXASC032FBXASC0352142150880_ncl1_1} />
                        <mesh geometry={nodes.MaterialFBXASC032FBXASC0352142150880_ncl1_1_18.geometry} material={materials.MaterialFBXASC032FBXASC0352142150880_ncl1_1} />
                        <mesh geometry={nodes['SG-LightW_3'].geometry} material={materials['SG-LightW']} />
                        <mesh geometry={nodes['SG-Gold-glow_1'].geometry} material={materials['SG-Gold-glow']} />
                        <mesh geometry={nodes['SG-Window_4'].geometry} material={materials['SG-Window']} />
                        <mesh geometry={nodes.ORDNUNGSKRAFTFBXASC032Graviton_4.geometry} material={materials.ORDNUNGSKRAFTFBXASC032Graviton} />
                    </group>
                    <group position={[84.41, 7.64, 9.18]} rotation={[0, 1.31, -Math.PI / 2]}>
                        <mesh geometry={nodes.MaterialFBXASC032FBXASC0352142150880_15.geometry} material={materials.MaterialFBXASC032FBXASC0352142150880} />
                    </group>
                    <group position={[84.41, -11.89, 9.18]} rotation={[0, 1.31, -Math.PI / 2]}>
                        <mesh geometry={nodes.MaterialFBXASC032FBXASC0352142150880_16.geometry} material={materials.MaterialFBXASC032FBXASC0352142150880} />
                    </group>
                    <group position={[84.41, -31.41, 9.18]} rotation={[0, 1.31, -Math.PI / 2]}>
                        <mesh geometry={nodes.MaterialFBXASC032FBXASC0352142150880_17.geometry} material={materials.MaterialFBXASC032FBXASC0352142150880} />
                    </group>
                    <group position={[81, -10.48, -13.05]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.38, 0.38, 0.88]}>
                        <mesh geometry={nodes.MaterialFBXASC032FBXASC0352142150880_18.geometry} material={materials.MaterialFBXASC032FBXASC0352142150880} />
                    </group>
                    <group position={[64.97, -10.48, 21]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.38, 0.38, 0.88]}>
                        <mesh geometry={nodes.MaterialFBXASC032FBXASC0352142150880_19.geometry} material={materials.MaterialFBXASC032FBXASC0352142150880} />
                    </group>
                    <group position={[-12.64, -16.47, 128.8]} rotation={[-0.12, 0.6, -1.36]} scale={[2.03, 1.02, 1.17]}>
                        <mesh geometry={nodes.MaterialFBXASC032FBXASC0352142150779_1.geometry} material={materials.MaterialFBXASC032FBXASC0352142150779} />
                    </group>
                    <group position={[21.41, 1.03, -23.1]} rotation={[-Math.PI / 2, 0, 0]}>
                        <mesh geometry={nodes.MaterialFBXASC032FBXASC0352142150779_2.geometry} material={materials.MaterialFBXASC032FBXASC0352142150779} />
                    </group>
                </group>
            </group>
        </group>
    )
}

function Details() {

    const snap = useSnapshot(state)
    if (snap.current === "MaterialFBXASC032FBXASC0352142150779") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center">
                <h1 className="text-3xl uppercase">Asteroid</h1>
            </div>
        )
    }
    else if (snap.current === "MaterialFBXASC032FBXASC0352142150880") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center">
                <h1 className="text-3xl uppercase">Rocket boosters</h1>
            </div>
        )
    }
    else if (snap.current === "MaterialFBXASC032FBXASC0352142150880_ncl1_1") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center">
                <h1 className="text-3xl uppercase">Command center</h1>
            </div>
        )
    }
    else {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center">
                <h1 className="text-2xl tracking-wider">Click on diffrent parts of Asteroid Mining Facility to know more</h1>
                <p className="self-center mx-8 text-xl tracking-wide text-justify">To view the 3D model in AR, scan the QR code or click on the button below.</p>

                <div className="grid justify-center grid-cols-1 gap-2 pb-8 mx-8 md:grid-cols-2 lg:grid-cols-2">
                    <div className="flex p-6 text-6xl rounded-xl h-48 w-48">
                        <Image width="250" height="250" src="/3D_Model_QR_Code/Laser_Mining_Drill.png" alt="" />
                    </div>
                    <a href="/asteroid_mining_facility.html" target="_blank" rel="noreferrer">
                        <button className="h-12 px-8 ml-8 text-base font-semibold tracking-wider text-white border rounded-full shadow-sm mt-16 bg-red-50 bg-gradient-to-r from-secondary to-tertiary hover:shadow-lg">View in AR</button>
                    </a>
                </div>
            </div>
        )
    }
}

export default function Space_station_asteroid_mining_facility() {
    return (
        <div className="pt-8 text-white">

            <div className="grid w-full place-items-center">
                <h1 className="pb-2 text-5xl font-semibold tracking-wide">
                    Asteroid Mining Facility
                </h1>
                <div className="inline-flex mt-2 h-1 bg-secondary rounded-full w-72"></div>
                <div className="text-justify text-xl w-86 mt-2 mx-4 md:mx-44">This work is based on "Space Station Asteroid Mining Facility" (https://sketchfab.com/3d-models/space-station-asteroid-mining-facility-be146cbcc43e4049ac0236e9e269877e) by Inditrion Dradnon (https://sketchfab.com/dradnon) licensed under CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)</div>
            </div>

            <div className="md:grid md:grid-cols-3 md:pr-15 pr-1">

                <div className="w-full h-128 px-4 outline-none cursor-grab md:col-span-2 lg:block">
                    <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
                        <ambientLight intensity={0.7} />
                        <Suspense fallback={null}>
                            <Model scale={0.007} />
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
