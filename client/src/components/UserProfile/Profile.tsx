import {FC, useEffect} from "react";
import {ContactInfoComp} from "./ContactInfo";
import {EducationInfoComp} from "./EducationInfo";
import {ExperienceInfoComp} from "./ExperienceInfo";
import {LanguagesInfoComp} from "./LanguagesInfo";
import {AboutMe} from "./AboutMe";
import {LangTagsBox, MainDiv} from "./Styles";
import {SkillTagsComp} from "./SkillTags";
import {useNavigate, useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {setApplicantDetail} from "../../redux/actions/private/applicantActions";

export const UserProfile: FC = () => {
    const navigate = useNavigate();
    const userRole = useSelector((state: any) => state.userReducer.role);
    const dispatch = useDispatch();
    const {postId, applicantId} = useParams();
    useEffect(() => {
        if (userRole === "") {
            navigate("/login");
        }
        if (userRole === "company") {
            dispatch(setApplicantDetail(Number(applicantId)))
        }
    }, [userRole, applicantId]);
    return (
        <MainDiv>
            <ContactInfoComp userRole={userRole} />
            <AboutMe userRole={userRole} />
            <ExperienceInfoComp userRole={userRole} />
            <EducationInfoComp userRole={userRole} />
            <LangTagsBox>
                <LanguagesInfoComp userRole={userRole} />
            </LangTagsBox>
            <SkillTagsComp userRole={userRole} />
        </MainDiv>
    );
};
