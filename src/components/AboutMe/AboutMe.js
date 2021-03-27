import Media from 'components/Media/Media';
import Content from 'components/Content/Content';
import Banner from 'components/Banner/Banner'
import person from 'assets/person.jpg';

const contentData = {
    title: "About Me",
    subtitle: "Hi Everyone!! This is Souvik Karmakar ,Currently pursuing Btech in Electronics and Electrical Engineering with a minor in Data Analytics from KIIT University ,Bhubaneswar and skilled in  html ,react, mongodb, node js or in simple words Full stack developer and also enthusiatic for Machine Learning. Love to innovate and Interested in Technology and am always eager to learn anything that is new and impactful. ",
}

const AboutMe = () => {
    return ( 
        <div id="aboutMe">
        <Banner start={<Media imageSrc={person}/>} end={<Content {...contentData}/>}/>
        </div>
     );
}
 
export default AboutMe;