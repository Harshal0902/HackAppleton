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
    const { nodes, materials, animations } = useGLTF('/system_velorum_position_processing_rig/scene.gltf')
    const { actions } = useAnimations(animations, group)
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
            <group name="Sketchfab_Scene">
                <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
                    <group name="fd558d48e02f4893bb1e46fa79861a8afbx" rotation={[Math.PI / 2, 0, 0]}>
                        <group name="Object_2">
                            <group name="RootNode">
                                <group name="Object_4">
                                    <group name="Asteroids02" position={[0, 0, 12.04]} rotation={[0, 0, -0.2]}>
                                        <mesh name="Asteroids02_s1347_geostationbs_imper_elements_0" geometry={nodes.Asteroids02_s1347_geostationbs_imper_elements_0.geometry} material={materials.s1347_geostationbs_imper_elements} />
                                    </group>
                                    <group name="Box03" />
                                    <group name="general_asteroids" position={[-0.2, 0, -0.2]}>
                                        <mesh name="general_asteroids_s1347_geostationasteroid_hole01_0" geometry={nodes.general_asteroids_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                        <mesh name="general_asteroids_s1347_geostationasteroid_mining01_0" geometry={nodes.general_asteroids_s1347_geostationasteroid_mining01_0.geometry} material={materials.s1347_geostationasteroid_mining01} />
                                    </group>
                                    <group name="Metal04" />
                                    <group name="Laser">
                                        <group name="Object_39">
                                            <group name="Laser_core" position={[0, 0, -28.86]} rotation={[Math.PI, 0, -2.29]} scale={[-0.3, -0.3, -0.5]}>
                                                <group name="core">
                                                    <mesh name="core_Laser_core1_0" geometry={nodes.core_Laser_core1_0.geometry} material={materials.Laser_core1} />
                                                </group>
                                            </group>
                                            <group name="line01" position={[0, 0, -28.86]} rotation={[Math.PI, 0, 0.87]} scale={[-0.3, -0.3, -0.5]}>
                                                <mesh name="line01_Laser_core1_0" geometry={nodes.line01_Laser_core1_0.geometry} material={materials.Laser_core1} />
                                            </group>
                                            <group name="line02" position={[0, 0, -28.86]} rotation={[Math.PI, 0, 0.87]} scale={[-0.3, -0.3, -0.5]}>
                                                <mesh name="line02_Laser_core1_0" geometry={nodes.line02_Laser_core1_0.geometry} material={materials.Laser_core1} />
                                            </group>
                                            <group name="group1">
                                                <group name="Object_128">
                                                    <group name="bezier2" />
                                                    <primitive object={nodes._rootJoint_2} />
                                                </group>
                                            </group>
                                            <group name="line" />
                                            <group name="group2">
                                                <group name="Object_139">
                                                    <group name="bezier2_1" rotation={[0, 0, 2.74]} />
                                                    <primitive object={nodes._rootJoint_3} />
                                                    <skinnedMesh name="Object_160" geometry={nodes.Object_160.geometry} material={materials.s1347_geostationbs_shell_02} skeleton={nodes.Object_160.skeleton} />
                                                    <skinnedMesh name="Object_161" geometry={nodes.Object_161.geometry} material={materials.s1347_geostationbs_shell_01} skeleton={nodes.Object_161.skeleton} />
                                                    <skinnedMesh name="Object_162" geometry={nodes.Object_162.geometry} material={materials.s1347_geostationbs_shell_yellow_01} skeleton={nodes.Object_162.skeleton} />
                                                    <skinnedMesh name="Object_163" geometry={nodes.Object_163.geometry} material={materials.s1347_geostationbs_imper_engines} skeleton={nodes.Object_163.skeleton} />
                                                    <skinnedMesh name="Object_164" geometry={nodes.Object_164.geometry} material={materials.s1347_geostationbs_communications_01} skeleton={nodes.Object_164.skeleton} />
                                                    <skinnedMesh name="Object_165" geometry={nodes.Object_165.geometry} material={materials.s1347_geostationbs_communications_02} skeleton={nodes.Object_165.skeleton} />
                                                    <skinnedMesh name="Object_167" geometry={nodes.Object_167.geometry} material={materials.s1347_geostationbs_shell_02} skeleton={nodes.Object_167.skeleton} />
                                                    <skinnedMesh name="Object_168" geometry={nodes.Object_168.geometry} material={materials.s1347_geostationbs_shell_01} skeleton={nodes.Object_168.skeleton} />
                                                    <skinnedMesh name="Object_169" geometry={nodes.Object_169.geometry} material={materials.s1347_geostationbs_shell_yellow_01} skeleton={nodes.Object_169.skeleton} />
                                                    <skinnedMesh name="Object_170" geometry={nodes.Object_170.geometry} material={materials.s1347_geostationbs_imper_engines} skeleton={nodes.Object_170.skeleton} />
                                                    <skinnedMesh name="Object_171" geometry={nodes.Object_171.geometry} material={materials.s1347_geostationbs_communications_01} skeleton={nodes.Object_171.skeleton} />
                                                    <skinnedMesh name="Object_172" geometry={nodes.Object_172.geometry} material={materials.s1347_geostationbs_communications_02} skeleton={nodes.Object_172.skeleton} />
                                                    <skinnedMesh name="Object_174" geometry={nodes.Object_174.geometry} material={materials.s1347_geostationbs_shell_02} skeleton={nodes.Object_174.skeleton} />
                                                    <skinnedMesh name="Object_175" geometry={nodes.Object_175.geometry} material={materials.s1347_geostationbs_communications_02} skeleton={nodes.Object_175.skeleton} />
                                                    <skinnedMesh name="Object_176" geometry={nodes.Object_176.geometry} material={materials.s1347_geostationbs_communications_01} skeleton={nodes.Object_176.skeleton} />
                                                    <skinnedMesh name="Object_177" geometry={nodes.Object_177.geometry} material={materials.s1347_geostationbs_imper_engines} skeleton={nodes.Object_177.skeleton} />
                                                    <skinnedMesh name="Object_178" geometry={nodes.Object_178.geometry} material={materials.s1347_geostationbs_shell_yellow_01} skeleton={nodes.Object_178.skeleton} />
                                                    <skinnedMesh name="Object_179" geometry={nodes.Object_179.geometry} material={materials.s1347_geostationbs_shell_01} skeleton={nodes.Object_179.skeleton} />
                                                    <skinnedMesh name="Object_181" geometry={nodes.Object_181.geometry} material={materials.s1347_geostationbs_shell_02} skeleton={nodes.Object_181.skeleton} />
                                                    <skinnedMesh name="Object_182" geometry={nodes.Object_182.geometry} material={materials.s1347_geostationbs_shell_01} skeleton={nodes.Object_182.skeleton} />
                                                    <skinnedMesh name="Object_183" geometry={nodes.Object_183.geometry} material={materials.s1347_geostationbs_shell_yellow_01} skeleton={nodes.Object_183.skeleton} />
                                                    <skinnedMesh name="Object_184" geometry={nodes.Object_184.geometry} material={materials.s1347_geostationbs_imper_engines} skeleton={nodes.Object_184.skeleton} />
                                                    <skinnedMesh name="Object_185" geometry={nodes.Object_185.geometry} material={materials.s1347_geostationbs_communications_01} skeleton={nodes.Object_185.skeleton} />
                                                    <skinnedMesh name="Object_186" geometry={nodes.Object_186.geometry} material={materials.s1347_geostationbs_communications_02} skeleton={nodes.Object_186.skeleton} />
                                                </group>
                                            </group>
                                            <group name="sparks" />
                                            <group name="pCube1" position={[-1264.6, 0, -3291]}>
                                                <mesh name="pCube1_laser_exp_0" geometry={nodes.pCube1_laser_exp_0.geometry} material={materials.laser_exp} />
                                            </group>
                                            <group name="line03" scale={[0.6, 0.6, 1]} />
                                            <group name="group3">
                                                <group name="laser_glow1" position={[-3.68, 0, -757.72]} scale={[1.78, 1, 1]}>
                                                    <mesh name="laser_glow1_laser_glow_0" geometry={nodes.laser_glow1_laser_glow_0.geometry} material={materials.laser_glow} />
                                                </group>
                                                <group name="laser_glow2" position={[-3.68, 0, -757.72]} rotation={[0, 0, -Math.PI / 2]} scale={[1.78, 1, 1]}>
                                                    <mesh name="laser_glow2_laser_glow_0" geometry={nodes.laser_glow2_laser_glow_0.geometry} material={materials.laser_glow} />
                                                </group>
                                            </group>
                                            <group name="laser_end_glow" position={[8.06, -3.9, -115.38]} scale={0.9}>
                                                <mesh name="laser_end_glow_laser_exp_0" geometry={nodes.laser_end_glow_laser_exp_0.geometry} material={materials.laser_exp} />
                                            </group>
                                            <primitive object={nodes._rootJoint_1} />
                                            <group name="Object_41" />
                                            <group name="Object_44" scale={[0.6, 0.6, 1]} />
                                            <group name="Object_159" />
                                            <group name="Object_166" />
                                            <group name="Object_173" />
                                            <group name="Object_180" />
                                            <skinnedMesh name="Object_42" geometry={nodes.Object_42.geometry} material={materials.sparks01} skeleton={nodes.Object_42.skeleton} />
                                            <skinnedMesh name="Object_43" geometry={nodes.Object_43.geometry} material={materials.Laser_core1} skeleton={nodes.Object_43.skeleton} />
                                            <skinnedMesh name="Object_45" geometry={nodes.Object_45.geometry} material={materials.sparks01} skeleton={nodes.Object_45.skeleton} />
                                        </group>
                                    </group>
                                    <group name="Station">
                                        <group name="Metal04_1">
                                            <mesh name="Metal04_s1347_geostationbs_shell_02_0" geometry={nodes.Metal04_s1347_geostationbs_shell_02_0.geometry} material={materials.s1347_geostationbs_shell_02} />
                                        </group>
                                        <group name="Metal07">
                                            <mesh name="Metal07_s1347_geostationbs_shell_01_0" geometry={nodes.Metal07_s1347_geostationbs_shell_01_0.geometry} material={materials.s1347_geostationbs_shell_01} />
                                        </group>
                                        <group name="Screens">
                                            <mesh name="Screens_Screens1_0" geometry={nodes.Screens_Screens1_0.geometry} material={materials.Screens1} />
                                        </group>
                                        <group name="Metal012">
                                            <mesh name="Metal012_s1347_geostationbs_communications_01_0" geometry={nodes.Metal012_s1347_geostationbs_communications_01_0.geometry} material={materials.s1347_geostationbs_communications_01} />
                                        </group>
                                        <group name="Metal01">
                                            <mesh name="Metal01_s1347_geostationis_panels_0" geometry={nodes.Metal01_s1347_geostationis_panels_0.geometry} material={materials.s1347_geostationis_panels} />
                                        </group>
                                        <group name="Metal08">
                                            <mesh name="Metal08_s1347_geostationbs_shell_01_0" geometry={nodes.Metal08_s1347_geostationbs_shell_01_0.geometry} material={materials.s1347_geostationbs_shell_01} />
                                        </group>
                                        <group name="box01" position={[-84.34, -79.75, -115.53]} rotation={[-0.28, 0.01, 0.19]}>
                                            <mesh name="box01_s1347_geostationbs_communications_02_0" geometry={nodes.box01_s1347_geostationbs_communications_02_0.geometry} material={materials.s1347_geostationbs_communications_02} />
                                        </group>
                                        <group name="box02" position={[-436.9, -604.96, -649.98]} rotation={[0.7, 0.33, -1.09]}>
                                            <mesh name="box02_s1347_geostationbs_communications_02_0" geometry={nodes.box02_s1347_geostationbs_communications_02_0.geometry} material={materials.s1347_geostationbs_communications_02} />
                                        </group>
                                        <group name="metal12">
                                            <mesh name="metal12_s1347_geostationbs_communications_02_0" geometry={nodes.metal12_s1347_geostationbs_communications_02_0.geometry} material={materials.s1347_geostationbs_communications_02} />
                                            <mesh name="metal12_s1347_geostationbs_communications_02_0_1" geometry={nodes.metal12_s1347_geostationbs_communications_02_0_1.geometry} material={materials.s1347_geostationbs_communications_02} />
                                        </group>
                                        <group name="cil01" position={[2.54, 0, 0]}>
                                            <mesh name="cil01_s1347_geostationis_communications_0" geometry={nodes.cil01_s1347_geostationis_communications_0.geometry} material={materials.s1347_geostationis_communications} />
                                        </group>
                                        <group name="cil02" position={[38.06, 0, 0]}>
                                            <mesh name="cil02_s1347_geostationis_communications_0" geometry={nodes.cil02_s1347_geostationis_communications_0.geometry} material={materials.s1347_geostationis_communications} />
                                        </group>
                                        <group name="metal13">
                                            <mesh name="metal13_s1347_geostationis_details_0" geometry={nodes.metal13_s1347_geostationis_details_0.geometry} material={materials.s1347_geostationis_details} />
                                        </group>
                                        <group name="ring01" position={[-0.26, 0.08, 0]} rotation={[0, 0, -0.6]}>
                                            <mesh name="ring01_s1347_geostationis_details_0" geometry={nodes.ring01_s1347_geostationis_details_0.geometry} material={materials.s1347_geostationis_details} />
                                        </group>
                                        <group name="cil03" position={[0, -1.15, 0]}>
                                            <mesh name="cil03_s1347_geostationis_communications_0" geometry={nodes.cil03_s1347_geostationis_communications_0.geometry} material={materials.s1347_geostationis_communications} />
                                        </group>
                                        <group name="cil04" position={[0, -5.27, 0]}>
                                            <mesh name="cil04_s1347_geostationis_communications_0" geometry={nodes.cil04_s1347_geostationis_communications_0.geometry} material={materials.s1347_geostationis_communications} />
                                        </group>
                                        <group name="cil05" position={[0, -17.06, 0]}>
                                            <mesh name="cil05_s1347_geostationis_communications_0" geometry={nodes.cil05_s1347_geostationis_communications_0.geometry} material={materials.s1347_geostationis_communications} />
                                        </group>
                                        <group name="metal14">
                                            <mesh name="metal14_s1347_geostationis_communications_0" geometry={nodes.metal14_s1347_geostationis_communications_0.geometry} material={materials.s1347_geostationis_communications} />
                                        </group>
                                        <group name="stat01">
                                            <mesh name="stat01_s1347_geostationcenter_mat_0" geometry={nodes.stat01_s1347_geostationcenter_mat_0.geometry} material={materials.s1347_geostationcenter_mat} />
                                        </group>
                                    </group>
                                    <group name="Asteroids">
                                        <group name="Asteroids01">
                                            <group name="asteroid072" position={[38.69, 114.75, 0]} rotation={[0, 0, -0.54]}>
                                                <mesh name="asteroid072_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid072_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                            </group>
                                            <group name="asteroid055" position={[-52.9, 0, -109.51]}>
                                                <mesh name="asteroid055_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid055_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                            </group>
                                            <group name="g1" position={[30.25, -9.72, -18.71]} rotation={[0.03, 0.07, 0.01]}>
                                                <group name="asteroid06">
                                                    <mesh name="asteroid06_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid06_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                                <group name="asteroid061">
                                                    <mesh name="asteroid061_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid061_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                                <group name="asteroid063">
                                                    <mesh name="asteroid063_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid063_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                                <group name="asteroid013">
                                                    <mesh name="asteroid013_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid013_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                                <group name="asteroid052">
                                                    <mesh name="asteroid052_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid052_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                                <group name="asteroid010">
                                                    <mesh name="asteroid010_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid010_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                                <group name="asteroid064">
                                                    <mesh name="asteroid064_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid064_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                                <group name="asteroid054">
                                                    <mesh name="asteroid054_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid054_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                                <group name="asteroid094">
                                                    <mesh name="asteroid094_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid094_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                                <group name="asteroid040">
                                                    <mesh name="asteroid040_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid040_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                                <group name="asteroid088">
                                                    <mesh name="asteroid088_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid088_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                                <group name="asteroid049">
                                                    <mesh name="asteroid049_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid049_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                                <group name="asteroid062">
                                                    <mesh name="asteroid062_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid062_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                                <group name="asteroid038">
                                                    <mesh name="asteroid038_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid038_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                                <group name="asteroid028">
                                                    <mesh name="asteroid028_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid028_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                                <group name="asteroid034">
                                                    <mesh name="asteroid034_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid034_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                                <group name="asteroid079">
                                                    <mesh name="asteroid079_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid079_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                                <group name="asteroid058">
                                                    <mesh name="asteroid058_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid058_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                                <group name="asteroid020">
                                                    <mesh name="asteroid020_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid020_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                            </group>
                                            <group name="g2" rotation={[0.08, 0.08, 0.03]}>
                                                <group name="asteroid0100">
                                                    <mesh name="asteroid0100_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid0100_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                                <group name="asteroid041">
                                                    <mesh name="asteroid041_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid041_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                                <group name="asteroid067">
                                                    <mesh name="asteroid067_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid067_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                                <group name="asteroid086">
                                                    <mesh name="asteroid086_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid086_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                                <group name="asteroid053">
                                                    <mesh name="asteroid053_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid053_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                                <group name="asteroid082">
                                                    <mesh name="asteroid082_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid082_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                                <group name="asteroid059">
                                                    <mesh name="asteroid059_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid059_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                                <group name="asteroid066">
                                                    <mesh name="asteroid066_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid066_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                                <group name="asteroid029">
                                                    <mesh name="asteroid029_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid029_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                                <group name="asteroid019">
                                                    <mesh name="asteroid019_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid019_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                                <group name="asteroid018" position={[114.41, -83.86, 0]}>
                                                    <mesh name="asteroid018_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid018_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                                <group name="asteroid081">
                                                    <mesh name="asteroid081_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid081_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                                <group name="asteroid080">
                                                    <mesh name="asteroid080_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid080_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                                <group name="asteroid046">
                                                    <mesh name="asteroid046_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid046_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                                <group name="asteroid035">
                                                    <mesh name="asteroid035_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid035_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                                <group name="asteroid037">
                                                    <mesh name="asteroid037_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid037_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                                <group name="asteroid01">
                                                    <mesh name="asteroid01_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid01_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                                <group name="asteroid026">
                                                    <mesh name="asteroid026_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid026_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                            </group>
                                            <group name="g3" rotation={[-0.11, 0.04, -0.08]}>
                                                <group name="asteroid099">
                                                    <mesh name="asteroid099_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid099_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                                <group name="asteroid098">
                                                    <mesh name="asteroid098_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid098_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                                <group name="asteroid097">
                                                    <mesh name="asteroid097_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid097_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                                <group name="asteroid096">
                                                    <mesh name="asteroid096_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid096_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                                <group name="asteroid095">
                                                    <mesh name="asteroid095_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid095_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                                <group name="asteroid093">
                                                    <mesh name="asteroid093_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid093_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                                <group name="asteroid092">
                                                    <mesh name="asteroid092_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid092_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                                <group name="asteroid091">
                                                    <mesh name="asteroid091_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid091_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                                <group name="asteroid090">
                                                    <mesh name="asteroid090_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid090_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                                <group name="asteroid089">
                                                    <mesh name="asteroid089_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid089_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                                <group name="asteroid087">
                                                    <mesh name="asteroid087_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid087_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                                <group name="asteroid085">
                                                    <mesh name="asteroid085_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid085_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                                <group name="asteroid084">
                                                    <mesh name="asteroid084_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid084_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                                <group name="asteroid083">
                                                    <mesh name="asteroid083_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid083_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                                <group name="asteroid078">
                                                    <mesh name="asteroid078_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid078_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                                <group name="asteroid077" position={[-11.76, -202.37, 0]}>
                                                    <mesh name="asteroid077_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid077_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                                <group name="asteroid076" position={[-229.94, 0, -162.5]}>
                                                    <mesh name="asteroid076_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid076_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                                <group name="asteroid075">
                                                    <mesh name="asteroid075_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid075_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                                <group name="asteroid074" position={[-97.15, 0, 0]}>
                                                    <mesh name="asteroid074_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid074_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                                <group name="asteroid073" position={[0, -224.16, -70.38]}>
                                                    <mesh name="asteroid073_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid073_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                                <group name="asteroid071">
                                                    <mesh name="asteroid071_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid071_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                                <group name="asteroid070">
                                                    <mesh name="asteroid070_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid070_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                                <group name="asteroid069">
                                                    <mesh name="asteroid069_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid069_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                                <group name="asteroid068">
                                                    <mesh name="asteroid068_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid068_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                                <group name="asteroid065">
                                                    <mesh name="asteroid065_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid065_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                                <group name="asteroid060">
                                                    <mesh name="asteroid060_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid060_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                                <group name="asteroid057">
                                                    <mesh name="asteroid057_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid057_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                                <group name="asteroid056">
                                                    <mesh name="asteroid056_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid056_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                                <group name="asteroid051">
                                                    <mesh name="asteroid051_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid051_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                                <group name="asteroid050">
                                                    <mesh name="asteroid050_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid050_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                                <group name="asteroid048">
                                                    <mesh name="asteroid048_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid048_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                                <group name="asteroid047">
                                                    <mesh name="asteroid047_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid047_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                                <group name="asteroid045">
                                                    <mesh name="asteroid045_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid045_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                                <group name="asteroid044">
                                                    <mesh name="asteroid044_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid044_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                                <group name="asteroid043">
                                                    <mesh name="asteroid043_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid043_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                                <group name="asteroid042">
                                                    <mesh name="asteroid042_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid042_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                                <group name="asteroid039">
                                                    <mesh name="asteroid039_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid039_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                                <group name="asteroid036">
                                                    <mesh name="asteroid036_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid036_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                                <group name="asteroid033">
                                                    <mesh name="asteroid033_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid033_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                                <group name="asteroid032">
                                                    <mesh name="asteroid032_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid032_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                                <group name="asteroid031">
                                                    <mesh name="asteroid031_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid031_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                                <group name="asteroid030">
                                                    <mesh name="asteroid030_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid030_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                                <group name="asteroid027">
                                                    <mesh name="asteroid027_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid027_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                                <group name="asteroid025">
                                                    <mesh name="asteroid025_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid025_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                                <group name="asteroid024">
                                                    <mesh name="asteroid024_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid024_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                                <group name="asteroid023">
                                                    <mesh name="asteroid023_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid023_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                                <group name="asteroid022">
                                                    <mesh name="asteroid022_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid022_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                                <group name="asteroid021">
                                                    <mesh name="asteroid021_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid021_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                                <group name="asteroid017">
                                                    <mesh name="asteroid017_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid017_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                                <group name="asteroid016">
                                                    <mesh name="asteroid016_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid016_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                                <group name="asteroid015">
                                                    <mesh name="asteroid015_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid015_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                                <group name="asteroid014">
                                                    <mesh name="asteroid014_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid014_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                                <group name="asteroid012">
                                                    <mesh name="asteroid012_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid012_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                                <group name="asteroid011">
                                                    <mesh name="asteroid011_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid011_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                                <group name="asteroid09">
                                                    <mesh name="asteroid09_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid09_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                                <group name="asteroid08">
                                                    <mesh name="asteroid08_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid08_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                                <group name="asteroid07">
                                                    <mesh name="asteroid07_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid07_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                                <group name="asteroid05">
                                                    <mesh name="asteroid05_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid05_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                                <group name="asteroid04" position={[0, 0, -201.46]}>
                                                    <mesh name="asteroid04_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid04_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                                <group name="asteroid03">
                                                    <mesh name="asteroid03_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid03_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                                <group name="asteroid02">
                                                    <mesh name="asteroid02_s1347_geostationasteroid_hole01_0" geometry={nodes.asteroid02_s1347_geostationasteroid_hole01_0.geometry} material={materials.s1347_geostationasteroid_hole01} />
                                                </group>
                                            </group>
                                        </group>
                                    </group>
                                    <group name="r1_1" position={[-2.28, 0.63, 0]} rotation={[0, 0, -1.19]}>
                                        <group name="r1">
                                            <group name="weapon2" position={[-1, -125.82, -94.58]} rotation={[0.33, 0.02, -0.01]}>
                                                <group name="group8">
                                                    <group name="group4" position={[-0.03, 179.14, -485.56]} rotation={[-0.54, -0.02, -2.96]} scale={[0.17, 0.17, 0.69]}>
                                                        <group name="core1" position={[0, 0, -28.86]} rotation={[-Math.PI, 0, 0.14]} scale={[-0.3, -0.3, -0.5]}>
                                                            <mesh name="core1_Laser_core1_0_1" geometry={nodes.core1_Laser_core1_0_1.geometry} material={materials.Laser_core1} />
                                                        </group>
                                                    </group>
                                                    <group name="group7" position={[0, 168.95, -502.68]} rotation={[-0.54, -0.01, -0.01]} scale={[0.42, 0.42, 0.68]}>
                                                        <group name="line04" position={[0, 0, -28.86]} rotation={[-Math.PI, 0, -Math.PI / 10]} scale={[-0.3, -0.3, -0.5]}>
                                                            <mesh name="line04_Laser_core1_0_1" geometry={nodes.line04_Laser_core1_0_1.geometry} material={materials.Laser_core1} />
                                                        </group>
                                                        <group name="line05" position={[0, 0, -28.86]} rotation={[-Math.PI, 0, -Math.PI / 10]} scale={[-0.3, -0.3, -0.5]}>
                                                            <mesh name="line05_Laser_core1_0_1" geometry={nodes.line05_Laser_core1_0_1.geometry} material={materials.Laser_core1} />
                                                        </group>
                                                    </group>
                                                    <group name="laser_end_glow3" position={[-35.96, 362.54, -128.44]} rotation={[-0.47, -0.08, 2.02]} scale={0.3}>
                                                        <mesh name="laser_end_glow3_laser_exp_0" geometry={nodes.laser_end_glow3_laser_exp_0.geometry} material={materials.laser_exp} />
                                                    </group>
                                                    <group name="polySurface1" position={[0.38, 0.86, 0.62]}>
                                                        <mesh name="polySurface1_s1347_geostationis_details_0" geometry={nodes.polySurface1_s1347_geostationis_details_0.geometry} material={materials.s1347_geostationis_details} />
                                                    </group>
                                                </group>
                                                <mesh name="weapon2_s1347_geostationbs_communications_02_0" geometry={nodes.weapon2_s1347_geostationbs_communications_02_0.geometry} material={materials.s1347_geostationbs_communications_02} />
                                                <mesh name="weapon2_s1347_geostationis_details_0" geometry={nodes.weapon2_s1347_geostationis_details_0.geometry} material={materials.s1347_geostationis_details} />
                                                <mesh name="weapon2_Default_Material_0" geometry={nodes.weapon2_Default_Material_0.geometry} material={materials.Default_Material} />
                                            </group>
                                            <group name="weapon1" position={[1, 114.87, -82.61]} rotation={[-0.3, 0, 0]}>
                                                <group name="group5" position={[-0.11, -178.73, -489.11]} rotation={[0.5, 0, 3.12]} scale={[0.17, 0.17, 0.69]}>
                                                    <group name="core1_1" position={[0, 0, -28.86]} rotation={[Math.PI, 0, 2.86]} scale={[-0.3, -0.3, -0.5]}>
                                                        <mesh name="core1_Laser_core1_0" geometry={nodes.core1_Laser_core1_0.geometry} material={materials.Laser_core1} />
                                                    </group>
                                                </group>
                                                <group name="group6" position={[0, -170.77, -504.4]} rotation={[0.5, 0, 0]} scale={[0.45, 0.45, 0.65]}>
                                                    <group name="line04_1" position={[0, 0, -28.86]} rotation={[-Math.PI, 0, 0.31]} scale={[-0.3, -0.3, -0.5]}>
                                                        <mesh name="line04_Laser_core1_0" geometry={nodes.line04_Laser_core1_0.geometry} material={materials.Laser_core1} />
                                                    </group>
                                                    <group name="line05_1" position={[0, 0, -28.86]} rotation={[-Math.PI, 0, 0.31]} scale={[-0.3, -0.3, -0.5]}>
                                                        <mesh name="line05_Laser_core1_0" geometry={nodes.line05_Laser_core1_0.geometry} material={materials.Laser_core1} />
                                                    </group>
                                                </group>
                                                <group name="laser_end_glow4" position={[-9.33, -369.48, -132.28]} rotation={[0.49, -0.03, -0.07]} scale={0.3}>
                                                    <mesh name="laser_end_glow4_laser_exp_0" geometry={nodes.laser_end_glow4_laser_exp_0.geometry} material={materials.laser_exp} />
                                                </group>
                                                <mesh name="weapon1_s1347_geostationbs_communications_02_0" geometry={nodes.weapon1_s1347_geostationbs_communications_02_0.geometry} material={materials.s1347_geostationbs_communications_02} />
                                                <mesh name="weapon1_Default_Material_0" geometry={nodes.weapon1_Default_Material_0.geometry} material={materials.Default_Material} />
                                            </group>
                                            <group name="ring02" position={[-0.05, -0.52, 0]} rotation={[0, 0, -0.02]}>
                                                <mesh name="ring02_s1347_geostationcenter_mat_0" geometry={nodes.ring02_s1347_geostationcenter_mat_0.geometry} material={materials.s1347_geostationcenter_mat} />
                                            </group>
                                            <mesh name="r1_s1347_geostationis_panels_0" geometry={nodes.r1_s1347_geostationis_panels_0.geometry} material={materials.s1347_geostationis_panels} />
                                            <mesh name="r1_s1347_geostationis_communications_0" geometry={nodes.r1_s1347_geostationis_communications_0.geometry} material={materials.s1347_geostationis_communications} />
                                            <mesh name="r1_s1347_geostationbs_communications_02_0" geometry={nodes.r1_s1347_geostationbs_communications_02_0.geometry} material={materials.s1347_geostationbs_communications_02} />
                                            <mesh name="r1_s1347_geostationis_details_0" geometry={nodes.r1_s1347_geostationis_details_0.geometry} material={materials.s1347_geostationis_details} />
                                        </group>
                                    </group>
                                    <group name="Sattelite">
                                        <group name="sat02" />
                                        <group name="sat03" />
                                        <group name="sat04" />
                                        <group name="sat01" />
                                    </group>
                                    <group name="laser_glow2_1" scale={0.95}>
                                        <mesh name="laser_glow2_laser_exp_0" geometry={nodes.laser_glow2_laser_exp_0.geometry} material={materials.laser_exp} />
                                    </group>
                                    <group name="diafragmadiafragm">
                                        <group name="diafragmapolySurface1852" />
                                        <group name="diafragmapolySurface1853" />
                                        <group name="diafragmapolySurface1854" />
                                        <group name="diafragmapolySurface1855" />
                                        <group name="diafragmapolySurface1848" />
                                        <group name="diafragmapolySurface1849" />
                                        <group name="diafragmapolySurface1850" />
                                        <group name="diafragmapolySurface1851" />
                                    </group>
                                    <primitive object={nodes._rootJoint} />
                                    <group name="Object_6" />
                                    <group name="Object_8" />
                                    <group name="Object_10" />
                                    <group name="Object_12" />
                                    <group name="Object_14" />
                                    <group name="Object_16" />
                                    <group name="Object_18" />
                                    <group name="Object_20" />
                                    <skinnedMesh name="Object_7" geometry={nodes.Object_7.geometry} material={materials.s1347_geostationis_details} skeleton={nodes.Object_7.skeleton} />
                                    <skinnedMesh name="Object_9" geometry={nodes.Object_9.geometry} material={materials.s1347_geostationis_details} skeleton={nodes.Object_9.skeleton} />
                                    <skinnedMesh name="Object_11" geometry={nodes.Object_11.geometry} material={materials.s1347_geostationis_details} skeleton={nodes.Object_11.skeleton} />
                                    <skinnedMesh name="Object_13" geometry={nodes.Object_13.geometry} material={materials.s1347_geostationis_details} skeleton={nodes.Object_13.skeleton} />
                                    <skinnedMesh name="Object_15" geometry={nodes.Object_15.geometry} material={materials.s1347_geostationis_details} skeleton={nodes.Object_15.skeleton} />
                                    <skinnedMesh name="Object_17" geometry={nodes.Object_17.geometry} material={materials.s1347_geostationis_details} skeleton={nodes.Object_17.skeleton} />
                                    <skinnedMesh name="Object_19" geometry={nodes.Object_19.geometry} material={materials.s1347_geostationis_details} skeleton={nodes.Object_19.skeleton} />
                                    <skinnedMesh name="Object_21" geometry={nodes.Object_21.geometry} material={materials.s1347_geostationis_details} skeleton={nodes.Object_21.skeleton} />
                                </group>
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </group>
    )
}

