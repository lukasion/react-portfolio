import Head from "next/head"
import Button from "../Button"

const Contact = ({stateChanger, className, isActive = false, slideOut, ...props}) => {
    return (
        <div className={`${className} ${!isActive ? 'hidden slideout--right' : 'slidein--left'} ${slideOut ? 'slideout--right' : ''} modal fixed top-0 left-0 w-full h-full outline-none overflow-x-hidden overflow-y-auto`} {...props}>
            <div className="modal-dialog relative w-auto pointer-events-none">
                <div className="modal-content border-none relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                    <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                        <Button onClick={stateChanger}>Close</Button>
                    </div>
                    <div className="px-10">
                        <h2>Let's meet on</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
