import React, { useState } from 'react';
import './EditProfile.css';

const EditProfile = ({ user, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    bio: user?.bio || '',
    location: user?.location || '',
    phone: user?.phone || ''
  });

  const [avatar, setAvatar] = useState(user?.avatar || '👤');

  const avatars = ['👤', '👨', '👩', '🧑', '👦', '👧'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSave) {
      onSave({
        ...formData,
        avatar: avatar
      });
    }
  };

  return (
    <div className="edit-profile-overlay">
      <div className="edit-profile-card">
        <div className="edit-header">
          <h2>Edit Profil</h2>
          <button className="close-btn" onClick={onCancel}>×</button>
        </div>

        <form onSubmit={handleSubmit} className="edit-form">
          {/* Avatar Selection */}
          <div className="avatar-selection">
            <label>Pilih Avatar</label>
            <div className="avatar-grid">
              {avatars.map((av, index) => (
                <div
                  key={index}
                  className={`avatar-item ${avatar === av ? 'selected' : ''}`}
                  onClick={() => setAvatar(av)}
                >
                  {av}
                </div>
              ))}
            </div>
          </div>

          {/* Form Fields */}
          <div className="form-group">
            <label>Nama Lengkap</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Nama Anda"
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="email@example.com"
            />
          </div>

          <div className="form-group">
            <label>Tentang Saya</label>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              placeholder="Deskripsikan diri Anda..."
              rows="3"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Lokasi</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Kota, Negara"
              />
            </div>

            <div className="form-group">
              <label>Telepon</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+62 xxx xxxx xxxx"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="form-actions">
            <button type="button" className="btn-cancel" onClick={onCancel}>
              Batal
            </button>
            <button type="submit" className="btn-save">
              Simpan Perubahan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;