import React from "react";
import style from "../../styles/MainPage.module.css";
import LogoFull from "../Root/LogoFull";
import catalogSearch from "./Catalog_Search.png";
import homeIcon from "./Home.png";
import projectsIcon from "./Projects.png";
import epicsIcon from "./Epics.png";
import documentsIcon from "./Document.png";
import createIcon from "./Plus_Circle.png";
import settingIcon from "./Settings.png";
import questionsIcon from "./Question_Circle.png";
import arovRight from "./Chevron_Right.png";
import accountImage from "./accountImage.png";
import search from "./search.png";
import favIcon from "./favIcon.png";
import latestIcon from "./linkIcon.png";
import greenArrow from "./greenArrow.png";

export const MainPage = () => {

    return (
        <div className={style.main}>
            <div className={style.sideBar}>
                <div className={style.sideBarHead}>
                    <LogoFull/>
                    <p className={style.sideBarTitle}>The Platform</p>
                </div>
                <div className={style.sideBarLineTop}></div>
                <div className={style.sideBarMenu}>
                    <div className={style.search}>
                        <img src={catalogSearch} className={style.icon} />
                        <p className={style.text}>
                            Поиск
                        </p>
                    </div>
                    <div className={style.home}>
                        <img src={homeIcon} className={style.icon}/>
                        <p className={style.text}>
                            Домой
                        </p>
                    </div>
                    <div className={style.catalog}>
                        <img src={projectsIcon} className={style.icon}/>
                        <p className={style.text}>
                            Каталог
                        </p>
                        <div className={style.arrowContainer}><img src={arovRight} className={style.arrow} /></div>
                    </div>
                    <div className={style.api}>
                        <img src={epicsIcon} className={style.icon}/>
                        <p className={style.text}>
                            APIs
                        </p>
                    </div>
                    <div className={style.docs}>
                        <img src={documentsIcon} className={style.icon}/>
                        <p className={style.text}>
                            Документы
                        </p>
                    </div>
                    <div className={style.craete}>
                        <img src={createIcon} className={style.icon}/>
                        <p className={style.text}>
                            Создать
                        </p>
                    </div>
                    <div className={style.settings}>
                        <img src={settingIcon} className={style.icon}/>
                        <p className={style.text}>
                            Настройки
                        </p>
                    </div>
                    <div className={style.questions}>
                        <img src={questionsIcon} className={style.icon}/>
                        <p className={style.text}>
                            Помощь
                        </p>
                    </div>
                </div>
                <div className={style.sideBarLineBottom}></div>
                <div className={style.sideBarAccount}>
                    <div className={style.imgContainer}>
                        <img src={accountImage} className={style.accountImage}/>
                    </div>
                    <div className={style.accountData}>
                        <div className={style.nameContainer}>
                            <p className={style.accountName}>Дмитрий Таболич</p>
                            <div className={style.arrowContainer}>
                                <img src={arovRight} className={style.accountArrow} />
                            </div>
                        </div>
                        <p className={style.accountMail}>mtcwork@example...</p>
                    </div>
                </div>
            </div>
            <div className={style.page}>
                <div className={style.pageSearch}>
                    <form className={style.searchContainer} action="" method="get">
                        <div className={style.inputContainer}>
                            <div className={style.serchIconContainer}>
                                <img src={search} className={style.searchIcon} />
                            </div>
                            <input type="text" placeholder="Поиск" className={style.searchInput} />
                        </div>
                        <button className={style.searchbutton}>ИСКАТЬ</button>
                    </form>
                </div>
                <div className={style.pageVidgets}>
                    <div className={style.vidgetWrapper}>
                        <div className={style.vidgetFavorite}>
                            <h2 className={style.favoriteTitle}>
                                Избранное
                            </h2>
                            <p className={style.favoriteDiscription}>
                                Избранные страницы разделов
                            </p>
                            <div className={style.favoriteBody}>
                                <div className={style.favoriteItem}>
                                    <p className={style.favoriteText}>
                                        Stack_overflow_questions
                                    </p>
                                    <div className={style.favoriteIconContainer}>
                                        <img src={favIcon} className={style.favoriteIcon}/>
                                    </div>
                                </div>
                                <div className={style.favoriteItem}>
                                    <p className={style.favoriteText}>
                                        Backstage-frontend
                                    </p>
                                    <div className={style.favoriteIconContainer}>
                                        <img src={favIcon} className={style.favoriteIcon}/>
                                    </div>
                                </div>
                                <div className={style.favoriteItem}>
                                    <p className={style.favoriteText}>
                                        Backstage-backend
                                    </p>
                                    <div className={style.favoriteIconContainer}>
                                        <img src={favIcon} className={style.favoriteIcon}/>
                                    </div>
                                </div>
                                <div className={style.favoriteItem}>
                                    <p className={style.favoriteText}>
                                        Backstage-data-DocpageProfiles
                                    </p>
                                    <div className={style.favoriteIconContainer}>
                                        <img src={favIcon} className={style.favoriteIcon}/>
                                    </div>
                                </div>
                                <div className={style.favoriteItem}>
                                    <p className={style.favoriteText}>
                                        Sciencebox-cloud-notebook-creator
                                    </p>
                                    <div className={style.favoriteIconContainer}>
                                        <img src={favIcon} className={style.favoriteIcon}/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={style.vidgetLatest}>
                            <h2 className={style.latestTitle}>
                                Последние посещенные
                            </h2>
                            <p className={style.latestDiscription}>
                                Здесь находятся ваши любимые ссылки
                            </p>
                            <div className={style.latestBody}>
                                <div className={style.latestItem}>
                                    <p className={style.latestText}>
                                        Stack_overflow_questions
                                    </p>
                                    <div className={style.latestIconContainer}>
                                        <img src={latestIcon} className={style.latestIcon}/>
                                    </div>
                                </div>
                                <div className={style.latestItem}>
                                    <p className={style.latestText}>
                                        Backstage-frontend
                                    </p>
                                    <div className={style.latestIconContainer}>
                                        <img src={latestIcon} className={style.latestIcon}/>
                                    </div>
                                </div>
                                <div className={style.latestItem}>
                                    <p className={style.latestText}>
                                        Backstage-backend
                                    </p>
                                    <div className={style.latestIconContainer}>
                                        <img src={latestIcon} className={style.latestIcon}/>
                                    </div>
                                </div>
                                <div className={style.latestItem}>
                                    <p className={style.latestText}>
                                        Backstage-data-DocpageProfiles
                                    </p>
                                    <div className={style.latestIconContainer}>
                                        <img src={latestIcon} className={style.latestIcon}/>
                                    </div>
                                </div>
                                <div className={style.latestItem}>
                                    <p className={style.latestText}>
                                        Sciencebox-cloud-notebook-creator
                                    </p>
                                    <div className={style.latestIconContainer}>
                                        <img src={latestIcon} className={style.latestIcon}/>
                                    </div>
                                </div>

                                
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className={style.ecosystem}>
                    <div className={style.ecosystemWraper}>
                        <h2 className={style.ecosystemtitle}>
                            Обзор экосистемы
                        </h2>
                        <p className={style.ecosystemDiscription}>
                            Обзор экономических показателей отдела
                        </p>
                        <div className={style.ecosystemCorusel}>
                            <div className={style.coruselItem}>
                                <p className={style.coruselTitle}>
                                    Исследуйте экосистему
                                </p>
                                <p className={style.coruselDiscription}>
                                    Исследуйте данные, платформы и другое
                                </p>
                            </div>

                            <div className={style.coruselItem}>
                                <p className={style.coruselTitle}>
                                    Управляйте и настраивайте
                                </p>
                                <p className={style.coruselDiscription}>
                                    Берегите то, что создаёте
                                </p>
                            </div>
                            <div className={style.coruselItem}>
                                <p className={style.coruselTitle}>
                                    Документация
                                </p>
                                <p className={style.coruselDiscription}>
                                    Выясните как работает THE PLATFORM
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.platform}>
                    <div className={style.platformWraper}>
                        <h2 className={style.platformTitle}>
                            Ресурсы платформы
                        </h2>
                        <p className={style.platformDiscription}>
                            Будьте в курсе всех показателй вашей организации
                        </p>
                        <div className={style.plaftormItemContainer}>
                            <div className={style.platformItem}>
                                <div className={style.platformContent}>
                                    <p className={style.platfromContentTitle}>Продукты</p>
                                    <p className={style.platfromContentDiscription}>Какое-то сообщение.</p>
                                    <div className={style.platformIndicator}>
                                        <p className={style.indicatorNumber}>97</p>
                                        <img src={greenArrow} className={style.indicatorImg}/>
                                    </div>
                                </div>
                            </div>
                            <div className={style.platformItem}>
                                <div className={style.platformContent}>
                                    <p className={style.platfromContentTitle}>Сервисы</p>
                                    <p className={style.platfromContentDiscription}>Какое-то сообщение.</p>
                                    <div className={style.platformIndicator}>
                                        <p className={style.indicatorNumber}>97</p>
                                        <img src={greenArrow} className={style.indicatorImg}/>
                                    </div>
                                </div>
                            </div>
                            <div className={style.platformItem}>
                                <div className={style.platformContent}>
                                    <p className={style.platfromContentTitle}>Компоненты</p>
                                    <p className={style.platfromContentDiscription}>Какое-то сообщение.</p>
                                    <div className={style.platformIndicator}>
                                        <p className={style.indicatorNumber}>97</p>
                                        <img src={greenArrow} className={style.indicatorImg}/>
                                    </div>
                                </div>
                            </div>
                            <div className={style.platformItem}>
                                <div className={style.platformContent}>
                                    <p className={style.platfromContentTitle}>Ресурсы</p>
                                    <p className={style.platfromContentDiscription}>Какое-то сообщение.</p>
                                    <div className={style.platformIndicator}>
                                        <p className={style.indicatorNumber}>97</p>
                                        <img src={greenArrow} className={style.indicatorImg}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}