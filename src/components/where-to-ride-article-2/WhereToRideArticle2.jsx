import React from 'react'
import ArticlesImage from '../../UI/my-image/ArticlesImage';
import DubaiImage from '../../images/dubai.png'
import classes from './WhereToRideArticle2.module.css'

const WhereToRideArticle2 = () => {
    return (
        <article className={classes.article}>
            <section className={classes.section}>
                <h3 className={classes.subtitle}>Подзаголовок</h3>
                <p className={classes.text}>
                    Товарищи! постоянный количественный рост и сфера нашей 
                    активности позволяет выполнять важные задания по разработке
                    направлений прогрессивного развития. Идейные соображения высшего
                    порядка, а также постоянный количественный рост и сфера нашей активности
                    играет важную роль в формировании позиций, занимаемых участниками в отношении
                    поставленных задач.

                    Таким образом дальнейшее развитие различных форм деятельности способствует
                    подготовки и реализации позиций, занимаемых участниками в отношении поставленных задач.
                </p>
                <ArticlesImage src={DubaiImage} width={360} height={262} name="image" />
            </section>
            
            <section className={classes.images}>
                <h3 className={classes.subtitle}>Подзаголовок</h3>
                <div className={classes.images}>
            <ArticlesImage src={DubaiImage} width={360} height={262} name="image" figcaption="Товарищи! постоянный количественный рост и сфера нашей активности позволяет"/>
            <ArticlesImage src={DubaiImage} width={360} height={262} name="image" figcaption="Товарищи! постоянный количественный рост и сфера нашей активности позволяет"/>
            <ArticlesImage src={DubaiImage} width={360} height={262} name="image" figcaption="Товарищи! постоянный количественный рост и сфера нашей активности позволяет"/>
            </div>
            </section>
        </article>
    );
};

export default WhereToRideArticle2