

import { Link } from "react-router-dom"
import { getDocs, collection } from "firebase/firestore"
import { db } from "../config/firebase"
import { useEffect, useState } from "react"
import { PostType } from "../interfaces/post-interface"
import PostItem from "../components/post/post-item"
import Like from "../components/interaction/likes"

const Home = () => {
    const postsRef = collection(db, "posts")
    const [postList, setPostList] = useState<PostType[] | []>([])

    const getPosts = async () => {
        const data = await getDocs(postsRef)
        setPostList(
            data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as PostType[]
        )
    }

    useEffect(() => {
        getPosts()
    }, [])

    return (
        <div className="px-4 mx-auto max-w-8xl lg:px-4 lg:text-center block">
            <div className="m-5 pt-6 flex justify-center items-center">
                <div className="bg-gray-300 py-2 justify-start items-start rounded-3xl hover:cursor-pointer hover:bg-gray-400 hover:text-white">
                    <Link to={"/login"} className="bg-primary text-md text-white px-5 py-2 font-bold rounded-3xl hover:cursor-pointer">Login</Link>
                    <span className="ml-2 text-sm font-medium pr-2">We launched Flowbite Icons! See what's new</span>
                </div>
            </div>
            <div className="flex justify-center items-center w-4/5 sm:w-full mx-auto">
                <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 lg:font-extrabold lg:text-6xl lg:leading-none dark:text-white lg:text-center xl:px-36 lg:mb-7">Build websites even faster with components on top of Tailwind CSS</h1>
            </div>
            <div className="grid grid-flow-col gap-4 mt-5">
                <div className="row-span-3">
                    <div className="flex flex-col justify-between p-5 bg-gray-100 rounded-xl space-y-3">
                        <div className="text-left">
                            {
                                <h1 className="text-xl font-bold">{postList.length > 0 && postList[0].title}</h1>
                            }
                        </div>
                        <div>
                            {
                                <p className="text-justify">{postList.length > 0 && postList[0].description}</p>
                            }
                        </div>
                        <div className="text-left">
                            Created by |
                            {
                                <span className="font-semibold"> {postList.length > 0 && postList[0].username}</span>
                            }
                        </div>
                        {postList.length > 0 && <Like postId={postList[0].userId} />}
                    </div>

                </div>
                <div className="row-span-2 ...">
                    <h3 className="text-primary drop-shadow-sm text-xl text-left pb-5 font-semibold">Other Post...</h3>
                    <div className="grid grid-cols-2 gap-4">
                        {
                            postList?.map((post, index) =>
                                <Link key={index} to={'/posts/' + post.id}>
                                    <PostItem post={post} />
                                </Link>
                            )
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Home