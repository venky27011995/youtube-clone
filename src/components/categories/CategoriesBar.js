import React from 'react'
import "./_categories.scss"

const keywords = [
  'All','React JS','Angular JS','React Native','use of API','Redux','Music','Algorithm Art','Guiar','Telugu Songs','Programming','Cricket','Football','Real Madrid','Gatsby',
]
const CategoriesBar = () => {
  return (
    <div className='categoriesBar'>
      {
        keywords.map((keyword)=>(
          <div className='categoriesBar__keyword'>{keyword}</div>
        ))
      }
    </div>
  )
}

export default CategoriesBar