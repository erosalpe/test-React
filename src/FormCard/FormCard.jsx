import React, { useState, useEffect } from 'react';
function FormCard({addUser, addUsersDataLength}){
    
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedName, setSelectedName] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  // Recupera l'immagine dal LocalStorage al montaggio del componente
  useEffect(() => {
    const savedImage = localStorage.getItem('uploadedImage');
    if (savedImage) {
      setPreviewUrl(savedImage);
    }
  }, []);

  const handleNameChange = (e) => {
    setSelectedName(e.target.value);
  }

  const handleJobChange = (e) => {
    setSelectedJob(e.target.value);
  }

  // Gestisce il caricamento dell'immagine
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64Image = reader.result;
        setSelectedImage(base64Image);
        setPreviewUrl(base64Image);
        localStorage.setItem('uploadedImage', base64Image);
      };
      reader.readAsDataURL(file);
    }
  };

  // Gestisce l'invio del form
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Immagine caricata:', selectedImage);
    if (selectedImage && selectedName && selectedJob) {
        addUser({
            "id": addUsersDataLength + 1,
            "name": selectedName,
            "job": selectedJob,
            "image": selectedImage
         });
    }
  };

  return (
    <div>
      <h4>Lavora con noi:</h4>
      <form onSubmit={handleSubmit} className="d-flex flex-column align-items-start gap-3">

        <label htmlFor="nome">Nome e Cognome:</label>
        <input type="text" placeholder='Nome e Cognome' id="nome" onChange={handleNameChange}/>

        <label htmlFor="nome">Lavoro:</label>
        <input type="text" placeholder='Lavoro' id="lavoro" onChange={handleJobChange}/>

        <label htmlFor="profilePic">Immagine Profilo:</label>
        <input type="file" accept="image/*" onChange={handleImageChange} id="profilePic"/>
        <button type="submit" className="btn btn-warning">Invia</button>
      </form>
    </div>
  );
}

export default FormCard;