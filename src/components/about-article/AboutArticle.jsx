import React from 'react'
import classes from './AboutArticle.module.css'
import raceImage from '../../images/raceimage.png'
import ArticlesImage from '../../UI/my-image/ArticlesImage';


const AboutArticle = () => {
    return (
        <article className={classes.container}>
            <section className={classes.section}>
                <h1 className={classes.title}>О нас</h1>
                <p className={classes.text}>Товарищи! постоянный количественный рост и сфера нашей активности
                    позволяет выполнять важные задания по разработке направлений
                    прогрессивного развития. Идейные соображения высшего порядка,
                    а также постоянный количественный рост и сфера нашей активности
                    играет важную роль в формировании позиций, занимаемых участниками
                    в отношении поставленных задач.
                </p>
                <p className={classes.text}>Таким образом дальнейшее развитие
                    различных форм деятельности способствует подготовки и реализации позиций,
                    занимаемых участниками в отношении поставленных задач.
                </p>
            </section>
            <ArticlesImage name="raceimage.png" src={raceImage} width={300} height={200} alt="raceimage"/>
        </article>
    );
};

export default AboutArticle