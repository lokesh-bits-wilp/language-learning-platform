import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import logo from './assets/logo_main.jpg'
import Signup from './components/Signup';
import { useState,useEffect } from 'react';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import UpdateProfile from './components/UpdateProfile';
import LanguagePage from './components/LanguagePage';
import EnglishTest from './components/EnglishTest';
import MessageBox from './components/MessageBox';

function App() {

  useEffect(()=>{
    function updateMe(){
      setTimeout(()=>{updateMes(false)},3000)
    }
    updateMe();}
  )

  const [pref, updatePref]=useState(['Action Successful !!','red'])

  function langUpdater(d){
    updateLang(d)
  }

  const qData = {
    "english": [
      { id: 1, question: 'What is the subject pronoun for "he" in English?', answer: 'He' },
      { id: 2, question: 'What is the plural form of "child"?', answer: 'Children' },
      { id: 3, question: 'What is the past tense of the verb "go"?', answer: 'Went' },
      { id: 4, question: 'What is the opposite of "hot"?', answer: 'Cold' },
      { id: 5, question: 'What is the verb form of "education"?', answer: 'Educate' },
      { id: 6, question: 'What is the comparative form of "good"?', answer: 'Better' },
      { id: 7, question: 'What is the plural form of "mouse"?', answer: 'Mice' },
      { id: 8, question: 'What is the past participle of "break"?', answer: 'Broken' },
      { id: 9, question: 'What is the opposite of "happy"?', answer: 'Sad' },
      { id: 10, question: 'What is the verb form of "beauty"?', answer: 'Beautify' },
    ],
    "hindi": [
      { id: 1, question: 'हिंदी में "मैं" का विलोम क्या है?', answer: 'तू' },
      { id: 2, question: 'हिंदी में "लड़का" का बहुवचन क्या है?', answer: 'लड़के' },
      { id: 3, question: 'हिंदी में "खाना" का भूतकाल क्या है?', answer: 'खाया' },
      { id: 4, question: 'हिंदी में "बड़ा" का विलोम क्या है?', answer: 'छोटा' },
      { id: 5, question: 'हिंदी में "पढ़ना" का क्रिया रूप क्या है?', answer: 'पढ़ा' },
      { id: 6, question: 'हिंदी में "अच्छा" का अपेक्षात्मक रूप क्या है?', answer: 'बेहतर' },
      { id: 7, question: 'हिंदी में "किताब" का बहुवचन क्या है?', answer: 'किताबें' },
      { id: 8, question: 'हिंदी में "लिखना" का भूतकालिक क्रिया विशेषण क्या है?', answer: 'लिखा' },
      { id: 9, question: 'हिंदी में "खुश" का विलोम क्या है?', answer: 'दुखी' },
      { id: 10, question: 'हिंदी में "सुंदर" का क्रिया रूप क्या है?', answer: 'सुंदरता' },
    ],
    "tamil": [
      { id: 1, question: 'தமிழில் "நான்" என்பதன் எதிர்ச்சொல் என்ன?', answer: 'நீ' },
      { id: 2, question: 'தமிழில் "பையன்" என்பதன் பன்மை வடிவம் என்ன?', answer: 'பையன்கள்' },
      { id: 3, question: 'தமிழில் "சாப்பிடு" என்பதன் கடந்த காலம் என்ன?', answer: 'சாப்பிட்டான்' },
      { id: 4, question: 'தமிழில் "பெரிய" என்பதன் எதிர்ச்சொல் என்ன?', answer: 'சிறிய' },
      { id: 5, question: 'தமிழில் "படி" என்பதன் வினைச்சொல் வடிவம் என்ன?', answer: 'படித்தான்' },
      { id: 6, question: 'தமிழில் "நல்ல" என்பதன் ஒப்பீட்டு வடிவம் என்ன?', answer: 'நன்றாக' },
      { id: 7, question: 'தமிழில் "எலி" என்பதன் பன்மை வடிவம் என்ன?', answer: 'எலிகள்' },
      { id: 8, question: 'தமிழில் "எழுது" என்பதன் கடந்த காலப் பொருள் என்ன?', answer: 'எழுதினான்' },
      { id: 9, question: 'தமிழில் "மகிழ்ச்சி" என்பதன் எதிர்ச்சொல் என்ன?', answer: 'துக்கம்' },
      { id: 10, question: 'தமிழில் "அழகு" என்பதன் வினைச்சொல் வடிவம் என்ன?', answer: 'அழகுபடுத்து' },
    ],
    "marathi": [
      { id: 1, question: 'मराठीत "मी" चा विरुद्ध शब्द काय आहे?', answer: 'तू' },
      { id: 2, question: 'मराठीत "मुलगा" चा बहुवचन काय आहे?', answer: 'मुलगे' },
      { id: 3, question: 'मराठीत "खा" चे भूतकाळ काय आहे?', answer: 'खाल्ले' },
      { id: 4, question: 'मराठीत "मोठा" चा विरुद्ध शब्द काय आहे?', answer: 'लहान' },
      { id: 5, question: 'मराठीत "वाच" चे क्रियापद काय आहे?', answer: 'वाचले' },
      { id: 6, question: 'मराठीत "चांगला" चे तुलनात्मक रूप काय आहे?', answer: 'बरा' },
      { id: 7, question: 'मराठीत "पुस्तक" चा बहुवचन काय आहे?', answer: 'पुस्तके' },
      { id: 8, question: 'मराठीत "लिहि" चे भूतकाळ क्रियाविशेषण काय आहे?', answer: 'लिहिले' },
      { id: 9, question: 'मराठीत "आनंद" चा विरुद्ध शब्द काय आहे?', answer: 'दु:ख' },
      { id: 10, question: 'मराठीत "सुंदर" चे क्रियापद काय आहे?', answer: 'सुंदरीकरण' },
    ]
  };
  

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
  const [mes, updateMes]=useState(false)
  return (
    <div>
      {mes && <MessageBox message={pref[0]} clr={pref[1]}/>}
      <Navbar logo={logo} flag={flag}/>
      <BrowserRouter>
      <Routes>
      <Route path='/'  element={ <Login logo={logo} updateFlag={updateFlag} updatePref={updatePref} updateMes={updateMes}/>}/>
        <Route path='/home' element={<Home updateFlag={updateFlag} updateLang={langUpdater}/>}>
        </Route>
        <Route path='/signup'  element={<Signup logo={logo} updateFlag={updateFlag} updatePref={updatePref} updateMes={updateMes}/>}/>
        <Route path='/update'  element={<UpdateProfile updatePref={updatePref} updateMes={updateMes} logo={logo} updateFlag={updateFlag}/>}/>
        <Route path='/language/:l' element={<LanguagePage langData={data} lang={lang}/>}></Route>
        <Route path='/test/:l' element={<EnglishTest qData={qData} />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
