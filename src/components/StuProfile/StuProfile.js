import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import './StuProfile.css';

function StudentProfile() {
  const [isEditing, setIsEditing] = useState(false);

  const [profile, setProfile] = useState({
    name: 'Rehan',
    studentId: '22981a42f6',
    email: 'rehan@email.com',
    favourites: ['Drinks'],
    orders: [
      { date: '28th August 2024', details: '2x Veg Sandwich, 1x Apple Juice', total: '$15.00' },
      { date: '27th August 2024', details: '1x Chicken Wrap, 1x Cola', total: '$12.00' },
    ],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const saveProfile = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const downloadOrderHistoryPDF = () => {
    const doc = new jsPDF();

    // Add title
    doc.setFontSize(18);
    doc.text('Order History', 14, 22);

    // Prepare the table headers and rows
    const tableColumn = ['Date', 'Details', 'Total'];
    const tableRows = [];

    profile.orders.forEach(order => {
      const orderData = [order.date, order.details, order.total];
      tableRows.push(orderData);
    });

    // Add the table using autoTable plugin
    doc.autoTable({
      startY: 30,
      head: [tableColumn],
      body: tableRows,
    });

    // Save the PDF
    doc.save('OrderHistory.pdf');
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq6bYaBgumx1Pm6C1ftwZNhvTiwIIGT5Rm6Q&s"
          alt="Student Profile"
          className="profile-pic"
        />
        <div className="profile-info">
          {isEditing ? (
            <form onSubmit={saveProfile}>
              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleChange}
                className="profile-input"
              />
              <input
                type="text"
                name="studentId"
                value={profile.studentId}
                onChange={handleChange}
                className="profile-input"
              />
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
                className="profile-input"
              />
              <button type="submit" className="save-btn">
                Save
              </button>
            </form>
          ) : (
            <>
              <h1 className="student-name">{profile.name}</h1>
              <p className="student-id">ID: {profile.studentId}</p>
              <p className="student-email">{profile.email}</p>
              <button onClick={toggleEdit} className="edit-profile-btn">
                Edit Profile
              </button>
            </>
          )}
        </div>
      </div>

      <div className="meal-preferences">
        <h2 className="section-title">Favourites</h2>
        <p className="preference-item">{profile.favourites.join(', ')}</p>
      </div>

      <div className="order-history">
        <div className='order-history-header'>
          <h2 className="section-title">Order History</h2>
          <button onClick={downloadOrderHistoryPDF} className="download-pdf-btn">
            as PDF
          </button>
        </div>
        
        {profile.orders.map((order, index) => (
          <div key={index} className="order-item">
            <p className="order-date">{order.date}</p>
            <p className="order-details">{order.details}</p>
            <p className="order-total">Total: {order.total}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentProfile;
