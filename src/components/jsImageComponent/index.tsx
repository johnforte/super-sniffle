"use client";

import { useEffect, useState } from "react";

const images = {
    "mobile":"/images/mobile.png",
    "tablet":"/images/tablet.png",
    "desktop":"/images/desktop.png"
} as const;

export function ReactComponent(){
    const [device, setDevice] = useState<"mobile"| "tablet" | "desktop">("desktop");
    useEffect(()=>{
        const handler = () =>{
            if(window.matchMedia("(max-width: 640px)").matches){
                setDevice("mobile");
            }else if(window.matchMedia("(max-width: 768px)").matches){
                setDevice("tablet");
            }else{
                setDevice("desktop");
            }
        };
        handler();
        window.addEventListener("resize", handler);
        return ()=>{
            window.removeEventListener("resize",handler);
        }
    },[]);
    return (
        <img src={images[device]} />
    );
}
