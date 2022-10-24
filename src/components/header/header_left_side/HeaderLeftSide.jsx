import React from 'react'
import classes from './HeaderLeftSide.module.css'

const HeaderLeftSide = () => {
    return (
        <div className={classes.wrapper}>
            <svg width="60" height="39" viewBox="0 0 60 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.52852 31.8807C8.02191 32.0423 8.41323 32.3145 8.70246 32.6973C8.99169 33.0716 9.1363 33.5395 9.1363 34.101C9.1363 34.8751 8.83857 35.4748 8.24309 35.9001C7.64761 36.317 6.77992 36.5254 5.64001 36.5254H1.19946V27.5932H5.38481C6.43965 27.5932 7.25205 27.8017 7.822 28.2185C8.39196 28.6268 8.67694 29.1925 8.67694 29.9156C8.67694 30.358 8.57486 30.7493 8.37069 31.0895C8.16653 31.4298 7.8858 31.6935 7.52852 31.8807ZM2.85829 28.8948V31.3575H5.20616C5.78462 31.3575 6.22698 31.2554 6.53322 31.0513C6.84798 30.8386 7.00535 30.5323 7.00535 30.1325C7.00535 29.7242 6.84798 29.418 6.53322 29.2138C6.22698 29.0011 5.78462 28.8948 5.20616 28.8948H2.85829ZM5.53793 35.2239C6.82245 35.2239 7.46472 34.7943 7.46472 33.9351C7.46472 33.0759 6.82245 32.6463 5.53793 32.6463H2.85829V35.2239H5.53793ZM10.7536 29.7114H12.3486V36.5254H10.7536V29.7114ZM11.5575 28.5885C11.2682 28.5885 11.0258 28.4992 10.8301 28.3206C10.6345 28.1334 10.5366 27.9037 10.5366 27.6315C10.5366 27.3593 10.6345 27.1339 10.8301 26.9552C11.0258 26.7681 11.2682 26.6745 11.5575 26.6745C11.8467 26.6745 12.0891 26.7638 12.2848 26.9425C12.4804 27.1126 12.5783 27.3295 12.5783 27.5932C12.5783 27.874 12.4804 28.1122 12.2848 28.3078C12.0976 28.495 11.8552 28.5885 11.5575 28.5885ZM17.2238 33.6033L16.0371 34.7262V36.5254H14.4421V27.0573H16.0371V32.7739L19.342 29.7114H21.256L18.4105 32.5697L21.524 36.5254H19.5844L17.2238 33.6033ZM28.6733 33.1567C28.6733 33.2673 28.6648 33.4247 28.6477 33.6288H23.3012C23.3948 34.1307 23.6372 34.5305 24.0286 34.8283C24.4284 35.1175 24.9218 35.2621 25.5087 35.2621C26.2573 35.2621 26.8741 35.0154 27.359 34.522L28.2139 35.5046C27.9077 35.8704 27.5206 36.1468 27.0527 36.334C26.5848 36.5211 26.0574 36.6147 25.4705 36.6147C24.7219 36.6147 24.0626 36.4658 23.4926 36.1681C22.9227 35.8704 22.4803 35.4578 22.1656 34.9304C21.8593 34.3944 21.7062 33.7905 21.7062 33.1184C21.7062 32.4549 21.8551 31.8594 22.1528 31.332C22.4591 30.7961 22.8801 30.3792 23.4161 30.0815C23.952 29.7838 24.556 29.6349 25.228 29.6349C25.8915 29.6349 26.4828 29.7838 27.0017 30.0815C27.5291 30.3707 27.9374 30.7833 28.2267 31.3192C28.5244 31.8466 28.6733 32.4591 28.6733 33.1567ZM25.228 30.9109C24.7176 30.9109 24.2838 31.064 23.9265 31.3703C23.5777 31.668 23.365 32.0678 23.2885 32.5697H27.1548C27.0868 32.0763 26.8783 31.6765 26.5296 31.3703C26.1808 31.064 25.7469 30.9109 25.228 30.9109ZM34.0335 27.5932C34.8076 27.5932 35.4796 27.7209 36.0496 27.9761C36.628 28.2313 37.0704 28.5971 37.3766 29.0734C37.6829 29.5498 37.836 30.1155 37.836 30.7705C37.836 31.4171 37.6829 31.9828 37.3766 32.4676C37.0704 32.944 36.628 33.3098 36.0496 33.565C35.4796 33.8202 34.8076 33.9478 34.0335 33.9478H32.0173V36.5254H30.3585V27.5932H34.0335ZM33.9569 32.5442C34.68 32.5442 35.2287 32.3911 35.603 32.0848C35.9773 31.7786 36.1644 31.3405 36.1644 30.7705C36.1644 30.2006 35.9773 29.7625 35.603 29.4562C35.2287 29.15 34.68 28.9969 33.9569 28.9969H32.0173V32.5442H33.9569ZM41.8802 29.6349C42.884 29.6349 43.6496 29.8773 44.177 30.3622C44.7129 30.8386 44.9809 31.5617 44.9809 32.5314V36.5254H43.4752V35.696C43.2795 35.9937 42.9988 36.2234 42.633 36.385C42.2757 36.5382 41.8419 36.6147 41.3315 36.6147C40.8211 36.6147 40.3745 36.5296 39.9917 36.3595C39.6089 36.1809 39.3111 35.9384 39.0985 35.6322C38.8943 35.3174 38.7922 34.9644 38.7922 34.5731C38.7922 33.9606 39.0176 33.4714 39.4685 33.1057C39.9279 32.7314 40.6467 32.5442 41.625 32.5442H43.3859V32.4421C43.3859 31.9657 43.2413 31.6 42.952 31.3447C42.6713 31.0895 42.2502 30.9619 41.6888 30.9619C41.306 30.9619 40.9274 31.0215 40.5531 31.1406C40.1873 31.2597 39.8768 31.4256 39.6216 31.6382L38.9964 30.4771C39.3537 30.2048 39.7832 29.9964 40.2852 29.8518C40.7871 29.7072 41.3187 29.6349 41.8802 29.6349ZM41.6633 35.4535C42.0631 35.4535 42.4161 35.3642 42.7223 35.1856C43.0371 34.9984 43.2583 34.7347 43.3859 34.3944V33.6033H41.7398C40.8211 33.6033 40.3617 33.9053 40.3617 34.5093C40.3617 34.7985 40.4766 35.0282 40.7062 35.1983C40.9359 35.3685 41.2549 35.4535 41.6633 35.4535ZM48.5464 30.7067C49.0058 29.9922 49.8139 29.6349 50.9708 29.6349V31.1533C50.8347 31.1278 50.7114 31.1151 50.6008 31.1151C49.9798 31.1151 49.4949 31.298 49.1461 31.6638C48.7973 32.021 48.6229 32.54 48.6229 33.2205V36.5254H47.0279V29.7114H48.5464V30.7067ZM55.1056 33.6033L53.9189 34.7262V36.5254H52.3239V27.0573H53.9189V32.7739L57.2238 29.7114H59.1379L56.2923 32.5697L59.4058 36.5254H57.4663L55.1056 33.6033Z" fill="#297FFF" />
                <path d="M33.3417 9.51367H29.8918" stroke="#297FFF" stroke-width="1.76471" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="bevel" />
                <path d="M38.5164 18.9232L29.8918 9.51367" stroke="#297FFF" stroke-width="1.76471" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="bevel" />
                <path d="M33.4094 18.9237C33.4094 21.3962 35.6863 23.4567 38.5151 23.4567C41.344 23.4567 43.6208 21.3962 43.6208 18.9237C43.6208 16.4511 41.344 14.3906 38.5151 14.3906C36.6522 14.3906 34.9963 15.2835 34.0994 16.6571" stroke="#297FFF" stroke-width="1.76471" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="bevel" />
                <path d="M21.8192 15.6273C21.5432 15.5586 21.1982 15.5586 20.8533 15.5586C18.4384 15.5586 16.4375 17.3443 16.4375 19.5422C16.4375 21.74 18.4384 23.5258 20.8533 23.5258C23.2681 23.5258 25.269 21.74 25.269 19.5422" stroke="#297FFF" stroke-width="1.76471" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="bevel" />
                <path d="M29.4918 5.01952C30.5396 4.67015 31.134 3.62884 30.8193 2.69368C30.5046 1.75853 29.4001 1.28366 28.3523 1.63303C27.3045 1.9824 26.7102 3.02372 27.0248 3.95887C27.3395 4.89402 28.444 5.36889 29.4918 5.01952Z" stroke="#297FFF" stroke-width="1.76471" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="bevel" />
                <path d="M26.9263 6.62891C25.1324 8.55202 23.7525 11.162 23.5455 12.1922" stroke="#297FFF" stroke-width="1.76471" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="bevel" />
                <path d="M26.7874 15.2148C24.7865 15.833 22.7857 19.4732 20.5088 19.0611Z" fill="#297FFF" />
                <path d="M26.7874 15.2148C24.7865 15.833 22.7857 19.4732 20.5088 19.0611" stroke="#297FFF" stroke-width="1.76471" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M23.6143 12.2603C25.2702 12.0543 28.03 13.0158 28.927 14.2521C30.0999 15.9005 28.927 18.0984 27.685 19.5407" stroke="#297FFF" stroke-width="1.76471" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M30.9957 14.7343C31.3387 14.7343 31.6167 14.4576 31.6167 14.1162C31.6167 13.7748 31.3387 13.498 30.9957 13.498C30.6528 13.498 30.3748 13.7748 30.3748 14.1162C30.3748 14.4576 30.6528 14.7343 30.9957 14.7343Z" fill="#297FFF" />
            </svg>
        </div>
    );
};

export default HeaderLeftSide 