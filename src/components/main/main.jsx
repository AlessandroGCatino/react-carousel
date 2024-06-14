import { useState, useEffect } from 'react';
import style from './main.module.scss';
import Card from '../card.jsx'
import { IoArrowBackCircle, IoArrowForwardCircle } from "react-icons/io5";
import { GoDot, GoDotFill } from "react-icons/go";
import {posts} from '../../db/postDb.js'

const Main = () => {

    const [currentPost, setCurrentPost] = useState(0)

    const handleBack = () => {
        if (currentPost==0) {
            setCurrentPost(posts.length-1)
        } else {
            setCurrentPost(currentPost-1)
        }
    }

    const handleForward = () => {
        if (currentPost==posts.length-1) {
            setCurrentPost(0)
        } else {
            setCurrentPost(currentPost+1)
        }
    }

    const setDefined = (index) => () => {
        setCurrentPost(index);
    };

    useEffect(() => {
        const interval = setInterval(handleForward, 2000);
        return () => clearInterval(interval);
      }, [currentPost]);

    return (
        <div className={style.mainBackground}>
            <div>

                <IoArrowBackCircle className={style.arrows} onClick={handleBack}/>
                <Card 
                    key={`cards${posts[currentPost].id}`}
                    title={posts[currentPost].title} 
                    image={posts[currentPost].image} 
                    content={posts[currentPost].content}
                    tags = {posts[currentPost].tags}
                    published={posts[currentPost].published}
                    />
                <IoArrowForwardCircle className={style.arrows} onClick={handleForward}/>
            
            </div>
            <div className={style.bullets}>
                {
                    posts.map((post, index) => {
                        return index == currentPost ?
                            <GoDotFill 
                                key={`bulletF${index}`}/> 
                        : 
                            <GoDot 
                                key={`bulletE${index}`} 
                                onClick={setDefined(index)}/>
                    })
                }
            </div>
        </div>
    )
}

export default Main;