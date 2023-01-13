import "./Querys.css";
import Query from "./Query";
import { useState, useEffect } from "react";
const Querys = () => {
  // const [index, setIndex] = useState(1);
  // let data = [];
  // useEffect(() => {
  //   if (index < 20) {
  //     fetch(`https://sinabaradaran.iran.liara.run/query${index}`)
  //       .then((res) => res.json())
  //       .then((acData) => {
  //         setIndex(index + 1);
  //         console.log(acData);
  //         data.push(acData);
  //       });
  //   }
  // }, [index]);

  return (
    <>
      <div className="Querys-container">
        <Query
          code={`select maindb.students.Name , maindb.students.Birth_Date\nfrom maindb.students\nwhere maindb.students.Student_ID = 11118`}
          number={1}
          text={"نام و تاریخ تولد دانشجو"}
        />
        <Query
          code={`select maindb.students.Name , maindb.students.Birth_Date\nfrom maindb.students , maindb.groups , maindb.groups_student\nwhere maindb.groups.Groupe_ID = maindb.groups_student.Group_ID and\nmaindb.students.Student_ID = maindb.groups_student.Student_ID and\nmaindb.groups.Group_Name = 'Computer';`}
          number={2}
          text={"نام وتاریخ تولد دانشجوی کامپیوتر"}
        />
        <Query
          code={`select students.Name,count(students.Student_ID) as NumberOfStudents
from maindb.students , maindb.groups , maindb.groups_student
where maindb.groups.Groupe_ID = maindb.groups_student.Group_ID and
maindb.students.Student_ID = maindb.groups_student.Student_ID and
maindb.groups.Group_Name = 'Computer'
group by maindb.students.Student_ID`}
          number={3}
          text={"تعداد دانشجویان گروه کامپیوتر"}
        />
        <Query
          code={`select count(maindb.students.Student_ID) as NumberOfStudents
from maindb.students , maindb.groups , maindb.groups_student , maindb.course_student_professor_term , maindb.terms
where maindb.groups.Groupe_ID = maindb.groups_student.Group_ID and
maindb.students.Student_Code = groups_student.Student_ID and
maindb.groups.Group_Name = 'computer' and
maindb.course_student_professor_term.Student_ID = maindb.students.Student_ID and
maindb.course_student_professor_term.Term_ID = maindb.terms.Term_ID and
maindb.terms.Description = 'fall of 2018 and winter of 2018';`}
          number={4}
          text={" تعداد دانشجویان گروه کامپیوتر نیمسال اول سال 2018"}
        />
        <Query
          code={`select maindb.courses.Course_Name
from maindb.courses , maindb.professors , maindb.terms , maindb.course_student_professor_term
where maindb.courses.Course_ID = maindb.course_student_professor_term.Course_ID and
maindb.professors.Professor_ID = maindb.course_student_professor_term.Professor_ID and
maindb.terms.Term_ID = maindb.course_student_professor_term.Term_ID and
maindb.professors.Professor_ID = 1113 and
maindb.terms.Term_ID = 20191;`}
          number={5}
          text={
            "نام درس هایی که استادی با کد استادی 1113 در نیمسال اول 2019 ارائه کرده است"
          }
        />
        <Query
          code={`select maindb.groups.Group_Name
from maindb.groups , maindb.courses , maindb.groups_course
where maindb.groups.Groupe_ID = maindb.groups_course.Group_ID and
maindb.courses.Course_ID = maindb.groups_course.Course_ID and
maindb.courses.Course_Name = 'Data base';`}
          number={6}
          text={"نام گروه هایی که درس پایگاه داده در آن ها ارائه میشود"}
        />
        <Query
          code={`select count(maindb.students.Student_ID)  as NumberOfStudents
from maindb.students , maindb.courses , maindb.terms , maindb.course_student_professor_term
where maindb.students.Student_ID = maindb.course_student_professor_term.Student_ID and
maindb.courses.Course_ID = maindb.course_student_professor_term.Course_ID and
maindb.terms.Term_ID = maindb.course_student_professor_term.Term_ID and
maindb.course_student_professor_term.Grade > 12 and
maindb.courses.Course_Name = 'Data Structure';`}
          number={7}
          text={"تعداد دانشجویانی که نمره درس پایگاه داده را بالای 12 شده اند"}
        />
        <Query
          code={`select maindb.terms.Term_ID , count(maindb.students.Student_ID) as NumberOfStudents
from maindb.students , maindb.courses , maindb.terms , maindb.course_student_professor_term
where maindb.students.Student_ID = maindb.course_student_professor_term.Student_ID and
maindb.courses.Course_ID = maindb.course_student_professor_term.Course_ID and
maindb.terms.Term_ID = maindb.course_student_professor_term.Term_ID and
maindb.course_student_professor_term.Grade > 15 and
maindb.courses.Course_Name = 'Data Structure'
group by terms.Term_ID`}
          number={8}
          text={
            "تعداد دانشجویانی که نمره درس پایگاه داده را بالای 15 شده اند (به تفکیک ترم)"
          }
        />
        <Query
          code={`select sum(maindb.course_student_professor_term.Grade * maindb.courses.Units) / sum( maindb.courses.Units) as GPA
from maindb.courses , maindb.course_student_professor_term , maindb.students
where maindb.courses.Course_ID = maindb.course_student_professor_term.Course_ID and
maindb.students.Student_ID = maindb.course_student_professor_term.Student_ID and
maindb.students.Name = 'Reza Farshi';`}
          number={9}
          text={"معدل دانشجویی به نام رضا فرشی"}
        />
        <Query
          code={`select maindb.courses.Course_Name
from maindb.courses , maindb.students , maindb.course_student_professor_term 
where maindb.courses.Course_ID = maindb.course_student_professor_term.Course_ID and
maindb.students.Student_ID = maindb.course_student_professor_term.Student_ID and
maindb.students.Name = 'Kian Hosseini';`}
          number={10}
          text={"درس های اخذ شده توسط دانشجویی به نام کیان حسینی"}
        />
        <Query
          code={`select sum(maindb.course_student_professor_term.Grade * maindb.courses.Units) / sum(maindb.courses.Units) as GPA
from course_student_professor_term , courses , students
where maindb.courses.Course_ID = maindb.course_student_professor_term.Course_ID and
maindb.students.Student_ID = maindb.course_student_professor_term.Student_ID and
maindb.students.Name = 'Behrooz Eshghi';`}
          number={11}
          text={
            "جمع نمرات درس های اخذ شده دانشجویی به نام بهروز عشقی با احتساب تعداد واحد"
          }
        />
        <Query
          code={`select sum(maindb.courses.Units) as numberOfUnits
from maindb.courses , maindb.students , maindb.course_student_professor_term
where maindb.courses.Course_ID = maindb.course_student_professor_term.Course_ID and
maindb.students.Student_ID = maindb.course_student_professor_term.Student_ID and
maindb.students.Name = 'Behrooz Eshghi';`}
          number={12}
          text={"تعداد واحد اخذ شده دانشجویی به نام بهروز عشقی"}
        />
        <Query
          code={`select  maindb.terms.Term_ID , count(*) as count
from maindb.professors , maindb.terms , maindb.course_student_professor_term
where maindb.professors.Professor_ID = maindb.course_student_professor_term.Professor_ID and
maindb.terms.Term_ID = maindb.course_student_professor_term.Term_ID and
maindb.professors.Professor_ID = 1116
group by maindb.terms.Term_ID;`}
          number={13}
          text={
            "تعداد دانشجویانی که با استادی باشماره کد استادی 1116 در هر ترم درش داشتند"
          }
        />
        <Query
          code={`select avg(maindb.course_student_professor_term.Grade) as avg
from maindb.course_student_professor_term , maindb.courses , maindb.terms , maindb.professors
where maindb.courses.Course_ID = maindb.course_student_professor_term.Course_ID and
maindb.professors.Professor_ID = maindb.course_student_professor_term.Professor_ID and
maindb.terms.Term_ID = maindb.course_student_professor_term.Term_ID and
maindb.courses.Course_Name = 'Data Structure' and
maindb.terms.Description = 'Spring of 2019 and summer of 2019' and
maindb.professors.Professor_ID = 1113;`}
          number={14}
          text={
            "میانگین نمره کلاس درس ساختمان داده استادی با شماره استادی 1113 در نیمسال دوم 2019"
          }
        />
        <Query
          code={`select maindb.students.Name
from maindb.students , maindb.courses , maindb.professors , maindb.terms , maindb.course_student_professor_term
where maindb.courses.Course_ID = maindb.course_student_professor_term.Course_ID and
maindb.students.Student_ID = maindb.course_student_professor_term.Student_ID and
maindb.professors.Professor_ID = maindb.course_student_professor_term.Professor_ID and
maindb.terms.Term_ID = maindb.course_student_professor_term.Term_ID and
maindb.courses.Course_Name = 'Data Structure' and
maindb.terms.Description = 'Spring of 2019 and summer of 2019' and
maindb.professors.Professor_ID = 1113 and
maindb.course_student_professor_term.Grade > (select avg(maindb.course_student_professor_term.Grade)
from maindb.course_student_professor_term , maindb.courses , maindb.terms , maindb.professors
where maindb.courses.Course_ID = maindb.course_student_professor_term.Course_ID and
maindb.professors.Professor_ID = maindb.course_student_professor_term.Professor_ID and
maindb.terms.Term_ID = maindb.course_student_professor_term.Term_ID and
maindb.courses.Course_Name = 'Data Structure' and
maindb.terms.Description = 'Spring of 2019 and summer of 2019' and
maindb.professors.Professor_ID = 1113);`}
          number={15}
          text={
            "نام دانشجویانی که نمره درس ساختما داده آن ها در نیمسال دوم 2019 با استادی به شماره استادی 1113 بیشتر از میانگین کلاس می باشد"
          }
        />
        <Query
          code={`select maindb.terms.Term_ID , avg(maindb.course_student_professor_term.Grade) as avg
from maindb.course_student_professor_term , maindb.courses , maindb.terms
where maindb.courses.Course_ID = maindb.course_student_professor_term.Course_ID and
maindb.terms.Term_ID = maindb.course_student_professor_term.Term_ID and
maindb.courses.Course_Name = 'Data Base'
group by maindb.course_student_professor_term.Term_ID;`}
          number={16}
          text={"میانگین نمره درس پایگاه داده در هر ترم"}
        />
        <Query
          code={`select max(maindb.course_student_professor_term.Grade) as max
from maindb.course_student_professor_term , maindb.courses 
where maindb.courses.Course_ID = maindb.course_student_professor_term.Course_ID and
maindb.courses.Course_Name = 'Data Base';`}
          number={17}
          text={"ماکزیمم نمره درس پایگاه داده"}
        />
        <Query
          code={`select maindb.students.Name
from maindb.students , maindb.course_student_professor_term
where maindb.students.Student_Code = maindb.course_student_professor_term.Student_ID and
maindb.course_student_professor_term.Grade in (select max(course_student_professor_term.Grade)
from maindb.course_student_professor_term , maindb.courses
where maindb.courses.Course_ID = maindb.course_student_professor_term.Course_ID and
maindb.courses.Course_Name = 'Data Base');`}
          number={18}
          text={"نام دانشجویی که بالاترین نمره درس پایگاه داده را گرفته است"}
        />
        <Query
          code={`select maindb.students.Student_ID, maindb.terms.Term_ID, sum(maindb.course_student_professor_term.Grade * maindb.courses.Units) / sum(maindb.courses.Units) as GPA
from maindb.students , maindb.terms , maindb.courses , maindb.course_student_professor_term 
where maindb.students.Student_ID = maindb.course_student_professor_term.Student_ID and
maindb.courses.Course_ID = maindb.course_student_professor_term.Course_ID and
maindb.terms.Term_ID = maindb.course_student_professor_term.Term_ID
group by maindb.students.Student_ID , maindb.terms.Term_ID;`}
          number={19}
          text={"معدل هر دانشجو به تفکیک ترم"}
        />
      </div>
    </>
  );
};
export default Querys;
