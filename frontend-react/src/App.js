import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import logo from './assets/logo_main.jpg'
import Signup from './components/Signup';
import { useState } from 'react';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import UpdateProfile from './components/UpdateProfile';
import LanguagePage from './components/LanguagePage';

function App() {

  function langUpdater(d){
    updateLang(d)
  }

  const data={"hindi":{
    "videos":{
    "Introduction":"https://youtu.be/WkgdcOSsbCc?si=6rZ3rzSM6rqcN0dm",
    "Manners":"https://youtu.be/5cBchfv42Z0?si=LmzDg1jUzSE1qteL",
    "Greetings":"https://youtu.be/zQlQWjr8VxA?si=qbIZzmaqnwhzNNza",
    "Numbers":"https://youtu.be/Ej_Uc2Ym1Aw?si=Ym_Uc2Ym1AwEVTwY",
    "Colors":"https://youtu.be/Ej_Uc2Ym1Aw?si=Ym_Uc2Ym1AwEVTwY",
    "Family":"https://youtu.be/Ej_Uc2Ym1Aw?si=Ym_Uc2Ym1AwEVTwY",
    "Days":"https://youtu.be/Ej_Uc2Ym1Aw?si=Ym_Uc2Ym1AwEVTwY",
    "Months":"https://youtu.be/Ej_Uc2Ym1Aw?si=Ym_Uc2Ym1AwEVTwY",
    "Phrases":"https://youtu.be/Ej_Uc2Ym1Aw?si=Ym_Uc2Ym1AwEVTwY",
    "Vocabulary":"https://youtu.be/Ej_Uc2Ym1Aw?si=Ym_Uc2Ym1AwEVTwY"
    },
    "material":{"Study Material":"https://docs.google.com/document/d/1cCkI0lgjQPdMQtR3KVyYXJsALHYtAGTOyUtP9z4DFXA/edit",
    "Grammar Notes":"https://www.hindigrammar.com/",
    "Vocabulary Lists":"https://www.hinkhoj.com/wordbook/",
    "Exercises":"https://www.learninghindifromhome.com/exercises/",
    "Worksheets":"https://www.hindicentral.com/worksheets/"}
    },
    "tamil":{
    "videos":{
    "Greetings":"https://youtu.be/slBFVAQyyCw?si=YxaceOl_ryBEvtwY",
    "Numbers":"https://youtu.be/PwE-NQ469L4?si=cnMAqnZHyaorX13z",
    "Colors":"https://youtu.be/PwE-NQ469L4?si=cnMAqnZHyaorX13z",
    "Family":"https://youtu.be/PwE-NQ469L4?si=cnMAqnZHyaorX13z",
    "Days":"https://youtu.be/PwE-NQ469L4?si=cnMAqnZHyaorX13z",
    "Months":"https://youtu.be/PwE-NQ469L4?si=cnMAqnZHyaorX13z",
    "Phrases":"https://youtu.be/PwE-NQ469L4?si=cnMAqnZHyaorX13z",
    "Vocabulary":"https://youtu.be/PwE-NQ469L4?si=cnMAqnZHyaorX13z",
    "Alphabet":"https://youtu.be/PwE-NQ469L4?si=cnMAqnZHyaorX13z",
    "Pronunciation":"https://youtu.be/PwE-NQ469L4?si=cnMAqnZHyaorX13z"
    },
    "material":{"Study Material":"https://docs.google.com/document/d/1qBWaLrwYfaLTHYE0NJRkBigk7TVBJFVHjFKkQ1xF6m8/edit",
    "Grammar Notes":"https://www.tamilcube.com/tamil-grammar.aspx",
    "Vocabulary Lists":"https://www.tamildict.com/",
    "Exercises":"https://www.learntamil.com/exercises/",
    "Worksheets":"https://www.tamiltutor.com/worksheets/"}
    },
    "english":{
    "videos":{
    "Introduction":"https://youtu.be/RvubptBex7w?si=_htXq_BOisyweKbW",
    "Manners":"https://youtu.be/dmOKZLeFKCM?si=rWKCcR9r0jOnzScj",
    "Greetings":"https://youtu.be/s4OpGYSLsws?si=OrFD2sYR0BvBZ2Ic",
    "Numbers":"https://youtu.be/s4OpGYSLsws?si=OrFD2sYR0BvBZ2Ic",
    "Colors":"https://youtu.be/s4OpGYSLsws?si=OrFD2sYR0BvBZ2Ic",
    "Family":"https://youtu.be/s4OpGYSLsws?si=OrFD2sYR0BvBZ2Ic",
    "Days":"https://youtu.be/s4OpGYSLsws?si=OrFD2sYR0BvBZ2Ic",
    "Months":"https://youtu.be/s4OpGYSLsws?si=OrFD2sYR0BvBZ2Ic",
    "Phrases":"https://youtu.be/s4OpGYSLsws?si=OrFD2sYR0BvBZ2Ic",
    "Vocabulary":"https://youtu.be/s4OpGYSLsws?si=OrFD2sYR0BvBZ2Ic"
    },
    "material":{"Grammar Notes":"https://www.englishgrammar.org/",
    "Vocabulary Lists":"https://www.vocabulary.com/lists/",
    "Exercises":"https://www.englishclub.com/esl-exercises/",
    "Worksheets":"https://www.englishforeveryone.org/Topics/Reading-Comprehension-Worksheets.htm",
    "Writing Practice":"https://www.writingexercises.co.uk/"}
    },
    "marathi":{
    "videos":{
    "Introduction":"https://www.youtube.com/watch?v=5AFIR-YunKY",
    "Numbers":"https://www.youtube.com/watch?v=5Ipq3IfCTGI",
    "Greetings":"https://www.youtube.com/watch?v=x0tBwOcJY84",
    "Colors":"https://www.youtube.com/watch?v=x0tBwOcJY84",
    "Family":"https://www.youtube.com/watch?v=x0tBwOcJY84",
    "Days":"https://www.youtube.com/watch?v=x0tBwOcJY84",
    "Months":"https://www.youtube.com/watch?v=x0tBwOcJY84",
    "Phrases":"https://www.youtube.com/watch?v=x0tBwOcJY84",
    "Vocabulary":"https://www.youtube.com/watch?v=x0tBwOcJY84",
    "Alphabet":"https://www.youtube.com/watch?v=x0tBwOcJY84"
    },
    "material":{"Study Material":"https://docs.google.com/document/d/11_z9uIsmTehVJWabPnaO3F819rSzzt7boqoNIcDQQIk/edit#heading=h.5d2u3p5bearu",
    "Grammar Notes":"https://marathigrammar.com/",
    "Vocabulary Lists":"https://www.marathivishwakosh.com/",
    "Exercises":"https://marathiworld.com/exercises/",
    "Worksheets":"https://marathiworksheets.com/"}
    }
    };

  const [flag,updateFlag]=useState("home")
  const [lang, updateLang]=useState("empty")
  const [user,updateUser]=useState("User")
  return (
    <div>
      <Navbar logo={logo} flag={flag}/>
      <BrowserRouter>
      <Routes>
      <Route path=''  element={<Home user={user} updateFlag={updateFlag} updateLang={langUpdater}/>}/>
        <Route path='/login'  element={<Login logo={logo} updateFlag={updateFlag}/>}/>
        <Route path='/signup'  element={<Signup logo={logo} updateFlag={updateFlag}/>}/>
        <Route path='/update'  element={<UpdateProfile logo={logo} updateFlag={updateFlag}/>}/>
        <Route path='/language/:l' element={<LanguagePage langData={data} lang={lang}/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
