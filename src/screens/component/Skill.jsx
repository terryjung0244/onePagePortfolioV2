import React from 'react'
import './../Style/skill.css'

const Skill = () => {
  return (
    <div className='skillMainCon'>
      <div className='skillTopCon'>
        <div className='skillTitleCon'>
          SkillSet
        </div>
        <div className='skillDescCon'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </div>
      </div>
      <div className='skillBottomCon'>
        <div className='skillLeftBottomCon'>
          <div className='skillDevCon'>
            Development Skills
          </div>
        </div>
        <div className='skillRightBottomCon'>
          <div className='skillProjectCon'>
            Project Skills
          </div>
          <div className='skillPersonalCon'>
            Personal Skills
          </div>
        </div>

      </div>
    </div>
  )
}

export default Skill
