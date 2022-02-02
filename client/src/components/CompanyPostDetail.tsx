import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";
import Dashboard from "../pages/Dashboard/Dashboard";
import {getPostsById} from "../redux/actions/actionCreators";
import ApplicantByPost from "./ApplicantsByPost";

const CompanyPostDetail = () => {
    const {postId} = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPostsById(postId));
    }, [postId]);

    const post = useSelector((state: any) => state.postsReducer.postById);
    return (
        <Dashboard>
            <ApplicantByPost applicants={post.applicants} postId={post.id} />
        </Dashboard>
    )
}

export default CompanyPostDetail;
