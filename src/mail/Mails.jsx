import React, { useEffect, useState } from "react";
import "./mails.css";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { PropagateLoader } from "react-spinners";

export default function Mails() {
  const mails = [
    {
      id: 1,
      title: "OLA",
      subject: "Your exclusive invite for Ola’s flagship event - Sankalp 2024",
      description: "- Sankalp 2024 - 15th August",
      time: "8:11 PM",
    },
    {
      id: 2,
      title: "Myntra",
      subject: " Freedom To Shop & Save Big",
      description: "- Right to fashion sale is live now",
      time: "6:33 PM",
    },
    {
      id: 3,
      title: "daily.dev",
      subject: "Aswathy, your personal update from daily.dev is ready",
      description: "- For Aug5 your daily streak is 0",
      time: "8:33 AM",
    },
    {
      id: 4,
      title: "redbus",
      subject: "Aswathy R, book your trip in 3, 2, 1… NOW!",
      description: "- Remember how much fun you  had on your last trip",
      time: "Aug 5",
    },
  ];

  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setEmails(mails);
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="mails">
      {loading && (
        <div className="loader">
          <PropagateLoader />
        </div>
      )}
      {!loading &&
        emails?.length > 0 &&
        emails.map((mail) => {
          return (
            <div className="mail" key={mail.id}>
              <div className="left">
                <div className="icon">
                  <MdCheckBoxOutlineBlank />
                </div>
                <div className="icon">
                  <FaRegStar />
                </div>
                <div className="title">{mail.title} </div>
              </div>
              <div className="middle">
                <div className="subject">{mail.subject}</div>
                <div className="description">{mail.description}</div>
              </div>
              <div className="right">
                <div className="time">{mail.time}</div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
