import { useState } from 'react'
import './App.css'

function App() {

  // Initialize state to keep track of the current image index

  const [currentImageIndex, setCurrentImageIndex] = useState(1);



  // Define an array of image URLs
  const images = [
    'https://c8.alamy.com/compfr/a615gh/la-gare-routiere-de-trivandrum-thiruvananthapuram-kerala-inde-a615gh.jpg',
    'https://www.tourism-of-india.com/pictures/travel_guide/things/nature-84.jpeg',
    'https://blog.grabon.in/wp-content/uploads/2017/04/kate-point-15-incredible-natural-wonders-of-india-1024x649.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBU5K5v14pxfbim5x0cmBc2qfpZGvGYi1hOg&usqp=CAU',
    'https://www.goway.com/media/cache/a7/e7/a7e73526450f434a971b9e5338f8a05c.jpg',
    'https://c8.alamy.com/comp/2JTKR4H/leopard-in-the-tree-leopard-on-a-tree-leopard-resting-leopard-looking-at-prey-leopard-watching-leopard-from-yala-npark-sri-lanka-2JTKR4H.jpg',
    'https://c8.alamy.com/comp/2JTJYKD/leopard-in-the-tree-leopard-on-a-tree-leopard-resting-leopard-looking-at-prey-leopard-watching-leopard-from-yala-npark-sri-lanka-2JTJYKD.jpg','https://media.istockphoto.com/id/1217449042/de/foto/wild-bengalischer-tiger-von-terai-region-wald-bei-uttarakhand-india-panthera-tigris.jpg?s=612x612&w=0&k=20&c=HYxbn2bSMkIHgjPyb96C5aEa--4GqRZqt1yTHthcpiI=',
    'https://p0.pxfuel.com/preview/543/251/580/animalsnature-cat-cats-india.jpg',
    'https://www.india-tours.com/blog/wp-content/uploads/2021/09/best-place-in-india.jpg',
    'https://media.easemytrip.com/media/Blog/India/636965375383792632/636965375383792632Ca026D.jpg'
  ];

  // Function to handle button click and change the image
  const changeImage = () => {
    // Calculate the next image index
    const nextImage = (currentImageIndex + 1) % images.length

    // Update the state to reflect the new image index
    setCurrentImageIndex(nextImage);
  };

  return (


    <div style={{ width: '100%', height: '100vh', backgroundColor:'violet' }}>
      <div className='div1'>
        <button style={{ height: '70px', width: '200px' }} className='btn1' onClick={changeImage} >Change Image</button>

      </div>
      {/* <img style={{width:'200px', height:'300px'}} src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} /> */}
      <img style={{ width: '1000px', height: '500px', marginTop: '50px', marginLeft: '250px', border: '1px solid', borderRadius:'20px', boxShadow:'20px 20px 20px 0 lightgreen' }} src={images[currentImageIndex]} alt="" />

    </div>
  )
}

export default App
