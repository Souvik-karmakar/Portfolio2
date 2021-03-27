import Media from 'components/Media/Media';
import Content from 'components/Content/Content';
import Banner from 'components/Banner/Banner'
import university from 'assets/university.jpg';

const contentData = {
    title: "Education",
   // subtitle: "Stu",
   // listTitle: "I am",
    list: ["Btech from KIIT University: CGPA 9.34(till 5 th Sem)", "Higher Secondary from E.R.H.S , Asansol : WBCHSE : 82%" ,"Secondary from E.R.H.S , Asansol : 88.57%"]
}

const Education = () => {
    return ( 
        <div id="education">
        <Banner start={<Media imageSrc={university} />} end={<Content {...contentData}/>}/>
        </div>
     );
}
 
export default Education;