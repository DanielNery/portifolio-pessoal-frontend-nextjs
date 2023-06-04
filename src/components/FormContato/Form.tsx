import { FormContainer, Input, TextArea  } from './styles';
import React, { useState } from 'react';

import Loading from '../Loadingzin';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function Form(){

    const [data, setData] = useState<any>(true);
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        setData(false);
        e.preventDefault();
    
        try {
        
          const response = await axios.post(`https://danielpontesnery.onrender.com/api/v1/contato/danielpontesnery@gmail.com`, formData);
          setData(response.data);
          toast.success("Mensagem enviada com sucesso, em até 48 horas retornaremos o contato!")
          console.log('Form submitted:', response.data);
        } catch (error) {
          toast.error("Falha ao enviar mensagem, tente novamente mais tarde.")
        }
      };

    return (
        <FormContainer onSubmit={handleSubmit}>
            <Input placeholder="Nome" name="name" value={formData.name} onChange={handleChange} required />
            <Input placeholder="E-mail" name="email" value={formData.email} onChange={handleChange} type="email" required />
            <TextArea placeholder="Mensagem" name="message" value={formData.message} onChange={handleChange} required/>
            {data ?  <button type="submit">ENVIAR</button> : <button type="submit" disabled ><Loading/> </button>}
        </FormContainer>
    )
}