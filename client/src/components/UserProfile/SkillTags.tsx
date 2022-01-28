import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddTagBtn, Edit, Header, SkillTags, Tag, TagInput, TagsContainer, TagsSelect, Titles } from './Styles';

export const SkillTagsComp = () => {

    const dispatch = useDispatch();
    const skillsArray = useSelector((state: any) => state.userReducer.skillTags)
    const [flag, setFlag] = useState(false);

    const switchFlag = () => {
        flag === false ? setFlag(true) : setFlag(false);
    }
    
    const [skillsSelected, setSkillsSelected] = useState<any>({
        skills: []
    });

    const [newTag, setNewTag] = useState('');

    const selectSkill = (e: any) => {
        e.preventDefault();
        for (let i = 0; i < skillsSelected.skills.length; i++) {
            if (e.target.value === skillsSelected.skills[i]) {
                alert(`Ya seleccionaste ${e.target.value}`)
                return
            }
        }
        setSkillsSelected({
            ...skillsSelected,
            skills: [...skillsSelected.skills, e.target.value]
        })
    }

    const deleteSkill = (e: any) => {
        console.log(e)
        setSkillsSelected({
            ...skillsSelected,
            skills: skillsSelected.skills.filter((s: any) => s !== e)
        })
    }

    const handleSubmit = () => {
        // dispatch(tagsSelected(skillsSelected.skills));
        switchFlag();
    }

    const handleOnChange = (e: any) => {
        setNewTag(e.target.value)
    }
    
    const addSkillByInput = (e: any) => {
        e.preventDefault()
        for (let i = 0; i < skillsSelected.skills.length; i++) {
            if (newTag === skillsSelected.skills[i]) {
                alert(`Ya seleccionaste ${newTag}`)
                setNewTag('')
                return
            }
        }
        setSkillsSelected({
            ...skillsSelected,
            skills: [...skillsSelected.skills, newTag]
        })
        setNewTag('')
    }

    if (flag) {
        return (
            <SkillTags>
                <Header>
                    <Titles>Skill tags</Titles>
                    <Edit onClick={() => handleSubmit()}>Guardar</Edit>
                </Header>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gridTemplateRows: 'repeat(4, 1fr)',
                    gridColumnGap: '0px',
                    gridRowGap: '0px',
                    width: '100%',
                    alignItems: 'center',
                    justifyItems: 'center',
                }}>
                    <TagsSelect style={{gridArea: '2 / 1 / 3 / 5'}} className='skills-select' value={skillsSelected} onChange={(e) => selectSkill(e)}>
                        <option>Selecciona tags</option>
                        {skillsArray.map((tag: any) => <option value={tag} key={tag}>{tag.charAt(0).toUpperCase() + tag.slice(1)}</option>)}
                    </TagsSelect>
                    
                    <form style={{
                        gridArea: '1 / 1 / 2 / 5',
                        width: '100%'
                    }}>
                        <TagInput type="text" className="addSkill" value={newTag} onChange={(e)=>handleOnChange(e)}></TagInput>
                        <AddTagBtn type="submit" onClick={(e) => addSkillByInput(e)}>Add</AddTagBtn>
                    </form>
                    <TagsContainer style={{gridArea: '3 / 1 / 5 / 5'}}>
                        {
                            skillsSelected.skills.length
                            ? skillsSelected.skills.map((e: any) => <Tag onClick={() => deleteSkill(e)} key={e}>{e}</Tag>)
                            : null
                        }
                    </TagsContainer>
                </div>
            </SkillTags>
        )
    } else {
        return (
            <SkillTags>
                <Header>
                    <Titles>Skill tags</Titles>
                    <Edit onClick={() => switchFlag()}>Editar</Edit>
                </Header>
                <TagsContainer>
                    {
                        skillsSelected.skills.length
                        ? skillsSelected.skills.map((e: any) => <Tag key={e}>{e}</Tag>)
                        : null
                    }
                </TagsContainer>
            </SkillTags>
        )
    }
};
