import React from 'react'
import Article from './Article'

function ArticleList(prop){
    console.log("📚 ~ file: ArticleList.js:5 ~ ArticleList ~ prop:", prop);

    return (
        <main>
            {prop.posts.map(
                (item) =>{return(
                    
                    
                    <Article key={item.id} title={item.title}
                        date={item.date} preview={item.preview}
                    />
                )}
            )}
        </main>
    )
}

export default ArticleList