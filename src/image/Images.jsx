import React, { useState } from "react";
import MultipleImages from "./MultipleImages";
import SelectedImage from "./SelectedImage";
import "./images.css";

export default function Images() {
  const images = [
    {
      id: 1,
      title: "Leaf",
      url: "https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg",
    },
    {
      id: 2,
      title: "Flower",
      url: "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg",
    },
    {
      id: 3,
      title: "Tree",
      url: "https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzIyODE5MDcxfA&ixlib=rb-4.0.3",
    },
    {
      id: 4,
      title: "Trees",
      url: "https://media.istockphoto.com/id/1419410282/photo/silent-forest-in-spring-with-beautiful-bright-sun-rays.jpg?s=612x612&w=0&k=20&c=UHeb1pGOw6ozr6utsenXHhV19vW6oiPIxDqhKCS2Llk=",
    },
    {
      id: 5,
      title: "Sunshine",
      url: "https://images.pexels.com/photos/355508/pexels-photo-355508.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: 6,
      title: "Farming",
      url: "https://iso.500px.com/wp-content/uploads/2018/05/Blog-marketplace-getty500px-48429366-nologo-3000x2000.png",
    },
    {
      id: 7,
      title: "Rose",
      url: "https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?cs=srgb&dl=pexels-pixabay-56866.jpg&fm=jpg",
    },
    {
      id: 8,
      title: "Tree Shadow",
      url: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736881_640.jpg",
    },
    {
      id: 9,
      title: "Icecream",
      url: "https://img.freepik.com/free-photo/colorful-summer-treat-melting-ice-cream-generative-ai_188544-12424.jpg",
    },
    {
      id: 10,
      title: "Land",
      url: "https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg",
    },
  ];
  const [selectedImage, setSelectedImage] = useState(images?.[0]);
  const clickedImage = (image) => {
    setSelectedImage(image);
  };
  return (
    <div className="imageContainer">
      <MultipleImages clickedImage={clickedImage} images={images} />
      <SelectedImage selectedImage={selectedImage} />
    </div>
  );
}
