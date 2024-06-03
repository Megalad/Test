imageList=[
    'Image/sportswear-tech-fleece-mens-crew-xN0gwb.png-8.jpeg',
    'Image/sportswear-tech-fleece-mens-crew-xN0gwb-4.png',
    'Image/sportswear-tech-fleece-mens-crew-xN0gwb-5.png',
    'Image/sportswear-tech-fleece-mens-crew-xN0gwb-6.png',
    'Image/sportswear-tech-fleece-mens-crew-xN0gwb-7.png',
    'Image/sportswear-tech-fleece-mens-crew-xN0gwb.png-9.jpeg',
    'Image/sportswear-tech-fleece-mens-crew-xN0gwb.png-11.jpeg',
    'Image/sportswear-tech-fleece-mens-crew-xN0gwb.png-10.jpeg',
    'Image/sportswear-tech-fleece-mens-crew-xN0gwb.png-12.jpeg'
];


colorChartDiv = document.querySelector('.color-chart');

        imageList.forEach(src => {
            const img = document.createElement('img');
            img.src = src;
            img.alt = 'Color option';
            img.className = 'img-thumbnail'; // Add some styling classes
            

            img.onclick=function()
            {
                changeImage(src);
            }
            colorChartDiv.appendChild(img);
        });



function changeImage(imgSrc)
{
    mainImage=document.getElementById("main-image");
    mainImage.src=imgSrc
}
