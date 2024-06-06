import "@/app/globals.css";

export function PrimaryButton({children, handleEvent, className,...props}){
    return(
        <button
            className={`bg-[#273C4E] rounded-lg text-white w-[60%] h-12 ${className}`}
            {...props}
        >
            {children}
        </button>
    )
}

export function IconButton({Icon, className, ...props}){
    return(
        <button
            className={`bg-[#273C4E] flex items-center justify-center rounded-full text-zinc-200 w-12 h-12 ${className}`}
            {...props}
        >
            <Icon/>   
        </button>
    )
} 