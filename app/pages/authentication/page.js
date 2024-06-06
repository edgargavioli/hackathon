"use client";

import React from "react"
import Image from "next/image"
import { Facebook, Chrome  } from "lucide-react";
import { PrimaryButton, IconButton } from "@/app/components/buttons"

export default function LoginHome(){
    return (
        <>
                <Image 
                    width={100}
                    height={100}
                    className="w-[100vw] h-[100vh] m-0 absolute z-[-1]"
                    src="/svg/elipseImg.svg"
                />
            <div className="flex h-[100vh] flex-col justify-center">
                <div className="flex flex-col mt-32 w-full h-auto items-center justify-center">
                    <PrimaryButton
                        onClick={() => console.log("clicou")}
                    >
                        Entrar
                    </PrimaryButton>
                    <PrimaryButton
                        onClick={() => console.log("clicou")}
                        className="mt-4"   
                    >
                        Criar uma conta
                    </PrimaryButton>
                </div>
                <div className="flex items-center w-full justify-center">
                    <div className="flex items-center justify-evenly w-52 mt-20">
                        <IconButton Icon={Facebook} />
                        <IconButton Icon={Chrome}/>
                    </div>
                </div>
            </div>
        </>
    )
}