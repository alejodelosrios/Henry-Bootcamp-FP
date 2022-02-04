import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitTags } from "../../redux/actions/actionCreators";
import {
    AddTagBtn,
    Edit,
    Header,
    SkillTags,
    Tag,
    TagInput,
    TagsContainer,
    TagsSelect,
    Titles,
} from "./Styles";

type Props = {
  userRole: string;
};

export const SkillTagsComp: FC<Props> = ({userRole}) => {
    const applicantDetail = useSelector((state: any) => state.companyReducer.applicantDetail);
    let userId = useSelector((state: any) => state.userReducer.applicant.id);
    const dispatch = useDispatch();
    const [skillsArray, setSkillsArray] = useState<any[]>([]);
    const [applicantSkills, setApplicantSkills] = useState<any[]>([])
    if (userRole === "company") {
        userId = applicantDetail.id
    }

    useEffect(() => {
        if (userRole === "company") {
                setApplicantSkills(applicantDetail.skillTags)
        } else {
            axios.get(`${process.env.REACT_APP_API}/applicant/${userId}`)
                .then((res) => {
                setApplicantSkills(res.data.skillTags)
                })
        }
    }, [applicantDetail.id])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API}/tag/index`)
            .then((res) => {
                setSkillsArray(res.data)
            })
    }, [])

    const upperCase = (string: string) => {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    const [flag, setFlag] = useState(false);

    const switchFlag = () => {
        flag === false ? setFlag(true) : setFlag(false);
    };

    const [newTag, setNewTag] = useState('');

    const selectSkill = (e: any) => {
        e.preventDefault();
        for (let i = 0; i < applicantSkills.length; i++) {
            if (applicantSkills[i].id == e.target.value) {
                return alert(`Ya seleccionaste ${applicantSkills[i].name}`)
            }
        }
        axios.put(`${process.env.REACT_APP_API}/applicant/tags`, {
            applicantId: Number(userId),
            tagId: Number(e.target.value)
        })
        setTimeout(() => {
            axios.get(`${process.env.REACT_APP_API}/applicant/${userId}`)
            .then((res) => {
                setApplicantSkills(res.data.skillTags)
            })
        }, 400);
    };

    const deleteSkill = (e: any) => {
        axios.put(`${process.env.REACT_APP_API}/applicant/tags`, {
            applicantId: Number(userId),
            tagId: Number(e)
        })
            .catch((err) => {
            console.log(err)
        })
        setTimeout(() => {
            axios.get(`${process.env.REACT_APP_API}/applicant/${userId}`)
            .then((res) => {
                setApplicantSkills(res.data.skillTags)
            })
        }, 400);
    };

    const handleSubmit = () => {
        switchFlag();
    };

    const handleOnChange = (e: any) => {
        setNewTag(e.target.value)
    };

    const addSkillByInput = (e: any) => {
        e.preventDefault();

        for (let i = 0; i < applicantSkills.length; i++) {
            if (applicantSkills[i].name.toLowerCase() == newTag.toLowerCase()) {
                return alert(`Ya seleccionaste ${applicantSkills[i].name}`), setNewTag("");
            }
        }

        for (let i = 0; i < skillsArray.length; i++) {
            if (skillsArray[i].name.toLowerCase() === newTag.toLowerCase()) {
                console.log(skillsArray[i].name)
                axios.put(`${process.env.REACT_APP_API}/applicant/tags`, {
                    applicantId: Number(userId),
                    tagId: Number(skillsArray[i].id)
                })
                    .catch((err) => {
                    console.log(err)
                })
                return setTimeout(() => {
                    axios.get(`${process.env.REACT_APP_API}/applicant/${userId}`)
                    .then((res) => {
                        setApplicantSkills(res.data.skillTags)
                    })
                }, 400);
            }

        }
        axios.post(`${process.env.REACT_APP_API}/tag/create`, {
            name: newTag
        })
            .then((res) => {
                axios.put(`${process.env.REACT_APP_API}/applicant/tags`, {
                    applicantId: Number(userId),
                    tagId: Number(res.data.id)
                })
            })

        setTimeout(() => {
            axios.get(`${process.env.REACT_APP_API}/applicant/${userId}`)
            .then((res) => {
                setApplicantSkills(res.data.skillTags)
            })
        }, 400);
        setNewTag("");
    };

    if (flag) {
        return (
            <SkillTags>
                <Header>
                    <Titles>Skill tags</Titles>
                    <Edit onClick={() => handleSubmit()}>Guardar</Edit>
                </Header>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(4, 1fr)",
                        gridTemplateRows: "repeat(4, 1fr)",
                        gridColumnGap: "0px",
                        gridRowGap: "0px",
                        width: "100%",
                        alignItems: "center",
                        justifyItems: "center",
                    }}
                >
                    <TagsSelect
                        style={{ gridArea: "2 / 1 / 3 / 5" }}
                        className="skills-select"
                        onChange={(e) => selectSkill(e)}
                    >
                        <option>Selecciona tags</option>
                        {skillsArray.map((tag: any) => (
                            <option value={tag.id} key={tag.id}>
                                {upperCase(tag.name)}
                            </option>
                        ))}
                    </TagsSelect>

                    <form
                        style={{
                            gridArea: "1 / 1 / 2 / 5",
                            width: "100%",
                        }}
                    >
                        <TagInput
                            type="text"
                            className="newTag"
                            value={newTag}
                            onChange={(e) => handleOnChange(e)}
                        ></TagInput>
                        <AddTagBtn
                            type="submit"
                            onClick={(e) => addSkillByInput(e)}
                        >
                            Add
                        </AddTagBtn>
                    </form>
                    <TagsContainer style={{ gridArea: "3 / 1 / 5 / 5" }}>
                        {applicantSkills.length
                            ? applicantSkills.map((e: any) => (
                                  <Tag onClick={() => deleteSkill(e.id)} key={e.id}>
                                      {upperCase(e.name)}
                                  </Tag>
                              ))
                            : null}
                    </TagsContainer>
                </div>
            </SkillTags>
        );
    } else {
        return (
            <SkillTags>
                <Header>
                    <Titles>Skill tags</Titles>
                    <Edit onClick={() => switchFlag()}>Editar</Edit>
                </Header>
                <TagsContainer>
                    {applicantSkills.length
                        ? applicantSkills.map((e: any) => (
                              <Tag key={e.id}>{upperCase(e.name)}</Tag>
                          ))
                        : null}
                </TagsContainer>
            </SkillTags>
        );
    }
};
