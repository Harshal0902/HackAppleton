import { Suspense } from "react"
import Image from "next/image"
import { Canvas, useLoader } from "@react-three/fiber"
import { Environment, OrbitControls } from "@react-three/drei"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

const Model = () => {
    const gltf = useLoader(GLTFLoader, "/laser_mining_drill/scene.gltf");
    return (
        <>
            <primitive object={gltf.scene} scale={0.45} />
        </>
    );
};

export default function Laser_mining_drill() {
    return (
        <div className="text-white">
            <div className="grid w-full py-10 place-items-center">
                <h1 className="pb-2 text-5xl font-semibold tracking-wide">
                    Laser Mining Drill
                </h1>
                <div className="inline-flex mt-2 h-1 bg-secondary rounded-full w-72"></div>
                <div className="text-justify text-2xl w-86 mt-2 mx-4 md:mx-44">The Laser Drill being used to mine Stone Slabs. It produces a drill beam that extends up to 11 tiles in length. The drill can be of length upto 36m. These are automated drills and once launcehed they can be used to extract various minerals. This work is based on "Laser mining drill" (https://sketchfab.com/3d-models/laser-mining-drill-d784429311824407afa097338ca06ffe) by Homewarriors (https://sketchfab.com/Homewarriors) licensed under CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)</div>
            </div>

            <div className="md:grid md:grid-cols-3 md:pr-15 pr-1">

                <div className="w-full h-128 px-4 outline-none cursor-grab md:col-span-2 lg:block">
                    <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
                        <ambientLight intensity={0.7} />
                        <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
                        <Suspense fallback={null}>
                            <Model scale={0.0015} />
                            <Environment preset="city" />
                        </Suspense>
                        <OrbitControls autoRotate addEventListener={undefined} hasEventListener={undefined} removeEventListener={undefined} dispatchEvent={undefined} />
                    </Canvas>
                </div>

                <div className="mt-56 md:mt-0 md:col-span-1 p-4">
                    <div className="h-full md:flex md:flex-col md:justify-center">
                        <p className="self-center mx-8 text-xl tracking-wide text-justify">To view the 3D model in AR, scan the QR code or click on the button below.</p>

                        <div className="grid justify-center grid-cols-1 gap-2 pb-8 mx-8 md:grid-cols-2 lg:grid-cols-2">
                            <div className="flex p-6 text-6xl rounded-xl">
                                <Image width="600" height="600" src="/3D_Model_QR_Code/Laser_Mining_Drill.png" className="rounded-xl" />
                            </div>
                            <a href="https://go.echo3d.co/kAfa" target="_blank" rel="noreferrer">
                                <button className="h-12 px-8 ml-8 text-base font-semibold tracking-wider text-white border rounded-full shadow-sm mt-16 bg-red-50 bg-gradient-to-r from-secondary to-tertiary hover:shadow-lg">View in AR</button>
                            </a>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}