function Details() {

    const snap = useSnapshot(state)
    if (snap.current === "s1347_geostationbs_shell_02") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center">
                <h1 className="text-3xl uppercase">Living Space</h1>
            </div>
        )
    }
    else if (snap.current === "s1347_geostationasteroid_hole01") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center">
                <h1 className="text-3xl uppercase">Mining rock</h1>
            </div>
        )
    }
    else if (snap.current === "s1347_geostationis_panels") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center">
                <h1 className="text-3xl uppercase">Landing Pannels</h1>
            </div>
        )
    }
    else {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center">
                <h1 className="text-2xl tracking-wider">Click on diffrent parts of Processing Rig to know more</h1>
                <p className="self-center mx-8 text-xl tracking-wide text-justify">To view the 3D model in AR, scan the QR code or click on the button below.</p>

                <div className="grid justify-center grid-cols-1 gap-2 pb-8 mx-8 md:grid-cols-2 lg:grid-cols-2">
                    <div className="flex p-6 text-6xl rounded-xl h-48 w-48">
                        <Image width="250" height="250" src="/3D_Model_QR_Code/Laser_Mining_Drill.png" alt="" className="rounded-xl"/>
                    </div>
                    <a href="/Processing_rig.html" target="_blank" rel="noreferrer">
                        <button className="h-12 px-8 ml-8 text-base font-semibold tracking-wider text-white border rounded-full shadow-sm mt-16 bg-red-50 bg-gradient-to-r from-secondary to-tertiary hover:shadow-lg">View in AR</button>
                    </a>
                </div>
            </div>
        )
    }
}

export default function Processing_rig() {
    return (
        <div className="pt-8 text-white">

            <div className="grid w-full place-items-center">
                <h1 className="pb-2 text-5xl font-semibold tracking-wide">
                    Processing Rig
                </h1>
                <div className="inline-flex mt-2 h-1 bg-secondary rounded-full w-72"></div>
                <div className="text-justify text-xl w-86 mt-2 mx-4 md:mx-44">This work is based on &quot;System: Velorum Position: Processing Rig&quot; (https://sketchfab.com/3d-models/system-velorum-position-processing-rig-6e7765657f0444939c9fabd02a359b57) by Star Conflict (https://sketchfab.com/star_conflict) licensed under CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)</div>
            </div>

            <div className="md:grid md:grid-cols-3 md:pr-15 pr-1">

                <div className="w-full h-128 px-4 outline-none cursor-grab md:col-span-2 lg:block">
                    <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
                        <ambientLight intensity={0.7} />
                        <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
                        <Suspense fallback={null}>
                            <Model scale={0.001} />
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
