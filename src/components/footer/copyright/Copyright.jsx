import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Copyright.module.css'

const Copyright = () => {
    return (
        <div className={classes.copyright}>
            <div className={classes.text}>© BikePark, 2021</div>
            <div className={classes.policy}><NavLink to="/policy">Политика конфиденциальности</NavLink></div>
            <section className={classes.social}>
                <a href='https://www.facebook.com/'>
                    <svg width="11" height="23" viewBox="0 0 11 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.80805 23V12.2077H0V8.322H2.80805V5.00307C2.80805 2.39504 4.46677 0 8.28882 0C9.83631 0 10.9806 0.150765 10.9806 0.150765L10.8904 3.77938C10.8904 3.77938 9.72344 3.76784 8.44996 3.76784C7.07167 3.76784 6.85085 4.41333 6.85085 5.48469V8.322H11L10.8195 12.2077H6.85085V23H2.80805Z" fill="white" />
                    </svg>
                </a>
                <a href='https://www.instagram.com/'>
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.63842 0.361596C8.92753 0.30225 9.33855 0.289062 12.6223 0.289062C15.9061 0.289062 16.3171 0.303349 17.6052 0.361596C18.8932 0.419842 19.7724 0.625353 20.5417 0.92318C21.3472 1.2276 22.078 1.70346 22.6825 2.3189C23.2979 2.92224 23.7727 3.65197 24.076 4.45863C24.3749 5.22792 24.5793 6.10712 24.6387 7.39293C24.698 8.68425 24.7112 9.09527 24.7112 12.378C24.7112 15.6617 24.6969 16.0728 24.6387 17.3619C24.5804 18.6477 24.3749 19.5269 24.076 20.2962C23.7727 21.1029 23.2971 21.8339 22.6825 22.4381C22.078 23.0535 21.3472 23.5283 20.5417 23.8316C19.7724 24.1305 18.8932 24.335 17.6074 24.3943C16.3171 24.4537 15.9061 24.4668 12.6223 24.4668C9.33855 24.4668 8.92753 24.4526 7.63842 24.3943C6.3526 24.3361 5.47341 24.1305 4.70411 23.8316C3.89737 23.5283 3.16643 23.0527 2.56218 22.4381C1.94717 21.8344 1.47123 21.1038 1.16756 20.2973C0.869738 19.528 0.665326 18.6488 0.605981 17.363C0.546635 16.0717 0.533447 15.6606 0.533447 12.378C0.533447 9.09417 0.547734 8.68315 0.605981 7.39513C0.664227 6.10711 0.869738 5.22792 1.16756 4.45863C1.47168 3.65206 1.94798 2.92149 2.56328 2.3178C3.16667 1.70291 3.89688 1.22699 4.70301 0.92318C5.47231 0.625353 6.3515 0.420941 7.63732 0.361596H7.63842ZM17.5073 2.5376C16.2325 2.47935 15.8501 2.46726 12.6223 2.46726C9.3946 2.46726 9.01215 2.47935 7.73733 2.5376C6.55811 2.59145 5.9185 2.78817 5.49209 2.95411C4.92831 3.17391 4.52498 3.43437 4.10187 3.85748C3.70079 4.24768 3.39212 4.7227 3.1985 5.2477C3.03255 5.67411 2.83583 6.31372 2.78198 7.49294C2.72373 8.76777 2.71165 9.15022 2.71165 12.378C2.71165 15.6057 2.72373 15.9881 2.78198 17.263C2.83583 18.4422 3.03255 19.0818 3.1985 19.5082C3.39192 20.0324 3.70074 20.5083 4.10187 20.8984C4.49201 21.2996 4.96787 21.6084 5.49209 21.8018C5.9185 21.9677 6.55811 22.1645 7.73733 22.2183C9.01215 22.2766 9.3935 22.2886 12.6223 22.2886C15.8512 22.2886 16.2325 22.2766 17.5073 22.2183C18.6866 22.1645 19.3262 21.9677 19.7526 21.8018C20.3164 21.582 20.7197 21.3215 21.1428 20.8984C21.5439 20.5083 21.8528 20.0324 22.0462 19.5082C22.2121 19.0818 22.4088 18.4422 22.4627 17.263C22.5209 15.9881 22.533 15.6057 22.533 12.378C22.533 9.15022 22.5209 8.76777 22.4627 7.49294C22.4088 6.31372 22.2121 5.67411 22.0462 5.2477C21.8264 4.68392 21.5659 4.28059 21.1428 3.85748C20.7526 3.45643 20.2776 3.14777 19.7526 2.95411C19.3262 2.78817 18.6866 2.59145 17.5073 2.5376ZM11.0783 16.1046C11.9406 16.4636 12.9008 16.512 13.7949 16.2417C14.689 15.9713 15.4615 15.399 15.9804 14.6224C16.4994 13.8457 16.7326 12.913 16.6403 11.9835C16.548 11.054 16.1358 10.1854 15.4742 9.52607C15.0525 9.10458 14.5425 8.78185 13.9811 8.5811C13.4196 8.38035 12.8206 8.30659 12.2272 8.36512C11.6339 8.42364 11.0608 8.61301 10.5494 8.91957C10.038 9.22614 9.60093 9.64228 9.26965 10.138C8.93837 10.6338 8.72113 11.1969 8.63357 11.7867C8.54601 12.3764 8.59031 12.9783 8.76328 13.5489C8.93624 14.1196 9.23358 14.6447 9.63387 15.0867C10.0342 15.5286 10.5275 15.8762 11.0783 16.1046ZM8.22857 7.98419C8.80557 7.40719 9.49057 6.94949 10.2444 6.63723C10.9983 6.32496 11.8063 6.16423 12.6223 6.16423C13.4383 6.16423 14.2463 6.32496 15.0002 6.63722C15.7541 6.94949 16.4391 7.40719 17.0161 7.98419C17.5931 8.56119 18.0508 9.24618 18.3631 10.0001C18.6753 10.7539 18.8361 11.562 18.8361 12.378C18.8361 13.1939 18.6753 14.002 18.3631 14.7558C18.0508 15.5097 17.5931 16.1947 17.0161 16.7717C15.8508 17.937 14.2703 18.5917 12.6223 18.5917C10.9744 18.5917 9.39387 17.937 8.22857 16.7717C7.06328 15.6064 6.40862 14.0259 6.40862 12.378C6.40862 10.73 7.06328 9.14949 8.22857 7.98419ZM20.2142 7.08961C20.3571 6.95473 20.4716 6.79253 20.5508 6.61262C20.63 6.43271 20.6722 6.23874 20.6751 6.0422C20.678 5.84566 20.6414 5.65054 20.5675 5.46839C20.4936 5.28625 20.3839 5.12078 20.2449 4.98179C20.1059 4.8428 19.9404 4.73311 19.7583 4.65921C19.5761 4.58532 19.381 4.54872 19.1845 4.55159C18.9879 4.55445 18.794 4.59672 18.6141 4.6759C18.4341 4.75507 18.2719 4.86954 18.1371 5.01252C17.8747 5.2906 17.7311 5.65996 17.7367 6.0422C17.7423 6.42444 17.8966 6.78945 18.1669 7.05977C18.4372 7.33008 18.8022 7.4844 19.1845 7.48997C19.5667 7.49554 19.9361 7.35193 20.2142 7.08961Z" fill="white" />
                    </svg>
                </a>
            </section>
        </div>
    );
};

export default Copyright