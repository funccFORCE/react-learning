
import React from "react"
import ContentCard from "./ContentCard"

function ContentList() {
  const styles={ fontWeight: '900'}
  return(
    <div className='content-list'>
      <h4>THE 93RD ACADEMY AWARDS</h4> 
      <h2 className='head' style={styles}>Best Picture Nominations</h2>
      <div className='content-items'>
        <ContentCard 
         title='Nomadland' 
         source='https://thereader.com/wp-content/uploads/2021/03/Film-NomadlandReview-202104-Image.jpg' 
         direction='Chloé Zhao' />
        <ContentCard 
         title='The Father'
         source='https://img2.looper.com/img/gallery/heres-how-you-can-watch-the-father/the-father-is-one-of-the-years-strangest-and-best-movies-1619203031.jpg' 
         direction='Florian Zeller' />
        <ContentCard 
         title='Judas and the Black Messiah' 
         source='https://variety.com/wp-content/uploads/2020/11/Judas-and-the-Black-Messiah.jpg' 
         direction='Shaka King' />
        <ContentCard 
         title='Promising Young Woman' 
         source='https://static3.srcdn.com/wordpress/wp-content/uploads/2020/12/Promising-Young-Woman.jpg' 
         direction='Emerald Fennell' />
     </div>
     <hr />
    </div>
  )
}

export default ContentList