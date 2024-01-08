import React from 'react'


const textContent = {
  day: 'Hétfő - Vasárnap',
  time: '13:00 - 23:30',
 
}

const textContentEn = {
  day: 'Monday - Sunday',
  time: '13:00 - 23:30',
}

const ContactItems = ({lang}) => {

  const textLangLogic1 = !lang ? textContent.day : textContentEn.day;
  const textLangLogic2 = !lang ? textContent.time : textContentEn.time;
  const textLangLogic3 = !lang ? textContent.day2 : textContentEn.day2;
  const textLangLogic4 = !lang ? textContent.time2 : textContentEn.time2;


  return (
    <>
        <div>
            <p>{textLangLogic1}</p>
            <p>{textLangLogic2}</p>
         </div>
    </>
  )
}

export default ContactItems