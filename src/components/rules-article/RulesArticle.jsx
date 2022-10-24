import React from 'react'
import classes from './RulesArticle.module.css'

const RulesArticle = () => {
    return (
        <article className={classes.article}>
            <h1 className={classes.title}>Правила</h1>
            <section className={classes.section}>
                <h3 className={classes.subtitle}>Условия аренды</h3>
                <section className={classes.subsection}>
                    <h4 className={classes.caption}>Срок аренды</h4>
                    <p className={classes.text}>Минимальный срок аренды велосипеда составляет 1 день. При брони от 5 дней действует скидка 10%</p>
                </section>
                <section className={classes.subsection}>
                    <h4 className={classes.caption}>Срок аренды</h4>
                    <p className={classes.text}>Минимальный срок аренды велосипеда составляет 1 день. При брони от 5 дней действует скидка 10%</p>
                </section>
            </section>
            <section className={classes.section}>
                <h3 className={classes.subtitle}>Условия аренды</h3>
                <p className={classes.text}>Товарищи! постоянный количественный рост и сфера нашей активности позволяет выполнять важные задания
                    по разработке направлений прогрессивного развития. Идейные соображения высшего порядка, а также
                    постоянный количественный рост и сфера нашей активности играет важную роль в формировании позиций,
                    занимаемых участниками в отношении поставленных задач.
                    Таким образом дальнейшее развитие различных форм деятельности способствует подготовки и реализации
                    позиций, занимаемых участниками в отношении поставленных задач.
                </p>
            </section>
        </article>
    );
};

export default RulesArticle