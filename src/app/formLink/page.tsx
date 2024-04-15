"use client"
import React, { useState } from 'react';
import homeStyles from "../home.module.css"
import Modal from '../../components/modal/Modal';
import styles from './formLink.module.css';
import { v4 as uuidv4 } from 'uuid';
import Link from 'next/link'; 

const clientId = uuidv4().toLowerCase();

const FormPage: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedUrl, setSelectedUrl] = useState<string>('');
    const [selectedUser, setSelectedUser] = useState<string>('');

    const handleGenerate = (url: string) => {
        setSelectedUrl(url);
        setShowModal(true);
    };

    const handleViewMap = (userId: string) => {
        const mapPageUrl = `/map?user=${userId}`;
        window.location.href = mapPageUrl;
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedUrl('');
    };

    const handleUserChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedUser(event.target.value);
    };

    const userIds = [
        { id: "c9626e4d-77af-4d1a-bb9b-4d6fc5e0a99e", name: "Orwa" },
        { id: "d4626ea4-77af-4d1a-bb9b-4d6fc5e0a99e", name: "Janine" },
    ];

    return (
        <main className={homeStyles.homeContainer}>
            <nav className={homeStyles.globalNav}>
                <ul className={homeStyles.siteNav}>
                    <li className={homeStyles.home}>
                        <a href="/">
                            <img src="Symbol.svg" alt="Home" />
                        </a>
                    </li>
                </ul>
            </nav>

            <div>
                <h2>Contact Us</h2>
                <h3>Reach out to us for any inquiries or feedback</h3>
            </div>
            <div>
                <h1 className={styles.formTitle}>Form Generator</h1>
                <div className={styles.dropdownContainer}>
                    <select className={styles.dropdown} onChange={handleUserChange}>
                        <option value="">Select User</option>
                        {userIds.map(user => (
                            <option key={user.id} value={user.id}>{user.name}</option>
                        ))}
                    </select>
                    <button className={styles.button} disabled={!selectedUser} onClick={() => handleGenerate(`${window.location.origin}/form/?user=${selectedUser}&client=${clientId}`)}>Generate</button>
                </div>

                <h1 className={styles.formTitle}>Case Maps</h1>
                <div className={styles.dropdownContainer}>
                    <select className={styles.dropdown} onChange={handleUserChange}>
                        <option value="">Select User</option>
                        {userIds.map(user => (
                            <option key={user.id} value={user.id}>{user.name}</option>
                        ))}
                    </select>
                    <Link href={`/map?user=${selectedUser}`}>
                        <button className={styles.button} onClick={() => handleViewMap(selectedUser)}>View Maps</button>
                    </Link>

                </div>

                {showModal && <Modal url={selectedUrl} onClose={handleCloseModal} />}
            </div>
        </main>
    );
};

export default FormPage;
