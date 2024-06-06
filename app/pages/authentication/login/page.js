"use client";

import React from "react"
import Image from "next/image"
import {PrimaryButton} from "@/app/components/buttons";

export default function LoginHome(){
    return(
            <div>
                <div>
                    <div>
                        <Image className="ml-6 mt-8 w-[7vw] h-[7vh] m-0 z-[-1]"
                            width={20}
                            height={20}
                            src="/svg/arrow-back.svg"
                        />
                    </div>
                    <div>
                        <Image className="w-[7] z-[-1]"
                            width={200}
                            height={200} 
                            src="/svg/redelipse.svg" 
                        />
                    </div>
                    <div>
                        <Image
                            width={200}
                            height={200} 
                            src="/svg/logoBPK.svg" 
                        />
                    </div>

                    <div>
                        <form name="Login">
                            <table>
                                <tr>
                                    <td>
                                        <input className="py-2 px-10 max-w-md mx-auto bg-gray-200 rounded-xl shadow-xl space-y-2 sm:py-4 sm:flex sm:space-y-0 sm:space-x-6" 
                                            type="text" 
                                            name="email" 
                                            placeholder="Email ou RA"
                                        />
                                    </td>
                                    <td>
                                        <input type="password" name="senha" placeholder="Senha"/>
                                    </td>
                                </tr>
                            </table>
                        </form>
                        <button>Esqueci minha senha</button>
                    </div>
                    <div className="flex flex-col mt-32 w-full h-auto items-center justify-center">
                        <PrimaryButton
                            onClick={() => console.log("clicou")}
                        >
                            Entrar
                        </PrimaryButton>
                    </div>
                </div>
                <div>
                    <Image
                        width={320}
                        height={200}
                        src="/svg/elipse-desenhado.svg"
                    />
                </div>
            </div>
    )
}