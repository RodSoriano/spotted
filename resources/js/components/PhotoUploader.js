import React from 'react';
import { useForm } from '@inertiajs/inertia-react';

const PhotoUploader = ({ onPhotoUpload }) => {
  const { data, setData } = useForm({
    name: null,
  });

  const handleNameChange = (e) => {
    const file = e.target.files[0];

    if (file && file.type.startsWith('image/')) {
      setData('name', file);
      onPhotoUpload(data);
    } else {
      e.target.value = null;
      alert('Please select a valid image file (PNG, JPG, JPEG).');
    }
  };

  return (
    <div className="mb-3">
      <input
        type="file"
        accept="image/*"
        onChange={handleNameChange}
        className="border p-2 rounded-lg"
      />
    </div>
  );
};

export default PhotoUploader;
