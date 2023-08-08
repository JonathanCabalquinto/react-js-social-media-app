import CreateForm from "./create-form"


const CreatePost = () => {
    return (
        <div>
            <div className="w-full p-5">
                <div className="grid grid-cols-4 gap-4 h-5/6">
                    <div className=" "></div>
                    <div className="col-span-3 ">
                        <CreateForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreatePost