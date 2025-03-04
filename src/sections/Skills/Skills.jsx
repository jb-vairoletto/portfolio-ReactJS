import lightMarkIcon from '../../assets/checkmark-light.svg'
import darkMarkIcon from '../../assets/checkmark-dark.svg'
import { useTheme } from '../../common/ThemeContext'
import styles from './SkillsStyles.module.css'
import SkillList from '../../common/SkillList'

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? lightMarkIcon : darkMarkIcon;
  return (
    <section id='skills' className={styles.container}>
        <h1 className='sectionTitle'>Skills</h1>
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill='HTML'/>
            <SkillList src={checkMarkIcon} skill='CSS'/>
            <SkillList src={checkMarkIcon} skill='JavaScript'/>
            <SkillList src={checkMarkIcon} skill='TypeScript'/>
            <SkillList src={checkMarkIcon} skill='ReactJS'/>
            <SkillList src={checkMarkIcon} skill='NodeJS'/>
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill='C'/>
            <SkillList src={checkMarkIcon} skill='Python'/>
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill='Sql Server'/>
            <SkillList src={checkMarkIcon} skill='My SQL'/>
            <SkillList src={checkMarkIcon} skill='Git'/>
        </div>
    </section>
  )
}

export default Skills