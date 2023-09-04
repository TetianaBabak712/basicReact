import React from "react";
import Rating from "@mui/material/Rating";
import ShareIcon from '@mui/icons-material/Share';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import "../Footer/footer.css";  




function Header({ name, rating, genres=[], premiered, image, runtime, language }) {
  return (
    
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "start",
        width: "100%",
        padding: "20px",
      }}
    >
    
      <div style={{ marginLeft: "0.2rem" }}>
        <div style={{ display: "flex", alignItems: "left", fontSize: "1em" }}>
<<<<<<< HEAD
          <h1 style={{ color: "#fff", textTransform: "uppercase"}}>{name}</h1>
=======
          <h1 style={{ color: "rgba(228, 228, 228)", textTransform: "uppercase"}}>{name}</h1>
>>>>>>> f4e99e1 (add header)
          <p
            style={{
              display: "flex",
              alignItems: "center",
              paddingLeft: "30px",
            }}
          >
            {rating && rating.average !== null && (
              <>
                <Rating
                  name="half-rating-read"
                  value={rating.average / 2}
                  max={5}
                  size="medium"
<<<<<<< HEAD
                  style={{ color: "#D12E27", marginRight: "5px" }}
=======
                  style={{ color: "rgba(209, 46, 39)", marginRight: "5px" }}
>>>>>>> f4e99e1 (add header)
                  readOnly
                />
                <span
                  style={{
                    color: "#fff",
<<<<<<< HEAD
                    fontSize: "15px",
=======
                    fontSize: "1em",
>>>>>>> f4e99e1 (add header)
                  }}
                >
                  {rating.average.toFixed(1)}
                </span>
              </>
            )}
          </p>
        </div>
        
          <p
            style={{
<<<<<<< HEAD
              color: "#D12E27",
=======
              color: "rgb(182, 42,36)",
>>>>>>> f4e99e1 (add header)
              fontSize: "20px",
              margin: "0",
            }}
          >
          {genres[0]}
            
          </p>
          
          <p
            style={{
              color: "#fff",
<<<<<<< HEAD
              fontSize: "20px",
=======
              fontSize: "1.2em",
>>>>>>> f4e99e1 (add header)
            }}
          >
          {premiered} • {runtime} min • {language}</p>
        
        

        <FavoriteBorderIcon className='icon' fontSize="medium" style={{margin: "10px"}}/>
        <BookmarkAddIcon className='icon' fontSize="medium" style={{margin: "10px"}}/>
        <ShareIcon className='icon' fontSize="medium" style={{margin: "10px"}}/>
      </div>
      <div>
        <img
          src={image ? image.medium : ""}
          alt={name}
          style={{ width: "70%", height: "auto", marginRight: "5rem" }}
        />
      </div>
    </div>
    
  );
}

export default Header;