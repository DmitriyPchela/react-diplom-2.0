import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LC from "local-storage";

import { usersApi, healthStatusApi } from "../../api";
import HeaderPage from "../common/HeaderPage";

const AccountPage = ({isAuth}) => {
    const [user, setUser] = useState({});
    const [healthData, setHealthData] = useState({});
    const [loading, setLoading] = useState(true);

    const logout = () => {
        LC.clear();
    };

    const getCurrentUser = (users) => {
        users.map(item => {
            return item.login === LC.get('profile').login && setUser(item);
        });
    };

    const getUserHealth = (data) => {
        setHealthData(data.filter(item => {
           return item.userID === LC.get('profile').login && item;
        }));
    };

    const apiCallSuccess = (user) => {
        getCurrentUser(user);
        setLoading(false);
    };

    const apiHealthSuccess = (data) => {
        getUserHealth(data);
        setLoading(false);
    };

    useEffect( () => {
        (async function () {
            const apiCall = await usersApi.list();
            apiCall.statusText === 'OK' ? apiCallSuccess(apiCall.data.data) : alert(apiCall.statusText);
        })();
        (async function () {
            const apiHealthCall = await healthStatusApi.list();
            apiHealthCall.statusText === 'OK' ? apiHealthSuccess(apiHealthCall.data.data) : alert(apiHealthCall.statusText);
        })();
    }, []);

    return (
        <main id="account-page">
            <HeaderPage bgImage="images/about-bg.png" pageLink="/account" pageName="Особистий кабінет"/>
            <section className="section-account">
                <div className="container">
                    { loading ? <p>Зачекайте будь-ласка, завантажуються дані об користувачеві</p> :
                        (
                            <div className="row">
                                <div className="col-2">
                                    <div className="user-photo-box">
                                        <img src="images/doctor.jpg" alt=""/>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="user-info-first">
                                        <h2 className="user-info-first__name">{user.surname} {user.name}</h2>
                                        <div className="user-info-first__links">
                                            <Link to="/edit" className="btn-custom">Редагувати</Link>
                                            <Link to="/" className="btn-custom" onClick={logout}>Вийти</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="user-info-second">
                                        {
                                            user &&
                                            <>
                                                <div className="user-info-second__item">
                                                    <span className="field-name">Логін: </span>
                                                    <span className="field-text">{user.login}</span>
                                                </div>
                                                <div className="user-info-second__item">
                                                    <span className="field-name">Email: </span>
                                                    <span className="field-text">{user.email}</span>
                                                </div>
                                                <div className="user-info-second__item">
                                                    <span className="field-name">Номер телефону: </span>
                                                    <span className="field-text">{user.phone}</span>
                                                </div>
                                            </>
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </section>
            <div className="section-health-status">
                <div className="container">
                    <h2 className="section-title">Стан здоровья</h2>
                    <table className="table">
                        <thead className="thead-dark">
                        <tr>
                            <th scope="col" rowSpan="2">Дата</th>
                            <th scope="col" rowSpan="2">Час</th>
                            <th scope="col" colSpan="2">Тиск</th>
                            <th scope="col" rowSpan="2">Пульс</th>
                            <th scope="col" rowSpan="2">Самопочуття</th>
                        </tr>
                        <tr>
                            <th>Верхнє</th>
                            <th>Нижче</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            healthData.length > 0 && (
                                healthData.map(item => {
                                    return <tr key={item._id}>
                                        <td>{item.date}</td>
                                        <td>{item.time}</td>
                                        <td>{item.pressureUp}</td>
                                        <td>{item.pressureDown}</td>
                                        <td>{item.pulse}</td>
                                        <td>{item.healthy}</td>
                                    </tr>
                                })
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
};

export default AccountPage;