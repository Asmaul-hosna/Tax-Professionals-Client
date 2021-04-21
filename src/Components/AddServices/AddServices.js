import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';


const AddServices = () => {
    const {handleSubmit} = useForm();
    const [imageURL,setIMageURL] = useState(null);

    const onSubmit = data => {
      const serviceData = {
        name: data.name,
        price:data.price,
        imageURL: imageURL

    };
    const url = `http://localhost:5000/addService`
    console.log(serviceData);
    fetch(url,{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(serviceData)
    })
    .then(res => console.log('server side response'))
};


    const handleImageUpload = service => {
        console.log(service.target.files[0]);
        const imageData = new FormData();
        imageData.set('key','c454ea57d362c1ad6aaf15c5763156c5');
        imageData.append('image',service.target.files[0]);
        axios.post('https://api.imgbb.com/1/upload', 
            imageData)

          .then(function (response) {
            setIMageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });

    }

    return (
        <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#FEEEDF" }}>
            <h5 className="text-brand">Add Your Services</h5>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div class="form-group">
                    <label for="exampleInputPassword1">Name</label>
                    <input type="text" class="form-control" name="name" placeholder="Name" />
                </div>

                <div class="form-group">
                    <label for="exampleInputPassword1">Price</label>
                    <input type="text" class="form-control" name="price" placeholder="Price" />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Upload a image</label>
                    <input type="file" onChange={handleImageUpload} class="form-control" name="exampleRequired" placeholder="Picture" />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>

        </div>
    );
};

export default AddServices;