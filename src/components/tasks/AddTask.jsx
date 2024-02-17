import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../Store/Slices/TaskSlice";

const AddTask = ({ isOpen, setIsOpen }) => {


    function closeModal() {
        setIsOpen(false)
    }

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const task_name = form.name.value
        const description = form.description.value
        const task_obj = { title: task_name, description: description }
       
        dispatch(addTask(task_obj))

    }

    return (
        <>


            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        Payment successful
                                    </Dialog.Title>
                                    <form onSubmit={handleSubmit}>

                                        <div className="mt-2">
                                            <input className="w-full" type="text" placeholder="Task Name" name="name" id="" />
                                        </div>
                                        <div className="mt-2">
                                            <input className="w-full" type="text" placeholder="description" name="description" id="" />
                                        </div>

                                        <div className="mt-4">
                                            <button
                                                type="submit"
                                                className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                onClick={closeModal}
                                            >
                                                Add task
                                            </button>
                                        </div>

                                    </form>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
export default AddTask