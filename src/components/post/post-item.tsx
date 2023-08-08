
import { PostType } from "../../interfaces/post-interface"
import Like from "../interaction/likes"

interface Props {
    post: PostType
}

const PostItem = (props: Props) => {
    const { post } = props
    return (
        <div>
            <div className="flex flex-col justify-between h-56 bg-gray-100 rounded-xl p-5 space-y-3">
                <div className="text-left">
                    {
                        <h1 className="text-xl font-bold">{post.title}</h1>
                    }
                </div>
                <div className="text-left text-sm flex items-end justify-between">
                    <span>Created by |</span>
                    {
                        <span className="font-semibold"> {post.username}</span>
                    }
                </div>
                <Like postId={post.id} />
            </div>
        </div>
    )
}

export default PostItem

