import Media from 'components/Media/Media';
import Content from 'components/Content/Content';
import Banner from 'components/Banner/Banner'
import skills from 'assets/skills.jpg';

const contentData = {
    title: "Skills",
    subtitle: "C programming ,Python , Data struckture , Css , Java script , HTML",
    listTitle: "Other Skills",
    list: ["Team Player", "Punctual", "Quick Learner"]
}

const Skill = () => {
    return ( 
        <div id="skills">
            <Banner end={<Media imageSrc={skills} />} start={<Content {...contentData}/>}/>
        </div>
     );
}
 
export default Skill;