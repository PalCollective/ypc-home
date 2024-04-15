"use client"
import React, { useState } from "react";
import styles from "../home.module.css";
import FormContainer from "./form";
import { emptyForm } from "./formDef";
import Radar from 'radar-sdk-js';
import 'radar-sdk-js/dist/radar.css';
// import RadarMap from '../map/page';

const Form: React.FC<{ id: string }> = (props) => {
  const [formData, setFormData] = useState(emptyForm);

  const extractQueryParams = (url: string) => {
    const queryParams = new URLSearchParams(url);
    const user = queryParams.get('user') || '';
    const client = queryParams.get('client') || '';
    return { client, user };
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const radarApiKey = process.env.NEXT_PUBLIC_RADAR_API_KEY;
      if (!radarApiKey) {
        console.error("Radar API key not found. Make sure to add it to your .env file.");
        return;
      }

      Radar.initialize(radarApiKey);
      const result = await Radar.ipGeocode();
      const { address } = result;
      const { client, user } = extractQueryParams(window.location.search);
      const addressObject = { ...address };
      setFormData((prevData) => {
        const newData = {
          ...prevData,
          location: addressObject,
          client: client,
          user: user
        };
        // POST BEHAVIOR
        console.log("FormData after setting location:", newData);
        return newData;
      });

      setFormData(emptyForm);
    } catch (error) {
      console.error("Error fetching IP address:", error);
    }
  };

  const { user } = typeof window !== 'undefined' ? extractQueryParams(window.location.search) : { user: '', client: '' };

  return (
    <main className={styles.homeContainer}>
      <nav className={styles.globalNav}>
        <ul className={styles.siteNav}>
          <li className={styles.home}>
            <a href="/">
              <img src="Symbol.svg" />
            </a>
          </li>
        </ul>
      </nav>

      <div>
        <h2>Contact Us</h2>
        <h3>Reach out to us for any inquiries or feedback</h3>
      </div>
      <FormContainer
        user={user}
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </main>
  );
};

export default Form;