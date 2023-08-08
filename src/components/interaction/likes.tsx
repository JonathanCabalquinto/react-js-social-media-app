import { addDoc, deleteDoc, collection, query, where, getDocs, doc } from "firebase/firestore"
import { useAuthState } from "react-firebase-hooks/auth"
import { db, auth } from "../../config/firebase"
import { useEffect, useState } from "react"
import { boolean } from "yup"


interface Props {
    postId: string
}

interface PostLikes {
    userId: string,
    postId: string
}


const Like = (props: Props) => {
    const [likes, setLikes] = useState<PostLikes[] | []>([])
    const [isLiked, setIsLiked] = useState<Boolean>(false)
    const { postId } = props
    const likesRef = collection(db, "likes")
    const [user] = useAuthState(auth)
    const likesDoc = query(likesRef, where("postId", "==", postId))

    // const checkIfUserLiked = () => {
    //     if (likes.find((like) => user?.uid === like.userId)) {
    //         setIsLiked(true)
    //         console.log(true)
    //     }
    // }

    const checkIfLiked = likes.find((like) => user?.uid === like.userId)
    const getLikes = async () => {
        const data = await getDocs(likesDoc)
        setLikes(
            data.docs.map((doc) => {
                if (doc.data().userId == user?.uid) {
                    setIsLiked(true)
                }
                return { ...doc.data() }
            }) as PostLikes[]
        )
    }

    useEffect(() => {
        getLikes()
    }, [])

    const addLike = async () => {
        try {
            await addDoc(likesRef, { userId: user?.uid, postId: postId })
            if (user) {
                setLikes((prev) => [...prev, { userId: user?.uid, postId: postId }])
                setIsLiked(true)
            }
        } catch (error) {
            console.log(error)
        }

    }

    const removeLike = async () => {
        try {
            const likesToDeleteQuery = query(
                likesRef,
                where("postId", "==", postId),
                where("userId", "==", user?.uid)
            )
            setIsLiked(false)
            const likeToDeleteData = await getDocs(likesToDeleteQuery)
            const likeDocToDelete = doc(db, "likes", likeToDeleteData.docs[0].id)
            await deleteDoc(likeDocToDelete)
            if (user) {
                const data = likes.filter((like) => like.userId === user?.uid)
                setLikes(data)
            }
        } catch (error) {
            console.log(error)
        }

    }


    return (
        <div className="text-left">
            {isLiked ?
                <button onClick={removeLike} className="drop-shadow-sm">
                    &#x1F44E;
                </button> :
                <button onClick={addLike} className="drop-shadow-sm">
                    &#x1F44D;
                </button>}
            <span>Likes: {likes?.length}</span>

            {/* <button className="ml-1 drop-shadow-sm">&#x1F44E;</button>
            0 */}
        </div>
    )
}

export default Like