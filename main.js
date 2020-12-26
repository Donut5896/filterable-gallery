//selecting all required element
const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".image");

window.onload = () => {
    //when user click on filter buttons
    filterItem.onclick = (selectedItem) => {

        //if user clicked on filterItem div
        if(selectedItem.target.classList.contains("item")){

            //remove and add active class 
           filterItem.querySelector(".active").classList.remove("active");
           selectedItem.target.classList.add("active");

            //get data-name of selected items and storing in filterName
           let filterName = selectedItem.target.getAttribute("data-name");
           filterImg.forEach((image)=>{
               //get image data-name value
               let filterImages = image.getAttribute("data-name");

               if((filterImages == filterName) || filterName == "all"){
                    image.classList.add("show");
                    image.classList.remove("hide");
               }else{
                   image.classList.add("hide");
                   image.classList.remove("show");
               }
           });
    
        }
    }
    for(let index = 0; index < filterImg.length; index++){
        //add onclick attribute in all available images
        filterImg[index].setAttribute("onclick", "preview(this)");
    }

}

// preview box
const previewBox = document.querySelector(".preview-box"),
previewImg = previewBox.querySelector("img"),
categoryName = previewBox.querySelector(".title p"),
closeIcon = previewBox.querySelector(".icon"),
shadow = document.querySelector(".shadow");

//full screen preview function
function preview(element){
    //remove the scrollbar of the body when user clicked on any images
    document.querySelector("body").style.overflow = "hidden";
    //get user clicked img source link and store in a variable
    let selectedPrevImg = element.querySelector("img").src;
    //get user clicked data-name value

    let selectedImgCategory = element.getAttribute("data-name")
    //pass the data-name value to categoryName
    categoryName.textContent = selectedImgCategory;
    //pass clicked img source to preview img box
    previewImg.src = selectedPrevImg;
    //show the preview box
    previewBox.classList.add("show");
    //shadow light grey background
    shadow.classList.add("show");

    //close btn
    closeIcon.onclick = () => {
        previewBox.classList.remove("show");
        shadow.classList.remove("show");
        document.querySelector("body").style.overflow = "scroll";
    }
}