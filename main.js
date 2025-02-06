let fullImage = document.querySelector('.fullImage')
let fullImageView = document.querySelector('.fullImageView')
let previousImage = document.querySelector('.fa-angles-left')
let nextImage = document.querySelector('.fa-angles-right')
let gallery = document.querySelector('.gallery')
let downloadImage = document.querySelector(".downloadImage")
let downloadBtn = document.querySelector(".downloadBtn")

const Images = ["Images/bikeImage1.jpg" , "Images/bikeImage2.jpg",
                "Images/bikeImage3.jpg", "Images/bikeImage4.jpg",
                "Images/bikeImage5.jpg","Images/bikeImage6.jpg",
                "Images/bikeImage7.jpg", "Images/bikeImage8.jpg",
                "Images/bikeImage9.jpg", "Images/bikeImage10.jpg",
                "Images/bikeImage11.jpg" , "Images/bikeImage12.jpg",
                "Images/bikeImage13.jpg", "Images/bikeImage14.jpg",
                "Images/bikeImage15.jpg","Images/bikeImage16.jpg",
                "Images/bikeImage17.jpg", "Images/bikeImage18.jpg",
                "Images/bikeImage19.jpg", "Images/bikeImage20.jpg", "Images/bikeImage21.jpg"
            ];
         
let i;


const CurrImage = (j) => {
    console.log(j)
    fullImageView.style.display ='flex'
    gallery.style.display = 'none'
    fullImage.src = Images[j]
    i = j;
}


const download = () => {
    downloadImage.href = Images[i]
    downloadImage.download = Images[i]
}


const viewNextImage = () => {
    i++;
    fullImage.src = Images[i]
    if(i >= 21){
        i=0;
    }
}

const viewPreviousImage = () => {
    i--;
    fullImage.src = Images[i]
    if(i <= 0){
        i=21;
    }
}

const closePreview = () => {
    fullImageView.style.display = 'none'
    gallery.style.display = 'flex'

}

