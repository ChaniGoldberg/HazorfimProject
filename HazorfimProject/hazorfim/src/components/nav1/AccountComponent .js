// AccountComponent.js
import React, { useState } from 'react';
import '../../styles/AccountComponent.css';

const AccountComponent = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const [newAccount, setNewAccount] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        birthdate: '',
        receiveEmails: false,
    });

    const handleForgotPassword = () => {
        setShowForgotPassword(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login or account creation logic here
    };

    return (
        <div className="account-container">
            <div className="toggle-buttons">
                <button className={isLogin ? "active" : ""} onClick={() => setIsLogin(true)}>כניסה</button>
                <button className={!isLogin ? "active" : ""} onClick={() => setIsLogin(false)}>יצירת חשבון</button>
            </div>
            {isLogin ? (
                <form onSubmit={handleSubmit}>
                    <h2>כניסה</h2>
                    <input
                        type="email"
                        placeholder="אימייל"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="סיסמה"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <div className="remember-me">
                        <label>
                            <input
                                type="checkbox"
                                checked={rememberMe}
                                onChange={() => setRememberMe(!rememberMe)}
                            />
                            זכור אותי
                        </label>
                    </div>
                    <button type="submit">כניסה</button>
                    <p onClick={handleForgotPassword} className="link">שכחת סיסמה?</p>
                </form>
            ) : (
                <form onSubmit={handleSubmit}>
                    <h2>יצירת חשבון</h2>
                    <input
                        type="text"
                        placeholder="שם פרטי"
                        value={newAccount.firstName}
                        onChange={(e) => setNewAccount({ ...newAccount, firstName: e.target.value })}
                        required
                    />
                    <input
                        type="text"
                        placeholder="שם משפחה"
                        value={newAccount.lastName}
                        onChange={(e) => setNewAccount({ ...newAccount, lastName: e.target.value })}
                        required
                    />
                    <input
                        type="email"
                        placeholder="אימייל"
                        value={newAccount.email}
                        onChange={(e) => setNewAccount({ ...newAccount, email: e.target.value })}
                        required
                    />
                    <input
                        type="tel"
                        placeholder="טלפון"
                        value={newAccount.phone}
                        onChange={(e) => setNewAccount({ ...newAccount, phone: e.target.value })}
                        required
                    />
                    <input
                        type="password"
                        placeholder="סיסמה"
                        value={newAccount.password}
                        onChange={(e) => setNewAccount({ ...newAccount, password: e.target.value })}
                        required
                    />
                    <input
                        type="password"
                        placeholder="אשר סיסמה"
                        value={newAccount.confirmPassword}
                        onChange={(e) => setNewAccount({ ...newAccount, confirmPassword: e.target.value })}
                        required
                    />
                    <input
                        type="date"
                        placeholder="תאריך לידה"
                        value={newAccount.birthdate}
                        onChange={(e) => setNewAccount({ ...newAccount, birthdate: e.target.value })}
                        required
                    />
                    <label>
                        <input
                            type="checkbox"
                            checked={newAccount.receiveEmails}
                            onChange={() => setNewAccount({ ...newAccount, receiveEmails: !newAccount.receiveEmails })}
                        />
                        לקבל מיילים
                    </label>
                    <button type="submit">יצירת חשבון</button>
                </form>
            )}
            {showForgotPassword && (
                <div className="popup">
                    <h3>שכחת סיסמה</h3>
                    <input
                        type="email"
                        placeholder="הכנס את האימייל שלך"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button onClick={() => setShowForgotPassword(false)}>שלח</button>
                </div>
            )}
        </div>
    );
};

export default AccountComponent;
