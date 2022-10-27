import React from 'react'
import ArticlesImage from '../../UI/my-image/ArticlesImage';
import classes from './WhereToRideArticle.module.css'
import DubaiImage from '../../images/dubai.png'

const WhereToRideArticle = () => {
    return (
        <article className={classes.article}>
            <h1 className={classes.title}>Где кататься</h1>
            <section className={classes.section}>
                <h3 className={classes.subtitle}>Подзаголовок</h3>
                <p className={classes.text}>
                    Товарищи! постоянный количественный рост и сфера нашей активности позволяет
                    выполнять важные задания по разработке направлений прогрессивного развития.
                    Идейные соображения высшего порядка, а также постоянный количественный рост и сфера
                    нашей активности играет важную роль в формировании позиций, занимаемых участниками в
                    отношении поставленных задач.

                    Таким образом дальнейшее развитие различных форм деятельности способствует подготовки
                    и реализации позиций, занимаемых участниками в отношении поставленных задач.
                </p>
                <div className={classes.images}>
                    <ArticlesImage src={DubaiImage} width={300} height={220} name="image" />
                    <ArticlesImage src={DubaiImage} width={300} height={220} name="image"/>
                    <ArticlesImage src={DubaiImage} width={300} height={220} name="image"/>
                </div>
            </section>
        </article>
    );
};

export default WhereToRideArticle