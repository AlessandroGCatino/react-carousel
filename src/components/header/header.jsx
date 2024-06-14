import style from './header.module.scss';
import tagStyles from '../main/main.module.scss'
import { posts } from '../../db/postDb';

const allTags = []
posts.forEach(post => post.tags.map(tag => 
    {
        if(!allTags.includes(tag)){
            allTags.push(tag)
        }
}));

const tagColors = {
    'html': tagStyles.red,
    'css': tagStyles.blue,
    'js': tagStyles.sand,
    'php': tagStyles.purple
}

const Header = () => {
    return (
        <div className={style.headerBackground}>
            <h1>Il mio blog</h1>
            <ul>
                {
                    allTags.map((tag, index) => 
                    <li key={`secList${index}`} className={tagColors[tag] || tagStyles.default}>{tag}</li>)
                }
            </ul>

        </div>
        
    )
}

export default Header;